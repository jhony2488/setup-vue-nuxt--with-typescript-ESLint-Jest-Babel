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
!(function (e, i) {
  function l() {
    const e = f.elements
    return typeof e === 'string' ? e.split(' ') : e
  }
  function s(e) {
    let t = h[e[n]]
    return t || ((t = {}), o++, (e[n] = o), (h[o] = t)), t
  }
  function m(e, t, n) {
    return (
      (t = t || i),
      d
        ? t.createElement(e)
        : !(t = (n = n || s(t)).cache[e]
            ? n.cache[e].cloneNode()
            : c.test(e)
            ? (n.cache[e] = n.createElem(e)).cloneNode()
            : n.createElem(e)).canHaveChildren ||
          a.test(e) ||
          t.tagUrn
        ? t
        : n.frag.appendChild(t)
    )
  }
  function r(e) {
    let t
    let n
    let r
    let a
    let c
    const o = s((e = e || i))
    return (
      !f.shivCSS ||
        u ||
        o.hasCSS ||
        (o.hasCSS =
          ((a =
            'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}'),
          (c = (r = e).createElement('p')),
          (r = r.getElementsByTagName('head')[0] || r.documentElement),
          (c.innerHTML = `x<style>${a}</style>`),
          !!r.insertBefore(c.lastChild, r.firstChild))),
      d ||
        ((t = e),
        (n = o).cache ||
          ((n.cache = {}),
          (n.createElem = t.createElement),
          (n.createFrag = t.createDocumentFragment),
          (n.frag = n.createFrag())),
        (t.createElement = function (e) {
          return f.shivMethods ? m(e, t, n) : n.createElem(e)
        }),
        (t.createDocumentFragment = Function(
          'h,f',
          `return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(${l()
            .join()
            .replace(/[\w\-:]+/g, function (e) {
              return n.createElem(e), n.frag.createElement(e), `c("${e}")`
            })});return n}`
        )(f, n.frag))),
      e
    )
  }
  let u
  let d
  const t = e.html5 || {}
  var a = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i
  var c = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i
  var n = '_html5shiv'
  var o = 0
  var h = {}
  !(function () {
    try {
      const e = i.createElement('a')
      ;(e.innerHTML = '<xyz></xyz>'),
        (u = 'hidden' in e),
        (d =
          e.childNodes.length == 1 ||
          (function () {
            i.createElement('a')
            const e = i.createDocumentFragment()
            return (
              void 0 === e.cloneNode ||
              void 0 === e.createDocumentFragment ||
              void 0 === e.createElement
            )
          })())
    } catch (e) {
      d = u = !0
    }
  })()
  var f = {
    elements:
      t.elements ||
      'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video',
    version: '3.7.2',
    shivCSS: !1 !== t.shivCSS,
    supportsUnknownElements: d,
    shivMethods: !1 !== t.shivMethods,
    type: 'default',
    shivDocument: r,
    createElement: m,
    createDocumentFragment(e, t) {
      if (((e = e || i), d)) return e.createDocumentFragment()
      for (
        var n = (t = t || s(e)).frag.cloneNode(), r = 0, a = l(), c = a.length;
        r < c;
        r++
      )
        n.createElement(a[r])
      return n
    },
    addElements(e, t) {
      let n = f.elements
      typeof n !== 'string' && (n = n.join(' ')),
        typeof e !== 'string' && (e = e.join(' ')),
        (f.elements = `${n} ${e}`),
        r(t)
    },
  }
  ;(e.html5 = f), r(i)
})(this, document)
