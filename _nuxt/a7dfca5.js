(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3,4,5,6,7,8,9],{333:function(t,e,n){"use strict";n.r(e);var r=n(344),o={props:{filterId:{type:String,default:null}},data:function(){return{seed:0,duration:.1,maxScale:20,frequency:.05}},methods:{setRandomSeed:function(){this.seed=Math.floor(1e4*Math.random())},fadeOutAndIn:function(t){r.a.timeline().to(this.$refs.displacementMap,{attr:{scale:this.maxScale},duration:this.duration,ease:"power1.easeOut"}).add(t).add(this.setRandomSeed).to(this.$refs.displacementMap,{attr:{scale:0},duration:this.duration,ease:"power1.easeOut"})},fadeIn:function(t){r.a.timeline().to(this.$refs.displacementMap,{attr:{scale:this.maxScale},duration:0}).add(t).add(this.setRandomSeed).to(this.$refs.displacementMap,{attr:{scale:0},duration:this.duration,ease:"power1.easeOut"})}}},c=n(17),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.filterId?n("svg",{attrs:{width:"0",height:"0"}},[n("filter",{attrs:{id:t.filterId,x:"0%",y:"0%",width:"100%",height:"100%"}},[n("feTurbulence",{attrs:{type:"fractalNoise",baseFrequency:t.frequency+" "+t.frequency,result:"NOISE",numOctaves:"2",seed:t.seed}}),t._v(" "),n("feDisplacementMap",{ref:"displacementMap",attrs:{in:"SourceGraphic",in2:"NOISE",scale:"0",xChannelSelector:"R",yChannelSelector:"R"}})],1)]):t._e()}),[],!1,null,"6ed533e4",null);e.default=component.exports},334:function(t,e,n){var content=n(346);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("5e040aa6",content,!0,{sourceMap:!1})},335:function(t,e,n){"undefined"!=typeof self&&self,t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fb15")}({"0366":function(t,e,n){var r=n("1c0b");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},"06cf":function(t,e,n){var r=n("83ab"),o=n("d1e7"),c=n("5c6c"),i=n("fc6a"),u=n("c04e"),f=n("5135"),a=n("0cfb"),s=Object.getOwnPropertyDescriptor;e.f=r?s:function(t,e){if(t=i(t),e=u(e,!0),a)try{return s(t,e)}catch(t){}if(f(t,e))return c(!o.f.call(t,e),t[e])}},"0cfb":function(t,e,n){var r=n("83ab"),o=n("d039"),c=n("cc12");t.exports=!r&&!o((function(){return 7!=Object.defineProperty(c("div"),"a",{get:function(){return 7}}).a}))},"1be4":function(t,e,n){var r=n("d066");t.exports=r("document","documentElement")},"1c0b":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},"1d80":function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},"1dde":function(t,e,n){var r=n("d039"),o=n("b622"),c=n("2d00"),i=o("species");t.exports=function(t){return c>=51||!r((function(){var e=[];return(e.constructor={})[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"23cb":function(t,e,n){var r=n("a691"),o=Math.max,c=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):c(n,e)}},"23e7":function(t,e,n){var r=n("da84"),o=n("06cf").f,c=n("9112"),i=n("6eeb"),u=n("ce4e"),f=n("e893"),a=n("94ca");t.exports=function(t,e){var s,p,n,l,d,b=t.target,v=t.global,h=t.stat;if(s=v?r:h?r[b]||u(b,{}):(r[b]||{}).prototype)for(p in e){if(l=e[p],n=t.noTargetGet?(d=o(s,p))&&d.value:s[p],!a(v?p:b+(h?".":"#")+p,t.forced)&&void 0!==n){if(typeof l==typeof n)continue;f(l,n)}(t.sham||n&&n.sham)&&c(l,"sham",!0),i(s,p,l,t)}}},"241c":function(t,e,n){var r=n("ca84"),o=n("7839").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},"2d00":function(t,e,n){var r,o,c=n("da84"),i=n("342f"),u=c.process,f=u&&u.versions,a=f&&f.v8;a?o=(r=a.split("."))[0]+r[1]:i&&(!(r=i.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=i.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},"342f":function(t,e,n){var r=n("d066");t.exports=r("navigator","userAgent")||""},"37e8":function(t,e,n){var r=n("83ab"),o=n("9bf2"),c=n("825a"),i=n("df75");t.exports=r?Object.defineProperties:function(t,e){c(t);for(var n,r=i(e),u=r.length,f=0;u>f;)o.f(t,n=r[f++],e[n]);return t}},"3bbe":function(t,e,n){var r=n("861d");t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},"428f":function(t,e,n){var r=n("da84");t.exports=r},"44ad":function(t,e,n){var r=n("d039"),o=n("c6b6"),c="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?c.call(t,""):Object(t)}:Object},4930:function(t,e,n){var r=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},"4d64":function(t,e,n){var r=n("fc6a"),o=n("50c4"),c=n("23cb"),i=function(t){return function(e,n,i){var u,f=r(e),a=o(f.length),s=c(i,a);if(t&&n!=n){for(;a>s;)if((u=f[s++])!=u)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},"50c4":function(t,e,n){var r=n("a691"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},5135:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},5692:function(t,e,n){var r=n("c430"),o=n("c6cd");(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,n){var r=n("d066"),o=n("241c"),c=n("7418"),i=n("825a");t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(i(t)),n=c.f;return n?e.concat(n(t)):e}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),o="["+n("5899")+"]",i=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),c=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(u,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"65f0":function(t,e,n){var r=n("861d"),o=n("e8b5"),i=n("b622")("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"69f3":function(t,e,n){var r,o,c,i=n("7f9a"),u=n("da84"),f=n("861d"),a=n("9112"),s=n("5135"),p=n("f772"),l=n("d012"),d=u.WeakMap,v=function(t){return c(t)?o(t):r(t,{})},b=function(t){return function(e){var n;if(!f(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}};if(i){var h=new d,m=h.get,y=h.has,g=h.set;r=function(t,e){return g.call(h,t,e),e},o=function(t){return m.call(h,t)||{}},c=function(t){return y.call(h,t)}}else{var x=p("state");l[x]=!0,r=function(t,e){return a(t,x,e),e},o=function(t){return s(t,x)?t[x]:{}},c=function(t){return s(t,x)}}t.exports={set:r,get:o,has:c,enforce:v,getterFor:b}},"6eeb":function(t,e,n){var r=n("da84"),o=n("9112"),c=n("5135"),i=n("ce4e"),u=n("8925"),f=n("69f3"),a=f.get,s=f.enforce,p=String(String).split("String");(t.exports=function(t,e,n,u){var f=!!u&&!!u.unsafe,a=!!u&&!!u.enumerable,l=!!u&&!!u.noTargetGet;"function"==typeof n&&("string"!=typeof e||c(n,"name")||o(n,"name",e),s(n).source=p.join("string"==typeof e?e:"")),t!==r?(f?!l&&t[e]&&(a=!0):delete t[e],a?t[e]=n:o(t,e,n)):a?t[e]=n:i(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||u(this)}))},7156:function(t,e,n){var r=n("861d"),o=n("d2bb");t.exports=function(t,e,n){var c,i;return o&&"function"==typeof(c=e.constructor)&&c!==n&&r(i=c.prototype)&&i!==n.prototype&&o(t,i),t}},7418:function(t,e){e.f=Object.getOwnPropertySymbols},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(t,e,n){var r=n("1d80");t.exports=function(t){return Object(r(t))}},"7c73":function(t,e,n){var r,o=n("825a"),c=n("37e8"),i=n("7839"),u=n("d012"),f=n("1be4"),a=n("cc12"),s=n("f772"),p=">",l="<",d="prototype",v="script",b=s("IE_PROTO"),h=function(){},m=function(t){return l+v+p+t+l+"/"+v+p},y=function(t){t.write(m("")),t.close();var e=t.parentWindow.Object;return t=null,e},g=function(){var t,e=a("iframe"),n="java"+v+":";return e.style.display="none",f.appendChild(e),e.src=String(n),(t=e.contentWindow.document).open(),t.write(m("document.F=Object")),t.close(),t.F},x=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}x=r?y(r):g();for(var t=i.length;t--;)delete x[d][i[t]];return x()};u[b]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(h[d]=o(t),n=new h,h[d]=null,n[b]=t):n=x(),void 0===e?n:c(n,e)}},"7f9a":function(t,e,n){var r=n("da84"),o=n("8925"),c=r.WeakMap;t.exports="function"==typeof c&&/native code/.test(o(c))},"825a":function(t,e,n){var r=n("861d");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},8875:function(t,e,n){var r,o,c,i;"undefined"!=typeof self&&self,i=function(){function t(){var e=Object.getOwnPropertyDescriptor(document,"currentScript");if(!e&&"currentScript"in document&&document.currentScript)return document.currentScript;if(e&&e.get!==t&&document.currentScript)return document.currentScript;try{throw new Error}catch(t){var n,r,o,i=/@([^@]*):(\d+):(\d+)\s*$/gi,u=/.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(t.stack)||i.exec(t.stack),c=u&&u[1]||!1,a=u&&u[2]||!1,s=document.location.href.replace(document.location.hash,""),p=document.getElementsByTagName("script");c===s&&(n=document.documentElement.outerHTML,r=new RegExp("(?:[^\\n]+?\\n){0,"+(a-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),o=n.replace(r,"$1").trim());for(var f=0;f<p.length;f++){if("interactive"===p[f].readyState)return p[f];if(p[f].src===c)return p[f];if(c===s&&p[f].innerHTML&&p[f].innerHTML.trim()===o)return p[f]}return null}}return t},o=[],void 0===(c="function"==typeof(r=i)?r.apply(e,o):r)||(t.exports=c)},8925:function(t,e,n){var r=n("c6cd"),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},"90e3":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},9112:function(t,e,n){var r=n("83ab"),o=n("9bf2"),c=n("5c6c");t.exports=r?function(t,e,n){return o.f(t,e,c(1,n))}:function(t,e,n){return t[e]=n,t}},"94ca":function(t,e,n){var r=n("d039"),o=/#|\.prototype\./,c=function(t,e){var n=u[i(t)];return n==a||n!=f&&("function"==typeof e?r(e):!!e)},i=c.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=c.data={},f=c.NATIVE="N",a=c.POLYFILL="P";t.exports=c},"9bf2":function(t,e,n){var r=n("83ab"),o=n("0cfb"),c=n("825a"),i=n("c04e"),u=Object.defineProperty;e.f=r?u:function(t,e,n){if(c(t),e=i(e,!0),c(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},a691:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},a9e3:function(t,e,n){"use strict";var r=n("83ab"),o=n("da84"),c=n("94ca"),i=n("6eeb"),u=n("5135"),f=n("c6b6"),a=n("7156"),s=n("c04e"),p=n("d039"),l=n("7c73"),d=n("241c").f,v=n("06cf").f,b=n("9bf2").f,h=n("58a8").trim,m="Number",y=o[m],g=y.prototype,x=f(l(g))==m,_=function(t){var e,n,r,o,c,i,u,f,a=s(t,!1);if("string"==typeof a&&a.length>2)if(43===(e=(a=h(a)).charCodeAt(0))||45===e){if(88===(n=a.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(a.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+a}for(i=(c=a.slice(2)).length,u=0;u<i;u++)if((f=c.charCodeAt(u))<48||f>o)return NaN;return parseInt(c,r)}return+a};if(c(m,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var O,w=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof w&&(x?p((function(){g.valueOf.call(n)})):f(n)!=m)?a(new y(_(e)),n,w):_(e)},S=r?d(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),j=0;S.length>j;j++)u(y,O=S[j])&&!u(w,O)&&b(w,O,v(y,O));w.prototype=g,g.constructor=w,i(o,m,w)}},ae40:function(t,e,n){var r=n("83ab"),o=n("d039"),c=n("5135"),i=Object.defineProperty,u={},f=function(t){throw t};t.exports=function(t,e){if(c(u,t))return u[t];e||(e={});var n=[][t],a=!!c(e,"ACCESSORS")&&e.ACCESSORS,s=c(e,0)?e[0]:f,p=c(e,1)?e[1]:void 0;return u[t]=!!n&&!o((function(){if(a&&!r)return!0;var t={length:-1};a?i(t,1,{enumerable:!0,get:f}):t[1]=1,n.call(t,s,p)}))}},b0c0:function(t,e,n){var r=n("83ab"),o=n("9bf2").f,c=Function.prototype,i=c.toString,u=/^\s*function ([^ (]*)/,f="name";r&&!(f in c)&&o(c,f,{configurable:!0,get:function(){try{return i.call(this).match(u)[1]}catch(t){return""}}})},b622:function(t,e,n){var r=n("da84"),o=n("5692"),c=n("5135"),i=n("90e3"),u=n("4930"),f=n("fdbf"),a=o("wks"),s=r.Symbol,p=f?s:s&&s.withoutSetter||i;t.exports=function(t){return c(a,t)||(u&&c(s,t)?a[t]=s[t]:a[t]=p("Symbol."+t)),a[t]}},b727:function(t,e,n){var r=n("0366"),o=n("44ad"),c=n("7b0b"),i=n("50c4"),u=n("65f0"),f=[].push,a=function(t){var e=1==t,n=2==t,a=3==t,s=4==t,p=6==t,l=5==t||p;return function(d,v,b,h){for(var m,y,g=c(d),x=o(g),_=r(v,b,3),O=i(x.length),w=0,S=h||u,j=e?S(d,O):n?S(d,0):void 0;O>w;w++)if((l||w in x)&&(y=_(m=x[w],w,g),t))if(e)j[w]=y;else if(y)switch(t){case 3:return!0;case 5:return m;case 6:return w;case 2:f.call(j,m)}else if(s)return!1;return p?-1:a||s?s:j}};t.exports={forEach:a(0),map:a(1),filter:a(2),some:a(3),every:a(4),find:a(5),findIndex:a(6)}},c04e:function(t,e,n){var r=n("861d");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},c430:function(t,e){t.exports=!1},c6b6:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},c6cd:function(t,e,n){var r=n("da84"),o=n("ce4e"),c="__core-js_shared__",i=r[c]||o(c,{});t.exports=i},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},ca84:function(t,e,n){var r=n("5135"),o=n("fc6a"),c=n("4d64").indexOf,i=n("d012");t.exports=function(t,e){var n,u=o(t),f=0,a=[];for(n in u)!r(i,n)&&r(u,n)&&a.push(n);for(;e.length>f;)r(u,n=e[f++])&&(~c(a,n)||a.push(n));return a}},cc12:function(t,e,n){var r=n("da84"),o=n("861d"),c=r.document,i=o(c)&&o(c.createElement);t.exports=function(t){return i?c.createElement(t):{}}},ce4e:function(t,e,n){var r=n("da84"),o=n("9112");t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},d066:function(t,e,n){var r=n("428f"),o=n("da84"),c=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?c(r[t])||c(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,c=o&&!r.call({1:2},1);e.f=c?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},d2bb:function(t,e,n){var r=n("825a"),o=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,c){return r(n),o(c),e?t.call(n,c):n.__proto__=c,n}}():void 0)},d81d:function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").map,c=n("1dde"),i=n("ae40"),u=c("map"),f=i("map");r({target:"Array",proto:!0,forced:!u||!f},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n("c8ba"))},df75:function(t,e,n){var r=n("ca84"),o=n("7839");t.exports=Object.keys||function(t){return r(t,o)}},e893:function(t,e,n){var r=n("5135"),o=n("56ef"),c=n("06cf"),i=n("9bf2");t.exports=function(t,e){for(var n=o(e),u=i.f,f=c.f,a=0;a<n.length;a++){var s=n[a];r(t,s)||u(t,s,f(e,s))}}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},f772:function(t,e,n){var r=n("5692"),o=n("90e3"),c=r("keys");t.exports=function(t){return c[t]||(c[t]=o(t))}},fb15:function(t,e,n){"use strict";if(n.r(e),n.d(e,"install",(function(){return b})),n.d(e,"Observer",(function(){return l})),"undefined"!=typeof window){var r=window.document.currentScript,o=n("8875");r=o(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:o});var c=r&&r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);c&&(n.p=c[1])}n("d81d"),n("b0c0");var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._t("default")],2)},u=[],f=(n("a9e3"),{name:"observer",data:function(){return{observer:null}},props:{root:{type:[Object],default:null},rootMargin:{type:[String,Number],default:"0px"},threshold:{type:[Array,Number],default:0}},methods:{unobserve:function(){this.observer.unobserve(this.$el)}},mounted:function(){var t=this,e={root:this.root,rootMargin:this.rootMargin,threshold:this.threshold};this.observer=new IntersectionObserver((function(e){t.$emit("on-change",e[0],t.unobserve)}),e),this.observer.observe(this.$el)},beforeDestroy:function(){this.observer&&(this.unobserve(),this.observer=null)}});function s(t,e,n,r,o,c,i,u){var f,a="function"==typeof t?t.options:t;if(e&&(a.render=e,a.staticRenderFns=n,a._compiled=!0),r&&(a.functional=!0),c&&(a._scopeId="data-v-"+c),i?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},a._ssrRegister=f):o&&(f=u?function(){o.call(this,(a.functional?this.parent:this).$root.$options.shadowRoot)}:o),f)if(a.functional){a._injectStyles=f;var s=a.render;a.render=function(t,e){return f.call(e),s(t,e)}}else{var p=a.beforeCreate;a.beforeCreate=p?[].concat(p,f):[f]}return{exports:t,options:a}}var l=s(f,i,u,!1,null,null,null).exports,d=[l],b=function(t){d.map((function(e){t.component(e.name,e)}))};"undefined"!=typeof window&&window.Vue&&b(window.Vue);var v=l;e.default=v},fc6a:function(t,e,n){var r=n("44ad"),o=n("1d80");t.exports=function(t){return r(o(t))}},fdbf:function(t,e,n){var r=n("4930");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator}})},336:function(t,e,n){var content=n(348);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("5087d85c",content,!0,{sourceMap:!1})},337:function(t,e,n){var map={"./choosit.svg":338,"./nuxt.svg":339,"./ubisoft.svg":340};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=337},338:function(t,e,n){t.exports=n.p+"img/choosit.0b99c2b.svg"},339:function(t,e,n){t.exports=n.p+"img/nuxt.da62b63.svg"},340:function(t,e,n){t.exports=n.p+"img/ubisoft.7abd740.svg"},341:function(t,e,n){var content=n(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("10039d3c",content,!0,{sourceMap:!1})},342:function(t,e,n){"use strict";n.r(e);var r=n(335),o={components:{Observer:n.n(r).a},props:{onVisible:{type:Function,default:function(){return function(){}}}},methods:{onChange:function(t){t.isIntersecting&&this.onVisible()}}},c=n(17),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("observer",{attrs:{threshold:.5},on:{"on-change":t.onChange}},[t._t("default")],2)}),[],!1,null,"1ad6d311",null);e.default=component.exports},343:function(t,e,n){"use strict";n.r(e);var r={props:{content:{type:Object,default:function(){return null}}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString(this.$i18n.locale,{year:"numeric",month:"long"})}}},o=n(17),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"flex mb-60"},[t.content.img?r("div",{staticClass:"w-1/3 flex-none flex items-center justify-center"},[r("img",{staticClass:"w-32",attrs:{src:n(337)("./"+t.content.img),alt:t.content.title}})]):t._e(),t._v(" "),r("div",{},[r("h2",{staticClass:"text-3xl highlight font-semibold mb-2"},[t._v(t._s(t.content.title))]),t._v(" "),t.content.startDate?r("p",{staticClass:"font-medium mb-2"},[t._v("\n      "+t._s(t.formatDate(t.content.startDate))+" -\n      "+t._s(t.content.endDate?t.formatDate(t.content.endDate):"current")+"\n    ")]):t._e(),t._v(" "),r("nuxt-content",{attrs:{document:t.content}})],1)])}),[],!1,null,"5dac2030",null);e.default=component.exports},345:function(t,e,n){"use strict";n(334)},346:function(t,e,n){var r=n(65)((function(i){return i[1]}));r.push([t.i,'/*purgecss start ignore*/\n.img[data-v-5e4b202f]{\n  position:relative\n}\n.img[data-v-5e4b202f]:before{\n  content:"";\n  position:absolute;\n  width:40%;\n  height:20%;\n  bottom:-1rem;\n  right:-10%;\n  background-color:#fcd34d;\n  filter:url(#about-img)\n}\n\n/*purgecss end ignore*/',""]),r.locals={},t.exports=r},347:function(t,e,n){"use strict";n(336)},348:function(t,e,n){var r=n(65)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\nsection[data-v-c2d2b5b4]{\n  margin-bottom:50vh\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},349:function(t,e,n){"use strict";n(341)},350:function(t,e,n){var r=n(65)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\np[data-v-5596168f]{\n  filter:url(#section-title)\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},351:function(t,e,n){"use strict";n.r(e);var r={},o=(n(345),n(17)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"min-h-screen"},[n("fluid-container",[n("h1",{staticClass:"text-6xl font-semibold highlight mb-12"},[t._v("\n      "+t._s(t.$t("greeting"))+"\n    ")]),t._v(" "),n("p",{staticClass:"mb-4"},[t._v("\n      I'm a software engineer based in Montpellier, France. I want to make the\n      web a better place ! I do that every day by writing code, researching\n      user experience and mostly being a good human.\n    ")]),t._v(" "),n("div",{staticClass:"flex gap-8 mb-4"},[n("a",{attrs:{href:"mailto:benjamin.cloquet@gmail.com"}},[t._v("Email me")]),t._v(" "),n("a",{attrs:{href:"https://www.linkedin.com/in/benjamin-cloquet/"}},[t._v("LinkedIn")])]),t._v(" "),n("div",{staticClass:"flex justify-center"},[n("div",{staticClass:"img inline-block"},[n("img",{staticClass:"max-w-sm",attrs:{src:"portrait.webp",alt:"Benjamin Cloquet"}}),t._v(" "),n("SVGFilter",{attrs:{"filter-id":"about-img"}})],1)])])],1)}),[],!1,null,"5e4b202f",null);e.default=component.exports;installComponents(component,{SVGFilter:n(333).default,FluidContainer:n(157).default})},352:function(t,e,n){"use strict";n.r(e);n(36),n(27),n(40),n(12),n(51),n(35),n(52);var r=n(18),o=n(94);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f={props:{title:{type:String,default:function(){return""}}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({onVisible:function(){this.setTitle(this.title)}},Object(o.b)({setTitle:"ui/setVisibleSectionTitle"}))},l=f,d=n(17),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("observable-section",{attrs:{"on-visible":t.onVisible}},[t._t("default")],2)}),[],!1,null,"50c2235a",null);e.default=component.exports;installComponents(component,{ObservableSection:n(342).default})},353:function(t,e,n){"use strict";n.r(e);var r=n(7),o=(n(46),{props:{slug:{type:String,default:function(){return null}}},data:function(){return{content:null}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content(t.$i18n.locale,t.slug).fetch();case 2:t.content=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}),c=(n(347),n(17)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("fluid-container",t._l(t.content,(function(t){return n("content-article",{key:t.slug,attrs:{content:t}})})),1)],1)}),[],!1,null,"c2d2b5b4",null);e.default=component.exports;installComponents(component,{ContentArticle:n(343).default,FluidContainer:n(157).default})},354:function(t,e,n){"use strict";n.r(e);n(40),n(12);var r={data:function(){return{title:"",visible:!1}},computed:{newTitle:function(){return this.$store.state.ui.visibleSectionTitle}},watch:{newTitle:function(t,e){this.visible=!1,""===e?this.$refs.filter.fadeIn(this.updateTitle):this.$refs.filter.fadeOutAndIn(this.updateTitle)}},methods:{updateTitle:function(){this.title=this.newTitle,this.visible=!0}}},o=(n(349),n(17)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fixed top-1/2 left-0 px-8"},[n("p",{class:"text-6xl font-semibold transition-opacity "+(t.visible?"":"opacity-0")},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("SVGFilter",{ref:"filter",attrs:{"filter-id":"section-title"}})],1)}),[],!1,null,"5596168f",null);e.default=component.exports;installComponents(component,{SVGFilter:n(333).default})},368:function(t,e,n){"use strict";n.r(e);var r={name:"IndexPage"},o=n(17),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("portfolio-section",[n("about-section")],1),t._v(" "),n("portfolio-section",{attrs:{title:"Companies"}},[n("content-section",{attrs:{slug:"jobs"}})],1),t._v(" "),n("portfolio-section",{attrs:{title:"Projects"}},[n("content-section",{attrs:{slug:"projects"}})],1),t._v(" "),n("section-title")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AboutSection:n(351).default,PortfolioSection:n(352).default,ContentSection:n(353).default,SectionTitle:n(354).default})}}]);