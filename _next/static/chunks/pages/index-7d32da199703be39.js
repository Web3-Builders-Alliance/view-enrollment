(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(85)}])},5677:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var l in t)Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}(t,{noSSR:function(){return s},default:function(){return o}});let r=l(8754),a=(l(7294),r._(l(8976)));function n(e){return{default:(null==e?void 0:e.default)||e}}function s(e,t){return delete t.webpack,delete t.modules,e(t)}function o(e,t){let l=a.default,r={loading:e=>{let{error:t,isLoading:l,pastDelay:r}=e;return null}};e instanceof Promise?r.loader=()=>e:"function"==typeof e?r.loader=e:"object"==typeof e&&(r={...r,...e}),r={...r,...t};let o=r.loader,u=()=>null!=o?o().then(n):Promise.resolve(n(()=>null));return(r.loadableGenerated&&(r={...r,...r.loadableGenerated},delete r.loadableGenerated),"boolean"!=typeof r.ssr||r.ssr)?l({...r,loader:u}):(delete r.webpack,delete r.modules,s(l,r))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2254:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return n}});let r=l(8754),a=r._(l(7294)),n=a.default.createContext(null)},8976:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return p}});let r=l(8754),a=r._(l(7294)),n=l(2254),s=[],o=[],u=!1;function i(e){let t=e(),l={loading:!0,loaded:null,error:null};return l.promise=t.then(e=>(l.loading=!1,l.loaded=e,e)).catch(e=>{throw l.loading=!1,l.error=e,e}),l}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let l=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),r=null;function s(){if(!r){let t=new d(e,l);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!u){let e=l.webpack?l.webpack():l.modules;e&&o.push(t=>{for(let l of e)if(t.includes(l))return s()})}function i(e,t){!function(){s();let e=a.default.useContext(n.LoadableContext);e&&Array.isArray(l.modules)&&l.modules.forEach(t=>{e(t)})}();let o=a.default.useSyncExternalStore(r.subscribe,r.getCurrentValue,r.getCurrentValue);return a.default.useImperativeHandle(t,()=>({retry:r.retry}),[]),a.default.useMemo(()=>{var t;return o.loading||o.error?a.default.createElement(l.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:r.retry}):o.loaded?a.default.createElement((t=o.loaded)&&t.default?t.default:t,e):null},[e,o])}return i.preload=()=>s(),i.displayName="LoadableComponent",a.default.forwardRef(i)}(i,e)}function f(e,t){let l=[];for(;e.length;){let r=e.pop();l.push(r(t))}return Promise.all(l).then(()=>{if(e.length)return f(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{f(s).then(e,t)}),c.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let l=()=>(u=!0,t());f(o,e).then(l,l)})),window.__NEXT_PRELOADREADY=c.preloadReady;let p=c},85:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return d}});var r=l(5893),a=l(4306),n=l(5152),s=l.n(n);let o=s()(()=>l.e(469).then(l.bind(l,8469)),{loadableGenerated:{webpack:()=>[8469]},ssr:!1}),u=s()(()=>l.e(400).then(l.bind(l,5400)),{loadableGenerated:{webpack:()=>[5400]},ssr:!1}),i=s()(()=>Promise.all([l.e(669),l.e(649)]).then(l.bind(l,4649)),{loadableGenerated:{webpack:()=>[4649]},ssr:!1});function d(){let{publicKey:e}=(0,a.O)();return(0,r.jsxs)("div",{className:"flex flex-col items-center gap-4 h-screen bg-slate-900 text-slate-200",children:[(0,r.jsx)(o,{}),(0,r.jsx)("div",{className:"relative bg-slate-800 border border-slate-700 px-4 py-4 my-auto shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10",children:(0,r.jsxs)("div",{className:"mx-auto max-w-md",children:[(0,r.jsx)("div",{className:"space-y-6 py-8 text-base leading-7 text-slate-200",children:(0,r.jsx)("img",{src:"/logo.svg",className:"w-24 mx-auto",alt:"Web3 Builders Alliance"})}),(0,r.jsxs)("div",{className:"space-y-6 py-8 text-base leading-7 text-slate-200",children:[(0,r.jsx)(u,{}),e&&(0,r.jsx)(i,{publicKey:null==e?void 0:e.toBase58()})]})]})})]})}},5152:function(e,t,l){e.exports=l(5677)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);