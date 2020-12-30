!(function (e) {
  let t
  let n
  let a
  let s
  let i
  e.matchMedia =
    e.matchMedia ||
    ((e = e.document),
    (n = e.documentElement),
    (a = n.firstElementChild || n.firstChild),
    (s = e.createElement('body')),
    ((i = e.createElement('div')).id = 'mq-test-1'),
    (i.style.cssText = 'position:absolute;top:-100em'),
    (s.style.background = 'none'),
    s.appendChild(i),
    function (e) {
      return (
        (i.innerHTML = `&shy;<style media="${e}"> #mq-test-1 { width: 42px; }</style>`),
        n.insertBefore(s, a),
        (t = i.offsetWidth === 42),
        n.removeChild(s),
        { matches: t, media: e }
      )
    })
})(this),
  (function (y) {
    function e() {
      M(!0)
    }
    const c = {}
    function n(e, t) {
      const n = a()
      n &&
        (n.open('GET', e, !0),
        (n.onreadystatechange = function () {
          n.readyState !== 4 ||
            (n.status !== 200 && n.status !== 304) ||
            t(n.responseText)
        }),
        n.readyState !== 4 && n.send(null))
    }
    ;(y.respond = c).update = function () {}
    let g
    let x
    let E
    let v
    let w
    let S
    let T
    let C
    let i
    let b
    let r
    let $
    let z
    let M
    let o
    let l
    let t
    const m = []
    var a = (function () {
      let t = !1
      try {
        t = new y.XMLHttpRequest()
      } catch (e) {
        t = new y.ActiveXObject('Microsoft.XMLHTTP')
      }
      return function () {
        return t
      }
    })()
    ;(c.ajax = n),
      (c.queue = m),
      (c.regex = {
        media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
        keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
        urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
        findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
        only: /(only\s+)?([a-zA-Z]+)\s?/,
        minw: /\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,
        maxw: /\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,
      }),
      (c.mediaQueriesSupported =
        y.matchMedia &&
        y.matchMedia('only all') !== null &&
        y.matchMedia('only all').matches),
      c.mediaQueriesSupported ||
        ((v = y.document),
        (w = v.documentElement),
        (S = []),
        (T = []),
        (C = []),
        (i = {}),
        (b = v.getElementsByTagName('head')[0] || w),
        (r = v.getElementsByTagName('base')[0]),
        ($ = b.getElementsByTagName('link')),
        (z = function () {
          let e
          const t = v.createElement('div')
          let n = v.body
          const a = w.style.fontSize
          const s = n && n.style.fontSize
          let i = !1
          return (
            (t.style.cssText = 'position:absolute;font-size:1em;width:1em'),
            n || ((n = i = v.createElement('body')).style.background = 'none'),
            (w.style.fontSize = '100%'),
            (n.style.fontSize = '100%'),
            n.appendChild(t),
            i && w.insertBefore(n, w.firstChild),
            (e = t.offsetWidth),
            i ? w.removeChild(n) : n.removeChild(t),
            (w.style.fontSize = a),
            s && (n.style.fontSize = s),
            (E = parseFloat(e))
          )
        }),
        (M = function (e) {
          let t
          let n
          let a
          let s
          let i
          let r
          let o
          let l
          let m
          let d
          const h = 'clientWidth'
          var u = w[h]
          const c = (v.compatMode === 'CSS1Compat' && u) || v.body[h] || u
          const f = {}
          const p = $[$.length - 1]
          var u = new Date().getTime()
          if (e && g && u - g < 30)
            return y.clearTimeout(x), void (x = y.setTimeout(M, 30))
          for (t in ((g = u), S))
            S.hasOwnProperty(t) &&
              ((a = (i = (n = S[t]).minw) === null),
              (s = (r = n.maxw) === null),
              (i = i && parseFloat(i) * (i.includes('em') ? E || z() : 1)),
              (r = r && parseFloat(r) * (r.includes('em') ? E || z() : 1)),
              (n.hasquery && ((a && s) || !(a || i <= c) || !(s || c <= r))) ||
                (f[n.media] || (f[n.media] = []), f[n.media].push(T[n.rules])))
          for (o in C)
            C.hasOwnProperty(o) &&
              C[o] &&
              C[o].parentNode === b &&
              b.removeChild(C[o])
          for (l in ((C.length = 0), f))
            f.hasOwnProperty(l) &&
              ((m = v.createElement('style')),
              (d = f[l].join('\n')),
              (m.type = 'text/css'),
              (m.media = l),
              b.insertBefore(m, p.nextSibling),
              m.styleSheet
                ? (m.styleSheet.cssText = d)
                : m.appendChild(v.createTextNode(d)),
              C.push(m))
        }),
        (o = function (e, t, n) {
          function a(e) {
            return e.replace(c.regex.urls, `$1${t}$2$3`)
          }
          const s = e.replace(c.regex.keyframes, '').match(c.regex.media)
          let i = (s && s.length) || 0
          const r = !i && n
          ;(t = t.substring(0, t.lastIndexOf('/'))).length && (t += '/'),
            r && (i = 1)
          for (var o, l, m, d, h = 0; h < i; h++) {
            r
              ? ((o = n), T.push(a(e)))
              : ((o = s[h].match(c.regex.findStyles) && RegExp.$1),
                T.push(RegExp.$2 && a(RegExp.$2))),
              (d = (m = o.split(',')).length)
            for (let u = 0; u < d; u++)
              (l = m[u]),
                S.push({
                  media:
                    (l.split('(')[0].match(c.regex.only) && RegExp.$2) || 'all',
                  rules: T.length - 1,
                  hasquery: l.includes('('),
                  minw:
                    l.match(c.regex.minw) &&
                    parseFloat(RegExp.$1) + (RegExp.$2 || ''),
                  maxw:
                    l.match(c.regex.maxw) &&
                    parseFloat(RegExp.$1) + (RegExp.$2 || ''),
                })
          }
          M()
        }),
        (l = function () {
          let t
          m.length &&
            n((t = m.shift()).href, function (e) {
              o(e, t.href, t.media),
                (i[t.href] = !0),
                y.setTimeout(function () {
                  l()
                }, 0)
            })
        }),
        (t = function () {
          for (let e = 0; e < $.length; e++) {
            const t = $[e]
            let n = t.href
            const a = t.media
            const s = t.rel && t.rel.toLowerCase() === 'stylesheet'
            n &&
              s &&
              !i[n] &&
              (t.styleSheet && t.styleSheet.rawCssText
                ? (o(t.styleSheet.rawCssText, n, a), (i[n] = !0))
                : ((/^([a-zA-Z:]*\/\/)/.test(n) || r) &&
                    n.replace(RegExp.$1, '').split('/')[0] !==
                      y.location.host) ||
                  (n.substring(0, 2) === '//' && (n = y.location.protocol + n),
                  m.push({ href: n, media: a })))
          }
          l()
        })(),
        (c.update = t),
        (c.getEmValue = z),
        y.addEventListener
          ? y.addEventListener('resize', e, !1)
          : y.attachEvent && y.attachEvent('onresize', e))
  })(this)
