var l;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function q(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ca="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function da(a,b){if(b){var c=ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];f in c||(c[f]={});c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
da("String.prototype.repeat",function(a){return a?a:function(b){if(null==this)throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");var c=this+"";if(0>b||1342177279<b)throw new RangeError("Invalid count value");b|=0;for(var d="";b;)if(b&1&&(d+=c),b>>>=1)c+=c;return d}});
da("Promise",function(a){function b(e){this.C=0;this.aa=void 0;this.v=[];var h=this.X();try{e(h.resolve,h.reject)}catch(k){h.reject(k)}}function c(){this.h=null}function d(e){return e instanceof b?e:new b(function(h){h(e)})}if(a)return a;c.prototype.ia=function(e){if(null==this.h){this.h=[];var h=this;this.ja(function(){h.Ha()})}this.h.push(e)};var f=ca.setTimeout;c.prototype.ja=function(e){f(e,0)};c.prototype.Ha=function(){for(;this.h&&this.h.length;){var e=this.h;this.h=[];for(var h=0;h<e.length;++h){var k=
e[h];e[h]=null;try{k()}catch(m){this.Da(m)}}}this.h=null};c.prototype.Da=function(e){this.ja(function(){throw e;})};b.prototype.X=function(){function e(m){return function(n){k||(k=!0,m.call(h,n))}}var h=this,k=!1;return{resolve:e(this.Qa),reject:e(this.$)}};b.prototype.Qa=function(e){if(e===this)this.$(new TypeError("A Promise cannot resolve to itself"));else if(e instanceof b)this.Sa(e);else{a:switch(typeof e){case "object":var h=null!=e;break a;case "function":h=!0;break a;default:h=!1}h?this.Pa(e):
this.ma(e)}};b.prototype.Pa=function(e){var h=void 0;try{h=e.then}catch(k){this.$(k);return}"function"==typeof h?this.Ta(h,e):this.ma(e)};b.prototype.$=function(e){this.ta(2,e)};b.prototype.ma=function(e){this.ta(1,e)};b.prototype.ta=function(e,h){if(0!=this.C)throw Error("Cannot settle("+e+", "+h+"): Promise already settled in state"+this.C);this.C=e;this.aa=h;this.Ia()};b.prototype.Ia=function(){if(null!=this.v){for(var e=0;e<this.v.length;++e)g.ia(this.v[e]);this.v=null}};var g=new c;b.prototype.Sa=
function(e){var h=this.X();e.G(h.resolve,h.reject)};b.prototype.Ta=function(e,h){var k=this.X();try{e.call(h,k.resolve,k.reject)}catch(m){k.reject(m)}};b.prototype.then=function(e,h){function k(r,u){return"function"==typeof r?function(t){try{m(r(t))}catch(v){n(v)}}:u}var m,n,p=new b(function(r,u){m=r;n=u});this.G(k(e,m),k(h,n));return p};b.prototype.catch=function(e){return this.then(void 0,e)};b.prototype.G=function(e,h){function k(){switch(m.C){case 1:e(m.aa);break;case 2:h(m.aa);break;default:throw Error("Unexpected state: "+
m.C);}}var m=this;null==this.v?g.ia(k):this.v.push(k)};b.resolve=d;b.reject=function(e){return new b(function(h,k){k(e)})};b.race=function(e){return new b(function(h,k){for(var m=q(e),n=m.next();!n.done;n=m.next())d(n.value).G(h,k)})};b.all=function(e){var h=q(e),k=h.next();return k.done?d([]):new b(function(m,n){function p(t){return function(v){r[t]=v;u--;0==u&&m(r)}}var r=[],u=0;do r.push(void 0),u++,d(k.value).G(p(r.length-1),n),k=h.next();while(!k.done)})};return b});var ea=this||self;
function w(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function fa(a,b,c){return a.call.apply(a.bind,arguments)}function ha(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var f=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(f,d);return a.apply(b,f)}}return function(){return a.apply(b,arguments)}}
function x(a,b,c){x=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?fa:ha;return x.apply(null,arguments)}var ia=Date.now||function(){return+new Date};function y(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};function z(a,b){this.type=a;this.M=b||null;this.Ua=JSON.stringify(ja(this))}z.prototype.toString=function(){return this.Ua};function ja(a){var b={};b=(b.type=a.type,b);a.M&&(b.nodeId=a.M);return b};function A(a){if(Error.captureStackTrace)Error.captureStackTrace(this,A);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}y(A,Error);A.prototype.name="CustomError";function B(a,b){a=a.split("%s");for(var c="",d=a.length-1,f=0;f<d;f++)c+=a[f]+(f<b.length?b[f]:"%s");A.call(this,c+a[d])}y(B,A);B.prototype.name="AssertionError";function C(a,b,c,d){var f="Assertion failed";if(c){f+=": "+c;var g=d}else a&&(f+=": "+a,g=b);throw new B(""+f,g||[]);}function D(a,b,c){a||C("",null,b,Array.prototype.slice.call(arguments,2));return a}function E(a,b){throw new B("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));}
function F(a,b,c){"string"!==typeof a&&C("Expected string but got %s: %s.",[w(a),a],b,Array.prototype.slice.call(arguments,2))}function G(a,b,c){"array"==w(a)||C("Expected array but got %s: %s.",[w(a),a],b,Array.prototype.slice.call(arguments,2))};function H(){this.qa=""}H.prototype.toString=function(){return"SafeScript{"+this.qa+"}"};H.prototype.f=function(a){this.qa=a};(new H).f("");/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
function I(){this.sa=""}I.prototype.toString=function(){return"SafeStyle{"+this.sa+"}"};I.prototype.f=function(a){this.sa=a};(new I).f("");function J(){this.ra=""}J.prototype.toString=function(){return"SafeStyleSheet{"+this.ra+"}"};J.prototype.f=function(a){this.ra=a};(new J).f("");var K;a:{var ka=ea.navigator;if(ka){var la=ka.userAgent;if(la){K=la;break a}}K=""};function L(){this.pa=""}L.prototype.toString=function(){return"SafeHtml{"+this.pa+"}"};L.prototype.f=function(a){this.pa=a};(new L).f("<!DOCTYPE html>");(new L).f("");(new L).f("<br>");var ma=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};function M(a){a=String(a);var b=a.indexOf(".");-1==b&&(b=a.length);return ma("0",Math.max(0,2-b))+a};function na(a){this.color=a};var oa={ab:["BC","AD"],$a:["Before Christ","Anno Domini"],cb:"JFMAMJJASOND".split(""),mb:"JFMAMJJASOND".split(""),bb:"January February March April May June July August September October November December".split(" "),lb:"January February March April May June July August September October November December".split(" "),ib:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),ob:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),sb:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
qb:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),kb:"Sun Mon Tue Wed Thu Fri Sat".split(" "),pb:"Sun Mon Tue Wed Thu Fri Sat".split(" "),eb:"SMTWTFS".split(""),nb:"SMTWTFS".split(""),jb:["Q1","Q2","Q3","Q4"],gb:["1st quarter","2nd quarter","3rd quarter","4th quarter"],Wa:["AM","PM"],Ya:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],rb:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],Za:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],za:6,tb:[5,6],Aa:5},pa=oa;
pa=oa;function N(a,b,c){"number"===typeof a?(this.a=qa(a,b||0,c||1),O(this,c||1)):(b=typeof a,"object"==b&&null!=a||"function"==b?(this.a=qa(a.getFullYear(),a.getMonth(),a.getDate()),O(this,a.getDate())):(this.a=new Date(ia()),a=this.a.getDate(),this.a.setHours(0),this.a.setMinutes(0),this.a.setSeconds(0),this.a.setMilliseconds(0),O(this,a)))}function qa(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b}l=N.prototype;l.I=pa.za;l.J=pa.Aa;
l.clone=function(){var a=new N(this.a);a.I=this.I;a.J=this.J;return a};l.getFullYear=function(){return this.a.getFullYear()};l.getYear=function(){return this.getFullYear()};l.getMonth=function(){return this.a.getMonth()};l.getDate=function(){return this.a.getDate()};l.getTime=function(){return this.a.getTime()};l.getDay=function(){return this.a.getDay()};l.getUTCFullYear=function(){return this.a.getUTCFullYear()};l.getUTCMonth=function(){return this.a.getUTCMonth()};l.getUTCDate=function(){return this.a.getUTCDate()};
l.getUTCDay=function(){return this.a.getDay()};l.getUTCHours=function(){return this.a.getUTCHours()};l.getUTCMinutes=function(){return this.a.getUTCMinutes()};l.getTimezoneOffset=function(){return this.a.getTimezoneOffset()};l.set=function(a){this.a=new Date(a.getFullYear(),a.getMonth(),a.getDate())};l.setFullYear=function(a){this.a.setFullYear(a)};l.setYear=function(a){this.setFullYear(a)};l.setMonth=function(a){this.a.setMonth(a)};l.setDate=function(a){this.a.setDate(a)};l.setTime=function(a){this.a.setTime(a)};
l.setUTCFullYear=function(a){this.a.setUTCFullYear(a)};l.setUTCMonth=function(a){this.a.setUTCMonth(a)};l.setUTCDate=function(a){this.a.setUTCDate(a)};
l.add=function(a){if(a.Va||a.Ma){var b=this.getMonth()+a.Ma+12*a.Va,c=this.getYear()+Math.floor(b/12);b%=12;0>b&&(b+=12);a:{switch(b){case 1:var d=0!=c%4||0==c%100&&0!=c%400?28:29;break a;case 5:case 8:case 10:case 3:d=30;break a}d=31}d=Math.min(d,this.getDate());this.setDate(1);this.setFullYear(c);this.setMonth(b);this.setDate(d)}a.Ga&&(a=new Date((new Date(this.getYear(),this.getMonth(),this.getDate(),12)).getTime()+864E5*a.Ga),this.setDate(1),this.setFullYear(a.getFullYear()),this.setMonth(a.getMonth()),
this.setDate(a.getDate()),O(this,a.getDate()))};l.P=function(a){return[this.getFullYear(),M(this.getMonth()+1),M(this.getDate())].join(a?"-":"")+""};l.toString=function(){return this.P()};function O(a,b){a.getDate()!=b&&a.a.setUTCHours(a.a.getUTCHours()+(a.getDate()<b?1:-1))}l.valueOf=function(){return this.a.valueOf()};function P(a,b,c,d,f,g,e){this.a="number"===typeof a?new Date(a,b||0,c||1,d||0,f||0,g||0,e||0):new Date(a&&a.getTime?a.getTime():ia())}y(P,N);
function ra(a){var b=new P;b.setTime(a);return b}l=P.prototype;l.getHours=function(){return this.a.getHours()};l.getMinutes=function(){return this.a.getMinutes()};l.getSeconds=function(){return this.a.getSeconds()};l.getMilliseconds=function(){return this.a.getMilliseconds()};l.getUTCDay=function(){return this.a.getUTCDay()};l.getUTCHours=function(){return this.a.getUTCHours()};l.getUTCMinutes=function(){return this.a.getUTCMinutes()};l.getUTCSeconds=function(){return this.a.getUTCSeconds()};
l.getUTCMilliseconds=function(){return this.a.getUTCMilliseconds()};l.setHours=function(a){this.a.setHours(a)};l.setMinutes=function(a){this.a.setMinutes(a)};l.setSeconds=function(a){this.a.setSeconds(a)};l.setMilliseconds=function(a){this.a.setMilliseconds(a)};l.setUTCHours=function(a){this.a.setUTCHours(a)};l.setUTCMinutes=function(a){this.a.setUTCMinutes(a)};l.setUTCSeconds=function(a){this.a.setUTCSeconds(a)};l.setUTCMilliseconds=function(a){this.a.setUTCMilliseconds(a)};
l.add=function(a){N.prototype.add.call(this,a);a.Ka&&this.setUTCHours(this.a.getUTCHours()+a.Ka);a.La&&this.setUTCMinutes(this.a.getUTCMinutes()+a.La);a.Ra&&this.setUTCSeconds(this.a.getUTCSeconds()+a.Ra)};l.P=function(a){var b=N.prototype.P.call(this,a);return a?b+"T"+M(this.getHours())+":"+M(this.getMinutes())+":"+M(this.getSeconds()):b+"T"+M(this.getHours())+M(this.getMinutes())+M(this.getSeconds())};l.toString=function(){return this.P()};
l.clone=function(){var a=new P(this.a);a.I=this.I;a.J=this.J;return a};var sa=!!(window.chrome&&window.chrome.lockScreen&&window.chrome.lockScreen.data);function ta(){var a=this;D(sa,"Lockscreen storage API unavialable in this environment.");this.oa=[];this.Ea=[];chrome.lockScreen.data.onDataItemsAvailable.addListener(function(b){return ua(a,b)})}function va(a,b){a=ra(a.creationTime);return ra(b.creationTime).getTime()-a.getTime()}
function wa(a){chrome.lockScreen.data.getAll(function(b){if(chrome.runtime.lastError)a([]);else{var c=[],d={};b=q(b);for(var f=b.next();!f.done;d={S:d.S},f=b.next())d.S=f.value,c.push(new Promise(function(g){return function(e){var h=D(g.S.id);chrome.lockScreen.data.getContent(h,function(k){chrome.runtime.lastError?e(null):e(k?{buffer:k,id:h}:null)})}}(d)));Promise.all(c).then(function(g){a(g.filter(function(e){return!!e}))})}})}
function xa(a){var b={};a=JSON.stringify((b.type=1,b.value=a,b));return(new TextEncoder).encode(a).buffer}function ua(a,b){b.wasLocked&&wa(function(c){var d=[],f;c=q(c);for(var g=c.next();!g.done;g=c.next()){g=g.value;var e=JSON.parse((new TextDecoder).decode(g.buffer));g=e.type;e=e.value;1==g?d.push(JSON.parse(e)):0==g&&(f=new na(JSON.parse(e).color))}d.length&&(d.sort(va),a.oa.forEach(function(h){return h(d)}));f&&a.Ea.forEach(function(h){return h(f)})})};var ya={ba:{1E3:{other:"0K"},1E4:{other:"00K"},1E5:{other:"000K"},1E6:{other:"0M"},1E7:{other:"00M"},1E8:{other:"000M"},1E9:{other:"0B"},1E10:{other:"00B"},1E11:{other:"000B"},1E12:{other:"0T"},1E13:{other:"00T"},1E14:{other:"000T"}},xa:{1E3:{other:"0 thousand"},1E4:{other:"00 thousand"},1E5:{other:"000 thousand"},1E6:{other:"0 million"},1E7:{other:"00 million"},1E8:{other:"000 million"},1E9:{other:"0 billion"},1E10:{other:"00 billion"},1E11:{other:"000 billion"},1E12:{other:"0 trillion"},1E13:{other:"00 trillion"},
1E14:{other:"000 trillion"}}},Q=ya;Q=ya;var R={AED:[2,"dh","\u062f.\u0625."],ALL:[0,"Lek","Lek"],AUD:[2,"$","AU$"],BDT:[2,"\u09f3","Tk"],BGN:[2,"lev","lev"],BRL:[2,"R$","R$"],CAD:[2,"$","C$"],CDF:[2,"FrCD","CDF"],CHF:[2,"CHF","CHF"],CLP:[0,"$","CL$"],CNY:[2,"\u00a5","RMB\u00a5"],COP:[32,"$","COL$"],CRC:[0,"\u20a1","CR\u20a1"],CZK:[50,"K\u010d","K\u010d"],DKK:[50,"kr.","kr."],DOP:[2,"RD$","RD$"],EGP:[2,"\u00a3","LE"],ETB:[2,"Birr","Birr"],EUR:[2,"\u20ac","\u20ac"],GBP:[2,"\u00a3","GB\u00a3"],HKD:[2,"$","HK$"],HRK:[2,"kn","kn"],HUF:[34,"Ft",
"Ft"],IDR:[0,"Rp","Rp"],ILS:[34,"\u20aa","IL\u20aa"],INR:[2,"\u20b9","Rs"],IRR:[0,"Rial","IRR"],ISK:[0,"kr","kr"],JMD:[2,"$","JA$"],JPY:[0,"\u00a5","JP\u00a5"],KRW:[0,"\u20a9","KR\u20a9"],LKR:[2,"Rs","SLRs"],LTL:[2,"Lt","Lt"],MNT:[0,"\u20ae","MN\u20ae"],MVR:[2,"Rf","MVR"],MXN:[2,"$","Mex$"],MYR:[2,"RM","RM"],NOK:[50,"kr","NOkr"],PAB:[2,"B/.","B/."],PEN:[2,"S/.","S/."],PHP:[2,"\u20b1","PHP"],PKR:[0,"Rs","PKRs."],PLN:[50,"z\u0142","z\u0142"],RON:[2,"RON","RON"],RSD:[0,"din","RSD"],RUB:[50,"\u20bd",
"RUB"],SAR:[2,"Rial","Rial"],SEK:[50,"kr","kr"],SGD:[2,"$","S$"],THB:[2,"\u0e3f","THB"],TRY:[2,"\u20ba","TRY"],TWD:[2,"NT$","NT$"],TZS:[0,"TSh","TSh"],UAH:[2,"\u0433\u0440\u043d.","UAH"],USD:[2,"$","US$"],UYU:[2,"$","$U"],VND:[48,"\u20ab","VN\u20ab"],YER:[0,"Rial","Rial"],ZAR:[2,"R","ZAR"]};var za={ca:".",T:",",fa:"%",V:"0",Ca:"+",ea:"-",da:"E",ga:"\u2030",U:"\u221e",Ba:"NaN",ya:"#,##0.###",hb:"#E0",fb:"#,##0%",Xa:"\u00a4#,##0.00",D:"USD"},Aa=za;Aa=za;function Ba(){this.K=null;this.Fa=0;this.Oa=null;this.A=40;this.c=1;this.w=0;this.g=3;this.L=this.l=0;this.ua=this.wa=!1;this.B=this.o="";this.i=S(this).ea;this.u="";this.b=1;this.m=!1;this.j=[];this.R=this.la=!1;this.H=0;this.ka=null;var a=S(this).ya;this.O=a.replace(/ /g,"\u00a0");var b=[0];this.o=T(this,a,b);for(var c=b[0],d=-1,f=0,g=0,e=0,h=-1,k=a.length,m=!0;b[0]<k&&m;b[0]++)switch(a.charAt(b[0])){case "#":0<g?e++:f++;0<=h&&0>d&&h++;break;case "0":if(0<e)throw Error('Unexpected "0" in pattern "'+
a+'"');g++;0<=h&&0>d&&h++;break;case ",":0<h&&this.j.push(h);h=0;break;case ".":if(0<=d)throw Error('Multiple decimal separators in pattern "'+a+'"');d=f+g+e;break;case "E":if(this.R)throw Error('Multiple exponential symbols in pattern "'+a+'"');this.R=!0;this.L=0;b[0]+1<k&&"+"==a.charAt(b[0]+1)&&(b[0]++,this.wa=!0);for(;b[0]+1<k&&"0"==a.charAt(b[0]+1);)b[0]++,this.L++;if(1>f+g||1>this.L)throw Error('Malformed exponential pattern "'+a+'"');m=!1;break;default:b[0]--,m=!1}0==g&&0<f&&0<=d&&(g=d,0==g&&
g++,e=f-g,f=g-1,g=1);if(0>d&&0<e||0<=d&&(d<f||d>f+g)||0==h)throw Error('Malformed pattern "'+a+'"');e=f+g+e;this.g=0<=d?e-d:0;0<=d&&(this.l=f+g-d,0>this.l&&(this.l=0));this.c=(0<=d?d:e)-f;this.R&&(this.A=f+this.c,0==this.g&&0==this.c&&(this.c=1));this.j.push(Math.max(0,h));this.la=0==d||d==e;c=b[0]-c;this.B=T(this,a,b);b[0]<a.length&&";"==a.charAt(b[0])?(b[0]++,1!=this.b&&(this.m=!0),this.i=T(this,a,b),b[0]+=c,this.u=T(this,a,b)):(this.i+=this.o,this.u+=this.B)}function S(a){return a.Oa||Aa}
Ba.prototype.parse=function(a,b){b=b||[0];if(0!=this.H)throw Error("Parsing of compact numbers is unimplemented");a=a.replace(/ |\u202f/g,"\u00a0");var c=a.indexOf(this.o,b[0])==b[0],d=a.indexOf(this.i,b[0])==b[0];c&&d&&(this.o.length>this.i.length?d=!1:this.o.length<this.i.length&&(c=!1));c?b[0]+=this.o.length:d&&(b[0]+=this.i.length);if(a.indexOf(S(this).U,b[0])==b[0]){b[0]+=S(this).U.length;var f=Infinity}else{f=a;var g=!1,e=!1,h=!1,k=-1,m=1,n=S(this).ca,p=S(this).T,r=S(this).da;if(0!=this.H)throw Error("Parsing of compact style numbers is not implemented");
p=p.replace(/\u202f/g,"\u00a0");for(var u="";b[0]<f.length;b[0]++){var t=f.charAt(b[0]),v=Ca(this,t);if(0<=v&&9>=v)u+=v,h=!0;else if(t==n.charAt(0)){if(g||e)break;u+=".";g=!0}else if(t==p.charAt(0)&&("\u00a0"!=p.charAt(0)||b[0]+1<f.length&&0<=Ca(this,f.charAt(b[0]+1)))){if(g||e)break}else if(t==r.charAt(0)){if(e)break;u+="E";e=!0;k=b[0]}else if("+"==t||"-"==t){if(h&&k!=b[0]-1)break;u+=t}else if(1==this.b&&t==S(this).fa.charAt(0)){if(1!=m)break;m=100;if(h){b[0]++;break}}else if(1==this.b&&t==S(this).ga.charAt(0)){if(1!=
m)break;m=1E3;if(h){b[0]++;break}}else break}1!=this.b&&(m=this.b);f=parseFloat(u)/m}if(c){if(a.indexOf(this.B,b[0])!=b[0])return NaN;b[0]+=this.B.length}else if(d){if(a.indexOf(this.u,b[0])!=b[0])return NaN;b[0]+=this.u.length}return d?-f:f};
Ba.prototype.format=function(a){if(isNaN(a))return S(this).Ba;var b=[];var c=null===this.ka?a:this.ka,d=a;if(0==this.H)var f=U;else c=Math.abs(c),d=Math.abs(d),f=Da(this,1>=c?0:V(c)).Y,d=W(d,-f),Ea(this,d),c=W(c,-f),c=Ea(this,c),f=Da(this,f+V(c.na));a=W(a,-f.Y);b.push(f.prefix);c=0>a||0==a&&0>1/a;b.push(c?this.i:this.o);if(isFinite(a))if(a=a*(c?-1:1)*this.b,this.R)if(0==a)Fa(this,a,this.c,b),Ga(this,0,b);else{d=Math.log(a)/Math.log(10);D(!0);d=Math.floor(d+2E-15);a=W(a,-d);var g=this.c;1<this.A&&
this.A>this.c?(g=d%this.A,0>g&&(g=this.A+g),a=W(a,g),d-=g,g=1):1>this.c?(d++,a=W(a,-1)):(d-=this.c-1,a=W(a,this.c-1));Fa(this,a,g,b);Ga(this,d,b)}else Fa(this,a,this.c,b);else b.push(S(this).U);b.push(c?this.u:this.B);b.push(f.va);return b.join("")};function Ea(a,b){var c=W(b,a.g);0<a.w&&(c=Ha(c,a.w,a.g));c=Math.round(c);isFinite(c)?(b=Math.floor(W(c,-a.g)),a=Math.floor(c-W(b,a.g))):a=0;return{na:b,Ja:a}}
function Fa(a,b,c,d){if(a.l>a.g)throw Error("Min value must be less than max value");d||(d=[]);b=Ea(a,b);var f=b.na,g=b.Ja,e=0==f?0:V(f)+1,h=0<a.l||0<g||a.ua&&e<a.w;b=a.l;h&&(b=a.ua&&0<a.w?a.w-e:a.l);var k="";for(e=f;1E20<e;)k="0"+k,e=Math.round(W(e,-1));k=e+k;var m=S(a).ca;e=S(a).V.charCodeAt(0);var n=k.length,p=0;if(0<f||0<c){for(f=n;f<c;f++)d.push(String.fromCharCode(e));if(2<=a.j.length)for(c=1;c<a.j.length;c++)p+=a.j[c];c=n-p;if(0<c){f=a.j;p=n=0;for(var r,u=S(a).T,t=k.length,v=0;v<t;v++)if(d.push(String.fromCharCode(e+
1*Number(k.charAt(v)))),1<t-v)if(r=f[p],v<c){var Za=c-v;(1===r||0<r&&1===Za%r)&&d.push(u)}else p<f.length&&(v===c?p+=1:r===v-c-n+1&&(d.push(u),n+=r,p+=1))}else{c=k;k=a.j;f=S(a).T;r=c.length;u=[];for(n=k.length-1;0<=n&&0<r;n--){p=k[n];for(t=0;t<p&&0<=r-t-1;t++)u.push(String.fromCharCode(e+1*Number(c.charAt(r-t-1))));r-=p;0<r&&u.push(f)}d.push.apply(d,u.reverse())}}else h||d.push(String.fromCharCode(e));(a.la||h)&&d.push(m);g=String(g);h=g.split("e+");2==h.length&&(g=String(Ha(parseFloat(h[0]),a.w,
1)),g=g.replace(".",""),g+=ma("0",parseInt(h[1],10)-g.length+1));a.g+1>g.length&&(g="1"+ma("0",a.g-g.length)+g);for(a=g.length;"0"==g.charAt(a-1)&&a>b+1;)a--;for(f=1;f<a;f++)d.push(String.fromCharCode(e+1*Number(g.charAt(f))))}function Ga(a,b,c){c.push(S(a).da);0>b?(b=-b,c.push(S(a).ea)):a.wa&&c.push(S(a).Ca);b=""+b;for(var d=S(a).V,f=b.length;f<a.L;f++)c.push(d);c.push(b)}function Ca(a,b){b=b.charCodeAt(0);if(48<=b&&58>b)return b-48;a=S(a).V.charCodeAt(0);return a<=b&&b<a+10?b-a:-1}
function T(a,b,c){for(var d="",f=!1,g=b.length;c[0]<g;c[0]++){var e=b.charAt(c[0]);if("'"==e)c[0]+1<g&&"'"==b.charAt(c[0]+1)?(c[0]++,d+="'"):f=!f;else if(f)d+=e;else switch(e){case "#":case "0":case ",":case ".":case ";":return d;case "\u00a4":if(c[0]+1<g&&"\u00a4"==b.charAt(c[0]+1))c[0]++,d+=a.K||S(a).D;else switch(a.Fa){case 0:e=a.K||S(a).D;d+=e in R?R[e][1]:e;break;case 2:e=a.K||S(a).D;var h=R[e];d+=h?e==h[1]?e:e+" "+h[1]:e;break;case 1:e=a.K||S(a).D,d+=e in R?R[e][2]:e}break;case "%":if(!a.m&&
1!=a.b)throw Error("Too many percent/permill");if(a.m&&100!=a.b)throw Error("Inconsistent use of percent/permill characters");a.b=100;a.m=!1;d+=S(a).fa;break;case "\u2030":if(!a.m&&1!=a.b)throw Error("Too many percent/permill");if(a.m&&1E3!=a.b)throw Error("Inconsistent use of percent/permill characters");a.b=1E3;a.m=!1;d+=S(a).ga;break;default:d+=e}}return d}var U={prefix:"",va:"",Y:0};
function Da(a,b){a=1==a.H?Q.ba:Q.xa;null==a&&(a=Q.ba);if(3>b)return U;b=Math.min(14,b);var c=a[W(1,b)];for(--b;!c&&3<=b;)c=a[W(1,b)],b--;if(!c)return U;a=c.other;return a&&"0"!=a?(a=/([^0]*)(0+)(.*)/.exec(a))?{prefix:a[1],va:a[3],Y:b+1-(a[2].length-1)}:U:U}function V(a){if(!isFinite(a))return 0<a?a:0;for(var b=0;1<=(a/=10);)b++;return b}
function W(a,b){D(0==b%1,'Cannot shift by fractional digits "%s".',b);if(!a||!isFinite(a)||0==b)return a;a=String(a).split("e");return parseFloat(a[0]+"e"+(parseInt(a[1]||0,10)+b))}function Ia(a,b){D(0==b%1,'Cannot round to fractional digits "%s".',b);return a&&isFinite(a)?W(Math.round(W(a,b)),-b):a}function Ha(a,b,c){if(!a)return a;b=b-V(a)-1;return b<-c?Ia(a,-c):Ia(a,b)};function Ja(a){return 1==a%10&&11!=a%100?"one":2==a%10&&12!=a%100?"two":3==a%10&&13!=a%100?"few":"other"}var Ka=Ja;Ka=Ja;function La(a,b){if(void 0===b){b=a+"";var c=b.indexOf(".");b=Math.min(-1==c?0:b.length-c-1,3)}return 1==(a|0)&&0==b?"one":"other"}var Ma=La;Ma=La;function X(a){this.O=a;this.N=this.s=this.Z=null;a=Aa;var b=Q;if(Na!==a||Oa!==b)Na=a,Oa=b,Pa=new Ba;this.Na=Pa}var Na=null,Oa=null,Pa=null,Qa=/'([{}#].*?)'/g,Ra=/''/g;
X.prototype.format=function(a){if(this.O){this.Z=[];var b=Sa(this,this.O);this.N=Y(this,b);this.O=null}if(this.N&&0!=this.N.length){b=this.Z;var c=b.length;if(0<c){for(var d=Array(c),f=0;f<c;f++)d[f]=b[f];b=d}else b=[];this.s=b;b=[];Ta(this,this.N,a,!1,b);a=b.join("");for(D(-1==a.search("#"),"Not all # were replaced.");0<this.s.length;)a=a.replace(this.W(this.s),this.s.pop())}else a="";return a};
function Ta(a,b,c,d,f){for(var g=0;g<b.length;g++)switch(b[g].type){case 4:f.push(b[g].value);break;case 3:var e=b[g].value,h=a,k=f,m=c[e];void 0===m?k.push("Undefined parameter - "+e):(h.s.push(m),k.push(h.W(h.s)));break;case 2:e=b[g].value;h=a;k=c;m=d;var n=f,p=e.F;void 0===k[p]?n.push("Undefined parameter - "+p):(p=e[k[p]],void 0===p&&(p=e.other,G(p,"Invalid option or missing other option for select block.")),Ta(h,p,k,m,n));break;case 0:e=b[g].value;Ua(a,e,c,Ma,d,f);break;case 1:e=b[g].value;Ua(a,
e,c,Ka,d,f);break;default:E("Unrecognized block type: "+b[g].type)}}function Ua(a,b,c,d,f,g){var e=b.F,h=b.ha,k=+c[e];isNaN(k)?g.push("Undefined or invalid parameter - "+e):(h=k-h,e=b[c[e]],void 0===e&&(d=d(Math.abs(h)),F(d,"Invalid plural key."),e=b[d],void 0===e&&(e=b.other),G(e,"Invalid option or missing other option for plural block.")),b=[],Ta(a,e,c,f,b),c=b.join(""),F(c,"Empty block in plural."),f?g.push(c):(a=a.Na.format(h),g.push(c.replace(/#/g,a))))}
function Sa(a,b){var c=a.Z,d=x(a.W,a);b=b.replace(Ra,function(){c.push("'");return d(c)});return b=b.replace(Qa,function(f,g){c.push(g);return d(c)})}
function Z(a){var b=0,c=[],d=[],f=/[{}]/g;f.lastIndex=0;for(var g;g=f.exec(a);){var e=g.index;"}"==g[0]?(g=c.pop(),D(void 0!==g&&"{"==g,"No matching { for }."),0==c.length&&(g={type:1},g.value=a.substring(b,e),d.push(g),b=e+1)):(0==c.length&&(b=a.substring(b,e),""!=b&&d.push({type:0,value:b}),b=e+1),c.push("{"))}D(0==c.length,"There are mismatched { or } in the pattern.");b=a.substring(b);""!=b&&d.push({type:0,value:b});return d}
var Va=/^\s*(\w+)\s*,\s*plural\s*,(?:\s*offset:(\d+))?/,Wa=/^\s*(\w+)\s*,\s*selectordinal\s*,/,Xa=/^\s*(\w+)\s*,\s*select\s*,/;
function Y(a,b){var c=[];b=Z(b);for(var d=0;d<b.length;d++){var f={};if(0==b[d].type)f.type=4,f.value=b[d].value;else if(1==b[d].type){var g=b[d].value;switch(Va.test(g)?0:Wa.test(g)?1:Xa.test(g)?2:/^\s*\w+\s*/.test(g)?3:5){case 2:f.type=2;f.value=Ya(a,b[d].value);break;case 0:f.type=0;f.value=$a(a,b[d].value);break;case 1:f.type=1;f.value=ab(a,b[d].value);break;case 3:f.type=3;f.value=b[d].value;break;default:E("Unknown block type for pattern: "+b[d].value)}}else E("Unknown part of the pattern.");
c.push(f)}return c}function Ya(a,b){var c="";b=b.replace(Xa,function(h,k){c=k;return""});var d={};d.F=c;b=Z(b);for(var f=0;f<b.length;){var g=b[f].value;F(g,"Missing select key element.");f++;D(f<b.length,"Missing or invalid select value element.");var e;1==b[f].type?e=Y(a,b[f].value):E("Expected block type.");d[g.replace(/\s/g,"")]=e;f++}G(d.other,"Missing other key in select statement.");return d}
function $a(a,b){var c="",d=0;b=b.replace(Va,function(k,m,n){c=m;n&&(d=parseInt(n,10));return""});var f={};f.F=c;f.ha=d;b=Z(b);for(var g=0;g<b.length;){var e=b[g].value;F(e,"Missing plural key element.");g++;D(g<b.length,"Missing or invalid plural value element.");var h;1==b[g].type?h=Y(a,b[g].value):E("Expected block type.");f[e.replace(/\s*(?:=)?(\w+)\s*/,"$1")]=h;g++}G(f.other,"Missing other key in plural statement.");return f}
function ab(a,b){var c="";b=b.replace(Wa,function(h,k){c=k;return""});var d={};d.F=c;d.ha=0;b=Z(b);for(var f=0;f<b.length;){var g=b[f].value;F(g,"Missing ordinal key element.");f++;D(f<b.length,"Missing or invalid ordinal value element.");if(1==b[f].type)var e=Y(a,b[f].value);else E("Expected block type.");d[g.replace(/\s*(?:=)?(\w+)\s*/,"$1")]=e;f++}G(d.other,"Missing other key in selectordinal statement.");return d}
X.prototype.W=function(a){D(0<a.length,"Literal array is empty.");return"\ufddf_"+(a.length-1).toString(10)+"_"};var bb=null,cb=null,db=null;
function eb(a,b){a=void 0===a?{}:a;var c=!1,d,f=!!a.isDemoSession,g=a.actionData,e=a.items;a.id&&"image"==a.id&&e&&e.length&&(d=e[0].entry);if(g&&"new_note"==g.actionType||a.source&&"file_handler"==a.source&&d)c=!0;if(g&&g.isLockScreenAction){var h=g.restoreLastActionState;chrome.app.window.create("index.html",{lockScreenAction:g.actionType,frame:{type:"none"}},function(k){k.contentWindow._DumpException=function(m){return console.log(m.stack?m.stack:m)};k.contentWindow._keep_persistenceEnabled_=h;
k.contentWindow._keep_isDemoMode_=f})}else c||b?chrome.app.window.create("index.html",{id:"google-keep",state:"maximized",frame:{color:-1!=K.indexOf("CrOS")?"#fff":void 0}},function(k){k.contentWindow._DumpException=function(m){return console.log(m.stack?m.stack:m)};k.contentWindow._keep_isDemoMode_=f;c?(k.contentWindow._keep_launchToDrawing_=!0,k.contentWindow._keep_drawingImageEntry_=d):b&&(k.contentWindow._keep_drawingNoteIdToOpen_=b)}):chrome.app.window.create("index.html",{id:"google-keep",innerBounds:{width:960,
height:700,minWidth:360,minHeight:540},frame:{color:-1!=K.indexOf("CrOS")?"#fff":void 0}},function(k){k.contentWindow._DumpException=function(m){return console.log(m.stack?m.stack:m)};k.contentWindow._keep_isDemoMode_=f})}chrome.app.runtime.onLaunched.addListener(eb);
chrome.notifications.onClicked.addListener(function(a){var b=chrome.app.window.getAll();if(b&&0==b.length){chrome.notifications.clear(a);try{var c=JSON.parse(a);var d=new z(c.type,c.nodeId)}catch(f){d=new z("unknown")}a=d;"lockscreenNote"==a.type&&a.M?eb(void 0,a.M):eb()}});
sa&&(bb=new ta,bb.oa.push(function(a){var b=[];a=q(a);for(var c=a.next();!c.done;c=a.next())if(c=c.value,!c.isNotified){b.push(c.nodeId);c.isNotified=!0;var d=c.storageId;d&&chrome.lockScreen.data.setContent(d,xa(JSON.stringify(c)))}b.length&&(a=(new z("lockscreenNote",1==b.length?b[0]:void 0)).toString(),b=b.length,cb||(cb=new X("{noteCount, plural, =1 {Lock screen note taken}other {# lock screen notes taken}}")),db||(db=new X("{noteCount, plural, =1 {Open Keep Chrome app to edit or sync note.}other {Open Keep Chrome app to edit or sync notes.}}")),
chrome.notifications.create(a,{iconUrl:"icon_128.png",type:"basic",title:cb.format({noteCount:b}),message:db.format({noteCount:b}),isClickable:!0}))}));
