/* eslint-disable no-unreachable */
/* eslint-disable block-scoped-var */
/* eslint-disable no-multi-assign */
/* eslint-disable no-void */
/* eslint-disable eqeqeq */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable func-names */
/* eslint-disable no-new-func */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-return-assign */
/* eslint-disable no-sequences */
/* eslint-disable no-cond-assign */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
/**
 * @preserve HTML5 Shiv 3.7.2 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
 */
!(function (e, t) {
  function n() {
    const e = g.elements
    return typeof e === 'string' ? e.split(' ') : e
  }
  function r(e) {
    let t = f[e[d]]
    return t || ((t = {}), h++, (e[d] = h), (f[h] = t)), t
  }
  function a(e, n, a) {
    return (
      n || (n = t),
      l
        ? n.createElement(e)
        : (a || (a = r(n)),
          !(c = a.cache[e]
            ? a.cache[e].cloneNode()
            : u.test(e)
            ? (a.cache[e] = a.createElem(e)).cloneNode()
            : a.createElem(e)).canHaveChildren ||
          s.test(e) ||
          c.tagUrn
            ? c
            : a.frag.appendChild(c))
    )
    let c
  }
  function c(e, t) {
    t.cache ||
      ((t.cache = {}),
      (t.createElem = e.createElement),
      (t.createFrag = e.createDocumentFragment),
      (t.frag = t.createFrag())),
      (e.createElement = function (n) {
        return g.shivMethods ? a(n, e, t) : t.createElem(n)
      }),
      (e.createDocumentFragment = Function(
        'h,f',
        `return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(${n()
          .join()
          .replace(/[\w\-:]+/g, function (e) {
            return t.createElem(e), t.frag.createElement(e), `c("${e}")`
          })});return n}`
      )(g, t.frag))
  }
  function o(e) {
    e || (e = t)
    const n = r(e)
    return (
      !g.shivCSS ||
        i ||
        n.hasCSS ||
        (n.hasCSS = !!(function (e, t) {
          const n = e.createElement('p')
          const r = e.getElementsByTagName('head')[0] || e.documentElement
          return (
            (n.innerHTML = `x<style>${t}</style>`),
            r.insertBefore(n.lastChild, r.firstChild)
          )
        })(
          e,
          'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}'
        )),
      l || c(e, n),
      e
    )
  }
  let i
  let l
  const m = e.html5 || {}
  var s = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i
  var u = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i
  var d = '_html5shiv'
  var h = 0
  var f = {}
  !(function () {
    try {
      const e = t.createElement('a')
      ;(e.innerHTML = '<xyz></xyz>'),
        (i = 'hidden' in e),
        (l =
          e.childNodes.length == 1 ||
          (function () {
            t.createElement('a')
            const e = t.createDocumentFragment()
            return (
              void 0 === e.cloneNode ||
              void 0 === e.createDocumentFragment ||
              void 0 === e.createElement
            )
          })())
    } catch (e) {
      ;(i = !0), (l = !0)
    }
  })()
  var g = {
    elements:
      m.elements ||
      'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video',
    version: '3.7.2',
    shivCSS: !1 !== m.shivCSS,
    supportsUnknownElements: l,
    shivMethods: !1 !== m.shivMethods,
    type: 'default',
    shivDocument: o,
    createElement: a,
    createDocumentFragment(e, a) {
      if ((e || (e = t), l)) return e.createDocumentFragment()
      for (
        var c = (a = a || r(e)).frag.cloneNode(), o = 0, i = n(), m = i.length;
        m > o;
        o++
      )
        c.createElement(i[o])
      return c
    },
    addElements(e, t) {
      let n = g.elements
      typeof n !== 'string' && (n = n.join(' ')),
        typeof e !== 'string' && (e = e.join(' ')),
        (g.elements = `${n} ${e}`),
        o(t)
    },
  }
  ;(e.html5 = g), o(t)
})(this, document)

!function(e){let t,n,s,i,a;e.matchMedia=e.matchMedia||(e=e.document,n=e.documentElement,s=n.firstElementChild||n.firstChild,i=e.createElement("body"),(a=e.createElement("div")).id="mq-test-1",a.style.cssText="position:absolute;top:-100em",i.style.background="none",i.appendChild(a),function(e){return a.innerHTML=`&shy;<style media="${e}"> #mq-test-1 { width: 42px; }</style>`,n.insertBefore(i,s),t=42===a.offsetWidth,n.removeChild(i),{matches:t,media:e}})}(this),function(e){function t(){g(!0)}const n={};function s(e,t){const n=T();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!==n.readyState||200!==n.status&&304!==n.status||t(n.responseText)},4!==n.readyState&&n.send(null))}let i,a,l,o,r,m,d,c,h,u,p,f,y,g,x,E,w;(e.respond=n).update=function(){};const S=[];var T=function(){let t=!1;try{t=new e.XMLHttpRequest}catch(n){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}();n.ajax=s,n.queue=S,n.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,maxw:/\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/},n.mediaQueriesSupported=e.matchMedia&&null!==e.matchMedia("only all")&&e.matchMedia("only all").matches,n.mediaQueriesSupported||(o=e.document,r=o.documentElement,m=[],d=[],c=[],h={},u=o.getElementsByTagName("head")[0]||r,p=o.getElementsByTagName("base")[0],f=u.getElementsByTagName("link"),y=function(){let e;const t=o.createElement("div");let n=o.body;const s=r.style.fontSize,i=n&&n.style.fontSize;let a=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||((n=a=o.createElement("body")).style.background="none"),r.style.fontSize="100%",n.style.fontSize="100%",n.appendChild(t),a&&r.insertBefore(n,r.firstChild),e=t.offsetWidth,a?r.removeChild(n):n.removeChild(t),r.style.fontSize=s,i&&(n.style.fontSize=i),l=parseFloat(e)},g=function(t){let n,s,h,p,x,E,w,S,T,v;const C="clientWidth";var $=r[C];const b="CSS1Compat"===o.compatMode&&$||o.body[C]||$,z={},M=f[f.length-1];$=(new Date).getTime();if(t&&i&&$-i<30)return e.clearTimeout(a),void(a=e.setTimeout(g,30));for(n in i=$,m)m.hasOwnProperty(n)&&(h=null===(x=(s=m[n]).minw),p=null===(E=s.maxw),x=x&&parseFloat(x)*(x.includes("em")?l||y():1),E=E&&parseFloat(E)*(E.includes("em")?l||y():1),s.hasquery&&(h&&p||!(h||x<=b)||!(p||b<=E))||(z[s.media]||(z[s.media]=[]),z[s.media].push(d[s.rules])));for(w in c)c.hasOwnProperty(w)&&c[w]&&c[w].parentNode===u&&u.removeChild(c[w]);for(S in c.length=0,z)z.hasOwnProperty(S)&&(T=o.createElement("style"),v=z[S].join("\n"),T.type="text/css",T.media=S,u.insertBefore(T,M.nextSibling),T.styleSheet?T.styleSheet.cssText=v:T.appendChild(o.createTextNode(v)),c.push(T))},x=function(e,t,s){function i(e){return e.replace(n.regex.urls,`$1${t}$2$3`)}const a=e.replace(n.regex.keyframes,"").match(n.regex.media);let l=a&&a.length||0;const o=!l&&s;(t=t.substring(0,t.lastIndexOf("/"))).length&&(t+="/"),o&&(l=1);for(var r,c,h,u,p=0;p<l;p++){o?(r=s,d.push(i(e))):(r=a[p].match(n.regex.findStyles)&&RegExp.$1,d.push(RegExp.$2&&i(RegExp.$2))),u=(h=r.split(",")).length;for(let e=0;e<u;e++)c=h[e],m.push({media:c.split("(")[0].match(n.regex.only)&&RegExp.$2||"all",rules:d.length-1,hasquery:c.includes("("),minw:c.match(n.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:c.match(n.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}g()},E=function(){let t;S.length&&s((t=S.shift()).href,(function(n){x(n,t.href,t.media),h[t.href]=!0,e.setTimeout((function(){E()}),0)}))},(w=function(){for(let t=0;t<f.length;t++){const n=f[t];let s=n.href;const i=n.media,a=n.rel&&"stylesheet"===n.rel.toLowerCase();s&&a&&!h[s]&&(n.styleSheet&&n.styleSheet.rawCssText?(x(n.styleSheet.rawCssText,s,i),h[s]=!0):(/^([a-zA-Z:]*\/\/)/.test(s)||p)&&s.replace(RegExp.$1,"").split("/")[0]!==e.location.host||("//"===s.substring(0,2)&&(s=e.location.protocol+s),S.push({href:s,media:i})))}E()})(),n.update=w,n.getEmValue=y,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t))}(this);
!function(e){var t=navigator.userAgent.match(/MSIE (\d+)/);if(!t)return!1;var r=document,n=r.documentElement,a=function(){if(e.XMLHttpRequest)return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){return null}}(),s=t[1];if(!("CSS1Compat"!=r.compatMode||s<6||s>8)&&a){var c,l={NW:"*.Dom.select",MooTools:"$$",DOMAssistant:"*.$",Prototype:"$$",YAHOO:"*.util.Selector.query",Sizzle:"*",jQuery:"*",dojo:"*.query"},i=[],o=[],u=0,f=/(\/\*[^*]*\*+([^\/][^*]*\*+)*\/)\s*?/g,d=/@import\s*(?:(?:(?:url\(\s*(['"]?)(.*)\1)\s*\))|(?:(['"])(.*)\3))\s*([^;]*);/g,p=/(behavior\s*?:\s*)?\burl\(\s*(["']?)(?!data:)([^"')]+)\2\s*\)/g,h=/^:(empty|(first|last|only|nth(-last)?)-(child|of-type))$/,g=/:(:first-(?:line|letter))/g,v=/((?:^|(?:\s*})+)(?:\s*@media[^{]+{)?)\s*([^\{]*?[\[:][^{]+)/g,b=/([ +~>])|(:[a-z-]+(?:\(.*?\)+)?)|(\[.*?\])/g,m=/(:not\()?:(hover|enabled|disabled|focus|checked|target|active|visited|first-line|first-letter)\)?/g,y=/[^\w-]/g,$=/^(INPUT|SELECT|TEXTAREA|BUTTON)$/,N=/^(checkbox|radio)$/,S=s>6?/[\$\^*]=(['"])\1/:null,E=/([(\[+~])\s+/g,T=/\s+([)\]+~])/g,A=/\s+/g,k=/^\s*((?:[\S\s]*\S)?)\s*$/,x=r.getElementsByTagName("BASE"),C=x.length>0?x[0].href:r.location.href;!function(){for(var e,t,n=0;n<r.styleSheets.length;n++)""!=(t=r.styleSheets[n]).href&&(e=I(t.href))&&(t.cssText=t.rawCssText=L(e).replace(g,"$1").replace(v,(function(e,t,r){for(var n=r.split(","),a=0,s=n.length;a<s;a++){var c=X(n[a])+" ",l=[];n[a]=c.replace(b,(function(e,t,r,n,a){if(t)return l.length>0&&(o.push({selector:c.substring(0,a),patches:l}),l=[]),t;var s,i=r?O(r):(s=n,!S||S.test(s)?{className:w(s),applyClass:!0}:null);return i?(l.push(i),"."+i.className):e}))}return t+n.join(",")})))}(),
/*!
   * ContentLoaded.js by Diego Perini, modified for IE<9 only (to save space)
   *
   * Author: Diego Perini (diego.perini at gmail.com)
   * Summary: cross-browser wrapper for DOMContentLoaded
   * Updated: 20101020
   * License: MIT
   * Version: 1.2
   *
   * URL:
   * http://javascript.nwbox.com/ContentLoaded/
   * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
   *
   */
function(e,t){var a=!1,s=!0,c=function(n){"readystatechange"==n.type&&"complete"!=r.readyState||(("load"==n.type?e:r).detachEvent("on"+n.type,c,!1),!a&&(a=!0)&&t.call(e,n.type||n))},l=function(){try{n.doScroll("left")}catch(e){return void setTimeout(l,50)}c("poll")};if("complete"==r.readyState)t.call(e,"");else{if(r.createEventObject&&n.doScroll){try{s=!e.frameElement}catch(e){}s&&l()}H(r,"readystatechange",c),H(e,"load",c)}}(e,(function(){for(var t in l){var r,n,a=e;if(e[t]){for(r=l[t].replace("*",t).split(".");(n=r.shift())&&(a=a[n]););if("function"==typeof a)return c=a,function(){for(var e,t,r,n,a=0;a<o.length;a++){t=o[a].selector,r=o[a].patches,""!=(n=t.replace(m,""))&&" "!=n.charAt(n.length-1)||(n+="*");try{e=c(n)}catch(e){j("Selector '"+t+"' threw exception '"+e+"'")}if(e)for(var s=0,l=e.length;s<l;s++){for(var i=e[s],u=i.className,f=0,d=r.length;f<d;f++){var p=r[f];M(i,p)||!p.applyClass||!0!==p.applyClass&&!0!==p.applyClass(i)||(u=z(u,p.className,!0))}i.className=u}}}(),void(i.length>0&&setInterval((function(){for(var e=0,t=i.length;e<t;e++){var r=i[e];r.disabled!==r.$disabled&&(r.disabled?(r.disabled=!1,r.$disabled=!0,r.disabled=!0):r.$disabled=r.disabled)}}),250))}}}))}function O(t){var r,a,c=!0,l=w(t.slice(1)),o=":not("==t.substring(0,5);o&&(t=t.slice(5,-1));var u=t.indexOf("(");if(u>-1&&(t=t.substring(0,u)),":"==t.charAt(0))switch(t.slice(1)){case"root":c=function(e){return o?e!=n:e==n};break;case"target":if(8==s){c=function(t){var r=function(){var e=location.hash,r=e.slice(1);return o?""==e||t.id!=r:""!=e&&t.id==r};return H(e,"hashchange",(function(){q(t,l,r())})),r()};break}return!1;case"checked":c=function(e){return N.test(e.type)&&H(e,"propertychange",(function(){"checked"==event.propertyName&&q(e,l,e.checked!==o)})),e.checked!==o};break;case"disabled":o=!o;case"enabled":c=function(e){return $.test(e.tagName)?(H(e,"propertychange",(function(){"$disabled"==event.propertyName&&q(e,l,e.$disabled===o)})),i.push(e),e.$disabled=e.disabled,e.disabled===o):":enabled"==t?o:!o};break;case"focus":r="focus",a="blur";case"hover":r||(r="mouseenter",a="mouseleave"),c=function(e){return H(e,o?a:r,(function(){q(e,l,!0)})),H(e,o?r:a,(function(){q(e,l,!1)})),o};break;default:if(!h.test(t))return!1}return{className:l,applyClass:c}}function M(e,t){return new RegExp("(^|\\s)"+t.className+"(\\s|$)").test(e.className)}function w(e){return"slvzr-"+(6==s?u++:e.replace(y,(function(e){return e.charCodeAt(0)})))}function j(t){e.console&&e.console.log(t)}function R(e){return e.replace(k,"$1")}function X(e){return R(e.replace(E,"$1").replace(T,"$1")).replace(A," ")}function q(e,t,r){var n=e.className,a=z(n,t,r);a!=n&&(e.className=a,e.parentNode.className+="")}function z(e,t,r){var n=RegExp("(^|\\s)"+t+"(\\s|$)"),a=n.test(e);return r?a?e:e+" "+t:a?R(e.replace(n,"$1")):e}function H(e,t,r){e.attachEvent("on"+t,r)}function I(e,t,r){function n(e){return e.substring(0,e.indexOf("/",8))}if(t||(t=C),"//"==e.substring(0,2)&&(e=function(e){return e.substring(0,e.indexOf("//"))}(t)+e),/^https?:\/\//i.test(e))return r||n(t)==n(e)?e:null;if("/"==e.charAt(0))return n(t)+e;var a=t.split(/[?#]/)[0];return"?"!=e.charAt(0)&&"/"!=a.charAt(a.length-1)&&(a=a.substring(0,a.lastIndexOf("/")+1)),a+e}function L(e){return e?function(e){return a.open("GET",e,!1),a.send(),200==a.status?a.responseText:""}(e).replace(f,"").replace(d,(function(t,r,n,a,s,c){var l=L(I(n||s,e));return c?"@media "+c+" {"+l+"}":l})).replace(p,(function(t,r,n,a){return n=n||"",r?t:" url("+n+I(a,e,!0)+n+") "})):""}}(this);