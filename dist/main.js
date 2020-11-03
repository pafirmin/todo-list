(()=>{"use strict";class t{constructor(t,e,n,r,a){this.title=t,this.notes=e,this.dueDate=`${n} ${r}`,this.priority=a,this.log=new Date,this.done=!1}}class e{constructor(t){this.title=t,this.items=[],this.filteredItems=[]}addItem(t){this.items.push(t)}}const n=function(){const n=new e("Your project"),r=JSON.parse(localStorage.getItem("projects"))||[n];let a=r[0]||n;function i(){localStorage.setItem("projects",JSON.stringify(r))}return{getActiveProject:()=>a,setActiveProject:t=>{a=t},getProjects:()=>r,addNewProject:function(t){const n=new e(t);return r.push(n),a=n,i(),n},newItem:function(e){const n=new t(e.title.value,e.notes.value,e.dueDate.value,e.dueTime.value,e.priority.value);return a.items.push(n),i(),n},deleteTask:function(t){const e=a.items.indexOf(t);a.items.splice(e,1),i()},deleteProject:function(){const t=r.indexOf(a);r.splice(t,1),a=r[0]||n,i()},dueDateSort:function(){a.items.sort(((t,e)=>t.dueDate<e.dueDate?-1:1)),i()},addedDateSort:function(){a.items.sort(((t,e)=>t.log<e.log?-1:1)),i()},toggleDone:t=>{t.done=1!=t.done,i()},filterDone:function(){return a.items.filter((t=>!0===t.done))},filterUrgent:function(){return a.items.filter((t=>"high"!=t.priority||!0===t.done))}}}();function r(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function a(t){r(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function i(t,e){r(2,arguments);var n=a(t),i=a(e),o=n.getTime()-i.getTime();return o<0?-1:o>0?1:o}function o(t,e){r(2,arguments);var n=a(t),i=a(e),o=n.getFullYear()-i.getFullYear(),s=n.getMonth()-i.getMonth();return 12*o+s}function s(t,e){r(2,arguments);var n=a(t),s=a(e),u=i(n,s),c=Math.abs(o(n,s));n.setMonth(n.getMonth()-u*c);var d=i(n,s)===-u,l=u*(c-d);return 0===l?0:l}function u(t,e){r(2,arguments);var n=a(t),i=a(e);return n.getTime()-i.getTime()}function c(t,e){r(2,arguments);var n=u(t,e)/1e3;return n>0?Math.floor(n):Math.ceil(n)}var d={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function l(t){return function(e){var n=e||{},r=n.width?String(n.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}var f,m={date:l({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:l({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:l({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},h={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function w(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=a.width?String(a.width):i;r=t.formattingValues[o]||t.formattingValues[i]}else{var s=t.defaultWidth,u=a.width?String(a.width):t.defaultWidth;r=t.values[u]||t.values[s]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function g(t){return function(e,n){var r=String(e),a=n||{},i=a.width,o=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],s=r.match(o);if(!s)return null;var u,c=s[0],d=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth];return u="[object Array]"===Object.prototype.toString.call(d)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(c))return n}(d):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(c))return n}(d),u=t.valueCallback?t.valueCallback(u):u,{value:u=a.valueCallback?a.valueCallback(u):u,rest:r.slice(c.length)}}}const y={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"==typeof d[t]?d[t]:1===e?d[t].one:d[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:m,formatRelative:function(t,e,n,r){return h[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:w({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:w({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:w({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:w({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:w({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(f={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),r=e||{},a=n.match(f.matchPattern);if(!a)return null;var i=a[0],o=n.match(f.parsePattern);if(!o)return null;var s=f.valueCallback?f.valueCallback(o[0]):o[0];return{value:s=r.valueCallback?r.valueCallback(s):s,rest:n.slice(i.length)}}),era:g({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:g({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:g({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:g({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:g({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function p(t,e){if(null==t)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in e=e||{})e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function v(t){return p({},t)}var b=6e4;function T(t){return t.getTime()%b}function k(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());e.setSeconds(0,0);var r=n>0?(b+T(e))%b:T(e);return n*b+r}var C=1440,x=43200;function D(t,e,n){r(2,arguments);var o=n||{},u=o.locale||y;if(!u.formatDistance)throw new RangeError("locale must contain formatDistance property");var d=i(t,e);if(isNaN(d))throw new RangeError("Invalid time value");var l,f,m=v(o);m.addSuffix=Boolean(o.addSuffix),m.comparison=d,d>0?(l=a(e),f=a(t)):(l=a(t),f=a(e));var h,w=c(f,l),g=(k(f)-k(l))/1e3,p=Math.round((w-g)/60);if(p<2)return o.includeSeconds?w<5?u.formatDistance("lessThanXSeconds",5,m):w<10?u.formatDistance("lessThanXSeconds",10,m):w<20?u.formatDistance("lessThanXSeconds",20,m):w<40?u.formatDistance("halfAMinute",null,m):w<60?u.formatDistance("lessThanXMinutes",1,m):u.formatDistance("xMinutes",1,m):0===p?u.formatDistance("lessThanXMinutes",1,m):u.formatDistance("xMinutes",p,m);if(p<45)return u.formatDistance("xMinutes",p,m);if(p<90)return u.formatDistance("aboutXHours",1,m);if(p<C){var b=Math.round(p/60);return u.formatDistance("aboutXHours",b,m)}if(p<2520)return u.formatDistance("xDays",1,m);if(p<x){var T=Math.round(p/C);return u.formatDistance("xDays",T,m)}if(p<86400)return h=Math.round(p/x),u.formatDistance("aboutXMonths",h,m);if((h=s(f,l))<12){var D=Math.round(p/x);return u.formatDistance("xMonths",D,m)}var M=h%12,E=Math.floor(h/12);return M<3?u.formatDistance("aboutXYears",E,m):M<9?u.formatDistance("overXYears",E,m):u.formatDistance("almostXYears",E+1,m)}function M(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function E(t,e){r(2,arguments);var n=a(t).getTime(),i=M(e);return new Date(n+i)}function P(t,e){r(2,arguments);var n=M(e);return E(t,-n)}function U(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function S(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}const L={p:S,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return U(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",U(a,e)).replace("{{time}}",S(i,e))}};var Y=["D","DD"],I=["YY","YYYY"];function q(t){return-1!==Y.indexOf(t)}function H(t){return-1!==I.indexOf(t)}function N(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}function W(t,e){r(1,arguments);var n=e||{},i=n.locale,o=i&&i.options&&i.options.weekStartsOn,s=null==o?0:M(o),u=null==n.weekStartsOn?s:M(n.weekStartsOn);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=a(t),d=c.getUTCDay(),l=(d<u?7:0)+d-u;return c.setUTCDate(c.getUTCDate()-l),c.setUTCHours(0,0,0,0),c}function j(t,e){r(1,arguments);var n=a(t,e),i=n.getUTCFullYear(),o=e||{},s=o.locale,u=s&&s.options&&s.options.firstWeekContainsDate,c=null==u?1:M(u),d=null==o.firstWeekContainsDate?c:M(o.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(i+1,0,d),l.setUTCHours(0,0,0,0);var f=W(l,e),m=new Date(0);m.setUTCFullYear(i,0,d),m.setUTCHours(0,0,0,0);var h=W(m,e);return n.getTime()>=f.getTime()?i+1:n.getTime()>=h.getTime()?i:i-1}function B(t,e,n){r(2,arguments);var i=n||{},o=i.locale,s=o&&o.options&&o.options.weekStartsOn,u=null==s?0:M(s),c=null==i.weekStartsOn?u:M(i.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=a(t),l=M(e),f=d.getUTCDay(),m=l%7,h=(m+7)%7,w=(h<c?7:0)+l-f;return d.setUTCDate(d.getUTCDate()+w),d}function X(t){r(1,arguments);var e=1,n=a(t),i=n.getUTCDay(),o=(i<e?7:0)+i-e;return n.setUTCDate(n.getUTCDate()-o),n.setUTCHours(0,0,0,0),n}function O(t){r(1,arguments);var e=a(t),n=e.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(n+1,0,4),i.setUTCHours(0,0,0,0);var o=X(i),s=new Date(0);s.setUTCFullYear(n,0,4),s.setUTCHours(0,0,0,0);var u=X(s);return e.getTime()>=o.getTime()?n+1:e.getTime()>=u.getTime()?n:n-1}function A(t){r(1,arguments);var e=O(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var a=X(n);return a}var Q=6048e5;function R(t){r(1,arguments);var e=a(t),n=X(e).getTime()-A(e).getTime();return Math.round(n/Q)+1}function F(t,e){r(1,arguments);var n=e||{},a=n.locale,i=a&&a.options&&a.options.firstWeekContainsDate,o=null==i?1:M(i),s=null==n.firstWeekContainsDate?o:M(n.firstWeekContainsDate),u=j(t,e),c=new Date(0);c.setUTCFullYear(u,0,s),c.setUTCHours(0,0,0,0);var d=W(c,e);return d}var G=6048e5;function J(t,e){r(1,arguments);var n=a(t),i=W(n,e).getTime()-F(n,e).getTime();return Math.round(i/G)+1}var K=/^(1[0-2]|0?\d)/,$=/^(3[0-1]|[0-2]?\d)/,z=/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,Z=/^(5[0-3]|[0-4]?\d)/,V=/^(2[0-3]|[0-1]?\d)/,_=/^(2[0-4]|[0-1]?\d)/,tt=/^(1[0-1]|0?\d)/,et=/^(1[0-2]|0?\d)/,nt=/^[0-5]?\d/,rt=/^[0-5]?\d/,at=/^\d/,it=/^\d{1,2}/,ot=/^\d{1,3}/,st=/^\d{1,4}/,ut=/^-?\d+/,ct=/^-?\d/,dt=/^-?\d{1,2}/,lt=/^-?\d{1,3}/,ft=/^-?\d{1,4}/,mt=/^([+-])(\d{2})(\d{2})?|Z/,ht=/^([+-])(\d{2})(\d{2})|Z/,wt=/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,gt=/^([+-])(\d{2}):(\d{2})|Z/,yt=/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;function pt(t,e,n){var r=e.match(t);if(!r)return null;var a=parseInt(r[0],10);return{value:n?n(a):a,rest:e.slice(r[0].length)}}function vt(t,e){var n=e.match(t);return n?"Z"===n[0]?{value:0,rest:e.slice(1)}:{value:("+"===n[1]?1:-1)*(36e5*(n[2]?parseInt(n[2],10):0)+6e4*(n[3]?parseInt(n[3],10):0)+1e3*(n[5]?parseInt(n[5],10):0)),rest:e.slice(n[0].length)}:null}function bt(t,e){return pt(ut,t,e)}function Tt(t,e,n){switch(t){case 1:return pt(at,e,n);case 2:return pt(it,e,n);case 3:return pt(ot,e,n);case 4:return pt(st,e,n);default:return pt(new RegExp("^\\d{1,"+t+"}"),e,n)}}function kt(t,e,n){switch(t){case 1:return pt(ct,e,n);case 2:return pt(dt,e,n);case 3:return pt(lt,e,n);case 4:return pt(ft,e,n);default:return pt(new RegExp("^-?\\d{1,"+t+"}"),e,n)}}function Ct(t){switch(t){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function xt(t,e){var n,r=e>0,a=r?e:1-e;if(a<=50)n=t||100;else{var i=a+50;n=t+100*Math.floor(i/100)-(t>=i%100?100:0)}return r?n:1-n}var Dt=[31,28,31,30,31,30,31,31,30,31,30,31],Mt=[31,29,31,30,31,30,31,31,30,31,30,31];function Et(t){return t%400==0||t%4==0&&t%100!=0}const Pt={G:{priority:140,parse:function(t,e,n,r){switch(e){case"G":case"GG":case"GGG":return n.era(t,{width:"abbreviated"})||n.era(t,{width:"narrow"});case"GGGGG":return n.era(t,{width:"narrow"});case"GGGG":default:return n.era(t,{width:"wide"})||n.era(t,{width:"abbreviated"})||n.era(t,{width:"narrow"})}},set:function(t,e,n,r){return e.era=n,t.setUTCFullYear(n,0,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["R","u","t","T"]},y:{priority:130,parse:function(t,e,n,r){var a=function(t){return{year:t,isTwoDigitYear:"yy"===e}};switch(e){case"y":return Tt(4,t,a);case"yo":return n.ordinalNumber(t,{unit:"year",valueCallback:a});default:return Tt(e.length,t,a)}},validate:function(t,e,n){return e.isTwoDigitYear||e.year>0},set:function(t,e,n,r){var a=t.getUTCFullYear();if(n.isTwoDigitYear){var i=xt(n.year,a);return t.setUTCFullYear(i,0,1),t.setUTCHours(0,0,0,0),t}var o="era"in e&&1!==e.era?1-n.year:n.year;return t.setUTCFullYear(o,0,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","u","w","I","i","e","c","t","T"]},Y:{priority:130,parse:function(t,e,n,r){var a=function(t){return{year:t,isTwoDigitYear:"YY"===e}};switch(e){case"Y":return Tt(4,t,a);case"Yo":return n.ordinalNumber(t,{unit:"year",valueCallback:a});default:return Tt(e.length,t,a)}},validate:function(t,e,n){return e.isTwoDigitYear||e.year>0},set:function(t,e,n,r){var a=j(t,r);if(n.isTwoDigitYear){var i=xt(n.year,a);return t.setUTCFullYear(i,0,r.firstWeekContainsDate),t.setUTCHours(0,0,0,0),W(t,r)}var o="era"in e&&1!==e.era?1-n.year:n.year;return t.setUTCFullYear(o,0,r.firstWeekContainsDate),t.setUTCHours(0,0,0,0),W(t,r)},incompatibleTokens:["y","R","u","Q","q","M","L","I","d","D","i","t","T"]},R:{priority:130,parse:function(t,e,n,r){return kt("R"===e?4:e.length,t)},set:function(t,e,n,r){var a=new Date(0);return a.setUTCFullYear(n,0,4),a.setUTCHours(0,0,0,0),X(a)},incompatibleTokens:["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]},u:{priority:130,parse:function(t,e,n,r){return kt("u"===e?4:e.length,t)},set:function(t,e,n,r){return t.setUTCFullYear(n,0,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["G","y","Y","R","w","I","i","e","c","t","T"]},Q:{priority:120,parse:function(t,e,n,r){switch(e){case"Q":case"QQ":return Tt(e.length,t);case"Qo":return n.ordinalNumber(t,{unit:"quarter"});case"QQQ":return n.quarter(t,{width:"abbreviated",context:"formatting"})||n.quarter(t,{width:"narrow",context:"formatting"});case"QQQQQ":return n.quarter(t,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(t,{width:"wide",context:"formatting"})||n.quarter(t,{width:"abbreviated",context:"formatting"})||n.quarter(t,{width:"narrow",context:"formatting"})}},validate:function(t,e,n){return e>=1&&e<=4},set:function(t,e,n,r){return t.setUTCMonth(3*(n-1),1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]},q:{priority:120,parse:function(t,e,n,r){switch(e){case"q":case"qq":return Tt(e.length,t);case"qo":return n.ordinalNumber(t,{unit:"quarter"});case"qqq":return n.quarter(t,{width:"abbreviated",context:"standalone"})||n.quarter(t,{width:"narrow",context:"standalone"});case"qqqqq":return n.quarter(t,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(t,{width:"wide",context:"standalone"})||n.quarter(t,{width:"abbreviated",context:"standalone"})||n.quarter(t,{width:"narrow",context:"standalone"})}},validate:function(t,e,n){return e>=1&&e<=4},set:function(t,e,n,r){return t.setUTCMonth(3*(n-1),1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]},M:{priority:110,parse:function(t,e,n,r){var a=function(t){return t-1};switch(e){case"M":return pt(K,t,a);case"MM":return Tt(2,t,a);case"Mo":return n.ordinalNumber(t,{unit:"month",valueCallback:a});case"MMM":return n.month(t,{width:"abbreviated",context:"formatting"})||n.month(t,{width:"narrow",context:"formatting"});case"MMMMM":return n.month(t,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(t,{width:"wide",context:"formatting"})||n.month(t,{width:"abbreviated",context:"formatting"})||n.month(t,{width:"narrow",context:"formatting"})}},validate:function(t,e,n){return e>=0&&e<=11},set:function(t,e,n,r){return t.setUTCMonth(n,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]},L:{priority:110,parse:function(t,e,n,r){var a=function(t){return t-1};switch(e){case"L":return pt(K,t,a);case"LL":return Tt(2,t,a);case"Lo":return n.ordinalNumber(t,{unit:"month",valueCallback:a});case"LLL":return n.month(t,{width:"abbreviated",context:"standalone"})||n.month(t,{width:"narrow",context:"standalone"});case"LLLLL":return n.month(t,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(t,{width:"wide",context:"standalone"})||n.month(t,{width:"abbreviated",context:"standalone"})||n.month(t,{width:"narrow",context:"standalone"})}},validate:function(t,e,n){return e>=0&&e<=11},set:function(t,e,n,r){return t.setUTCMonth(n,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]},w:{priority:100,parse:function(t,e,n,r){switch(e){case"w":return pt(Z,t);case"wo":return n.ordinalNumber(t,{unit:"week"});default:return Tt(e.length,t)}},validate:function(t,e,n){return e>=1&&e<=53},set:function(t,e,n,i){return W(function(t,e,n){r(2,arguments);var i=a(t),o=M(e),s=J(i,n)-o;return i.setUTCDate(i.getUTCDate()-7*s),i}(t,n,i),i)},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","i","t","T"]},I:{priority:100,parse:function(t,e,n,r){switch(e){case"I":return pt(Z,t);case"Io":return n.ordinalNumber(t,{unit:"week"});default:return Tt(e.length,t)}},validate:function(t,e,n){return e>=1&&e<=53},set:function(t,e,n,i){return X(function(t,e){r(2,arguments);var n=a(t),i=M(e),o=R(n)-i;return n.setUTCDate(n.getUTCDate()-7*o),n}(t,n,i),i)},incompatibleTokens:["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]},d:{priority:90,subPriority:1,parse:function(t,e,n,r){switch(e){case"d":return pt($,t);case"do":return n.ordinalNumber(t,{unit:"date"});default:return Tt(e.length,t)}},validate:function(t,e,n){var r=Et(t.getUTCFullYear()),a=t.getUTCMonth();return r?e>=1&&e<=Mt[a]:e>=1&&e<=Dt[a]},set:function(t,e,n,r){return t.setUTCDate(n),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","q","Q","w","I","D","i","e","c","t","T"]},D:{priority:90,subPriority:1,parse:function(t,e,n,r){switch(e){case"D":case"DD":return pt(z,t);case"Do":return n.ordinalNumber(t,{unit:"date"});default:return Tt(e.length,t)}},validate:function(t,e,n){return Et(t.getUTCFullYear())?e>=1&&e<=366:e>=1&&e<=365},set:function(t,e,n,r){return t.setUTCMonth(0,n),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]},E:{priority:90,parse:function(t,e,n,r){switch(e){case"E":case"EE":case"EEE":return n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"});case"EEEEE":return n.day(t,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"});case"EEEE":default:return n.day(t,{width:"wide",context:"formatting"})||n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"})}},validate:function(t,e,n){return e>=0&&e<=6},set:function(t,e,n,r){return(t=B(t,n,r)).setUTCHours(0,0,0,0),t},incompatibleTokens:["D","i","e","c","t","T"]},e:{priority:90,parse:function(t,e,n,r){var a=function(t){var e=7*Math.floor((t-1)/7);return(t+r.weekStartsOn+6)%7+e};switch(e){case"e":case"ee":return Tt(e.length,t,a);case"eo":return n.ordinalNumber(t,{unit:"day",valueCallback:a});case"eee":return n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"});case"eeeee":return n.day(t,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"});case"eeee":default:return n.day(t,{width:"wide",context:"formatting"})||n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"})}},validate:function(t,e,n){return e>=0&&e<=6},set:function(t,e,n,r){return(t=B(t,n,r)).setUTCHours(0,0,0,0),t},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]},c:{priority:90,parse:function(t,e,n,r){var a=function(t){var e=7*Math.floor((t-1)/7);return(t+r.weekStartsOn+6)%7+e};switch(e){case"c":case"cc":return Tt(e.length,t,a);case"co":return n.ordinalNumber(t,{unit:"day",valueCallback:a});case"ccc":return n.day(t,{width:"abbreviated",context:"standalone"})||n.day(t,{width:"short",context:"standalone"})||n.day(t,{width:"narrow",context:"standalone"});case"ccccc":return n.day(t,{width:"narrow",context:"standalone"});case"cccccc":return n.day(t,{width:"short",context:"standalone"})||n.day(t,{width:"narrow",context:"standalone"});case"cccc":default:return n.day(t,{width:"wide",context:"standalone"})||n.day(t,{width:"abbreviated",context:"standalone"})||n.day(t,{width:"short",context:"standalone"})||n.day(t,{width:"narrow",context:"standalone"})}},validate:function(t,e,n){return e>=0&&e<=6},set:function(t,e,n,r){return(t=B(t,n,r)).setUTCHours(0,0,0,0),t},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]},i:{priority:90,parse:function(t,e,n,r){var a=function(t){return 0===t?7:t};switch(e){case"i":case"ii":return Tt(e.length,t);case"io":return n.ordinalNumber(t,{unit:"day"});case"iii":return n.day(t,{width:"abbreviated",context:"formatting",valueCallback:a})||n.day(t,{width:"short",context:"formatting",valueCallback:a})||n.day(t,{width:"narrow",context:"formatting",valueCallback:a});case"iiiii":return n.day(t,{width:"narrow",context:"formatting",valueCallback:a});case"iiiiii":return n.day(t,{width:"short",context:"formatting",valueCallback:a})||n.day(t,{width:"narrow",context:"formatting",valueCallback:a});case"iiii":default:return n.day(t,{width:"wide",context:"formatting",valueCallback:a})||n.day(t,{width:"abbreviated",context:"formatting",valueCallback:a})||n.day(t,{width:"short",context:"formatting",valueCallback:a})||n.day(t,{width:"narrow",context:"formatting",valueCallback:a})}},validate:function(t,e,n){return e>=1&&e<=7},set:function(t,e,n,i){return(t=function(t,e){r(2,arguments);var n=M(e);n%7==0&&(n-=7);var i=1,o=a(t),s=o.getUTCDay(),u=((n%7+7)%7<i?7:0)+n-s;return o.setUTCDate(o.getUTCDate()+u),o}(t,n,i)).setUTCHours(0,0,0,0),t},incompatibleTokens:["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]},a:{priority:80,parse:function(t,e,n,r){switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaaa":return n.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(t,{width:"wide",context:"formatting"})||n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"})}},set:function(t,e,n,r){return t.setUTCHours(Ct(n),0,0,0),t},incompatibleTokens:["b","B","H","K","k","t","T"]},b:{priority:80,parse:function(t,e,n,r){switch(e){case"b":case"bb":case"bbb":return n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbbb":return n.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(t,{width:"wide",context:"formatting"})||n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"})}},set:function(t,e,n,r){return t.setUTCHours(Ct(n),0,0,0),t},incompatibleTokens:["a","B","H","K","k","t","T"]},B:{priority:80,parse:function(t,e,n,r){switch(e){case"B":case"BB":case"BBB":return n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBBB":return n.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(t,{width:"wide",context:"formatting"})||n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"})}},set:function(t,e,n,r){return t.setUTCHours(Ct(n),0,0,0),t},incompatibleTokens:["a","b","t","T"]},h:{priority:70,parse:function(t,e,n,r){switch(e){case"h":return pt(et,t);case"ho":return n.ordinalNumber(t,{unit:"hour"});default:return Tt(e.length,t)}},validate:function(t,e,n){return e>=1&&e<=12},set:function(t,e,n,r){var a=t.getUTCHours()>=12;return a&&n<12?t.setUTCHours(n+12,0,0,0):a||12!==n?t.setUTCHours(n,0,0,0):t.setUTCHours(0,0,0,0),t},incompatibleTokens:["H","K","k","t","T"]},H:{priority:70,parse:function(t,e,n,r){switch(e){case"H":return pt(V,t);case"Ho":return n.ordinalNumber(t,{unit:"hour"});default:return Tt(e.length,t)}},validate:function(t,e,n){return e>=0&&e<=23},set:function(t,e,n,r){return t.setUTCHours(n,0,0,0),t},incompatibleTokens:["a","b","h","K","k","t","T"]},K:{priority:70,parse:function(t,e,n,r){switch(e){case"K":return pt(tt,t);case"Ko":return n.ordinalNumber(t,{unit:"hour"});default:return Tt(e.length,t)}},validate:function(t,e,n){return e>=0&&e<=11},set:function(t,e,n,r){return t.getUTCHours()>=12&&n<12?t.setUTCHours(n+12,0,0,0):t.setUTCHours(n,0,0,0),t},incompatibleTokens:["a","b","h","H","k","t","T"]},k:{priority:70,parse:function(t,e,n,r){switch(e){case"k":return pt(_,t);case"ko":return n.ordinalNumber(t,{unit:"hour"});default:return Tt(e.length,t)}},validate:function(t,e,n){return e>=1&&e<=24},set:function(t,e,n,r){var a=n<=24?n%24:n;return t.setUTCHours(a,0,0,0),t},incompatibleTokens:["a","b","h","H","K","t","T"]},m:{priority:60,parse:function(t,e,n,r){switch(e){case"m":return pt(nt,t);case"mo":return n.ordinalNumber(t,{unit:"minute"});default:return Tt(e.length,t)}},validate:function(t,e,n){return e>=0&&e<=59},set:function(t,e,n,r){return t.setUTCMinutes(n,0,0),t},incompatibleTokens:["t","T"]},s:{priority:50,parse:function(t,e,n,r){switch(e){case"s":return pt(rt,t);case"so":return n.ordinalNumber(t,{unit:"second"});default:return Tt(e.length,t)}},validate:function(t,e,n){return e>=0&&e<=59},set:function(t,e,n,r){return t.setUTCSeconds(n,0),t},incompatibleTokens:["t","T"]},S:{priority:30,parse:function(t,e,n,r){return Tt(e.length,t,(function(t){return Math.floor(t*Math.pow(10,3-e.length))}))},set:function(t,e,n,r){return t.setUTCMilliseconds(n),t},incompatibleTokens:["t","T"]},X:{priority:10,parse:function(t,e,n,r){switch(e){case"X":return vt(mt,t);case"XX":return vt(ht,t);case"XXXX":return vt(wt,t);case"XXXXX":return vt(yt,t);case"XXX":default:return vt(gt,t)}},set:function(t,e,n,r){return e.timestampIsSet?t:new Date(t.getTime()-n)},incompatibleTokens:["t","T","x"]},x:{priority:10,parse:function(t,e,n,r){switch(e){case"x":return vt(mt,t);case"xx":return vt(ht,t);case"xxxx":return vt(wt,t);case"xxxxx":return vt(yt,t);case"xxx":default:return vt(gt,t)}},set:function(t,e,n,r){return e.timestampIsSet?t:new Date(t.getTime()-n)},incompatibleTokens:["t","T","X"]},t:{priority:40,parse:function(t,e,n,r){return bt(t)},set:function(t,e,n,r){return[new Date(1e3*n),{timestampIsSet:!0}]},incompatibleTokens:"*"},T:{priority:20,parse:function(t,e,n,r){return bt(t)},set:function(t,e,n,r){return[new Date(n),{timestampIsSet:!0}]},incompatibleTokens:"*"}};var Ut=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,St=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Lt=/^'([^]*?)'?$/,Yt=/''/g,It=/\S/,qt=/[a-zA-Z]/;function Ht(t,e){if(e.timestampIsSet)return t;var n=new Date(0);return n.setFullYear(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()),n.setHours(t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds(),t.getUTCMilliseconds()),n}function Nt(t){return t.match(Lt)[1].replace(Yt,"'")}const Wt=function(){const t=document.getElementById("item-board"),e=document.getElementById("task-modal"),i=document.getElementById("task-form");document.getElementById("due-time").defaultValue="18:00";const o=document.getElementById("project-list"),s=document.getElementById("project-modal"),u=document.getElementById("project-form"),c=document.querySelectorAll(".close-btn"),d=document.getElementById("project-menu");function l(t){const e=document.createElement("li");e.textContent=t.title,e.setAttribute("class","project-title"),e.addEventListener("click",(()=>{n.setActiveProject(t),w(e),h()})),t===n.getActiveProject()&&w(e),o.appendChild(e)}function f(e){let i;try{i="Due "+function(t,e){return r(1,arguments),D(t,Date.now(),e)}(function(t,e,n,i){r(3,arguments);var o=String(t),s=String(e),u=i||{},c=u.locale||y;if(!c.match)throw new RangeError("locale must contain match property");var d=c.options&&c.options.firstWeekContainsDate,l=null==d?1:M(d),f=null==u.firstWeekContainsDate?l:M(u.firstWeekContainsDate);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=c.options&&c.options.weekStartsOn,h=null==m?0:M(m),w=null==u.weekStartsOn?h:M(u.weekStartsOn);if(!(w>=0&&w<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(""===s)return""===o?a(n):new Date(NaN);var g,v={firstWeekContainsDate:f,weekStartsOn:w,locale:c},b=[{priority:10,subPriority:-1,set:Ht,index:0}],T=s.match(St).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,L[e])(t,c.formatLong,v):t})).join("").match(Ut),C=[];for(g=0;g<T.length;g++){var x=T[g];!u.useAdditionalWeekYearTokens&&H(x)&&N(x,s,t),!u.useAdditionalDayOfYearTokens&&q(x)&&N(x,s,t);var D=x[0],E=Pt[D];if(E){var U=E.incompatibleTokens;if(Array.isArray(U)){for(var S=void 0,Y=0;Y<C.length;Y++){var I=C[Y].token;if(-1!==U.indexOf(I)||I===D){S=C[Y];break}}if(S)throw new RangeError("The format string mustn't contain `".concat(S.fullToken,"` and `").concat(x,"` at the same time"))}else if("*"===E.incompatibleTokens&&C.length)throw new RangeError("The format string mustn't contain `".concat(x,"` and any other token at the same time"));C.push({token:D,fullToken:x});var W=E.parse(o,x,c.match,v);if(!W)return new Date(NaN);b.push({priority:E.priority,subPriority:E.subPriority||0,set:E.set,validate:E.validate,value:W.value,index:b.length}),o=W.rest}else{if(D.match(qt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+D+"`");if("''"===x?x="'":"'"===D&&(x=Nt(x)),0!==o.indexOf(x))return new Date(NaN);o=o.slice(x.length)}}if(o.length>0&&It.test(o))return new Date(NaN);var j=b.map((function(t){return t.priority})).sort((function(t,e){return e-t})).filter((function(t,e,n){return n.indexOf(t)===e})).map((function(t){return b.filter((function(e){return e.priority===t})).sort((function(t,e){return e.subPriority-t.subPriority}))})).map((function(t){return t[0]})),B=a(n);if(isNaN(B))return new Date(NaN);var X=P(B,k(B)),O={};for(g=0;g<j.length;g++){var A=j[g];if(A.validate&&!A.validate(X,A.value,v))return new Date(NaN);var Q=A.set(X,O,A.value,v);Q[0]?(X=Q[0],p(O,Q[1])):X=Q}return X}(e.dueDate,"yyyy-MM-dd HH:mm",new Date),{addSuffix:!0})+` (${e.dueDate})`}catch{i="No deadline specified"}const o=document.createElement("div"),s=document.createElement("div"),u=document.createElement("div"),c=document.createElement("div"),d=document.createElement("div");d.textContent=e.log,d.classList.add("log","hide"),u.innerHTML=`<p class="task-notes">${e.notes}</p>`,u.setAttribute("class","hide"),o.setAttribute("class","task-card"),s.setAttribute("class","del-btn"),s.innerHTML='<i class="fas fa-trash-alt"></i>',s.addEventListener("click",(()=>{n.deleteTask(e),h()})),c.setAttribute("class","done-btn"),c.innerHTML='<i class="far fa-check-circle"></i>',c.addEventListener("click",(()=>{n.toggleDone(e),c.classList.toggle("task-done"),o.classList.toggle("task-card-done")})),o.innerHTML=`\n        <h3 class="task-title">${e.title}</h3>\n        <div class="task-content"><span class="task-due">\n        <time>${i}</time></span>\n        `,"high"==e.priority?o.classList.add("urgent"):"med"==e.priority?o.classList.add("medium-pri"):"low"==e.priority&&o.classList.add("low-pri"),!0===e.done&&(o.classList.add("task-card-done"),c.classList.add("task-done")),o.appendChild(c),o.appendChild(s),o.appendChild(u),o.appendChild(d),t.appendChild(o),o.addEventListener("click",(()=>{u.classList.toggle("hide")}))}function m(){o.textContent="";for(const t of n.getProjects())l(t)}function h(e=n.getActiveProject().items){document.getElementById("project-title").textContent=n.getActiveProject().title,t.textContent="";for(const t of e)f(t)}function w(t){const e=document.querySelectorAll(".project-title");for(const t of e)t.style.backgroundColor="transparent";t.style.backgroundColor="#a7dbf3"}return c.forEach((t=>{t.addEventListener("click",(()=>{s.style.display="none",e.style.display="none"}))})),document.getElementById("filter-btn").addEventListener("click",(()=>{document.getElementById("filterContent").classList.toggle("show")})),document.getElementById("filter-done").addEventListener("click",(()=>{let t=n.filterDone(),e=document.querySelectorAll(".log");for(let n of e)for(let e of t)n.textContent==e.log&&n.parentNode.classList.toggle("hide")})),document.getElementById("filter-urgent").addEventListener("click",(()=>{let t=n.filterUrgent(),e=document.querySelectorAll(".log");for(let n of e)for(let e of t)n.textContent==e.log&&n.parentNode.classList.toggle("hide")})),document.getElementById("sort-btn").addEventListener("click",(()=>{document.getElementById("sortContent").classList.toggle("show")})),document.getElementById("sort-due").addEventListener("click",(()=>{n.dueDateSort(),h()})),document.getElementById("sort-added").addEventListener("click",(()=>{n.addedDateSort(),h()})),window.onclick=function(t){let e=document.getElementById("sortContent"),n=document.getElementById("filterContent");t.target.matches(".btn")||(e.classList.contains("show")&&e.classList.remove("show"),n.classList.contains("show")&&n.classList.remove("show"))},document.getElementById("menu-btn").addEventListener("click",(()=>{d.classList.toggle("show-menu")})),document.getElementById("new-task-btn").addEventListener("click",(()=>{e.style.display="block"})),document.getElementById("task-submit").addEventListener("click",(()=>{e.style.display="none";const t=n.newItem(i);i.reset(),f(t)})),document.getElementById("new-proj-btn").addEventListener("click",(()=>{s.style.display="block"})),document.getElementById("project-submit").addEventListener("click",(()=>{s.style.display="none",l(n.addNewProject(u.title.value)),u.reset(),h()})),document.getElementById("proj-del-btn").addEventListener("click",(()=>{confirm("Delete project?")&&(n.deleteProject(),m(),h())})),document.getElementById("mobile-add-btn").addEventListener("click",(()=>{e.style.display="block"})),{displayProjectList:m,displayTasks:h}}();Wt.displayTasks(),Wt.displayProjectList()})();