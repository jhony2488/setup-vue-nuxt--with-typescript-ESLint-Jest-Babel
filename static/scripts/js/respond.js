!function(e){let t,n,s,i,a;e.matchMedia=e.matchMedia||(e=e.document,n=e.documentElement,s=n.firstElementChild||n.firstChild,i=e.createElement("body"),(a=e.createElement("div")).id="mq-test-1",a.style.cssText="position:absolute;top:-100em",i.style.background="none",i.appendChild(a),function(e){return a.innerHTML=`&shy;<style media="${e}"> #mq-test-1 { width: 42px; }</style>`,n.insertBefore(i,s),t=42===a.offsetWidth,n.removeChild(i),{matches:t,media:e}})}(this),function(e){function t(){g(!0)}const n={};function s(e,t){const n=T();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!==n.readyState||200!==n.status&&304!==n.status||t(n.responseText)},4!==n.readyState&&n.send(null))}let i,a,l,o,r,m,d,c,h,u,p,f,y,g,x,E,w;(e.respond=n).update=function(){};const S=[];var T=function(){let t=!1;try{t=new e.XMLHttpRequest}catch(n){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}();n.ajax=s,n.queue=S,n.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,maxw:/\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/},n.mediaQueriesSupported=e.matchMedia&&null!==e.matchMedia("only all")&&e.matchMedia("only all").matches,n.mediaQueriesSupported||(o=e.document,r=o.documentElement,m=[],d=[],c=[],h={},u=o.getElementsByTagName("head")[0]||r,p=o.getElementsByTagName("base")[0],f=u.getElementsByTagName("link"),y=function(){let e;const t=o.createElement("div");let n=o.body;const s=r.style.fontSize,i=n&&n.style.fontSize;let a=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||((n=a=o.createElement("body")).style.background="none"),r.style.fontSize="100%",n.style.fontSize="100%",n.appendChild(t),a&&r.insertBefore(n,r.firstChild),e=t.offsetWidth,a?r.removeChild(n):n.removeChild(t),r.style.fontSize=s,i&&(n.style.fontSize=i),l=parseFloat(e)},g=function(t){let n,s,h,p,x,E,w,S,T,v;const C="clientWidth";var $=r[C];const b="CSS1Compat"===o.compatMode&&$||o.body[C]||$,z={},M=f[f.length-1];if($=(new Date).getTime(),t&&i&&$-i<30)return e.clearTimeout(a),void(a=e.setTimeout(g,30));for(n in i=$,m)m.hasOwnProperty(n)&&(h=null===(x=(s=m[n]).minw),p=null===(E=s.maxw),x=x&&parseFloat(x)*(x.includes("em")?l||y():1),E=E&&parseFloat(E)*(E.includes("em")?l||y():1),s.hasquery&&(h&&p||!(h||x<=b)||!(p||b<=E))||(z[s.media]||(z[s.media]=[]),z[s.media].push(d[s.rules])));for(w in c)c.hasOwnProperty(w)&&c[w]&&c[w].parentNode===u&&u.removeChild(c[w]);for(S in c.length=0,z)z.hasOwnProperty(S)&&(T=o.createElement("style"),v=z[S].join("\n"),T.type="text/css",T.media=S,u.insertBefore(T,M.nextSibling),T.styleSheet?T.styleSheet.cssText=v:T.appendChild(o.createTextNode(v)),c.push(T))},x=function(e,t,s){function i(e){return e.replace(n.regex.urls,`$1${t}$2$3`)}const a=e.replace(n.regex.keyframes,"").match(n.regex.media);let l=a&&a.length||0;const o=!l&&s;(t=t.substring(0,t.lastIndexOf("/"))).length&&(t+="/"),o&&(l=1);for(var r,c,h,u,p=0;p<l;p++){o?(r=s,d.push(i(e))):(r=a[p].match(n.regex.findStyles)&&RegExp.$1,d.push(RegExp.$2&&i(RegExp.$2))),u=(h=r.split(",")).length;for(let e=0;e<u;e++)c=h[e],m.push({media:c.split("(")[0].match(n.regex.only)&&RegExp.$2||"all",rules:d.length-1,hasquery:c.includes("("),minw:c.match(n.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:c.match(n.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}g()},E=function(){let t;S.length&&s((t=S.shift()).href,(function(n){x(n,t.href,t.media),h[t.href]=!0,e.setTimeout((function(){E()}),0)}))},(w=function(){for(let t=0;t<f.length;t++){const n=f[t];let s=n.href;const i=n.media,a=n.rel&&"stylesheet"===n.rel.toLowerCase();s&&a&&!h[s]&&(n.styleSheet&&n.styleSheet.rawCssText?(x(n.styleSheet.rawCssText,s,i),h[s]=!0):(/^([a-zA-Z:]*\/\/)/.test(s)||p)&&s.replace(RegExp.$1,"").split("/")[0]!==e.location.host||("//"===s.substring(0,2)&&(s=e.location.protocol+s),S.push({href:s,media:i})))}E()})(),n.update=w,n.getEmValue=y,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t))}(this);