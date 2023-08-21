import{s as Pu,d as pt,n as Ns,r as Cu}from"../chunks/scheduler.3071f4f7.js";import{S as Su,i as Vu,d as lr,v as Du,j as _t,s as Ue,o as ht,A as bu,k as yt,g as It,c as Be,l as Zr,p as dt,B as Ms,m as le,z as O,a as ge,C as Os,q as We}from"../chunks/index.9c85c208.js";import{g as ku}from"../chunks/globals.7f7f1b26.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Nu=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Ko={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,u=c?e[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray($o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Nu(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new Mu;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const T=u<<6&192|h;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Mu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ou=function(e){const t=$o(e);return Ko.encodeByteArray(t,!0)},Gn=function(e){return Ou(e).replace(/\./g,"")},xu=function(e){try{return Ko.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=()=>Fu().__FIREBASE_DEFAULTS__,Uu=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Bu=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&xu(e[1]);return t&&JSON.parse(t)},Ho=()=>{try{return Lu()||Uu()||Bu()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ju=e=>{var t,n;return(n=(t=Ho())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},qu=e=>{const t=ju(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Go=()=>{var e;return(e=Ho())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Gn(JSON.stringify(n)),Gn(JSON.stringify(o)),a].join(".")}function Ku(){try{return typeof indexedDB=="object"}catch{return!1}}function Hu(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu="FirebaseError";class ke extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Gu,Object.setPrototypeOf(this,ke.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wo.prototype.create)}}class Wo{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Wu(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ke(i,a,r)}}function Wu(e,t){return e.replace(Qu,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Qu=/\{\$([^}]+)}/g;function ti(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(xs(s)&&xs(o)){if(!ti(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function xs(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(e){return e&&e._delegate?e._delegate:e}class tn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new zu;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Yu(t))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Yt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Yt){return this.instances.has(t)}getOptions(t=Yt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ju(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Yt){return this.component?this.component.multipleInstances?t:Yt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ju(e){return e===Yt?void 0:e}function Yu(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Xu(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(N||(N={}));const tl={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},el=N.INFO,nl={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},rl=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=nl[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Qo{constructor(t){this.name=t,this._logLevel=el,this._logHandler=rl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in N))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?tl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...t),this._logHandler(this,N.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...t),this._logHandler(this,N.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,N.INFO,...t),this._logHandler(this,N.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,N.WARN,...t),this._logHandler(this,N.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...t),this._logHandler(this,N.ERROR,...t)}}const il=(e,t)=>t.some(n=>e instanceof n);let Fs,Ls;function sl(){return Fs||(Fs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ol(){return Ls||(Ls=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xo=new WeakMap,ei=new WeakMap,Jo=new WeakMap,Fr=new WeakMap,Mi=new WeakMap;function al(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(zt(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Xo.set(n,e)}).catch(()=>{}),Mi.set(t,e),t}function cl(e){if(ei.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});ei.set(e,t)}let ni={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ei.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Jo.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function ul(e){ni=e(ni)}function ll(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Lr(this),t,...n);return Jo.set(r,t.sort?t.sort():[t]),zt(r)}:ol().includes(e)?function(...t){return e.apply(Lr(this),t),zt(Xo.get(this))}:function(...t){return zt(e.apply(Lr(this),t))}}function hl(e){return typeof e=="function"?ll(e):(e instanceof IDBTransaction&&cl(e),il(e,sl())?new Proxy(e,ni):e)}function zt(e){if(e instanceof IDBRequest)return al(e);if(Fr.has(e))return Fr.get(e);const t=hl(e);return t!==e&&(Fr.set(e,t),Mi.set(t,e)),t}const Lr=e=>Mi.get(e);function dl(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=zt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(zt(o.result),c.oldVersion,c.newVersion,zt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const fl=["get","getKey","getAll","getAllKeys","count"],ml=["put","add","delete","clear"],Ur=new Map;function Us(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ur.get(t))return Ur.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=ml.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||fl.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return Ur.set(t,s),s}ul(e=>({...e,get:(t,n,r)=>Us(t,n)||e.get(t,n,r),has:(t,n)=>!!Us(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pl(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pl(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ri="@firebase/app",Bs="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=new Qo("@firebase/app"),_l="@firebase/app-compat",yl="@firebase/analytics-compat",El="@firebase/analytics",Tl="@firebase/app-check-compat",vl="@firebase/app-check",Il="@firebase/auth",wl="@firebase/auth-compat",Al="@firebase/database",Rl="@firebase/database-compat",Pl="@firebase/functions",Cl="@firebase/functions-compat",Sl="@firebase/installations",Vl="@firebase/installations-compat",Dl="@firebase/messaging",bl="@firebase/messaging-compat",kl="@firebase/performance",Nl="@firebase/performance-compat",Ml="@firebase/remote-config",Ol="@firebase/remote-config-compat",xl="@firebase/storage",Fl="@firebase/storage-compat",Ll="@firebase/firestore",Ul="@firebase/firestore-compat",Bl="firebase",jl="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii="[DEFAULT]",ql={[ri]:"fire-core",[_l]:"fire-core-compat",[El]:"fire-analytics",[yl]:"fire-analytics-compat",[vl]:"fire-app-check",[Tl]:"fire-app-check-compat",[Il]:"fire-auth",[wl]:"fire-auth-compat",[Al]:"fire-rtdb",[Rl]:"fire-rtdb-compat",[Pl]:"fire-fn",[Cl]:"fire-fn-compat",[Sl]:"fire-iid",[Vl]:"fire-iid-compat",[Dl]:"fire-fcm",[bl]:"fire-fcm-compat",[kl]:"fire-perf",[Nl]:"fire-perf-compat",[Ml]:"fire-rc",[Ol]:"fire-rc-compat",[xl]:"fire-gcs",[Fl]:"fire-gcs-compat",[Ll]:"fire-fst",[Ul]:"fire-fst-compat","fire-js":"fire-js",[Bl]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=new Map,si=new Map;function zl(e,t){try{e.container.addComponent(t)}catch(n){re.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Qn(e){const t=e.name;if(si.has(t))return re.debug(`There were multiple attempts to register component ${t}.`),!1;si.set(t,e);for(const n of Wn.values())zl(n,e);return!0}function $l(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},$t=new Wo("app","Firebase",Kl);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw $t.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl=jl;function Yo(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ii,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw $t.create("bad-app-name",{appName:String(i)});if(n||(n=Go()),!n)throw $t.create("no-options");const s=Wn.get(i);if(s){if(ti(n,s.options)&&ti(r,s.config))return s;throw $t.create("duplicate-app",{appName:i})}const o=new Zu(i);for(const c of si.values())o.addComponent(c);const a=new Hl(n,r,o);return Wn.set(i,a),a}function Wl(e=ii){const t=Wn.get(e);if(!t&&e===ii&&Go())return Yo();if(!t)throw $t.create("no-app",{appName:e});return t}function pe(e,t,n){var r;let i=(r=ql[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),re.warn(a.join(" "));return}Qn(new tn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql="firebase-heartbeat-database",Xl=1,en="firebase-heartbeat-store";let Br=null;function Zo(){return Br||(Br=dl(Ql,Xl,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(en)}}}).catch(e=>{throw $t.create("idb-open",{originalErrorMessage:e.message})})),Br}async function Jl(e){try{return await(await Zo()).transaction(en).objectStore(en).get(ta(e))}catch(t){if(t instanceof ke)re.warn(t.message);else{const n=$t.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});re.warn(n.message)}}}async function js(e,t){try{const r=(await Zo()).transaction(en,"readwrite");await r.objectStore(en).put(t,ta(e)),await r.done}catch(n){if(n instanceof ke)re.warn(n.message);else{const r=$t.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});re.warn(r.message)}}}function ta(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl=1024,Zl=30*24*60*60*1e3;class th{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=qs();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Zl}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=qs(),{heartbeatsToSend:n,unsentEntries:r}=eh(this._heartbeatsCache.heartbeats),i=Gn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function qs(){return new Date().toISOString().substring(0,10)}function eh(e,t=Yl){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),zs(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),zs(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class nh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ku()?Hu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Jl(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return js(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return js(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function zs(e){return Gn(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(e){Qn(new tn("platform-logger",t=>new gl(t),"PRIVATE")),Qn(new tn("heartbeat",t=>new th(t),"PRIVATE")),pe(ri,Bs,e),pe(ri,Bs,"esm2017"),pe("fire-js","")}rh("");var ih="firebase",sh="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pe(ih,sh,"app");var oh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p,Oi=Oi||{},R=oh||self;function hr(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function _n(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function ah(e){return Object.prototype.hasOwnProperty.call(e,jr)&&e[jr]||(e[jr]=++ch)}var jr="closure_uid_"+(1e9*Math.random()>>>0),ch=0;function uh(e,t,n){return e.call.apply(e.bind,arguments)}function lh(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function ot(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ot=uh:ot=lh,ot.apply(null,arguments)}function Mn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function Q(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Xt(){this.s=this.s,this.o=this.o}var hh=0;Xt.prototype.s=!1;Xt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),hh!=0)&&ah(this)};Xt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ea=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function xi(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function $s(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(hr(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function at(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}at.prototype.h=function(){this.defaultPrevented=!0};var dh=function(){if(!R.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{R.addEventListener("test",()=>{},t),R.removeEventListener("test",()=>{},t)}catch{}return e}();function nn(e){return/^[\s\xa0]*$/.test(e)}function dr(){var e=R.navigator;return e&&(e=e.userAgent)?e:""}function Pt(e){return dr().indexOf(e)!=-1}function Fi(e){return Fi[" "](e),e}Fi[" "]=function(){};function fh(e,t){var n=sd;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var mh=Pt("Opera"),we=Pt("Trident")||Pt("MSIE"),na=Pt("Edge"),oi=na||we,ra=Pt("Gecko")&&!(dr().toLowerCase().indexOf("webkit")!=-1&&!Pt("Edge"))&&!(Pt("Trident")||Pt("MSIE"))&&!Pt("Edge"),gh=dr().toLowerCase().indexOf("webkit")!=-1&&!Pt("Edge");function ia(){var e=R.document;return e?e.documentMode:void 0}var ai;t:{var qr="",zr=function(){var e=dr();if(ra)return/rv:([^\);]+)(\)|;)/.exec(e);if(na)return/Edge\/([\d\.]+)/.exec(e);if(we)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(gh)return/WebKit\/(\S+)/.exec(e);if(mh)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(zr&&(qr=zr?zr[1]:""),we){var $r=ia();if($r!=null&&$r>parseFloat(qr)){ai=String($r);break t}}ai=qr}var ci;if(R.document&&we){var Ks=ia();ci=Ks||parseInt(ai,10)||void 0}else ci=void 0;var ph=ci;function rn(e,t){if(at.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(ra){t:{try{Fi(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:_h[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&rn.$.h.call(this)}}Q(rn,at);var _h={2:"touch",3:"pen",4:"mouse"};rn.prototype.h=function(){rn.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var yn="closure_listenable_"+(1e6*Math.random()|0),yh=0;function Eh(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++yh,this.fa=this.ia=!1}function fr(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Li(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Th(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function sa(e){const t={};for(const n in e)t[n]=e[n];return t}const Hs="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function oa(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<Hs.length;s++)n=Hs[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function mr(e){this.src=e,this.g={},this.h=0}mr.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=li(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Eh(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function ui(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=ea(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(fr(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function li(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var Ui="closure_lm_"+(1e6*Math.random()|0),Kr={};function aa(e,t,n,r,i){if(r&&r.once)return ua(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)aa(e,t[s],n,r,i);return null}return n=qi(n),e&&e[yn]?e.O(t,n,_n(r)?!!r.capture:!!r,i):ca(e,t,n,!1,r,i)}function ca(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=_n(i)?!!i.capture:!!i,a=ji(e);if(a||(e[Ui]=a=new mr(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=vh(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)dh||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(ha(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function vh(){function e(n){return t.call(e.src,e.listener,n)}const t=Ih;return e}function ua(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ua(e,t[s],n,r,i);return null}return n=qi(n),e&&e[yn]?e.P(t,n,_n(r)?!!r.capture:!!r,i):ca(e,t,n,!0,r,i)}function la(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)la(e,t[s],n,r,i);else r=_n(r)?!!r.capture:!!r,n=qi(n),e&&e[yn]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=li(s,n,r,i),-1<n&&(fr(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=ji(e))&&(t=e.g[t.toString()],e=-1,t&&(e=li(t,n,r,i)),(n=-1<e?t[e]:null)&&Bi(n))}function Bi(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[yn])ui(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ha(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ji(t))?(ui(n,e),n.h==0&&(n.src=null,t[Ui]=null)):fr(e)}}}function ha(e){return e in Kr?Kr[e]:Kr[e]="on"+e}function Ih(e,t){if(e.fa)e=!0;else{t=new rn(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Bi(e),e=n.call(r,t)}return e}function ji(e){return e=e[Ui],e instanceof mr?e:null}var Hr="__closure_events_fn_"+(1e9*Math.random()>>>0);function qi(e){return typeof e=="function"?e:(e[Hr]||(e[Hr]=function(t){return e.handleEvent(t)}),e[Hr])}function W(){Xt.call(this),this.i=new mr(this),this.S=this,this.J=null}Q(W,Xt);W.prototype[yn]=!0;W.prototype.removeEventListener=function(e,t,n,r){la(this,e,t,n,r)};function Z(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new at(t,e);else if(t instanceof at)t.target=t.target||e;else{var i=t;t=new at(r,e),oa(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=On(o,r,!0,t)&&i}if(o=t.g=e,i=On(o,r,!0,t)&&i,i=On(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=On(o,r,!1,t)&&i}W.prototype.N=function(){if(W.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)fr(n[r]);delete e.g[t],e.h--}}this.J=null};W.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};W.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function On(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&ui(e.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var zi=R.JSON.stringify;class wh{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Ah(){var e=$i;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Rh{constructor(){this.h=this.g=null}add(t,n){const r=da.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var da=new wh(()=>new Ph,e=>e.reset());class Ph{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Ch(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Sh(e){R.setTimeout(()=>{throw e},0)}let sn,on=!1,$i=new Rh,fa=()=>{const e=R.Promise.resolve(void 0);sn=()=>{e.then(Vh)}};var Vh=()=>{for(var e;e=Ah();){try{e.h.call(e.g)}catch(n){Sh(n)}var t=da;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}on=!1};function gr(e,t){W.call(this),this.h=e||1,this.g=t||R,this.j=ot(this.qb,this),this.l=Date.now()}Q(gr,W);p=gr.prototype;p.ga=!1;p.T=null;p.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Z(this,"tick"),this.ga&&(Ki(this),this.start()))}};p.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ki(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}p.N=function(){gr.$.N.call(this),Ki(this),delete this.g};function Hi(e,t,n){if(typeof e=="function")n&&(e=ot(e,n));else if(e&&typeof e.handleEvent=="function")e=ot(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:R.setTimeout(e,t||0)}function ma(e){e.g=Hi(()=>{e.g=null,e.i&&(e.i=!1,ma(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Dh extends Xt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:ma(this)}N(){super.N(),this.g&&(R.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function an(e){Xt.call(this),this.h=e,this.g={}}Q(an,Xt);var Gs=[];function ga(e,t,n,r){Array.isArray(n)||(n&&(Gs[0]=n.toString()),n=Gs);for(var i=0;i<n.length;i++){var s=aa(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function pa(e){Li(e.g,function(t,n){this.g.hasOwnProperty(n)&&Bi(t)},e),e.g={}}an.prototype.N=function(){an.$.N.call(this),pa(this)};an.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function pr(){this.g=!0}pr.prototype.Ea=function(){this.g=!1};function bh(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function kh(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function me(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Mh(e,n)+(r?" "+r:"")})}function Nh(e,t){e.info(function(){return"TIMEOUT: "+t})}pr.prototype.info=function(){};function Mh(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return zi(n)}catch{return t}}var ae={},Ws=null;function _r(){return Ws=Ws||new W}ae.Ta="serverreachability";function _a(e){at.call(this,ae.Ta,e)}Q(_a,at);function cn(e){const t=_r();Z(t,new _a(t))}ae.STAT_EVENT="statevent";function ya(e,t){at.call(this,ae.STAT_EVENT,e),this.stat=t}Q(ya,at);function lt(e){const t=_r();Z(t,new ya(t,e))}ae.Ua="timingevent";function Ea(e,t){at.call(this,ae.Ua,e),this.size=t}Q(Ea,at);function En(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return R.setTimeout(function(){e()},t)}var yr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Ta={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Gi(){}Gi.prototype.h=null;function Qs(e){return e.h||(e.h=e.i())}function va(){}var Tn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Wi(){at.call(this,"d")}Q(Wi,at);function Qi(){at.call(this,"c")}Q(Qi,at);var hi;function Er(){}Q(Er,Gi);Er.prototype.g=function(){return new XMLHttpRequest};Er.prototype.i=function(){return{}};hi=new Er;function vn(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new an(this),this.P=Oh,e=oi?125:void 0,this.V=new gr(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ia}function Ia(){this.i=null,this.g="",this.h=!1}var Oh=45e3,di={},Xn={};p=vn.prototype;p.setTimeout=function(e){this.P=e};function fi(e,t,n){e.L=1,e.v=vr(xt(t)),e.s=n,e.S=!0,wa(e,null)}function wa(e,t){e.G=Date.now(),In(e),e.A=xt(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),ba(n.i,"t",r),e.C=0,n=e.l.J,e.h=new Ia,e.g=Ya(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Dh(ot(e.Pa,e,e.g),e.O)),ga(e.U,e.g,"readystatechange",e.nb),t=e.I?sa(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),cn(),bh(e.j,e.u,e.A,e.m,e.W,e.s)}p.nb=function(e){e=e.target;const t=this.M;t&&Ct(e)==3?t.l():this.Pa(e)};p.Pa=function(e){try{if(e==this.g)t:{const l=Ct(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||oi||this.g&&(this.h.h||this.g.ja()||Zs(this.g)))){this.J||l!=4||t==7||(t==8||0>=h?cn(3):cn(2)),Tr(this);var n=this.g.da();this.ca=n;e:if(Aa(this)){var r=Zs(this.g);e="";var i=r.length,s=Ct(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zt(this),Qe(this);var o="";break e}this.h.i=new R.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,kh(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!nn(a)){var u=a;break e}}u=null}if(n=u)me(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,mi(this,n);else{this.i=!1,this.o=3,lt(12),Zt(this),Qe(this);break t}}this.S?(Ra(this,l,o),oi&&this.i&&l==3&&(ga(this.U,this.V,"tick",this.mb),this.V.start())):(me(this.j,this.m,o,null),mi(this,o)),l==4&&Zt(this),this.i&&!this.J&&(l==4?Wa(this.l,this):(this.i=!1,In(this)))}else nd(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,lt(12)):(this.o=0,lt(13)),Zt(this),Qe(this)}}}catch{}finally{}};function Aa(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Ra(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=xh(e,n),i==Xn){t==4&&(e.o=4,lt(14),r=!1),me(e.j,e.m,null,"[Incomplete Response]");break}else if(i==di){e.o=4,lt(15),me(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else me(e.j,e.m,i,null),mi(e,i);Aa(e)&&i!=Xn&&i!=di&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,lt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),es(t),t.M=!0,lt(11))):(me(e.j,e.m,n,"[Invalid Chunked Response]"),Zt(e),Qe(e))}p.mb=function(){if(this.g){var e=Ct(this.g),t=this.g.ja();this.C<t.length&&(Tr(this),Ra(this,e,t),this.i&&e!=4&&In(this))}};function xh(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?Xn:(n=Number(t.substring(n,r)),isNaN(n)?di:(r+=1,r+n>t.length?Xn:(t=t.slice(r,r+n),e.C=r+n,t)))}p.cancel=function(){this.J=!0,Zt(this)};function In(e){e.Y=Date.now()+e.P,Pa(e,e.P)}function Pa(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=En(ot(e.lb,e),t)}function Tr(e){e.B&&(R.clearTimeout(e.B),e.B=null)}p.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Nh(this.j,this.A),this.L!=2&&(cn(),lt(17)),Zt(this),this.o=2,Qe(this)):Pa(this,this.Y-e)};function Qe(e){e.l.H==0||e.J||Wa(e.l,e)}function Zt(e){Tr(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Ki(e.V),pa(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function mi(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||gi(n.i,e))){if(!e.K&&gi(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Zn(n),Ar(n);else break t;ts(n),lt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=En(ot(n.ib,n),6e3));if(1>=Ma(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else te(n,11)}else if((e.K||n.g==e)&&Zn(n),!nn(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const l=u[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=e.g;if(f){const T=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(T){var s=r.i;s.g||T.indexOf("spdy")==-1&&T.indexOf("quic")==-1&&T.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Xi(s,s.h),s.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,x(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Ja(r,r.J?r.pa:null,r.Y),o.K){Oa(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Tr(a),In(a)),r.g=o}else Ha(r);0<n.j.length&&Rr(n)}else u[0]!="stop"&&u[0]!="close"||te(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?te(n,7):Zi(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}cn(4)}catch{}}function Fh(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(hr(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function Lh(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(hr(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Ca(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(hr(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Lh(e),r=Fh(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var Sa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Uh(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ne(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof ne){this.h=e.h,Jn(this,e.j),this.s=e.s,this.g=e.g,Yn(this,e.m),this.l=e.l;var t=e.i,n=new un;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Xs(this,n),this.o=e.o}else e&&(t=String(e).match(Sa))?(this.h=!1,Jn(this,t[1]||"",!0),this.s=ze(t[2]||""),this.g=ze(t[3]||"",!0),Yn(this,t[4]),this.l=ze(t[5]||"",!0),Xs(this,t[6]||"",!0),this.o=ze(t[7]||"")):(this.h=!1,this.i=new un(null,this.h))}ne.prototype.toString=function(){var e=[],t=this.j;t&&e.push($e(t,Js,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push($e(t,Js,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push($e(n,n.charAt(0)=="/"?qh:jh,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",$e(n,$h)),e.join("")};function xt(e){return new ne(e)}function Jn(e,t,n){e.j=n?ze(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Yn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Xs(e,t,n){t instanceof un?(e.i=t,Kh(e.i,e.h)):(n||(t=$e(t,zh)),e.i=new un(t,e.h))}function x(e,t,n){e.i.set(t,n)}function vr(e){return x(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ze(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function $e(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Bh),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Bh(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Js=/[#\/\?@]/g,jh=/[#\?:]/g,qh=/[#\?]/g,zh=/[#\?@]/g,$h=/#/g;function un(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Jt(e){e.g||(e.g=new Map,e.h=0,e.i&&Uh(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}p=un.prototype;p.add=function(e,t){Jt(this),this.i=null,e=Ne(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Va(e,t){Jt(e),t=Ne(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Da(e,t){return Jt(e),t=Ne(e,t),e.g.has(t)}p.forEach=function(e,t){Jt(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};p.ta=function(){Jt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};p.Z=function(e){Jt(this);let t=[];if(typeof e=="string")Da(this,e)&&(t=t.concat(this.g.get(Ne(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};p.set=function(e,t){return Jt(this),this.i=null,e=Ne(this,e),Da(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};p.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function ba(e,t,n){Va(e,t),0<n.length&&(e.i=null,e.g.set(Ne(e,t),xi(n)),e.h+=n.length)}p.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Ne(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Kh(e,t){t&&!e.j&&(Jt(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Va(this,r),ba(this,i,n))},e)),e.j=t}var Hh=class{constructor(e,t){this.g=e,this.map=t}};function ka(e){this.l=e||Gh,R.PerformanceNavigationTiming?(e=R.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(R.g&&R.g.Ka&&R.g.Ka()&&R.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Gh=10;function Na(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Ma(e){return e.h?1:e.g?e.g.size:0}function gi(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Xi(e,t){e.g?e.g.add(t):e.h=t}function Oa(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}ka.prototype.cancel=function(){if(this.i=xa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function xa(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return xi(e.i)}var Wh=class{stringify(e){return R.JSON.stringify(e,void 0)}parse(e){return R.JSON.parse(e,void 0)}};function Qh(){this.g=new Wh}function Xh(e,t,n){const r=n||"";try{Ca(e,function(i,s){let o=i;_n(i)&&(o=zi(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Jh(e,t){const n=new pr;if(R.Image){const r=new Image;r.onload=Mn(xn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Mn(xn,n,r,"TestLoadImage: error",!1,t),r.onabort=Mn(xn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Mn(xn,n,r,"TestLoadImage: timeout",!1,t),R.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function xn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function wn(e){this.l=e.fc||null,this.j=e.ob||!1}Q(wn,Gi);wn.prototype.g=function(){return new Ir(this.l,this.j)};wn.prototype.i=function(e){return function(){return e}}({});function Ir(e,t){W.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Ji,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Q(Ir,W);var Ji=0;p=Ir.prototype;p.open=function(e,t){if(this.readyState!=Ji)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ln(this)};p.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||R).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};p.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,An(this)),this.readyState=Ji};p.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ln(this)),this.g&&(this.readyState=3,ln(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof R.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Fa(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Fa(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}p.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?An(this):ln(this),this.readyState==3&&Fa(this)}};p.Za=function(e){this.g&&(this.response=this.responseText=e,An(this))};p.Ya=function(e){this.g&&(this.response=e,An(this))};p.ka=function(){this.g&&An(this)};function An(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ln(e)}p.setRequestHeader=function(e,t){this.v.append(e,t)};p.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};p.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function ln(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Ir.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Yh=R.JSON.parse;function B(e){W.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=La,this.L=this.M=!1}Q(B,W);var La="",Zh=/^https?$/i,td=["POST","PUT"];p=B.prototype;p.Oa=function(e){this.M=e};p.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():hi.g(),this.C=this.u?Qs(this.u):Qs(hi),this.g.onreadystatechange=ot(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){Ys(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=R.FormData&&e instanceof R.FormData,!(0<=ea(td,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ja(this),0<this.B&&((this.L=ed(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ot(this.ua,this)):this.A=Hi(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Ys(this,s)}};function ed(e){return we&&typeof e.timeout=="number"&&e.ontimeout!==void 0}p.ua=function(){typeof Oi<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Z(this,"timeout"),this.abort(8))};function Ys(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ua(e),wr(e)}function Ua(e){e.F||(e.F=!0,Z(e,"complete"),Z(e,"error"))}p.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Z(this,"complete"),Z(this,"abort"),wr(this))};p.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),wr(this,!0)),B.$.N.call(this)};p.La=function(){this.s||(this.G||this.v||this.l?Ba(this):this.kb())};p.kb=function(){Ba(this)};function Ba(e){if(e.h&&typeof Oi<"u"&&(!e.C[1]||Ct(e)!=4||e.da()!=2)){if(e.v&&Ct(e)==4)Hi(e.La,0,e);else if(Z(e,"readystatechange"),Ct(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(Sa)[1]||null;!i&&R.self&&R.self.location&&(i=R.self.location.protocol.slice(0,-1)),r=!Zh.test(i?i.toLowerCase():"")}n=r}if(n)Z(e,"complete"),Z(e,"success");else{e.m=6;try{var s=2<Ct(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",Ua(e)}}finally{wr(e)}}}}function wr(e,t){if(e.g){ja(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Z(e,"ready");try{n.onreadystatechange=r}catch{}}}function ja(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(R.clearTimeout(e.A),e.A=null)}p.isActive=function(){return!!this.g};function Ct(e){return e.g?e.g.readyState:0}p.da=function(){try{return 2<Ct(this)?this.g.status:-1}catch{return-1}};p.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};p.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Yh(t)}};function Zs(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case La:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function nd(e){const t={};e=(e.g&&2<=Ct(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(nn(e[r]))continue;var n=Ch(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}Th(t,function(r){return r.join(", ")})}p.Ia=function(){return this.m};p.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function qa(e){let t="";return Li(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Yi(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=qa(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):x(e,t,n))}function je(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function za(e){this.Ga=0,this.j=[],this.l=new pr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=je("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=je("baseRetryDelayMs",5e3,e),this.hb=je("retryDelaySeedMs",1e4,e),this.eb=je("forwardChannelMaxRetries",2,e),this.xa=je("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new ka(e&&e.concurrentRequestLimit),this.Ja=new Qh,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}p=za.prototype;p.ra=8;p.H=1;function Zi(e){if($a(e),e.H==3){var t=e.W++,n=xt(e.I);if(x(n,"SID",e.K),x(n,"RID",t),x(n,"TYPE","terminate"),Rn(e,n),t=new vn(e,e.l,t),t.L=2,t.v=vr(xt(n)),n=!1,R.navigator&&R.navigator.sendBeacon)try{n=R.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&R.Image&&(new Image().src=t.v,n=!0),n||(t.g=Ya(t.l,null),t.g.ha(t.v)),t.G=Date.now(),In(t)}Xa(e)}function Ar(e){e.g&&(es(e),e.g.cancel(),e.g=null)}function $a(e){Ar(e),e.u&&(R.clearTimeout(e.u),e.u=null),Zn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&R.clearTimeout(e.m),e.m=null)}function Rr(e){if(!Na(e.i)&&!e.m){e.m=!0;var t=e.Na;sn||fa(),on||(sn(),on=!0),$i.add(t,e),e.C=0}}function rd(e,t){return Ma(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=En(ot(e.Na,e,t),Qa(e,e.C)),e.C++,!0)}p.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new vn(this,this.l,e);let s=this.s;if(this.U&&(s?(s=sa(s),oa(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Ka(this,i,t),n=xt(this.I),x(n,"RID",e),x(n,"CVER",22),this.F&&x(n,"X-HTTP-Session-Id",this.F),Rn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(qa(s)))+"&"+t:this.o&&Yi(n,this.o,s)),Xi(this.i,i),this.bb&&x(n,"TYPE","init"),this.P?(x(n,"$req",t),x(n,"SID","null"),i.aa=!0,fi(i,n,null)):fi(i,n,t),this.H=2}}else this.H==3&&(e?to(this,e):this.j.length==0||Na(this.i)||to(this))};function to(e,t){var n;t?n=t.m:n=e.W++;const r=xt(e.I);x(r,"SID",e.K),x(r,"RID",n),x(r,"AID",e.V),Rn(e,r),e.o&&e.s&&Yi(r,e.o,e.s),n=new vn(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Ka(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Xi(e.i,n),fi(n,r,t)}function Rn(e,t){e.na&&Li(e.na,function(n,r){x(t,r,n)}),e.h&&Ca({},function(n,r){x(t,r,n)})}function Ka(e,t,n){n=Math.min(e.j.length,n);var r=e.h?ot(e.h.Va,e.h,e):null;t:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let u=i[c].g;const l=i[c].map;if(u-=s,0>u)s=Math.max(0,i[c].g-100),a=!1;else try{Xh(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function Ha(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;sn||fa(),on||(sn(),on=!0),$i.add(t,e),e.A=0}}function ts(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=En(ot(e.Ma,e),Qa(e,e.A)),e.A++,!0)}p.Ma=function(){if(this.u=null,Ga(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=En(ot(this.jb,this),e)}};p.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,lt(10),Ar(this),Ga(this))};function es(e){e.B!=null&&(R.clearTimeout(e.B),e.B=null)}function Ga(e){e.g=new vn(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=xt(e.wa);x(t,"RID","rpc"),x(t,"SID",e.K),x(t,"AID",e.V),x(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&x(t,"TO",e.qa),x(t,"TYPE","xmlhttp"),Rn(e,t),e.o&&e.s&&Yi(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=vr(xt(t)),n.s=null,n.S=!0,wa(n,e)}p.ib=function(){this.v!=null&&(this.v=null,Ar(this),ts(this),lt(19))};function Zn(e){e.v!=null&&(R.clearTimeout(e.v),e.v=null)}function Wa(e,t){var n=null;if(e.g==t){Zn(e),es(e),e.g=null;var r=2}else if(gi(e.i,t))n=t.F,Oa(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=_r(),Z(r,new Ea(r,n)),Rr(e)}else Ha(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&rd(e,t)||r==2&&ts(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:te(e,5);break;case 4:te(e,10);break;case 3:te(e,6);break;default:te(e,2)}}}function Qa(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function te(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=ot(e.pb,e);n||(n=new ne("//www.google.com/images/cleardot.gif"),R.location&&R.location.protocol=="http"||Jn(n,"https"),vr(n)),Jh(n.toString(),r)}else lt(2);e.H=0,e.h&&e.h.za(t),Xa(e),$a(e)}p.pb=function(e){e?(this.l.info("Successfully pinged google.com"),lt(2)):(this.l.info("Failed to ping google.com"),lt(1))};function Xa(e){if(e.H=0,e.ma=[],e.h){const t=xa(e.i);(t.length!=0||e.j.length!=0)&&($s(e.ma,t),$s(e.ma,e.j),e.i.i.length=0,xi(e.j),e.j.length=0),e.h.ya()}}function Ja(e,t,n){var r=n instanceof ne?xt(n):new ne(n);if(r.g!="")t&&(r.g=t+"."+r.g),Yn(r,r.m);else{var i=R.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new ne(null);r&&Jn(s,r),t&&(s.g=t),i&&Yn(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&x(r,n,t),x(r,"VER",e.ra),Rn(e,r),r}function Ya(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new B(new wn({ob:!0})):new B(e.va),t.Oa(e.J),t}p.isActive=function(){return!!this.h&&this.h.isActive(this)};function Za(){}p=Za.prototype;p.Ba=function(){};p.Aa=function(){};p.za=function(){};p.ya=function(){};p.isActive=function(){return!0};p.Va=function(){};function tr(){if(we&&!(10<=Number(ph)))throw Error("Environmental error: no available transport.")}tr.prototype.g=function(e,t){return new gt(e,t)};function gt(e,t){W.call(this),this.g=new za(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!nn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!nn(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Me(this)}Q(gt,W);gt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;lt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Ja(e,null,e.Y),Rr(e)};gt.prototype.close=function(){Zi(this.g)};gt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=zi(e),e=n);t.j.push(new Hh(t.fb++,e)),t.H==3&&Rr(t)};gt.prototype.N=function(){this.g.h=null,delete this.j,Zi(this.g),delete this.g,gt.$.N.call(this)};function tc(e){Wi.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Q(tc,Wi);function ec(){Qi.call(this),this.status=1}Q(ec,Qi);function Me(e){this.g=e}Q(Me,Za);Me.prototype.Ba=function(){Z(this.g,"a")};Me.prototype.Aa=function(e){Z(this.g,new tc(e))};Me.prototype.za=function(e){Z(this.g,new ec)};Me.prototype.ya=function(){Z(this.g,"b")};function id(){this.blockSize=-1}function At(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Q(At,id);At.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Gr(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}At.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)Gr(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Gr(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Gr(this,r),i=0;break}}this.h=i,this.i+=t};At.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function M(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var sd={};function ns(e){return-128<=e&&128>e?fh(e,function(t){return new M([t|0],0>t?-1:0)}):new M([e|0],0>e?-1:0)}function St(e){if(isNaN(e)||!isFinite(e))return _e;if(0>e)return Y(St(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=pi;return new M(t,0)}function nc(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Y(nc(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=St(Math.pow(t,8)),r=_e,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=St(Math.pow(t,s)),r=r.R(s).add(St(o))):(r=r.R(n),r=r.add(St(o)))}return r}var pi=4294967296,_e=ns(0),_i=ns(1),eo=ns(16777216);p=M.prototype;p.ea=function(){if(Tt(this))return-Y(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:pi+r)*t,t*=pi}return e};p.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Mt(this))return"0";if(Tt(this))return"-"+Y(this).toString(e);for(var t=St(Math.pow(e,6)),n=this,r="";;){var i=nr(n,t).g;n=er(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Mt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};p.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Mt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Tt(e){return e.h==-1}p.X=function(e){return e=er(this,e),Tt(e)?-1:Mt(e)?0:1};function Y(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new M(n,~e.h).add(_i)}p.abs=function(){return Tt(this)?Y(this):this};p.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new M(n,n[n.length-1]&-2147483648?-1:0)};function er(e,t){return e.add(Y(t))}p.R=function(e){if(Mt(this)||Mt(e))return _e;if(Tt(this))return Tt(e)?Y(this).R(Y(e)):Y(Y(this).R(e));if(Tt(e))return Y(this.R(Y(e)));if(0>this.X(eo)&&0>e.X(eo))return St(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,c=e.D(i)&65535;n[2*r+2*i]+=o*c,Fn(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Fn(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Fn(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Fn(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new M(n,0)};function Fn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function qe(e,t){this.g=e,this.h=t}function nr(e,t){if(Mt(t))throw Error("division by zero");if(Mt(e))return new qe(_e,_e);if(Tt(e))return t=nr(Y(e),t),new qe(Y(t.g),Y(t.h));if(Tt(t))return t=nr(e,Y(t)),new qe(Y(t.g),t.h);if(30<e.g.length){if(Tt(e)||Tt(t))throw Error("slowDivide_ only works with positive integers.");for(var n=_i,r=t;0>=r.X(e);)n=no(n),r=no(r);var i=he(n,1),s=he(r,1);for(r=he(r,2),n=he(n,2);!Mt(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=he(r,1),n=he(n,1)}return t=er(e,i.R(t)),new qe(i,t)}for(i=_e;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=St(n),o=s.R(t);Tt(o)||0<o.X(e);)n-=r,s=St(n),o=s.R(t);Mt(s)&&(s=_i),i=i.add(s),e=er(e,o)}return new qe(i,e)}p.gb=function(e){return nr(this,e).h};p.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new M(n,this.h&e.h)};p.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new M(n,this.h|e.h)};p.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new M(n,this.h^e.h)};function no(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new M(n,e.h)}function he(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new M(i,e.h)}tr.prototype.createWebChannel=tr.prototype.g;gt.prototype.send=gt.prototype.u;gt.prototype.open=gt.prototype.m;gt.prototype.close=gt.prototype.close;yr.NO_ERROR=0;yr.TIMEOUT=8;yr.HTTP_ERROR=6;Ta.COMPLETE="complete";va.EventType=Tn;Tn.OPEN="a";Tn.CLOSE="b";Tn.ERROR="c";Tn.MESSAGE="d";W.prototype.listen=W.prototype.O;B.prototype.listenOnce=B.prototype.P;B.prototype.getLastError=B.prototype.Sa;B.prototype.getLastErrorCode=B.prototype.Ia;B.prototype.getStatus=B.prototype.da;B.prototype.getResponseJson=B.prototype.Wa;B.prototype.getResponseText=B.prototype.ja;B.prototype.send=B.prototype.ha;B.prototype.setWithCredentials=B.prototype.Oa;At.prototype.digest=At.prototype.l;At.prototype.reset=At.prototype.reset;At.prototype.update=At.prototype.j;M.prototype.add=M.prototype.add;M.prototype.multiply=M.prototype.R;M.prototype.modulo=M.prototype.gb;M.prototype.compare=M.prototype.X;M.prototype.toNumber=M.prototype.ea;M.prototype.toString=M.prototype.toString;M.prototype.getBits=M.prototype.D;M.fromNumber=St;M.fromString=nc;var od=function(){return new tr},ad=function(){return _r()},Wr=yr,cd=Ta,ud=ae,ro={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ld=wn,Ln=va,hd=B,dd=At,ye=M;const io="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oe="10.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie=new Qo("@firebase/firestore");function so(){return ie.logLevel}function E(e,...t){if(ie.logLevel<=N.DEBUG){const n=t.map(rs);ie.debug(`Firestore (${Oe}): ${e}`,...n)}}function Ft(e,...t){if(ie.logLevel<=N.ERROR){const n=t.map(rs);ie.error(`Firestore (${Oe}): ${e}`,...n)}}function Ae(e,...t){if(ie.logLevel<=N.WARN){const n=t.map(rs);ie.warn(`Firestore (${Oe}): ${e}`,...n)}}function rs(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e="Unexpected state"){const t=`FIRESTORE (${Oe}) INTERNAL ASSERTION FAILED: `+e;throw Ft(t),new Error(t)}function F(e,t){e||A()}function V(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class I extends ke{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class fd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class md{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class gd{constructor(t){this.t=t,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Kt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Kt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{E("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(E("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Kt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(E("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(F(typeof r.accessToken=="string"),new rc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return F(t===null||typeof t=="string"),new rt(t)}}class pd{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class _d{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new pd(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yd{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ed{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&E("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,E("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{E("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):E("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(F(typeof n.token=="string"),this.R=n.token,new yd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Td(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function k(e,t){return e<t?-1:e>t?1:0}function Re(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new I(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new I(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new I(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new I(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return K.fromMillis(Date.now())}static fromDate(t){return K.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new K(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?k(this.nanoseconds,t.nanoseconds):k(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.timestamp=t}static fromTimestamp(t){return new C(t)}static min(){return new C(new K(0,0))}static max(){return new C(new K(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(t,n,r){n===void 0?n=0:n>t.length&&A(),r===void 0?r=t.length-n:r>t.length-n&&A(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return hn.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof hn?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class L extends hn{construct(t,n,r){return new L(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new I(m.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new L(n)}static emptyPath(){return new L([])}}const vd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends hn{construct(t,n,r){return new st(t,n,r)}static isValidIdentifier(t){return vd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new I(m.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new I(m.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new I(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new I(m.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new st(n)}static emptyPath(){return new st([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.path=t}static fromPath(t){return new w(L.fromString(t))}static fromName(t){return new w(L.fromString(t).popFirst(5))}static empty(){return new w(L.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&L.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return L.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new w(new L(t.slice()))}}function Id(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=C.fromTimestamp(r===1e9?new K(n+1,0):new K(n,r));return new Gt(i,w.empty(),t)}function wd(e){return new Gt(e.readTime,e.key,-1)}class Gt{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Gt(C.min(),w.empty(),-1)}static max(){return new Gt(C.max(),w.empty(),-1)}}function Ad(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=w.comparator(e.documentKey,t.documentKey),n!==0?n:k(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pn(e){if(e.code!==m.FAILED_PRECONDITION||e.message!==Rd)throw e;E("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&A(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new g((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):g.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):g.reject(n)}static resolve(t){return new g((n,r)=>{n(t)})}static reject(t){return new g((n,r)=>{r(t)})}static waitFor(t){return new g((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(t){let n=g.resolve(!1);for(const r of t)n=n.next(i=>i?g.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new g((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;n(t[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(t,n){return new g((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function Cn(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}is.ae=-1;function Pr(e){return e==null}function rr(e){return e===0&&1/e==-1/0}function Cd(e){return typeof e=="number"&&Number.isInteger(e)&&!rr(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function xe(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function sc(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t,n){this.comparator=t,this.root=n||J.EMPTY}insert(t,n){return new U(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,J.BLACK,null,null))}remove(t){return new U(this.comparator,this.root.remove(t,this.comparator).copy(null,null,J.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Un(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Un(this.root,t,this.comparator,!1)}getReverseIterator(){return new Un(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Un(this.root,t,this.comparator,!0)}}class Un{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class J{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??J.RED,this.left=i??J.EMPTY,this.right=s??J.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new J(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return J.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return J.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,J.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,J.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw A();const t=this.left.check();if(t!==this.right.check())throw A();return t+(this.isRed()?0:1)}}J.EMPTY=null,J.RED=!0,J.BLACK=!1;J.EMPTY=new class{constructor(){this.size=0}get key(){throw A()}get value(){throw A()}get color(){throw A()}get left(){throw A()}get right(){throw A()}copy(t,n,r,i,s){return this}insert(t,n,r){return new J(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.comparator=t,this.data=new U(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new ao(this.data.getIterator())}getIteratorFrom(t){return new ao(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof ct)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new ct(this.comparator);return n.data=t,n}}class ao{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.fields=t,t.sort(st.comparator)}static empty(){return new wt([])}unionWith(t){let n=new ct(st.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new wt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Re(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new oc("Invalid base64 string: "+s):s}}(t);return new ut(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new ut(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return k(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const Sd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wt(e){if(F(!!e),typeof e=="string"){let t=0;const n=Sd.exec(e);if(F(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:q(e.seconds),nanos:q(e.nanos)}}function q(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function se(e){return typeof e=="string"?ut.fromBase64String(e):ut.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function os(e){const t=e.mapValue.fields.__previous_value__;return ss(t)?os(t):t}function dn(e){const t=Wt(e.mapValue.fields.__local_write_time__.timestampValue);return new K(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(t,n,r,i,s,o,a,c,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class fn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new fn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof fn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function oe(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ss(e)?4:Dd(e)?9007199254740991:10:A()}function bt(e,t){if(e===t)return!0;const n=oe(e);if(n!==oe(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return dn(e).isEqual(dn(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Wt(i.timestampValue),a=Wt(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return se(i.bytesValue).isEqual(se(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return q(i.geoPointValue.latitude)===q(s.geoPointValue.latitude)&&q(i.geoPointValue.longitude)===q(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return q(i.integerValue)===q(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=q(i.doubleValue),a=q(s.doubleValue);return o===a?rr(o)===rr(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Re(e.arrayValue.values||[],t.arrayValue.values||[],bt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(oo(o)!==oo(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!bt(o[c],a[c])))return!1;return!0}(e,t);default:return A()}}function mn(e,t){return(e.values||[]).find(n=>bt(n,t))!==void 0}function Pe(e,t){if(e===t)return 0;const n=oe(e),r=oe(t);if(n!==r)return k(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return k(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=q(s.integerValue||s.doubleValue),c=q(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(e,t);case 3:return co(e.timestampValue,t.timestampValue);case 4:return co(dn(e),dn(t));case 5:return k(e.stringValue,t.stringValue);case 6:return function(s,o){const a=se(s),c=se(o);return a.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=k(a[u],c[u]);if(l!==0)return l}return k(a.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=k(q(s.latitude),q(o.latitude));return a!==0?a:k(q(s.longitude),q(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=Pe(a[u],c[u]);if(l)return l}return k(a.length,c.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===Bn.mapValue&&o===Bn.mapValue)return 0;if(s===Bn.mapValue)return 1;if(o===Bn.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const d=k(c[h],l[h]);if(d!==0)return d;const f=Pe(a[c[h]],u[l[h]]);if(f!==0)return f}return k(c.length,l.length)}(e.mapValue,t.mapValue);default:throw A()}}function co(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return k(e,t);const n=Wt(e),r=Wt(t),i=k(n.seconds,r.seconds);return i!==0?i:k(n.nanos,r.nanos)}function Ce(e){return yi(e)}function yi(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Wt(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return se(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return w.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=yi(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${yi(n.fields[o])}`;return i+"}"}(e.mapValue):A()}function Ei(e){return!!e&&"integerValue"in e}function as(e){return!!e&&"arrayValue"in e}function uo(e){return!!e&&"nullValue"in e}function lo(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function zn(e){return!!e&&"mapValue"in e}function Xe(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return xe(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Xe(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Xe(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Dd(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this.value=t}static empty(){return new vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!zn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Xe(n)}setAll(t){let n=st.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Xe(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());zn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return bt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];zn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){xe(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new vt(Xe(this.value))}}function ac(e){const t=[];return xe(e.fields,(n,r)=>{const i=new st([n]);if(zn(r)){const s=ac(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new wt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new it(t,0,C.min(),C.min(),C.min(),vt.empty(),0)}static newFoundDocument(t,n,r,i){return new it(t,1,n,C.min(),r,i,0)}static newNoDocument(t,n){return new it(t,2,n,C.min(),C.min(),vt.empty(),0)}static newUnknownDocument(t,n){return new it(t,3,n,C.min(),C.min(),vt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(C.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=C.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof it&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,n){this.position=t,this.inclusive=n}}function ho(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=w.comparator(w.fromName(o.referenceValue),n.key):r=Pe(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function fo(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!bt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(t,n="asc"){this.field=t,this.dir=n}}function bd(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{}class $ extends cc{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new Nd(t,n,r):n==="array-contains"?new xd(t,r):n==="in"?new Fd(t,r):n==="not-in"?new Ld(t,r):n==="array-contains-any"?new Ud(t,r):new $(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Md(t,r):new Od(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Pe(n,this.value)):n!==null&&oe(this.value)===oe(n)&&this.matchesComparison(Pe(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return A()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class kt extends cc{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new kt(t,n)}matches(t){return uc(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(n=>n.isInequality());return t!==null?t.field:null}le(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function uc(e){return e.op==="and"}function lc(e){return kd(e)&&uc(e)}function kd(e){for(const t of e.filters)if(t instanceof kt)return!1;return!0}function Ti(e){if(e instanceof $)return e.field.canonicalString()+e.op.toString()+Ce(e.value);if(lc(e))return e.filters.map(t=>Ti(t)).join(",");{const t=e.filters.map(n=>Ti(n)).join(",");return`${e.op}(${t})`}}function hc(e,t){return e instanceof $?function(r,i){return i instanceof $&&r.op===i.op&&r.field.isEqual(i.field)&&bt(r.value,i.value)}(e,t):e instanceof kt?function(r,i){return i instanceof kt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&hc(o,i.filters[a]),!0):!1}(e,t):void A()}function dc(e){return e instanceof $?function(n){return`${n.field.canonicalString()} ${n.op} ${Ce(n.value)}`}(e):e instanceof kt?function(n){return n.op.toString()+" {"+n.getFilters().map(dc).join(" ,")+"}"}(e):"Filter"}class Nd extends ${constructor(t,n,r){super(t,n,r),this.key=w.fromName(r.referenceValue)}matches(t){const n=w.comparator(t.key,this.key);return this.matchesComparison(n)}}class Md extends ${constructor(t,n){super(t,"in",n),this.keys=fc("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Od extends ${constructor(t,n){super(t,"not-in",n),this.keys=fc("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function fc(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>w.fromName(r.referenceValue))}class xd extends ${constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return as(n)&&mn(n.arrayValue,this.value)}}class Fd extends ${constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&mn(this.value.arrayValue,n)}}class Ld extends ${constructor(t,n){super(t,"not-in",n)}matches(t){if(mn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!mn(this.value.arrayValue,n)}}class Ud extends ${constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!as(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>mn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function mo(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Bd(e,t,n,r,i,s,o)}function cs(e){const t=V(e);if(t.he===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Ti(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Pr(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Ce(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Ce(r)).join(",")),t.he=n}return t.he}function us(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!bd(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!hc(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!fo(e.startAt,t.startAt)&&fo(e.endAt,t.endAt)}function vi(e){return w.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function jd(e,t,n,r,i,s,o,a){return new Cr(e,t,n,r,i,s,o,a)}function ls(e){return new Cr(e)}function go(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function qd(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function zd(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function $d(e){return e.collectionGroup!==null}function Ee(e){const t=V(e);if(t.Pe===null){t.Pe=[];const n=zd(t),r=qd(t);if(n!==null&&r===null)n.isKeyField()||t.Pe.push(new Je(n)),t.Pe.push(new Je(st.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new Je(st.keyField(),s))}}}return t.Pe}function Lt(e){const t=V(e);if(!t.Ie)if(t.limitType==="F")t.Ie=mo(t.path,t.collectionGroup,Ee(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const s of Ee(t)){const o=s.dir==="desc"?"asc":"desc";n.push(new Je(s.field,o))}const r=t.endAt?new ir(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new ir(t.startAt.position,t.startAt.inclusive):null;t.Ie=mo(t.path,t.collectionGroup,n,t.filters,t.limit,r,i)}return t.Ie}function Ii(e,t,n){return new Cr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Sr(e,t){return us(Lt(e),Lt(t))&&e.limitType===t.limitType}function mc(e){return`${cs(Lt(e))}|lt:${e.limitType}`}function wi(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>dc(i)).join(", ")}]`),Pr(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ce(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ce(i)).join(",")),`Target(${r})`}(Lt(e))}; limitType=${e.limitType})`}function Vr(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):w.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of Ee(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=ho(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,Ee(r),i)||r.endAt&&!function(o,a,c){const u=ho(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,Ee(r),i))}(e,t)}function Kd(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function gc(e){return(t,n)=>{let r=!1;for(const i of Ee(e)){const s=Hd(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Hd(e,t,n){const r=e.field.isKeyField()?w.comparator(t.key,n.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?Pe(c,u):A()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return A()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){xe(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return sc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=new U(w.comparator);function Ut(){return Gd}const pc=new U(w.comparator);function Ke(...e){let t=pc;for(const n of e)t=t.insert(n.key,n);return t}function _c(e){let t=pc;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function ee(){return Ye()}function yc(){return Ye()}function Ye(){return new Fe(e=>e.toString(),(e,t)=>e.isEqual(t))}const Wd=new U(w.comparator),Qd=new ct(w.comparator);function D(...e){let t=Qd;for(const n of e)t=t.add(n);return t}const Xd=new ct(k);function Jd(){return Xd}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rr(t)?"-0":t}}function Tc(e){return{integerValue:""+e}}function Yd(e,t){return Cd(t)?Tc(t):Ec(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(){this._=void 0}}function Zd(e,t,n){return e instanceof sr?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ss(s)&&(s=os(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof gn?Ic(e,t):e instanceof pn?wc(e,t):function(i,s){const o=vc(i,s),a=po(o)+po(i.Te);return Ei(o)&&Ei(i.Te)?Tc(a):Ec(i.serializer,a)}(e,t)}function tf(e,t,n){return e instanceof gn?Ic(e,t):e instanceof pn?wc(e,t):n}function vc(e,t){return e instanceof or?function(r){return Ei(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class sr extends Dr{}class gn extends Dr{constructor(t){super(),this.elements=t}}function Ic(e,t){const n=Ac(t);for(const r of e.elements)n.some(i=>bt(i,r))||n.push(r);return{arrayValue:{values:n}}}class pn extends Dr{constructor(t){super(),this.elements=t}}function wc(e,t){let n=Ac(t);for(const r of e.elements)n=n.filter(i=>!bt(i,r));return{arrayValue:{values:n}}}class or extends Dr{constructor(t,n){super(),this.serializer=t,this.Te=n}}function po(e){return q(e.integerValue||e.doubleValue)}function Ac(e){return as(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function ef(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof gn&&i instanceof gn||r instanceof pn&&i instanceof pn?Re(r.elements,i.elements,bt):r instanceof or&&i instanceof or?bt(r.Te,i.Te):r instanceof sr&&i instanceof sr}(e.transform,t.transform)}class nf{constructor(t,n){this.version=t,this.transformResults=n}}class Vt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Vt}static exists(t){return new Vt(void 0,t)}static updateTime(t){return new Vt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function $n(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class br{}function Rc(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Cc(e.key,Vt.none()):new Sn(e.key,e.data,Vt.none());{const n=e.data,r=vt.empty();let i=new ct(st.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ce(e.key,r,new wt(i.toArray()),Vt.none())}}function rf(e,t,n){e instanceof Sn?function(i,s,o){const a=i.value.clone(),c=yo(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof ce?function(i,s,o){if(!$n(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=yo(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(Pc(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Ze(e,t,n,r){return e instanceof Sn?function(s,o,a,c){if(!$n(s.precondition,o))return a;const u=s.value.clone(),l=Eo(s.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof ce?function(s,o,a,c){if(!$n(s.precondition,o))return a;const u=Eo(s.fieldTransforms,c,o),l=o.data;return l.setAll(Pc(s)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(s,o,a){return $n(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function sf(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=vc(r.transform,i||null);s!=null&&(n===null&&(n=vt.empty()),n.set(r.field,s))}return n||null}function _o(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Re(r,i,(s,o)=>ef(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Sn extends br{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ce extends br{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Pc(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function yo(e,t,n){const r=new Map;F(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,tf(o,a,n[i]))}return r}function Eo(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Zd(s,o,t))}return r}class Cc extends br{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class of extends br{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&rf(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Ze(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Ze(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=yc();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=Rc(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(C.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),D())}isEqual(t){return this.batchId===t.batchId&&Re(this.mutations,t.mutations,(n,r)=>_o(n,r))&&Re(this.baseMutations,t.baseMutations,(n,r)=>_o(n,r))}}class hs{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){F(t.mutations.length===r.length);let i=function(){return Wd}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new hs(t,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j,b;function lf(e){switch(e){default:return A();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function Sc(e){if(e===void 0)return Ft("GRPC error has no .code"),m.UNKNOWN;switch(e){case j.OK:return m.OK;case j.CANCELLED:return m.CANCELLED;case j.UNKNOWN:return m.UNKNOWN;case j.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case j.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case j.INTERNAL:return m.INTERNAL;case j.UNAVAILABLE:return m.UNAVAILABLE;case j.UNAUTHENTICATED:return m.UNAUTHENTICATED;case j.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case j.NOT_FOUND:return m.NOT_FOUND;case j.ALREADY_EXISTS:return m.ALREADY_EXISTS;case j.PERMISSION_DENIED:return m.PERMISSION_DENIED;case j.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case j.ABORTED:return m.ABORTED;case j.OUT_OF_RANGE:return m.OUT_OF_RANGE;case j.UNIMPLEMENTED:return m.UNIMPLEMENTED;case j.DATA_LOSS:return m.DATA_LOSS;default:return A()}}(b=j||(j={}))[b.OK=0]="OK",b[b.CANCELLED=1]="CANCELLED",b[b.UNKNOWN=2]="UNKNOWN",b[b.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",b[b.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",b[b.NOT_FOUND=5]="NOT_FOUND",b[b.ALREADY_EXISTS=6]="ALREADY_EXISTS",b[b.PERMISSION_DENIED=7]="PERMISSION_DENIED",b[b.UNAUTHENTICATED=16]="UNAUTHENTICATED",b[b.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",b[b.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",b[b.ABORTED=10]="ABORTED",b[b.OUT_OF_RANGE=11]="OUT_OF_RANGE",b[b.UNIMPLEMENTED=12]="UNIMPLEMENTED",b[b.INTERNAL=13]="INTERNAL",b[b.UNAVAILABLE=14]="UNAVAILABLE",b[b.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return jn}static getOrCreateInstance(){return jn===null&&(jn=new ds),jn}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let jn=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df=new ye([4294967295,4294967295],0);function To(e){const t=hf().encode(e),n=new dd;return n.update(t),new Uint8Array(n.digest())}function vo(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new ye([n,r],0),new ye([i,s],0)]}class fs{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new He(`Invalid padding: ${n}`);if(r<0)throw new He(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new He(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new He(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*t.length-n,this.Ae=ye.fromNumber(this.de)}Re(t,n,r){let i=t.add(n.multiply(ye.fromNumber(r)));return i.compare(df)===1&&(i=new ye([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.de===0)return!1;const n=To(t),[r,i]=vo(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new fs(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.de===0)return;const n=To(t),[r,i]=vo(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class He extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,Vn.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new kr(C.min(),i,new U(k),Ut(),D())}}class Vn{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Vn(r,n,D(),D(),D())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(t,n,r,i){this.fe=t,this.removedTargetIds=n,this.key=r,this.ge=i}}class Vc{constructor(t,n){this.targetId=t,this.pe=n}}class Dc{constructor(t,n,r=ut.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Io{constructor(){this.ye=0,this.we=Ao(),this.Se=ut.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(t){t.approximateByteSize()>0&&(this.De=!0,this.Se=t)}Me(){let t=D(),n=D(),r=D();return this.we.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:A()}}),new Vn(this.Se,this.be,t,n,r)}xe(){this.De=!1,this.we=Ao()}Oe(t,n){this.De=!0,this.we=this.we.insert(t,n)}Ne(t){this.De=!0,this.we=this.we.remove(t)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class ff{constructor(t){this.qe=t,this.Qe=new Map,this.Ke=Ut(),this.$e=wo(),this.Ue=new U(k)}We(t){for(const n of t.fe)t.ge&&t.ge.isFoundDocument()?this.Ge(n,t.ge):this.ze(n,t.key,t.ge);for(const n of t.removedTargetIds)this.ze(n,t.key,t.ge)}je(t){this.forEachTarget(t,n=>{const r=this.He(n);switch(t.state){case 0:this.Je(n)&&r.Fe(t.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(t.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(t.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(t.resumeToken));break;default:A()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(t){var n,r;const i=t.targetId,s=t.pe.count,o=this.Xe(i);if(o){const a=o.target;if(vi(a))if(s===0){const c=new w(a.path);this.ze(i,c,it.newNoDocument(c,C.min()))}else F(s===1);else{const c=this.et(i);if(c!==s){const u=this.tt(t,c);if(u.status!==0){this.Ye(i);const l=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,l)}(n=ds.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,f,T){var v,y,P,S,_,H;const ft={localCacheCount:f,existenceFilterCount:T.count},tt=T.unchangedNames;return tt&&(ft.bloomFilter={applied:h===0,hashCount:(v=tt==null?void 0:tt.hashCount)!==null&&v!==void 0?v:0,bitmapLength:(S=(P=(y=tt==null?void 0:tt.bits)===null||y===void 0?void 0:y.bitmap)===null||P===void 0?void 0:P.length)!==null&&S!==void 0?S:0,padding:(H=(_=tt==null?void 0:tt.bits)===null||_===void 0?void 0:_.padding)!==null&&H!==void 0?H:0},d&&(ft.bloomFilter.mightContain=d)),ft}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,c,t.pe))}}}}tt(t,n){const{unchangedNames:r,count:i}=t.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let c,u;try{c=se(s).toUint8Array()}catch(h){if(h instanceof oc)return Ae("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{u=new fs(c,o,a)}catch(h){return Ae(h instanceof He?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const l=h=>{const d=this.qe.rt();return u.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return u.de===0?{status:1}:{status:i===n-this.it(t.targetId,l)?0:2,nt:l}}it(t,n){const r=this.qe.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{n(s.path.canonicalString())||(this.ze(t,s,null),i++)}),i}st(t){const n=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&vi(a.target)){const c=new w(a.target.path);this.Ke.get(c)!==null||this.ot(o,c)||this.ze(o,c,it.newNoDocument(c,t))}s.Ce&&(n.set(o,s.Me()),s.xe())}});let r=D();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xe(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(t));const i=new kr(t,n,this.Ue,this.Ke,r);return this.Ke=Ut(),this.$e=wo(),this.Ue=new U(k),i}Ge(t,n){if(!this.Je(t))return;const r=this.ot(t,n.key)?2:0;this.He(t).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(t))}ze(t,n,r){if(!this.Je(t))return;const i=this.He(t);this.ot(t,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(t)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(t){this.Qe.delete(t)}et(t){const n=this.He(t).Me();return this.qe.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Be(t){this.He(t).Be()}He(t){let n=this.Qe.get(t);return n||(n=new Io,this.Qe.set(t,n)),n}_t(t){let n=this.$e.get(t);return n||(n=new ct(k),this.$e=this.$e.insert(t,n)),n}Je(t){const n=this.Xe(t)!==null;return n||E("WatchChangeAggregator","Detected inactive target",t),n}Xe(t){const n=this.Qe.get(t);return n&&n.ve?null:this.qe.ut(t)}Ye(t){this.Qe.set(t,new Io),this.qe.getRemoteKeysForTarget(t).forEach(n=>{this.ze(t,n,null)})}ot(t,n){return this.qe.getRemoteKeysForTarget(t).has(n)}}function wo(){return new U(w.comparator)}function Ao(){return new U(w.comparator)}const mf=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),gf=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),pf=(()=>({and:"AND",or:"OR"}))();class _f{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Ai(e,t){return e.useProto3Json||Pr(t)?t:{value:t}}function ar(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function bc(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function yf(e,t){return ar(e,t.toTimestamp())}function Dt(e){return F(!!e),C.fromTimestamp(function(n){const r=Wt(n);return new K(r.seconds,r.nanos)}(e))}function ms(e,t){return function(r){return new L(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function kc(e){const t=L.fromString(e);return F(xc(t)),t}function Ri(e,t){return ms(e.databaseId,t.path)}function Qr(e,t){const n=kc(t);if(n.get(1)!==e.databaseId.projectId)throw new I(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new I(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new w(Nc(n))}function Pi(e,t){return ms(e.databaseId,t)}function Ef(e){const t=kc(e);return t.length===4?L.emptyPath():Nc(t)}function Ci(e){return new L(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Nc(e){return F(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Ro(e,t,n){return{name:Ri(e,t),fields:n.value.mapValue.fields}}function Tf(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:A()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(u,l){return u.useProto3Json?(F(l===void 0||typeof l=="string"),ut.fromBase64String(l||"")):(F(l===void 0||l instanceof Uint8Array),ut.fromUint8Array(l||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const l=u.code===void 0?m.UNKNOWN:Sc(u.code);return new I(l,u.message||"")}(o);n=new Dc(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Qr(e,r.document.name),s=Dt(r.document.updateTime),o=r.document.createTime?Dt(r.document.createTime):C.min(),a=new vt({mapValue:{fields:r.document.fields}}),c=it.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Kn(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Qr(e,r.document),s=r.readTime?Dt(r.readTime):C.min(),o=it.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Kn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Qr(e,r.document),s=r.removedTargetIds||[];n=new Kn([],s,i,null)}else{if(!("filter"in t))return A();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new uf(i,s),a=r.targetId;n=new Vc(a,o)}}return n}function vf(e,t){let n;if(t instanceof Sn)n={update:Ro(e,t.key,t.value)};else if(t instanceof Cc)n={delete:Ri(e,t.key)};else if(t instanceof ce)n={update:Ro(e,t.key,t.data),updateMask:Df(t.fieldMask)};else{if(!(t instanceof of))return A();n={verify:Ri(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof sr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof gn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof pn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof or)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw A()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:yf(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:A()}(e,t.precondition)),n}function If(e,t){return e&&e.length>0?(F(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?Dt(i.updateTime):Dt(s);return o.isEqual(C.min())&&(o=Dt(s)),new nf(o,i.transformResults||[])}(n,t))):[]}function wf(e,t){return{documents:[Pi(e,t.path)]}}function Af(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=Pi(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Pi(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return Oc(kt.create(c,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:de(h.field),direction:Cf(h.dir)}}(u))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Ai(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function Rf(e){let t=Ef(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){F(r===1);const l=n.from[0];l.allDescendants?i=l.collectionId:t=t.child(l.collectionId)}let s=[];n.where&&(s=function(h){const d=Mc(h);return d instanceof kt&&lc(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(T){return new Je(fe(T.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Pr(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new ir(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new ir(f,d)}(n.endAt)),jd(t,i,o,s,a,"F",c,u)}function Pf(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return A()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Mc(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=fe(n.unaryFilter.field);return $.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=fe(n.unaryFilter.field);return $.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=fe(n.unaryFilter.field);return $.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=fe(n.unaryFilter.field);return $.create(o,"!=",{nullValue:"NULL_VALUE"});default:return A()}}(e):e.fieldFilter!==void 0?function(n){return $.create(fe(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return A()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return kt.create(n.compositeFilter.filters.map(r=>Mc(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return A()}}(n.compositeFilter.op))}(e):A()}function Cf(e){return mf[e]}function Sf(e){return gf[e]}function Vf(e){return pf[e]}function de(e){return{fieldPath:e.canonicalString()}}function fe(e){return st.fromServerFormat(e.fieldPath)}function Oc(e){return e instanceof $?function(n){if(n.op==="=="){if(lo(n.value))return{unaryFilter:{field:de(n.field),op:"IS_NAN"}};if(uo(n.value))return{unaryFilter:{field:de(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(lo(n.value))return{unaryFilter:{field:de(n.field),op:"IS_NOT_NAN"}};if(uo(n.value))return{unaryFilter:{field:de(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:de(n.field),op:Sf(n.op),value:n.value}}}(e):e instanceof kt?function(n){const r=n.getFilters().map(i=>Oc(i));return r.length===1?r[0]:{compositeFilter:{op:Vf(n.op),filters:r}}}(e):A()}function Df(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function xc(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t,n,r,i,s=C.min(),o=C.min(),a=ut.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new qt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(t){this.ct=t}}function kf(e){const t=Rf({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Ii(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(){this.sn=new Mf}addToCollectionParentIndex(t,n){return this.sn.add(n),g.resolve()}getCollectionParents(t,n){return g.resolve(this.sn.getEntries(n))}addFieldIndex(t,n){return g.resolve()}deleteFieldIndex(t,n){return g.resolve()}getDocumentsMatchingTarget(t,n){return g.resolve(null)}getIndexType(t,n){return g.resolve(0)}getFieldIndexes(t,n){return g.resolve([])}getNextCollectionGroupToUpdate(t){return g.resolve(null)}getMinOffset(t,n){return g.resolve(Gt.min())}getMinOffsetFromCollectionGroup(t,n){return g.resolve(Gt.min())}updateCollectionGroup(t,n,r){return g.resolve()}updateIndexEntries(t,n){return g.resolve()}}class Mf{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new ct(L.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new ct(L.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(t){this.Mn=t}next(){return this.Mn+=2,this.Mn}static xn(){return new Se(0)}static On(){return new Se(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(){this.changes=new Fe(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,it.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?g.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&Ze(r.mutation,i,wt.empty(),K.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,D()).next(()=>r))}getLocalViewOfDocuments(t,n,r=D()){const i=ee();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=Ke();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=ee();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,D()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=Ut();const o=Ye(),a=function(){return Ye()}();return n.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof ce)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Ze(l.mutation,u,l.mutation.getFieldMask(),K.now())):o.set(u.key,wt.empty())}),this.recalculateAndSaveOverlays(t,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new xf(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Ye();let i=new U((o,a)=>o-a),s=D();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=r.get(c)||wt.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||D()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=yc();l.forEach(d=>{if(!s.has(d)){const f=Rc(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return g.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(s){return w.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):$d(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):g.resolve(ee());let a=-1,c=s;return o.next(u=>g.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?g.resolve():this.remoteDocumentCache.getEntry(t,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,c,u,D())).next(l=>({batchId:a,changes:_c(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new w(n)).next(r=>{let i=Ke();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const i=n.collectionGroup;let s=Ke();return this.indexManager.getCollectionParents(t,i).next(o=>g.forEach(o,a=>{const c=function(l,h){return new Cr(h,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i))).next(s=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,it.newInvalidDocument(u)))});let o=Ke();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&Ze(u.mutation,c,wt.empty(),K.now()),Vr(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(t){this.serializer=t,this.ar=new Map,this.ur=new Map}getBundleMetadata(t,n){return g.resolve(this.ar.get(n))}saveBundleMetadata(t,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Dt(i.createTime)}}(n)),g.resolve()}getNamedQuery(t,n){return g.resolve(this.ur.get(n))}saveNamedQuery(t,n){return this.ur.set(n.name,function(i){return{name:i.name,query:kf(i.bundledQuery),readTime:Dt(i.readTime)}}(n)),g.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(){this.overlays=new U(w.comparator),this.cr=new Map}getOverlay(t,n){return g.resolve(this.overlays.get(n))}getOverlays(t,n){const r=ee();return g.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.ht(t,n,s)}),g.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),g.resolve()}getOverlaysForCollection(t,n,r){const i=ee(),s=n.length+1,o=new w(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return g.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new U((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=ee(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=ee(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return g.resolve(a)}ht(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new cf(n,r));let s=this.cr.get(n);s===void 0&&(s=D(),this.cr.set(n,s)),this.cr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(){this.lr=new ct(G.hr),this.Pr=new ct(G.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(t,n){const r=new G(t,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Er(new G(t,n))}dr(t,n){t.forEach(r=>this.removeReference(r,n))}Ar(t){const n=new w(new L([])),r=new G(n,t),i=new G(n,t+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(t=>this.Er(t))}Er(t){this.lr=this.lr.delete(t),this.Pr=this.Pr.delete(t)}Vr(t){const n=new w(new L([])),r=new G(n,t),i=new G(n,t+1);let s=D();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new G(t,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class G{constructor(t,n){this.key=t,this.mr=n}static hr(t,n){return w.comparator(t.key,n.key)||k(t.mr,n.mr)}static Ir(t,n){return k(t.mr,n.mr)||w.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new ct(G.hr)}checkEmpty(t){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new af(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new G(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(t,n){return g.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.wr(r),s=i<0?0:i;return g.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(t){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new G(n,0),i=new G(n,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),g.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new ct(k);return n.forEach(i=>{const s=new G(i,0),o=new G(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),g.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;w.isDocumentKey(s)||(s=s.child(""));const o=new G(new w(s),0);let a=new ct(k);return this.pr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.mr)),!0)},o),g.resolve(this.Sr(a))}Sr(t){const n=[];return t.forEach(r=>{const i=this.yr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){F(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return g.forEach(n.mutations,i=>{const s=new G(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.pr=r})}Cn(t){}containsKey(t,n){const r=new G(n,0),i=this.pr.firstAfterOrEqual(r);return g.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,g.resolve()}br(t,n){return this.wr(t)}wr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}yr(t){const n=this.wr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(t){this.Dr=t,this.docs=function(){return new U(w.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return g.resolve(r?r.document.mutableCopy():it.newInvalidDocument(n))}getEntries(t,n){let r=Ut();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():it.newInvalidDocument(i))}),g.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=Ut();const o=n.path,a=new w(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Ad(wd(l),r)<=0||(i.has(l.key)||Vr(n,l))&&(s=s.insert(l.key,l.mutableCopy()))}return g.resolve(s)}getAllFromCollectionGroup(t,n,r,i){A()}vr(t,n){return g.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new qf(this)}getSize(t){return g.resolve(this.size)}}class qf extends Of{constructor(t){super(),this.sr=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(t,i)):this.sr.removeEntry(r)}),g.waitFor(n)}getFromCache(t,n){return this.sr.getEntry(t,n)}getAllFromCache(t,n){return this.sr.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(t){this.persistence=t,this.Cr=new Fe(n=>cs(n),us),this.lastRemoteSnapshotVersion=C.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new gs,this.targetCount=0,this.Or=Se.xn()}forEachTarget(t,n){return this.Cr.forEach((r,i)=>n(i)),g.resolve()}getLastRemoteSnapshotVersion(t){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return g.resolve(this.Fr)}allocateTargetId(t){return this.highestTargetId=this.Or.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),g.resolve()}Ln(t){this.Cr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Or=new Se(n),this.highestTargetId=n),t.sequenceNumber>this.Fr&&(this.Fr=t.sequenceNumber)}addTargetData(t,n){return this.Ln(n),this.targetCount+=1,g.resolve()}updateTargetData(t,n){return this.Ln(n),g.resolve()}removeTargetData(t,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),g.waitFor(s).next(()=>i)}getTargetCount(t){return g.resolve(this.targetCount)}getTargetData(t,n){const r=this.Cr.get(n)||null;return g.resolve(r)}addMatchingKeys(t,n,r){return this.Mr.Tr(n,r),g.resolve()}removeMatchingKeys(t,n,r){this.Mr.dr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),g.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Mr.Ar(n),g.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Mr.Vr(n);return g.resolve(r)}containsKey(t,n){return g.resolve(this.Mr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(t,n){this.Nr={},this.overlays={},this.Br=new is(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=t(this),this.kr=new zf(this),this.indexManager=new Nf,this.remoteDocumentCache=function(i){return new jf(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new bf(n),this.Qr=new Lf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Uf,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Nr[t.toKey()];return r||(r=new Bf(n,this.referenceDelegate),this.Nr[t.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(t,n,r){E("MemoryPersistence","Starting transaction:",t);const i=new Kf(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(t,n){return g.or(Object.values(this.Nr).map(r=>()=>r.containsKey(t,n)))}}class Kf extends Pd{constructor(t){super(),this.currentSequenceNumber=t}}class ps{constructor(t){this.persistence=t,this.Wr=new gs,this.Gr=null}static zr(t){return new ps(t)}get jr(){if(this.Gr)return this.Gr;throw A()}addReference(t,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),g.resolve()}removeReference(t,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),g.resolve()}markPotentiallyOrphaned(t,n){return this.jr.add(n.toString()),g.resolve()}removeTarget(t,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}Kr(){this.Gr=new Set}$r(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.jr,r=>{const i=w.fromPath(r);return this.Hr(t,i).next(s=>{s||n.removeEntry(i,C.min())})}).next(()=>(this.Gr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hr(t,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(t){return 0}Hr(t,n){return g.or([()=>g.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ur(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.Li=r,this.ki=i}static qi(t,n){let r=D(),i=D();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new _s(t,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(){this.Qi=!1}initialize(t,n){this.Ki=t,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(t,n,r,i){return this.$i(t,n).next(s=>s||this.Ui(t,n,i,r)).next(s=>s||this.Wi(t,n))}$i(t,n){if(go(n))return g.resolve(null);let r=Lt(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ii(n,null,"F"),r=Lt(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=D(...s);return this.Ki.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const u=this.Gi(n,a);return this.zi(n,u,o,c.readTime)?this.$i(t,Ii(n,null,"F")):this.ji(t,u,n,c)}))})))}Ui(t,n,r,i){return go(n)||i.isEqual(C.min())?this.Wi(t,n):this.Ki.getDocuments(t,r).next(s=>{const o=this.Gi(n,s);return this.zi(n,o,r,i)?this.Wi(t,n):(so()<=N.DEBUG&&E("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),wi(n)),this.ji(t,o,n,Id(i,-1)))})}Gi(t,n){let r=new ct(gc(t));return n.forEach((i,s)=>{Vr(t,s)&&(r=r.add(s))}),r}zi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(t,n){return so()<=N.DEBUG&&E("QueryEngine","Using full collection scan to execute query:",wi(n)),this.Ki.getDocumentsMatchingQuery(t,n,Gt.min())}ji(t,n,r,i){return this.Ki.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(t,n,r,i){this.persistence=t,this.Hi=n,this.serializer=i,this.Ji=new U(k),this.Yi=new Fe(s=>cs(s),us),this.Zi=new Map,this.Xi=t.getRemoteDocumentCache(),this.kr=t.getTargetCache(),this.Qr=t.getBundleCache(),this.es(r)}es(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ff(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ji))}}function Wf(e,t,n,r){return new Gf(e,t,n,r)}async function Fc(e,t){const n=V(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.es(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=D();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(r,c).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function Qf(e,t){const n=V(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){const h=u.batch,d=h.keys();let f=g.resolve();return d.forEach(T=>{f=f.next(()=>l.getEntry(c,T)).next(v=>{const y=u.docVersions.get(T);F(y!==null),v.version.compareTo(y)<0&&(h.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),l.addEntry(v)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=D();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function Lc(e){const t=V(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.kr.getLastRemoteSnapshotVersion(n))}function Xf(e,t){const n=V(e),r=t.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];t.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(s,l.removedDocuments,h).next(()=>n.kr.addMatchingKeys(s,l.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?f=f.withResumeToken(ut.EMPTY_BYTE_STRING,C.min()).withLastLimboFreeSnapshotVersion(C.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),i=i.insert(h,f),function(v,y,P){return v.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:P.addedDocuments.size+P.modifiedDocuments.size+P.removedDocuments.size>0}(d,f,l)&&a.push(n.kr.updateTargetData(s,f))});let c=Ut(),u=D();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(Jf(s,o,t.documentUpdates).next(l=>{c=l.ns,u=l.rs})),!r.isEqual(C.min())){const l=n.kr.getLastRemoteSnapshotVersion(s).next(h=>n.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return g.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.Ji=i,s))}function Jf(e,t,n){let r=D(),i=D();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=Ut();return n.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(C.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):E("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{ns:o,rs:i}})}function Yf(e,t){const n=V(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Zf(e,t){const n=V(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.kr.getTargetData(r,t).next(s=>s?(i=s,g.resolve(i)):n.kr.allocateTargetId(r).next(o=>(i=new qt(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(t,r.targetId)),r})}async function Si(e,t,n){const r=V(e),i=r.Ji.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Cn(o))throw o;E("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(i.target)}function Po(e,t,n){const r=V(e);let i=C.min(),s=D();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,u,l){const h=V(c),d=h.Yi.get(l);return d!==void 0?g.resolve(h.Ji.get(d)):h.kr.getTargetData(u,l)}(r,o,Lt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,t,n?i:C.min(),n?s:D())).next(a=>(tm(r,Kd(t),a),{documents:a,ss:s})))}function tm(e,t,n){let r=e.Zi.get(t)||C.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.Zi.set(t,r)}class Co{constructor(){this.activeTargetIds=Jd()}hs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ps(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ls(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class em{constructor(){this.Hs=new Co,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Hs.hs(t),this.Js[t]||"not-current"}updateQueryState(t,n,r){this.Js[t]=n}removeLocalQueryTarget(t){this.Hs.Ps(t)}isLocalQueryTarget(t){return this.Hs.activeTargetIds.has(t)}clearQueryState(t){delete this.Js[t]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(t){return this.Hs.activeTargetIds.has(t)}start(){return this.Hs=new Co,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{Ys(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(t){this.ro.push(t)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){E("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ro)t(0)}no(){E("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ro)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qn=null;function Xr(){return qn===null?qn=function(){return 268435456+Math.round(2147483648*Math.random())}():qn++,"0x"+qn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(t){this.so=t.so,this.oo=t.oo}_o(t){this.ao=t}uo(t){this.co=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.so(t)}ho(){this.ao()}Po(t){this.co(t)}Io(t){this.lo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt="WebChannelConnection";class sm extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${i}/databases/${s}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Ro(){return!1}Vo(n,r,i,s,o){const a=Xr(),c=this.mo(n,r);E("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(u,s,o),this.po(n,c,u,i).then(l=>(E("RestConnection",`Received RPC '${n}' ${a}: `,l),l),l=>{throw Ae("RestConnection",`RPC '${n}' ${a} failed with error: `,l,"url: ",c,"request:",i),l})}yo(n,r,i,s,o,a){return this.Vo(n,r,i,s,o)}fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Oe}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}mo(n,r){const i=rm[n];return`${this.To}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}po(t,n,r,i){const s=Xr();return new Promise((o,a)=>{const c=new hd;c.setWithCredentials(!0),c.listenOnce(cd.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Wr.NO_ERROR:const l=c.getResponseJson();E(nt,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(l)),o(l);break;case Wr.TIMEOUT:E(nt,`RPC '${t}' ${s} timed out`),a(new I(m.DEADLINE_EXCEEDED,"Request time out"));break;case Wr.HTTP_ERROR:const h=c.getStatus();if(E(nt,`RPC '${t}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const T=function(y){const P=y.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(P)>=0?P:m.UNKNOWN}(f.status);a(new I(T,f.message))}else a(new I(m.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new I(m.UNAVAILABLE,"Connection failed."));break;default:A()}}finally{E(nt,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(i);E(nt,`RPC '${t}' ${s} sending request:`,i),c.send(n,"POST",u,r,15)})}wo(t,n,r){const i=Xr(),s=[this.To,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=od(),a=ad(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new ld({})),this.fo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const l=s.join("");E(nt,`Creating RPC '${t}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,f=!1;const T=new im({so:y=>{f?E(nt,`Not sending because RPC '${t}' stream ${i} is closed:`,y):(d||(E(nt,`Opening RPC '${t}' stream ${i} transport.`),h.open(),d=!0),E(nt,`RPC '${t}' stream ${i} sending:`,y),h.send(y))},oo:()=>h.close()}),v=(y,P,S)=>{y.listen(P,_=>{try{S(_)}catch(H){setTimeout(()=>{throw H},0)}})};return v(h,Ln.EventType.OPEN,()=>{f||E(nt,`RPC '${t}' stream ${i} transport opened.`)}),v(h,Ln.EventType.CLOSE,()=>{f||(f=!0,E(nt,`RPC '${t}' stream ${i} transport closed`),T.Po())}),v(h,Ln.EventType.ERROR,y=>{f||(f=!0,Ae(nt,`RPC '${t}' stream ${i} transport errored:`,y),T.Po(new I(m.UNAVAILABLE,"The operation could not be completed")))}),v(h,Ln.EventType.MESSAGE,y=>{var P;if(!f){const S=y.data[0];F(!!S);const _=S,H=_.error||((P=_[0])===null||P===void 0?void 0:P.error);if(H){E(nt,`RPC '${t}' stream ${i} received error:`,H);const ft=H.status;let tt=function(Nn){const Bt=j[Nn];if(Bt!==void 0)return Sc(Bt)}(ft),z=H.message;tt===void 0&&(tt=m.INTERNAL,z="Unknown error status: "+ft+" with message "+H.message),f=!0,T.Po(new I(tt,z)),h.close()}else E(nt,`RPC '${t}' stream ${i} received:`,S),T.Io(S)}}),v(a,ud.STAT_EVENT,y=>{y.stat===ro.PROXY?E(nt,`RPC '${t}' stream ${i} detected buffering proxy`):y.stat===ro.NOPROXY&&E(nt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{T.ho()},0),T}}function Jr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(e){return new _f(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(t,n,r=1e3,i=1.5,s=6e4){this.ii=t,this.timerId=n,this.So=r,this.bo=i,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(t){this.cancel();const n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),i=Math.max(0,n-r);i>0&&E("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),t())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(t,n,r,i,s,o,a,c){this.ii=t,this.Bo=r,this.Lo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new Uc(t,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(t){this.Jo(),this.stream.send(t)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(t,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,t!==4?this.Ko.reset():n&&n.code===m.RESOURCE_EXHAUSTED?(Ft(n.toString()),Ft("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const t=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.ko===n&&this.e_(r,i)},r=>{t(()=>{const i=new I(m.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(i)})})}e_(t,n){const r=this.Xo(this.ko);this.stream=this.n_(t,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.t_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(t){return E("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return n=>{this.ii.enqueueAndForget(()=>this.ko===t?n():(E("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class om extends Bc{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}n_(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.Ko.reset();const n=Tf(this.serializer,t),r=function(s){if(!("targetChange"in s))return C.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?C.min():o.readTime?Dt(o.readTime):C.min()}(t);return this.listener.r_(n,r)}i_(t){const n={};n.database=Ci(this.serializer),n.addTarget=function(s,o){let a;const c=o.target;if(a=vi(c)?{documents:wf(s,c)}:{query:Af(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=bc(s,o.resumeToken);const u=Ai(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(C.min())>0){a.readTime=ar(s,o.snapshotVersion.toTimestamp());const u=Ai(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=Pf(this.serializer,t);r&&(n.labels=r),this.Ho(n)}s_(t){const n={};n.database=Ci(this.serializer),n.removeTarget=t,this.Ho(n)}}class am extends Bc{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(F(!!t.streamToken),this.lastStreamToken=t.streamToken,this.o_){this.Ko.reset();const n=If(t.writeResults,t.commitTime),r=Dt(t.commitTime);return this.listener.u_(r,n)}return F(!t.writeResults||t.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const t={};t.database=Ci(this.serializer),this.Ho(t)}a_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>vf(this.serializer,r))};this.Ho(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new I(m.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(t,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Vo(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new I(m.UNKNOWN,i.toString())})}yo(t,n,r,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.yo(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new I(m.UNKNOWN,s.toString())})}terminate(){this.h_=!0}}class um{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(t){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.R_("Offline")))}set(t){this.f_(),this.T_=0,t==="Online"&&(this.d_=!1),this.R_(t)}R_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}V_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(Ft(n),this.d_=!1):E("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=s,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{ue(this)&&(E("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=V(c);u.y_.add(4),await Dn(u),u.b_.set("Unknown"),u.y_.delete(4),await Mr(u)}(this))})}),this.b_=new um(r,i)}}async function Mr(e){if(ue(e))for(const t of e.w_)await t(!0)}async function Dn(e){for(const t of e.w_)await t(!1)}function jc(e,t){const n=V(e);n.p_.has(t.targetId)||(n.p_.set(t.targetId,t),Ts(n)?Es(n):Le(n).Uo()&&ys(n,t))}function qc(e,t){const n=V(e),r=Le(n);n.p_.delete(t),r.Uo()&&zc(n,t),n.p_.size===0&&(r.Uo()?r.zo():ue(n)&&n.b_.set("Unknown"))}function ys(e,t){if(e.D_.Be(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(C.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Le(e).i_(t)}function zc(e,t){e.D_.Be(t),Le(e).s_(t)}function Es(e){e.D_=new ff({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.p_.get(t)||null,rt:()=>e.datastore.serializer.databaseId}),Le(e).start(),e.b_.A_()}function Ts(e){return ue(e)&&!Le(e).$o()&&e.p_.size>0}function ue(e){return V(e).y_.size===0}function $c(e){e.D_=void 0}async function hm(e){e.p_.forEach((t,n)=>{ys(e,t)})}async function dm(e,t){$c(e),Ts(e)?(e.b_.m_(t),Es(e)):e.b_.set("Unknown")}async function fm(e,t,n){if(e.b_.set("Online"),t instanceof Dc&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(e,t)}catch(r){E("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await cr(e,r)}else if(t instanceof Kn?e.D_.We(t):t instanceof Vc?e.D_.Ze(t):e.D_.je(t),!n.isEqual(C.min()))try{const r=await Lc(e.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.D_.st(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=s.p_.get(u);l&&s.p_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const l=s.p_.get(c);if(!l)return;s.p_.set(c,l.withResumeToken(ut.EMPTY_BYTE_STRING,l.snapshotVersion)),zc(s,c);const h=new qt(l.target,c,u,l.sequenceNumber);ys(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){E("RemoteStore","Failed to raise snapshot:",r),await cr(e,r)}}async function cr(e,t,n){if(!Cn(t))throw t;e.y_.add(1),await Dn(e),e.b_.set("Offline"),n||(n=()=>Lc(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{E("RemoteStore","Retrying IndexedDB access"),await n(),e.y_.delete(1),await Mr(e)})}function Kc(e,t){return t().catch(n=>cr(e,n,t))}async function Or(e){const t=V(e),n=Qt(t);let r=t.g_.length>0?t.g_[t.g_.length-1].batchId:-1;for(;mm(t);)try{const i=await Yf(t.localStore,r);if(i===null){t.g_.length===0&&n.zo();break}r=i.batchId,gm(t,i)}catch(i){await cr(t,i)}Hc(t)&&Gc(t)}function mm(e){return ue(e)&&e.g_.length<10}function gm(e,t){e.g_.push(t);const n=Qt(e);n.Uo()&&n.__&&n.a_(t.mutations)}function Hc(e){return ue(e)&&!Qt(e).$o()&&e.g_.length>0}function Gc(e){Qt(e).start()}async function pm(e){Qt(e).l_()}async function _m(e){const t=Qt(e);for(const n of e.g_)t.a_(n.mutations)}async function ym(e,t,n){const r=e.g_.shift(),i=hs.from(r,t,n);await Kc(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Or(e)}async function Em(e,t){t&&Qt(e).__&&await async function(r,i){if(function(o){return lf(o)&&o!==m.ABORTED}(i.code)){const s=r.g_.shift();Qt(r).Go(),await Kc(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Or(r)}}(e,t),Hc(e)&&Gc(e)}async function Vo(e,t){const n=V(e);n.asyncQueue.verifyOperationInProgress(),E("RemoteStore","RemoteStore received new credentials");const r=ue(n);n.y_.add(3),await Dn(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.y_.delete(3),await Mr(n)}async function Tm(e,t){const n=V(e);t?(n.y_.delete(2),await Mr(n)):t||(n.y_.add(2),await Dn(n),n.b_.set("Unknown"))}function Le(e){return e.v_||(e.v_=function(n,r,i){const s=V(n);return s.P_(),new om(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{_o:hm.bind(null,e),uo:dm.bind(null,e),r_:fm.bind(null,e)}),e.w_.push(async t=>{t?(e.v_.Go(),Ts(e)?Es(e):e.b_.set("Unknown")):(await e.v_.stop(),$c(e))})),e.v_}function Qt(e){return e.C_||(e.C_=function(n,r,i){const s=V(n);return s.P_(),new am(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{_o:pm.bind(null,e),uo:Em.bind(null,e),c_:_m.bind(null,e),u_:ym.bind(null,e)}),e.w_.push(async t=>{t?(e.C_.Go(),await Or(e)):(await e.C_.stop(),e.g_.length>0&&(E("RemoteStore",`Stopping write stream with ${e.g_.length} pending writes`),e.g_=[]))})),e.C_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new vs(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new I(m.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Is(e,t){if(Ft("AsyncQueue",`${t}: ${e}`),Cn(e))return new I(m.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t){this.comparator=t?(n,r)=>t(n,r)||w.comparator(n.key,r.key):(n,r)=>w.comparator(n.key,r.key),this.keyedMap=Ke(),this.sortedSet=new U(this.comparator)}static emptySet(t){return new Te(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Te)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Te;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(){this.F_=new U(w.comparator)}track(t){const n=t.doc.key,r=this.F_.get(n);r?t.type!==0&&r.type===3?this.F_=this.F_.insert(n,t):t.type===3&&r.type!==1?this.F_=this.F_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.F_=this.F_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.F_=this.F_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.F_=this.F_.remove(n):t.type===1&&r.type===2?this.F_=this.F_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.F_=this.F_.insert(n,{type:2,doc:t.doc}):A():this.F_=this.F_.insert(n,t)}M_(){const t=[];return this.F_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Ve{constructor(t,n,r,i,s,o,a,c,u){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ve(t,n,Te.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Sr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(){this.x_=void 0,this.listeners=[]}}class Im{constructor(){this.queries=new Fe(t=>mc(t),Sr),this.onlineState="Unknown",this.O_=new Set}}async function Wc(e,t){const n=V(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new vm),i)try{s.x_=await n.onListen(r)}catch(o){const a=Is(o,`Initialization of query '${wi(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.listeners.push(t),t.N_(n.onlineState),s.x_&&t.B_(s.x_)&&ws(n)}async function Qc(e,t){const n=V(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function wm(e,t){const n=V(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.B_(i)&&(r=!0);o.x_=i}}r&&ws(n)}function Am(e,t,n){const r=V(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function ws(e){e.O_.forEach(t=>{t.next()})}class Xc{constructor(t,n,r){this.query=t,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Ve(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.k_?this.Q_(t)&&(this.L_.next(t),n=!0):this.K_(t,this.onlineState)&&(this.U_(t),n=!0),this.q_=t,n}onError(t){this.L_.error(t)}N_(t){this.onlineState=t;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,t)&&(this.U_(this.q_),n=!0),n}K_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.W_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Q_(t){if(t.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(t){t=Ve.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.k_=!0,this.L_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(t){this.key=t}}class Yc{constructor(t){this.key=t}}class Rm{constructor(t,n){this.query=t,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=D(),this.mutatedKeys=D(),this.na=gc(t),this.ra=new Te(this.na)}get ia(){return this.X_}sa(t,n){const r=n?n.oa:new Do,i=n?n.ra:this.ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((l,h)=>{const d=i.get(l),f=Vr(this.query,h)?h:null,T=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;d&&f?d.data.isEqual(f.data)?T!==v&&(r.track({type:3,doc:f}),y=!0):this._a(d,f)||(r.track({type:2,doc:f}),y=!0,(c&&this.na(f,c)>0||u&&this.na(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),y=!0):d&&!f&&(r.track({type:1,doc:d}),y=!0,(c||u)&&(a=!0)),y&&(f?(o=o.add(f),s=v?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{ra:o,oa:r,zi:a,mutatedKeys:s}}_a(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const i=this.ra;this.ra=t.ra,this.mutatedKeys=t.mutatedKeys;const s=t.oa.M_();s.sort((u,l)=>function(d,f){const T=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return A()}};return T(d)-T(f)}(u.type,l.type)||this.na(u.doc,l.doc)),this.aa(r);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,c=a!==this.ea;return this.ea=a,s.length!==0||c?{snapshot:new Ve(this.query,t.ra,i,s,t.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new Do,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(t){return!this.X_.has(t)&&!!this.ra.has(t)&&!this.ra.get(t).hasLocalMutations}aa(t){t&&(t.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=t.current)}ua(){if(!this.current)return[];const t=this.ta;this.ta=D(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const n=[];return t.forEach(r=>{this.ta.has(r)||n.push(new Yc(r))}),this.ta.forEach(r=>{t.has(r)||n.push(new Jc(r))}),n}ha(t){this.X_=t.ss,this.ta=D();const n=this.sa(t.documents);return this.applyChanges(n,!0)}Pa(){return Ve.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class Pm{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class Cm{constructor(t){this.key=t,this.Ia=!1}}class Sm{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new Fe(a=>mc(a),Sr),this.da=new Map,this.Aa=new Set,this.Ra=new U(w.comparator),this.Va=new Map,this.ma=new gs,this.fa={},this.ga=new Map,this.pa=Se.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function Vm(e,t){const n=Um(e);let r,i;const s=n.Ea.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{const o=await Zf(n.localStore,Lt(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Dm(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&jc(n.remoteStore,o)}return i}async function Dm(e,t,n,r,i){e.wa=(h,d,f)=>async function(v,y,P,S){let _=y.view.sa(P);_.zi&&(_=await Po(v.localStore,y.query,!1).then(({documents:tt})=>y.view.sa(tt,_)));const H=S&&S.targetChanges.get(y.targetId),ft=y.view.applyChanges(_,v.isPrimaryClient,H);return ko(v,y.targetId,ft.ca),ft.snapshot}(e,h,d,f);const s=await Po(e.localStore,t,!0),o=new Rm(t,s.ss),a=o.sa(s.documents),c=Vn.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),u=o.applyChanges(a,e.isPrimaryClient,c);ko(e,n,u.ca);const l=new Pm(t,n,o);return e.Ea.set(t,l),e.da.has(n)?e.da.get(n).push(t):e.da.set(n,[t]),u.snapshot}async function bm(e,t){const n=V(e),r=n.Ea.get(t),i=n.da.get(r.targetId);if(i.length>1)return n.da.set(r.targetId,i.filter(s=>!Sr(s,t))),void n.Ea.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Si(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),qc(n.remoteStore,r.targetId),Vi(n,r.targetId)}).catch(Pn)):(Vi(n,r.targetId),await Si(n.localStore,r.targetId,!0))}async function km(e,t,n){const r=Bm(e);try{const i=await function(o,a){const c=V(o),u=K.now(),l=a.reduce((f,T)=>f.add(T.key),D());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let T=Ut(),v=D();return c.Xi.getEntries(f,l).next(y=>{T=y,T.forEach((P,S)=>{S.isValidDocument()||(v=v.add(P))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,T)).next(y=>{h=y;const P=[];for(const S of a){const _=sf(S,h.get(S.key).overlayedDocument);_!=null&&P.push(new ce(S.key,_,ac(_.value.mapValue),Vt.exists(!0)))}return c.mutationQueue.addMutationBatch(f,u,P,a)}).next(y=>{d=y;const P=y.applyToLocalDocumentSet(h,v);return c.documentOverlayCache.saveOverlays(f,y.batchId,P)})}).then(()=>({batchId:d.batchId,changes:_c(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.fa[o.currentUser.toKey()];u||(u=new U(k)),u=u.insert(a,c),o.fa[o.currentUser.toKey()]=u}(r,i.batchId,n),await bn(r,i.changes),await Or(r.remoteStore)}catch(i){const s=Is(i,"Failed to persist write");n.reject(s)}}async function Zc(e,t){const n=V(e);try{const r=await Xf(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.Va.get(s);o&&(F(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?F(o.Ia):i.removedDocuments.size>0&&(F(o.Ia),o.Ia=!1))}),await bn(n,r,t)}catch(r){await Pn(r)}}function bo(e,t,n){const r=V(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Ea.forEach((s,o)=>{const a=o.view.N_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=V(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const d of h.listeners)d.N_(a)&&(u=!0)}),u&&ws(c)}(r.eventManager,t),i.length&&r.Ta.r_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Nm(e,t,n){const r=V(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Va.get(t),s=i&&i.key;if(s){let o=new U(w.comparator);o=o.insert(s,it.newNoDocument(s,C.min()));const a=D().add(s),c=new kr(C.min(),new Map,new U(k),o,a);await Zc(r,c),r.Ra=r.Ra.remove(s),r.Va.delete(t),As(r)}else await Si(r.localStore,t,!1).then(()=>Vi(r,t,n)).catch(Pn)}async function Mm(e,t){const n=V(e),r=t.batch.batchId;try{const i=await Qf(n.localStore,t);eu(n,r,null),tu(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await bn(n,i)}catch(i){await Pn(i)}}async function Om(e,t,n){const r=V(e);try{const i=await function(o,a){const c=V(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(F(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,t);eu(r,t,n),tu(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await bn(r,i)}catch(i){await Pn(i)}}function tu(e,t){(e.ga.get(t)||[]).forEach(n=>{n.resolve()}),e.ga.delete(t)}function eu(e,t,n){const r=V(e);let i=r.fa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.fa[r.currentUser.toKey()]=i}}function Vi(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.da.get(t))e.Ea.delete(r),n&&e.Ta.Sa(r,n);e.da.delete(t),e.isPrimaryClient&&e.ma.Ar(t).forEach(r=>{e.ma.containsKey(r)||nu(e,r)})}function nu(e,t){e.Aa.delete(t.path.canonicalString());const n=e.Ra.get(t);n!==null&&(qc(e.remoteStore,n),e.Ra=e.Ra.remove(t),e.Va.delete(n),As(e))}function ko(e,t,n){for(const r of n)r instanceof Jc?(e.ma.addReference(r.key,t),xm(e,r)):r instanceof Yc?(E("SyncEngine","Document no longer in limbo: "+r.key),e.ma.removeReference(r.key,t),e.ma.containsKey(r.key)||nu(e,r.key)):A()}function xm(e,t){const n=t.key,r=n.path.canonicalString();e.Ra.get(n)||e.Aa.has(r)||(E("SyncEngine","New document in limbo: "+n),e.Aa.add(r),As(e))}function As(e){for(;e.Aa.size>0&&e.Ra.size<e.maxConcurrentLimboResolutions;){const t=e.Aa.values().next().value;e.Aa.delete(t);const n=new w(L.fromString(t)),r=e.pa.next();e.Va.set(r,new Cm(n)),e.Ra=e.Ra.insert(n,r),jc(e.remoteStore,new qt(Lt(ls(n.path)),r,"TargetPurposeLimboResolution",is.ae))}}async function bn(e,t,n){const r=V(e),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,c)=>{o.push(r.wa(c,t,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=_s.qi(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.Ta.r_(i),await async function(c,u){const l=V(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>g.forEach(u,d=>g.forEach(d.Li,f=>l.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>g.forEach(d.ki,f=>l.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Cn(h))throw h;E("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=l.Ji.get(d),T=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(T);l.Ji=l.Ji.insert(d,v)}}}(r.localStore,s))}async function Fm(e,t){const n=V(e);if(!n.currentUser.isEqual(t)){E("SyncEngine","User change. New user:",t.toKey());const r=await Fc(n.localStore,t);n.currentUser=t,function(s,o){s.ga.forEach(a=>{a.forEach(c=>{c.reject(new I(m.CANCELLED,o))})}),s.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await bn(n,r.ts)}}function Lm(e,t){const n=V(e),r=n.Va.get(t);if(r&&r.Ia)return D().add(r.key);{let i=D();const s=n.da.get(t);if(!s)return i;for(const o of s){const a=n.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}function Um(e){const t=V(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Zc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Lm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Nm.bind(null,t),t.Ta.r_=wm.bind(null,t.eventManager),t.Ta.Sa=Am.bind(null,t.eventManager),t}function Bm(e){const t=V(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Mm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Om.bind(null,t),t}class No{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Nr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Wf(this.persistence,new Hf,t.initialUser,this.serializer)}createPersistence(t){return new $f(ps.zr,this.serializer)}createSharedClientState(t){return new em}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class jm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>bo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Fm.bind(null,this.syncEngine),await Tm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Im}()}createDatastore(t){const n=Nr(t.databaseInfo.databaseId),r=function(s){return new sm(s)}(t.databaseInfo);return function(s,o,a,c){return new cm(s,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new lm(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>bo(this.syncEngine,n,0),function(){return So.v()?new So:new nm}())}createSyncEngine(t,n){return function(i,s,o,a,c,u,l){const h=new Sm(i,s,o,a,c,u);return l&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=V(n);E("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await Dn(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.va(this.observer.next,t)}error(t){this.observer.error?this.va(this.observer.error,t):Ft("Uncaught Error in snapshot listener:",t.toString())}Ca(){this.muted=!0}va(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=rt.UNAUTHENTICATED,this.clientId=ic.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{E("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(E("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new I(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Is(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Yr(e,t){e.asyncQueue.verifyOperationInProgress(),E("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Fc(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Mo(e,t){e.asyncQueue.verifyOperationInProgress();const n=await $m(e);E("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>Vo(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>Vo(t.remoteStore,s)),e._onlineComponents=t}function zm(e){return e.name==="FirebaseError"?e.code===m.FAILED_PRECONDITION||e.code===m.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function $m(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){E("FirestoreClient","Using user provided OfflineComponentProvider");try{await Yr(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!zm(n))throw n;Ae("Error using user provided cache. Falling back to memory cache: "+n),await Yr(e,new No)}}else E("FirestoreClient","Using default OfflineComponentProvider"),await Yr(e,new No);return e._offlineComponents}async function iu(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(E("FirestoreClient","Using user provided OnlineComponentProvider"),await Mo(e,e._uninitializedComponentsProvider._online)):(E("FirestoreClient","Using default OnlineComponentProvider"),await Mo(e,new jm))),e._onlineComponents}function Km(e){return iu(e).then(t=>t.syncEngine)}async function Di(e){const t=await iu(e),n=t.eventManager;return n.onListen=Vm.bind(null,t.syncEngine),n.onUnlisten=bm.bind(null,t.syncEngine),n}function Hm(e,t,n={}){const r=new Kt;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new ru({next:d=>{o.enqueueAndForget(()=>Qc(s,h)),d.fromCache&&c.source==="server"?u.reject(new I(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Xc(a,l,{includeMetadataChanges:!0,W_:!0});return Wc(s,h)}(await Di(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(e,t,n){if(!n)throw new I(m.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Gm(e,t,n,r){if(t===!0&&r===!0)throw new I(m.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function xo(e){if(!w.isDocumentKey(e))throw new I(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Fo(e){if(w.isDocumentKey(e))throw new I(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Rs(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":A()}function Ot(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new I(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Rs(e);throw new I(m.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new I(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new I(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Gm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=su((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new I(m.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new I(m.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new I(m.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class xr{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new I(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new I(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lo(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new fd;switch(r.type){case"firstParty":return new _d(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new I(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Oo.get(n);r&&(E("ComponentProvider","Removing Datastore"),Oo.delete(n),r.terminate())}(this),Promise.resolve()}}function Wm(e,t,n,r={}){var i;const s=(e=Ot(e,xr))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ae("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=rt.MOCK_USER;else{a=$u(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new I(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new rt(u)}e._authCredentials=new md(new rc(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new kn(this.firestore,t,this._query)}}class mt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ht(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new mt(this.firestore,t,this._key)}}class Ht extends kn{constructor(t,n,r){super(t,n,ls(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new mt(this.firestore,null,new w(t))}withConverter(t){return new Ht(this.firestore,t,this._path)}}function ve(e,t,...n){if(e=Ie(e),ou("collection","path",t),e instanceof xr){const r=L.fromString(t,...n);return Fo(r),new Ht(e,null,r)}{if(!(e instanceof mt||e instanceof Ht))throw new I(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(L.fromString(t,...n));return Fo(r),new Ht(e.firestore,null,r)}}function Ps(e,t,...n){if(e=Ie(e),arguments.length===1&&(t=ic.V()),ou("doc","path",t),e instanceof xr){const r=L.fromString(t,...n);return xo(r),new mt(e,null,new w(r))}{if(!(e instanceof mt||e instanceof Ht))throw new I(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(L.fromString(t,...n));return xo(r),new mt(e.firestore,e instanceof Ht?e.converter:null,new w(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new Uc(this,"async_queue_retry"),this.Xa=()=>{const n=Jr();n&&E("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const t=Jr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.eu(),this.tu(t)}enterRestrictedMode(t){if(!this.za){this.za=!0,this.Ya=t||!1;const n=Jr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(t){if(this.eu(),this.za)return new Promise(()=>{});const n=new Kt;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ga.push(t),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(t){if(!Cn(t))throw t;E("AsyncQueue","Operation failed with retryable error: "+t)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(t){const n=this.Wa.then(()=>(this.Ja=!0,t().catch(r=>{this.Ha=r,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ft("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(t,n,r){this.eu(),this.Za.indexOf(t)>-1&&(n=0);const i=vs.createAndSchedule(this,t,n,r,s=>this.ru(s));return this.ja.push(i),i}eu(){this.Ha&&A()}verifyOperationInProgress(){}async iu(){let t;do t=this.Wa,await t;while(t!==this.Wa)}su(t){for(const n of this.ja)if(n.timerId===t)return!0;return!1}ou(t){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.iu()})}_u(t){this.Za.push(t)}ru(t){const n=this.ja.indexOf(t);this.ja.splice(n,1)}}function Uo(e){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(e,["next","error","complete"])}class De extends xr{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new Qm}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||au(this),this._firestoreClient.terminate()}}function Xm(e,t){const n=typeof e=="object"?e:Wl(),r=typeof e=="string"?e:t||"(default)",i=$l(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=qu("firestore");s&&Wm(i,...s)}return i}function Cs(e){return e._firestoreClient||au(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function au(e){var t,n,r;const i=e._freezeSettings(),s=function(a,c,u,l){return new Vd(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,su(l.experimentalLongPollingOptions),l.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new qm(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t){this._byteString=t}static fromBase64String(t){try{return new be(ut.fromBase64String(t))}catch(n){throw new I(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new be(ut.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new I(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new I(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new I(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return k(this._lat,t._lat)||k(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm=/^__.*__$/;class Ym{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new ce(t,this.data,this.fieldMask,n,this.fieldTransforms):new Sn(t,this.data,n,this.fieldTransforms)}}function uu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw A()}}class Ds{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.au(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(t){return new Ds(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.cu({path:r,hu:!1});return i.Pu(t),i}Iu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.cu({path:r,hu:!1});return i.au(),i}Tu(t){return this.cu({path:void 0,hu:!0})}Eu(t){return ur(t,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let t=0;t<this.path.length;t++)this.Pu(this.path.get(t))}Pu(t){if(t.length===0)throw this.Eu("Document fields must not be empty");if(uu(this.uu)&&Jm.test(t))throw this.Eu('Document fields cannot begin and end with "__"')}}class Zm{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Nr(t)}Ru(t,n,r,i=!1){return new Ds({uu:t,methodName:n,Au:r,path:st.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lu(e){const t=e._freezeSettings(),n=Nr(e._databaseId);return new Zm(e._databaseId,!!t.ignoreUndefinedProperties,n)}function hu(e,t,n,r,i,s={}){const o=e.Ru(s.merge||s.mergeFields?2:0,t,n,i);gu("Data must be an object, but it was:",o,r);const a=fu(r,o);let c,u;if(s.merge)c=new wt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=tg(t,h,n);if(!o.contains(d))throw new I(m.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);ng(l,d)||l.push(d)}c=new wt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new Ym(new vt(a),c,u)}function du(e,t){if(mu(e=Ie(e)))return gu("Unsupported field value:",t,e),fu(e,t);if(e instanceof cu)return function(r,i){if(!uu(i.uu))throw i.Eu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.hu&&t.uu!==4)throw t.Eu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=du(a,i.Tu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=Ie(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Yd(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=K.fromDate(r);return{timestampValue:ar(i.serializer,s)}}if(r instanceof K){const s=new K(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ar(i.serializer,s)}}if(r instanceof Vs)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof be)return{bytesValue:bc(i.serializer,r._byteString)};if(r instanceof mt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ms(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Eu(`Unsupported field value: ${Rs(r)}`)}(e,t)}function fu(e,t){const n={};return sc(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):xe(e,(r,i)=>{const s=du(i,t.lu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function mu(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof K||e instanceof Vs||e instanceof be||e instanceof mt||e instanceof cu)}function gu(e,t,n){if(!mu(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Rs(n);throw r==="an object"?t.Eu(e+" a custom object"):t.Eu(e+" "+r)}}function tg(e,t,n){if((t=Ie(t))instanceof Ss)return t._internalPath;if(typeof t=="string")return pu(e,t);throw ur("Field path arguments must be of type string or ",e,!1,void 0,n)}const eg=new RegExp("[~\\*/\\[\\]]");function pu(e,t,n){if(t.search(eg)>=0)throw ur(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Ss(...t.split("."))._internalPath}catch{throw ur(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ur(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new I(m.INVALID_ARGUMENT,a+e+c)}function ng(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new rg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(yu("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rg extends _u{data(){return super.data()}}function yu(e,t){return typeof t=="string"?pu(e,t):t instanceof Ss?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new I(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ig{convertValue(t,n="none"){switch(oe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return q(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(se(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw A()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return xe(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new Vs(q(t.latitude),q(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=os(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(dn(t));default:return null}}convertTimestamp(t){const n=Wt(t);return new K(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=L.fromString(t);F(xc(r));const i=new fn(r.get(1),r.get(3)),s=new w(r.popFirst(5));return i.isEqual(n)||Ft(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class vu extends _u{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Hn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(yu("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Hn extends vu{data(t={}){return super.data(t)}}class Iu{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ge(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Hn(this._firestore,this._userDataWriter,r.key,r,new Ge(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new I(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new Hn(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ge(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new Hn(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ge(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:sg(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function sg(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return A()}}class bs extends ig{constructor(t){super(),this.firestore=t}convertBytes(t){return new be(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new mt(this.firestore,null,n)}}function og(e){e=Ot(e,kn);const t=Ot(e.firestore,De),n=Cs(t),r=new bs(t);return Eu(e._query),Hm(n,e._query).then(i=>new Iu(t,r,e,i))}function ag(e,t,n){e=Ot(e,mt);const r=Ot(e.firestore,De),i=Tu(e.converter,t,n);return Au(r,[hu(lu(r),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,Vt.none())])}function ks(e,t){const n=Ot(e.firestore,De),r=Ps(e),i=Tu(e.converter,t);return Au(n,[hu(lu(e.firestore),"addDoc",r._key,i,e.converter!==null,{}).toMutation(r._key,Vt.exists(!1))]).then(()=>r)}function wu(e,...t){var n,r,i;e=Ie(e);let s={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||Uo(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Uo(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),t[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(e instanceof mt)u=Ot(e.firestore,De),l=ls(e._key.path),c={next:h=>{t[o]&&t[o](cg(u,e,h))},error:t[o+1],complete:t[o+2]};else{const h=Ot(e,kn);u=Ot(h.firestore,De),l=h._query;const d=new bs(u);c={next:f=>{t[o]&&t[o](new Iu(u,d,h,f))},error:t[o+1],complete:t[o+2]},Eu(e._query)}return function(d,f,T,v){const y=new ru(v),P=new Xc(f,y,T);return d.asyncQueue.enqueueAndForget(async()=>Wc(await Di(d),P)),()=>{y.Ca(),d.asyncQueue.enqueueAndForget(async()=>Qc(await Di(d),P))}}(Cs(u),l,a,c)}function Au(e,t){return function(r,i){const s=new Kt;return r.asyncQueue.enqueueAndForget(async()=>km(await Km(r),i,s)),s.promise}(Cs(e),t)}function cg(e,t,n){const r=n.docs.get(t._key),i=new bs(e);return new vu(e,i,t._key,r,new Ge(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(i){Oe=i})(Gl),Qn(new tn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new De(new gd(r.getProvider("auth-internal")),new Ed(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new I(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fn(u.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),pe(io,"4.1.0",t),pe(io,"4.1.0","esm2017")})();const ug={apiKey:"AIzaSyC-lWI0enx-tUq9naICdFLJ4UouaaV-qNU",authDomain:"webrtc-a3965.firebaseapp.com",projectId:"webrtc-a3965",storageBucket:"webrtc-a3965.appspot.com",messagingSenderId:"24290566023",appId:"1:24290566023:web:3b4a1666defcb2bc253d22"},lg=Yo(ug),Ru=Xm(lg);async function Bo(e){const t=hg(),n=Ps(Ru,"sessions",t);await ag(n,{});const r=dg(n);return fg(r,e),await mg(r,n),console.log("Listening for answers"),gg(n,r),{connection:r,id:t}}async function jo(e,t){const n=Ps(Ru,"sessions",e),r=await pg(e,n);return _g(r,t),r}function hg(){return Math.random().toString(36).substring(2,6)}function dg(e){const t={iceServers:[{urls:"stun:stun.ekiga.net"},{urls:"turn:turn.bistri.com:80",credential:"homeo",username:"homeo"},{urls:"turn:turn.anyfirewall.com:443?transport=tcp",credential:"webrtc",username:"webrtc"},{urls:"turn:numb.viagenie.ca",credential:"muazkh",username:"webrtc@live.com"}]},n=new RTCPeerConnection(t);return n.oniceconnectionstatechange=()=>{console.log(`ICE connection state: ${n.iceConnectionState}`)},n.onicecandidate=r=>{r.candidate&&(console.log("Ice candidates sent"),ks(ve(e,"ice-candidates"),r.candidate.toJSON()))},n}function fg(e,t){const n=e.createDataChannel("sendChannel");n.onopen=r=>{console.log("Channel Opened",r),t(n)},n.onclose=r=>{console.log("Channel Close",r)}}async function mg(e,t){const n=await e.createOffer();await e.setLocalDescription(n),console.log("Offer created:",n),console.log("Local description set:",e.localDescription);const r={offer:{type:n.type,sdp:n.sdp}};await ks(ve(t,"offers"),r)}function gg(e,t){wu(ve(e,"answers"),n=>{n.docChanges().forEach(async r=>{if(r.type==="added"){const i=r.doc.data(),s=new RTCSessionDescription(i);console.log("Answer received:",s),await t.setRemoteDescription(s),console.log("Remote description set:",t.remoteDescription)}})})}async function pg(e,t){console.log("Connecting to session:",e);const r=(await og(ve(t,"offers"))).docs[0].data(),i=new RTCSessionDescription(r.offer);console.log("Offer received:",i);const s={iceServers:[{urls:"stun:stun.ekiga.net"}]},o=new RTCPeerConnection(s);o.oniceconnectionstatechange=()=>{console.log(`ICE connection state: ${o.iceConnectionState}`)},await o.setRemoteDescription(i),console.log("Remote description set:",o.remoteDescription);const a=await o.createAnswer();return console.log("Answer created:",a),await o.setLocalDescription(a),console.log("Local description set:",o.localDescription),wu(ve(t,"ice-candidates"),c=>{c.docChanges().forEach(u=>{if(u.type==="added"){console.log("Ice candidates received");const l=new RTCIceCandidate(u.doc.data());o.addIceCandidate(l).catch(console.error)}})}),await ks(ve(t,"answers"),o.localDescription.toJSON()),o}function _g(e,t){e.ondatachannel=n=>{const r=n.channel;console.log("Data channel received:",r),r.onopen=()=>{console.log("Data channel is open!"),t(r)}}}async function qo(e){await yg(e)}async function yg(e){try{window.addEventListener("deviceorientation",t=>{const n={alpha:t.alpha,beta:t.beta,gamma:t.gamma};e.send(JSON.stringify(n))},!0)}catch(t){console.error("Error accessing the Gyroscope sensor:",t)}}const{console:Eg}=ku,Et="src/routes/+page.svelte";function bi(e){let t,n,r;const i={c:function(){t=_t("br"),n=ht(`
            Session ID: `),r=ht(e[0]),this.h()},l:function(o){t=yt(o,"BR",{}),n=dt(o,`
            Session ID: `),r=dt(o,e[0]),this.h()},h:function(){pt(t,Et,100,12,2160)},m:function(o,a){ge(o,t,a),ge(o,n,a),ge(o,r,a)},p:function(o,a){a&1&&We(r,o[0])},d:function(o){o&&(It(t),It(n),It(r))}};return lr("SvelteRegisterBlock",{block:i,id:bi.name,type:"if",source:"(75:8) {#if sessionId !== undefined}",ctx:e}),i}function ki(e){let t,n,r=Math.round(10*e[2].alpha)/10+"",i,s,o,a,c=Math.round(10*e[2].beta)/10+"",u,l,h,d,f=Math.round(10*e[2].gamma)/10+"",T;const v={c:function(){t=_t("h2"),n=ht("x: "),i=ht(r),s=ht(","),o=_t("br"),a=ht(" y: "),u=ht(c),l=ht(","),h=_t("br"),d=ht(" z: "),T=ht(f),this.h()},l:function(P){t=yt(P,"H2",{});var S=Zr(t);n=dt(S,"x: "),i=dt(S,r),s=dt(S,","),o=yt(S,"BR",{}),a=dt(S," y: "),u=dt(S,c),l=dt(S,","),h=yt(S,"BR",{}),d=dt(S," z: "),T=dt(S,f),S.forEach(It),this.h()},h:function(){pt(o,Et,105,54,2313),pt(h,Et,105,101,2360),pt(t,Et,105,8,2267)},m:function(P,S){ge(P,t,S),O(t,n),O(t,i),O(t,s),O(t,o),O(t,a),O(t,u),O(t,l),O(t,h),O(t,d),O(t,T)},p:function(P,S){S&4&&r!==(r=Math.round(10*P[2].alpha)/10+"")&&We(i,r),S&4&&c!==(c=Math.round(10*P[2].beta)/10+"")&&We(u,c),S&4&&f!==(f=Math.round(10*P[2].gamma)/10+"")&&We(T,f)},d:function(P){P&&It(t)}};return lr("SvelteRegisterBlock",{block:v,id:ki.name,type:"if",source:"(80:4) {#if gyroData !== undefined}",ctx:e}),v}function Ni(e){let t,n,r,i,s,o,a,c,u,l=e[3][e[1]]+"",h,d,f,T,v,y,P="Connect",S,_,H="Initiate connection",ft,tt,z=e[0]!==void 0&&bi(e),X=e[2]!==void 0&&ki(e);const Nn={c:function(){t=_t("meta"),n=Ue(),r=_t("section"),i=_t("h1"),s=ht("Gyroscope"),o=_t("br"),a=ht(`

        Connect or initiate a session`),c=_t("br"),u=ht(`

        Connection: `),h=ht(l),d=_t("br"),f=Ue(),z&&z.c(),T=Ue(),X&&X.c(),v=Ue(),y=_t("button"),y.textContent=P,S=Ue(),_=_t("button"),_.textContent=H,this.h()},l:function(et){const Nt=bu("svelte-g1pcp6",document.head);t=yt(Nt,"META",{name:!0,content:!0}),Nt.forEach(It),n=Be(et),r=yt(et,"SECTION",{class:!0});var jt=Zr(r);i=yt(jt,"H1",{class:!0});var Rt=Zr(i);s=dt(Rt,"Gyroscope"),o=yt(Rt,"BR",{}),a=dt(Rt,`

        Connect or initiate a session`),c=yt(Rt,"BR",{}),u=dt(Rt,`

        Connection: `),h=dt(Rt,l),d=yt(Rt,"BR",{}),f=Be(Rt),z&&z.l(Rt),Rt.forEach(It),T=Be(jt),X&&X.l(jt),v=Be(jt),y=yt(jt,"BUTTON",{class:!0,"data-svelte-h":!0}),Ms(y)!=="svelte-hg8y5l"&&(y.textContent=P),S=Be(jt),_=yt(jt,"BUTTON",{class:!0,"data-svelte-h":!0}),Ms(_)!=="svelte-1covyf6"&&(_.textContent=H),jt.forEach(It),this.h()},h:function(){document.title="Gyroscope Demo",le(t,"name","description"),le(t,"content","WebRTC Gyroscope Demo"),pt(t,Et,88,4,1888),pt(o,Et,93,17,1999),pt(c,Et,95,37,2043),pt(d,Et,97,54,2103),le(i,"class","s-y_bCXRrkrYfP"),pt(i,Et,92,4,1977),le(y,"class","controls s-y_bCXRrkrYfP"),pt(y,Et,108,4,2428),le(_,"class","controls s-y_bCXRrkrYfP"),pt(_,Et,109,4,2493),le(r,"class","s-y_bCXRrkrYfP"),pt(r,Et,91,0,1963)},m:function(et,Nt){O(document.head,t),ge(et,n,Nt),ge(et,r,Nt),O(r,i),O(i,s),O(i,o),O(i,a),O(i,c),O(i,u),O(i,h),O(i,d),O(i,f),z&&z.m(i,null),O(r,T),X&&X.m(r,null),O(r,v),O(r,y),O(r,S),O(r,_),ft||(tt=[Os(y,"click",e[4],!1,!1,!1,!1),Os(_,"click",e[5],!1,!1,!1,!1)],ft=!0)},p:function(et,[Nt]){Nt&2&&l!==(l=et[3][et[1]]+"")&&We(h,l),et[0]!==void 0?z?z.p(et,Nt):(z=bi(et),z.c(),z.m(i,null)):z&&(z.d(1),z=null),et[2]!==void 0?X?X.p(et,Nt):(X=ki(et),X.c(),X.m(r,v)):X&&(X.d(1),X=null)},i:Ns,o:Ns,d:function(et){et&&(It(n),It(r)),It(t),z&&z.d(),X&&X.d(),ft=!1,Cu(tt)}};return lr("SvelteRegisterBlock",{block:Nn,id:Ni.name,type:"component",source:"",ctx:e}),Nn}function zo(){!DeviceMotionEvent||!DeviceMotionEvent.requestPermission||DeviceMotionEvent.requestPermission().then(e=>{e=="granted"&&console.log("accelerometer permission granted")})}function Tg(e,t,n){let{$$slots:r={},$$scope:i}=t;Du("Page",r,[]);let s,o,a,c=2;var u=(_=>(_[_.Connected=0]="Connected",_[_.Connecting=1]="Connecting",_[_.Idle=2]="Idle",_))(u||{});async function l(){zo(),n(0,o=prompt("Enter session code:")),n(1,c=1),jo(o,d).then(_=>{s=_})}async function h(){const{id:_,connection:H}=await Bo(d);n(1,c=1),n(0,o=_),s=H}function d(_){console.log("CHANNEL OPENED"),n(1,c=0),a=_,a.onmessage=P,qo(_)}let f=[],T,v;function y(){a.send(T),console.log("Sent:",T);const _={self:!0,message:T+""};f[f.length]=_,T=""}function P(_){n(2,v=JSON.parse(_.data))}const S=[];return Object.keys(t).forEach(_=>{!~S.indexOf(_)&&_.slice(0,2)!=="$$"&&_!=="slot"&&Eg.warn(`<Page> was created with unknown prop '${_}'`)}),e.$capture_state=()=>({initiateConnection:Bo,connectSession:jo,initGyroscope:qo,peerConnection:s,sessionId:o,dataChannel:a,connectionState:c,ConnectionState:u,getAccel:zo,connect:l,init:h,connectionSuccess:d,messages:f,messageInputValue:T,gyroData:v,sendMessage:y,receiveMessage:P}),e.$inject_state=_=>{"peerConnection"in _&&(s=_.peerConnection),"sessionId"in _&&n(0,o=_.sessionId),"dataChannel"in _&&(a=_.dataChannel),"connectionState"in _&&n(1,c=_.connectionState),"ConnectionState"in _&&n(3,u=_.ConnectionState),"messages"in _&&(f=_.messages),"messageInputValue"in _&&(T=_.messageInputValue),"gyroData"in _&&n(2,v=_.gyroData)},t&&"$$inject"in t&&e.$inject_state(t.$$inject),[o,c,v,u,l,h]}class Cg extends Su{constructor(t){super(t),Vu(this,t,Tg,Ni,Pu,{}),lr("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:Ni.name})}}export{Cg as component};
