!function () {
    function a(a, b, c) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
            var c = d.slice();
            return c.push.apply(c, arguments), a.apply(b, c)
        }
    }

    function b(a, b) {
        if (a) {
            var c = Array.prototype.slice.call(arguments, 1);
            try {
                return a.apply(null, c)
            } catch (d) {
                return d
            }
        }
    }

    function c(a, b) {
        if (document.createEvent) {
            var c = document.createEvent("CustomEvent");
            return c.initCustomEvent(a, !0, !0, b), document.dispatchEvent(c)
        }
        return !0
    }

    function d() {
    }

    function e(a, b) {
        return Ub[a] = b
    }

    function f(a, b) {
        var c = b || document;
        return c.querySelectorAll ? c.querySelectorAll(a) : []
    }

    function g(a, b, c) {
        for (; a;) {
            if (b(a)) return a;
            if (c && a == c) break;
            a = a.parentNode
        }
        return null
    }

    function h(b, c, d) {
        c = c || document;
        var e = c.createElement("iframe");
        return e.id = b || "", e.src = 'javascript:""', e.style.display = "none", d && (e.onload = a(d, null, e)), c.body.appendChild(e), e
    }

    function i(a, b, c) {
        var d = null, e = window.history.state;
        if (e) {
            var f, d = {};
            for (f in e) d[f] = e[f]
        }
        if (b) for (f in d = d || {}, b) d[f] = b[f];
        j(!0, a, d, c)
    }

    function j(a, b, c, d) {
        if (b || c) {
            b = b || window.location.href, c = c || {};
            var f = Tb();
            if (e("history-timestamp", f), c["spf-timestamp"] = f, a) l(c, b); else {
                if (a = m().contentWindow.history.pushState, "function" != typeof a) throw Error("history.pushState is not a function.");
                a.call(window.history, c, "", b)
            }
            e("history-url", b), d && (d = Ub["history-callback"]) && d(b, c)
        }
    }

    function k(a) {
        var b = window.location.href;
        if (Ub["history-ignore-pop"]) e("history-ignore-pop", !1); else if (a.state) {
            a = a.state;
            var c = a["spf-timestamp"];
            b == Ub["history-url"] ? (e("history-timestamp", c), l(a, b)) : (a["spf-back"] = c < parseInt(Ub["history-timestamp"], 10), a["spf-current"] = Ub["history-url"], e("history-timestamp", c), e("history-url", b), (c = Ub["history-callback"]) && c(b, a))
        }
    }

    function l(a, b) {
        var c = m().contentWindow.history.replaceState;
        if ("function" != typeof c) throw Error("history.replaceState is not a function");
        c.call(window.history, a, "", b)
    }

    function m() {
        var a = document.getElementById("history-iframe");
        return a || (a = h("history-iframe")), a
    }

    function n(a, b) {
        if (a.forEach) a.forEach(b, void 0); else for (var c = 0, d = a.length; c < d; c++) c in a && b.call(void 0, a[c], c, a)
    }

    function o(a, b) {
        if (a.every) return a.every(b, void 0);
        for (var c = 0, d = a.length; c < d; c++) if (c in a && !b.call(void 0, a[c], c, a)) return !1;
        return !0
    }

    function p(a, b) {
        if (a.some) return a.some(b, void 0);
        for (var c = 0, d = a.length; c < d; c++) if (c in a && b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function q(a, b) {
        if (a.filter) return a.filter(b, void 0);
        var c = [];
        return n(a, function (a, d, e) {
            b.call(void 0, a, d, e) && c.push(a)
        }), c
    }

    function r(a, b) {
        if (a.map) return a.map(b, void 0);
        var c = [];
        return c.length = a.length, n(a, function (a, d, e) {
            c[d] = b.call(void 0, a, d, e)
        }), c
    }

    function s(a) {
        return "[object Array]" == Object.prototype.toString.call(a) ? a : [a]
    }

    function t(a) {
        var b = x();
        a in b && delete b[a]
    }

    function u() {
        var a, b = x();
        for (a in b) v(b[a]) || delete b[a];
        if (b = x(), a = parseInt(Wb["cache-max"], 10), a = isNaN(a) ? 1 / 0 : a, a = Object.keys(b).length - a, !(0 >= a)) for (var c = 0; c < a; c++) {
            var d, e, f = 1 / 0;
            for (e in b) b[e].count < f && (d = e, f = b[e].count);
            delete b[d]
        }
    }

    function v(a) {
        if (!(a && "data" in a)) return !1;
        var b = a.life, b = isNaN(b) ? 1 / 0 : b;
        return a = a.time, Tb() - a < b
    }

    function w(a) {
        var b = parseInt(Ub["cache-counter"], 10) || 0;
        b++, e("cache-counter", b), a.count = b
    }

    function x(a) {
        return !a && "cache-storage" in Ub ? Ub["cache-storage"] : e("cache-storage", a || {})
    }

    function y(a) {
        return a.classList ? a.classList : a.className && a.className.match(/\S+/g) || []
    }

    function z(a, b) {
        if (b) {
            if (a.classList) return a.classList.contains(b);
            var c = y(a);
            return p(c, function (a) {
                return a == b
            })
        }
        return !1
    }

    function A(a, b) {
        b && (a.classList ? a.classList.add(b) : z(a, b) || (a.className += " " + b))
    }

    function B(a, b) {
        if (b) if (a.classList) a.classList.remove(b); else {
            var c = y(a), c = q(c, function (a) {
                return a != b
            });
            a.className = c.join(" ")
        }
    }

    function C(a) {
        var b = document.body;
        b.dataset ? b.dataset.spfName = a : b.setAttribute("data-" + "spfName".replace(/([A-Z])/g, "-$1").toLowerCase(), a)
    }

    function D(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }

    function E(a) {
        return "[object String]" == Object.prototype.toString.call(a)
    }

    function F(a, b) {
        var c = a.split(b), d = 1 == c.length;
        return [c[0], d ? "" : b, d ? "" : c.slice(1).join(b)]
    }

    function G(a) {
        a.data && E(a.data) && 0 == a.data.lastIndexOf(Zb, 0) && H(a.data.substring(Zb.length))
    }

    function H(a) {
        var b = $b[a];
        b && (delete $b[a], b())
    }

    function I(a) {
        window.addEventListener ? window.addEventListener("message", a, !1) : window.attachEvent && window.attachEvent("onmessage", a)
    }

    function J(a) {
        window.removeEventListener ? window.removeEventListener("message", a, !1) : window.detachEvent && window.detachEvent("onmessage", a)
    }

    function K(a, b) {
        a && b && (a in _b || (_b[a] = []), _b[a].push(b))
    }

    function L(a, b) {
        a in _b && b && o(_b[a], function (a, c, d) {
            return a != b || (d[c] = null, !1)
        })
    }

    function M(a) {
        a in _b && n(_b[a], function (a, b, c) {
            c[b] = null, a && a()
        })
    }

    function N(a, b, c) {
        var d = ac[a];
        return a && b ? (d || (d = ac[a] = {items: [], j: 0, i: 0, o: 1}), d.items.push({t: b, p: c || 0})) : d && d.items.length || 0
    }

    function O(a, b) {
        var c = ac[a];
        if (c) {
            var d = !!c.j || !!c.i;
            0 < c.o && (b || !d) && S(a, b)
        }
    }

    function P(a) {
        (a = ac[a]) && a.o--
    }

    function Q(a, b) {
        var c = ac[a];
        c && (c.o++, O(a, b))
    }

    function R(a) {
        var b = ac[a];
        b && (U(b), delete ac[a])
    }

    function S(b, c) {
        var d = ac[b];
        if (d && (U(d), 0 < d.o && d.items.length)) {
            var e = d.items[0];
            if (e) {
                var f = a(function (a, b) {
                    b(), a()
                }, null, a(S, null, b, c));
                c ? (d.items.shift(), f(e.t)) : T(d, e, f)
            }
        }
    }

    function T(b, c, e) {
        c.p ? (e = a(e, null, d), b.i = setTimeout(e, c.p), c.p = 0) : (b.items.shift(), e = a(e, null, c.t), (c = (c = Wb["advanced-task-scheduler"]) && c.addTask) ? b.j = c(e) : b.i = setTimeout(e, 0))
    }

    function U(a) {
        if (a.j) {
            var b = Wb["advanced-task-scheduler"];
            (b = b && b.cancelTask) && b(a.j), a.j = 0
        }
        a.i && (clearTimeout(a.i), a.i = 0)
    }

    function V(a) {
        var b = document.createElement("a");
        return b.href = a, b.href = b.href, a = {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: b.hostname,
            port: b.port,
            pathname: b.pathname,
            search: b.search,
            hash: b.hash,
            L: b.L,
            K: b.K
        }, a.origin = a.protocol + "//" + a.host, a.pathname && "/" == a.pathname[0] || (a.pathname = "/" + a.pathname), a
    }

    function W(a, b) {
        var c = V(a);
        return b ? c.href : F(c.href, "#")[0]
    }

    function X(a, b) {
        var c = F(a, "#");
        return a = c[0], n(b, function (b) {
            a = a.replace(new RegExp("([?&])" + b + "(?:=[^&]*)?(?:(?=[&])|$)", "g"), function (a, b) {
                return "?" == b ? b : ""
            })
        }), D(a, "?") && (a = a.slice(0, -1)), a + c[1] + c[2]
    }

    function Y(a) {
        var b = Wb["advanced-persistent-parameters"] || "", c = F(a, "#");
        a = c[0];
        var d = -1 != a.indexOf("?") ? "&" : "?";
        return a + (b ? d + b : "") + c[1] + c[2]
    }

    function Z(b, d, e, f) {
        var g = b == jc;
        d = la(b, d);
        var h, i = e || "^" + d, j = ma(b, i);
        if (e && (h = sa(b, e)) && d != h && (c(g ? "spfjsbeforeunload" : "spfcssbeforeunload", {name: e, url: h}), _(b, e, h), K(j, a(aa, null, b, e, h))), g = ma(b, d), (g = cc[g]) && i != g) {
            var k = ma(b, g);
            delete dc[k], k = ma(b, d), delete cc[k], (k = ma(b, g)) && j && k in _b && (_b[j] = (_b[j] || []).concat(_b[k]), delete _b[k])
        }
        k = ma(b, d), cc[k] = i, ra(b, i, d), K(j, f), f = a(ba, null, b), pa(b, d) ? (g && i != g && (b = ea(b, d)) && b.setAttribute("name", e || ""), f()) : (b = ca(b, d, f, void 0, void 0, h)) && e && b.setAttribute("name", e)
    }

    function $(a, b) {
        var c = sa(a, b);
        _(a, b, c), aa(a, b, c)
    }

    function _(a, b, c) {
        var d = ma(a, b);
        delete dc[d], c && (c = ma(a, c), delete cc[c]), a = ma(a, b), delete _b[a]
    }

    function aa(a, b, d) {
        var e = a == jc;
        d && (c(e ? "spfjsunload" : "spfcssunload", {name: b, url: d}), da(a, d))
    }

    function ba(b) {
        var c, d = ma(b, "");
        for (c in _b) 0 == c.indexOf(d) && o(c.substring(d.length).split("|"), a(ta, null, b)) && M(c)
    }

    function ca(a, b, c, d, e, f) {
        function g() {
            return pa(a, b, e) && oa(gc, a, b, e), h && j && j.parentNode && i == document && j.parentNode.removeChild(j), c && setTimeout(c, 0), null
        }

        var h = a == jc;
        b = la(a, b), oa(fc, a, b, e);
        var i = d || document, j = i.createElement(h ? "script" : "link");
        return b ? (d = na(b), j.className = ma(a, d), "onload" in j ? j.onerror = j.onload = g : j.onreadystatechange = function () {
            /^c|loade/.test(j.readyState) && g()
        }, d = i.getElementsByTagName("head")[0] || i.body, h ? (j.async = !0, j.src = b, d.insertBefore(j, d.firstChild)) : (j.rel = "stylesheet", j.href = b, (f = f ? ea(a, f, d) : null) ? d.insertBefore(j, f) : d.appendChild(j)), j) : g()
    }

    function da(a, b) {
        b = la(a, b);
        var c = ea(a, b, void 0);
        c && c.parentNode && c.parentNode.removeChild(c), c = ma(a, b), delete bc[c]
    }

    function ea(a, b, c) {
        return b = na(b), a = "." + ma(a, b), f(a, c)[0]
    }

    function fa(a) {
        var b = a == jc, c = [];
        n(f(b ? "script[src]" : 'link[rel~="stylesheet"]'), function (d) {
            var e = b ? d.src : d.href, e = la(a, e);
            if (!pa(a, e)) {
                oa(gc, a, e);
                var f = na(e), f = ma(a, f);
                if (A(d, f), f = d.getAttribute("name")) {
                    var g = ma(a, e);
                    cc[g] = f, ra(a, f, e)
                }
                c.push(d)
            }
        })
    }

    function ga(b, c, d) {
        if (c && (c = la(b, c), d || !pa(b, c))) if (d && b == ic) ia(c); else {
            var e = na(c), f = ma(b, e), g = ma(b, "prefetch"), e = document.getElementById(g);
            if (e) {
                if (!d && e.contentWindow.document.getElementById(f)) return
            } else e = h(g, null, function (a) {
                a.title = g, O(g, !0)
            });
            b = a(ha, null, e, b, c, f, g), e.title ? b() : N(g, b)
        }
    }

    function ha(a, b, c, d, e) {
        var f = b == jc, g = b == hc;
        a = a.contentWindow.document;
        var h = a.getElementById(d);
        h && h.parentNode.removeChild(h), f ? (h = a.createElement("object"), ec ? a.createElement("script").src = c : h.data = c, h.id = d, a.body.appendChild(h)) : g ? (h = ca(b, c, null, a, e), h.id = d) : (h = a.createElement("img"), ec && (c = c + "#" + Tb()), h.src = c, h.id = d, a.body.appendChild(h))
    }

    function ia(a) {
        var b = new Image;
        ec && (a = a + "#" + Tb()), b.src = a
    }

    function ja(a, b, c) {
        for (var d = a == jc, e = sa(a, c), f = b.replace(/\s/g, ""), f = f || "", g = 0, h = 0, i = f.length; h < i; ++h) g = 31 * g + f.charCodeAt(h), g %= 4294967296;
        f = "hash-" + g, ra(a, c, f), !qa(a, f) && (b = ka(a, b)) && (oa(gc, a, f), b && !d && (d = na(f), d = ma(a, d), b.className = d, b.setAttribute("name", c)), (e = e && e[0]) && da(a, e))
    }

    function ka(a, b) {
        if (b = Xb(b), !b) return null;
        var c, d = document.getElementsByTagName("head")[0] || document.body;
        return a == jc ? (c = document.createElement("script"), c.text = b, d.appendChild(c), d.removeChild(c)) : (c = document.createElement("style"), d.appendChild(c), "styleSheet" in c ? c.styleSheet.cssText = b : c.appendChild(document.createTextNode(b))), c
    }

    function la(a, b) {
        var c = "rsrc-p-" + a;
        if (b) {
            var d = b.indexOf("//");
            if (0 > d) {
                if (0 == b.lastIndexOf("hash-", 0)) return b;
                if (c = Ub[c] || "", E(c)) b = c + b; else for (var e in c) b = b.replace(e, c[e]);
                a != ic && (b = 0 > b.indexOf("." + a) ? b + "." + a : b), b = W(b)
            } else 0 == d && (b = W(b))
        }
        return b
    }

    function ma(a, b, c) {
        return a + "-" + b + (c ? "-" + c : "")
    }

    function na(a) {
        return a ? String(a).replace(/[^\w]/g, "") : ""
    }

    function oa(a, b, c, d) {
        b = ma(b, c, d), bc[b] = a
    }

    function pa(a, b, c) {
        return a = ma(a, b, c), bc[a]
    }

    function qa(a, b) {
        var c = pa(a, b);
        return "" == b || c == gc
    }

    function ra(a, b, c) {
        a = ma(a, b), dc[a] = c
    }

    function sa(a, b) {
        var c = ma(a, b);
        return dc[c]
    }

    function ta(a, b) {
        var c = sa(a, b);
        return void 0 != c && qa(a, c)
    }

    function ua(a) {
        a = s(a), n(a, function (a) {
            ga(ic, a, !0)
        })
    }

    function va(a, b, c) {
        Z(jc, a, b, c)
    }

    function wa(a) {
        $(jc, a)
    }

    function xa(a, b) {
        ca(jc, a, b)
    }

    function ya(a) {
        a = s(a), n(a, function (a) {
            ga(jc, a)
        })
    }

    function za(b, c, d) {
        b = s(b), b = q(b, function (a) {
            return !!a
        });
        var e = [];
        n(b, function (a) {
            void 0 == sa(jc, a) && e.push(a)
        });
        var f = !e.length;
        if (c) {
            var g = o(b, a(ta, null, jc));
            f && g ? c() : (b = ma(jc, b.sort().join("|")), K(b, c))
        }
        d && !f && d(e)
    }

    function Aa(a, b) {
        a = s(a), n(a, function (a) {
            if (a) {
                var b = lc[a] || a, b = la(jc, b), c = sa(jc, a);
                c && b != c && Ca(a)
            }
        }), za(a, b, Ba)
    }

    function Ba(a) {
        n(a, function (a) {
            function b() {
                va(d, a)
            }

            var c = kc[a], d = lc[a] || a;
            c ? Aa(c, b) : b()
        })
    }

    function Ca(a) {
        a = s(a), n(a, function (a) {
            var b, c = [];
            for (b in kc) {
                var d = kc[b], d = s(d);
                n(d, function (d) {
                    d == a && c.push(b)
                })
            }
            n(c, function (a) {
                Ca(a)
            }), wa(a)
        })
    }

    function Da(a, b) {
        ja(jc, a, b)
    }

    function Ea(a) {
        ka(jc, a)
    }

    function Fa(a, b, c) {
        Z(hc, a, b, c)
    }

    function Ga(a, b) {
        ca(hc, a, b)
    }

    function Ha(a) {
        a = s(a), n(a, function (a) {
            ga(hc, a)
        })
    }

    function Ia(a, b, c) {
        if (b) {
            b = [];
            var d, e = 0;
            c && (a += "\r\n");
            var f = a.indexOf(wc, e);
            for (-1 < f && (e = f + wc.length); -1 < (f = a.indexOf(xc, e));) d = Xb(a.substring(e, f)), e = f + xc.length, d && b.push(JSON.parse(d));
            return f = a.indexOf(yc, e), -1 < f && (d = Xb(a.substring(e, f)), e = f + yc.length, d && b.push(JSON.parse(d))), d = "", a.length > e && (d = a.substring(e), c && D(d, "\r\n") && (d = d.substring(0, d.length - 2))), b = Oa(b), {
                n: b,
                c: d
            }
        }
        return a = JSON.parse(a), b = Oa(s(a)), {n: b, c: ""}
    }

    function Ja(b, c, d, f) {
        var g, h = d && 0 == d.type.lastIndexOf("navigate", 0), j = d && d.reverse, k = d && !!d.position, l = d && d.f, m = c.name || "", n = "process " + W(b), o = !Wb["experimental-process-async"];
        g = 0, c.timing || (c.timing = {}), c.title && (document.title = c.title), h && c.url && W(c.url) != W(window.location.href) && i(c.url + window.location.hash), c.head && (g = a(function (a, b) {
            var c = Pa(a);
            Ua(c), Sa(c), P(n), Qa(c, function () {
                b.spfProcessHead = Tb(), Q(n, o)
            })
        }, null, c.head, c.timing), g = N(n, g)), c.attr && (g = a(function (a, b) {
            for (var c in a) {
                var d = document.getElementById(c);
                if (d) {
                    var e = a[c], f = void 0;
                    for (f in e) {
                        var g = e[f];
                        "class" == f ? d.className = g : "style" == f ? d.style.cssText = g : (d.setAttribute(f, g), "value" == f && (d[f] = g))
                    }
                }
            }
            b.spfProcessAttr = Tb()
        }, null, c.attr, c.timing), g = N(n, g));
        var p, q = c.body || {}, r = g;
        for (p in q) g = a(function (b, c) {
            var f = document.getElementById(b);
            if (f) {
                !h || k || l || (e("nav-scroll-position", null), e("nav-scroll-url", null), window.scroll(0, 0), l = !0, d && (d.f = !0));
                var g = Pa(c);
                Sa(g);
                var i = function () {
                    P(n), Qa(g, function () {
                        Q(n, o)
                    })
                }, p = Wb["animation-class"];
                nc && z(f, p) ? (f = new Va(f, g.html, p, m, (!!j)), P(n), O(f.key, !0), N(f.key, a(La, null, f), 0), N(f.key, a(Ma, null, f), 17), N(f.key, a(Na, null, f), f.duration), N(f.key, a(function () {
                    i(), Q(n, o)
                }, null), 0), O(f.key)) : (p = Wb["experimental-html-handler"]) ? (P(n), p(g.html, f, function () {
                    i(), Q(n, o)
                })) : (f.innerHTML = g.html, i())
            }
        }, null, p, q[p], c.timing), g = N(n, g);
        q = g - r, c.foot ? (g = a(function (a, b, c) {
            c && (b.spfProcessBody = Tb()), a = Pa(a), Sa(a), P(n), Qa(a, function () {
                b.spfProcessFoot = Tb(), Q(n, o)
            })
        }, null, c.foot, c.timing, q), g = N(n, g)) : q && (g = a(function (a) {
            a.spfProcessBody = Tb()
        }, null, c.timing), g = N(n, g)), f && (g = N(n, a(f, null, b, c))), O(n, o)
    }

    function Ka(b, c, d, e) {
        d = "preprocess " + W(b);
        var f;
        c.head && (f = a(function (a) {
            a = Pa(a), Ua(a), Ta(a), Ra(a)
        }, null, c.head), N(d, f));
        var g, h = c.body || {};
        for (g in h) h[g] && (f = a(function (a, b) {
            var c = Pa(b);
            Ta(c), Ra(c)
        }, null, g, h[g]), N(d, f));
        c.foot && (f = a(function (a) {
            a = Pa(a), Ta(a), Ra(a)
        }, null, c.foot), N(d, f)), e && N(d, a(e, null, b, c)), O(d)
    }

    function La(a) {
        A(a.element, a.k), A(a.element, a.u), A(a.element, a.G), A(a.element, a.C), A(a.element, a.D), a.h = document.createElement("div"), a.h.className = a.J;
        var b = a.element, c = a.h;
        if (c) {
            for (var d; d = b.firstChild;) c.appendChild(d);
            b.appendChild(c)
        }
        a.g = document.createElement("div"), a.g.className = a.I, a.g.innerHTML = a.H, a.reverse ? (b = a.h, b.parentNode.insertBefore(a.g, b)) : (b = a.h, b.parentNode.insertBefore(a.g, b.nextSibling))
    }

    function Ma(a) {
        B(a.element, a.C), B(a.element, a.D), A(a.element, a.r), A(a.element, a.s)
    }

    function Na(a) {
        a.element.removeChild(a.h);
        var b, c = a.g, d = c.parentNode;
        if (d && 11 != d.nodeType) if (c.removeNode) c.removeNode(!1); else {
            for (; b = c.firstChild;) d.insertBefore(b, c);
            d.removeChild(c)
        }
        B(a.element, a.r), B(a.element, a.s), B(a.element, a.u), B(a.element, a.G), B(a.element, a.k)
    }

    function Oa(a) {
        return n(s(a), function (a) {
            if (a) {
                if (a.head && (a.head = Pa(a.head)), a.body) for (var b in a.body) a.body[b] = Pa(a.body[b]);
                a.foot && (a.foot = Pa(a.foot))
            }
        }), a
    }

    function Pa(a) {
        var b = new Wa;
        return a ? E(a) ? (a = a.replace(pc, function (a, c, d, e) {
            if ("script" == c) {
                c = (c = d.match(sc)) ? c[1] : "";
                var f = d.match(uc), f = f ? f[1] : "", g = qc.test(d);
                return d = vc.exec(d), (d = !d || -1 != d[1].indexOf("/javascript") || -1 != d[1].indexOf("/x-javascript") || -1 != d[1].indexOf("/ecmascript")) ? (b.scripts.push({
                    url: f,
                    text: e,
                    name: c,
                    async: g
                }), "") : a
            }
            return "style" == c && (c = (c = d.match(sc)) ? c[1] : "", d = vc.exec(d), d = !d || -1 != d[1].indexOf("text/css")) ? (b.styles.push({url: "", text: e, name: c}), "") : a
        }), a = a.replace(oc, function (a, c) {
            var d = c.match(tc), d = d ? d[1] : "";
            if ("stylesheet" == d) {
                var d = (d = c.match(sc)) ? d[1] : "", e = c.match(rc), e = e ? e[1] : "";
                return b.styles.push({url: e, text: "", name: d}), ""
            }
            return "spf-preconnect" == d ? (e = (e = c.match(rc)) ? e[1] : "", b.links.push({url: e, rel: d}), "") : a
        }), b.html = a, b) : (a.scripts && n(a.scripts, function (a) {
            b.scripts.push({url: a.url || "", text: a.text || "", name: a.name || "", async: a.async || !1})
        }), a.styles && n(a.styles, function (a) {
            b.styles.push({url: a.url || "", text: a.text || "", name: a.name || ""})
        }), a.links && n(a.links, function (a) {
            "spf-preconnect" == a.rel && b.links.push({url: a.url || "", rel: a.rel || ""})
        }), b.html = a.html || "", b) : b
    }

    function Qa(b, c) {
        if (0 >= b.scripts.length) c && c(); else {
            var d = -1, e = function () {
                if (d++, d < b.scripts.length) {
                    var f = b.scripts[d], g = function () {
                    };
                    f.url ? g = f.name ? a(va, null, f.url, f.name) : a(xa, null, f.url) : f.text && (g = f.name ? a(Da, null, f.text, f.name) : a(Ea, null, f.text)), f.url && !f.async ? g(e) : (g(), e())
                } else c && c()
            };
            e()
        }
    }

    function Ra(a) {
        0 >= a.scripts.length || (a = r(a.scripts, function (a) {
            return a.url
        }), ya(a))
    }

    function Sa(a) {
        0 >= a.styles.length || n(a.styles, function (a) {
            a.url ? a.name ? Fa(a.url, a.name) : Ga(a.url) : a.text && (a.name ? ja(hc, a.text, a.name) : ka(hc, a.text))
        })
    }

    function Ta(a) {
        0 >= a.styles.length || (a = r(a.styles, function (a) {
            return a.url
        }), Ha(a))
    }

    function Ua(a) {
        0 >= a.links.length || (a = r(a.links, function (a) {
            return "spf-preconnect" == a.rel ? a.url : ""
        }), ua(a))
    }

    function Va(a, b, c, d, f) {
        var g = parseInt(Wb["animation-duration"], 10);
        this.element = a, this.H = b, this.duration = g, this.reverse = f, b = document.body, b = (b.dataset ? b.dataset.spfName : b.getAttribute("data-" + "spfName".replace(/([A-Z])/g, "-$1").toLowerCase())) || "", g = parseInt(Ub.uid, 10) || 0, g++, this.key = a["spf-key"] || (a["spf-key"] = "" + e("uid", g)), this.u = b && c + "-from-" + b, this.G = d && c + "-to-" + d, this.h = null, this.J = c + "-old", this.g = null, this.I = c + "-new", this.k = c + (f ? "-reverse" : "-forward"), this.C = c + "-start", this.D = this.k + "-start", this.r = c + "-end", this.s = this.k + "-end"
    }

    function Wa() {
        this.html = "", this.scripts = [], this.styles = [], this.links = []
    }

    function Xa(a, b, c, d) {
        var e, f = d || {}, g = !1, h = 0, i = new XMLHttpRequest;
        i.open(a, b, !0), i.timing = {};
        var j = i.abort;
        if (i.abort = function () {
                clearTimeout(e), i.onreadystatechange = null, j.call(i)
            }, i.onreadystatechange = function () {
                var a = i.timing;
                if (i.readyState == zc) {
                    if (a.responseStart = a.responseStart || Tb(), "json" == i.responseType) g = !1; else if (-1 < (i.getResponseHeader("Transfer-Encoding") || "").toLowerCase().indexOf("chunked")) g = !0; else {
                        var a = i.getResponseHeader("X-Firefox-Spdy"), c = window.chrome && chrome.loadTimes && chrome.loadTimes(), c = c && c.wasFetchedViaSpdy;
                        g = !(!a && !c)
                    }
                    f.A && f.A(i)
                } else i.readyState == Ac ? g && f.l && (a = i.responseText.substring(h), h = i.responseText.length, f.l(i, a)) : i.readyState == Bc && (a.responseEnd = a.responseEnd || Tb(), window.performance && window.performance.getEntriesByName && (i.resourceTiming = window.performance.getEntriesByName(b).pop()), g && f.l && i.responseText.length > h && (a = i.responseText.substring(h), h = i.responseText.length, f.l(i, a)), clearTimeout(e), f.w && f.w(i))
            }, "responseType" in i && "json" == f.responseType && (i.responseType = "json"), a = "POST" == a, f.headers) for (var k in f.headers) i.setRequestHeader(k, f.headers[k]), "content-type" == k.toLowerCase() && (a = !1);
        return a && i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), 0 < f.F && (e = setTimeout(function () {
            i.abort(), f.B && f.B(i)
        }, f.F)), i.timing.fetchStart = Tb(), i.send(c), i
    }

    function Ya(b, c) {
        var d = c || {};
        d.method = ((d.method || "GET") + "").toUpperCase(), d.type = d.type || "request";
        var e = b, f = Wb["url-identifier"] || "";
        if (f) {
            var f = f.replace("__type__", d.type || ""), g = F(e, "#"), h = F(g[0], "?"), e = h[0], i = h[1], h = h[2], j = g[1], g = g[2];
            if (0 == f.lastIndexOf("?", 0)) i && (f = f.replace("?", "&")), h += f; else {
                if (0 == f.lastIndexOf(".", 0)) if (D(e, "/")) f = "index" + f; else {
                    var k = e.lastIndexOf(".");
                    -1 < k && (e = e.substring(0, k))
                } else D(e, "/") && 0 == f.lastIndexOf("/", 0) && (f = f.substring(1));
                e += f
            }
            e = e + i + h + j + g
        }
        if (f = W(e), e = {}, e.spfUrl = f, e.startTime = Tb(), e.fetchStart = e.startTime, i = cb(b, d.current, null, d.type, !1), i = db(i, d.current), e.spfPrefetched = !!i && "prefetch" == i.type, e.spfCached = !!i, i) {
            var l, d = a(Za, null, b, d, e, i.key, i.response);
            return l = window._spf_state = window._spf_state || {}, f = parseInt(l.uid, 10) || 0, f++, l = l.uid = f, $b[l] = d, Yb ? window.postMessage(Zb + l, "*") : window.setTimeout(a(H, null, l), 0), null
        }
        if (i = {}, h = Wb["request-headers"]) for (l in h) j = h[l], i[l] = null == j ? "" : j;
        if (d.headers) for (l in d.headers) j = d.headers[l], i[l] = null == j ? "" : j;
        return null != d.b && (i["X-SPF-Referer"] = d.b), null != d.current && (i["X-SPF-Previous"] = d.current), (l = Wb["advanced-header-identifier"]) && (i["X-SPF-Request"] = l.replace("__type__", d.type), i.Accept = "application/json"), l = new eb, h = a(ab, null, b, d, e, l), l = {
            headers: i,
            F: Wb["request-timeout"],
            A: a($a, null, b, l),
            l: a(_a, null, b, d, e, l),
            w: h,
            B: h
        }, Wb["advanced-response-type-json"] && (l.responseType = "json"), "POST" == d.method ? Xa("POST", f, d.q, l) : Xa("GET", f, null, l)
    }

    function Za(a, b, c, d, e) {
        var f = !1;
        c.responseStart = c.responseEnd = Tb(), b.type && 0 == b.type.lastIndexOf("navigate", 0) && (c.navigationStart = c.startTime, Wb["cache-unified"] || (t(d), f = !0)), b.e && "multipart" == e.type && n(e.parts, function (d) {
            d.timing || (d.timing = {}), d.timing.spfCached = !!c.spfCached, d.timing.spfPrefetched = !!c.spfPrefetched, b.e(a, d)
        }), bb(a, b, c, e, f)
    }

    function $a(a, b, c) {
        a = -1 != (c.getResponseHeader("X-SPF-Response-Type") || "").toLowerCase().indexOf("multipart"), b.v = a
    }

    function _a(a, b, c, d, e, f, g) {
        if (d.v) {
            f = d.c + f;
            var h;
            try {
                h = Ia(f, !0, g)
            } catch (i) {
                return e.abort(), void(b.d && b.d(a, i, e))
            }
            b.e && n(h.n, function (d) {
                d.timing || (d.timing = {}), d.timing.spfCached = !!c.spfCached, d.timing.spfPrefetched = !!c.spfPrefetched, b.e(a, d)
            }), d.complete = d.complete.concat(h.n), d.c = h.c
        }
    }

    function ab(a, b, c, d, e) {
        if (e.timing) for (var f in e.timing) c[f] = e.timing[f];
        if (e.resourceTiming) if ("load" == b.type) for (var g in e.resourceTiming) c[g] = e.resourceTiming[g]; else if (window.performance && window.performance.timing && (f = window.performance.timing.navigationStart, f + e.resourceTiming.startTime >= c.startTime)) for (var h in e.resourceTiming) g = e.resourceTiming[h], void 0 !== g && (D(h, "Start") || D(h, "End") || "startTime" == h) && (c[h] = f + Math.round(g));
        "load" != b.type && (c.navigationStart = c.startTime), d.complete.length && (d.c = Xb(d.c), d.c && _a(a, b, c, d, e, "", !0));
        var i;
        if ("json" == e.responseType) {
            if (!e.response) return void(b.d && b.d(a, Error("JSON response parsing failed"), e));
            i = Oa(s(e.response))
        } else try {
            i = Ia(e.responseText).n
        } catch (j) {
            return void(b.d && b.d(a, j, e))
        }
        if (b.e && 1 < i.length) for (d = d.complete.length; d < i.length; d++) e = i[d], e.timing || (e.timing = {}), e.timing.spfCached = !!c.spfCached, e.timing.spfPrefetched = !!c.spfPrefetched, b.e(a, e);
        if (1 < i.length) {
            var k;
            n(i, function (a) {
                a.cacheType && (k = a.cacheType)
            }), i = {parts: i, type: "multipart"}, k && (i.cacheType = k)
        } else i = 1 == i.length ? i[0] : {};
        bb(a, b, c, i, !0)
    }

    function bb(a, b, c, d, e) {
        if (e && "POST" != b.method && (e = cb(a, b.current, d.cacheType, b.type, !0))) {
            d.cacheKey = e;
            var f = {response: d, type: b.type || ""}, g = parseInt(Wb["cache-lifetime"], 10), h = parseInt(Wb["cache-max"], 10);
            0 >= g || 0 >= h || (h = x(), f = {data: f, life: g, time: Tb(), count: 0}, w(f), h[e] = f, setTimeout(u, 1e3))
        }
        d.timing = c, b.m && b.m(a, d)
    }

    function cb(a, b, c, d, e) {
        a = W(a);
        var f;
        return Wb["cache-unified"] ? f = a : "navigate-back" == d || "navigate-forward" == d ? f = "history " + a : "navigate" == d ? f = (e ? "history " : "prefetch ") + a : "prefetch" == d && (f = e ? "prefetch " + a : ""), b && "url" == c ? f += " previous " + b : b && "path" == c && (f += " previous " + V(b).pathname), f || ""
    }

    function db(a, b) {
        var c = [];
        b && (c.push(a + " previous " + b), c.push(a + " previous " + V(b).pathname)), c.push(a);
        var d = null;
        return p(c, function (a) {
            var b;
            a:{
                if (b = x(), a in b) {
                    if (b = b[a], v(b)) {
                        w(b), b = b.data;
                        break a
                    }
                    t(a)
                }
                b = void 0
            }
            return b && (d = {key: a, response: b.response, type: b.type}), !!b
        }), d
    }

    function eb() {
        this.v = !1, this.c = "", this.complete = []
    }

    function fb(a) {
        return g(a, function (a) {
            return z(a, Wb["link-class"])
        })
    }

    function gb(a) {
        return g(a, function (a) {
            return z(a, Wb["nolink-class"])
        })
    }

    function hb(a, b) {
        return g(a, function (a) {
            return a.href && "img" != a.tagName.toLowerCase()
        }, b)
    }

    function ib(a) {
        if (a.metaKey || a.altKey || a.ctrlKey || a.shiftKey || 0 < a.button) return null;
        var b = fb(a.target);
        return !b || Wb["nolink-class"] && gb(a.target) ? null : (a = hb(a.target, b)) ? a.href : null
    }

    function jb(a) {
        return V(a).origin == V(window.location.href).origin
    }

    function kb() {
        if (!Ub["nav-init"]) return !1;
        var a = parseInt(Ub["nav-counter"], 10) || 0;
        a++;
        var b = parseInt(Wb["navigate-limit"], 10), b = isNaN(b) ? 1 / 0 : b;
        return !(a > b) && (a = parseInt(Ub["nav-init-time"], 10), a--, a = Tb() - a, b = parseInt(Wb["navigate-lifetime"], 10), b = isNaN(b) ? 1 / 0 : b, !(a > b))
    }

    function lb(a, b) {
        var c = b || window.location.href;
        if (-1 != a.indexOf("#")) {
            var d = W(a), c = W(c);
            if (d == c) return !1
        }
        return !0
    }

    function mb(a) {
        if (!a.defaultPrevented) {
            var b = ib(a);
            b && (b = Y(b), jb(b) && kb() && c("spfclick", {url: b, target: a.target}) && (qb(b, {}, new Rb), a.preventDefault()))
        }
    }

    function nb(a) {
        var b = ib(a);
        b && setTimeout(function () {
            Bb(b)
        }, 0)
    }

    function ob() {
        var a;
        a = Ub["nav-scroll-position"] || null;
        var b = Ub["nav-scroll-url"] || "";
        a = a && b == window.location.href ? a : null, Qb(), a && window.scroll.apply(null, a)
    }

    function pb(a, b) {
        var d = new Rb({current: b && b["spf-current"], history: !0, position: b && b["spf-position"], b: b && b["spf-referer"], reverse: !(!b || !b["spf-back"])}), f = Wb["reload-identifier"];
        f && (a = X(a, [f])), jb(a) ? kb() ? c("spfhistory", {
            url: a,
            referer: d.b,
            previous: d.current
        }) && (d.position && (e("nav-scroll-position", [window.pageXOffset, window.pageYOffset]), e("nav-scroll-url", window.location.href)), qb(a, {}, d)) : zb(a, Jc) : zb(a, Oc)
    }

    function qb(b, c, d) {
        if (xb(), lb(b, d.current)) if (Ib(b, d.b, d.current, c)) {
            e("nav-counter", (parseInt(Ub["nav-counter"], 10) || 0) + 1), Ob(b);
            var f, g = W(b), h = "preprocess " + W(g);
            for (f in ac) h != f && 0 == f.lastIndexOf("preprocess", 0) && R(f);
            g = Pb()[g], e("nav-request", g), e("nav-promote", null), e("nav-promote-time", null), g && 4 != g.readyState ? (g = "preprocess " + W(b), h = "promote " + W(b), e("nav-promote", b), e("nav-promote-time", Tb()), R(g), O(h, !0), d.history || sb(b, d.b, a(tb, null, c))) : (g = a(tb, null, c), h = a(ub, null, c, d), f = a(vb, null, c, d), Wb["advanced-navigate-persist-timing"] || mc(), d.type = "navigate", d.history && (d.type += d.reverse ? "-back" : "-forward"), c = Ya(b, {
                method: c.method,
                headers: c.headers,
                e: h,
                d: g,
                m: f,
                q: c.postData,
                type: d.type,
                current: d.current,
                b: d.b
            }), e("nav-request", c), d.history || sb(b, d.b, g))
        } else zb(b, Kc); else d.history || sb(b, d.b, a(tb, null, c)), rb(b, d)
    }

    function rb(a, b) {
        if (b.position) Qb(), window.scroll.apply(null, b.position), b.f = !0; else {
            var c = F(a, "#");
            c[2] ? (c = document.getElementById(c[2])) && (Qb(), c.scrollIntoView(), b.f = !0) : b.f || (Qb(), window.scroll(0, 0), b.f = !0)
        }
    }

    function sb(a, b, c) {
        try {
            i(null, {"spf-position": [window.pageXOffset, window.pageYOffset]}), W(a, !0) != window.location.href && j(!1, a, {"spf-referer": b}, void 0)
        } catch (d) {
            xb(), c(a, d)
        }
    }

    function tb(a, b, c, d) {
        e("nav-request", null), Hb(b, c, a, void 0, d) && zb(b, Pc, c)
    }

    function ub(a, b, c, d) {
        if (Jb(c, d, a)) if (d.reload) zb(c, Nc); else if (d.redirect) wb(a, d.redirect); else try {
            Ja(c, d, b, function () {
                Kb(c, d, a)
            })
        } catch (e) {
            tb(a, c, e)
        } else zb(c, Lc)
    }

    function vb(a, b, c, d) {
        if (e("nav-request", null), Ub["nav-promote"] == b.a) {
            var f = d.timing || {};
            f.navigationStart = Ub["nav-promote-time"], f.spfPrefetched = !0
        }
        var g = "multipart" == d.type;
        if (!g) {
            if (!Lb(c, d, a)) return void zb(c, Mc);
            if (d.reload) return void zb(c, Nc);
            if (d.redirect) return void wb(a, d.redirect)
        }
        try {
            Ja(c, g ? {} : d, b, function () {
                var e = d.name || "";
                g && n(d.parts, function (a) {
                    e = a.name || e
                }), C(e), rb(c, b), Mb(c, d, a)
            })
        } catch (h) {
            tb(a, c, h)
        }
    }

    function wb(a, b) {
        try {
            b += window.location.hash, i(b, null, !0)
        } catch (c) {
            xb(), tb(a, b, c)
        }
    }

    function xb() {
        var a = Ub["nav-request"];
        a && (a.abort(), e("nav-request", null))
    }

    function yb(a, c) {
        var d;
        return a && (d = Array.prototype.slice.call(arguments), d[0] = a, d = b.apply(null, d)), !1 !== d
    }

    function zb(a, b, d) {
        d = d ? d.message : "", xb(), Ob();
        var f = b;
        d && (f += " Message: " + d), c("spfreload", {url: a, reason: f});
        var g = window.location.href;
        Wb["experimental-remove-history"] && g == a && (e("history-ignore-pop", !0), window.history.back()), setTimeout(function () {
            var c = Wb["reload-identifier"];
            if (c) {
                var d = {};
                d[c] = encodeURIComponent(b);
                var e, c = a, f = F(c, "#"), c = f[0], h = -1 != c.indexOf("?") ? "&" : "?";
                for (e in d) c += h + e, d[e] && (c += "=" + d[e]), h = "&";
                a = c + f[1] + f[2]
            }
            window.location.href = a, lb(a, g) || window.location.reload()
        }, 0)
    }

    function Ab(b, c, d) {
        if (d.a = d.a || b, Ib(b, void 0, void 0, c, !0)) {
            var e = a(Db, null, !1, c, d), f = a(Eb, null, !1, c, d), g = a(Fb, null, !1, c, d);
            d.type = "load", Ya(b, {method: c.method, headers: c.headers, e: f, d: e, m: g, q: c.postData, type: d.type})
        }
    }

    function Bb(a, b) {
        a = Y(a), Cb(a, b || {}, new Rb)
    }

    function Cb(b, c, d) {
        if (d.a = d.a || b, Ib(b, void 0, void 0, c, !0)) {
            var e = a(Db, null, !0, c, d), f = a(Eb, null, !0, c, d), g = a(Fb, null, !0, c, d);
            d.type = "prefetch", c = Ya(b, {method: c.method, headers: c.headers, e: f, d: e, m: g, q: c.postData, type: d.type, current: d.current}), b = W(b), Pb()[b] = c
        }
    }

    function Db(a, b, c, d, e) {
        a && Nb(d), a && Ub["nav-promote"] == c.a ? tb(b, d, e) : Hb(d, e, b, !0)
    }

    function Eb(b, c, d, e, f) {
        if (Jb(e, f, c, !0)) {
            if (f.reload) {
                if (!b) return;
                if (Ub["nav-promote"] == d.a) return void zb(e, Nc)
            }
            if (f.redirect) Gb(b, c, d, f.redirect); else {
                if (b) {
                    var g = a(ub, null, c, d, e, f), h = "promote " + W(d.a);
                    if (N(h, g), Ub["nav-promote"] == d.a) return void O(h, !0)
                }
                (b ? Ka : Ja)(e, f, d, function () {
                    Kb(e, f, c, !0)
                })
            }
        }
    }

    function Fb(b, c, d, e, f) {
        var g = "multipart" == f.type;
        if (!g) {
            if (!Lb(e, f, c, !0)) return void zb(e, Mc);
            if (f.reload) {
                if (!b) return;
                if (Ub["nav-promote"] == d.a) return void zb(e, Nc)
            }
            if (f.redirect) return void Gb(b, c, d, f.redirect)
        }
        var h = "promote " + W(d.a);
        if (b) {
            if (Nb(e), Ub["nav-promote"] == d.a) return N(h, a(vb, null, c, d, e, f)), void O(h, !0);
            R(h)
        }
        h = b ? Ka : Ja;
        try {
            h(e, g ? {} : f, d, function () {
                Mb(e, f, c, !0)
            })
        } catch (i) {
            Db(b, c, d, e, i)
        }
    }

    function Gb(a, b, c, d) {
        a = a ? Cb : Ab;
        var e = {};
        n([Dc, Ec, Fc, Gc, Hc, Ic], function (a) {
            e[a] = b[a]
        }), a(d, e, c)
    }

    function Hb(a, b, d, e, f) {
        return a = {url: a, err: b, xhr: f}, (d = yb((d || {})[Dc], a)) && !e && (d = c("spferror", a)), d
    }

    function Ib(a, b, d, e, f) {
        return a = {url: a, referer: b, previous: d}, (e = yb((e || {})[Ec], a)) && !f && (e = c("spfrequest", a)), e
    }

    function Jb(a, b, d, e) {
        return a = {url: a, part: b}, (d = yb((d || {})[Fc], a)) && !e && (d = c("spfpartprocess", a)), d
    }

    function Kb(a, b, d, e) {
        a = {url: a, part: b}, yb((d || {})[Gc], a) && !e && c("spfpartdone", a)
    }

    function Lb(a, b, d, e) {
        return a = {url: a, response: b}, (d = yb((d || {})[Hc], a)) && !e && (d = c("spfprocess", a)), d
    }

    function Mb(a, b, d, e) {
        a = {url: a, response: b}, yb((d || {})[Ic], a) && !e && c("spfdone", a)
    }

    function Nb(a) {
        a = W(a);
        var b = Pb(), c = b[a];
        c && c.abort(), delete b[a]
    }

    function Ob(a) {
        var b = Pb();
        a = a && W(a);
        for (var c in b) a != c && Nb(c)
    }

    function Pb() {
        return "nav-prefetches" in Ub ? Ub["nav-prefetches"] : e("nav-prefetches", {})
    }

    function Qb() {
        e("nav-scroll-position", null), e("nav-scroll-url", null)
    }

    function Rb(a) {
        a = a || {}, this.current = a.history && a.current ? a.current : window.location.href, this.history = !!a.history, this.a = a.a || "", this.position = a.position || null, this.b = void 0 != a.b ? a.b : window.location.href, this.reverse = !!a.reverse, this.f = !!a.f, this.type = a.type || ""
    }

    function Sb() {
        fa(jc), fa(hc), "complete" == document.readyState && (document.removeEventListener ? document.removeEventListener("DOMContentLoaded", Sb, !1) : document.detachEvent && document.detachEvent("onreadystatechange", Sb))
    }

    var Tb = window.performance && window.performance.timing && window.performance.now ? function () {
        return window.performance.timing.navigationStart + window.performance.now()
    } : function () {
        return (new Date).getTime()
    }, Ub = window._spf_state || {};
    window._spf_state = Ub;
    var Vb = {
        "animation-class": "spf-animate",
        "animation-duration": 425,
        "cache-lifetime": 6e5,
        "cache-max": 50,
        "cache-unified": !1,
        "link-class": "spf-link",
        "nolink-class": "spf-nolink",
        "navigate-limit": 20,
        "navigate-lifetime": 864e5,
        "reload-identifier": null,
        "request-timeout": 0,
        "url-identifier": "?spf=__type__"
    }, Wb = {};
    "config" in Ub || e("config", Wb), Wb = Ub.config, Tb();
    var Xb = String.prototype.trim ? function (a) {
        return a.trim()
    } : function (a) {
        return a.replace(/^\s+|\s+$/g, "")
    }, Yb = function () {
        function a() {
            b = !1
        }

        if (!window.postMessage) return !1;
        var b = !0;
        return I(a), window.postMessage("", "*"), J(a), b
    }(), Zb = "spf:", $b = {};
    "async-defers" in Ub || e("async-defers", $b), $b = Ub["async-defers"], Yb && ("async-listener" in Ub && J(Ub["async-listener"]), I(G), e("async-listener", G));
    var _b = {};
    "ps-s" in Ub || e("ps-s", _b), _b = Ub["ps-s"];
    var ac = {}, bc = {}, cc = {}, dc = {}, ec = -1 != navigator.userAgent.indexOf(" Trident/"), fc = 1, gc = 2, hc = "css", ic = "img", jc = "js";
    "rsrc-s" in Ub || e("rsrc-s", bc), bc = Ub["rsrc-s"], "rsrc-n" in Ub || e("rsrc-n", cc), cc = Ub["rsrc-n"], "rsrc-u" in Ub || e("rsrc-u", dc), dc = Ub["rsrc-u"];
    var kc = {};
    "js-d" in Ub || e("js-d", kc);
    var kc = Ub["js-d"], lc = {};
    "js-u" in Ub || e("js-u", lc), lc = Ub["js-u"];
    var mc, nc = function () {
            var a = document.createElement("div");
            return "transition" in a.style || p(["webkit", "Moz", "Ms", "O", "Khtml"], function (b) {
                return b + "Transition" in a.style
            })
        }(), oc = /\x3clink([\s\S]*?)\x3e/gi, pc = /\x3c(script|style)([\s\S]*?)\x3e([\s\S]*?)\x3c\/\1\x3e/gi, qc = /(?:\s|^)async(?:\s|=|$)/i, rc = /(?:\s|^)href\s*=\s*["']?([^\s"']+)/i,
        sc = /(?:\s|^)name\s*=\s*["']?([^\s"']+)/i, tc = /(?:\s|^)rel\s*=\s*["']?([^\s"']+)/i, uc = /(?:\s|^)src\s*=\s*["']?([^\s"']+)/i, vc = /(?:\s|^)type\s*=\s*["']([^"']+)["']/i, wc = "[\r\n",
        xc = ",\r\n", yc = "]\r\n", zc = 2, Ac = 3, Bc = 4,
        Cc = window.performance && (window.performance.clearResourceTimings || window.performance.webkitClearResourceTimings || window.performance.mozClearResourceTimings || window.performance.msClearResourceTimings || window.performance.oClearResourceTimings);
    mc = Cc ? a(Cc, window.performance) : d;
    var Dc = "onError", Ec = "onRequest", Fc = "onPartProcess", Gc = "onPartDone", Hc = "onProcess", Ic = "onDone", Jc = "1", Kc = "2", Lc = "3", Mc = "4", Nc = "5", Oc = "9", Pc = "10";
    document.addEventListener ? document.addEventListener("DOMContentLoaded", Sb, !1) : document.attachEvent && document.attachEvent("onreadystatechange", Sb), Sb();
    var Qc, Rc = {
        init: function (a) {
            var b = !("function" != typeof window.history.pushState && !m().contentWindow.history.pushState);
            a = a || {};
            for (var c in Vb) Wb[c] = c in a ? a[c] : Vb[c];
            for (c in a) c in Vb || (Wb[c] = a[c]);
            if (b) {
                if (c = Hb, !Ub["history-init"] && window.addEventListener) {
                    a = window.location.href, window.addEventListener("popstate", k, !1), e("history-init", !0),
                        e("history-callback", pb), e("history-error-callback", c), e("history-listener", k), e("history-url", a), e("history-timestamp", Tb());
                    var d = {"spf-referer": document.referrer};
                    try {
                        i(a, d)
                    } catch (f) {
                        c && c(a, f)
                    }
                }
                !Ub["nav-init"] && document.addEventListener && (e("nav-init", !0), e("nav-init-time", Tb()), e("nav-counter", 0), document.addEventListener("click", mb, !1), e("nav-listener", mb), !Wb["experimental-prefetch-mousedown"] || "ontouchstart" in window || 0 < window.navigator.maxTouchPoints || 0 < window.navigator.msMaxTouchPoints || (document.addEventListener("mousedown", nb, !1), e("nav-mousedown-listener", nb)), document.addEventListener("scroll", ob, !1), e("nav-scroll-listener", ob))
            }
            return b
        }, dispose: function () {
            "undefined" != typeof History && History.prototype.pushState && (xb(), Ub["nav-init"] && (document.removeEventListener && (document.removeEventListener("click", Ub["nav-listener"], !1), document.removeEventListener("mousedown", Ub["nav-mousedown-listener"], !1), document.removeEventListener("scroll", Ub["nav-scroll-listener"], !1)), e("nav-listener", null), e("nav-mousedown-listener", null), e("nav-scroll-listener", null), e("nav-scroll-position", null), e("nav-scroll-url", null), e("nav-init", !1), e("nav-init-time", null), e("nav-counter", null)), Ub["history-init"] && (window.removeEventListener && window.removeEventListener("popstate", Ub["history-listener"], !1), e("history-init", !1), e("history-callback", null), e("history-error-callback", null), e("history-listener", null), e("history-url", null), e("history-timestamp", 0)));
            for (var a in Wb) delete Wb[a]
        }, navigate: function (a, b) {
            a && (a = Y(a), jb(a) ? kb() ? qb(a, b || {}, new Rb) : zb(a, Jc) : zb(a, Oc))
        }, load: function (a, b) {
            a = Y(a), Ab(a, b || {}, new Rb)
        }, prefetch: Bb, process: function (b, c) {
            function d(a, b, d, e) {
                a == b && c && c(e)
            }

            var e = window.location.href;
            if ("multipart" == b.type) {
                var f = b.parts, g = f.length - 1;
                n(f, function (b, c) {
                    Ja(e, b, null, a(d, null, c, g))
                })
            } else Ja(e, b, null, a(d, null, 0, 0))
        }
    }, Sc = {
        cache: {
            remove: t, clear: function () {
                x({})
            }
        }, script: {
            load: va, get: xa, ready: za, done: function (a) {
                ra(jc, a, ""), ba(jc)
            }, require: Aa, declare: function (a, b) {
                if (a) {
                    for (var c in a) kc[c] = a[c];
                    if (b) for (c in b) lc[c] = b[c]
                }
            }, path: function (a) {
                e("rsrc-p-" + jc, a)
            }, unload: wa, ignore: function (a, b) {
                a = s(a);
                var c = ma(jc, a.sort().join("|"));
                L(c, b)
            }, unrequire: Ca, prefetch: ya
        }, style: {
            load: Fa, get: Ga, unload: function (a) {
                $(hc, a)
            }, path: function (a) {
                e("rsrc-p-" + hc, a)
            }, prefetch: Ha
        }
    }, Tc = this.spf = this.spf || {};
    for (Qc in Rc) Tc[Qc] = Rc[Qc];
    for (var Uc in Sc) for (var Vc in Sc[Uc]) Tc[Uc] = Tc[Uc] || {}, Tc[Uc][Vc] = Sc[Uc][Vc];
    if (c("spfready"), "function" == typeof define && define.amd) define(spf); else if ("object" == typeof exports) for (var Wc in spf) exports[Wc] = spf[Wc]
}(), !function (a, b) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", b) : "object" == typeof module && module.exports ? module.exports = b() : a.EvEmitter = b()
}("undefined" != typeof window ? window : this, function () {
    function a() {
    }

    var b = a.prototype;
    return b.on = function (a, b) {
        if (a && b) {
            var c = this._events = this._events || {}, d = c[a] = c[a] || [];
            return -1 == d.indexOf(b) && d.push(b), this
        }
    }, b.once = function (a, b) {
        if (a && b) {
            this.on(a, b);
            var c = this._onceEvents = this._onceEvents || {}, d = c[a] = c[a] || {};
            return d[b] = !0, this
        }
    }, b.off = function (a, b) {
        var c = this._events && this._events[a];
        if (c && c.length) {
            var d = c.indexOf(b);
            return -1 != d && c.splice(d, 1), this
        }
    }, b.emitEvent = function (a, b) {
        var c = this._events && this._events[a];
        if (c && c.length) {
            var d = 0, e = c[d];
            b = b || [];
            for (var f = this._onceEvents && this._onceEvents[a]; e;) {
                var g = f && f[e];
                g && (this.off(a, e), delete f[e]), e.apply(this, b), d += g ? 0 : 1, e = c[d]
            }
            return this
        }
    }, b.allOff = b.removeAllListeners = function () {
        delete this._events, delete this._onceEvents
    }, a
}), function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (c) {
        return b(a, c)
    }) : "object" == typeof module && module.exports ? module.exports = b(a, require("ev-emitter")) : a.imagesLoaded = b(a, a.EvEmitter)
}("undefined" != typeof window ? window : this, function (a, b) {
    function c(a, b) {
        for (var c in b) a[c] = b[c];
        return a
    }

    function d(a) {
        var b = [];
        if (Array.isArray(a)) b = a; else if ("number" == typeof a.length) for (var c = 0; c < a.length; c++) b.push(a[c]); else b.push(a);
        return b
    }

    function e(a, b, f) {
        return this instanceof e ? ("string" == typeof a && (a = document.querySelectorAll(a)), this.elements = d(a), this.options = c({}, this.options), "function" == typeof b ? f = b : c(this.options, b), f && this.on("always", f), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(function () {
            this.check()
        }.bind(this))) : new e(a, b, f)
    }

    function f(a) {
        this.img = a
    }

    function g(a, b) {
        this.url = a, this.element = b, this.img = new Image
    }

    var h = a.jQuery, i = a.console;
    e.prototype = Object.create(b.prototype), e.prototype.options = {}, e.prototype.getImages = function () {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, e.prototype.addElementImages = function (a) {
        "IMG" == a.nodeName && this.addImage(a), this.options.background === !0 && this.addElementBackgroundImages(a);
        var b = a.nodeType;
        if (b && j[b]) {
            for (var c = a.querySelectorAll("img"), d = 0; d < c.length; d++) {
                var e = c[d];
                this.addImage(e)
            }
            if ("string" == typeof this.options.background) {
                var f = a.querySelectorAll(this.options.background);
                for (d = 0; d < f.length; d++) {
                    var g = f[d];
                    this.addElementBackgroundImages(g)
                }
            }
        }
    };
    var j = {1: !0, 9: !0, 11: !0};
    return e.prototype.addElementBackgroundImages = function (a) {
        var b = getComputedStyle(a);
        if (b) for (var c = /url\((['"])?(.*?)\1\)/gi, d = c.exec(b.backgroundImage); null !== d;) {
            var e = d && d[2];
            e && this.addBackground(e, a), d = c.exec(b.backgroundImage)
        }
    }, e.prototype.addImage = function (a) {
        var b = new f(a);
        this.images.push(b)
    }, e.prototype.addBackground = function (a, b) {
        var c = new g(a, b);
        this.images.push(c)
    }, e.prototype.check = function () {
        function a(a, c, d) {
            setTimeout(function () {
                b.progress(a, c, d)
            })
        }

        var b = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (b) {
            b.once("progress", a), b.check()
        }) : void this.complete()
    }, e.prototype.progress = function (a, b, c) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded, this.emitEvent("progress", [this, a, b]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, a), this.progressedCount == this.images.length && this.complete(), this.options.debug && i && i.log("progress: " + c, a, b)
    }, e.prototype.complete = function () {
        var a = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(a, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var b = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[b](this)
        }
    }, f.prototype = Object.create(b.prototype), f.prototype.check = function () {
        var a = this.getIsImageComplete();
        return a ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, f.prototype.getIsImageComplete = function () {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }, f.prototype.confirm = function (a, b) {
        this.isLoaded = a, this.emitEvent("progress", [this, this.img, b])
    }, f.prototype.handleEvent = function (a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }, f.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, f.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, f.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, g.prototype = Object.create(f.prototype), g.prototype.check = function () {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var a = this.getIsImageComplete();
        a && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, g.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, g.prototype.confirm = function (a, b) {
        this.isLoaded = a, this.emitEvent("progress", [this, this.element, b])
    }, e.makeJQueryPlugin = function (b) {
        b = b || a.jQuery, b && (h = b, h.fn.imagesLoaded = function (a, b) {
            var c = new e(this, a, b);
            return c.jqDeferred.promise(h(this))
        })
    }, e.makeJQueryPlugin(), e
}), function () {
    function a() {
        Object.freeze || (Object.freeze = function (a) {
            return a
        }), Array.prototype.filter && "findAll" != Array.prototype.filter.name || (Array.prototype.filter = function (a) {
            if (void 0 === this || null === this) throw new TypeError;
            var b = Object(this), c = b.length >>> 0;
            if ("function" != typeof a) throw new TypeError;
            for (var d = [], e = arguments.length >= 2 ? arguments[1] : void 0, f = 0; f < c; f++) if (f in b) {
                var g = b[f];
                a.call(e, g, f, b) && d.push(g)
            }
            return d
        }), Array.prototype.map || (Array.prototype.map = function (a, b) {
            var c, d, e;
            if (null == this) throw new TypeError(" this is null or not defined");
            var f = Object(this), g = f.length >>> 0;
            if ("function" != typeof a) throw new TypeError(a + " is not a function");
            for (arguments.length > 1 && (c = b), d = new Array(g), e = 0; e < g;) {
                var h, i;
                e in f && (h = f[e], i = a.call(c, h, e, f), d[e] = i), e++
            }
            return d
        }), document.querySelectorAll || (document.querySelectorAll = function (a) {
            var b, c = document.createElement("style"), d = [];
            for (document.documentElement.firstChild.appendChild(c), document._qsa = [], c.styleSheet.cssText = a + "{x-qsa:expression(document._qsa && document._qsa.push(this))}", window.scrollBy(0, 0), c.parentNode.removeChild(c); document._qsa.length;) b = document._qsa.shift(), b.style.removeAttribute("x-qsa"), d.push(b);
            return document._qsa = null, d
        }), document.querySelector || (document.querySelector = function (a) {
            var b = document.querySelectorAll(a);
            return b.length ? b[0] : null
        }), Array.prototype.indexOf || (Array.prototype.indexOf = function (a) {
            for (var b = 0; b < this.length; b++) if (this[b] === a) return b;
            return -1
        }), Array.isArray || (Array.isArray = function (a) {
            return "[object Array]" === Object.prototype.toString.call(a)
        }), Object.keys || (Object.keys = function () {
            var a = Object.prototype.hasOwnProperty, b = !{toString: null}.propertyIsEnumerable("toString"),
                c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], d = c.length;
            return function (e) {
                if ("object" != typeof e && ("function" != typeof e || null === e)) throw new TypeError("Object.keys called on non-object");
                var f, g, h = [];
                for (f in e) a.call(e, f) && h.push(f);
                if (b) for (g = 0; g < d; g++) a.call(e, c[g]) && h.push(c[g]);
                return h
            }
        }()), !("getComputedStyle" in window) && (window.getComputedStyle = function () {
            function a(b, c, d, e) {
                var f, g = c[d], h = parseFloat(g), i = g.split(/\d/)[0];
                return e = null != e ? e : /%|em/.test(i) && b.parentElement ? a(b.parentElement, b.parentElement.currentStyle, "fontSize", null) : 16, f = "fontSize" == d ? e : /width/i.test(d) ? b.clientWidth : b.clientHeight, "em" == i ? h * e : "in" == i ? 96 * h : "pt" == i ? 96 * h / 72 : "%" == i ? h / 100 * f : h
            }

            function b(a, b) {
                var c = "border" == b ? "Width" : "", d = b + "Top" + c, e = b + "Right" + c, f = b + "Bottom" + c, g = b + "Left" + c;
                a[b] = (a[d] == a[e] == a[f] == a[g] ? [a[d]] : a[d] == a[f] && a[g] == a[e] ? [a[d], a[e]] : a[g] == a[e] ? [a[d], a[e], a[f]] : [a[d], a[e], a[f], a[g]]).join(" ")
            }

            function c(c) {
                var d = c.currentStyle, e = this, f = a(c, d, "fontSize", null);
                for (property in d) /width|height|margin.|padding.|border.+W/.test(property) && "auto" !== e[property] ? e[property] = a(c, d, property, f) + "px" : "styleFloat" === property ? e["float"] = d[property] : e[property] = d[property];
                return b(e, "margin"), b(e, "padding"), b(e, "border"), e.fontSize = f + "px", e
            }

            function d(a) {
                return new c(a)
            }

            return c.prototype = {
                constructor: c, getPropertyPriority: function () {
                }, getPropertyValue: function (a) {
                    return this[a] || ""
                }, item: function () {
                }, removeProperty: function () {
                }, setProperty: function () {
                }, getPropertyCSSValue: function () {
                }
            }, d
        }(window))
    }

    function b() {
        return g
    }

    "undefined" != typeof window && a();
    var c = this, d = {version: "2.2.4"};
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = d), exports.imgix = d) : c.imgix = d;
    var e = "imgix-usable";
    d.isImageElement = function (a) {
        return a && a.tagName && "img" === a.tagName.toLowerCase()
    }, d.setElementImageAfterLoad = function (a, b, c) {
        var e = new Image;
        e.onload = e.onerror = function () {
            var f = d.isImageElement(a);
            f && (a.onload = e.onerror = function () {
                "function" == typeof c && c(a, b)
            }), d.setElementImage(a, b), f || "function" == typeof c && c(a, b)
        }, a.hasAttribute("crossorigin") && e.setAttribute("crossorigin", a.getAttribute("crossorigin")), e.src = b
    }, d.setElementImage = function (a, b) {
        if (!a) return !1;
        if (d.isImageElement(a)) return a.src !== b && (a.src = b), !0;
        var c = d.getBackgroundImage(a);
        return c !== b && (c ? (a.style.cssText = a.style.cssText.replace(c, b), !0) : (document.addEventListener ? a.style.backgroundImage = "url(" + b + ")" : a.style.cssText = "background-image:url(" + b + ")", !0))
    }, d.getEmptyImage = function () {
        return d.versionifyUrl("https://assets.imgix.net/pixel.gif")
    }, d.getElementImage = function (a) {
        return d.isImageElement(a) ? a.src : d.getBackgroundImage(a)
    }, d.getBackgroundImage = function (a) {
        var b, c, d = /\burl\s*\(\s*["']?([^"'\r\n,]+)["']?\s*\)/gi;
        return window.getComputedStyle ? b = window.getComputedStyle(a) : document.documentElement.currentStyle && (b = a.currentStyle), b && b.backgroundImage || (b = a.style), c = d.exec(b.backgroundImage), c && c.length > 1 ? c[1] : ""
    }, d.getElementsWithImages = function () {
        return d.markElementsWithImages(), document.querySelectorAll("." + e)
    }, d.hasImage = function (a) {
        var b = a.style.cssText ? a.style.cssText.toLowerCase() : a.style.cssText;
        return a && (d.isImageElement(a) || b.indexOf("background-image") !== -1)
    }, d.markElementsWithImages = function () {
        for (var a = document.getElementsByTagName("*"), b = 0, c = a.length; b < c; b++) d.hasImage(a[b]) && d.setImgixClass(a[b])
    }, d.hasClass = function (a, b) {
        return (" " + a.className + " ").indexOf(" " + b + " ") > -1
    }, d.setImgixClass = function (a) {
        if (d.hasClass(a, e)) return d.getImgixClass(a);
        var b = d.getXPathClass(d.getElementTreeXPath(a));
        return a.classList.add(b), a.classList.add(e), d.getImgixClass(a)
    }, d.getImgixClass = function (a) {
        if (d.hasClass(a, e)) return a.className.match(/imgix-el-[^\s]+/)[0]
    }, d.getXPathClass = function (a) {
        var b;
        return b = a ? d.hashCode(a) : (new Date).getTime().toString(36), "imgix-el-" + b
    }, d.getElementImageSize = function (a) {
        var b = 0, c = 0;
        return d.isImageElement(a) ? (b = a.naturalWidth, c = a.naturalHeight) : (b = d.helpers.extractInt(d.getCssProperty(a, "width")), c = d.helpers.extractInt(d.getCssProperty(a, "height"))), {
            width: b,
            height: c
        }
    }, d.getCssPropertyById = function (a, b) {
        var c = document.getElementById(a);
        return d.helpers.getElementCssProperty(c, b)
    }, d.getCssProperty = function (a, b) {
        return d.helpers.getElementCssProperty(a, b)
    }, d.getCssPropertyBySelector = function (a, b) {
        var c = document.querySelector(a);
        return d.helpers.getElementCssProperty(c, b)
    }, d.instanceOfImgixURL = function (a) {
        return a && "[object imgixURL]" === a.toString()
    }, d.setGradientOnElement = function (a, b, c) {
        var e = [];
        if ("undefined" == typeof c) e = ["transparent", "transparent"]; else {
            var f = d.hexToRGB(c);
            "rgba" === f.slice(0, 4) ? (e.push(f), e.push(d.applyAlphaToRGB(f, 0))) : (e.push(d.applyAlphaToRGB(f, .5)), e.push(d.applyAlphaToRGB(f, 0)))
        }
        for (var g = ["-ms-linear-gradient(top, " + e[0] + " 0%, " + e[1] + " 100%),-ms-linear-gradient(bottom left, " + b[2] + " 0%," + b[4] + " 25%, " + b[6] + " 50%, " + b[8] + " 75%," + b[10] + " 100%)", "-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, " + e[1] + "), color-stop(100%, " + e[0] + ")),-webkit-gradient(linear, 0% 100%, 100% 0%, color-stop(0%, " + b[2] + "), color-stop(25%, " + b[4] + "), color-stop(50%, " + b[6] + "), color-stop(75%, " + b[7] + "), color-stop(100%, " + b[10] + "))", "-webkit-linear-gradient(top, " + e[0] + ", " + e[1] + " 100%),-webkit-linear-gradient(bottom left, " + b[2] + ", " + b[4] + ", " + b[6] + "," + b[8] + ")", "-moz-linear-gradient(top, " + e[0] + ", " + e[1] + " ),-moz-linear-gradient(bottom left, " + b[2] + ", " + b[4] + ", " + b[6] + "," + b[8] + ")", "-o-linear-gradient(top, " + e[0] + "," + e[1] + "),-o-linear-gradient(bottom left, " + b[2] + ", " + b[4] + ", " + b[6] + "," + b[8] + ")", "linear-gradient(top, " + e[0] + "," + e[1] + "),linear-gradient(bottom left, " + b[2] + ", " + b[4] + ", " + b[6] + "," + b[8] + ")"], h = 0; h < g.length; h++) a.style.backgroundImage = g[h]
    }, d.isDef = function (a) {
        return "undefined" != typeof a
    }, d.hashCode = function (a) {
        var b, c, d = 2166136261;
        for (b = 0, c = a.length; b < c; b++) d ^= a.charCodeAt(b), d += (d << 1) + (d << 4) + (d << 7) + (d << 8) + (d << 24);
        return ("0000000" + (d >>> 0).toString(16)).substr(-8)
    }, d.helpers = {
        debouncer: function (a, b) {
            var c;
            return function () {
                var d = this, e = arguments, f = function () {
                    c = null, a.apply(d, e)
                };
                window.clearTimeout(c), c = window.setTimeout(f, b)
            }
        }, throttler: function (a, b) {
            var c;
            return function () {
                var d, e = this, f = arguments;
                c || (d = function () {
                    c = null, a.apply(e, f)
                }, c = window.setTimeout(d, b))
            }
        }, urlParser: function () {
            function a(a) {
                return !isNaN(parseFloat(a)) && isFinite(a)
            }

            return function (b, c) {
                var d = c || window.location.toString();
                if (!b) return d;
                b = b.toString(), "//" === d.substring(0, 2) ? d = "http:" + d : 1 === d.split("://").length && (d = "http://" + d), c = d.split("/");
                var e = {auth: ""}, f = c[2].split("@");
                1 === f.length ? f = f[0].split(":") : (e.auth = f[0], f = f[1].split(":")), e.protocol = c[0], e.hostname = f[0], e.port = f[1] || ("https" === e.protocol.split(":")[0].toLowerCase() ? "443" : "80"), e.pathname = (c.length > 3 ? "/" : "") + c.slice(3, c.length).join("/").split("?")[0].split("#")[0];
                var g = e.pathname;
                "/" === g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1));
                var h = e.hostname, i = h.split("."), j = g.split("/");
                if ("hostname" === b) return h;
                if ("domain" === b) return /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(h) ? h : i.slice(-2).join(".");
                if ("sub" === b) return i.slice(0, i.length - 2).join(".");
                if ("port" === b) return e.port;
                if ("protocol" === b) return e.protocol.split(":")[0];
                if ("auth" === b) return e.auth;
                if ("user" === b) return e.auth.split(":")[0];
                if ("pass" === b) return e.auth.split(":")[1] || "";
                if ("path" === b) return e.pathname;
                if ("." === b.charAt(0)) {
                    if (b = b.substring(1), a(b)) return b = parseInt(b, 10), i[b < 0 ? i.length + b : b - 1] || ""
                } else {
                    if (a(b)) return b = parseInt(b, 10), j[b < 0 ? j.length + b : b] || "";
                    if ("file" === b) return j.slice(-1)[0];
                    if ("filename" === b) return j.slice(-1)[0].split(".")[0];
                    if ("fileext" === b) return j.slice(-1)[0].split(".")[1] || "";
                    if ("?" === b.charAt(0) || "#" === b.charAt(0)) {
                        var k = d, l = null;
                        if ("?" === b.charAt(0) ? k = (k.split("?")[1] || "").split("#")[0] : "#" === b.charAt(0) && (k = k.split("#")[1] || ""), !b.charAt(1)) return k;
                        b = b.substring(1), k = k.split("&");
                        for (var m = 0, n = k.length; m < n; m++) if (l = k[m].split("="), l[0] === b) return l[1] || "";
                        return null
                    }
                }
                return ""
            }
        }(), mergeObject: function () {
            for (var a, b = {}, c = 0, d = arguments.length; c < d; c++) for (a in arguments[c]) arguments[c].hasOwnProperty(a) && (b[a] = arguments[c][a]);
            return b
        }, pixelRound: function (a, b) {
            return Math.ceil(a / b) * b
        }, isNumber: function (a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        }, getWindowDPR: function () {
            var a = window.devicePixelRatio ? window.devicePixelRatio : 1;
            if (a % 1 !== 0) {
                var b = a.toString();
                b = b.split(".")[1], a = b.length > 1 && "0" !== b.slice(1, 2) ? a.toFixed(2) : a.toFixed(1)
            }
            return a
        }, getWindowWidth: function () {
            return Math.max(document.documentElement.clientWidth, window.innerWidth || 0) || 1024
        }, getWindowHeight: function () {
            return Math.max(document.documentElement.clientHeight, window.innerHeight || 0) || 768
        }, getImgSrc: function (a) {
            return a.getAttribute("data-src") || a.getAttribute("src")
        }, calculateElementSize: function (a) {
            var b = {width: a.offsetWidth, height: a.offsetHeight};
            if (null === a.parentNode || a === document.body) return b.width = this.getWindowWidth(), b.height = this.getWindowHeight(), b;
            if (0 !== b.width || 0 !== b.height) return a.alt && !a.fluid ? (a.fluid = !0, this.calculateElementSize(a.parentNode)) : b;
            var c, d, e = {}, f = {position: "absolute", visibility: "hidden", display: "block"};
            for (d in f) f.hasOwnProperty(d) && (e[d] = a.style[d], a.style[d] = f[d]);
            c = {width: a.offsetWidth, height: a.offsetHeight};
            for (d in f) f.hasOwnProperty(d) && (a.style[d] = e[d]);
            return 0 === c.width || 0 === c.height ? this.calculateElementSize(a.parentNode) : c
        }, isReallyObject: function (a) {
            return a && "object" == typeof a && "[object Object]" === a.toString()
        }, isFluidSet: function (a) {
            return a && "object" == typeof a && "[object FluidSet]" === a.toString()
        }, extractInt: function (a) {
            return void 0 === a ? 0 : "number" == typeof a ? a : parseInt(a.replace(/\D/g, ""), 10) || 0
        }, camelize: function (a) {
            return a.replace(/[-_\s]+(.)?/g, function (a, b) {
                return b ? b.toUpperCase() : ""
            })
        }, getElementCssProperty: function (a, b) {
            return window.getComputedStyle ? window.getComputedStyle(a, null).getPropertyValue(b) : a && a.style && b ? a.style[this.camelize(b)] : ""
        }, matchesSelector: function (a, b) {
            var c = (a.parentNode || document).querySelectorAll(b);
            return Array.prototype.slice.call(c).indexOf(a) > -1
        }, warn: function (a) {
            window.console && window.console.warn(a)
        }
    }, d.URL = function (a, b) {
        this._autoUpdateSel = null, this._autoUpdateCallback = null, a && "//" === a.slice(0, 2) && window && window.location && (a = window.location.protocol + a), this.setUrl(a), "object" == typeof b && this.setParams(b), this.paramAliases = {}
    }, d.URL.prototype.attachGradientTo = function (a, b, c) {
        this.getColors(16, function (e) {
            if (e && e.length < 9) return d.helpers.warn("not enough colors to create a gradient"), void(c && "function" == typeof c && c(!1));
            if ("string" == typeof a) {
                var f = document.querySelectorAll(a);
                if (f && f.length > 0) for (var g = 0; g < f.length; g++) d.setGradientOnElement(f[g], e, b)
            } else d.setGradientOnElement(a, e, b);
            c && "function" == typeof c && c(!0)
        })
    }, d.URL.prototype.attachImageTo = function (a, b) {
        if ("string" == typeof a) {
            var c = document.querySelectorAll(a);
            if (c && c.length > 0) for (var e = 0; e < c.length; e++) d.setElementImageAfterLoad(c[e], this.getUrl(), b)
        } else d.setElementImageAfterLoad(a, this.getUrl(), b)
    }, d.createParamString = function () {
        return new d.URL("")
    }, d.updateVersion = {};
    var f = {};
    d.URL.prototype.getColors = function (a, b) {
        function c(a) {
            var b, c, d = [];
            if (a && a.colors) {
                for (b = 0; b < a.colors.length; b++) c = [Math.round(255 * a.colors[b].red), Math.round(255 * a.colors[b].green), Math.round(255 * a.colors[b].blue)], d.push("rgb(" + c.join(", ") + ")");
                return d
            }
        }

        function e() {
            var a = new XMLHttpRequest;
            a.onreadystatechange = function () {
                var d;
                4 === a.readyState && (d = 200 === a.status ? JSON.parse(a.response) : {colors: [{red: 1, green: 1, blue: 1}]}, f[g] = c(d), b(f[g]))
            }, a.open("get", g, !0), a.send()
        }

        var g, h = 10, i = new d.URL(this.getUrl());
        if ("function" == typeof a) if ("number" == typeof b) {
            var j = b;
            b = a, a = j
        } else b = a, a = h;
        i.setParams({palette: "json", colors: a}), g = i.getUrl(), f.hasOwnProperty(g) ? b && b(f[g]) : e()
    }, d.URL.prototype._handleAutoUpdate = function () {
        function a(a) {
            return h === e._autoUpdateSel && a === d.updateVersion[h]
        }

        function b(b, c) {
            c in i || (i[c] = [], function () {
                var j = new Image, k = d.updateVersion[h], l = (new Date).getTime();
                j.onload = j.onerror = function () {
                    if (a(k)) for (var b = 0; b < i[c].length; b++) if (d.setElementImage(i[c][b], c), g++, "function" == typeof e._autoUpdateCallback) {
                        var h = {element: i[c][b], isComplete: g === f, percentComplete: g / f * 100, totalComplete: g, loadTime: (new Date).getTime() - l, total: f};
                        e._autoUpdateCallback(h)
                    }
                }, b.hasAttribute("crossorigin") && j.setAttribute("crossorigin", b.getAttribute("crossorigin")), j.src = c
            }()), i[c].push(b)
        }

        function c(a) {
            var c = d.getElementImage(a), f = c;
            c && c.indexOf("?") !== -1 && (f = c.split("?")[0]), e.getBaseUrl() ? b(a, e.getUrl()) : f && e.getQueryString() ? b(a, f + "?" + e.getQueryString()) : g++
        }

        var e = this, f = 0, g = 0, h = this._autoUpdateSel, i = {};
        if (d.isDef(d.updateVersion[h]) ? d.updateVersion[h]++ : d.updateVersion[h] = 1, null !== this._autoUpdateSel) {
            var j = document.querySelectorAll(this._autoUpdateSel);
            if (f = j.length, j && 1 === f) c(j[0]); else for (var k = 0; k < f; k++) c(j[k])
        }
    }, d.URL.prototype.autoUpdateImg = function (a, b) {
        this._autoUpdateSel = a, this._autoUpdateCallback = b, this._handleAutoUpdate()
    }, d.URL.prototype.setUrl = function (a) {
        a && "string" == typeof a && 0 !== a.length || (a = d.getEmptyImage()), this.urlParts = d.parseUrl(a)
    }, d.URL.prototype.setURL = function (a) {
        return this.setUrl(a)
    }, d.URL.prototype.getURL = function () {
        return this.getUrl()
    }, d.URL.prototype.toString = function () {
        return "[object imgixURL]"
    }, d.URL.prototype.getUrl = function () {
        var a = d.buildUrl(this.urlParts);
        return a && 0 !== a.length ? a : d.getEmptyImage()
    }, d.URL.prototype.removeParam = function (a) {
        this.urlParts.paramValues.hasOwnProperty(a) && (delete this.urlParts.paramValues[a], this.urlParts.params = Object.keys(this.urlParts.paramValues))
    }, d.URL.prototype.clearThenSetParams = function (a) {
        this.clearParams(!1), this.setParams(a)
    }, d.URL.prototype.clearParams = function (a) {
        a = !d.isDef(a) || a;
        for (var b in this.urlParts.paramValues) this.urlParts.paramValues.hasOwnProperty(b) && this.removeParam(b);
        a && this._handleAutoUpdate()
    }, d.URL.prototype.setParams = function (a, b) {
        if (d.instanceOfImgixURL(a)) return void d.helpers.warn("setParams warning: dictionary of imgix params expectd. imgix URL instance passed instead");
        for (var c in a) a.hasOwnProperty(c) && this.setParam(c, a[c], b, !0);
        this._handleAutoUpdate()
    }, d.URL.prototype.setParam = function (a, b, c, e) {
        return a = a.toLowerCase(), c = !d.isDef(c) || c, e = !!d.isDef(e) && e, "col" !== a && "colorize" !== a && "blend" !== a && "mono" !== a && "monochrome" !== a || "rgb" === b.slice(0, 3) && (b = d.rgbToHex(b)), !c && this.urlParts.paramValues[a] ? this : d.isDef(b) && null !== b && 0 !== b.length ? (this.urlParts.params.indexOf(a) === -1 && this.urlParts.params.push(a), decodeURIComponent(b) === b && (b = encodeURIComponent(b)), this.urlParts.paramValues[a] = String(b), e || this._handleAutoUpdate(), this) : (this.removeParam(a), this)
    }, d.URL.prototype.getParam = function (a) {
        if ("mark" === a || "mask" === a) {
            var b = this.urlParts.paramValues[a];
            return decodeURIComponent(b) !== b ? decodeURIComponent(b) : b
        }
        return this.urlParts.paramValues[a]
    }, d.URL.prototype.getParams = function () {
        return this.urlParts.paramValues ? this.urlParts.paramValues : {}
    }, d.URL.prototype.getBaseUrl = function () {
        var a = this.getUrl();
        return a.indexOf("?") !== -1 && (a = this.getUrl().split("?")[0]), a !== window.location.href ? a : ""
    }, d.URL.prototype.getQueryString = function () {
        var a = this.getUrl();
        return a.indexOf("?") !== -1 ? this.getUrl().split("?")[1] : ""
    }, d.parseUrl = function (a) {
        for (var b = ["protocol", "hostname", "port", "path", "?", "#", "hostname"], c = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"], e = {}, f = 0; f < c.length; f++) e[c[f]] = d.helpers.urlParser(b[f], a);
        var g = e.search;
        if (e.paramValues = {}, e.params = [], e.baseUrl = a.split("?")[0], g && g.length > 0) {
            "?" === g[0] && (g = g.substr(1, g.length));
            for (var h = g.split("&"), i = 0; i < h.length; i++) {
                var j = h[i].split("=");
                j[0] && j[0].length && "s" !== j[0] && (e.paramValues[j[0]] = 2 === j.length ? j[1] : "", e.params.indexOf(j[0]) === -1 && e.params.push(j[0]))
            }
        }
        return e
    }, d.buildUrl = function (a) {
        var b = a.protocol + "://" + a.host;
        if (null !== a.port && "80" !== a.port && "443" !== a.port && (b += ":" + a.port), b += a.pathname, d.versionifyUrl(a), a.params.length > 0) {
            a.params = a.params.map(function (a) {
                return a.toLowerCase()
            }), a.params = a.params.filter(function (a, b, c) {
                return c.indexOf(a) === b
            }), a.params = a.params.sort(function (a, b) {
                return a < b ? -1 : a > b ? 1 : 0
            });
            for (var c = [], e = 0; e < a.params.length; e++) a.paramValues[a.params[e]].length > 0 && c.push(a.params[e] + "=" + a.paramValues[a.params[e]]);
            b.indexOf("?") !== -1 && (b = b.split("?")[0]), b += "?" + c.join("&")
        }
        return b
    }, d.versionifyUrl = function (a) {
        return "string" == typeof a ? d.versionifyStringUrl(a) : d.versionifyParsedUrl(a)
    }, d.versionifyStringUrl = function (a) {
        var b, c, e = "ixjsv";
        return b = a.split("?"), c = b[0] + "?" + e + "=" + d.version, b[1] && (c += "&" + b[1]), c
    }, d.versionifyParsedUrl = function (a) {
        var b = "ixjsv";
        return a.paramValues[b] || a.params.push(b), a.paramValues[b] = d.version, a
    };
    var g = {
        fluidClass: "imgix-fluid",
        updateOnResize: !0,
        updateOnResizeDown: !1,
        updateOnPinchZoom: !1,
        highDPRAutoScaleQuality: !0,
        onChangeParamOverride: null,
        autoInsertCSSBestPractices: !1,
        fitImgTagToContainerWidth: !0,
        fitImgTagToContainerHeight: !1,
        ignoreDPR: !1,
        pixelStep: 10,
        debounce: 200,
        lazyLoad: !1,
        lazyLoadColor: null,
        lazyLoadOffsetVertical: 20,
        lazyLoadOffsetHorizontal: 20,
        lazyLoadScrollContainers: ["undefined" == typeof window ? null : window],
        throttle: 200,
        maxHeight: 5e3,
        maxWidth: 5e3,
        onLoad: null
    };
    d.FluidSet = function (a) {
        d.helpers.isReallyObject(a) ? this.options = d.helpers.mergeObject(b(), a) : this.options = d.helpers.mergeObject(b(), {}), this.lazyLoadOffsets = {
            t: Math.max(this.options.lazyLoadOffsetVertical, 0),
            b: Math.max(this.options.lazyLoadOffsetVertical, 0),
            l: Math.max(this.options.lazyLoadOffsetHorizontal, 0),
            r: Math.max(this.options.lazyLoadOffsetHorizontal, 0)
        }, this.namespace = Math.random().toString(36).substring(7), this.windowResizeEventBound = !1, this.windowScrollEventBound = !1, this.windowLastWidth = 0, this.windowLastHeight = 0
    }, d.FluidSet.prototype.updateSrc = function (a, b) {
        if (a.hasAttribute("src") && "" === a.getAttribute("src") && a.setAttribute("src", d.getEmptyImage()), a.offsetWidth || a.offsetHeight || a.getClientRects().length) {
            var c = this.getImgDetails(a, b || 1), e = c.url, f = c.width, g = c.height;
            if (this.options.lazyLoad) {
                var h = a.getBoundingClientRect(), i = {
                    left: 0 - this.lazyLoadOffsets.l,
                    top: 0 - this.lazyLoadOffsets.t,
                    bottom: (window.innerHeight || document.documentElement.clientHeight) + this.lazyLoadOffsets.b,
                    right: (window.innerWidth || document.documentElement.clientWidth) + this.lazyLoadOffsets.r
                };
                if (h.top > i.bottom || h.left > i.right || h.top + g < i.top || h.left + f < i.left) {
                    if (!a.fluidLazyColored && this.options.lazyLoadColor) {
                        a.fluidLazyColored = 1;
                        var j = this, k = typeof this.options.lazyLoadColor, l = new d.URL(d.helpers.getImgSrc(a));
                        l.getColors(16, function (b) {
                            if (!b) return void d.helpers.warn("No colors found for", l.getURL(), "for element", a);
                            var c = null;
                            "boolean" === k ? c = b[0] : "number" === k && j.options.lazyLoadColor < b.length ? c = b[j.options.lazyLoadColor] : "function" === k && (c = j.options.lazyLoadColor(a, b)), null !== c && (d.isImageElement(a) && a.parentNode && "body" !== a.parentNode.tagName.toLowerCase() ? a.parentNode.style.backgroundColor = c : a.style.backgroundColor = c)
                        })
                    }
                    return
                }
            }
            if (a.lastWidth = a.lastWidth || 0, a.lastHeight = a.lastHeight || 0, !(this.options.updateOnResizeDown === !1 && a.lastWidth >= f && a.lastHeight >= g)) {
                a.fluidUpdateCount || (a.fluidUpdateCount = 0);
                var m = function () {
                };
                this.options.onLoad && "function" == typeof this.options.onLoad && (m = this.options.onLoad);
                var n = function (a, b) {
                    a.fluidUpdateCount = parseInt(a.fluidUpdateCount, 10) + 1, m(a, b)
                };
                d.setElementImageAfterLoad(a, e, n), a.lastWidth = f, a.lastHeight = g
            }
        }
    }, d.FluidSet.prototype.getImgDetails = function (a, b) {
        if (a) {
            var c = d.helpers.getWindowDPR(), e = this.options.pixelStep, f = d.helpers.calculateElementSize(d.isImageElement(a) ? a.parentNode : a), g = d.helpers.pixelRound(f.width * b, e),
                h = d.helpers.pixelRound(f.height * b, e);
            a.url || (a.url = new d.URL(d.helpers.getImgSrc(a))), a.url.setParams({
                h: "",
                w: ""
            }), g = Math.min(g, this.options.maxWidth), h = Math.min(h, this.options.maxHeight), 1 === c || this.options.ignoreDPR || a.url.setParam("dpr", c), this.options.highDPRAutoScaleQuality && c > 1 && a.url.setParam("q", Math.min(Math.max(parseInt(100 / c, 10), 30), 75)), this.options.fitImgTagToContainerHeight && this.options.fitImgTagToContainerWidth && a.url.setParam("fit", "crop"), "crop" === a.url.getParam("fit") ? (h > 0 && (!d.isImageElement(a) || d.isImageElement(a) && this.options.fitImgTagToContainerHeight) && a.url.setParam("h", h), g > 0 && (!d.isImageElement(a) || d.isImageElement(a) && this.options.fitImgTagToContainerWidth) && a.url.setParam("w", g)) : h <= g ? a.url.setParam("w", g) : a.url.setParam("h", h), !d.isImageElement(a) && this.options.autoInsertCSSBestPractices && a.style && (a.style.backgroundRepeat = "no-repeat", a.style.backgroundSize = "cover", a.style.backgroundPosition = "50% 50%");
            var i = {};
            null !== this.options.onChangeParamOverride && "function" == typeof this.options.onChangeParamOverride && (i = this.options.onChangeParamOverride(g, h, a.url.getParams(), a));
            for (var j in i) i.hasOwnProperty(j) && a.url.setParam(j, i[j]);
            return {url: a.url.getURL(), width: g, height: h}
        }
    }, d.FluidSet.prototype.toString = function () {
        return "[object FluidSet]"
    }, d.FluidSet.prototype.reload = function () {
        d.fluid(this), this.windowLastWidth = d.helpers.getWindowWidth(), this.windowLastHeight = d.helpers.getWindowHeight()
    }, d.FluidSet.prototype.attachGestureEvent = function (a) {
        var b = this;
        a.addEventListener && !a.listenerAttached && (a.addEventListener("gestureend", function (a) {
            b.updateSrc(this, a.scale)
        }, !1), a.addEventListener("gesturechange", function () {
            b.updateSrc(this)
        }, !1), a.listenerAttached = !0)
    };
    var h = {}, i = {};
    d.FluidSet.prototype.attachScrollListener = function () {
        var a = this;
        h[this.namespace] = d.helpers.throttler(function () {
            a.reload()
        }, this.options.throttle);
        var b, c;
        document.addEventListener ? (b = "addEventListener", c = "scroll") : (b = "attachEvent", c = "onscroll");
        for (var e = 0; e < this.options.lazyLoadScrollContainers.length; e++) this.options.lazyLoadScrollContainers[e][b](c, h[this.namespace], !1);
        this.windowScrollEventBound = !0
    }, d.FluidSet.prototype.attachWindowResizer = function () {
        var a = this;
        i[this.namespace] = d.helpers.debouncer(function () {
            this.windowLastWidth === d.helpers.getWindowWidth() && this.windowLastHeight === d.helpers.getWindowHeight() || a.reload()
        }, this.options.debounce), window.addEventListener ? window.addEventListener("resize", i[this.namespace], !1) : window.attachEvent && window.attachEvent("onresize", i[this.namespace]), this.windowResizeEventBound = !0
    }, d.fluid = function () {
        var a, c;
        if (arguments.length > 0 && 1 === arguments[0].nodeType ? (c = arguments[0], a = arguments[1]) : a = arguments[0], null !== a) {
            var e, f;
            if (d.helpers.isReallyObject(a)) {
                for (var g = Object.keys(a), h = Object.keys(b()), i = 0; i < g.length; i++) h.indexOf(g[i]) === -1 && d.helpers.warn("'" + g[i] + "' is not a valid imgix.fluid config option. See https://github.com/imgix/imgix.js/blob/master/docs/api.md#imgix.fluid for a list of valid options.");
                e = d.helpers.mergeObject(b(), a), f = new d.FluidSet(e), a = null
            } else d.helpers.isFluidSet(a) ? (f = a, e = f.options) : (e = d.helpers.mergeObject(b(), {}), f = new d.FluidSet(e));
            var j;
            if (a && !d.helpers.isFluidSet(a)) j = Array.isArray(a) ? a : [a]; else {
                var k = e.fluidClass.toString();
                k = "." === k.slice(0, 1) ? k : "." + k, j = (c || document).querySelectorAll(k), c && d.helpers.matchesSelector(c, k) && (j = Array.prototype.slice.call(j), j.unshift(c))
            }
            for (var l = 0; l < j.length; l++) null !== j[l] && (e.updateOnPinchZoom && f.attachGestureEvent(j[l]), f.updateSrc(j[l]));
            return e.lazyLoad && !f.windowScrollEventBound && f.attachScrollListener(), e.updateOnResize && !f.windowResizeEventBound && f.attachWindowResizer(), f
        }
    }, "undefined" != typeof window && (d.onready = function () {
        function a() {
            var a;
            for (g = !0; a = d.shift();) a()
        }

        var b, c, d = [], e = document.documentElement.doScroll, f = e ? /^loaded|^c/ : /^loaded|c/, g = f.test(document.readyState);
        return document.addEventListener ? (c = function () {
            document.removeEventListener("DOMContentLoaded", c, !1), a()
        }, document.addEventListener("DOMContentLoaded", c, !1)) : document.attachEvent && (c = function () {
            /^c/.test(document.readyState) && (document.detachEvent("onreadystatechange", c), a())
        }, document.attachEvent("onreadystatechange", c)), b = e ? function (a) {
            window.self != window.top ? g ? a() : d.push(a) : !function () {
                try {
                    document.documentElement.doScroll("left")
                } catch (c) {
                    return setTimeout(function () {
                        b(a)
                    }, 50)
                }
                a()
            }()
        } : function (a) {
            g ? a() : d.push(a)
        }
    }()), d.rgbToHex = function (a) {
        var b = a.split(",");
        return b = b.map(function (a) {
            return d.componentToHex(parseInt(a.replace(/\D/g, "")))
        }), b.join("")
    }, d.componentToHex = function (a) {
        var b = a.toString(16);
        return 1 === b.length ? "0" + b : b
    }, d.getColorBrightness = function (a) {
        if (!a) return 0;
        "#" === a.slice(0, 1) && (a = d.hexToRGB(a));
        var b = a.replace(/[^0-9,]+/g, "").split(","), c = parseInt(b[0], 10), e = parseInt(b[1], 10), f = parseInt(b[2], 10);
        return Math.sqrt(c * c * .241 + e * e * .691 + f * f * .068)
    }, d.applyAlphaToRGB = function (a, b) {
        var c = "rgba" !== a.slice(0, 4), d = a.split(",");
        return d = d.map(function (a) {
            return parseInt(a.replace(/\D/g, ""), 10)
        }), c ? d.push(b) : 4 === d.length && (d[3] = b), "rgba(" + d.join(", ") + ")"
    }, d.hexToRGB = function (a) {
        function b(a) {
            return (a + a).toString()
        }

        if (a) if ("#" === a.slice(0, 1)) a = a.slice(1, a.length); else if ("rgb" === a.slice(0, 3)) return a;
        var c = 0, e = 0, f = 0;
        return 3 === a.length ? (c = parseInt(b(a.slice(0, 1)), 16), e = parseInt(b(a.slice(1, 2)), 16), f = parseInt(b(a.slice(2, 3)), 16)) : 6 === a.length ? (c = parseInt(a.slice(0, 2), 16), e = parseInt(a.slice(2, 4), 16), f = parseInt(a.slice(4, 6), 16)) : d.helpers.warn("invalid hex color:", a), "rgb(" + c + ", " + e + ", " + f + ")"
    }, d.getElementByXPathClassName = function (a) {
        return document.querySelector("." + d.getXPathClass(a))
    }, d.getElementImageByXPathClassName = function (a) {
        return d.getElementImage(d.getElementByXPathClassName(a))
    }, d.getElementTreeXPath = function (a) {
        for (var b = []; a && a.nodeType === Node.ELEMENT_NODE; a = a.parentNode) {
            for (var c = 0, d = a.previousSibling; d; d = d.previousSibling) d.nodeType !== Node.DOCUMENT_TYPE_NODE && d.nodeName === a.nodeName && ++c;
            var e = (a.prefix ? a.prefix + ":" : "") + a.localName, f = c ? "[" + (c + 1) + "]" : "";
            b.splice(0, 0, e + f)
        }
        return b.length ? "/" + b.join("/") : null
    }, "function" == typeof define && define.amd && define("imgix", [], function () {
        return d
    })
}.call(this), !function (a, b) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.ES6Promise = b()
}(this, function () {
    "use strict";

    function a(a) {
        return "function" == typeof a || "object" == typeof a && null !== a
    }

    function b(a) {
        return "function" == typeof a
    }

    function c(a) {
        U = a
    }

    function d(a) {
        V = a
    }

    function e() {
        return function () {
            return process.nextTick(j)
        }
    }

    function f() {
        return function () {
            T(j)
        }
    }

    function g() {
        var a = 0, b = new Y(j), c = document.createTextNode("");
        return b.observe(c, {characterData: !0}), function () {
            c.data = a = ++a % 2
        }
    }

    function h() {
        var a = new MessageChannel;
        return a.port1.onmessage = j, function () {
            return a.port2.postMessage(0)
        }
    }

    function i() {
        var a = setTimeout;
        return function () {
            return a(j, 1)
        }
    }

    function j() {
        for (var a = 0; a < S; a += 2) {
            var b = _[a], c = _[a + 1];
            b(c), _[a] = void 0, _[a + 1] = void 0
        }
        S = 0
    }

    function k() {
        try {
            var a = require, b = a("vertx");
            return T = b.runOnLoop || b.runOnContext, f()
        } catch (c) {
            return i()
        }
    }

    function l(a, b) {
        var c = arguments, d = this, e = new this.constructor(n);
        void 0 === e[ba] && G(e);
        var f = d._state;
        return f ? !function () {
            var a = c[f - 1];
            V(function () {
                return D(f, e, a, d._result)
            })
        }() : z(d, e, a, b), e
    }

    function m(a) {
        var b = this;
        if (a && "object" == typeof a && a.constructor === b) return a;
        var c = new b(n);
        return v(c, a), c
    }

    function n() {
    }

    function o() {
        return new TypeError("You cannot resolve a promise with itself")
    }

    function p() {
        return new TypeError("A promises callback cannot return that same promise.")
    }

    function q(a) {
        try {
            return a.then
        } catch (b) {
            return fa.error = b, fa
        }
    }

    function r(a, b, c, d) {
        try {
            a.call(b, c, d)
        } catch (e) {
            return e
        }
    }

    function s(a, b, c) {
        V(function (a) {
            var d = !1, e = r(c, b, function (c) {
                d || (d = !0, b !== c ? v(a, c) : x(a, c))
            }, function (b) {
                d || (d = !0, y(a, b))
            }, "Settle: " + (a._label || " unknown promise"));
            !d && e && (d = !0, y(a, e))
        }, a)
    }

    function t(a, b) {
        b._state === da ? x(a, b._result) : b._state === ea ? y(a, b._result) : z(b, void 0, function (b) {
            return v(a, b)
        }, function (b) {
            return y(a, b)
        })
    }

    function u(a, c, d) {
        c.constructor === a.constructor && d === l && c.constructor.resolve === m ? t(a, c) : d === fa ? y(a, fa.error) : void 0 === d ? x(a, c) : b(d) ? s(a, c, d) : x(a, c)
    }

    function v(b, c) {
        b === c ? y(b, o()) : a(c) ? u(b, c, q(c)) : x(b, c)
    }

    function w(a) {
        a._onerror && a._onerror(a._result), A(a)
    }

    function x(a, b) {
        a._state === ca && (a._result = b, a._state = da, 0 !== a._subscribers.length && V(A, a))
    }

    function y(a, b) {
        a._state === ca && (a._state = ea, a._result = b, V(w, a))
    }

    function z(a, b, c, d) {
        var e = a._subscribers, f = e.length;
        a._onerror = null, e[f] = b, e[f + da] = c, e[f + ea] = d, 0 === f && a._state && V(A, a)
    }

    function A(a) {
        var b = a._subscribers, c = a._state;
        if (0 !== b.length) {
            for (var d = void 0, e = void 0, f = a._result, g = 0; g < b.length; g += 3) d = b[g], e = b[g + c], d ? D(c, d, e, f) : e(f);
            a._subscribers.length = 0
        }
    }

    function B() {
        this.error = null
    }

    function C(a, b) {
        try {
            return a(b)
        } catch (c) {
            return ga.error = c, ga
        }
    }

    function D(a, c, d, e) {
        var f = b(d), g = void 0, h = void 0, i = void 0, j = void 0;
        if (f) {
            if (g = C(d, e), g === ga ? (j = !0, h = g.error, g = null) : i = !0, c === g) return void y(c, p())
        } else g = e, i = !0;
        c._state !== ca || (f && i ? v(c, g) : j ? y(c, h) : a === da ? x(c, g) : a === ea && y(c, g))
    }

    function E(a, b) {
        try {
            b(function (b) {
                v(a, b)
            }, function (b) {
                y(a, b)
            })
        } catch (c) {
            y(a, c)
        }
    }

    function F() {
        return ha++
    }

    function G(a) {
        a[ba] = ha++, a._state = void 0, a._result = void 0, a._subscribers = []
    }

    function H(a, b) {
        this._instanceConstructor = a, this.promise = new a(n), this.promise[ba] || G(this.promise), R(b) ? (this._input = b, this.length = b.length, this._remaining = b.length, this._result = new Array(this.length), 0 === this.length ? x(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && x(this.promise, this._result))) : y(this.promise, I())
    }

    function I() {
        return new Error("Array Methods must be provided an Array")
    }

    function J(a) {
        return new H(this, a).promise
    }

    function K(a) {
        var b = this;
        return new b(R(a) ? function (c, d) {
            for (var e = a.length, f = 0; f < e; f++) b.resolve(a[f]).then(c, d)
        } : function (a, b) {
            return b(new TypeError("You must pass an array to race."))
        })
    }

    function L(a) {
        var b = this, c = new b(n);
        return y(c, a), c
    }

    function M() {
        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
    }

    function N() {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
    }

    function O(a) {
        this[ba] = F(), this._result = this._state = void 0, this._subscribers = [], n !== a && ("function" != typeof a && M(), this instanceof O ? E(this, a) : N())
    }

    function P() {
        var a = void 0;
        if ("undefined" != typeof global) a = global; else if ("undefined" != typeof self) a = self; else try {
            a = Function("return this")()
        } catch (b) {
            throw new Error("polyfill failed because global object is unavailable in this environment")
        }
        var c = a.Promise;
        if (c) {
            var d = null;
            try {
                d = Object.prototype.toString.call(c.resolve())
            } catch (b) {
            }
            if ("[object Promise]" === d && !c.cast) return
        }
        a.Promise = O
    }

    var Q = void 0;
    Q = Array.isArray ? Array.isArray : function (a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    };
    var R = Q, S = 0, T = void 0, U = void 0, V = function (a, b) {
            _[S] = a, _[S + 1] = b, S += 2, 2 === S && (U ? U(j) : aa())
        }, W = "undefined" != typeof window ? window : void 0, X = W || {}, Y = X.MutationObserver || X.WebKitMutationObserver,
        Z = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
        $ = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, _ = new Array(1e3), aa = void 0;
    aa = Z ? e() : Y ? g() : $ ? h() : void 0 === W && "function" == typeof require ? k() : i();
    var ba = Math.random().toString(36).substring(16), ca = void 0, da = 1, ea = 2, fa = new B, ga = new B, ha = 0;
    return H.prototype._enumerate = function () {
        for (var a = this.length, b = this._input, c = 0; this._state === ca && c < a; c++) this._eachEntry(b[c], c)
    }, H.prototype._eachEntry = function (a, b) {
        var c = this._instanceConstructor, d = c.resolve;
        if (d === m) {
            var e = q(a);
            if (e === l && a._state !== ca) this._settledAt(a._state, b, a._result); else if ("function" != typeof e) this._remaining--, this._result[b] = a; else if (c === O) {
                var f = new c(n);
                u(f, a, e), this._willSettleAt(f, b)
            } else this._willSettleAt(new c(function (b) {
                return b(a)
            }), b)
        } else this._willSettleAt(d(a), b)
    }, H.prototype._settledAt = function (a, b, c) {
        var d = this.promise;
        d._state === ca && (this._remaining--, a === ea ? y(d, c) : this._result[b] = c), 0 === this._remaining && x(d, this._result)
    }, H.prototype._willSettleAt = function (a, b) {
        var c = this;
        z(a, void 0, function (a) {
            return c._settledAt(da, b, a)
        }, function (a) {
            return c._settledAt(ea, b, a)
        })
    }, O.all = J, O.race = K, O.resolve = m, O.reject = L, O._setScheduler = c, O._setAsap = d, O._asap = V, O.prototype = {
        constructor: O, then: l, "catch": function (a) {
            return this.then(null, a)
        }
    }, P(), O.polyfill = P, O.Promise = O, O
}), function (a) {
    "use strict";

    function b(a) {
        if ("string" != typeof a && (a = String(a)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(a)) throw new TypeError("Invalid character in header field name");
        return a.toLowerCase()
    }

    function c(a) {
        return "string" != typeof a && (a = String(a)), a
    }

    function d(a) {
        this.map = {}, a instanceof d ? a.forEach(function (a, b) {
            this.append(b, a)
        }, this) : a && Object.getOwnPropertyNames(a).forEach(function (b) {
            this.append(b, a[b])
        }, this)
    }

    function e(a) {
        return a.bodyUsed ? Promise.reject(new TypeError("Already read")) : void(a.bodyUsed = !0)
    }

    function f(a) {
        return new Promise(function (b, c) {
            a.onload = function () {
                b(a.result)
            }, a.onerror = function () {
                c(a.error)
            }
        })
    }

    function g(a) {
        var b = new FileReader;
        return b.readAsArrayBuffer(a), f(b)
    }

    function h(a) {
        var b = new FileReader;
        return b.readAsText(a), f(b)
    }

    function i() {
        return this.bodyUsed = !1, this._initBody = function (a) {
            if (this._bodyInit = a, "string" == typeof a) this._bodyText = a; else if (o.blob && Blob.prototype.isPrototypeOf(a)) this._bodyBlob = a; else if (o.formData && FormData.prototype.isPrototypeOf(a)) this._bodyFormData = a; else if (a) {
                if (!o.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(a)) throw new Error("unsupported BodyInit type")
            } else this._bodyText = "";
            this.headers.get("content-type") || ("string" == typeof a ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type && this.headers.set("content-type", this._bodyBlob.type))
        }, o.blob ? (this.blob = function () {
            var a = e(this);
            if (a) return a;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]))
        }, this.arrayBuffer = function () {
            return this.blob().then(g)
        }, this.text = function () {
            var a = e(this);
            if (a) return a;
            if (this._bodyBlob) return h(this._bodyBlob);
            if (this._bodyFormData) throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText)
        }) : this.text = function () {
            var a = e(this);
            return a ? a : Promise.resolve(this._bodyText)
        }, o.formData && (this.formData = function () {
            return this.text().then(l)
        }), this.json = function () {
            return this.text().then(JSON.parse)
        }, this
    }

    function j(a) {
        var b = a.toUpperCase();
        return p.indexOf(b) > -1 ? b : a
    }

    function k(a, b) {
        b = b || {};
        var c = b.body;
        if (k.prototype.isPrototypeOf(a)) {
            if (a.bodyUsed) throw new TypeError("Already read");
            this.url = a.url, this.credentials = a.credentials, b.headers || (this.headers = new d(a.headers)), this.method = a.method, this.mode = a.mode, c || (c = a._bodyInit, a.bodyUsed = !0)
        } else this.url = a;
        if (this.credentials = b.credentials || this.credentials || "omit", !b.headers && this.headers || (this.headers = new d(b.headers)), this.method = j(b.method || this.method || "GET"), this.mode = b.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && c) throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(c)
    }

    function l(a) {
        var b = new FormData;
        return a.trim().split("&").forEach(function (a) {
            if (a) {
                var c = a.split("="), d = c.shift().replace(/\+/g, " "), e = c.join("=").replace(/\+/g, " ");
                b.append(decodeURIComponent(d), decodeURIComponent(e))
            }
        }), b
    }

    function m(a) {
        var b = new d, c = (a.getAllResponseHeaders() || "").trim().split("\n");
        return c.forEach(function (a) {
            var c = a.trim().split(":"), d = c.shift().trim(), e = c.join(":").trim();
            b.append(d, e)
        }), b
    }

    function n(a, b) {
        b || (b = {}), this.type = "default", this.status = b.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = b.statusText, this.headers = b.headers instanceof d ? b.headers : new d(b.headers), this.url = b.url || "", this._initBody(a)
    }

    if (!a.fetch) {
        d.prototype.append = function (a, d) {
            a = b(a), d = c(d);
            var e = this.map[a];
            e || (e = [], this.map[a] = e), e.push(d)
        }, d.prototype["delete"] = function (a) {
            delete this.map[b(a)]
        }, d.prototype.get = function (a) {
            var c = this.map[b(a)];
            return c ? c[0] : null
        }, d.prototype.getAll = function (a) {
            return this.map[b(a)] || []
        }, d.prototype.has = function (a) {
            return this.map.hasOwnProperty(b(a))
        }, d.prototype.set = function (a, d) {
            this.map[b(a)] = [c(d)]
        }, d.prototype.forEach = function (a, b) {
            Object.getOwnPropertyNames(this.map).forEach(function (c) {
                this.map[c].forEach(function (d) {
                    a.call(b, d, c, this)
                }, this)
            }, this)
        };
        var o = {
            blob: "FileReader" in a && "Blob" in a && function () {
                try {
                    return new Blob, !0
                } catch (a) {
                    return !1
                }
            }(), formData: "FormData" in a, arrayBuffer: "ArrayBuffer" in a
        }, p = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        k.prototype.clone = function () {
            return new k(this)
        }, i.call(k.prototype), i.call(n.prototype), n.prototype.clone = function () {
            return new n(this._bodyInit, {status: this.status, statusText: this.statusText, headers: new d(this.headers), url: this.url})
        }, n.error = function () {
            var a = new n(null, {status: 0, statusText: ""});
            return a.type = "error", a
        };
        var q = [301, 302, 303, 307, 308];
        n.redirect = function (a, b) {
            if (q.indexOf(b) === -1) throw new RangeError("Invalid status code");
            return new n(null, {status: b, headers: {location: a}})
        }, a.Headers = d, a.Request = k, a.Response = n, a.fetch = function (a, b) {
            return new Promise(function (c, d) {
                function e() {
                    return "responseURL" in g ? g.responseURL : /^X-Request-URL:/m.test(g.getAllResponseHeaders()) ? g.getResponseHeader("X-Request-URL") : void 0
                }

                var f;
                f = k.prototype.isPrototypeOf(a) && !b ? a : new k(a, b);
                var g = new XMLHttpRequest;
                g.onload = function () {
                    var a = 1223 === g.status ? 204 : g.status;
                    if (a < 100 || a > 599) return void d(new TypeError("Network request failed"));
                    var b = {status: a, statusText: g.statusText, headers: m(g), url: e()}, f = "response" in g ? g.response : g.responseText;
                    c(new n(f, b))
                }, g.onerror = function () {
                    d(new TypeError("Network request failed"))
                }, g.ontimeout = function () {
                    d(new TypeError("Network request failed"))
                }, g.open(f.method, f.url, !0), "include" === f.credentials && (g.withCredentials = !0), "responseType" in g && o.blob && (g.responseType = "blob"), f.headers.forEach(function (a, b) {
                    g.setRequestHeader(b, a)
                }), g.send("undefined" == typeof f._bodyInit ? null : f._bodyInit)
            })
        }, a.fetch.polyfill = !0
    }
}("undefined" != typeof self ? self : this), function (a) {
    function b(a, c) {
        if ("object" !== d(a)) return c;
        for (var e in c) "object" === d(a[e]) && "object" === d(c[e]) ? a[e] = b(a[e], c[e]) : a[e] = c[e];
        return a
    }

    function c(a, c, f) {
        var g = f[0], h = f.length;
        (a || "object" !== d(g)) && (g = {});
        for (var i = 0; i < h; ++i) {
            var j = f[i], k = d(j);
            if ("object" === k) for (var l in j) {
                var m = a ? e.clone(j[l]) : j[l];
                c ? g[l] = b(g[l], m) : g[l] = m
            }
        }
        return g
    }

    function d(a) {
        return {}.toString.call(a).slice(8, -1).toLowerCase()
    }

    var e = function (a) {
        return c(a === !0, !1, arguments)
    }, f = "merge";
    e.recursive = function (a) {
        return c(a === !0, !0, arguments)
    }, e.clone = function (a) {
        var b, c, f = a, g = d(a);
        if ("array" === g) for (f = [], c = a.length, b = 0; b < c; ++b) f[b] = e.clone(a[b]); else if ("object" === g) {
            f = {};
            for (b in a) f[b] = e.clone(a[b])
        }
        return f
    }, a ? module.exports = e : window[f] = e
}("object" == typeof module && module && "object" == typeof module.exports && module.exports);
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (a, b) {
        var c, d, e, f, g = function () {
            a.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = g.prototype.setRatio
        }, h = _gsScope._gsDefine.globals, i = {}, j = g.prototype = new a("css");
        j.constructor = g, g.version = "1.18.4", g.API = 2, g.defaultTransformPerspective = 0, g.defaultSkewType = "compensated", g.defaultSmoothOrigin = !0, j = "px", g.suffixMap = {
            top: j,
            right: j,
            bottom: j,
            left: j,
            width: j,
            height: j,
            fontSize: j,
            padding: j,
            margin: j,
            perspective: j,
            lineHeight: ""
        };
        var k, l, m, n, o, p, q = /(?:\-|\.|\b)(\d|\.|e\-)+/g, r = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, s = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            t = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, u = /(?:\d|\-|\+|=|#|\.)*/g, v = /opacity *= *([^)]*)/i, w = /opacity:([^;]*)/i, x = /alpha\(opacity *=.+?\)/i, y = /^(rgb|hsl)/,
            z = /([A-Z])/g, A = /-([a-z])/gi, B = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, C = function (a, b) {
                return b.toUpperCase()
            }, D = /(?:Left|Right|Width)/i, E = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, F = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, G = /,(?=[^\)]*(?:\(|$))/gi, H = /[\s,\(]/i, I = Math.PI / 180,
            J = 180 / Math.PI, K = {}, L = document, M = function (a) {
                return L.createElementNS ? L.createElementNS("http://www.w3.org/1999/xhtml", a) : L.createElement(a)
            }, N = M("div"), O = M("img"), P = g._internals = {_specialProps: i}, Q = navigator.userAgent, R = function () {
                var a = Q.indexOf("Android"), b = M("a");
                return m = -1 !== Q.indexOf("Safari") && -1 === Q.indexOf("Chrome") && (-1 === a || Number(Q.substr(a + 8, 1)) > 3), o = m && Number(Q.substr(Q.indexOf("Version/") + 8, 1)) < 6, n = -1 !== Q.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Q) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Q)) && (p = parseFloat(RegExp.$1)), !!b && (b.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(b.style.opacity))
            }(), S = function (a) {
                return v.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            }, T = function (a) {
                window.console && console.log(a)
            }, U = "", V = "", W = function (a, b) {
                b = b || N;
                var c, d, e = b.style;
                if (void 0 !== e[a]) return a;
                for (a = a.charAt(0).toUpperCase() + a.substr(1), c = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && void 0 === e[c[d] + a];) ;
                return d >= 0 ? (V = 3 === d ? "ms" : c[d], U = "-" + V.toLowerCase() + "-", V + a) : null
            }, X = L.defaultView ? L.defaultView.getComputedStyle : function () {
            }, Y = g.getStyle = function (a, b, c, d, e) {
                var f;
                return R || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || X(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(z, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : S(a)
            }, Z = P.convertToPixels = function (a, c, d, e, f) {
                if ("px" === e || !e) return d;
                if ("auto" === e || !d) return 0;
                var h, i, j, k = D.test(c), l = a, m = N.style, n = 0 > d;
                if (n && (d = -d), "%" === e && -1 !== c.indexOf("border")) h = d / 100 * (k ? a.clientWidth : a.clientHeight); else {
                    if (m.cssText = "border:0 solid red;position:" + Y(a, "position") + ";line-height:0;", "%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e) m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e; else {
                        if (l = a.parentNode || L.body, i = l._gsCache, j = b.ticker.frame, i && k && i.time === j) return i.width * d / 100;
                        m[k ? "width" : "height"] = d + e
                    }
                    l.appendChild(N), h = parseFloat(N[k ? "offsetWidth" : "offsetHeight"]), l.removeChild(N), k && "%" === e && g.cacheWidths !== !1 && (i = l._gsCache = l._gsCache || {}, i.time = j, i.width = h / d * 100), 0 !== h || f || (h = Z(a, c, d, e, !0))
                }
                return n ? -h : h
            }, $ = P.calculateOffset = function (a, b, c) {
                if ("absolute" !== Y(a, "position", c)) return 0;
                var d = "left" === b ? "Left" : "Top", e = Y(a, "margin" + d, c);
                return a["offset" + d] - (Z(a, b, parseFloat(e), e.replace(u, "")) || 0)
            }, _ = function (a, b) {
                var c, d, e, f = {};
                if (b = b || X(a, null)) if (c = b.length) for (; --c > -1;) e = b[c], (-1 === e.indexOf("-transform") || Aa === e) && (f[e.replace(A, C)] = b.getPropertyValue(e)); else for (c in b) (-1 === c.indexOf("Transform") || za === c) && (f[c] = b[c]); else if (b = a.currentStyle || a.style) for (c in b) "string" == typeof c && void 0 === f[c] && (f[c.replace(A, C)] = b[c]);
                return R || (f.opacity = S(a)), d = Na(a, b, !1), f.rotation = d.rotation, f.skewX = d.skewX, f.scaleX = d.scaleX, f.scaleY = d.scaleY, f.x = d.x, f.y = d.y, Ca && (f.z = d.z, f.rotationX = d.rotationX, f.rotationY = d.rotationY, f.scaleZ = d.scaleZ), f.filters && delete f.filters, f
            }, aa = function (a, b, c, d, e) {
                var f, g, h, i = {}, j = a.style;
                for (g in c) "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(t, "") ? f : 0 : $(a, g), void 0 !== j[g] && (h = new pa(j, g, j[g], h)));
                if (d) for (g in d) "className" !== g && (i[g] = d[g]);
                return {difs: i, firstMPT: h}
            }, ba = {width: ["Left", "Right"], height: ["Top", "Bottom"]}, ca = ["marginLeft", "marginRight", "marginTop", "marginBottom"], da = function (a, b, c) {
                if ("svg" === (a.nodeName + "").toLowerCase()) return (c || X(a))[b] || 0;
                if (a.getBBox && Ka(a)) return a.getBBox()[b] || 0;
                var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight), e = ba[b], f = e.length;
                for (c = c || X(a, null); --f > -1;) d -= parseFloat(Y(a, "padding" + e[f], c, !0)) || 0, d -= parseFloat(Y(a, "border" + e[f] + "Width", c, !0)) || 0;
                return d
            }, ea = function (a, b) {
                if ("contain" === a || "auto" === a || "auto auto" === a) return a + " ";
                (null == a || "" === a) && (a = "0 0");
                var c, d = a.split(" "), e = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : d[0], f = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : d[1];
                if (d.length > 3 && !b) {
                    for (d = a.split(", ").join(",").split(","), a = [], c = 0; c < d.length; c++) a.push(ea(d[c]));
                    return a.join(",")
                }
                return null == f ? f = "center" === e ? "50%" : "0" : "center" === f && (f = "50%"), ("center" === e || isNaN(parseFloat(e)) && -1 === (e + "").indexOf("=")) && (e = "50%"), a = e + " " + f + (d.length > 2 ? " " + d[2] : ""), b && (b.oxp = -1 !== e.indexOf("%"), b.oyp = -1 !== f.indexOf("%"), b.oxr = "=" === e.charAt(1), b.oyr = "=" === f.charAt(1), b.ox = parseFloat(e.replace(t, "")), b.oy = parseFloat(f.replace(t, "")), b.v = a), b || a
            }, fa = function (a, b) {
                return "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b) || 0
            }, ga = function (a, b) {
                return null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a) || 0
            }, ha = function (a, b, c, d) {
                var e, f, g, h, i, j = 1e-6;
                return null == a ? h = b : "number" == typeof a ? h = a : (e = 360, f = a.split("_"), i = "=" === a.charAt(1), g = (i ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : J) - (i ? 0 : b), f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && (g %= e, g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)), -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (g / e | 0) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (g / e | 0) * e)), h = b + g), j > h && h > -j && (h = 0), h
            }, ia = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            }, ja = function (a, b, c) {
                return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 255 * (1 > 6 * a ? b + (c - b) * a * 6 : .5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0
            }, ka = g.parseColor = function (a, b) {
                var c, d, e, f, g, h, i, j, k, l, m;
                if (a) if ("number" == typeof a) c = [a >> 16, a >> 8 & 255, 255 & a]; else {
                    if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), ia[a]) c = ia[a]; else if ("#" === a.charAt(0)) 4 === a.length && (d = a.charAt(1), e = a.charAt(2), f = a.charAt(3), a = "#" + d + d + e + e + f + f), a = parseInt(a.substr(1), 16), c = [a >> 16, a >> 8 & 255, 255 & a]; else if ("hsl" === a.substr(0, 3)) if (c = m = a.match(q), b) {
                        if (-1 !== a.indexOf("=")) return a.match(r)
                    } else g = Number(c[0]) % 360 / 360, h = Number(c[1]) / 100, i = Number(c[2]) / 100, e = .5 >= i ? i * (h + 1) : i + h - i * h, d = 2 * i - e, c.length > 3 && (c[3] = Number(a[3])), c[0] = ja(g + 1 / 3, d, e), c[1] = ja(g, d, e), c[2] = ja(g - 1 / 3, d, e); else c = a.match(q) || ia.transparent;
                    c[0] = Number(c[0]), c[1] = Number(c[1]), c[2] = Number(c[2]), c.length > 3 && (c[3] = Number(c[3]))
                } else c = ia.black;
                return b && !m && (d = c[0] / 255, e = c[1] / 255, f = c[2] / 255, j = Math.max(d, e, f), k = Math.min(d, e, f), i = (j + k) / 2, j === k ? g = h = 0 : (l = j - k, h = i > .5 ? l / (2 - j - k) : l / (j + k), g = j === d ? (e - f) / l + (f > e ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4, g *= 60), c[0] = g + .5 | 0, c[1] = 100 * h + .5 | 0, c[2] = 100 * i + .5 | 0), c
            }, la = function (a, b) {
                var c, d, e, f = a.match(ma) || [], g = 0, h = f.length ? "" : a;
                for (c = 0; c < f.length; c++) d = f[c], e = a.substr(g, a.indexOf(d, g) - g), g += e.length + d.length, d = ka(d, b), 3 === d.length && d.push(1), h += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")";
                return h + a.substr(g)
            }, ma = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (j in ia) ma += "|" + j + "\\b";
        ma = new RegExp(ma + ")", "gi"), g.colorStringFilter = function (a) {
            var b, c = a[0] + a[1];
            ma.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("), a[0] = la(a[0], b), a[1] = la(a[1], b)), ma.lastIndex = 0
        }, b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);
        var na = function (a, b, c, d) {
            if (null == a) return function (a) {
                return a
            };
            var e, f = b ? (a.match(ma) || [""])[0] : "", g = a.split(f).join("").match(s) || [], h = a.substr(0, a.indexOf(g[0])), i = ")" === a.charAt(a.length - 1) ? ")" : "",
                j = -1 !== a.indexOf(" ") ? " " : ",", k = g.length, l = k > 0 ? g[0].replace(q, "") : "";
            return k ? e = b ? function (a) {
                var b, m, n, o;
                if ("number" == typeof a) a += l; else if (d && G.test(a)) {
                    for (o = a.replace(G, "|").split("|"), n = 0; n < o.length; n++) o[n] = e(o[n]);
                    return o.join(",")
                }
                if (b = (a.match(ma) || [f])[0], m = a.split(b).join("").match(s) || [], n = m.length, k > n--) for (; ++n < k;) m[n] = c ? m[(n - 1) / 2 | 0] : g[n];
                return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "")
            } : function (a) {
                var b, f, m;
                if ("number" == typeof a) a += l; else if (d && G.test(a)) {
                    for (f = a.replace(G, "|").split("|"), m = 0; m < f.length; m++) f[m] = e(f[m]);
                    return f.join(",")
                }
                if (b = a.match(s) || [], m = b.length, k > m--) for (; ++m < k;) b[m] = c ? b[(m - 1) / 2 | 0] : g[m];
                return h + b.join(j) + i
            } : function (a) {
                return a
            }
        }, oa = function (a) {
            return a = a.split(","), function (b, c, d, e, f, g, h) {
                var i, j = (c + "").split(" ");
                for (h = {}, i = 0; 4 > i; i++) h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
                return e.parse(b, h, f, g)
            }
        }, pa = (P._setPluginRatio = function (a) {
            this.plugin.setRatio(a);
            for (var b, c, d, e, f, g = this.data, h = g.proxy, i = g.firstMPT, j = 1e-6; i;) b = h[i.v], i.r ? b = Math.round(b) : j > b && b > -j && (b = 0), i.t[i.p] = b, i = i._next;
            if (g.autoRotate && (g.autoRotate.rotation = h.rotation), 1 === a || 0 === a) for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i;) {
                if (c = i.t, c.type) {
                    if (1 === c.type) {
                        for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++) e += c["xn" + d] + c["xs" + (d + 1)];
                        c[f] = e
                    }
                } else c[f] = c.s + c.xs0;
                i = i._next
            }
        }, function (a, b, c, d, e) {
            this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d)
        }), qa = (P._parseToProxy = function (a, b, c, d, e, f) {
            var g, h, i, j, k, l = d, m = {}, n = {}, o = c._transform, p = K;
            for (c._transform = null, K = b, d = k = c.parse(a, b, d, e), K = p, f && (c._transform = o, l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l;) {
                if (d.type <= 1 && (h = d.p, n[h] = d.s + d.c, m[h] = d.s, f || (j = new pa(d, "s", h, j, d.r), d.c = 0), 1 === d.type)) for (g = d.l; --g > 0;) i = "xn" + g, h = d.p + "_" + i, n[h] = d.data[i], m[h] = d[i], f || (j = new pa(d, i, h, j, d.rxp[i]));
                d = d._next
            }
            return {proxy: m, end: n, firstMPT: j, pt: k}
        }, P.CSSPropTween = function (a, b, d, e, g, h, i, j, k, l, m) {
            this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || b, a instanceof qa || f.push(this.n), this.r = j, this.type = h || 0, k && (this.pr = k, c = !0), this.b = void 0 === l ? d : l, this.e = void 0 === m ? d + e : m, g && (this._next = g, g._prev = this)
        }), ra = function (a, b, c, d, e, f) {
            var g = new qa(a, b, c, d - c, e, (-1), f);
            return g.b = c, g.e = g.xs0 = d, g
        }, sa = g.parseComplex = function (a, b, c, d, e, f, h, i, j, l) {
            c = c || f || "", h = new qa(a, b, 0, 0, h, l ? 2 : 1, null, (!1), i, c, d), d += "", e && ma.test(d + c) && (d = [c, d], g.colorStringFilter(d), c = d[0], d = d[1]);
            var m, n, o, p, s, t, u, v, w, x, y, z, A, B = c.split(", ").join(",").split(" "), C = d.split(", ").join(",").split(" "), D = B.length, E = k !== !1;
            for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (B = B.join(" ").replace(G, ", ").split(" "), C = C.join(" ").replace(G, ", ").split(" "), D = B.length), D !== C.length && (B = (f || "").split(" "), D = B.length), h.plugin = j, h.setRatio = l, ma.lastIndex = 0, m = 0; D > m; m++) if (p = B[m], s = C[m], v = parseFloat(p), v || 0 === v) h.appendXtra("", v, fa(s, v), s.replace(r, ""), E && -1 !== s.indexOf("px"), !0); else if (e && ma.test(p)) z = s.indexOf(")") + 1, z = ")" + (z ? s.substr(z) : ""), A = -1 !== s.indexOf("hsl") && R, p = ka(p, A), s = ka(s, A), w = p.length + s.length > 6, w && !R && 0 === s[3] ? (h["xs" + h.l] += h.l ? " transparent" : "transparent", h.e = h.e.split(C[m]).join("transparent")) : (R || (w = !1), A ? h.appendXtra(w ? "hsla(" : "hsl(", p[0], fa(s[0], p[0]), ",", !1, !0).appendXtra("", p[1], fa(s[1], p[1]), "%,", !1).appendXtra("", p[2], fa(s[2], p[2]), w ? "%," : "%" + z, !1) : h.appendXtra(w ? "rgba(" : "rgb(", p[0], s[0] - p[0], ",", !0, !0).appendXtra("", p[1], s[1] - p[1], ",", !0).appendXtra("", p[2], s[2] - p[2], w ? "," : z, !0), w && (p = p.length < 4 ? 1 : p[3], h.appendXtra("", p, (s.length < 4 ? 1 : s[3]) - p, z, !1))), ma.lastIndex = 0; else if (t = p.match(q)) {
                if (u = s.match(r), !u || u.length !== t.length) return h;
                for (o = 0, n = 0; n < t.length; n++) y = t[n], x = p.indexOf(y, o), h.appendXtra(p.substr(o, x - o), Number(y), fa(u[n], y), "", E && "px" === p.substr(x + y.length, 2), 0 === n), o = x + y.length;
                h["xs" + h.l] += p.substr(o)
            } else h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + s : s;
            if (-1 !== d.indexOf("=") && h.data) {
                for (z = h.xs0 + h.data.s, m = 1; m < h.l; m++) z += h["xs" + m] + h.data["xn" + m];
                h.e = z + h["xs" + m]
            }
            return h.l || (h.type = -1, h.xs0 = h.e), h.xfirst || h
        }, ta = 9;
        for (j = qa.prototype, j.l = j.pr = 0; --ta > 0;) j["xn" + ta] = 0, j["xs" + ta] = "";
        j.xs0 = "", j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null, j.appendXtra = function (a, b, c, d, e, f) {
            var g = this, h = g.l;
            return g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new qa(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), g.xfirst.xs0 = 0), g) : (g.data = {s: b + c}, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g)
        };
        var ua = function (a, b) {
            b = b || {}, this.p = b.prefix ? W(a) || a : a, i[a] = i[this.p] = this, this.format = b.formatter || na(b.defaultValue, b.color, b.collapsible, b.multi), b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, this.keyword = b.keyword, this.dflt = b.defaultValue, this.pr = b.priority || 0
        }, va = P._registerComplexSpecialProp = function (a, b, c) {
            "object" != typeof b && (b = {parser: c});
            var d, e, f = a.split(","), g = b.defaultValue;
            for (c = c || [g], d = 0; d < f.length; d++) b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, e = new ua(f[d], b)
        }, wa = function (a) {
            if (!i[a]) {
                var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                va(a, {
                    parser: function (a, c, d, e, f, g, j) {
                        var k = h.com.greensock.plugins[b];
                        return k ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j)) : (T("Error: " + b + " js file not loaded."), f)
                    }
                })
            }
        };
        j = ua.prototype, j.parseComplex = function (a, b, c, d, e, f) {
            var g, h, i, j, k, l, m = this.keyword;
            if (this.multi && (G.test(c) || G.test(b) ? (h = b.replace(G, "|").split("|"), i = c.replace(G, "|").split("|")) : m && (h = [b], i = [c])), i) {
                for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++) b = h[g] = h[g] || this.dflt, c = i[g] = i[g] || this.dflt, m && (k = b.indexOf(m), l = c.indexOf(m), k !== l && (-1 === l ? h[g] = h[g].split(m).join("") : -1 === k && (h[g] += " " + m)));
                b = h.join(", "), c = i.join(", ")
            }
            return sa(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f)
        }, j.parse = function (a, b, c, d, f, g, h) {
            return this.parseComplex(a.style, this.format(Y(a, this.p, e, !1, this.dflt)), this.format(b), f, g)
        }, g.registerSpecialProp = function (a, b, c) {
            va(a, {
                parser: function (a, d, e, f, g, h, i) {
                    var j = new qa(a, e, 0, 0, g, 2, e, (!1), c);
                    return j.plugin = h, j.setRatio = b(a, d, f._tween, e), j
                }, priority: c
            })
        }, g.useSVGTransformAttr = m || n;
        var xa, ya = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), za = W("transform"), Aa = U + "transform",
            Ba = W("transformOrigin"), Ca = null !== W("perspective"), Da = P.Transform = function () {
                this.perspective = parseFloat(g.defaultTransformPerspective) || 0, this.force3D = !(g.defaultForce3D === !1 || !Ca) && (g.defaultForce3D || "auto")
            }, Ea = window.SVGElement, Fa = function (a, b, c) {
                var d, e = L.createElementNS("http://www.w3.org/2000/svg", a), f = /([a-z])([A-Z])/g;
                for (d in c) e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
                return b.appendChild(e), e
            }, Ga = L.documentElement, Ha = function () {
                var a, b, c, d = p || /Android/i.test(Q) && !window.chrome;
                return L.createElementNS && !d && (a = Fa("svg", Ga), b = Fa("rect", a, {
                    width: 100,
                    height: 50,
                    x: 100
                }), c = b.getBoundingClientRect().width, b.style[Ba] = "50% 50%", b.style[za] = "scaleX(0.5)", d = c === b.getBoundingClientRect().width && !(n && Ca), Ga.removeChild(a)), d
            }(), Ia = function (a, b, c, d, e, f) {
                var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = a._gsTransform, w = Ma(a, !0);
                v && (t = v.xOrigin, u = v.yOrigin), (!d || (h = d.split(" ")).length < 2) && (n = a.getBBox(), b = ea(b).split(" "), h = [(-1 !== b[0].indexOf("%") ? parseFloat(b[0]) / 100 * n.width : parseFloat(b[0])) + n.x, (-1 !== b[1].indexOf("%") ? parseFloat(b[1]) / 100 * n.height : parseFloat(b[1])) + n.y]),
                    c.xOrigin = k = parseFloat(h[0]), c.yOrigin = l = parseFloat(h[1]), d && w !== La && (m = w[0], n = w[1], o = w[2], p = w[3], q = w[4], r = w[5], s = m * p - n * o, i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s, j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s, k = c.xOrigin = h[0] = i, l = c.yOrigin = h[1] = j), v && (f && (c.xOffset = v.xOffset, c.yOffset = v.yOffset, v = c), e || e !== !1 && g.defaultSmoothOrigin !== !1 ? (i = k - t, j = l - u, v.xOffset += i * w[0] + j * w[2] - i, v.yOffset += i * w[1] + j * w[3] - j) : v.xOffset = v.yOffset = 0), f || a.setAttribute("data-svg-origin", h.join(" "))
            }, Ja = function (a) {
                try {
                    return a.getBBox()
                } catch (a) {
                }
            }, Ka = function (a) {
                return !!(Ea && a.getBBox && a.getCTM && Ja(a) && (!a.parentNode || a.parentNode.getBBox && a.parentNode.getCTM))
            }, La = [1, 0, 0, 1, 0, 0], Ma = function (a, b) {
                var c, d, e, f, g, h = a._gsTransform || new Da, i = 1e5;
                if (za ? d = Y(a, Aa, null, !0) : a.currentStyle && (d = a.currentStyle.filter.match(E), d = d && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), h.x || 0, h.y || 0].join(",") : ""), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, (h.svg || a.getBBox && Ka(a)) && (c && -1 !== (a.style[za] + "").indexOf("matrix") && (d = a.style[za], c = 0), e = a.getAttribute("transform"), c && e && (-1 !== e.indexOf("matrix") ? (d = e, c = 0) : -1 !== e.indexOf("translate") && (d = "matrix(1,0,0,1," + e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", c = 0))), c) return La;
                for (e = (d || "").match(q) || [], ta = e.length; --ta > -1;) f = Number(e[ta]), e[ta] = (g = f - (f |= 0)) ? (g * i + (0 > g ? -.5 : .5) | 0) / i + f : f;
                return b && e.length > 6 ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e
            }, Na = P.getTransform = function (a, c, d, f) {
                if (a._gsTransform && d && !f) return a._gsTransform;
                var h, i, j, k, l, m, n = d ? a._gsTransform || new Da : new Da, o = n.scaleX < 0, p = 2e-5, q = 1e5, r = Ca ? parseFloat(Y(a, Ba, c, !1, "0 0 0").split(" ")[2]) || n.zOrigin || 0 : 0,
                    s = parseFloat(g.defaultTransformPerspective) || 0;
                if (n.svg = !(!a.getBBox || !Ka(a)), n.svg && (Ia(a, Y(a, Ba, e, !1, "50% 50%") + "", n, a.getAttribute("data-svg-origin")), xa = g.useSVGTransformAttr || Ha), h = Ma(a), h !== La) {
                    if (16 === h.length) {
                        var t, u, v, w, x, y = h[0], z = h[1], A = h[2], B = h[3], C = h[4], D = h[5], E = h[6], F = h[7], G = h[8], H = h[9], I = h[10], K = h[12], L = h[13], M = h[14], N = h[11],
                            O = Math.atan2(E, I);
                        n.zOrigin && (M = -n.zOrigin, K = G * M - h[12], L = H * M - h[13], M = I * M + n.zOrigin - h[14]), n.rotationX = O * J, O && (w = Math.cos(-O), x = Math.sin(-O), t = C * w + G * x, u = D * w + H * x, v = E * w + I * x, G = C * -x + G * w, H = D * -x + H * w, I = E * -x + I * w, N = F * -x + N * w, C = t, D = u, E = v), O = Math.atan2(-A, I), n.rotationY = O * J, O && (w = Math.cos(-O), x = Math.sin(-O), t = y * w - G * x, u = z * w - H * x, v = A * w - I * x, H = z * x + H * w, I = A * x + I * w, N = B * x + N * w, y = t, z = u, A = v), O = Math.atan2(z, y), n.rotation = O * J, O && (w = Math.cos(-O), x = Math.sin(-O), y = y * w + C * x, u = z * w + D * x, D = z * -x + D * w, E = A * -x + E * w, z = u), n.rotationX && Math.abs(n.rotationX) + Math.abs(n.rotation) > 359.9 && (n.rotationX = n.rotation = 0, n.rotationY = 180 - n.rotationY), n.scaleX = (Math.sqrt(y * y + z * z) * q + .5 | 0) / q, n.scaleY = (Math.sqrt(D * D + H * H) * q + .5 | 0) / q, n.scaleZ = (Math.sqrt(E * E + I * I) * q + .5 | 0) / q, n.skewX = C || D ? Math.atan2(C, D) * J + n.rotation : n.skewX || 0, Math.abs(n.skewX) > 90 && Math.abs(n.skewX) < 270 && (o ? (n.scaleX *= -1, n.skewX += n.rotation <= 0 ? 180 : -180, n.rotation += n.rotation <= 0 ? 180 : -180) : (n.scaleY *= -1, n.skewX += n.skewX <= 0 ? 180 : -180)), n.perspective = N ? 1 / (0 > N ? -N : N) : 0, n.x = K, n.y = L, n.z = M, n.svg && (n.x -= n.xOrigin - (n.xOrigin * y - n.yOrigin * C), n.y -= n.yOrigin - (n.yOrigin * z - n.xOrigin * D))
                    } else if ((!Ca || f || !h.length || n.x !== h[4] || n.y !== h[5] || !n.rotationX && !n.rotationY) && (void 0 === n.x || "none" !== Y(a, "display", c))) {
                        var P = h.length >= 6, Q = P ? h[0] : 1, R = h[1] || 0, S = h[2] || 0, T = P ? h[3] : 1;
                        n.x = h[4] || 0, n.y = h[5] || 0, j = Math.sqrt(Q * Q + R * R), k = Math.sqrt(T * T + S * S), l = Q || R ? Math.atan2(R, Q) * J : n.rotation || 0, m = S || T ? Math.atan2(S, T) * J + l : n.skewX || 0, Math.abs(m) > 90 && Math.abs(m) < 270 && (o ? (j *= -1, m += 0 >= l ? 180 : -180, l += 0 >= l ? 180 : -180) : (k *= -1, m += 0 >= m ? 180 : -180)), n.scaleX = j, n.scaleY = k, n.rotation = l, n.skewX = m, Ca && (n.rotationX = n.rotationY = n.z = 0, n.perspective = s, n.scaleZ = 1), n.svg && (n.x -= n.xOrigin - (n.xOrigin * Q + n.yOrigin * S), n.y -= n.yOrigin - (n.xOrigin * R + n.yOrigin * T))
                    }
                    n.zOrigin = r;
                    for (i in n) n[i] < p && n[i] > -p && (n[i] = 0)
                }
                return d && (a._gsTransform = n, n.svg && (xa && a.style[za] ? b.delayedCall(.001, function () {
                    Ra(a.style, za)
                }) : !xa && a.getAttribute("transform") && b.delayedCall(.001, function () {
                    a.removeAttribute("transform")
                }))), n
            }, Oa = function (a) {
                var b, c, d = this.data, e = -d.rotation * I, f = e + d.skewX * I, g = 1e5, h = (Math.cos(e) * d.scaleX * g | 0) / g, i = (Math.sin(e) * d.scaleX * g | 0) / g,
                    j = (Math.sin(f) * -d.scaleY * g | 0) / g, k = (Math.cos(f) * d.scaleY * g | 0) / g, l = this.t.style, m = this.t.currentStyle;
                if (m) {
                    c = i, i = -j, j = -c, b = m.filter, l.filter = "";
                    var n, o, q = this.t.offsetWidth, r = this.t.offsetHeight, s = "absolute" !== m.position,
                        t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k, w = d.x + q * d.xPercent / 100, x = d.y + r * d.yPercent / 100;
                    if (null != d.ox && (n = (d.oxp ? q * d.ox * .01 : d.ox) - q / 2, o = (d.oyp ? r * d.oy * .01 : d.oy) - r / 2, w += n - (n * h + o * i), x += o - (n * j + o * k)), s ? (n = q / 2, o = r / 2, t += ", Dx=" + (n - (n * h + o * i) + w) + ", Dy=" + (o - (n * j + o * k) + x) + ")") : t += ", sizingMethod='auto expand')", -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.filter = b.replace(F, t) : l.filter = t + " " + b, (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === t.indexOf("Dx=0, Dy=0") || v.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter")), !s) {
                        var y, z, A, B = 8 > p ? 1 : -1;
                        for (n = d.ieOffsetX || 0, o = d.ieOffsetY || 0, d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + w), d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + x), ta = 0; 4 > ta; ta++) z = ca[ta], y = m[z], c = -1 !== y.indexOf("px") ? parseFloat(y) : Z(this.t, z, parseFloat(y), y.replace(u, "")) || 0, A = c !== d[z] ? 2 > ta ? -d.ieOffsetX : -d.ieOffsetY : 2 > ta ? n - d.ieOffsetX : o - d.ieOffsetY, l[z] = (d[z] = Math.round(c - A * (0 === ta || 2 === ta ? 1 : B))) + "px"
                    }
                }
            }, Pa = P.set3DTransformRatio = P.setTransformRatio = function (a) {
                var b, c, d, e, f, g, h, i, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z = this.data, A = this.t.style, B = z.rotation, C = z.rotationX, D = z.rotationY, E = z.scaleX, F = z.scaleY,
                    G = z.scaleZ, H = z.x, J = z.y, K = z.z, L = z.svg, M = z.perspective, N = z.force3D;
                if (((1 === a || 0 === a) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !N) && !K && !M && !D && !C && 1 === G || xa && L || !Ca) return void(B || z.skewX || L ? (B *= I, x = z.skewX * I, y = 1e5, b = Math.cos(B) * E, e = Math.sin(B) * E, c = Math.sin(B - x) * -F, f = Math.cos(B - x) * F, x && "simple" === z.skewType && (s = Math.tan(x), s = Math.sqrt(1 + s * s), c *= s, f *= s, z.skewY && (b *= s, e *= s)), L && (H += z.xOrigin - (z.xOrigin * b + z.yOrigin * c) + z.xOffset, J += z.yOrigin - (z.xOrigin * e + z.yOrigin * f) + z.yOffset, xa && (z.xPercent || z.yPercent) && (p = this.t.getBBox(), H += .01 * z.xPercent * p.width, J += .01 * z.yPercent * p.height), p = 1e-6, p > H && H > -p && (H = 0), p > J && J > -p && (J = 0)), u = (b * y | 0) / y + "," + (e * y | 0) / y + "," + (c * y | 0) / y + "," + (f * y | 0) / y + "," + H + "," + J + ")", L && xa ? this.t.setAttribute("transform", "matrix(" + u) : A[za] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + u) : A[za] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + F + "," + H + "," + J + ")");
                if (n && (p = 1e-4, p > E && E > -p && (E = G = 2e-5), p > F && F > -p && (F = G = 2e-5), !M || z.z || z.rotationX || z.rotationY || (M = 0)), B || z.skewX) B *= I, q = b = Math.cos(B), r = e = Math.sin(B), z.skewX && (B -= z.skewX * I, q = Math.cos(B), r = Math.sin(B), "simple" === z.skewType && (s = Math.tan(z.skewX * I), s = Math.sqrt(1 + s * s), q *= s, r *= s, z.skewY && (b *= s, e *= s))), c = -r, f = q; else {
                    if (!(D || C || 1 !== G || M || L)) return void(A[za] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") + H + "px," + J + "px," + K + "px)" + (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));
                    b = f = 1, c = e = 0
                }
                j = 1, d = g = h = i = k = l = 0, m = M ? -1 / M : 0, o = z.zOrigin, p = 1e-6, v = ",", w = "0", B = D * I, B && (q = Math.cos(B), r = Math.sin(B), h = -r, k = m * -r, d = b * r, g = e * r, j = q, m *= q, b *= q, e *= q), B = C * I, B && (q = Math.cos(B), r = Math.sin(B), s = c * q + d * r, t = f * q + g * r, i = j * r, l = m * r, d = c * -r + d * q, g = f * -r + g * q, j *= q, m *= q, c = s, f = t), 1 !== G && (d *= G, g *= G, j *= G, m *= G), 1 !== F && (c *= F, f *= F, i *= F, l *= F), 1 !== E && (b *= E, e *= E, h *= E, k *= E), (o || L) && (o && (H += d * -o, J += g * -o, K += j * -o + o), L && (H += z.xOrigin - (z.xOrigin * b + z.yOrigin * c) + z.xOffset, J += z.yOrigin - (z.xOrigin * e + z.yOrigin * f) + z.yOffset), p > H && H > -p && (H = w), p > J && J > -p && (J = w), p > K && K > -p && (K = 0)), u = z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "matrix3d(", u += (p > b && b > -p ? w : b) + v + (p > e && e > -p ? w : e) + v + (p > h && h > -p ? w : h), u += v + (p > k && k > -p ? w : k) + v + (p > c && c > -p ? w : c) + v + (p > f && f > -p ? w : f), C || D || 1 !== G ? (u += v + (p > i && i > -p ? w : i) + v + (p > l && l > -p ? w : l) + v + (p > d && d > -p ? w : d), u += v + (p > g && g > -p ? w : g) + v + (p > j && j > -p ? w : j) + v + (p > m && m > -p ? w : m) + v) : u += ",0,0,0,0,1,0,", u += H + v + J + v + K + v + (M ? 1 + -K / M : 1) + ")", A[za] = u
            };
        j = Da.prototype, j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0, j.scaleX = j.scaleY = j.scaleZ = 1, va("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function (a, b, c, d, f, h, i) {
                if (d._lastParsedTransform === i) return f;
                d._lastParsedTransform = i;
                var j, k, l, m, n, o, p, q, r, s, t = a._gsTransform, u = a.style, v = 1e-6, w = ya.length, x = i, y = {}, z = "transformOrigin";
                if (i.display ? (l = Y(a, "display"), u.display = "block", j = Na(a, e, !0, i.parseTransform), u.display = l) : j = Na(a, e, !0, i.parseTransform), d._transform = j, "string" == typeof x.transform && za) l = N.style, l[za] = x.transform, l.display = "block", l.position = "absolute", L.body.appendChild(N), k = Na(N, null, !1), j.svg && (q = j.xOrigin, r = j.yOrigin, k.x -= j.xOffset, k.y -= j.yOffset, (x.transformOrigin || x.svgOrigin) && (m = {}, Ia(a, ea(x.transformOrigin), m, x.svgOrigin, x.smoothOrigin, !0), q = m.xOrigin, r = m.yOrigin, k.x -= m.xOffset - j.xOffset, k.y -= m.yOffset - j.yOffset), (q || r) && (s = Ma(N), k.x -= q - (q * s[0] + r * s[2]), k.y -= r - (q * s[1] + r * s[3]))), L.body.removeChild(N), k.perspective || (k.perspective = j.perspective), null != x.xPercent && (k.xPercent = ga(x.xPercent, j.xPercent)), null != x.yPercent && (k.yPercent = ga(x.yPercent, j.yPercent)); else if ("object" == typeof x) {
                    if (k = {
                            scaleX: ga(null != x.scaleX ? x.scaleX : x.scale, j.scaleX),
                            scaleY: ga(null != x.scaleY ? x.scaleY : x.scale, j.scaleY),
                            scaleZ: ga(x.scaleZ, j.scaleZ),
                            x: ga(x.x, j.x),
                            y: ga(x.y, j.y),
                            z: ga(x.z, j.z),
                            xPercent: ga(x.xPercent, j.xPercent),
                            yPercent: ga(x.yPercent, j.yPercent),
                            perspective: ga(x.transformPerspective, j.perspective)
                        }, p = x.directionalRotation, null != p) if ("object" == typeof p) for (l in p) x[l] = p[l]; else x.rotation = p;
                    "string" == typeof x.x && -1 !== x.x.indexOf("%") && (k.x = 0, k.xPercent = ga(x.x, j.xPercent)), "string" == typeof x.y && -1 !== x.y.indexOf("%") && (k.y = 0, k.yPercent = ga(x.y, j.yPercent)), k.rotation = ha("rotation" in x ? x.rotation : "shortRotation" in x ? x.shortRotation + "_short" : "rotationZ" in x ? x.rotationZ : j.rotation - j.skewY, j.rotation - j.skewY, "rotation", y), Ca && (k.rotationX = ha("rotationX" in x ? x.rotationX : "shortRotationX" in x ? x.shortRotationX + "_short" : j.rotationX || 0, j.rotationX, "rotationX", y), k.rotationY = ha("rotationY" in x ? x.rotationY : "shortRotationY" in x ? x.shortRotationY + "_short" : j.rotationY || 0, j.rotationY, "rotationY", y)), k.skewX = ha(x.skewX, j.skewX - j.skewY), (k.skewY = ha(x.skewY, j.skewY)) && (k.skewX += k.skewY, k.rotation += k.skewY)
                }
                for (Ca && null != x.force3D && (j.force3D = x.force3D, o = !0), j.skewType = x.skewType || j.skewType || g.defaultSkewType, n = j.force3D || j.z || j.rotationX || j.rotationY || k.z || k.rotationX || k.rotationY || k.perspective, n || null == x.scale || (k.scaleZ = 1); --w > -1;) c = ya[w], m = k[c] - j[c], (m > v || -v > m || null != x[c] || null != K[c]) && (o = !0, f = new qa(j, c, j[c], m, f), c in y && (f.e = y[c]), f.xs0 = 0, f.plugin = h, d._overwriteProps.push(f.n));
                return m = x.transformOrigin, j.svg && (m || x.svgOrigin) && (q = j.xOffset, r = j.yOffset, Ia(a, ea(m), k, x.svgOrigin, x.smoothOrigin), f = ra(j, "xOrigin", (t ? j : k).xOrigin, k.xOrigin, f, z), f = ra(j, "yOrigin", (t ? j : k).yOrigin, k.yOrigin, f, z), (q !== j.xOffset || r !== j.yOffset) && (f = ra(j, "xOffset", t ? q : j.xOffset, j.xOffset, f, z), f = ra(j, "yOffset", t ? r : j.yOffset, j.yOffset, f, z)), m = xa ? null : "0px 0px"), (m || Ca && n && j.zOrigin) && (za ? (o = !0, c = Ba, m = (m || Y(a, c, e, !1, "50% 50%")) + "", f = new qa(u, c, 0, 0, f, (-1), z), f.b = u[c], f.plugin = h, Ca ? (l = j.zOrigin, m = m.split(" "), j.zOrigin = (m.length > 2 && (0 === l || "0px" !== m[2]) ? parseFloat(m[2]) : l) || 0, f.xs0 = f.e = m[0] + " " + (m[1] || "50%") + " 0px", f = new qa(j, "zOrigin", 0, 0, f, (-1), f.n), f.b = l, f.xs0 = f.e = j.zOrigin) : f.xs0 = f.e = m) : ea(m + "", j)), o && (d._transformType = j.svg && xa || !n && 3 !== this._transformType ? 2 : 3), f
            }, prefix: !0
        }), va("boxShadow", {defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset"}), va("borderRadius", {
            defaultValue: "0px", parser: function (a, b, c, f, g, h) {
                b = this.format(b);
                var i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], z = a.style;
                for (q = parseFloat(a.offsetWidth), r = parseFloat(a.offsetHeight), i = b.split(" "), j = 0; j < y.length; j++) this.p.indexOf("border") && (y[j] = W(y[j])), m = l = Y(a, y[j], e, !1, "0px"), -1 !== m.indexOf(" ") && (l = m.split(" "), m = l[0], l = l[1]), n = k = i[j], o = parseFloat(m), t = m.substr((o + "").length), u = "=" === n.charAt(1), u ? (p = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), p *= parseFloat(n), s = n.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(n), s = n.substr((p + "").length)), "" === s && (s = d[c] || t), s !== t && (v = Z(a, "borderLeft", o, t), w = Z(a, "borderTop", o, t), "%" === s ? (m = v / q * 100 + "%", l = w / r * 100 + "%") : "em" === s ? (x = Z(a, "borderLeft", 1, "em"), m = v / x + "em", l = w / x + "em") : (m = v + "px", l = w + "px"), u && (n = parseFloat(m) + p + s, k = parseFloat(l) + p + s)), g = sa(z, y[j], m + " " + l, n + " " + k, !1, "0px", g);
                return g
            }, prefix: !0, formatter: na("0px 0px 0px 0px", !1, !0)
        }), va("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
            defaultValue: "0px", parser: function (a, b, c, d, f, g) {
                return sa(a.style, c, this.format(Y(a, c, e, !1, "0px 0px")), this.format(b), !1, "0px", f)
            }, prefix: !0, formatter: na("0px 0px", !1, !0)
        }), va("backgroundPosition", {
            defaultValue: "0 0", parser: function (a, b, c, d, f, g) {
                var h, i, j, k, l, m, n = "background-position", o = e || X(a, null),
                    q = this.format((o ? p ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
                    r = this.format(b);
                if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && r.split(",").length < 2 && (m = Y(a, "backgroundImage").replace(B, ""), m && "none" !== m)) {
                    for (h = q.split(" "), i = r.split(" "), O.setAttribute("src", m), j = 2; --j > -1;) q = h[j], k = -1 !== q.indexOf("%"), k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - O.width : a.offsetHeight - O.height, h[j] = k ? parseFloat(q) / 100 * l + "px" : parseFloat(q) / l * 100 + "%");
                    q = h.join(" ")
                }
                return this.parseComplex(a.style, q, r, f, g)
            }, formatter: ea
        }), va("backgroundSize", {defaultValue: "0 0", formatter: ea}), va("perspective", {defaultValue: "0px", prefix: !0}), va("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), va("transformStyle", {prefix: !0}), va("backfaceVisibility", {prefix: !0}), va("userSelect", {prefix: !0}), va("margin", {parser: oa("marginTop,marginRight,marginBottom,marginLeft")}), va("padding", {parser: oa("paddingTop,paddingRight,paddingBottom,paddingLeft")}), va("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (a, b, c, d, f, g) {
                var h, i, j;
                return 9 > p ? (i = a.currentStyle, j = 8 > p ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")", b = this.format(b).split(",").join(j)) : (h = this.format(Y(a, this.p, e, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, h, b, f, g)
            }
        }), va("textShadow", {defaultValue: "0px 0px 0px #999", color: !0, multi: !0}), va("autoRound,strictUnits", {
            parser: function (a, b, c, d, e) {
                return e
            }
        }), va("border", {
            defaultValue: "0px solid #000", parser: function (a, b, c, d, f, g) {
                return this.parseComplex(a.style, this.format(Y(a, "borderTopWidth", e, !1, "0px") + " " + Y(a, "borderTopStyle", e, !1, "solid") + " " + Y(a, "borderTopColor", e, !1, "#000")), this.format(b), f, g)
            }, color: !0, formatter: function (a) {
                var b = a.split(" ");
                return b[0] + " " + (b[1] || "solid") + " " + (a.match(ma) || ["#000"])[0]
            }
        }), va("borderWidth", {parser: oa("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}), va("float,cssFloat,styleFloat", {
            parser: function (a, b, c, d, e, f) {
                var g = a.style, h = "cssFloat" in g ? "cssFloat" : "styleFloat";
                return new qa(g, h, 0, 0, e, (-1), c, (!1), 0, g[h], b)
            }
        });
        var Qa = function (a) {
            var b, c = this.t, d = c.filter || Y(this.data, "filter") || "", e = this.s + this.c * a | 0;
            100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), b = !Y(this.data, "filter")) : (c.filter = d.replace(x, ""), b = !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), -1 === d.indexOf("pacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(v, "opacity=" + e))
        };
        va("opacity,alpha,autoAlpha", {
            defaultValue: "1", parser: function (a, b, c, d, f, g) {
                var h = parseFloat(Y(a, "opacity", e, !1, "1")), i = a.style, j = "autoAlpha" === c;
                return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h), j && 1 === h && "hidden" === Y(a, "visibility", e) && 0 !== b && (h = 0), R ? f = new qa(i, "opacity", h, b - h, f) : (f = new qa(i, "opacity", 100 * h, 100 * (b - h), f), f.xn1 = j ? 1 : 0, i.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = a, f.plugin = g, f.setRatio = Qa), j && (f = new qa(i, "visibility", 0, 0, f, (-1), null, (!1), 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit"), f.xs0 = "inherit", d._overwriteProps.push(f.n), d._overwriteProps.push(c)), f
            }
        });
        var Ra = function (a, b) {
            b && (a.removeProperty ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) && (b = "-" + b), a.removeProperty(b.replace(z, "-$1").toLowerCase())) : a.removeAttribute(b))
        }, Sa = function (a) {
            if (this.t._gsClassPT = this, 1 === a || 0 === a) {
                this.t.setAttribute("class", 0 === a ? this.b : this.e);
                for (var b = this.data, c = this.t.style; b;) b.v ? c[b.p] = b.v : Ra(c, b.p), b = b._next;
                1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
        va("className", {
            parser: function (a, b, d, f, g, h, i) {
                var j, k, l, m, n, o = a.getAttribute("class") || "", p = a.style.cssText;
                if (g = f._classNamePT = new qa(a, d, 0, 0, g, 2), g.setRatio = Sa, g.pr = -11, c = !0, g.b = o, k = _(a, e), l = a._gsClassPT) {
                    for (m = {}, n = l.data; n;) m[n.p] = 1, n = n._next;
                    l.setRatio(1)
                }
                return a._gsClassPT = g, g.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), a.setAttribute("class", g.e), j = aa(a, k, _(a), i, m), a.setAttribute("class", o), g.data = j.firstMPT, a.style.cssText = p, g = g.xfirst = f.parse(a, j.difs, g, h)
            }
        });
        var Ta = function (a) {
            if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var b, c, d, e, f, g = this.t.style, h = i.transform.parse;
                if ("all" === this.e) g.cssText = "", e = !0; else for (b = this.e.split(" ").join("").split(","), d = b.length; --d > -1;) c = b[d], i[c] && (i[c].parse === h ? e = !0 : c = "transformOrigin" === c ? Ba : i[c].p), Ra(g, c);
                e && (Ra(g, za), f = this.t._gsTransform, f && (f.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
            }
        };
        for (va("clearProps", {
            parser: function (a, b, d, e, f) {
                return f = new qa(a, d, 0, 0, f, 2), f.setRatio = Ta, f.e = b, f.pr = -10, f.data = e._tween, c = !0, f
            }
        }), j = "bezier,throwProps,physicsProps,physics2D".split(","), ta = j.length; ta--;) wa(j[ta]);
        j = g.prototype, j._firstPT = j._lastParsedTransform = j._transform = null, j._onInitTween = function (a, b, h) {
            if (!a.nodeType) return !1;
            this._target = a, this._tween = h, this._vars = b, k = b.autoRound, c = !1, d = b.suffixMap || g.suffixMap, e = X(a, ""), f = this._overwriteProps;
            var j, n, p, q, r, s, t, u, v, x = a.style;
            if (l && "" === x.zIndex && (j = Y(a, "zIndex", e), ("auto" === j || "" === j) && this._addLazySet(x, "zIndex", 0)), "string" == typeof b && (q = x.cssText, j = _(a, e), x.cssText = q + ";" + b, j = aa(a, j, _(a)).difs, !R && w.test(b) && (j.opacity = parseFloat(RegExp.$1)), b = j, x.cssText = q), b.className ? this._firstPT = n = i.className.parse(a, b.className, "className", this, null, null, b) : this._firstPT = n = this.parse(a, b, null), this._transformType) {
                for (v = 3 === this._transformType, za ? m && (l = !0, "" === x.zIndex && (t = Y(a, "zIndex", e), ("auto" === t || "" === t) && this._addLazySet(x, "zIndex", 0)), o && this._addLazySet(x, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (v ? "visible" : "hidden"))) : x.zoom = 1, p = n; p && p._next;) p = p._next;
                u = new qa(a, "transform", 0, 0, null, 2), this._linkCSSP(u, null, p), u.setRatio = za ? Pa : Oa, u.data = this._transform || Na(a, e, !0), u.tween = h, u.pr = -1, f.pop()
            }
            if (c) {
                for (; n;) {
                    for (s = n._next, p = q; p && p.pr > n.pr;) p = p._next;
                    (n._prev = p ? p._prev : r) ? n._prev._next = n : q = n, (n._next = p) ? p._prev = n : r = n, n = s
                }
                this._firstPT = q
            }
            return !0
        }, j.parse = function (a, b, c, f) {
            var g, h, j, l, m, n, o, p, q, r, s = a.style;
            for (g in b) n = b[g], h = i[g], h ? c = h.parse(a, n, g, this, c, f, b) : (m = Y(a, g, e) + "", q = "string" == typeof n, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || q && y.test(n) ? (q || (n = ka(n), n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"), c = sa(s, g, m, n, !0, "transparent", c, 0, f)) : q && H.test(n) ? c = sa(s, g, m, n, !0, null, c, 0, f) : (j = parseFloat(m), o = j || 0 === j ? m.substr((j + "").length) : "", ("" === m || "auto" === m) && ("width" === g || "height" === g ? (j = da(a, g, e), o = "px") : "left" === g || "top" === g ? (j = $(a, g, e), o = "px") : (j = "opacity" !== g ? 0 : 1, o = "")), r = q && "=" === n.charAt(1), r ? (l = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), l *= parseFloat(n), p = n.replace(u, "")) : (l = parseFloat(n), p = q ? n.replace(u, "") : ""), "" === p && (p = g in d ? d[g] : o), n = l || 0 === l ? (r ? l + j : l) + p : b[g], o !== p && "" !== p && (l || 0 === l) && j && (j = Z(a, g, j, o), "%" === p ? (j /= Z(a, g, 100, "%") / 100, b.strictUnits !== !0 && (m = j + "%")) : "em" === p || "rem" === p || "vw" === p || "vh" === p ? j /= Z(a, g, 1, p) : "px" !== p && (l = Z(a, g, l, p), p = "px"), r && (l || 0 === l) && (n = l + j + p)), r && (l += j), !j && 0 !== j || !l && 0 !== l ? void 0 !== s[g] && (n || n + "" != "NaN" && null != n) ? (c = new qa(s, g, l || j || 0, 0, c, (-1), g, (!1), 0, m, n), c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : T("invalid " + g + " tween value: " + b[g]) : (c = new qa(s, g, j, l - j, c, 0, g, k !== !1 && ("px" === p || "zIndex" === g), 0, m, n), c.xs0 = p))), f && c && !c.plugin && (c.plugin = f);
            return c
        }, j.setRatio = function (a) {
            var b, c, d, e = this._firstPT, f = 1e-6;
            if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6) for (; e;) {
                if (b = e.c * a + e.s, e.r ? b = Math.round(b) : f > b && b > -f && (b = 0), e.type) if (1 === e.type) if (d = e.l, 2 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2; else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3; else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4; else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5; else {
                    for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                    e.t[e.p] = c
                } else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a); else e.t[e.p] = b + e.xs0;
                e = e._next
            } else for (; e;) 2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next; else for (; e;) {
                if (2 !== e.type) if (e.r && -1 !== e.type) if (b = Math.round(e.s + e.c), e.type) {
                    if (1 === e.type) {
                        for (d = e.l, c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                        e.t[e.p] = c
                    }
                } else e.t[e.p] = b + e.xs0; else e.t[e.p] = e.e; else e.setRatio(a);
                e = e._next
            }
        }, j._enableTransforms = function (a) {
            this._transform = this._transform || Na(this._target, e, !0), this._transformType = this._transform.svg && xa || !a && 3 !== this._transformType ? 2 : 3
        };
        var Ua = function (a) {
            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
        };
        j._addLazySet = function (a, b, c) {
            var d = this._firstPT = new qa(a, b, 0, 0, this._firstPT, 2);
            d.e = c, d.setRatio = Ua, d.data = this
        }, j._linkCSSP = function (a, b, c, d) {
            return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = c), a
        }, j._kill = function (b) {
            var c, d, e, f = b;
            if (b.autoAlpha || b.alpha) {
                f = {};
                for (d in b) f[d] = b[d];
                f.opacity = 1, f.autoAlpha && (f.visibility = 1)
            }
            return b.className && (c = this._classNamePT) && (e = c.xfirst, e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), a.prototype._kill.call(this, f)
        };
        var Va = function (a, b, c) {
            var d, e, f, g;
            if (a.slice) for (e = a.length; --e > -1;) Va(a[e], b, c); else for (d = a.childNodes, e = d.length; --e > -1;) f = d[e], g = f.type, f.style && (b.push(_(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Va(f, b, c)
        };
        return g.cascadeTo = function (a, c, d) {
            var e, f, g, h, i = b.to(a, c, d), j = [i], k = [], l = [], m = [], n = b._internals.reservedProps;
            for (a = i._targets || i.target, Va(a, k, m), i.render(c, !0, !0), Va(a, l), i.render(0, !0, !0), i._enabled(!0), e = m.length; --e > -1;) if (f = aa(m[e], k[e], l[e]), f.firstMPT) {
                f = f.difs;
                for (g in d) n[g] && (f[g] = d[g]);
                h = {};
                for (g in f) h[g] = k[e][g];
                j.push(b.fromTo(m[e], c, h, f))
            }
            return j
        }, a.activate([g]), g
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (a) {
    "use strict";
    var b = function () {
        return (_gsScope.GreenSockGlobals || _gsScope)[a]
    };
    "function" == typeof define && define.amd ? define(["TweenLite"], b) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = b())
}("CSSPlugin"), !function (a, b) {
    "use strict";
    var c = a.GreenSockGlobals = a.GreenSockGlobals || a;
    if (!c.TweenLite) {
        var d, e, f, g, h, i = function (a) {
            var b, d = a.split("."), e = c;
            for (b = 0; b < d.length; b++) e[d[b]] = e = e[d[b]] || {};
            return e
        }, j = i("com.greensock"), k = 1e-10, l = function (a) {
            var b, c = [], d = a.length;
            for (b = 0; b !== d; c.push(a[b++])) ;
            return c
        }, m = function () {
        }, n = function () {
            var a = Object.prototype.toString, b = a.call([]);
            return function (c) {
                return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b)
            }
        }(), o = {}, p = function (d, e, f, g) {
            this.sc = o[d] ? o[d].sc : [], o[d] = this, this.gsClass = null, this.func = f;
            var h = [];
            this.check = function (j) {
                for (var k, l, m, n, q, r = e.length, s = r; --r > -1;) (k = o[e[r]] || new p(e[r], [])).gsClass ? (h[r] = k.gsClass, s--) : j && k.sc.push(this);
                if (0 === s && f) for (l = ("com.greensock." + d).split("."), m = l.pop(), n = i(l.join("."))[m] = this.gsClass = f.apply(f, h), g && (c[m] = n, q = "undefined" != typeof module && module.exports, !q && "function" == typeof define && define.amd ? define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").pop(), [], function () {
                    return n
                }) : d === b && q && (module.exports = n)), r = 0; r < this.sc.length; r++) this.sc[r].check()
            }, this.check(!0)
        }, q = a._gsDefine = function (a, b, c, d) {
            return new p(a, b, c, d)
        }, r = j._class = function (a, b, c) {
            return b = b || function () {
            }, q(a, [], function () {
                return b
            }, c), b
        };
        q.globals = c;
        var s = [0, 0, 1, 1], t = [], u = r("easing.Ease", function (a, b, c, d) {
            this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? s.concat(b) : s
        }, !0), v = u.map = {}, w = u.register = function (a, b, c, d) {
            for (var e, f, g, h, i = b.split(","), k = i.length, l = (c || "easeIn,easeOut,easeInOut").split(","); --k > -1;) for (f = i[k], e = d ? r("easing." + f, null, !0) : j.easing[f] || {}, g = l.length; --g > -1;) h = l[g], v[f + "." + h] = v[h + f] = e[h] = a.getRatio ? a : a[h] || new a
        };
        for (f = u.prototype, f._calcEnd = !1, f.getRatio = function (a) {
            if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
            var b = this._type, c = this._power, d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
            return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
        }, d = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], e = d.length; --e > -1;) f = d[e] + ",Power" + e, w(new u(null, null, 1, e), f, "easeOut", !0), w(new u(null, null, 2, e), f, "easeIn" + (0 === e ? ",easeNone" : "")), w(new u(null, null, 3, e), f, "easeInOut");
        v.linear = j.easing.Linear.easeIn, v.swing = j.easing.Quad.easeInOut;
        var x = r("events.EventDispatcher", function (a) {
            this._listeners = {}, this._eventTarget = a || this
        });
        f = x.prototype, f.addEventListener = function (a, b, c, d, e) {
            e = e || 0;
            var f, i, j = this._listeners[a], k = 0;
            for (null == j && (this._listeners[a] = j = []), i = j.length; --i > -1;) f = j[i], f.c === b && f.s === c ? j.splice(i, 1) : 0 === k && f.pr < e && (k = i + 1);
            j.splice(k, 0, {c: b, s: c, up: d, pr: e}), this !== g || h || g.wake()
        }, f.removeEventListener = function (a, b) {
            var c, d = this._listeners[a];
            if (d) for (c = d.length; --c > -1;) if (d[c].c === b) return void d.splice(c, 1)
        }, f.dispatchEvent = function (a) {
            var b, c, d, e = this._listeners[a];
            if (e) for (b = e.length, c = this._eventTarget; --b > -1;) d = e[b], d && (d.up ? d.c.call(d.s || c, {type: a, target: c}) : d.c.call(d.s || c))
        };
        var y = a.requestAnimationFrame, z = a.cancelAnimationFrame, A = Date.now || function () {
            return (new Date).getTime()
        }, B = A();
        for (d = ["ms", "moz", "webkit", "o"], e = d.length; --e > -1 && !y;) y = a[d[e] + "RequestAnimationFrame"], z = a[d[e] + "CancelAnimationFrame"] || a[d[e] + "CancelRequestAnimationFrame"];
        r("Ticker", function (a, b) {
            var c, d, e, f, i, j = this, l = A(), n = !(b === !1 || !y) && "auto", o = 500, p = 33, q = "tick", r = function (a) {
                var b, g, h = A() - B;
                h > o && (l += h - p), B += h, j.time = (B - l) / 1e3, b = j.time - i, (!c || b > 0 || a === !0) && (j.frame++, i += b + (b >= f ? .004 : f - b), g = !0), a !== !0 && (e = d(r)), g && j.dispatchEvent(q)
            };
            x.call(j), j.time = j.frame = 0, j.tick = function () {
                r(!0)
            }, j.lagSmoothing = function (a, b) {
                o = a || 1 / k, p = Math.min(b, o, 0)
            }, j.sleep = function () {
                null != e && (n && z ? z(e) : clearTimeout(e), d = m, e = null, j === g && (h = !1))
            }, j.wake = function (a) {
                null !== e ? j.sleep() : a ? l += -B + (B = A()) : j.frame > 10 && (B = A() - o + 5), d = 0 === c ? m : n && y ? y : function (a) {
                    return setTimeout(a, 1e3 * (i - j.time) + 1 | 0)
                }, j === g && (h = !0), r(2)
            }, j.fps = function (a) {
                return arguments.length ? (c = a, f = 1 / (c || 60), i = this.time + f, void j.wake()) : c
            }, j.useRAF = function (a) {
                return arguments.length ? (j.sleep(), n = a, void j.fps(c)) : n
            }, j.fps(a), setTimeout(function () {
                "auto" === n && j.frame < 5 && "hidden" !== document.visibilityState && j.useRAF(!1)
            }, 1500)
        }), f = j.Ticker.prototype = new j.events.EventDispatcher, f.constructor = j.Ticker;
        var C = r("core.Animation", function (a, b) {
            if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = b.immediateRender === !0, this.data = b.data, this._reversed = b.reversed === !0, V) {
                h || g.wake();
                var c = this.vars.useFrames ? U : V;
                c.add(this, c._time), this.vars.paused && this.paused(!0)
            }
        });
        g = C.ticker = new j.Ticker, f = C.prototype, f._dirty = f._gc = f._initted = f._paused = !1, f._totalTime = f._time = 0, f._rawPrevTime = -1, f._next = f._last = f._onUpdate = f._timeline = f.timeline = null, f._paused = !1;
        var D = function () {
            h && A() - B > 2e3 && g.wake(), setTimeout(D, 2e3)
        };
        D(), f.play = function (a, b) {
            return null != a && this.seek(a, b), this.reversed(!1).paused(!1)
        }, f.pause = function (a, b) {
            return null != a && this.seek(a, b), this.paused(!0)
        }, f.resume = function (a, b) {
            return null != a && this.seek(a, b), this.paused(!1)
        }, f.seek = function (a, b) {
            return this.totalTime(Number(a), b !== !1)
        }, f.restart = function (a, b) {
            return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0)
        }, f.reverse = function (a, b) {
            return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
        }, f.render = function (a, b, c) {
        }, f.invalidate = function () {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        }, f.isActive = function () {
            var a, b = this._timeline, c = this._startTime;
            return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime()) >= c && a < c + this.totalDuration() / this._timeScale
        }, f._enabled = function (a, b) {
            return h || g.wake(), this._gc = !a, this._active = this.isActive(), b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
        }, f._kill = function (a, b) {
            return this._enabled(!1, !1)
        }, f.kill = function (a, b) {
            return this._kill(a, b), this
        }, f._uncache = function (a) {
            for (var b = a ? this : this.timeline; b;) b._dirty = !0, b = b.timeline;
            return this
        }, f._swapSelfInParams = function (a) {
            for (var b = a.length, c = a.concat(); --b > -1;) "{self}" === a[b] && (c[b] = this);
            return c
        }, f._callback = function (a) {
            var b = this.vars;
            b[a].apply(b[a + "Scope"] || b.callbackScope || this, b[a + "Params"] || t)
        }, f.eventCallback = function (a, b, c, d) {
            if ("on" === (a || "").substr(0, 2)) {
                var e = this.vars;
                if (1 === arguments.length) return e[a];
                null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = n(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b)
            }
            return this
        }, f.delay = function (a) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
        }, f.duration = function (a) {
            return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, f.totalDuration = function (a) {
            return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
        }, f.time = function (a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
        }, f.totalTime = function (a, b, c) {
            if (h || g.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var d = this._totalDuration, e = this._timeline;
                    if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline) for (; e._timeline;) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (I.length && X(), this.render(a, b, !1), I.length && X())
            }
            return this
        }, f.progress = f.totalProgress = function (a, b) {
            var c = this.duration();
            return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio
        }, f.startTime = function (a) {
            return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime;
        }, f.endTime = function (a) {
            return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
        }, f.timeScale = function (a) {
            if (!arguments.length) return this._timeScale;
            if (a = a || k, this._timeline && this._timeline.smoothChildTiming) {
                var b = this._pauseTime, c = b || 0 === b ? b : this._timeline.totalTime();
                this._startTime = c - (c - this._startTime) * this._timeScale / a
            }
            return this._timeScale = a, this._uncache(!1)
        }, f.reversed = function (a) {
            return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, f.paused = function (a) {
            if (!arguments.length) return this._paused;
            var b, c, d = this._timeline;
            return a != this._paused && d && (h || a || g.wake(), b = d.rawTime(), c = b - this._pauseTime, !a && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this
        };
        var E = r("core.SimpleTimeline", function (a) {
            C.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        f = E.prototype = new C, f.constructor = E, f.kill()._gc = !1, f._first = f._last = f._recent = null, f._sortChildren = !1, f.add = f.insert = function (a, b, c, d) {
            var e, f;
            if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), e = this._last, this._sortChildren) for (f = a._startTime; e && e._startTime > f;) e = e._prev;
            return e ? (a._next = e._next, e._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = e, this._recent = a, this._timeline && this._uncache(!0), this
        }, f._remove = function (a, b) {
            return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, f.render = function (a, b, c) {
            var d, e = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = a; e;) d = e._next, (e._active || a >= e._startTime && !e._paused) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d
        }, f.rawTime = function () {
            return h || g.wake(), this._totalTime
        };
        var F = r("TweenLite", function (b, c, d) {
            if (C.call(this, c, d), this.render = F.prototype.render, null == b) throw"Cannot tween a null target.";
            this.target = b = "string" != typeof b ? b : F.selector(b) || b;
            var e, f, g, h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType), i = this.vars.overwrite;
            if (this._overwrite = i = null == i ? T[F.defaultOverwrite] : "number" == typeof i ? i >> 0 : T[i], (h || b instanceof Array || b.push && n(b)) && "number" != typeof b[0]) for (this._targets = g = l(b), this._propLookup = [], this._siblings = [], e = 0; e < g.length; e++) f = g[e], f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(l(f))) : (this._siblings[e] = Y(f, this, !1), 1 === i && this._siblings[e].length > 1 && $(f, this, null, 1, this._siblings[e])) : (f = g[e--] = F.selector(f), "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1); else this._propLookup = {}, this._siblings = Y(b, this, !1), 1 === i && this._siblings.length > 1 && $(b, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -k, this.render(Math.min(0, -this._delay)))
        }, !0), G = function (b) {
            return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType)
        }, H = function (a, b) {
            var c, d = {};
            for (c in a) S[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!P[c] || P[c] && P[c]._autoCSS) || (d[c] = a[c], delete a[c]);
            a.css = d
        };
        f = F.prototype = new C, f.constructor = F, f.kill()._gc = !1, f.ratio = 0, f._firstPT = f._targets = f._overwrittenProps = f._startAt = null, f._notifyPluginsOfEnabled = f._lazy = !1, F.version = "1.18.4", F.defaultEase = f._ease = new u(null, null, 1, 1), F.defaultOverwrite = "auto", F.ticker = g, F.autoSleep = 120, F.lagSmoothing = function (a, b) {
            g.lagSmoothing(a, b)
        }, F.selector = a.$ || a.jQuery || function (b) {
            var c = a.$ || a.jQuery;
            return c ? (F.selector = c, c(b)) : "undefined" == typeof document ? b : document.querySelectorAll ? document.querySelectorAll(b) : document.getElementById("#" === b.charAt(0) ? b.substr(1) : b)
        };
        var I = [], J = {}, K = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, L = function (a) {
                for (var b, c = this._firstPT, d = 1e-6; c;) b = c.blob ? a ? this.join("") : this.start : c.c * a + c.s, c.r ? b = Math.round(b) : d > b && b > -d && (b = 0), c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b, c = c._next
            }, M = function (a, b, c, d) {
                var e, f, g, h, i, j, k, l = [a, b], m = 0, n = "", o = 0;
                for (l.start = a, c && (c(l), a = l[0], b = l[1]), l.length = 0, e = a.match(K) || [], f = b.match(K) || [], d && (d._next = null, d.blob = 1, l._firstPT = d), i = f.length, h = 0; i > h; h++) k = f[h], j = b.substr(m, b.indexOf(k, m) - m), n += j || !h ? j : ",", m += j.length, o ? o = (o + 1) % 5 : "rgba(" === j.substr(-5) && (o = 1), k === e[h] || e.length <= h ? n += k : (n && (l.push(n), n = ""), g = parseFloat(e[h]), l.push(g), l._firstPT = {
                    _next: l._firstPT,
                    t: l,
                    p: l.length - 1,
                    s: g,
                    c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0,
                    f: 0,
                    r: o && 4 > o
                }), m += k.length;
                return n += b.substr(m), n && l.push(n), l.setRatio = L, l
            }, N = function (a, b, c, d, e, f, g, h) {
                var i, j, k = "get" === c ? a[b] : c, l = typeof a[b], m = "string" == typeof d && "=" === d.charAt(1),
                    n = {t: a, p: b, s: k, f: "function" === l, pg: 0, n: e || b, r: f, pr: 0, c: m ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - k || 0};
                return "number" !== l && ("function" === l && "get" === c && (j = b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3), n.s = k = g ? a[j](g) : a[j]()), "string" == typeof k && (g || isNaN(k)) ? (n.fp = g, i = M(k, d, h || F.defaultStringFilter, n), n = {
                    t: i,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 2,
                    pg: 0,
                    n: e || b,
                    pr: 0
                }) : m || (n.s = parseFloat(k), n.c = parseFloat(d) - n.s || 0)), n.c ? ((n._next = this._firstPT) && (n._next._prev = n), this._firstPT = n, n) : void 0
            }, O = F._internals = {isArray: n, isSelector: G, lazyTweens: I, blobDif: M}, P = F._plugins = {}, Q = O.tweenLookup = {}, R = 0, S = O.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1,
                stringFilter: 1
            }, T = {none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, "true": 1, "false": 0}, U = C._rootFramesTimeline = new E, V = C._rootTimeline = new E, W = 30,
            X = O.lazyRender = function () {
                var a, b = I.length;
                for (J = {}; --b > -1;) a = I[b], a && a._lazy !== !1 && (a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1);
                I.length = 0
            };
        V._startTime = g.time, U._startTime = g.frame, V._active = U._active = !0, setTimeout(X, 1), C._updateRoot = F.render = function () {
            var a, b, c;
            if (I.length && X(), V.render((g.time - V._startTime) * V._timeScale, !1, !1), U.render((g.frame - U._startTime) * U._timeScale, !1, !1), I.length && X(), g.frame >= W) {
                W = g.frame + (parseInt(F.autoSleep, 10) || 120);
                for (c in Q) {
                    for (b = Q[c].tweens, a = b.length; --a > -1;) b[a]._gc && b.splice(a, 1);
                    0 === b.length && delete Q[c]
                }
                if (c = V._first, (!c || c._paused) && F.autoSleep && !U._first && 1 === g._listeners.tick.length) {
                    for (; c && c._paused;) c = c._next;
                    c || g.sleep()
                }
            }
        }, g.addEventListener("tick", C._updateRoot);
        var Y = function (a, b, c) {
            var d, e, f = a._gsTweenID;
            if (Q[f || (a._gsTweenID = f = "t" + R++)] || (Q[f] = {target: a, tweens: []}), b && (d = Q[f].tweens, d[e = d.length] = b, c)) for (; --e > -1;) d[e] === b && d.splice(e, 1);
            return Q[f].tweens
        }, Z = function (a, b, c, d) {
            var e, f, g = a.vars.onOverwrite;
            return g && (e = g(a, b, c, d)), g = F.onOverwrite, g && (f = g(a, b, c, d)), e !== !1 && f !== !1
        }, $ = function (a, b, c, d, e) {
            var f, g, h, i;
            if (1 === d || d >= 4) {
                for (i = e.length, f = 0; i > f; f++) if ((h = e[f]) !== b) h._gc || h._kill(null, a, b) && (g = !0); else if (5 === d) break;
                return g
            }
            var j, l = b._startTime + k, m = [], n = 0, o = 0 === b._duration;
            for (f = e.length; --f > -1;) (h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || _(b, 0, o), 0 === _(h, j, o) && (m[n++] = h)) : h._startTime <= l && h._startTime + h.totalDuration() / h._timeScale > l && ((o || !h._initted) && l - h._startTime <= 2e-10 || (m[n++] = h)));
            for (f = n; --f > -1;) if (h = m[f], 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || !h._firstPT && h._initted) {
                if (2 !== d && !Z(h, b)) continue;
                h._enabled(!1, !1) && (g = !0)
            }
            return g
        }, _ = function (a, b, c) {
            for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
                if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
                d = d._timeline
            }
            return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * k > f - b ? k : (f += a.totalDuration() / a._timeScale / e) > b + k ? 0 : f - b - k
        };
        f._init = function () {
            var a, b, c, d, e, f = this.vars, g = this._overwrittenProps, h = this._duration, i = !!f.immediateRender, j = f.ease;
            if (f.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), e = {};
                for (d in f.startAt) e[d] = f.startAt[d];
                if (e.overwrite = !1, e.immediateRender = !0, e.lazy = i && f.lazy !== !1, e.startAt = e.delay = null, this._startAt = F.to(this.target, 0, e), i) if (this._time > 0) this._startAt = null; else if (0 !== h) return
            } else if (f.runBackwards && 0 !== h) if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null; else {
                0 !== this._time && (i = !1), c = {};
                for (d in f) S[d] && "autoCSS" !== d || (c[d] = f[d]);
                if (c.overwrite = 0, c.data = "isFromStart", c.lazy = i && f.lazy !== !1, c.immediateRender = i, this._startAt = F.to(this.target, 0, c), i) {
                    if (0 === this._time) return
                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
            }
            if (this._ease = j = j ? j instanceof u ? j : "function" == typeof j ? new u(j, f.easeParams) : v[j] || F.defaultEase : F.defaultEase, f.easeParams instanceof Array && j.config && (this._ease = j.config.apply(j, f.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (a = this._targets.length; --a > -1;) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], g ? g[a] : null) && (b = !0); else b = this._initProps(this.target, this._propLookup, this._siblings, g);
            if (b && F._onPluginEvent("_onInitAllProps", this), g && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), f.runBackwards) for (c = this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;
            this._onUpdate = f.onUpdate, this._initted = !0
        }, f._initProps = function (b, c, d, e) {
            var f, g, h, i, j, k;
            if (null == b) return !1;
            J[b._gsTweenID] && X(), this.vars.css || b.style && b !== a && b.nodeType && P.css && this.vars.autoCSS !== !1 && H(this.vars, b);
            for (f in this.vars) if (k = this.vars[f], S[f]) k && (k instanceof Array || k.push && n(k)) && -1 !== k.join("").indexOf("{self}") && (this.vars[f] = k = this._swapSelfInParams(k, this)); else if (P[f] && (i = new P[f])._onInitTween(b, this.vars[f], this)) {
                for (this._firstPT = j = {
                    _next: this._firstPT,
                    t: i,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 1,
                    n: f,
                    pg: 1,
                    pr: i._priority
                }, g = i._overwriteProps.length; --g > -1;) c[i._overwriteProps[g]] = this._firstPT;
                (i._priority || i._onInitAllProps) && (h = !0), (i._onDisable || i._onEnable) && (this._notifyPluginsOfEnabled = !0), j._next && (j._next._prev = j)
            } else c[f] = N.call(this, b, f, "get", k, f, 0, null, this.vars.stringFilter);
            return e && this._kill(e, b) ? this._initProps(b, c, d, e) : this._overwrite > 1 && this._firstPT && d.length > 1 && $(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (J[b._gsTweenID] = !0), h)
        }, f.render = function (a, b, c) {
            var d, e, f, g, h = this._time, i = this._duration, j = this._rawPrevTime;
            if (a >= i - 1e-7) this._totalTime = this._time = i, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 > j || 0 >= a && a >= -1e-7 || j === k && "isPause" !== this.data) && j !== a && (c = !0, j > k && (e = "onReverseComplete")), this._rawPrevTime = g = !b || a || j === a ? a : k); else if (1e-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === i && j > 0) && (e = "onReverseComplete", d = this._reversed), 0 > a && (this._active = !1, 0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (j !== k || "isPause" !== this.data) && (c = !0), this._rawPrevTime = g = !b || a || j === a ? a : k)), this._initted || (c = !0); else if (this._totalTime = this._time = a, this._easeType) {
                var l = a / i, m = this._easeType, n = this._easePower;
                (1 === m || 3 === m && l >= .5) && (l = 1 - l), 3 === m && (l *= 2), 1 === n ? l *= l : 2 === n ? l *= l * l : 3 === n ? l *= l * l * l : 4 === n && (l *= l * l * l * l), 1 === m ? this.ratio = 1 - l : 2 === m ? this.ratio = l : .5 > a / i ? this.ratio = l / 2 : this.ratio = 1 - l / 2
            } else this.ratio = this._ease.getRatio(a / i);
            if (this._time !== h || c) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = h, this._rawPrevTime = j, I.push(this), void(this._lazy = [a, b]);
                    this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0), 0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === i) && (b || this._callback("onStart"))), f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
                this._onUpdate && (0 > a && this._startAt && a !== -1e-4 && this._startAt.render(a, b, c), b || (this._time !== h || d || c) && this._callback("onUpdate")), e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && a !== -1e-4 && this._startAt.render(a, b, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this._callback(e), 0 === i && this._rawPrevTime === k && g !== k && (this._rawPrevTime = 0))
            }
        }, f._kill = function (a, b, c) {
            if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            b = "string" != typeof b ? b || this._targets || this.target : F.selector(b) || b;
            var d, e, f, g, h, i, j, k, l, m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline;
            if ((n(b) || G(b)) && "number" != typeof b[0]) for (d = b.length; --d > -1;) this._kill(a, b[d], c) && (i = !0); else {
                if (this._targets) {
                    for (d = this._targets.length; --d > -1;) if (b === this._targets[d]) {
                        h = this._propLookup[d] || {}, this._overwrittenProps = this._overwrittenProps || [], e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";
                        break
                    }
                } else {
                    if (b !== this.target) return !1;
                    h = this._propLookup, e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                }
                if (h) {
                    if (j = a || h, k = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill), c && (F.onOverwrite || this.vars.onOverwrite)) {
                        for (f in j) h[f] && (l || (l = []), l.push(f));
                        if ((l || !a) && !Z(this, c, b, l)) return !1
                    }
                    for (f in j) (g = h[f]) && (m && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s, i = !0), g.pg && g.t._kill(j) && (i = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete h[f]), k && (e[f] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return i
        }, f.invalidate = function () {
            return this._notifyPluginsOfEnabled && F._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], C.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -k, this.render(Math.min(0, -this._delay))), this
        }, f._enabled = function (a, b) {
            if (h || g.wake(), a && this._gc) {
                var c, d = this._targets;
                if (d) for (c = d.length; --c > -1;) this._siblings[c] = Y(d[c], this, !0); else this._siblings = Y(this.target, this, !0)
            }
            return C.prototype._enabled.call(this, a, b), !(!this._notifyPluginsOfEnabled || !this._firstPT) && F._onPluginEvent(a ? "_onEnable" : "_onDisable", this)
        }, F.to = function (a, b, c) {
            return new F(a, b, c)
        }, F.from = function (a, b, c) {
            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new F(a, b, c)
        }, F.fromTo = function (a, b, c, d) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new F(a, b, d)
        }, F.delayedCall = function (a, b, c, d, e) {
            return new F(b, 0, {
                delay: a,
                onComplete: b,
                onCompleteParams: c,
                callbackScope: d,
                onReverseComplete: b,
                onReverseCompleteParams: c,
                immediateRender: !1,
                lazy: !1,
                useFrames: e,
                overwrite: 0
            })
        }, F.set = function (a, b) {
            return new F(a, 0, b)
        }, F.getTweensOf = function (a, b) {
            if (null == a) return [];
            a = "string" != typeof a ? a : F.selector(a) || a;
            var c, d, e, f;
            if ((n(a) || G(a)) && "number" != typeof a[0]) {
                for (c = a.length, d = []; --c > -1;) d = d.concat(F.getTweensOf(a[c], b));
                for (c = d.length; --c > -1;) for (f = d[c], e = c; --e > -1;) f === d[e] && d.splice(c, 1)
            } else for (d = Y(a).concat(), c = d.length; --c > -1;) (d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
            return d
        }, F.killTweensOf = F.killDelayedCallsTo = function (a, b, c) {
            "object" == typeof b && (c = b, b = !1);
            for (var d = F.getTweensOf(a, b), e = d.length; --e > -1;) d[e]._kill(c, a)
        };
        var aa = r("plugins.TweenPlugin", function (a, b) {
            this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = aa.prototype
        }, !0);
        if (f = aa.prototype, aa.version = "1.18.0", aa.API = 2, f._firstPT = null, f._addTween = N, f.setRatio = L, f._kill = function (a) {
                var b, c = this._overwriteProps, d = this._firstPT;
                if (null != a[this._propName]) this._overwriteProps = []; else for (b = c.length; --b > -1;) null != a[c[b]] && c.splice(b, 1);
                for (; d;) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
                return !1
            }, f._roundProps = function (a, b) {
                for (var c = this._firstPT; c;) (a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")]) && (c.r = b), c = c._next
            }, F._onPluginEvent = function (a, b) {
                var c, d, e, f, g, h = b._firstPT;
                if ("_onInitAllProps" === a) {
                    for (; h;) {
                        for (g = h._next, d = e; d && d.pr > h.pr;) d = d._next;
                        (h._prev = d ? d._prev : f) ? h._prev._next = h : e = h, (h._next = d) ? d._prev = h : f = h, h = g
                    }
                    h = b._firstPT = e
                }
                for (; h;) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
                return c
            }, aa.activate = function (a) {
                for (var b = a.length; --b > -1;) a[b].API === aa.API && (P[(new a[b])._propName] = a[b]);
                return !0
            }, q.plugin = function (a) {
                if (!(a && a.propName && a.init && a.API)) throw"illegal plugin definition.";
                var b, c = a.propName, d = a.priority || 0, e = a.overwriteProps, f = {init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_roundProps", initAll: "_onInitAllProps"},
                    g = r("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function () {
                        aa.call(this, c, d), this._overwriteProps = e || []
                    }, a.global === !0), h = g.prototype = new aa(c);
                h.constructor = g, g.API = a.API;
                for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
                return g.version = a.version, aa.activate([g]), g
            }, d = a._gsQueue) {
            for (e = 0; e < d.length; e++) d[e]();
            for (f in o) o[f].func || a.console.log("GSAP encountered missing dependency: com.greensock." + f)
        }
        h = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite"), function () {
    "use strict";
    var root = this, timezoneJS = {};
    "function" == typeof define && define.amd ? define(function () {
        return timezoneJS
    }) : "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = timezoneJS), exports.timezoneJS = timezoneJS) : root.timezoneJS = timezoneJS, timezoneJS.VERSION = "0.4.13";
    for (var ajax_lib = root.$ || root.jQuery || root.Zepto, fleegix = root.fleegix, DAYS = timezoneJS.Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], MONTHS = timezoneJS.Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], SHORT_MONTHS = {}, SHORT_DAYS = {}, EXACT_DATE_TIME = {}, i = 0; i < MONTHS.length; i++) SHORT_MONTHS[MONTHS[i].substr(0, 3)] = i;
    for (i = 0; i < DAYS.length; i++) SHORT_DAYS[DAYS[i].substr(0, 3)] = i;
    var _arrIndexOf = Array.prototype.indexOf || function (a) {
        if (null === this) throw new TypeError;
        var b = Object(this), c = b.length >>> 0;
        if (0 === c) return -1;
        var d = 0;
        if (arguments.length > 1 && (d = Number(arguments[1]), d != d ? d = 0 : 0 !== d && d !== 1 / 0 && d !== -(1 / 0) && (d = (d > 0 || -1) * Math.floor(Math.abs(d)))), d >= c) return -1;
        for (var e = d >= 0 ? d : Math.max(c - Math.abs(d), 0); e < c; e++) if (e in b && b[e] === a) return e;
        return -1
    }, _fixWidth = function (a, b) {
        if ("number" != typeof a) throw"not a number: " + a;
        var c = a > 1e3, d = a.toString(), e = d.length;
        if (c && e > b) return d.substr(e - b, e);
        for (d = [d]; e < b;) d.unshift("0"), e++;
        return d.join("")
    }, _transport = function (a) {
        if (a) {
            if (!a.url) throw new Error("URL must be specified");
            if ("async" in a || (a.async = !0), "undefined" == typeof window && "function" == typeof require) {
                var b = require("fs");
                if (a.async) {
                    if ("function" != typeof a.success) return;
                    return a.error = a.error || console.error, b.readFile(a.url, "utf8", function (b, c) {
                        return b ? a.error(b) : a.success(c)
                    })
                }
                return b.readFileSync(a.url, "utf8")
            }
            if (!(fleegix && "undefined" != typeof fleegix.xhr || ajax_lib && "undefined" != typeof ajax_lib.ajax)) throw new Error("Please use the Fleegix.js XHR module, jQuery ajax, Zepto ajax, or define your own transport mechanism for downloading zone files.");
            return a.async ? fleegix && fleegix.xhr ? fleegix.xhr.send({url: a.url, method: "get", handleSuccess: a.success, handleErr: a.error}) : ajax_lib.ajax({
                url: a.url,
                dataType: "text",
                method: "GET",
                error: a.error,
                success: a.success
            }) : fleegix && fleegix.xhr ? fleegix.xhr.doReq({url: a.url, async: !1}) : ajax_lib.ajax({url: a.url, async: !1, dataType: "text"}).responseText
        }
    };
    timezoneJS.Date = function () {
        if (this === timezoneJS) throw"timezoneJS.Date object must be constructed with 'new'";
        var a = Array.prototype.slice.apply(arguments), b = null, c = null, d = [], e = !1;
        "[object Array]" === Object.prototype.toString.call(a[0]) && (a = a[0]), "string" == typeof a[a.length - 1] && (e = Date.parse(a[a.length - 1].replace(/GMT[\+\-]\d+/, "")), (isNaN(e) || null === e) && (c = a.pop()));
        var f = !1;
        switch (a.length) {
            case 0:
                b = new Date;
                break;
            case 1:
                b = new Date(a[0]), "string" == typeof a[0] && a[0].search(/[+-][0-9]{4}/) == -1 && a[0].search(/Z/) == -1 && a[0].search(/T/) == -1 && (f = !0);
                break;
            case 2:
                b = new Date(a[0], a[1]), f = !0;
                break;
            default:
                for (var g = 0; g < 7; g++) d[g] = a[g] || 0;
                b = new Date(d[0], d[1], d[2], d[3], d[4], d[5], d[6]), f = !0
        }
        this._useCache = !1, this._tzInfo = {}, this._day = 0, this.year = 0, this.month = 0, this.date = 0, this.hours = 0, this.minutes = 0, this.seconds = 0, this.milliseconds = 0, this.timezone = c || null, f ? this.setFromDateObjProxy(b) : this.setFromTimeProxy(b.getTime(), c)
    }, timezoneJS.Date.prototype = {
        getDate: function () {
            return this.date
        }, getDay: function () {
            return this._day
        }, getFullYear: function () {
            return this.year
        }, getMonth: function () {
            return this.month
        }, getYear: function () {
            return this.year - 1900
        }, getHours: function () {
            return this.hours
        }, getMilliseconds: function () {
            return this.milliseconds
        }, getMinutes: function () {
            return this.minutes
        }, getSeconds: function () {
            return this.seconds
        }, getUTCDate: function () {
            return this.getUTCDateProxy().getUTCDate()
        }, getUTCDay: function () {
            return this.getUTCDateProxy().getUTCDay()
        }, getUTCFullYear: function () {
            return this.getUTCDateProxy().getUTCFullYear()
        }, getUTCHours: function () {
            return this.getUTCDateProxy().getUTCHours()
        }, getUTCMilliseconds: function () {
            return this.getUTCDateProxy().getUTCMilliseconds()
        }, getUTCMinutes: function () {
            return this.getUTCDateProxy().getUTCMinutes()
        }, getUTCMonth: function () {
            return this.getUTCDateProxy().getUTCMonth()
        }, getUTCSeconds: function () {
            return this.getUTCDateProxy().getUTCSeconds()
        }, getTime: function () {
            return this._timeProxy + 60 * this.getTimezoneOffset() * 1e3
        }, getTimezone: function () {
            return this.timezone
        }, getTimezoneOffset: function () {
            return this.getTimezoneInfo().tzOffset
        }, getTimezoneAbbreviation: function () {
            return this.getTimezoneInfo().tzAbbr
        }, getTimezoneInfo: function () {
            if (this._useCache) return this._tzInfo;
            var a;
            return a = this.timezone ? "Etc/UTC" === this.timezone || "Etc/GMT" === this.timezone ? {
                tzOffset: 0,
                tzAbbr: "UTC"
            } : timezoneJS.timezone.getTzInfo(this._timeProxy, this.timezone) : {tzOffset: this.getLocalOffset(), tzAbbr: null}, this._tzInfo = a, this._useCache = !0, a
        }, getUTCDateProxy: function () {
            var a = new Date(this._timeProxy);
            return a.setUTCMinutes(a.getUTCMinutes() + this.getTimezoneOffset()), a
        }, setDate: function (a) {
            return this.setAttribute("date", a), this.getTime()
        }, setFullYear: function (a, b, c) {
            return void 0 !== c && this.setAttribute("date", 1), this.setAttribute("year", a), void 0 !== b && this.setAttribute("month", b), void 0 !== c && this.setAttribute("date", c), this.getTime()
        }, setMonth: function (a, b) {
            return this.setAttribute("month", a), void 0 !== b && this.setAttribute("date", b), this.getTime()
        }, setYear: function (a) {
            return a = Number(a), 0 <= a && a <= 99 && (a += 1900), this.setUTCAttribute("year", a), this.getTime()
        }, setHours: function (a, b, c, d) {
            return this.setAttribute("hours", a), void 0 !== b && this.setAttribute("minutes", b), void 0 !== c && this.setAttribute("seconds", c), void 0 !== d && this.setAttribute("milliseconds", d), this.getTime()
        }, setMinutes: function (a, b, c) {
            return this.setAttribute("minutes", a), void 0 !== b && this.setAttribute("seconds", b), void 0 !== c && this.setAttribute("milliseconds", c), this.getTime()
        }, setSeconds: function (a, b) {
            return this.setAttribute("seconds", a), void 0 !== b && this.setAttribute("milliseconds", b), this.getTime()
        }, setMilliseconds: function (a) {
            return this.setAttribute("milliseconds", a), this.getTime()
        }, setTime: function (a) {
            if (isNaN(a)) throw new Error("Units must be a number.");
            return this.setFromTimeProxy(a, this.timezone), this.getTime()
        }, setUTCFullYear: function (a, b, c) {
            return void 0 !== c && this.setUTCAttribute("date", 1), this.setUTCAttribute("year", a), void 0 !== b && this.setUTCAttribute("month", b), void 0 !== c && this.setUTCAttribute("date", c), this.getTime()
        }, setUTCMonth: function (a, b) {
            return this.setUTCAttribute("month", a), void 0 !== b && this.setUTCAttribute("date", b), this.getTime()
        }, setUTCDate: function (a) {
            return this.setUTCAttribute("date", a), this.getTime()
        }, setUTCHours: function (a, b, c, d) {
            return this.setUTCAttribute("hours", a), void 0 !== b && this.setUTCAttribute("minutes", b), void 0 !== c && this.setUTCAttribute("seconds", c), void 0 !== d && this.setUTCAttribute("milliseconds", d), this.getTime()
        }, setUTCMinutes: function (a, b, c) {
            return this.setUTCAttribute("minutes", a), void 0 !== b && this.setUTCAttribute("seconds", b), void 0 !== c && this.setUTCAttribute("milliseconds", c), this.getTime()
        }, setUTCSeconds: function (a, b) {
            return this.setUTCAttribute("seconds", a), void 0 !== b && this.setUTCAttribute("milliseconds", b), this.getTime()
        }, setUTCMilliseconds: function (a) {
            return this.setUTCAttribute("milliseconds", a), this.getTime()
        }, setFromDateObjProxy: function (a) {
            this.year = a.getFullYear(), this.month = a.getMonth(), this.date = a.getDate(), this.hours = a.getHours(), this.minutes = a.getMinutes(), this.seconds = a.getSeconds(), this.milliseconds = a.getMilliseconds(), this._day = a.getDay(), this._dateProxy = a, this._timeProxy = Date.UTC(this.year, this.month, this.date, this.hours, this.minutes, this.seconds, this.milliseconds), this._useCache = !1
        }, setFromTimeProxy: function (a, b) {
            var c = new Date(a), d = b ? timezoneJS.timezone.getTzInfo(a, b, !0).tzOffset : c.getTimezoneOffset();
            c.setTime(a + 6e4 * (c.getTimezoneOffset() - d)), this.setFromDateObjProxy(c)
        }, setAttribute: function (a, b) {
            if (isNaN(b)) throw new Error("Units must be a number.");
            var c = this._dateProxy, d = "year" === a ? "FullYear" : a.substr(0, 1).toUpperCase() + a.substr(1);
            c["set" + d](b), this.setFromDateObjProxy(c)
        }, setUTCAttribute: function (a, b) {
            if (isNaN(b)) throw new Error("Units must be a number.");
            var c = "year" === a ? "FullYear" : a.substr(0, 1).toUpperCase() + a.substr(1), d = this.getUTCDateProxy();
            d["setUTC" + c](b), d.setUTCMinutes(d.getUTCMinutes() - this.getTimezoneOffset()), this.setFromTimeProxy(d.getTime() + 6e4 * this.getTimezoneOffset(), this.timezone)
        }, setTimezone: function (a) {
            var b = this.getTimezoneInfo().tzOffset;
            this.timezone = a, this._useCache = !1, this.setUTCMinutes(this.getUTCMinutes() - this.getTimezoneInfo().tzOffset + b)
        }, removeTimezone: function () {
            this.timezone = null, this._useCache = !1
        }, valueOf: function () {
            return this.getTime()
        }, clone: function () {
            return this.timezone ? new timezoneJS.Date(this.getTime(), this.timezone) : new timezoneJS.Date(this.getTime())
        }, toGMTString: function () {
            return this.toString("EEE, dd MMM yyyy HH:mm:ss Z", "Etc/GMT")
        }, toLocaleString: function () {
        }, toLocaleDateString: function () {
        }, toLocaleTimeString: function () {
        }, toSource: function () {
        }, toISOString: function () {
            return this.toString("yyyy-MM-ddTHH:mm:ss.SSS", "Etc/UTC") + "Z"
        }, toJSON: function () {
            return this.toISOString()
        }, toDateString: function () {
            return this.toString("EEE MMM dd yyyy")
        }, toTimeString: function () {
            return this.toString("H:mm k")
        }, toString: function (a, b) {
            a || (a = "yyyy-MM-dd HH:mm:ss");
            var c = a, d = b ? timezoneJS.timezone.getTzInfo(this.getTime(), b) : this.getTimezoneInfo(), e = this;
            b && (e = this.clone(), e.setTimezone(b));
            var f = e.getHours();
            return c.replace(/a+/g, function () {
                return "k"
            }).replace(/y+/g, function (a) {
                return _fixWidth(e.getFullYear(), a.length)
            }).replace(/d+/g, function (a) {
                return _fixWidth(e.getDate(), a.length)
            }).replace(/m+/g, function (a) {
                return _fixWidth(e.getMinutes(), a.length)
            }).replace(/s+/g, function (a) {
                return _fixWidth(e.getSeconds(), a.length)
            }).replace(/S+/g, function (a) {
                return _fixWidth(e.getMilliseconds(), a.length)
            }).replace(/h+/g, function (a) {
                return _fixWidth(f % 12 === 0 ? 12 : f % 12, a.length)
            }).replace(/M+/g, function (a) {
                var b = e.getMonth(), c = a.length;
                return c > 3 ? timezoneJS.Months[b] : c > 2 ? timezoneJS.Months[b].substring(0, c) : _fixWidth(b + 1, c)
            }).replace(/k+/g, function () {
                return f >= 12 ? (f > 12 && (f -= 12), "PM") : "AM"
            }).replace(/H+/g, function (a) {
                return _fixWidth(f, a.length)
            }).replace(/E+/g, function (a) {
                return DAYS[e.getDay()].substring(0, a.length)
            }).replace(/Z+/gi, function () {
                return d.tzAbbr
            })
        }, toUTCString: function () {
            return this.toGMTString()
        }, civilToJulianDayNumber: function (a, b, c) {
            var d;
            b++, b > 12 && (d = parseInt(b / 12, 10), b %= 12, a += d), b <= 2 && (a -= 1, b += 12), d = Math.floor(a / 100);
            var e = 2 - d + Math.floor(d / 4), f = Math.floor(365.25 * (a + 4716)) + Math.floor(30.6001 * (b + 1)) + c + e - 1524;
            return f
        }, getLocalOffset: function () {
            return this._dateProxy.getTimezoneOffset()
        }
    }, timezoneJS.timezone = new function () {
        function invalidTZError(a) {
            throw new Error("Timezone '" + a + "' is either incorrect, or not loaded in the timezone registry.")
        }

        function builtInLoadZoneFile(a, b) {
            var c = _this.zoneFileBasePath + "/" + a;
            return b && b.async ? _this.transport({
                async: !0, url: c, success: function (a) {
                    return _this.parseZones(a) && "function" == typeof b.callback && b.callback()
                }, error: function () {
                    throw new Error("Error retrieving '" + c + "' zoneinfo files")
                }
            }) : _this.parseZones(_this.transport({url: c, async: !1}))
        }

        function getRegionForTimezone(a) {
            var b, c, d = regionExceptions[a];
            if (d) return d;
            if (b = a.split("/")[0], c = regionMap[b]) return c;
            var e = _this.zones[a];
            return "string" == typeof e ? getRegionForTimezone(e) : _this.loadedZones.backward ? void invalidTZError(a) : (_this.loadZoneFile("backward"), getRegionForTimezone(a))
        }

        function parseTimeString(a) {
            var b = /(\d+)(?::0*(\d*))?(?::0*(\d*))?([wsugz])?$/, c = a.match(b);
            return c[1] = parseInt(c[1], 10), c[2] = c[2] ? parseInt(c[2], 10) : 0, c[3] = c[3] ? parseInt(c[3], 10) : 0, c.slice(1, 5)
        }

        function processZone(a) {
            if (a[3]) {
                var b = parseInt(a[3], 10), c = 11, d = 31;
                a[4] && (c = SHORT_MONTHS[a[4].substr(0, 3)], d = parseInt(a[5], 10) || 1);
                var e = a[6] ? parseTimeString(a[6]) : [0, 0, 0];
                return [b, c, d, e[0], e[1], e[2]]
            }
        }

        function getZone(a, b) {
            for (var c = "number" == typeof a ? a : new Date(a).getTime(), d = b, e = _this.zones[d]; "string" == typeof e;) d = e, e = _this.zones[d];
            if (!e) {
                if (!_this.loadedZones.backward) return _this.loadZoneFile("backward"), getZone(a, b);
                invalidTZError(d)
            }
            if (0 === e.length) throw new Error("No Zone found for '" + b + "' on " + a);
            for (var f = e.length - 1; f >= 0; f--) {
                var g = e[f];
                if (g[3] && c > g[3]) break
            }
            return e[f + 1]
        }

        function getBasicOffset(a) {
            var b = parseTimeString(a), c = "-" === a.charAt(0) ? -1 : 1;
            return b = c * (1e3 * (60 * (60 * b[0] + b[1]) + b[2])), b / 60 / 1e3
        }

        function getAdjustedOffset(a, b) {
            return -Math.ceil(b - a)
        }

        function getRule(a, b, c) {
            var d = "number" == typeof a ? new Date(a) : a, e = b[1], f = b[0], g = e.match(/^([0-9]):([0-9][0-9])$/);
            if (g) return [-1e6, "max", "-", "Jan", 1, [0, 0, 0], 60 * parseInt(g[1], 10) + parseInt(g[2], 10), "-"];
            var h, i = function (a, b, c) {
                var d = 0;
                if ("u" === b || "g" === b || "z" === b) d = 0; else if ("s" === b) d = f; else {
                    if ("w" !== b && b) throw new Error("unknown type " + b);
                    d = getAdjustedOffset(f, c[6])
                }
                return d *= 6e4, new Date(a.getTime() + d)
            }, j = function (a, b) {
                var c, d = a[0], e = a[1], f = e[5];
                if (EXACT_DATE_TIME[d] || (EXACT_DATE_TIME[d] = {}), EXACT_DATE_TIME[d][e]) c = EXACT_DATE_TIME[d][e]; else {
                    if (isNaN(e[4])) {
                        var g, h;
                        "last" === e[4].substr(0, 4) ? (c = new Date(Date.UTC(d, SHORT_MONTHS[e[3]] + 1, 1, f[0] - 24, f[1], f[2], 0)), g = SHORT_DAYS[e[4].substr(4, 3)], h = "<=") : (c = new Date(Date.UTC(d, SHORT_MONTHS[e[3]], e[4].substr(5), f[0], f[1], f[2], 0)), g = SHORT_DAYS[e[4].substr(0, 3)], h = e[4].substr(3, 2));
                        var j = c.getUTCDay();
                        ">=" === h ? c.setUTCDate(c.getUTCDate() + (g - j + (g < j ? 7 : 0))) : c.setUTCDate(c.getUTCDate() + (g - j - (g > j ? 7 : 0)))
                    } else c = new Date(Date.UTC(d, SHORT_MONTHS[e[3]], e[4], f[0], f[1], f[2], 0));
                    EXACT_DATE_TIME[d][e] = c
                }
                return b && (c = i(c, f[3], b)),
                    c
            }, k = function (a, b) {
                for (var c = [], d = 0; b && d < b.length; d++) b[d][0] <= a && (b[d][1] >= a || b[d][0] === a && "only" === b[d][1] || "max" === b[d][1]) && c.push([a, b[d]]);
                return c
            }, l = function (a, b, d) {
                var e, f;
                return a instanceof Date ? d && (a = i(a, c ? "u" : "w", d)) : (e = a[0], f = a[1], a = !d && EXACT_DATE_TIME[e] && EXACT_DATE_TIME[e][f] ? EXACT_DATE_TIME[e][f] : j(a, d)), b instanceof Date ? d && (b = i(b, c ? "u" : "w", d)) : (e = b[0], f = b[1], b = !d && EXACT_DATE_TIME[e] && EXACT_DATE_TIME[e][f] ? EXACT_DATE_TIME[e][f] : j(b, d)), a = Number(a), b = Number(b), a - b
            }, m = d.getUTCFullYear();
            h = k(m, _this.rules[e]), h.push(d), h.sort(l), _arrIndexOf.call(h, d) < 2 && (h = h.concat(k(m - 1, _this.rules[e])), h.sort(l));
            var n = _arrIndexOf.call(h, d);
            return n > 1 && l(d, h[n - 1], h[n - 2][1]) < 0 ? h[n - 2][1] : n > 0 && n < h.length - 1 && l(d, h[n + 1], h[n - 1][1]) > 0 ? h[n + 1][1] : 0 === n ? null : h[n - 1][1]
        }

        function getAbbreviation(a, b) {
            var c = a[2];
            if (c.indexOf("%s") > -1) {
                var d;
                return d = b ? "-" === b[7] ? "" : b[7] : "S", c.replace("%s", d)
            }
            return c.indexOf("/") > -1 ? c.split("/", 2)[b && b[6] ? 1 : 0] : c
        }

        var _this = this, regionMap = {
            Etc: "etcetera",
            EST: "northamerica",
            MST: "northamerica",
            HST: "northamerica",
            EST5EDT: "northamerica",
            CST6CDT: "northamerica",
            MST7MDT: "northamerica",
            PST8PDT: "northamerica",
            America: ["northamerica", "southamerica"],
            Pacific: "australasia",
            Atlantic: "europe",
            Africa: "africa",
            Indian: "africa",
            Antarctica: "antarctica",
            Asia: "asia",
            Australia: "australasia",
            Europe: "europe",
            WET: "europe",
            CET: "europe",
            MET: "europe",
            EET: "europe"
        }, regionExceptions = {
            "Pacific/Honolulu": "northamerica",
            "Atlantic/Bermuda": "northamerica",
            "Atlantic/Cape_Verde": "africa",
            "Atlantic/St_Helena": "africa",
            "Indian/Kerguelen": "antarctica",
            "Indian/Chagos": "asia",
            "Indian/Maldives": "asia",
            "Indian/Christmas": "australasia",
            "Indian/Cocos": "australasia",
            "America/Danmarkshavn": "europe",
            "America/Scoresbysund": "europe",
            "America/Godthab": "europe",
            "America/Thule": "europe",
            "Asia/Istanbul": "europe",
            "Asia/Yekaterinburg": "europe",
            "Asia/Omsk": "europe",
            "Asia/Novosibirsk": "europe",
            "Asia/Krasnoyarsk": "europe",
            "Asia/Irkutsk": "europe",
            "Asia/Yakutsk": "europe",
            "Asia/Vladivostok": "europe",
            "Asia/Sakhalin": "europe",
            "Asia/Magadan": "europe",
            "Asia/Kamchatka": "europe",
            "Asia/Anadyr": "europe",
            "Africa/Ceuta": "europe",
            GMT: "etcetera",
            "Europe/Nicosia": "asia"
        };
        this.zoneFileBasePath = null, this.zoneFiles = ["africa", "antarctica", "asia", "australasia", "backward", "etcetera", "europe", "northamerica", "pacificnew", "southamerica"], this.loadingSchemes = {
            PRELOAD_ALL: "preloadAll",
            LAZY_LOAD: "lazyLoad",
            MANUAL_LOAD: "manualLoad"
        }, this.getRegionForTimezone = getRegionForTimezone, this.loadingScheme = this.loadingSchemes.LAZY_LOAD, this.loadedZones = {}, this.zones = {}, this.rules = {}, this.init = function (a) {
            var b = {async: !0}, c = this.loadingScheme === this.loadingSchemes.PRELOAD_ALL ? this.zoneFiles : this.defaultZoneFile || "northamerica";
            for (var d in a) b[d] = a[d];
            return this.loadZoneFiles(c, b)
        }, this.loadZoneFiles = function (a, b) {
            var c, d = 0;
            if ("string" == typeof a) return this.loadZoneFile(a, b);
            b = b || {}, c = b.callback, b.callback = function () {
                d++, d === a.length && "function" == typeof c && c()
            };
            for (var e = 0; e < a.length; e++) this.loadZoneFile(a[e], b)
        }, this.loadZoneFile = function (a, b) {
            if ("undefined" == typeof this.zoneFileBasePath) throw new Error("Please define a base path to your zone file directory -- timezoneJS.timezone.zoneFileBasePath.");
            if (!this.loadedZones[a]) return this.loadedZones[a] = !0, builtInLoadZoneFile(a, b)
        }, this.loadZoneJSONData = function (url, sync) {
            var processData = function (data) {
                data = eval("(" + data + ")");
                for (var z in data.zones) _this.zones[z] = data.zones[z];
                for (var r in data.rules) _this.rules[r] = data.rules[r]
            };
            return sync ? processData(_this.transport({url: url, async: !1})) : _this.transport({url: url, success: processData})
        }, this.loadZoneDataFromObject = function (a) {
            if (a) {
                for (var b in a.zones) _this.zones[b] = a.zones[b];
                for (var c in a.rules) _this.rules[c] = a.rules[c]
            }
        }, this.getAllZones = function () {
            var a = [];
            for (var b in this.zones) a.push(b);
            return a.sort()
        }, this.parseZones = function (a) {
            if (!a) return !1;
            for (var b, c = a.split("\n"), d = [], e = "", f = null, g = null, h = 0; h < c.length; h++) if (b = c[h], b.match(/^\s/) && (b = "Zone " + f + b), b = b.split("#")[0], b.length > 3) switch (d = b.split(/\s+/), e = d.shift()) {
                case"Zone":
                    if (f = d.shift(), _this.zones[f] || (_this.zones[f] = []), d.length < 3) break;
                    d.splice(3, d.length, processZone(d)), d[3] && (d[3] = Date.UTC.apply(null, d[3])), d[0] = -getBasicOffset(d[0]), _this.zones[f].push(d);
                    break;
                case"Rule":
                    g = d.shift(), _this.rules[g] || (_this.rules[g] = []), d[0] = parseInt(d[0], 10), d[1] = parseInt(d[1], 10) || d[1], d[5] = parseTimeString(d[5]), d[6] = getBasicOffset(d[6]), _this.rules[g].push(d);
                    break;
                case"Link":
                    if (_this.zones[d[1]]) throw new Error("Error with Link " + d[1] + ". Cannot create link of a preexisted zone.");
                    isNaN(d[0]) ? _this.zones[d[1]] = d[0] : _this.zones[d[1]] = parseInt(d[0], 10)
            }
            return !0
        }, this.transport = _transport, this.getTzInfo = function (a, b, c) {
            if (this.loadingScheme === this.loadingSchemes.LAZY_LOAD) {
                var d = getRegionForTimezone(b);
                if (!d) throw new Error("Not a valid timezone ID.");
                this.loadZoneFiles(d)
            }
            var e = getZone(a, b), f = +e[0], g = getRule(a, e, c);
            g && (f = getAdjustedOffset(f, g[6]));
            var h = getAbbreviation(e, g);
            return {tzOffset: f, tzAbbr: h}
        }
    }
}.call("undefined" != typeof window ? window : this), min$ = function (a, b, c) {
    function d(a) {
        if (a) {
            this.length = a.length;
            for (var b = 0; b < this.length; b++) this[b] = a[b]
        }
    }

    function e(a) {
        return [1, 9].indexOf(a.nodeType) > -1
    }

    function f(a, c) {
        var e = [];
        return a && "string" != typeof a ? e = a.addClass ? a : [a] : a && (e = (c || b).querySelectorAll(a || "â˜º")), new d(e)
    }

    if (typeof b.querySelectorAll !== c && "addEventListener" in a && a.getComputedStyle && Object.keys) {
        var g = 0, h = {}, i = function (a, b) {
            for (var c = a.length, d = 0; d < c; d++) {
                var e = b.call(a[d], a[d], d);
                if (e === !1) break
            }
            return a
        };
        return d.prototype = {
            each: function (a) {
                return i(this, a)
            }, on: function (a, b) {
                return i(this, function (c) {
                    g++, c.handlers || (c.handlers = {});
                    var d = a.split(".");
                    c.handlers[g] = a, h[g] = {type: d[0], namespace: d[1] || "", fn: b}, c.addEventListener(d[0], b, !1)
                }), this
            }, off: function (a) {
                return i(this, function (b) {
                    var c, d, e = b, f = e.handlers || [], g = "undefined" == typeof a ? [] : a.split(".");
                    g.length > 0 && (c = g[0] || "", d = g[1] || ""), Object.keys(f).forEach(function (a) {
                        (0 === g.length || c === h[a].type && d === h[a].namespace || c === h[a].type && "" === d || d === h[a].namespace && "" === c) && (e.removeEventListener(h[a].type, h[a].fn, !1), delete e.handlers[a], delete h[a])
                    })
                }), this
            }, trigger: function (a, c) {
                var d = b.createEvent("HTMLEvents");
                return d.initEvent(a, !0, !0), d.data = c || {}, d.eventName = a, i(this, function (a) {
                    d.target = a, a.dispatchEvent(d)
                }), this
            }, addClass: function (a) {
                return i(this, function (b) {
                    b.classList ? b.classList.add(a) : f(b).hasClass(a) || (b.className += " " + a)
                }), this
            }, removeClass: function (a) {
                return i(this, function (b) {
                    b.classList ? b.classList.remove(a) : b.className = b.className.replace(new RegExp("(^|\\b)" + a.split(" ").join("|") + "(\\b|$)", "gi"), " ")
                }), this
            }, hasClass: function (a) {
                var b = this.length > 0 ? this[0] : this;
                return e(b) ? b.classList ? b.classList.contains(a) : new RegExp("(^| )" + a + "( |$)", "gi").test(b.className) : this
            }, attr: function (a, b) {
                if (b === c) {
                    var d = this.length > 0 ? this[0] : this;
                    return e(d) ? d.getAttribute(a) : this
                }
                return i(this, function (c) {
                    c.setAttribute(a, b)
                }), this
            }, css: function (b, d) {
                if ("object" == typeof b) return i(this, function (a) {
                    for (var c in b) b.hasOwnProperty(c) && (a.style[c] = b[c])
                }), this;
                if (d === c) {
                    var f = this.length > 0 ? this[0] : this;
                    return e(f) ? a.getComputedStyle(f, null).getPropertyValue(b) : this
                }
                return i(this, function (a) {
                    a.style[b] = d
                }), this
            }, index: function (a) {
                var b = -1;
                if (a) {
                    if (a = a.length > 0 || a.addClass ? a[0] : a, a === c || !e(a)) return b
                } else a = this[0] || this;
                return i(this, function (c, d) {
                    if (c === a) return b = d, !1
                }), b
            }
        }, f.each = i, f.prototype = d.prototype, f
    }
}(window, document);
var A17 = window.A17 || {}, requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
A17.Behaviors = {}, A17.Helpers = {}, A17.UI = {}, A17.timing = 300, A17.timing_index = 500, A17.media_query_in_use = "large", A17.slideshows = [], A17.current_url = window.location.href, A17.is_mobile_device = !1, A17.tween = null, A17.touch = !!("ontouchstart" in window || window.documentTouch && document instanceof DocumentTouch), A17.check_mobile = function () {
    var a = window.navigator.userAgent, b = !!a.match(/Android|webOS|iPhone|iPad|BlackBerry/i);
    return b
}, A17.LoadBehavior = function (a) {
    void 0 === a && (a = document);
    for (var b = a.querySelectorAll("[data-behavior]"), c = -1; b[++c];) for (var d = b[c], e = d.getAttribute("data-behavior"), f = e.split(" "), g = 0, h = f.length; g < h; g++) {
        var i = A17.Behaviors[f[g]];
        "undefined" != typeof i && i.call(d, d)
    }
}, A17.onReady = function () {
    console.log("%c                                     \r\n                                     \r\n           17771                /7A  \r\n          /77777/              /A7/  \r\n         /A777777/             A7/   \r\n         A77A/A777/           171    \r\n        A777/ /A77A/         171     \r\n       1777/   /777A        17A      \r\n      17777777777777A      /7A       \r\n     /777A1111111A7771    /7A/       \r\n    /777A         17771  /77/        \r\n    A777/          7777/ A71         \r\n                                     \r\n                                     \r\n     ", "font-family:monospace"), window.$ = min$, A17.media_query_in_use = A17.Helpers.get_media_query_in_use(), A17.is_mobile_device = A17.check_mobile(), A17.Helpers.spfjs(), A17.LoadBehavior();
    var a;
    $(window).on("resize", function () {
        clearTimeout(a), a = setTimeout(function () {
            A17.Helpers.resized()
        }, 175)
    }), A17.UI.panel.init(), $(document).trigger("page_navigated"), A17.Helpers.analytics()
}, document.addEventListener("DOMContentLoaded", function () {
    A17.onReady()
}), "undefined" == typeof console && (console = {
    log: function () {
    }
}), A17.Behaviors.accordion = function (a) {
    function b(a) {
        return a.classList.contains(k)
    }

    function c(a) {
        var b = a.nextElementSibling;
        !!o && d(o), b.style.maxHeight = b.getAttribute("data-height"), a.classList.add(k), o = a
    }

    function d(a) {
        var b = a.nextElementSibling;
        b.style.maxHeight = "0px", a.classList.remove(k), o = null
    }

    function e(a) {
        b(a) ? d(a) : c(a)
    }

    function f() {
        [].forEach.call(m, function (a) {
            g(a)
        })
    }

    function g(a) {
        a.style.display = "block", a.style.maxHeight = "none";
        var b = Math.max(a.offsetHeight, a.scrollHeight, a.clientHeight);
        a.setAttribute("data-height", b + "px"), o && o == a.previousElementSibling ? a.style.maxHeight = a.getAttribute("data-height") : a.style.maxHeight = "0px"
    }

    function h() {
        l || (setTimeout(function () {
            f()
        }, 200), $(document).on("resized.resized_accordion", f), [].forEach.call(n, function (a) {
            a.addEventListener("click", function (a) {
                a.preventDefault(), e(this)
            })
        }), l = !0)
    }

    function i() {
        l && ($(document).off("resized.resized_accordion", f), l = !1)
    }

    function j() {
        A17.Helpers.is_page("about") ? h() : i()
    }

    var k = "accordion__trigger--opened", l = !1, m = document.querySelectorAll("[data-accordion-content]"), n = document.querySelectorAll("[data-accordion-trigger]"), o = null;
    A17.Helpers.event_once("page_navigated", "accordion", j)
}, A17.Behaviors.additional_content = function (a) {
    function b(a) {
        0 == $(a).hasClass("added") && ($(a).addClass("added"), a.insertAdjacentHTML("beforebegin", a.getAttribute("data-content")), A17.Helpers.imgix_fluid(a.previousElementSibling))
    }

    function c() {
        [].forEach.call(g, function (a) {
            var c = a.getAttribute("data-breakpoint"), d = c.replace(/ /g, "").trim().split(",");
            for (index = 0; index < d.length; ++index) A17.media_query_in_use.indexOf(d[index]) > -1 && b(a)
        })
    }

    function d() {
        i || ($(document).on(h, c), c(), i = !0)
    }

    function e() {
        i && ($(document).off(h, c), i = !1)
    }

    function f() {
        A17.Helpers.is_page("home") ? d() : e()
    }

    var g = a.querySelectorAll("[data-additional-breakpoint]"), h = "media_query_updated.media_query_additional_content", i = !1;
    A17.Helpers.event_once("page_navigated", "additional_content", f)
}, A17.Behaviors.check_email = function (a) {
    function b() {
        if ("undefined" != c.checkValidity) {
            var b = c.checkValidity();
            b ? (a.classList.remove(d), a.classList.add(e)) : (a.classList.add(d), a.classList.remove(e)), "" === c.value && (a.classList.remove(d), a.classList.remove(e))
        }
    }

    var c = document.querySelector("[data-email]"), d = "emailUs__holder--error", e = "emailUs__holder--success";
    $(c).on("blur", b), $(c).on("keyup", b)
}, A17.Behaviors.check_file_upload = function (a) {
    function b(a) {
        if (d.files) {
            var b = d.files;
            if (b.length > 0) {
                if (b[0].size > 512e4) return void d.setCustomValidity("The selected file must not be larger than 5 Mo");
                label_text = a.target.value.split("\\").pop()
            } else label_text = g;
            f.innerHTML = label_text, f.innerHTML == g ? f.classList.remove(h) : f.classList.add(h), d.setCustomValidity("")
        }
    }

    function c() {
        d.value = "", f.innerHTML = g, f.classList.remove(h)
    }

    var d = document.querySelector("[data-file-upload]"), e = document.querySelector("[data-file-reset]"), f = d.nextElementSibling, g = f.innerHTML, h = "emailUs__label--active";
    $(d).on("change", b), $(e).on("click", c)
}, A17.Behaviors.check_message = function (a) {
    function b(b) {
        d.value = a.value, d.clientHeight < d.scrollHeight ? a.style.height = d.scrollHeight + c + "px" : a.style.height = d.clientHeight + c + "px"
    }

    var c = 35;
    a.insertAdjacentHTML("beforebegin", '<textarea disabled class="emailUs__textarea emailUs__textarea--clone" rows="5"></textarea>');
    var d = a.previousSibling;
    d.style.height = a.clientHeight - c, $(a).on("keyup", b), $(a).on("change", b)
}, A17.Behaviors.close_panel = function (a) {
    $(a).on("click", function (a) {
        a.preventDefault(), A17.UI.panel.close()
    })
}, A17.Behaviors.close_panel_overlay = function (a) {
    $(a).on("click", function (a) {
        var b = a.target.getAttribute("data-behavior");
        b && b.indexOf("close_panel_overlay") > -1 && (a.preventDefault(), a.stopPropagation(), A17.UI.panel.close())
    })
}, A17.Behaviors.cover_fluid = function (a) {
    var b = {
        fluidClass: "blockCover__image--fluid",
        autoInsertCSSBestPractices: !1,
        lazyLoad: !1,
        pixelStep: 1,
        updateOnResize: !0,
        updateOnResizeDown: !1,
        fitImgTagToContainerWidth: !0,
        highDPRAutoScaleQuality: !1,
        ignoreDPR: !1,
        onLoad: function (a, b) {
            A17.Helpers.fadein_imgix_images(a)
        }
    };
    A17.Helpers.imgix_fluid(a, b)
}, A17.Behaviors.display_date = function (a) {
    function b() {
        [].forEach.call(c, function (a) {
            var b = new Date, c = a.getAttribute("data-timezone"), e = new timezoneJS.Date(b, c);
            if ("en" == d) {
                var f = e.toString("hh k").toLowerCase();
                f = f.replace(" AM", "").replace(" PM", "").replace(" am", "").replace(" pm", "");
                var g = e.toString("mm k").toLowerCase()
            } else var f = e.toString("HH").toLowerCase(), g = e.toString("mm").toLowerCase();
            f != a.firstChild.textContent && (a.firstChild.textContent = f), g != a.lastChild.textContent && (a.lastChild.textContent = g)
        })
    }

    var c = a.querySelectorAll("[data-timezone]"), d = a.getAttribute("data-date-format"), e = timezoneJS.timezone;
    if (e.loadingScheme = e.loadingSchemes.MANUAL_LOAD, e.zones = {
            "America/New_York": [["296.0333333333333", "-", "LMT", "-2717668562000"], ["300", "US", "E%sT", "-1546387200000"], ["300", "NYC", "E%sT", "-852163200000"], ["300", "US", "E%sT", "-725932800000"], ["300", "NYC", "E%sT", "-63244800000"], ["300", "US", "E%sT", null]],
            "Europe/Paris": [["-9.35", "-", "LMT", "-2486678340000"], ["-9.35", "-", "PMT", "-1855958340000"], ["0", "France", "WE%sT", "-932432400000"], ["-60", "C-Eur", "CE%sT", "-800064000000"], ["0", "France", "WE%sT", "-766616400000"], ["-60", "France", "CE%sT", "252374400000"], ["-60", "EU", "CE%sT", null]]
        }, e.rules = {
            US: [["1918", "1919", "-", "Mar", "lastSun", ["2", "0", "0", null], "60", "D"], ["1918", "1919", "-", "Oct", "lastSun", ["2", "0", "0", null], "0", "S"], ["1942", "only", "-", "Feb", "9", ["2", "0", "0", null], "60", "W", ""], ["1945", "only", "-", "Aug", "14", ["23", "0", "0", "u"], "60", "P", ""], ["1945", "only", "-", "Sep", "lastSun", ["2", "0", "0", null], "0", "S"], ["1967", "2006", "-", "Oct", "lastSun", ["2", "0", "0", null], "0", "S"], ["1967", "1973", "-", "Apr", "lastSun", ["2", "0", "0", null], "60", "D"], ["1974", "only", "-", "Jan", "6", ["2", "0", "0", null], "60", "D"], ["1975", "only", "-", "Feb", "23", ["2", "0", "0", null], "60", "D"], ["1976", "1986", "-", "Apr", "lastSun", ["2", "0", "0", null], "60", "D"], ["1987", "2006", "-", "Apr", "Sun>=1", ["2", "0", "0", null], "60", "D"], ["2007", "max", "-", "Mar", "Sun>=8", ["2", "0", "0", null], "60", "D"], ["2007", "max", "-", "Nov", "Sun>=1", ["2", "0", "0", null], "0", "S"]],
            NYC: [["1920", "only", "-", "Mar", "lastSun", ["2", "0", "0", null], "60", "D"], ["1920", "only", "-", "Oct", "lastSun", ["2", "0", "0", null], "0", "S"], ["1921", "1966", "-", "Apr", "lastSun", ["2", "0", "0", null], "60", "D"], ["1921", "1954", "-", "Sep", "lastSun", ["2", "0", "0", null], "0", "S"], ["1955", "1966", "-", "Oct", "lastSun", ["2", "0", "0", null], "0", "S"]],
            France: [["1916", "only", "-", "Jun", "14", ["23", "0", "0", "s"], "60", "S"], ["1916", "1919", "-", "Oct", "Sun>=1", ["23", "0", "0", "s"], "0", "-"], ["1917", "only", "-", "Mar", "24", ["23", "0", "0", "s"], "60", "S"], ["1918", "only", "-", "Mar", "9", ["23", "0", "0", "s"], "60", "S"], ["1919", "only", "-", "Mar", "1", ["23", "0", "0", "s"], "60", "S"], ["1920", "only", "-", "Feb", "14", ["23", "0", "0", "s"], "60", "S"], ["1920", "only", "-", "Oct", "23", ["23", "0", "0", "s"], "0", "-"], ["1921", "only", "-", "Mar", "14", ["23", "0", "0", "s"], "60", "S"], ["1921", "only", "-", "Oct", "25", ["23", "0", "0", "s"], "0", "-"], ["1922", "only", "-", "Mar", "25", ["23", "0", "0", "s"], "60", "S"], ["1922", "1938", "-", "Oct", "Sat>=1", ["23", "0", "0", "s"], "0", "-"], ["1923", "only", "-", "May", "26", ["23", "0", "0", "s"], "60", "S"], ["1924", "only", "-", "Mar", "29", ["23", "0", "0", "s"], "60", "S"], ["1925", "only", "-", "Apr", "4", ["23", "0", "0", "s"], "60", "S"], ["1926", "only", "-", "Apr", "17", ["23", "0", "0", "s"], "60", "S"], ["1927", "only", "-", "Apr", "9", ["23", "0", "0", "s"], "60", "S"], ["1928", "only", "-", "Apr", "14", ["23", "0", "0", "s"], "60", "S"], ["1929", "only", "-", "Apr", "20", ["23", "0", "0", "s"], "60", "S"], ["1930", "only", "-", "Apr", "12", ["23", "0", "0", "s"], "60", "S"], ["1931", "only", "-", "Apr", "18", ["23", "0", "0", "s"], "60", "S"], ["1932", "only", "-", "Apr", "2", ["23", "0", "0", "s"], "60", "S"], ["1933", "only", "-", "Mar", "25", ["23", "0", "0", "s"], "60", "S"], ["1934", "only", "-", "Apr", "7", ["23", "0", "0", "s"], "60", "S"], ["1935", "only", "-", "Mar", "30", ["23", "0", "0", "s"], "60", "S"], ["1936", "only", "-", "Apr", "18", ["23", "0", "0", "s"], "60", "S"], ["1937", "only", "-", "Apr", "3", ["23", "0", "0", "s"], "60", "S"], ["1938", "only", "-", "Mar", "26", ["23", "0", "0", "s"], "60", "S"], ["1939", "only", "-", "Apr", "15", ["23", "0", "0", "s"], "60", "S"], ["1939", "only", "-", "Nov", "18", ["23", "0", "0", "s"], "0", "-"], ["1940", "only", "-", "Feb", "25", ["2", "0", "0", null], "60", "S"], ["1941", "only", "-", "May", "5", ["0", "0", "0", null], "120", "M", ""], ["1941", "only", "-", "Oct", "6", ["0", "0", "0", null], "60", "S"], ["1942", "only", "-", "Mar", "9", ["0", "0", "0", null], "120", "M"], ["1942", "only", "-", "Nov", "2", ["3", "0", "0", null], "60", "S"], ["1943", "only", "-", "Mar", "29", ["2", "0", "0", null], "120", "M"], ["1943", "only", "-", "Oct", "4", ["3", "0", "0", null], "60", "S"], ["1944", "only", "-", "Apr", "3", ["2", "0", "0", null], "120", "M"], ["1944", "only", "-", "Oct", "8", ["1", "0", "0", null], "60", "S"], ["1945", "only", "-", "Apr", "2", ["2", "0", "0", null], "120", "M"], ["1945", "only", "-", "Sep", "16", ["3", "0", "0", null], "0", "-"], ["1976", "only", "-", "Mar", "28", ["1", "0", "0", null], "60", "S"], ["1976", "only", "-", "Sep", "26", ["1", "0", "0", null], "0", "-"]],
            "C-Eur": [["1916", "only", "-", "Apr", "30", ["23", "0", "0", null], "60", "S"], ["1916", "only", "-", "Oct", "1", ["1", "0", "0", null], "0", "-"], ["1917", "1918", "-", "Apr", "Mon>=15", ["2", "0", "0", "s"], "60", "S"], ["1917", "1918", "-", "Sep", "Mon>=15", ["2", "0", "0", "s"], "0", "-"], ["1940", "only", "-", "Apr", "1", ["2", "0", "0", "s"], "60", "S"], ["1942", "only", "-", "Nov", "2", ["2", "0", "0", "s"], "0", "-"], ["1943", "only", "-", "Mar", "29", ["2", "0", "0", "s"], "60", "S"], ["1943", "only", "-", "Oct", "4", ["2", "0", "0", "s"], "0", "-"], ["1944", "1945", "-", "Apr", "Mon>=1", ["2", "0", "0", "s"], "60", "S"], ["1944", "only", "-", "Oct", "2", ["2", "0", "0", "s"], "0", "-"], ["1945", "only", "-", "Sep", "16", ["2", "0", "0", "s"], "0", "-"], ["1977", "1980", "-", "Apr", "Sun>=1", ["2", "0", "0", "s"], "60", "S"], ["1977", "only", "-", "Sep", "lastSun", ["2", "0", "0", "s"], "0", "-"], ["1978", "only", "-", "Oct", "1", ["2", "0", "0", "s"], "0", "-"], ["1979", "1995", "-", "Sep", "lastSun", ["2", "0", "0", "s"], "0", "-"], ["1981", "max", "-", "Mar", "lastSun", ["2", "0", "0", "s"], "60", "S"], ["1996", "max", "-", "Oct", "lastSun", ["2", "0", "0", "s"], "0", "-"]],
            EU: [["1977", "1980", "-", "Apr", "Sun>=1", ["1", "0", "0", "u"], "60", "S"], ["1977", "only", "-", "Sep", "lastSun", ["1", "0", "0", "u"], "0", "-"], ["1978", "only", "-", "Oct", "1", ["1", "0", "0", "u"], "0", "-"], ["1979", "1995", "-", "Sep", "lastSun", ["1", "0", "0", "u"], "0", "-"], ["1981", "max", "-", "Mar", "lastSun", ["1", "0", "0", "u"], "60", "S"], ["1996", "max", "-", "Oct", "lastSun", ["1", "0", "0", "u"], "0", "-"]]
        }, c) {
        b();
        setInterval(b, 3e3)
    }
}, A17.Behaviors.distribute_clients = function (a) {
    function b() {
        [].forEach.call(e, function (a) {
            var b = 99999999, c = 0;
            for (i = 0; i < g; i++) k[i].total < b && (b = k[i].total, c = i);
            k[c].total += parseInt(a.getAttribute("data-clients-items")) + 4, k[c].lists.push(a)
        })
    }

    function c() {
        for (e = 0; e < g; e++) {
            var c = {index: e, lists: [], total: 0};
            k.push(c)
        }
        b();
        for (var d = 0; d < g; d++) {
            var c = document.createElement("div");
            c.className = "clientsList__col";
            for (var e = 0; e < k[d].lists.length; e++) c.appendChild(k[d].lists[e]);
            f.appendChild(c)
        }
        a.innerHTML = "", a.classList.add(j), a.appendChild(f)
    }

    function d() {
        var b = window.innerWidth, d = g;
        g = b > 767 ? 3 : 2, d != g && (h = 0, k = [], f = document.createDocumentFragment(), a.classList.remove(j), c())
    }

    var e = document.querySelectorAll("[data-clients-items]"), f = document.createDocumentFragment(), g = 0, h = 0, j = "clientsList--distributed", k = [];
    A17.Helpers.event_once("panel_opened", "distribute_clients", function () {
        $(document).on("resized.resized_clients", d), d()
    }), A17.Helpers.event_once("panel_closed", "distribute_clients", function () {
        $(document).off("resized.resized_clients", d)
    }), A17.Helpers.event_once("page_navigated", "distribute_clients", function () {
        $(document).off("resized.resized_clients", d), A17.Helpers.is_page("clients") && ($(document).on("resized.resized_clients", d), d())
    })
}, A17.Behaviors.email_form = function (a) {
    function b(a) {
        var a = a || null;
        o = 0, a && c(a.target), [].forEach.call(l, function (a) {
            if ("undefined" != a.checkValidity) {
                var b = a.checkValidity();
                b || o++
            }
        }), o > 0 ? m.disabled = !0 : m.disabled = !1
    }

    function c(a) {
        a.checkValidity();
        a.classList.remove(t), a.required && "" === a.value && "blur" === event.type && a.classList.add(t)
    }

    function d() {
        var b = a.querySelectorAll("input:not([name='_token']), textarea"), c = document.querySelector("[data-file-reset]");
        c.click(), [].forEach.call(b, function (a) {
            a.value = ""
        }), k()
    }

    function e() {
        var b = "emailUs__holder--error", c = "emailUs__holder--success", d = a.querySelector("." + b), e = a.querySelector("." + c);
        d ? d.classList.remove(b) : e && e.classList.remove(c)
    }

    function f() {
        z.classList.remove(u), setTimeout(function () {
            z.classList.remove(s), z.classList.remove(r), z.firstChild.textContent = y
        }, 350)
    }

    function g() {
        var b = "", c = a.querySelector("select[name='subject']"), d = a.querySelector("select[name='studio']");
        return c && (b = c.value), c && d && (b += " - "), d && (b += d.value), b
    }

    function h(c) {
        if (z.classList.remove(u), z.classList.remove(s), z.classList.remove(r), c.status >= 200 && c.status < 300) {
            v = r, y = x, d(), e();
            var h = g();
            "undefined" != typeof ga && ga("send", "event", "Email", "success email", h)
        } else {
            console.warn("Parsing failed", c.statusText), v = s, y = w;
            var h = g();
            "undefined" != typeof ga && ga("send", "event", "Email", "error email", h)
        }
        z.firstChild.textContent = y, z.classList.add(v), z.classList.add(u), a.classList.remove(q), m.textContent = m.getAttribute("data-default"), b(), setTimeout(f, 5e3)
    }

    function i(a) {
        return p ? z : void(void 0 != window.event ? window.event.cancelBubble = !0 : a.cancelBubble = !0)
    }

    function j() {
        p = !0, A17.UI.panel.lock()
    }

    function k() {
        p = !1, A17.UI.panel.unlock()
    }

    var l = (document.documentElement, a.querySelectorAll("[required]")), m = a.querySelector("button[type='submit']"), n = a.querySelector("[data-form-validator]"), o = 0, p = !1,
        q = "emailUs--loading", r = "emailTicker--success", s = "emailTicker--error", t = "emailUs__field--required", u = "emailTicker--active", v = r, w = a.getAttribute("data-email-error"),
        x = a.getAttribute("data-email-thanks"), y = x, z = document.querySelector("[data-email-message]");
    a.addEventListener("submit", function (b) {
        if (b.preventDefault(), a.classList.contains(q)) return !1;
        a.classList.add(q), m.textContent = m.getAttribute("data-loading");
        var c = new FormData(a);
        fetch(a.action, {method: "POST", credentials: "include", body: c}).then(function (a) {
            h(a)
        })
    }), b(), [].forEach.call(l, function (a) {
        $(a).on("blur", b), $(a).on("keyup", function (a) {
            j(), b()
        }), $(a).on("change", function (a) {
            j(), b(a)
        })
    }), $(n).on("click", function (a) {
        b(), [].forEach.call(l, function (a) {
            a.checkValidity();
            a.classList.remove(t), a.required && "" === a.value && a.classList.add(t)
        })
    }), window.onbeforeunload = i, A17.Helpers.event_once("panel_closed", "email_form", function () {
        k()
    })
}, A17.Behaviors.imgix_loading = function (a) {
    A17.Helpers.imgix_lazy(a), A17.Helpers.imgix_fluid(a)
}, A17.Behaviors.index_filter = function (a) {
    function b() {
        m.classList.contains(k) || e()
    }

    function c() {
        f()
    }

    function d(a) {
        var b = g.getAttribute("data-filter-active");
        m.classList.remove("body--filter" + b), m.classList.add("body--filter" + a), g.classList.remove("content--filter" + b), g.classList.add("content--filter" + a), g.setAttribute("data-filter-active", a)
    }

    function e() {
        m.classList.add(i)
    }

    function f() {
        A17.touch || ($(a).off("mouseover.mouseover_index_filter", b), setTimeout(function () {
            $(a).on("mouseover.mouseover_index_filter", b)
        }, 200)), m.classList.remove(i), $(document).off("scroll.scroll_index_filter", f)
    }

    var g = document.getElementById("contentIndex"), h = a.querySelectorAll("[data-filter-bt]"), i = "body--headerHover", j = "body--headerUp", k = "body--indexReloading", l = 100, m = document.body;
    [].forEach.call(h, function (a) {
        $(a).on("click", function (b) {
            if (b.preventDefault(), m.classList.contains(k)) return !1;
            if (!m.classList.contains(i) && a.classList.contains("headerFilter__links")) return e(), $(document).on("scroll.scroll_index_filter", f), !1;
            var c = b.target;
            b.target.getAttribute("data-filter-url") || (c = b.target.parentNode);
            var g = 60, h = 70;
            A17.media_query_in_use.indexOf("xsmall") > -1 && (h = g);
            var n = document.getElementById("contentIndexProjects");
            if (n) {
                var o = n && A17.Helpers.offset(n).top - h;
                d(c.getAttribute("data-filter-bt")), f(), A17.Helpers.scroll_to_y({
                    el: document, offset: o, duration: A17.timing, easing: "easeInOut", onComplete: function () {
                        A17.media_query_in_use.indexOf("xsmall") > -1 && window.pageYOffset > l && m.classList.add(j)
                    }
                })
            }
        })
    }), A17.touch || a.hasAttribute("data-filter-dropdown") && ($(a).on("mouseover.mouseover_index_filter", b), $(a).on("mouseleave.mouseleave_index_filter", c))
}, A17.Behaviors.keyboard_panel_nav = function (a) {
    function b() {
        $(document).on("keydown.keydown_keyboard_panel_nav", d)
    }

    function c() {
        $(document).off("keydown.keydown_keyboard_panel_nav", d)
    }

    function d(b) {
        var c = null != b.keyCode ? b.keyCode : b.charCode, d = a.querySelector("[data-next-panel]"), e = a.querySelector("[data-previous-panel]");
        c !== A17.Helpers.keycodes.esc || A17.Helpers.is_page("contact") || A17.UI.panel.close(), c === A17.Helpers.keycodes.right && d && $(d).trigger("click"), c === A17.Helpers.keycodes.left && e && $(e).trigger("click")
    }

    A17.Helpers.event_once("panel_opened", "keyboard_panel_nav", function () {
        b()
    }), A17.Helpers.event_once("panel_closed", "keyboard_panel_nav", function () {
        c()
    })
}, A17.Behaviors.load_index = function (a) {
    function b() {
        setTimeout(function () {
            g.classList.remove(d)
        }, 300), A17.media_query_in_use.indexOf("xsmall") > -1 && window.pageYOffset > f && g.classList.add(e)
    }

    var c = document.querySelector("[data-filter-all]"), d = "body--indexReloading", e = "body--headerUp", f = 100, g = document.body;
    c && spf.load(c.getAttribute("data-filter-url")), A17.Helpers.event_once("content_loaded", "index_filter", b)
}, A17.Behaviors.navigate_index = function (a) {
    function b(a) {
        $(a).on("click", function (b) {
            b.preventDefault(), A17.Helpers.scroll_to_y({
                el: document, offset: 0, duration: A17.timing, easing: "easeInOut", onComplete: function () {
                    spf.navigate(a.getAttribute("href"))
                }
            })
        })
    }

    if (A17.Helpers.matches(a, "a")) b(a); else {
        var c = a.querySelectorAll("a");
        [].forEach.call(c, function (a) {
            b(a)
        })
    }
}, A17.Behaviors.newsletter_form = function (a) {
    function b(a) {
        for (var d = !1, e = a.target; e; e = e.parentNode) "footer" === e.id && (d = !0);
        !d && h > 0 && (c.classList.remove(g), document.removeEventListener("click", b)), h++
    }

    var c = document.querySelector("[data-newsletter-section]"), d = c.querySelector("[data-newsletter-email]"), e = a.getAttribute("action"), f = "newsletter--loading", g = "newsletter--active",
        h = 0, i = document.querySelector("[data-newsletter-trigger]");
    i.addEventListener("click", function (a) {
        a.preventDefault(), c.classList.add(g), setTimeout(function () {
            d.focus()
        }, A17.timing), h = 0, document.addEventListener("click", b)
    }), a.addEventListener("submit", function (b) {
        if (b.preventDefault(), c.classList.contains(f)) return !1;
        c.classList.add(g);
        var d = a.querySelector("[data-newsletter-email]"), h = document.createElement("script");
        h.setAttribute("data-newsletter-script", "1"), h.src = e + "?callback=A17%2EHelpers%2Enewsletter&" + d.name + "=" + d.value, document.getElementsByTagName("head")[0].appendChild(h)
    })
}, A17.Helpers.newsletter = function (a) {
    function b() {
        c.classList.remove(g), c.classList.remove(h), d.textContent = d.getAttribute("data-default")
    }

    var c = document.querySelector("[data-newsletter-section]"), d = document.querySelector("[data-newsletter-message]"), e = document.querySelector("[data-newsletter-script]"),
        f = c.querySelector("[data-newsletter-email]"), g = "newsletter--success", h = "newsletter--error", i = "newsletter--loading", j = c.getAttribute("data-error"),
        k = c.getAttribute("data-thanks");
    e && e.parentNode && e.parentNode.removeChild(e), a && (b(), f.value = "", 400 === a.Status ? (g = h, k = j, "undefined" != typeof ga && ga("send", "event", "Newsletter", "error", "Newsletter error")) : "undefined" != typeof ga && ga("send", "event", "Newsletter", "success", "Newsletter success"), c.classList.add(g), d.textContent = k, c.classList.remove(i), setTimeout(b, 5e3))
}, A17.Behaviors.open_panel_in_panel = function (a) {
    function b() {
        [].forEach.call(d, function (a) {
            var b = a.getAttribute("href");
            b.indexOf(c) > -1 && A17.Behaviors.show_panel(a)
        })
    }

    var c = a.getAttribute("data-work-pattern"), d = a.querySelectorAll("a");
    A17.Helpers.event_once("panel_opened", "open_panel_in_panel", function () {
        b()
    })
}, A17.Behaviors.prefetch_url = function (a) {
    A17.Helpers.is_page(a.getAttribute("data-page-id")) || spf.prefetch(a.href)
}, A17.Behaviors.preload_panels = function (a) {
    var b = [], c = document.querySelectorAll("[data-preload-panel]");
    [].forEach.call(c, function (a) {
        b.push({id: a.getAttribute("href")})
    }), A17.Helpers.preload_queue(b)
}, A17.Behaviors.preload_work = function () {
    var a = A17.UI.panel.refresh();
    A17.Helpers.preload_queue(a)
}, A17.Behaviors.randomize_home = function (a) {
    var b = ["first", "small", "square", "last"], c = a.children, d = document.createDocumentFragment();
    return 0 != c.length && (c = Array.prototype.slice.call(c), c = A17.Helpers.shuffle(c), [].forEach.call(c, function (a, c) {
        c < b.length && (d.appendChild(a), a.className = "feature__item feature__item--" + b[c])
    }), a.innerHTML = "", a.appendChild(d), a.classList.add("feature--randomized"), A17.Behaviors.imgix_loading(a), void A17.Behaviors.preload_work(a))
}, A17.Behaviors.randomize_logos = function (a) {
    var b = a.children, c = 0, d = document.createDocumentFragment();
    for (b = Array.prototype.slice.call(b), b = A17.Helpers.shuffle(b); c < b.length;) d.appendChild(b[c]), ++c;
    a.innerHTML = "", a.appendChild(d), a.classList.add("blockLogos--randomized")
}, A17.Behaviors.resize_cover = function (a) {
    function b() {
        g = a.querySelector("[data-cover]"), g && ($(document).on("resized.resized_cover", d), d())
    }

    function c() {
        $(document).off("resized.resized_cover", d)
    }

    function d() {
        var a = e(g, .5624);
        g.style.paddingBottom = a + "px"
    }

    function e(a, b) {
        var c = (window.innerWidth, window.innerHeight), d = a.parentNode.offsetWidth * b;
        d = Math.min(d, f);
        var e = d / 3 * 2, g = c - 70 - .2 * c, h = Math.min(d, g);
        return h = Math.max(e, h)
    }

    var f = 700, g = a.querySelector("[data-cover]");
    A17.Helpers.event_once("panel_opened", "resize_cover", function () {
        c(), b()
    }), A17.Helpers.event_once("panel_closed", "resize_cover", function () {
        c()
    }), A17.Helpers.event_once("page_navigated", "resize_cover", function () {
        c(), (A17.Helpers.is_page("casestudy") || A17.Helpers.is_page("people")) && b()
    })
}, A17.Behaviors.scroll_to_positions = function (a) {
    $(a).on("click", function (a) {
        a.preventDefault();
        var b = document.getElementById("positions"), c = b && A17.Helpers.offset(b).top - 70;
        A17.Helpers.scroll_to_y({el: document, offset: c, duration: A17.timing, easing: "easeInOut"})
    })
}, A17.Behaviors.scroll_top = function (a) {
    $(a).on("click", function (a) {
        a.preventDefault(), A17.Helpers.scroll_to_y({el: document, offset: 0, duration: A17.timing, easing: "easeInOut"})
    })
}, A17.Behaviors.show_panel = function (a) {
    $(a).on("click", function (b) {
        b.preventDefault(), A17.UI.panel.open({id: a.getAttribute("href")})
    })
}, A17.Behaviors.slideshow = function (a) {
    function b() {
        if ([].forEach.call(k, function (a) {
                var b = a.children, c = b.length, d = a.classList.contains(r);
                if (a.getAttribute("data-max-ratio")) {
                    var e = a.getAttribute("data-max-ratio"), f = parseInt(e.split("x")[1]), g = parseInt(e.split("x")[0]);
                    a.style.height = "0", a.style.paddingBottom = f / g * 100 + "%"
                }
                if (c > 1) {
                    a.setAttribute("data-slideshow-index", l), m && 2 == c && d && ([].forEach.call(b, function (b) {
                        a.appendChild(b.cloneNode(!0))
                    }), b = a.children, c = b.length);
                    var h = {container: a, timeout: null, current: 0, timing: 0, transition: d, max: c, imgs: []};
                    [].forEach.call(b, function (a) {
                        h.imgs.push(a)
                    }), A17.slideshows.push(h), l++
                } else 1 == c && [].forEach.call(b, function (a) {
                    "IMG" == a.tagName && a.classList.add(n)
                })
            }), l = A17.slideshows.length) for (var a = 0; a < l; a++) g(A17.slideshows[a], A17.slideshows[a].imgs.length), [].forEach.call(A17.slideshows[a].imgs, function (b, c) {
            b.classList.add(s), "IMG" == b.tagName ? 0 == c ? b.classList.add(n) : b.classList.add(o) : e(A17.slideshows[a].container)
        });
        c()
    }

    function c() {
        A17.Helpers.imgix_fluid(a, {
            updateOnResizeDown: !1, ignoreDPR: !1, onLoad: function (a, b) {
                A17.Helpers.show_imgix_images(a);
                var c = j(a, t);
                c && d(c)
            }
        }), m && A17.Helpers.imgix_lazy(a, {
            fluidClass: o, onLoad: function (a, b) {
                A17.Helpers.show_imgix_images(a);
                var c = j(a, t);
                c && d(c), a.parentNode && e(a.parentNode)
            }
        })
    }

    function d(a) {
        a.classList.contains(u) || a.classList.add(u)
    }

    function e(a) {
        if (!m) return !1;
        if (a.getAttribute("data-slideshow-index")) {
            var b = a.getAttribute("data-slideshow-index"), c = A17.slideshows[b];
            c && null === c.timeout && (c.timing = parseInt(c.container.getAttribute("data-slideshow-timing")), c.timeout = setTimeout(f, c.timing, A17.slideshows.indexOf(c)))
        }
    }

    function f(a) {
        if (!A17.slideshows.length) return !1;
        var b = A17.slideshows[a], c = (b.container, b.current);
        b.current < b.max - 1 ? b.current++ : b.current = 0, g(b, c), b.timeout = setTimeout(f, b.timing, a)
    }

    function g(a, b) {
        a.transition ? i(a.imgs, a.current, b) : h(a.imgs, a.current)
    }

    function h(a, b) {
        [].forEach.call(a, function (a, c) {
            c == b ? a.classList.add(q) : a.classList.remove(q)
        })
    }

    function i(a, b, c) {
        [].forEach.call(a, function (a, d) {
            d == c ? (a.classList.add(p), a.classList.remove(q)) : d == b ? (a.classList.add(q), a.classList.remove(p)) : (a.classList.remove(q), a.classList.remove(p))
        })
    }

    function j(a, b) {
        for (; (a = a.parentElement) && !a.classList.contains(b);) ;
        return a
    }

    var k = document.querySelectorAll("[data-slideshow]"), l = 0, m = !0, n = "img--fluid", o = "img--lazySlideshow", p = "slideshow--prev", q = "slideshow--current", r = "slideshow--fade",
        s = "slideshow--item", t = "blockImage", u = "blockImage--loaded";
    A17.Helpers.event_once("panel_opened", "slideshow", function () {
        A17.Helpers.reset_slideshows(), b()
    }), A17.Helpers.event_once("panel_closed", "slideshow", function () {
        A17.Helpers.reset_slideshows()
    }), A17.Helpers.event_once("page_navigated", "slideshow", function () {
        A17.Helpers.reset_slideshows(), A17.Helpers.is_page("casestudy") && b()
    })
}, A17.Behaviors.slideshow_office = function (a) {
    function b() {
        if ([].forEach.call(g, function (a) {
                var b = a.children, d = b.length;
                if (d > 1) {
                    2 == d && a.classList.contains("slideshow--fade") && ([].forEach.call(b, function (b) {
                        a.appendChild(b.cloneNode(!0))
                    }), b = a.children, d = b.length);
                    var e = d > 1 ? c(0, d - 1) : 0, a = {current: e, max: d, imgs: []};
                    [].forEach.call(b, function (b) {
                        a.imgs.push(b)
                    }), h.push(a), i++
                } else f(b, 0, 1)
            }), h.length > 0) {
            for (var a = 0; a < h.length; a++) f(h[a].imgs, h[a].current, h[a].imgs.length);
            null === k && (k = setTimeout(d, j))
        }
        A17.Helpers.imgix_fluid(document.getElementById("content"), {
            onLoad: function (a, b) {
                A17.Helpers.show_imgix_images(a)
            }
        })
    }

    function c(a, b) {
        return Math.floor(Math.random() * (b - a)) + a
    }

    function d() {
        if (!h.length) return !1;
        for (var a = 0; a < i; a++) {
            var b = h[a], c = b.current;
            b.current < b.max - 1 ? b.current++ : b.current = 0, f(h[a].imgs, b.current, c)
        }
        k = setTimeout(d, j)
    }

    function e() {
        clearTimeout(k), k = null, h && (h = []), i = 0
    }

    function f(a, b, c) {
        [].forEach.call(a, function (a, d) {
            d == c ? (a.classList.add(l), a.classList.remove(m)) : d == b ? (a.classList.add(m), a.classList.remove(l)) : (a.classList.remove(m), a.classList.remove(l))
        })
    }

    var g = document.querySelectorAll("[data-slideshow]"), h = [], i = 0, j = 6e3, k = null, l = "slideshow--prev", m = "slideshow--current";
    A17.Helpers.event_once("panel_opened", "slideshow_office", function () {
        null !== k && e()
    }), A17.Helpers.event_once("panel_closed", "slideshow_office", function () {
        null !== k && e(), A17.Helpers.is_page("contact") && b()
    }), A17.Helpers.event_once("page_navigated", "slideshow_office", function () {
        null !== k && e(), A17.Helpers.is_page("contact") && b()
    })
}, A17.Behaviors.sticky_index = function (a) {
    function b() {
        j = window.pageYOffset, requestAnimationFrame(c)
    }

    function c() {
        if (j >= m) {
            if (n) return !1;
            document.body.classList.add(o), n = !0
        } else {
            if (!n) return !1;
            document.body.classList.remove(o), n = !1
        }
    }

    function d() {
        if (a = document.getElementById(i)) {
            var b = A17.Helpers.offset(a).top;
            (b || 0 === b) && (m = Math.max(0, b - l))
        }
    }

    function e() {
        a = document.getElementById(i), a && (n = !1, d(), c())
    }

    function f() {
        k || (n = !1, $(document).on("resized.resized_index", e), $(document).on("scroll.scroll_index", b), d(), b(), k = !0)
    }

    function g() {
        k && ($(document).off("resized.resized_index", e), $(document).off("scroll.scroll_index", b), k = !1)
    }

    function h() {
        A17.Helpers.is_page("index") ? f() : g()
    }

    var i = "contentIndexProjects", a = document.getElementById(i), j = 0, k = !1, l = 75, m = a && A17.Helpers.offset(a).top - l, n = !1, o = "body--headerFilter";
    A17.Helpers.event_once("content_loaded", "sticky_index", e), A17.Helpers.event_once("page_navigated", "sticky_index", h)
}, A17.Behaviors.sticky_up = function (a) {
    function b() {
        h = g > window.pageYOffset && window.pageYOffset > k, g = window.pageYOffset, requestAnimationFrame(c)
    }

    function c() {
        if (h) {
            if (i) return !1;
            document.body.classList.add(l), i = !0
        } else {
            if (!i) return !1;
            document.body.classList.remove(l), i = !1
        }
    }

    function d() {
        j || ($(document).on("scroll.scroll_sticky", b), b(), j = !0)
    }

    function e() {
        j && ($(document).off("scroll.scroll_sticky", b), h = !1, j = !1, c())
    }

    function f() {
        A17.media_query_in_use.indexOf("xsmall") > -1 ? d() : e()
    }

    var g = 0, h = 0, i = !1, j = !1, k = 100, l = "body--headerUp";
    f(), $(document).on("media_query_updated.media_query_sticky_up", f)
}, A17.Behaviors.swap_clients_logos = function (a) {
    function b() {
        [].forEach.call(g, function (a) {
            a.style["-webkit-filter"] = "invert(1)", a.style.filter = "invert(1)"
        })
    }

    function c() {
        [].forEach.call(g, function (a) {
            a.style["-webkit-filter"] = "", a.style.filter = ""
        })
    }

    function d() {
        $(document).on("panel_opened.panel_opened_clients_logo", b), $(document).on("panel_closed.panel_closed_clients_logo", c)
    }

    function e() {
        $(document).off("panel_opened.panel_opened_clients_logo", b), $(document).off("panel_closed.panel_closed_clients_logo", c)
    }

    function f() {
        A17.Helpers.is_page("about") ? d() : e()
    }

    var g = a.querySelectorAll("[data-client-logo-url]"), h = 1;
    void 0 !== window.devicePixelRatio && (h = window.devicePixelRatio), h <= 1 && [].forEach.call(g, function (a) {
        a.style.backgroundImage = "url(" + a.getAttribute("data-client-logo-non-retina-url") + ")"
    }), A17.Helpers.event_once("page_navigated", "clients_logos", f)
}, A17.Behaviors.swap_emails = function (a) {
    var b = a.querySelectorAll("[data-swap-email]"), c = navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage, d = "data-swap-email-" + c;
    [].forEach.call(b, function (a) {
        a.hasAttribute(d) && (a.href = "mailto:" + a.getAttribute(d), a.innerHTML = a.getAttribute(d))
    })
}, A17.Behaviors.swap_offices = function (a) {
    var b = navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage, c = a.querySelector("[data-swap-office-" + b + "]");
    if (c) {
        var d = document.createDocumentFragment(), e = a.querySelector("*");
        d.appendChild(c), d.appendChild(e), e.classList.add("office--secondary"), e.classList.remove("office--primary"), c.classList.remove("office--secondary"), c.classList.add("office--primary"), a.innerHTML = "", a.appendChild(d), a.classList.add("office__container--swap")
    } else a.classList.add("office__container--swap")
}, A17.Behaviors.ticker = function (a) {
    function b() {
        g = window.pageYOffset, requestAnimationFrame(c)
    }

    function c() {
        if (0 === g) {
            if (h) return !1;
            document.body.classList.add(j), h = !0
        } else {
            if (!h) return !1;
            document.body.classList.remove(j), h = !1
        }
    }

    function d() {
        i || (h = !1, $(document).on("scroll.scroll_ticker", b), b(), i = !0)
    }

    function e() {
        i && ($(document).off("scroll.scroll_ticker", b), i = !1)
    }

    function f() {
        A17.Helpers.is_page("home") ? d() : e()
    }

    var g = 0, h = !1, i = !1, j = "ticker--up";
    A17.Helpers.event_once("page_navigated", "ticker", f)
}, A17.Behaviors.toggle_clocks = function (a) {
    function b() {
        A17.Helpers.is_page("detail") ? (e = !0, a.classList.add(d)) : A17.Helpers.is_page("index") || c()
    }

    function c() {
        return !!e && (a.classList.remove(d), void(e = !1))
    }

    var d = "hide", e = !1;
    A17.Helpers.event_once("page_navigated", "toggle_clocks", b), A17.Helpers.event_once("index_opened", "toggle_clocks", c)
}, A17.Behaviors.toggle_redline = function (a) {
    function b() {
        if (a.classList.contains(d)) return !1;
        for (var b = 1480, c = document.createDocumentFragment(); b--;) {
            var e = document.createElement("div");
            e.className = "redline__pixel", e.style.right = 1479 - b + "px", e.style.top = 1479 - b + "px", c.appendChild(e)
        }
        a.appendChild(c), a.classList.add(d)
    }

    function c() {
        a.innerHTML = "", a.classList.remove(d)
    }

    var d = "redline--visible";
    localStorage && localStorage.getItem("redline") && b(), $(document).on("keydown.keydown_toggle_redline", function (e) {
        var f = null != e.keyCode ? e.keyCode : e.charCode;
        f == A17.Helpers.keycodes.forwardslash && (a.classList.contains(d) ? (c(), localStorage && localStorage.removeItem("redline")) : (b(), localStorage && localStorage.setItem("redline", "show")))
    }), A17.Helpers.event_once("page_navigated", "toggle_redline", function () {
        var a = document.querySelector("[data-404]");
        a ? b() : localStorage && (localStorage.getItem("redline") || c())
    })
}, A17.Behaviors.track_apply = function (a) {
    $(a).on("click", function (b) {
        "undefined" != typeof ga && ga("send", "event", "Position", a.getAttribute("data-track-position"))
    })
}, A17.Behaviors.track_mailto = function (a) {
    $(a).on("click", function (b) {
        "undefined" != typeof ga && ga("send", "event", "Email", a.getAttribute("data-track-label"))
    })
}, A17.Behaviors.update_tagline = function (a) {
    function b() {
        var b = a.options[a.selectedIndex];
        c.innerHTML = b.getAttribute("data-tagline"), "press" === b.value ? d.placeholder = d.getAttribute("data-placeholder-press") : d.placeholder = d.getAttribute("data-placeholder-default"), "everything" === b.value ? (d.required = !1, d.classList.remove("emailUs__field--required")) : d.required = !0, e.className = f, e.classList.add(f + "--" + b.value)
    }

    var c = document.querySelector("[data-secondary-tagline]"), d = document.querySelector("[data-placeholder-press]"), e = document.querySelector("[data-tip]"), f = "emailUs__tip";
    $(a).on("change", b), b()
}, A17.Helpers.analytics = function () {
    return "undefined" != typeof ga && ($(document).on("panel_opened.panel_opened_analytics", function () {
        ga("set", "page", location.pathname), ga("send", "pageview"), ga("send", "event", "Panel", "open", "Open panel")
    }), $(document).on("panel_closed.panel_closed_analytics", function () {
        ga("set", "page", location.pathname), ga("send", "event", "Panel", "close", "Close panel")
    }), $(document).on("page_navigated.page_navigated_analytics", function () {
        ga("set", "page", location.pathname), ga("send", "pageview")
    }), void $(document).on("content_loaded.content_loaded_analytics", function () {
        ga("send", "event", "Filter", "load", "Filter index")
    }))
}, A17.Helpers.event_once = function (a, b, c) {
    var b = b && "" != b ? "." + a + "_" + b : "";
    $(document).off(a + b, c), $(document).on(a + b, c)
}, A17.Helpers.get_media_query_in_use = function () {
    function a(a) {
        return a.replace(/'/gi, "").replace(/"/gi, "")
    }

    return window.opera ? a(window.getComputedStyle(document.body, ":after").getPropertyValue("content")) || "large" : window.getComputedStyle ? a(window.getComputedStyle(document.head, null).getPropertyValue("font-family")) || "large" : "large"
}, A17.Helpers.imgix_fluid = function (a, b) {
    var c = {
        fluidClass: "img--fluid",
        autoInsertCSSBestPractices: !1,
        lazyLoad: !1,
        pixelStep: 10,
        updateOnResize: !0,
        updateOnResizeDown: !1,
        fitImgTagToContainerWidth: !0,
        highDPRAutoScaleQuality: !1,
        ignoreDPR: !1,
        onLoad: function (a, b) {
            A17.Helpers.fadein_imgix_images(a)
        }
    }, a = a || document, b = b || {};
    merge(c, b), imgix && imgix.fluid(a, c)
}, A17.Helpers.imgix_lazy = function (a, b) {
    var c = {
        fluidClass: "img--lazy",
        autoInsertCSSBestPractices: !1,
        lazyLoad: !0,
        pixelStep: 10,
        updateOnResize: !0,
        updateOnResizeDown: !1,
        fitImgTagToContainerWidth: !0,
        lazyLoadScrollContainers: [window, document.querySelector(".panel__container")],
        lazyLoadOffsetVertical: 300,
        highDPRAutoScaleQuality: !1,
        ignoreDPR: !1,
        onLoad: function (a, b) {
            A17.Helpers.fadein_imgix_images(a)
        }
    }, a = a || document, b = b || {};
    merge(c, b), imgix && imgix.fluid(a, c)
}, A17.Helpers.is_page = function (a) {
    return document.body.classList.contains("body--" + a)
}, A17.Helpers.keycodes = {tab: 9, enter: 13, esc: 27, space: 32, left: 37, up: 38, right: 39, down: 40, backspace: 8, forwardslash: 191}, A17.Helpers.matches = function (a, b) {
    return (a.matches || a.matchesSelector || a.msMatchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.oMatchesSelector).call(a, b)
}, A17.Helpers.offset = function (a) {
    var b = a.length > 0 ? a[0] : a;
    if (document.body.contains(b)) {
        var c = b.getBoundingClientRect();
        return {top: Math.round(c.top + (document.documentElement.scrollTop || document.body.scrollTop)), left: Math.round(c.left + (document.documentElement.scrollLeft || document.body.scrollLeft))}
    }
    return null
}, A17.Helpers.preload_queue = function (a) {
    function b(d) {
        var e = {id: a[d].id};
        d < c - 1 && (e.callback = function () {
            b(d + 1)
        }), A17.UI.panel.load(e)
    }

    if (a.length) {
        var c = Math.min(4, a.length);
        b(0)
    }
}, A17.Helpers.reset_slideshows = function () {
    if (!A17.slideshows) return !1;
    for (var a = 0; a < A17.slideshows.length; a++) A17.slideshows[a].timeout && clearTimeout(A17.slideshows[a].timeout);
    A17.slideshows = []
}, A17.Helpers.resized = function () {
    if ($(document).trigger("resized"), !A17.Helpers.get_media_query_in_use) return console.log("Missing: A17.Helpers.get_media_query_in_use"), !1;
    var a = A17.Helpers.get_media_query_in_use();
    A17.media_query_in_use != a && (A17.media_query_in_use = A17.Helpers.get_media_query_in_use(), $(document).trigger("media_query_updated"))
}, A17.Helpers.scroll_to_y = function (a) {
    function b(a, b) {
        return a < b ? a : b
    }

    function c() {
        if (g && 0 === f) document.documentElement.scrollTop = 1, document.body.scrollTop = 1, f = 1, d.el = document.documentElement.scrollTop ? document.documentElement : document.body, requestAnimationFrame(c); else {
            var a = Date.now(), i = b(1, (a - e) / d.duration), j = h[d.easing](i);
            d.el.scrollTop = j * (d.offset - f) + f, i < 1 ? requestAnimationFrame(c) : "function" === (typeof d.onComplete).toLowerCase() && d.onComplete.call(this)
        }
    }

    var d = {el: document, offset: 0, duration: 250, easing: "linear"}, e = Date.now(), f = 0, g = !1, h = {
        linear: function (a) {
            return a
        }, easeIn: function (a) {
            return a * a * a
        }, easeOut: function (a) {
            return --a * a * a + 1
        }, easeInOut: function (a) {
            return a < .5 ? 4 * a * a * a : (a - 1) * (2 * a - 2) * (2 * a - 2) + 1
        }
    };
    for (var i in a) "undefined" != typeof a[i] && (d[i] = a[i]);
    return d.el === document && (g = !0, d.el = document.documentElement.scrollTop ? document.documentElement : document.body), f = d.el.scrollTop, f === d.offset ? void("function" === (typeof d.onComplete).toLowerCase() && d.onComplete.call(this)) : void requestAnimationFrame(c)
}, A17.Helpers.fadein_imgix_images = function (a) {
    var b = a.parentNode, c = "js-imgixLoaded", d = "js-imgixAnimated";
    b && (b.classList.contains(c) || (b.classList.add(c), tween = TweenLite.fromTo(a, 1.5 * A17.timing / 1e3, {opacity: "0"}, {
        opacity: "1", ease: Power2.easeInOut, onComplete: function () {
            b.classList.add(d), a.style.opacity = ""
        }
    })))
}, A17.Helpers.show_imgix_images = function (a) {
    var b = a.parentNode, c = "js-imgixLoaded", d = "js-imgixAnimated";
    b && (b.classList.contains(c) || (b.classList.add(c), b.classList.add(d)))
}, imgix.setElementImageAfterLoad = function (a, b, c) {
    function d() {
        var b = a.parentNode, c = "js-imgixLoaded", d = "js-imgixAnimated";
        b && (b.classList.remove(d), b.classList.remove(c))
    }

    if (imgix.isImageElement(a)) a.src !== b && d(); else {
        var e = imgix.getBackgroundImage(a);
        e !== b && d()
    }
    imgix.setElementImage(a, b), imgix.isImageElement(a) ? imagesLoaded(a, function () {
        "function" == typeof c && c(a, b)
    }) : imagesLoaded(a, {background: !0}, function () {
        "function" == typeof c && c(a, b)
    })
}, imgix.FluidSet.prototype.getImgDetails = function (a, b) {
    if (a) {
        var c = imgix.helpers.getWindowDPR(), d = this.options.pixelStep, e = imgix.helpers.calculateElementSize(imgix.isImageElement(a) ? a.parentNode : a),
            f = imgix.helpers.pixelRound(e.width * b, d), g = imgix.helpers.pixelRound(e.height * b, d);
        a.url || (a.url = new imgix.URL(imgix.helpers.getImgSrc(a))), a.url.setParams({
            h: "",
            w: ""
        }), f = Math.min(f, this.options.maxWidth), g = Math.min(g, this.options.maxHeight), 1 === c || this.options.ignoreDPR || a.url.setParam("dpr", c), 1 === c ? a.url.setParam("q", 90) : this.options.highDPRAutoScaleQuality && c > 1 && a.url.setParam("q", Math.min(Math.max(parseInt(100 / c, 10), 30), 75)), this.options.fitImgTagToContainerHeight && this.options.fitImgTagToContainerWidth && a.url.setParam("fit", "crop"), "crop" === a.url.getParam("fit") ? (g > 0 && (!imgix.isImageElement(a) || imgix.isImageElement(a) && this.options.fitImgTagToContainerHeight) && a.url.setParam("h", g), f > 0 && (!imgix.isImageElement(a) || imgix.isImageElement(a) && this.options.fitImgTagToContainerWidth) && a.url.setParam("w", f)) : a.url.setParam("w", f), !imgix.isImageElement(a) && this.options.autoInsertCSSBestPractices && a.style && (a.style.backgroundRepeat = "no-repeat", a.style.backgroundSize = "cover", a.style.backgroundPosition = "50% 50%");
        var h = {};
        null !== this.options.onChangeParamOverride && "function" == typeof this.options.onChangeParamOverride && (h = this.options.onChangeParamOverride(f, g, a.url.getParams(), a));
        for (var i in h) h.hasOwnProperty(i) && a.url.setParam(i, h[i]);
        return {url: a.url.getURL(), width: f, height: g}
    }
}, A17.Helpers.shuffle = function (a) {
    for (var b, c, d = a.slice(0), e = d.length; --e;) c = Math.floor(e * Math.random()), b = d[c], d[c] = d[e], d[e] = b;
    return d
}, A17.Helpers.spfjs = function (a) {
    var b = {"cache-unified": !0}, a = a || {};
    merge(b, a), spf && spf.init(b)
}, A17.Helpers.spfs_foot = function (a) {
    function b() {
        A17.tween = TweenLite.fromTo(n, A17.timing_index / 1e3, {clip: "rect(0px,0px," + m + "px,0px)"}, {
            clip: "rect(0px," + l + "px," + m + "px,0px)",
            ease: Power2.easeInOut,
            onComplete: function () {
                e.classList.remove(h), e.classList.add(i), A17.tween = null, $(document).trigger("index_opened"), d()
            }
        })
    }

    function c() {
        e.classList.add(j), A17.tween = TweenLite.fromTo(n, A17.timing_index / 1e3, {clip: "rect(0px," + l + "px," + m + "px,0px)"}, {
            clip: "rect(0px,0px," + m + "px,0px)",
            ease: Power2.easeInOut,
            onComplete: function () {
                e.classList.remove(j), e.classList.add(k), document.getElementById("contentIndex").innerHTML = "", A17.tween = null, $(document).trigger("index_closed")
            }
        })
    }

    function d() {
        var b = document.getElementById("contentIndex"), c = document.getElementById("content"), d = "index" == a ? b : c;
        d && A17.LoadBehavior(d), A17.UI.panel.refresh(), $(document).trigger("page_navigated")
    }

    var a = a || "", e = document.body, f = document.getElementById("indexBar__URL"), g = "body--index", h = g + "Loading", i = g + "Loaded", j = g + "Removing", k = g + "Removed",
        l = window.innerWidth, m = document.body.clientHeight, n = document.querySelectorAll("[data-animate-clip]");
    "index" === a ? (e.classList.contains(h) ? b() : d(), A17.current_url.indexOf(f.getAttribute("data-index-url")) > -1 ? f.href = "/" : f.href = A17.current_url) : (d(), f.href = f.getAttribute("data-index-url"), document.querySelectorAll(".index").length && c()), A17.current_url = window.location.href
}, A17.Helpers.spfs_foot_index_filter = function () {
    var a = (document.body, document.getElementById("contentIndexProjects"));
    a && A17.LoadBehavior(a), A17.UI.panel.refresh(), $(document).trigger("content_loaded")
}, A17.Helpers.spfs_head = function () {
    A17.UI.panel.close(!1), null !== A17.tween && A17.tween.isActive() && (A17.tween.kill(), A17.tween = null)
}, A17.UI.panel = function (a) {
    function b(b, c, d) {
        spf.dispose(), history.pushState({panel: !0, panel_id: b}, c, d), a.title = c + u, A17.Helpers.spfjs()
    }

    function c() {
        A17.media_query_in_use.indexOf("medium") > -1 && window.scroll(0, 0)
    }

    function d() {
        A17.media_query_in_use.indexOf("medium") > -1 && window.scroll(0, H)
    }

    function e() {
        M = [], [].forEach.call(K, function (a) {
            var b = a.getAttribute("href"), c = a.getAttribute("data-work-panel");
            M.push({id: b, title: c})
        })
    }

    function f(a) {
        for (var b = 0; b < M.length; b++) if (M[b].id == a) return b;
        return -1
    }

    function g(a) {
        var b = L.innerHTML, c = f(a);
        if (c != -1) {
            var d = c < M.length - 1 ? M[c + 1] : M[0], e = c > 0 ? M[c - 1] : M[M.length - 1];
            d && (b = b.replace("{{url_previous}}", e.id), b = b.replace("{{url}}", d.id), b = b.replace("{{title}}", d.title), y.innerHTML = b, A17.LoadBehavior(y), q({id: d.id}))
        }
    }

    function h(a) {
        x.innerHTML = a.innerHTML, r.classList.add(A), G || s.classList.add(D), z.scrollTop = 0, c(), A17.LoadBehavior(x)
    }

    function i() {
        A17.Helpers.reset_slideshows()
    }

    function j(a) {
        function b() {
            i(), x.innerHTML = "", y.innerHTML = "", m({id: a.id, push_state: a.push_state, save_scroll: !1})
        }

        I = !1, A17.media_query_in_use.indexOf("medium") > -1 ? b() : (r.classList.add(C), setTimeout(function () {
            z.scrollTop = 0, b(), r.classList.remove(C)
        }, A17.timing))
    }

    function k() {
        l(), window.addEventListener("popstate", function (a) {
            a.state && a.state.hasOwnProperty("panel") && (spf.dispose(), "" != a.state.panel_id ? m({id: a.state.panel_id, push_state: !1}) : p(!1), A17.Helpers.spfjs())
        })
    }

    function l() {
        return t = s.classList.contains(E) ? a.getElementById("contentIndex") : a.getElementById("content"), J = location.pathname, G = s.classList.contains(D), K = t.querySelectorAll("[data-work-panel]"), v = a.title.replace(u, ""), M = [], K && e(), M
    }

    function m(c) {
        var c = c || {}, d = {save_scroll: !0, push_state: !0};
        if (merge(d, c), I) return j(d), !1;
        d.save_scroll && (H = window.pageYOffset);
        var e = a.getElementById(d.id);
        e ? (K && g(d.id), h(e), [].forEach.call(w, function (a) {
            a.textContent = e.getAttribute("data-panel-title")
        }), d.push_state && b(d.id, e.getAttribute("data-title"), d.id), z.focus(), I = !0, $(a).trigger("panel_opened")) : q({id: d.id, to_open: !0, push_state: d.push_state})
    }

    function n() {
        return !!r.classList.contains(A) && void r.classList.add(B)
    }

    function o() {
        return !!r.classList.contains(A) && void r.classList.remove(B)
    }

    function p(c) {
        return !!r.classList.contains(A) && (!(r.classList.contains(B) && !confirm(F)) && (o(), i(), void 0 === c && (c = !0), r.classList.remove(A), G || s.classList.remove(D), x.innerHTML = "", y.innerHTML = "", c && b("", v, J), d(), I = !1, void $(a).trigger("panel_closed")))
    }

    function q(b) {
        function c() {
            "function" === (typeof e.callback).toLowerCase() && e.callback.call(this)
        }

        var d = "panel=true", b = b || {}, e = {to_open: !1, push_state: !1};
        return merge(e, b), !!e.id && (a.getElementById(e.id) ? (c(), !1) : (e.id.indexOf("?") === -1 ? url = e.id + "?" + d : url = e.id + "&" + d, void fetch(url, {credentials: "include"}).then(function (a) {
            if (a.status >= 200 && a.status < 300) return a.json();
            throw new Error(a.statusText)
        }).then(function (b) {
            tag = a.createElement("script"), tag.type = "text/template", tag.id = e.id, tag.setAttribute("data-title", b.title), tag.setAttribute("data-panel-title", void 0 !== b.panel_title ? b.panel_title : b.title), tag.innerHTML = b.content, a.body.appendChild(tag), e.to_open && m({
                id: e.id,
                push_state: e.push_state
            }), c()
        })["catch"](function (a) {
            console.warn("Parsing failed", a), c()
        })))
    }

    var r = a.documentElement, s = a.body, t = a.getElementById("content"), u = " â€” AREA 17", v = a.title.replace(u, ""), w = a.querySelectorAll("[data-panel-title]"),
        x = a.querySelector("[data-panel-content]"), y = a.querySelector("[data-panel-next]"), z = a.querySelector("[data-panel-scroller]"), A = "html--panel", B = "html--panelLocked",
        C = "html--panelMoved", D = "body--dark", E = "body--index", F = z.getAttribute("data-close-confirm"), G = s.classList.contains(D), H = 0, I = !1, J = location.pathname,
        K = a.querySelectorAll("[data-work-panel]"), L = a.getElementById("template_next"), M = [];
    return {init: k, open: m, close: p, lock: n, unlock: o, load: q, refresh: l}
}(document);
