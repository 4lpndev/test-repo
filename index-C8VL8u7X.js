const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/Home-bVdrzYoG.js", "assets/LayoutButton-TWuNL0Mq.js", "assets/LayoutButton-OsQX4E61.css", "assets/CompletenessOverviewLegend-BlnOAmko.js", "assets/dateUtils-CK_VULLB.js", "assets/CompletenessOverviewLegend-deId0bKe.css", "assets/UserLink-Z0hnXwDJ.js", "assets/UserLink-DH4W6oJA.css", "assets/Home-CqQUoVuv.css", "assets/AllArticles-9MV9xgKa.js", "assets/Searchbar-Ch_858fP.js", "assets/Dropdown-DuZ7vv2_.js", "assets/Dropdown-PgF1MqWt.css", "assets/Searchbar-Bv_ywwAF.css", "assets/IconSeen-C13Urbta.js", "assets/IconGlobe-Cgxx12k8.js", "assets/AllArticles-DbTuQNpd.css", "assets/ArticleEdit-CVn4RZe8.js", "assets/MarkdownEditor-BZoIwGej.js", "assets/MarkdownViewer-BibgjtZq.js", "assets/MarkdownViewer-ce-Pe0mD.css", "assets/IconHelp-CHr-R7gt.js", "assets/MarkdownEditor-CsSEc0Xl.css", "assets/UnsavedChangesModal-CKzj7MnQ.js", "assets/ArticleEdit-BH5U8g6S.css", "assets/ArticleRead-OPUq2sbp.js", "assets/IconEdit-C-eowSxk.js", "assets/ConfirmDeleteModal-CXe0EGa4.js", "assets/IconCheck-Bj33OeHZ.js", "assets/ArticleRead-DTmz0Czb.css", "assets/UserProfile-DgnUbHpM.js", "assets/UserProfile-CgeOmLXr.css", "assets/EditUser-CQq3-5Mo.js", "assets/EditUser-89bqsu5m.css", "assets/FAQView-CWutWwVD.js", "assets/FAQView-DbIbuypn.css", "assets/AllUsers-CgFoLdy4.js", "assets/AllUsers-76dk667S.css", "assets/Templates-CfoJMHYE.js", "assets/TemplateResetModal-LV3zpk8c.js", "assets/Templates-xjuq8BJn.css", "assets/TemplateEdit-BSp4RW8m.js", "assets/TemplateEdit-Bw8EvMOW.css", "assets/TemplateRead-C_z0iuf4.js", "assets/TemplateRead-E3Lc8rvK.css", "assets/NotFoundView-CW5zz-qs.js", "assets/NotFoundView-bRy-WTFt.css", "assets/AllNotifications-pdmjK9gQ.js", "assets/AllNotifications-C6gbjnpx.css"]))) => i.map(i => d[i]);
let b1, bO, v_, so, J0, E_, ze, it, wO, IO, sn, Sn, ry, ho, ko, Yu, RO, HC, WR, tk, el, Ef, fp, PO, Ly, EO, ny, Me, Wt, S1, Rn, ey, m1, MO, O1, D1, WA, NO, OO, eu, tu, cr, nk, Zm, Hn, Q, we, $e, Zt, ue, Ct, fe, dt, So, sr, yi, AO, Vc, Z, Le, yf, Wc, Gc, Ie, kO, Nr, Ae, Ze, SO, an;
let __tla = (async () => {
    (function () {
        const e = document.createElement("link")
            .relList;
        if (e && e.supports && e.supports("modulepreload")) return;
        for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
        new MutationObserver(o => {
                for (const i of o)
                    if (i.type === "childList")
                        for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
            })
            .observe(document, { childList: !0, subtree: !0 });
        
        function n(o) { const i = {}; return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i }
        
        function r(o) {
            if (o.ep) return;
            o.ep = !0;
            const i = n(o);
            fetch(o.href, i)
        }
    })();
    
    function Ey(t) { const e = Object.create(null); for (const n of t.split(",")) e[n] = 1; return n => n in e }
    const Ay = {}
        , by = () => {};
    const Iy = (t, e) => {
            const n = t.indexOf(e);
            n > -1 && t.splice(n, 1)
        }
        , wy = Object.prototype.hasOwnProperty
        , es = (t, e) => wy.call(t, e)
        , lr = Array.isArray
        , qo = t => ws(t) === "[object Map]"
        , Sy = t => ws(t) === "[object Set]"
        , ts = t => typeof t == "function"
        , ky = t => typeof t == "string"
        , pi = t => typeof t == "symbol"
        , wo = t => t !== null && typeof t == "object"
        , Ry = Object.prototype.toString
        , ws = t => Ry.call(t)
        , Oy = t => ws(t)
        .slice(8, -1)
        , Ny = t => ws(t) === "[object Object]"
        , Rc = t => ky(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t
        , dr = (t, e) => !Object.is(t, e)
        , Py = (t, e, n, r = !1) => { Object.defineProperty(t, e, { configurable: !0, enumerable: !1, writable: r, value: n }) };
    let Mt;
    class Kh {
        constructor(e = !1) {
            this.detached = e, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Mt, !e && Mt && (this.index = (Mt.scopes || (Mt.scopes = []))
                .push(this) - 1)
        }
        get active() { return this._active } pause() {
            if (this._active) {
                this._isPaused = !0;
                let e, n;
                if (this.scopes)
                    for (e = 0, n = this.scopes.length; e < n; e++) this.scopes[e].pause();
                for (e = 0, n = this.effects.length; e < n; e++) this.effects[e].pause()
            }
        }
        resume() {
            if (this._active && this._isPaused) {
                this._isPaused = !1;
                let e, n;
                if (this.scopes)
                    for (e = 0, n = this.scopes.length; e < n; e++) this.scopes[e].resume();
                for (e = 0, n = this.effects.length; e < n; e++) this.effects[e].resume()
            }
        }
        run(e) { if (this._active) { const n = Mt; try { return Mt = this, e() } finally { Mt = n } } } on() { Mt = this } off() { Mt = this.parent } stop(e) {
            if (this._active) {
                let n, r;
                for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
                for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
                if (this.scopes)
                    for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
                if (!this.detached && this.parent && !e) {
                    const o = this.parent.scopes.pop();
                    o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index)
                }
                this.parent = void 0, this._active = !1
            }
        }
    }
    
    function My(t) { return new Kh(t) } Ly = function () { return Mt };
    EO = function (t, e = !1) { Mt && Mt.cleanups.push(t) };
    let Ke;
    const ia = new WeakSet;
    class jh {
        constructor(e) { this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Mt && Mt.active && Mt.effects.push(this) } pause() { this.flags |= 64 } resume() { this.flags & 64 && (this.flags &= -65, ia.has(this) && (ia.delete(this), this.trigger())) } notify() { this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Vh(this) } run() {
            if (!(this.flags & 1)) return this.fn();
            this.flags |= 2, cu(this), Gh(this);
            const e = Ke
                , n = on;
            Ke = this, on = !0;
            try { return this.fn() } finally { Wh(this), Ke = e, on = n, this.flags &= -3 }
        }
        stop() {
            if (this.flags & 1) {
                for (let e = this.deps; e; e = e.nextDep) Pc(e);
                this.deps = this.depsTail = void 0, cu(this), this.onStop && this.onStop(), this.flags &= -2
            }
        }
        trigger() { this.flags & 64 ? ia.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty() } runIfDirty() { xa(this) && this.run() } get dirty() { return xa(this) }
    }
    let qh = 0
        , eo;
    
    function Vh(t) { t.flags |= 8, t.next = eo, eo = t }
    
    function Oc() { qh++ }
    
    function Nc() {
        if (--qh > 0) return;
        let t;
        for (; eo;) {
            let e = eo
                , n;
            for (; e;) e.flags &= -9, e = e.next;
            for (e = eo, eo = void 0; e;) { if (e.flags & 1) try { e.trigger() } catch (r) { t || (t = r) } n = e.next, e.next = void 0, e = n }
        }
        if (t) throw t
    }
    
    function Gh(t) { for (let e = t.deps; e; e = e.nextDep) e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e }
    
    function Wh(t) {
        let e, n = t.depsTail
            , r = n;
        for (; r;) {
            const o = r.prevDep;
            r.version === -1 ? (r === n && (n = o), Pc(r), Dy(r)) : e = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o
        }
        t.deps = e, t.depsTail = n
    }
    
    function xa(t) {
        for (let e = t.deps; e; e = e.nextDep)
            if (e.dep.version !== e.version || e.dep.computed && (zh(e.dep.computed) || e.dep.version !== e.version)) return !0;
        return !!t._dirty
    }
    
    function zh(t) {
        if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === ei)) return;
        t.globalVersion = ei;
        const e = t.dep;
        if (t.flags |= 2, e.version > 0 && !t.isSSR && t.deps && !xa(t)) { t.flags &= -3; return }
        const n = Ke
            , r = on;
        Ke = t, on = !0;
        try {
            Gh(t);
            const o = t.fn(t._value);
            (e.version === 0 || dr(o, t._value)) && (t._value = o, e.version++)
        } catch (o) { throw e.version++, o } finally { Ke = n, on = r, Wh(t), t.flags &= -3 }
    }
    
    function Pc(t, e = !1) { const { dep: n, prevSub: r, nextSub: o } = t; if (r && (r.nextSub = o, t.prevSub = void 0), o && (o.prevSub = r, t.nextSub = void 0), n.subs === t && (n.subs = r), !n.subs && n.computed) { n.computed.flags &= -5; for (let i = n.computed.deps; i; i = i.nextDep) Pc(i, !0) }!e && !--n.sc && n.map && n.map.delete(n.key) }
    
    function Dy(t) {
        const { prevDep: e, nextDep: n } = t;
        e && (e.nextDep = n, t.prevDep = void 0), n && (n.prevDep = e, t.nextDep = void 0)
    }
    let on = !0;
    const Yh = [];
    
    function gr() { Yh.push(on), on = !1 }
    
    function mr() {
        const t = Yh.pop();
        on = t === void 0 ? !0 : t
    }
    
    function cu(t) {
        const { cleanup: e } = t;
        if (t.cleanup = void 0, e) {
            const n = Ke;
            Ke = void 0;
            try { e() } finally { Ke = n }
        }
    }
    let ei = 0;
    class xy { constructor(e, n) { this.sub = e, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0 } } class Mc {
        constructor(e) { this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.target = void 0, this.map = void 0, this.key = void 0, this.sc = 0 } track(e) {
            if (!Ke || !on || Ke === this.computed) return;
            let n = this.activeLink;
            if (n === void 0 || n.sub !== Ke) n = this.activeLink = new xy(Ke, this), Ke.deps ? (n.prevDep = Ke.depsTail, Ke.depsTail.nextDep = n, Ke.depsTail = n) : Ke.deps = Ke.depsTail = n, Qh(n);
            else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
                const r = n.nextDep;
                r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Ke.depsTail, n.nextDep = void 0, Ke.depsTail.nextDep = n, Ke.depsTail = n, Ke.deps === n && (Ke.deps = r)
            }
            return n
        }
        trigger(e) { this.version++, ei++, this.notify(e) } notify(e) { Oc(); try { for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify() } finally { Nc() } }
    }
    
    function Qh(t) {
        if (t.dep.sc++, t.sub.flags & 4) {
            const e = t.dep.computed;
            if (e && !t.dep.subs) { e.flags |= 20; for (let r = e.deps; r; r = r.nextDep) Qh(r) }
            const n = t.dep.subs;
            n !== t && (t.prevSub = n, n && (n.nextSub = t)), t.dep.subs = t
        }
    }
    const ns = new WeakMap
        , Or = Symbol("")
        , Ua = Symbol("")
        , ti = Symbol("");
    
    function wt(t, e, n) {
        if (on && Ke) {
            let r = ns.get(t);
            r || ns.set(t, r = new Map);
            let o = r.get(n);
            o || (r.set(n, o = new Mc), o.target = t, o.map = r, o.key = n), o.track()
        }
    }
    
    function Kn(t, e, n, r, o, i) {
        const s = ns.get(t);
        if (!s) { ei++; return }
        const a = c => { c && c.trigger() };
        if (Oc(), e === "clear") s.forEach(a);
        else {
            const c = lr(t)
                , l = c && Rc(n);
            if (c && n === "length") {
                const h = Number(r);
                s.forEach((f, g) => {
                    (g === "length" || g === ti || !pi(g) && g >= h) && a(f)
                })
            } else switch (n !== void 0 && a(s.get(n)), l && a(s.get(ti)), e) {
            case "add":
                c ? l && a(s.get("length")) : (a(s.get(Or)), qo(t) && a(s.get(Ua)));
                break;
            case "delete":
                c || (a(s.get(Or)), qo(t) && a(s.get(Ua)));
                break;
            case "set":
                qo(t) && a(s.get(Or));
                break
            }
        }
        Nc()
    }
    
    function Uy(t, e) { const n = ns.get(t); return n && n.get(e) }
    
    function jr(t) { const e = Ne(t); return e === t ? e : (wt(e, "iterate", ti), en(t) ? e : e.map(bt)) }
    
    function Ss(t) { return wt(t = Ne(t), "iterate", ti), t }
    const Fy = {
        __proto__: null
        , [Symbol.iterator]() { return sa(this, Symbol.iterator, bt) }
        , concat(...t) {
            return jr(this)
                .concat(...t.map(e => lr(e) ? jr(e) : e))
        }
        , entries() { return sa(this, "entries", t => (t[1] = bt(t[1]), t)) }
        , every(t, e) { return On(this, "every", t, e, void 0, arguments) }
        , filter(t, e) { return On(this, "filter", t, e, n => n.map(bt), arguments) }
        , find(t, e) { return On(this, "find", t, e, bt, arguments) }
        , findIndex(t, e) { return On(this, "findIndex", t, e, void 0, arguments) }
        , findLast(t, e) { return On(this, "findLast", t, e, bt, arguments) }
        , findLastIndex(t, e) { return On(this, "findLastIndex", t, e, void 0, arguments) }
        , forEach(t, e) { return On(this, "forEach", t, e, void 0, arguments) }
        , includes(...t) { return aa(this, "includes", t) }
        , indexOf(...t) { return aa(this, "indexOf", t) }
        , join(t) {
            return jr(this)
                .join(t)
        }
        , lastIndexOf(...t) { return aa(this, "lastIndexOf", t) }
        , map(t, e) { return On(this, "map", t, e, void 0, arguments) }
        , pop() { return Lo(this, "pop") }
        , push(...t) { return Lo(this, "push", t) }
        , reduce(t, ...e) { return lu(this, "reduce", t, e) }
        , reduceRight(t, ...e) { return lu(this, "reduceRight", t, e) }
        , shift() { return Lo(this, "shift") }
        , some(t, e) { return On(this, "some", t, e, void 0, arguments) }
        , splice(...t) { return Lo(this, "splice", t) }
        , toReversed() {
            return jr(this)
                .toReversed()
        }
        , toSorted(t) {
            return jr(this)
                .toSorted(t)
        }
        , toSpliced(...t) {
            return jr(this)
                .toSpliced(...t)
        }
        , unshift(...t) { return Lo(this, "unshift", t) }
        , values() { return sa(this, "values", bt) }
    };
    
    function sa(t, e, n) {
        const r = Ss(t)
            , o = r[e]();
        return r !== t && !en(t) && (o._next = o.next, o.next = () => { const i = o._next(); return i.value && (i.value = n(i.value)), i }), o
    }
    const Hy = Array.prototype;
    
    function On(t, e, n, r, o, i) {
        const s = Ss(t)
            , a = s !== t && !en(t)
            , c = s[e];
        if (c !== Hy[e]) { const f = c.apply(t, i); return a ? bt(f) : f }
        let l = n;
        s !== t && (a ? l = function (f, g) { return n.call(this, bt(f), g, t) } : n.length > 2 && (l = function (f, g) { return n.call(this, f, g, t) }));
        const h = c.call(s, l, r);
        return a && o ? o(h) : h
    }
    
    function lu(t, e, n, r) { const o = Ss(t); let i = n; return o !== t && (en(t) ? n.length > 3 && (i = function (s, a, c) { return n.call(this, s, a, c, t) }) : i = function (s, a, c) { return n.call(this, s, bt(a), c, t) }), o[e](i, ...r) }
    
    function aa(t, e, n) {
        const r = Ne(t);
        wt(r, "iterate", ti);
        const o = r[e](...n);
        return (o === -1 || o === !1) && Uc(n[0]) ? (n[0] = Ne(n[0]), r[e](...n)) : o
    }
    
    function Lo(t, e, n = []) { gr(), Oc(); const r = Ne(t)[e].apply(t, n); return Nc(), mr(), r }
    const By = Ey("__proto__,__v_isRef,__isVue")
        , Jh = new Set(Object.getOwnPropertyNames(Symbol)
            .filter(t => t !== "arguments" && t !== "caller")
            .map(t => Symbol[t])
            .filter(pi));
    
    function $y(t) { pi(t) || (t = String(t)); const e = Ne(this); return wt(e, "has", t), e.hasOwnProperty(t) } class Xh {
        constructor(e = !1, n = !1) { this._isReadonly = e, this._isShallow = n } get(e, n, r) {
            const o = this._isReadonly
                , i = this._isShallow;
            if (n === "__v_isReactive") return !o;
            if (n === "__v_isReadonly") return o;
            if (n === "__v_isShallow") return i;
            if (n === "__v_raw") return r === (o ? i ? eC : nf : i ? tf : ef)
                .get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
            const s = lr(e);
            if (!o) { let c; if (s && (c = Fy[n])) return c; if (n === "hasOwnProperty") return $y }
            const a = Reflect.get(e, n, it(e) ? e : r);
            return (pi(n) ? Jh.has(n) : By(n)) || (o || wt(e, "get", n), i) ? a : it(a) ? s && Rc(n) ? a : a.value : wo(a) ? o ? of(a) : So(a) : a
        }
    }
    class Zh extends Xh {
        constructor(e = !1) { super(!1, e) } set(e, n, r, o) {
            let i = e[n];
            if (!this._isShallow) { const c = Mr(i); if (!en(r) && !Mr(r) && (i = Ne(i), r = Ne(r)), !lr(e) && it(i) && !it(r)) return c ? !1 : (i.value = r, !0) }
            const s = lr(e) && Rc(n) ? Number(n) < e.length : es(e, n)
                , a = Reflect.set(e, n, r, it(e) ? e : o);
            return e === Ne(o) && (s ? dr(r, i) && Kn(e, "set", n, r) : Kn(e, "add", n, r)), a
        }
        deleteProperty(e, n) {
            const r = es(e, n);
            e[n];
            const o = Reflect.deleteProperty(e, n);
            return o && r && Kn(e, "delete", n, void 0), o
        }
        has(e, n) { const r = Reflect.has(e, n); return (!pi(n) || !Jh.has(n)) && wt(e, "has", n), r } ownKeys(e) { return wt(e, "iterate", lr(e) ? "length" : Or), Reflect.ownKeys(e) }
    }
    class Ky extends Xh { constructor(e = !1) { super(!0, e) } set(e, n) { return !0 } deleteProperty(e, n) { return !0 } }
    const jy = new Zh
        , qy = new Ky
        , Vy = new Zh(!0);
    const Lc = t => t
        , ks = t => Reflect.getPrototypeOf(t);
    
    function ki(t, e, n = !1, r = !1) {
        t = t.__v_raw;
        const o = Ne(t)
            , i = Ne(e);
        n || (dr(e, i) && wt(o, "get", e), wt(o, "get", i));
        const { has: s } = ks(o), a = r ? Lc : n ? Fc : bt;
        if (s.call(o, e)) return a(t.get(e));
        if (s.call(o, i)) return a(t.get(i));
        t !== o && t.get(e)
    }
    
    function Ri(t, e = !1) {
        const n = this.__v_raw
            , r = Ne(n)
            , o = Ne(t);
        return e || (dr(t, o) && wt(r, "has", t), wt(r, "has", o)), t === o ? n.has(t) : n.has(t) || n.has(o)
    }
    
    function Oi(t, e = !1) { return t = t.__v_raw, !e && wt(Ne(t), "iterate", Or), Reflect.get(t, "size", t) }
    
    function uu(t, e = !1) {
        !e && !en(t) && !Mr(t) && (t = Ne(t));
        const n = Ne(this);
        return ks(n)
            .has.call(n, t) || (n.add(t), Kn(n, "add", t, t)), this
    }
    
    function du(t, e, n = !1) {
        !n && !en(e) && !Mr(e) && (e = Ne(e));
        const r = Ne(this)
            , { has: o, get: i } = ks(r);
        let s = o.call(r, t);
        s || (t = Ne(t), s = o.call(r, t));
        const a = i.call(r, t);
        return r.set(t, e), s ? dr(e, a) && Kn(r, "set", t, e) : Kn(r, "add", t, e), this
    }
    
    function hu(t) {
        const e = Ne(this)
            , { has: n, get: r } = ks(e);
        let o = n.call(e, t);
        o || (t = Ne(t), o = n.call(e, t)), r && r.call(e, t);
        const i = e.delete(t);
        return o && Kn(e, "delete", t, void 0), i
    }
    
    function fu() {
        const t = Ne(this)
            , e = t.size !== 0
            , n = t.clear();
        return e && Kn(t, "clear", void 0, void 0), n
    }
    
    function Ni(t, e) {
        return function (r, o) {
            const i = this
                , s = i.__v_raw
                , a = Ne(s)
                , c = e ? Lc : t ? Fc : bt;
            return !t && wt(a, "iterate", Or), s.forEach((l, h) => r.call(o, c(l), c(h), i))
        }
    }
    
    function Pi(t, e, n) {
        return function (...r) {
            const o = this.__v_raw
                , i = Ne(o)
                , s = qo(i)
                , a = t === "entries" || t === Symbol.iterator && s
                , c = t === "keys" && s
                , l = o[t](...r)
                , h = n ? Lc : e ? Fc : bt;
            return !e && wt(i, "iterate", c ? Ua : Or), { next() { const { value: f, done: g } = l.next(); return g ? { value: f, done: g } : { value: a ? [h(f[0]), h(f[1])] : h(f), done: g } }, [Symbol.iterator]() { return this } }
        }
    }
    
    function Wn(t) { return function (...e) { return t === "delete" ? !1 : t === "clear" ? void 0 : this } }
    
    function Gy() {
        const t = { get(i) { return ki(this, i) }, get size() { return Oi(this) }, has: Ri, add: uu, set: du, delete: hu, clear: fu, forEach: Ni(!1, !1) }
            , e = { get(i) { return ki(this, i, !1, !0) }, get size() { return Oi(this) }, has: Ri, add(i) { return uu.call(this, i, !0) }, set(i, s) { return du.call(this, i, s, !0) }, delete: hu, clear: fu, forEach: Ni(!1, !0) }
            , n = { get(i) { return ki(this, i, !0) }, get size() { return Oi(this, !0) }, has(i) { return Ri.call(this, i, !0) }, add: Wn("add"), set: Wn("set"), delete: Wn("delete"), clear: Wn("clear"), forEach: Ni(!0, !1) }
            , r = { get(i) { return ki(this, i, !0, !0) }, get size() { return Oi(this, !0) }, has(i) { return Ri.call(this, i, !0) }, add: Wn("add"), set: Wn("set"), delete: Wn("delete"), clear: Wn("clear"), forEach: Ni(!0, !0) };
        return ["keys", "values", "entries", Symbol.iterator].forEach(i => { t[i] = Pi(i, !1, !1), n[i] = Pi(i, !0, !1), e[i] = Pi(i, !1, !0), r[i] = Pi(i, !0, !0) }), [t, n, e, r]
    }
    const [Wy, zy, Yy, Qy] = Gy();
    
    function Dc(t, e) { const n = e ? t ? Qy : Yy : t ? zy : Wy; return (r, o, i) => o === "__v_isReactive" ? !t : o === "__v_isReadonly" ? t : o === "__v_raw" ? r : Reflect.get(es(n, o) && o in r ? n : r, o, i) }
    const Jy = { get: Dc(!1, !1) }
        , Xy = { get: Dc(!1, !0) }
        , Zy = { get: Dc(!0, !1) };
    const ef = new WeakMap
        , tf = new WeakMap
        , nf = new WeakMap
        , eC = new WeakMap;
    
    function tC(t) {
        switch (t) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0
        }
    }
    
    function nC(t) { return t.__v_skip || !Object.isExtensible(t) ? 0 : tC(Oy(t)) } So = function (t) { return Mr(t) ? t : xc(t, !1, jy, Jy, ef) };
    
    function rf(t) { return xc(t, !1, Vy, Xy, tf) }
    
    function of(t) { return xc(t, !0, qy, Zy, nf) }
    
    function xc(t, e, n, r, o) { if (!wo(t) || t.__v_raw && !(e && t.__v_isReactive)) return t; const i = o.get(t); if (i) return i; const s = nC(t); if (s === 0) return t; const a = new Proxy(t, s === 2 ? r : n); return o.set(t, a), a }
    
    function io(t) { return Mr(t) ? io(t.__v_raw) : !!(t && t.__v_isReactive) }
    
    function Mr(t) { return !!(t && t.__v_isReadonly) }
    
    function en(t) { return !!(t && t.__v_isShallow) }
    
    function Uc(t) { return t ? !!t.__v_raw : !1 }
    
    function Ne(t) { const e = t && t.__v_raw; return e ? Ne(e) : t }
    
    function rC(t) { return !es(t, "__v_skip") && Object.isExtensible(t) && Py(t, "__v_skip", !0), t }
    const bt = t => wo(t) ? So(t) : t
        , Fc = t => wo(t) ? of(t) : t;
    it = function (t) { return t ? t.__v_isRef === !0 : !1 };
    sr = function (t) { return sf(t, !1) };
    
    function Hc(t) { return sf(t, !0) }
    
    function sf(t, e) { return it(t) ? t : new oC(t, e) } class oC {
        constructor(e, n) { this.dep = new Mc, this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? e : Ne(e), this._value = n ? e : bt(e), this.__v_isShallow = n } get value() { return this.dep.track(), this._value } set value(e) {
            const n = this._rawValue
                , r = this.__v_isShallow || en(e) || Mr(e);
            e = r ? e : Ne(e), dr(e, n) && (this._rawValue = e, this._value = r ? e : bt(e), this.dep.trigger())
        }
    }
    so = function (t) { return it(t) ? t.value : t };
    const iC = { get: (t, e, n) => e === "__v_raw" ? t : so(Reflect.get(t, e, n)), set: (t, e, n, r) => { const o = t[e]; return it(o) && !it(n) ? (o.value = n, !0) : Reflect.set(t, e, n, r) } };
    
    function af(t) { return io(t) ? t : new Proxy(t, iC) } class sC { constructor(e, n, r) { this._object = e, this._key = n, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0 } get value() { const e = this._object[this._key]; return this._value = e === void 0 ? this._defaultValue : e } set value(e) { this._object[this._key] = e } get dep() { return Uy(Ne(this._object), this._key) } } class aC { constructor(e) { this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0 } get value() { return this._value = this._getter() } } AO = function (t, e, n) { return it(t) ? t : ts(t) ? new aC(t) : wo(t) && arguments.length > 1 ? cC(t, e, n) : sr(t) };
    
    function cC(t, e, n) { const r = t[e]; return it(r) ? r : new sC(t, e, n) } class lC { constructor(e, n, r) { this.fn = e, this.setter = n, this._value = void 0, this.dep = new Mc(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ei - 1, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r } notify() { if (this.flags |= 16, !(this.flags & 8) && Ke !== this) return Vh(this), !0 } get value() { const e = this.dep.track(); return zh(this), e && (e.version = this.dep.version), this._value } set value(e) { this.setter && this.setter(e) } }
    
    function uC(t, e, n = !1) { let r, o; return ts(t) ? r = t : (r = t.get, o = t.set), new lC(r, o, n) }
    const Mi = {}
        , rs = new WeakMap;
    let Ir;
    
    function dC(t, e = !1, n = Ir) {
        if (n) {
            let r = rs.get(n);
            r || rs.set(n, r = []), r.push(t)
        }
    }
    
    function hC(t, e, n = Ay) {
        const { immediate: r, deep: o, once: i, scheduler: s, augmentJob: a, call: c } = n, l = w => o ? w : en(w) || o === !1 || o === 0 ? Un(w, 1) : Un(w);
        let h, f, g, T, A = !1
            , b = !1;
        if (it(t) ? (f = () => t.value, A = en(t)) : io(t) ? (f = () => l(t), A = !0) : lr(t) ? (b = !0, A = t.some(w => io(w) || en(w)), f = () => t.map(w => { if (it(w)) return w.value; if (io(w)) return l(w); if (ts(w)) return c ? c(w, 2) : w() })) : ts(t) ? e ? f = c ? () => c(t, 2) : t : f = () => {
                if (g) { gr(); try { g() } finally { mr() } }
                const w = Ir;
                Ir = h;
                try { return c ? c(t, 3, [T]) : t(T) } finally { Ir = w }
            } : f = by, e && o) {
            const w = f
                , M = o === !0 ? 1 / 0 : o;
            f = () => Un(w(), M)
        }
        const k = Ly()
            , O = () => { h.stop(), k && Iy(k.effects, h) };
        if (i && e) {
            const w = e;
            e = (...M) => { w(...M), O() }
        }
        let x = b ? new Array(t.length)
            .fill(Mi) : Mi;
        const I = w => {
            if (!(!(h.flags & 1) || !h.dirty && !w))
                if (e) {
                    const M = h.run();
                    if (o || A || (b ? M.some((L, K) => dr(L, x[K])) : dr(M, x))) {
                        g && g();
                        const L = Ir;
                        Ir = h;
                        try {
                            const K = [M, x === Mi ? void 0 : b && x[0] === Mi ? [] : x, T];
                            c ? c(e, 3, K) : e(...K), x = M
                        } finally { Ir = L }
                    }
                } else h.run()
        };
        return a && a(I), h = new jh(f), h.scheduler = s ? () => s(I, !1) : I, T = w => dC(w, !1, h), g = h.onStop = () => {
            const w = rs.get(h);
            if (w) {
                if (c) c(w, 4);
                else
                    for (const M of w) M();
                rs.delete(h)
            }
        }, e ? r ? I(!0) : x = h.run() : s ? s(I.bind(null, !0), !0) : h.run(), O.pause = h.pause.bind(h), O.resume = h.resume.bind(h), O.stop = O, O
    }
    
    function Un(t, e = 1 / 0, n) {
        if (e <= 0 || !wo(t) || t.__v_skip || (n = n || new Set, n.has(t))) return t;
        if (n.add(t), e--, it(t)) Un(t.value, e, n);
        else if (lr(t))
            for (let r = 0; r < t.length; r++) Un(t[r], e, n);
        else if (Sy(t) || qo(t)) t.forEach(r => { Un(r, e, n) });
        else if (Ny(t)) { for (const r in t) Un(t[r], e, n); for (const r of Object.getOwnPropertySymbols(t)) Object.prototype.propertyIsEnumerable.call(t, r) && Un(t[r], e, n) }
        return t
    }
    
    function fC(t) { const e = Object.create(null); for (const n of t.split(",")) e[n] = 1; return n => n in e }
    const qe = {}
        , ao = []
        , jn = () => {}
        , pC = () => !1
        , Bc = t => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97)
        , cf = t => t.startsWith("onUpdate:")
        , St = Object.assign
        , lf = (t, e) => {
            const n = t.indexOf(e);
            n > -1 && t.splice(n, 1)
        }
        , gC = Object.prototype.hasOwnProperty
        , je = (t, e) => gC.call(t, e)
        , be = Array.isArray
        , mC = t => $c(t) === "[object Map]"
        , yC = t => $c(t) === "[object Set]"
        , ye = t => typeof t == "function"
        , Tt = t => typeof t == "string"
        , uf = t => typeof t == "symbol"
        , ct = t => t !== null && typeof t == "object"
        , df = t => (ct(t) || ye(t)) && ye(t.then) && ye(t.catch)
        , hf = Object.prototype.toString
        , $c = t => hf.call(t)
        , CC = t => $c(t) === "[object Object]"
        , Vo = fC(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
        , Rs = t => { const e = Object.create(null); return n => e[n] || (e[n] = t(n)) }
        , _C = /-(\w)/g
        , un = Rs(t => t.replace(_C, (e, n) => n ? n.toUpperCase() : ""))
        , TC = /\B([A-Z])/g
        , gi = Rs(t => t.replace(TC, "-$1")
            .toLowerCase())
        , Kc = Rs(t => t.charAt(0)
            .toUpperCase() + t.slice(1))
        , ca = Rs(t => t ? `on${Kc(t)}` : "")
        , la = (t, ...e) => { for (let n = 0; n < t.length; n++) t[n](...e) }
        , vC = (t, e, n, r = !1) => { Object.defineProperty(t, e, { configurable: !0, enumerable: !1, writable: r, value: n }) }
        , EC = t => { const e = parseFloat(t); return isNaN(e) ? t : e };
    let pu;
    const ff = () => pu || (pu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
    Sn = function (t) {
        if (be(t)) {
            const e = {};
            for (let n = 0; n < t.length; n++) {
                const r = t[n]
                    , o = Tt(r) ? wC(r) : Sn(r);
                if (o)
                    for (const i in o) e[i] = o[i]
            }
            return e
        } else if (Tt(t) || ct(t)) return t
    };
    const AC = /;(?![^(]*\))/g
        , bC = /:([^]+)/
        , IC = /\/\*[^]*?\*\//g;
    
    function wC(t) {
        const e = {};
        return t.replace(IC, "")
            .split(AC)
            .forEach(n => {
                if (n) {
                    const r = n.split(bC);
                    r.length > 1 && (e[r[0].trim()] = r[1].trim())
                }
            }), e
    }
    sn = function (t) {
        let e = "";
        if (Tt(t)) e = t;
        else if (be(t))
            for (let n = 0; n < t.length; n++) {
                const r = sn(t[n]);
                r && (e += r + " ")
            } else if (ct(t))
                for (const n in t) t[n] && (e += n + " ");
        return e.trim()
    };
    bO = function (t) { if (!t) return null; let { class: e, style: n } = t; return e && !Tt(e) && (t.class = sn(e)), n && (t.style = Sn(n)), t };
    let pf, gf, ua;
    pf = t => !!(t && t.__v_isRef === !0);
    Ie = t => Tt(t) ? t : t == null ? "" : be(t) || ct(t) && (t.toString === hf || !ye(t.toString)) ? pf(t) ? Ie(t.value) : JSON.stringify(t, gf, 2) : String(t);
    gf = (t, e) => pf(e) ? gf(t, e.value) : mC(e) ? {
        [`Map(${e.size})`]: [...e.entries()].reduce((n, [r, o], i) => (n[ua(r, i) + " =>"] = o, n), {})
    } : yC(e) ? {
        [`Set(${e.size})`]: [...e.values()].map(n => ua(n))
    } : uf(e) ? ua(e) : ct(e) && !be(e) && !CC(e) ? String(e) : e;
    ua = (t, e = "") => { var n; return uf(t) ? `Symbol(${(n=t.description)!=null?n:e})` : t };
    
    function mi(t, e, n, r) { try { return r ? t(...r) : t() } catch (o) { Os(o, e, n) } }
    
    function dn(t, e, n, r) { if (ye(t)) { const o = mi(t, e, n, r); return o && df(o) && o.catch(i => { Os(i, e, n) }), o } if (be(t)) { const o = []; for (let i = 0; i < t.length; i++) o.push(dn(t[i], e, n, r)); return o } }
    
    function Os(t, e, n, r = !0) {
        const o = e ? e.vnode : null
            , { errorHandler: i, throwUnhandledErrorInProduction: s } = e && e.appContext.config || qe;
        if (e) {
            let a = e.parent;
            const c = e.proxy
                , l = `https://vuejs.org/error-reference/#runtime-${n}`;
            for (; a;) {
                const h = a.ec;
                if (h) {
                    for (let f = 0; f < h.length; f++)
                        if (h[f](t, c, l) === !1) return
                }
                a = a.parent
            }
            if (i) { gr(), mi(i, null, 10, [t, c, l]), mr(); return }
        }
        SC(t, n, o, r, s)
    }
    
    function SC(t, e, n, r = !0, o = !1) {
        if (o);
        console.error("bonjour")
    }
    let ni = !1
        , Fa = !1;
    const Lt = [];
    let yn = 0;
    const co = [];
    let nr = null
        , Gr = 0;
    const mf = Promise.resolve();
    let jc = null;
    yf = function (t) { const e = jc || mf; return t ? e.then(this ? t.bind(this) : t) : e };
    
    function kC(t) {
        let e = ni ? yn + 1 : 0
            , n = Lt.length;
        for (; e < n;) {
            const r = e + n >>> 1
                , o = Lt[r]
                , i = ri(o);
            i < t || i === t && o.flags & 2 ? e = r + 1 : n = r
        }
        return e
    }
    
    function qc(t) {
        if (!(t.flags & 1)) {
            const e = ri(t)
                , n = Lt[Lt.length - 1];
            !n || !(t.flags & 2) && e >= ri(n) ? Lt.push(t) : Lt.splice(kC(e), 0, t), t.flags |= 1, Cf()
        }
    }
    
    function Cf() {!ni && !Fa && (Fa = !0, jc = mf.then(Tf)) }
    
    function RC(t) { be(t) ? co.push(...t) : nr && t.id === -1 ? nr.splice(Gr + 1, 0, t) : t.flags & 1 || (co.push(t), t.flags |= 1), Cf() }
    
    function gu(t, e, n = ni ? yn + 1 : 0) {
        for (; n < Lt.length; n++) {
            const r = Lt[n];
            if (r && r.flags & 2) {
                if (t && r.id !== t.uid) continue;
                Lt.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2)
            }
        }
    }
    
    function _f(t) {
        if (co.length) {
            const e = [...new Set(co)].sort((n, r) => ri(n) - ri(r));
            if (co.length = 0, nr) { nr.push(...e); return }
            for (nr = e, Gr = 0; Gr < nr.length; Gr++) {
                const n = nr[Gr];
                n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2
            }
            nr = null, Gr = 0
        }
    }
    const ri = t => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
    
    function Tf(t) {
        Fa = !1, ni = !0;
        try {
            for (yn = 0; yn < Lt.length; yn++) {
                const e = Lt[yn];
                e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), mi(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2))
            }
        } finally {
            for (; yn < Lt.length; yn++) {
                const e = Lt[yn];
                e && (e.flags &= -2)
            }
            yn = 0, Lt.length = 0, _f(), ni = !1, jc = null, (Lt.length || co.length) && Tf()
        }
    }
    let ft = null
        , vf = null;
    
    function os(t) { const e = ft; return ft = t, vf = t && t.type.__scopeId || null, e } Ae = function (t, e = ft, n) { if (!e || t._n) return t; const r = (...o) => { r._d && Su(-1); const i = os(e); let s; try { s = t(...o) } finally { os(i), r._d && Su(1) } return s }; return r._n = !0, r._c = !0, r._d = !0, r };
    Ef = function (t, e) {
        if (ft === null) return t;
        const n = Ds(ft)
            , r = t.dirs || (t.dirs = []);
        for (let o = 0; o < e.length; o++) {
            let [i, s, a, c = qe] = e[o];
            i && (ye(i) && (i = { mounted: i, updated: i }), i.deep && Un(s), r.push({ dir: i, instance: n, value: s, oldValue: void 0, arg: a, modifiers: c }))
        }
        return t
    };
    
    function _r(t, e, n, r) {
        const o = t.dirs
            , i = e && e.dirs;
        for (let s = 0; s < o.length; s++) {
            const a = o[s];
            i && (a.oldValue = i[s].value);
            let c = a.dir[r];
            c && (gr(), dn(c, n, 8, [t.el, a, t, e]), mr())
        }
    }
    const Af = Symbol("_vte")
        , bf = t => t.__isTeleport
        , Go = t => t && (t.disabled || t.disabled === "")
        , OC = t => t && (t.defer || t.defer === "")
        , mu = t => typeof SVGElement < "u" && t instanceof SVGElement
        , yu = t => typeof MathMLElement == "function" && t instanceof MathMLElement
        , Ha = (t, e) => { const n = t && t.to; return Tt(n) ? e ? e(n) : null : n }
        , NC = {
            name: "Teleport"
            , __isTeleport: !0
            , process(t, e, n, r, o, i, s, a, c, l) {
                const { mc: h, pc: f, pbc: g, o: { insert: T, querySelector: A, createText: b, createComment: k } } = l, O = Go(e.props);
                let { shapeFlag: x, children: I, dynamicChildren: w } = e;
                if (t == null) {
                    const M = e.el = b("")
                        , L = e.anchor = b("");
                    T(M, n, r), T(L, n, r);
                    const K = (H, te) => { x & 16 && (o && o.isCE && (o.ce._teleportTarget = H), h(I, H, te, o, i, s, a, c)) }
                        , G = () => {
                            const H = e.target = Ha(e.props, A)
                                , te = If(H, e, b, T);
                            H && (s !== "svg" && mu(H) ? s = "svg" : s !== "mathml" && yu(H) && (s = "mathml"), O || (K(H, te), Vi(e)))
                        };
                    O && (K(n, L), Vi(e)), OC(e.props) ? Ut(G, i) : G()
                } else {
                    e.el = t.el, e.targetStart = t.targetStart;
                    const M = e.anchor = t.anchor
                        , L = e.target = t.target
                        , K = e.targetAnchor = t.targetAnchor
                        , G = Go(t.props)
                        , H = G ? n : L
                        , te = G ? M : K;
                    if (s === "svg" || mu(L) ? s = "svg" : (s === "mathml" || yu(L)) && (s = "mathml"), w ? (g(t.dynamicChildren, w, H, o, i, s, a), Qc(t, e, !0)) : c || f(t, e, H, te, o, i, s, a, !1), O) G ? e.props && t.props && e.props.to !== t.props.to && (e.props.to = t.props.to) : Li(e, n, M, l, 1);
                    else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
                        const de = e.target = Ha(e.props, A);
                        de && Li(e, de, null, l, 0)
                    } else G && Li(e, L, K, l, 1);
                    Vi(e)
                }
            }
            , remove(t, e, n, { um: r, o: { remove: o } }, i) {
                const { shapeFlag: s, children: a, anchor: c, targetStart: l, targetAnchor: h, target: f, props: g } = t;
                if (f && (o(l), o(h)), i && o(c), s & 16) {
                    const T = i || !Go(g);
                    for (let A = 0; A < a.length; A++) {
                        const b = a[A];
                        r(b, e, n, T, !!b.dynamicChildren)
                    }
                }
            }
            , move: Li
            , hydrate: PC
        };
    
    function Li(t, e, n, { o: { insert: r }, m: o }, i = 2) {
        i === 0 && r(t.targetAnchor, e, n);
        const { el: s, anchor: a, shapeFlag: c, children: l, props: h } = t, f = i === 2;
        if (f && r(s, e, n), (!f || Go(h)) && c & 16)
            for (let g = 0; g < l.length; g++) o(l[g], e, n, 2);
        f && r(a, e, n)
    }
    
    function PC(t, e, n, r, o, i, { o: { nextSibling: s, parentNode: a, querySelector: c, insert: l, createText: h } }, f) {
        const g = e.target = Ha(e.props, c);
        if (g) {
            const T = g._lpa || g.firstChild;
            if (e.shapeFlag & 16)
                if (Go(e.props)) e.anchor = f(s(t), e, a(t), n, r, o, i), e.targetStart = T, e.targetAnchor = T && s(T);
                else {
                    e.anchor = s(t);
                    let A = T;
                    for (; A;) {
                        if (A && A.nodeType === 8) {
                            if (A.data === "teleport start anchor") e.targetStart = A;
                            else if (A.data === "teleport anchor") { e.targetAnchor = A, g._lpa = e.targetAnchor && s(e.targetAnchor); break }
                        }
                        A = s(A)
                    }
                    e.targetAnchor || If(g, e, h, l), f(T && s(T), e, g, n, r, o, i)
                } Vi(e)
        }
        return e.anchor && s(e.anchor)
    }
    IO = NC;
    
    function Vi(t) {
        const e = t.ctx;
        if (e && e.ut) {
            let n = t.targetStart;
            for (; n && n !== t.targetAnchor;) n.nodeType === 1 && n.setAttribute("data-v-owner", e.uid), n = n.nextSibling;
            e.ut()
        }
    }
    
    function If(t, e, n, r) {
        const o = e.targetStart = n("")
            , i = e.targetAnchor = n("");
        return o[Af] = i, t && (r(o, t), r(i, t)), i
    }
    const rr = Symbol("_leaveCb")
        , Di = Symbol("_enterCb");
    
    function MC() { const t = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map }; return Vc(() => { t.isMounted = !0 }), Lf(() => { t.isUnmounting = !0 }), t }
    const Yt = [Function, Array]
        , wf = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: Yt, onEnter: Yt, onAfterEnter: Yt, onEnterCancelled: Yt, onBeforeLeave: Yt, onLeave: Yt, onAfterLeave: Yt, onLeaveCancelled: Yt, onBeforeAppear: Yt, onAppear: Yt, onAfterAppear: Yt, onAppearCancelled: Yt }
        , Sf = t => { const e = t.subTree; return e.component ? Sf(e.component) : e }
        , LC = {
            name: "BaseTransition"
            , props: wf
            , setup(t, { slots: e }) {
                const n = Lr()
                    , r = MC();
                return () => {
                    const o = e.default && Of(e.default(), !0);
                    if (!o || !o.length) return;
                    const i = kf(o)
                        , s = Ne(t)
                        , { mode: a } = s;
                    if (r.isLeaving) return da(i);
                    const c = Cu(i);
                    if (!c) return da(i);
                    let l = Ba(c, s, r, n, g => l = g);
                    c.type !== Dt && oi(c, l);
                    const h = n.subTree
                        , f = h && Cu(h);
                    if (f && f.type !== Dt && !Sr(c, f) && Sf(n)
                        .type !== Dt) {
                        const g = Ba(f, s, r, n);
                        if (oi(f, g), a === "out-in" && c.type !== Dt) return r.isLeaving = !0, g.afterLeave = () => { r.isLeaving = !1, n.job.flags & 8 || n.update(), delete g.afterLeave }, da(i);
                        a === "in-out" && c.type !== Dt && (g.delayLeave = (T, A, b) => {
                            const k = Rf(r, f);
                            k[String(f.key)] = f, T[rr] = () => { A(), T[rr] = void 0, delete l.delayedLeave }, l.delayedLeave = b
                        })
                    }
                    return i
                }
            }
        };
    
    function kf(t) {
        let e = t[0];
        if (t.length > 1) {
            for (const n of t)
                if (n.type !== Dt) { e = n; break }
        }
        return e
    }
    const DC = LC;
    
    function Rf(t, e) { const { leavingVNodes: n } = t; let r = n.get(e.type); return r || (r = Object.create(null), n.set(e.type, r)), r }
    
    function Ba(t, e, n, r, o) {
        const { appear: i, mode: s, persisted: a = !1, onBeforeEnter: c, onEnter: l, onAfterEnter: h, onEnterCancelled: f, onBeforeLeave: g, onLeave: T, onAfterLeave: A, onLeaveCancelled: b, onBeforeAppear: k, onAppear: O, onAfterAppear: x, onAppearCancelled: I } = e, w = String(t.key), M = Rf(n, t), L = (H, te) => { H && dn(H, r, 9, te) }, K = (H, te) => {
            const de = te[1];
            L(H, te), be(H) ? H.every(V => V.length <= 1) && de() : H.length <= 1 && de()
        }, G = {
            mode: s
            , persisted: a
            , beforeEnter(H) {
                let te = c;
                if (!n.isMounted)
                    if (i) te = k || c;
                    else return;
                H[rr] && H[rr](!0);
                const de = M[w];
                de && Sr(t, de) && de.el[rr] && de.el[rr](), L(te, [H])
            }
            , enter(H) {
                let te = l
                    , de = h
                    , V = f;
                if (!n.isMounted)
                    if (i) te = O || l, de = x || h, V = I || f;
                    else return;
                let se = !1;
                const He = H[Di] = tt => { se || (se = !0, tt ? L(V, [H]) : L(de, [H]), G.delayedLeave && G.delayedLeave(), H[Di] = void 0) };
                te ? K(te, [H, He]) : He()
            }
            , leave(H, te) {
                const de = String(t.key);
                if (H[Di] && H[Di](!0), n.isUnmounting) return te();
                L(g, [H]);
                let V = !1;
                const se = H[rr] = He => { V || (V = !0, te(), He ? L(b, [H]) : L(A, [H]), H[rr] = void 0, M[de] === t && delete M[de]) };
                M[de] = t, T ? K(T, [H, se]) : se()
            }
            , clone(H) { const te = Ba(H, e, n, r, o); return o && o(te), te }
        };
        return G
    }
    
    function da(t) { if (Ns(t)) return t = hr(t), t.children = null, t }
    
    function Cu(t) { if (!Ns(t)) return bf(t.type) && t.children ? kf(t.children) : t; const { shapeFlag: e, children: n } = t; if (n) { if (e & 16) return n[0]; if (e & 32 && ye(n.default)) return n.default() } }
    
    function oi(t, e) { t.shapeFlag & 6 && t.component ? (t.transition = e, oi(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e }
    
    function Of(t, e = !1, n) {
        let r = []
            , o = 0;
        for (let i = 0; i < t.length; i++) {
            let s = t[i];
            const a = n == null ? s.key : String(n) + String(s.key != null ? s.key : i);
            s.type === ze ? (s.patchFlag & 128 && o++, r = r.concat(Of(s.children, e, a))) : (e || s.type !== Dt) && r.push(a != null ? hr(s, { key: a }) : s)
        }
        if (o > 1)
            for (let i = 0; i < r.length; i++) r[i].patchFlag = -2;
        return r
    }
    yi = function (t, e) { return ye(t) ? St({ name: t.name }, e, { setup: t }) : t };
    
    function Nf(t) { t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0] }
    
    function $a(t, e, n, r, o = !1) {
        if (be(t)) { t.forEach((A, b) => $a(A, e && (be(e) ? e[b] : e), n, r, o)); return }
        if (lo(r) && !o) return;
        const i = r.shapeFlag & 4 ? Ds(r.component) : r.el
            , s = o ? null : i
            , { i: a, r: c } = t
            , l = e && e.r
            , h = a.refs === qe ? a.refs = {} : a.refs
            , f = a.setupState
            , g = Ne(f)
            , T = f === qe ? () => !1 : A => je(g, A);
        if (l != null && l !== c && (Tt(l) ? (h[l] = null, T(l) && (f[l] = null)) : it(l) && (l.value = null)), ye(c)) mi(c, a, 12, [s, h]);
        else {
            const A = Tt(c)
                , b = it(c);
            if (A || b) {
                const k = () => {
                    if (t.f) {
                        const O = A ? T(c) ? f[c] : h[c] : c.value;
                        o ? be(O) && lf(O, i) : be(O) ? O.includes(i) || O.push(i) : A ? (h[c] = [i], T(c) && (f[c] = h[c])) : (c.value = [i], t.k && (h[t.k] = c.value))
                    } else A ? (h[c] = s, T(c) && (f[c] = s)) : b && (c.value = s, t.k && (h[t.k] = s))
                };
                s ? (k.id = -1, Ut(k, n)) : k()
            }
        }
    }
    const lo = t => !!t.type.__asyncLoader
        , Ns = t => t.type.__isKeepAlive;
    
    function xC(t, e) { Pf(t, "a", e) }
    
    function UC(t, e) { Pf(t, "da", e) }
    
    function Pf(t, e, n = yt) {
        const r = t.__wdc || (t.__wdc = () => {
            let o = n;
            for (; o;) {
                if (o.isDeactivated) return;
                o = o.parent
            }
            return t()
        });
        if (Ps(e, r, n), n) { let o = n.parent; for (; o && o.parent;) Ns(o.parent.vnode) && FC(r, e, n, o), o = o.parent }
    }
    
    function FC(t, e, n, r) {
        const o = Ps(e, t, r, !0);
        Gc(() => { lf(r[e], o) }, n)
    }
    
    function Ps(t, e, n = yt, r = !1) {
        if (n) {
            const o = n[t] || (n[t] = [])
                , i = e.__weh || (e.__weh = (...s) => {
                    gr();
                    const a = _i(n)
                        , c = dn(e, n, t, s);
                    return a(), mr(), c
                });
            return r ? o.unshift(i) : o.push(i), i
        }
    }
    let Gn, Mf, BC, Lf, $C, KC, jC;
    Gn = t => (e, n = yt) => {
        (!Ls || t === "sp") && Ps(t, (...r) => e(...r), n)
    };
    Mf = Gn("bm");
    Vc = Gn("m");
    HC = Gn("bu");
    BC = Gn("u");
    Lf = Gn("bum");
    Gc = Gn("um");
    $C = Gn("sp");
    KC = Gn("rtg");
    jC = Gn("rtc");
    
    function qC(t, e = yt) { Ps("ec", t, e) }
    const Df = "components";
    fe = function (t, e) { return Uf(Df, t, !0, e) || t };
    const xf = Symbol.for("v-ndc");
    wO = function (t) { return Tt(t) ? Uf(Df, t, !1) || t : t || xf };
    
    function Uf(t, e, n = !0, r = !1) { const o = ft || yt; if (o) { const i = o.type; { const a = R_(i, !1); if (a && (a === e || a === un(e) || a === Kc(un(e)))) return i } const s = _u(o[t] || i[t], e) || _u(o.appContext[t], e); return !s && r ? i : s } }
    
    function _u(t, e) { return t && (t[e] || t[un(e)] || t[Kc(un(e))]) } Wc = function (t, e, n, r) {
        let o;
        const i = n
            , s = be(t);
        if (s || Tt(t)) {
            const a = s && io(t);
            let c = !1;
            a && (c = !en(t), t = Ss(t)), o = new Array(t.length);
            for (let l = 0, h = t.length; l < h; l++) o[l] = e(c ? bt(t[l]) : t[l], l, void 0, i)
        } else if (typeof t == "number") { o = new Array(t); for (let a = 0; a < t; a++) o[a] = e(a + 1, a, void 0, i) } else if (ct(t))
            if (t[Symbol.iterator]) o = Array.from(t, (a, c) => e(a, c, void 0, i));
            else {
                const a = Object.keys(t);
                o = new Array(a.length);
                for (let c = 0, l = a.length; c < l; c++) {
                    const h = a[c];
                    o[c] = e(t[h], h, c, i)
                }
            }
        else o = [];
        return o
    };
    SO = function (t, e) {
        for (let n = 0; n < e.length; n++) {
            const r = e[n];
            if (be(r))
                for (let o = 0; o < r.length; o++) t[r[o].name] = r[o].fn;
            else r && (t[r.name] = r.key ? (...o) => { const i = r.fn(...o); return i && (i.key = r.key), i } : r.fn)
        }
        return t
    };
    an = function (t, e, n = {}, r, o) {
        if (ft.ce || ft.parent && lo(ft.parent) && ft.parent.ce) return e !== "default" && (n.name = e), Z(), $e(ze, null, [ue("slot", n, r && r())], 64);
        let i = t[e];
        i && i._c && (i._d = !1), Z();
        const s = i && Ff(i(n))
            , a = $e(ze, { key: (n.key || s && s.key || `_${e}`) + (!s && r ? "_fb" : "") }, s || (r ? r() : []), s && t._ === 1 ? 64 : -2);
        return !o && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), i && i._c && (i._d = !0), a
    };
    
    function Ff(t) { return t.some(e => si(e) ? !(e.type === Dt || e.type === ze && !Ff(e.children)) : !0) ? t : null }
    const Ka = t => t ? op(t) ? Ds(t) : Ka(t.parent) : null
        , Wo = St(Object.create(null), { $: t => t, $el: t => t.vnode.el, $data: t => t.data, $props: t => t.props, $attrs: t => t.attrs, $slots: t => t.slots, $refs: t => t.refs, $parent: t => Ka(t.parent), $root: t => Ka(t.root), $host: t => t.ce, $emit: t => t.emit, $options: t => zc(t), $forceUpdate: t => t.f || (t.f = () => { qc(t.update) }), $nextTick: t => t.n || (t.n = yf.bind(t.proxy)), $watch: t => d_.bind(t) })
        , ha = (t, e) => t !== qe && !t.__isScriptSetup && je(t, e)
        , VC = {
            get({ _: t }, e) {
                if (e === "__v_skip") return !0;
                const { ctx: n, setupState: r, data: o, props: i, accessCache: s, type: a, appContext: c } = t;
                let l;
                if (e[0] !== "$") {
                    const T = s[e];
                    if (T !== void 0) switch (T) {
                    case 1:
                        return r[e];
                    case 2:
                        return o[e];
                    case 4:
                        return n[e];
                    case 3:
                        return i[e]
                    } else {
                        if (ha(r, e)) return s[e] = 1, r[e];
                        if (o !== qe && je(o, e)) return s[e] = 2, o[e];
                        if ((l = t.propsOptions[0]) && je(l, e)) return s[e] = 3, i[e];
                        if (n !== qe && je(n, e)) return s[e] = 4, n[e];
                        ja && (s[e] = 0)
                    }
                }
                const h = Wo[e];
                let f, g;
                if (h) return e === "$attrs" && wt(t.attrs, "get", ""), h(t);
                if ((f = a.__cssModules) && (f = f[e])) return f;
                if (n !== qe && je(n, e)) return s[e] = 4, n[e];
                if (g = c.config.globalProperties, je(g, e)) return g[e]
            }
            , set({ _: t }, e, n) { const { data: r, setupState: o, ctx: i } = t; return ha(o, e) ? (o[e] = n, !0) : r !== qe && je(r, e) ? (r[e] = n, !0) : je(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (i[e] = n, !0) }
            , has({ _: { data: t, setupState: e, accessCache: n, ctx: r, appContext: o, propsOptions: i } }, s) { let a; return !!n[s] || t !== qe && je(t, s) || ha(e, s) || (a = i[0]) && je(a, s) || je(r, s) || je(Wo, s) || je(o.config.globalProperties, s) }
            , defineProperty(t, e, n) { return n.get != null ? t._.accessCache[e] = 0 : je(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n) }
        };
    kO = function () {
        return Hf()
            .slots
    };
    RO = function () {
        return Hf()
            .attrs
    };
    
    function Hf() { const t = Lr(); return t.setupContext || (t.setupContext = sp(t)) }
    
    function Tu(t) { return be(t) ? t.reduce((e, n) => (e[n] = null, e), {}) : t }
    let ja = !0;
    
    function GC(t) {
        const e = zc(t)
            , n = t.proxy
            , r = t.ctx;
        ja = !1, e.beforeCreate && vu(e.beforeCreate, t, "bc");
        const { data: o, computed: i, methods: s, watch: a, provide: c, inject: l, created: h, beforeMount: f, mounted: g, beforeUpdate: T, updated: A, activated: b, deactivated: k, beforeDestroy: O, beforeUnmount: x, destroyed: I, unmounted: w, render: M, renderTracked: L, renderTriggered: K, errorCaptured: G, serverPrefetch: H, expose: te, inheritAttrs: de, components: V, directives: se, filters: He } = e;
        if (l && WC(l, r, null), s)
            for (const Ee in s) {
                const Ce = s[Ee];
                ye(Ce) && (r[Ee] = Ce.bind(n))
            }
        if (o) {
            const Ee = o.call(n, n);
            ct(Ee) && (t.data = So(Ee))
        }
        if (ja = !0, i)
            for (const Ee in i) {
                const Ce = i[Ee]
                    , gt = ye(Ce) ? Ce.bind(n, n) : ye(Ce.get) ? Ce.get.bind(n, n) : jn
                    , vt = !ye(Ce) && ye(Ce.set) ? Ce.set.bind(n) : jn
                    , ge = Ze({ get: gt, set: vt });
                Object.defineProperty(r, Ee, { enumerable: !0, configurable: !0, get: () => ge.value, set: ve => ge.value = ve })
            }
        if (a)
            for (const Ee in a) Bf(a[Ee], r, n, Ee);
        if (c) {
            const Ee = ye(c) ? c.call(n) : c;
            Reflect.ownKeys(Ee)
                .forEach(Ce => { Gi(Ce, Ee[Ce]) })
        }
        h && vu(h, t, "c");
        
        function Se(Ee, Ce) { be(Ce) ? Ce.forEach(gt => Ee(gt.bind(n))) : Ce && Ee(Ce.bind(n)) }
        if (Se(Mf, f), Se(Vc, g), Se(HC, T), Se(BC, A), Se(xC, b), Se(UC, k), Se(qC, G), Se(jC, L), Se(KC, K), Se(Lf, x), Se(Gc, w), Se($C, H), be(te))
            if (te.length) {
                const Ee = t.exposed || (t.exposed = {});
                te.forEach(Ce => { Object.defineProperty(Ee, Ce, { get: () => n[Ce], set: gt => n[Ce] = gt }) })
            } else t.exposed || (t.exposed = {});
        M && t.render === jn && (t.render = M), de != null && (t.inheritAttrs = de), V && (t.components = V), se && (t.directives = se), H && Nf(t)
    }
    
    function WC(t, e, n = jn) {
        be(t) && (t = qa(t));
        for (const r in t) {
            const o = t[r];
            let i;
            ct(o) ? "default" in o ? i = In(o.from || r, o.default, !0) : i = In(o.from || r) : i = In(o), it(i) ? Object.defineProperty(e, r, { enumerable: !0, configurable: !0, get: () => i.value, set: s => i.value = s }) : e[r] = i
        }
    }
    
    function vu(t, e, n) { dn(be(t) ? t.map(r => r.bind(e.proxy)) : t.bind(e.proxy), e, n) }
    
    function Bf(t, e, n, r) {
        let o = r.includes(".") ? Zf(n, r) : () => n[r];
        if (Tt(t)) {
            const i = e[t];
            ye(i) && Nr(o, i)
        } else if (ye(t)) Nr(o, t.bind(n));
        else if (ct(t))
            if (be(t)) t.forEach(i => Bf(i, e, n, r));
            else {
                const i = ye(t.handler) ? t.handler.bind(n) : e[t.handler];
                ye(i) && Nr(o, i, t)
            }
    }
    
    function zc(t) {
        const e = t.type
            , { mixins: n, extends: r } = e
            , { mixins: o, optionsCache: i, config: { optionMergeStrategies: s } } = t.appContext
            , a = i.get(e);
        let c;
        return a ? c = a : !o.length && !n && !r ? c = e : (c = {}, o.length && o.forEach(l => is(c, l, s, !0)), is(c, e, s)), ct(e) && i.set(e, c), c
    }
    
    function is(t, e, n, r = !1) {
        const { mixins: o, extends: i } = e;
        i && is(t, i, n, !0), o && o.forEach(s => is(t, s, n, !0));
        for (const s in e)
            if (!(r && s === "expose")) {
                const a = zC[s] || n && n[s];
                t[s] = a ? a(t[s], e[s]) : e[s]
            } return t
    }
    const zC = { data: Eu, props: Au, emits: Au, methods: $o, computed: $o, beforeCreate: Nt, created: Nt, beforeMount: Nt, mounted: Nt, beforeUpdate: Nt, updated: Nt, beforeDestroy: Nt, beforeUnmount: Nt, destroyed: Nt, unmounted: Nt, activated: Nt, deactivated: Nt, errorCaptured: Nt, serverPrefetch: Nt, components: $o, directives: $o, watch: QC, provide: Eu, inject: YC };
    
    function Eu(t, e) { return e ? t ? function () { return St(ye(t) ? t.call(this, this) : t, ye(e) ? e.call(this, this) : e) } : e : t }
    
    function YC(t, e) { return $o(qa(t), qa(e)) }
    
    function qa(t) { if (be(t)) { const e = {}; for (let n = 0; n < t.length; n++) e[t[n]] = t[n]; return e } return t }
    
    function Nt(t, e) { return t ? [...new Set([].concat(t, e))] : e }
    
    function $o(t, e) { return t ? St(Object.create(null), t, e) : e }
    
    function Au(t, e) { return t ? be(t) && be(e) ? [...new Set([...t, ...e])] : St(Object.create(null), Tu(t), Tu(e ?? {})) : e }
    
    function QC(t, e) { if (!t) return e; if (!e) return t; const n = St(Object.create(null), t); for (const r in e) n[r] = Nt(t[r], e[r]); return n }
    
    function $f() { return { app: null, config: { isNativeTag: pC, performance: !1, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: Object.create(null), optionsCache: new WeakMap, propsCache: new WeakMap, emitsCache: new WeakMap } }
    let JC = 0;
    
    function XC(t, e) {
        return function (r, o = null) {
            ye(r) || (r = St({}, r)), o != null && !ct(o) && (o = null);
            const i = $f()
                , s = new WeakSet
                , a = [];
            let c = !1;
            const l = i.app = {
                _uid: JC++
                , _component: r
                , _props: o
                , _container: null
                , _context: i
                , _instance: null
                , version: N_
                , get config() { return i.config }
                , set config(h) {}
                , use(h, ...f) { return s.has(h) || (h && ye(h.install) ? (s.add(h), h.install(l, ...f)) : ye(h) && (s.add(h), h(l, ...f))), l }
                , mixin(h) { return i.mixins.includes(h) || i.mixins.push(h), l }
                , component(h, f) { return f ? (i.components[h] = f, l) : i.components[h] }
                , directive(h, f) { return f ? (i.directives[h] = f, l) : i.directives[h] }
                , mount(h, f, g) { if (!c) { const T = l._ceVNode || ue(r, o); return T.appContext = i, g === !0 ? g = "svg" : g === !1 && (g = void 0), f && e ? e(T, h) : t(T, h, g), c = !0, l._container = h, h.__vue_app__ = l, Ds(T.component) } }
                , onUnmount(h) { a.push(h) }
                , unmount() { c && (dn(a, l._instance, 16), t(null, l._container), delete l._container.__vue_app__) }
                , provide(h, f) { return i.provides[h] = f, l }
                , runWithContext(h) {
                    const f = uo;
                    uo = l;
                    try { return h() } finally { uo = f }
                }
            };
            return l
        }
    }
    let uo = null;
    
    function Gi(t, e) {
        if (yt) {
            let n = yt.provides;
            const r = yt.parent && yt.parent.provides;
            r === n && (n = yt.provides = Object.create(r)), n[t] = e
        }
    }
    
    function In(t, e, n = !1) { const r = yt || ft; if (r || uo) { const o = uo ? uo._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0; if (o && t in o) return o[t]; if (arguments.length > 1) return n && ye(e) ? e.call(r && r.proxy) : e } }
    const Kf = {}
        , jf = () => Object.create(Kf)
        , qf = t => Object.getPrototypeOf(t) === Kf;
    
    function ZC(t, e, n, r = !1) {
        const o = {}
            , i = jf();
        t.propsDefaults = Object.create(null), Vf(t, e, o, i);
        for (const s in t.propsOptions[0]) s in o || (o[s] = void 0);
        n ? t.props = r ? o : rf(o) : t.type.props ? t.props = o : t.props = i, t.attrs = i
    }
    
    function e_(t, e, n, r) {
        const { props: o, attrs: i, vnode: { patchFlag: s } } = t, a = Ne(o), [c] = t.propsOptions;
        let l = !1;
        if ((r || s > 0) && !(s & 16)) {
            if (s & 8) {
                const h = t.vnode.dynamicProps;
                for (let f = 0; f < h.length; f++) {
                    let g = h[f];
                    if (Ms(t.emitsOptions, g)) continue;
                    const T = e[g];
                    if (c)
                        if (je(i, g)) T !== i[g] && (i[g] = T, l = !0);
                        else {
                            const A = un(g);
                            o[A] = Va(c, a, A, T, t, !1)
                        }
                    else T !== i[g] && (i[g] = T, l = !0)
                }
            }
        } else {
            Vf(t, e, o, i) && (l = !0);
            let h;
            for (const f in a)(!e || !je(e, f) && ((h = gi(f)) === f || !je(e, h))) && (c ? n && (n[f] !== void 0 || n[h] !== void 0) && (o[f] = Va(c, a, f, void 0, t, !0)) : delete o[f]);
            if (i !== a)
                for (const f in i)(!e || !je(e, f)) && (delete i[f], l = !0)
        }
        l && Kn(t.attrs, "set", "")
    }
    
    function Vf(t, e, n, r) {
        const [o, i] = t.propsOptions;
        let s = !1
            , a;
        if (e)
            for (let c in e) {
                if (Vo(c)) continue;
                const l = e[c];
                let h;
                o && je(o, h = un(c)) ? !i || !i.includes(h) ? n[h] = l : (a || (a = {}))[h] = l : Ms(t.emitsOptions, c) || (!(c in r) || l !== r[c]) && (r[c] = l, s = !0)
            }
        if (i) {
            const c = Ne(n)
                , l = a || qe;
            for (let h = 0; h < i.length; h++) {
                const f = i[h];
                n[f] = Va(o, c, f, l[f], t, !je(l, f))
            }
        }
        return s
    }
    
    function Va(t, e, n, r, o, i) {
        const s = t[n];
        if (s != null) {
            const a = je(s, "default");
            if (a && r === void 0) {
                const c = s.default;
                if (s.type !== Function && !s.skipFactory && ye(c)) {
                    const { propsDefaults: l } = o;
                    if (n in l) r = l[n];
                    else {
                        const h = _i(o);
                        r = l[n] = c.call(null, e), h()
                    }
                } else r = c;
                o.ce && o.ce._setProp(n, r)
            }
            s[0] && (i && !a ? r = !1 : s[1] && (r === "" || r === gi(n)) && (r = !0))
        }
        return r
    }
    const t_ = new WeakMap;
    
    function Gf(t, e, n = !1) {
        const r = n ? t_ : e.propsCache
            , o = r.get(t);
        if (o) return o;
        const i = t.props
            , s = {}
            , a = [];
        let c = !1;
        if (!ye(t)) {
            const h = f => {
                c = !0;
                const [g, T] = Gf(f, e, !0);
                St(s, g), T && a.push(...T)
            };
            !n && e.mixins.length && e.mixins.forEach(h), t.extends && h(t.extends), t.mixins && t.mixins.forEach(h)
        }
        if (!i && !c) return ct(t) && r.set(t, ao), ao;
        if (be(i))
            for (let h = 0; h < i.length; h++) {
                const f = un(i[h]);
                bu(f) && (s[f] = qe)
            } else if (i)
                for (const h in i) {
                    const f = un(h);
                    if (bu(f)) {
                        const g = i[h]
                            , T = s[f] = be(g) || ye(g) ? { type: g } : St({}, g)
                            , A = T.type;
                        let b = !1
                            , k = !0;
                        if (be(A))
                            for (let O = 0; O < A.length; ++O) {
                                const x = A[O]
                                    , I = ye(x) && x.name;
                                if (I === "Boolean") { b = !0; break } else I === "String" && (k = !1)
                            } else b = ye(A) && A.name === "Boolean";
                        T[0] = b, T[1] = k, (b || je(T, "default")) && a.push(f)
                    }
                }
        const l = [s, a];
        return ct(t) && r.set(t, l), l
    }
    
    function bu(t) { return t[0] !== "$" && !Vo(t) }
    const Wf = t => t[0] === "_" || t === "$stable"
        , Yc = t => be(t) ? t.map(Cn) : [Cn(t)]
        , n_ = (t, e, n) => { if (e._n) return e; const r = Ae((...o) => Yc(e(...o)), n); return r._c = !1, r }
        , zf = (t, e, n) => {
            const r = t._ctx;
            for (const o in t) {
                if (Wf(o)) continue;
                const i = t[o];
                if (ye(i)) e[o] = n_(o, i, r);
                else if (i != null) {
                    const s = Yc(i);
                    e[o] = () => s
                }
            }
        }
        , Yf = (t, e) => {
            const n = Yc(e);
            t.slots.default = () => n
        }
        , Qf = (t, e, n) => { for (const r in e)(n || r !== "_") && (t[r] = e[r]) }
        , r_ = (t, e, n) => {
            const r = t.slots = jf();
            if (t.vnode.shapeFlag & 32) {
                const o = e._;
                o ? (Qf(r, e, n), n && vC(r, "_", o, !0)) : zf(e, r)
            } else e && Yf(t, e)
        }
        , o_ = (t, e, n) => {
            const { vnode: r, slots: o } = t;
            let i = !0
                , s = qe;
            if (r.shapeFlag & 32) {
                const a = e._;
                a ? n && a === 1 ? i = !1 : Qf(o, e, n) : (i = !e.$stable, zf(e, o)), s = e
            } else e && (Yf(t, e), s = { default: 1 });
            if (i)
                for (const a in o) !Wf(a) && s[a] == null && delete o[a]
        }
        , Ut = C_;
    
    function i_(t) { return s_(t) }
    
    function s_(t, e) {
        const n = ff();
        n.__VUE__ = !0;
        const { insert: r, remove: o, patchProp: i, createElement: s, createText: a, createComment: c, setText: l, setElementText: h, parentNode: f, nextSibling: g, setScopeId: T = jn, insertStaticContent: A } = t, b = (E, _, R, m = null, u = null, d = null, C = void 0, p = null, y = !!_.dynamicChildren) => {
            if (E === _) return;
            E && !Sr(E, _) && (m = j(E), ve(E, u, d, !0), E = null), _.patchFlag === -2 && (y = !1, _.dynamicChildren = null);
            const { type: v, ref: D, shapeFlag: $ } = _;
            switch (v) {
            case Ci:
                k(E, _, R, m);
                break;
            case Dt:
                O(E, _, R, m);
                break;
            case Wi:
                E == null && x(_, R, m, C);
                break;
            case ze:
                V(E, _, R, m, u, d, C, p, y);
                break;
            default:
                $ & 1 ? M(E, _, R, m, u, d, C, p, y) : $ & 6 ? se(E, _, R, m, u, d, C, p, y) : ($ & 64 || $ & 128) && v.process(E, _, R, m, u, d, C, p, y, X)
            }
            D != null && u && $a(D, E && E.ref, d, _ || E, !_)
        }, k = (E, _, R, m) => {
            if (E == null) r(_.el = a(_.children), R, m);
            else {
                const u = _.el = E.el;
                _.children !== E.children && l(u, _.children)
            }
        }, O = (E, _, R, m) => { E == null ? r(_.el = c(_.children || ""), R, m) : _.el = E.el }, x = (E, _, R, m) => {
            [E.el, E.anchor] = A(E.children, _, R, m, E.el, E.anchor)
        }, I = ({ el: E, anchor: _ }, R, m) => {
            let u;
            for (; E && E !== _;) u = g(E), r(E, R, m), E = u;
            r(_, R, m)
        }, w = ({ el: E, anchor: _ }) => {
            let R;
            for (; E && E !== _;) R = g(E), o(E), E = R;
            o(_)
        }, M = (E, _, R, m, u, d, C, p, y) => { _.type === "svg" ? C = "svg" : _.type === "math" && (C = "mathml"), E == null ? L(_, R, m, u, d, C, p, y) : H(E, _, u, d, C, p, y) }, L = (E, _, R, m, u, d, C, p) => {
            let y, v;
            const { props: D, shapeFlag: $, transition: B, dirs: S } = E;
            if (y = E.el = s(E.type, d, D && D.is, D), $ & 8 ? h(y, E.children) : $ & 16 && G(E.children, y, null, m, u, fa(E, d), C, p), S && _r(E, null, m, "created"), K(y, E, E.scopeId, C, m), D) { for (const ne in D) ne !== "value" && !Vo(ne) && i(y, ne, null, D[ne], d, m); "value" in D && i(y, "value", null, D.value, d), (v = D.onVnodeBeforeMount) && gn(v, m, E) } S && _r(E, null, m, "beforeMount");
            const P = a_(u, B);
            P && B.beforeEnter(y), r(y, _, R), ((v = D && D.onVnodeMounted) || P || S) && Ut(() => { v && gn(v, m, E), P && B.enter(y), S && _r(E, null, m, "mounted") }, u)
        }, K = (E, _, R, m, u) => {
            if (R && T(E, R), m)
                for (let d = 0; d < m.length; d++) T(E, m[d]);
            if (u) {
                let d = u.subTree;
                if (_ === d || tp(d.type) && (d.ssContent === _ || d.ssFallback === _)) {
                    const C = u.vnode;
                    K(E, C, C.scopeId, C.slotScopeIds, u.parent)
                }
            }
        }, G = (E, _, R, m, u, d, C, p, y = 0) => {
            for (let v = y; v < E.length; v++) {
                const D = E[v] = p ? or(E[v]) : Cn(E[v]);
                b(null, D, _, R, m, u, d, C, p)
            }
        }, H = (E, _, R, m, u, d, C) => {
            const p = _.el = E.el;
            let { patchFlag: y, dynamicChildren: v, dirs: D } = _;
            y |= E.patchFlag & 16;
            const $ = E.props || qe
                , B = _.props || qe;
            let S;
            if (R && Tr(R, !1), (S = B.onVnodeBeforeUpdate) && gn(S, R, _, E), D && _r(_, E, R, "beforeUpdate"), R && Tr(R, !0), ($.innerHTML && B.innerHTML == null || $.textContent && B.textContent == null) && h(p, ""), v ? te(E.dynamicChildren, v, p, R, m, fa(_, u), d) : C || Ce(E, _, p, null, R, m, fa(_, u), d, !1), y > 0) {
                if (y & 16) de(p, $, B, R, u);
                else if (y & 2 && $.class !== B.class && i(p, "class", null, B.class, u), y & 4 && i(p, "style", $.style, B.style, u), y & 8) {
                    const P = _.dynamicProps;
                    for (let ne = 0; ne < P.length; ne++) {
                        const re = P[ne]
                            , Ge = $[re]
                            , Je = B[re];
                        (Je !== Ge || re === "value") && i(p, re, Ge, Je, u, R)
                    }
                }
                y & 1 && E.children !== _.children && h(p, _.children)
            } else !C && v == null && de(p, $, B, R, u);
            ((S = B.onVnodeUpdated) || D) && Ut(() => { S && gn(S, R, _, E), D && _r(_, E, R, "updated") }, m)
        }, te = (E, _, R, m, u, d, C) => {
            for (let p = 0; p < _.length; p++) {
                const y = E[p]
                    , v = _[p]
                    , D = y.el && (y.type === ze || !Sr(y, v) || y.shapeFlag & 70) ? f(y.el) : R;
                b(y, v, D, null, m, u, d, C, !0)
            }
        }, de = (E, _, R, m, u) => {
            if (_ !== R) {
                if (_ !== qe)
                    for (const d in _) !Vo(d) && !(d in R) && i(E, d, _[d], null, u, m);
                for (const d in R) {
                    if (Vo(d)) continue;
                    const C = R[d]
                        , p = _[d];
                    C !== p && d !== "value" && i(E, d, p, C, u, m)
                }
                "value" in R && i(E, "value", _.value, R.value, u)
            }
        }, V = (E, _, R, m, u, d, C, p, y) => {
            const v = _.el = E ? E.el : a("")
                , D = _.anchor = E ? E.anchor : a("");
            let { patchFlag: $, dynamicChildren: B, slotScopeIds: S } = _;
            S && (p = p ? p.concat(S) : S), E == null ? (r(v, R, m), r(D, R, m), G(_.children || [], R, D, u, d, C, p, y)) : $ > 0 && $ & 64 && B && E.dynamicChildren ? (te(E.dynamicChildren, B, R, u, d, C, p), (_.key != null || u && _ === u.subTree) && Qc(E, _, !0)) : Ce(E, _, R, D, u, d, C, p, y)
        }, se = (E, _, R, m, u, d, C, p, y) => { _.slotScopeIds = p, E == null ? _.shapeFlag & 512 ? u.ctx.activate(_, R, m, C, y) : He(_, R, m, u, d, C, y) : tt(E, _, y) }, He = (E, _, R, m, u, d, C) => {
            const p = E.component = I_(E, m, u);
            if (Ns(E) && (p.ctx.renderer = X), w_(p, !1, C), p.asyncDep) {
                if (u && u.registerDep(p, Se, C), !E.el) {
                    const y = p.subTree = ue(Dt);
                    O(null, y, _, R)
                }
            } else Se(p, E, _, R, u, d, C)
        }, tt = (E, _, R) => {
            const m = _.component = E.component;
            if (m_(E, _, R))
                if (m.asyncDep && !m.asyncResolved) { Ee(m, _, R); return } else m.next = _, m.update();
            else _.el = E.el, m.vnode = _
        }, Se = (E, _, R, m, u, d, C) => {
            const p = () => {
                if (E.isMounted) {
                    let { next: $, bu: B, u: S, parent: P, vnode: ne } = E; { const Rt = Jf(E); if (Rt) { $ && ($.el = ne.el, Ee(E, $, C)), Rt.asyncDep.then(() => { E.isUnmounted || p() }); return } }
                    let re = $
                        , Ge;
                    Tr(E, !1), $ ? ($.el = ne.el, Ee(E, $, C)) : $ = ne, B && la(B), (Ge = $.props && $.props.onVnodeBeforeUpdate) && gn(Ge, P, $, ne), Tr(E, !0);
                    const Je = pa(E)
                        , lt = E.subTree;
                    E.subTree = Je, b(lt, Je, f(lt.el), j(lt), E, u, d), $.el = Je.el, re === null && y_(E, Je.el), S && Ut(S, u), (Ge = $.props && $.props.onVnodeUpdated) && Ut(() => gn(Ge, P, $, ne), u)
                } else {
                    let $;
                    const { el: B, props: S } = _, { bm: P, m: ne, parent: re, root: Ge, type: Je } = E, lt = lo(_);
                    if (Tr(E, !1), P && la(P), !lt && ($ = S && S.onVnodeBeforeMount) && gn($, re, _), Tr(E, !0), B && ke) {
                        const Rt = () => { E.subTree = pa(E), ke(B, E.subTree, E, u, null) };
                        lt && Je.__asyncHydrate ? Je.__asyncHydrate(B, E, Rt) : Rt()
                    } else {
                        Ge.ce && Ge.ce._injectChildStyle(Je);
                        const Rt = E.subTree = pa(E);
                        b(null, Rt, R, m, E, u, d), _.el = Rt.el
                    }
                    if (ne && Ut(ne, u), !lt && ($ = S && S.onVnodeMounted)) {
                        const Rt = _;
                        Ut(() => gn($, re, Rt), u)
                    }(_.shapeFlag & 256 || re && lo(re.vnode) && re.vnode.shapeFlag & 256) && E.a && Ut(E.a, u), E.isMounted = !0, _ = R = m = null
                }
            };
            E.scope.on();
            const y = E.effect = new jh(p);
            E.scope.off();
            const v = E.update = y.run.bind(y)
                , D = E.job = y.runIfDirty.bind(y);
            D.i = E, D.id = E.uid, y.scheduler = () => qc(D), Tr(E, !0), v()
        }, Ee = (E, _, R) => {
            _.component = E;
            const m = E.vnode.props;
            E.vnode = _, E.next = null, e_(E, _.props, m, R), o_(E, _.children, R), gr(), gu(E), mr()
        }, Ce = (E, _, R, m, u, d, C, p, y = !1) => {
            const v = E && E.children
                , D = E ? E.shapeFlag : 0
                , $ = _.children
                , { patchFlag: B, shapeFlag: S } = _;
            if (B > 0) { if (B & 128) { vt(v, $, R, m, u, d, C, p, y); return } else if (B & 256) { gt(v, $, R, m, u, d, C, p, y); return } } S & 8 ? (D & 16 && nt(v, u, d), $ !== v && h(R, $)) : D & 16 ? S & 16 ? vt(v, $, R, m, u, d, C, p, y) : nt(v, u, d, !0) : (D & 8 && h(R, ""), S & 16 && G($, R, m, u, d, C, p, y))
        }, gt = (E, _, R, m, u, d, C, p, y) => {
            E = E || ao, _ = _ || ao;
            const v = E.length
                , D = _.length
                , $ = Math.min(v, D);
            let B;
            for (B = 0; B < $; B++) {
                const S = _[B] = y ? or(_[B]) : Cn(_[B]);
                b(E[B], S, R, null, u, d, C, p, y)
            }
            v > D ? nt(E, u, d, !0, !1, $) : G(_, R, m, u, d, C, p, y, $)
        }, vt = (E, _, R, m, u, d, C, p, y) => {
            let v = 0;
            const D = _.length;
            let $ = E.length - 1
                , B = D - 1;
            for (; v <= $ && v <= B;) {
                const S = E[v]
                    , P = _[v] = y ? or(_[v]) : Cn(_[v]);
                if (Sr(S, P)) b(S, P, R, null, u, d, C, p, y);
                else break;
                v++
            }
            for (; v <= $ && v <= B;) {
                const S = E[$]
                    , P = _[B] = y ? or(_[B]) : Cn(_[B]);
                if (Sr(S, P)) b(S, P, R, null, u, d, C, p, y);
                else break;
                $--, B--
            }
            if (v > $) {
                if (v <= B) {
                    const S = B + 1
                        , P = S < D ? _[S].el : m;
                    for (; v <= B;) b(null, _[v] = y ? or(_[v]) : Cn(_[v]), R, P, u, d, C, p, y), v++
                }
            } else if (v > B)
                for (; v <= $;) ve(E[v], u, d, !0), v++;
            else {
                const S = v
                    , P = v
                    , ne = new Map;
                for (v = P; v <= B; v++) {
                    const $t = _[v] = y ? or(_[v]) : Cn(_[v]);
                    $t.key != null && ne.set($t.key, v)
                }
                let re, Ge = 0;
                const Je = B - P + 1;
                let lt = !1
                    , Rt = 0;
                const Kr = new Array(Je);
                for (v = 0; v < Je; v++) Kr[v] = 0;
                for (v = S; v <= $; v++) {
                    const $t = E[v];
                    if (Ge >= Je) { ve($t, u, d, !0); continue }
                    let pn;
                    if ($t.key != null) pn = ne.get($t.key);
                    else
                        for (re = P; re <= B; re++)
                            if (Kr[re - P] === 0 && Sr($t, _[re])) { pn = re; break } pn === void 0 ? ve($t, u, d, !0) : (Kr[pn - P] = v + 1, pn >= Rt ? Rt = pn : lt = !0, b($t, _[pn], R, null, u, d, C, p, y), Ge++)
                }
                const su = lt ? c_(Kr) : ao;
                for (re = su.length - 1, v = Je - 1; v >= 0; v--) {
                    const $t = P + v
                        , pn = _[$t]
                        , au = $t + 1 < D ? _[$t + 1].el : m;
                    Kr[v] === 0 ? b(null, pn, R, au, u, d, C, p, y) : lt && (re < 0 || v !== su[re] ? ge(pn, R, au, 2) : re--)
                }
            }
        }, ge = (E, _, R, m, u = null) => {
            const { el: d, type: C, transition: p, children: y, shapeFlag: v } = E;
            if (v & 6) { ge(E.component.subTree, _, R, m); return }
            if (v & 128) { E.suspense.move(_, R, m); return }
            if (v & 64) { C.move(E, _, R, X); return }
            if (C === ze) {
                r(d, _, R);
                for (let $ = 0; $ < y.length; $++) ge(y[$], _, R, m);
                r(E.anchor, _, R);
                return
            }
            if (C === Wi) { I(E, _, R); return }
            if (m !== 2 && v & 1 && p)
                if (m === 0) p.beforeEnter(d), r(d, _, R), Ut(() => p.enter(d), u);
                else {
                    const { leave: $, delayLeave: B, afterLeave: S } = p, P = () => r(d, _, R), ne = () => { $(d, () => { P(), S && S() }) };
                    B ? B(d, P, ne) : ne()
                }
            else r(d, _, R)
        }, ve = (E, _, R, m = !1, u = !1) => {
            const { type: d, props: C, ref: p, children: y, dynamicChildren: v, shapeFlag: D, patchFlag: $, dirs: B, cacheIndex: S } = E;
            if ($ === -2 && (u = !1), p != null && $a(p, null, R, E, !0), S != null && (_.renderCache[S] = void 0), D & 256) { _.ctx.deactivate(E); return }
            const P = D & 1 && B
                , ne = !lo(E);
            let re;
            if (ne && (re = C && C.onVnodeBeforeUnmount) && gn(re, _, E), D & 6) Bt(E.component, R, m);
            else { if (D & 128) { E.suspense.unmount(R, m); return } P && _r(E, null, _, "beforeUnmount"), D & 64 ? E.type.remove(E, _, R, X, m) : v && !v.hasOnce && (d !== ze || $ > 0 && $ & 64) ? nt(v, _, R, !1, !0) : (d === ze && $ & 384 || !u && D & 16) && nt(y, _, R), m && kt(E) }(ne && (re = C && C.onVnodeUnmounted) || P) && Ut(() => { re && gn(re, _, E), P && _r(E, null, _, "unmounted") }, R)
        }, kt = E => {
            const { type: _, el: R, anchor: m, transition: u } = E;
            if (_ === ze) { Et(R, m); return }
            if (_ === Wi) { w(E); return }
            const d = () => { o(R), u && !u.persisted && u.afterLeave && u.afterLeave() };
            if (E.shapeFlag & 1 && u && !u.persisted) {
                const { leave: C, delayLeave: p } = u, y = () => C(R, d);
                p ? p(E.el, d, y) : y()
            } else d()
        }, Et = (E, _) => {
            let R;
            for (; E !== _;) R = g(E), o(E), E = R;
            o(_)
        }, Bt = (E, _, R) => {
            const { bum: m, scope: u, job: d, subTree: C, um: p, m: y, a: v } = E;
            Iu(y), Iu(v), m && la(m), u.stop(), d && (d.flags |= 8, ve(C, E, _, R)), p && Ut(p, _), Ut(() => { E.isUnmounted = !0 }, _), _ && _.pendingBranch && !_.isUnmounted && E.asyncDep && !E.asyncResolved && E.suspenseId === _.pendingId && (_.deps--, _.deps === 0 && _.resolve())
        }, nt = (E, _, R, m = !1, u = !1, d = 0) => { for (let C = d; C < E.length; C++) ve(E[C], _, R, m, u) }, j = E => {
            if (E.shapeFlag & 6) return j(E.component.subTree);
            if (E.shapeFlag & 128) return E.suspense.next();
            const _ = g(E.anchor || E.el)
                , R = _ && _[Af];
            return R ? g(R) : _
        };
        let Y = !1;
        const z = (E, _, R) => { E == null ? _._vnode && ve(_._vnode, null, null, !0) : b(_._vnode || null, E, _, null, null, null, R), _._vnode = E, Y || (Y = !0, gu(), _f(), Y = !1) }
            , X = { p: b, um: ve, m: ge, r: kt, mt: He, mc: G, pc: Ce, pbc: te, n: j, o: t };
        let _e, ke;
        return { render: z, hydrate: _e, createApp: XC(z, _e) }
    }
    
    function fa({ type: t, props: e }, n) { return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n }
    
    function Tr({ effect: t, job: e }, n) { n ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5) }
    
    function a_(t, e) { return (!t || t && !t.pendingBranch) && e && !e.persisted }
    
    function Qc(t, e, n = !1) {
        const r = t.children
            , o = e.children;
        if (be(r) && be(o))
            for (let i = 0; i < r.length; i++) {
                const s = r[i];
                let a = o[i];
                a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[i] = or(o[i]), a.el = s.el), !n && a.patchFlag !== -2 && Qc(s, a)), a.type === Ci && (a.el = s.el)
            }
    }
    
    function c_(t) {
        const e = t.slice()
            , n = [0];
        let r, o, i, s, a;
        const c = t.length;
        for (r = 0; r < c; r++) {
            const l = t[r];
            if (l !== 0) {
                if (o = n[n.length - 1], t[o] < l) { e[r] = o, n.push(r); continue }
                for (i = 0, s = n.length - 1; i < s;) a = i + s >> 1, t[n[a]] < l ? i = a + 1 : s = a;
                l < t[n[i]] && (i > 0 && (e[r] = n[i - 1]), n[i] = r)
            }
        }
        for (i = n.length, s = n[i - 1]; i-- > 0;) n[i] = s, s = e[s];
        return n
    }
    
    function Jf(t) { const e = t.subTree.component; if (e) return e.asyncDep && !e.asyncResolved ? e : Jf(e) }
    
    function Iu(t) {
        if (t)
            for (let e = 0; e < t.length; e++) t[e].flags |= 8
    }
    const l_ = Symbol.for("v-scx")
        , u_ = () => In(l_);
    Nr = function (t, e, n) { return Xf(t, e, n) };
    
    function Xf(t, e, n = qe) {
        const { immediate: r, deep: o, flush: i, once: s } = n, a = St({}, n);
        let c;
        if (Ls)
            if (i === "sync") {
                const g = u_();
                c = g.__watcherHandles || (g.__watcherHandles = [])
            } else if (!e || r) a.once = !0;
        else { const g = () => {}; return g.stop = jn, g.resume = jn, g.pause = jn, g }
        const l = yt;
        a.call = (g, T, A) => dn(g, l, T, A);
        let h = !1;
        i === "post" ? a.scheduler = g => { Ut(g, l && l.suspense) } : i !== "sync" && (h = !0, a.scheduler = (g, T) => { T ? g() : qc(g) }), a.augmentJob = g => { e && (g.flags |= 4), h && (g.flags |= 2, l && (g.id = l.uid, g.i = l)) };
        const f = hC(t, e, a);
        return c && c.push(f), f
    }
    
    function d_(t, e, n) {
        const r = this.proxy
            , o = Tt(t) ? t.includes(".") ? Zf(r, t) : () => r[t] : t.bind(r, r);
        let i;
        ye(e) ? i = e : (i = e.handler, n = e);
        const s = _i(this)
            , a = Xf(o, i.bind(r), n);
        return s(), a
    }
    
    function Zf(t, e) { const n = e.split("."); return () => { let r = t; for (let o = 0; o < n.length && r; o++) r = r[n[o]]; return r } }
    const h_ = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${un(e)}Modifiers`] || t[`${gi(e)}Modifiers`];
    
    function f_(t, e, ...n) {
        if (t.isUnmounted) return;
        const r = t.vnode.props || qe;
        let o = n;
        const i = e.startsWith("update:")
            , s = i && h_(r, e.slice(7));
        s && (s.trim && (o = n.map(h => Tt(h) ? h.trim() : h)), s.number && (o = n.map(EC)));
        let a, c = r[a = ca(e)] || r[a = ca(un(e))];
        !c && i && (c = r[a = ca(gi(e))]), c && dn(c, t, 6, o);
        const l = r[a + "Once"];
        if (l) {
            if (!t.emitted) t.emitted = {};
            else if (t.emitted[a]) return;
            t.emitted[a] = !0, dn(l, t, 6, o)
        }
    }
    
    function ep(t, e, n = !1) {
        const r = e.emitsCache
            , o = r.get(t);
        if (o !== void 0) return o;
        const i = t.emits;
        let s = {}
            , a = !1;
        if (!ye(t)) {
            const c = l => {
                const h = ep(l, e, !0);
                h && (a = !0, St(s, h))
            };
            !n && e.mixins.length && e.mixins.forEach(c), t.extends && c(t.extends), t.mixins && t.mixins.forEach(c)
        }
        return !i && !a ? (ct(t) && r.set(t, null), null) : (be(i) ? i.forEach(c => s[c] = null) : St(s, i), ct(t) && r.set(t, s), s)
    }
    
    function Ms(t, e) {
        return !t || !Bc(e) ? !1 : (e = e.slice(2)
            .replace(/Once$/, ""), je(t, e[0].toLowerCase() + e.slice(1)) || je(t, gi(e)) || je(t, e))
    }
    
    function pa(t) {
        const { type: e, vnode: n, proxy: r, withProxy: o, propsOptions: [i], slots: s, attrs: a, emit: c, render: l, renderCache: h, props: f, data: g, setupState: T, ctx: A, inheritAttrs: b } = t, k = os(t);
        let O, x;
        try {
            if (n.shapeFlag & 4) {
                const w = o || r
                    , M = w;
                O = Cn(l.call(M, w, h, f, T, g, A)), x = a
            } else {
                const w = e;
                O = Cn(w.length > 1 ? w(f, { attrs: a, slots: s, emit: c }) : w(f, null)), x = e.props ? a : p_(a)
            }
        } catch (w) { zo.length = 0, Os(w, t, 1), O = ue(Dt) }
        let I = O;
        if (x && b !== !1) {
            const w = Object.keys(x)
                , { shapeFlag: M } = I;
            w.length && M & 7 && (i && w.some(cf) && (x = g_(x, i)), I = hr(I, x, !1, !0))
        }
        return n.dirs && (I = hr(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs), n.transition && oi(I, n.transition), O = I, os(k), O
    }
    const p_ = t => { let e; for (const n in t)(n === "class" || n === "style" || Bc(n)) && ((e || (e = {}))[n] = t[n]); return e }
        , g_ = (t, e) => { const n = {}; for (const r in t)(!cf(r) || !(r.slice(9) in e)) && (n[r] = t[r]); return n };
    
    function m_(t, e, n) { const { props: r, children: o, component: i } = t, { props: s, children: a, patchFlag: c } = e, l = i.emitsOptions; if (e.dirs || e.transition) return !0; if (n && c >= 0) { if (c & 1024) return !0; if (c & 16) return r ? wu(r, s, l) : !!s; if (c & 8) { const h = e.dynamicProps; for (let f = 0; f < h.length; f++) { const g = h[f]; if (s[g] !== r[g] && !Ms(l, g)) return !0 } } } else return (o || a) && (!a || !a.$stable) ? !0 : r === s ? !1 : r ? s ? wu(r, s, l) : !0 : !!s; return !1 }
    
    function wu(t, e, n) {
        const r = Object.keys(e);
        if (r.length !== Object.keys(t)
            .length) return !0;
        for (let o = 0; o < r.length; o++) { const i = r[o]; if (e[i] !== t[i] && !Ms(n, i)) return !0 }
        return !1
    }
    
    function y_({ vnode: t, parent: e }, n) {
        for (; e;) {
            const r = e.subTree;
            if (r.suspense && r.suspense.activeBranch === t && (r.el = t.el), r === t)(t = e.vnode)
                .el = n, e = e.parent;
            else break
        }
    }
    const tp = t => t.__isSuspense;
    
    function C_(t, e) { e && e.pendingBranch ? be(t) ? e.effects.push(...t) : e.effects.push(t) : RC(t) }
    let Ci, Dt, Wi, zo;
    ze = Symbol.for("v-fgt");
    Ci = Symbol.for("v-txt");
    Dt = Symbol.for("v-cmt");
    Wi = Symbol.for("v-stc");
    zo = [];
    let qt = null;
    Z = function (t = !1) { zo.push(qt = t ? null : []) };
    
    function __() { zo.pop(), qt = zo[zo.length - 1] || null }
    let ii = 1;
    
    function Su(t) { ii += t, t < 0 && qt && (qt.hasOnce = !0) }
    
    function np(t) { return t.dynamicChildren = ii > 0 ? qt || ao : null, __(), ii > 0 && qt && qt.push(t), t } we = function (t, e, n, r, o, i) { return np(Q(t, e, n, r, o, i, !0)) };
    $e = function (t, e, n, r, o) { return np(ue(t, e, n, r, o, !0)) };
    
    function si(t) { return t ? t.__v_isVNode === !0 : !1 }
    
    function Sr(t, e) { return t.type === e.type && t.key === e.key }
    const rp = ({ key: t }) => t ?? null
        , zi = ({ ref: t, ref_key: e, ref_for: n }) => (typeof t == "number" && (t = "" + t), t != null ? Tt(t) || it(t) || ye(t) ? { i: ft, r: t, k: e, f: !!n } : t : null);
    Q = function (t, e = null, n = null, r = 0, o = null, i = t === ze ? 0 : 1, s = !1, a = !1) { const c = { __v_isVNode: !0, __v_skip: !0, type: t, props: e, key: e && rp(e), ref: e && zi(e), scopeId: vf, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: i, patchFlag: r, dynamicProps: o, dynamicChildren: null, appContext: null, ctx: ft }; return a ? (Jc(c, n), i & 128 && t.normalize(c)) : n && (c.shapeFlag |= Tt(n) ? 8 : 16), ii > 0 && !s && qt && (c.patchFlag > 0 || i & 6) && c.patchFlag !== 32 && qt.push(c), c };
    ue = T_;
    
    function T_(t, e = null, n = null, r = 0, o = null, i = !1) {
        if ((!t || t === xf) && (t = Dt), si(t)) { const a = hr(t, e, !0); return n && Jc(a, n), ii > 0 && !i && qt && (a.shapeFlag & 6 ? qt[qt.indexOf(t)] = a : qt.push(a)), a.patchFlag = -2, a }
        if (O_(t) && (t = t.__vccOpts), e) {
            e = v_(e);
            let { class: a, style: c } = e;
            a && !Tt(a) && (e.class = sn(a)), ct(c) && (Uc(c) && !be(c) && (c = St({}, c)), e.style = Sn(c))
        }
        const s = Tt(t) ? 1 : tp(t) ? 128 : bf(t) ? 64 : ct(t) ? 4 : ye(t) ? 2 : 0;
        return Q(t, e, n, r, o, s, i, !0)
    }
    v_ = function (t) { return t ? Uc(t) || qf(t) ? St({}, t) : t : null };
    
    function hr(t, e, n = !1, r = !1) { const { props: o, ref: i, patchFlag: s, children: a, transition: c } = t, l = e ? E_(o || {}, e) : o, h = { __v_isVNode: !0, __v_skip: !0, type: t.type, props: l, key: l && rp(l), ref: e && e.ref ? n && i ? be(i) ? i.concat(zi(e)) : [i, zi(e)] : zi(e) : i, scopeId: t.scopeId, slotScopeIds: t.slotScopeIds, children: a, target: t.target, targetStart: t.targetStart, targetAnchor: t.targetAnchor, staticCount: t.staticCount, shapeFlag: t.shapeFlag, patchFlag: e && t.type !== ze ? s === -1 ? 16 : s | 16 : s, dynamicProps: t.dynamicProps, dynamicChildren: t.dynamicChildren, appContext: t.appContext, dirs: t.dirs, transition: c, component: t.component, suspense: t.suspense, ssContent: t.ssContent && hr(t.ssContent), ssFallback: t.ssFallback && hr(t.ssFallback), el: t.el, anchor: t.anchor, ctx: t.ctx, ce: t.ce }; return c && r && oi(h, c.clone(h)), h } dt = function (t = " ", e = 0) { return ue(Ci, null, t, e) };
    OO = function (t, e) { const n = ue(Wi, null, t); return n.staticCount = e, n };
    Zt = function (t = "", e = !1) { return e ? (Z(), $e(Dt, null, t)) : ue(Dt, null, t) };
    
    function Cn(t) { return t == null || typeof t == "boolean" ? ue(Dt) : be(t) ? ue(ze, null, t.slice()) : si(t) ? or(t) : ue(Ci, null, String(t)) }
    
    function or(t) { return t.el === null && t.patchFlag !== -1 || t.memo ? t : hr(t) }
    
    function Jc(t, e) {
        let n = 0;
        const { shapeFlag: r } = t;
        if (e == null) e = null;
        else if (be(e)) n = 16;
        else if (typeof e == "object")
            if (r & 65) {
                const o = e.default;
                o && (o._c && (o._d = !1), Jc(t, o()), o._c && (o._d = !0));
                return
            } else { n = 32; const o = e._;!o && !qf(e) ? e._ctx = ft : o === 3 && ft && (ft.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024)) }
        else ye(e) ? (e = { default: e, _ctx: ft }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [dt(e)]) : n = 8);
        t.children = e, t.shapeFlag |= n
    }
    E_ = function (...t) {
        const e = {};
        for (let n = 0; n < t.length; n++) {
            const r = t[n];
            for (const o in r)
                if (o === "class") e.class !== r.class && (e.class = sn([e.class, r.class]));
                else if (o === "style") e.style = Sn([e.style, r.style]);
            else if (Bc(o)) {
                const i = e[o]
                    , s = r[o];
                s && i !== s && !(be(i) && i.includes(s)) && (e[o] = i ? [].concat(i, s) : s)
            } else o !== "" && (e[o] = r[o])
        }
        return e
    };
    
    function gn(t, e, n, r = null) { dn(t, e, 7, [n, r]) }
    const A_ = $f();
    let b_ = 0;
    
    function I_(t, e, n) {
        const r = t.type
            , o = (e ? e.appContext : t.appContext) || A_
            , i = { uid: b_++, vnode: t, type: r, parent: e, appContext: o, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new Kh(!0), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: e ? e.provides : Object.create(o.provides), ids: e ? e.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: Gf(r, o), emitsOptions: ep(r, o), emit: null, emitted: null, propsDefaults: qe, inheritAttrs: r.inheritAttrs, ctx: qe, data: qe, props: qe, attrs: qe, slots: qe, refs: qe, setupState: qe, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: !1, isMounted: !1, isUnmounted: !1, isDeactivated: !1, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
        return i.ctx = { _: i }, i.root = e ? e.root : i, i.emit = f_.bind(null, i), t.ce && t.ce(i), i
    }
    let yt = null;
    const Lr = () => yt || ft;
    let ss, Ga;
    {
        const t = ff()
            , e = (n, r) => { let o; return (o = t[n]) || (o = t[n] = []), o.push(r), i => { o.length > 1 ? o.forEach(s => s(i)) : o[0](i) } };
        ss = e("__VUE_INSTANCE_SETTERS__", n => yt = n), Ga = e("__VUE_SSR_SETTERS__", n => Ls = n)
    }
    const _i = t => { const e = yt; return ss(t), t.scope.on(), () => { t.scope.off(), ss(e) } }
        , ku = () => { yt && yt.scope.off(), ss(null) };
    
    function op(t) { return t.vnode.shapeFlag & 4 }
    let Ls = !1;
    
    function w_(t, e = !1, n = !1) {
        e && Ga(e);
        const { props: r, children: o } = t.vnode, i = op(t);
        ZC(t, r, i, e), r_(t, o, n);
        const s = i ? S_(t, e) : void 0;
        return e && Ga(!1), s
    }
    
    function S_(t, e) {
        const n = t.type;
        t.accessCache = Object.create(null), t.proxy = new Proxy(t.ctx, VC);
        const { setup: r } = n;
        if (r) {
            const o = t.setupContext = r.length > 1 ? sp(t) : null
                , i = _i(t);
            gr();
            const s = mi(r, t, 0, [t.props, o]);
            if (mr(), i(), df(s)) {
                if (lo(t) || Nf(t), s.then(ku, ku), e) return s.then(a => { Ru(t, a, e) })
                    .catch(a => { Os(a, t, 0) });
                t.asyncDep = s
            } else Ru(t, s, e)
        } else ip(t, e)
    }
    
    function Ru(t, e, n) { ye(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : ct(e) && (t.setupState = af(e)), ip(t, n) }
    let Ou;
    
    function ip(t, e, n) {
        const r = t.type;
        if (!t.render) {
            if (!e && Ou && !r.render) {
                const o = r.template || zc(t)
                    .template;
                if (o) {
                    const { isCustomElement: i, compilerOptions: s } = t.appContext.config, { delimiters: a, compilerOptions: c } = r, l = St(St({ isCustomElement: i, delimiters: a }, s), c);
                    r.render = Ou(o, l)
                }
            }
            t.render = r.render || jn
        } {
            const o = _i(t);
            gr();
            try { GC(t) } finally { mr(), o() }
        }
    }
    const k_ = { get(t, e) { return wt(t, "get", ""), t[e] } };
    
    function sp(t) { const e = n => { t.exposed = n || {} }; return { attrs: new Proxy(t.attrs, k_), slots: t.slots, emit: t.emit, expose: e } }
    
    function Ds(t) { return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(af(rC(t.exposed)), { get(e, n) { if (n in e) return e[n]; if (n in Wo) return Wo[n](t) }, has(e, n) { return n in e || n in Wo } })) : t.proxy }
    
    function R_(t, e = !0) { return ye(t) ? t.displayName || t.name : t.name || e && t.__name }
    
    function O_(t) { return ye(t) && "__vccOpts" in t } Ze = (t, e) => uC(t, e, Ls);
    ko = function (t, e, n) { const r = arguments.length; return r === 2 ? ct(e) && !be(e) ? si(e) ? ue(t, null, [e]) : ue(t, e) : ue(t, null, e) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && si(n) && (n = [n]), ue(t, e, n)) };
    const N_ = "3.5.9";
    
    function P_(t) { const e = Object.create(null); for (const n of t.split(",")) e[n] = 1; return n => n in e }
    const M_ = t => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97)
        , L_ = t => t.startsWith("onUpdate:")
        , Xc = Object.assign
        , Ti = Array.isArray
        , ap = t => typeof t == "function"
        , go = t => typeof t == "string"
        , D_ = t => typeof t == "symbol"
        , x_ = t => t !== null && typeof t == "object"
        , cp = t => { const e = Object.create(null); return n => e[n] || (e[n] = t(n)) }
        , U_ = /\B([A-Z])/g
        , Zc = cp(t => t.replace(U_, "-$1")
            .toLowerCase())
        , F_ = cp(t => t.charAt(0)
            .toUpperCase() + t.slice(1))
        , H_ = (t, ...e) => { for (let n = 0; n < t.length; n++) t[n](...e) }
        , Nu = t => { const e = parseFloat(t); return isNaN(e) ? t : e }
        , B_ = t => { const e = go(t) ? Number(t) : NaN; return isNaN(e) ? t : e }
        , $_ = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
        , K_ = P_($_);
    
    function lp(t) { return !!t || t === "" }
    let Wa;
    const Pu = typeof window < "u" && window.trustedTypes;
    if (Pu) try { Wa = Pu.createPolicy("vue", { createHTML: t => t }) } catch {}
    let up, j_, q_, Dn, Mu, V_, zn, Do, ai, dp, G_, W_, vr, Lu;
    up = Wa ? t => Wa.createHTML(t) : t => t;
    j_ = "http://www.w3.org/2000/svg";
    q_ = "http://www.w3.org/1998/Math/MathML";
    Dn = typeof document < "u" ? document : null;
    Mu = Dn && Dn.createElement("template");
    V_ = {
        insert: (t, e, n) => { e.insertBefore(t, n || null) }
        , remove: t => {
            const e = t.parentNode;
            e && e.removeChild(t)
        }
        , createElement: (t, e, n, r) => { const o = e === "svg" ? Dn.createElementNS(j_, t) : e === "mathml" ? Dn.createElementNS(q_, t) : n ? Dn.createElement(t, { is: n }) : Dn.createElement(t); return t === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o }
        , createText: t => Dn.createTextNode(t)
        , createComment: t => Dn.createComment(t)
        , setText: (t, e) => { t.nodeValue = e }
        , setElementText: (t = "jhsfdajlkhasdfdsaf", e) => { t.textContent = e }
        , parentNode: t => t.parentNode
        , nextSibling: t => t
        , querySelector: t => Dn.querySelector(t)
        , setScopeId(t, e) { t.setAttribute(e, "") }
        , insertStaticContent(t, e, n, r, o, i) {
            const s = n ? n.previousSibling : e.lastChild;
            if (o && (o === i || o.nextSibling))
                for (; e.insertBefore(o.cloneNode(!0), n), !(o === i || !(o = o.nextSibling)););
            else {
                Mu.innerHTML = up(r === "svg" ? `<svg>${t}</svg>` : r === "mathml" ? `<math>${t}</math>` : t);
                const a = Mu.content;
                if (r === "svg" || r === "mathml") {
                    const c = a.firstChild;
                    for (; c.firstChild;) a.appendChild(c.firstChild);
                    a.removeChild(c)
                }
                e.insertBefore(a, n)
            }
            return [s ? s.nextSibling : e.firstChild, n ? n.previousSibling : e.lastChild]
        }
    };
    zn = "transition";
    Do = "animation";
    ai = Symbol("_vtc");
    dp = { name: String, type: String, css: { type: Boolean, default: !0 }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String };
    G_ = Xc({}, wf, dp);
    W_ = t => (t.displayName = "Transition", t.props = G_, t);
    el = W_((t, { slots: e }) => ko(DC, z_(t), e));
    vr = (t, e = []) => { Ti(t) ? t.forEach(n => n(...e)) : t && t(...e) };
    Lu = t => t ? Ti(t) ? t.some(e => e.length > 1) : t.length > 1 : !1;
    
    function z_(t) {
        const e = {};
        for (const V in t) V in dp || (e[V] = t[V]);
        if (t.css === !1) return e;
        const { name: n = "v", type: r, duration: o, enterFromClass: i = `${n}-enter-from`, enterActiveClass: s = `${n}-enter-active`, enterToClass: a = `${n}-enter-to`, appearFromClass: c = i, appearActiveClass: l = s, appearToClass: h = a, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: g = `${n}-leave-active`, leaveToClass: T = `${n}-leave-to` } = t, A = Y_(o), b = A && A[0], k = A && A[1], { onBeforeEnter: O, onEnter: x, onEnterCancelled: I, onLeave: w, onLeaveCancelled: M, onBeforeAppear: L = O, onAppear: K = x, onAppearCancelled: G = I } = e, H = (V, se, He) => { Er(V, se ? h : a), Er(V, se ? l : s), He && He() }, te = (V, se) => { V._isLeaving = !1, Er(V, f), Er(V, T), Er(V, g), se && se() }, de = V => (se, He) => {
            const tt = V ? K : x
                , Se = () => H(se, V, He);
            vr(tt, [se, Se]), Du(() => { Er(se, V ? c : i), Yn(se, V ? h : a), Lu(tt) || xu(se, r, b, Se) })
        };
        return Xc(e, {
            onBeforeEnter(V) { vr(O, [V]), Yn(V, i), Yn(V, s) }
            , onBeforeAppear(V) { vr(L, [V]), Yn(V, c), Yn(V, l) }
            , onEnter: de(!1)
            , onAppear: de(!0)
            , onLeave(V, se) {
                V._isLeaving = !0;
                const He = () => te(V, se);
                Yn(V, f), Yn(V, g), X_(), Du(() => { V._isLeaving && (Er(V, f), Yn(V, T), Lu(w) || xu(V, r, k, He)) }), vr(w, [V, He])
            }
            , onEnterCancelled(V) { H(V, !1), vr(I, [V]) }
            , onAppearCancelled(V) { H(V, !0), vr(G, [V]) }
            , onLeaveCancelled(V) { te(V), vr(M, [V]) }
        })
    }
    
    function Y_(t) { if (t == null) return null; if (x_(t)) return [ga(t.enter), ga(t.leave)]; { const e = ga(t); return [e, e] } }
    
    function ga(t) { return B_(t) }
    
    function Yn(t, e) {
        e.split(/\s+/)
            .forEach(n => n && t.classList.add(n)), (t[ai] || (t[ai] = new Set))
            .add(e)
    }
    
    function Er(t, e) {
        e.split(/\s+/)
            .forEach(r => r && t.classList.remove(r));
        const n = t[ai];
        n && (n.delete(e), n.size || (t[ai] = void 0))
    }
    
    function Du(t) { requestAnimationFrame(() => { requestAnimationFrame(t) }) }
    let Q_ = 0;
    
    function xu(t, e, n, r) {
        const o = t._endId = ++Q_
            , i = () => { o === t._endId && r() };
        if (n != null) return setTimeout(i, n);
        const { type: s, timeout: a, propCount: c } = J_(t, e);
        if (!s) return r();
        const l = s + "end";
        let h = 0;
        const f = () => { t.removeEventListener(l, g), i() }
            , g = T => { T.target === t && ++h >= c && f() };
        setTimeout(() => { h < c && f() }, a + 1), t.addEventListener(l, g)
    }
    
    function J_(t, e) {
        const n = window.getComputedStyle(t)
            , r = A => (n[A] || "")
            .split(", ")
            , o = r(`${zn}Delay`)
            , i = r(`${zn}Duration`)
            , s = Uu(o, i)
            , a = r(`${Do}Delay`)
            , c = r(`${Do}Duration`)
            , l = Uu(a, c);
        let h = null
            , f = 0
            , g = 0;
        e === zn ? s > 0 && (h = zn, f = s, g = i.length) : e === Do ? l > 0 && (h = Do, f = l, g = c.length) : (f = Math.max(s, l), h = f > 0 ? s > l ? zn : Do : null, g = h ? h === zn ? i.length : c.length : 0);
        const T = h === zn && /\b(transform|all)(,|$)/.test(r(`${zn}Property`)
            .toString());
        return { type: h, timeout: f, propCount: g, hasTransform: T }
    }
    
    function Uu(t, e) { for (; t.length < e.length;) t = t.concat(t); return Math.max(...e.map((n, r) => Fu(n) + Fu(t[r]))) }
    
    function Fu(t) {
        return t === "auto" ? 0 : Number(t.slice(0, -1)
            .replace(",", ".")) * 1e3
    }
    
    function X_() { return document.body.offsetHeight }
    
    function Z_(t, e, n) {
        const r = t[ai];
        r && (e = (e ? [e, ...r] : [...r])
            .join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e
    }
    let as, hp;
    as = Symbol("_vod");
    hp = Symbol("_vsh");
    fp = { beforeMount(t, { value: e }, { transition: n }) { t[as] = t.style.display === "none" ? "" : t.style.display, n && e ? n.beforeEnter(t) : xo(t, e) }, mounted(t, { value: e }, { transition: n }) { n && e && n.enter(t) }, updated(t, { value: e, oldValue: n }, { transition: r }) {!e != !n && (r ? e ? (r.beforeEnter(t), xo(t, !0), r.enter(t)) : r.leave(t, () => { xo(t, !1) }) : xo(t, e)) }, beforeUnmount(t, { value: e }) { xo(t, e) } };
    
    function xo(t, e) { t.style.display = e ? t[as] : "none", t[hp] = !e }
    const eT = Symbol("")
        , tT = /(^|;)\s*display\s*:/;
    
    function nT(t, e, n) {
        const r = t.style
            , o = go(n);
        let i = !1;
        if (n && !o) {
            if (e)
                if (go(e))
                    for (const s of e.split(";")) {
                        const a = s.slice(0, s.indexOf(":"))
                            .trim();
                        n[a] == null && Yi(r, a, "")
                    } else
                        for (const s in e) n[s] == null && Yi(r, s, "");
            for (const s in n) s === "display" && (i = !0), Yi(r, s, n[s])
        } else if (o) {
            if (e !== n) {
                const s = r[eT];
                s && (n += ";" + s), r.cssText = n, i = tT.test(n)
            }
        } else e && t.removeAttribute("style");
        as in t && (t[as] = i ? r.display : "", t[hp] && (r.display = "none"))
    }
    const Hu = /\s*!important$/;
    
    function Yi(t, e, n) {
        if (Ti(n)) n.forEach(r => Yi(t, e, r));
        else if (n == null && (n = ""), e.startsWith("--")) t.setProperty(e, n);
        else {
            const r = rT(t, e);
            Hu.test(n) ? t.setProperty(Zc(r), n.replace(Hu, ""), "important") : t[r] = n
        }
    }
    const Bu = ["Webkit", "Moz", "ms"]
        , ma = {};
    
    function rT(t, e) {
        const n = ma[e];
        if (n) return n;
        let r = un(e);
        if (r !== "filter" && r in t) return ma[e] = r;
        r = F_(r);
        for (let o = 0; o < Bu.length; o++) { const i = Bu[o] + r; if (i in t) return ma[e] = i }
        return e
    }
    const $u = "http://www.w3.org/1999/xlink";
    
    function Ku(t, e, n, r, o, i = K_(e)) { r && e.startsWith("xlink:") ? n == null ? t.removeAttributeNS($u, e.slice(6, e.length)) : t.setAttributeNS($u, e, n) : n == null || i && !lp(n) ? t.removeAttribute(e) : t.setAttribute(e, i ? "" : D_(n) ? String(n) : n) }
    
    function oT(t, e, n, r) {
        if (e === "innerHTML" || e === "textContent") { n != null && (t[e] = e === "innerHTML" ? up(n) : n); return }
        const o = t.tagName;
        if (e === "value" && o !== "PROGRESS" && !o.includes("-")) {
            const s = o === "OPTION" ? t.getAttribute("value") || "" : t.value
                , a = n == null ? t.type === "checkbox" ? "on" : "" : String(n);
            (s !== a || !("_value" in t)) && (t.value = a), n == null && t.removeAttribute(e), t._value = n;
            return
        }
        let i = !1;
        if (n === "" || n == null) {
            const s = typeof t[e];
            s === "boolean" ? n = lp(n) : n == null && s === "string" ? (n = "", i = !0) : s === "number" && (n = 0, i = !0)
        }
        try { t[e] = n } catch {} i && t.removeAttribute(e)
    }
    
    function Wr(t, e, n, r) { t.addEventListener(e, n, r) }
    
    function iT(t, e, n, r) { t.removeEventListener(e, n, r) }
    const ju = Symbol("_vei");
    
    function sT(t, e, n, r, o = null) {
        const i = t[ju] || (t[ju] = {})
            , s = i[e];
        if (r && s) s.value = r;
        else {
            const [a, c] = aT(e);
            if (r) {
                const l = i[e] = uT(r, o);
                Wr(t, a, l, c)
            } else s && (iT(t, a, s, c), i[e] = void 0)
        }
    }
    const qu = /(?:Once|Passive|Capture)$/;
    
    function aT(t) { let e; if (qu.test(t)) { e = {}; let r; for (; r = t.match(qu);) t = t.slice(0, t.length - r[0].length), e[r[0].toLowerCase()] = !0 } return [t[2] === ":" ? t.slice(3) : Zc(t.slice(2)), e] }
    let ya = 0;
    const cT = Promise.resolve()
        , lT = () => ya || (cT.then(() => ya = 0), ya = Date.now());
    
    function uT(t, e) {
        const n = r => {
            if (!r._vts) r._vts = Date.now();
            else if (r._vts <= n.attached) return;
            dn(dT(r, n.value), e, 5, [r])
        };
        return n.value = t, n.attached = lT(), n
    }
    
    function dT(t, e) { if (Ti(e)) { const n = t.stopImmediatePropagation; return t.stopImmediatePropagation = () => { n.call(t), t._stopped = !0 }, e.map(r => o => !o._stopped && r && r(o)) } else return e }
    const Vu = t => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123
        , hT = (t, e, n, r, o, i) => {
            const s = o === "svg";
            e === "class" ? Z_(t, r, s) : e === "style" ? nT(t, n, r) : M_(e) ? L_(e) || sT(t, e, n, r, i) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : fT(t, e, r, s)) ? (oT(t, e, r), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && Ku(t, e, r, s, i, e !== "value")) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r), Ku(t, e, r, s))
        };
    
    function fT(t, e, n, r) { if (r) return !!(e === "innerHTML" || e === "textContent" || e in t && Vu(e) && ap(n)); if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA") return !1; if (e === "width" || e === "height") { const o = t.tagName; if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE") return !1 } return Vu(e) && go(n) ? !1 : !!(e in t || t._isVueCE && (/[A-Z]/.test(e) || !go(n))) }
    const Gu = t => { const e = t.props["onUpdate:modelValue"] || !1; return Ti(e) ? n => H_(e, n) : e };
    
    function pT(t) { t.target.composing = !0 }
    
    function Wu(t) {
        const e = t.target;
        e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")))
    }
    let Ca, gT, mT, yT, CT;
    Ca = Symbol("_assign");
    NO = {
        created(t, { modifiers: { lazy: e, trim: n, number: r } }, o) {
            t[Ca] = Gu(o);
            const i = r || o.props && o.props.type === "number";
            Wr(t, e ? "change" : "input", s => {
                if (s.target.composing) return;
                let a = t.value;
                n && (a = a.trim()), i && (a = Nu(a)), t[Ca](a)
            }), n && Wr(t, "change", () => { t.value = t.value.trim() }), e || (Wr(t, "compositionstart", pT), Wr(t, "compositionend", Wu), Wr(t, "change", Wu))
        }
        , mounted(t, { value: e }) { t.value = e ?? "" }
        , beforeUpdate(t, { value: e, oldValue: n, modifiers: { lazy: r, trim: o, number: i } }, s) {
            if (t[Ca] = Gu(s), t.composing) return;
            const a = (i || t.type === "number") && !/^0\d/.test(t.value) ? Nu(t.value) : t.value
                , c = e ?? "";
            a !== c && (document.activeElement === t && t.type !== "range" && (r && e === n || o && t.value.trim() === c) || (t.value = c))
        }
    };
    gT = ["ctrl", "shift", "alt", "meta"];
    mT = { stop: t => t.stopPropagation(), prevent: t => t.preventDefault(), self: t => t.target !== t.currentTarget, ctrl: t => !t.ctrlKey, shift: t => !t.shiftKey, alt: t => !t.altKey, meta: t => !t.metaKey, left: t => "button" in t && t.button !== 0, middle: t => "button" in t && t.button !== 1, right: t => "button" in t && t.button !== 2, exact: (t, e) => gT.some(n => t[`${n}Key`] && !e.includes(n)) };
    ho = (t, e) => {
        const n = t._withMods || (t._withMods = {})
            , r = e.join(".");
        return n[r] || (n[r] = (o, ...i) => { for (let s = 0; s < e.length; s++) { const a = mT[e[s]]; if (a && a(o, e)) return } return t(o, ...i) })
    };
    yT = { esc: "escape", space: " ", up: "arrow-up", left: "arrow-left", right: "arrow-right", down: "arrow-down", delete: "backspace" };
    PO = (t, e) => {
        const n = t._withKeys || (t._withKeys = {})
            , r = e.join(".");
        return n[r] || (n[r] = o => { if (!("key" in o)) return; const i = Zc(o.key); if (e.some(s => s === i || yT[s] === i)) return t(o) })
    };
    CT = Xc({ patchProp: hT }, V_);
    let zu;
    
    function pp() { return zu || (zu = i_(CT)) }
    let _T;
    Yu = (...t) => {
        pp()
            .render(...t)
    };
    _T = (...t) => {
        const e = pp()
            .createApp(...t)
            , { mount: n } = e;
        return e.mount = r => { const o = vT(r); if (!o) return; const i = e._component;!ap(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = ""); const s = n(o, !1, TT(o)); return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), s }, e
    };
    
    function TT(t) { if (t instanceof SVGElement) return "svg"; if (typeof MathMLElement == "function" && t instanceof MathMLElement) return "mathml" }
    
    function vT(t) { return go(t) ? document.querySelector(t) : t }
    const F = { LIBRARY_NAME: "MSAL.JS", SKU: "msal.js.common", CACHE_PREFIX: "msal", DEFAULT_AUTHORITY: "https://login.microsoftonline.com/common/", DEFAULT_AUTHORITY_HOST: "login.microsoftonline.com", DEFAULT_COMMON_TENANT: "common", ADFS: "adfs", DSTS: "dstsv2", AAD_INSTANCE_DISCOVERY_ENDPT: "https://login.microsoftonline.com/common/discovery/instance?api-version=1.1&authorization_endpoint=", CIAM_AUTH_URL: ".ciamlogin.com", AAD_TENANT_DOMAIN_SUFFIX: ".onmicrosoft.com", RESOURCE_DELIM: "|", NO_ACCOUNT: "NO_ACCOUNT", CLAIMS: "claims", CONSUMER_UTID: "9188040d-6c67-4c5b-b112-36a304b66dad", OPENID_SCOPE: "openid", PROFILE_SCOPE: "profile", OFFLINE_ACCESS_SCOPE: "offline_access", EMAIL_SCOPE: "email", CODE_RESPONSE_TYPE: "code", CODE_GRANT_TYPE: "authorization_code", RT_GRANT_TYPE: "refresh_token", FRAGMENT_RESPONSE_MODE: "fragment", S256_CODE_CHALLENGE_METHOD: "S256", URL_FORM_CONTENT_TYPE: "application/x-www-form-urlencoded;charset=utf-8", AUTHORIZATION_PENDING: "authorization_pending", NOT_DEFINED: "not_defined", EMPTY_STRING: "", NOT_APPLICABLE: "N/A", NOT_AVAILABLE: "Not Available", FORWARD_SLASH: "/", IMDS_ENDPOINT: "http://169.254.169.254/metadata/instance/compute/location", IMDS_VERSION: "2020-06-01", IMDS_TIMEOUT: 2e3, AZURE_REGION_AUTO_DISCOVER_FLAG: "TryAutoDetect", REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX: "login.microsoft.com", KNOWN_PUBLIC_CLOUDS: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"], TOKEN_RESPONSE_TYPE: "token", ID_TOKEN_RESPONSE_TYPE: "id_token", SHR_NONCE_VALIDITY: 240, INVALID_INSTANCE: "invalid_instance" }
        , xi = { SUCCESS: 200, SUCCESS_RANGE_START: 200, SUCCESS_RANGE_END: 299, REDIRECT: 302, CLIENT_ERROR: 400, CLIENT_ERROR_RANGE_START: 400, BAD_REQUEST: 400, UNAUTHORIZED: 401, NOT_FOUND: 404, REQUEST_TIMEOUT: 408, TOO_MANY_REQUESTS: 429, CLIENT_ERROR_RANGE_END: 499, SERVER_ERROR: 500, SERVER_ERROR_RANGE_START: 500, SERVICE_UNAVAILABLE: 503, GATEWAY_TIMEOUT: 504, SERVER_ERROR_RANGE_END: 599, MULTI_SIDED_ERROR: 600 }
        , Ro = [F.OPENID_SCOPE, F.PROFILE_SCOPE, F.OFFLINE_ACCESS_SCOPE]
        , Qu = [...Ro, F.EMAIL_SCOPE]
        , En = { CONTENT_TYPE: "Content-Type", RETRY_AFTER: "Retry-After", CCS_HEADER: "X-AnchorMailbox", WWWAuthenticate: "WWW-Authenticate", AuthenticationInfo: "Authentication-Info", X_MS_REQUEST_ID: "x-ms-request-id", X_MS_HTTP_VERSION: "x-ms-httpver" }
        , ut = { ID_TOKEN: "idtoken", CLIENT_INFO: "client.info", ADAL_ID_TOKEN: "adal.idtoken", ERROR: "error", ERROR_DESC: "error.description", ACTIVE_ACCOUNT: "active-account", ACTIVE_ACCOUNT_FILTERS: "active-account-filters" }
        , ur = { COMMON: "common", ORGANIZATIONS: "organizations", CONSUMERS: "consumers" }
        , Ui = { ACCESS_TOKEN: "access_token", XMS_CC: "xms_cc" }
        , ht = { LOGIN: "login", SELECT_ACCOUNT: "select_account", CONSENT: "consent", NONE: "none", CREATE: "create", NO_SESSION: "no_session" }
        , Ju = { PLAIN: "plain", S256: "S256" }
        , vi = { QUERY: "query", FRAGMENT: "fragment" }
        , ET = { ...vi, FORM_POST: "form_post" }
        , gp = { IMPLICIT_GRANT: "implicit", AUTHORIZATION_CODE_GRANT: "authorization_code", CLIENT_CREDENTIALS_GRANT: "client_credentials", RESOURCE_OWNER_PASSWORD_GRANT: "password", REFRESH_TOKEN_GRANT: "refresh_token", DEVICE_CODE_GRANT: "device_code", JWT_BEARER: "urn:ietf:params:oauth:grant-type:jwt-bearer" }
        , Fi = { MSSTS_ACCOUNT_TYPE: "MSSTS", ADFS_ACCOUNT_TYPE: "ADFS", MSAV1_ACCOUNT_TYPE: "MSA", GENERIC_ACCOUNT_TYPE: "Generic" }
        , It = { CACHE_KEY_SEPARATOR: "-", CLIENT_INFO_SEPARATOR: "." }
        , ae = { ID_TOKEN: "IdToken", ACCESS_TOKEN: "AccessToken", ACCESS_TOKEN_WITH_AUTH_SCHEME: "AccessToken_With_AuthScheme", REFRESH_TOKEN: "RefreshToken" }
        , tl = "appmetadata"
        , AT = "client_info"
        , Yo = "1"
        , cs = { CACHE_KEY: "authority-metadata", REFRESH_TIME_SECONDS: 3600 * 24 }
        , Kt = { CONFIG: "config", CACHE: "cache", NETWORK: "network", HARDCODED_VALUES: "hardcoded_values" }
        , mt = { SCHEMA_VERSION: 5, MAX_CUR_HEADER_BYTES: 80, MAX_LAST_HEADER_BYTES: 330, MAX_CACHED_ERRORS: 50, CACHE_KEY: "server-telemetry", CATEGORY_SEPARATOR: "|", VALUE_SEPARATOR: ",", OVERFLOW_TRUE: "1", OVERFLOW_FALSE: "0", UNKNOWN_ERROR: "unknown_error" }
        , Fe = { BEARER: "Bearer", POP: "pop", SSH: "ssh-cert" }
        , Qo = { DEFAULT_THROTTLE_TIME_SECONDS: 60, DEFAULT_MAX_THROTTLE_TIME_SECONDS: 3600, THROTTLING_PREFIX: "throttling", X_MS_LIB_CAPABILITY_VALUE: "retry-after, h429" }
        , Xu = { INVALID_GRANT_ERROR: "invalid_grant", CLIENT_MISMATCH_ERROR: "client_mismatch" }
        , Zu = { username: "username", password: "password" }
        , Hi = { httpSuccess: 200, httpBadRequest: 400 }
        , qr = { FAILED_AUTO_DETECTION: "1", INTERNAL_CACHE: "2", ENVIRONMENT_VARIABLE: "3", IMDS: "4" }
        , _a = { CONFIGURED_MATCHES_DETECTED: "1", CONFIGURED_NO_AUTO_DETECTION: "2", CONFIGURED_NOT_DETECTED: "3", AUTO_DETECTION_REQUESTED_SUCCESSFUL: "4", AUTO_DETECTION_REQUESTED_FAILED: "5" }
        , tr = { NOT_APPLICABLE: "0", FORCE_REFRESH_OR_CLAIMS: "1", NO_CACHED_ACCESS_TOKEN: "2", CACHED_ACCESS_TOKEN_EXPIRED: "3", PROACTIVELY_REFRESHED: "4" }
        , bT = { Jwt: "JWT", Jwk: "JWK", Pop: "pop" }
        , IT = 300;
    const nl = "unexpected_error"
        , wT = "post_request_failed";
    const ed = {
        [nl]: "Unexpected error in authentication."
        , [wT]: "Post request failed from the network, could be a 4xx/5xx or a network unavailability. Please check the exact error code for details."
    };
    class Qe extends Error {
        constructor(e, n, r) {
            const o = n ? `${e}: ${n}` : e;
            super(o), Object.setPrototypeOf(this, Qe.prototype), this.errorCode = e || F.EMPTY_STRING, this.errorMessage = n || F.EMPTY_STRING, this.subError = r || F.EMPTY_STRING, this.name = "AuthError"
        }
        setCorrelationId(e) { this.correlationId = e }
    }
    
    function mp(t, e) { return new Qe(t, e ? `${ed[t]} ${e}` : ed[t]) }
    const rl = "client_info_decoding_error"
        , yp = "client_info_empty_error"
        , ol = "token_parsing_error"
        , Cp = "null_or_empty_token"
        , xn = "endpoints_resolution_error"
        , _p = "network_error"
        , Tp = "openid_config_error"
        , vp = "hash_not_deserialized"
        , mo = "invalid_state"
        , Ep = "state_mismatch"
        , ls = "state_not_found"
        , Ap = "nonce_mismatch"
        , il = "auth_time_not_found"
        , bp = "max_age_transpired"
        , ST = "multiple_matching_tokens"
        , kT = "multiple_matching_accounts"
        , Ip = "multiple_matching_appMetadata"
        , wp = "request_cannot_be_made"
        , Sp = "cannot_remove_empty_scope"
        , kp = "cannot_append_scopeset"
        , za = "empty_input_scopeset"
        , RT = "device_code_polling_cancelled"
        , OT = "device_code_expired"
        , NT = "device_code_unknown_error"
        , sl = "no_account_in_silent_request"
        , Rp = "invalid_cache_record"
        , al = "invalid_cache_environment"
        , Ya = "no_account_found"
        , Qa = "no_crypto_object"
        , Ja = "unexpected_credential_type"
        , PT = "invalid_assertion"
        , MT = "invalid_client_credential"
        , Bn = "token_refresh_required"
        , LT = "user_timeout_reached"
        , Op = "token_claims_cnf_required_for_signedjwt"
        , Np = "authorization_code_missing_from_server_response"
        , Pp = "binding_key_not_removed"
        , Mp = "end_session_endpoint_not_supported"
        , cl = "key_id_missing"
        , DT = "no_network_connectivity"
        , xT = "user_canceled"
        , UT = "missing_tenant_id_error"
        , me = "method_not_implemented"
        , FT = "nested_app_auth_bridge_disabled";
    const td = {
        [rl]: "The client info could not be parsed/decoded correctly"
        , [yp]: "The client info was empty"
        , [ol]: "Token cannot be parsed"
        , [Cp]: "The token is null or empty"
        , [xn]: "Endpoints cannot be resolved"
        , [_p]: "Network request failed"
        , [Tp]: "Could not retrieve endpoints. Check your authority and verify the .well-known/openid-configuration endpoint returns the required endpoints."
        , [vp]: "The hash parameters could not be deserialized"
        , [mo]: "State was not the expected format"
        , [Ep]: "State mismatch error"
        , [ls]: "State not found"
        , [Ap]: "Nonce mismatch error"
        , [il]: "Max Age was requested and the ID token is missing the auth_time variable. auth_time is an optional claim and is not enabled by default - it must be enabled. See https://aka.ms/msaljs/optional-claims for more information."
        , [bp]: "Max Age is set to 0, or too much time has elapsed since the last end-user authentication."
        , [ST]: "The cache contains multiple tokens satisfying the requirements. Call AcquireToken again providing more requirements such as authority or account."
        , [kT]: "The cache contains multiple accounts satisfying the given parameters. Please pass more info to obtain the correct account"
        , [Ip]: "The cache contains multiple appMetadata satisfying the given parameters. Please pass more info to obtain the correct appMetadata"
        , [wp]: "Token request cannot be made without authorization code or refresh token."
        , [Sp]: "Cannot remove null or empty scope from ScopeSet"
        , [kp]: "Cannot append ScopeSet"
        , [za]: "Empty input ScopeSet cannot be processed"
        , [RT]: "Caller has cancelled token endpoint polling during device code flow by setting DeviceCodeRequest.cancel = true."
        , [OT]: "Device code is expired."
        , [NT]: "Device code stopped polling for unknown reasons."
        , [sl]: "Please pass an account object, silent flow is not supported without account information"
        , [Rp]: "Cache record object was null or undefined."
        , [al]: "Invalid environment when attempting to create cache entry"
        , [Ya]: "No account found in cache for given key."
        , [Qa]: "No crypto object detected."
        , [Ja]: "Unexpected credential type."
        , [PT]: "Client assertion must meet requirements described in https://tools.ietf.org/html/rfc7515"
        , [MT]: "Client credential (secret, certificate, or assertion) must not be empty when creating a confidential client. An application should at most have one credential"
        , [Bn]: "Cannot return token from cache because it must be refreshed. This may be due to one of the following reasons: forceRefresh parameter is set to true, claims have been requested, there is no cached access token or it is expired."
        , [LT]: "User defined timeout for device code polling reached"
        , [Op]: "Cannot generate a POP jwt if the token_claims are not populated"
        , [Np]: "Server response does not contain an authorization code to proceed"
        , [Pp]: "Could not remove the credential's binding key from storage."
        , [Mp]: "The provided authority does not support logout"
        , [cl]: "A keyId value is missing from the requested bound token's cache record and is required to match the token to it's stored binding key."
        , [DT]: "No network connectivity. Check your internet connection."
        , [xT]: "User cancelled the flow."
        , [UT]: "A tenant id - not common, organizations, or consumers - must be specified when using the client_credentials flow."
        , [me]: "This method has not been implemented"
        , [FT]: "The nested app auth bridge is disabled"
    };
    class xs extends Qe { constructor(e, n) { super(e, n ? `${td[e]}: ${n}` : td[e]), this.name = "ClientAuthError", Object.setPrototypeOf(this, xs.prototype) } }
    
    function q(t, e) { return new xs(t, e) }
    
    function Br(t, e) { const n = HT(t); try { const r = e(n); return JSON.parse(r) } catch { throw q(ol) } }
    
    function HT(t) { if (!t) throw q(Cp); const n = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/.exec(t); if (!n || n.length < 4) throw q(ol); return n[2] }
    
    function Lp(t, e) { if (e === 0 || Date.now() - 3e5 > t + e) throw q(bp) }
    const nn = { Default: 0, Adfs: 1, Dsts: 2, Ciam: 3 };
    
    function BT(t) { return t.hasOwnProperty("authorization_endpoint") && t.hasOwnProperty("token_endpoint") && t.hasOwnProperty("issuer") && t.hasOwnProperty("jwks_uri") }
    const Dp = "redirect_uri_empty"
        , $T = "claims_request_parsing_error"
        , xp = "authority_uri_insecure"
        , Ko = "url_parse_error"
        , Up = "empty_url_error"
        , Fp = "empty_input_scopes_error"
        , Hp = "invalid_prompt_value"
        , ll = "invalid_claims"
        , Bp = "token_request_empty"
        , $p = "logout_request_empty"
        , Kp = "invalid_code_challenge_method"
        , ul = "pkce_params_missing"
        , dl = "invalid_cloud_discovery_metadata"
        , jp = "invalid_authority_metadata"
        , qp = "untrusted_authority"
        , Us = "missing_ssh_jwk"
        , Vp = "missing_ssh_kid"
        , KT = "missing_nonce_authentication_header"
        , jT = "invalid_authentication_header"
        , Gp = "cannot_set_OIDCOptions"
        , Wp = "cannot_allow_native_broker"
        , zp = "authority_mismatch";
    const qT = {
        [Dp]: "A redirect URI is required for all calls, and none has been set."
        , [$T]: "Could not parse the given claims request object."
        , [xp]: "Authority URIs must use https.  Please see here for valid authority configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options"
        , [Ko]: "URL could not be parsed into appropriate segments."
        , [Up]: "URL was empty or null."
        , [Fp]: "Scopes cannot be passed as null, undefined or empty array because they are required to obtain an access token."
        , [Hp]: "Please see here for valid configuration options: https://azuread.github.io/microsoft-authentication-library-for-js/ref/modules/_azure_msal_common.html#commonauthorizationurlrequest"
        , [ll]: "Given claims parameter must be a stringified JSON object."
        , [Bp]: "Token request was empty and not found in cache."
        , [$p]: "The logout request was null or undefined."
        , [Kp]: 'code_challenge_method passed is invalid. Valid values are "plain" and "S256".'
        , [ul]: "Both params: code_challenge and code_challenge_method are to be passed if to be sent in the request"
        , [dl]: "Invalid cloudDiscoveryMetadata provided. Must be a stringified JSON object containing tenant_discovery_endpoint and metadata fields"
        , [jp]: "Invalid authorityMetadata provided. Must by a stringified JSON object containing authorization_endpoint, token_endpoint, issuer fields."
        , [qp]: "The provided authority is not a trusted authority. Please include this authority in the knownAuthorities config parameter."
        , [Us]: "Missing sshJwk in SSH certificate request. A stringified JSON Web Key is required when using the SSH authentication scheme."
        , [Vp]: "Missing sshKid in SSH certificate request. A string that uniquely identifies the public SSH key is required when using the SSH authentication scheme."
        , [KT]: "Unable to find an authentication header containing server nonce. Either the Authentication-Info or WWW-Authenticate headers must be present in order to obtain a server nonce."
        , [jT]: "Invalid authentication header provided"
        , [Gp]: "Cannot set OIDCOptions parameter. Please change the protocol mode to OIDC or use a non-Microsoft authority."
        , [Wp]: "Cannot set allowNativeBroker parameter to true when not in AAD protocol mode."
        , [zp]: "Authority mismatch error. Authority provided in login request or PublicClientApplication config does not match the environment of the provided account. Please use a matching account or make an interactive request to login to this authority."
    };
    class hl extends Qe { constructor(e) { super(e, qT[e]), this.name = "ClientConfigurationError", Object.setPrototypeOf(this, hl.prototype) } }
    
    function Be(t) { return new hl(t) } class cn {
        static isEmptyObj(e) {
            if (e) try {
                const n = JSON.parse(e);
                return Object.keys(n)
                    .length === 0
            } catch {}
            return !0
        }
        static startsWith(e, n) { return e.indexOf(n) === 0 } static endsWith(e, n) { return e.length >= n.length && e.lastIndexOf(n) === e.length - n.length } static queryStringToObject(e) {
            const n = {}
                , r = e.split("&")
                , o = i => decodeURIComponent(i.replace(/\+/g, " "));
            return r.forEach(i => {
                if (i.trim()) {
                    const [s, a] = i.split(/=(.+)/g, 2);
                    s && a && (n[o(s)] = o(a))
                }
            }), n
        }
        static trimArrayEntries(e) { return e.map(n => n.trim()) } static removeEmptyStringsFromArray(e) { return e.filter(n => !!n) } static jsonParseHelper(e) { try { return JSON.parse(e) } catch { return null } } static matchPattern(e, n) {
            return new RegExp(e.replace(/\\/g, "\\\\")
                    .replace(/\*/g, "[^ ]*")
                    .replace(/\?/g, "\\?"))
                .test(n)
        }
    }
    
    function Yp(t) { return t.startsWith("#/") ? t.substring(2) : t.startsWith("#") || t.startsWith("?") ? t.substring(1) : t }
    
    function us(t) {
        if (!t || t.indexOf("=") < 0) return null;
        try {
            const e = Yp(t)
                , n = Object.fromEntries(new URLSearchParams(e));
            if (n.code || n.error || n.error_description || n.state) return n
        } catch { throw q(vp) }
        return null
    }
    class Re {
        get urlString() { return this._urlString } constructor(e) {
            if (this._urlString = e, !this._urlString) throw Be(Up);
            e.includes("#") || (this._urlString = Re.canonicalizeUri(e))
        }
        static canonicalizeUri(e) { if (e) { let n = e.toLowerCase(); return cn.endsWith(n, "?") ? n = n.slice(0, -1) : cn.endsWith(n, "?/") && (n = n.slice(0, -2)), cn.endsWith(n, "/") || (n += "/"), n } return e } validateAsUri() { let e; try { e = this.getUrlComponents() } catch { throw Be(Ko) } if (!e.HostNameAndPort || !e.PathSegments) throw Be(Ko); if (!e.Protocol || e.Protocol.toLowerCase() !== "https:") throw Be(xp) } static appendQueryString(e, n) { return n ? e.indexOf("?") < 0 ? `${e}?${n}` : `${e}&${n}` : e } static removeHashFromUrl(e) { return Re.canonicalizeUri(e.split("#")[0]) } replaceTenantPath(e) {
            const n = this.getUrlComponents()
                , r = n.PathSegments;
            return e && r.length !== 0 && (r[0] === ur.COMMON || r[0] === ur.ORGANIZATIONS) && (r[0] = e), Re.constructAuthorityUriFromObject(n)
        }
        getUrlComponents() {
            const e = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?")
                , n = this.urlString.match(e);
            if (!n) throw Be(Ko);
            const r = { Protocol: n[1], HostNameAndPort: n[4], AbsolutePath: n[5], QueryString: n[7] };
            let o = r.AbsolutePath.split("/");
            return o = o.filter(i => i && i.length > 0), r.PathSegments = o, r.QueryString && r.QueryString.endsWith("/") && (r.QueryString = r.QueryString.substring(0, r.QueryString.length - 1)), r
        }
        static getDomainFromUrl(e) {
            const n = RegExp("^([^:/?#]+://)?([^/?#]*)")
                , r = e.match(n);
            if (!r) throw Be(Ko);
            return r[2]
        }
        static getAbsoluteUrl(e, n) {
            if (e[0] === F.FORWARD_SLASH) {
                const o = new Re(n)
                    .getUrlComponents();
                return o.Protocol + "//" + o.HostNameAndPort + e
            }
            return e
        }
        static constructAuthorityUriFromObject(e) { return new Re(e.Protocol + "//" + e.HostNameAndPort + "/" + e.PathSegments.join("/")) } static hashContainsKnownProperties(e) { return !!us(e) }
    }
    const Qp = { endpointMetadata: { "login.microsoftonline.com": { token_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/token", jwks_uri: "https://login.microsoftonline.com/{tenantid}/discovery/v2.0/keys", issuer: "https://login.microsoftonline.com/{tenantid}/v2.0", authorization_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/authorize", end_session_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/logout" }, "login.chinacloudapi.cn": { token_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/token", jwks_uri: "https://login.chinacloudapi.cn/{tenantid}/discovery/v2.0/keys", issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0", authorization_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/authorize", end_session_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/logout" }, "login.microsoftonline.us": { token_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/token", jwks_uri: "https://login.microsoftonline.us/{tenantid}/discovery/v2.0/keys", issuer: "https://login.microsoftonline.us/{tenantid}/v2.0", authorization_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/authorize", end_session_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/logout" } }, instanceDiscoveryMetadata: { tenant_discovery_endpoint: "https://{canonicalAuthority}/v2.0/.well-known/openid-configuration", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] } }
        , nd = Qp.endpointMetadata
        , fl = Qp.instanceDiscoveryMetadata
        , Jp = new Set;
    fl.metadata.forEach(t => { t.aliases.forEach(e => { Jp.add(e) }) });
    
    function VT(t, e) {
        let n;
        const r = t.canonicalAuthority;
        if (r) {
            const o = new Re(r)
                .getUrlComponents()
                .HostNameAndPort;
            n = rd(o, t.cloudDiscoveryMetadata?.metadata, Kt.CONFIG, e) || rd(o, fl.metadata, Kt.HARDCODED_VALUES, e) || t.knownAuthorities
        }
        return n || []
    }
    
    function rd(t, e, n, r) {
        if (r?.trace(`getAliasesFromMetadata called with source: ${n}`), t && e) {
            const o = ds(e, t);
            if (o) return r?.trace(`getAliasesFromMetadata: found cloud discovery metadata in ${n}, returning aliases`), o.aliases;
            r?.trace(`getAliasesFromMetadata: did not find cloud discovery metadata in ${n}`)
        }
        return null
    }
    
    function GT(t) { return ds(fl.metadata, t) }
    
    function ds(t, e) { for (let n = 0; n < t.length; n++) { const r = t[n]; if (r.aliases.includes(e)) return r } return null }
    const qn = { AAD: "AAD", OIDC: "OIDC" };
    const pl = { None: "none", AzurePublic: "https://login.microsoftonline.com", AzurePpe: "https://login.windows-ppe.net", AzureChina: "https://login.chinacloudapi.cn", AzureGermany: "https://login.microsoftonline.de", AzureUsGovernment: "https://login.microsoftonline.us" };
    
    function WT(t) { return t.hasOwnProperty("tenant_discovery_endpoint") && t.hasOwnProperty("metadata") }
    
    function zT(t) { return t.hasOwnProperty("error") && t.hasOwnProperty("error_description") }
    const N = { AcquireTokenByCode: "acquireTokenByCode", AcquireTokenByRefreshToken: "acquireTokenByRefreshToken", AcquireTokenSilent: "acquireTokenSilent", AcquireTokenSilentAsync: "acquireTokenSilentAsync", AcquireTokenPopup: "acquireTokenPopup", AcquireTokenPreRedirect: "acquireTokenPreRedirect", AcquireTokenRedirect: "acquireTokenRedirect", CryptoOptsGetPublicKeyThumbprint: "cryptoOptsGetPublicKeyThumbprint", CryptoOptsSignJwt: "cryptoOptsSignJwt", SilentCacheClientAcquireToken: "silentCacheClientAcquireToken", SilentIframeClientAcquireToken: "silentIframeClientAcquireToken", AwaitConcurrentIframe: "awaitConcurrentIframe", SilentRefreshClientAcquireToken: "silentRefreshClientAcquireToken", SsoSilent: "ssoSilent", StandardInteractionClientGetDiscoveredAuthority: "standardInteractionClientGetDiscoveredAuthority", FetchAccountIdWithNativeBroker: "fetchAccountIdWithNativeBroker", NativeInteractionClientAcquireToken: "nativeInteractionClientAcquireToken", BaseClientCreateTokenRequestHeaders: "baseClientCreateTokenRequestHeaders", RefreshTokenClientExecutePostToTokenEndpoint: "refreshTokenClientExecutePostToTokenEndpoint", AuthorizationCodeClientExecutePostToTokenEndpoint: "authorizationCodeClientExecutePostToTokenEndpoint", BrokerHandhshake: "brokerHandshake", AcquireTokenByRefreshTokenInBroker: "acquireTokenByRefreshTokenInBroker", AcquireTokenByBroker: "acquireTokenByBroker", RefreshTokenClientExecuteTokenRequest: "refreshTokenClientExecuteTokenRequest", RefreshTokenClientAcquireToken: "refreshTokenClientAcquireToken", RefreshTokenClientAcquireTokenWithCachedRefreshToken: "refreshTokenClientAcquireTokenWithCachedRefreshToken", RefreshTokenClientAcquireTokenByRefreshToken: "refreshTokenClientAcquireTokenByRefreshToken", RefreshTokenClientCreateTokenRequestBody: "refreshTokenClientCreateTokenRequestBody", AcquireTokenFromCache: "acquireTokenFromCache", SilentFlowClientAcquireCachedToken: "silentFlowClientAcquireCachedToken", SilentFlowClientGenerateResultFromCacheRecord: "silentFlowClientGenerateResultFromCacheRecord", AcquireTokenBySilentIframe: "acquireTokenBySilentIframe", InitializeBaseRequest: "initializeBaseRequest", InitializeSilentRequest: "initializeSilentRequest", InitializeClientApplication: "initializeClientApplication", SilentIframeClientTokenHelper: "silentIframeClientTokenHelper", SilentHandlerInitiateAuthRequest: "silentHandlerInitiateAuthRequest", SilentHandlerMonitorIframeForHash: "silentHandlerMonitorIframeForHash", SilentHandlerLoadFrame: "silentHandlerLoadFrame", SilentHandlerLoadFrameSync: "silentHandlerLoadFrameSync", StandardInteractionClientCreateAuthCodeClient: "standardInteractionClientCreateAuthCodeClient", StandardInteractionClientGetClientConfiguration: "standardInteractionClientGetClientConfiguration", StandardInteractionClientInitializeAuthorizationRequest: "standardInteractionClientInitializeAuthorizationRequest", StandardInteractionClientInitializeAuthorizationCodeRequest: "standardInteractionClientInitializeAuthorizationCodeRequest", GetAuthCodeUrl: "getAuthCodeUrl", HandleCodeResponseFromServer: "handleCodeResponseFromServer", HandleCodeResponse: "handleCodeResponse", UpdateTokenEndpointAuthority: "updateTokenEndpointAuthority", AuthClientAcquireToken: "authClientAcquireToken", AuthClientExecuteTokenRequest: "authClientExecuteTokenRequest", AuthClientCreateTokenRequestBody: "authClientCreateTokenRequestBody", AuthClientCreateQueryString: "authClientCreateQueryString", PopTokenGenerateCnf: "popTokenGenerateCnf", PopTokenGenerateKid: "popTokenGenerateKid", HandleServerTokenResponse: "handleServerTokenResponse", DeserializeResponse: "deserializeResponse", AuthorityFactoryCreateDiscoveredInstance: "authorityFactoryCreateDiscoveredInstance", AuthorityResolveEndpointsAsync: "authorityResolveEndpointsAsync", AuthorityResolveEndpointsFromLocalSources: "authorityResolveEndpointsFromLocalSources", AuthorityGetCloudDiscoveryMetadataFromNetwork: "authorityGetCloudDiscoveryMetadataFromNetwork", AuthorityUpdateCloudDiscoveryMetadata: "authorityUpdateCloudDiscoveryMetadata", AuthorityGetEndpointMetadataFromNetwork: "authorityGetEndpointMetadataFromNetwork", AuthorityUpdateEndpointMetadata: "authorityUpdateEndpointMetadata", AuthorityUpdateMetadataWithRegionalInformation: "authorityUpdateMetadataWithRegionalInformation", RegionDiscoveryDetectRegion: "regionDiscoveryDetectRegion", RegionDiscoveryGetRegionFromIMDS: "regionDiscoveryGetRegionFromIMDS", RegionDiscoveryGetCurrentVersion: "regionDiscoveryGetCurrentVersion", AcquireTokenByCodeAsync: "acquireTokenByCodeAsync", GetEndpointMetadataFromNetwork: "getEndpointMetadataFromNetwork", GetCloudDiscoveryMetadataFromNetworkMeasurement: "getCloudDiscoveryMetadataFromNetworkMeasurement", HandleRedirectPromiseMeasurement: "handleRedirectPromise", HandleNativeRedirectPromiseMeasurement: "handleNativeRedirectPromise", UpdateCloudDiscoveryMetadataMeasurement: "updateCloudDiscoveryMetadataMeasurement", UsernamePasswordClientAcquireToken: "usernamePasswordClientAcquireToken", NativeMessageHandlerHandshake: "nativeMessageHandlerHandshake", NativeGenerateAuthResult: "nativeGenerateAuthResult", RemoveHiddenIframe: "removeHiddenIframe", ClearTokensAndKeysWithClaims: "clearTokensAndKeysWithClaims", CacheManagerGetRefreshToken: "cacheManagerGetRefreshToken", GeneratePkceCodes: "generatePkceCodes", GenerateCodeVerifier: "generateCodeVerifier", GenerateCodeChallengeFromVerifier: "generateCodeChallengeFromVerifier", Sha256Digest: "sha256Digest", GetRandomValues: "getRandomValues" }
        , YT = { NotStarted: 0, InProgress: 1, Completed: 2 };
    const $r = (t, e, n, r, o) => (...i) => {
            n.trace(`Executing function ${e}`);
            const s = r?.startMeasurement(e, o);
            if (o) {
                const a = e + "CallCount";
                r?.incrementFields({
                    [a]: 1
                }, o)
            }
            try { const a = t(...i); return s?.end({ success: !0 }), n.trace(`Returning result from ${e}`), a } catch (a) { n.trace(`Error occurred in ${e}`); try { n.trace(JSON.stringify(a)) } catch { n.trace("Unable to print error message.") } throw s?.end({ success: !1 }, a), a }
        }
        , W = (t, e, n, r, o) => (...i) => {
            n.trace(`Executing function ${e}`);
            const s = r?.startMeasurement(e, o);
            if (o) {
                const a = e + "CallCount";
                r?.incrementFields({
                    [a]: 1
                }, o)
            }
            return r?.setPreQueueTime(e, o), t(...i)
                .then(a => (n.trace(`Returning result from ${e}`), s?.end({ success: !0 }), a))
                .catch(a => { n.trace(`Error occurred in ${e}`); try { n.trace(JSON.stringify(a)) } catch { n.trace("Unable to print error message.") } throw s?.end({ success: !1 }, a), a })
        };
    class Fs {
        constructor(e, n, r, o) { this.networkInterface = e, this.logger = n, this.performanceClient = r, this.correlationId = o } async detectRegion(e, n) {
            this.performanceClient?.addQueueMeasurement(N.RegionDiscoveryDetectRegion, this.correlationId);
            let r = e;
            if (r) n.region_source = qr.ENVIRONMENT_VARIABLE;
            else {
                const o = Fs.IMDS_OPTIONS;
                try {
                    const i = await W(this.getRegionFromIMDS.bind(this), N.RegionDiscoveryGetRegionFromIMDS, this.logger, this.performanceClient, this.correlationId)(F.IMDS_VERSION, o);
                    if (i.status === Hi.httpSuccess && (r = i.body, n.region_source = qr.IMDS), i.status === Hi.httpBadRequest) {
                        const s = await W(this.getCurrentVersion.bind(this), N.RegionDiscoveryGetCurrentVersion, this.logger, this.performanceClient, this.correlationId)(o);
                        if (!s) return n.region_source = qr.FAILED_AUTO_DETECTION, null;
                        const a = await W(this.getRegionFromIMDS.bind(this), N.RegionDiscoveryGetRegionFromIMDS, this.logger, this.performanceClient, this.correlationId)(s, o);
                        a.status === Hi.httpSuccess && (r = a.body, n.region_source = qr.IMDS)
                    }
                } catch { return n.region_source = qr.FAILED_AUTO_DETECTION, null }
            }
            return r || (n.region_source = qr.FAILED_AUTO_DETECTION), r || null
        }
        async getRegionFromIMDS(e, n) { return this.performanceClient?.addQueueMeasurement(N.RegionDiscoveryGetRegionFromIMDS, this.correlationId), this.networkInterface.sendGetRequestAsync(`${F.IMDS_ENDPOINT}?api-version=${e}&format=text`, n, F.IMDS_TIMEOUT) } async getCurrentVersion(e) { this.performanceClient?.addQueueMeasurement(N.RegionDiscoveryGetCurrentVersion, this.correlationId); try { const n = await this.networkInterface.sendGetRequestAsync(`${F.IMDS_ENDPOINT}?format=json`, e); return n.status === Hi.httpBadRequest && n.body && n.body["newest-versions"] && n.body["newest-versions"].length > 0 ? n.body["newest-versions"][0] : null } catch { return null } }
    }
    Fs.IMDS_OPTIONS = { headers: { Metadata: "true" } };
    
    function kn() {
        return Math.round(new Date()
            .getTime() / 1e3)
    }
    
    function Xa(t, e) { const n = Number(t) || 0; return kn() + e > n }
    
    function QT(t) { return Number(t) > kn() }
    
    function to(t) {
        return [JT(t), XT(t), ZT(t), ev(t), tv(t)].join(It.CACHE_KEY_SEPARATOR)
            .toLowerCase()
    }
    
    function Hs(t, e, n, r, o) { return { credentialType: ae.ID_TOKEN, homeAccountId: t, environment: e, clientId: r, secret: n, realm: o } }
    
    function Bs(t, e, n, r, o, i, s, a, c, l, h, f, g, T, A) {
        const b = {
            homeAccountId: t
            , credentialType: ae.ACCESS_TOKEN
            , secret: n
            , cachedAt: kn()
                .toString()
            , expiresOn: s.toString()
            , extendedExpiresOn: a.toString()
            , environment: e
            , clientId: r
            , realm: o
            , target: i
            , tokenType: h || Fe.BEARER
        };
        if (f && (b.userAssertionHash = f), l && (b.refreshOn = l.toString()), T && (b.requestedClaims = T, b.requestedClaimsHash = A), b.tokenType?.toLowerCase() !== Fe.BEARER.toLowerCase()) switch (b.credentialType = ae.ACCESS_TOKEN_WITH_AUTH_SCHEME, b.tokenType) {
        case Fe.POP:
            const k = Br(n, c);
            if (!k?.cnf?.kid) throw q(Op);
            b.keyId = k.cnf.kid;
            break;
        case Fe.SSH:
            b.keyId = g
        }
        return b
    }
    
    function Xp(t, e, n, r, o, i, s) { const a = { credentialType: ae.REFRESH_TOKEN, homeAccountId: t, environment: e, clientId: r, secret: n }; return i && (a.userAssertionHash = i), o && (a.familyId = o), s && (a.expiresOn = s.toString()), a }
    
    function gl(t) { return t.hasOwnProperty("homeAccountId") && t.hasOwnProperty("environment") && t.hasOwnProperty("credentialType") && t.hasOwnProperty("clientId") && t.hasOwnProperty("secret") }
    
    function od(t) { return t ? gl(t) && t.hasOwnProperty("realm") && t.hasOwnProperty("target") && (t.credentialType === ae.ACCESS_TOKEN || t.credentialType === ae.ACCESS_TOKEN_WITH_AUTH_SCHEME) : !1 }
    
    function id(t) { return t ? gl(t) && t.hasOwnProperty("realm") && t.credentialType === ae.ID_TOKEN : !1 }
    
    function sd(t) { return t ? gl(t) && t.credentialType === ae.REFRESH_TOKEN : !1 }
    
    function JT(t) {
        return [t.homeAccountId, t.environment].join(It.CACHE_KEY_SEPARATOR)
            .toLowerCase()
    }
    
    function XT(t) {
        const e = t.credentialType === ae.REFRESH_TOKEN && t.familyId || t.clientId;
        return [t.credentialType, e, t.realm || ""].join(It.CACHE_KEY_SEPARATOR)
            .toLowerCase()
    }
    
    function ZT(t) {
        return (t.target || "")
            .toLowerCase()
    }
    
    function ev(t) {
        return (t.requestedClaimsHash || "")
            .toLowerCase()
    }
    
    function tv(t) { return t.tokenType && t.tokenType.toLowerCase() !== Fe.BEARER.toLowerCase() ? t.tokenType.toLowerCase() : "" }
    
    function nv(t, e) { const n = t.indexOf(mt.CACHE_KEY) === 0; let r = !0; return e && (r = e.hasOwnProperty("failedRequests") && e.hasOwnProperty("errors") && e.hasOwnProperty("cacheHits")), n && r }
    
    function rv(t, e) {
        let n = !1;
        t && (n = t.indexOf(Qo.THROTTLING_PREFIX) === 0);
        let r = !0;
        return e && (r = e.hasOwnProperty("throttleTime")), n && r
    }
    
    function ov({ environment: t, clientId: e }) {
        return [tl, t, e].join(It.CACHE_KEY_SEPARATOR)
            .toLowerCase()
    }
    
    function iv(t, e) { return e ? t.indexOf(tl) === 0 && e.hasOwnProperty("clientId") && e.hasOwnProperty("environment") : !1 }
    
    function sv(t, e) { return e ? t.indexOf(cs.CACHE_KEY) === 0 && e.hasOwnProperty("aliases") && e.hasOwnProperty("preferred_cache") && e.hasOwnProperty("preferred_network") && e.hasOwnProperty("canonical_authority") && e.hasOwnProperty("authorization_endpoint") && e.hasOwnProperty("token_endpoint") && e.hasOwnProperty("issuer") && e.hasOwnProperty("aliasesFromNetwork") && e.hasOwnProperty("endpointsFromNetwork") && e.hasOwnProperty("expiresAt") && e.hasOwnProperty("jwks_uri") : !1 }
    
    function ad() { return kn() + cs.REFRESH_TIME_SECONDS }
    
    function Bi(t, e, n) { t.authorization_endpoint = e.authorization_endpoint, t.token_endpoint = e.token_endpoint, t.end_session_endpoint = e.end_session_endpoint, t.issuer = e.issuer, t.endpointsFromNetwork = n, t.jwks_uri = e.jwks_uri }
    
    function Ta(t, e, n) { t.aliases = e.aliases, t.preferred_cache = e.preferred_cache, t.preferred_network = e.preferred_network, t.aliasesFromNetwork = n }
    
    function cd(t) { return t.expiresAt <= kn() } class At {
        constructor(e, n, r, o, i, s, a, c) { this.canonicalAuthority = e, this._canonicalAuthority.validateAsUri(), this.networkInterface = n, this.cacheManager = r, this.authorityOptions = o, this.regionDiscoveryMetadata = { region_used: void 0, region_source: void 0, region_outcome: void 0 }, this.logger = i, this.performanceClient = a, this.correlationId = s, this.managedIdentity = c || !1, this.regionDiscovery = new Fs(n, this.logger, this.performanceClient, this.correlationId) } getAuthorityType(e) {
            if (e.HostNameAndPort.endsWith(F.CIAM_AUTH_URL)) return nn.Ciam;
            const n = e.PathSegments;
            if (n.length) switch (n[0].toLowerCase()) {
            case F.ADFS:
                return nn.Adfs;
            case F.DSTS:
                return nn.Dsts
            }
            return nn.Default
        }
        get authorityType() { return this.getAuthorityType(this.canonicalAuthorityUrlComponents) } get protocolMode() { return this.authorityOptions.protocolMode } get options() { return this.authorityOptions } get canonicalAuthority() { return this._canonicalAuthority.urlString } set canonicalAuthority(e) { this._canonicalAuthority = new Re(e), this._canonicalAuthority.validateAsUri(), this._canonicalAuthorityUrlComponents = null } get canonicalAuthorityUrlComponents() { return this._canonicalAuthorityUrlComponents || (this._canonicalAuthorityUrlComponents = this._canonicalAuthority.getUrlComponents()), this._canonicalAuthorityUrlComponents } get hostnameAndPort() { return this.canonicalAuthorityUrlComponents.HostNameAndPort.toLowerCase() } get tenant() { return this.canonicalAuthorityUrlComponents.PathSegments[0] } get authorizationEndpoint() { if (this.discoveryComplete()) return this.replacePath(this.metadata.authorization_endpoint); throw q(xn) } get tokenEndpoint() { if (this.discoveryComplete()) return this.replacePath(this.metadata.token_endpoint); throw q(xn) } get deviceCodeEndpoint() { if (this.discoveryComplete()) return this.replacePath(this.metadata.token_endpoint.replace("/token", "/devicecode")); throw q(xn) } get endSessionEndpoint() { if (this.discoveryComplete()) { if (!this.metadata.end_session_endpoint) throw q(Mp); return this.replacePath(this.metadata.end_session_endpoint) } else throw q(xn) } get selfSignedJwtAudience() { if (this.discoveryComplete()) return this.replacePath(this.metadata.issuer); throw q(xn) } get jwksUri() { if (this.discoveryComplete()) return this.replacePath(this.metadata.jwks_uri); throw q(xn) } canReplaceTenant(e) { return e.PathSegments.length === 1 && !At.reservedTenantDomains.has(e.PathSegments[0]) && this.getAuthorityType(e) === nn.Default && this.protocolMode === qn.AAD } replaceTenant(e) { return e.replace(/{tenant}|{tenantid}/g, this.tenant) } replacePath(e) {
            let n = e;
            const o = new Re(this.metadata.canonical_authority)
                .getUrlComponents()
                , i = o.PathSegments;
            return this.canonicalAuthorityUrlComponents.PathSegments.forEach((a, c) => {
                let l = i[c];
                if (c === 0 && this.canReplaceTenant(o)) {
                    const h = new Re(this.metadata.authorization_endpoint)
                        .getUrlComponents()
                        .PathSegments[0];
                    l !== h && (this.logger.verbose(`Replacing tenant domain name ${l} with id ${h}`), l = h)
                }
                a !== l && (n = n.replace(`/${l}/`, `/${a}/`))
            }), this.replaceTenant(n)
        }
        get defaultOpenIdConfigurationEndpoint() { const e = this.hostnameAndPort; return this.canonicalAuthority.endsWith("v2.0/") || this.authorityType === nn.Adfs || this.protocolMode !== qn.AAD && !this.isAliasOfKnownMicrosoftAuthority(e) ? `${this.canonicalAuthority}.well-known/openid-configuration` : `${this.canonicalAuthority}v2.0/.well-known/openid-configuration` } discoveryComplete() { return !!this.metadata } async resolveEndpointsAsync() {
            this.performanceClient?.addQueueMeasurement(N.AuthorityResolveEndpointsAsync, this.correlationId);
            const e = this.getCurrentMetadataEntity()
                , n = await W(this.updateCloudDiscoveryMetadata.bind(this), N.AuthorityUpdateCloudDiscoveryMetadata, this.logger, this.performanceClient, this.correlationId)(e);
            this.canonicalAuthority = this.canonicalAuthority.replace(this.hostnameAndPort, e.preferred_network);
            const r = await W(this.updateEndpointMetadata.bind(this), N.AuthorityUpdateEndpointMetadata, this.logger, this.performanceClient, this.correlationId)(e);
            this.updateCachedMetadata(e, n, { source: r }), this.performanceClient?.addFields({ cloudDiscoverySource: n, authorityEndpointSource: r }, this.correlationId)
        }
        getCurrentMetadataEntity() { let e = this.cacheManager.getAuthorityMetadataByAlias(this.hostnameAndPort); return e || (e = { aliases: [], preferred_cache: this.hostnameAndPort, preferred_network: this.hostnameAndPort, canonical_authority: this.canonicalAuthority, authorization_endpoint: "", token_endpoint: "", end_session_endpoint: "", issuer: "", aliasesFromNetwork: !1, endpointsFromNetwork: !1, expiresAt: ad(), jwks_uri: "" }), e } updateCachedMetadata(e, n, r) {
            n !== Kt.CACHE && r?.source !== Kt.CACHE && (e.expiresAt = ad(), e.canonical_authority = this.canonicalAuthority);
            const o = this.cacheManager.generateAuthorityMetadataCacheKey(e.preferred_cache);
            this.cacheManager.setAuthorityMetadata(o, e), this.metadata = e
        }
        async updateEndpointMetadata(e) {
            this.performanceClient?.addQueueMeasurement(N.AuthorityUpdateEndpointMetadata, this.correlationId);
            const n = this.updateEndpointMetadataFromLocalSources(e);
            if (n) {
                if (n.source === Kt.HARDCODED_VALUES && this.authorityOptions.azureRegionConfiguration?.azureRegion && n.metadata) {
                    const o = await W(this.updateMetadataWithRegionalInformation.bind(this), N.AuthorityUpdateMetadataWithRegionalInformation, this.logger, this.performanceClient, this.correlationId)(n.metadata);
                    Bi(e, o, !1), e.canonical_authority = this.canonicalAuthority
                }
                return n.source
            }
            let r = await W(this.getEndpointMetadataFromNetwork.bind(this), N.AuthorityGetEndpointMetadataFromNetwork, this.logger, this.performanceClient, this.correlationId)();
            if (r) return this.authorityOptions.azureRegionConfiguration?.azureRegion && (r = await W(this.updateMetadataWithRegionalInformation.bind(this), N.AuthorityUpdateMetadataWithRegionalInformation, this.logger, this.performanceClient, this.correlationId)(r)), Bi(e, r, !0), Kt.NETWORK;
            throw q(Tp, this.defaultOpenIdConfigurationEndpoint)
        }
        updateEndpointMetadataFromLocalSources(e) {
            this.logger.verbose("Attempting to get endpoint metadata from authority configuration");
            const n = this.getEndpointMetadataFromConfig();
            if (n) return this.logger.verbose("Found endpoint metadata in authority configuration"), Bi(e, n, !1), { source: Kt.CONFIG };
            if (this.logger.verbose("Did not find endpoint metadata in the config... Attempting to get endpoint metadata from the hardcoded values."), this.authorityOptions.skipAuthorityMetadataCache) this.logger.verbose("Skipping hardcoded metadata cache since skipAuthorityMetadataCache is set to true. Attempting to get endpoint metadata from the network metadata cache.");
            else {
                const o = this.getEndpointMetadataFromHardcodedValues();
                if (o) return Bi(e, o, !1), { source: Kt.HARDCODED_VALUES, metadata: o };
                this.logger.verbose("Did not find endpoint metadata in hardcoded values... Attempting to get endpoint metadata from the network metadata cache.")
            }
            const r = cd(e);
            return this.isAuthoritySameType(e) && e.endpointsFromNetwork && !r ? (this.logger.verbose("Found endpoint metadata in the cache."), { source: Kt.CACHE }) : (r && this.logger.verbose("The metadata entity is expired."), null)
        }
        isAuthoritySameType(e) {
            return new Re(e.canonical_authority)
                .getUrlComponents()
                .PathSegments.length === this.canonicalAuthorityUrlComponents.PathSegments.length
        }
        getEndpointMetadataFromConfig() {
            if (this.authorityOptions.authorityMetadata) try { return JSON.parse(this.authorityOptions.authorityMetadata) } catch { throw Be(jp) }
            return null
        }
        async getEndpointMetadataFromNetwork() {
            this.performanceClient?.addQueueMeasurement(N.AuthorityGetEndpointMetadataFromNetwork, this.correlationId);
            const e = {}
                , n = this.defaultOpenIdConfigurationEndpoint;
            this.logger.verbose(`Authority.getEndpointMetadataFromNetwork: attempting to retrieve OAuth endpoints from ${n}`);
            try { const r = await this.networkInterface.sendGetRequestAsync(n, e); return BT(r.body) ? r.body : (this.logger.verbose("Authority.getEndpointMetadataFromNetwork: could not parse response as OpenID configuration"), null) } catch (r) { return this.logger.verbose(`Authority.getEndpointMetadataFromNetwork: ${r}`), null }
        }
        getEndpointMetadataFromHardcodedValues() { return this.hostnameAndPort in nd ? nd[this.hostnameAndPort] : null } async updateMetadataWithRegionalInformation(e) {
            this.performanceClient?.addQueueMeasurement(N.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId);
            const n = this.authorityOptions.azureRegionConfiguration?.azureRegion;
            if (n) {
                if (n !== F.AZURE_REGION_AUTO_DISCOVER_FLAG) return this.regionDiscoveryMetadata.region_outcome = _a.CONFIGURED_NO_AUTO_DETECTION, this.regionDiscoveryMetadata.region_used = n, At.replaceWithRegionalInformation(e, n);
                const r = await W(this.regionDiscovery.detectRegion.bind(this.regionDiscovery), N.RegionDiscoveryDetectRegion, this.logger, this.performanceClient, this.correlationId)(this.authorityOptions.azureRegionConfiguration?.environmentRegion, this.regionDiscoveryMetadata);
                if (r) return this.regionDiscoveryMetadata.region_outcome = _a.AUTO_DETECTION_REQUESTED_SUCCESSFUL, this.regionDiscoveryMetadata.region_used = r, At.replaceWithRegionalInformation(e, r);
                this.regionDiscoveryMetadata.region_outcome = _a.AUTO_DETECTION_REQUESTED_FAILED
            }
            return e
        }
        async updateCloudDiscoveryMetadata(e) { this.performanceClient?.addQueueMeasurement(N.AuthorityUpdateCloudDiscoveryMetadata, this.correlationId); const n = this.updateCloudDiscoveryMetadataFromLocalSources(e); if (n) return n; const r = await W(this.getCloudDiscoveryMetadataFromNetwork.bind(this), N.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.logger, this.performanceClient, this.correlationId)(); if (r) return Ta(e, r, !0), Kt.NETWORK; throw Be(qp) } updateCloudDiscoveryMetadataFromLocalSources(e) {
            this.logger.verbose("Attempting to get cloud discovery metadata  from authority configuration"), this.logger.verbosePii(`Known Authorities: ${this.authorityOptions.knownAuthorities||F.NOT_APPLICABLE}`), this.logger.verbosePii(`Authority Metadata: ${this.authorityOptions.authorityMetadata||F.NOT_APPLICABLE}`), this.logger.verbosePii(`Canonical Authority: ${e.canonical_authority||F.NOT_APPLICABLE}`);
            const n = this.getCloudDiscoveryMetadataFromConfig();
            if (n) return this.logger.verbose("Found cloud discovery metadata in authority configuration"), Ta(e, n, !1), Kt.CONFIG;
            if (this.logger.verbose("Did not find cloud discovery metadata in the config... Attempting to get cloud discovery metadata from the hardcoded values."), this.options.skipAuthorityMetadataCache) this.logger.verbose("Skipping hardcoded cloud discovery metadata cache since skipAuthorityMetadataCache is set to true. Attempting to get cloud discovery metadata from the network metadata cache.");
            else {
                const o = GT(this.hostnameAndPort);
                if (o) return this.logger.verbose("Found cloud discovery metadata from hardcoded values."), Ta(e, o, !1), Kt.HARDCODED_VALUES;
                this.logger.verbose("Did not find cloud discovery metadata in hardcoded values... Attempting to get cloud discovery metadata from the network metadata cache.")
            }
            const r = cd(e);
            return this.isAuthoritySameType(e) && e.aliasesFromNetwork && !r ? (this.logger.verbose("Found cloud discovery metadata in the cache."), Kt.CACHE) : (r && this.logger.verbose("The metadata entity is expired."), null)
        }
        getCloudDiscoveryMetadataFromConfig() {
            if (this.authorityType === nn.Ciam) return this.logger.verbose("CIAM authorities do not support cloud discovery metadata, generate the aliases from authority host."), At.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
            if (this.authorityOptions.cloudDiscoveryMetadata) {
                this.logger.verbose("The cloud discovery metadata has been provided as a network response, in the config.");
                try {
                    this.logger.verbose("Attempting to parse the cloud discovery metadata.");
                    const e = JSON.parse(this.authorityOptions.cloudDiscoveryMetadata)
                        , n = ds(e.metadata, this.hostnameAndPort);
                    if (this.logger.verbose("Parsed the cloud discovery metadata."), n) return this.logger.verbose("There is returnable metadata attached to the parsed cloud discovery metadata."), n;
                    this.logger.verbose("There is no metadata attached to the parsed cloud discovery metadata.")
                } catch { throw this.logger.verbose("Unable to parse the cloud discovery metadata. Throwing Invalid Cloud Discovery Metadata Error."), Be(dl) }
            }
            return this.isInKnownAuthorities() ? (this.logger.verbose("The host is included in knownAuthorities. Creating new cloud discovery metadata from the host."), At.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort)) : null
        }
        async getCloudDiscoveryMetadataFromNetwork() {
            this.performanceClient?.addQueueMeasurement(N.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.correlationId);
            const e = `${F.AAD_INSTANCE_DISCOVERY_ENDPT}${this.canonicalAuthority}oauth2/v2.0/authorize`
                , n = {};
            let r = null;
            try {
                const o = await this.networkInterface.sendGetRequestAsync(e, n);
                let i, s;
                if (WT(o.body)) i = o.body, s = i.metadata, this.logger.verbosePii(`tenant_discovery_endpoint is: ${i.tenant_discovery_endpoint}`);
                else if (zT(o.body)) {
                    if (this.logger.warning(`A CloudInstanceDiscoveryErrorResponse was returned. The cloud instance discovery network request's status code is: ${o.status}`), i = o.body, i.error === F.INVALID_INSTANCE) return this.logger.error("The CloudInstanceDiscoveryErrorResponse error is invalid_instance."), null;
                    this.logger.warning(`The CloudInstanceDiscoveryErrorResponse error is ${i.error}`), this.logger.warning(`The CloudInstanceDiscoveryErrorResponse error description is ${i.error_description}`), this.logger.warning("Setting the value of the CloudInstanceDiscoveryMetadata (returned from the network) to []"), s = []
                } else return this.logger.error("AAD did not return a CloudInstanceDiscoveryResponse or CloudInstanceDiscoveryErrorResponse"), null;
                this.logger.verbose("Attempting to find a match between the developer's authority and the CloudInstanceDiscoveryMetadata returned from the network request."), r = ds(s, this.hostnameAndPort)
            } catch (o) {
                if (o instanceof Qe) this.logger.error(`There was a network error while attempting to get the cloud discovery instance metadata.
Error: ${o.errorCode}
Error Description: ${o.errorMessage}`);
                else {
                    const i = o;
                    this.logger.error(`A non-MSALJS error was thrown while attempting to get the cloud instance discovery metadata.
Error: ${i.name}
Error Description: ${i.message}`)
                }
                return null
            }
            return r || (this.logger.warning("The developer's authority was not found within the CloudInstanceDiscoveryMetadata returned from the network request."), this.logger.verbose("Creating custom Authority for custom domain scenario."), r = At.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort)), r
        }
        isInKnownAuthorities() {
            return this.authorityOptions.knownAuthorities.filter(n => n && Re.getDomainFromUrl(n)
                    .toLowerCase() === this.hostnameAndPort)
                .length > 0
        }
        static generateAuthority(e, n) {
            let r;
            if (n && n.azureCloudInstance !== pl.None) {
                const o = n.tenant ? n.tenant : F.DEFAULT_COMMON_TENANT;
                r = `${n.azureCloudInstance}/${o}/`
            }
            return r || e
        }
        static createCloudDiscoveryMetadataFromHost(e) { return { preferred_network: e, preferred_cache: e, aliases: [e] } } getPreferredCache() { if (this.managedIdentity) return F.DEFAULT_AUTHORITY_HOST; if (this.discoveryComplete()) return this.metadata.preferred_cache; throw q(xn) } isAlias(e) { return this.metadata.aliases.indexOf(e) > -1 } isAliasOfKnownMicrosoftAuthority(e) { return Jp.has(e) } static isPublicCloudAuthority(e) { return F.KNOWN_PUBLIC_CLOUDS.indexOf(e) >= 0 } static buildRegionalAuthorityString(e, n, r) {
            const o = new Re(e);
            o.validateAsUri();
            const i = o.getUrlComponents();
            let s = `${n}.${i.HostNameAndPort}`;
            this.isPublicCloudAuthority(i.HostNameAndPort) && (s = `${n}.${F.REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX}`);
            const a = Re.constructAuthorityUriFromObject({ ...o.getUrlComponents(), HostNameAndPort: s })
                .urlString;
            return r ? `${a}?${r}` : a
        }
        static replaceWithRegionalInformation(e, n) { const r = { ...e }; return r.authorization_endpoint = At.buildRegionalAuthorityString(r.authorization_endpoint, n), r.token_endpoint = At.buildRegionalAuthorityString(r.token_endpoint, n), r.end_session_endpoint && (r.end_session_endpoint = At.buildRegionalAuthorityString(r.end_session_endpoint, n)), r } static transformCIAMAuthority(e) {
            let n = e;
            const o = new Re(e)
                .getUrlComponents();
            if (o.PathSegments.length === 0 && o.HostNameAndPort.endsWith(F.CIAM_AUTH_URL)) {
                const i = o.HostNameAndPort.split(".")[0];
                n = `${n}${i}${F.AAD_TENANT_DOMAIN_SUFFIX}`
            }
            return n
        }
    }
    At.reservedTenantDomains = new Set(["{tenant}", "{tenantid}", ur.COMMON, ur.CONSUMERS, ur.ORGANIZATIONS]);
    
    function av(t) {
        const r = new Re(t)
            .getUrlComponents()
            .PathSegments.slice(-1)[0]?.toLowerCase();
        switch (r) {
        case ur.COMMON:
        case ur.ORGANIZATIONS:
        case ur.CONSUMERS:
            return;
        default:
            return r
        }
    }
    
    function Zp(t) { return t.endsWith(F.FORWARD_SLASH) ? t : `${t}${F.FORWARD_SLASH}` }
    
    function cv(t) {
        const e = t.cloudDiscoveryMetadata;
        let n;
        if (e) try { n = JSON.parse(e) } catch { throw Be(dl) }
        return { canonicalAuthority: t.authority ? Zp(t.authority) : void 0, knownAuthorities: t.knownAuthorities, cloudDiscoveryMetadata: n }
    }
    async function eg(t, e, n, r, o, i, s) {
        s?.addQueueMeasurement(N.AuthorityFactoryCreateDiscoveredInstance, i);
        const a = At.transformCIAMAuthority(Zp(t))
            , c = new At(a, e, n, r, o, i, s);
        try { return await W(c.resolveEndpointsAsync.bind(c), N.AuthorityResolveEndpointsAsync, o, s, i)(), c } catch { throw q(xn) }
    }
    async function tg(t, e, n) { return typeof t == "string" ? t : t({ clientId: e, tokenEndpoint: n }) }
    const yo = "client_id"
        , lv = "redirect_uri"
        , ld = "response_type"
        , uv = "response_mode"
        , dv = "grant_type"
        , hv = "claims"
        , fv = "scope"
        , pv = "refresh_token"
        , gv = "state"
        , mv = "nonce"
        , yv = "prompt"
        , Cv = "code"
        , _v = "code_challenge"
        , Tv = "code_challenge_method"
        , vv = "code_verifier"
        , Ev = "client-request-id"
        , Av = "x-client-SKU"
        , bv = "x-client-VER"
        , Iv = "x-client-OS"
        , wv = "x-client-CPU"
        , Sv = "x-client-current-telemetry"
        , kv = "x-client-last-telemetry"
        , Rv = "x-ms-lib-capability"
        , Ov = "x-app-name"
        , Nv = "x-app-ver"
        , Pv = "post_logout_redirect_uri"
        , Mv = "id_token_hint"
        , Lv = "device_code"
        , Dv = "client_secret"
        , xv = "client_assertion"
        , Uv = "client_assertion_type"
        , ud = "token_type"
        , dd = "req_cnf"
        , Fv = "assertion"
        , Hv = "requested_token_use"
        , hd = "return_spa_code"
        , Bv = "nativebroker"
        , $v = "logout_hint"
        , Kv = "sid"
        , jv = "login_hint"
        , qv = "domain_hint"
        , Vv = "x-client-xtra-sku";
    const hs = { createNewGuid: () => { throw q(me) }, base64Decode: () => { throw q(me) }, base64Encode: () => { throw q(me) }, base64UrlEncode: () => { throw q(me) }, encodeKid: () => { throw q(me) }, async getPublicKeyThumbprint() { throw q(me) }, async removeTokenBindingKey() { throw q(me) }, async clearKeystore() { throw q(me) }, async signJwt() { throw q(me) }, async hashString() { throw q(me) } };
    var Ue;
    (function (t) { t[t.Error = 0] = "Error", t[t.Warning = 1] = "Warning", t[t.Info = 2] = "Info", t[t.Verbose = 3] = "Verbose", t[t.Trace = 4] = "Trace" })(Ue || (Ue = {}));
    class Dr {
        constructor(e, n, r) {
            this.level = Ue.Info;
            const o = () => {}
                , i = e || Dr.createDefaultLoggerOptions();
            this.localCallback = i.loggerCallback || o, this.piiLoggingEnabled = i.piiLoggingEnabled || !1, this.level = typeof i.logLevel == "number" ? i.logLevel : Ue.Info, this.correlationId = i.correlationId || F.EMPTY_STRING, this.packageName = n || F.EMPTY_STRING, this.packageVersion = r || F.EMPTY_STRING
        }
        static createDefaultLoggerOptions() { return { loggerCallback: () => {}, piiLoggingEnabled: !1, logLevel: Ue.Info } } clone(e, n, r) { return new Dr({ loggerCallback: this.localCallback, piiLoggingEnabled: this.piiLoggingEnabled, logLevel: this.level, correlationId: r || this.correlationId }, e, n) } logMessage(e, n) {
            if (n.logLevel > this.level || !this.piiLoggingEnabled && n.containsPii) return;
            const i = `${`[${new Date().toUTCString()}] : [${n.correlationId||this.correlationId||""}]`} : ${this.packageName}@${this.packageVersion} : ${Ue[n.logLevel]} - ${e}`;
            this.executeCallback(n.logLevel, i, n.containsPii || !1)
        }
        executeCallback(e, n, r) { this.localCallback && this.localCallback(e, n, r) } error(e, n) { this.logMessage(e, { logLevel: Ue.Error, containsPii: !1, correlationId: n || F.EMPTY_STRING }) } errorPii(e, n) { this.logMessage(e, { logLevel: Ue.Error, containsPii: !0, correlationId: n || F.EMPTY_STRING }) } warning(e, n) { this.logMessage(e, { logLevel: Ue.Warning, containsPii: !1, correlationId: n || F.EMPTY_STRING }) } warningPii(e, n) { this.logMessage(e, { logLevel: Ue.Warning, containsPii: !0, correlationId: n || F.EMPTY_STRING }) } info(e, n) { this.logMessage(e, { logLevel: Ue.Info, containsPii: !1, correlationId: n || F.EMPTY_STRING }) } infoPii(e, n) { this.logMessage(e, { logLevel: Ue.Info, containsPii: !0, correlationId: n || F.EMPTY_STRING }) } verbose(e, n) { this.logMessage(e, { logLevel: Ue.Verbose, containsPii: !1, correlationId: n || F.EMPTY_STRING }) } verbosePii(e, n) { this.logMessage(e, { logLevel: Ue.Verbose, containsPii: !0, correlationId: n || F.EMPTY_STRING }) } trace(e, n) { this.logMessage(e, { logLevel: Ue.Trace, containsPii: !1, correlationId: n || F.EMPTY_STRING }) } tracePii(e, n) { this.logMessage(e, { logLevel: Ue.Trace, containsPii: !0, correlationId: n || F.EMPTY_STRING }) } isPiiLoggingEnabled() { return this.piiLoggingEnabled || !1 }
    }
    const ng = "@azure/msal-common"
        , ml = "14.14.0";
    class Xe {
        constructor(e) {
            const n = e ? cn.trimArrayEntries([...e]) : []
                , r = n ? cn.removeEmptyStringsFromArray(n) : [];
            this.validateInputScopes(r), this.scopes = new Set, r.forEach(o => this.scopes.add(o))
        }
        static fromString(e) {
            const r = (e || F.EMPTY_STRING)
                .split(" ");
            return new Xe(r)
        }
        static createSearchScopes(e) { const n = new Xe(e); return n.containsOnlyOIDCScopes() ? n.removeScope(F.OFFLINE_ACCESS_SCOPE) : n.removeOIDCScopes(), n } validateInputScopes(e) { if (!e || e.length < 1) throw Be(Fp) } containsScope(e) {
            const n = this.printScopesLowerCase()
                .split(" ")
                , r = new Xe(n);
            return e ? r.scopes.has(e.toLowerCase()) : !1
        }
        containsScopeSet(e) {
            return !e || e.scopes.size <= 0 ? !1 : this.scopes.size >= e.scopes.size && e.asArray()
                .every(n => this.containsScope(n))
        }
        containsOnlyOIDCScopes() { let e = 0; return Qu.forEach(n => { this.containsScope(n) && (e += 1) }), this.scopes.size === e } appendScope(e) { e && this.scopes.add(e.trim()) } appendScopes(e) { try { e.forEach(n => this.appendScope(n)) } catch { throw q(kp) } } removeScope(e) {
            if (!e) throw q(Sp);
            this.scopes.delete(e.trim())
        }
        removeOIDCScopes() { Qu.forEach(e => { this.scopes.delete(e) }) } unionScopeSets(e) { if (!e) throw q(za); const n = new Set; return e.scopes.forEach(r => n.add(r.toLowerCase())), this.scopes.forEach(r => n.add(r.toLowerCase())), n } intersectingScopeSets(e) {
            if (!e) throw q(za);
            e.containsOnlyOIDCScopes() || e.removeOIDCScopes();
            const n = this.unionScopeSets(e)
                , r = e.getScopeCount()
                , o = this.getScopeCount();
            return n.size < o + r
        }
        getScopeCount() { return this.scopes.size } asArray() { const e = []; return this.scopes.forEach(n => e.push(n)), e } printScopes() {
            return this.scopes ? this.asArray()
                .join(" ") : F.EMPTY_STRING
        }
        printScopesLowerCase() {
            return this.printScopes()
                .toLowerCase()
        }
    }
    
    function fs(t, e) { if (!t) throw q(yp); try { const n = e(t); return JSON.parse(n) } catch { throw q(rl) } }
    
    function no(t) { if (!t) throw q(rl); const e = t.split(It.CLIENT_INFO_SEPARATOR, 2); return { uid: e[0], utid: e.length < 2 ? F.EMPTY_STRING : e[1] } }
    
    function ps(t, e) { return !!t && !!e && t === e.split(".")[1] }
    
    function yl(t, e, n, r) { if (r) { const { oid: o, sub: i, tid: s, name: a, tfp: c, acr: l } = r, h = s || c || l || ""; return { tenantId: h, localAccountId: o || i || "", name: a, isHomeTenant: ps(h, t) } } else return { tenantId: n, localAccountId: e, isHomeTenant: ps(n, t) } }
    
    function Cl(t, e, n, r) {
        let o = t;
        if (e) {
            const { isHomeTenant: i, ...s } = e;
            o = { ...t, ...s }
        }
        if (n) { const { isHomeTenant: i, ...s } = yl(t.homeAccountId, t.localAccountId, t.tenantId, n); return o = { ...o, ...s, idTokenClaims: n, idToken: r }, o }
        return o
    }
    
    function rg(t) { return t && (t.tid || t.tfp || t.acr) || null } class st {
        generateAccountId() {
            return [this.homeAccountId, this.environment].join(It.CACHE_KEY_SEPARATOR)
                .toLowerCase()
        }
        generateAccountKey() { return st.generateAccountCacheKey({ homeAccountId: this.homeAccountId, environment: this.environment, tenantId: this.realm, username: this.username, localAccountId: this.localAccountId }) } getAccountInfo() {
            return {
                homeAccountId: this.homeAccountId
                , environment: this.environment
                , tenantId: this.realm
                , username: this.username
                , localAccountId: this.localAccountId
                , name: this.name
                , nativeAccountId: this.nativeAccountId
                , authorityType: this.authorityType
                , tenantProfiles: new Map((this.tenantProfiles || [])
                    .map(e => [e.tenantId, e]))
            }
        }
        isSingleTenant() { return !this.tenantProfiles } static generateAccountCacheKey(e) {
            const n = e.homeAccountId.split(".")[1];
            return [e.homeAccountId, e.environment || "", n || e.tenantId || ""].join(It.CACHE_KEY_SEPARATOR)
                .toLowerCase()
        }
        static createAccount(e, n, r) {
            const o = new st;
            n.authorityType === nn.Adfs ? o.authorityType = Fi.ADFS_ACCOUNT_TYPE : n.protocolMode === qn.AAD ? o.authorityType = Fi.MSSTS_ACCOUNT_TYPE : o.authorityType = Fi.GENERIC_ACCOUNT_TYPE;
            let i;
            e.clientInfo && r && (i = fs(e.clientInfo, r)), o.clientInfo = e.clientInfo, o.homeAccountId = e.homeAccountId, o.nativeAccountId = e.nativeAccountId;
            const s = e.environment || n && n.getPreferredCache();
            if (!s) throw q(al);
            o.environment = s, o.realm = i?.utid || rg(e.idTokenClaims) || "", o.localAccountId = i?.uid || e.idTokenClaims?.oid || e.idTokenClaims?.sub || "";
            const a = e.idTokenClaims?.preferred_username || e.idTokenClaims?.upn
                , c = e.idTokenClaims?.emails ? e.idTokenClaims.emails[0] : null;
            if (o.username = a || c || "", o.name = e.idTokenClaims?.name || "", o.cloudGraphHostName = e.cloudGraphHostName, o.msGraphHost = e.msGraphHost, e.tenantProfiles) o.tenantProfiles = e.tenantProfiles;
            else {
                const l = yl(e.homeAccountId, o.localAccountId, o.realm, e.idTokenClaims);
                o.tenantProfiles = [l]
            }
            return o
        }
        static createFromAccountInfo(e, n, r) { const o = new st; return o.authorityType = e.authorityType || Fi.GENERIC_ACCOUNT_TYPE, o.homeAccountId = e.homeAccountId, o.localAccountId = e.localAccountId, o.nativeAccountId = e.nativeAccountId, o.realm = e.tenantId, o.environment = e.environment, o.username = e.username, o.name = e.name, o.cloudGraphHostName = n, o.msGraphHost = r, o.tenantProfiles = Array.from(e.tenantProfiles?.values() || []), o } static generateHomeAccountId(e, n, r, o, i) { if (!(n === nn.Adfs || n === nn.Dsts)) { if (e) try { const s = fs(e, o.base64Decode); if (s.uid && s.utid) return `${s.uid}.${s.utid}` } catch {} r.warning("No client info in response") } return i?.sub || "" } static isAccountEntity(e) { return e ? e.hasOwnProperty("homeAccountId") && e.hasOwnProperty("environment") && e.hasOwnProperty("realm") && e.hasOwnProperty("localAccountId") && e.hasOwnProperty("username") && e.hasOwnProperty("authorityType") : !1 } static accountInfoIsEqual(e, n, r) {
            if (!e || !n) return !1;
            let o = !0;
            if (r) {
                const i = e.idTokenClaims || {}
                    , s = n.idTokenClaims || {};
                o = i.iat === s.iat && i.nonce === s.nonce
            }
            return e.homeAccountId === n.homeAccountId && e.localAccountId === n.localAccountId && e.username === n.username && e.tenantId === n.tenantId && e.environment === n.environment && e.nativeAccountId === n.nativeAccountId && o
        }
    }
    const og = "cache_quota_exceeded"
        , _l = "cache_error_unknown";
    const va = {
        [og]: "Exceeded cache storage capacity."
        , [_l]: "Unexpected error occurred when using cache storage."
    };
    class fo extends Error {
        constructor(e, n) {
            const r = n || (va[e] ? va[e] : va[_l]);
            super(`${e}: ${r}`), Object.setPrototypeOf(this, fo.prototype), this.name = "CacheError", this.errorCode = e, this.errorMessage = r
        }
    }
    class Co {
        constructor(e, n, r, o) { this.clientId = e, this.cryptoImpl = n, this.commonLogger = r.clone(ng, ml), this.staticAuthorityOptions = o } getAllAccounts(e) { return this.buildTenantProfiles(this.getAccountsFilteredBy(e || {}), e) } getAccountInfoFilteredBy(e) { const n = this.getAllAccounts(e); return n.length > 1 ? n.sort(o => o.idTokenClaims ? -1 : 1)[0] : n.length === 1 ? n[0] : null } getBaseAccountInfo(e) { const n = this.getAccountsFilteredBy(e); return n.length > 0 ? n[0].getAccountInfo() : null } buildTenantProfiles(e, n) { return e.flatMap(r => this.getTenantProfilesFromAccountEntity(r, n?.tenantId, n)) } getTenantedAccountInfoByFilter(e, n, r, o) {
            let i = null
                , s;
            if (o && !this.tenantProfileMatchesFilter(r, o)) return null;
            const a = this.getIdToken(e, n, r.tenantId);
            return a && (s = Br(a.secret, this.cryptoImpl.base64Decode), !this.idTokenClaimsMatchTenantProfileFilter(s, o)) ? null : (i = Cl(e, r, s, a?.secret), i)
        }
        getTenantProfilesFromAccountEntity(e, n, r) {
            const o = e.getAccountInfo();
            let i = o.tenantProfiles || new Map;
            const s = this.getTokenKeys();
            if (n) {
                const c = i.get(n);
                if (c) i = new Map([[n, c]]);
                else return []
            }
            const a = [];
            return i.forEach(c => {
                const l = this.getTenantedAccountInfoByFilter(o, s, c, r);
                l && a.push(l)
            }), a
        }
        tenantProfileMatchesFilter(e, n) { return !(n.localAccountId && !this.matchLocalAccountIdFromTenantProfile(e, n.localAccountId) || n.name && e.name !== n.name || n.isHomeTenant !== void 0 && e.isHomeTenant !== n.isHomeTenant) } idTokenClaimsMatchTenantProfileFilter(e, n) { return !(n && (n.localAccountId && !this.matchLocalAccountIdFromTokenClaims(e, n.localAccountId) || n.loginHint && !this.matchLoginHintFromTokenClaims(e, n.loginHint) || n.username && !this.matchUsername(e.preferred_username, n.username) || n.name && !this.matchName(e, n.name) || n.sid && !this.matchSid(e, n.sid))) } async saveCacheRecord(e, n, r) { if (!e) throw q(Rp); try { e.account && this.setAccount(e.account), e.idToken && n?.idToken !== !1 && this.setIdTokenCredential(e.idToken), e.accessToken && n?.accessToken !== !1 && await this.saveAccessToken(e.accessToken), e.refreshToken && n?.refreshToken !== !1 && this.setRefreshTokenCredential(e.refreshToken), e.appMetadata && this.setAppMetadata(e.appMetadata) } catch (o) { throw this.commonLogger?.error("CacheManager.saveCacheRecord: failed"), o instanceof Error ? (this.commonLogger?.errorPii(`CacheManager.saveCacheRecord: ${o.message}`, r), o.name === "QuotaExceededError" || o.name === "NS_ERROR_DOM_QUOTA_REACHED" || o.message.includes("exceeded the quota") ? (this.commonLogger?.error("CacheManager.saveCacheRecord: exceeded storage quota", r), new fo(og)) : new fo(o.name, o.message)) : (this.commonLogger?.errorPii(`CacheManager.saveCacheRecord: ${o}`, r), new fo(_l)) } } async saveAccessToken(e) {
            const n = { clientId: e.clientId, credentialType: e.credentialType, environment: e.environment, homeAccountId: e.homeAccountId, realm: e.realm, tokenType: e.tokenType, requestedClaimsHash: e.requestedClaimsHash }
                , r = this.getTokenKeys()
                , o = Xe.fromString(e.target)
                , i = [];
            r.accessToken.forEach(s => {
                if (!this.accessTokenKeyMatchesFilter(s, n, !1)) return;
                const a = this.getAccessTokenCredential(s);
                a && this.credentialMatchesFilter(a, n) && Xe.fromString(a.target)
                    .intersectingScopeSets(o) && i.push(this.removeAccessToken(s))
            }), await Promise.all(i), this.setAccessTokenCredential(e)
        }
        getAccountsFilteredBy(e) {
            const n = this.getAccountKeys()
                , r = [];
            return n.forEach(o => {
                if (!this.isAccountKey(o, e.homeAccountId)) return;
                const i = this.getAccount(o, this.commonLogger);
                if (!i || e.homeAccountId && !this.matchHomeAccountId(i, e.homeAccountId) || e.username && !this.matchUsername(i.username, e.username) || e.environment && !this.matchEnvironment(i, e.environment) || e.realm && !this.matchRealm(i, e.realm) || e.nativeAccountId && !this.matchNativeAccountId(i, e.nativeAccountId) || e.authorityType && !this.matchAuthorityType(i, e.authorityType)) return;
                const s = { localAccountId: e?.localAccountId, name: e?.name }
                    , a = i.tenantProfiles?.filter(c => this.tenantProfileMatchesFilter(c, s));
                a && a.length === 0 || r.push(i)
            }), r
        }
        isAccountKey(e, n, r) {
            return !(e.split(It.CACHE_KEY_SEPARATOR)
                .length < 3 || n && !e.toLowerCase()
                .includes(n.toLowerCase()) || r && !e.toLowerCase()
                .includes(r.toLowerCase()))
        }
        isCredentialKey(e) {
            if (e.split(It.CACHE_KEY_SEPARATOR)
                .length < 6) return !1;
            const n = e.toLowerCase();
            if (n.indexOf(ae.ID_TOKEN.toLowerCase()) === -1 && n.indexOf(ae.ACCESS_TOKEN.toLowerCase()) === -1 && n.indexOf(ae.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase()) === -1 && n.indexOf(ae.REFRESH_TOKEN.toLowerCase()) === -1) return !1;
            if (n.indexOf(ae.REFRESH_TOKEN.toLowerCase()) > -1) {
                const r = `${ae.REFRESH_TOKEN}${It.CACHE_KEY_SEPARATOR}${this.clientId}${It.CACHE_KEY_SEPARATOR}`
                    , o = `${ae.REFRESH_TOKEN}${It.CACHE_KEY_SEPARATOR}${Yo}${It.CACHE_KEY_SEPARATOR}`;
                if (n.indexOf(r.toLowerCase()) === -1 && n.indexOf(o.toLowerCase()) === -1) return !1
            } else if (n.indexOf(this.clientId.toLowerCase()) === -1) return !1;
            return !0
        }
        credentialMatchesFilter(e, n) { return !(n.clientId && !this.matchClientId(e, n.clientId) || n.userAssertionHash && !this.matchUserAssertionHash(e, n.userAssertionHash) || typeof n.homeAccountId == "string" && !this.matchHomeAccountId(e, n.homeAccountId) || n.environment && !this.matchEnvironment(e, n.environment) || n.realm && !this.matchRealm(e, n.realm) || n.credentialType && !this.matchCredentialType(e, n.credentialType) || n.familyId && !this.matchFamilyId(e, n.familyId) || n.target && !this.matchTarget(e, n.target) || (n.requestedClaimsHash || e.requestedClaimsHash) && e.requestedClaimsHash !== n.requestedClaimsHash || e.credentialType === ae.ACCESS_TOKEN_WITH_AUTH_SCHEME && (n.tokenType && !this.matchTokenType(e, n.tokenType) || n.tokenType === Fe.SSH && n.keyId && !this.matchKeyId(e, n.keyId))) } getAppMetadataFilteredBy(e) {
            const n = this.getKeys()
                , r = {};
            return n.forEach(o => {
                if (!this.isAppMetadata(o)) return;
                const i = this.getAppMetadata(o);
                i && (e.environment && !this.matchEnvironment(i, e.environment) || e.clientId && !this.matchClientId(i, e.clientId) || (r[o] = i))
            }), r
        }
        getAuthorityMetadataByAlias(e) {
            const n = this.getAuthorityMetadataKeys();
            let r = null;
            return n.forEach(o => {
                if (!this.isAuthorityMetadata(o) || o.indexOf(this.clientId) === -1) return;
                const i = this.getAuthorityMetadata(o);
                i && i.aliases.indexOf(e) !== -1 && (r = i)
            }), r
        }
        async removeAllAccounts() {
            const e = this.getAccountKeys()
                , n = [];
            e.forEach(r => { n.push(this.removeAccount(r)) }), await Promise.all(n)
        }
        async removeAccount(e) {
            const n = this.getAccount(e, this.commonLogger);
            n && (await this.removeAccountContext(n), this.removeItem(e))
        }
        async removeAccountContext(e) {
            const n = this.getTokenKeys()
                , r = e.generateAccountId()
                , o = [];
            n.idToken.forEach(i => { i.indexOf(r) === 0 && this.removeIdToken(i) }), n.accessToken.forEach(i => { i.indexOf(r) === 0 && o.push(this.removeAccessToken(i)) }), n.refreshToken.forEach(i => { i.indexOf(r) === 0 && this.removeRefreshToken(i) }), await Promise.all(o)
        }
        updateOutdatedCachedAccount(e, n, r) {
            if (n && n.isSingleTenant()) {
                this.commonLogger?.verbose("updateOutdatedCachedAccount: Found a single-tenant (outdated) account entity in the cache, migrating to multi-tenant account entity");
                const o = this.getAccountKeys()
                    .filter(l => l.startsWith(n.homeAccountId))
                    , i = [];
                o.forEach(l => {
                    const h = this.getCachedAccountEntity(l);
                    h && i.push(h)
                });
                const s = i.find(l => ps(l.realm, l.homeAccountId)) || i[0];
                s.tenantProfiles = i.map(l => ({ tenantId: l.realm, localAccountId: l.localAccountId, name: l.name, isHomeTenant: ps(l.realm, l.homeAccountId) }));
                const a = Co.toObject(new st, { ...s })
                    , c = a.generateAccountKey();
                return o.forEach(l => { l !== c && this.removeOutdatedAccount(e) }), this.setAccount(a), r?.verbose("Updated an outdated account entity in the cache"), a
            }
            return n
        }
        async removeAccessToken(e) { const n = this.getAccessTokenCredential(e); if (n) { if (n.credentialType.toLowerCase() === ae.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase() && n.tokenType === Fe.POP) { const o = n.keyId; if (o) try { await this.cryptoImpl.removeTokenBindingKey(o) } catch { throw q(Pp) } } return this.removeItem(e) } } removeAppMetadata() {
            return this.getKeys()
                .forEach(n => { this.isAppMetadata(n) && this.removeItem(n) }), !0
        }
        readAccountFromCache(e) { const n = st.generateAccountCacheKey(e); return this.getAccount(n, this.commonLogger) } getIdToken(e, n, r, o, i) {
            this.commonLogger.trace("CacheManager - getIdToken called");
            const s = { homeAccountId: e.homeAccountId, environment: e.environment, credentialType: ae.ID_TOKEN, clientId: this.clientId, realm: r }
                , a = this.getIdTokensByFilter(s, n)
                , c = a.size;
            if (c < 1) return this.commonLogger.info("CacheManager:getIdToken - No token found"), null;
            if (c > 1) {
                let l = a;
                if (!r) {
                    const h = new Map;
                    a.forEach((g, T) => { g.realm === e.tenantId && h.set(T, g) });
                    const f = h.size;
                    if (f < 1) return this.commonLogger.info("CacheManager:getIdToken - Multiple ID tokens found for account but none match account entity tenant id, returning first result"), a.values()
                        .next()
                        .value;
                    if (f === 1) return this.commonLogger.info("CacheManager:getIdToken - Multiple ID tokens found for account, defaulting to home tenant profile"), h.values()
                        .next()
                        .value;
                    l = h
                }
                return this.commonLogger.info("CacheManager:getIdToken - Multiple matching ID tokens found, clearing them"), l.forEach((h, f) => { this.removeIdToken(f) }), o && i && o.addFields({ multiMatchedID: a.size }, i), null
            }
            return this.commonLogger.info("CacheManager:getIdToken - Returning ID token"), a.values()
                .next()
                .value
        }
        getIdTokensByFilter(e, n) {
            const r = n && n.idToken || this.getTokenKeys()
                .idToken
                , o = new Map;
            return r.forEach(i => {
                if (!this.idTokenKeyMatchesFilter(i, { clientId: this.clientId, ...e })) return;
                const s = this.getIdTokenCredential(i);
                s && this.credentialMatchesFilter(s, e) && o.set(i, s)
            }), o
        }
        idTokenKeyMatchesFilter(e, n) { const r = e.toLowerCase(); return !(n.clientId && r.indexOf(n.clientId.toLowerCase()) === -1 || n.homeAccountId && r.indexOf(n.homeAccountId.toLowerCase()) === -1) } removeIdToken(e) { this.removeItem(e) } removeRefreshToken(e) { this.removeItem(e) } getAccessToken(e, n, r, o, i, s) {
            this.commonLogger.trace("CacheManager - getAccessToken called");
            const a = Xe.createSearchScopes(n.scopes)
                , c = n.authenticationScheme || Fe.BEARER
                , l = c && c.toLowerCase() !== Fe.BEARER.toLowerCase() ? ae.ACCESS_TOKEN_WITH_AUTH_SCHEME : ae.ACCESS_TOKEN
                , h = { homeAccountId: e.homeAccountId, environment: e.environment, credentialType: l, clientId: this.clientId, realm: o || e.tenantId, target: a, tokenType: c, keyId: n.sshKid, requestedClaimsHash: n.requestedClaimsHash }
                , f = r && r.accessToken || this.getTokenKeys()
                .accessToken
                , g = [];
            f.forEach(A => {
                if (this.accessTokenKeyMatchesFilter(A, h, !0)) {
                    const b = this.getAccessTokenCredential(A);
                    b && this.credentialMatchesFilter(b, h) && g.push(b)
                }
            });
            const T = g.length;
            return T < 1 ? (this.commonLogger.info("CacheManager:getAccessToken - No token found"), null) : T > 1 ? (this.commonLogger.info("CacheManager:getAccessToken - Multiple access tokens found, clearing them"), g.forEach(A => { this.removeAccessToken(to(A)) }), i && s && i.addFields({ multiMatchedAT: g.length }, s), null) : (this.commonLogger.info("CacheManager:getAccessToken - Returning access token"), g[0])
        }
        accessTokenKeyMatchesFilter(e, n, r) { const o = e.toLowerCase(); if (n.clientId && o.indexOf(n.clientId.toLowerCase()) === -1 || n.homeAccountId && o.indexOf(n.homeAccountId.toLowerCase()) === -1 || n.realm && o.indexOf(n.realm.toLowerCase()) === -1 || n.requestedClaimsHash && o.indexOf(n.requestedClaimsHash.toLowerCase()) === -1) return !1; if (n.target) { const i = n.target.asArray(); for (let s = 0; s < i.length; s++) { if (r && !o.includes(i[s].toLowerCase())) return !1; if (!r && o.includes(i[s].toLowerCase())) return !0 } } return !0 } getAccessTokensByFilter(e) {
            const n = this.getTokenKeys()
                , r = [];
            return n.accessToken.forEach(o => {
                if (!this.accessTokenKeyMatchesFilter(o, e, !0)) return;
                const i = this.getAccessTokenCredential(o);
                i && this.credentialMatchesFilter(i, e) && r.push(i)
            }), r
        }
        getRefreshToken(e, n, r, o, i) {
            this.commonLogger.trace("CacheManager - getRefreshToken called");
            const s = n ? Yo : void 0
                , a = { homeAccountId: e.homeAccountId, environment: e.environment, credentialType: ae.REFRESH_TOKEN, clientId: this.clientId, familyId: s }
                , c = r && r.refreshToken || this.getTokenKeys()
                .refreshToken
                , l = [];
            c.forEach(f => {
                if (this.refreshTokenKeyMatchesFilter(f, a)) {
                    const g = this.getRefreshTokenCredential(f);
                    g && this.credentialMatchesFilter(g, a) && l.push(g)
                }
            });
            const h = l.length;
            return h < 1 ? (this.commonLogger.info("CacheManager:getRefreshToken - No refresh token found."), null) : (h > 1 && o && i && o.addFields({ multiMatchedRT: h }, i), this.commonLogger.info("CacheManager:getRefreshToken - returning refresh token"), l[0])
        }
        refreshTokenKeyMatchesFilter(e, n) { const r = e.toLowerCase(); return !(n.familyId && r.indexOf(n.familyId.toLowerCase()) === -1 || !n.familyId && n.clientId && r.indexOf(n.clientId.toLowerCase()) === -1 || n.homeAccountId && r.indexOf(n.homeAccountId.toLowerCase()) === -1) } readAppMetadataFromCache(e) {
            const n = { environment: e, clientId: this.clientId }
                , r = this.getAppMetadataFilteredBy(n)
                , o = Object.keys(r)
                .map(s => r[s])
                , i = o.length;
            if (i < 1) return null;
            if (i > 1) throw q(Ip);
            return o[0]
        }
        isAppMetadataFOCI(e) { const n = this.readAppMetadataFromCache(e); return !!(n && n.familyId === Yo) } matchHomeAccountId(e, n) { return typeof e.homeAccountId == "string" && n === e.homeAccountId } matchLocalAccountIdFromTokenClaims(e, n) { const r = e.oid || e.sub; return n === r } matchLocalAccountIdFromTenantProfile(e, n) { return e.localAccountId === n } matchName(e, n) { return n.toLowerCase() === e.name?.toLowerCase() } matchUsername(e, n) { return !!(e && typeof e == "string" && n?.toLowerCase() === e.toLowerCase()) } matchUserAssertionHash(e, n) { return !!(e.userAssertionHash && n === e.userAssertionHash) } matchEnvironment(e, n) { if (this.staticAuthorityOptions) { const o = VT(this.staticAuthorityOptions, this.commonLogger); if (o.includes(n) && o.includes(e.environment)) return !0 } const r = this.getAuthorityMetadataByAlias(n); return !!(r && r.aliases.indexOf(e.environment) > -1) } matchCredentialType(e, n) { return e.credentialType && n.toLowerCase() === e.credentialType.toLowerCase() } matchClientId(e, n) { return !!(e.clientId && n === e.clientId) } matchFamilyId(e, n) { return !!(e.familyId && n === e.familyId) } matchRealm(e, n) { return e.realm?.toLowerCase() === n.toLowerCase() } matchNativeAccountId(e, n) { return !!(e.nativeAccountId && n === e.nativeAccountId) } matchLoginHintFromTokenClaims(e, n) { return e.login_hint === n || e.preferred_username === n || e.upn === n } matchSid(e, n) { return e.sid === n } matchAuthorityType(e, n) { return !!(e.authorityType && n.toLowerCase() === e.authorityType.toLowerCase()) } matchTarget(e, n) {
            return e.credentialType !== ae.ACCESS_TOKEN && e.credentialType !== ae.ACCESS_TOKEN_WITH_AUTH_SCHEME || !e.target ? !1 : Xe.fromString(e.target)
                .containsScopeSet(n)
        }
        matchTokenType(e, n) { return !!(e.tokenType && e.tokenType === n) } matchKeyId(e, n) { return !!(e.keyId && e.keyId === n) } isAppMetadata(e) { return e.indexOf(tl) !== -1 } isAuthorityMetadata(e) { return e.indexOf(cs.CACHE_KEY) !== -1 } generateAuthorityMetadataCacheKey(e) { return `${cs.CACHE_KEY}-${this.clientId}-${e}` } static toObject(e, n) { for (const r in n) e[r] = n[r]; return e }
    }
    class Gv extends Co { setAccount() { throw q(me) } getAccount() { throw q(me) } getCachedAccountEntity() { throw q(me) } setIdTokenCredential() { throw q(me) } getIdTokenCredential() { throw q(me) } setAccessTokenCredential() { throw q(me) } getAccessTokenCredential() { throw q(me) } setRefreshTokenCredential() { throw q(me) } getRefreshTokenCredential() { throw q(me) } setAppMetadata() { throw q(me) } getAppMetadata() { throw q(me) } setServerTelemetry() { throw q(me) } getServerTelemetry() { throw q(me) } setAuthorityMetadata() { throw q(me) } getAuthorityMetadata() { throw q(me) } getAuthorityMetadataKeys() { throw q(me) } setThrottlingCache() { throw q(me) } getThrottlingCache() { throw q(me) } removeItem() { throw q(me) } getKeys() { throw q(me) } getAccountKeys() { throw q(me) } getTokenKeys() { throw q(me) } async clear() { throw q(me) } updateCredentialCacheKey() { throw q(me) } removeOutdatedAccount() { throw q(me) } }
    const ig = { tokenRenewalOffsetSeconds: IT, preventCorsPreflight: !1 }
        , Wv = { loggerCallback: () => {}, piiLoggingEnabled: !1, logLevel: Ue.Info, correlationId: F.EMPTY_STRING }
        , zv = { claimsBasedCachingEnabled: !1 }
        , Yv = { async sendGetRequestAsync() { throw q(me) }, async sendPostRequestAsync() { throw q(me) } }
        , Qv = { sku: F.SKU, version: ml, cpu: F.EMPTY_STRING, os: F.EMPTY_STRING }
        , Jv = { clientSecret: F.EMPTY_STRING, clientAssertion: void 0 }
        , Xv = { azureCloudInstance: pl.None, tenant: `${F.DEFAULT_COMMON_TENANT}` }
        , Zv = { application: { appName: "", appVersion: "" } };
    
    function eE({ authOptions: t, systemOptions: e, loggerOptions: n, cacheOptions: r, storageInterface: o, networkInterface: i, cryptoInterface: s, clientCredentials: a, libraryInfo: c, telemetry: l, serverTelemetryManager: h, persistencePlugin: f, serializableCache: g }) { const T = { ...Wv, ...n }; return { authOptions: tE(t), systemOptions: { ...ig, ...e }, loggerOptions: T, cacheOptions: { ...zv, ...r }, storageInterface: o || new Gv(t.clientId, hs, new Dr(T)), networkInterface: i || Yv, cryptoInterface: s || hs, clientCredentials: a || Jv, libraryInfo: { ...Qv, ...c }, telemetry: { ...Zv, ...l }, serverTelemetryManager: h || null, persistencePlugin: f || null, serializableCache: g || null } }
    
    function tE(t) { return { clientCapabilities: [], azureCloudOptions: Xv, skipAuthorityMetadataCache: !1, ...t } }
    
    function Za(t) { return t.authOptions.authority.options.protocolMode === qn.OIDC } class fr extends Qe { constructor(e, n, r, o, i) { super(e, n, r), this.name = "ServerError", this.errorNo = o, this.status = i, Object.setPrototypeOf(this, fr.prototype) } } class _n {
        static generateThrottlingStorageKey(e) { return `${Qo.THROTTLING_PREFIX}.${JSON.stringify(e)}` } static preProcess(e, n) {
            const r = _n.generateThrottlingStorageKey(n)
                , o = e.getThrottlingCache(r);
            if (o) { if (o.throttleTime < Date.now()) { e.removeItem(r); return } throw new fr(o.errorCodes?.join(" ") || F.EMPTY_STRING, o.errorMessage, o.subError) }
        }
        static postProcess(e, n, r) {
            if (_n.checkResponseStatus(r) || _n.checkResponseForRetryAfter(r)) {
                const o = { throttleTime: _n.calculateThrottleTime(parseInt(r.headers[En.RETRY_AFTER])), error: r.body.error, errorCodes: r.body.error_codes, errorMessage: r.body.error_description, subError: r.body.suberror };
                e.setThrottlingCache(_n.generateThrottlingStorageKey(n), o)
            }
        }
        static checkResponseStatus(e) { return e.status === 429 || e.status >= 500 && e.status < 600 } static checkResponseForRetryAfter(e) { return e.headers ? e.headers.hasOwnProperty(En.RETRY_AFTER) && (e.status < 200 || e.status >= 300) : !1 } static calculateThrottleTime(e) {
            const n = e <= 0 ? 0 : e
                , r = Date.now() / 1e3;
            return Math.floor(Math.min(r + (n || Qo.DEFAULT_THROTTLE_TIME_SECONDS), r + Qo.DEFAULT_MAX_THROTTLE_TIME_SECONDS) * 1e3)
        }
        static removeThrottle(e, n, r, o) {
            const i = { clientId: n, authority: r.authority, scopes: r.scopes, homeAccountIdentifier: o, claims: r.claims, authenticationScheme: r.authenticationScheme, resourceRequestMethod: r.resourceRequestMethod, resourceRequestUri: r.resourceRequestUri, shrClaims: r.shrClaims, sshKid: r.sshKid }
                , s = this.generateThrottlingStorageKey(i);
            e.removeItem(s)
        }
    }
    class nE { constructor(e, n) { this.networkClient = e, this.cacheManager = n } async sendPostRequest(e, n, r) { _n.preProcess(this.cacheManager, e); let o; try { o = await this.networkClient.sendPostRequestAsync(n, r) } catch (i) { throw i instanceof Qe ? i : q(_p) } return _n.postProcess(this.cacheManager, e, o), o } }
    const Vt = { HOME_ACCOUNT_ID: "home_account_id", UPN: "UPN" };
    class zr {
        static validateRedirectUri(e) { if (!e) throw Be(Dp) } static validatePrompt(e) { const n = []; for (const r in ht) n.push(ht[r]); if (n.indexOf(e) < 0) throw Be(Hp) } static validateClaims(e) { try { JSON.parse(e) } catch { throw Be(ll) } } static validateCodeChallengeParams(e, n) {
            if (!e || !n) throw Be(ul);
            this.validateCodeChallengeMethod(n)
        }
        static validateCodeChallengeMethod(e) { if ([Ju.PLAIN, Ju.S256].indexOf(e) < 0) throw Be(Kp) }
    }
    class Jo {
        constructor() { this.parameters = new Map } addResponseTypeCode() { this.parameters.set(ld, encodeURIComponent(F.CODE_RESPONSE_TYPE)) } addResponseTypeForTokenAndIdToken() { this.parameters.set(ld, encodeURIComponent(`${F.TOKEN_RESPONSE_TYPE} ${F.ID_TOKEN_RESPONSE_TYPE}`)) } addResponseMode(e) { this.parameters.set(uv, encodeURIComponent(e || ET.QUERY)) } addNativeBroker() { this.parameters.set(Bv, encodeURIComponent("1")) } addScopes(e, n = !0, r = Ro) {
            n && !r.includes("openid") && !e.includes("openid") && r.push("openid");
            const o = n ? [...e || [], ...r] : e || []
                , i = new Xe(o);
            this.parameters.set(fv, encodeURIComponent(i.printScopes()))
        }
        addClientId(e) { this.parameters.set(yo, encodeURIComponent(e)) } addRedirectUri(e) { zr.validateRedirectUri(e), this.parameters.set(lv, encodeURIComponent(e)) } addPostLogoutRedirectUri(e) { zr.validateRedirectUri(e), this.parameters.set(Pv, encodeURIComponent(e)) } addIdTokenHint(e) { this.parameters.set(Mv, encodeURIComponent(e)) } addDomainHint(e) { this.parameters.set(qv, encodeURIComponent(e)) } addLoginHint(e) { this.parameters.set(jv, encodeURIComponent(e)) } addCcsUpn(e) { this.parameters.set(En.CCS_HEADER, encodeURIComponent(`UPN:${e}`)) } addCcsOid(e) { this.parameters.set(En.CCS_HEADER, encodeURIComponent(`Oid:${e.uid}@${e.utid}`)) } addSid(e) { this.parameters.set(Kv, encodeURIComponent(e)) } addClaims(e, n) {
            const r = this.addClientCapabilitiesToClaims(e, n);
            zr.validateClaims(r), this.parameters.set(hv, encodeURIComponent(r))
        }
        addCorrelationId(e) { this.parameters.set(Ev, encodeURIComponent(e)) } addLibraryInfo(e) { this.parameters.set(Av, e.sku), this.parameters.set(bv, e.version), e.os && this.parameters.set(Iv, e.os), e.cpu && this.parameters.set(wv, e.cpu) } addApplicationTelemetry(e) { e?.appName && this.parameters.set(Ov, e.appName), e?.appVersion && this.parameters.set(Nv, e.appVersion) } addPrompt(e) { zr.validatePrompt(e), this.parameters.set(`${yv}`, encodeURIComponent(e)) } addState(e) { e && this.parameters.set(gv, encodeURIComponent(e)) } addNonce(e) { this.parameters.set(mv, encodeURIComponent(e)) } addCodeChallengeParams(e, n) {
            if (zr.validateCodeChallengeParams(e, n), e && n) this.parameters.set(_v, encodeURIComponent(e)), this.parameters.set(Tv, encodeURIComponent(n));
            else throw Be(ul)
        }
        addAuthorizationCode(e) { this.parameters.set(Cv, encodeURIComponent(e)) } addDeviceCode(e) { this.parameters.set(Lv, encodeURIComponent(e)) } addRefreshToken(e) { this.parameters.set(pv, encodeURIComponent(e)) } addCodeVerifier(e) { this.parameters.set(vv, encodeURIComponent(e)) } addClientSecret(e) { this.parameters.set(Dv, encodeURIComponent(e)) } addClientAssertion(e) { e && this.parameters.set(xv, encodeURIComponent(e)) } addClientAssertionType(e) { e && this.parameters.set(Uv, encodeURIComponent(e)) } addOboAssertion(e) { this.parameters.set(Fv, encodeURIComponent(e)) } addRequestTokenUse(e) { this.parameters.set(Hv, encodeURIComponent(e)) } addGrantType(e) { this.parameters.set(dv, encodeURIComponent(e)) } addClientInfo() { this.parameters.set(AT, "1") } addExtraQueryParameters(e) {
            Object.entries(e)
                .forEach(([n, r]) => {!this.parameters.has(n) && r && this.parameters.set(n, r) })
        }
        addClientCapabilitiesToClaims(e, n) {
            let r;
            if (!e) r = {};
            else try { r = JSON.parse(e) } catch { throw Be(ll) }
            return n && n.length > 0 && (r.hasOwnProperty(Ui.ACCESS_TOKEN) || (r[Ui.ACCESS_TOKEN] = {}), r[Ui.ACCESS_TOKEN][Ui.XMS_CC] = { values: n }), JSON.stringify(r)
        }
        addUsername(e) { this.parameters.set(Zu.username, encodeURIComponent(e)) } addPassword(e) { this.parameters.set(Zu.password, encodeURIComponent(e)) } addPopToken(e) { e && (this.parameters.set(ud, Fe.POP), this.parameters.set(dd, encodeURIComponent(e))) } addSshJwk(e) { e && (this.parameters.set(ud, Fe.SSH), this.parameters.set(dd, encodeURIComponent(e))) } addServerTelemetry(e) { this.parameters.set(Sv, e.generateCurrentRequestHeaderValue()), this.parameters.set(kv, e.generateLastRequestHeaderValue()) } addThrottling() { this.parameters.set(Rv, Qo.X_MS_LIB_CAPABILITY_VALUE) } addLogoutHint(e) { this.parameters.set($v, encodeURIComponent(e)) } createQueryString() { const e = new Array; return this.parameters.forEach((n, r) => { e.push(`${r}=${n}`) }), e.join("&") }
    }
    class Tl {
        constructor(e, n) { this.config = eE(e), this.logger = new Dr(this.config.loggerOptions, ng, ml), this.cryptoUtils = this.config.cryptoInterface, this.cacheManager = this.config.storageInterface, this.networkClient = this.config.networkInterface, this.networkManager = new nE(this.networkClient, this.cacheManager), this.serverTelemetryManager = this.config.serverTelemetryManager, this.authority = this.config.authOptions.authority, this.performanceClient = n } createTokenRequestHeaders(e) {
            const n = {};
            if (n[En.CONTENT_TYPE] = F.URL_FORM_CONTENT_TYPE, !this.config.systemOptions.preventCorsPreflight && e) switch (e.type) {
            case Vt.HOME_ACCOUNT_ID:
                try {
                    const r = no(e.credential);
                    n[En.CCS_HEADER] = `Oid:${r.uid}@${r.utid}`
                } catch (r) { this.logger.verbose("Could not parse home account ID for CCS Header: " + r) }
                break;
            case Vt.UPN:
                n[En.CCS_HEADER] = `UPN: ${e.credential}`;
                break
            }
            return n
        }
        async executePostToTokenEndpoint(e, n, r, o, i, s) { s && this.performanceClient?.addQueueMeasurement(s, i); const a = await this.networkManager.sendPostRequest(o, e, { body: n, headers: r }); return this.performanceClient?.addFields({ refreshTokenSize: a.body.refresh_token?.length || 0, httpVerToken: a.headers?.[En.X_MS_HTTP_VERSION] || "" }, i), this.config.serverTelemetryManager && a.status < 500 && a.status !== 429 && this.config.serverTelemetryManager.clearTelemetryCache(), a } async updateAuthority(e, n) {
            this.performanceClient?.addQueueMeasurement(N.UpdateTokenEndpointAuthority, n);
            const r = `https://${e}/${this.authority.tenant}/`
                , o = await eg(r, this.networkClient, this.cacheManager, this.authority.options, this.logger, n, this.performanceClient);
            this.authority = o
        }
        createTokenQueryParameters(e) { const n = new Jo; return e.tokenQueryParameters && n.addExtraQueryParameters(e.tokenQueryParameters), n.createQueryString() }
    }
    const gs = "no_tokens_found"
        , sg = "native_account_unavailable"
        , vl = "refresh_token_expired"
        , rE = "interaction_required"
        , oE = "consent_required"
        , iE = "login_required"
        , $s = "bad_token";
    const fd = [rE, oE, iE, $s]
        , sE = ["message_only", "additional_action", "basic_action", "user_password_expired", "consent_required", "bad_token"]
        , aE = {
            [gs]: "No refresh token found in the cache. Please sign-in."
            , [sg]: "The requested account is not available in the native broker. It may have been deleted or logged out. Please sign-in again using an interactive API."
            , [vl]: "Refresh token has expired."
            , [$s]: "Identity provider returned bad_token due to an expired or invalid refresh token. Please invoke an interactive API to resolve."
        };
    class zt extends Qe { constructor(e, n, r, o, i, s, a, c) { super(e, n, r), Object.setPrototypeOf(this, zt.prototype), this.timestamp = o || F.EMPTY_STRING, this.traceId = i || F.EMPTY_STRING, this.correlationId = s || F.EMPTY_STRING, this.claims = a || F.EMPTY_STRING, this.name = "InteractionRequiredAuthError", this.errorNo = c } }
    
    function pd(t, e, n) {
        const r = !!t && fd.indexOf(t) > -1
            , o = !!n && sE.indexOf(n) > -1
            , i = !!e && fd.some(s => e.indexOf(s) > -1);
        return r || i || o
    }
    
    function ec(t) { return new zt(t, aE[t]) } class ln {
        static setRequestState(e, n, r) { const o = ln.generateLibraryState(e, r); return n ? `${o}${F.RESOURCE_DELIM}${n}` : o } static generateLibraryState(e, n) {
            if (!e) throw q(Qa);
            const r = { id: e.createNewGuid() };
            n && (r.meta = n);
            const o = JSON.stringify(r);
            return e.base64Encode(o)
        }
        static parseRequestState(e, n) {
            if (!e) throw q(Qa);
            if (!n) throw q(mo);
            try {
                const r = n.split(F.RESOURCE_DELIM)
                    , o = r[0]
                    , i = r.length > 1 ? r.slice(1)
                    .join(F.RESOURCE_DELIM) : F.EMPTY_STRING
                    , s = e.base64Decode(o)
                    , a = JSON.parse(s);
                return { userRequestState: i || F.EMPTY_STRING, libraryState: a }
            } catch { throw q(mo) }
        }
    }
    const cE = { SW: "sw", UHW: "uhw" };
    class _o {
        constructor(e, n) { this.cryptoUtils = e, this.performanceClient = n } async generateCnf(e, n) {
            this.performanceClient?.addQueueMeasurement(N.PopTokenGenerateCnf, e.correlationId);
            const r = await W(this.generateKid.bind(this), N.PopTokenGenerateCnf, n, this.performanceClient, e.correlationId)(e)
                , o = this.cryptoUtils.base64UrlEncode(JSON.stringify(r));
            return { kid: r.kid, reqCnfString: o }
        }
        async generateKid(e) { return this.performanceClient?.addQueueMeasurement(N.PopTokenGenerateKid, e.correlationId), { kid: await this.cryptoUtils.getPublicKeyThumbprint(e), xms_ksl: cE.SW } } async signPopToken(e, n, r) { return this.signPayload(e, n, r) } async signPayload(e, n, r, o) {
            const { resourceRequestMethod: i, resourceRequestUri: s, shrClaims: a, shrNonce: c, shrOptions: l } = r, f = (s ? new Re(s) : void 0)
                ?.getUrlComponents();
            return this.cryptoUtils.signJwt({ at: e, ts: kn(), m: i?.toUpperCase(), u: f?.HostNameAndPort, nonce: c || this.cryptoUtils.createNewGuid(), p: f?.AbsolutePath, q: f?.QueryString ? [[], f.QueryString] : void 0, client_claims: a || void 0, ...o }, n, l, r.correlationId)
        }
    }
    class lE { constructor(e, n) { this.cache = e, this.hasChanged = n } get cacheHasChanged() { return this.hasChanged } get tokenCache() { return this.cache } }
    
    function uE(t) {
        const e = "code="
            , n = t.error_uri?.lastIndexOf(e);
        return n && n >= 0 ? t.error_uri?.substring(n + e.length) : void 0
    }
    class xr {
        constructor(e, n, r, o, i, s, a) { this.clientId = e, this.cacheStorage = n, this.cryptoObj = r, this.logger = o, this.serializableCache = i, this.persistencePlugin = s, this.performanceClient = a } validateServerAuthorizationCodeResponse(e, n) { if (!e.state || !n) throw e.state ? q(ls, "Cached State") : q(ls, "Server State"); let r, o; try { r = decodeURIComponent(e.state) } catch { throw q(mo, e.state) } try { o = decodeURIComponent(n) } catch { throw q(mo, e.state) } if (r !== o) throw q(Ep); if (e.error || e.error_description || e.suberror) { const i = uE(e); throw pd(e.error, e.error_description, e.suberror) ? new zt(e.error || "", e.error_description, e.suberror, e.timestamp || "", e.trace_id || "", e.correlation_id || "", e.claims || "", i) : new fr(e.error || "", e.error_description, e.suberror, i) } } validateTokenResponse(e, n) {
            if (e.error || e.error_description || e.suberror) {
                const r = `Error(s): ${e.error_codes||F.NOT_AVAILABLE} - Timestamp: ${e.timestamp||F.NOT_AVAILABLE} - Description: ${e.error_description||F.NOT_AVAILABLE} - Correlation ID: ${e.correlation_id||F.NOT_AVAILABLE} - Trace ID: ${e.trace_id||F.NOT_AVAILABLE}`
                    , o = e.error_codes?.length ? e.error_codes[0] : void 0
                    , i = new fr(e.error, r, e.suberror, o, e.status);
                if (n && e.status && e.status >= xi.SERVER_ERROR_RANGE_START && e.status <= xi.SERVER_ERROR_RANGE_END) { this.logger.warning(`executeTokenRequest:validateTokenResponse - AAD is currently unavailable and the access token is unable to be refreshed.
${i}`); return } else if (n && e.status && e.status >= xi.CLIENT_ERROR_RANGE_START && e.status <= xi.CLIENT_ERROR_RANGE_END) { this.logger.warning(`executeTokenRequest:validateTokenResponse - AAD is currently available but is unable to refresh the access token.
${i}`); return }
                throw pd(e.error, e.error_description, e.suberror) ? new zt(e.error, e.error_description, e.suberror, e.timestamp || F.EMPTY_STRING, e.trace_id || F.EMPTY_STRING, e.correlation_id || F.EMPTY_STRING, e.claims || F.EMPTY_STRING, o) : i
            }
        }
        async handleServerTokenResponse(e, n, r, o, i, s, a, c, l) {
            this.performanceClient?.addQueueMeasurement(N.HandleServerTokenResponse, e.correlation_id);
            let h;
            if (e.id_token) {
                if (h = Br(e.id_token || F.EMPTY_STRING, this.cryptoObj.base64Decode), i && i.nonce && h.nonce !== i.nonce) throw q(Ap);
                if (o.maxAge || o.maxAge === 0) {
                    const A = h.auth_time;
                    if (!A) throw q(il);
                    Lp(A, o.maxAge)
                }
            }
            this.homeAccountIdentifier = st.generateHomeAccountId(e.client_info || F.EMPTY_STRING, n.authorityType, this.logger, this.cryptoObj, h);
            let f;
            i && i.state && (f = ln.parseRequestState(this.cryptoObj, i.state)), e.key_id = e.key_id || o.sshKid || void 0;
            const g = this.generateCacheRecord(e, n, r, o, h, s, i);
            let T;
            try { if (this.persistencePlugin && this.serializableCache && (this.logger.verbose("Persistence enabled, calling beforeCacheAccess"), T = new lE(this.serializableCache, !0), await this.persistencePlugin.beforeCacheAccess(T)), a && !c && g.account) { const A = g.account.generateAccountKey(); if (!this.cacheStorage.getAccount(A, this.logger)) return this.logger.warning("Account used to refresh tokens not in persistence, refreshed tokens will not be stored in the cache"), await xr.generateAuthenticationResult(this.cryptoObj, n, g, !1, o, h, f, void 0, l) } await this.cacheStorage.saveCacheRecord(g, o.storeInCache, o.correlationId) } finally { this.persistencePlugin && this.serializableCache && T && (this.logger.verbose("Persistence enabled, calling afterCacheAccess"), await this.persistencePlugin.afterCacheAccess(T)) }
            return xr.generateAuthenticationResult(this.cryptoObj, n, g, !1, o, h, f, e, l)
        }
        generateCacheRecord(e, n, r, o, i, s, a) {
            const c = n.getPreferredCache();
            if (!c) throw q(al);
            const l = rg(i);
            let h, f;
            e.id_token && i && (h = Hs(this.homeAccountIdentifier, c, e.id_token, this.clientId, l || ""), f = El(this.cacheStorage, n, this.homeAccountIdentifier, this.cryptoObj.base64Decode, i, e.client_info, c, l, a, void 0, this.logger));
            let g = null;
            if (e.access_token) {
                const b = e.scope ? Xe.fromString(e.scope) : new Xe(o.scopes || [])
                    , k = (typeof e.expires_in == "string" ? parseInt(e.expires_in, 10) : e.expires_in) || 0
                    , O = (typeof e.ext_expires_in == "string" ? parseInt(e.ext_expires_in, 10) : e.ext_expires_in) || 0
                    , x = (typeof e.refresh_in == "string" ? parseInt(e.refresh_in, 10) : e.refresh_in) || void 0
                    , I = r + k
                    , w = I + O
                    , M = x && x > 0 ? r + x : void 0;
                g = Bs(this.homeAccountIdentifier, c, e.access_token, this.clientId, l || n.tenant || "", b.printScopes(), I, w, this.cryptoObj.base64Decode, M, e.token_type, s, e.key_id, o.claims, o.requestedClaimsHash)
            }
            let T = null;
            if (e.refresh_token) {
                let b;
                if (e.refresh_token_expires_in) {
                    const k = typeof e.refresh_token_expires_in == "string" ? parseInt(e.refresh_token_expires_in, 10) : e.refresh_token_expires_in;
                    b = r + k
                }
                T = Xp(this.homeAccountIdentifier, c, e.refresh_token, this.clientId, e.foci, s, b)
            }
            let A = null;
            return e.foci && (A = { clientId: this.clientId, environment: c, familyId: e.foci }), { account: f, idToken: h, accessToken: g, refreshToken: T, appMetadata: A }
        }
        static async generateAuthenticationResult(e, n, r, o, i, s, a, c, l) {
            let h = F.EMPTY_STRING
                , f = []
                , g = null
                , T, A, b = F.EMPTY_STRING;
            if (r.accessToken) {
                if (r.accessToken.tokenType === Fe.POP && !i.popKid) {
                    const I = new _o(e)
                        , { secret: w, keyId: M } = r.accessToken;
                    if (!M) throw q(cl);
                    h = await I.signPopToken(w, M, i)
                } else h = r.accessToken.secret;
                f = Xe.fromString(r.accessToken.target)
                    .asArray(), g = new Date(Number(r.accessToken.expiresOn) * 1e3), T = new Date(Number(r.accessToken.extendedExpiresOn) * 1e3), r.accessToken.refreshOn && (A = new Date(Number(r.accessToken.refreshOn) * 1e3))
            }
            r.appMetadata && (b = r.appMetadata.familyId === Yo ? Yo : "");
            const k = s?.oid || s?.sub || ""
                , O = s?.tid || "";
            c?.spa_accountid && r.account && (r.account.nativeAccountId = c?.spa_accountid);
            const x = r.account ? Cl(r.account.getAccountInfo(), void 0, s, r.idToken?.secret) : null;
            return { authority: n.canonicalAuthority, uniqueId: k, tenantId: O, scopes: f, account: x, idToken: r?.idToken?.secret || "", idTokenClaims: s || {}, accessToken: h, fromCache: o, expiresOn: g, extExpiresOn: T, refreshOn: A, correlationId: i.correlationId, requestId: l || F.EMPTY_STRING, familyId: b, tokenType: r.accessToken?.tokenType || F.EMPTY_STRING, state: a ? a.userRequestState : F.EMPTY_STRING, cloudGraphHostName: r.account?.cloudGraphHostName || F.EMPTY_STRING, msGraphHost: r.account?.msGraphHost || F.EMPTY_STRING, code: c?.spa_code, fromNativeBroker: !1 }
        }
    }
    
    function El(t, e, n, r, o, i, s, a, c, l, h) {
        h?.verbose("setCachedAccount called");
        const g = t.getAccountKeys()
            .find(O => O.startsWith(n));
        let T = null;
        g && (T = t.getAccount(g, h));
        const A = T || st.createAccount({ homeAccountId: n, idTokenClaims: o, clientInfo: i, environment: s, cloudGraphHostName: c?.cloud_graph_host_name, msGraphHost: c?.msgraph_host, nativeAccountId: l }, e, r)
            , b = A.tenantProfiles || []
            , k = a || A.realm;
        if (k && !b.find(O => O.tenantId === k)) {
            const O = yl(n, A.localAccountId, k, o);
            b.push(O)
        }
        return A.tenantProfiles = b, A
    }
    class ag extends Tl {
        constructor(e, n) { super(e, n), this.includeRedirectUri = !0, this.oidcDefaultScopes = this.config.authOptions.authority.options.OIDCOptions?.defaultScopes } async getAuthCodeUrl(e) { this.performanceClient?.addQueueMeasurement(N.GetAuthCodeUrl, e.correlationId); const n = await W(this.createAuthCodeUrlQueryString.bind(this), N.AuthClientCreateQueryString, this.logger, this.performanceClient, e.correlationId)(e); return Re.appendQueryString(this.authority.authorizationEndpoint, n) } async acquireToken(e, n) {
            if (this.performanceClient?.addQueueMeasurement(N.AuthClientAcquireToken, e.correlationId), !e.code) throw q(wp);
            const r = kn()
                , o = await W(this.executeTokenRequest.bind(this), N.AuthClientExecuteTokenRequest, this.logger, this.performanceClient, e.correlationId)(this.authority, e)
                , i = o.headers?.[En.X_MS_REQUEST_ID]
                , s = new xr(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin, this.performanceClient);
            return s.validateTokenResponse(o.body), W(s.handleServerTokenResponse.bind(s), N.HandleServerTokenResponse, this.logger, this.performanceClient, e.correlationId)(o.body, this.authority, r, e, n, void 0, void 0, void 0, i)
        }
        handleFragmentResponse(e, n) {
            if (new xr(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, null, null)
                .validateServerAuthorizationCodeResponse(e, n), !e.code) throw q(Np);
            return e
        }
        getLogoutUri(e) { if (!e) throw Be($p); const n = this.createLogoutUrlQueryString(e); return Re.appendQueryString(this.authority.endSessionEndpoint, n) } async executeTokenRequest(e, n) {
            this.performanceClient?.addQueueMeasurement(N.AuthClientExecuteTokenRequest, n.correlationId);
            const r = this.createTokenQueryParameters(n)
                , o = Re.appendQueryString(e.tokenEndpoint, r)
                , i = await W(this.createTokenRequestBody.bind(this), N.AuthClientCreateTokenRequestBody, this.logger, this.performanceClient, n.correlationId)(n);
            let s;
            if (n.clientInfo) try {
                const l = fs(n.clientInfo, this.cryptoUtils.base64Decode);
                s = { credential: `${l.uid}${It.CLIENT_INFO_SEPARATOR}${l.utid}`, type: Vt.HOME_ACCOUNT_ID }
            } catch (l) { this.logger.verbose("Could not parse client info for CCS Header: " + l) }
            const a = this.createTokenRequestHeaders(s || n.ccsCredential)
                , c = { clientId: n.tokenBodyParameters?.clientId || this.config.authOptions.clientId, authority: e.canonicalAuthority, scopes: n.scopes, claims: n.claims, authenticationScheme: n.authenticationScheme, resourceRequestMethod: n.resourceRequestMethod, resourceRequestUri: n.resourceRequestUri, shrClaims: n.shrClaims, sshKid: n.sshKid };
            return W(this.executePostToTokenEndpoint.bind(this), N.AuthorizationCodeClientExecutePostToTokenEndpoint, this.logger, this.performanceClient, n.correlationId)(o, i, a, c, n.correlationId, N.AuthorizationCodeClientExecutePostToTokenEndpoint)
        }
        async createTokenRequestBody(e) {
            this.performanceClient?.addQueueMeasurement(N.AuthClientCreateTokenRequestBody, e.correlationId);
            const n = new Jo;
            if (n.addClientId(e.tokenBodyParameters?.[yo] || this.config.authOptions.clientId), this.includeRedirectUri ? n.addRedirectUri(e.redirectUri) : zr.validateRedirectUri(e.redirectUri), n.addScopes(e.scopes, !0, this.oidcDefaultScopes), n.addAuthorizationCode(e.code), n.addLibraryInfo(this.config.libraryInfo), n.addApplicationTelemetry(this.config.telemetry.application), n.addThrottling(), this.serverTelemetryManager && !Za(this.config) && n.addServerTelemetry(this.serverTelemetryManager), e.codeVerifier && n.addCodeVerifier(e.codeVerifier), this.config.clientCredentials.clientSecret && n.addClientSecret(this.config.clientCredentials.clientSecret), this.config.clientCredentials.clientAssertion) {
                const i = this.config.clientCredentials.clientAssertion;
                n.addClientAssertion(await tg(i.assertion, this.config.authOptions.clientId, e.resourceRequestUri)), n.addClientAssertionType(i.assertionType)
            }
            if (n.addGrantType(gp.AUTHORIZATION_CODE_GRANT), n.addClientInfo(), e.authenticationScheme === Fe.POP) {
                const i = new _o(this.cryptoUtils, this.performanceClient);
                let s;
                e.popKid ? s = this.cryptoUtils.encodeKid(e.popKid) : s = (await W(i.generateCnf.bind(i), N.PopTokenGenerateCnf, this.logger, this.performanceClient, e.correlationId)(e, this.logger))
                    .reqCnfString, n.addPopToken(s)
            } else if (e.authenticationScheme === Fe.SSH)
                if (e.sshJwk) n.addSshJwk(e.sshJwk);
                else throw Be(Us);
            const r = e.correlationId || this.config.cryptoInterface.createNewGuid();
            n.addCorrelationId(r), (!cn.isEmptyObj(e.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && n.addClaims(e.claims, this.config.authOptions.clientCapabilities);
            let o;
            if (e.clientInfo) try {
                const i = fs(e.clientInfo, this.cryptoUtils.base64Decode);
                o = { credential: `${i.uid}${It.CLIENT_INFO_SEPARATOR}${i.utid}`, type: Vt.HOME_ACCOUNT_ID }
            } catch (i) { this.logger.verbose("Could not parse client info for CCS Header: " + i) } else o = e.ccsCredential;
            if (this.config.systemOptions.preventCorsPreflight && o) switch (o.type) {
            case Vt.HOME_ACCOUNT_ID:
                try {
                    const i = no(o.credential);
                    n.addCcsOid(i)
                } catch (i) { this.logger.verbose("Could not parse home account ID for CCS Header: " + i) }
                break;
            case Vt.UPN:
                n.addCcsUpn(o.credential);
                break
            }
            return e.tokenBodyParameters && n.addExtraQueryParameters(e.tokenBodyParameters), e.enableSpaAuthorizationCode && (!e.tokenBodyParameters || !e.tokenBodyParameters[hd]) && n.addExtraQueryParameters({
                [hd]: "1"
            }), n.createQueryString()
        }
        async createAuthCodeUrlQueryString(e) {
            this.performanceClient?.addQueueMeasurement(N.AuthClientCreateQueryString, e.correlationId);
            const n = new Jo;
            n.addClientId(e.extraQueryParameters?.[yo] || this.config.authOptions.clientId);
            const r = [...e.scopes || [], ...e.extraScopesToConsent || []];
            n.addScopes(r, !0, this.oidcDefaultScopes), n.addRedirectUri(e.redirectUri);
            const o = e.correlationId || this.config.cryptoInterface.createNewGuid();
            if (n.addCorrelationId(o), n.addResponseMode(e.responseMode), n.addResponseTypeCode(), n.addLibraryInfo(this.config.libraryInfo), Za(this.config) || n.addApplicationTelemetry(this.config.telemetry.application), n.addClientInfo(), e.codeChallenge && e.codeChallengeMethod && n.addCodeChallengeParams(e.codeChallenge, e.codeChallengeMethod), e.prompt && n.addPrompt(e.prompt), e.domainHint && n.addDomainHint(e.domainHint), e.prompt !== ht.SELECT_ACCOUNT)
                if (e.sid && e.prompt === ht.NONE) this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from request"), n.addSid(e.sid);
                else if (e.account) {
                const i = this.extractAccountSid(e.account);
                let s = this.extractLoginHint(e.account);
                if (s && e.domainHint && (this.logger.warning('AuthorizationCodeClient.createAuthCodeUrlQueryString: "domainHint" param is set, skipping opaque "login_hint" claim. Please consider not passing domainHint'), s = null), s) {
                    this.logger.verbose("createAuthCodeUrlQueryString: login_hint claim present on account"), n.addLoginHint(s);
                    try {
                        const a = no(e.account.homeAccountId);
                        n.addCcsOid(a)
                    } catch { this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header") }
                } else if (i && e.prompt === ht.NONE) {
                    this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from account"), n.addSid(i);
                    try {
                        const a = no(e.account.homeAccountId);
                        n.addCcsOid(a)
                    } catch { this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header") }
                } else if (e.loginHint) this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from request"), n.addLoginHint(e.loginHint), n.addCcsUpn(e.loginHint);
                else if (e.account.username) {
                    this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from account"), n.addLoginHint(e.account.username);
                    try {
                        const a = no(e.account.homeAccountId);
                        n.addCcsOid(a)
                    } catch { this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header") }
                }
            } else e.loginHint && (this.logger.verbose("createAuthCodeUrlQueryString: No account, adding login_hint from request"), n.addLoginHint(e.loginHint), n.addCcsUpn(e.loginHint));
            else this.logger.verbose("createAuthCodeUrlQueryString: Prompt is select_account, ignoring account hints");
            if (e.nonce && n.addNonce(e.nonce), e.state && n.addState(e.state), (e.claims || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && n.addClaims(e.claims, this.config.authOptions.clientCapabilities), e.extraQueryParameters && n.addExtraQueryParameters(e.extraQueryParameters), e.nativeBroker && (n.addNativeBroker(), e.authenticationScheme === Fe.POP)) {
                const i = new _o(this.cryptoUtils);
                let s;
                e.popKid ? s = this.cryptoUtils.encodeKid(e.popKid) : s = (await W(i.generateCnf.bind(i), N.PopTokenGenerateCnf, this.logger, this.performanceClient, e.correlationId)(e, this.logger))
                    .reqCnfString, n.addPopToken(s)
            }
            return n.createQueryString()
        }
        createLogoutUrlQueryString(e) { const n = new Jo; return e.postLogoutRedirectUri && n.addPostLogoutRedirectUri(e.postLogoutRedirectUri), e.correlationId && n.addCorrelationId(e.correlationId), e.idTokenHint && n.addIdTokenHint(e.idTokenHint), e.state && n.addState(e.state), e.logoutHint && n.addLogoutHint(e.logoutHint), e.extraQueryParameters && n.addExtraQueryParameters(e.extraQueryParameters), n.createQueryString() } extractAccountSid(e) { return e.idTokenClaims?.sid || null } extractLoginHint(e) { return e.idTokenClaims?.login_hint || null }
    }
    const dE = 300;
    class tc extends Tl {
        constructor(e, n) { super(e, n) } async acquireToken(e) {
            this.performanceClient?.addQueueMeasurement(N.RefreshTokenClientAcquireToken, e.correlationId);
            const n = kn()
                , r = await W(this.executeTokenRequest.bind(this), N.RefreshTokenClientExecuteTokenRequest, this.logger, this.performanceClient, e.correlationId)(e, this.authority)
                , o = r.headers?.[En.X_MS_REQUEST_ID]
                , i = new xr(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
            return i.validateTokenResponse(r.body), W(i.handleServerTokenResponse.bind(i), N.HandleServerTokenResponse, this.logger, this.performanceClient, e.correlationId)(r.body, this.authority, n, e, void 0, void 0, !0, e.forceCache, o)
        }
        async acquireTokenByRefreshToken(e) {
            if (!e) throw Be(Bp);
            if (this.performanceClient?.addQueueMeasurement(N.RefreshTokenClientAcquireTokenByRefreshToken, e.correlationId), !e.account) throw q(sl);
            if (this.cacheManager.isAppMetadataFOCI(e.account.environment)) try { return await W(this.acquireTokenWithCachedRefreshToken.bind(this), N.RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, e.correlationId)(e, !0) } catch (r) {
                const o = r instanceof zt && r.errorCode === gs
                    , i = r instanceof fr && r.errorCode === Xu.INVALID_GRANT_ERROR && r.subError === Xu.CLIENT_MISMATCH_ERROR;
                if (o || i) return W(this.acquireTokenWithCachedRefreshToken.bind(this), N.RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, e.correlationId)(e, !1);
                throw r
            }
            return W(this.acquireTokenWithCachedRefreshToken.bind(this), N.RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, e.correlationId)(e, !1)
        }
        async acquireTokenWithCachedRefreshToken(e, n) {
            this.performanceClient?.addQueueMeasurement(N.RefreshTokenClientAcquireTokenWithCachedRefreshToken, e.correlationId);
            const r = $r(this.cacheManager.getRefreshToken.bind(this.cacheManager), N.CacheManagerGetRefreshToken, this.logger, this.performanceClient, e.correlationId)(e.account, n, void 0, this.performanceClient, e.correlationId);
            if (!r) throw ec(gs);
            if (r.expiresOn && Xa(r.expiresOn, e.refreshTokenExpirationOffsetSeconds || dE)) throw ec(vl);
            const o = { ...e, refreshToken: r.secret, authenticationScheme: e.authenticationScheme || Fe.BEARER, ccsCredential: { credential: e.account.homeAccountId, type: Vt.HOME_ACCOUNT_ID } };
            try { return await W(this.acquireToken.bind(this), N.RefreshTokenClientAcquireToken, this.logger, this.performanceClient, e.correlationId)(o) } catch (i) {
                if (i instanceof zt && i.subError === $s) {
                    this.logger.verbose("acquireTokenWithRefreshToken: bad refresh token, removing from cache");
                    const s = to(r);
                    this.cacheManager.removeRefreshToken(s)
                }
                throw i
            }
        }
        async executeTokenRequest(e, n) {
            this.performanceClient?.addQueueMeasurement(N.RefreshTokenClientExecuteTokenRequest, e.correlationId);
            const r = this.createTokenQueryParameters(e)
                , o = Re.appendQueryString(n.tokenEndpoint, r)
                , i = await W(this.createTokenRequestBody.bind(this), N.RefreshTokenClientCreateTokenRequestBody, this.logger, this.performanceClient, e.correlationId)(e)
                , s = this.createTokenRequestHeaders(e.ccsCredential)
                , a = { clientId: e.tokenBodyParameters?.clientId || this.config.authOptions.clientId, authority: n.canonicalAuthority, scopes: e.scopes, claims: e.claims, authenticationScheme: e.authenticationScheme, resourceRequestMethod: e.resourceRequestMethod, resourceRequestUri: e.resourceRequestUri, shrClaims: e.shrClaims, sshKid: e.sshKid };
            return W(this.executePostToTokenEndpoint.bind(this), N.RefreshTokenClientExecutePostToTokenEndpoint, this.logger, this.performanceClient, e.correlationId)(o, i, s, a, e.correlationId, N.RefreshTokenClientExecutePostToTokenEndpoint)
        }
        async createTokenRequestBody(e) {
            this.performanceClient?.addQueueMeasurement(N.RefreshTokenClientCreateTokenRequestBody, e.correlationId);
            const n = e.correlationId
                , r = new Jo;
            if (r.addClientId(e.tokenBodyParameters?.[yo] || this.config.authOptions.clientId), e.redirectUri && r.addRedirectUri(e.redirectUri), r.addScopes(e.scopes, !0, this.config.authOptions.authority.options.OIDCOptions?.defaultScopes), r.addGrantType(gp.REFRESH_TOKEN_GRANT), r.addClientInfo(), r.addLibraryInfo(this.config.libraryInfo), r.addApplicationTelemetry(this.config.telemetry.application), r.addThrottling(), this.serverTelemetryManager && !Za(this.config) && r.addServerTelemetry(this.serverTelemetryManager), r.addCorrelationId(n), r.addRefreshToken(e.refreshToken), this.config.clientCredentials.clientSecret && r.addClientSecret(this.config.clientCredentials.clientSecret), this.config.clientCredentials.clientAssertion) {
                const o = this.config.clientCredentials.clientAssertion;
                r.addClientAssertion(await tg(o.assertion, this.config.authOptions.clientId, e.resourceRequestUri)), r.addClientAssertionType(o.assertionType)
            }
            if (e.authenticationScheme === Fe.POP) {
                const o = new _o(this.cryptoUtils, this.performanceClient);
                let i;
                e.popKid ? i = this.cryptoUtils.encodeKid(e.popKid) : i = (await W(o.generateCnf.bind(o), N.PopTokenGenerateCnf, this.logger, this.performanceClient, e.correlationId)(e, this.logger))
                    .reqCnfString, r.addPopToken(i)
            } else if (e.authenticationScheme === Fe.SSH)
                if (e.sshJwk) r.addSshJwk(e.sshJwk);
                else throw Be(Us);
            if ((!cn.isEmptyObj(e.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && r.addClaims(e.claims, this.config.authOptions.clientCapabilities), this.config.systemOptions.preventCorsPreflight && e.ccsCredential) switch (e.ccsCredential.type) {
            case Vt.HOME_ACCOUNT_ID:
                try {
                    const o = no(e.ccsCredential.credential);
                    r.addCcsOid(o)
                } catch (o) { this.logger.verbose("Could not parse home account ID for CCS Header: " + o) }
                break;
            case Vt.UPN:
                r.addCcsUpn(e.ccsCredential.credential);
                break
            }
            return e.tokenBodyParameters && r.addExtraQueryParameters(e.tokenBodyParameters), r.createQueryString()
        }
    }
    class hE extends Tl {
        constructor(e, n) { super(e, n) } async acquireToken(e) {
            try {
                const [n, r] = await this.acquireCachedToken({ ...e, scopes: e.scopes?.length ? e.scopes : [...Ro] });
                return r === tr.PROACTIVELY_REFRESHED && (this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token's refreshOn property has been exceeded'. It's not expired, but must be refreshed."), new tc(this.config, this.performanceClient)
                    .acquireTokenByRefreshToken(e)
                    .catch(() => {})), n
            } catch (n) {
                if (n instanceof xs && n.errorCode === Bn) return new tc(this.config, this.performanceClient)
                    .acquireTokenByRefreshToken(e);
                throw n
            }
        }
        async acquireCachedToken(e) {
            this.performanceClient?.addQueueMeasurement(N.SilentFlowClientAcquireCachedToken, e.correlationId);
            let n = tr.NOT_APPLICABLE;
            if (e.forceRefresh || !this.config.cacheOptions.claimsBasedCachingEnabled && !cn.isEmptyObj(e.claims)) throw this.setCacheOutcome(tr.FORCE_REFRESH_OR_CLAIMS, e.correlationId), q(Bn);
            if (!e.account) throw q(sl);
            const r = e.account.tenantId || av(e.authority)
                , o = this.cacheManager.getTokenKeys()
                , i = this.cacheManager.getAccessToken(e.account, e, o, r, this.performanceClient, e.correlationId);
            if (i) {
                if (QT(i.cachedAt) || Xa(i.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) throw this.setCacheOutcome(tr.CACHED_ACCESS_TOKEN_EXPIRED, e.correlationId), q(Bn);
                i.refreshOn && Xa(i.refreshOn, 0) && (n = tr.PROACTIVELY_REFRESHED)
            } else throw this.setCacheOutcome(tr.NO_CACHED_ACCESS_TOKEN, e.correlationId), q(Bn);
            const s = e.authority || this.authority.getPreferredCache()
                , a = { account: this.cacheManager.readAccountFromCache(e.account), accessToken: i, idToken: this.cacheManager.getIdToken(e.account, o, r, this.performanceClient, e.correlationId), refreshToken: null, appMetadata: this.cacheManager.readAppMetadataFromCache(s) };
            return this.setCacheOutcome(n, e.correlationId), this.config.serverTelemetryManager && this.config.serverTelemetryManager.incrementCacheHits(), [await W(this.generateResultFromCacheRecord.bind(this), N.SilentFlowClientGenerateResultFromCacheRecord, this.logger, this.performanceClient, e.correlationId)(a, e), n]
        }
        setCacheOutcome(e, n) { this.serverTelemetryManager?.setCacheOutcome(e), this.performanceClient?.addFields({ cacheOutcome: e }, n), e !== tr.NOT_APPLICABLE && this.logger.info(`Token refresh is required due to cache outcome: ${e}`) } async generateResultFromCacheRecord(e, n) {
            this.performanceClient?.addQueueMeasurement(N.SilentFlowClientGenerateResultFromCacheRecord, n.correlationId);
            let r;
            if (e.idToken && (r = Br(e.idToken.secret, this.config.cryptoInterface.base64Decode)), n.maxAge || n.maxAge === 0) {
                const o = r?.auth_time;
                if (!o) throw q(il);
                Lp(o, n.maxAge)
            }
            return xr.generateAuthenticationResult(this.cryptoUtils, this.authority, e, !0, n, r)
        }
    }
    const fE = { sendGetRequestAsync: () => Promise.reject(q(me)), sendPostRequestAsync: () => Promise.reject(q(me)) };
    const cg = "missing_kid_error"
        , lg = "missing_alg_error";
    const pE = {
        [cg]: "The JOSE Header for the requested JWT, JWS or JWK object requires a keyId to be configured as the 'kid' header claim. No 'kid' value was provided."
        , [lg]: "The JOSE Header for the requested JWT, JWS or JWK object requires an algorithm to be specified as the 'alg' header claim. No 'alg' value was provided."
    };
    class Al extends Qe { constructor(e, n) { super(e, n), this.name = "JoseHeaderError", Object.setPrototypeOf(this, Al.prototype) } }
    
    function gd(t) { return new Al(t, pE[t]) } class bl { constructor(e) { this.typ = e.typ, this.alg = e.alg, this.kid = e.kid } static getShrHeaderString(e) { if (!e.kid) throw gd(cg); if (!e.alg) throw gd(lg); const n = new bl({ typ: e.typ || bT.Pop, kid: e.kid, alg: e.alg }); return JSON.stringify(n) } }
    const md = ","
        , ug = "|";
    
    function gE(t) { const { skus: e, libraryName: n, libraryVersion: r, extensionName: o, extensionVersion: i } = t, s = new Map([[0, [n, r]], [2, [o, i]]]); let a = []; if (e?.length) { if (a = e.split(md), a.length < 4) return e } else a = Array.from({ length: 4 }, () => ug); return s.forEach((c, l) => { c.length === 2 && c[0]?.length && c[1]?.length && mE({ skuArr: a, index: l, skuName: c[0], skuVersion: c[1] }) }), a.join(md) }
    
    function mE(t) {
        const { skuArr: e, index: n, skuName: r, skuVersion: o } = t;
        n >= e.length || (e[n] = [r, o].join(ug))
    }
    class ci {
        constructor(e, n) { this.cacheOutcome = tr.NOT_APPLICABLE, this.cacheManager = n, this.apiId = e.apiId, this.correlationId = e.correlationId, this.wrapperSKU = e.wrapperSKU || F.EMPTY_STRING, this.wrapperVer = e.wrapperVer || F.EMPTY_STRING, this.telemetryCacheKey = mt.CACHE_KEY + It.CACHE_KEY_SEPARATOR + e.clientId } generateCurrentRequestHeaderValue() {
            const e = `${this.apiId}${mt.VALUE_SEPARATOR}${this.cacheOutcome}`
                , n = [this.wrapperSKU, this.wrapperVer]
                , r = this.getNativeBrokerErrorCode();
            r?.length && n.push(`broker_error=${r}`);
            const o = n.join(mt.VALUE_SEPARATOR)
                , i = this.getRegionDiscoveryFields()
                , s = [e, i].join(mt.VALUE_SEPARATOR);
            return [mt.SCHEMA_VERSION, s, o].join(mt.CATEGORY_SEPARATOR)
        }
        generateLastRequestHeaderValue() {
            const e = this.getLastRequests()
                , n = ci.maxErrorsToSend(e)
                , r = e.failedRequests.slice(0, 2 * n)
                .join(mt.VALUE_SEPARATOR)
                , o = e.errors.slice(0, n)
                .join(mt.VALUE_SEPARATOR)
                , i = e.errors.length
                , s = n < i ? mt.OVERFLOW_TRUE : mt.OVERFLOW_FALSE
                , a = [i, s].join(mt.VALUE_SEPARATOR);
            return [mt.SCHEMA_VERSION, e.cacheHits, r, o, a].join(mt.CATEGORY_SEPARATOR)
        }
        cacheFailedRequest(e) {
            const n = this.getLastRequests();
            n.errors.length >= mt.MAX_CACHED_ERRORS && (n.failedRequests.shift(), n.failedRequests.shift(), n.errors.shift()), n.failedRequests.push(this.apiId, this.correlationId), e instanceof Error && e && e.toString() ? e instanceof Qe ? e.subError ? n.errors.push(e.subError) : e.errorCode ? n.errors.push(e.errorCode) : n.errors.push(e.toString()) : n.errors.push(e.toString()) : n.errors.push(mt.UNKNOWN_ERROR), this.cacheManager.setServerTelemetry(this.telemetryCacheKey, n)
        }
        incrementCacheHits() { const e = this.getLastRequests(); return e.cacheHits += 1, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, e), e.cacheHits } getLastRequests() { const e = { failedRequests: [], errors: [], cacheHits: 0 }; return this.cacheManager.getServerTelemetry(this.telemetryCacheKey) || e } clearTelemetryCache() {
            const e = this.getLastRequests()
                , n = ci.maxErrorsToSend(e)
                , r = e.errors.length;
            if (n === r) this.cacheManager.removeItem(this.telemetryCacheKey);
            else {
                const o = { failedRequests: e.failedRequests.slice(n * 2), errors: e.errors.slice(n), cacheHits: 0 };
                this.cacheManager.setServerTelemetry(this.telemetryCacheKey, o)
            }
        }
        static maxErrorsToSend(e) {
            let n, r = 0
                , o = 0;
            const i = e.errors.length;
            for (n = 0; n < i; n++) {
                const s = e.failedRequests[2 * n] || F.EMPTY_STRING
                    , a = e.failedRequests[2 * n + 1] || F.EMPTY_STRING
                    , c = e.errors[n] || F.EMPTY_STRING;
                if (o += s.toString()
                    .length + a.toString()
                    .length + c.length + 3, o < mt.MAX_LAST_HEADER_BYTES) r += 1;
                else break
            }
            return r
        }
        getRegionDiscoveryFields() { const e = []; return e.push(this.regionUsed || F.EMPTY_STRING), e.push(this.regionSource || F.EMPTY_STRING), e.push(this.regionOutcome || F.EMPTY_STRING), e.join(",") } updateRegionDiscoveryMetadata(e) { this.regionUsed = e.region_used, this.regionSource = e.region_source, this.regionOutcome = e.region_outcome } setCacheOutcome(e) { this.cacheOutcome = e } setNativeBrokerErrorCode(e) {
            const n = this.getLastRequests();
            n.nativeBrokerErrorCode = e, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, n)
        }
        getNativeBrokerErrorCode() {
            return this.getLastRequests()
                .nativeBrokerErrorCode
        }
        clearNativeBrokerErrorCode() {
            const e = this.getLastRequests();
            delete e.nativeBrokerErrorCode, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, e)
        }
        static makeExtraSkuString(e) { return gE(e) }
    }
    class yd { startMeasurement() {} endMeasurement() {} flushMeasurement() { return null } } class yE { generateId() { return "callback-id" } startMeasurement(e, n) { return { end: () => null, discard: () => {}, add: () => {}, increment: () => {}, event: { eventId: this.generateId(), status: YT.InProgress, authority: "", libraryName: "", libraryVersion: "", clientId: "", name: e, startTimeMs: Date.now(), correlationId: n || "" }, measurement: new yd } } startPerformanceMeasurement() { return new yd } calculateQueuedTime() { return 0 } addQueueMeasurement() {} setPreQueueTime() {} endMeasurement() { return null } discardMeasurements() {} removePerformanceCallback() { return !0 } addPerformanceCallback() { return "" } emitEvents() {} addFields() {} incrementFields() {} cacheEventByCorrelationId() {} }
    const Il = "pkce_not_created"
        , dg = "crypto_nonexistent"
        , Ks = "empty_navigate_uri"
        , hg = "hash_empty_error"
        , wl = "no_state_in_hash"
        , fg = "hash_does_not_contain_known_properties"
        , pg = "unable_to_parse_state"
        , gg = "state_interaction_type_mismatch"
        , mg = "interaction_in_progress"
        , yg = "popup_window_error"
        , Cg = "empty_window_error"
        , Ur = "user_cancelled"
        , CE = "monitor_popup_timeout"
        , _g = "monitor_window_timeout"
        , Tg = "redirect_in_iframe"
        , vg = "block_iframe_reload"
        , Eg = "block_nested_popups"
        , _E = "iframe_closed_prematurely"
        , js = "silent_logout_unsupported"
        , Ag = "no_account_error"
        , TE = "silent_prompt_value_error"
        , bg = "no_token_request_cache_error"
        , Ig = "unable_to_parse_token_request_cache_error"
        , Sl = "no_cached_authority_error"
        , vE = "auth_request_not_set_error"
        , EE = "invalid_cache_type"
        , kl = "non_browser_environment"
        , Yr = "database_not_open"
        , ms = "no_network_connectivity"
        , wg = "post_request_failed"
        , Sg = "get_request_failed"
        , nc = "failed_to_parse_response"
        , kg = "unable_to_load_token"
        , Rl = "crypto_key_not_found"
        , Rg = "auth_code_required"
        , Og = "auth_code_or_nativeAccountId_required"
        , Ng = "spa_code_and_nativeAccountId_present"
        , Ol = "database_unavailable"
        , Pg = "unable_to_acquire_token_from_native_platform"
        , Mg = "native_handshake_timeout"
        , Lg = "native_extension_not_installed"
        , Ei = "native_connection_not_established"
        , Dg = "uninitialized_public_client_application"
        , xg = "native_prompt_not_supported"
        , Ug = "invalid_base64_string"
        , Fg = "invalid_pop_token_request";
    const Nn = "For more visit: aka.ms/msaljs/browser-errors"
        , AE = {
            [Il]: "The PKCE code challenge and verifier could not be generated."
            , [dg]: "The crypto object or function is not available."
            , [Ks]: "Navigation URI is empty. Please check stack trace for more info."
            , [hg]: `Hash value cannot be processed because it is empty. Please verify that your redirectUri is not clearing the hash. ${Nn}`
            , [wl]: "Hash does not contain state. Please verify that the request originated from msal."
            , [fg]: `Hash does not contain known properites. Please verify that your redirectUri is not changing the hash.  ${Nn}`
            , [pg]: "Unable to parse state. Please verify that the request originated from msal."
            , [gg]: "Hash contains state but the interaction type does not match the caller."
            , [mg]: `Interaction is currently in progress. Please ensure that this interaction has been completed before calling an interactive API.   ${Nn}`
            , [yg]: "Error opening popup window. This can happen if you are using IE or if popups are blocked in the browser."
            , [Cg]: "window.open returned null or undefined window object."
            , [Ur]: "User cancelled the flow."
            , [CE]: `Token acquisition in popup failed due to timeout.  ${Nn}`
            , [_g]: `Token acquisition in iframe failed due to timeout.  ${Nn}`
            , [Tg]: "Redirects are not supported for iframed or brokered applications. Please ensure you are using MSAL.js in a top frame of the window if using the redirect APIs, or use the popup APIs."
            , [vg]: `Request was blocked inside an iframe because MSAL detected an authentication response.  ${Nn}`
            , [Eg]: "Request was blocked inside a popup because MSAL detected it was running in a popup."
            , [_E]: "The iframe being monitored was closed prematurely."
            , [js]: "Silent logout not supported. Please call logoutRedirect or logoutPopup instead."
            , [Ag]: "No account object provided to acquireTokenSilent and no active account has been set. Please call setActiveAccount or provide an account on the request."
            , [TE]: "The value given for the prompt value is not valid for silent requests - must be set to 'none' or 'no_session'."
            , [bg]: "No token request found in cache."
            , [Ig]: "The cached token request could not be parsed."
            , [Sl]: "No cached authority found."
            , [vE]: "Auth Request not set. Please ensure initiateAuthRequest was called from the InteractionHandler"
            , [EE]: "Invalid cache type"
            , [kl]: "Login and token requests are not supported in non-browser environments."
            , [Yr]: "Database is not open!"
            , [ms]: "No network connectivity. Check your internet connection."
            , [wg]: "Network request failed: If the browser threw a CORS error, check that the redirectUri is registered in the Azure App Portal as type 'SPA'"
            , [Sg]: "Network request failed. Please check the network trace to determine root cause."
            , [nc]: "Failed to parse network response. Check network trace."
            , [kg]: "Error loading token to cache."
            , [Rl]: "Cryptographic Key or Keypair not found in browser storage."
            , [Rg]: "An authorization code must be provided (as the `code` property on the request) to this flow."
            , [Og]: "An authorization code or nativeAccountId must be provided to this flow."
            , [Ng]: "Request cannot contain both spa code and native account id."
            , [Ol]: "IndexedDB, which is required for persistent cryptographic key storage, is unavailable. This may be caused by browser privacy features which block persistent storage in third-party contexts."
            , [Pg]: `Unable to acquire token from native platform.  ${Nn}`
            , [Mg]: "Timed out while attempting to establish connection to browser extension"
            , [Lg]: "Native extension is not installed. If you think this is a mistake call the initialize function."
            , [Ei]: `Connection to native platform has not been established. Please install a compatible browser extension and run initialize().  ${Nn}`
            , [Dg]: `You must call and await the initialize function before attempting to call any other MSAL API.  ${Nn}`
            , [xg]: "The provided prompt is not supported by the native platform. This request should be routed to the web based flow."
            , [Ug]: "Invalid base64 encoded string."
            , [Fg]: "Invalid PoP token request. The request should not have both a popKid value and signPopToken set to true."
        };
    class Ai extends Qe { constructor(e) { super(e, AE[e]), Object.setPrototypeOf(this, Ai.prototype), this.name = "BrowserAuthError" } }
    
    function ee(t) { return new Ai(t) }
    const Jt = { INTERACTION_IN_PROGRESS_VALUE: "interaction_in_progress", INVALID_GRANT_ERROR: "invalid_grant", POPUP_WIDTH: 483, POPUP_HEIGHT: 600, POPUP_NAME_PREFIX: "msal", DEFAULT_POLL_INTERVAL_MS: 30, MSAL_SKU: "msal.js.browser" }
        , ro = { CHANNEL_ID: "53ee284d-920a-4b59-9d30-a60315b26836", PREFERRED_EXTENSION_ID: "ppnbnpeolgkicgegkbkbjmhlideopiji", MATS_TELEMETRY: "MATS" }
        , kr = { HandshakeRequest: "Handshake", HandshakeResponse: "HandshakeResponse", GetToken: "GetToken", Response: "Response" }
        , rt = { LocalStorage: "localStorage", SessionStorage: "sessionStorage", MemoryStorage: "memoryStorage" }
        , Cd = { GET: "GET", POST: "POST" }
        , De = { AUTHORITY: "authority", ACQUIRE_TOKEN_ACCOUNT: "acquireToken.account", SESSION_STATE: "session.state", REQUEST_STATE: "request.state", NONCE_IDTOKEN: "nonce.id_token", ORIGIN_URI: "request.origin", RENEW_STATUS: "token.renew.status", URL_HASH: "urlHash", REQUEST_PARAMS: "request.params", SCOPES: "scopes", INTERACTION_STATUS_KEY: "interaction.status", CCS_CREDENTIAL: "ccs.credential", CORRELATION_ID: "request.correlationId", NATIVE_REQUEST: "request.native", REDIRECT_CONTEXT: "request.redirect.context" }
        , Qn = { ACCOUNT_KEYS: "msal.account.keys", TOKEN_KEYS: "msal.token.keys" }
        , $i = { WRAPPER_SKU: "wrapper.sku", WRAPPER_VER: "wrapper.version" }
        , We = { acquireTokenRedirect: 861, acquireTokenPopup: 862, ssoSilent: 863, acquireTokenSilent_authCode: 864, handleRedirectPromise: 865, acquireTokenByCode: 866, acquireTokenSilent_silentFlow: 61, logout: 961, logoutPopup: 962 };
    var oe;
    (function (t) { t.Redirect = "redirect", t.Popup = "popup", t.Silent = "silent", t.None = "none" })(oe || (oe = {}));
    const _d = { scopes: Ro }
        , Hg = "jwk"
        , rc = "msal.db"
        , bE = 1
        , IE = `${rc}.keys`
        , jt = { Default: 0, AccessToken: 1, AccessTokenAndRefreshToken: 2, RefreshToken: 3, RefreshTokenAndNetwork: 4, Skip: 5 }
        , wE = [jt.Default, jt.Skip, jt.RefreshTokenAndNetwork]
        , SE = "msal.browser.log.level"
        , kE = "msal.browser.log.pii";
    
    function Ki(t) {
        return encodeURIComponent(Nl(t)
            .replace(/=/g, "")
            .replace(/\+/g, "-")
            .replace(/\//g, "_"))
    }
    
    function qs(t) {
        return Bg(t)
            .replace(/=/g, "")
            .replace(/\+/g, "-")
            .replace(/\//g, "_")
    }
    
    function Nl(t) {
        return Bg(new TextEncoder()
            .encode(t))
    }
    
    function Bg(t) {
        const e = Array.from(t, n => String.fromCodePoint(n))
            .join("");
        return btoa(e)
    }
    const RE = "RSASSA-PKCS1-v1_5"
        , $g = "SHA-256"
        , OE = 2048
        , NE = new Uint8Array([1, 0, 1])
        , Td = "0123456789abcdef"
        , vd = new Uint32Array(1)
        , Pl = { name: RE, hash: $g, modulusLength: OE, publicExponent: NE };
    
    function PE(t) {
        if ("crypto" in window) t.verbose("BrowserCrypto: modern crypto interface available");
        else throw t.error("BrowserCrypto: crypto interface is unavailable"), ee(dg)
    }
    async function Kg(t, e, n) {
        e?.addQueueMeasurement(N.Sha256Digest, n);
        const o = new TextEncoder()
            .encode(t);
        return window.crypto.subtle.digest($g, o)
    }
    
    function ME(t) { return window.crypto.getRandomValues(t) }
    
    function Ea() { return window.crypto.getRandomValues(vd), vd[0] }
    
    function Vn() {
        const t = Date.now()
            , e = Ea() * 1024 + (Ea() & 1023)
            , n = new Uint8Array(16)
            , r = Math.trunc(e / 2 ** 30)
            , o = e & 2 ** 30 - 1
            , i = Ea();
        n[0] = t / 2 ** 40, n[1] = t / 2 ** 32, n[2] = t / 2 ** 24, n[3] = t / 2 ** 16, n[4] = t / 2 ** 8, n[5] = t, n[6] = 112 | r >>> 8, n[7] = r, n[8] = 128 | o >>> 24, n[9] = o >>> 16, n[10] = o >>> 8, n[11] = o, n[12] = i >>> 24, n[13] = i >>> 16, n[14] = i >>> 8, n[15] = i;
        let s = "";
        for (let a = 0; a < n.length; a++) s += Td.charAt(n[a] >>> 4), s += Td.charAt(n[a] & 15), (a === 3 || a === 5 || a === 7 || a === 9) && (s += "-");
        return s
    }
    async function LE(t, e) { return window.crypto.subtle.generateKey(Pl, t, e) } async function Aa(t) { return window.crypto.subtle.exportKey(Hg, t) } async function DE(t, e, n) { return window.crypto.subtle.importKey(Hg, t, Pl, e, n) } async function xE(t, e) { return window.crypto.subtle.sign(Pl, t, e) } async function jg(t) {
        const e = await Kg(t)
            , n = new Uint8Array(e);
        return qs(n)
    }
    const ys = "storage_not_supported"
        , oc = "stubbed_public_client_application_called"
        , Cs = "in_mem_redirect_unavailable";
    const Qi = {
        [ys]: "Given storage configuration option was not supported."
        , [oc]: "Stub instance of Public Client Application was called. If using msal-react, please ensure context is not used without a provider. For more visit: aka.ms/msaljs/browser-errors"
        , [Cs]: "Redirect cannot be supported. In-memory storage was selected and storeAuthStateInCookie=false, which would cause the library to be unable to handle the incoming hash. If you would like to use the redirect API, please use session/localStorage or set storeAuthStateInCookie=true."
    };
    Qi[ys], Qi[oc], Qi[Cs];
    class Ml extends Qe { constructor(e, n) { super(e, n), this.name = "BrowserConfigurationAuthError", Object.setPrototypeOf(this, Ml.prototype) } }
    
    function qg(t) { return new Ml(t, Qi[t]) }
    
    function UE(t) { t.location.hash = "", typeof t.history.replaceState == "function" && t.history.replaceState(null, "", `${t.location.origin}${t.location.pathname}${t.location.search}`) }
    
    function FE(t) {
        const e = t.split("#");
        e.shift(), window.location.hash = e.length > 0 ? e.join("#") : ""
    }
    
    function Ll() { return window.parent !== window }
    
    function HE() { return typeof window < "u" && !!window.opener && window.opener !== window && typeof window.name == "string" && window.name.indexOf(`${Jt.POPUP_NAME_PREFIX}.`) === 0 }
    
    function $n() { return window.location.href.split("?")[0].split("#")[0] }
    
    function BE() {
        const e = new Re(window.location.href)
            .getUrlComponents();
        return `${e.Protocol}//${e.HostNameAndPort}/`
    }
    
    function $E() { if (Re.hashContainsKnownProperties(window.location.hash) && Ll()) throw ee(vg) }
    
    function KE(t) { if (Ll() && !t) throw ee(Tg) }
    
    function jE() { if (HE()) throw ee(Eg) }
    
    function qE() { if (typeof window > "u") throw ee(kl) }
    
    function Vg(t) { if (!t) throw ee(Dg) }
    
    function Dl(t) { qE(), $E(), jE(), Vg(t) }
    
    function Ed(t, e) { if (Dl(t), KE(e.system.allowRedirectInIframe), e.cache.cacheLocation === rt.MemoryStorage && !e.cache.storeAuthStateInCookie) throw qg(Cs) }
    
    function Gg(t) {
        const e = document.createElement("link");
        e.rel = "preconnect", e.href = new URL(t)
            .origin, e.crossOrigin = "anonymous", document.head.appendChild(e), window.setTimeout(() => { try { document.head.removeChild(e) } catch {} }, 1e4)
    }
    class _s { navigateInternal(e, n) { return _s.defaultNavigateWindow(e, n) } navigateExternal(e, n) { return _s.defaultNavigateWindow(e, n) } static defaultNavigateWindow(e, n) { return n.noHistory ? window.location.replace(e) : window.location.assign(e), new Promise(r => { setTimeout(() => { r(!0) }, n.timeout) }) } } class VE {
        async sendGetRequestAsync(e, n) { let r; try { r = await fetch(e, { method: Cd.GET, headers: this.getFetchHeaders(n) }) } catch { throw window.navigator.onLine ? ee(Sg) : ee(ms) } try { return { headers: this.getHeaderDict(r.headers), body: await r.json(), status: r.status } } catch { throw ee(nc) } } async sendPostRequestAsync(e, n) { const r = n && n.body || F.EMPTY_STRING; let o; try { o = await fetch(e, { method: Cd.POST, headers: this.getFetchHeaders(n), body: r }) } catch { throw window.navigator.onLine ? ee(wg) : ee(ms) } try { return { headers: this.getHeaderDict(o.headers), body: await o.json(), status: o.status } } catch { throw ee(nc) } } getFetchHeaders(e) {
            const n = new Headers;
            if (!(e && e.headers)) return n;
            const r = e.headers;
            return Object.keys(r)
                .forEach(o => { n.append(o, r[o]) }), n
        }
        getHeaderDict(e) { const n = {}; return e.forEach((r, o) => { n[o] = r }), n }
    }
    const GE = 6e4
        , ic = 1e4
        , WE = 3e4
        , zE = 2e3;
    
    function YE({ auth: t, cache: e, system: n, telemetry: r }, o) {
        const i = { clientId: F.EMPTY_STRING, authority: `${F.DEFAULT_AUTHORITY}`, knownAuthorities: [], cloudDiscoveryMetadata: F.EMPTY_STRING, authorityMetadata: F.EMPTY_STRING, redirectUri: F.EMPTY_STRING, postLogoutRedirectUri: F.EMPTY_STRING, navigateToLoginRequestUrl: !0, clientCapabilities: [], protocolMode: qn.AAD, OIDCOptions: { serverResponseType: vi.FRAGMENT, defaultScopes: [F.OPENID_SCOPE, F.PROFILE_SCOPE, F.OFFLINE_ACCESS_SCOPE] }, azureCloudOptions: { azureCloudInstance: pl.None, tenant: F.EMPTY_STRING }, skipAuthorityMetadataCache: !1, supportsNestedAppAuth: !1 }
            , s = { cacheLocation: rt.SessionStorage, temporaryCacheLocation: rt.SessionStorage, storeAuthStateInCookie: !1, secureCookies: !1, cacheMigrationEnabled: !!(e && e.cacheLocation === rt.LocalStorage), claimsBasedCachingEnabled: !1 }
            , a = { loggerCallback: () => {}, logLevel: Ue.Info, piiLoggingEnabled: !1 }
            , l = { ...{ ...ig, loggerOptions: a, networkClient: o ? new VE : fE, navigationClient: new _s, loadFrameTimeout: 0, windowHashTimeout: n?.loadFrameTimeout || GE, iframeHashTimeout: n?.loadFrameTimeout || ic, navigateFrameWait: 0, redirectNavigationTimeout: WE, asyncPopups: !1, allowRedirectInIframe: !1, allowNativeBroker: !1, nativeBrokerHandshakeTimeout: n?.nativeBrokerHandshakeTimeout || zE, pollIntervalMilliseconds: Jt.DEFAULT_POLL_INTERVAL_MS }, ...n, loggerOptions: n?.loggerOptions || a }
            , h = { application: { appName: F.EMPTY_STRING, appVersion: F.EMPTY_STRING }, client: new yE };
        if (t?.protocolMode !== qn.OIDC && t?.OIDCOptions && new Dr(l.loggerOptions)
            .warning(JSON.stringify(Be(Gp))), t?.protocolMode && t.protocolMode !== qn.AAD && l?.allowNativeBroker) throw Be(Wp);
        return { auth: { ...i, ...t, OIDCOptions: { ...i.OIDCOptions, ...t?.OIDCOptions } }, cache: { ...s, ...e }, system: l, telemetry: { ...h, ...r } }
    }
    const QE = "@azure/msal-browser"
        , Vs = "3.20.0";
    class xl {
        static loggerCallback(e, n) {
            switch (e) {
            case Ue.Error:
                console.error(n);
                return;
            case Ue.Info:
                console.info(n);
                return;
            case Ue.Verbose:
                console.debug(n);
                return;
            case Ue.Warning:
                console.warn(n);
                return;
            default:
                console.log(n);
                return
            }
        }
        constructor(e) {
            this.browserEnvironment = typeof window < "u", this.config = YE(e, this.browserEnvironment);
            let n;
            try { n = window[rt.SessionStorage] } catch {}
            const r = n?.getItem(SE)
                , o = n?.getItem(kE)
                ?.toLowerCase()
                , i = o === "true" ? !0 : o === "false" ? !1 : void 0
                , s = { ...this.config.system.loggerOptions }
                , a = r && Object.keys(Ue)
                .includes(r) ? Ue[r] : void 0;
            a && (s.loggerCallback = xl.loggerCallback, s.logLevel = a), i !== void 0 && (s.piiLoggingEnabled = i), this.logger = new Dr(s, QE, Vs), this.available = !1
        }
        getConfig() { return this.config } getLogger() { return this.logger } isAvailable() { return this.available } isBrowserEnvironment() { return this.browserEnvironment }
    }
    class Fr extends xl { getModuleName() { return Fr.MODULE_NAME } getId() { return Fr.ID } async initialize() { return this.available = typeof window < "u", this.available } } Fr.MODULE_NAME = "";
    Fr.ID = "StandardOperatingContext";
    
    function wn(t) {
        return new TextDecoder()
            .decode(JE(t))
    }
    
    function JE(t) {
        let e = t.replace(/-/g, "+")
            .replace(/_/g, "/");
        switch (e.length % 4) {
        case 0:
            break;
        case 2:
            e += "==";
            break;
        case 3:
            e += "=";
            break;
        default:
            throw ee(Ug)
        }
        const n = atob(e);
        return Uint8Array.from(n, r => r.codePointAt(0) || 0)
    }
    class XE {
        constructor() { this.dbName = rc, this.version = bE, this.tableName = IE, this.dbOpen = !1 } async open() {
            return new Promise((e, n) => {
                const r = window.indexedDB.open(this.dbName, this.version);
                r.addEventListener("upgradeneeded", o => { o.target.result.createObjectStore(this.tableName) }), r.addEventListener("success", o => {
                    const i = o;
                    this.db = i.target.result, this.dbOpen = !0, e()
                }), r.addEventListener("error", () => n(ee(Ol)))
            })
        }
        closeConnection() {
            const e = this.db;
            e && this.dbOpen && (e.close(), this.dbOpen = !1)
        }
        async validateDbIsOpen() { if (!this.dbOpen) return this.open() } async getItem(e) {
            return await this.validateDbIsOpen(), new Promise((n, r) => {
                if (!this.db) return r(ee(Yr));
                const s = this.db.transaction([this.tableName], "readonly")
                    .objectStore(this.tableName)
                    .get(e);
                s.addEventListener("success", a => {
                    const c = a;
                    this.closeConnection(), n(c.target.result)
                }), s.addEventListener("error", a => { this.closeConnection(), r(a) })
            })
        }
        async setItem(e, n) {
            return await this.validateDbIsOpen(), new Promise((r, o) => {
                if (!this.db) return o(ee(Yr));
                const a = this.db.transaction([this.tableName], "readwrite")
                    .objectStore(this.tableName)
                    .put(n, e);
                a.addEventListener("success", () => { this.closeConnection(), r() }), a.addEventListener("error", c => { this.closeConnection(), o(c) })
            })
        }
        async removeItem(e) {
            return await this.validateDbIsOpen(), new Promise((n, r) => {
                if (!this.db) return r(ee(Yr));
                const s = this.db.transaction([this.tableName], "readwrite")
                    .objectStore(this.tableName)
                    .delete(e);
                s.addEventListener("success", () => { this.closeConnection(), n() }), s.addEventListener("error", a => { this.closeConnection(), r(a) })
            })
        }
        async getKeys() {
            return await this.validateDbIsOpen(), new Promise((e, n) => {
                if (!this.db) return n(ee(Yr));
                const i = this.db.transaction([this.tableName], "readonly")
                    .objectStore(this.tableName)
                    .getAllKeys();
                i.addEventListener("success", s => {
                    const a = s;
                    this.closeConnection(), e(a.target.result)
                }), i.addEventListener("error", s => { this.closeConnection(), n(s) })
            })
        }
        async containsKey(e) {
            return await this.validateDbIsOpen(), new Promise((n, r) => {
                if (!this.db) return r(ee(Yr));
                const s = this.db.transaction([this.tableName], "readonly")
                    .objectStore(this.tableName)
                    .count(e);
                s.addEventListener("success", a => {
                    const c = a;
                    this.closeConnection(), n(c.target.result === 1)
                }), s.addEventListener("error", a => { this.closeConnection(), r(a) })
            })
        }
        async deleteDatabase() {
            return this.db && this.dbOpen && this.closeConnection(), new Promise((e, n) => {
                const r = window.indexedDB.deleteDatabase(rc)
                    , o = setTimeout(() => n(!1), 200);
                r.addEventListener("success", () => (clearTimeout(o), e(!0))), r.addEventListener("blocked", () => (clearTimeout(o), e(!0))), r.addEventListener("error", () => (clearTimeout(o), n(!1)))
            })
        }
    }
    class sc { constructor() { this.cache = new Map } getItem(e) { return this.cache.get(e) || null } setItem(e, n) { this.cache.set(e, n) } removeItem(e) { this.cache.delete(e) } getKeys() { const e = []; return this.cache.forEach((n, r) => { e.push(r) }), e } containsKey(e) { return this.cache.has(e) } clear() { this.cache.clear() } } class ZE {
        constructor(e) { this.inMemoryCache = new sc, this.indexedDBCache = new XE, this.logger = e } handleDatabaseAccessError(e) {
            if (e instanceof Ai && e.errorCode === Ol) this.logger.error("Could not access persistent storage. This may be caused by browser privacy features which block persistent storage in third-party contexts.");
            else throw e
        }
        async getItem(e) {
            const n = this.inMemoryCache.getItem(e);
            if (!n) try { return this.logger.verbose("Queried item not found in in-memory cache, now querying persistent storage."), await this.indexedDBCache.getItem(e) } catch (r) { this.handleDatabaseAccessError(r) }
            return n
        }
        async setItem(e, n) { this.inMemoryCache.setItem(e, n); try { await this.indexedDBCache.setItem(e, n) } catch (r) { this.handleDatabaseAccessError(r) } } async removeItem(e) { this.inMemoryCache.removeItem(e); try { await this.indexedDBCache.removeItem(e) } catch (n) { this.handleDatabaseAccessError(n) } } async getKeys() {
            const e = this.inMemoryCache.getKeys();
            if (e.length === 0) try { return this.logger.verbose("In-memory cache is empty, now querying persistent storage."), await this.indexedDBCache.getKeys() } catch (n) { this.handleDatabaseAccessError(n) }
            return e
        }
        async containsKey(e) {
            const n = this.inMemoryCache.containsKey(e);
            if (!n) try { return this.logger.verbose("Key not found in in-memory cache, now querying persistent storage."), await this.indexedDBCache.containsKey(e) } catch (r) { this.handleDatabaseAccessError(r) }
            return n
        }
        clearInMemory() { this.logger.verbose("Deleting in-memory keystore"), this.inMemoryCache.clear(), this.logger.verbose("In-memory keystore deleted") } async clearPersistent() { try { this.logger.verbose("Deleting persistent keystore"); const e = await this.indexedDBCache.deleteDatabase(); return e && this.logger.verbose("Persistent keystore deleted"), e } catch (e) { return this.handleDatabaseAccessError(e), !1 } }
    }
    class To {
        constructor(e, n) { this.logger = e, PE(e), this.cache = new ZE(this.logger), this.performanceClient = n } createNewGuid() { return Vn() } base64Encode(e) { return Nl(e) } base64Decode(e) { return wn(e) } base64UrlEncode(e) { return Ki(e) } encodeKid(e) { return this.base64UrlEncode(JSON.stringify({ kid: e })) } async getPublicKeyThumbprint(e) {
            const n = this.performanceClient?.startMeasurement(N.CryptoOptsGetPublicKeyThumbprint, e.correlationId)
                , r = await LE(To.EXTRACTABLE, To.POP_KEY_USAGES)
                , o = await Aa(r.publicKey)
                , i = { e: o.e, kty: o.kty, n: o.n }
                , s = Ad(i)
                , a = await this.hashString(s)
                , c = await Aa(r.privateKey)
                , l = await DE(c, !1, ["sign"]);
            return await this.cache.setItem(a, { privateKey: l, publicKey: r.publicKey, requestMethod: e.resourceRequestMethod, requestUri: e.resourceRequestUri }), n && n.end({ success: !0 }), a
        }
        async removeTokenBindingKey(e) { return await this.cache.removeItem(e), !await this.cache.containsKey(e) } async clearKeystore() { this.cache.clearInMemory(); try { return await this.cache.clearPersistent(), !0 } catch (e) { return e instanceof Error ? this.logger.error(`Clearing keystore failed with error: ${e.message}`) : this.logger.error("Clearing keystore failed with unknown error"), !1 } } async signJwt(e, n, r, o) {
            const i = this.performanceClient?.startMeasurement(N.CryptoOptsSignJwt, o)
                , s = await this.cache.getItem(n);
            if (!s) throw ee(Rl);
            const a = await Aa(s.publicKey)
                , c = Ad(a)
                , l = Ki(JSON.stringify({ kid: n }))
                , h = bl.getShrHeaderString({ ...r?.header, alg: a.alg, kid: l })
                , f = Ki(h);
            e.cnf = { jwk: JSON.parse(c) };
            const g = Ki(JSON.stringify(e))
                , T = `${f}.${g}`
                , b = new TextEncoder()
                .encode(T)
                , k = await xE(s.privateKey, b)
                , O = qs(new Uint8Array(k))
                , x = `${T}.${O}`;
            return i && i.end({ success: !0 }), x
        }
        async hashString(e) { return jg(e) }
    }
    To.POP_KEY_USAGES = ["sign", "verify"];
    To.EXTRACTABLE = !0;
    
    function Ad(t) {
        return JSON.stringify(t, Object.keys(t)
            .sort())
    }
    class bd { constructor(e) { this.validateWindowStorage(e), this.windowStorage = window[e] } validateWindowStorage(e) { if (e !== rt.LocalStorage && e !== rt.SessionStorage || !window[e]) throw qg(ys) } getItem(e) { return this.windowStorage.getItem(e) } setItem(e, n) { this.windowStorage.setItem(e, n) } removeItem(e) { this.windowStorage.removeItem(e) } getKeys() { return Object.keys(this.windowStorage) } containsKey(e) { return this.windowStorage.hasOwnProperty(e) } }
    
    function Wg(t, e) {
        if (!e) return null;
        try {
            return ln.parseRequestState(t, e)
                .libraryState.meta
        } catch { throw q(mo) }
    }
    class ac extends Co {
        constructor(e, n, r, o, i, s) { super(e, r, o, i), this.COOKIE_LIFE_MULTIPLIER = 24 * 60 * 60 * 1e3, this.cacheConfig = n, this.logger = o, this.internalStorage = new sc, this.browserStorage = this.setupBrowserStorage(this.cacheConfig.cacheLocation), this.temporaryCacheStorage = this.setupTemporaryCacheStorage(this.cacheConfig.temporaryCacheLocation, this.cacheConfig.cacheLocation), n.cacheMigrationEnabled && (this.migrateCacheEntries(), this.createKeyMaps()), this.performanceClient = s } setupBrowserStorage(e) {
            switch (e) {
            case rt.LocalStorage:
            case rt.SessionStorage:
                try { return new bd(e) } catch (n) { this.logger.verbose(n); break }
            }
            return this.cacheConfig.cacheLocation = rt.MemoryStorage, new sc
        }
        setupTemporaryCacheStorage(e, n) {
            switch (n) {
            case rt.LocalStorage:
            case rt.SessionStorage:
                try { return new bd(e || rt.SessionStorage) } catch (r) { return this.logger.verbose(r), this.internalStorage }
            case rt.MemoryStorage:
            default:
                return this.internalStorage
            }
        }
        migrateCacheEntries() {
            const e = `${F.CACHE_PREFIX}.${ut.ID_TOKEN}`
                , n = `${F.CACHE_PREFIX}.${ut.CLIENT_INFO}`
                , r = `${F.CACHE_PREFIX}.${ut.ERROR}`
                , o = `${F.CACHE_PREFIX}.${ut.ERROR_DESC}`
                , i = this.browserStorage.getItem(e)
                , s = this.browserStorage.getItem(n)
                , a = this.browserStorage.getItem(r)
                , c = this.browserStorage.getItem(o)
                , l = [i, s, a, c];
            [ut.ID_TOKEN, ut.CLIENT_INFO, ut.ERROR, ut.ERROR_DESC].forEach((f, g) => {
                const T = l[g];
                T && this.setTemporaryCache(f, T, !0)
            })
        }
        createKeyMaps() {
            this.logger.trace("BrowserCacheManager - createKeyMaps called.");
            const e = this.getItem(Qn.ACCOUNT_KEYS)
                , n = this.getItem(`${Qn.TOKEN_KEYS}.${this.clientId}`);
            if (e && n) { this.logger.verbose("BrowserCacheManager:createKeyMaps - account and token key maps already exist, skipping migration."); return } this.browserStorage.getKeys()
                .forEach(o => {
                    if (this.isCredentialKey(o)) {
                        const i = this.getItem(o);
                        if (i) {
                            const s = this.validateAndParseJson(i);
                            if (s && s.hasOwnProperty("credentialType")) switch (s.credentialType) {
                            case ae.ID_TOKEN:
                                if (id(s)) {
                                    this.logger.trace("BrowserCacheManager:createKeyMaps - idToken found, saving key to token key map"), this.logger.tracePii(`BrowserCacheManager:createKeyMaps - idToken with key: ${o} found, saving key to token key map`);
                                    const a = s
                                        , c = this.updateCredentialCacheKey(o, a);
                                    this.addTokenKey(c, ae.ID_TOKEN);
                                    return
                                } else this.logger.trace("BrowserCacheManager:createKeyMaps - key found matching idToken schema with value containing idToken credentialType field but value failed IdTokenEntity validation, skipping."), this.logger.tracePii(`BrowserCacheManager:createKeyMaps - failed idToken validation on key: ${o}`);
                                break;
                            case ae.ACCESS_TOKEN:
                            case ae.ACCESS_TOKEN_WITH_AUTH_SCHEME:
                                if (od(s)) {
                                    this.logger.trace("BrowserCacheManager:createKeyMaps - accessToken found, saving key to token key map"), this.logger.tracePii(`BrowserCacheManager:createKeyMaps - accessToken with key: ${o} found, saving key to token key map`);
                                    const a = s
                                        , c = this.updateCredentialCacheKey(o, a);
                                    this.addTokenKey(c, ae.ACCESS_TOKEN);
                                    return
                                } else this.logger.trace("BrowserCacheManager:createKeyMaps - key found matching accessToken schema with value containing accessToken credentialType field but value failed AccessTokenEntity validation, skipping."), this.logger.tracePii(`BrowserCacheManager:createKeyMaps - failed accessToken validation on key: ${o}`);
                                break;
                            case ae.REFRESH_TOKEN:
                                if (sd(s)) {
                                    this.logger.trace("BrowserCacheManager:createKeyMaps - refreshToken found, saving key to token key map"), this.logger.tracePii(`BrowserCacheManager:createKeyMaps - refreshToken with key: ${o} found, saving key to token key map`);
                                    const a = s
                                        , c = this.updateCredentialCacheKey(o, a);
                                    this.addTokenKey(c, ae.REFRESH_TOKEN);
                                    return
                                } else this.logger.trace("BrowserCacheManager:createKeyMaps - key found matching refreshToken schema with value containing refreshToken credentialType field but value failed RefreshTokenEntity validation, skipping."), this.logger.tracePii(`BrowserCacheManager:createKeyMaps - failed refreshToken validation on key: ${o}`);
                                break
                            }
                        }
                    }
                    if (this.isAccountKey(o)) {
                        const i = this.getItem(o);
                        if (i) {
                            const s = this.validateAndParseJson(i);
                            s && st.isAccountEntity(s) && (this.logger.trace("BrowserCacheManager:createKeyMaps - account found, saving key to account key map"), this.logger.tracePii(`BrowserCacheManager:createKeyMaps - account with key: ${o} found, saving key to account key map`), this.addAccountKeyToMap(o))
                        }
                    }
                })
        }
        validateAndParseJson(e) { try { const n = JSON.parse(e); return n && typeof n == "object" ? n : null } catch { return null } } getItem(e) { return this.browserStorage.getItem(e) } setItem(e, n) { this.browserStorage.setItem(e, n) } getAccount(e, n) { this.logger.trace("BrowserCacheManager.getAccount called"); const r = this.getCachedAccountEntity(e); return this.updateOutdatedCachedAccount(e, r, n) } getCachedAccountEntity(e) { const n = this.getItem(e); if (!n) return this.removeAccountKeyFromMap(e), null; const r = this.validateAndParseJson(n); return !r || !st.isAccountEntity(r) ? (this.removeAccountKeyFromMap(e), null) : Co.toObject(new st, r) } setAccount(e) {
            this.logger.trace("BrowserCacheManager.setAccount called");
            const n = e.generateAccountKey();
            this.setItem(n, JSON.stringify(e)), this.addAccountKeyToMap(n)
        }
        getAccountKeys() { this.logger.trace("BrowserCacheManager.getAccountKeys called"); const e = this.getItem(Qn.ACCOUNT_KEYS); return e ? JSON.parse(e) : (this.logger.verbose("BrowserCacheManager.getAccountKeys - No account keys found"), []) } addAccountKeyToMap(e) {
            this.logger.trace("BrowserCacheManager.addAccountKeyToMap called"), this.logger.tracePii(`BrowserCacheManager.addAccountKeyToMap called with key: ${e}`);
            const n = this.getAccountKeys();
            n.indexOf(e) === -1 ? (n.push(e), this.setItem(Qn.ACCOUNT_KEYS, JSON.stringify(n)), this.logger.verbose("BrowserCacheManager.addAccountKeyToMap account key added")) : this.logger.verbose("BrowserCacheManager.addAccountKeyToMap account key already exists in map")
        }
        removeAccountKeyFromMap(e) {
            this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap called"), this.logger.tracePii(`BrowserCacheManager.removeAccountKeyFromMap called with key: ${e}`);
            const n = this.getAccountKeys()
                , r = n.indexOf(e);
            r > -1 ? (n.splice(r, 1), this.setItem(Qn.ACCOUNT_KEYS, JSON.stringify(n)), this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap account key removed")) : this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap key not found in existing map")
        }
        async removeAccount(e) { super.removeAccount(e), this.removeAccountKeyFromMap(e) } removeOutdatedAccount(e) { this.removeItem(e), this.removeAccountKeyFromMap(e) } removeIdToken(e) { super.removeIdToken(e), this.removeTokenKey(e, ae.ID_TOKEN) } async removeAccessToken(e) { super.removeAccessToken(e), this.removeTokenKey(e, ae.ACCESS_TOKEN) } removeRefreshToken(e) { super.removeRefreshToken(e), this.removeTokenKey(e, ae.REFRESH_TOKEN) } getTokenKeys() {
            this.logger.trace("BrowserCacheManager.getTokenKeys called");
            const e = this.getItem(`${Qn.TOKEN_KEYS}.${this.clientId}`);
            if (e) {
                const n = this.validateAndParseJson(e);
                if (n && n.hasOwnProperty("idToken") && n.hasOwnProperty("accessToken") && n.hasOwnProperty("refreshToken")) return n;
                this.logger.error("BrowserCacheManager.getTokenKeys - Token keys found but in an unknown format. Returning empty key map.")
            } else this.logger.verbose("BrowserCacheManager.getTokenKeys - No token keys found");
            return { idToken: [], accessToken: [], refreshToken: [] }
        }
        addTokenKey(e, n) {
            this.logger.trace("BrowserCacheManager addTokenKey called");
            const r = this.getTokenKeys();
            switch (n) {
            case ae.ID_TOKEN:
                r.idToken.indexOf(e) === -1 && (this.logger.info("BrowserCacheManager: addTokenKey - idToken added to map"), r.idToken.push(e));
                break;
            case ae.ACCESS_TOKEN:
                r.accessToken.indexOf(e) === -1 && (this.logger.info("BrowserCacheManager: addTokenKey - accessToken added to map"), r.accessToken.push(e));
                break;
            case ae.REFRESH_TOKEN:
                r.refreshToken.indexOf(e) === -1 && (this.logger.info("BrowserCacheManager: addTokenKey - refreshToken added to map"), r.refreshToken.push(e));
                break;
            default:
                throw this.logger.error(`BrowserCacheManager:addTokenKey - CredentialType provided invalid. CredentialType: ${n}`), q(Ja)
            }
            this.setItem(`${Qn.TOKEN_KEYS}.${this.clientId}`, JSON.stringify(r))
        }
        removeTokenKey(e, n) {
            this.logger.trace("BrowserCacheManager removeTokenKey called");
            const r = this.getTokenKeys();
            switch (n) {
            case ae.ID_TOKEN:
                this.logger.infoPii(`BrowserCacheManager: removeTokenKey - attempting to remove idToken with key: ${e} from map`);
                const o = r.idToken.indexOf(e);
                o > -1 ? (this.logger.info("BrowserCacheManager: removeTokenKey - idToken removed from map"), r.idToken.splice(o, 1)) : this.logger.info("BrowserCacheManager: removeTokenKey - idToken does not exist in map. Either it was previously removed or it was never added.");
                break;
            case ae.ACCESS_TOKEN:
                this.logger.infoPii(`BrowserCacheManager: removeTokenKey - attempting to remove accessToken with key: ${e} from map`);
                const i = r.accessToken.indexOf(e);
                i > -1 ? (this.logger.info("BrowserCacheManager: removeTokenKey - accessToken removed from map"), r.accessToken.splice(i, 1)) : this.logger.info("BrowserCacheManager: removeTokenKey - accessToken does not exist in map. Either it was previously removed or it was never added.");
                break;
            case ae.REFRESH_TOKEN:
                this.logger.infoPii(`BrowserCacheManager: removeTokenKey - attempting to remove refreshToken with key: ${e} from map`);
                const s = r.refreshToken.indexOf(e);
                s > -1 ? (this.logger.info("BrowserCacheManager: removeTokenKey - refreshToken removed from map"), r.refreshToken.splice(s, 1)) : this.logger.info("BrowserCacheManager: removeTokenKey - refreshToken does not exist in map. Either it was previously removed or it was never added.");
                break;
            default:
                throw this.logger.error(`BrowserCacheManager:removeTokenKey - CredentialType provided invalid. CredentialType: ${n}`), q(Ja)
            }
            this.setItem(`${Qn.TOKEN_KEYS}.${this.clientId}`, JSON.stringify(r))
        }
        getIdTokenCredential(e) { const n = this.getItem(e); if (!n) return this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit"), this.removeTokenKey(e, ae.ID_TOKEN), null; const r = this.validateAndParseJson(n); return !r || !id(r) ? (this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit"), this.removeTokenKey(e, ae.ID_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getIdTokenCredential: cache hit"), r) } setIdTokenCredential(e) {
            this.logger.trace("BrowserCacheManager.setIdTokenCredential called");
            const n = to(e);
            this.setItem(n, JSON.stringify(e)), this.addTokenKey(n, ae.ID_TOKEN)
        }
        getAccessTokenCredential(e) { const n = this.getItem(e); if (!n) return this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit"), this.removeTokenKey(e, ae.ACCESS_TOKEN), null; const r = this.validateAndParseJson(n); return !r || !od(r) ? (this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit"), this.removeTokenKey(e, ae.ACCESS_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getAccessTokenCredential: cache hit"), r) } setAccessTokenCredential(e) {
            this.logger.trace("BrowserCacheManager.setAccessTokenCredential called");
            const n = to(e);
            this.setItem(n, JSON.stringify(e)), this.addTokenKey(n, ae.ACCESS_TOKEN)
        }
        getRefreshTokenCredential(e) { const n = this.getItem(e); if (!n) return this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit"), this.removeTokenKey(e, ae.REFRESH_TOKEN), null; const r = this.validateAndParseJson(n); return !r || !sd(r) ? (this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit"), this.removeTokenKey(e, ae.REFRESH_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: cache hit"), r) } setRefreshTokenCredential(e) {
            this.logger.trace("BrowserCacheManager.setRefreshTokenCredential called");
            const n = to(e);
            this.setItem(n, JSON.stringify(e)), this.addTokenKey(n, ae.REFRESH_TOKEN)
        }
        getAppMetadata(e) { const n = this.getItem(e); if (!n) return this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit"), null; const r = this.validateAndParseJson(n); return !r || !iv(e, r) ? (this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getAppMetadata: cache hit"), r) } setAppMetadata(e) {
            this.logger.trace("BrowserCacheManager.setAppMetadata called");
            const n = ov(e);
            this.setItem(n, JSON.stringify(e))
        }
        getServerTelemetry(e) { const n = this.getItem(e); if (!n) return this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit"), null; const r = this.validateAndParseJson(n); return !r || !nv(e, r) ? (this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getServerTelemetry: cache hit"), r) } setServerTelemetry(e, n) { this.logger.trace("BrowserCacheManager.setServerTelemetry called"), this.setItem(e, JSON.stringify(n)) } getAuthorityMetadata(e) { const n = this.internalStorage.getItem(e); if (!n) return this.logger.trace("BrowserCacheManager.getAuthorityMetadata: called, no cache hit"), null; const r = this.validateAndParseJson(n); return r && sv(e, r) ? (this.logger.trace("BrowserCacheManager.getAuthorityMetadata: cache hit"), r) : null } getAuthorityMetadataKeys() {
            return this.internalStorage.getKeys()
                .filter(n => this.isAuthorityMetadata(n))
        }
        setWrapperMetadata(e, n) { this.internalStorage.setItem($i.WRAPPER_SKU, e), this.internalStorage.setItem($i.WRAPPER_VER, n) } getWrapperMetadata() {
            const e = this.internalStorage.getItem($i.WRAPPER_SKU) || F.EMPTY_STRING
                , n = this.internalStorage.getItem($i.WRAPPER_VER) || F.EMPTY_STRING;
            return [e, n]
        }
        setAuthorityMetadata(e, n) { this.logger.trace("BrowserCacheManager.setAuthorityMetadata called"), this.internalStorage.setItem(e, JSON.stringify(n)) } getActiveAccount() {
            const e = this.generateCacheKey(ut.ACTIVE_ACCOUNT_FILTERS)
                , n = this.getItem(e);
            if (!n) {
                this.logger.trace("BrowserCacheManager.getActiveAccount: No active account filters cache schema found, looking for legacy schema");
                const o = this.generateCacheKey(ut.ACTIVE_ACCOUNT)
                    , i = this.getItem(o);
                if (!i) return this.logger.trace("BrowserCacheManager.getActiveAccount: No active account found"), null;
                const s = this.getAccountInfoFilteredBy({ localAccountId: i });
                return s ? (this.logger.trace("BrowserCacheManager.getActiveAccount: Legacy active account cache schema found"), this.logger.trace("BrowserCacheManager.getActiveAccount: Adding active account filters cache schema"), this.setActiveAccount(s), s) : null
            }
            const r = this.validateAndParseJson(n);
            return r ? (this.logger.trace("BrowserCacheManager.getActiveAccount: Active account filters schema found"), this.getAccountInfoFilteredBy({ homeAccountId: r.homeAccountId, localAccountId: r.localAccountId, tenantId: r.tenantId })) : (this.logger.trace("BrowserCacheManager.getActiveAccount: No active account found"), null)
        }
        setActiveAccount(e) {
            const n = this.generateCacheKey(ut.ACTIVE_ACCOUNT_FILTERS)
                , r = this.generateCacheKey(ut.ACTIVE_ACCOUNT);
            if (e) {
                this.logger.verbose("setActiveAccount: Active account set");
                const o = { homeAccountId: e.homeAccountId, localAccountId: e.localAccountId, tenantId: e.tenantId };
                this.browserStorage.setItem(n, JSON.stringify(o)), this.browserStorage.setItem(r, e.localAccountId)
            } else this.logger.verbose("setActiveAccount: No account passed, active account not set"), this.browserStorage.removeItem(n), this.browserStorage.removeItem(r)
        }
        getThrottlingCache(e) { const n = this.getItem(e); if (!n) return this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit"), null; const r = this.validateAndParseJson(n); return !r || !rv(e, r) ? (this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getThrottlingCache: cache hit"), r) } setThrottlingCache(e, n) { this.logger.trace("BrowserCacheManager.setThrottlingCache called"), this.setItem(e, JSON.stringify(n)) } getTemporaryCache(e, n) { const r = n ? this.generateCacheKey(e) : e; if (this.cacheConfig.storeAuthStateInCookie) { const i = this.getItemCookie(r); if (i) return this.logger.trace("BrowserCacheManager.getTemporaryCache: storeAuthStateInCookies set to true, retrieving from cookies"), i } const o = this.temporaryCacheStorage.getItem(r); if (!o) { if (this.cacheConfig.cacheLocation === rt.LocalStorage) { const i = this.browserStorage.getItem(r); if (i) return this.logger.trace("BrowserCacheManager.getTemporaryCache: Temporary cache item found in local storage"), i } return this.logger.trace("BrowserCacheManager.getTemporaryCache: No cache item found in local storage"), null } return this.logger.trace("BrowserCacheManager.getTemporaryCache: Temporary cache item returned"), o } setTemporaryCache(e, n, r) {
            const o = r ? this.generateCacheKey(e) : e;
            this.temporaryCacheStorage.setItem(o, n), this.cacheConfig.storeAuthStateInCookie && (this.logger.trace("BrowserCacheManager.setTemporaryCache: storeAuthStateInCookie set to true, setting item cookie"), this.setItemCookie(o, n))
        }
        removeItem(e) { this.browserStorage.removeItem(e) } removeTemporaryItem(e) { this.temporaryCacheStorage.removeItem(e), this.cacheConfig.storeAuthStateInCookie && (this.logger.trace("BrowserCacheManager.removeItem: storeAuthStateInCookie is true, clearing item cookie"), this.clearItemCookie(e)) } getKeys() { return this.browserStorage.getKeys() } async clear() {
            await this.removeAllAccounts(), this.removeAppMetadata(), this.temporaryCacheStorage.getKeys()
                .forEach(e => {
                    (e.indexOf(F.CACHE_PREFIX) !== -1 || e.indexOf(this.clientId) !== -1) && this.removeTemporaryItem(e)
                }), this.browserStorage.getKeys()
                .forEach(e => {
                    (e.indexOf(F.CACHE_PREFIX) !== -1 || e.indexOf(this.clientId) !== -1) && this.browserStorage.removeItem(e)
                }), this.internalStorage.clear()
        }
        async clearTokensAndKeysWithClaims(e, n) {
            e.addQueueMeasurement(N.ClearTokensAndKeysWithClaims, n);
            const r = this.getTokenKeys()
                , o = [];
            r.accessToken.forEach(i => {
                const s = this.getAccessTokenCredential(i);
                s?.requestedClaimsHash && i.includes(s.requestedClaimsHash.toLowerCase()) && o.push(this.removeAccessToken(i))
            }), await Promise.all(o), o.length > 0 && this.logger.warning(`${o.length} access tokens with claims in the cache keys have been removed from the cache.`)
        }
        setItemCookie(e, n, r) {
            let o = `${encodeURIComponent(e)}=${encodeURIComponent(n)};path=/;SameSite=Lax;`;
            if (r) {
                const i = this.getCookieExpirationTime(r);
                o += `expires=${i};`
            }
            this.cacheConfig.secureCookies && (o += "Secure;"), document.cookie = o
        }
        getItemCookie(e) {
            const n = `${encodeURIComponent(e)}=`
                , r = document.cookie.split(";");
            for (let o = 0; o < r.length; o++) { let i = r[o]; for (; i.charAt(0) === " ";) i = i.substring(1); if (i.indexOf(n) === 0) return decodeURIComponent(i.substring(n.length, i.length)) }
            return F.EMPTY_STRING
        }
        clearMsalCookies() {
            const e = `${F.CACHE_PREFIX}.${this.clientId}`;
            document.cookie.split(";")
                .forEach(r => {
                    for (; r.charAt(0) === " ";) r = r.substring(1);
                    if (r.indexOf(e) === 0) {
                        const o = r.split("=")[0];
                        this.clearItemCookie(o)
                    }
                })
        }
        clearItemCookie(e) { this.setItemCookie(e, F.EMPTY_STRING, -1) } getCookieExpirationTime(e) {
            const n = new Date;
            return new Date(n.getTime() + e * this.COOKIE_LIFE_MULTIPLIER)
                .toUTCString()
        }
        generateCacheKey(e) { return this.validateAndParseJson(e) ? JSON.stringify(e) : cn.startsWith(e, F.CACHE_PREFIX) || cn.startsWith(e, ut.ADAL_ID_TOKEN) ? e : `${F.CACHE_PREFIX}.${this.clientId}.${e}` } generateAuthorityKey(e) { const { libraryState: { id: n } } = ln.parseRequestState(this.cryptoImpl, e); return this.generateCacheKey(`${De.AUTHORITY}.${n}`) } generateNonceKey(e) { const { libraryState: { id: n } } = ln.parseRequestState(this.cryptoImpl, e); return this.generateCacheKey(`${De.NONCE_IDTOKEN}.${n}`) } generateStateKey(e) { const { libraryState: { id: n } } = ln.parseRequestState(this.cryptoImpl, e); return this.generateCacheKey(`${De.REQUEST_STATE}.${n}`) } getCachedAuthority(e) {
            const n = this.generateStateKey(e)
                , r = this.getTemporaryCache(n);
            if (!r) return null;
            const o = this.generateAuthorityKey(r);
            return this.getTemporaryCache(o)
        }
        updateCacheEntries(e, n, r, o, i) {
            this.logger.trace("BrowserCacheManager.updateCacheEntries called");
            const s = this.generateStateKey(e);
            this.setTemporaryCache(s, e, !1);
            const a = this.generateNonceKey(e);
            this.setTemporaryCache(a, n, !1);
            const c = this.generateAuthorityKey(e);
            if (this.setTemporaryCache(c, r, !1), i) {
                const l = { credential: i.homeAccountId, type: Vt.HOME_ACCOUNT_ID };
                this.setTemporaryCache(De.CCS_CREDENTIAL, JSON.stringify(l), !0)
            } else if (o) {
                const l = { credential: o, type: Vt.UPN };
                this.setTemporaryCache(De.CCS_CREDENTIAL, JSON.stringify(l), !0)
            }
        }
        resetRequestCache(e) {
            this.logger.trace("BrowserCacheManager.resetRequestCache called"), e && (this.temporaryCacheStorage.getKeys()
                .forEach(n => { n.indexOf(e) !== -1 && this.removeTemporaryItem(n) }), this.removeTemporaryItem(this.generateStateKey(e)), this.removeTemporaryItem(this.generateNonceKey(e)), this.removeTemporaryItem(this.generateAuthorityKey(e))), this.removeTemporaryItem(this.generateCacheKey(De.REQUEST_PARAMS)), this.removeTemporaryItem(this.generateCacheKey(De.ORIGIN_URI)), this.removeTemporaryItem(this.generateCacheKey(De.URL_HASH)), this.removeTemporaryItem(this.generateCacheKey(De.CORRELATION_ID)), this.removeTemporaryItem(this.generateCacheKey(De.CCS_CREDENTIAL)), this.removeTemporaryItem(this.generateCacheKey(De.NATIVE_REQUEST)), this.setInteractionInProgress(!1)
        }
        cleanRequestByState(e) {
            if (this.logger.trace("BrowserCacheManager.cleanRequestByState called"), e) {
                const n = this.generateStateKey(e)
                    , r = this.temporaryCacheStorage.getItem(n);
                this.logger.infoPii(`BrowserCacheManager.cleanRequestByState: Removing temporary cache items for state: ${r}`), this.resetRequestCache(r || F.EMPTY_STRING)
            }
            this.clearMsalCookies()
        }
        cleanRequestByInteractionType(e) {
            this.logger.trace("BrowserCacheManager.cleanRequestByInteractionType called"), this.temporaryCacheStorage.getKeys()
                .forEach(n => {
                    if (n.indexOf(De.REQUEST_STATE) === -1) return;
                    const r = this.temporaryCacheStorage.getItem(n);
                    if (!r) return;
                    const o = Wg(this.cryptoImpl, r);
                    o && o.interactionType === e && (this.logger.infoPii(`BrowserCacheManager.cleanRequestByInteractionType: Removing temporary cache items for state: ${r}`), this.resetRequestCache(r))
                }), this.clearMsalCookies(), this.setInteractionInProgress(!1)
        }
        cacheCodeRequest(e) {
            this.logger.trace("BrowserCacheManager.cacheCodeRequest called");
            const n = Nl(JSON.stringify(e));
            this.setTemporaryCache(De.REQUEST_PARAMS, n, !0)
        }
        getCachedRequest(e) {
            this.logger.trace("BrowserCacheManager.getCachedRequest called");
            const n = this.getTemporaryCache(De.REQUEST_PARAMS, !0);
            if (!n) throw ee(bg);
            let r;
            try { r = JSON.parse(wn(n)) } catch (o) { throw this.logger.errorPii(`Attempted to parse: ${n}`), this.logger.error(`Parsing cached token request threw with error: ${o}`), ee(Ig) }
            if (this.removeTemporaryItem(this.generateCacheKey(De.REQUEST_PARAMS)), !r.authority) {
                const o = this.generateAuthorityKey(e)
                    , i = this.getTemporaryCache(o);
                if (!i) throw ee(Sl);
                r.authority = i
            }
            return r
        }
        getCachedNativeRequest() { this.logger.trace("BrowserCacheManager.getCachedNativeRequest called"); const e = this.getTemporaryCache(De.NATIVE_REQUEST, !0); if (!e) return this.logger.trace("BrowserCacheManager.getCachedNativeRequest: No cached native request found"), null; const n = this.validateAndParseJson(e); return n || (this.logger.error("BrowserCacheManager.getCachedNativeRequest: Unable to parse native request"), null) } isInteractionInProgress(e) { const n = this.getInteractionInProgress(); return e ? n === this.clientId : !!n } getInteractionInProgress() { const e = `${F.CACHE_PREFIX}.${De.INTERACTION_STATUS_KEY}`; return this.getTemporaryCache(e, !1) } setInteractionInProgress(e) {
            const n = `${F.CACHE_PREFIX}.${De.INTERACTION_STATUS_KEY}`;
            if (e) {
                if (this.getInteractionInProgress()) throw ee(mg);
                this.setTemporaryCache(n, this.clientId, !1)
            } else !e && this.getInteractionInProgress() === this.clientId && this.removeTemporaryItem(n)
        }
        getLegacyLoginHint() {
            const e = this.getTemporaryCache(ut.ADAL_ID_TOKEN);
            e && (this.browserStorage.removeItem(ut.ADAL_ID_TOKEN), this.logger.verbose("Cached ADAL id token retrieved."));
            const n = this.getTemporaryCache(ut.ID_TOKEN, !0);
            n && (this.browserStorage.removeItem(this.generateCacheKey(ut.ID_TOKEN)), this.logger.verbose("Cached MSAL.js v1 id token retrieved"));
            const r = n || e;
            if (r) {
                const o = Br(r, wn);
                if (o.preferred_username) return this.logger.verbose("No SSO params used and ADAL/MSAL v1 token retrieved, setting ADAL/MSAL v1 preferred_username as loginHint"), o.preferred_username;
                if (o.upn) return this.logger.verbose("No SSO params used and ADAL/MSAL v1 token retrieved, setting ADAL/MSAL v1 upn as loginHint"), o.upn;
                this.logger.verbose("No SSO params used and ADAL/MSAL v1 token retrieved, however, no account hint claim found. Enable preferred_username or upn id token claim to get SSO.")
            }
            return null
        }
        updateCredentialCacheKey(e, n) {
            const r = to(n);
            if (e !== r) {
                const o = this.getItem(e);
                if (o) return this.browserStorage.removeItem(e), this.setItem(r, o), this.logger.verbose(`Updated an outdated ${n.credentialType} cache key`), r;
                this.logger.error(`Attempted to update an outdated ${n.credentialType} cache key but no item matching the outdated key was found in storage`)
            }
            return e
        }
        async hydrateCache(e, n) {
            const r = Hs(e.account?.homeAccountId, e.account?.environment, e.idToken, this.clientId, e.tenantId);
            let o;
            n.claims && (o = await this.cryptoImpl.hashString(n.claims));
            const i = Bs(e.account?.homeAccountId, e.account.environment, e.accessToken, this.clientId, e.tenantId, e.scopes.join(" "), e.expiresOn ? e.expiresOn.getTime() / 1e3 : 0, e.extExpiresOn ? e.extExpiresOn.getTime() / 1e3 : 0, wn, void 0, e.tokenType, void 0, n.sshKid, n.claims, o)
                , s = { idToken: r, accessToken: i };
            return this.saveCacheRecord(s)
        }
        async saveCacheRecord(e, n, r) {
            try { await super.saveCacheRecord(e, n, r) } catch (o) {
                if (o instanceof fo && this.performanceClient && r) try {
                    const i = this.getTokenKeys();
                    this.performanceClient.addFields({ cacheRtCount: i.refreshToken.length, cacheIdCount: i.idToken.length, cacheAtCount: i.accessToken.length }, r)
                } catch {}
                throw o
            }
        }
    }
    const eA = (t, e) => { const n = { cacheLocation: rt.MemoryStorage, temporaryCacheLocation: rt.MemoryStorage, storeAuthStateInCookie: !1, secureCookies: !1, cacheMigrationEnabled: !1, claimsBasedCachingEnabled: !1 }; return new ac(t, n, hs, e) };
    
    function tA(t, e, n, r) { return t.verbose("getAllAccounts called"), n ? e.getAllAccounts(r) : [] }
    
    function nA(t, e, n) {
        if (e.trace("getAccount called"), Object.keys(t)
            .length === 0) return e.warning("getAccount: No accountFilter provided"), null;
        const r = n.getAccountInfoFilteredBy(t);
        return r ? (e.verbose("getAccount: Account matching provided filter found, returning"), r) : (e.verbose("getAccount: No matching account found, returning null"), null)
    }
    
    function rA(t, e, n) { if (e.trace("getAccountByUsername called"), !t) return e.warning("getAccountByUsername: No username provided"), null; const r = n.getAccountInfoFilteredBy({ username: t }); return r ? (e.verbose("getAccountByUsername: Account matching username found, returning"), e.verbosePii(`getAccountByUsername: Returning signed-in accounts matching username: ${t}`), r) : (e.verbose("getAccountByUsername: No matching account found, returning null"), null) }
    
    function oA(t, e, n) { if (e.trace("getAccountByHomeId called"), !t) return e.warning("getAccountByHomeId: No homeAccountId provided"), null; const r = n.getAccountInfoFilteredBy({ homeAccountId: t }); return r ? (e.verbose("getAccountByHomeId: Account matching homeAccountId found, returning"), e.verbosePii(`getAccountByHomeId: Returning signed-in accounts matching homeAccountId: ${t}`), r) : (e.verbose("getAccountByHomeId: No matching account found, returning null"), null) }
    
    function iA(t, e, n) { if (e.trace("getAccountByLocalId called"), !t) return e.warning("getAccountByLocalId: No localAccountId provided"), null; const r = n.getAccountInfoFilteredBy({ localAccountId: t }); return r ? (e.verbose("getAccountByLocalId: Account matching localAccountId found, returning"), e.verbosePii(`getAccountByLocalId: Returning signed-in accounts matching localAccountId: ${t}`), r) : (e.verbose("getAccountByLocalId: No matching account found, returning null"), null) }
    
    function sA(t, e) { e.setActiveAccount(t) }
    
    function aA(t) { return t.getActiveAccount() }
    const ie = { INITIALIZE_START: "msal:initializeStart", INITIALIZE_END: "msal:initializeEnd", ACCOUNT_ADDED: "msal:accountAdded", ACCOUNT_REMOVED: "msal:accountRemoved", ACTIVE_ACCOUNT_CHANGED: "msal:activeAccountChanged", LOGIN_START: "msal:loginStart", LOGIN_SUCCESS: "msal:loginSuccess", LOGIN_FAILURE: "msal:loginFailure", ACQUIRE_TOKEN_START: "msal:acquireTokenStart", ACQUIRE_TOKEN_SUCCESS: "msal:acquireTokenSuccess", ACQUIRE_TOKEN_FAILURE: "msal:acquireTokenFailure", ACQUIRE_TOKEN_NETWORK_START: "msal:acquireTokenFromNetworkStart", SSO_SILENT_START: "msal:ssoSilentStart", SSO_SILENT_SUCCESS: "msal:ssoSilentSuccess", SSO_SILENT_FAILURE: "msal:ssoSilentFailure", ACQUIRE_TOKEN_BY_CODE_START: "msal:acquireTokenByCodeStart", ACQUIRE_TOKEN_BY_CODE_SUCCESS: "msal:acquireTokenByCodeSuccess", ACQUIRE_TOKEN_BY_CODE_FAILURE: "msal:acquireTokenByCodeFailure", HANDLE_REDIRECT_START: "msal:handleRedirectStart", HANDLE_REDIRECT_END: "msal:handleRedirectEnd", POPUP_OPENED: "msal:popupOpened", LOGOUT_START: "msal:logoutStart", LOGOUT_SUCCESS: "msal:logoutSuccess", LOGOUT_FAILURE: "msal:logoutFailure", LOGOUT_END: "msal:logoutEnd", RESTORE_FROM_BFCACHE: "msal:restoreFromBFCache" };
    class cA {
        constructor(e, n) { this.eventCallbacks = new Map, this.logger = e, this.browserCrypto = n, this.listeningToStorageEvents = !1, this.handleAccountCacheChange = this.handleAccountCacheChange.bind(this) } addEventCallback(e) { if (typeof window < "u") { const n = Vn(); return this.eventCallbacks.set(n, e), this.logger.verbose(`Event callback registered with id: ${n}`), n } return null } removeEventCallback(e) { this.eventCallbacks.delete(e), this.logger.verbose(`Event callback ${e} removed.`) } enableAccountStorageEvents() { typeof window > "u" || (this.listeningToStorageEvents ? this.logger.verbose("Account storage listener already registered.") : (this.logger.verbose("Adding account storage listener."), this.listeningToStorageEvents = !0, window.addEventListener("storage", this.handleAccountCacheChange))) } disableAccountStorageEvents() { typeof window > "u" || (this.listeningToStorageEvents ? (this.logger.verbose("Removing account storage listener."), window.removeEventListener("storage", this.handleAccountCacheChange), this.listeningToStorageEvents = !1) : this.logger.verbose("No account storage listener registered.")) } emitEvent(e, n, r, o) {
            if (typeof window < "u") {
                const i = { eventType: e, interactionType: n || null, payload: r || null, error: o || null, timestamp: Date.now() };
                this.logger.info(`Emitting event: ${e}`), this.eventCallbacks.forEach((s, a) => { this.logger.verbose(`Emitting event to callback ${a}: ${e}`), s.apply(null, [i]) })
            }
        }
        handleAccountCacheChange(e) {
            try {
                e.key?.includes(ut.ACTIVE_ACCOUNT_FILTERS) && this.emitEvent(ie.ACTIVE_ACCOUNT_CHANGED);
                const n = e.newValue || e.oldValue;
                if (!n) return;
                const r = JSON.parse(n);
                if (typeof r != "object" || !st.isAccountEntity(r)) return;
                const i = Co.toObject(new st, r)
                    .getAccountInfo();
                !e.oldValue && e.newValue ? (this.logger.info("Account was added to cache in a different window"), this.emitEvent(ie.ACCOUNT_ADDED, void 0, i)) : !e.newValue && e.oldValue && (this.logger.info("Account was removed from cache in a different window"), this.emitEvent(ie.ACCOUNT_REMOVED, void 0, i))
            } catch { return }
        }
    }
    class zg {
        constructor(e, n, r, o, i, s, a, c, l) { this.config = e, this.browserStorage = n, this.browserCrypto = r, this.networkClient = this.config.system.networkClient, this.eventHandler = i, this.navigationClient = s, this.nativeMessageHandler = c, this.correlationId = l || Vn(), this.logger = o.clone(Jt.MSAL_SKU, Vs, this.correlationId), this.performanceClient = a } async clearCacheOnLogout(e) { if (e) { st.accountInfoIsEqual(e, this.browserStorage.getActiveAccount(), !1) && (this.logger.verbose("Setting active account to null"), this.browserStorage.setActiveAccount(null)); try { await this.browserStorage.removeAccount(st.generateAccountCacheKey(e)), this.logger.verbose("Cleared cache items belonging to the account provided in the logout request.") } catch { this.logger.error("Account provided in logout request was not found. Local cache unchanged.") } } else try { this.logger.verbose("No account provided in logout request, clearing all cache items.", this.correlationId), await this.browserStorage.clear(), await this.browserCrypto.clearKeystore() } catch { this.logger.error("Attempted to clear all MSAL cache items and failed. Local cache unchanged.") } } getRedirectUri(e) { this.logger.verbose("getRedirectUri called"); const n = e || this.config.auth.redirectUri || $n(); return Re.getAbsoluteUrl(n, $n()) } initializeServerTelemetryManager(e, n) { this.logger.verbose("initializeServerTelemetryManager called"); const r = { clientId: this.config.auth.clientId, correlationId: this.correlationId, apiId: e, forceRefresh: n || !1, wrapperSKU: this.browserStorage.getWrapperMetadata()[0], wrapperVer: this.browserStorage.getWrapperMetadata()[1] }; return new ci(r, this.browserStorage) } async getDiscoveredAuthority(e, n, r) {
            this.performanceClient.addQueueMeasurement(N.StandardInteractionClientGetDiscoveredAuthority, this.correlationId);
            const o = { protocolMode: this.config.auth.protocolMode, OIDCOptions: this.config.auth.OIDCOptions, knownAuthorities: this.config.auth.knownAuthorities, cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata, authorityMetadata: this.config.auth.authorityMetadata, skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache }
                , i = e || this.config.auth.authority
                , s = At.generateAuthority(i, n || this.config.auth.azureCloudOptions)
                , a = await W(eg, N.AuthorityFactoryCreateDiscoveredInstance, this.logger, this.performanceClient, this.correlationId)(s, this.config.system.networkClient, this.browserStorage, o, this.logger, this.correlationId, this.performanceClient);
            if (r && !a.isAlias(r.environment)) throw Be(zp);
            return a
        }
    }
    const lA = 32;
    async function uA(t, e, n) {
        t.addQueueMeasurement(N.GeneratePkceCodes, n);
        const r = $r(dA, N.GenerateCodeVerifier, e, t, n)(t, e, n)
            , o = await W(hA, N.GenerateCodeChallengeFromVerifier, e, t, n)(r, t, e, n);
        return { verifier: r, challenge: o }
    }
    
    function dA(t, e, n) { try { const r = new Uint8Array(lA); return $r(ME, N.GetRandomValues, e, t, n)(r), qs(r) } catch { throw ee(Il) } } async function hA(t, e, n, r) { e.addQueueMeasurement(N.GenerateCodeChallengeFromVerifier, r); try { const o = await W(Kg, N.Sha256Digest, n, e, r)(t, e, r); return qs(new Uint8Array(o)) } catch { throw ee(Il) } } async function Ul(t, e, n, r) {
        n.addQueueMeasurement(N.InitializeBaseRequest, t.correlationId);
        const o = t.authority || e.auth.authority
            , i = [...t && t.scopes || []]
            , s = { ...t, correlationId: t.correlationId, authority: o, scopes: i };
        if (!s.authenticationScheme) s.authenticationScheme = Fe.BEARER, r.verbose(`Authentication Scheme wasn't explicitly set in request, defaulting to "Bearer" request`);
        else { if (s.authenticationScheme === Fe.SSH) { if (!t.sshJwk) throw Be(Us); if (!t.sshKid) throw Be(Vp) } r.verbose(`Authentication Scheme set to "${s.authenticationScheme}" as configured in Auth request`) }
        return e.cache.claimsBasedCachingEnabled && t.claims && !cn.isEmptyObj(t.claims) && (s.requestedClaimsHash = await jg(t.claims)), s
    }
    async function fA(t, e, n, r, o) { r.addQueueMeasurement(N.InitializeSilentRequest, t.correlationId); const i = await W(Ul, N.InitializeBaseRequest, o, r, t.correlationId)(t, n, r, o); return { ...t, ...i, account: e, forceRefresh: t.forceRefresh || !1 } } class Oo extends zg {
        async initializeAuthorizationCodeRequest(e) {
            this.performanceClient.addQueueMeasurement(N.StandardInteractionClientInitializeAuthorizationCodeRequest, this.correlationId);
            const n = await W(uA, N.GeneratePkceCodes, this.logger, this.performanceClient, this.correlationId)(this.performanceClient, this.logger, this.correlationId)
                , r = { ...e, redirectUri: e.redirectUri, code: F.EMPTY_STRING, codeVerifier: n.verifier };
            return e.codeChallenge = n.challenge, e.codeChallengeMethod = F.S256_CODE_CHALLENGE_METHOD, r
        }
        initializeLogoutRequest(e) {
            this.logger.verbose("initializeLogoutRequest called", e?.correlationId);
            const n = { correlationId: this.correlationId || Vn(), ...e };
            if (e)
                if (e.logoutHint) this.logger.verbose("logoutHint has already been set in logoutRequest");
                else if (e.account) {
                const r = this.getLogoutHintFromIdTokenClaims(e.account);
                r && (this.logger.verbose("Setting logoutHint to login_hint ID Token Claim value for the account provided"), n.logoutHint = r)
            } else this.logger.verbose("logoutHint was not set and account was not passed into logout request, logoutHint will not be set");
            else this.logger.verbose("logoutHint will not be set since no logout request was configured");
            return !e || e.postLogoutRedirectUri !== null ? e && e.postLogoutRedirectUri ? (this.logger.verbose("Setting postLogoutRedirectUri to uri set on logout request", n.correlationId), n.postLogoutRedirectUri = Re.getAbsoluteUrl(e.postLogoutRedirectUri, $n())) : this.config.auth.postLogoutRedirectUri === null ? this.logger.verbose("postLogoutRedirectUri configured as null and no uri set on request, not passing post logout redirect", n.correlationId) : this.config.auth.postLogoutRedirectUri ? (this.logger.verbose("Setting postLogoutRedirectUri to configured uri", n.correlationId), n.postLogoutRedirectUri = Re.getAbsoluteUrl(this.config.auth.postLogoutRedirectUri, $n())) : (this.logger.verbose("Setting postLogoutRedirectUri to current page", n.correlationId), n.postLogoutRedirectUri = Re.getAbsoluteUrl($n(), $n())) : this.logger.verbose("postLogoutRedirectUri passed as null, not setting post logout redirect uri", n.correlationId), n
        }
        getLogoutHintFromIdTokenClaims(e) {
            const n = e.idTokenClaims;
            if (n) {
                if (n.login_hint) return n.login_hint;
                this.logger.verbose("The ID Token Claims tied to the provided account do not contain a login_hint claim, logoutHint will not be added to logout request")
            } else this.logger.verbose("The provided account does not contain ID Token Claims, logoutHint will not be added to logout request");
            return null
        }
        async createAuthCodeClient(e, n, r, o) { this.performanceClient.addQueueMeasurement(N.StandardInteractionClientCreateAuthCodeClient, this.correlationId); const i = await W(this.getClientConfiguration.bind(this), N.StandardInteractionClientGetClientConfiguration, this.logger, this.performanceClient, this.correlationId)(e, n, r, o); return new ag(i, this.performanceClient) } async getClientConfiguration(e, n, r, o) {
            this.performanceClient.addQueueMeasurement(N.StandardInteractionClientGetClientConfiguration, this.correlationId);
            const i = await W(this.getDiscoveredAuthority.bind(this), N.StandardInteractionClientGetDiscoveredAuthority, this.logger, this.performanceClient, this.correlationId)(n, r, o)
                , s = this.config.system.loggerOptions;
            return { authOptions: { clientId: this.config.auth.clientId, authority: i, clientCapabilities: this.config.auth.clientCapabilities }, systemOptions: { tokenRenewalOffsetSeconds: this.config.system.tokenRenewalOffsetSeconds, preventCorsPreflight: !0 }, loggerOptions: { loggerCallback: s.loggerCallback, piiLoggingEnabled: s.piiLoggingEnabled, logLevel: s.logLevel, correlationId: this.correlationId }, cacheOptions: { claimsBasedCachingEnabled: this.config.cache.claimsBasedCachingEnabled }, cryptoInterface: this.browserCrypto, networkInterface: this.networkClient, storageInterface: this.browserStorage, serverTelemetryManager: e, libraryInfo: { sku: Jt.MSAL_SKU, version: Vs, cpu: F.EMPTY_STRING, os: F.EMPTY_STRING }, telemetry: this.config.telemetry }
        }
        async initializeAuthorizationRequest(e, n) {
            this.performanceClient.addQueueMeasurement(N.StandardInteractionClientInitializeAuthorizationRequest, this.correlationId);
            const r = this.getRedirectUri(e.redirectUri)
                , o = { interactionType: n }
                , i = ln.setRequestState(this.browserCrypto, e && e.state || F.EMPTY_STRING, o)
                , a = { ...await W(Ul, N.InitializeBaseRequest, this.logger, this.performanceClient, this.correlationId)({ ...e, correlationId: this.correlationId }, this.config, this.performanceClient, this.logger), redirectUri: r, state: i, nonce: e.nonce || Vn(), responseMode: this.config.auth.OIDCOptions.serverResponseType }
                , c = e.account || this.browserStorage.getActiveAccount();
            if (c && (this.logger.verbose("Setting validated request account", this.correlationId), this.logger.verbosePii(`Setting validated request account: ${c.homeAccountId}`, this.correlationId), a.account = c), !a.loginHint && !c) {
                const l = this.browserStorage.getLegacyLoginHint();
                l && (a.loginHint = l)
            }
            return a
        }
    }
    const pA = "ContentError"
        , Yg = "user_switch";
    const gA = "USER_INTERACTION_REQUIRED"
        , mA = "USER_CANCEL"
        , yA = "NO_NETWORK"
        , CA = "PERSISTENT_ERROR"
        , _A = "DISABLED"
        , TA = "ACCOUNT_UNAVAILABLE";
    const vA = -0x7ffb78ff
        , EA = {
            [Yg]: "User attempted to switch accounts in the native broker, which is not allowed. All new accounts must sign-in through the standard web flow first, please try again."
        };
    class Tn extends Qe { constructor(e, n, r) { super(e, n), Object.setPrototypeOf(this, Tn.prototype), this.name = "NativeAuthError", this.ext = r } }
    
    function Qr(t) {
        if (t.ext && t.ext.status && (t.ext.status === CA || t.ext.status === _A) || t.ext && t.ext.error && t.ext.error === vA) return !0;
        switch (t.errorCode) {
        case pA:
            return !0;
        default:
            return !1
        }
    }
    
    function cc(t, e, n) {
        if (n && n.status) switch (n.status) {
        case TA:
            return ec(sg);
        case gA:
            return new zt(t, e);
        case mA:
            return ee(Ur);
        case yA:
            return ee(ms)
        }
        return new Tn(t, EA[t] || e, n)
    }
    class Qg extends Oo {
        async acquireToken(e) {
            this.performanceClient.addQueueMeasurement(N.SilentCacheClientAcquireToken, e.correlationId);
            const n = this.initializeServerTelemetryManager(We.acquireTokenSilent_silentFlow)
                , r = await W(this.getClientConfiguration.bind(this), N.StandardInteractionClientGetClientConfiguration, this.logger, this.performanceClient, this.correlationId)(n, e.authority, e.azureCloudOptions, e.account)
                , o = new hE(r, this.performanceClient);
            this.logger.verbose("Silent auth client created");
            try { const s = (await W(o.acquireCachedToken.bind(o), N.SilentFlowClientAcquireCachedToken, this.logger, this.performanceClient, e.correlationId)(e))[0]; return this.performanceClient.addFields({ fromCache: !0 }, e.correlationId), s } catch (i) { throw i instanceof Ai && i.errorCode === Rl && this.logger.verbose("Signing keypair for bound access token not found. Refreshing bound access token and generating a new crypto keypair."), i }
        }
        logout(e) { this.logger.verbose("logoutRedirect called"); const n = this.initializeLogoutRequest(e); return this.clearCacheOnLogout(n?.account) }
    }
    const ba = { BROKER_CLIENT_ID: "brk_client_id", BROKER_REDIRECT_URI: "brk_redirect_uri" };
    class po extends zg {
        constructor(e, n, r, o, i, s, a, c, l, h, f, g) {
            super(e, n, r, o, i, s, c, l, g), this.apiId = a, this.accountId = h, this.nativeMessageHandler = l, this.nativeStorageManager = f, this.silentCacheClient = new Qg(e, this.nativeStorageManager, r, o, i, s, c, l, g), this.serverTelemetryManager = this.initializeServerTelemetryManager(this.apiId);
            const T = this.nativeMessageHandler.getExtensionId() === ro.PREFERRED_EXTENSION_ID ? "chrome" : this.nativeMessageHandler.getExtensionId()
                ?.length ? "unknown" : void 0;
            this.skus = ci.makeExtraSkuString({ libraryName: Jt.MSAL_SKU, libraryVersion: Vs, extensionName: T, extensionVersion: this.nativeMessageHandler.getExtensionVersion() })
        }
        addRequestSKUs(e) { e.extraParameters = { ...e.extraParameters, [Vv]: this.skus } } async acquireToken(e) {
            this.performanceClient.addQueueMeasurement(N.NativeInteractionClientAcquireToken, e.correlationId), this.logger.trace("NativeInteractionClient - acquireToken called.");
            const n = this.performanceClient.startMeasurement(N.NativeInteractionClientAcquireToken, e.correlationId)
                , r = kn();
            try {
                const o = await this.initializeNativeRequest(e);
                try { const l = await this.acquireTokensFromCache(this.accountId, o); return n.end({ success: !0, isNativeBroker: !1, fromCache: !0 }), l } catch { this.logger.info("MSAL internal Cache does not contain tokens, proceed to make a native call") }
                const { ...i } = o, s = { method: kr.GetToken, request: i }, a = await this.nativeMessageHandler.sendMessage(s), c = this.validateNativeResponse(a);
                return await this.handleNativeResponse(c, o, r)
                    .then(l => (n.end({ success: !0, isNativeBroker: !0, requestId: l.requestId }), this.serverTelemetryManager.clearNativeBrokerErrorCode(), l))
                    .catch(l => { throw n.end({ success: !1, errorCode: l.errorCode, subErrorCode: l.subError, isNativeBroker: !0 }), l })
            } catch (o) { throw o instanceof Tn && this.serverTelemetryManager.setNativeBrokerErrorCode(o.errorCode), o }
        }
        createSilentCacheRequest(e, n) {
            return {
                authority: e.authority
                , correlationId: this.correlationId
                , scopes: Xe.fromString(e.scope)
                    .asArray()
                , account: n
                , forceRefresh: !1
            }
        }
        async acquireTokensFromCache(e, n) {
            if (!e) throw this.logger.warning("NativeInteractionClient:acquireTokensFromCache - No nativeAccountId provided"), q(Ya);
            const r = this.browserStorage.getBaseAccountInfo({ nativeAccountId: e });
            if (!r) throw q(Ya);
            try {
                const o = this.createSilentCacheRequest(n, r)
                    , i = await this.silentCacheClient.acquireToken(o)
                    , s = { ...r, idTokenClaims: i?.idTokenClaims, idToken: i?.idToken };
                return { ...i, account: s }
            } catch (o) { throw o }
        }
        async acquireTokenRedirect(e, n) {
            this.logger.trace("NativeInteractionClient - acquireTokenRedirect called.");
            const { ...r } = e;
            delete r.onRedirectNavigate;
            const o = await this.initializeNativeRequest(r)
                , i = { method: kr.GetToken, request: o };
            try {
                const c = await this.nativeMessageHandler.sendMessage(i);
                this.validateNativeResponse(c)
            } catch (c) { if (c instanceof Tn && (this.serverTelemetryManager.setNativeBrokerErrorCode(c.errorCode), Qr(c))) throw c } this.browserStorage.setTemporaryCache(De.NATIVE_REQUEST, JSON.stringify(o), !0);
            const s = { apiId: We.acquireTokenRedirect, timeout: this.config.system.redirectNavigationTimeout, noHistory: !1 }
                , a = this.config.auth.navigateToLoginRequestUrl ? window.location.href : this.getRedirectUri(e.redirectUri);
            n.end({ success: !0 }), await this.navigationClient.navigateExternal(a, s)
        }
        async handleRedirectPromise(e, n) {
            if (this.logger.trace("NativeInteractionClient - handleRedirectPromise called."), !this.browserStorage.isInteractionInProgress(!0)) return this.logger.info("handleRedirectPromise called but there is no interaction in progress, returning null."), null;
            const r = this.browserStorage.getCachedNativeRequest();
            if (!r) return this.logger.verbose("NativeInteractionClient - handleRedirectPromise called but there is no cached request, returning null."), e && n && e?.addFields({ errorCode: "no_cached_request" }, n), null;
            const { prompt: o, ...i } = r;
            o && this.logger.verbose("NativeInteractionClient - handleRedirectPromise called and prompt was included in the original request, removing prompt from cached request to prevent second interaction with native broker window."), this.browserStorage.removeItem(this.browserStorage.generateCacheKey(De.NATIVE_REQUEST));
            const s = { method: kr.GetToken, request: i }
                , a = kn();
            try {
                this.logger.verbose("NativeInteractionClient - handleRedirectPromise sending message to native broker.");
                const c = await this.nativeMessageHandler.sendMessage(s);
                this.validateNativeResponse(c);
                const l = this.handleNativeResponse(c, i, a);
                this.browserStorage.setInteractionInProgress(!1);
                const h = await l;
                return this.serverTelemetryManager.clearNativeBrokerErrorCode(), h
            } catch (c) { throw this.browserStorage.setInteractionInProgress(!1), c }
        }
        logout() { return this.logger.trace("NativeInteractionClient - logout called."), Promise.reject("Logout not implemented yet") } async handleNativeResponse(e, n, r) {
            this.logger.trace("NativeInteractionClient - handleNativeResponse called.");
            const o = Br(e.id_token, wn)
                , i = this.createHomeAccountIdentifier(e, o)
                , s = this.browserStorage.getAccountInfoFilteredBy({ nativeAccountId: n.accountId })
                ?.homeAccountId;
            if (i !== s && e.account.id !== n.accountId) throw cc(Yg);
            const a = await this.getDiscoveredAuthority(n.authority)
                , c = El(this.browserStorage, a, i, wn, o, e.client_info, void 0, o.tid, void 0, e.account.id, this.logger)
                , l = await this.generateAuthenticationResult(e, n, o, c, a.canonicalAuthority, r);
            return this.cacheAccount(c), this.cacheNativeTokens(e, n, i, o, e.access_token, l.tenantId, r), l
        }
        createHomeAccountIdentifier(e, n) { return st.generateHomeAccountId(e.client_info || F.EMPTY_STRING, nn.Default, this.logger, this.browserCrypto, n) } generateScopes(e, n) { return e.scope ? Xe.fromString(e.scope) : Xe.fromString(n.scope) } async generatePopAccessToken(e, n) {
            if (n.tokenType === Fe.POP && n.signPopToken) {
                if (e.shr) return this.logger.trace("handleNativeServerResponse: SHR is enabled in native layer"), e.shr;
                const r = new _o(this.browserCrypto)
                    , o = { resourceRequestMethod: n.resourceRequestMethod, resourceRequestUri: n.resourceRequestUri, shrClaims: n.shrClaims, shrNonce: n.shrNonce };
                if (!n.keyId) throw q(cl);
                return r.signPopToken(e.access_token, n.keyId, o)
            } else return e.access_token
        }
        async generateAuthenticationResult(e, n, r, o, i, s) {
            const a = this.addTelemetryFromNativeResponse(e)
                , c = e.scope ? Xe.fromString(e.scope) : Xe.fromString(n.scope)
                , l = e.account.properties || {}
                , h = l.UID || r.oid || r.sub || F.EMPTY_STRING
                , f = l.TenantId || r.tid || F.EMPTY_STRING
                , g = Cl(o.getAccountInfo(), void 0, r, e.id_token);
            g.nativeAccountId !== e.account.id && (g.nativeAccountId = e.account.id);
            const T = await this.generatePopAccessToken(e, n)
                , A = n.tokenType === Fe.POP ? Fe.POP : Fe.BEARER;
            return { authority: i, uniqueId: h, tenantId: f, scopes: c.asArray(), account: g, idToken: e.id_token, idTokenClaims: r, accessToken: T, fromCache: a ? this.isResponseFromCache(a) : !1, expiresOn: new Date(Number(s + e.expires_in) * 1e3), tokenType: A, correlationId: this.correlationId, state: e.state, fromNativeBroker: !0 }
        }
        cacheAccount(e) {
            this.browserStorage.setAccount(e), this.browserStorage.removeAccountContext(e)
                .catch(n => { this.logger.error(`Error occurred while removing account context from browser storage. ${n}`) })
        }
        cacheNativeTokens(e, n, r, o, i, s, a) {
            const c = Hs(r, n.authority, e.id_token || "", n.clientId, o.tid || "")
                , l = n.tokenType === Fe.POP ? F.SHR_NONCE_VALIDITY : (typeof e.expires_in == "string" ? parseInt(e.expires_in, 10) : e.expires_in) || 0
                , h = a + l
                , f = this.generateScopes(e, n)
                , g = Bs(r, n.authority, i, n.clientId, o.tid || s, f.printScopes(), h, 0, wn, void 0, n.tokenType, void 0, n.keyId)
                , T = { idToken: c, accessToken: g };
            this.nativeStorageManager.saveCacheRecord(T, n.storeInCache)
        }
        addTelemetryFromNativeResponse(e) { const n = this.getMATSFromResponse(e); return n ? (this.performanceClient.addFields({ extensionId: this.nativeMessageHandler.getExtensionId(), extensionVersion: this.nativeMessageHandler.getExtensionVersion(), matsBrokerVersion: n.broker_version, matsAccountJoinOnStart: n.account_join_on_start, matsAccountJoinOnEnd: n.account_join_on_end, matsDeviceJoin: n.device_join, matsPromptBehavior: n.prompt_behavior, matsApiErrorCode: n.api_error_code, matsUiVisible: n.ui_visible, matsSilentCode: n.silent_code, matsSilentBiSubCode: n.silent_bi_sub_code, matsSilentMessage: n.silent_message, matsSilentStatus: n.silent_status, matsHttpStatus: n.http_status, matsHttpEventCount: n.http_event_count }, this.correlationId), n) : null } validateNativeResponse(e) { if (e.hasOwnProperty("access_token") && e.hasOwnProperty("id_token") && e.hasOwnProperty("client_info") && e.hasOwnProperty("account") && e.hasOwnProperty("scope") && e.hasOwnProperty("expires_in")) return e; throw mp(nl, "Response missing expected properties.") } getMATSFromResponse(e) {
            if (e.properties.MATS) try { return JSON.parse(e.properties.MATS) } catch { this.logger.error("NativeInteractionClient - Error parsing MATS telemetry, returning null instead") }
            return null
        }
        isResponseFromCache(e) { return typeof e.is_cached > "u" ? (this.logger.verbose("NativeInteractionClient - MATS telemetry does not contain field indicating if response was served from cache. Returning false."), !1) : !!e.is_cached } async initializeNativeRequest(e) {
            this.logger.trace("NativeInteractionClient - initializeNativeRequest called");
            const n = e.authority || this.config.auth.authority;
            e.account && await this.getDiscoveredAuthority(n, e.azureCloudOptions, e.account);
            const r = new Re(n);
            r.validateAsUri();
            const { scopes: o, ...i } = e, s = new Xe(o || []);
            s.appendScopes(Ro);
            const a = () => {
                    switch (this.apiId) {
                    case We.ssoSilent:
                    case We.acquireTokenSilent_silentFlow:
                        return this.logger.trace("initializeNativeRequest: silent request sets prompt to none"), ht.NONE
                    }
                    if (!e.prompt) { this.logger.trace("initializeNativeRequest: prompt was not provided"); return }
                    switch (e.prompt) {
                    case ht.NONE:
                    case ht.CONSENT:
                    case ht.LOGIN:
                        return this.logger.trace("initializeNativeRequest: prompt is compatible with native flow"), e.prompt;
                    default:
                        throw this.logger.trace(`initializeNativeRequest: prompt = ${e.prompt} is not compatible with native flow`), ee(xg)
                    }
                }
                , c = { ...i, accountId: this.accountId, clientId: this.config.auth.clientId, authority: r.urlString, scope: s.printScopes(), redirectUri: this.getRedirectUri(e.redirectUri), prompt: a(), correlationId: this.correlationId, tokenType: e.authenticationScheme, windowTitleSubstring: document.title, extraParameters: { ...e.extraQueryParameters, ...e.tokenQueryParameters }, extendedExpiryToken: !1, keyId: e.popKid };
            if (c.signPopToken && e.popKid) throw ee(Fg);
            if (this.handleExtraBrokerParams(c), c.extraParameters = c.extraParameters || {}, c.extraParameters.telemetry = ro.MATS_TELEMETRY, e.authenticationScheme === Fe.POP) {
                const l = { resourceRequestUri: e.resourceRequestUri, resourceRequestMethod: e.resourceRequestMethod, shrClaims: e.shrClaims, shrNonce: e.shrNonce }
                    , h = new _o(this.browserCrypto);
                let f;
                if (c.keyId) f = this.browserCrypto.base64UrlEncode(JSON.stringify({ kid: c.keyId })), c.signPopToken = !1;
                else {
                    const g = await W(h.generateCnf.bind(h), N.PopTokenGenerateCnf, this.logger, this.performanceClient, e.correlationId)(l, this.logger);
                    f = g.reqCnfString, c.keyId = g.kid, c.signPopToken = !0
                }
                c.reqCnf = f
            }
            return this.addRequestSKUs(c), c
        }
        handleExtraBrokerParams(e) {
            if (e.extraParameters && e.extraParameters.hasOwnProperty(ba.BROKER_CLIENT_ID) && e.extraParameters.hasOwnProperty(ba.BROKER_REDIRECT_URI) && e.extraParameters.hasOwnProperty(yo)) {
                const n = e.extraParameters[yo]
                    , r = e.redirectUri
                    , o = e.extraParameters[ba.BROKER_REDIRECT_URI];
                e.extraParameters = { child_client_id: n, child_redirect_uri: r }, e.redirectUri = o
            }
        }
    }
    class An {
        constructor(e, n, r, o) { this.logger = e, this.handshakeTimeoutMs = n, this.extensionId = o, this.resolvers = new Map, this.handshakeResolvers = new Map, this.messageChannel = new MessageChannel, this.windowListener = this.onWindowMessage.bind(this), this.performanceClient = r, this.handshakeEvent = r.startMeasurement(N.NativeMessageHandlerHandshake) } async sendMessage(e) { this.logger.trace("NativeMessageHandler - sendMessage called."); const n = { channel: ro.CHANNEL_ID, extensionId: this.extensionId, responseId: Vn(), body: e }; return this.logger.trace("NativeMessageHandler - Sending request to browser extension"), this.logger.tracePii(`NativeMessageHandler - Sending request to browser extension: ${JSON.stringify(n)}`), this.messageChannel.port1.postMessage(n), new Promise((r, o) => { this.resolvers.set(n.responseId, { resolve: r, reject: o }) }) } static async createProvider(e, n, r) { e.trace("NativeMessageHandler - createProvider called."); try { const o = new An(e, n, r, ro.PREFERRED_EXTENSION_ID); return await o.sendHandshakeRequest(), o } catch { const i = new An(e, n, r); return await i.sendHandshakeRequest(), i } } async sendHandshakeRequest() { this.logger.trace("NativeMessageHandler - sendHandshakeRequest called."), window.addEventListener("message", this.windowListener, !1); const e = { channel: ro.CHANNEL_ID, extensionId: this.extensionId, responseId: Vn(), body: { method: kr.HandshakeRequest } }; return this.handshakeEvent.add({ extensionId: this.extensionId, extensionHandshakeTimeoutMs: this.handshakeTimeoutMs }), this.messageChannel.port1.onmessage = n => { this.onChannelMessage(n) }, window.postMessage(e, window.origin, [this.messageChannel.port2]), new Promise((n, r) => { this.handshakeResolvers.set(e.responseId, { resolve: n, reject: r }), this.timeoutId = window.setTimeout(() => { window.removeEventListener("message", this.windowListener, !1), this.messageChannel.port1.close(), this.messageChannel.port2.close(), this.handshakeEvent.end({ extensionHandshakeTimedOut: !0, success: !1 }), r(ee(Mg)), this.handshakeResolvers.delete(e.responseId) }, this.handshakeTimeoutMs) }) } onWindowMessage(e) { if (this.logger.trace("NativeMessageHandler - onWindowMessage called"), e.source !== window) return; const n = e.data; if (!(!n.channel || n.channel !== ro.CHANNEL_ID) && !(n.extensionId && n.extensionId !== this.extensionId) && n.body.method === kr.HandshakeRequest) { const r = this.handshakeResolvers.get(n.responseId); if (!r) { this.logger.trace(`NativeMessageHandler.onWindowMessage - resolver can't be found for request ${n.responseId}`); return } this.logger.verbose(n.extensionId ? `Extension with id: ${n.extensionId} not installed` : "No extension installed"), clearTimeout(this.timeoutId), this.messageChannel.port1.close(), this.messageChannel.port2.close(), window.removeEventListener("message", this.windowListener, !1), this.handshakeEvent.end({ success: !1, extensionInstalled: !1 }), r.reject(ee(Lg)) } } onChannelMessage(e) {
            this.logger.trace("NativeMessageHandler - onChannelMessage called.");
            const n = e.data
                , r = this.resolvers.get(n.responseId)
                , o = this.handshakeResolvers.get(n.responseId);
            try {
                const i = n.body.method;
                if (i === kr.Response) {
                    if (!r) return;
                    const s = n.body.response;
                    if (this.logger.trace("NativeMessageHandler - Received response from browser extension"), this.logger.tracePii(`NativeMessageHandler - Received response from browser extension: ${JSON.stringify(s)}`), s.status !== "Success") r.reject(cc(s.code, s.description, s.ext));
                    else if (s.result) s.result.code && s.result.description ? r.reject(cc(s.result.code, s.result.description, s.result.ext)) : r.resolve(s.result);
                    else throw mp(nl, "Event does not contain result.");
                    this.resolvers.delete(n.responseId)
                } else if (i === kr.HandshakeResponse) { if (!o) { this.logger.trace(`NativeMessageHandler.onChannelMessage - resolver can't be found for request ${n.responseId}`); return } clearTimeout(this.timeoutId), window.removeEventListener("message", this.windowListener, !1), this.extensionId = n.extensionId, this.extensionVersion = n.body.version, this.logger.verbose(`NativeMessageHandler - Received HandshakeResponse from extension: ${this.extensionId}`), this.handshakeEvent.end({ extensionInstalled: !0, success: !0 }), o.resolve(), this.handshakeResolvers.delete(n.responseId) }
            } catch (i) { this.logger.error("Error parsing response from WAM Extension"), this.logger.errorPii(`Error parsing response from WAM Extension: ${i}`), this.logger.errorPii(`Unable to parse ${e}`), r ? r.reject(i) : o && o.reject(i) }
        }
        getExtensionId() { return this.extensionId } getExtensionVersion() { return this.extensionVersion } static isNativeAvailable(e, n, r, o) {
            if (n.trace("isNativeAvailable called"), !e.system.allowNativeBroker) return n.trace("isNativeAvailable: allowNativeBroker is not enabled, returning false"), !1;
            if (!r) return n.trace("isNativeAvailable: WAM extension provider is not initialized, returning false"), !1;
            if (o) switch (o) {
            case Fe.BEARER:
            case Fe.POP:
                return n.trace("isNativeAvailable: authenticationScheme is supported, returning true"), !0;
            default:
                return n.trace("isNativeAvailable: authenticationScheme is not supported, returning false"), !1
            }
            return !0
        }
    }
    class Fl {
        constructor(e, n, r, o, i) { this.authModule = e, this.browserStorage = n, this.authCodeRequest = r, this.logger = o, this.performanceClient = i } async handleCodeResponse(e, n) { this.performanceClient.addQueueMeasurement(N.HandleCodeResponse, n.correlationId); let r; try { r = this.authModule.handleFragmentResponse(e, n.state) } catch (o) { throw o instanceof fr && o.subError === Ur ? ee(Ur) : o } return W(this.handleCodeResponseFromServer.bind(this), N.HandleCodeResponseFromServer, this.logger, this.performanceClient, n.correlationId)(r, n) } async handleCodeResponseFromServer(e, n, r = !0) {
            if (this.performanceClient.addQueueMeasurement(N.HandleCodeResponseFromServer, n.correlationId), this.logger.trace("InteractionHandler.handleCodeResponseFromServer called"), this.authCodeRequest.code = e.code, e.cloud_instance_host_name && await W(this.authModule.updateAuthority.bind(this.authModule), N.UpdateTokenEndpointAuthority, this.logger, this.performanceClient, n.correlationId)(e.cloud_instance_host_name, n.correlationId), r && (e.nonce = n.nonce || void 0), e.state = n.state, e.client_info) this.authCodeRequest.clientInfo = e.client_info;
            else {
                const i = this.createCcsCredentials(n);
                i && (this.authCodeRequest.ccsCredential = i)
            }
            return await W(this.authModule.acquireToken.bind(this.authModule), N.AuthClientAcquireToken, this.logger, this.performanceClient, n.correlationId)(this.authCodeRequest, e)
        }
        createCcsCredentials(e) { return e.account ? { credential: e.account.homeAccountId, type: Vt.HOME_ACCOUNT_ID } : e.loginHint ? { credential: e.loginHint, type: Vt.UPN } : null }
    }
    
    function Jg(t, e, n) { const r = us(t); if (!r) throw Yp(t) ? (n.error(`A ${e} is present in the iframe but it does not contain known properties. It's likely that the ${e} has been replaced by code running on the redirectUri page.`), n.errorPii(`The ${e} detected is: ${t}`), ee(fg)) : (n.error(`The request has returned to the redirectUri but a ${e} is not present. It's likely that the ${e} has been removed or the page has been redirected by code running on the redirectUri page.`), ee(hg)); return r }
    
    function AA(t, e, n) { if (!t.state) throw ee(wl); const r = Wg(e, t.state); if (!r) throw ee(pg); if (r.interactionType !== n) throw ee(gg) } class bA extends Oo {
        constructor(e, n, r, o, i, s, a, c, l, h) { super(e, n, r, o, i, s, a, l, h), this.unloadWindow = this.unloadWindow.bind(this), this.nativeStorage = c } acquireToken(e) {
            try {
                const n = this.generatePopupName(e.scopes || Ro, e.authority || this.config.auth.authority)
                    , r = e.popupWindowAttributes || {};
                if (this.config.system.asyncPopups) return this.logger.verbose("asyncPopups set to true, acquiring token"), this.acquireTokenPopupAsync(e, n, r); { this.logger.verbose("asyncPopup set to false, opening popup before acquiring token"); const o = this.openSizedPopup("about:blank", n, r); return this.acquireTokenPopupAsync(e, n, r, o) }
            } catch (n) { return Promise.reject(n) }
        }
        logout(e) {
            try {
                this.logger.verbose("logoutPopup called");
                const n = this.initializeLogoutRequest(e)
                    , r = this.generateLogoutPopupName(n)
                    , o = e && e.authority
                    , i = e && e.mainWindowRedirectUri
                    , s = e?.popupWindowAttributes || {};
                if (this.config.system.asyncPopups) return this.logger.verbose("asyncPopups set to true"), this.logoutPopupAsync(n, r, s, o, void 0, i); { this.logger.verbose("asyncPopup set to false, opening popup"); const a = this.openSizedPopup("about:blank", r, s); return this.logoutPopupAsync(n, r, s, o, a, i) }
            } catch (n) { return Promise.reject(n) }
        }
        async acquireTokenPopupAsync(e, n, r, o) {
            this.logger.verbose("acquireTokenPopupAsync called");
            const i = this.initializeServerTelemetryManager(We.acquireTokenPopup)
                , s = await W(this.initializeAuthorizationRequest.bind(this), N.StandardInteractionClientInitializeAuthorizationRequest, this.logger, this.performanceClient, this.correlationId)(e, oe.Popup);
            Gg(s.authority);
            try {
                const a = await W(this.initializeAuthorizationCodeRequest.bind(this), N.StandardInteractionClientInitializeAuthorizationCodeRequest, this.logger, this.performanceClient, this.correlationId)(s)
                    , c = await W(this.createAuthCodeClient.bind(this), N.StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, this.correlationId)(i, s.authority, s.azureCloudOptions, s.account)
                    , l = An.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, e.authenticationScheme);
                let h;
                l && (h = this.performanceClient.startMeasurement(N.FetchAccountIdWithNativeBroker, e.correlationId));
                const f = await c.getAuthCodeUrl({ ...s, nativeBroker: l })
                    , g = new Fl(c, this.browserStorage, a, this.logger, this.performanceClient)
                    , T = { popup: o, popupName: n, popupWindowAttributes: r }
                    , A = this.initiateAuthRequest(f, T);
                this.eventHandler.emitEvent(ie.POPUP_OPENED, oe.Popup, { popupWindow: A }, null);
                const b = await this.monitorPopupForHash(A)
                    , k = $r(Jg, N.DeserializeResponse, this.logger, this.performanceClient, this.correlationId)(b, this.config.auth.OIDCOptions.serverResponseType, this.logger);
                if (_n.removeThrottle(this.browserStorage, this.config.auth.clientId, a), k.accountId) {
                    if (this.logger.verbose("Account id found in hash, calling WAM for token"), h && h.end({ success: !0, isNativeBroker: !0 }), !this.nativeMessageHandler) throw ee(Ei);
                    const x = new po(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, We.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, k.accountId, this.nativeStorage, s.correlationId)
                        , { userRequestState: I } = ln.parseRequestState(this.browserCrypto, s.state);
                    return await x.acquireToken({ ...s, state: I, prompt: void 0 })
                }
                return await g.handleCodeResponse(k, s)
            } catch (a) { throw o && o.close(), a instanceof Qe && (a.setCorrelationId(this.correlationId), i.cacheFailedRequest(a)), a }
        }
        async logoutPopupAsync(e, n, r, o, i, s) {
            this.logger.verbose("logoutPopupAsync called"), this.eventHandler.emitEvent(ie.LOGOUT_START, oe.Popup, e);
            const a = this.initializeServerTelemetryManager(We.logoutPopup);
            try {
                await this.clearCacheOnLogout(e.account);
                const c = await W(this.createAuthCodeClient.bind(this), N.StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, this.correlationId)(a, o, void 0, e.account || void 0);
                try { c.authority.endSessionEndpoint } catch {
                    if (e.account?.homeAccountId && e.postLogoutRedirectUri && c.authority.protocolMode === qn.OIDC) {
                        if (this.browserStorage.removeAccount(e.account?.homeAccountId), this.eventHandler.emitEvent(ie.LOGOUT_SUCCESS, oe.Popup, e), s) {
                            const f = { apiId: We.logoutPopup, timeout: this.config.system.redirectNavigationTimeout, noHistory: !1 }
                                , g = Re.getAbsoluteUrl(s, $n());
                            await this.navigationClient.navigateInternal(g, f)
                        }
                        i && i.close();
                        return
                    }
                }
                const l = c.getLogoutUri(e);
                this.eventHandler.emitEvent(ie.LOGOUT_SUCCESS, oe.Popup, e);
                const h = this.openPopup(l, { popupName: n, popupWindowAttributes: r, popup: i });
                if (this.eventHandler.emitEvent(ie.POPUP_OPENED, oe.Popup, { popupWindow: h }, null), await this.monitorPopupForHash(h)
                    .catch(() => {}), s) {
                    const f = { apiId: We.logoutPopup, timeout: this.config.system.redirectNavigationTimeout, noHistory: !1 }
                        , g = Re.getAbsoluteUrl(s, $n());
                    this.logger.verbose("Redirecting main window to url specified in the request"), this.logger.verbosePii(`Redirecting main window to: ${g}`), await this.navigationClient.navigateInternal(g, f)
                } else this.logger.verbose("No main window navigation requested")
            } catch (c) { throw i && i.close(), c instanceof Qe && (c.setCorrelationId(this.correlationId), a.cacheFailedRequest(c)), this.browserStorage.setInteractionInProgress(!1), this.eventHandler.emitEvent(ie.LOGOUT_FAILURE, oe.Popup, null, c), this.eventHandler.emitEvent(ie.LOGOUT_END, oe.Popup), c } this.eventHandler.emitEvent(ie.LOGOUT_END, oe.Popup)
        }
        initiateAuthRequest(e, n) { if (e) return this.logger.infoPii(`Navigate to: ${e}`), this.openPopup(e, n); throw this.logger.error("Navigate url is empty"), ee(Ks) } monitorPopupForHash(e) {
            return new Promise((n, r) => {
                    this.logger.verbose("PopupHandler.monitorPopupForHash - polling started");
                    const o = setInterval(() => {
                        if (e.closed) { this.logger.error("PopupHandler.monitorPopupForHash - window closed"), clearInterval(o), r(ee(Ur)); return }
                        let i = "";
                        try { i = e.location.href } catch {}
                        if (!i || i === "about:blank") return;
                        clearInterval(o);
                        let s = "";
                        const a = this.config.auth.OIDCOptions.serverResponseType;
                        e && (a === vi.QUERY ? s = e.location.search : s = e.location.hash), this.logger.verbose("PopupHandler.monitorPopupForHash - popup window is on same origin as caller"), n(s)
                    }, this.config.system.pollIntervalMilliseconds)
                })
                .finally(() => { this.cleanPopup(e) })
        }
        openPopup(e, n) { try { let r; if (n.popup ? (r = n.popup, this.logger.verbosePii(`Navigating popup window to: ${e}`), r.location.assign(e)) : typeof n.popup > "u" && (this.logger.verbosePii(`Opening popup window to: ${e}`), r = this.openSizedPopup(e, n.popupName, n.popupWindowAttributes)), !r) throw ee(Cg); return r.focus && r.focus(), this.currentWindow = r, window.addEventListener("beforeunload", this.unloadWindow), r } catch (r) { throw this.logger.error("error opening popup " + r.message), this.browserStorage.setInteractionInProgress(!1), ee(yg) } } openSizedPopup(e, n, r) {
            const o = window.screenLeft ? window.screenLeft : window.screenX
                , i = window.screenTop ? window.screenTop : window.screenY
                , s = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
                , a = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            let c = r.popupSize?.width
                , l = r.popupSize?.height
                , h = r.popupPosition?.top
                , f = r.popupPosition?.left;
            return (!c || c < 0 || c > s) && (this.logger.verbose("Default popup window width used. Window width not configured or invalid."), c = Jt.POPUP_WIDTH), (!l || l < 0 || l > a) && (this.logger.verbose("Default popup window height used. Window height not configured or invalid."), l = Jt.POPUP_HEIGHT), (!h || h < 0 || h > a) && (this.logger.verbose("Default popup window top position used. Window top not configured or invalid."), h = Math.max(0, a / 2 - Jt.POPUP_HEIGHT / 2 + i)), (!f || f < 0 || f > s) && (this.logger.verbose("Default popup window left position used. Window left not configured or invalid."), f = Math.max(0, s / 2 - Jt.POPUP_WIDTH / 2 + o)), window.open(e, n, `width=${c}, height=${l}, top=${h}, left=${f}, scrollbars=yes`)
        }
        unloadWindow(e) { this.browserStorage.cleanRequestByInteractionType(oe.Popup), this.currentWindow && this.currentWindow.close(), e.preventDefault() } cleanPopup(e) { e && e.close(), window.removeEventListener("beforeunload", this.unloadWindow), this.browserStorage.setInteractionInProgress(!1) } generatePopupName(e, n) { return `${Jt.POPUP_NAME_PREFIX}.${this.config.auth.clientId}.${e.join("-")}.${n}.${this.correlationId}` } generateLogoutPopupName(e) { const n = e.account && e.account.homeAccountId; return `${Jt.POPUP_NAME_PREFIX}.${this.config.auth.clientId}.${n}.${this.correlationId}` }
    }
    class Id {
        constructor(e, n, r, o, i) { this.authModule = e, this.browserStorage = n, this.authCodeRequest = r, this.logger = o, this.performanceClient = i } async initiateAuthRequest(e, n) {
            if (this.logger.verbose("RedirectHandler.initiateAuthRequest called"), e) {
                n.redirectStartPage && (this.logger.verbose("RedirectHandler.initiateAuthRequest: redirectStartPage set, caching start page"), this.browserStorage.setTemporaryCache(De.ORIGIN_URI, n.redirectStartPage, !0)), this.browserStorage.setTemporaryCache(De.CORRELATION_ID, this.authCodeRequest.correlationId, !0), this.browserStorage.cacheCodeRequest(this.authCodeRequest), this.logger.infoPii(`RedirectHandler.initiateAuthRequest: Navigate to: ${e}`);
                const r = { apiId: We.acquireTokenRedirect, timeout: n.redirectTimeout, noHistory: !1 };
                if (typeof n.onRedirectNavigate == "function")
                    if (this.logger.verbose("RedirectHandler.initiateAuthRequest: Invoking onRedirectNavigate callback"), n.onRedirectNavigate(e) !== !1) { this.logger.verbose("RedirectHandler.initiateAuthRequest: onRedirectNavigate did not return false, navigating"), await n.navigationClient.navigateExternal(e, r); return } else { this.logger.verbose("RedirectHandler.initiateAuthRequest: onRedirectNavigate returned false, stopping navigation"); return }
                else { this.logger.verbose("RedirectHandler.initiateAuthRequest: Navigating window to navigate url"), await n.navigationClient.navigateExternal(e, r); return }
            } else throw this.logger.info("RedirectHandler.initiateAuthRequest: Navigate url is empty"), ee(Ks)
        }
        async handleCodeResponse(e, n) {
            this.logger.verbose("RedirectHandler.handleCodeResponse called"), this.browserStorage.setInteractionInProgress(!1);
            const r = this.browserStorage.generateStateKey(n)
                , o = this.browserStorage.getTemporaryCache(r);
            if (!o) throw q(ls, "Cached State");
            let i;
            try { i = this.authModule.handleFragmentResponse(e, o) } catch (l) { throw l instanceof fr && l.subError === Ur ? ee(Ur) : l }
            const s = this.browserStorage.generateNonceKey(o)
                , a = this.browserStorage.getTemporaryCache(s);
            if (this.authCodeRequest.code = i.code, i.cloud_instance_host_name && await W(this.authModule.updateAuthority.bind(this.authModule), N.UpdateTokenEndpointAuthority, this.logger, this.performanceClient, this.authCodeRequest.correlationId)(i.cloud_instance_host_name, this.authCodeRequest.correlationId), i.nonce = a || void 0, i.state = o, i.client_info) this.authCodeRequest.clientInfo = i.client_info;
            else {
                const l = this.checkCcsCredentials();
                l && (this.authCodeRequest.ccsCredential = l)
            }
            const c = await this.authModule.acquireToken(this.authCodeRequest, i);
            return this.browserStorage.cleanRequestByState(n), c
        }
        checkCcsCredentials() {
            const e = this.browserStorage.getTemporaryCache(De.CCS_CREDENTIAL, !0);
            if (e) try { return JSON.parse(e) } catch { this.authModule.logger.error("Cache credential could not be parsed"), this.authModule.logger.errorPii(`Cache credential could not be parsed: ${e}`) }
            return null
        }
    }
    class IA extends Oo {
        constructor(e, n, r, o, i, s, a, c, l, h) { super(e, n, r, o, i, s, a, l, h), this.nativeStorage = c } async acquireToken(e) {
            const n = await W(this.initializeAuthorizationRequest.bind(this), N.StandardInteractionClientInitializeAuthorizationRequest, this.logger, this.performanceClient, this.correlationId)(e, oe.Redirect);
            this.browserStorage.updateCacheEntries(n.state, n.nonce, n.authority, n.loginHint || "", n.account || null);
            const r = this.initializeServerTelemetryManager(We.acquireTokenRedirect)
                , o = i => { i.persisted && (this.logger.verbose("Page was restored from back/forward cache. Clearing temporary cache."), this.browserStorage.cleanRequestByState(n.state), this.eventHandler.emitEvent(ie.RESTORE_FROM_BFCACHE, oe.Redirect)) };
            try {
                const i = await W(this.initializeAuthorizationCodeRequest.bind(this), N.StandardInteractionClientInitializeAuthorizationCodeRequest, this.logger, this.performanceClient, this.correlationId)(n)
                    , s = await W(this.createAuthCodeClient.bind(this), N.StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, this.correlationId)(r, n.authority, n.azureCloudOptions, n.account)
                    , a = new Id(s, this.browserStorage, i, this.logger, this.performanceClient)
                    , c = await s.getAuthCodeUrl({ ...n, nativeBroker: An.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, e.authenticationScheme) })
                    , l = this.getRedirectStartPage(e.redirectStartPage);
                return this.logger.verbosePii(`Redirect start page: ${l}`), window.addEventListener("pageshow", o), await a.initiateAuthRequest(c, { navigationClient: this.navigationClient, redirectTimeout: this.config.system.redirectNavigationTimeout, redirectStartPage: l, onRedirectNavigate: e.onRedirectNavigate })
            } catch (i) { throw i instanceof Qe && (i.setCorrelationId(this.correlationId), r.cacheFailedRequest(i)), window.removeEventListener("pageshow", o), this.browserStorage.cleanRequestByState(n.state), i }
        }
        async handleRedirectPromise(e = "", n) {
            const r = this.initializeServerTelemetryManager(We.handleRedirectPromise);
            try {
                if (!this.browserStorage.isInteractionInProgress(!0)) return this.logger.info("handleRedirectPromise called but there is no interaction in progress, returning null."), null;
                const [o, i] = this.getRedirectResponse(e || "");
                if (!o) return this.logger.info("handleRedirectPromise did not detect a response as a result of a redirect. Cleaning temporary cache."), this.browserStorage.cleanRequestByInteractionType(oe.Redirect), n.event.errorCode = "no_server_response", null;
                const s = this.browserStorage.getTemporaryCache(De.ORIGIN_URI, !0) || F.EMPTY_STRING
                    , a = Re.removeHashFromUrl(s)
                    , c = Re.removeHashFromUrl(window.location.href);
                if (a === c && this.config.auth.navigateToLoginRequestUrl) return this.logger.verbose("Current page is loginRequestUrl, handling response"), s.indexOf("#") > -1 && FE(s), await this.handleResponse(o, r);
                if (this.config.auth.navigateToLoginRequestUrl) {
                    if (!Ll() || this.config.system.allowRedirectInIframe) {
                        this.browserStorage.setTemporaryCache(De.URL_HASH, i, !0);
                        const l = { apiId: We.handleRedirectPromise, timeout: this.config.system.redirectNavigationTimeout, noHistory: !0 };
                        let h = !0;
                        if (!s || s === "null") {
                            const f = BE();
                            this.browserStorage.setTemporaryCache(De.ORIGIN_URI, f, !0), this.logger.warning("Unable to get valid login request url from cache, redirecting to home page"), h = await this.navigationClient.navigateInternal(f, l)
                        } else this.logger.verbose(`Navigating to loginRequestUrl: ${s}`), h = await this.navigationClient.navigateInternal(s, l);
                        if (!h) return await this.handleResponse(o, r)
                    }
                } else return this.logger.verbose("NavigateToLoginRequestUrl set to false, handling response"), await this.handleResponse(o, r);
                return null
            } catch (o) { throw o instanceof Qe && (o.setCorrelationId(this.correlationId), r.cacheFailedRequest(o)), this.browserStorage.cleanRequestByInteractionType(oe.Redirect), o }
        }
        getRedirectResponse(e) {
            this.logger.verbose("getRedirectResponseHash called");
            let n = e;
            n || (this.config.auth.OIDCOptions.serverResponseType === vi.QUERY ? n = window.location.search : n = window.location.hash);
            let r = us(n);
            if (r) { try { AA(r, this.browserCrypto, oe.Redirect) } catch (i) { return i instanceof Qe && this.logger.error(`Interaction type validation failed due to ${i.errorCode}: ${i.errorMessage}`), [null, ""] } return UE(window), this.logger.verbose("Hash contains known properties, returning response hash"), [r, n] }
            const o = this.browserStorage.getTemporaryCache(De.URL_HASH, !0);
            return this.browserStorage.removeItem(this.browserStorage.generateCacheKey(De.URL_HASH)), o && (r = us(o), r) ? (this.logger.verbose("Hash does not contain known properties, returning cached hash"), [r, o]) : [null, ""]
        }
        async handleResponse(e, n) {
            const r = e.state;
            if (!r) throw ee(wl);
            const o = this.browserStorage.getCachedRequest(r);
            if (this.logger.verbose("handleResponse called, retrieved cached request"), e.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), !this.nativeMessageHandler) throw ee(Ei);
                const c = new po(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, We.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, e.accountId, this.nativeStorage, o.correlationId)
                    , { userRequestState: l } = ln.parseRequestState(this.browserCrypto, r);
                return c.acquireToken({ ...o, state: l, prompt: void 0 })
                    .finally(() => { this.browserStorage.cleanRequestByState(r) })
            }
            const i = this.browserStorage.getCachedAuthority(r);
            if (!i) throw ee(Sl);
            const s = await W(this.createAuthCodeClient.bind(this), N.StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, this.correlationId)(n, i);
            return _n.removeThrottle(this.browserStorage, this.config.auth.clientId, o), new Id(s, this.browserStorage, o, this.logger, this.performanceClient)
                .handleCodeResponse(e, r)
        }
        async logout(e) {
            this.logger.verbose("logoutRedirect called");
            const n = this.initializeLogoutRequest(e)
                , r = this.initializeServerTelemetryManager(We.logout);
            try {
                this.eventHandler.emitEvent(ie.LOGOUT_START, oe.Redirect, e), await this.clearCacheOnLogout(n.account);
                const o = { apiId: We.logout, timeout: this.config.system.redirectNavigationTimeout, noHistory: !1 }
                    , i = await W(this.createAuthCodeClient.bind(this), N.StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, this.correlationId)(r, e && e.authority, void 0, e && e.account || void 0);
                if (i.authority.protocolMode === qn.OIDC) try { i.authority.endSessionEndpoint } catch { if (n.account?.homeAccountId) { this.browserStorage.removeAccount(n.account?.homeAccountId), this.eventHandler.emitEvent(ie.LOGOUT_SUCCESS, oe.Redirect, n); return } }
                const s = i.getLogoutUri(n);
                if (this.eventHandler.emitEvent(ie.LOGOUT_SUCCESS, oe.Redirect, n), e && typeof e.onRedirectNavigate == "function")
                    if (e.onRedirectNavigate(s) !== !1) { this.logger.verbose("Logout onRedirectNavigate did not return false, navigating"), this.browserStorage.getInteractionInProgress() || this.browserStorage.setInteractionInProgress(!0), await this.navigationClient.navigateExternal(s, o); return } else this.browserStorage.setInteractionInProgress(!1), this.logger.verbose("Logout onRedirectNavigate returned false, stopping navigation");
                else { this.browserStorage.getInteractionInProgress() || this.browserStorage.setInteractionInProgress(!0), await this.navigationClient.navigateExternal(s, o); return }
            } catch (o) { throw o instanceof Qe && (o.setCorrelationId(this.correlationId), r.cacheFailedRequest(o)), this.eventHandler.emitEvent(ie.LOGOUT_FAILURE, oe.Redirect, null, o), this.eventHandler.emitEvent(ie.LOGOUT_END, oe.Redirect), o } this.eventHandler.emitEvent(ie.LOGOUT_END, oe.Redirect)
        }
        getRedirectStartPage(e) { const n = e || window.location.href; return Re.getAbsoluteUrl(n, $n()) }
    }
    async function wA(t, e, n, r, o) { if (e.addQueueMeasurement(N.SilentHandlerInitiateAuthRequest, r), !t) throw n.info("Navigate url is empty"), ee(Ks); return o ? W(kA, N.SilentHandlerLoadFrame, n, e, r)(t, o, e, r) : $r(RA, N.SilentHandlerLoadFrameSync, n, e, r)(t) } async function SA(t, e, n, r, o, i, s) {
        return r.addQueueMeasurement(N.SilentHandlerMonitorIframeForHash, i), new Promise((a, c) => {
                e < ic && o.warning(`system.loadFrameTimeout or system.iframeHashTimeout set to lower (${e}ms) than the default (${ic}ms). This may result in timeouts.`);
                const l = window.setTimeout(() => { window.clearInterval(h), c(ee(_g)) }, e)
                    , h = window.setInterval(() => {
                        let f = "";
                        const g = t.contentWindow;
                        try { f = g ? g.location.href : "" } catch {}
                        if (!f || f === "about:blank") return;
                        let T = "";
                        g && (s === vi.QUERY ? T = g.location.search : T = g.location.hash), window.clearTimeout(l), window.clearInterval(h), a(T)
                    }, n)
            })
            .finally(() => { $r(OA, N.RemoveHiddenIframe, o, r, i)(t) })
    }
    
    function kA(t, e, n, r) {
        return n.addQueueMeasurement(N.SilentHandlerLoadFrame, r), new Promise((o, i) => {
            const s = Xg();
            window.setTimeout(() => { if (!s) { i("Unable to load iframe"); return } s.src = t, o(s) }, e)
        })
    }
    
    function RA(t) { const e = Xg(); return e.src = t, e }
    
    function Xg() { const t = document.createElement("iframe"); return t.className = "msalSilentIframe", t.style.visibility = "hidden", t.style.position = "absolute", t.style.width = t.style.height = "0", t.style.border = "0", t.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms"), document.body.appendChild(t), t }
    
    function OA(t) { document.body === t.parentNode && document.body.removeChild(t) } class NA extends Oo {
        constructor(e, n, r, o, i, s, a, c, l, h, f) { super(e, n, r, o, i, s, c, h, f), this.apiId = a, this.nativeStorage = l } async acquireToken(e) {
            this.performanceClient.addQueueMeasurement(N.SilentIframeClientAcquireToken, e.correlationId), !e.loginHint && !e.sid && (!e.account || !e.account.username) && this.logger.warning("No user hint provided. The authorization server may need more information to complete this request.");
            const n = { ...e };
            n.prompt ? n.prompt !== ht.NONE && n.prompt !== ht.NO_SESSION && (this.logger.warning(`SilentIframeClient. Replacing invalid prompt ${n.prompt} with ${ht.NONE}`), n.prompt = ht.NONE) : n.prompt = ht.NONE;
            const r = await W(this.initializeAuthorizationRequest.bind(this), N.StandardInteractionClientInitializeAuthorizationRequest, this.logger, this.performanceClient, e.correlationId)(n, oe.Silent);
            Gg(r.authority);
            const o = this.initializeServerTelemetryManager(this.apiId);
            try { const i = await W(this.createAuthCodeClient.bind(this), N.StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, e.correlationId)(o, r.authority, r.azureCloudOptions, r.account); return await W(this.silentTokenHelper.bind(this), N.SilentIframeClientTokenHelper, this.logger, this.performanceClient, e.correlationId)(i, r) } catch (i) { throw i instanceof Qe && (i.setCorrelationId(this.correlationId), o.cacheFailedRequest(i)), i }
        }
        logout() { return Promise.reject(ee(js)) } async silentTokenHelper(e, n) {
            const r = n.correlationId;
            this.performanceClient.addQueueMeasurement(N.SilentIframeClientTokenHelper, r);
            const o = await W(this.initializeAuthorizationCodeRequest.bind(this), N.StandardInteractionClientInitializeAuthorizationCodeRequest, this.logger, this.performanceClient, r)(n)
                , i = await W(e.getAuthCodeUrl.bind(e), N.GetAuthCodeUrl, this.logger, this.performanceClient, r)({ ...n, nativeBroker: An.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, n.authenticationScheme) })
                , s = new Fl(e, this.browserStorage, o, this.logger, this.performanceClient)
                , a = await W(wA, N.SilentHandlerInitiateAuthRequest, this.logger, this.performanceClient, r)(i, this.performanceClient, this.logger, r, this.config.system.navigateFrameWait)
                , c = this.config.auth.OIDCOptions.serverResponseType
                , l = await W(SA, N.SilentHandlerMonitorIframeForHash, this.logger, this.performanceClient, r)(a, this.config.system.iframeHashTimeout, this.config.system.pollIntervalMilliseconds, this.performanceClient, this.logger, r, c)
                , h = $r(Jg, N.DeserializeResponse, this.logger, this.performanceClient, this.correlationId)(l, c, this.logger);
            if (h.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), !this.nativeMessageHandler) throw ee(Ei);
                const f = new po(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.apiId, this.performanceClient, this.nativeMessageHandler, h.accountId, this.browserStorage, r)
                    , { userRequestState: g } = ln.parseRequestState(this.browserCrypto, n.state);
                return W(f.acquireToken.bind(f), N.NativeInteractionClientAcquireToken, this.logger, this.performanceClient, r)({ ...n, state: g, prompt: n.prompt || ht.NONE })
            }
            return W(s.handleCodeResponse.bind(s), N.HandleCodeResponse, this.logger, this.performanceClient, r)(h, n)
        }
    }
    class PA extends Oo {
        async acquireToken(e) {
            this.performanceClient.addQueueMeasurement(N.SilentRefreshClientAcquireToken, e.correlationId);
            const n = await W(Ul, N.InitializeBaseRequest, this.logger, this.performanceClient, e.correlationId)(e, this.config, this.performanceClient, this.logger)
                , r = { ...e, ...n };
            e.redirectUri && (r.redirectUri = this.getRedirectUri(e.redirectUri));
            const o = this.initializeServerTelemetryManager(We.acquireTokenSilent_silentFlow)
                , i = await this.createRefreshTokenClient(o, r.authority, r.azureCloudOptions, r.account);
            return W(i.acquireTokenByRefreshToken.bind(i), N.RefreshTokenClientAcquireTokenByRefreshToken, this.logger, this.performanceClient, e.correlationId)(r)
                .catch(s => { throw s.setCorrelationId(this.correlationId), o.cacheFailedRequest(s), s })
        }
        logout() { return Promise.reject(ee(js)) } async createRefreshTokenClient(e, n, r, o) { const i = await W(this.getClientConfiguration.bind(this), N.StandardInteractionClientGetClientConfiguration, this.logger, this.performanceClient, this.correlationId)(e, n, r, o); return new tc(i, this.performanceClient) }
    }
    class MA {
        constructor(e, n, r, o) { this.isBrowserEnvironment = typeof window < "u", this.config = e, this.storage = n, this.logger = r, this.cryptoObj = o } loadExternalTokens(e, n, r) {
            if (!this.isBrowserEnvironment) throw ee(kl);
            const o = n.id_token ? Br(n.id_token, wn) : void 0
                , i = { protocolMode: this.config.auth.protocolMode, knownAuthorities: this.config.auth.knownAuthorities, cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata, authorityMetadata: this.config.auth.authorityMetadata, skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache }
                , s = e.authority ? new At(At.generateAuthority(e.authority, e.azureCloudOptions), this.config.system.networkClient, this.storage, i, this.logger, e.correlationId || Vn()) : void 0
                , a = this.loadAccount(e, r.clientInfo || n.client_info || "", o, s)
                , c = this.loadIdToken(n, a.homeAccountId, a.environment, a.realm)
                , l = this.loadAccessToken(e, n, a.homeAccountId, a.environment, a.realm, r)
                , h = this.loadRefreshToken(n, a.homeAccountId, a.environment);
            return this.generateAuthenticationResult(e, { account: a, idToken: c, accessToken: l, refreshToken: h }, o, s)
        }
        loadAccount(e, n, r, o) {
            if (this.logger.verbose("TokenCache - loading account"), e.account) { const c = st.createFromAccountInfo(e.account); return this.storage.setAccount(c), c } else if (!o || !n && !r) throw this.logger.error("TokenCache - if an account is not provided on the request, authority and either clientInfo or idToken must be provided instead."), ee(kg);
            const i = st.generateHomeAccountId(n, o.authorityType, this.logger, this.cryptoObj, r)
                , s = r?.tid
                , a = El(this.storage, o, i, wn, r, n, o.hostnameAndPort, s, void 0, void 0, this.logger);
            return this.storage.setAccount(a), a
        }
        loadIdToken(e, n, r, o) {
            if (!e.id_token) return this.logger.verbose("TokenCache - no id token found in response"), null;
            this.logger.verbose("TokenCache - loading id token");
            const i = Hs(n, r, e.id_token, this.config.auth.clientId, o);
            return this.storage.setIdTokenCredential(i), i
        }
        loadAccessToken(e, n, r, o, i, s) {
            if (n.access_token)
                if (n.expires_in) { if (!n.scope && (!e.scopes || !e.scopes.length)) return this.logger.error("TokenCache - scopes not specified in the request or response. Cannot add token to the cache."), null } else return this.logger.error("TokenCache - no expiration set on the access token. Cannot add it to the cache."), null;
            else return this.logger.verbose("TokenCache - no access token found in response"), null;
            this.logger.verbose("TokenCache - loading access token");
            const a = n.scope ? Xe.fromString(n.scope) : new Xe(e.scopes)
                , c = s.expiresOn || n.expires_in + new Date()
                .getTime() / 1e3
                , l = s.extendedExpiresOn || (n.ext_expires_in || n.expires_in) + new Date()
                .getTime() / 1e3
                , h = Bs(r, o, n.access_token, this.config.auth.clientId, i, a.printScopes(), c, l, wn);
            return this.storage.setAccessTokenCredential(h), h
        }
        loadRefreshToken(e, n, r) {
            if (!e.refresh_token) return this.logger.verbose("TokenCache - no refresh token found in response"), null;
            this.logger.verbose("TokenCache - loading refresh token");
            const o = Xp(n, r, e.refresh_token, this.config.auth.clientId, e.foci, void 0, e.refresh_token_expires_in);
            return this.storage.setRefreshTokenCredential(o), o
        }
        generateAuthenticationResult(e, n, r, o) {
            let i = ""
                , s = []
                , a = null
                , c;
            n?.accessToken && (i = n.accessToken.secret, s = Xe.fromString(n.accessToken.target)
                .asArray(), a = new Date(Number(n.accessToken.expiresOn) * 1e3), c = new Date(Number(n.accessToken.extendedExpiresOn) * 1e3));
            const l = n.account;
            return { authority: o ? o.canonicalAuthority : "", uniqueId: n.account.localAccountId, tenantId: n.account.realm, scopes: s, account: l.getAccountInfo(), idToken: n.idToken?.secret || "", idTokenClaims: r || {}, accessToken: i, fromCache: !0, expiresOn: a, correlationId: e.correlationId || "", requestId: "", extExpiresOn: c, familyId: n.refreshToken?.familyId || "", tokenType: n?.accessToken?.tokenType || "", state: e.state || "", cloudGraphHostName: l.cloudGraphHostName || "", msGraphHost: l.msGraphHost || "", fromNativeBroker: !1 }
        }
    }
    class LA extends ag { constructor(e) { super(e), this.includeRedirectUri = !1 } } class DA extends Oo {
        constructor(e, n, r, o, i, s, a, c, l, h) { super(e, n, r, o, i, s, c, l, h), this.apiId = a } async acquireToken(e) {
            if (!e.code) throw ee(Rg);
            const n = await W(this.initializeAuthorizationRequest.bind(this), N.StandardInteractionClientInitializeAuthorizationRequest, this.logger, this.performanceClient, e.correlationId)(e, oe.Silent)
                , r = this.initializeServerTelemetryManager(this.apiId);
            try {
                const o = { ...n, code: e.code }
                    , i = await W(this.getClientConfiguration.bind(this), N.StandardInteractionClientGetClientConfiguration, this.logger, this.performanceClient, e.correlationId)(r, n.authority, n.azureCloudOptions, n.account)
                    , s = new LA(i);
                this.logger.verbose("Auth code client created");
                const a = new Fl(s, this.browserStorage, o, this.logger, this.performanceClient);
                return await W(a.handleCodeResponseFromServer.bind(a), N.HandleCodeResponseFromServer, this.logger, this.performanceClient, e.correlationId)({ code: e.code, msgraph_host: e.msGraphHost, cloud_graph_host_name: e.cloudGraphHostName, cloud_instance_host_name: e.cloudInstanceHostName }, n, !1)
            } catch (o) { throw o instanceof Qe && (o.setCorrelationId(this.correlationId), r.cacheFailedRequest(o)), o }
        }
        logout() { return Promise.reject(ee(js)) }
    }
    
    function mn(t) { const e = t?.idTokenClaims; if (e?.tfp || e?.acr) return "B2C"; if (e?.tid) { if (e?.tid === "9188040d-6c67-4c5b-b112-36a304b66dad") return "MSA" } else return; return "AAD" }
    
    function ji(t, e) { try { Dl(t) } catch (n) { throw e.end({ success: !1 }, n), n } } class Gs {
        constructor(e) {
            this.operatingContext = e, this.isBrowserEnvironment = this.operatingContext.isBrowserEnvironment(), this.config = e.getConfig(), this.initialized = !1, this.logger = this.operatingContext.getLogger(), this.networkClient = this.config.system.networkClient, this.navigationClient = this.config.system.navigationClient, this.redirectResponse = new Map, this.hybridAuthCodeResponses = new Map, this.performanceClient = this.config.telemetry.client, this.browserCrypto = this.isBrowserEnvironment ? new To(this.logger, this.performanceClient) : hs, this.eventHandler = new cA(this.logger, this.browserCrypto), this.browserStorage = this.isBrowserEnvironment ? new ac(this.config.auth.clientId, this.config.cache, this.browserCrypto, this.logger, cv(this.config.auth), this.performanceClient) : eA(this.config.auth.clientId, this.logger);
            const n = { cacheLocation: rt.MemoryStorage, temporaryCacheLocation: rt.MemoryStorage, storeAuthStateInCookie: !1, secureCookies: !1, cacheMigrationEnabled: !1, claimsBasedCachingEnabled: !1 };
            this.nativeInternalStorage = new ac(this.config.auth.clientId, n, this.browserCrypto, this.logger, void 0, this.performanceClient), this.tokenCache = new MA(this.config, this.browserStorage, this.logger, this.browserCrypto), this.activeSilentTokenRequests = new Map, this.trackPageVisibility = this.trackPageVisibility.bind(this), this.trackPageVisibilityWithMeasurement = this.trackPageVisibilityWithMeasurement.bind(this)
        }
        static async createController(e, n) { const r = new Gs(e); return await r.initialize(n), r } trackPageVisibility(e) { e && (this.logger.info("Perf: Visibility change detected"), this.performanceClient.incrementFields({ visibilityChangeCount: 1 }, e)) } async initialize(e) {
            if (this.logger.trace("initialize called"), this.initialized) { this.logger.info("initialize has already been called, exiting early."); return }
            const n = e?.correlationId || this.getRequestCorrelationId()
                , r = this.config.system.allowNativeBroker
                , o = this.performanceClient.startMeasurement(N.InitializeClientApplication, n);
            if (this.eventHandler.emitEvent(ie.INITIALIZE_START), r) try { this.nativeExtensionProvider = await An.createProvider(this.logger, this.config.system.nativeBrokerHandshakeTimeout, this.performanceClient) } catch (i) { this.logger.verbose(i) } this.config.cache.claimsBasedCachingEnabled || (this.logger.verbose("Claims-based caching is disabled. Clearing the previous cache with claims"), await W(this.browserStorage.clearTokensAndKeysWithClaims.bind(this.browserStorage), N.ClearTokensAndKeysWithClaims, this.logger, this.performanceClient, n)(this.performanceClient, n)), this.initialized = !0, this.eventHandler.emitEvent(ie.INITIALIZE_END), o.end({ allowNativeBroker: r, success: !0 })
        }
        async handleRedirectPromise(e) { if (this.logger.verbose("handleRedirectPromise called"), Vg(this.initialized), this.isBrowserEnvironment) { const n = e || ""; let r = this.redirectResponse.get(n); return typeof r > "u" ? (r = this.handleRedirectPromiseInternal(e), this.redirectResponse.set(n, r), this.logger.verbose("handleRedirectPromise has been called for the first time, storing the promise")) : this.logger.verbose("handleRedirectPromise has been called previously, returning the result from the first call"), r } return this.logger.verbose("handleRedirectPromise returns null, not browser environment"), null } async handleRedirectPromiseInternal(e) {
            const n = this.getAllAccounts()
                , r = this.browserStorage.getCachedNativeRequest()
                , o = r && An.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider) && this.nativeExtensionProvider && !e
                , i = o ? r?.correlationId : this.browserStorage.getTemporaryCache(De.CORRELATION_ID, !0) || ""
                , s = this.performanceClient.startMeasurement(N.AcquireTokenRedirect, i);
            this.eventHandler.emitEvent(ie.HANDLE_REDIRECT_START, oe.Redirect);
            let a;
            if (o && this.nativeExtensionProvider) {
                this.logger.trace("handleRedirectPromise - acquiring token from native platform");
                const c = new po(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, We.handleRedirectPromise, this.performanceClient, this.nativeExtensionProvider, r.accountId, this.nativeInternalStorage, r.correlationId);
                a = W(c.handleRedirectPromise.bind(c), N.HandleNativeRedirectPromiseMeasurement, this.logger, this.performanceClient, s.event.correlationId)(this.performanceClient, s.event.correlationId)
            } else {
                this.logger.trace("handleRedirectPromise - acquiring token from web flow");
                const c = this.createRedirectClient(i);
                a = W(c.handleRedirectPromise.bind(c), N.HandleRedirectPromiseMeasurement, this.logger, this.performanceClient, s.event.correlationId)(e, s)
            }
            return a.then(c => (c ? (n.length < this.getAllAccounts()
                    .length ? (this.eventHandler.emitEvent(ie.LOGIN_SUCCESS, oe.Redirect, c), this.logger.verbose("handleRedirectResponse returned result, login success")) : (this.eventHandler.emitEvent(ie.ACQUIRE_TOKEN_SUCCESS, oe.Redirect, c), this.logger.verbose("handleRedirectResponse returned result, acquire token success")), s.end({ success: !0, accountType: mn(c.account) })) : s.event.errorCode ? s.end({ success: !1 }) : s.discard(), this.eventHandler.emitEvent(ie.HANDLE_REDIRECT_END, oe.Redirect), c))
                .catch(c => { const l = c; throw n.length > 0 ? this.eventHandler.emitEvent(ie.ACQUIRE_TOKEN_FAILURE, oe.Redirect, null, l) : this.eventHandler.emitEvent(ie.LOGIN_FAILURE, oe.Redirect, null, l), this.eventHandler.emitEvent(ie.HANDLE_REDIRECT_END, oe.Redirect), s.end({ success: !1 }, l), c })
        }
        async acquireTokenRedirect(e) {
            const n = this.getRequestCorrelationId(e);
            this.logger.verbose("acquireTokenRedirect called", n);
            const r = this.performanceClient.startMeasurement(N.AcquireTokenPreRedirect, n);
            r.add({ accountType: mn(e.account), scenarioId: e.scenarioId });
            const o = e.onRedirectNavigate;
            e.onRedirectNavigate = s => { const a = typeof o == "function" ? o(s) : void 0; return a !== !1 ? r.end({ success: !0 }) : r.discard(), a };
            const i = this.getAllAccounts()
                .length > 0;
            try {
                Ed(this.initialized, this.config), this.browserStorage.setInteractionInProgress(!0), i ? this.eventHandler.emitEvent(ie.ACQUIRE_TOKEN_START, oe.Redirect, e) : this.eventHandler.emitEvent(ie.LOGIN_START, oe.Redirect, e);
                let s;
                return this.nativeExtensionProvider && this.canUseNative(e) ? s = new po(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, We.acquireTokenRedirect, this.performanceClient, this.nativeExtensionProvider, this.getNativeAccountId(e), this.nativeInternalStorage, n)
                    .acquireTokenRedirect(e, r)
                    .catch(c => {
                        if (c instanceof Tn && Qr(c)) return this.nativeExtensionProvider = void 0, this.createRedirectClient(n)
                            .acquireToken(e);
                        if (c instanceof zt) return this.logger.verbose("acquireTokenRedirect - Resolving interaction required error thrown by native broker by falling back to web flow"), this.createRedirectClient(n)
                            .acquireToken(e);
                        throw this.browserStorage.setInteractionInProgress(!1), c
                    }) : s = this.createRedirectClient(n)
                    .acquireToken(e), await s
            } catch (s) { throw r.end({ success: !1 }, s), i ? this.eventHandler.emitEvent(ie.ACQUIRE_TOKEN_FAILURE, oe.Redirect, null, s) : this.eventHandler.emitEvent(ie.LOGIN_FAILURE, oe.Redirect, null, s), s }
        }
        acquireTokenPopup(e) {
            const n = this.getRequestCorrelationId(e)
                , r = this.performanceClient.startMeasurement(N.AcquireTokenPopup, n);
            r.add({ scenarioId: e.scenarioId, accountType: mn(e.account) });
            try { this.logger.verbose("acquireTokenPopup called", n), ji(this.initialized, r), this.browserStorage.setInteractionInProgress(!0) } catch (s) { return Promise.reject(s) }
            const o = this.getAllAccounts();
            o.length > 0 ? this.eventHandler.emitEvent(ie.ACQUIRE_TOKEN_START, oe.Popup, e) : this.eventHandler.emitEvent(ie.LOGIN_START, oe.Popup, e);
            let i;
            return this.canUseNative(e) ? i = this.acquireTokenNative({ ...e, correlationId: n }, We.acquireTokenPopup)
                .then(s => (this.browserStorage.setInteractionInProgress(!1), r.end({ success: !0, isNativeBroker: !0, requestId: s.requestId, accountType: mn(s.account) }), s))
                .catch(s => {
                    if (s instanceof Tn && Qr(s)) return this.nativeExtensionProvider = void 0, this.createPopupClient(n)
                        .acquireToken(e);
                    if (s instanceof zt) return this.logger.verbose("acquireTokenPopup - Resolving interaction required error thrown by native broker by falling back to web flow"), this.createPopupClient(n)
                        .acquireToken(e);
                    throw this.browserStorage.setInteractionInProgress(!1), s
                }) : i = this.createPopupClient(n)
                .acquireToken(e), i.then(s => (o.length < this.getAllAccounts()
                    .length ? this.eventHandler.emitEvent(ie.LOGIN_SUCCESS, oe.Popup, s) : this.eventHandler.emitEvent(ie.ACQUIRE_TOKEN_SUCCESS, oe.Popup, s), r.end({ success: !0, requestId: s.requestId, accessTokenSize: s.accessToken.length, idTokenSize: s.idToken.length, accountType: mn(s.account) }), s))
                .catch(s => (o.length > 0 ? this.eventHandler.emitEvent(ie.ACQUIRE_TOKEN_FAILURE, oe.Popup, null, s) : this.eventHandler.emitEvent(ie.LOGIN_FAILURE, oe.Popup, null, s), r.end({ success: !1 }, s), Promise.reject(s)))
        }
        trackPageVisibilityWithMeasurement() {
            const e = this.ssoSilentMeasurement || this.acquireTokenByCodeAsyncMeasurement;
            e && (this.logger.info("Perf: Visibility change detected in ", e.event.name), e.increment({ visibilityChangeCount: 1 }))
        }
        async ssoSilent(e) {
            const n = this.getRequestCorrelationId(e)
                , r = { ...e, prompt: e.prompt, correlationId: n };
            this.ssoSilentMeasurement = this.performanceClient.startMeasurement(N.SsoSilent, n), this.ssoSilentMeasurement?.add({ scenarioId: e.scenarioId, accountType: mn(e.account) }), ji(this.initialized, this.ssoSilentMeasurement), this.ssoSilentMeasurement?.increment({ visibilityChangeCount: 0 }), document.addEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement), this.logger.verbose("ssoSilent called", n), this.eventHandler.emitEvent(ie.SSO_SILENT_START, oe.Silent, r);
            let o;
            return this.canUseNative(r) ? o = this.acquireTokenNative(r, We.ssoSilent)
                .catch(i => {
                    if (i instanceof Tn && Qr(i)) return this.nativeExtensionProvider = void 0, this.createSilentIframeClient(r.correlationId)
                        .acquireToken(r);
                    throw i
                }) : o = this.createSilentIframeClient(r.correlationId)
                .acquireToken(r), o.then(i => (this.eventHandler.emitEvent(ie.SSO_SILENT_SUCCESS, oe.Silent, i), this.ssoSilentMeasurement?.end({ success: !0, isNativeBroker: i.fromNativeBroker, requestId: i.requestId, accessTokenSize: i.accessToken.length, idTokenSize: i.idToken.length, accountType: mn(i.account) }), i))
                .catch(i => { throw this.eventHandler.emitEvent(ie.SSO_SILENT_FAILURE, oe.Silent, null, i), this.ssoSilentMeasurement?.end({ success: !1 }, i), i })
                .finally(() => { document.removeEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement) })
        }
        async acquireTokenByCode(e) {
            const n = this.getRequestCorrelationId(e);
            this.logger.trace("acquireTokenByCode called", n);
            const r = this.performanceClient.startMeasurement(N.AcquireTokenByCode, n);
            ji(this.initialized, r), this.eventHandler.emitEvent(ie.ACQUIRE_TOKEN_BY_CODE_START, oe.Silent, e), r.add({ scenarioId: e.scenarioId });
            try {
                if (e.code && e.nativeAccountId) throw ee(Ng);
                if (e.code) {
                    const o = e.code;
                    let i = this.hybridAuthCodeResponses.get(o);
                    return i ? (this.logger.verbose("Existing acquireTokenByCode request found", n), r.discard()) : (this.logger.verbose("Initiating new acquireTokenByCode request", n), i = this.acquireTokenByCodeAsync({ ...e, correlationId: n })
                        .then(s => (this.eventHandler.emitEvent(ie.ACQUIRE_TOKEN_BY_CODE_SUCCESS, oe.Silent, s), this.hybridAuthCodeResponses.delete(o), r.end({ success: !0, isNativeBroker: s.fromNativeBroker, requestId: s.requestId, accessTokenSize: s.accessToken.length, idTokenSize: s.idToken.length, accountType: mn(s.account) }), s))
                        .catch(s => { throw this.hybridAuthCodeResponses.delete(o), this.eventHandler.emitEvent(ie.ACQUIRE_TOKEN_BY_CODE_FAILURE, oe.Silent, null, s), r.end({ success: !1 }, s), s }), this.hybridAuthCodeResponses.set(o, i)), await i
                } else if (e.nativeAccountId)
                    if (this.canUseNative(e, e.nativeAccountId)) {
                        const o = await this.acquireTokenNative({ ...e, correlationId: n }, We.acquireTokenByCode, e.nativeAccountId)
                            .catch(i => { throw i instanceof Tn && Qr(i) && (this.nativeExtensionProvider = void 0), i });
                        return r.end({ accountType: mn(o.account), success: !0 }), o
                    } else throw ee(Pg);
                else throw ee(Og)
            } catch (o) { throw this.eventHandler.emitEvent(ie.ACQUIRE_TOKEN_BY_CODE_FAILURE, oe.Silent, null, o), r.end({ success: !1 }, o), o }
        }
        async acquireTokenByCodeAsync(e) {
            return this.logger.trace("acquireTokenByCodeAsync called", e.correlationId), this.acquireTokenByCodeAsyncMeasurement = this.performanceClient.startMeasurement(N.AcquireTokenByCodeAsync, e.correlationId), this.acquireTokenByCodeAsyncMeasurement?.increment({ visibilityChangeCount: 0 }), document.addEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement), await this.createSilentAuthCodeClient(e.correlationId)
                .acquireToken(e)
                .then(o => (this.acquireTokenByCodeAsyncMeasurement?.end({ success: !0, fromCache: o.fromCache, isNativeBroker: o.fromNativeBroker, requestId: o.requestId }), o))
                .catch(o => { throw this.acquireTokenByCodeAsyncMeasurement?.end({ success: !1 }, o), o })
                .finally(() => { document.removeEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement) })
        }
        async acquireTokenFromCache(e, n) {
            switch (this.performanceClient.addQueueMeasurement(N.AcquireTokenFromCache, e.correlationId), n) {
            case jt.Default:
            case jt.AccessToken:
            case jt.AccessTokenAndRefreshToken:
                const r = this.createSilentCacheClient(e.correlationId);
                return W(r.acquireToken.bind(r), N.SilentCacheClientAcquireToken, this.logger, this.performanceClient, e.correlationId)(e);
            default:
                throw q(Bn)
            }
        }
        async acquireTokenByRefreshToken(e, n) {
            switch (this.performanceClient.addQueueMeasurement(N.AcquireTokenByRefreshToken, e.correlationId), n) {
            case jt.Default:
            case jt.AccessTokenAndRefreshToken:
            case jt.RefreshToken:
            case jt.RefreshTokenAndNetwork:
                const r = this.createSilentRefreshClient(e.correlationId);
                return W(r.acquireToken.bind(r), N.SilentRefreshClientAcquireToken, this.logger, this.performanceClient, e.correlationId)(e);
            default:
                throw q(Bn)
            }
        }
        async acquireTokenBySilentIframe(e) { this.performanceClient.addQueueMeasurement(N.AcquireTokenBySilentIframe, e.correlationId); const n = this.createSilentIframeClient(e.correlationId); return W(n.acquireToken.bind(n), N.SilentIframeClientAcquireToken, this.logger, this.performanceClient, e.correlationId)(e) } async logout(e) { const n = this.getRequestCorrelationId(e); return this.logger.warning("logout API is deprecated and will be removed in msal-browser v3.0.0. Use logoutRedirect instead.", n), this.logoutRedirect({ correlationId: n, ...e }) } async logoutRedirect(e) {
            const n = this.getRequestCorrelationId(e);
            return Ed(this.initialized, this.config), this.browserStorage.setInteractionInProgress(!0), this.createRedirectClient(n)
                .logout(e)
        }
        logoutPopup(e) {
            try {
                const n = this.getRequestCorrelationId(e);
                return Dl(this.initialized), this.browserStorage.setInteractionInProgress(!0), this.createPopupClient(n)
                    .logout(e)
            } catch (n) { return Promise.reject(n) }
        }
        async clearCache(e) {
            const n = this.getRequestCorrelationId(e);
            return this.createSilentCacheClient(n)
                .logout(e)
        }
        getAllAccounts(e) { return tA(this.logger, this.browserStorage, this.isBrowserEnvironment, e) } getAccount(e) { return nA(e, this.logger, this.browserStorage) } getAccountByUsername(e) { return rA(e, this.logger, this.browserStorage) } getAccountByHomeId(e) { return oA(e, this.logger, this.browserStorage) } getAccountByLocalId(e) { return iA(e, this.logger, this.browserStorage) } setActiveAccount(e) { sA(e, this.browserStorage) } getActiveAccount() { return aA(this.browserStorage) } async hydrateCache(e, n) { this.logger.verbose("hydrateCache called"); const r = st.createFromAccountInfo(e.account, e.cloudGraphHostName, e.msGraphHost); return this.browserStorage.setAccount(r), e.fromNativeBroker ? (this.logger.verbose("Response was from native broker, storing in-memory"), this.nativeInternalStorage.hydrateCache(e, n)) : this.browserStorage.hydrateCache(e, n) } async acquireTokenNative(e, n, r) {
            if (this.logger.trace("acquireTokenNative called"), !this.nativeExtensionProvider) throw ee(Ei);
            return new po(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, n, this.performanceClient, this.nativeExtensionProvider, r || this.getNativeAccountId(e), this.nativeInternalStorage, e.correlationId)
                .acquireToken(e)
        }
        canUseNative(e, n) {
            if (this.logger.trace("canUseNative called"), !An.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, e.authenticationScheme)) return this.logger.trace("canUseNative: isNativeAvailable returned false, returning false"), !1;
            if (e.prompt) switch (e.prompt) {
            case ht.NONE:
            case ht.CONSENT:
            case ht.LOGIN:
                this.logger.trace("canUseNative: prompt is compatible with native flow");
                break;
            default:
                return this.logger.trace(`canUseNative: prompt = ${e.prompt} is not compatible with native flow, returning false`), !1
            }
            return !n && !this.getNativeAccountId(e) ? (this.logger.trace("canUseNative: nativeAccountId is not available, returning false"), !1) : !0
        }
        getNativeAccountId(e) { const n = e.account || this.getAccount({ loginHint: e.loginHint, sid: e.sid }) || this.getActiveAccount(); return n && n.nativeAccountId || "" } createPopupClient(e) { return new bA(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e) } createRedirectClient(e) { return new IA(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e) } createSilentIframeClient(e) { return new NA(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, We.ssoSilent, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e) } createSilentCacheClient(e) { return new Qg(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, e) } createSilentRefreshClient(e) { return new PA(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, e) } createSilentAuthCodeClient(e) { return new DA(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, We.acquireTokenByCode, this.performanceClient, this.nativeExtensionProvider, e) } addEventCallback(e) { return this.eventHandler.addEventCallback(e) } removeEventCallback(e) { this.eventHandler.removeEventCallback(e) } addPerformanceCallback(e) { return this.performanceClient.addPerformanceCallback(e) } removePerformanceCallback(e) { return this.performanceClient.removePerformanceCallback(e) } enableAccountStorageEvents() { this.eventHandler.enableAccountStorageEvents() } disableAccountStorageEvents() { this.eventHandler.disableAccountStorageEvents() } getTokenCache() { return this.tokenCache } getLogger() { return this.logger } setLogger(e) { this.logger = e } initializeWrapperLibrary(e, n) { this.browserStorage.setWrapperMetadata(e, n) } setNavigationClient(e) { this.navigationClient = e } getConfiguration() { return this.config } getPerformanceClient() { return this.performanceClient } isBrowserEnv() { return this.isBrowserEnvironment } getEventHandler() { return this.eventHandler } getRequestCorrelationId(e) { return e?.correlationId ? e.correlationId : this.isBrowserEnvironment ? Vn() : F.EMPTY_STRING } async loginRedirect(e) { const n = this.getRequestCorrelationId(e); return this.logger.verbose("loginRedirect called", n), this.acquireTokenRedirect({ correlationId: n, ...e || _d }) } loginPopup(e) { const n = this.getRequestCorrelationId(e); return this.logger.verbose("loginPopup called", n), this.acquireTokenPopup({ correlationId: n, ...e || _d }) } async acquireTokenSilent(e) {
            const n = this.getRequestCorrelationId(e)
                , r = this.performanceClient.startMeasurement(N.AcquireTokenSilent, n);
            r.add({ cacheLookupPolicy: e.cacheLookupPolicy, scenarioId: e.scenarioId }), ji(this.initialized, r), this.logger.verbose("acquireTokenSilent called", n);
            const o = e.account || this.getActiveAccount();
            if (!o) throw ee(Ag);
            r.add({ accountType: mn(o) });
            const i = { clientId: this.config.auth.clientId, authority: e.authority || F.EMPTY_STRING, scopes: e.scopes, homeAccountIdentifier: o.homeAccountId, claims: e.claims, authenticationScheme: e.authenticationScheme, resourceRequestMethod: e.resourceRequestMethod, resourceRequestUri: e.resourceRequestUri, shrClaims: e.shrClaims, sshKid: e.sshKid, shrOptions: e.shrOptions }
                , s = JSON.stringify(i)
                , a = this.activeSilentTokenRequests.get(s);
            if (typeof a > "u") {
                this.logger.verbose("acquireTokenSilent called for the first time, storing active request", n);
                const c = W(this.acquireTokenSilentAsync.bind(this), N.AcquireTokenSilentAsync, this.logger, this.performanceClient, n)({ ...e, correlationId: n }, o)
                    .then(l => (this.activeSilentTokenRequests.delete(s), r.end({ success: !0, fromCache: l.fromCache, isNativeBroker: l.fromNativeBroker, cacheLookupPolicy: e.cacheLookupPolicy, requestId: l.requestId, accessTokenSize: l.accessToken.length, idTokenSize: l.idToken.length }), l))
                    .catch(l => { throw this.activeSilentTokenRequests.delete(s), r.end({ success: !1 }, l), l });
                return this.activeSilentTokenRequests.set(s, c), { ...await c, state: e.state }
            } else return this.logger.verbose("acquireTokenSilent has been called previously, returning the result from the first call", n), r.discard(), { ...await a, state: e.state }
        }
        async acquireTokenSilentAsync(e, n) {
            const r = () => this.trackPageVisibility(e.correlationId);
            this.performanceClient.addQueueMeasurement(N.AcquireTokenSilentAsync, e.correlationId), this.eventHandler.emitEvent(ie.ACQUIRE_TOKEN_START, oe.Silent, e), e.correlationId && this.performanceClient.incrementFields({ visibilityChangeCount: 0 }, e.correlationId), document.addEventListener("visibilitychange", r);
            const o = await W(fA, N.InitializeSilentRequest, this.logger, this.performanceClient, e.correlationId)(e, n, this.config, this.performanceClient, this.logger)
                , i = e.cacheLookupPolicy || jt.Default;
            return this.acquireTokenSilentNoIframe(o, i)
                .catch(async a => {
                    if (xA(a, i))
                        if (this.activeIframeRequest)
                            if (i !== jt.Skip) {
                                const [l, h] = this.activeIframeRequest;
                                this.logger.verbose(`Iframe request is already in progress, awaiting resolution for request with correlationId: ${h}`, o.correlationId);
                                const f = this.performanceClient.startMeasurement(N.AwaitConcurrentIframe, o.correlationId);
                                f.add({ awaitIframeCorrelationId: h });
                                const g = await l;
                                if (f.end({ success: g }), g) return this.logger.verbose(`Parallel iframe request with correlationId: ${h} succeeded. Retrying cache and/or RT redemption`, o.correlationId), this.acquireTokenSilentNoIframe(o, i);
                                throw this.logger.info(`Iframe request with correlationId: ${h} failed. Interaction is required.`), a
                            } else return this.logger.warning("Another iframe request is currently in progress and CacheLookupPolicy is set to Skip. This may result in degraded performance and/or reliability for both calls. Please consider changing the CacheLookupPolicy to take advantage of request queuing and token cache.", o.correlationId), W(this.acquireTokenBySilentIframe.bind(this), N.AcquireTokenBySilentIframe, this.logger, this.performanceClient, o.correlationId)(o);
                    else {
                        let l;
                        return this.activeIframeRequest = [new Promise(h => { l = h }), o.correlationId], this.logger.verbose("Refresh token expired/invalid or CacheLookupPolicy is set to Skip, attempting acquire token by iframe.", o.correlationId), W(this.acquireTokenBySilentIframe.bind(this), N.AcquireTokenBySilentIframe, this.logger, this.performanceClient, o.correlationId)(o)
                            .then(h => (l(!0), h))
                            .catch(h => { throw l(!1), h })
                            .finally(() => { this.activeIframeRequest = void 0 })
                    } else throw a
                })
                .then(a => (this.eventHandler.emitEvent(ie.ACQUIRE_TOKEN_SUCCESS, oe.Silent, a), e.correlationId && this.performanceClient.addFields({ fromCache: a.fromCache, isNativeBroker: a.fromNativeBroker, requestId: a.requestId }, e.correlationId), a))
                .catch(a => { throw this.eventHandler.emitEvent(ie.ACQUIRE_TOKEN_FAILURE, oe.Silent, null, a), a })
                .finally(() => { document.removeEventListener("visibilitychange", r) })
        }
        async acquireTokenSilentNoIframe(e, n) {
            return An.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, e.authenticationScheme) && e.account.nativeAccountId ? (this.logger.verbose("acquireTokenSilent - attempting to acquire token from native platform"), this.acquireTokenNative(e, We.acquireTokenSilent_silentFlow)
                .catch(async r => { throw r instanceof Tn && Qr(r) ? (this.logger.verbose("acquireTokenSilent - native platform unavailable, falling back to web flow"), this.nativeExtensionProvider = void 0, q(Bn)) : r })) : (this.logger.verbose("acquireTokenSilent - attempting to acquire token from web flow"), W(this.acquireTokenFromCache.bind(this), N.AcquireTokenFromCache, this.logger, this.performanceClient, e.correlationId)(e, n)
                .catch(r => { if (n === jt.AccessToken) throw r; return this.eventHandler.emitEvent(ie.ACQUIRE_TOKEN_NETWORK_START, oe.Silent, e), W(this.acquireTokenByRefreshToken.bind(this), N.AcquireTokenByRefreshToken, this.logger, this.performanceClient, e.correlationId)(e, n) }))
        }
    }
    
    function xA(t, e) {
        const n = !(t instanceof zt && t.subError !== $s)
            , r = t.errorCode === Jt.INVALID_GRANT_ERROR || t.errorCode === Bn
            , o = n && r || t.errorCode === gs || t.errorCode === vl
            , i = wE.includes(e);
        return o && i
    }
    async function UA(t, e) { const n = new Fr(t); return await n.initialize(), Gs.createController(n, e) } class Hl { static async createPublicClientApplication(e) { const n = await UA(e); return new Hl(e, n) } constructor(e, n) { this.controller = n || new Gs(new Fr(e)) } async initialize(e) { return this.controller.initialize(e) } async acquireTokenPopup(e) { return this.controller.acquireTokenPopup(e) } acquireTokenRedirect(e) { return this.controller.acquireTokenRedirect(e) } acquireTokenSilent(e) { return this.controller.acquireTokenSilent(e) } acquireTokenByCode(e) { return this.controller.acquireTokenByCode(e) } addEventCallback(e) { return this.controller.addEventCallback(e) } removeEventCallback(e) { return this.controller.removeEventCallback(e) } addPerformanceCallback(e) { return this.controller.addPerformanceCallback(e) } removePerformanceCallback(e) { return this.controller.removePerformanceCallback(e) } enableAccountStorageEvents() { this.controller.enableAccountStorageEvents() } disableAccountStorageEvents() { this.controller.disableAccountStorageEvents() } getAccount(e) { return this.controller.getAccount(e) } getAccountByHomeId(e) { return this.controller.getAccountByHomeId(e) } getAccountByLocalId(e) { return this.controller.getAccountByLocalId(e) } getAccountByUsername(e) { return this.controller.getAccountByUsername(e) } getAllAccounts(e) { return this.controller.getAllAccounts(e) } handleRedirectPromise(e) { return this.controller.handleRedirectPromise(e) } loginPopup(e) { return this.controller.loginPopup(e) } loginRedirect(e) { return this.controller.loginRedirect(e) } logout(e) { return this.controller.logout(e) } logoutRedirect(e) { return this.controller.logoutRedirect(e) } logoutPopup(e) { return this.controller.logoutPopup(e) } ssoSilent(e) { return this.controller.ssoSilent(e) } getTokenCache() { return this.controller.getTokenCache() } getLogger() { return this.controller.getLogger() } setLogger(e) { this.controller.setLogger(e) } setActiveAccount(e) { this.controller.setActiveAccount(e) } getActiveAccount() { return this.controller.getActiveAccount() } initializeWrapperLibrary(e, n) { return this.controller.initializeWrapperLibrary(e, n) } setNavigationClient(e) { this.controller.setNavigationClient(e) } getConfiguration() { return this.controller.getConfiguration() } async hydrateCache(e, n) { return this.controller.hydrateCache(e, n) } clearCache(e) { return this.controller.clearCache(e) } }
    const FA = "modulepreload"
        , HA = function (t) { return "/" + t }
        , wd = {}
        , Ot = function (e, n, r) {
            let o = Promise.resolve();
            if (n && n.length > 0) {
                document.getElementsByTagName("link");
                const s = document.querySelector("meta[property=csp-nonce]")
                    , a = s?.nonce || s?.getAttribute("nonce");
                o = Promise.allSettled(n.map(c => {
                    if (c = HA(c), c in wd) return;
                    wd[c] = !0;
                    const l = c.endsWith(".css")
                        , h = l ? '[rel="stylesheet"]' : "";
                    if (document.querySelector(`link[href="${c}"]${h}`)) return;
                    const f = document.createElement("link");
                    if (f.rel = l ? "stylesheet" : FA, l || (f.as = "script"), f.crossOrigin = "", f.href = c, a && f.setAttribute("nonce", a), document.head.appendChild(f), l) return new Promise((g, T) => { f.addEventListener("load", g), f.addEventListener("error", () => T(new Error(`Unable to preload CSS for ${c}`))) })
                }))
            }
            
            function i(s) { const a = new Event("vite:preloadError", { cancelable: !0 }); if (a.payload = s, window.dispatchEvent(a), !a.defaultPrevented) throw s }
            return o.then(s => {
                for (const a of s || []) a.status === "rejected" && i(a.reason);
                return e()
                    .catch(i)
            })
        };
    
    function BA(t) {
        return new TextDecoder()
            .decode($A(t))
    }
    
    function $A(t) {
        let e = t.replace(/-/g, "+")
            .replace(/_/g, "/");
        switch (e.length % 4) {
        case 0:
            break;
        case 2:
            e += "==";
            break;
        case 3:
            e += "=";
            break
        }
        const n = atob(e);
        return Uint8Array.from(n, r => r.codePointAt(0) || 0)
    }
    let KA, jA, ce, qA, Bl;
    KA = t => {
        console.debug("extractRolesFromToken - Passed idToken:", t), console.debug("extractRolesFromToken - typeof:", typeof t);
        const e = t.split(".")
            , n = JSON.parse(BA(e[1]));
        return console.debug("extractRolesFromToken - parsed token:", n), n.roles || []
    };
    Le = { article: { create: "article:create", read: { own: "article:read:own", public: "article:read:public", all: "article:read:all" }, update: { own: "article:update:own", all: "article:update:all" }, delete: { own: "article:delete:own", all: "article:delete:all" }, state: { submit: "article:state:submit", approve: "article:state:approve", overWrite: "article:state:overWrite" }, comment: { own: "article:comment:own", all: "article:comment:all" } }, user: { create: "user:create", read: { own: "user:read:own", all: "user:read:all" }, activity: { own: "user:activity:own", all: "user:activity:all" }, relations: { update: "user:relations:update" }, absence: { create: "absence:create", read: { own: "absence:read:own", all: "absence:read:all" }, delete: "absence:delete", update: "absence:update" } }, template: { create: "template:create", read: { own: "template:read:own", all: "template:read:all", default: "template:read:default" }, update: { own: "template:update:own" }, delete: { own: "template:delete:own" } } };
    jA = { "@ALL": [Le.article.read.own, Le.user.read.all], "Lej.Apprentice": [Le.user.read.own, Le.user.activity.own, Le.article.comment.own, Le.article.create, Le.article.read.public, Le.article.update.own, Le.article.delete.own, Le.article.state.submit], "Lej.Instructor": [Le.user.read.all, Le.user.activity.all, Le.user.relations.update, Le.user.absence.update, Le.article.comment.all, Le.article.read.all, Le.article.state.approve, Le.article.state.overWrite, Le.template.create, Le.template.read.all, Le.template.read.default, Le.template.read.own, Le.template.update.own, Le.template.delete.own], "Lej.SocialWorker": [Le.article.read.all, Le.user.activity.all, Le.user.relations.update, Le.article.comment.all, Le.template.read.all] };
    ce = {};
    qA = {
        async install(t, e) {
            console.debug("Installing lejAuthPlugin..."), ce.state = So({ msalUser: null, localUser: null, inProgress: !0 }), Object.assign(ce, e), ce.msalInstance.enableAccountStorageEvents(), ce.msalInstance.addEventCallback(n => { console.debug("MSAL EVENT '" + n.eventType + "':", n), n.eventType == ie.LOGIN_SUCCESS || (n.eventType == ie.LOGOUT_SUCCESS ? ce.onLoggedOutCallbackFn && ce.onLoggedOutCallbackFn() : n.eventType === ie.ACCOUNT_ADDED ? (console.info("Account Added", n), Sd()) : n.eventType === ie.ACCOUNT_REMOVED && (console.info("Account Removed", n), ce.state.msalUser = null, ce.state.localUser = null)) }), ce.signIn = async () => {
                console.debug("signIn - Attempting to sign in...");
                const n = ce.config.request
                    , r = localStorage.getItem("loginHint");
                r && r != "undefined" && (n.loginHint = r), console.debug("signIn - Attempting to sign in with a silent SSO sign-in request", n);
                try {
                    const o = await ce.msalInstance.ssoSilent(n);
                    console.debug("signIn - Login successful", o), await Ia(o)
                } catch (o) {
                    if (o instanceof zt) {
                        console.info("signIn - SSO sign-in failed. Interaction required");
                        try {
                            const i = await ce.msalInstance.loginRedirect(n);
                            console.log("signIn - Login successful", i), await Ia(i)
                        } catch (i) { console.error("signIn - Error while trying to interactively sign in:", i) }
                    } else console.debug("signIn - Error while signin in:", o)
                } finally { ce.state.inProgress = !1 }
            }, ce.signOut = () => {
                const n = { account: ce.msalInstance.getAccountByHomeId(localStorage.getItem("activeAccountId")) };
                localStorage.removeItem("loginHint"), localStorage.removeItem("activeAccountId"), ce.msalInstance.logoutRedirect(n)
            }, ce.debugInfoToConsole = () => { console.log("msalInstance:", ce.msalInstance), console.log("accounts:", ce.msalInstance.getAllAccounts()) }, ce.acquireToken = async n => {
                let r;
                try { r = await ce.msalInstance.acquireTokenSilent(n), console.debug("acquireToken - acquired token silently from cache") } catch (o) {
                    if (o instanceof zt) r = await ce.msalInstance.acquireTokenRedirect(n);
                    else throw o
                }
                return r
            };
            try {
                const n = await ce.msalInstance.handleRedirectPromise();
                n ? (console.debug("handleRedirectPromise - Coming back from a successful auth-redirect. tokenResponse:", n), await Ia(n)) : await Sd()
            } catch (n) { console.error("handleRedirectPromise - There was an error:", n) } finally { ce.state.inProgress = !1 } t.config.globalProperties.$auth = ce, console.debug("lejAuthPlugin succesfully installed.")
        }
    };
    Ct = {
        msalUser: () => ce.state.msalUser
        , localUser: () => ce.state.localUser
        , isAuthenticated: () => Ct.msalUser()
            ?.idTokenClaims?.oid != null && Ct.localUser()
            ?._id != null
        , authInProgress: () => ce.state.inProgress
        , token: t => ce.acquireToken(t)
        , msalUserRoles: () => ce.state.roles
    };
    Bl = t => { ce.state.localUser = t, ce.state.localUser.hasPermission = e => ce.state.permissions.includes(e) };
    async function Sd() {
        console.debug("handleRedirectPromise - Not coming back from an auth-redirect");
        const t = localStorage.getItem("activeAccountId")
            , e = ce.msalInstance.getAccountByHomeId(t);
        if (e?.homeAccountId) ce.state.msalUser = e, Zg(), console.debug("handleredirectPromise - msalUser set. There seems to be an active session. Invoking onPageLoad...", ce.state.msalUser.target), await ce.onPageLoadCallbackFn();
        else {
            console.info("handleRedirectPromise - No active account found for homeAccountId", { activeAccountId: t });
            const n = localStorage.getItem("loginHint");
            n ? (console.debug("handleRedirectPromise - Trying to sign in with loginHint:", n), await ce.signIn()) : console.debug("handleRedirectPromise - No loginHint available")
        }
    }
    async function Ia(t) {
        console.debug("login - preparing for login"), console.debug("login - updating local state");
        const e = t.account.homeAccountId;
        ce.state.msalUser = t.account, localStorage.setItem("activeAccountId", e), ce.msalInstance.setActiveAccount(t.account), Zg(), console.debug("login - logged in... callback"), await ce.onLoggedInCallbackFn()
    }
    async function Zg() {
        console.debug("login - loading roles");
        const t = { account: ce.state.msalUser, scopes: ce.config.apiTokenRequest.scopes }
            , e = await ce.acquireToken(t);
        ce.state.roles = KA(e.accessToken), console.debug("login - loaded roles:", ce.state.roles), console.debug("login - mapping roles to permissions"), ce.state.permissions = ce.state.roles.concat("@ALL")
            .flatMap(n => jA[n]), console.debug("login - mapped permissions", ce.state.permissions)
    }
    let VA;
    Me = (t, e) => { const n = t.__vccOpts || t; for (const [r, o] of e) n[r] = o; return n };
    VA = { props: { page: { type: String, required: !0 }, path: { type: String, required: !1 } } };
    
    function GA(t, e, n, r, o, i) { const s = fe("RouterLink"); return Z(), $e(s, { to: { name: n.page }, class: sn(["nav-link", { "active-link": t.$route.name == n.page || t.$route.path.startsWith(this.path) }]) }, { default: Ae(() => [Q("h3", null, [an(t.$slots, "default", {}, void 0, !0)])]), _: 3 }, 8, ["to", "class"]) } WA = Me(VA, [["render", GA], ["__scopeId", "data-v-27f037ac"]]);
    
    function em(t, e) { return function () { return t.apply(e, arguments) } }
    const { toString: zA } = Object.prototype, { getPrototypeOf: $l } = Object, Ws = (t => e => {
        const n = zA.call(e);
        return t[n] || (t[n] = n.slice(8, -1)
            .toLowerCase())
    })(Object.create(null)), fn = t => (t = t.toLowerCase(), e => Ws(e) === t), zs = t => e => typeof e === t, { isArray: No } = Array, li = zs("undefined");
    
    function YA(t) { return t !== null && !li(t) && t.constructor !== null && !li(t.constructor) && Gt(t.constructor.isBuffer) && t.constructor.isBuffer(t) }
    const tm = fn("ArrayBuffer");
    
    function QA(t) { let e; return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && tm(t.buffer), e }
    const JA = zs("string")
        , Gt = zs("function")
        , nm = zs("number")
        , Ys = t => t !== null && typeof t == "object"
        , XA = t => t === !0 || t === !1
        , Ji = t => { if (Ws(t) !== "object") return !1; const e = $l(t); return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t) }
        , ZA = fn("Date")
        , eb = fn("File")
        , tb = fn("Blob")
        , nb = fn("FileList")
        , rb = t => Ys(t) && Gt(t.pipe)
        , ob = t => { let e; return t && (typeof FormData == "function" && t instanceof FormData || Gt(t.append) && ((e = Ws(t)) === "formdata" || e === "object" && Gt(t.toString) && t.toString() === "[object FormData]")) }
        , ib = fn("URLSearchParams")
        , [sb, ab, cb, lb] = ["ReadableStream", "Request", "Response", "Headers"].map(fn)
        , ub = t => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    
    function bi(t, e, { allOwnKeys: n = !1 } = {}) {
        if (t === null || typeof t > "u") return;
        let r, o;
        if (typeof t != "object" && (t = [t]), No(t))
            for (r = 0, o = t.length; r < o; r++) e.call(null, t[r], r, t);
        else {
            const i = n ? Object.getOwnPropertyNames(t) : Object.keys(t)
                , s = i.length;
            let a;
            for (r = 0; r < s; r++) a = i[r], e.call(null, t[a], a, t)
        }
    }
    
    function rm(t, e) {
        e = e.toLowerCase();
        const n = Object.keys(t);
        let r = n.length
            , o;
        for (; r-- > 0;)
            if (o = n[r], e === o.toLowerCase()) return o;
        return null
    }
    const Rr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
        , om = t => !li(t) && t !== Rr;
    
    function lc() {
        const { caseless: t } = om(this) && this || {}, e = {}, n = (r, o) => {
            const i = t && rm(e, o) || o;
            Ji(e[i]) && Ji(r) ? e[i] = lc(e[i], r) : Ji(r) ? e[i] = lc({}, r) : No(r) ? e[i] = r.slice() : e[i] = r
        };
        for (let r = 0, o = arguments.length; r < o; r++) arguments[r] && bi(arguments[r], n);
        return e
    }
    const db = (t, e, n, { allOwnKeys: r } = {}) => (bi(e, (o, i) => { n && Gt(o) ? t[i] = em(o, n) : t[i] = o }, { allOwnKeys: r }), t)
        , hb = t => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t)
        , fb = (t, e, n, r) => { t.prototype = Object.create(e.prototype, r), t.prototype.constructor = t, Object.defineProperty(t, "super", { value: e.prototype }), n && Object.assign(t.prototype, n) }
        , pb = (t, e, n, r) => {
            let o, i, s;
            const a = {};
            if (e = e || {}, t == null) return e;
            do {
                for (o = Object.getOwnPropertyNames(t), i = o.length; i-- > 0;) s = o[i], (!r || r(s, t, e)) && !a[s] && (e[s] = t[s], a[s] = !0);
                t = n !== !1 && $l(t)
            } while (t && (!n || n(t, e)) && t !== Object.prototype);
            return e
        }
        , gb = (t, e, n) => { t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length; const r = t.indexOf(e, n); return r !== -1 && r === n }
        , mb = t => { if (!t) return null; if (No(t)) return t; let e = t.length; if (!nm(e)) return null; const n = new Array(e); for (; e-- > 0;) n[e] = t[e]; return n }
        , yb = (t => e => t && e instanceof t)(typeof Uint8Array < "u" && $l(Uint8Array))
        , Cb = (t, e) => {
            const r = (t && t[Symbol.iterator])
                .call(t);
            let o;
            for (;
                (o = r.next()) && !o.done;) {
                const i = o.value;
                e.call(t, i[0], i[1])
            }
        }
        , _b = (t, e) => {
            let n;
            const r = [];
            for (;
                (n = t.exec(e)) !== null;) r.push(n);
            return r
        }
        , Tb = fn("HTMLFormElement")
        , vb = t => t.toLowerCase()
        .replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) { return r.toUpperCase() + o })
        , kd = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype)
        , Eb = fn("RegExp")
        , im = (t, e) => {
            const n = Object.getOwnPropertyDescriptors(t)
                , r = {};
            bi(n, (o, i) => {
                let s;
                (s = e(o, i, t)) !== !1 && (r[i] = s || o)
            }), Object.defineProperties(t, r)
        }
        , Ab = t => { im(t, (e, n) => { if (Gt(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1; const r = t[n]; if (Gt(r)) { if (e.enumerable = !1, "writable" in e) { e.writable = !1; return } e.set || (e.set = () => { throw Error("Can not rewrite read-only method '" + n + "'") }) } }) }
        , bb = (t, e) => {
            const n = {}
                , r = o => { o.forEach(i => { n[i] = !0 }) };
            return No(t) ? r(t) : r(String(t)
                .split(e)), n
        }
        , Ib = () => {}
        , wb = (t, e) => t != null && Number.isFinite(t = +t) ? t : e
        , wa = "abcdefghijklmnopqrstuvwxyz"
        , Rd = "0123456789"
        , sm = { DIGIT: Rd, ALPHA: wa, ALPHA_DIGIT: wa + wa.toUpperCase() + Rd }
        , Sb = (t = 16, e = sm.ALPHA_DIGIT) => { let n = ""; const { length: r } = e; for (; t--;) n += e[Math.random() * r | 0]; return n };
    
    function kb(t) { return !!(t && Gt(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]) }
    const Rb = t => {
            const e = new Array(10)
                , n = (r, o) => { if (Ys(r)) { if (e.indexOf(r) >= 0) return; if (!("toJSON" in r)) { e[o] = r; const i = No(r) ? [] : {}; return bi(r, (s, a) => { const c = n(s, o + 1);!li(c) && (i[a] = c) }), e[o] = void 0, i } } return r };
            return n(t, 0)
        }
        , Ob = fn("AsyncFunction")
        , Nb = t => t && (Ys(t) || Gt(t)) && Gt(t.then) && Gt(t.catch)
        , am = ((t, e) => t ? setImmediate : e ? ((n, r) => (Rr.addEventListener("message", ({ source: o, data: i }) => { o === Rr && i === n && r.length && r.shift()() }, !1), o => { r.push(o), Rr.postMessage(n, "*") }))(`axios@${Math.random()}`, []) : n => setTimeout(n))(typeof setImmediate == "function", Gt(Rr.postMessage))
        , Pb = typeof queueMicrotask < "u" ? queueMicrotask.bind(Rr) : typeof process < "u" && process.nextTick || am
        , U = { isArray: No, isArrayBuffer: tm, isBuffer: YA, isFormData: ob, isArrayBufferView: QA, isString: JA, isNumber: nm, isBoolean: XA, isObject: Ys, isPlainObject: Ji, isReadableStream: sb, isRequest: ab, isResponse: cb, isHeaders: lb, isUndefined: li, isDate: ZA, isFile: eb, isBlob: tb, isRegExp: Eb, isFunction: Gt, isStream: rb, isURLSearchParams: ib, isTypedArray: yb, isFileList: nb, forEach: bi, merge: lc, extend: db, trim: ub, stripBOM: hb, inherits: fb, toFlatObject: pb, kindOf: Ws, kindOfTest: fn, endsWith: gb, toArray: mb, forEachEntry: Cb, matchAll: _b, isHTMLForm: Tb, hasOwnProperty: kd, hasOwnProp: kd, reduceDescriptors: im, freezeMethods: Ab, toObjectSet: bb, toCamelCase: vb, noop: Ib, toFiniteNumber: wb, findKey: rm, global: Rr, isContextDefined: om, ALPHABET: sm, generateString: Sb, isSpecCompliantForm: kb, toJSONObject: Rb, isAsyncFn: Ob, isThenable: Nb, setImmediate: am, asap: Pb };
    
    function pe(t, e, n, r, o) {
        Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error()
            .stack, this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null)
    }
    U.inherits(pe, Error, { toJSON: function () { return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: U.toJSONObject(this.config), code: this.code, status: this.status } } });
    const cm = pe.prototype
        , lm = {};
    ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(t => { lm[t] = { value: t } });
    Object.defineProperties(pe, lm);
    Object.defineProperty(cm, "isAxiosError", { value: !0 });
    pe.from = (t, e, n, r, o, i) => { const s = Object.create(cm); return U.toFlatObject(t, s, function (c) { return c !== Error.prototype }, a => a !== "isAxiosError"), pe.call(s, t.message, e, n, r, o), s.cause = t, s.name = t.name, i && Object.assign(s, i), s };
    const Mb = null;
    
    function uc(t) { return U.isPlainObject(t) || U.isArray(t) }
    
    function um(t) { return U.endsWith(t, "[]") ? t.slice(0, -2) : t }
    
    function Od(t, e, n) {
        return t ? t.concat(e)
            .map(function (o, i) { return o = um(o), !n && i ? "[" + o + "]" : o })
            .join(n ? "." : "") : e
    }
    
    function Lb(t) { return U.isArray(t) && !t.some(uc) }
    const Db = U.toFlatObject(U, {}, null, function (e) { return /^is[A-Z]/.test(e) });
    
    function Qs(t, e, n) {
        if (!U.isObject(t)) throw new TypeError("target must be an object");
        e = e || new FormData, n = U.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (b, k) { return !U.isUndefined(k[b]) });
        const r = n.metaTokens
            , o = n.visitor || h
            , i = n.dots
            , s = n.indexes
            , c = (n.Blob || typeof Blob < "u" && Blob) && U.isSpecCompliantForm(e);
        if (!U.isFunction(o)) throw new TypeError("visitor must be a function");
        
        function l(A) { if (A === null) return ""; if (U.isDate(A)) return A.toISOString(); if (!c && U.isBlob(A)) throw new pe("Blob is not supported. Use a Buffer instead."); return U.isArrayBuffer(A) || U.isTypedArray(A) ? c && typeof Blob == "function" ? new Blob([A]) : Buffer.from(A) : A }
        
        function h(A, b, k) {
            let O = A;
            if (A && !k && typeof A == "object") {
                if (U.endsWith(b, "{}")) b = r ? b : b.slice(0, -2), A = JSON.stringify(A);
                else if (U.isArray(A) && Lb(A) || (U.isFileList(A) || U.endsWith(b, "[]")) && (O = U.toArray(A))) return b = um(b), O.forEach(function (I, w) {!(U.isUndefined(I) || I === null) && e.append(s === !0 ? Od([b], w, i) : s === null ? b : b + "[]", l(I)) }), !1
            }
            return uc(A) ? !0 : (e.append(Od(k, b, i), l(A)), !1)
        }
        const f = []
            , g = Object.assign(Db, { defaultVisitor: h, convertValue: l, isVisitable: uc });
        
        function T(A, b) {
            if (!U.isUndefined(A)) {
                if (f.indexOf(A) !== -1) throw Error("Circular reference detected in " + b.join("."));
                f.push(A), U.forEach(A, function (O, x) {
                    (!(U.isUndefined(O) || O === null) && o.call(e, O, U.isString(x) ? x.trim() : x, b, g)) === !0 && T(O, b ? b.concat(x) : [x])
                }), f.pop()
            }
        }
        if (!U.isObject(t)) throw new TypeError("data must be an object");
        return T(t), e
    }
    
    function Nd(t) {
        const e = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
        return encodeURIComponent(t)
            .replace(/[!'()~]|%20|%00/g, function (r) { return e[r] })
    }
    
    function Kl(t, e) { this._pairs = [], t && Qs(t, this, e) }
    const dm = Kl.prototype;
    dm.append = function (e, n) { this._pairs.push([e, n]) };
    dm.toString = function (e) {
        const n = e ? function (r) { return e.call(this, r, Nd) } : Nd;
        return this._pairs.map(function (o) { return n(o[0]) + "=" + n(o[1]) }, "")
            .join("&")
    };
    
    function xb(t) {
        return encodeURIComponent(t)
            .replace(/%3A/gi, ":")
            .replace(/%24/g, "$")
            .replace(/%2C/gi, ",")
            .replace(/%20/g, "+")
            .replace(/%5B/gi, "[")
            .replace(/%5D/gi, "]")
    }
    
    function hm(t, e, n) {
        if (!e) return t;
        const r = n && n.encode || xb
            , o = n && n.serialize;
        let i;
        if (o ? i = o(e, n) : i = U.isURLSearchParams(e) ? e.toString() : new Kl(e, n)
            .toString(r), i) {
            const s = t.indexOf("#");
            s !== -1 && (t = t.slice(0, s)), t += (t.indexOf("?") === -1 ? "?" : "&") + i
        }
        return t
    }
    class Pd { constructor() { this.handlers = [] } use(e, n, r) { return this.handlers.push({ fulfilled: e, rejected: n, synchronous: r ? r.synchronous : !1, runWhen: r ? r.runWhen : null }), this.handlers.length - 1 } eject(e) { this.handlers[e] && (this.handlers[e] = null) } clear() { this.handlers && (this.handlers = []) } forEach(e) { U.forEach(this.handlers, function (r) { r !== null && e(r) }) } }
    const fm = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 }
        , Ub = typeof URLSearchParams < "u" ? URLSearchParams : Kl
        , Fb = typeof FormData < "u" ? FormData : null
        , Hb = typeof Blob < "u" ? Blob : null
        , Bb = { isBrowser: !0, classes: { URLSearchParams: Ub, FormData: Fb, Blob: Hb }, protocols: ["http", "https", "file", "blob", "url", "data"] }
        , jl = typeof window < "u" && typeof document < "u"
        , dc = typeof navigator == "object" && navigator || void 0
        , $b = jl && (!dc || ["ReactNative", "NativeScript", "NS"].indexOf(dc.product) < 0)
        , Kb = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
        , jb = jl && window.location.href || "http://localhost"
        , qb = Object.freeze(Object.defineProperty({ __proto__: null, hasBrowserEnv: jl, hasStandardBrowserEnv: $b, hasStandardBrowserWebWorkerEnv: Kb, navigator: dc, origin: jb }, Symbol.toStringTag, { value: "Module" }))
        , Ft = { ...qb, ...Bb };
    
    function Vb(t, e) { return Qs(t, new Ft.classes.URLSearchParams, Object.assign({ visitor: function (n, r, o, i) { return Ft.isNode && U.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments) } }, e)) }
    
    function Gb(t) {
        return U.matchAll(/\w+|\[(\w*)]/g, t)
            .map(e => e[0] === "[]" ? "" : e[1] || e[0])
    }
    
    function Wb(t) {
        const e = {}
            , n = Object.keys(t);
        let r;
        const o = n.length;
        let i;
        for (r = 0; r < o; r++) i = n[r], e[i] = t[i];
        return e
    }
    
    function pm(t) {
        function e(n, r, o, i) {
            let s = n[i++];
            if (s === "__proto__") return !0;
            const a = Number.isFinite(+s)
                , c = i >= n.length;
            return s = !s && U.isArray(o) ? o.length : s, c ? (U.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !U.isObject(o[s])) && (o[s] = []), e(n, r, o[s], i) && U.isArray(o[s]) && (o[s] = Wb(o[s])), !a)
        }
        if (U.isFormData(t) && U.isFunction(t.entries)) { const n = {}; return U.forEachEntry(t, (r, o) => { e(Gb(r), o, n, 0) }), n }
        return null
    }
    
    function zb(t, e, n) {
        if (U.isString(t)) try { return (e || JSON.parse)(t), U.trim(t) } catch (r) { if (r.name !== "SyntaxError") throw r }
        return (0, JSON.stringify)(t)
    }
    const Ii = {
        transitional: fm
        , adapter: ["xhr", "http", "fetch"]
        , transformRequest: [function (e, n) {
            const r = n.getContentType() || ""
                , o = r.indexOf("application/json") > -1
                , i = U.isObject(e);
            if (i && U.isHTMLForm(e) && (e = new FormData(e)), U.isFormData(e)) return o ? JSON.stringify(pm(e)) : e;
            if (U.isArrayBuffer(e) || U.isBuffer(e) || U.isStream(e) || U.isFile(e) || U.isBlob(e) || U.isReadableStream(e)) return e;
            if (U.isArrayBufferView(e)) return e.buffer;
            if (U.isURLSearchParams(e)) return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
            let a;
            if (i) {
                if (r.indexOf("application/x-www-form-urlencoded") > -1) return Vb(e, this.formSerializer)
                    .toString();
                if ((a = U.isFileList(e)) || r.indexOf("multipart/form-data") > -1) { const c = this.env && this.env.FormData; return Qs(a ? { "files[]": e } : e, c && new c, this.formSerializer) }
            }
            return i || o ? (n.setContentType("application/json", !1), zb(e)) : e
        }]
        , transformResponse: [function (e) {
            const n = this.transitional || Ii.transitional
                , r = n && n.forcedJSONParsing
                , o = this.responseType === "json";
            if (U.isResponse(e) || U.isReadableStream(e)) return e;
            if (e && U.isString(e) && (r && !this.responseType || o)) { const s = !(n && n.silentJSONParsing) && o; try { return JSON.parse(e) } catch (a) { if (s) throw a.name === "SyntaxError" ? pe.from(a, pe.ERR_BAD_RESPONSE, this, null, this.response) : a } }
            return e
        }]
        , timeout: 0
        , xsrfCookieName: "XSRF-TOKEN"
        , xsrfHeaderName: "X-XSRF-TOKEN"
        , maxContentLength: -1
        , maxBodyLength: -1
        , env: { FormData: Ft.classes.FormData, Blob: Ft.classes.Blob }
        , validateStatus: function (e) { return e >= 200 && e < 300 }
        , headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } }
    };
    U.forEach(["delete", "get", "head", "post", "put", "patch"], t => { Ii.headers[t] = {} });
    const Yb = U.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
        , Qb = t => {
            const e = {};
            let n, r, o;
            return t && t.split(`
`)
                .forEach(function (s) {
                    o = s.indexOf(":"), n = s.substring(0, o)
                        .trim()
                        .toLowerCase(), r = s.substring(o + 1)
                        .trim(), !(!n || e[n] && Yb[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r)
                }), e
        }
        , Md = Symbol("internals");
    
    function Uo(t) {
        return t && String(t)
            .trim()
            .toLowerCase()
    }
    
    function Xi(t) { return t === !1 || t == null ? t : U.isArray(t) ? t.map(Xi) : String(t) }
    
    function Jb(t) {
        const e = Object.create(null)
            , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
        let r;
        for (; r = n.exec(t);) e[r[1]] = r[2];
        return e
    }
    const Xb = t => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
    
    function Sa(t, e, n, r, o) { if (U.isFunction(r)) return r.call(this, e, n); if (o && (e = n), !!U.isString(e)) { if (U.isString(r)) return e.indexOf(r) !== -1; if (U.isRegExp(r)) return r.test(e) } }
    
    function Zb(t) {
        return t.trim()
            .toLowerCase()
            .replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r)
    }
    
    function eI(t, e) {
        const n = U.toCamelCase(" " + e);
        ["get", "set", "has"].forEach(r => { Object.defineProperty(t, r + n, { value: function (o, i, s) { return this[r].call(this, e, o, i, s) }, configurable: !0 }) })
    }
    class Ht {
        constructor(e) { e && this.set(e) } set(e, n, r) {
            const o = this;
            
            function i(a, c, l) {
                const h = Uo(c);
                if (!h) throw new Error("header name must be a non-empty string");
                const f = U.findKey(o, h);
                (!f || o[f] === void 0 || l === !0 || l === void 0 && o[f] !== !1) && (o[f || c] = Xi(a))
            }
            const s = (a, c) => U.forEach(a, (l, h) => i(l, h, c));
            if (U.isPlainObject(e) || e instanceof this.constructor) s(e, n);
            else if (U.isString(e) && (e = e.trim()) && !Xb(e)) s(Qb(e), n);
            else if (U.isHeaders(e))
                for (const [a, c] of e.entries()) i(c, a, r);
            else e != null && i(n, e, r);
            return this
        }
        get(e, n) { if (e = Uo(e), e) { const r = U.findKey(this, e); if (r) { const o = this[r]; if (!n) return o; if (n === !0) return Jb(o); if (U.isFunction(n)) return n.call(this, o, r); if (U.isRegExp(n)) return n.exec(o); throw new TypeError("parser must be boolean|regexp|function") } } } has(e, n) { if (e = Uo(e), e) { const r = U.findKey(this, e); return !!(r && this[r] !== void 0 && (!n || Sa(this, this[r], r, n))) } return !1 } delete(e, n) {
            const r = this;
            let o = !1;
            
            function i(s) {
                if (s = Uo(s), s) {
                    const a = U.findKey(r, s);
                    a && (!n || Sa(r, r[a], a, n)) && (delete r[a], o = !0)
                }
            }
            return U.isArray(e) ? e.forEach(i) : i(e), o
        }
        clear(e) {
            const n = Object.keys(this);
            let r = n.length
                , o = !1;
            for (; r--;) {
                const i = n[r];
                (!e || Sa(this, this[i], i, e, !0)) && (delete this[i], o = !0)
            }
            return o
        }
        normalize(e) {
            const n = this
                , r = {};
            return U.forEach(this, (o, i) => {
                const s = U.findKey(r, i);
                if (s) { n[s] = Xi(o), delete n[i]; return }
                const a = e ? Zb(i) : String(i)
                    .trim();
                a !== i && delete n[i], n[a] = Xi(o), r[a] = !0
            }), this
        }
        concat(...e) { return this.constructor.concat(this, ...e) } toJSON(e) { const n = Object.create(null); return U.forEach(this, (r, o) => { r != null && r !== !1 && (n[o] = e && U.isArray(r) ? r.join(", ") : r) }), n } [Symbol.iterator]() { return Object.entries(this.toJSON())[Symbol.iterator]() } toString() {
            return Object.entries(this.toJSON())
                .map(([e, n]) => e + ": " + n)
                .join(`
`)
        }
        get[Symbol.toStringTag]() { return "AxiosHeaders" } static from(e) { return e instanceof this ? e : new this(e) } static concat(e, ...n) { const r = new this(e); return n.forEach(o => r.set(o)), r } static accessor(e) {
            const r = (this[Md] = this[Md] = { accessors: {} })
                .accessors
                , o = this.prototype;
            
            function i(s) {
                const a = Uo(s);
                r[a] || (eI(o, s), r[a] = !0)
            }
            return U.isArray(e) ? e.forEach(i) : i(e), this
        }
    }
    Ht.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
    U.reduceDescriptors(Ht.prototype, ({ value: t }, e) => { let n = e[0].toUpperCase() + e.slice(1); return { get: () => t, set(r) { this[n] = r } } });
    U.freezeMethods(Ht);
    
    function ka(t, e) {
        const n = this || Ii
            , r = e || n
            , o = Ht.from(r.headers);
        let i = r.data;
        return U.forEach(t, function (a) { i = a.call(n, i, o.normalize(), e ? e.status : void 0) }), o.normalize(), i
    }
    
    function gm(t) { return !!(t && t.__CANCEL__) }
    
    function Po(t, e, n) { pe.call(this, t ?? "canceled", pe.ERR_CANCELED, e, n), this.name = "CanceledError" } U.inherits(Po, pe, { __CANCEL__: !0 });
    
    function mm(t, e, n) { const r = n.config.validateStatus;!n.status || !r || r(n.status) ? t(n) : e(new pe("Request failed with status code " + n.status, [pe.ERR_BAD_REQUEST, pe.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n)) }
    
    function tI(t) { const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t); return e && e[1] || "" }
    
    function nI(t, e) {
        t = t || 10;
        const n = new Array(t)
            , r = new Array(t);
        let o = 0
            , i = 0
            , s;
        return e = e !== void 0 ? e : 1e3
            , function (c) {
                const l = Date.now()
                    , h = r[i];
                s || (s = l), n[o] = c, r[o] = l;
                let f = i
                    , g = 0;
                for (; f !== o;) g += n[f++], f = f % t;
                if (o = (o + 1) % t, o === i && (i = (i + 1) % t), l - s < e) return;
                const T = h && l - h;
                return T ? Math.round(g * 1e3 / T) : void 0
            }
    }
    
    function rI(t, e) {
        let n = 0
            , r = 1e3 / e
            , o, i;
        const s = (l, h = Date.now()) => { n = h, o = null, i && (clearTimeout(i), i = null), t.apply(null, l) };
        return [(...l) => {
            const h = Date.now()
                , f = h - n;
            f >= r ? s(l, h) : (o = l, i || (i = setTimeout(() => { i = null, s(o) }, r - f)))
        }, () => o && s(o)]
    }
    const Ts = (t, e, n = 3) => {
            let r = 0;
            const o = nI(50, 250);
            return rI(i => {
                const s = i.loaded
                    , a = i.lengthComputable ? i.total : void 0
                    , c = s - r
                    , l = o(c)
                    , h = s <= a;
                r = s;
                const f = { loaded: s, total: a, progress: a ? s / a : void 0, bytes: c, rate: l || void 0, estimated: l && a && h ? (a - s) / l : void 0, event: i, lengthComputable: a != null, [e ? "download" : "upload"]: !0 };
                t(f)
            }, n)
        }
        , Ld = (t, e) => { const n = t != null; return [r => e[0]({ lengthComputable: n, total: t, loaded: r }), e[1]] }
        , Dd = t => (...e) => U.asap(() => t(...e))
        , oI = Ft.hasStandardBrowserEnv ? function () {
            const e = Ft.navigator && /(msie|trident)/i.test(Ft.navigator.userAgent)
                , n = document.createElement("a");
            let r;
            
            function o(i) { let s = i; return e && (n.setAttribute("href", s), s = n.href), n.setAttribute("href", s), { href: n.href, protocol: n.protocol ? n.protocol.replace(/:$/, "") : "", host: n.host, search: n.search ? n.search.replace(/^\?/, "") : "", hash: n.hash ? n.hash.replace(/^#/, "") : "", hostname: n.hostname, port: n.port, pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname } }
            return r = o(window.location.href)
                , function (s) { const a = U.isString(s) ? o(s) : s; return a.protocol === r.protocol && a.host === r.host }
        }() : function () { return function () { return !0 } }()
        , iI = Ft.hasStandardBrowserEnv ? {
            write(t, e, n, r, o, i) {
                const s = [t + "=" + encodeURIComponent(e)];
                U.isNumber(n) && s.push("expires=" + new Date(n)
                    .toGMTString()), U.isString(r) && s.push("path=" + r), U.isString(o) && s.push("domain=" + o), i === !0 && s.push("secure"), document.cookie = s.join("; ")
            }
            , read(t) { const e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")); return e ? decodeURIComponent(e[3]) : null }
            , remove(t) { this.write(t, "", Date.now() - 864e5) }
        } : { write() {}, read() { return null }, remove() {} };
    
    function sI(t) { return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t) }
    
    function aI(t, e) { return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t }
    
    function ym(t, e) { return t && !sI(e) ? aI(t, e) : e }
    const xd = t => t instanceof Ht ? { ...t } : t;
    
    function Hr(t, e) {
        e = e || {};
        const n = {};
        
        function r(l, h, f) { return U.isPlainObject(l) && U.isPlainObject(h) ? U.merge.call({ caseless: f }, l, h) : U.isPlainObject(h) ? U.merge({}, h) : U.isArray(h) ? h.slice() : h }
        
        function o(l, h, f) { if (U.isUndefined(h)) { if (!U.isUndefined(l)) return r(void 0, l, f) } else return r(l, h, f) }
        
        function i(l, h) { if (!U.isUndefined(h)) return r(void 0, h) }
        
        function s(l, h) { if (U.isUndefined(h)) { if (!U.isUndefined(l)) return r(void 0, l) } else return r(void 0, h) }
        
        function a(l, h, f) { if (f in e) return r(l, h); if (f in t) return r(void 0, l) }
        const c = { url: i, method: i, data: i, baseURL: s, transformRequest: s, transformResponse: s, paramsSerializer: s, timeout: s, timeoutMessage: s, withCredentials: s, withXSRFToken: s, adapter: s, responseType: s, xsrfCookieName: s, xsrfHeaderName: s, onUploadProgress: s, onDownloadProgress: s, decompress: s, maxContentLength: s, maxBodyLength: s, beforeRedirect: s, transport: s, httpAgent: s, httpsAgent: s, cancelToken: s, socketPath: s, responseEncoding: s, validateStatus: a, headers: (l, h) => o(xd(l), xd(h), !0) };
        return U.forEach(Object.keys(Object.assign({}, t, e)), function (h) {
            const f = c[h] || o
                , g = f(t[h], e[h], h);
            U.isUndefined(g) && f !== a || (n[h] = g)
        }), n
    }
    const Cm = t => {
            const e = Hr({}, t);
            let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = e;
            e.headers = s = Ht.from(s), e.url = hm(ym(e.baseURL, e.url), t.params, t.paramsSerializer), a && s.set("Authorization", "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : "")));
            let c;
            if (U.isFormData(n)) {
                if (Ft.hasStandardBrowserEnv || Ft.hasStandardBrowserWebWorkerEnv) s.setContentType(void 0);
                else if ((c = s.getContentType()) !== !1) {
                    const [l, ...h] = c ? c.split(";")
                        .map(f => f.trim())
                        .filter(Boolean) : [];
                    s.setContentType([l || "multipart/form-data", ...h].join("; "))
                }
            }
            if (Ft.hasStandardBrowserEnv && (r && U.isFunction(r) && (r = r(e)), r || r !== !1 && oI(e.url))) {
                const l = o && i && iI.read(i);
                l && s.set(o, l)
            }
            return e
        }
        , cI = typeof XMLHttpRequest < "u"
        , lI = cI && function (t) {
            return new Promise(function (n, r) {
                const o = Cm(t);
                let i = o.data;
                const s = Ht.from(o.headers)
                    .normalize();
                let { responseType: a, onUploadProgress: c, onDownloadProgress: l } = o, h, f, g, T, A;
                
                function b() { T && T(), A && A(), o.cancelToken && o.cancelToken.unsubscribe(h), o.signal && o.signal.removeEventListener("abort", h) }
                let k = new XMLHttpRequest;
                k.open(o.method.toUpperCase(), o.url, !0), k.timeout = o.timeout;
                
                function O() {
                    if (!k) return;
                    const I = Ht.from("getAllResponseHeaders" in k && k.getAllResponseHeaders())
                        , M = { data: !a || a === "text" || a === "json" ? k.responseText : k.response, status: k.status, statusText: k.statusText, headers: I, config: t, request: k };
                    mm(function (K) { n(K), b() }, function (K) { r(K), b() }, M), k = null
                }
                "onloadend" in k ? k.onloadend = O : k.onreadystatechange = function () {!k || k.readyState !== 4 || k.status === 0 && !(k.responseURL && k.responseURL.indexOf("file:") === 0) || setTimeout(O) }, k.onabort = function () { k && (r(new pe("Request aborted", pe.ECONNABORTED, t, k)), k = null) }, k.onerror = function () { r(new pe("Network Error", pe.ERR_NETWORK, t, k)), k = null }, k.ontimeout = function () {
                    let w = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
                    const M = o.transitional || fm;
                    o.timeoutErrorMessage && (w = o.timeoutErrorMessage), r(new pe(w, M.clarifyTimeoutError ? pe.ETIMEDOUT : pe.ECONNABORTED, t, k)), k = null
                }, i === void 0 && s.setContentType(null), "setRequestHeader" in k && U.forEach(s.toJSON(), function (w, M) { k.setRequestHeader(M, w) }), U.isUndefined(o.withCredentials) || (k.withCredentials = !!o.withCredentials), a && a !== "json" && (k.responseType = o.responseType), l && ([g, A] = Ts(l, !0), k.addEventListener("progress", g)), c && k.upload && ([f, T] = Ts(c), k.upload.addEventListener("progress", f), k.upload.addEventListener("loadend", T)), (o.cancelToken || o.signal) && (h = I => { k && (r(!I || I.type ? new Po(null, t, k) : I), k.abort(), k = null) }, o.cancelToken && o.cancelToken.subscribe(h), o.signal && (o.signal.aborted ? h() : o.signal.addEventListener("abort", h)));
                const x = tI(o.url);
                if (x && Ft.protocols.indexOf(x) === -1) { r(new pe("Unsupported protocol " + x + ":", pe.ERR_BAD_REQUEST, t)); return } k.send(i || null)
            })
        }
        , uI = (t, e) => {
            const { length: n } = t = t ? t.filter(Boolean) : [];
            if (e || n) {
                let r = new AbortController
                    , o;
                const i = function (l) {
                    if (!o) {
                        o = !0, a();
                        const h = l instanceof Error ? l : this.reason;
                        r.abort(h instanceof pe ? h : new Po(h instanceof Error ? h.message : h))
                    }
                };
                let s = e && setTimeout(() => { s = null, i(new pe(`timeout ${e} of ms exceeded`, pe.ETIMEDOUT)) }, e);
                const a = () => { t && (s && clearTimeout(s), s = null, t.forEach(l => { l.unsubscribe ? l.unsubscribe(i) : l.removeEventListener("abort", i) }), t = null) };
                t.forEach(l => l.addEventListener("abort", i));
                const { signal: c } = r;
                return c.unsubscribe = () => U.asap(a), c
            }
        }
        , dI = function* (t, e) {
            let n = t.byteLength;
            if (n < e) { yield t; return }
            let r = 0
                , o;
            for (; r < n;) o = r + e, yield t.slice(r, o), r = o
        }
        , hI = async function* (t, e) { for await (const n of fI(t)) yield* dI(n, e) }, fI = async function* (t) {
            if (t[Symbol.asyncIterator]) { yield* t; return }
            const e = t.getReader();
            try {
                for (;;) {
                    const { done: n, value: r } = await e.read();
                    if (n) break;
                    yield r
                }
            } finally { await e.cancel() }
        }, Ud = (t, e, n, r) => {
            const o = hI(t, e);
            let i = 0
                , s, a = c => { s || (s = !0, r && r(c)) };
            return new ReadableStream({
                async pull(c) {
                    try {
                        const { done: l, value: h } = await o.next();
                        if (l) { a(), c.close(); return }
                        let f = h.byteLength;
                        if (n) {
                            let g = i += f;
                            n(g)
                        }
                        c.enqueue(new Uint8Array(h))
                    } catch (l) { throw a(l), l }
                }
                , cancel(c) { return a(c), o.return() }
            }, { highWaterMark: 2 })
        }, Js = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", _m = Js && typeof ReadableStream == "function", pI = Js && (typeof TextEncoder == "function" ? (t => e => t.encode(e))(new TextEncoder) : async t => new Uint8Array(await new Response(t)
            .arrayBuffer())), Tm = (t, ...e) => { try { return !!t(...e) } catch { return !1 } }, gI = _m && Tm(() => {
            let t = !1;
            const e = new Request(Ft.origin, { body: new ReadableStream, method: "POST", get duplex() { return t = !0, "half" } })
                .headers.has("Content-Type");
            return t && !e
        }), Fd = 64 * 1024, hc = _m && Tm(() => U.isReadableStream(new Response("")
            .body)), vs = { stream: hc && (t => t.body) };
    Js && (t => {
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(e => {!vs[e] && (vs[e] = U.isFunction(t[e]) ? n => n[e]() : (n, r) => { throw new pe(`Response type '${e}' is not supported`, pe.ERR_NOT_SUPPORT, r) }) })
    })(new Response);
    const mI = async t => {
        if (t == null) return 0;
        if (U.isBlob(t)) return t.size;
        if (U.isSpecCompliantForm(t)) return (await new Request(Ft.origin, { method: "POST", body: t })
                .arrayBuffer())
            .byteLength;
        if (U.isArrayBufferView(t) || U.isArrayBuffer(t)) return t.byteLength;
        if (U.isURLSearchParams(t) && (t = t + ""), U.isString(t)) return (await pI(t))
            .byteLength
    }, yI = async (t, e) => { const n = U.toFiniteNumber(t.getContentLength()); return n ?? mI(e) }, CI = Js && (async t => {
        let { url: e, method: n, data: r, signal: o, cancelToken: i, timeout: s, onDownloadProgress: a, onUploadProgress: c, responseType: l, headers: h, withCredentials: f = "same-origin", fetchOptions: g } = Cm(t);
        l = l ? (l + "")
            .toLowerCase() : "text";
        let T = uI([o, i && i.toAbortSignal()], s)
            , A;
        const b = T && T.unsubscribe && (() => { T.unsubscribe() });
        let k;
        try {
            if (c && gI && n !== "get" && n !== "head" && (k = await yI(h, r)) !== 0) {
                let M = new Request(e, { method: "POST", body: r, duplex: "half" })
                    , L;
                if (U.isFormData(r) && (L = M.headers.get("content-type")) && h.setContentType(L), M.body) {
                    const [K, G] = Ld(k, Ts(Dd(c)));
                    r = Ud(M.body, Fd, K, G)
                }
            }
            U.isString(f) || (f = f ? "include" : "omit");
            const O = "credentials" in Request.prototype;
            A = new Request(e, {
                ...g
                , signal: T
                , method: n.toUpperCase()
                , headers: h.normalize()
                    .toJSON()
                , body: r
                , duplex: "half"
                , credentials: O ? f : void 0
            });
            let x = await fetch(A);
            const I = hc && (l === "stream" || l === "response");
            if (hc && (a || I && b)) {
                const M = {};
                ["status", "statusText", "headers"].forEach(H => { M[H] = x[H] });
                const L = U.toFiniteNumber(x.headers.get("content-length"))
                    , [K, G] = a && Ld(L, Ts(Dd(a), !0)) || [];
                x = new Response(Ud(x.body, Fd, K, () => { G && G(), b && b() }), M)
            }
            l = l || "text";
            let w = await vs[U.findKey(vs, l) || "text"](x, t);
            return !I && b && b(), await new Promise((M, L) => { mm(M, L, { data: w, headers: Ht.from(x.headers), status: x.status, statusText: x.statusText, config: t, request: A }) })
        } catch (O) { throw b && b(), O && O.name === "TypeError" && /fetch/i.test(O.message) ? Object.assign(new pe("Network Error", pe.ERR_NETWORK, t, A), { cause: O.cause || O }) : pe.from(O, O && O.code, t, A) }
    }), fc = { http: Mb, xhr: lI, fetch: CI };
    U.forEach(fc, (t, e) => { if (t) { try { Object.defineProperty(t, "name", { value: e }) } catch {} Object.defineProperty(t, "adapterName", { value: e }) } });
    const Hd = t => `- ${t}`
        , _I = t => U.isFunction(t) || t === null || t === !1
        , vm = {
            getAdapter: t => {
                t = U.isArray(t) ? t : [t];
                const { length: e } = t;
                let n, r;
                const o = {};
                for (let i = 0; i < e; i++) {
                    n = t[i];
                    let s;
                    if (r = n, !_I(n) && (r = fc[(s = String(n))
                            .toLowerCase()], r === void 0)) throw new pe(`Unknown adapter '${s}'`);
                    if (r) break;
                    o[s || "#" + i] = r
                }
                if (!r) {
                    const i = Object.entries(o)
                        .map(([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build"));
                    let s = e ? i.length > 1 ? `since :
` + i.map(Hd)
                        .join(`
`) : " " + Hd(i[0]) : "as no adapter specified";
                    throw new pe("There is no suitable adapter to dispatch the request " + s, "ERR_NOT_SUPPORT")
                }
                return r
            }
            , adapters: fc
        };
    
    function Ra(t) { if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted) throw new Po(null, t) }
    
    function Bd(t) {
        return Ra(t), t.headers = Ht.from(t.headers), t.data = ka.call(t, t.transformRequest), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), vm.getAdapter(t.adapter || Ii.adapter)(t)
            .then(function (r) { return Ra(t), r.data = ka.call(t, t.transformResponse, r), r.headers = Ht.from(r.headers), r }, function (r) { return gm(r) || (Ra(t), r && r.response && (r.response.data = ka.call(t, t.transformResponse, r.response), r.response.headers = Ht.from(r.response.headers))), Promise.reject(r) })
    }
    const Em = "1.7.7"
        , ql = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => { ql[t] = function (r) { return typeof r === t || "a" + (e < 1 ? "n " : " ") + t } });
    const $d = {};
    ql.transitional = function (e, n, r) {
        function o(i, s) { return "[Axios v" + Em + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "") }
        return (i, s, a) => { if (e === !1) throw new pe(o(s, " has been removed" + (n ? " in " + n : "")), pe.ERR_DEPRECATED); return n && !$d[s] && ($d[s] = !0, console.warn(o(s, " has been deprecated since v" + n + " and will be removed in the near future"))), e ? e(i, s, a) : !0 }
    };
    
    function TI(t, e, n) {
        if (typeof t != "object") throw new pe("options must be an object", pe.ERR_BAD_OPTION_VALUE);
        const r = Object.keys(t);
        let o = r.length;
        for (; o-- > 0;) {
            const i = r[o]
                , s = e[i];
            if (s) {
                const a = t[i]
                    , c = a === void 0 || s(a, i, t);
                if (c !== !0) throw new pe("option " + i + " must be " + c, pe.ERR_BAD_OPTION_VALUE);
                continue
            }
            if (n !== !0) throw new pe("Unknown option " + i, pe.ERR_BAD_OPTION)
        }
    }
    const pc = { assertOptions: TI, validators: ql }
        , Jn = pc.validators;
    class Pr {
        constructor(e) { this.defaults = e, this.interceptors = { request: new Pd, response: new Pd } } async request(e, n) {
            try { return await this._request(e, n) } catch (r) {
                if (r instanceof Error) {
                    let o;
                    Error.captureStackTrace ? Error.captureStackTrace(o = {}) : o = new Error;
                    const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
                    try {
                        r.stack ? i && !String(r.stack)
                            .endsWith(i.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + i) : r.stack = i
                    } catch {}
                }
                throw r
            }
        }
        _request(e, n) {
            typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = Hr(this.defaults, n);
            const { transitional: r, paramsSerializer: o, headers: i } = n;
            r !== void 0 && pc.assertOptions(r, { silentJSONParsing: Jn.transitional(Jn.boolean), forcedJSONParsing: Jn.transitional(Jn.boolean), clarifyTimeoutError: Jn.transitional(Jn.boolean) }, !1), o != null && (U.isFunction(o) ? n.paramsSerializer = { serialize: o } : pc.assertOptions(o, { encode: Jn.function, serialize: Jn.function }, !0)), n.method = (n.method || this.defaults.method || "get")
                .toLowerCase();
            let s = i && U.merge(i.common, i[n.method]);
            i && U.forEach(["delete", "get", "head", "post", "put", "patch", "common"], A => { delete i[A] }), n.headers = Ht.concat(s, i);
            const a = [];
            let c = !0;
            this.interceptors.request.forEach(function (b) { typeof b.runWhen == "function" && b.runWhen(n) === !1 || (c = c && b.synchronous, a.unshift(b.fulfilled, b.rejected)) });
            const l = [];
            this.interceptors.response.forEach(function (b) { l.push(b.fulfilled, b.rejected) });
            let h, f = 0
                , g;
            if (!c) { const A = [Bd.bind(this), void 0]; for (A.unshift.apply(A, a), A.push.apply(A, l), g = A.length, h = Promise.resolve(n); f < g;) h = h.then(A[f++], A[f++]); return h } g = a.length;
            let T = n;
            for (f = 0; f < g;) {
                const A = a[f++]
                    , b = a[f++];
                try { T = A(T) } catch (k) { b.call(this, k); break }
            }
            try { h = Bd.call(this, T) } catch (A) { return Promise.reject(A) }
            for (f = 0, g = l.length; f < g;) h = h.then(l[f++], l[f++]);
            return h
        }
        getUri(e) { e = Hr(this.defaults, e); const n = ym(e.baseURL, e.url); return hm(n, e.params, e.paramsSerializer) }
    }
    U.forEach(["delete", "get", "head", "options"], function (e) {
        Pr.prototype[e] = function (n, r) {
            return this.request(Hr(r || {}, {
                method: e
                , url: n
                , data: (r || {})
                    .data
            }))
        }
    });
    U.forEach(["post", "put", "patch"], function (e) {
        function n(r) { return function (i, s, a) { return this.request(Hr(a || {}, { method: e, headers: r ? { "Content-Type": "multipart/form-data" } : {}, url: i, data: s })) } } Pr.prototype[e] = n(), Pr.prototype[e + "Form"] = n(!0)
    });
    class Vl {
        constructor(e) {
            if (typeof e != "function") throw new TypeError("executor must be a function.");
            let n;
            this.promise = new Promise(function (i) { n = i });
            const r = this;
            this.promise.then(o => {
                if (!r._listeners) return;
                let i = r._listeners.length;
                for (; i-- > 0;) r._listeners[i](o);
                r._listeners = null
            }), this.promise.then = o => {
                let i;
                const s = new Promise(a => { r.subscribe(a), i = a })
                    .then(o);
                return s.cancel = function () { r.unsubscribe(i) }, s
            }, e(function (i, s, a) { r.reason || (r.reason = new Po(i, s, a), n(r.reason)) })
        }
        throwIfRequested() { if (this.reason) throw this.reason } subscribe(e) { if (this.reason) { e(this.reason); return } this._listeners ? this._listeners.push(e) : this._listeners = [e] } unsubscribe(e) {
            if (!this._listeners) return;
            const n = this._listeners.indexOf(e);
            n !== -1 && this._listeners.splice(n, 1)
        }
        toAbortSignal() {
            const e = new AbortController
                , n = r => { e.abort(r) };
            return this.subscribe(n), e.signal.unsubscribe = () => this.unsubscribe(n), e.signal
        }
        static source() { let e; return { token: new Vl(function (o) { e = o }), cancel: e } }
    }
    
    function vI(t) { return function (n) { return t.apply(null, n) } }
    
    function EI(t) { return U.isObject(t) && t.isAxiosError === !0 }
    const gc = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511 };
    Object.entries(gc)
        .forEach(([t, e]) => { gc[e] = t });
    
    function Am(t) {
        const e = new Pr(t)
            , n = em(Pr.prototype.request, e);
        return U.extend(n, Pr.prototype, e, { allOwnKeys: !0 }), U.extend(n, e, null, { allOwnKeys: !0 }), n.create = function (o) { return Am(Hr(t, o)) }, n
    }
    const et = Am(Ii);
    et.Axios = Pr;
    et.CanceledError = Po;
    et.CancelToken = Vl;
    et.isCancel = gm;
    et.VERSION = Em;
    et.toFormData = Qs;
    et.AxiosError = pe;
    et.Cancel = et.CanceledError;
    et.all = function (e) { return Promise.all(e) };
    et.spread = vI;
    et.isAxiosError = EI;
    et.mergeConfig = Hr;
    et.AxiosHeaders = Ht;
    et.formToJSON = t => pm(U.isHTMLForm(t) ? new FormData(t) : t);
    et.getAdapter = vm.getAdapter;
    et.HttpStatusCode = gc;
    et.default = et;
    let ar, AI, bI, Xs, II;
    ar = { BASE_URL: "lernjournal.rafisa.net", PROTOCOL: "https", API_PORT: "80", UI_PORT: "80", MS_REDIRECT_URI: "https://lernjournal.rafisa.net/", MS_AUTHORITY: "https://login.microsoftonline.com/76154618-8054-4c16-b4e9-f8db7831e72d", MS_CLIENT_ID: "541adafc-8ed5-470c-8e03-3b806d093ef4", MS_API_ID: ["api://d04d1173-7f34-47af-b158-2817be245649/api-access"], MSAL_LOG_LEVEL: 0 };
    MO = { REACTIONS: !1 };
    AI = { LATEST: "v1.14.4" };
    bI = (t, e, n) => {
        if (!n && !(t >= ar.MSAL_LOG_LEVEL)) switch (t) {
        case Ue.Error:
            console.error(e);
            break;
        case Ue.Warning:
            console.warn(e);
            break;
        case Ue.Info:
            console.info(e);
            break;
        case Ue.Verbose:
            console.debug(e);
            break;
        default:
            return
        }
    };
    Xs = { msalConfig: { auth: { clientId: ar.MS_CLIENT_ID, authority: ar.MS_AUTHORITY, redirectUri: ar.MS_REDIRECT_URI, postLogoutRedirectUri: ar.MS_REDIRECT_URI, navigateToLoginRequestUrl: !0 }, cache: { cacheLocation: "localStorage", storeAuthStateInCookie: !1 }, system: { loggerOptions: { loggerCallback: bI, logLevel: Ue.Verbose } } }, request: { scopes: ["user.read"] }, apiTokenRequest: { scopes: ar.MS_API_ID }, graphTokenRequest: { scopes: ["user.read"] } };
    II = t => { typeof t.remove < "u" ? t.remove() : t.parentNode.removeChild(t) };
    class wI { constructor(e, n) { this.startedAt = Date.now(), this.callback = e, this.delay = n, this.timer = setTimeout(e, n) } pause() { this.stop(), this.delay -= Date.now() - this.startedAt } resume() { this.stop(), this.startedAt = Date.now(), this.timer = setTimeout(this.callback, this.delay) } stop() { clearTimeout(this.timer) } }
    const wr = { TOP_RIGHT: "top-right", TOP: "top", TOP_LEFT: "top-left", BOTTOM_RIGHT: "bottom-right", BOTTOM: "bottom", BOTTOM_LEFT: "bottom-left" }
        , Kd = Object.freeze(wr);
    
    function jd(t, e, n) {
        let r = null;
        switch (t) {
        case wr.TOP:
        case wr.TOP_RIGHT:
        case wr.TOP_LEFT:
            r = e;
            break;
        case wr.BOTTOM:
        case wr.BOTTOM_RIGHT:
        case wr.BOTTOM_LEFT:
            r = n;
            break
        }
        return r
    }
    let SI = class {
        constructor() { this.queue = {} } $on(e, n) { this.queue[e] = this.queue[e] || [], this.queue[e].push(n) } $off(e, n) {
            if (this.queue[e]) {
                for (var r = 0; r < this.queue[e].length; r++)
                    if (this.queue[e][r] === n) { this.queue[e].splice(r, 1); break }
            }
        }
        $emit(e, n) { this.queue[e] && this.queue[e].forEach(function (r) { r(n) }) }
    };
    const mc = new SI
        , kI = {
            name: "toast"
            , props: {
                message: { type: String, required: !0 }
                , type: { type: String, default: "default" }
                , position: {
                    type: String
                    , default: Kd.BOTTOM_RIGHT
                    , validator(t) {
                        return Object.values(Kd)
                            .includes(t)
                    }
                }
                , maxToasts: { type: [Number, Boolean], default: !1 }
                , duration: { type: [Number, Boolean], default: 4e3 }
                , dismissible: { type: Boolean, default: !0 }
                , queue: { type: Boolean, default: !1 }
                , pauseOnHover: { type: Boolean, default: !0 }
                , useDefaultCss: { type: Boolean, default: !0 }
                , onClose: { type: Function, default: () => {} }
                , onClick: { type: Function, default: () => {} }
            }
            , data() { return { isActive: !1, parentTop: null, parentBottom: null, isHovered: !1, timer: null } }
            , beforeMount() { this.createParents(), this.setDefaultCss(), this.setupContainer() }
            , mounted() { this.showNotice(), mc.$on("toast-clear", this.close) }
            , methods: {
                createParents() { this.parentTop = document.querySelector(".c-toast-container--top"), this.parentBottom = document.querySelector(".c-toast-container--bottom"), !(this.parentTop && this.parentBottom) && (this.parentTop || (this.parentTop = document.createElement("div"), this.parentTop.className = "c-toast-container c-toast-container--top"), this.parentBottom || (this.parentBottom = document.createElement("div"), this.parentBottom.className = "c-toast-container c-toast-container--bottom")) }
                , setDefaultCss() {
                    const t = this.useDefaultCss ? "add" : "remove";
                    this.parentTop.classList[t]("v--default-css"), this.parentBottom.classList[t]("v--default-css")
                }
                , setupContainer() {
                    const t = document.body;
                    t.appendChild(this.parentTop), t.appendChild(this.parentBottom)
                }
                , shouldQueue() { return !this.queue && this.maxToasts === !1 ? !1 : this.maxToasts !== !1 ? this.maxToasts <= this.parentTop.childElementCount + this.parentBottom.childElementCount : this.parentTop.childElementCount > 0 || this.parentBottom.childElementCount > 0 }
                , showNotice() { if (this.shouldQueue()) { this.queueTimer = setTimeout(this.showNotice, 250); return } this.correctParent.insertAdjacentElement("afterbegin", this.$el), this.isActive = !0, this.timer = this.duration !== !1 ? new wI(this.close, this.duration) : null }
                , click() { this.onClick.apply(null, arguments), this.dismissible && this.close() }
                , toggleTimer(t) { this.timer && this.pauseOnHover && (t ? this.timer.pause() : this.timer.resume()) }
                , stopTimer() { this.timer && this.timer.stop(), clearTimeout(this.queueTimer) }
                , close() { this.stopTimer(), this.isActive = !1, setTimeout(() => { this.onClose.apply(null, arguments), II(this.$el) }, 150) }
            }
            , computed: { correctParent() { return jd(this.position, this.parentTop, this.parentBottom) }, transition() { return jd(this.position, { enter: "fadeInDown", leave: "fadeOut" }, { enter: "fadeInUp", leave: "fadeOut" }) } }
            , beforeUnmount() { mc.$off("toast-clear", this.close) }
        }
        , RI = ["innerHTML"];
    
    function OI(t, e, n, r, o, i) { return Z(), $e(el, { "enter-active-class": i.transition.enter, "leave-active-class": i.transition.leave }, { default: Ae(() => [Ef(Q("div", { class: sn(["c-toast", `c-toast--${n.type}`, `c-toast--${n.position}`]), onMouseover: e[0] || (e[0] = s => i.toggleTimer(!0)), onMouseleave: e[1] || (e[1] = s => i.toggleTimer(!1)), onClick: e[2] || (e[2] = (...s) => i.click && i.click(...s)), role: "alert", innerHTML: n.message }, null, 42, RI), [[fp, o.isActive]])]), _: 1 }, 8, ["enter-active-class", "leave-active-class"]) }
    const Gl = Me(kI, [["render", OI]])
        , NI = () => typeof document < "u" && document.createElement("div")
        , PI = (t, { props: e, children: n, element: r, app: o } = {}) => {
            let i = r || NI()
                , s = ko(t, e, n);
            return o && o._context && (s.appContext = o._context), Yu(s, i), { vNode: s, destroy: () => { i && Yu(null, i), i = null, s = null }, el: i }
        }
        , bm = (t = {}) => ({ show(e, n = {}) { let r = { message: e, ...n }; return PI(Gl, { props: { ...t, ...r } }) }, clear() { mc.$emit("toast-clear") }, success(e, n = {}) { return n.type = "success", this.show(e, n) }, error(e, n = {}) { return n.type = "error", this.show(e, n) }, info(e, n = {}) { return n.type = "info", this.show(e, n) }, warning(e, n = {}) { return n.type = "warning", this.show(e, n) } })
        , MI = (t, e = {}) => {
            let n = bm(e);
            t.$toast = n, t.config.globalProperties.$toast = n
        };
    Gl.install = MI;
    const Es = typeof window < "u"
        , yr = (t, e = !1) => e ? Symbol.for(t) : Symbol(t)
        , LI = (t, e, n) => DI({ l: t, k: e, s: n })
        , DI = t => JSON.stringify(t)
        .replace(/\u2028/g, "\\u2028")
        .replace(/\u2029/g, "\\u2029")
        .replace(/\u0027/g, "\\u0027")
        , ot = t => typeof t == "number" && isFinite(t)
        , xI = t => wm(t) === "[object Date]"
        , pr = t => wm(t) === "[object RegExp]"
        , Zs = t => he(t) && Object.keys(t)
        .length === 0
        , _t = Object.assign;
    let qd;
    const Fn = () => qd || (qd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
    
    function Vd(t) {
        return t.replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&apos;")
    }
    const UI = Object.prototype.hasOwnProperty;
    
    function As(t, e) { return UI.call(t, e) }
    const Ye = Array.isArray
        , Ve = t => typeof t == "function"
        , J = t => typeof t == "string"
        , Te = t => typeof t == "boolean"
        , Oe = t => t !== null && typeof t == "object"
        , FI = t => Oe(t) && Ve(t.then) && Ve(t.catch)
        , Im = Object.prototype.toString
        , wm = t => Im.call(t)
        , he = t => { if (!Oe(t)) return !1; const e = Object.getPrototypeOf(t); return e === null || e.constructor === Object }
        , HI = t => t == null ? "" : Ye(t) || he(t) && t.toString === Im ? JSON.stringify(t, null, 2) : String(t);
    
    function BI(t, e = "") {
    return t.reduce((n, r, o) => (o === 0 ? n + r : n + e + r), "");
}

function ea(t) {
    let e = t;
    return () => ++e;
}

function $I(t, e) {
    if (typeof console !== "undefined") {
        console.warn("[intlify] " + t);
        if (e) console.warn(e.stack);
    }
}

const qi = t => !Oe(t) || Ye(t);

function Zi(t, e) {
    if (qi(t) || qi(e)) throw new Error("Invalid value");
    const n = [{ src: t, des: e }];
    while (n.length) {
        const { src: r, des: o } = n.pop();
        Object.keys(r).forEach(i => {
            if (Oe(r[i]) && !Oe(o[i])) {
                o[i] = Array.isArray(r[i]) ? [] : {};
            }
            if (!qi(o[i]) && !qi(r[i])) {
                n.push({ src: r[i], des: o[i] });
            } else {
                o[i] = r[i];
            }
        });
    }
}

function KI(t, e, n) {
    return { line: t, column: e, offset: n };
}

function bs(t, e, n) {
    return { start: t, end: e };
}

const jI = /\{([0-9a-zA-Z]+)\}/g;

function Sm(t, ...e) {
    if (e.length === 1 && qI(e[0])) e = e[0];
    if (!e || !e.hasOwnProperty) e = {};
    return t.replace(jI, (n, r) => (e.hasOwnProperty(r) ? e[r] : ""));
}

const km = Object.assign,
      Gd = t => typeof t === "string",
      qI = t => t !== null && typeof t === "object";

function Rm(t, e = "") {
    return t.reduce((n, r, o) => (o === 0 ? n + r : n + e + r), "");
}

const Wl = { USE_MODULO_SYNTAX: 1, __EXTEND_POINT__: 2 },
      VI = {
          [Wl.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
      };

function GI(t, e, ...n) {
    const r = Sm(VI[t], ...n || []);
    const o = { message: String(r), code: t };
    if (e) o.location = e;
    return o;
}

const le = {
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
    UNHANDLED_CODEGEN_NODE_TYPE: 15,
    UNHANDLED_MINIFIER_NODE_TYPE: 16,
    __EXTEND_POINT__: 17
};

const WI = {
    [le.EXPECTED_TOKEN]: "Expected token: '{0}'",
    [le.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
    [le.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
    [le.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
    [le.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
    [le.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
    [le.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
    [le.EMPTY_PLACEHOLDER]: "Empty placeholder",
    [le.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
    [le.INVALID_LINKED_FORMAT]: "Invalid linked format",
    [le.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
    [le.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
    [le.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
    [le.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
    [le.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
    [le.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled minifier node type: '{0}'"
};

function Mo(t, e, n = {}) {
    const { domain: r, messages: o, args: i } = n;
    const s = Sm((o || WI)[t] || "", ...i || []);
    const a = new SyntaxError(String(s));
    a.code = t;
    if (e) {
        a.location = e;
    }
    a.domain = r;
    return a;
}

function zI(t) {
    throw t;
}

const Pn = " ",
      YI = "\r",
      Pt = ``,
      QI = "",
      JI = "";

function XI(t) {
    const e = t;
    let n = 0,
        r = 1,
        o = 1,
        i = 0;

    const s = K => e[K] === YI && e[K + 1] === Pt,
          a = K => e[K] === Pn,
          c = K => e[K] === JI,
          l = K => e[K] === QI,
          h = K => s(K) || a(K) || c(K) || l(K),
          f = () => n,
          g = () => r,
          T = () => o,
          A = () => i,
          b = K => s(K) || c(K) || l(K) ? Pt : e[K],
          k = () => b(n),
          O = () => b(n + i);

    function x() {
        return i = 0, h(n) && (r++, o = 0), s(n) && n++, n++, o++, e[n];
    }
        
        function I() { return s(n + i) && i++, i++, e[n + i] }
        
        function w() { n = 0, r = 1, o = 1, i = 0 }
        
        function M(K = 0) { i = K }
        
        function L() {
            const K = n + i;
            for (; K !== n;) x();
            i = 0
        }
        return { index: f, line: g, column: T, peekOffset: A, charAt: b, currentChar: k, currentPeek: O, next: x, peek: I, reset: w, resetPeek: M, skipToPeek: L }
    }
    const Xn = void 0
        , ZI = "."
        , Wd = "'"
        , ew = "tokenizer";
    
    function tw(t, e = {}) {
        const n = e.location !== !1
            , r = XI(t)
            , o = () => r.index()
            , i = () => KI(r.line(), r.column(), r.index())
            , s = i()
            , a = o()
            , c = { currentType: 14, offset: a, startLoc: s, endLoc: s, lastType: 14, lastOffset: a, lastStartLoc: s, lastEndLoc: s, braceNest: 0, inLinked: !1, text: "" }
            , l = () => c
            , { onError: h } = e;
        
        function f(p, y, v, ...D) {
            const $ = l();
            if (y.column += v, y.offset += v, h) {
                const B = n ? bs($.startLoc, y) : null
                    , S = Mo(p, B, { domain: ew, args: D });
                h(S)
            }
        }
        
        function g(p, y, v) { p.endLoc = i(), p.currentType = y; const D = { type: y }; return n && (D.loc = bs(p.startLoc, p.endLoc)), v != null && (D.value = v), D }
        const T = p => g(p, 14);
        
        function A(p, y) { return p.currentChar() === y ? (p.next(), y) : (f(le.EXPECTED_TOKEN, i(), 0, y), "") }
        
        function b(p) { let y = ""; for (; p.currentPeek() === Pn || p.currentPeek() === Pt;) y += p.currentPeek(), p.peek(); return y }
        
        function k(p) { const y = b(p); return p.skipToPeek(), y }
        
        function O(p) { if (p === Xn) return !1; const y = p.charCodeAt(0); return y >= 97 && y <= 122 || y >= 65 && y <= 90 || y === 95 }
        
        function x(p) { if (p === Xn) return !1; const y = p.charCodeAt(0); return y >= 48 && y <= 57 }
        
        function I(p, y) {
            const { currentType: v } = y;
            if (v !== 2) return !1;
            b(p);
            const D = O(p.currentPeek());
            return p.resetPeek(), D
        }
        
        function w(p, y) {
            const { currentType: v } = y;
            if (v !== 2) return !1;
            b(p);
            const D = p.currentPeek() === "-" ? p.peek() : p.currentPeek()
                , $ = x(D);
            return p.resetPeek(), $
        }
        
        function M(p, y) {
            const { currentType: v } = y;
            if (v !== 2) return !1;
            b(p);
            const D = p.currentPeek() === Wd;
            return p.resetPeek(), D
        }
        
        function L(p, y) {
            const { currentType: v } = y;
            if (v !== 8) return !1;
            b(p);
            const D = p.currentPeek() === ".";
            return p.resetPeek(), D
        }
        
        function K(p, y) {
            const { currentType: v } = y;
            if (v !== 9) return !1;
            b(p);
            const D = O(p.currentPeek());
            return p.resetPeek(), D
        }
        
        function G(p, y) {
            const { currentType: v } = y;
            if (!(v === 8 || v === 12)) return !1;
            b(p);
            const D = p.currentPeek() === ":";
            return p.resetPeek(), D
        }
        
        function H(p, y) {
            const { currentType: v } = y;
            if (v !== 10) return !1;
            const D = () => { const B = p.currentPeek(); return B === "{" ? O(p.peek()) : B === "@" || B === "%" || B === "|" || B === ":" || B === "." || B === Pn || !B ? !1 : B === Pt ? (p.peek(), D()) : V(p, !1) }
                , $ = D();
            return p.resetPeek(), $
        }
        
        function te(p) { b(p); const y = p.currentPeek() === "|"; return p.resetPeek(), y }
        
        function de(p) {
            const y = b(p)
                , v = p.currentPeek() === "%" && p.peek() === "{";
            return p.resetPeek(), { isModulo: v, hasSpace: y.length > 0 }
        }
        
        function V(p, y = !0) {
            const v = ($ = !1, B = "", S = !1) => { const P = p.currentPeek(); return P === "{" ? B === "%" ? !1 : $ : P === "@" || !P ? B === "%" ? !0 : $ : P === "%" ? (p.peek(), v($, "%", !0)) : P === "|" ? B === "%" || S ? !0 : !(B === Pn || B === Pt) : P === Pn ? (p.peek(), v(!0, Pn, S)) : P === Pt ? (p.peek(), v(!0, Pt, S)) : !0 }
                , D = v();
            return y && p.resetPeek(), D
        }
        
        function se(p, y) { const v = p.currentChar(); return v === Xn ? Xn : y(v) ? (p.next(), v) : null }
        
        function He(p) { const y = p.charCodeAt(0); return y >= 97 && y <= 122 || y >= 65 && y <= 90 || y >= 48 && y <= 57 || y === 95 || y === 36 }
        
        function tt(p) { return se(p, He) }
        
        function Se(p) { const y = p.charCodeAt(0); return y >= 97 && y <= 122 || y >= 65 && y <= 90 || y >= 48 && y <= 57 || y === 95 || y === 36 || y === 45 }
        
        function Ee(p) { return se(p, Se) }
        
        function Ce(p) { const y = p.charCodeAt(0); return y >= 48 && y <= 57 }
        
        function gt(p) { return se(p, Ce) }
        
        function vt(p) { const y = p.charCodeAt(0); return y >= 48 && y <= 57 || y >= 65 && y <= 70 || y >= 97 && y <= 102 }
        
        function ge(p) { return se(p, vt) }
        
        function ve(p) {
            let y = ""
                , v = "";
            for (; y = gt(p);) v += y;
            return v
        }
        
        function kt(p) { k(p); const y = p.currentChar(); return y !== "%" && f(le.EXPECTED_TOKEN, i(), 0, y), p.next(), "%" }
        
        function Et(p) {
            let y = "";
            for (;;) {
                const v = p.currentChar();
                if (v === "{" || v === "}" || v === "@" || v === "|" || !v) break;
                if (v === "%")
                    if (V(p)) y += v, p.next();
                    else break;
                else if (v === Pn || v === Pt)
                    if (V(p)) y += v, p.next();
                    else {
                        if (te(p)) break;
                        y += v, p.next()
                    }
                else y += v, p.next()
            }
            return y
        }
        
        function Bt(p) {
            k(p);
            let y = ""
                , v = "";
            for (; y = Ee(p);) v += y;
            return p.currentChar() === Xn && f(le.UNTERMINATED_CLOSING_BRACE, i(), 0), v
        }
        
        function nt(p) { k(p); let y = ""; return p.currentChar() === "-" ? (p.next(), y += `-${ve(p)}`) : y += ve(p), p.currentChar() === Xn && f(le.UNTERMINATED_CLOSING_BRACE, i(), 0), y }
        
        function j(p) { return p !== Wd && p !== Pt }
        
        function Y(p) {
            k(p), A(p, "'");
            let y = ""
                , v = "";
            for (; y = se(p, j);) y === "\\" ? v += z(p) : v += y;
            const D = p.currentChar();
            return D === Pt || D === Xn ? (f(le.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, i(), 0), D === Pt && (p.next(), A(p, "'")), v) : (A(p, "'"), v)
        }
        
        function z(p) {
            const y = p.currentChar();
            switch (y) {
            case "\\":
            case "'":
                return p.next(), `\\${y}`;
            case "u":
                return X(p, y, 4);
            case "U":
                return X(p, y, 6);
            default:
                return f(le.UNKNOWN_ESCAPE_SEQUENCE, i(), 0, y), ""
            }
        }
        
        function X(p, y, v) { A(p, y); let D = ""; for (let $ = 0; $ < v; $++) { const B = ge(p); if (!B) { f(le.INVALID_UNICODE_ESCAPE_SEQUENCE, i(), 0, `\\${y}${D}${p.currentChar()}`); break } D += B } return `\\${y}${D}` }
        
        function _e(p) { return p !== "{" && p !== "}" && p !== Pn && p !== Pt }
        
        function ke(p) {
            k(p);
            let y = ""
                , v = "";
            for (; y = se(p, _e);) v += y;
            return v
        }
        
        function E(p) {
            let y = ""
                , v = "";
            for (; y = tt(p);) v += y;
            return v
        }
        
        function _(p) { const y = v => { const D = p.currentChar(); return D === "{" || D === "%" || D === "@" || D === "|" || D === "(" || D === ")" || !D || D === Pn ? v : (v += D, p.next(), y(v)) }; return y("") }
        
        function R(p) { k(p); const y = A(p, "|"); return k(p), y }
        
        function m(p, y) {
            let v = null;
            switch (p.currentChar()) {
            case "{":
                return y.braceNest >= 1 && f(le.NOT_ALLOW_NEST_PLACEHOLDER, i(), 0), p.next(), v = g(y, 2, "{"), k(p), y.braceNest++, v;
            case "}":
                return y.braceNest > 0 && y.currentType === 2 && f(le.EMPTY_PLACEHOLDER, i(), 0), p.next(), v = g(y, 3, "}"), y.braceNest--, y.braceNest > 0 && k(p), y.inLinked && y.braceNest === 0 && (y.inLinked = !1), v;
            case "@":
                return y.braceNest > 0 && f(le.UNTERMINATED_CLOSING_BRACE, i(), 0), v = u(p, y) || T(y), y.braceNest = 0, v;
            default: {
                let $ = !0
                    , B = !0
                    , S = !0;
                if (te(p)) return y.braceNest > 0 && f(le.UNTERMINATED_CLOSING_BRACE, i(), 0), v = g(y, 1, R(p)), y.braceNest = 0, y.inLinked = !1, v;
                if (y.braceNest > 0 && (y.currentType === 5 || y.currentType === 6 || y.currentType === 7)) return f(le.UNTERMINATED_CLOSING_BRACE, i(), 0), y.braceNest = 0, d(p, y);
                if ($ = I(p, y)) return v = g(y, 5, Bt(p)), k(p), v;
                if (B = w(p, y)) return v = g(y, 6, nt(p)), k(p), v;
                if (S = M(p, y)) return v = g(y, 7, Y(p)), k(p), v;
                if (!$ && !B && !S) return v = g(y, 13, ke(p)), f(le.INVALID_TOKEN_IN_PLACEHOLDER, i(), 0, v.value), k(p), v;
                break
            }
            }
            return v
        }
        
        function u(p, y) {
            const { currentType: v } = y;
            let D = null;
            const $ = p.currentChar();
            switch ((v === 8 || v === 9 || v === 12 || v === 10) && ($ === Pt || $ === Pn) && f(le.INVALID_LINKED_FORMAT, i(), 0), $) {
            case "@":
                return p.next(), D = g(y, 8, "@"), y.inLinked = !0, D;
            case ".":
                return k(p), p.next(), g(y, 9, ".");
            case ":":
                return k(p), p.next(), g(y, 10, ":");
            default:
                return te(p) ? (D = g(y, 1, R(p)), y.braceNest = 0, y.inLinked = !1, D) : L(p, y) || G(p, y) ? (k(p), u(p, y)) : K(p, y) ? (k(p), g(y, 12, E(p))) : H(p, y) ? (k(p), $ === "{" ? m(p, y) || D : g(y, 11, _(p))) : (v === 8 && f(le.INVALID_LINKED_FORMAT, i(), 0), y.braceNest = 0, y.inLinked = !1, d(p, y))
            }
        }
        
        function d(p, y) {
            let v = { type: 14 };
            if (y.braceNest > 0) return m(p, y) || T(y);
            if (y.inLinked) return u(p, y) || T(y);
            switch (p.currentChar()) {
            case "{":
                return m(p, y) || T(y);
            case "}":
                return f(le.UNBALANCED_CLOSING_BRACE, i(), 0), p.next(), g(y, 3, "}");
            case "@":
                return u(p, y) || T(y);
            default: { if (te(p)) return v = g(y, 1, R(p)), y.braceNest = 0, y.inLinked = !1, v; const { isModulo: $, hasSpace: B } = de(p); if ($) return B ? g(y, 0, Et(p)) : g(y, 4, kt(p)); if (V(p)) return g(y, 0, Et(p)); break }
            }
            return v
        }
        
        function C() { const { currentType: p, offset: y, startLoc: v, endLoc: D } = c; return c.lastType = p, c.lastOffset = y, c.lastStartLoc = v, c.lastEndLoc = D, c.offset = o(), c.startLoc = i(), r.currentChar() === Xn ? g(c, 14) : d(r, c) }
        return { nextToken: C, currentOffset: o, currentPosition: i, context: l }
    }
    const nw = "parser"
        , rw = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
    
    function ow(t, e, n) {
        switch (t) {
        case "\\\\":
            return "\\";
        case "\\'":
            return "'";
        default: { const r = parseInt(e || n, 16); return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "�" }
        }
    }
    
    function iw(t = {}) {
        const e = t.location !== !1
            , { onError: n, onWarn: r } = t;
        
        function o(I, w, M, L, ...K) {
            const G = I.currentPosition();
            if (G.offset += L, G.column += L, n) {
                const H = e ? bs(M, G) : null
                    , te = Mo(w, H, { domain: nw, args: K });
                n(te)
            }
        }
        
        function i(I, w, M, L, ...K) {
            const G = I.currentPosition();
            if (G.offset += L, G.column += L, r) {
                const H = e ? bs(M, G) : null;
                r(GI(w, H, K))
            }
        }
        
        function s(I, w, M) { const L = { type: I }; return e && (L.start = w, L.end = w, L.loc = { start: M, end: M }), L }
        
        function a(I, w, M, L) { e && (I.end = w, I.loc && (I.loc.end = M)) }
        
        function c(I, w) {
            const M = I.context()
                , L = s(3, M.offset, M.startLoc);
            return L.value = w, a(L, I.currentOffset(), I.currentPosition()), L
        }
        
        function l(I, w) {
            const M = I.context()
                , { lastOffset: L, lastStartLoc: K } = M
                , G = s(5, L, K);
            return G.index = parseInt(w, 10), I.nextToken(), a(G, I.currentOffset(), I.currentPosition()), G
        }
        
        function h(I, w, M) {
            const L = I.context()
                , { lastOffset: K, lastStartLoc: G } = L
                , H = s(4, K, G);
            return H.key = w, M === !0 && (H.modulo = !0), I.nextToken(), a(H, I.currentOffset(), I.currentPosition()), H
        }
        
        function f(I, w) {
            const M = I.context()
                , { lastOffset: L, lastStartLoc: K } = M
                , G = s(9, L, K);
            return G.value = w.replace(rw, ow), I.nextToken(), a(G, I.currentOffset(), I.currentPosition()), G
        }
        
        function g(I) {
            const w = I.nextToken()
                , M = I.context()
                , { lastOffset: L, lastStartLoc: K } = M
                , G = s(8, L, K);
            return w.type !== 12 ? (o(I, le.UNEXPECTED_EMPTY_LINKED_MODIFIER, M.lastStartLoc, 0), G.value = "", a(G, L, K), { nextConsumeToken: w, node: G }) : (w.value == null && o(I, le.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, tn(w)), G.value = w.value || "", a(G, I.currentOffset(), I.currentPosition()), { node: G })
        }
        
        function T(I, w) {
            const M = I.context()
                , L = s(7, M.offset, M.startLoc);
            return L.value = w, a(L, I.currentOffset(), I.currentPosition()), L
        }
        
        function A(I) {
            const w = I.context()
                , M = s(6, w.offset, w.startLoc);
            let L = I.nextToken();
            if (L.type === 9) {
                const K = g(I);
                M.modifier = K.node, L = K.nextConsumeToken || I.nextToken()
            }
            switch (L.type !== 10 && o(I, le.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, tn(L)), L = I.nextToken(), L.type === 2 && (L = I.nextToken()), L.type) {
            case 11:
                L.value == null && o(I, le.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, tn(L)), M.key = T(I, L.value || "");
                break;
            case 5:
                L.value == null && o(I, le.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, tn(L)), M.key = h(I, L.value || "");
                break;
            case 6:
                L.value == null && o(I, le.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, tn(L)), M.key = l(I, L.value || "");
                break;
            case 7:
                L.value == null && o(I, le.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, tn(L)), M.key = f(I, L.value || "");
                break;
            default: {
                o(I, le.UNEXPECTED_EMPTY_LINKED_KEY, w.lastStartLoc, 0);
                const K = I.context()
                    , G = s(7, K.offset, K.startLoc);
                return G.value = "", a(G, K.offset, K.startLoc), M.key = G, a(M, K.offset, K.startLoc), { nextConsumeToken: L, node: M }
            }
            }
            return a(M, I.currentOffset(), I.currentPosition()), { node: M }
        }
        
        function b(I) {
            const w = I.context()
                , M = w.currentType === 1 ? I.currentOffset() : w.offset
                , L = w.currentType === 1 ? w.endLoc : w.startLoc
                , K = s(2, M, L);
            K.items = [];
            let G = null
                , H = null;
            do {
                const V = G || I.nextToken();
                switch (G = null, V.type) {
                case 0:
                    V.value == null && o(I, le.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, tn(V)), K.items.push(c(I, V.value || ""));
                    break;
                case 6:
                    V.value == null && o(I, le.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, tn(V)), K.items.push(l(I, V.value || ""));
                    break;
                case 4:
                    H = !0;
                    break;
                case 5:
                    V.value == null && o(I, le.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, tn(V)), K.items.push(h(I, V.value || "", !!H)), H && (i(I, Wl.USE_MODULO_SYNTAX, w.lastStartLoc, 0, tn(V)), H = null);
                    break;
                case 7:
                    V.value == null && o(I, le.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, tn(V)), K.items.push(f(I, V.value || ""));
                    break;
                case 8: {
                    const se = A(I);
                    K.items.push(se.node), G = se.nextConsumeToken || null;
                    break
                }
                }
            } while (w.currentType !== 14 && w.currentType !== 1);
            const te = w.currentType === 1 ? w.lastOffset : I.currentOffset()
                , de = w.currentType === 1 ? w.lastEndLoc : I.currentPosition();
            return a(K, te, de), K
        }
        
        function k(I, w, M, L) {
            const K = I.context();
            let G = L.items.length === 0;
            const H = s(1, w, M);
            H.cases = [], H.cases.push(L);
            do {
                const te = b(I);
                G || (G = te.items.length === 0), H.cases.push(te)
            } while (K.currentType !== 14);
            return G && o(I, le.MUST_HAVE_MESSAGES_IN_PLURAL, M, 0), a(H, I.currentOffset(), I.currentPosition()), H
        }
        
        function O(I) {
            const w = I.context()
                , { offset: M, startLoc: L } = w
                , K = b(I);
            return w.currentType === 14 ? K : k(I, M, L, K)
        }
        
        function x(I) {
            const w = tw(I, km({}, t))
                , M = w.context()
                , L = s(0, M.offset, M.startLoc);
            return e && L.loc && (L.loc.source = I), L.body = O(w), t.onCacheKey && (L.cacheKey = t.onCacheKey(I)), M.currentType !== 14 && o(w, le.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, I[M.offset] || ""), a(L, w.currentOffset(), w.currentPosition()), L
        }
        return { parse: x }
    }
    
    function tn(t) {
        if (t.type === 14) return "EOF";
        const e = (t.value || "")
            .replace(/\r?\n/gu, "\\n");
        return e.length > 10 ? e.slice(0, 9) + "…" : e
    }
    
    function sw(t, e = {}) { const n = { ast: t, helpers: new Set }; return { context: () => n, helper: i => (n.helpers.add(i), i) } }
    
    function zd(t, e) { for (let n = 0; n < t.length; n++) zl(t[n], e) }
    
    function zl(t, e) {
        switch (t.type) {
        case 1:
            zd(t.cases, e), e.helper("plural");
            break;
        case 2:
            zd(t.items, e);
            break;
        case 6: { zl(t.key, e), e.helper("linked"), e.helper("type"); break }
        case 5:
            e.helper("interpolate"), e.helper("list");
            break;
        case 4:
            e.helper("interpolate"), e.helper("named");
            break
        }
    }
    
    function aw(t, e = {}) {
        const n = sw(t);
        n.helper("normalize"), t.body && zl(t.body, n);
        const r = n.context();
        t.helpers = Array.from(r.helpers)
    }
    
    function cw(t) { const e = t.body; return e.type === 2 ? Yd(e) : e.cases.forEach(n => Yd(n)), t }
    
    function Yd(t) {
        if (t.items.length === 1) {
            const e = t.items[0];
            (e.type === 3 || e.type === 9) && (t.static = e.value, delete e.value)
        } else {
            const e = [];
            for (let n = 0; n < t.items.length; n++) {
                const r = t.items[n];
                if (!(r.type === 3 || r.type === 9) || r.value == null) break;
                e.push(r.value)
            }
            if (e.length === t.items.length) {
                t.static = Rm(e);
                for (let n = 0; n < t.items.length; n++) {
                    const r = t.items[n];
                    (r.type === 3 || r.type === 9) && delete r.value
                }
            }
        }
    }
    const lw = "minifier";
    
    function Jr(t) {
        switch (t.t = t.type, t.type) {
        case 0: {
            const e = t;
            Jr(e.body), e.b = e.body, delete e.body;
            break
        }
        case 1: {
            const e = t
                , n = e.cases;
            for (let r = 0; r < n.length; r++) Jr(n[r]);
            e.c = n, delete e.cases;
            break
        }
        case 2: {
            const e = t
                , n = e.items;
            for (let r = 0; r < n.length; r++) Jr(n[r]);
            e.i = n, delete e.items, e.static && (e.s = e.static, delete e.static);
            break
        }
        case 3:
        case 9:
        case 8:
        case 7: {
            const e = t;
            e.value && (e.v = e.value, delete e.value);
            break
        }
        case 6: {
            const e = t;
            Jr(e.key), e.k = e.key, delete e.key, e.modifier && (Jr(e.modifier), e.m = e.modifier, delete e.modifier);
            break
        }
        case 5: {
            const e = t;
            e.i = e.index, delete e.index;
            break
        }
        case 4: {
            const e = t;
            e.k = e.key, delete e.key;
            break
        }
        default:
            throw Mo(le.UNHANDLED_MINIFIER_NODE_TYPE, null, { domain: lw, args: [t.type] })
        }
        delete t.type
    }
    const uw = "parser";
    
    function dw(t, e) {
        const { sourceMap: n, filename: r, breakLineCode: o, needIndent: i } = e, s = e.location !== !1, a = { filename: r, code: "", column: 1, line: 1, offset: 0, map: void 0, breakLineCode: o, needIndent: i, indentLevel: 0 };
        s && t.loc && (a.source = t.loc.source);
        const c = () => a;
        
        function l(k, O) { a.code += k }
        
        function h(k, O = !0) {
            const x = O ? o : "";
            l(i ? x + "  ".repeat(k) : x)
        }
        
        function f(k = !0) {
            const O = ++a.indentLevel;
            k && h(O)
        }
        
        function g(k = !0) {
            const O = --a.indentLevel;
            k && h(O)
        }
        
        function T() { h(a.indentLevel) }
        return { context: c, push: l, indent: f, deindent: g, newline: T, helper: k => `_${k}`, needIndent: () => a.needIndent }
    }
    
    function hw(t, e) {
        const { helper: n } = t;
        t.push(`${n("linked")}(`), vo(t, e.key), e.modifier ? (t.push(", "), vo(t, e.modifier), t.push(", _type")) : t.push(", undefined, _type"), t.push(")")
    }
    
    function fw(t, e) {
        const { helper: n, needIndent: r } = t;
        t.push(`${n("normalize")}([`), t.indent(r());
        const o = e.items.length;
        for (let i = 0; i < o && (vo(t, e.items[i]), i !== o - 1); i++) t.push(", ");
        t.deindent(r()), t.push("])")
    }
    
    function pw(t, e) {
        const { helper: n, needIndent: r } = t;
        if (e.cases.length > 1) {
            t.push(`${n("plural")}([`), t.indent(r());
            const o = e.cases.length;
            for (let i = 0; i < o && (vo(t, e.cases[i]), i !== o - 1); i++) t.push(", ");
            t.deindent(r()), t.push("])")
        }
    }
    
    function gw(t, e) { e.body ? vo(t, e.body) : t.push("null") }
    
    function vo(t, e) {
        const { helper: n } = t;
        switch (e.type) {
        case 0:
            gw(t, e);
            break;
        case 1:
            pw(t, e);
            break;
        case 2:
            fw(t, e);
            break;
        case 6:
            hw(t, e);
            break;
        case 8:
            t.push(JSON.stringify(e.value), e);
            break;
        case 7:
            t.push(JSON.stringify(e.value), e);
            break;
        case 5:
            t.push(`${n("interpolate")}(${n("list")}(${e.index}))`, e);
            break;
        case 4:
            t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`, e);
            break;
        case 9:
            t.push(JSON.stringify(e.value), e);
            break;
        case 3:
            t.push(JSON.stringify(e.value), e);
            break;
        default:
            throw Mo(le.UNHANDLED_CODEGEN_NODE_TYPE, null, { domain: uw, args: [e.type] })
        }
    }
    const mw = (t, e = {}) => {
        const n = Gd(e.mode) ? e.mode : "normal"
            , r = Gd(e.filename) ? e.filename : "message.intl"
            , o = !!e.sourceMap
            , i = e.breakLineCode != null ? e.breakLineCode : n === "arrow" ? ";" : `
`
            , s = e.needIndent ? e.needIndent : n !== "arrow"
            , a = t.helpers || []
            , c = dw(t, { mode: n, filename: r, sourceMap: o, breakLineCode: i, needIndent: s });
        c.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), c.indent(s), a.length > 0 && (c.push(`const { ${Rm(a.map(f=>`${f}: _${f}`),", ")} } = ctx`), c.newline()), c.push("return "), vo(c, t), c.deindent(s), c.push("}"), delete t.helpers;
        const { code: l, map: h } = c.context();
        return { ast: t, code: l, map: h ? h.toJSON() : void 0 }
    };
    
    function yw(t, e = {}) {
        const n = km({}, e)
            , r = !!n.jit
            , o = !!n.minify
            , i = n.optimize == null ? !0 : n.optimize
            , a = iw(n)
            .parse(t);
        return r ? (i && cw(a), o && Jr(a), { ast: a, code: "" }) : (aw(a, n), mw(a, n))
    }
    
    function Cw() {
        typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Fn()
            .__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Fn()
            .__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Fn()
            .__INTLIFY_DROP_MESSAGE_COMPILER__ = !1)
    }
    const Cr = [];
    Cr[0] = { w: [0], i: [3, 0], "[": [4], o: [7] };
    Cr[1] = { w: [1], ".": [2], "[": [4], o: [7] };
    Cr[2] = { w: [2], i: [3, 0], 0: [3, 0] };
    Cr[3] = { i: [3, 0], 0: [3, 0], w: [1, 1], ".": [2, 1], "[": [4, 1], o: [7, 1] };
    Cr[4] = { "'": [5, 0], '"': [6, 0], "[": [4, 2], "]": [1, 3], o: 8, l: [4, 0] };
    Cr[5] = { "'": [4, 0], o: 8, l: [5, 0] };
    Cr[6] = { '"': [4, 0], o: 8, l: [6, 0] };
    const _w = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
    
    function Tw(t) { return _w.test(t) }
    
    function vw(t) {
        const e = t.charCodeAt(0)
            , n = t.charCodeAt(t.length - 1);
        return e === n && (e === 34 || e === 39) ? t.slice(1, -1) : t
    }
    
    function Ew(t) {
        if (t == null) return "o";
        switch (t.charCodeAt(0)) {
        case 91:
        case 93:
        case 46:
        case 34:
        case 39:
            return t;
        case 95:
        case 36:
        case 45:
            return "i";
        case 9:
        case 10:
        case 13:
        case 160:
        case 65279:
        case 8232:
        case 8233:
            return "w"
        }
        return "i"
    }
    
    function Aw(t) { const e = t.trim(); return t.charAt(0) === "0" && isNaN(parseInt(t)) ? !1 : Tw(e) ? vw(e) : "*" + e }
    
    function bw(t) {
        const e = [];
        let n = -1
            , r = 0
            , o = 0
            , i, s, a, c, l, h, f;
        const g = [];
        g[0] = () => { s === void 0 ? s = a : s += a }, g[1] = () => { s !== void 0 && (e.push(s), s = void 0) }, g[2] = () => { g[0](), o++ }, g[3] = () => {
            if (o > 0) o--, r = 4, g[0]();
            else {
                if (o = 0, s === void 0 || (s = Aw(s), s === !1)) return !1;
                g[1]()
            }
        };
        
        function T() { const A = t[n + 1]; if (r === 5 && A === "'" || r === 6 && A === '"') return n++, a = "\\" + A, g[0](), !0 }
        for (; r !== null;)
            if (n++, i = t[n], !(i === "\\" && T())) { if (c = Ew(i), f = Cr[r], l = f[c] || f.l || 8, l === 8 || (r = l[0], l[1] !== void 0 && (h = g[l[1]], h && (a = i, h() === !1)))) return; if (r === 7) return e }
    }
    const Qd = new Map;
    
    function Iw(t, e) { return Oe(t) ? t[e] : null }
    
    function ww(t, e) {
        if (!Oe(t)) return null;
        let n = Qd.get(e);
        if (n || (n = bw(e), n && Qd.set(e, n)), !n) return null;
        const r = n.length;
        let o = t
            , i = 0;
        for (; i < r;) {
            const s = o[n[i]];
            if (s === void 0 || Ve(o)) return null;
            o = s, i++
        }
        return o
    }
    const Sw = t => t
        , kw = t => ""
        , Rw = "text"
        , Ow = t => t.length === 0 ? "" : BI(t)
        , Nw = HI;
    
    function Jd(t, e) { return t = Math.abs(t), e === 2 ? t ? t > 1 ? 1 : 0 : 1 : t ? Math.min(t, 2) : 0 }
    
    function Pw(t) { const e = ot(t.pluralIndex) ? t.pluralIndex : -1; return t.named && (ot(t.named.count) || ot(t.named.n)) ? ot(t.named.count) ? t.named.count : ot(t.named.n) ? t.named.n : e : e }
    
    function Mw(t, e) { e.count || (e.count = t), e.n || (e.n = t) }
    
    function Lw(t = {}) {
        const e = t.locale
            , n = Pw(t)
            , r = Oe(t.pluralRules) && J(e) && Ve(t.pluralRules[e]) ? t.pluralRules[e] : Jd
            , o = Oe(t.pluralRules) && J(e) && Ve(t.pluralRules[e]) ? Jd : void 0
            , i = O => O[r(n, O.length, o)]
            , s = t.list || []
            , a = O => s[O]
            , c = t.named || {};
        ot(t.pluralIndex) && Mw(n, c);
        const l = O => c[O];
        
        function h(O) { const x = Ve(t.messages) ? t.messages(O) : Oe(t.messages) ? t.messages[O] : !1; return x || (t.parent ? t.parent.message(O) : kw) }
        const f = O => t.modifiers ? t.modifiers[O] : Sw
            , g = he(t.processor) && Ve(t.processor.normalize) ? t.processor.normalize : Ow
            , T = he(t.processor) && Ve(t.processor.interpolate) ? t.processor.interpolate : Nw
            , A = he(t.processor) && J(t.processor.type) ? t.processor.type : Rw
            , k = {
                list: a
                , named: l
                , plural: i
                , linked: (O, ...x) => {
                    const [I, w] = x;
                    let M = "text"
                        , L = "";
                    x.length === 1 ? Oe(I) ? (L = I.modifier || L, M = I.type || M) : J(I) && (L = I || L) : x.length === 2 && (J(I) && (L = I || L), J(w) && (M = w || M));
                    const K = h(O)(k)
                        , G = M === "vnode" && Ye(K) && L ? K[0] : K;
                    return L ? f(L)(G, M) : G
                }
                , message: h
                , type: A
                , interpolate: T
                , normalize: g
                , values: _t({}, s, c)
            };
        return k
    }
    let ui = null;
    
    function Dw(t) { ui = t }
    
    function xw(t, e, n) { ui && ui.emit("i18n:init", { timestamp: Date.now(), i18n: t, version: e, meta: n }) }
    const Uw = Fw("function:translate");
    
    function Fw(t) { return e => ui && ui.emit(t, e) }
    const Om = Wl.__EXTEND_POINT__
        , Ar = ea(Om)
        , Hw = { NOT_FOUND_KEY: Om, FALLBACK_TO_TRANSLATE: Ar(), CANNOT_FORMAT_NUMBER: Ar(), FALLBACK_TO_NUMBER_FORMAT: Ar(), CANNOT_FORMAT_DATE: Ar(), FALLBACK_TO_DATE_FORMAT: Ar(), EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: Ar(), __EXTEND_POINT__: Ar() }
        , Nm = le.__EXTEND_POINT__
        , br = ea(Nm)
        , rn = { INVALID_ARGUMENT: Nm, INVALID_DATE_ARGUMENT: br(), INVALID_ISO_DATE_ARGUMENT: br(), NOT_SUPPORT_NON_STRING_MESSAGE: br(), NOT_SUPPORT_LOCALE_PROMISE_VALUE: br(), NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: br(), NOT_SUPPORT_LOCALE_TYPE: br(), __EXTEND_POINT__: br() };
    
    function bn(t) { return Mo(t, null, void 0) }
    
    function Yl(t, e) { return e.locale != null ? Xd(e.locale) : Xd(t.locale) }
    let Oa;
    
    function Xd(t) { if (J(t)) return t; if (Ve(t)) { if (t.resolvedOnce && Oa != null) return Oa; if (t.constructor.name === "Function") { const e = t(); if (FI(e)) throw bn(rn.NOT_SUPPORT_LOCALE_PROMISE_VALUE); return Oa = e } else throw bn(rn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION) } else throw bn(rn.NOT_SUPPORT_LOCALE_TYPE) }
    
    function Bw(t, e, n) { return [...new Set([n, ...Ye(e) ? e : Oe(e) ? Object.keys(e) : J(e) ? [e] : [n]])] }
    
    function Pm(t, e, n) {
        const r = J(n) ? n : Eo
            , o = t;
        o.__localeChainCache || (o.__localeChainCache = new Map);
        let i = o.__localeChainCache.get(r);
        if (!i) {
            i = [];
            let s = [n];
            for (; Ye(s);) s = Zd(i, s, e);
            const a = Ye(e) || !he(e) ? e : e.default ? e.default : null;
            s = J(a) ? [a] : a, Ye(s) && Zd(i, s, !1), o.__localeChainCache.set(r, i)
        }
        return i
    }
    
    function Zd(t, e, n) {
        let r = !0;
        for (let o = 0; o < e.length && Te(r); o++) {
            const i = e[o];
            J(i) && (r = $w(t, e[o], n))
        }
        return r
    }
    
    function $w(t, e, n) {
        let r;
        const o = e.split("-");
        do {
            const i = o.join("-");
            r = Kw(t, i, n), o.splice(-1, 1)
        } while (o.length && r === !0);
        return r
    }
    
    function Kw(t, e, n) {
        let r = !1;
        if (!t.includes(e) && (r = !0, e)) {
            r = e[e.length - 1] !== "!";
            const o = e.replace(/!/g, "");
            t.push(o), (Ye(n) || he(n)) && n[o] && (r = n[o])
        }
        return r
    }
    const jw = "9.14.1"
        , ta = -1
        , Eo = "en-US"
        , eh = ""
        , th = t => `${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;
    
    function qw() { return { upper: (t, e) => e === "text" && J(t) ? t.toUpperCase() : e === "vnode" && Oe(t) && "__v_isVNode" in t ? t.children.toUpperCase() : t, lower: (t, e) => e === "text" && J(t) ? t.toLowerCase() : e === "vnode" && Oe(t) && "__v_isVNode" in t ? t.children.toLowerCase() : t, capitalize: (t, e) => e === "text" && J(t) ? th(t) : e === "vnode" && Oe(t) && "__v_isVNode" in t ? th(t.children) : t } }
    let Mm;
    
    function nh(t) { Mm = t }
    let Lm;
    
    function Vw(t) { Lm = t }
    let Dm;
    
    function Gw(t) { Dm = t }
    let xm = null;
    const Ww = t => { xm = t }
        , zw = () => xm;
    let Um = null;
    const rh = t => { Um = t }
        , Yw = () => Um;
    let oh = 0;
    
    function Qw(t = {}) {
        const e = Ve(t.onWarn) ? t.onWarn : $I
            , n = J(t.version) ? t.version : jw
            , r = J(t.locale) || Ve(t.locale) ? t.locale : Eo
            , o = Ve(r) ? Eo : r
            , i = Ye(t.fallbackLocale) || he(t.fallbackLocale) || J(t.fallbackLocale) || t.fallbackLocale === !1 ? t.fallbackLocale : o
            , s = he(t.messages) ? t.messages : {
                [o]: {}
            }
            , a = he(t.datetimeFormats) ? t.datetimeFormats : {
                [o]: {}
            }
            , c = he(t.numberFormats) ? t.numberFormats : {
                [o]: {}
            }
            , l = _t({}, t.modifiers || {}, qw())
            , h = t.pluralRules || {}
            , f = Ve(t.missing) ? t.missing : null
            , g = Te(t.missingWarn) || pr(t.missingWarn) ? t.missingWarn : !0
            , T = Te(t.fallbackWarn) || pr(t.fallbackWarn) ? t.fallbackWarn : !0
            , A = !!t.fallbackFormat
            , b = !!t.unresolving
            , k = Ve(t.postTranslation) ? t.postTranslation : null
            , O = he(t.processor) ? t.processor : null
            , x = Te(t.warnHtmlMessage) ? t.warnHtmlMessage : !0
            , I = !!t.escapeParameter
            , w = Ve(t.messageCompiler) ? t.messageCompiler : Mm
            , M = Ve(t.messageResolver) ? t.messageResolver : Lm || Iw
            , L = Ve(t.localeFallbacker) ? t.localeFallbacker : Dm || Bw
            , K = Oe(t.fallbackContext) ? t.fallbackContext : void 0
            , G = t
            , H = Oe(G.__datetimeFormatters) ? G.__datetimeFormatters : new Map
            , te = Oe(G.__numberFormatters) ? G.__numberFormatters : new Map
            , de = Oe(G.__meta) ? G.__meta : {};
        oh++;
        const V = { version: n, cid: oh, locale: r, fallbackLocale: i, messages: s, modifiers: l, pluralRules: h, missing: f, missingWarn: g, fallbackWarn: T, fallbackFormat: A, unresolving: b, postTranslation: k, processor: O, warnHtmlMessage: x, escapeParameter: I, messageCompiler: w, messageResolver: M, localeFallbacker: L, fallbackContext: K, onWarn: e, __meta: de };
        return V.datetimeFormats = a, V.numberFormats = c, V.__datetimeFormatters = H, V.__numberFormatters = te, __INTLIFY_PROD_DEVTOOLS__ && xw(V, n, de), V
    }
    
    function Ql(t, e, n, r, o) { const { missing: i, onWarn: s } = t; if (i !== null) { const a = i(t, n, e, o); return J(a) ? a : e } else return e }
    
    function Fo(t, e, n) {
        const r = t;
        r.__localeChainCache = new Map, t.localeFallbacker(t, n, e)
    }
    
    function Jw(t, e) { return t === e ? !1 : t.split("-")[0] === e.split("-")[0] }
    
    function Xw(t, e) {
        const n = e.indexOf(t);
        if (n === -1) return !1;
        for (let r = n + 1; r < e.length; r++)
            if (Jw(t, e[r])) return !0;
        return !1
    }
    
    function Na(t) { return n => Zw(n, t) }
    
    function Zw(t, e) {
        const n = e.b || e.body;
        if ((n.t || n.type) === 1) {
            const r = n
                , o = r.c || r.cases;
            return t.plural(o.reduce((i, s) => [...i, ih(t, s)], []))
        } else return ih(t, n)
    }
    
    function ih(t, e) {
        const n = e.s || e.static;
        if (n) return t.type === "text" ? n : t.normalize([n]);
        {
            const r = (e.i || e.items)
                .reduce((o, i) => [...o, yc(t, i)], []);
            return t.normalize(r)
        }
    }
    
    function yc(t, e) {
        const n = e.t || e.type;
        switch (n) {
        case 3: { const r = e; return r.v || r.value }
        case 9: { const r = e; return r.v || r.value }
        case 4: { const r = e; return t.interpolate(t.named(r.k || r.key)) }
        case 5: { const r = e; return t.interpolate(t.list(r.i != null ? r.i : r.index)) }
        case 6: {
            const r = e
                , o = r.m || r.modifier;
            return t.linked(yc(t, r.k || r.key), o ? yc(t, o) : void 0, t.type)
        }
        case 7: { const r = e; return r.v || r.value }
        case 8: { const r = e; return r.v || r.value }
        default:
            throw new Error(`unhandled node type on format message part: ${n}`)
        }
    }
    const Fm = t => t;
    let oo = Object.create(null);
    const Ao = t => Oe(t) && (t.t === 0 || t.type === 0) && ("b" in t || "body" in t);
    
    function Hm(t, e = {}) { let n = !1; const r = e.onError || zI; return e.onError = o => { n = !0, r(o) }, { ...yw(t, e), detectError: n } }
    const eS = (t, e) => {
        if (!J(t)) throw bn(rn.NOT_SUPPORT_NON_STRING_MESSAGE);
        {
            Te(e.warnHtmlMessage) && e.warnHtmlMessage;
            const r = (e.onCacheKey || Fm)(t)
                , o = oo[r];
            if (o) return o;
            const { code: i, detectError: s } = Hm(t, e), a = new Function(`return ${i}`)();
            return s ? a : oo[r] = a
        }
    };
    
    function tS(t, e) {
        if (__INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && J(t)) {
            Te(e.warnHtmlMessage) && e.warnHtmlMessage;
            const r = (e.onCacheKey || Fm)(t)
                , o = oo[r];
            if (o) return o;
            const { ast: i, detectError: s } = Hm(t, { ...e, location: !1, jit: !0 }), a = Na(i);
            return s ? a : oo[r] = a
        } else { const n = t.cacheKey; if (n) { const r = oo[n]; return r || (oo[n] = Na(t)) } else return Na(t) }
    }
    const sh = () => ""
        , Xt = t => Ve(t);
    
    function ah(t, ...e) {
        const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: i, fallbackLocale: s, messages: a } = t, [c, l] = Cc(...e), h = Te(l.missingWarn) ? l.missingWarn : t.missingWarn, f = Te(l.fallbackWarn) ? l.fallbackWarn : t.fallbackWarn, g = Te(l.escapeParameter) ? l.escapeParameter : t.escapeParameter, T = !!l.resolvedMessage, A = J(l.default) || Te(l.default) ? Te(l.default) ? i ? c : () => c : l.default : n ? i ? c : () => c : "", b = n || A !== "", k = Yl(t, l);
        g && nS(l);
        let [O, x, I] = T ? [c, k, a[k] || {}] : Bm(t, c, k, s, f, h), w = O, M = c;
        if (!T && !(J(w) || Ao(w) || Xt(w)) && b && (w = A, M = w), !T && (!(J(w) || Ao(w) || Xt(w)) || !J(x))) return o ? ta : c;
        let L = !1;
        const K = () => { L = !0 }
            , G = Xt(w) ? w : $m(t, c, x, w, M, K);
        if (L) return w;
        const H = iS(t, x, I, l)
            , te = Lw(H)
            , de = rS(t, G, te)
            , V = r ? r(de, c) : de;
        if (__INTLIFY_PROD_DEVTOOLS__) {
            const se = { timestamp: Date.now(), key: J(c) ? c : Xt(w) ? w.key : "", locale: x || (Xt(w) ? w.locale : ""), format: J(w) ? w : Xt(w) ? w.source : "", message: V };
            se.meta = _t({}, t.__meta, zw() || {}), Uw(se)
        }
        return V
    }
    
    function nS(t) {
        Ye(t.list) ? t.list = t.list.map(e => J(e) ? Vd(e) : e) : Oe(t.named) && Object.keys(t.named)
            .forEach(e => { J(t.named[e]) && (t.named[e] = Vd(t.named[e])) })
    }
    
    function Bm(t, e, n, r, o, i) {
        const { messages: s, onWarn: a, messageResolver: c, localeFallbacker: l } = t, h = l(t, r, n);
        let f = {}
            , g, T = null;
        const A = "translate";
        for (let b = 0; b < h.length && (g = h[b], f = s[g] || {}, (T = c(f, e)) === null && (T = f[e]), !(J(T) || Ao(T) || Xt(T))); b++)
            if (!Xw(g, h)) {
                const k = Ql(t, e, g, i, A);
                k !== e && (T = k)
            } return [T, g, f]
    }
    
    function $m(t, e, n, r, o, i) { const { messageCompiler: s, warnHtmlMessage: a } = t; if (Xt(r)) { const l = r; return l.locale = l.locale || n, l.key = l.key || e, l } if (s == null) { const l = () => r; return l.locale = n, l.key = e, l } const c = s(r, oS(t, n, o, r, a, i)); return c.locale = n, c.key = e, c.source = r, c }
    
    function rS(t, e, n) { return e(n) }
    
    function Cc(...t) { const [e, n, r] = t, o = {}; if (!J(e) && !ot(e) && !Xt(e) && !Ao(e)) throw bn(rn.INVALID_ARGUMENT); const i = ot(e) ? String(e) : (Xt(e), e); return ot(n) ? o.plural = n : J(n) ? o.default = n : he(n) && !Zs(n) ? o.named = n : Ye(n) && (o.list = n), ot(r) ? o.plural = r : J(r) ? o.default = r : he(r) && _t(o, r), [i, o] }
    
    function oS(t, e, n, r, o, i) { return { locale: e, key: n, warnHtmlMessage: o, onError: s => { throw i && i(s), s }, onCacheKey: s => LI(e, n, s) } }
    
    function iS(t, e, n, r) {
        const { modifiers: o, pluralRules: i, messageResolver: s, fallbackLocale: a, fallbackWarn: c, missingWarn: l, fallbackContext: h } = t, g = {
            locale: e
            , modifiers: o
            , pluralRules: i
            , messages: T => {
                let A = s(n, T);
                if (A == null && h) {
                    const [, , b] = Bm(h, T, e, a, c, l);
                    A = s(b, T)
                }
                if (J(A) || Ao(A)) { let b = !1; const O = $m(t, T, e, A, T, () => { b = !0 }); return b ? sh : O } else return Xt(A) ? A : sh
            }
        };
        return t.processor && (g.processor = t.processor), r.list && (g.list = r.list), r.named && (g.named = r.named), ot(r.plural) && (g.pluralIndex = r.plural), g
    }
    
    function ch(t, ...e) {
        const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: i, localeFallbacker: s } = t, { __datetimeFormatters: a } = t, [c, l, h, f] = _c(...e), g = Te(h.missingWarn) ? h.missingWarn : t.missingWarn;
        Te(h.fallbackWarn) ? h.fallbackWarn : t.fallbackWarn;
        const T = !!h.part
            , A = Yl(t, h)
            , b = s(t, o, A);
        if (!J(c) || c === "") return new Intl.DateTimeFormat(A, f)
            .format(l);
        let k = {}
            , O, x = null;
        const I = "datetime format";
        for (let L = 0; L < b.length && (O = b[L], k = n[O] || {}, x = k[c], !he(x)); L++) Ql(t, c, O, g, I);
        if (!he(x) || !J(O)) return r ? ta : c;
        let w = `${O}__${c}`;
        Zs(f) || (w = `${w}__${JSON.stringify(f)}`);
        let M = a.get(w);
        return M || (M = new Intl.DateTimeFormat(O, _t({}, x, f)), a.set(w, M)), T ? M.formatToParts(l) : M.format(l)
    }
    const Km = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];
    
    function _c(...t) {
        const [e, n, r, o] = t, i = {};
        let s = {}
            , a;
        if (J(e)) {
            const c = e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
            if (!c) throw bn(rn.INVALID_ISO_DATE_ARGUMENT);
            const l = c[3] ? c[3].trim()
                .startsWith("T") ? `${c[1].trim()}${c[3].trim()}` : `${c[1].trim()}T${c[3].trim()}` : c[1].trim();
            a = new Date(l);
            try { a.toISOString() } catch { throw bn(rn.INVALID_ISO_DATE_ARGUMENT) }
        } else if (xI(e)) {
            if (isNaN(e.getTime())) throw bn(rn.INVALID_DATE_ARGUMENT);
            a = e
        } else if (ot(e)) a = e;
        else throw bn(rn.INVALID_ARGUMENT);
        return J(n) ? i.key = n : he(n) && Object.keys(n)
            .forEach(c => { Km.includes(c) ? s[c] = n[c] : i[c] = n[c] }), J(r) ? i.locale = r : he(r) && (s = r), he(o) && (s = o), [i.key || "", a, i, s]
    }
    
    function lh(t, e, n) {
        const r = t;
        for (const o in n) {
            const i = `${e}__${o}`;
            r.__datetimeFormatters.has(i) && r.__datetimeFormatters.delete(i)
        }
    }
    
    function uh(t, ...e) {
        const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: i, localeFallbacker: s } = t, { __numberFormatters: a } = t, [c, l, h, f] = Tc(...e), g = Te(h.missingWarn) ? h.missingWarn : t.missingWarn;
        Te(h.fallbackWarn) ? h.fallbackWarn : t.fallbackWarn;
        const T = !!h.part
            , A = Yl(t, h)
            , b = s(t, o, A);
        if (!J(c) || c === "") return new Intl.NumberFormat(A, f)
            .format(l);
        let k = {}
            , O, x = null;
        const I = "number format";
        for (let L = 0; L < b.length && (O = b[L], k = n[O] || {}, x = k[c], !he(x)); L++) Ql(t, c, O, g, I);
        if (!he(x) || !J(O)) return r ? ta : c;
        let w = `${O}__${c}`;
        Zs(f) || (w = `${w}__${JSON.stringify(f)}`);
        let M = a.get(w);
        return M || (M = new Intl.NumberFormat(O, _t({}, x, f)), a.set(w, M)), T ? M.formatToParts(l) : M.format(l)
    }
    const jm = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];
    
    function Tc(...t) {
        const [e, n, r, o] = t, i = {};
        let s = {};
        if (!ot(e)) throw bn(rn.INVALID_ARGUMENT);
        const a = e;
        return J(n) ? i.key = n : he(n) && Object.keys(n)
            .forEach(c => { jm.includes(c) ? s[c] = n[c] : i[c] = n[c] }), J(r) ? i.locale = r : he(r) && (s = r), he(o) && (s = o), [i.key || "", a, i, s]
    }
    
    function dh(t, e, n) {
        const r = t;
        for (const o in n) {
            const i = `${e}__${o}`;
            r.__numberFormatters.has(i) && r.__numberFormatters.delete(i)
        }
    }
    Cw();
    const sS = "9.14.1";
    
    function aS() {
        typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Fn()
            .__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Fn()
            .__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Fn()
            .__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Fn()
            .__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Fn()
            .__INTLIFY_PROD_DEVTOOLS__ = !1)
    }
    const qm = Hw.__EXTEND_POINT__
        , Mn = ea(qm);
    Mn(), Mn(), Mn(), Mn(), Mn(), Mn(), Mn(), Mn(), Mn();
    const Vm = rn.__EXTEND_POINT__
        , xt = ea(Vm)
        , at = { UNEXPECTED_RETURN_TYPE: Vm, INVALID_ARGUMENT: xt(), MUST_BE_CALL_SETUP_TOP: xt(), NOT_INSTALLED: xt(), NOT_AVAILABLE_IN_LEGACY_MODE: xt(), REQUIRED_VALUE: xt(), INVALID_VALUE: xt(), CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: xt(), NOT_INSTALLED_WITH_PROVIDE: xt(), UNEXPECTED_ERROR: xt(), NOT_COMPATIBLE_LEGACY_VUE_I18N: xt(), BRIDGE_SUPPORT_VUE_2_ONLY: xt(), MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: xt(), NOT_AVAILABLE_COMPOSITION_IN_LEGACY: xt(), __EXTEND_POINT__: xt() };
    
    function pt(t, ...e) { return Mo(t, null, void 0) }
    const vc = yr("__translateVNode")
        , Ec = yr("__datetimeParts")
        , Ac = yr("__numberParts")
        , Gm = yr("__setPluralRules")
        , Wm = yr("__injectWithOption")
        , bc = yr("__dispose");
    
    function di(t) {
        if (!Oe(t)) return t;
        for (const e in t)
            if (As(t, e))
                if (!e.includes(".")) Oe(t[e]) && di(t[e]);
                else {
                    const n = e.split(".")
                        , r = n.length - 1;
                    let o = t
                        , i = !1;
                    for (let s = 0; s < r; s++) { if (n[s] in o || (o[n[s]] = {}), !Oe(o[n[s]])) { i = !0; break } o = o[n[s]] } i || (o[n[r]] = t[e], delete t[e]), Oe(o[n[r]]) && di(o[n[r]])
                } return t
    }
    
    function na(t, e) {
        const { messages: n, __i18n: r, messageResolver: o, flatJson: i } = e, s = he(n) ? n : Ye(r) ? {} : {
            [t]: {}
        };
        if (Ye(r) && r.forEach(a => {
                if ("locale" in a && "resource" in a) {
                    const { locale: c, resource: l } = a;
                    c ? (s[c] = s[c] || {}, Zi(l, s[c])) : Zi(l, s)
                } else J(a) && Zi(JSON.parse(a), s)
            }), o == null && i)
            for (const a in s) As(s, a) && di(s[a]);
        return s
    }
    
    function zm(t) { return t.type }
    
    function Ym(t, e, n) {
        let r = Oe(e.messages) ? e.messages : {};
        "__i18nGlobal" in n && (r = na(t.locale.value, { messages: r, __i18n: n.__i18nGlobal }));
        const o = Object.keys(r);
        o.length && o.forEach(i => { t.mergeLocaleMessage(i, r[i]) });
        {
            if (Oe(e.datetimeFormats)) {
                const i = Object.keys(e.datetimeFormats);
                i.length && i.forEach(s => { t.mergeDateTimeFormat(s, e.datetimeFormats[s]) })
            }
            if (Oe(e.numberFormats)) {
                const i = Object.keys(e.numberFormats);
                i.length && i.forEach(s => { t.mergeNumberFormat(s, e.numberFormats[s]) })
            }
        }
    }
    
    function hh(t) { return ue(Ci, null, t, 0) }
    const fh = "__INTLIFY_META__"
        , ph = () => []
        , cS = () => !1;
    let gh = 0;
    
    function mh(t) { return (e, n, r, o) => t(n, r, Lr() || void 0, o) }
    const lS = () => {
        const t = Lr();
        let e = null;
        return t && (e = zm(t)[fh]) ? {
            [fh]: e
        } : null
    };
    
    function Jl(t = {}, e) {
        const { __root: n, __injectWithOption: r } = t, o = n === void 0, i = t.flatJson, s = Es ? sr : Hc, a = !!t.translateExistCompatible;
        let c = Te(t.inheritLocale) ? t.inheritLocale : !0;
        const l = s(n && c ? n.locale.value : J(t.locale) ? t.locale : Eo)
            , h = s(n && c ? n.fallbackLocale.value : J(t.fallbackLocale) || Ye(t.fallbackLocale) || he(t.fallbackLocale) || t.fallbackLocale === !1 ? t.fallbackLocale : l.value)
            , f = s(na(l.value, t))
            , g = s(he(t.datetimeFormats) ? t.datetimeFormats : {
                [l.value]: {}
            })
            , T = s(he(t.numberFormats) ? t.numberFormats : {
                [l.value]: {}
            });
        let A = n ? n.missingWarn : Te(t.missingWarn) || pr(t.missingWarn) ? t.missingWarn : !0
            , b = n ? n.fallbackWarn : Te(t.fallbackWarn) || pr(t.fallbackWarn) ? t.fallbackWarn : !0
            , k = n ? n.fallbackRoot : Te(t.fallbackRoot) ? t.fallbackRoot : !0
            , O = !!t.fallbackFormat
            , x = Ve(t.missing) ? t.missing : null
            , I = Ve(t.missing) ? mh(t.missing) : null
            , w = Ve(t.postTranslation) ? t.postTranslation : null
            , M = n ? n.warnHtmlMessage : Te(t.warnHtmlMessage) ? t.warnHtmlMessage : !0
            , L = !!t.escapeParameter;
        const K = n ? n.modifiers : he(t.modifiers) ? t.modifiers : {};
        let G = t.pluralRules || n && n.pluralRules
            , H;
        H = (() => {
            o && rh(null);
            const S = { version: sS, locale: l.value, fallbackLocale: h.value, messages: f.value, modifiers: K, pluralRules: G, missing: I === null ? void 0 : I, missingWarn: A, fallbackWarn: b, fallbackFormat: O, unresolving: !0, postTranslation: w === null ? void 0 : w, warnHtmlMessage: M, escapeParameter: L, messageResolver: t.messageResolver, messageCompiler: t.messageCompiler, __meta: { framework: "vue" } };
            S.datetimeFormats = g.value, S.numberFormats = T.value, S.__datetimeFormatters = he(H) ? H.__datetimeFormatters : void 0, S.__numberFormatters = he(H) ? H.__numberFormatters : void 0;
            const P = Qw(S);
            return o && rh(P), P
        })(), Fo(H, l.value, h.value);
        
        function de() { return [l.value, h.value, f.value, g.value, T.value] }
        const V = Ze({ get: () => l.value, set: S => { l.value = S, H.locale = l.value } })
            , se = Ze({ get: () => h.value, set: S => { h.value = S, H.fallbackLocale = h.value, Fo(H, l.value, S) } })
            , He = Ze(() => f.value)
            , tt = Ze(() => g.value)
            , Se = Ze(() => T.value);
        
        function Ee() { return Ve(w) ? w : null }
        
        function Ce(S) { w = S, H.postTranslation = S }
        
        function gt() { return x }
        
        function vt(S) { S !== null && (I = mh(S)), x = S, H.missing = I }
        const ge = (S, P, ne, re, Ge, Je) => { de(); let lt; try { __INTLIFY_PROD_DEVTOOLS__, o || (H.fallbackContext = n ? Yw() : void 0), lt = S(H) } finally { __INTLIFY_PROD_DEVTOOLS__, o || (H.fallbackContext = void 0) } if (ne !== "translate exists" && ot(lt) && lt === ta || ne === "translate exists" && !lt) { const [Rt, Kr] = P(); return n && k ? re(n) : Ge(Rt) } else { if (Je(lt)) return lt; throw pt(at.UNEXPECTED_RETURN_TYPE) } };
        
        function ve(...S) { return ge(P => Reflect.apply(ah, null, [P, ...S]), () => Cc(...S), "translate", P => Reflect.apply(P.t, P, [...S]), P => P, P => J(P)) }
        
        function kt(...S) { const [P, ne, re] = S; if (re && !Oe(re)) throw pt(at.INVALID_ARGUMENT); return ve(P, ne, _t({ resolvedMessage: !0 }, re || {})) }
        
        function Et(...S) { return ge(P => Reflect.apply(ch, null, [P, ...S]), () => _c(...S), "datetime format", P => Reflect.apply(P.d, P, [...S]), () => eh, P => J(P)) }
        
        function Bt(...S) { return ge(P => Reflect.apply(uh, null, [P, ...S]), () => Tc(...S), "number format", P => Reflect.apply(P.n, P, [...S]), () => eh, P => J(P)) }
        
        function nt(S) { return S.map(P => J(P) || ot(P) || Te(P) ? hh(String(P)) : P) }
        const Y = { normalize: nt, interpolate: S => S, type: "vnode" };
        
        function z(...S) { return ge(P => { let ne; const re = P; try { re.processor = Y, ne = Reflect.apply(ah, null, [re, ...S]) } finally { re.processor = null } return ne }, () => Cc(...S), "translate", P => P[vc](...S), P => [hh(P)], P => Ye(P)) }
        
        function X(...S) { return ge(P => Reflect.apply(uh, null, [P, ...S]), () => Tc(...S), "number format", P => P[Ac](...S), ph, P => J(P) || Ye(P)) }
        
        function _e(...S) { return ge(P => Reflect.apply(ch, null, [P, ...S]), () => _c(...S), "datetime format", P => P[Ec](...S), ph, P => J(P) || Ye(P)) }
        
        function ke(S) { G = S, H.pluralRules = G }
        
        function E(S, P) {
            return ge(() => {
                if (!S) return !1;
                const ne = J(P) ? P : l.value
                    , re = m(ne)
                    , Ge = H.messageResolver(re, S);
                return a ? Ge != null : Ao(Ge) || Xt(Ge) || J(Ge)
            }, () => [S], "translate exists", ne => Reflect.apply(ne.te, ne, [S, P]), cS, ne => Te(ne))
        }
        
        function _(S) {
            let P = null;
            const ne = Pm(H, h.value, l.value);
            for (let re = 0; re < ne.length; re++) {
                const Ge = f.value[ne[re]] || {}
                    , Je = H.messageResolver(Ge, S);
                if (Je != null) { P = Je; break }
            }
            return P
        }
        
        function R(S) { const P = _(S); return P ?? (n ? n.tm(S) || {} : {}) }
        
        function m(S) { return f.value[S] || {} }
        
        function u(S, P) {
            if (i) {
                const ne = {
                    [S]: P
                };
                for (const re in ne) As(ne, re) && di(ne[re]);
                P = ne[S]
            }
            f.value[S] = P, H.messages = f.value
        }
        
        function d(S, P) {
            f.value[S] = f.value[S] || {};
            const ne = {
                [S]: P
            };
            if (i)
                for (const re in ne) As(ne, re) && di(ne[re]);
            P = ne[S], Zi(P, f.value[S]), H.messages = f.value
        }
        
        function C(S) { return g.value[S] || {} }
        
        function p(S, P) { g.value[S] = P, H.datetimeFormats = g.value, lh(H, S, P) }
        
        function y(S, P) { g.value[S] = _t(g.value[S] || {}, P), H.datetimeFormats = g.value, lh(H, S, P) }
        
        function v(S) { return T.value[S] || {} }
        
        function D(S, P) { T.value[S] = P, H.numberFormats = T.value, dh(H, S, P) }
        
        function $(S, P) { T.value[S] = _t(T.value[S] || {}, P), H.numberFormats = T.value, dh(H, S, P) } gh++, n && Es && (Nr(n.locale, S => { c && (l.value = S, H.locale = S, Fo(H, l.value, h.value)) }), Nr(n.fallbackLocale, S => { c && (h.value = S, H.fallbackLocale = S, Fo(H, l.value, h.value)) }));
        const B = {
            id: gh
            , locale: V
            , fallbackLocale: se
            , get inheritLocale() { return c }
            , set inheritLocale(S) { c = S, S && n && (l.value = n.locale.value, h.value = n.fallbackLocale.value, Fo(H, l.value, h.value)) }
            , get availableLocales() {
                return Object.keys(f.value)
                    .sort()
            }
            , messages: He
            , get modifiers() { return K }
            , get pluralRules() { return G || {} }
            , get isGlobal() { return o }
            , get missingWarn() { return A }
            , set missingWarn(S) { A = S, H.missingWarn = A }
            , get fallbackWarn() { return b }
            , set fallbackWarn(S) { b = S, H.fallbackWarn = b }
            , get fallbackRoot() { return k }
            , set fallbackRoot(S) { k = S }
            , get fallbackFormat() { return O }
            , set fallbackFormat(S) { O = S, H.fallbackFormat = O }
            , get warnHtmlMessage() { return M }
            , set warnHtmlMessage(S) { M = S, H.warnHtmlMessage = S }
            , get escapeParameter() { return L }
            , set escapeParameter(S) { L = S, H.escapeParameter = S }
            , t: ve
            , getLocaleMessage: m
            , setLocaleMessage: u
            , mergeLocaleMessage: d
            , getPostTranslationHandler: Ee
            , setPostTranslationHandler: Ce
            , getMissingHandler: gt
            , setMissingHandler: vt
            , [Gm]: ke
        };
        return B.datetimeFormats = tt, B.numberFormats = Se, B.rt = kt, B.te = E, B.tm = R, B.d = Et, B.n = Bt, B.getDateTimeFormat = C, B.setDateTimeFormat = p, B.mergeDateTimeFormat = y, B.getNumberFormat = v, B.setNumberFormat = D, B.mergeNumberFormat = $, B[Wm] = r, B[vc] = z, B[Ec] = _e, B[Ac] = X, B
    }
    
    function uS(t) {
        const e = J(t.locale) ? t.locale : Eo
            , n = J(t.fallbackLocale) || Ye(t.fallbackLocale) || he(t.fallbackLocale) || t.fallbackLocale === !1 ? t.fallbackLocale : e
            , r = Ve(t.missing) ? t.missing : void 0
            , o = Te(t.silentTranslationWarn) || pr(t.silentTranslationWarn) ? !t.silentTranslationWarn : !0
            , i = Te(t.silentFallbackWarn) || pr(t.silentFallbackWarn) ? !t.silentFallbackWarn : !0
            , s = Te(t.fallbackRoot) ? t.fallbackRoot : !0
            , a = !!t.formatFallbackMessages
            , c = he(t.modifiers) ? t.modifiers : {}
            , l = t.pluralizationRules
            , h = Ve(t.postTranslation) ? t.postTranslation : void 0
            , f = J(t.warnHtmlInMessage) ? t.warnHtmlInMessage !== "off" : !0
            , g = !!t.escapeParameterHtml
            , T = Te(t.sync) ? t.sync : !0;
        let A = t.messages;
        if (he(t.sharedMessages)) {
            const L = t.sharedMessages;
            A = Object.keys(L)
                .reduce((G, H) => { const te = G[H] || (G[H] = {}); return _t(te, L[H]), G }, A || {})
        }
        const { __i18n: b, __root: k, __injectWithOption: O } = t, x = t.datetimeFormats, I = t.numberFormats, w = t.flatJson, M = t.translateExistCompatible;
        return { locale: e, fallbackLocale: n, messages: A, flatJson: w, datetimeFormats: x, numberFormats: I, missing: r, missingWarn: o, fallbackWarn: i, fallbackRoot: s, fallbackFormat: a, modifiers: c, pluralRules: l, postTranslation: h, warnHtmlMessage: f, escapeParameter: g, messageResolver: t.messageResolver, inheritLocale: T, translateExistCompatible: M, __i18n: b, __root: k, __injectWithOption: O }
    }
    
    function Ic(t = {}, e) {
        {
            const n = Jl(uS(t))
                , { __extender: r } = t
                , o = {
                    id: n.id
                    , get locale() { return n.locale.value }
                    , set locale(i) { n.locale.value = i }
                    , get fallbackLocale() { return n.fallbackLocale.value }
                    , set fallbackLocale(i) { n.fallbackLocale.value = i }
                    , get messages() { return n.messages.value }
                    , get datetimeFormats() { return n.datetimeFormats.value }
                    , get numberFormats() { return n.numberFormats.value }
                    , get availableLocales() { return n.availableLocales }
                    , get formatter() { return { interpolate() { return [] } } }
                    , set formatter(i) {}
                    , get missing() { return n.getMissingHandler() }
                    , set missing(i) { n.setMissingHandler(i) }
                    , get silentTranslationWarn() { return Te(n.missingWarn) ? !n.missingWarn : n.missingWarn }
                    , set silentTranslationWarn(i) { n.missingWarn = Te(i) ? !i : i }
                    , get silentFallbackWarn() { return Te(n.fallbackWarn) ? !n.fallbackWarn : n.fallbackWarn }
                    , set silentFallbackWarn(i) { n.fallbackWarn = Te(i) ? !i : i }
                    , get modifiers() { return n.modifiers }
                    , get formatFallbackMessages() { return n.fallbackFormat }
                    , set formatFallbackMessages(i) { n.fallbackFormat = i }
                    , get postTranslation() { return n.getPostTranslationHandler() }
                    , set postTranslation(i) { n.setPostTranslationHandler(i) }
                    , get sync() { return n.inheritLocale }
                    , set sync(i) { n.inheritLocale = i }
                    , get warnHtmlInMessage() { return n.warnHtmlMessage ? "warn" : "off" }
                    , set warnHtmlInMessage(i) { n.warnHtmlMessage = i !== "off" }
                    , get escapeParameterHtml() { return n.escapeParameter }
                    , set escapeParameterHtml(i) { n.escapeParameter = i }
                    , get preserveDirectiveContent() { return !0 }
                    , set preserveDirectiveContent(i) {}
                    , get pluralizationRules() { return n.pluralRules || {} }
                    , __composer: n
                    , t(...i) {
                        const [s, a, c] = i, l = {};
                        let h = null
                            , f = null;
                        if (!J(s)) throw pt(at.INVALID_ARGUMENT);
                        const g = s;
                        return J(a) ? l.locale = a : Ye(a) ? h = a : he(a) && (f = a), Ye(c) ? h = c : he(c) && (f = c), Reflect.apply(n.t, n, [g, h || f || {}, l])
                    }
                    , rt(...i) { return Reflect.apply(n.rt, n, [...i]) }
                    , tc(...i) {
                        const [s, a, c] = i, l = { plural: 1 };
                        let h = null
                            , f = null;
                        if (!J(s)) throw pt(at.INVALID_ARGUMENT);
                        const g = s;
                        return J(a) ? l.locale = a : ot(a) ? l.plural = a : Ye(a) ? h = a : he(a) && (f = a), J(c) ? l.locale = c : Ye(c) ? h = c : he(c) && (f = c), Reflect.apply(n.t, n, [g, h || f || {}, l])
                    }
                    , te(i, s) { return n.te(i, s) }
                    , tm(i) { return n.tm(i) }
                    , getLocaleMessage(i) { return n.getLocaleMessage(i) }
                    , setLocaleMessage(i, s) { n.setLocaleMessage(i, s) }
                    , mergeLocaleMessage(i, s) { n.mergeLocaleMessage(i, s) }
                    , d(...i) { return Reflect.apply(n.d, n, [...i]) }
                    , getDateTimeFormat(i) { return n.getDateTimeFormat(i) }
                    , setDateTimeFormat(i, s) { n.setDateTimeFormat(i, s) }
                    , mergeDateTimeFormat(i, s) { n.mergeDateTimeFormat(i, s) }
                    , n(...i) { return Reflect.apply(n.n, n, [...i]) }
                    , getNumberFormat(i) { return n.getNumberFormat(i) }
                    , setNumberFormat(i, s) { n.setNumberFormat(i, s) }
                    , mergeNumberFormat(i, s) { n.mergeNumberFormat(i, s) }
                    , getChoiceIndex(i, s) { return -1 }
                };
            return o.__extender = r, o
        }
    }
    const Xl = { tag: { type: [String, Object] }, locale: { type: String }, scope: { type: String, validator: t => t === "parent" || t === "global", default: "parent" }, i18n: { type: Object } };
    
    function dS({ slots: t }, e) {
        return e.length === 1 && e[0] === "default" ? (t.default ? t.default() : [])
            .reduce((r, o) => [...r, ...o.type === ze ? o.children : [o]], []) : e.reduce((n, r) => { const o = t[r]; return o && (n[r] = o()), n }, {})
    }
    
    function Qm(t) { return ze }
    const hS = yi({
            name: "i18n-t"
            , props: _t({ keypath: { type: String, required: !0 }, plural: { type: [Number, String], validator: t => ot(t) || !isNaN(t) } }, Xl)
            , setup(t, e) {
                const { slots: n, attrs: r } = e, o = t.i18n || Zl({ useScope: t.scope, __useComponent: !0 });
                return () => {
                    const i = Object.keys(n)
                        .filter(f => f !== "_")
                        , s = {};
                    t.locale && (s.locale = t.locale), t.plural !== void 0 && (s.plural = J(t.plural) ? +t.plural : t.plural);
                    const a = dS(e, i)
                        , c = o[vc](t.keypath, a, s)
                        , l = _t({}, r)
                        , h = J(t.tag) || Oe(t.tag) ? t.tag : Qm();
                    return ko(h, l, c)
                }
            }
        })
        , yh = hS;
    
    function fS(t) { return Ye(t) && !J(t[0]) }
    
    function Jm(t, e, n, r) {
        const { slots: o, attrs: i } = e;
        return () => {
            const s = { part: !0 };
            let a = {};
            t.locale && (s.locale = t.locale), J(t.format) ? s.key = t.format : Oe(t.format) && (J(t.format.key) && (s.key = t.format.key), a = Object.keys(t.format)
                .reduce((g, T) => n.includes(T) ? _t({}, g, {
                    [T]: t.format[T]
                }) : g, {}));
            const c = r(t.value, s, a);
            let l = [s.key];
            Ye(c) ? l = c.map((g, T) => {
                const A = o[g.type]
                    , b = A ? A({
                        [g.type]: g.value
                        , index: T
                        , parts: c
                    }) : [g.value];
                return fS(b) && (b[0].key = `${g.type}-${T}`), b
            }) : J(c) && (l = [c]);
            const h = _t({}, i)
                , f = J(t.tag) || Oe(t.tag) ? t.tag : Qm();
            return ko(f, h, l)
        }
    }
    const pS = yi({ name: "i18n-n", props: _t({ value: { type: Number, required: !0 }, format: { type: [String, Object] } }, Xl), setup(t, e) { const n = t.i18n || Zl({ useScope: t.scope, __useComponent: !0 }); return Jm(t, e, jm, (...r) => n[Ac](...r)) } })
        , Ch = pS
        , gS = yi({ name: "i18n-d", props: _t({ value: { type: [Number, Date], required: !0 }, format: { type: [String, Object] } }, Xl), setup(t, e) { const n = t.i18n || Zl({ useScope: t.scope, __useComponent: !0 }); return Jm(t, e, Km, (...r) => n[Ec](...r)) } })
        , _h = gS;
    
    function mS(t, e) { const n = t; if (t.mode === "composition") return n.__getInstance(e) || t.global; { const r = n.__getInstance(e); return r != null ? r.__composer : t.global.__composer } }
    
    function yS(t) {
        const e = s => {
            const { instance: a, modifiers: c, value: l } = s;
            if (!a || !a.$) throw pt(at.UNEXPECTED_ERROR);
            const h = mS(t, a.$)
                , f = Th(l);
            return [Reflect.apply(h.t, h, [...vh(f)]), h]
        };
        return {
            created: (s, a) => {
                const [c, l] = e(a);
                Es && t.global === l && (s.__i18nWatcher = Nr(l.locale, () => { a.instance && a.instance.$forceUpdate() })), s.__composer = l, s.textContent = c
            }
            , unmounted: s => { Es && s.__i18nWatcher && (s.__i18nWatcher(), s.__i18nWatcher = void 0, delete s.__i18nWatcher), s.__composer && (s.__composer = void 0, delete s.__composer) }
            , beforeUpdate: (s, { value: a }) => {
                if (s.__composer) {
                    const c = s.__composer
                        , l = Th(a);
                    s.textContent = Reflect.apply(c.t, c, [...vh(l)])
                }
            }
            , getSSRProps: s => { const [a] = e(s); return { textContent: a } }
        }
    }
    
    function Th(t) { if (J(t)) return { path: t }; if (he(t)) { if (!("path" in t)) throw pt(at.REQUIRED_VALUE, "path"); return t } else throw pt(at.INVALID_VALUE) }
    
    function vh(t) { const { path: e, locale: n, args: r, choice: o, plural: i } = t, s = {}, a = r || {}; return J(n) && (s.locale = n), ot(o) && (s.plural = o), ot(i) && (s.plural = i), [e, a, s] }
    
    function CS(t, e, ...n) {
        const r = he(n[0]) ? n[0] : {}
            , o = !!r.useI18nComponentName;
        (Te(r.globalInstall) ? r.globalInstall : !0) && ([o ? "i18n" : yh.name, "I18nT"].forEach(s => t.component(s, yh)), [Ch.name, "I18nN"].forEach(s => t.component(s, Ch)), [_h.name, "I18nD"].forEach(s => t.component(s, _h))), t.directive("t", yS(e))
    }
    
    function _S(t, e, n) {
        return {
            beforeCreate() {
                const r = Lr();
                if (!r) throw pt(at.UNEXPECTED_ERROR);
                const o = this.$options;
                if (o.i18n) {
                    const i = o.i18n;
                    if (o.__i18n && (i.__i18n = o.__i18n), i.__root = e, this === this.$root) this.$i18n = Eh(t, i);
                    else {
                        i.__injectWithOption = !0, i.__extender = n.__vueI18nExtend, this.$i18n = Ic(i);
                        const s = this.$i18n;
                        s.__extender && (s.__disposer = s.__extender(this.$i18n))
                    }
                } else if (o.__i18n)
                    if (this === this.$root) this.$i18n = Eh(t, o);
                    else {
                        this.$i18n = Ic({ __i18n: o.__i18n, __injectWithOption: !0, __extender: n.__vueI18nExtend, __root: e });
                        const i = this.$i18n;
                        i.__extender && (i.__disposer = i.__extender(this.$i18n))
                    }
                else this.$i18n = t;
                o.__i18nGlobal && Ym(e, o, o), this.$t = (...i) => this.$i18n.t(...i), this.$rt = (...i) => this.$i18n.rt(...i), this.$tc = (...i) => this.$i18n.tc(...i), this.$te = (i, s) => this.$i18n.te(i, s), this.$d = (...i) => this.$i18n.d(...i), this.$n = (...i) => this.$i18n.n(...i), this.$tm = i => this.$i18n.tm(i), n.__setInstance(r, this.$i18n)
            }
            , mounted() {}
            , unmounted() {
                const r = Lr();
                if (!r) throw pt(at.UNEXPECTED_ERROR);
                const o = this.$i18n;
                delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, o.__disposer && (o.__disposer(), delete o.__disposer, delete o.__extender), n.__deleteInstance(r), delete this.$i18n
            }
        }
    }
    
    function Eh(t, e) {
        t.locale = e.locale || t.locale, t.fallbackLocale = e.fallbackLocale || t.fallbackLocale, t.missing = e.missing || t.missing, t.silentTranslationWarn = e.silentTranslationWarn || t.silentFallbackWarn, t.silentFallbackWarn = e.silentFallbackWarn || t.silentFallbackWarn, t.formatFallbackMessages = e.formatFallbackMessages || t.formatFallbackMessages, t.postTranslation = e.postTranslation || t.postTranslation, t.warnHtmlInMessage = e.warnHtmlInMessage || t.warnHtmlInMessage, t.escapeParameterHtml = e.escapeParameterHtml || t.escapeParameterHtml, t.sync = e.sync || t.sync, t.__composer[Gm](e.pluralizationRules || t.pluralizationRules);
        const n = na(t.locale, { messages: e.messages, __i18n: e.__i18n });
        return Object.keys(n)
            .forEach(r => t.mergeLocaleMessage(r, n[r])), e.datetimeFormats && Object.keys(e.datetimeFormats)
            .forEach(r => t.mergeDateTimeFormat(r, e.datetimeFormats[r])), e.numberFormats && Object.keys(e.numberFormats)
            .forEach(r => t.mergeNumberFormat(r, e.numberFormats[r])), t
    }
    const TS = yr("global-vue-i18n");
    
    function vS(t = {}, e) {
        const n = __VUE_I18N_LEGACY_API__ && Te(t.legacy) ? t.legacy : __VUE_I18N_LEGACY_API__
            , r = Te(t.globalInjection) ? t.globalInjection : !0
            , o = __VUE_I18N_LEGACY_API__ && n ? !!t.allowComposition : !0
            , i = new Map
            , [s, a] = ES(t, n)
            , c = yr("");
        
        function l(g) { return i.get(g) || null }
        
        function h(g, T) { i.set(g, T) }
        
        function f(g) { i.delete(g) } {
            const g = {
                get mode() { return __VUE_I18N_LEGACY_API__ && n ? "legacy" : "composition" }
                , get allowComposition() { return o }
                , async install(T, ...A) {
                    if (T.__VUE_I18N_SYMBOL__ = c, T.provide(T.__VUE_I18N_SYMBOL__, g), he(A[0])) {
                        const O = A[0];
                        g.__composerExtend = O.__composerExtend, g.__vueI18nExtend = O.__vueI18nExtend
                    }
                    let b = null;
                    !n && r && (b = NS(T, g.global)), __VUE_I18N_FULL_INSTALL__ && CS(T, g, ...A), __VUE_I18N_LEGACY_API__ && n && T.mixin(_S(a, a.__composer, g));
                    const k = T.unmount;
                    T.unmount = () => { b && b(), g.dispose(), k() }
                }
                , get global() { return a }
                , dispose() { s.stop() }
                , __instances: i
                , __getInstance: l
                , __setInstance: h
                , __deleteInstance: f
            };
            return g
        }
    }
    
    function Zl(t = {}) {
        const e = Lr();
        if (e == null) throw pt(at.MUST_BE_CALL_SETUP_TOP);
        if (!e.isCE && e.appContext.app != null && !e.appContext.app.__VUE_I18N_SYMBOL__) throw pt(at.NOT_INSTALLED);
        const n = AS(e)
            , r = IS(n)
            , o = zm(e)
            , i = bS(t, o);
        if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !t.__useComponent) { if (!n.allowComposition) throw pt(at.NOT_AVAILABLE_IN_LEGACY_MODE); return RS(e, i, r, t) }
        if (i === "global") return Ym(r, t, o), r;
        if (i === "parent") { let c = wS(n, e, t.__useComponent); return c == null && (c = r), c }
        const s = n;
        let a = s.__getInstance(e);
        if (a == null) { const c = _t({}, t); "__i18n" in o && (c.__i18n = o.__i18n), r && (c.__root = r), a = Jl(c), s.__composerExtend && (a[bc] = s.__composerExtend(a)), kS(s, e, a), s.__setInstance(e, a) }
        return a
    }
    
    function ES(t, e, n) { const r = My(); { const o = __VUE_I18N_LEGACY_API__ && e ? r.run(() => Ic(t)) : r.run(() => Jl(t)); if (o == null) throw pt(at.UNEXPECTED_ERROR); return [r, o] } }
    
    function AS(t) { { const e = In(t.isCE ? TS : t.appContext.app.__VUE_I18N_SYMBOL__); if (!e) throw pt(t.isCE ? at.NOT_INSTALLED_WITH_PROVIDE : at.UNEXPECTED_ERROR); return e } }
    
    function bS(t, e) { return Zs(t) ? "__i18n" in e ? "local" : "global" : t.useScope ? t.useScope : "local" }
    
    function IS(t) { return t.mode === "composition" ? t.global : t.global.__composer }
    
    function wS(t, e, n = !1) {
        let r = null;
        const o = e.root;
        let i = SS(e, n);
        for (; i != null;) {
            const s = t;
            if (t.mode === "composition") r = s.__getInstance(i);
            else if (__VUE_I18N_LEGACY_API__) {
                const a = s.__getInstance(i);
                a != null && (r = a.__composer, n && r && !r[Wm] && (r = null))
            }
            if (r != null || o === i) break;
            i = i.parent
        }
        return r
    }
    
    function SS(t, e = !1) { return t == null ? null : e && t.vnode.ctx || t.parent }
    
    function kS(t, e, n) {
        Vc(() => {}, e), Gc(() => {
            const r = n;
            t.__deleteInstance(e);
            const o = r[bc];
            o && (o(), delete r[bc])
        }, e)
    }
    
    function RS(t, e, n, r = {}) {
        const o = e === "local"
            , i = Hc(null);
        if (o && t.proxy && !(t.proxy.$options.i18n || t.proxy.$options.__i18n)) throw pt(at.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
        const s = Te(r.inheritLocale) ? r.inheritLocale : !J(r.locale)
            , a = sr(!o || s ? n.locale.value : J(r.locale) ? r.locale : Eo)
            , c = sr(!o || s ? n.fallbackLocale.value : J(r.fallbackLocale) || Ye(r.fallbackLocale) || he(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : a.value)
            , l = sr(na(a.value, r))
            , h = sr(he(r.datetimeFormats) ? r.datetimeFormats : {
                [a.value]: {}
            })
            , f = sr(he(r.numberFormats) ? r.numberFormats : {
                [a.value]: {}
            })
            , g = o ? n.missingWarn : Te(r.missingWarn) || pr(r.missingWarn) ? r.missingWarn : !0
            , T = o ? n.fallbackWarn : Te(r.fallbackWarn) || pr(r.fallbackWarn) ? r.fallbackWarn : !0
            , A = o ? n.fallbackRoot : Te(r.fallbackRoot) ? r.fallbackRoot : !0
            , b = !!r.fallbackFormat
            , k = Ve(r.missing) ? r.missing : null
            , O = Ve(r.postTranslation) ? r.postTranslation : null
            , x = o ? n.warnHtmlMessage : Te(r.warnHtmlMessage) ? r.warnHtmlMessage : !0
            , I = !!r.escapeParameter
            , w = o ? n.modifiers : he(r.modifiers) ? r.modifiers : {}
            , M = r.pluralRules || o && n.pluralRules;
        
        function L() { return [a.value, c.value, l.value, h.value, f.value] }
        const K = Ze({ get: () => i.value ? i.value.locale.value : a.value, set: _ => { i.value && (i.value.locale.value = _), a.value = _ } })
            , G = Ze({ get: () => i.value ? i.value.fallbackLocale.value : c.value, set: _ => { i.value && (i.value.fallbackLocale.value = _), c.value = _ } })
            , H = Ze(() => i.value ? i.value.messages.value : l.value)
            , te = Ze(() => h.value)
            , de = Ze(() => f.value);
        
        function V() { return i.value ? i.value.getPostTranslationHandler() : O }
        
        function se(_) { i.value && i.value.setPostTranslationHandler(_) }
        
        function He() { return i.value ? i.value.getMissingHandler() : k }
        
        function tt(_) { i.value && i.value.setMissingHandler(_) }
        
        function Se(_) { return L(), _() }
        
        function Ee(..._) { return i.value ? Se(() => Reflect.apply(i.value.t, null, [..._])) : Se(() => "") }
        
        function Ce(..._) { return i.value ? Reflect.apply(i.value.rt, null, [..._]) : "" }
        
        function gt(..._) { return i.value ? Se(() => Reflect.apply(i.value.d, null, [..._])) : Se(() => "") }
        
        function vt(..._) { return i.value ? Se(() => Reflect.apply(i.value.n, null, [..._])) : Se(() => "") }
        
        function ge(_) { return i.value ? i.value.tm(_) : {} }
        
        function ve(_, R) { return i.value ? i.value.te(_, R) : !1 }
        
        function kt(_) { return i.value ? i.value.getLocaleMessage(_) : {} }
        
        function Et(_, R) { i.value && (i.value.setLocaleMessage(_, R), l.value[_] = R) }
        
        function Bt(_, R) { i.value && i.value.mergeLocaleMessage(_, R) }
        
        function nt(_) { return i.value ? i.value.getDateTimeFormat(_) : {} }
        
        function j(_, R) { i.value && (i.value.setDateTimeFormat(_, R), h.value[_] = R) }
        
        function Y(_, R) { i.value && i.value.mergeDateTimeFormat(_, R) }
        
        function z(_) { return i.value ? i.value.getNumberFormat(_) : {} }
        
        function X(_, R) { i.value && (i.value.setNumberFormat(_, R), f.value[_] = R) }
        
        function _e(_, R) { i.value && i.value.mergeNumberFormat(_, R) }
        const ke = { get id() { return i.value ? i.value.id : -1 }, locale: K, fallbackLocale: G, messages: H, datetimeFormats: te, numberFormats: de, get inheritLocale() { return i.value ? i.value.inheritLocale : s }, set inheritLocale(_) { i.value && (i.value.inheritLocale = _) }, get availableLocales() { return i.value ? i.value.availableLocales : Object.keys(l.value) }, get modifiers() { return i.value ? i.value.modifiers : w }, get pluralRules() { return i.value ? i.value.pluralRules : M }, get isGlobal() { return i.value ? i.value.isGlobal : !1 }, get missingWarn() { return i.value ? i.value.missingWarn : g }, set missingWarn(_) { i.value && (i.value.missingWarn = _) }, get fallbackWarn() { return i.value ? i.value.fallbackWarn : T }, set fallbackWarn(_) { i.value && (i.value.missingWarn = _) }, get fallbackRoot() { return i.value ? i.value.fallbackRoot : A }, set fallbackRoot(_) { i.value && (i.value.fallbackRoot = _) }, get fallbackFormat() { return i.value ? i.value.fallbackFormat : b }, set fallbackFormat(_) { i.value && (i.value.fallbackFormat = _) }, get warnHtmlMessage() { return i.value ? i.value.warnHtmlMessage : x }, set warnHtmlMessage(_) { i.value && (i.value.warnHtmlMessage = _) }, get escapeParameter() { return i.value ? i.value.escapeParameter : I }, set escapeParameter(_) { i.value && (i.value.escapeParameter = _) }, t: Ee, getPostTranslationHandler: V, setPostTranslationHandler: se, getMissingHandler: He, setMissingHandler: tt, rt: Ce, d: gt, n: vt, tm: ge, te: ve, getLocaleMessage: kt, setLocaleMessage: Et, mergeLocaleMessage: Bt, getDateTimeFormat: nt, setDateTimeFormat: j, mergeDateTimeFormat: Y, getNumberFormat: z, setNumberFormat: X, mergeNumberFormat: _e };
        
        function E(_) {
            _.locale.value = a.value, _.fallbackLocale.value = c.value, Object.keys(l.value)
                .forEach(R => { _.mergeLocaleMessage(R, l.value[R]) }), Object.keys(h.value)
                .forEach(R => { _.mergeDateTimeFormat(R, h.value[R]) }), Object.keys(f.value)
                .forEach(R => { _.mergeNumberFormat(R, f.value[R]) }), _.escapeParameter = I, _.fallbackFormat = b, _.fallbackRoot = A, _.fallbackWarn = T, _.missingWarn = g, _.warnHtmlMessage = x
        }
        return Mf(() => {
            if (t.proxy == null || t.proxy.$i18n == null) throw pt(at.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
            const _ = i.value = t.proxy.$i18n.__composer;
            e === "global" ? (a.value = _.locale.value, c.value = _.fallbackLocale.value, l.value = _.messages.value, h.value = _.datetimeFormats.value, f.value = _.numberFormats.value) : o && E(_)
        }), ke
    }
    const OS = ["locale", "fallbackLocale", "availableLocales"]
        , Ah = ["t", "rt", "d", "n", "tm", "te"];
    
    function NS(t, e) {
        const n = Object.create(null);
        return OS.forEach(o => {
            const i = Object.getOwnPropertyDescriptor(e, o);
            if (!i) throw pt(at.UNEXPECTED_ERROR);
            const s = it(i.value) ? { get() { return i.value.value }, set(a) { i.value.value = a } } : { get() { return i.get && i.get() } };
            Object.defineProperty(n, o, s)
        }), t.config.globalProperties.$i18n = n, Ah.forEach(o => {
            const i = Object.getOwnPropertyDescriptor(e, o);
            if (!i || !i.value) throw pt(at.UNEXPECTED_ERROR);
            Object.defineProperty(t.config.globalProperties, `$${o}`, i)
        }), () => { delete t.config.globalProperties.$i18n, Ah.forEach(o => { delete t.config.globalProperties[`$${o}`] }) }
    }
    aS();
    __INTLIFY_JIT_COMPILATION__ ? nh(tS) : nh(eS);
    Vw(ww);
    Gw(Pm);
    if (__INTLIFY_PROD_DEVTOOLS__) {
        const t = Fn();
        t.__INTLIFY__ = !0, Dw(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
    }
    const PS = { title: "Title", author: "Author", article: "Article | {n} Articles", template: "Template | {n} Templates", date: "Date", content: "Content", seen: "Seen", person: "Person", noData: "No data", search: "Search...", delete: "Delete", createdAt: "Created", updatedAt: "Last updated", sign: "Sign", reject: "Reject", instructor: "Instructor", socialWorker: "Social worker", name: "Name", apprentice: "Apprentices", choose: "Choose", calendarWeek: "Calendar Week", saving: "Saving changes ...", dateFormat: { monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], daysOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], justNow: "Just now", minute: "a minute ago | {n} minutes ago", hour: "an hour ago | {n} hours ago", week: "a week ago | {n} weeks ago", month: "a month ago | {n} months ago", year: "a year ago | {n} years ago", before: "Yesterday at", on: "on" }, status: { status: "Status", editing: "Editing", submitted: "Submitted", submittedLate: "Submitted Late", approved: "Approved", rejected: "Rejected", inexistent: "Inexistent", excused: "Excused", pending: "Current week", composing: "In Progress" }, visibility: { name: "Visibility", public: "Public", private: "Private" }, cancel: "Cancel", continue: "Continue", save: "Save", saveAndExit: "Save and exit", discard: "Discard changes", messages: { error: { notDone: "Not done", late: "Too late", invalid: "Invalid request", denied: "Permission denied.", validation: "Validation error -", tooLong: `The answer took too long. 
Try again.`, wrong: `Something went wrong! 
Try again.`, network: `Network error. 
Check internet connection.`, notFound: "article not found", noContent: "Content is empty", noTitle: "Title is empty", excused: "Excused for this week" }, success: { deleted: "Successfully deleted" }, info: { unsaved: "You have unsaved changes!" } }, notFound: "Not found", journal: "Journal", loading: "Loading...", default: "Default:", edit: "Edit", back: "Back", close: "Close", "more-info": "More info", confirm: { leave: "Leave anyway?" }, action: { "close-save": "Save and close", "no-save": "Close without saving" }, user: "User", value: "Value", trigger: "Trigger", articleRejected: "Rejected your article", articleApproved: "Approved your article", articleSubmitted: "Submitted his/her article" }
        , MS = { modal: { attention: "This action needs your attention", warning: "This action cannot be undone." }, activityLog: { name: "Activity Log", created: "Article has been created", updated: "Article has been updated", submitted: "Article has been submitted", composing: "Article has been released for editing", late: "Article has been submitted late", approved: "Article has been signed", deleted: "Article has been deleted", title: "Title", note: "Note", by: "By", rejected: "The article has been rejected and released for editing" }, offweek: { absence: "Absence | Absences", input: "Week input:", created: "Absence added successfully!.", deleted: "Absence deleted successfully.", edit: "Edit Absence" }, notFound: { information: "Please click the button below to return to the home page.", notFound: "The page you were looking for could not be found.", noPermission: "You don't have the required permission." }, comment: { created: "Comment has been added", edited: "Comment has been edited", deleted: "Comment has been deleted", noComment: "Currently no comments", name: "Comment | Comments", commentDeleteQuestion: "Are you sure you want to delete this comment?" } }
        , LS = { description: "A place to publish learning journals and other articles", information: "Sign in with your Rafisa account", signin: "Sign in" }
        , DS = { article: "Articles", home: "Home", people: "People", signout: "Sign out", allNotifications: "All notifications ...", templates: "Templates", feedback: "Feedback", bug: "Report Bug" }
        , xS = { welcome: "Welcome", completenessTracking: "Completeness Tracking" }
        , US = { newJournal: "New journal", loadMore: "Load more...", articleDeleteQuestion: "Are you sure you want to delete this article?", articles: "Journals", articleRead: { signingInformation: "Sign this article as instructor.", hasBeenApproved: "Article has been approved", deleteMessage: "Are you sure you want to delete this article?", visibility: "Visibility changed", statusChanged: "Item status updated.", submit: "Submit", edit: "Edit article", ask: "Ask instructor", delete: "Delete article" }, articleEdit: { bold: "Bold", italic: "Italic", strikethrough: "Strikethrough", code: "Code", link: "Link", preview: "Preview", help: "Help" } }
        , FS = { people: "People", person: { role: "Role", internalID: "Internal ID", amountOfJournals: "Number of learning journals", readJournals: "Read learning journals", email: "Email", registrationDate: "Registered on", lastLogin: "Last login", showMore: "Show more", edit: "Edit User" }, absences: { update: "Update absences", updated: "Updated absences", updatedError: "Problem occurred. Absences not updated." } }
        , HS = { copyright: "All rights reserved", about: "About" }
        , BS = { contributors: "Contributors" }
        , $S = { unsaved: "You have unsaved changes!", leave: "Leave anyway?", leaveWithoutSave: "Discard and leave", leaveAndSave: "Save and leave", publishComment: "Publish comment", preview: "Here you'll see the preview", write: "Write here" }
        , KS = { "default-successfully-changed": "Default template successfully changed.", templates: "Templates", newTemplate: "New Template", "info-text": "Here you can view all available templates and set the default template for your learners. There is also the option to set a default template for specific learners by adding them at the bottom of a template in read mode or by going to their profile and editing it. By clicking on an empty circle, you can set a template as the default template. You will then be asked whether you want to set it for all your learners or only for those who do not have a specific template.", default: "Default", "reset-default": "Reset default", "selected-as-default": "Set selected template as default?", "default-all-or-specific": "You can either set this template as the standard for all your leaners, or only for those who have no specific template assigned.", "update-default": "Update default", "update-default-all": "Update default for all", "error-no-default": "Your default is the global default template. There is nothing to reset.", "default-successfully-reset": "Default template successfully reset.", "not-found": "Template not found!", "user-added": "User added", "user-removed": "User removed", edit: "Edit Template", "really-delete": "Are you sure you want to delete this template?", delete: "Delete template", "set-this-as-default": "Do you want to set this template as the default?", "set-as-default": "Set as default...", "default-reset": "Do you want to reset your default template?", reset: "Reset", "will-reset-global": "Your default template will be reset to the global default template.", "template-users": "Users who use this template:", remove: "Remove...", "add-user": "Add user:", created: "Template created.", "template-updated": "Template updated.", defaultTemplate: "Default template:", templateDeleteQuestion: "Are you sure you want to delete this template?", "no-users-added": "No users added!" }
        , jS = { info: "The Lernjournal will be <b>temporarily unavailable</b> due to maintenance." }
        , qS = { name: "Frequently Asked Questions", everyone: "Everyone", all: [{ question: "What do the colors mean in the completeness overview?", answer: "Green - submitted on time, Orange - submitted late/In progress, and Red - not done" }, { question: "Where can I report bugs and give feedback?", answer: "If you click on the megaphone icon at the bottom right, you will see three options: the FAQ option, which leads to this page; the feedback page, which redirects you to an MS-Forms; and the report a bug option, which allows you to send an email to the learning journal team." }, { question: "Who can see my public and private articles/learning journals?", answer: "All users of the application can see the public learning journals/articles. Only you, as well as all social workers and instructors, can see your private articles." }, { question: "Who can comment on a submitted learning journal?", answer: "The owner and all instructors as well as social workers can comment on a submitted learning journal." }, { question: "When is the submission deadline for a learning journal?", answer: "You can submit a learning journal within the selected calendar week by Sunday midnight to be considered on time. If you submit it after this time, it will be marked as late." }], instructor: [{ question: "Why can't I see my trainees?", answer: "To see your trainees, you need to assign yourself to the respective person. You can do this by going to the user profile of the respective trainee, clicking on the pencil icon next to the name, and then setting yourself as the supervisor." }, { question: "How do I assign the template to my trainees?", answer: "You go to the desired template that you want to assign to the trainees and click on 'Set as default', or you could click on the point at the top right of the card in the card view." }, { question: "What is the difference between 'Update default for all' and 'Update default' in the templates?", answer: "'Update default for all' sets the selected template for all your trainees. 'Update default', on the other hand, updates the template only for those of your trainees who do not yet have a default template." }, { question: "How can I enter absences for my trainees?", answer: "By clicking on the clock icon in the user profile next to the name and then selecting the calendar week and saving it." }], socialWorker: [{ question: "Why can't I see my trainees?", answer: "To see your trainees, you need to assign yourself to the respective person. You can do this by going to the user profile of the respective trainee, clicking on the pencil icon next to the name, and then setting yourself as the supervisor." }], apprentice: [{ question: "How do you write a learning journal?", answer: "A learning journal is written either using HTML or Markdown." }, { question: "Why can you create a learning journal without a calendar week?", answer: "When you create a learning journal without a calendar week, it is called an article. In this article, you can write, for example, a blog or a knowledge entry, etc." }, { question: "Why can't I style the HTML in my article/learning journal?", answer: "Styling has been prohibited for the learning journal so that the page cannot be manipulated and sold as another page." }] }
        , VS = { name: "Notifications", none: "No notifications", articleApproved: { title: "Article approved", text: "{doer} approved your article." }, articleCreated: { title: "Article created", text: "{doer} created a new article." }, articleNotSubmitted: { title: "Article not submitted", text: "{doer} hasn't submitted their article yet." }, articleRejected: { title: "Article rejected", text: "{doer} rejected your article." }, articleSubmitted: { title: "Article submitted", text: "{doer} submitted an article." }, commentCreated: { title: "New comment", text: "{doer} left a comment for you." }, userRelationUpdated: { title: "New {role}", text: "{assignee} is now your new {role}." } }
        , GS = { global: PS, components: MS, login: LS, navbar: DS, home: xS, article: US, persons: FS, footer: HS, about: BS, articleEdit: $S, template: KS, maintenance: jS, faq: qS, notification: VS }
        , WS = { title: "Titre", author: "Auteur", article: `Article | 
{n} articles`, date: "Date", content: "Contenu", seen: "Vu", person: "Personne", noData: "Aucune donn\xe9e", search: "Rechercher...", delete: "Supprimer", createdAt: "Cr\xe9\xe9", updatedAt: "Derni\xe8re modification", sign: "Signer", instructor: "Formateur*rice", socialWorker: "\xc9ducateur*rice social*e", name: "Nom", apprentice: "Apprentis", choose: "Choisir", calendarWeek: "Semaine du calendrier", saving: "Sauvegarde des changements ...", dateFormat: { monthsShort: ["Janv.", "F\xe9v.", "Mar.", "Avr.", "Mai", "Juin", "Juil.", "Ao\xfbt", "Sept.", "Oct.", "Nov.", "D\xe9c."], daysOfWeek: [" Dimanche ", "Lundi", " Mardi ", " Mercredi ", " Jeudi ", " Vendredi ", " Samedi "], justNow: "\xc0 l'instant", minute: "il y a une minute | il y a {n} minutes", hour: "il y a une heure | il y a {n} heures", week: "il y a une semaine | il y a {n} semaines", month: "il y a un mois | il y a {n} mois", year: "il y a un an | il y a {n} ans", before: "Hier \xe0", on: "le" }, status: { status: "Statut", editing: "En cours de modification", submitted: "Soumis", submittedLate: "Soumis en retard", approved: "Approuv\xe9", rejected: "Rejet\xe9", inexistent: "Inexistant", excused: "Excus\xe9", pending: "Cette semaine", composing: "En cours" }, visibility: { name: "Visibilit\xe9", public: "Public", private: "Priv\xe9" }, cancel: "Annuler", continue: "Continuer", save: "Sauvegarder", saveAndExit: "Sauvegarder et quitter", discard: "Annuler les modifications", messages: { error: { notDone: "Pas fini", late: "Trop tard", invalid: "Requ\xeate invalide", denied: "Permission refus\xe9e.", validation: "Erreur de validation -", tooLong: `La r\xe9ponse a pris trop de temps. 
Essayer \xe0 nouveau.`, wrong: `Quelque chose s'est mal pass\xe9\xa0!
Essayer \xe0 nouveau.`, network: `Erreur r\xe9seau. 
V\xe9rifiez la connexion Internet.`, notFound: "article introuvable", noContent: "Le contenu est vide", noTitle: "Le titre est vide", excused: "Excus\xe9 pour cette semaine" }, success: { deleted: "Supprim\xe9 avec succ\xe8s" }, info: { unsaved: "Vous avez des changements non enregistr\xe9s!" } }, notFound: "Pas trouv\xe9", journal: "Journal", loading: "Charger...", default: "D\xe9faut:", edit: "Modifier", back: "Dos", close: "Fermer", "more-info": "Plus d'informations", confirm: { leave: "Partir quand m\xeame ?" }, action: { "close-save": "Sauver et fermer", "no-save": "Fermer sans enregistrer" }, template: `Mod\xe8le | 
{n} mod\xe8les`, value: "Valeur", trigger: "d\xe9clenchement", articleRejected: "J'ai rejet\xe9 votre article", articleApproved: "J'ai approuv\xe9 votre article", articleSubmitted: "A soumis son article", reject: "Rejeter", user: "Utilisateur" }
        , zS = { description: "Un endroit pour publier des journaux d'apprentissage et d'autres articles", information: "Connectez-vous avec votre compte Rafisa", signin: "Se connecter" }
        , YS = { article: "Articles", home: "Accueil", people: "Personnes", signout: "Se d\xe9connecter", allNotifications: "Toutes les notifications ...", templates: "Mod\xe8les", feedback: "Retour", bug: "Rapporte une bug" }
        , QS = { welcome: "Bienvenue", completenessTracking: "Suivi de l'exhaustivit\xe9" }
        , JS = { newJournal: "Nouveau journal", loadMore: "Charger plus...", articleRead: { signingInformation: "Signer cet article en tant que formateur*rice.", hasBeenApproved: "L'article a \xe9t\xe9 sign\xe9", deleteMessage: "\xcates-vous s\xfbr de vouloir supprimer cet article?", visibility: "Visibilit\xe9 modifi\xe9e", statusChanged: "Statut de l'article mis \xe0 jour.", submit: "Remettre", edit: "Modifier l'article", ask: "Demandez \xe0 l'instructeur", delete: "Supprimer l'article" }, articleEdit: { bold: "Audacieux", italic: "Italique", strikethrough: "Ligne \xe0 travers", code: "Code", link: "Lien", preview: "Aper\xe7u", help: "Aide" }, articleDeleteQuestion: "\xcates-vous s\xfbr de vouloir supprimer cet article\xa0?", articles: "Journaux" }
        , XS = { person: { role: "R\xf4le", internalID: "ID interne", amountOfJournals: "Nombre de journaux d'apprentissage", readJournals: "Journaux d'apprentissage lus", email: "Email", registrationDate: "Inscrit le", lastLogin: "Derni\xe8re connexion", showMore: "Afficher plus", edit: "Modifier l'utilisateur" }, people: "Personnes", absences: { update: "Mise \xe0 jour des absences", updated: "Absences mises \xe0 jour", updatedError: "Un probl\xe8me est survenu. Les absences ne sont pas mises \xe0 jour." } }
        , ZS = { copyright: "Tous droits r\xe9serv\xe9s", about: "\xc0 propos" }
        , e0 = { contributors: "Contributeurs" }
        , t0 = { modal: { attention: "Cette action n\xe9cessite votre attention", warning: "Cette action ne peut pas \xeatre annul\xe9e." }, offweek: { input: "Saisie hebdomadaire:", created: "Absence ajout\xe9e avec succ\xe8s\xa0!.", deleted: "Absence supprim\xe9e avec succ\xe8s.", absence: `Absences | 
Absences`, edit: "Modifier une absence" }, activityLog: { name: "Journal des activit\xe9s", created: "L'article a \xe9t\xe9 cr\xe9\xe9", updated: "L'article a \xe9t\xe9 mis \xe0 jour", submitted: "L'article a \xe9t\xe9 soumis", composing: "L'article a \xe9t\xe9 lib\xe9r\xe9 pour modification", late: "L'article a \xe9t\xe9 soumis en retard", approved: "L'article a \xe9t\xe9 sign\xe9", deleted: "L'article a \xe9t\xe9 supprim\xe9", title: "Titre", by: "Par", note: "Note", rejected: "L'article a \xe9t\xe9 rejet\xe9 et publi\xe9 pour \xe9dition" }, notFound: { information: "Veuillez cliquer sur le bouton ci-dessous pour revenir \xe0 la page d'accueil.", notFound: "La page que vous cherchiez est introuvable.", noPermission: "Vous n'avez pas l'autorisation requise." }, comment: { created: "Le commentaire a \xe9t\xe9 ajout\xe9", edited: "Le commentaire a \xe9t\xe9 modifi\xe9", deleted: "Le commentaire a \xe9t\xe9 supprim\xe9", noComment: "Actuellement aucun commentaire", name: "Commentaire | Commentaires", commentDeleteQuestion: "\xeates-vous s\xfbr de vouloir supprimer ce commentaire?" } }
        , n0 = { unsaved: "Vous avez des changements non enregistr\xe9s!", leave: "Partir quand m\xeame ?", leaveWithoutSave: "Fermer sans enregistrer", leaveAndSave: "Sauvegarde et fermeture", publishComment: "Publier le commentaire", preview: "Ici, vous verrez l'aper\xe7u", write: "\xc9crivez ici" }
        , r0 = { "default-successfully-changed": "Le mod\xe8le par d\xe9faut a \xe9t\xe9 modifi\xe9 avec succ\xe8s.", templates: "Mod\xe8les", newTemplate: "Nouveau mod\xe8le", "info-text": `Ici, vous pouvez afficher tous les mod\xe8les disponibles et d\xe9finir le mod\xe8le par d\xe9faut pour vos apprenants. 
Il existe \xe9galement la possibilit\xe9 de d\xe9finir un mod\xe8le par d\xe9faut pour des apprenants sp\xe9cifiques en les ajoutant au bas d'un mod\xe8le en mode lecture ou en acc\xe9dant \xe0 leur profil et en le modifiant. 
En cliquant sur un cercle vide, vous pouvez d\xe9finir un mod\xe8le comme mod\xe8le par d\xe9faut. 
Il vous sera ensuite demand\xe9 si vous souhaitez le param\xe9trer pour tous vos apprenants ou uniquement pour ceux qui ne disposent pas de mod\xe8le sp\xe9cifique.`, default: "D\xe9faut", "reset-default": "R\xe9initialiser par d\xe9faut", "selected-as-default": "D\xe9finir le mod\xe8le s\xe9lectionn\xe9 par d\xe9faut\xa0?", "update-default": "Mettre \xe0 jour par d\xe9faut", "update-default-all": "Mettre \xe0 jour par d\xe9faut pour tous", "error-no-default": `Votre valeur par d\xe9faut est le mod\xe8le global par d\xe9faut. 
Il n'y a rien \xe0 r\xe9initialiser.`, "default-successfully-reset": "Le mod\xe8le par d\xe9faut a \xe9t\xe9 r\xe9initialis\xe9 avec succ\xe8s.", "default-all-or-specific": "Vous pouvez soit d\xe9finir ce mod\xe8le comme standard pour tous vos \xe9l\xe8ves, soit uniquement pour ceux qui n'ont pas de mod\xe8le sp\xe9cifique attribu\xe9.", "not-found": "Mod\xe8le introuvable\xa0!", "user-added": "Utilisateur ajout\xe9", "user-removed": "Utilisateur supprim\xe9", edit: "Modifier le mod\xe8le", "really-delete": "\xcates-vous s\xfbr de vouloir supprimer ce mod\xe8le\xa0?", delete: "Supprimer le mod\xe8le", "set-this-as-default": "Voulez-vous d\xe9finir ce mod\xe8le par d\xe9faut\xa0?", "set-as-default": "D\xe9finir par d\xe9faut...", "default-reset": "Voulez-vous r\xe9initialiser votre mod\xe8le par d\xe9faut\xa0?", reset: "R\xe9initialiser...", "will-reset-global": "Votre mod\xe8le par d\xe9faut sera r\xe9initialis\xe9 au mod\xe8le global par d\xe9faut.", "template-users": "Utilisateurs qui utilisent ce mod\xe8le\xa0:", remove: "Retirer...", "add-user": "Ajouter un utilisateur\xa0:", created: "Mod\xe8le cr\xe9\xe9.", "template-updated": "Mod\xe8le mis \xe0 jour.", defaultTemplate: "Mod\xe8le par d\xe9faut\xa0:", templateDeleteQuestion: "\xcates-vous s\xfbr de vouloir supprimer ce mod\xe8le\xa0?", "no-users-added": "Aucun utilisateur ajout\xe9\xa0!" }
        , o0 = { name: "Notifications", none: "Aucune notification", articleApproved: { title: "Article approuv\xe9", text: "{doer} a approuv\xe9 votre article." }, articleCreated: { title: "Article cr\xe9\xe9", text: "{doer} a cr\xe9\xe9 un nouvel article." }, articleNotSubmitted: { title: "Article non soumis", text: "{doer} n'a pas encore soumis son article." }, articleRejected: { title: "Article rejet\xe9", text: "{doer} a rejet\xe9 votre article." }, articleSubmitted: { title: "Article soumis", text: "{doer} a soumis un article." }, commentCreated: { title: "Nouveau commentaire", text: "{doer} a laiss\xe9 un commentaire pour vous." }, userRelationUpdated: { title: "Nouveau {role}", text: "{assignee} est d\xe9sormais votre nouveau {role}." } }
        , i0 = { info: "Le Lernjournal sera <b>temporairement indisponible</b> en raison d'une maintenance." }
        , s0 = { name: "Questions fr\xe9quemment pos\xe9es", everyone: "Tout le monde", all: [{ question: "Que signifient les couleurs dans la vue d'ensemble de l'exhaustivit\xe9?", answer: "Vert - remis \xe0 temps, Orange - remis en retard/En cours, et Rouge - non fait" }, { question: "O\xf9 puis-je signaler des bugs et donner des retours?", answer: "Si vous cliquez sur l'ic\xf4ne du m\xe9gaphone en bas \xe0 droite, vous verrez trois options: l'option FAQ, qui m\xe8ne \xe0 cette page; la page de feedback, qui vous redirige vers un MS-Forms; et l'option signaler un bug, qui vous permet d'envoyer un email \xe0 l'\xe9quipe du journal d'apprentissage." }, { question: "Qui peut voir mes articles/journaux d'apprentissage publics et priv\xe9s?", answer: "Tous les utilisateurs de l'application peuvent voir les journaux d'apprentissage/articles publics. Seuls vous, ainsi que tous les travailleurs sociaux et formateurs, pouvez voir vos articles priv\xe9s." }, { question: "Qui peut commenter un journal d'apprentissage soumis?", answer: "Le propri\xe9taire et tous les formateurs ainsi que les travailleurs sociaux peuvent commenter un journal d'apprentissage soumis." }, { question: "Quand est la date limite de soumission d'un journal d'apprentissage?", answer: "Vous pouvez soumettre un journal d'apprentissage dans la semaine calendaire s\xe9lectionn\xe9e jusqu'\xe0 minuit le dimanche pour qu'il soit consid\xe9r\xe9 comme soumis \xe0 temps. Si vous le soumettez apr\xe8s ce d\xe9lai, il sera marqu\xe9 comme en retard." }], instructor: [{ question: "Pourquoi je ne vois pas mes apprenants?", answer: "Pour voir vos apprenants, vous devez vous assigner \xe0 la personne respective. Vous pouvez le faire en allant dans le profil utilisateur de l'apprenant concern\xe9, en cliquant sur l'ic\xf4ne du crayon \xe0 c\xf4t\xe9 du nom et en vous d\xe9finissant comme le superviseur." }, { question: "Comment attribuer le mod\xe8le \xe0 mes apprenants?", answer: "Vous allez au mod\xe8le souhait\xe9 que vous souhaitez attribuer aux apprenants et cliquez sur 'D\xe9finir comme mod\xe8le par d\xe9faut', ou vous pouvez cliquer sur le point en haut \xe0 droite de la carte dans la vue carte." }, { question: "Quelle est la diff\xe9rence entre 'Mettre \xe0 jour le mod\xe8le pour tous' et 'Mettre \xe0 jour le mod\xe8le' dans les mod\xe8les?", answer: "'Mettre \xe0 jour le mod\xe8le pour tous' d\xe9finit le mod\xe8le s\xe9lectionn\xe9 pour tous vos apprenants. 'Mettre \xe0 jour le mod\xe8le', en revanche, met \xe0 jour le mod\xe8le uniquement pour ceux de vos apprenants qui n'ont pas encore de mod\xe8le par d\xe9faut." }, { question: "Comment puis-je enregistrer les absences de mes apprenants?", answer: "En cliquant sur l'ic\xf4ne de l'horloge dans le profil utilisateur \xe0 c\xf4t\xe9 du nom, puis en s\xe9lectionnant la semaine calendaire et en l'enregistrant." }], socialWorker: [{ question: "Pourquoi je ne vois pas mes apprenants?", answer: "Pour voir vos apprenants, vous devez vous assigner \xe0 la personne respective. Vous pouvez le faire en allant dans le profil utilisateur de l'apprenant concern\xe9, en cliquant sur l'ic\xf4ne du crayon \xe0 c\xf4t\xe9 du nom et en vous d\xe9finissant comme le superviseur." }], apprentice: [{ question: "Comment \xe9crire un journal d'apprentissage?", answer: "Un journal d'apprentissage est \xe9crit soit en utilisant HTML, soit Markdown." }, { question: "Pourquoi peut-on cr\xe9er un journal d'apprentissage sans semaine calendaire?", answer: "Lorsque vous cr\xe9ez un journal d'apprentissage sans semaine calendaire, cela s'appelle un article. Dans cet article, vous pouvez \xe9crire, par exemple, un blog ou une entr\xe9e de connaissances, etc." }, { question: "Pourquoi ne puis-je pas styliser le HTML dans mon article/journal d'apprentissage?", answer: "Le style a \xe9t\xe9 interdit pour le journal d'apprentissage afin que la page ne puisse pas \xeatre manipul\xe9e et vendue comme une autre page." }] }
        , a0 = { global: WS, login: zS, navbar: YS, home: QS, article: JS, persons: XS, footer: ZS, about: e0, components: t0, articleEdit: n0, template: r0, notification: o0, maintenance: i0, faq: s0 }
        , c0 = { title: "Titel", author: "Autor", article: "Artikel", date: "Datum", content: "Inhalt", seen: "Gelesen", person: "Person", noData: "Keine Daten", search: "Suchen...", delete: "L\xf6schen", createdAt: "Erstellt", updatedAt: "Zuletzt ge\xe4ndert", sign: "signieren", instructor: "Berufsbildner*in", socialWorker: "Sozialp\xe4dagog*in", name: "Name", apprentice: "Lernende", choose: "Ausw\xe4hlen", cancel: "Abbrechen", continue: "Fortfahren", calendarWeek: "Kalenderwoche", loading: "Laden...", default: "Standard:", edit: "Bearbeiten", saving: "\xc4nderungen speichern ...", dateFormat: { monthsShort: ["Jan", "Feb", "M\xe4r", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"], daysOfWeek: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], justNow: "Gerade eben", minute: "vor einer Minute | vor {n} Minuten", hour: "vor einer Stunde | vor {n} Stunden", week: "vor einer Woche | vor {n} Wochen", month: "vor einem Monat | vor {n} Monaten", year: "vor einem Jahr | vor {n} Jahren", before: "Gestern um", on: "am" }, status: { status: "Status", editing: "In Bearbeitung", submitted: "Abgegeben", submittedLate: "Sp\xe4t Abgegeben", approved: "Signiert", rejected: "Abgelehnt", inexistent: "Nicht vorhanden", excused: "Entschuldigt", pending: "Diese Woche", composing: "In Bearbeitung" }, visibility: { name: "Sichtbarkeit", public: "\xd6ffentlich", private: "Privat" }, save: "Speichern", saveAndExit: "Speichern und schliessen", discard: "Entwurf verwerfen", notFound: "Nicht gefunden", messages: { error: { notDone: "Nicht gemacht", late: "Zu sp\xe4t", invalid: "Anfrage ung\xfcltig", validation: "Validierungsfehler - ", tooLong: `Die Antwort hat zu lange gedauert. 
Erneut versuchen.`, wrong: "Etwas ist schiefgelaufen! Erneut versuchen.", network: "Netzwerkfehler. Internetverbindung \xfcberpr\xfcfen.", notFound: "Artikel wurde nicht gefunden", denied: "Zugriff verweigert.", noContent: "Der Inhalt ist leer", noTitle: "Der Titel ist leer", excused: "F\xfcr diese Woche entschuldigt" }, success: { deleted: "Erfolgreich gel\xf6scht" }, info: { unsaved: "Du hast ungespeicherte \xc4nderungen!" } }, journal: "Lernjournal", back: "Zur\xfcck", close: "Schliessen", "more-info": "Mehr Info", confirm: { leave: "Trotzdem verlassen?" }, action: { "close-save": "Speichern und Schliessen", "no-save": "Ohne speichern schliessen" }, template: `Vorlage | 
{n} Vorlagen`, value: "Inhalt", trigger: "Ausl\xf6ser", articleRejected: "Hat Ihren Artikel abgelehnt", articleApproved: "Hat Ihren Artikel genehmigt", articleSubmitted: "Hat seinen/ihren Artikel eingereicht", reject: "Ablehnen", user: "Benutzer" }
        , l0 = { modal: { attention: "Diese Aktion erfordert Ihre Aufmerksamkeit", warning: "Diese Aktion kann nicht r\xfcckg\xe4ngig gemacht werden." }, activityLog: { name: "Aktivit\xe4tsprotokoll", created: "Artikel wurde erstellt", updated: "Artikel wurde aktualisiert", submitted: "Artikel wurde abgegeben", composing: "Artikel wurde f\xfcr die Bearbeitung freigegeben", late: "Artikel wurde zu sp\xe4t abgegeben", approved: "Artikel wurde signiert", deleted: "Artikel wurde gel\xf6scht", title: "Titel", by: "Von", note: "Notiz", rejected: "Der Artikel wurde abgelehnt und zur Bearbeitung freigegeben" }, offweek: { input: "Wocheneingabe:", created: "Absenz erfolgreich hinzugef\xfcgt!.", deleted: "Absenz wurde erfolgreich gel\xf6scht.", absence: `Abwesenheit | 
Abwesenheiten`, edit: "Abwesenheit bearbeiten" }, notFound: { notFound: "Die gesuchte Seite konnte nicht gefunden werden.", information: "Bitte klicken Sie auf den Button unten, um zur Startseite zur\xfcckzukehren.", noPermission: "Sie verf\xfcgen nicht \xfcber die erforderliche Berechtigung." }, comment: { created: "Kommentar wurde hinzugef\xfcgt", edited: "Kommentar wurde bearbeitet", deleted: "Kommentar wurde gel\xf6scht", noComment: "Derzeit keine Kommentare", name: "Kommentar | Kommentare", commentDeleteQuestion: "Sind Sie sicher, dass Sie diesen Kommentar l\xf6schen m\xf6chten?" } }
        , u0 = { description: "Ein Ort, um Lernjournale und andere Artikel zu ver\xf6ffentlichen", information: "Melde dich mit deinem Rafisa Konto an", signin: "Anmelden" }
        , d0 = { article: "Artikel", home: "Startseite", people: "Personen", signout: "Abmelden", allNotifications: "Alle Benachrichtigungen ...", templates: "Vorlagen", feedback: "Feedback", bug: "Bug melden" }
        , h0 = { welcome: "Willkommen", completenessTracking: "Vollst\xe4ndigkeits\xfcbersicht" }
        , f0 = { newJournal: "Neues Lernjournal", loadMore: "Mehr Laden...", articleRead: { signingInformation: "Als Ausbildner*in diesen Artikel signieren.", hasBeenApproved: "Artikel wurde signiert", deleteMessage: "Willst du diesen Artikel wirklich l\xf6schen?", visibility: "Sichtbarkeit ge\xe4ndert", statusChanged: "Artikelstatus aktualisiert.", edit: "Artikel bearbeiten", submit: "Abgeben", ask: "Berufsbildner fragen", delete: "Artikel l\xf6schen" }, articleEdit: { bold: "Fett", italic: "Kursiv", strikethrough: "Durchgestrichen", code: "Code", link: "Verkn\xfcpfung", preview: "Vorschau", help: "Hilfe" }, articleDeleteQuestion: "Sind Sie sicher, dass Sie diesen Artikel l\xf6schen m\xf6chten?", articles: "Lernjournale" }
        , p0 = { person: { role: "Rolle", internalID: "Interne ID", amountOfJournals: "Anzahl Lernjournale", readJournals: "Gelesene Lernjournale", email: "Email", registrationDate: "Registriert", lastLogin: "Letztes Login", showMore: "Mehr anzeigen", edit: "Benutzer bearbeiten" }, absences: { update: "Absenzen aktualisieren", updated: "Absenzen aktualisiert", updatedError: "Problem aufgetreten. Abwesenheiten nicht aktualisiert." }, people: "Personen" }
        , g0 = { copyright: "Alle Rechte vorbehalten", about: "\xdcber" }
        , m0 = { contributors: "Mitwirkende" }
        , y0 = { unsaved: "Du hast nicht gespeicherte \xc4nderungen!", leave: "Trotzdem verlassen?", leaveWithoutSave: "Schliessen ohne speichern", leaveAndSave: "Speichern und schliessen", publishComment: "Kommentar ver\xf6ffentlichen", preview: "Hier siehst du die Vorschau", write: "Hier schreiben" }
        , C0 = { "default-successfully-changed": "Standardvorlage erfolgreich ge\xe4ndert.", templates: "Vorlagen", newTemplate: "Neue Vorlage", "info-text": "Hier kannst du alle verf\xfcgbaren Vorlagen ansehen und die Standardvorlage f\xfcr deine Lernenden festlegen. Es gibt auch die M\xf6glichkeit, eine Standardvorlage f\xfcr bestimmte Lernende festzulegen, indem du sie unten in einer Vorlage im Lesemodus hinzuf\xfcgst oder indem du zu ihrem Profil gehst und es bearbeitest. Durch Klicken auf einen leeren Kreis kannst du eine Vorlage als Standardvorlage festlegen. Du wirst dann gefragt, ob du sie f\xfcr alle deine Lernenden oder nur f\xfcr diejenigen, die keine spezielle Vorlage haben, festlegen m\xf6chtest.", default: "Standard", "reset-default": "Standard zur\xfccksetzen", "selected-as-default": "Ausgew\xe4hlte Vorlage als Standard festlegen?", "default-all-or-specific": "Du kannst diese Vorlage entweder als Standardvorlage f\xfcr alle deine Lernenden festlegen, oder nur f\xfcr die, denen keine bestimmte Standardvorlage zugewiesen ist.", "update-default": "Standard aktualisieren", "update-default-all": "Standard f\xfcr alle aktualisieren", "error-no-default": "Dein Standard ist die globale Standardvorlage. Es gibt nichts zum zur\xfccksetzen.", "default-successfully-reset": "Standardvorlage erfolgreich zur\xfcckgesetzt.", "not-found": "Vorlage nicht gefunden!", "user-added": "Benutzer hinzugef\xfcgt", "user-removed": "Benutzer wurde entfernt", edit: "Vorlage bearbeiten", "really-delete": "Willst du diese Vorlage wirklich l\xf6schen?", delete: "Vorlage l\xf6schen", "set-this-as-default": "Willst du diese Vorlage als Standard setzen?", "set-as-default": "Als Standard setzen...", "default-reset": "Willst du deine Standardvorlage zur\xfccksetzen?", reset: "Zur\xfccksetzen...", "will-reset-global": "Deine Standardvorlage wird auf die globale Standardvorlage zur\xfcckgesetzt.", "template-users": "Benutzer, die diese Vorlage verwenden:", remove: "Entfernen", "add-user": "Benutzer hinzuf\xfcgen:", created: "Vorlage erstellt.", "template-updated": "Vorlage aktualisiert.", defaultTemplate: "Standardvorlage:", templateDeleteQuestion: "Sind Sie sicher, dass Sie diese Vorlage l\xf6schen m\xf6chten?", "no-users-added": "Keine Benutzer hinzugef\xfcgt!" }
        , _0 = { name: "Benachrichtigungen", none: "Keine Benachrichtigungen", articleApproved: { title: "Artikel wurde signiert", text: "{doer} hat deinen Artikel signiert." }, articleCreated: { title: "Artikel wurde erstellt", text: "{doer} hat einen neuen Artikel erstellt." }, articleNotSubmitted: { title: "Artikel wurde nicht abgegeben", text: "{doer} hat seinen/ihren Artikel noch nicht abgegeben." }, articleRejected: { title: "Artikel wurde zur\xfcckgewiesen", text: "{doer} hat deinen Artikel zur\xfcckgewiesen." }, articleSubmitted: { title: "Artikel wurde abgegeben", text: "{doer} hat einen Artikel abgegeben." }, commentCreated: { title: "Neuer Kommentar", text: "{doer} hat einen Kommentar f\xfcr Sie hinterlassen." }, userRelationUpdated: { title: "Neue(r) {role}", text: "{assignee} ist jetzt dein(e) neue(en) {role}." } }
        , T0 = { info: "Das Lernjournal wird aufgrund Wartungsarbeiten <b>vor\xfcbergehend nicht verf\xfcgbar</b> sein." }
        , v0 = { name: "Oft gestellte Fragen", everyone: "Alle", all: [{ question: "Was bedeuten die Farben bei der Vollst\xe4ndigkeits\xfcbersicht?", answer: "Gr\xfcn - rechtzeitig abgegeben, Orange - sp\xe4t abgegeben/In Bearbeitung und Rot - nicht gemacht" }, { question: "Wo kann ich Bugs und Feedback mitteilen?", answer: "Wenn man unten rechts auf das Megaphon-Symbol dr\xfcckt, sieht man drei Optionen: die FAQ-Option, diese f\xfchrt auf diese Seite; die Feedback-Seite, bei der man auf ein MS-Forms weitergeleitet wird; und die Bug melden-Option, bei der man eine E-Mail an das Lernjournal-Team sendet." }, { question: "Wer sieht meine \xf6ffentlichen sowie die privaten Artikel/Lernjournale?", answer: "Die \xf6ffentlichen Lernjournale/Artikel sehen alle, die die Applikation benutzen. Deine privaten Artikel sehen grunds\xe4tzlich nur du sowie alle Sozialp\xe4dagogen und Berufsbildner." }, { question: "Wer kann auf ein abgegebenes Lernjournal kommentieren?", answer: "Auf ein abgegebenes Lernjournal k\xf6nnen der Eigent\xfcmer und alle Ausbildner sowie Sozialp\xe4dagogen kommentieren." }, { question: "Wann ist das Abgabedatum eines Lernjournals?", answer: "Ein Lernjournal reicht man in derselben ausgew\xe4hlten Kalenderwoche bis einschliesslich Sonntag um Mitternacht rechtzeitig ein. Wenn man es jedoch nach diesem Zeitpunkt einreicht, wird es als versp\xe4tet abgegeben markiert." }], instructor: [{ question: "Wieso sehe ich meine Lernenden nicht?", answer: "Damit man seine Lernenden sehen kann, muss man sich selber der jeweiligen Person zuweisen. Dies kann man, indem man auf das Userprofil des dementsprechenden Lernenden geht, auf das Stift-Symbol neben dem Namen dr\xfcckt und sich dort als Vorgesetzter setzt." }, { question: "Wie weise ich die Vorlage meinen Lernenden zu?", answer: "Man geht auf die gew\xfcnschte Vorlage, die man den Lernenden zuweisen m\xf6chte, und dr\xfcckt auf 'Als Standard setzen', oder man k\xf6nnte auf der Karten-Ansicht auf den Punkt rechts oben von der Karte dr\xfccken." }, { question: "Was ist der Unterschied zwischen 'Standard f\xfcr alle aktualisieren' und 'Standard aktualisieren' bei den Vorlagen?", answer: "'Standard f\xfcr alle aktualisieren' setzt f\xfcr all deine Lernenden die ausgew\xe4hlte Vorlage. 'Standard aktualisieren' hingegen aktualisiert die Vorlage nur f\xfcr diejenigen deiner Lernenden, die noch keine Standardvorlage haben." }, { question: "Wie kann ich Absenzen meiner Lernenden eintragen?", answer: "Indem man auf das Uhrensymbol im Userprofil neben dem Namen dr\xfcckt und dort dann die Kalenderwoche ausw\xe4hlt und dieses dann speichert." }], socialWorker: [{ question: "Wieso sehe ich meine Lernenden nicht?", answer: "Damit man seine Lernenden sehen kann, muss man sich selber der jeweiligen Person zuweisen. Dies kann man, indem man auf das Userprofil des dementsprechenden Lernenden geht, auf das Stift-Symbol neben dem Namen dr\xfcckt und sich dort als Vorgesetzter setzt." }], apprentice: [{ question: "Wie schreibt man ein Lernjournal?", answer: "Ein Lernjournal schreibt man entweder mithilfe von HTML oder Markdown." }, { question: "Warum kann man ein Lernjournal ohne Kalenderwoche erstellen?", answer: "Wenn man ein Lernjournal ohne Kalenderwoche erstellt, spricht man von einem Artikel. In diesem Artikel schreibt man dann z.B. einen Blog oder einen Wissenseintrag usw." }, { question: "Warum kann ich das HTML in meinem Artikel/Lernjournal nicht stylen?", answer: "Das Styling wurde f\xfcr das Lernjournal verboten, damit man damit nicht die Seite manipulieren kann und es dann als andere Seite verkauft." }] }
        , E0 = { global: c0, components: l0, login: u0, navbar: d0, home: h0, article: f0, persons: p0, footer: g0, about: m0, articleEdit: y0, template: C0, notification: _0, maintenance: T0, faq: v0 }
        , A0 = { title: "Titolo", author: "Autore", article: `Articolo | 
{n} articoli`, date: "Data", content: "Contenuto", seen: "Visto", person: "Persona", noData: "Nessun dato", search: "Cerca...", delete: "Elimina", createdAt: "Creato", updatedAt: "Ultima modifica", sign: "Firma", instructor: "Istruttore", socialWorker: "Assistente sociale", name: "Nome", apprentice: "Apprendisti", choose: "Scegliere", calendarWeek: "Settimana del calendario", saving: "Salvataggio delle modifiche ...", dateFormat: { monthsShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"], daysOfWeek: [" Domenica", "Luned\xec", " Marted\xec", " Mercoled\xec", " Gioved\xec", " Venerd\xec", " Sabato"], justNow: "Proprio ora", minute: "un minuto fa | {n} minuti fa", hour: "un'ora fa | {n} ore fa", week: "una settimana fa | {n} settimane fa", month: "un mese fa | {n} mesi fa", year: "un anno fa | {n} anni fa", before: "Ieri alle", on: "il" }, status: { status: "Stato", editing: "Modifica in corso", submitted: "Inviato", submittedLate: "Inviato in ritardo", approved: "Approvato", rejected: "respinto", inexistent: "Inesistente", excused: "Scusato", pending: "Settimana corrente", composing: "In corso" }, visibility: { name: "Visibilit\xe0", public: "Pubblico", private: "Privato" }, cancel: "Annulla", continue: "Continua", save: "Salva", saveAndExit: "Salvare e uscire", discard: "Non salvare le modifiche", messages: { error: { notDone: "Non fatto", late: "Troppo tardi", invalid: "Richiesta non valida", denied: "Permesso negato.", validation: "Errore di convalida -", tooLong: `La risposta ha richiesto troppo tempo. 
Riprova.`, wrong: `Qualcosa \xe8 andato storto! 
Riprova.`, network: `Errore di rete. 
Controlla la connessione Internet.`, notFound: "articolo non trovato", noContent: "Il contenuto \xe8 vuoto", noTitle: "Il titolo \xe8 vuoto", excused: "Scusati per questa settimana" }, success: { deleted: "Eliminato con successo" }, info: { unsaved: "Hai modifiche non salvate!" } }, notFound: "Non trovato", journal: "rivista", loading: "Carico...", default: "Predefinito:", edit: "Modificare", back: "Indietro", close: "Vicino", "more-info": "Ulteriori informazioni", confirm: { leave: "Partire comunque?" }, action: { "close-save": "Salva e chiudi", "no-save": "Chiudi senza salvare" }, template: `Modello | 
{n} modelli`, value: "Valore", trigger: "grilletto", articleRejected: "Rifiutato il tuo articolo", articleApproved: "Approvato il tuo articolo", articleSubmitted: "Ha inviato il suo articolo", reject: "Rifiutare", user: "Utente" }
        , b0 = { description: "Un posto per pubblicare giornali di apprendimento e altri articoli", information: "Accedi con il tuo account Rafisa", signin: "Accedi" }
        , I0 = { article: "Articoli", home: "Home", people: "Persone", signout: "Esci", allNotifications: "Tutte le notifiche ...", templates: "Modelli", feedback: "Feedback", bug: "Informaci di un b\xf6g" }
        , w0 = { welcome: "Benvenuto", completenessTracking: "Tracciamento completezza" }
        , S0 = { newJournal: "Nuovo giornale", loadMore: "Carica altro...", articleRead: { signingInformation: "Firma questo articolo come istruttore.", hasBeenApproved: "L'articolo \xe8 stato approvato", deleteMessage: "Sei sicuro di voler eliminare questo articolo?", visibility: "La visibilit\xe0 \xe8 cambiata", statusChanged: "Stato dell'articolo aggiornato.", submit: "Devolvere", edit: "Modifica articolo", ask: "Chiedi all'istruttore", delete: "Elimina articolo" }, articleEdit: { bold: "Grassetto", italic: "Corsivo", strikethrough: "Linea passante", code: "Codice", link: "Collegamento", preview: "Anteprima", help: "Aiuto" }, articleDeleteQuestion: "Sei sicuro di voler eliminare questo articolo?", articles: "Riviste" }
        , k0 = { person: { role: "Ruolo", internalID: "ID interno", amountOfJournals: "Numero di giornali di apprendimento", readJournals: "Giornali di apprendimento letti", email: "Email", registrationDate: "Registrato il", lastLogin: "Ultimo accesso", showMore: "Mostra altro", edit: "Modifica utente" }, people: "Persone", absences: { update: "Aggiornare le assenze", updated: "Assenze aggiornate", updatedError: "Si \xe8 verificato un problema. Assenze non aggiornate." } }
        , R0 = { copyright: "Tutti i diritti riservati", about: "Informazioni" }
        , O0 = { contributors: "Contribuenti" }
        , N0 = { modal: { attention: "Questa azione richiede la tua attenzione", warning: "Questa azione non pu\xf2 essere annullata." }, activityLog: { name: "Registro attivit\xe0", created: "L'articolo \xe8 stato creato", updated: "L'articolo \xe8 stato aggiornato", submitted: "L'articolo \xe8 stato inviato", composing: "L'articolo \xe8 stato rilasciato per la modifica", late: "L'articolo \xe8 stato inviato in ritardo", approved: "L'articolo \xe8 stato firmato", deleted: "L'articolo \xe8 stato eliminato", title: "Titolo", by: "Di", note: "Nota", rejected: "L'articolo \xe8 stato rifiutato e rilasciato per la modifica" }, offweek: { input: "Ingresso settimanale:", created: "Assenza aggiunta con successo!.", deleted: "Assenza eliminata correttamente.", absence: `Assenza | 
Assenze`, edit: "Modifica Assenza" }, notFound: { information: "Fare clic sul pulsante in basso per tornare alla home page.", notFound: "Impossibile trovare la pagina che stavi cercando.", noPermission: "Non disponi dell'autorizzazione richiesta." }, comment: { created: "\xc8 stato aggiunto il commento", edited: "Il commento \xe8 stato modificato", deleted: "Il commento \xe8 stato eliminato", noComment: "Al momento nessun commento", name: "Commento | commenti", commentDeleteQuestion: "Sei sicuro di voler eliminare questo commento?" } }
        , P0 = { unsaved: "Hai modifiche non salvate!", leave: "Partire comunque?", leaveWithoutSave: "Chiudi senza salvare", leaveAndSave: "Salvataggio e chiusura", publishComment: "Pubblica commento", preview: "Qui vedrai l'anteprima", write: "Scrivere qui" }
        , M0 = { "default-successfully-changed": "Modello predefinito modificato correttamente.", templates: "Modelli", newTemplate: "Nuovo modello", "info-text": `Qui puoi visualizzare tutti i modelli disponibili e impostare il modello predefinito per i tuoi studenti. 
C'\xe8 anche la possibilit\xe0 di impostare un modello predefinito per studenti specifici aggiungendoli in fondo a un modello in modalit\xe0 lettura o accedendo al loro profilo e modificandolo. 
Facendo clic su un cerchio vuoto, \xe8 possibile impostare un modello come modello predefinito. 
Ti verr\xe0 poi chiesto se vuoi impostarlo per tutti i tuoi studenti o solo per quelli che non hanno un template specifico.`, default: "Predefinito", "reset-default": "Ripristina impostazione predefinita", "selected-as-default": "Vuoi impostare il modello selezionato come predefinito?", "update-default": "Aggiorna predefinito", "update-default-all": "Aggiorna l'impostazione predefinita per tutti", "error-no-default": `Il modello predefinito \xe8 il modello predefinito globale. 
Non c'\xe8 niente da resettare.`, "default-successfully-reset": "Modello predefinito reimpostato correttamente.", "default-all-or-specific": "Puoi impostare questo modello come standard per tutti i tuoi strumenti o solo per coloro a cui non \xe8 assegnato un modello specifico.", "not-found": "Modello non trovato!", "user-added": "Utente aggiunto", "user-removed": "Utente rimosso", edit: "Modifica modello", "really-delete": "Sei sicuro di voler eliminare questo modello?", delete: "Elimina modello", "set-this-as-default": "Vuoi impostare questo modello come predefinito?", "set-as-default": "Imposta come predefinito...", "default-reset": "Vuoi ripristinare il modello predefinito?", reset: "Ripristina...", "will-reset-global": "Il modello predefinito verr\xe0 reimpostato sul modello predefinito globale.", "template-users": "Utenti che utilizzano questo modello:", remove: "Rimuovere...", "add-user": "Aggiungi utente:", created: "Modello creato.", "template-updated": "Modello aggiornato.", defaultTemplate: "Modello predefinito:", templateDeleteQuestion: "Sei sicuro di voler eliminare questo modello?", "no-users-added": "Nessun utente aggiunto!" }
        , L0 = { name: "Notifiche", none: "Nessuna notifica", articleApproved: { title: "Articolo approvato", text: "{doer} ha approvato il tuo articolo." }, articleCreated: { title: "Articolo creato", text: "{doer} ha creato un nuovo articolo." }, articleNotSubmitted: { title: "Articolo non inviato", text: "{doer} non ha ancora inviato il suo articolo." }, articleRejected: { title: "Articolo respinto", text: "{doer} ha rifiutato il tuo articolo." }, articleSubmitted: { title: "Articolo presentato", text: "{doer} ha inviato un articolo." }, commentCreated: { title: "Nuovo commento", text: "{doer} ha lasciato un commento per te." }, userRelationUpdated: { title: "Nuovo {role}", text: "{assignee} \xe8 ora il tuo nuovo {role}." } }
        , D0 = { info: "Il Lernjournal sar\xe0 <b>temporaneament e non disponibile</b> a causa di manutenzione." }
        , x0 = { name: "Domande Frequenti", everyone: "Tutti", all: [{ question: "Cosa significano i colori nella panoramica della completezza?", answer: "Verde - consegnato in tempo, Arancione - consegnato in ritardo/In lavorazione, e Rosso - non fatto" }, { question: "Dove posso segnalare bug e dare feedback?", answer: "Se clicchi sull'icona del megafono in basso a destra, vedrai tre opzioni: l'opzione FAQ, che porta a questa pagina; la pagina di feedback, che ti reindirizza a un MS-Forms; e l'opzione segnala un bug, che ti permette di inviare un'email al team del diario di apprendimento." }, { question: "Chi pu\xf2 vedere i miei articoli/diari di apprendimento pubblici e privati?", answer: "Tutti gli utenti dell'applicazione possono vedere i diari di apprendimento/articoli pubblici. Solo tu, cos\xec come tutti i lavoratori sociali e i formatori, puoi vedere i tuoi articoli privati." }, { question: "Chi pu\xf2 commentare su un diario di apprendimento consegnato?", answer: "Il proprietario e tutti i formatori cos\xec come i lavoratori sociali possono commentare su un diario di apprendimento consegnato." }, { question: "Quando \xe8 la data di consegna di un diario di apprendimento?", answer: "Puoi consegnare un diario di apprendimento nella settimana del calendario selezionata entro la mezzanotte di domenica per essere considerato in tempo. Se lo consegni dopo questo momento, sar\xe0 segnato come in ritardo." }], instructor: [{ question: "Perch\xe9 non vedo i miei apprendisti?", answer: "Per vedere i tuoi apprendisti, devi assegnarti alla persona rispettiva. Puoi farlo andando al profilo utente dell'apprendista rispettivo, cliccando sull'icona della matita accanto al nome e poi impostandoti come supervisore." }, { question: "Come assegno il modello ai miei apprendisti?", answer: "Vai al modello desiderato che vuoi assegnare agli apprendisti e clicca su 'Imposta come predefinito', oppure puoi cliccare sul punto in alto a destra della scheda nella vista scheda." }, { question: "Qual \xe8 la differenza tra 'Aggiorna predefinito per tutti' e 'Aggiorna predefinito' nei modelli?", answer: "'Aggiorna predefinito per tutti' imposta il modello selezionato per tutti i tuoi apprendisti. 'Aggiorna predefinito', invece, aggiorna il modello solo per quelli dei tuoi apprendisti che non hanno ancora un modello predefinito." }, { question: "Come posso registrare le assenze dei miei apprendisti?", answer: "Cliccando sull'icona dell'orologio nel profilo utente accanto al nome e poi selezionando la settimana del calendario e salvandola." }], socialWorker: [{ question: "Perch\xe9 non vedo i miei apprendisti?", answer: "Per vedere i tuoi apprendisti, devi assegnarti alla persona rispettiva. Puoi farlo andando al profilo utente dell'apprendista rispettivo, cliccando sull'icona della matita accanto al nome e poi impostandoti come supervisore." }], apprentice: [{ question: "Come si scrive un diario di apprendimento?", answer: "Un diario di apprendimento viene scritto utilizzando HTML o Markdown." }, { question: "Perch\xe9 si pu\xf2 creare un diario di apprendimento senza una settimana del calendario?", answer: "Quando crei un diario di apprendimento senza una settimana del calendario, si chiama articolo. In questo articolo, puoi scrivere, ad esempio, un blog o una voce di conoscenza, ecc." }, { question: "Perch\xe9 non posso stilizzare l'HTML nel mio articolo/diario di apprendimento?", answer: "La stilizzazione \xe8 stata vietata per il diario di apprendimento in modo che la pagina non possa essere manipolata e venduta come un'altra pagina." }] }
        , U0 = { global: A0, login: b0, navbar: I0, home: w0, article: S0, persons: k0, footer: R0, about: O0, components: N0, articleEdit: P0, template: M0, notification: L0, maintenance: D0, faq: x0 }
        , Xm = ["en", "de", "fr", "it"];
    
    function F0() { return window.navigator.language.split("-")[0] }
    const jo = { time: { hour: "2-digit", minute: "2-digit" }, date: { year: "numeric", month: "long", day: "numeric" }, short: { year: "numeric", month: "short", day: "numeric" }, long: { year: "numeric", month: "short", day: "numeric", weekday: "short", hour: "numeric", minute: "numeric" } }
        , H0 = { en: jo, fr: jo, de: jo, it: jo }
        , bh = F0()
        , Pe = vS({ locale: Xm.includes(bh) ? bh : "en", fallbackLocale: "en", messages: { en: GS, de: E0, fr: a0, it: U0 }, datetimeFormats: H0, fallbackFormat: jo });
    Xm.includes(Pe.global.locale) || (Pe.global.locale = Pe.global.fallbackLocale);
    const B0 = ar.PROTOCOL + "://" + ar.BASE_URL + "/api/"
        , Zn = bm({ position: "top-right" })
        , Xr = et.create();
    Xr.interceptors.request.use(async t => {
        const e = { account: Ct.msalUser(), scopes: Xs.apiTokenRequest.scopes }
            , n = await Ct.token(e);
        return console.debug("lejApi interceptor - acquired token", n), n && (t.headers.Authorization = `Bearer ${n.accessToken}`, console.debug("lejApi interceptor - set headers", t.headers)), t
    }, t => { console.error("lepApi interceptor - error:", t) });
    Wt = {
        get: async (t, e, n = !0) => await Xr.get(Ho(t, e), { params: typeof e == "object" ? e : void 0 })
            .catch(r => {
                if (n) Hn(r);
                else throw r
            })
        , post: async (t, e, n = !0) => await Xr.post(Ho(t), e)
            .catch(r => {
                if (n) Hn(r);
                else throw r
            })
        , put: async (t, e, n, r = !0) => await Xr.put(Ho(t, e), n)
            .catch(o => {
                if (r) Hn(o);
                else throw o
            })
        , patch: async (t, e, n, r = !0) => await Xr.patch(Ho(t, e), n)
            .catch(o => {
                if (r) Hn(o);
                else throw o
            })
        , delete: async (t, e, n = !0) => await Xr.delete(Ho(t, e))
            .catch(r => {
                if (n) Hn(r);
                else throw r
            })
    };
    Hn = function (t) {
        if (t.response?.status) {
            const e = t.response.status;
            e === 400 ? Zn.error(Pe.global.t("global.messages.error.invalid")) : e === 403 ? Zn.error(Pe.global.t("global.messages.error.denied")) : e === 404 ? Zn.error(Pe.global.t("global.notFound")) : e === 422 ? Zn.error(Pe.global.t("global.messages.error.validation") + t.response.data.message) : e === 504 ? Zn.error(Pe.global.t("global.messages.error.tooLong")) : Zn.error(Pe.global.t("global.messages.error.wrong"))
        } else t.response ? Zn.error(Pe.global.t("global.messages.error.wrong")) : Zn.error(Pe.global.t("global.messages.error.network"))
    };
    
    function Ho(t, e) { return typeof e == "object" ? e = "" : e = e ? "/" + e : "", B0 + t + e }
    const $0 = { props: { iconName: { type: String, default: "box" }, width: { type: [Number, String], default: 18 }, height: { type: [Number, String], default: 18 }, viewBox: { type: String, default: "0 0 24 24" }, iconColor: { type: String, default: "currentColor" }, colorProperty: { type: String, default: "stroke" } }, computed: { colors() { const t = { fill: "none", stroke: "none" }; return t[this.colorProperty] = this.iconColor, t } } }
        , K0 = ["width", "height", "viewBox"]
        , j0 = ["fill", "stroke"];
    
    function q0(t, e, n, r, o, i) { return Z(), we("svg", { xmlns: "http://www.w3.org/2000/svg", width: n.width, height: n.height, viewBox: n.viewBox, role: "presentation" }, [Q("g", { fill: i.colors.fill, stroke: i.colors.stroke }, [an(t.$slots, "default", {}, void 0, !0)], 8, j0)], 8, K0) }
    let V0;
    Rn = Me($0, [["render", q0], ["__scopeId", "data-v-bf41d07c"]]);
    V0 = { components: { LejIcon: Rn } };
    
    function G0(t, e, n, r, o, i) { const s = fe("LejIcon"); return Z(), $e(s, null, { default: Ae(() => e[0] || (e[0] = [Q("path", { d: "M9.00195 17H5.60636C4.34793 17 3.71872 17 3.58633 16.9023C3.4376 16.7925 3.40126 16.7277 3.38515 16.5436C3.37082 16.3797 3.75646 15.7486 4.52776 14.4866C5.32411 13.1835 6.00031 11.2862 6.00031 8.6C6.00031 7.11479 6.63245 5.69041 7.75766 4.6402C8.88288 3.59 10.409 3 12.0003 3C13.5916 3 15.1177 3.59 16.2429 4.6402C17.3682 5.69041 18.0003 7.11479 18.0003 8.6C18.0003 11.2862 18.6765 13.1835 19.4729 14.4866C20.2441 15.7486 20.6298 16.3797 20.6155 16.5436C20.5994 16.7277 20.563 16.7925 20.4143 16.9023C20.2819 17 19.6527 17 18.3943 17H15.0003M9.00195 17L9.00031 18C9.00031 19.6569 10.3435 21 12.0003 21C13.6572 21 15.0003 19.6569 15.0003 18V17M9.00195 17H15.0003", stroke: "#000000", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, null, -1)])), _: 1 }) }
    const W0 = Me(V0, [["render", G0]])
        , z0 = {
            props: { date: { type: String, required: !0 }, showTime: { type: Boolean, default: !1 }, wordApproximation: { type: Boolean, default: !1 }, showTooltip: { type: Boolean, default: !1 } }
            , computed: {
                localDateObj() { const t = this.parseDate(this.date); return t ? new Date(t.getTime()) : null }
                , tooltipDate() { return this.showTime ? this.localDateObj : this.localDateObj }
                , formattedDate() {
                    if (this.showTime, this.wordApproximation) {
                        let t = "";
                        const n = new Date - this.localDateObj
                            , r = Math.floor(n / 1e3)
                            , o = Math.floor(r / 60)
                            , i = Math.floor(o / 60)
                            , s = Math.floor(i / 24)
                            , a = Math.floor(s / 7)
                            , c = Math.floor(a / 4.3);
                        if (s === 0)
                            if (r < 60) t = this.$i18n.t("global.dateFormat.justNow");
                            else if (o < 60) {
                            const l = Math.floor(n / 6e4);
                            t = this.$i18n.tc("global.dateFormat.minute", l)
                        } else {
                            const l = Math.floor(n / 36e5);
                            t = this.$i18n.tc("global.dateFormat.hour", l)
                        } else if (s === 1) t = this.$i18n.t("global.dateFormat.before") + " " + this.$i18n.d(this.localDateObj.toISOString(), "time");
                        else if (s >= 2 && s < 7) {
                            const l = this.localDateObj.getDay()
                                , h = this.$i18n.t(`global.dateFormat.daysOfWeek.${l}`);
                            t = `${this.$i18n.t("global.dateFormat.on")} ${h}`
                        } else a >= 1 && a <= 4 ? t = this.$i18n.tc("global.dateFormat.week", a) : c >= 1 && c < 12 ? t = this.$i18n.tc("global.dateFormat.month", c) : c === 12 ? t = this.$i18n.tc("global.dateFormat.year", 1) : t = `${this.$i18n.t("global.dateFormat.on")} ${this.$i18n.d(this.localDateObj?.toISOString(),"short")}`;
                        return t
                    } else return console.log("******localDateObj******", this.localDateObj), this.localDateObj == null || this.localDateObj == null ? "" : this.$i18n.d(this.localDateObj.toISOString(), "date")
                }
            }
            , methods: {
                parseDate(t) {
                    if (!t) return null;
                    let e = new Date(t);
                    if (!isNaN(e)) return e;
                    const n = /(\d{2})-(\d{2})-(\d{4}) (\d{2}):(\d{2}):(\d{2})/
                        , r = t.match(n);
                    if (r) { const [, o, i, s, a, c, l] = r; if (e = new Date(`${s}-${i}-${o}T${a}:${c}:${l}`), !isNaN(e)) return e }
                    return null
                }
            }
        }
        , Y0 = ["title"];
    
    function Q0(t, e, n, r, o, i) { return Z(), we("span", { title: i.tooltipDate }, Ie(i.formattedDate), 9, Y0) }
    let X0, Z0;
    J0 = Me(z0, [["render", Q0]]);
    X0 = { props: { status: { type: String, default: "" }, colour: String }, computed: { statusColour() { return this.colour ? `background-color: var(--${this.colour?this.colour:"c-bg-mute"})` : `background-color: var(--${this.status?this.status:"c-bg-mute"})` } } };
    Z0 = ["title"];
    
    function ek(t, e, n, r, o, i) { return Z(), we("div", { class: "status", style: Sn(i.statusColour), title: this.status }, null, 12, Z0) } tk = Me(X0, [["render", ek]]);
    cr = So({ notifications: [] });
    nk = function (t) { cr.notifications = t };
    Zm = function (t) {
        const e = cr.notifications.findIndex(n => n._id === t._id);
        e !== -1 && cr.notifications.splice(e, 1, t)
    };
    
    function rk() { return cr.notifications.some(t => !t.readAt) } async function ok(t) {
        const e = {}
            , n = (await Wt.get(`users/${t.triggeredBy}`))
            .data;
        if (e.doer = `${n.firstName} ${n.lastName}`, t.type === "userRelationUpdated")
            if (Ct.localUser()
                .roles.includes("Lej.Apprentice")) {
                const r = (await Wt.get(`users/${t.context.superiorId}`))
                    .data;
                e.role = t.context.superiorRole, e.assignee = `${r.firstName} ${r.lastName}`
            } else {
                const r = (await Wt.get(`users/${t.context.subordinateId}`))
                    .data;
                e.role = "apprentice", e.assignee = `${r.firstName} ${r.lastName}`
            } return e
    }
    const ik = { emits: ["clickedOutside"], components: {}, props: { show: { type: Boolean, required: !0 } }, methods: { closeContainerOnClickOutside(t) { this.$emit("clickedOutside") } }, watch: { show: { handler(t, e) { t === !0 ? setTimeout(() => document.addEventListener("click", this.closeContainerOnClickOutside)) : document.removeEventListener("click", this.closeContainerOnClickOutside) }, immediate: !0 } } }
        , sk = { class: "floating-container" };
    
    function ak(t, e, n, r, o, i) { return Z(), $e(el, null, { default: Ae(() => [Ef(Q("div", sk, [an(t.$slots, "default", {}, void 0, !0)], 512), [[fp, n.show]])]), _: 3 }) }
    let ck, lk;
    eu = Me(ik, [["render", ak], ["__scopeId", "data-v-bbb3c3b4"]]);
    ck = { props: { externalLink: String, routerLinkTo: Object, interactive: { type: Boolean, default: !0 } } };
    lk = ["href"];
    
    function uk(t, e, n, r, o, i) { const s = fe("RouterLink"); return n.externalLink ? (Z(), we("a", { key: 0, class: sn(["floating-container-item", { interactive: n.interactive }]), href: n.externalLink, target: "_blank" }, [an(t.$slots, "default", {}, void 0, !0)], 10, lk)) : n.routerLinkTo ? (Z(), $e(s, { key: 1, class: sn(["floating-container-item", { interactive: n.interactive }]), to: n.routerLinkTo }, { default: Ae(() => [an(t.$slots, "default", {}, void 0, !0)]), _: 3 }, 8, ["class", "to"])) : (Z(), we("div", { key: 2, class: sn(["floating-container-item", { interactive: n.interactive }]) }, [an(t.$slots, "default", {}, void 0, !0)], 2)) }
    let dk;
    tu = Me(ck, [["render", uk], ["__scopeId", "data-v-58e40d93"]]);
    dk = {
        props: { user: Object, userId: String, size: { type: String, default: "40px" }, look: { type: String, default: "square" } }
        , data() { return { loadedUser: null, errored: !1, loading: !1 } }
        , computed: {
            userObject() { let t = null; return this.user?.firstName ? t = this.user : this.userId && (!this.loadedUser && !this.loading && !this.errored && this.loadUser(), t = this.loadedUser), t }
            , fullName() { return this.userNotFound ? "Unbekannt" : this.userObject ? this.userObject.firstName + " " + this.userObject.lastName : null }
            , initials() {
                return this.userNotFound ? "?" : this.fullName ? this.fullName.split(" ")
                    .map(e => e[0])
                    .join("")
                    .substring(0, 2) : ""
            }
            , gradient() {
                if (this.initials == "") return null;
                const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
                    , e = this.initials.split("")
                    , n = t.indexOf(e[0])
                    , r = t.indexOf(e[1])
                    , o = Math.round(360 / 26 * n)
                    , i = Math.round(360 / 26 * r)
                    , s = `hsl(${o}, 75%, 60%)`
                    , a = `hsl(${i}, 75%, 60%)`;
                return `--color1: ${s}; --color2: ${a};`
            }
            , avatarStyle() { return "--avatar-size: " + this.size + ";--avatar-border-radius: " + (this.look == "round" ? "var(--avatar-size)" : "var(--corner-s)") + ";" }
            , fontSize() { return `--initials-font-size: calc(${this.size=="100%"?"80px":this.size} / 2)` }
            , avatarBackground() { let t = ""; return this.loading ? t = "background: gray;" : this.userObject?.photo ? t = `background-image: url("data:image/jpg;base64,${this.userObject.photo}"); background-size: cover;` : t = this.gradient, t }
            , userNotFound() { return !this.userObject }
        }
        , methods: {
            async loadUser() {
                this.loading = !0, await Wt.get("users", this.userId, !1)
                    .then(t => { this.loadedUser = t.data })
                    .catch(t => { console.error(t), this.errored = !0, t.response?.status != 404 && Hn(t) })
                    .then(() => { this.loading = !1 })
            }
        }
    };
    
    function hk(t, e, n, r, o, i) { return Z(), we("div", { class: "avatar-image", style: Sn(i.avatarStyle + i.avatarBackground) }, [i.userObject?.photo ? Zt("", !0) : (Z(), we("p", { key: 0, class: "avatar-initials", style: Sn(i.fontSize) }, Ie(i.initials), 5))], 4) }
    let fk, pk, gk, mk;
    ey = Me(dk, [["render", hk], ["__scopeId", "data-v-4625dba1"]]);
    fk = {
        components: { IconBell: W0, DateFormat: J0, StatusIndicator: tk, Avatar: ey, FloatingContainer: eu, FloatingContainerItem: tu }
        , setup() {
            return (async () => {
                try {
                    const { data: e } = await Wt.get("notifications");
                    nk(e.sort((n, r) => new Date(r.createdAt) - new Date(n.createdAt)))
                } catch (e) { console.error(e) }
                for (let e = 0; e < cr.notifications.length; e++) cr.notifications[e].i18n = await ok(cr.notifications[e])
            })(), { notificationState: cr, isOneNotRead: rk }
        }
        , data() { return { showPopover: !1 } }
        , methods: {
            markAsRead(t, e = new Date) {
                Wt.patch("notifications", t._id, { readAt: e })
                    .then(n => { Zm(n.data) })
                    .catch(n => { console.error(n), this.$toast.error(this.$i18n.t("global.messages.error.network")) })
            }
        }
        , computed: { ...Ct }
    };
    pk = { class: "notification-main-container" };
    gk = { class: "notification-header" };
    mk = { class: "notification-main-content" };
    
    function yk(t, e, n, r, o, i) {
        const s = fe("IconBell")
            , a = fe("StatusIndicator")
            , c = fe("Avatar")
            , l = fe("DateFormat")
            , h = fe("FloatingContainerItem")
            , f = fe("FloatingContainer");
        return Z(), we("div", null, [Q("div", { onClick: e[0] || (e[0] = ho(g => o.showPopover = !o.showPopover, ["stop"])), class: "wrapper" }, [ue(s, { class: "icon-bell", style: { cursor: "pointer" } }), r.isOneNotRead() ? (Z(), $e(a, { key: 0, class: "read-indicator", status: "c-brand" })) : Zt("", !0)]), ue(f, { show: o.showPopover, onClickedOutside: e[1] || (e[1] = g => o.showPopover = !1), class: "popover" }, { default: Ae(() => [r.notificationState.notifications.length > 0 ? (Z(!0), we(ze, { key: 0 }, Wc(r.notificationState.notifications.slice(0, 5), g => (Z(), we(ze, null, [ue(h, { routerLinkTo: { name: "Notification", params: { id: g._id } }, class: "notification" }, { default: Ae(() => [Q("div", null, [ue(c, { "user-id": g.triggeredBy, "show-name": !1, size: "2rem", look: "round" }, null, 8, ["user-id"])]), Q("div", pk, [Q("div", gk, [dt(Ie(t.$t(`notification.${g?.type}.title`, g.i18n)) + " ", 1), ue(a, { onClick: ho(T => i.markAsRead(g, g.readAt ? null : new Date), ["stop"]), colour: g.readAt ? "c-bg-mute" : "c-brand" }, null, 8, ["onClick", "colour"])]), Q("div", mk, Ie(t.$t(`notification.${g?.type}.text`, g.i18n)), 1), ue(l, { class: "date", date: g.createdAt, "show-time": !1, "word-approximation": !0 }, null, 8, ["date"])])]), _: 2 }, 1032, ["routerLinkTo"]), e[2] || (e[2] = Q("hr", null, null, -1))], 64))), 256)) : (Z(), we(ze, { key: 1 }, [ue(h, { interactive: !1 }, { default: Ae(() => [dt(Ie(t.$t("notification.none")), 1)]), _: 1 }), e[3] || (e[3] = Q("hr", null, null, -1))], 64)), ue(h, { routerLinkTo: { name: "Notifications" }, class: "all-notifications" }, { default: Ae(() => [dt(Ie(t.$t("navbar.allNotifications")), 1)]), _: 1 })]), _: 1 }, 8, ["show"])])
    }
    const Ck = Me(fk, [["render", yk], ["__scopeId", "data-v-d499ac8a"]])
        , _k = { components: { LejIcon: Rn } };
    
    function Tk(t, e, n, r, o, i) { const s = fe("LejIcon"); return Z(), $e(s, { colorProperty: "fill" }, { default: Ae(() => e[0] || (e[0] = [Q("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2 6.5C2 4.01472 4.01472 2 6.5 2H12C14.2091 2 16 3.79086 16 6V7C16 7.55228 15.5523 8 15 8C14.4477 8 14 7.55228 14 7V6C14 4.89543 13.1046 4 12 4H6.5C5.11929 4 4 5.11929 4 6.5V17.5C4 18.8807 5.11929 20 6.5 20H12C13.1046 20 14 19.1046 14 18V17C14 16.4477 14.4477 16 15 16C15.5523 16 16 16.4477 16 17V18C16 20.2091 14.2091 22 12 22H6.5C4.01472 22 2 19.9853 2 17.5V6.5ZM18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071C17.9024 15.3166 17.9024 14.6834 18.2929 14.2929L19.5858 13L11 13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11L19.5858 11L18.2929 9.70711C17.9024 9.31658 17.9024 8.68342 18.2929 8.29289Z", fill: "#0F1729" }, null, -1)])), _: 1 }) }
    const vk = Me(_k, [["render", Tk]])
        , Ek = { components: { LejIcon: Rn } };
    
    function Ak(t, e, n, r, o, i) { const s = fe("LejIcon"); return Z(), $e(s, null, { default: Ae(() => e[0] || (e[0] = [Q("path", { d: "M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z", stroke: "#000000", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, null, -1), Q("path", { d: "M12.9046 3.06005C12.6988 3 12.4659 3 12 3C11.5341 3 11.3012 3 11.0954 3.06005C10.7942 3.14794 10.5281 3.32808 10.3346 3.57511C10.2024 3.74388 10.1159 3.96016 9.94291 4.39272C9.69419 5.01452 9.00393 5.33471 8.36857 5.123L7.79779 4.93281C7.3929 4.79785 7.19045 4.73036 6.99196 4.7188C6.70039 4.70181 6.4102 4.77032 6.15701 4.9159C5.98465 5.01501 5.83376 5.16591 5.53197 5.4677C5.21122 5.78845 5.05084 5.94882 4.94896 6.13189C4.79927 6.40084 4.73595 6.70934 4.76759 7.01551C4.78912 7.2239 4.87335 7.43449 5.04182 7.85566C5.30565 8.51523 5.05184 9.26878 4.44272 9.63433L4.16521 9.80087C3.74031 10.0558 3.52786 10.1833 3.37354 10.3588C3.23698 10.5141 3.13401 10.696 3.07109 10.893C3 11.1156 3 11.3658 3 11.8663C3 12.4589 3 12.7551 3.09462 13.0088C3.17823 13.2329 3.31422 13.4337 3.49124 13.5946C3.69158 13.7766 3.96395 13.8856 4.50866 14.1035C5.06534 14.3261 5.35196 14.9441 5.16236 15.5129L4.94721 16.1584C4.79819 16.6054 4.72367 16.829 4.7169 17.0486C4.70875 17.3127 4.77049 17.5742 4.89587 17.8067C5.00015 18.0002 5.16678 18.1668 5.5 18.5C5.83323 18.8332 5.99985 18.9998 6.19325 19.1041C6.4258 19.2295 6.68733 19.2913 6.9514 19.2831C7.17102 19.2763 7.39456 19.2018 7.84164 19.0528L8.36862 18.8771C9.00393 18.6654 9.6942 18.9855 9.94291 19.6073C10.1159 20.0398 10.2024 20.2561 10.3346 20.4249C10.5281 20.6719 10.7942 20.8521 11.0954 20.94C11.3012 21 11.5341 21 12 21C12.4659 21 12.6988 21 12.9046 20.94C13.2058 20.8521 13.4719 20.6719 13.6654 20.4249C13.7976 20.2561 13.8841 20.0398 14.0571 19.6073C14.3058 18.9855 14.9961 18.6654 15.6313 18.8773L16.1579 19.0529C16.605 19.2019 16.8286 19.2764 17.0482 19.2832C17.3123 19.2913 17.5738 19.2296 17.8063 19.1042C17.9997 18.9999 18.1664 18.8333 18.4996 18.5001C18.8328 18.1669 18.9994 18.0002 19.1037 17.8068C19.2291 17.5743 19.2908 17.3127 19.2827 17.0487C19.2759 16.8291 19.2014 16.6055 19.0524 16.1584L18.8374 15.5134C18.6477 14.9444 18.9344 14.3262 19.4913 14.1035C20.036 13.8856 20.3084 13.7766 20.5088 13.5946C20.6858 13.4337 20.8218 13.2329 20.9054 13.0088C21 12.7551 21 12.4589 21 11.8663C21 11.3658 21 11.1156 20.9289 10.893C20.866 10.696 20.763 10.5141 20.6265 10.3588C20.4721 10.1833 20.2597 10.0558 19.8348 9.80087L19.5569 9.63416C18.9478 9.26867 18.6939 8.51514 18.9578 7.85558C19.1262 7.43443 19.2105 7.22383 19.232 7.01543C19.2636 6.70926 19.2003 6.40077 19.0506 6.13181C18.9487 5.94875 18.7884 5.78837 18.4676 5.46762C18.1658 5.16584 18.0149 5.01494 17.8426 4.91583C17.5894 4.77024 17.2992 4.70174 17.0076 4.71872C16.8091 4.73029 16.6067 4.79777 16.2018 4.93273L15.6314 5.12287C14.9961 5.33464 14.3058 5.0145 14.0571 4.39272C13.8841 3.96016 13.7976 3.74388 13.6654 3.57511C13.4719 3.32808 13.2058 3.14794 12.9046 3.06005Z", stroke: "#000000", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, null, -1)])), _: 1 }) }
    const bk = Me(Ek, [["render", Ak]])
        , Ik = { components: { LejIcon: Rn } };
    
    function wk(t, e, n, r, o, i) { const s = fe("LejIcon"); return Z(), $e(s, { colorProperty: "stroke" }, { default: Ae(() => e[0] || (e[0] = [Q("path", { d: "M7.2 21C6.07989 21 5.51984 21 5.09202 20.782C4.71569 20.5903 4.40973 20.2843 4.21799 19.908C4 19.4802 4 18.9201 4 17.8V6.2C4 5.07989 4 4.51984 4.21799 4.09202C4.40973 3.71569 4.71569 3.40973 5.09202 3.21799C5.51984 3 6.0799 3 7.2 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V7M8 7H14M8 15H9M8 11H12M11.1954 20.8945L12.5102 20.6347C13.2197 20.4945 13.5744 20.4244 13.9052 20.2952C14.1988 20.1806 14.4778 20.0317 14.7365 19.8516C15.0279 19.6486 15.2836 19.393 15.7949 18.8816L20.9434 13.7332C21.6306 13.0459 21.6306 11.9316 20.9434 11.2444C20.2561 10.5571 19.1418 10.5571 18.4546 11.2444L13.2182 16.4808C12.739 16.96 12.4994 17.1996 12.3059 17.4712C12.1341 17.7123 11.9896 17.9717 11.8751 18.2447C11.7461 18.5522 11.6686 18.882 11.5135 19.5417L11.1954 20.8945Z", stroke: "#000000", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, null, -1)])), _: 1 }) }
    const ty = Me(Ik, [["render", wk]])
        , Sk = { props: { look: { type: String, default: "small" }, colorProperty: { type: String, default: "stroke" }, color: { type: String, default: "var(--c-bg-highlight)" }, lejIcon: { type: Object }, isDisabled: { type: Boolean, default: !1 } }, computed: { colors() { let t, e, n, r; return this.colorProperty == "stroke" ? (t = this.color, e = "var(--c-brand-bold)", n = "none", r = "none") : this.colorProperty == "fill" && (t = "none", e = "none", n = this.color, r = "var(--c-brand-bold)"), `
            --stroke-color: ${t};
            --stroke-color-hover: ${e};
            --fill-color: ${n};
            --fill-color-hover: ${r};` } } }
        , kk = { class: "icon-wrapper" };
    
    function Rk(t, e, n, r, o, i) { return Z(), we("div", { class: sn(["icon-button", [n.look, { disabled: n.isDisabled }]]), style: Sn(i.colors) }, [Q("div", kk, [an(t.$slots, "default", {}, void 0, !0)])], 6) }
    let Ok, Nk, Pk, Mk;
    ny = Me(Sk, [["render", Rk], ["__scopeId", "data-v-4283ce33"]]);
    Ok = { components: { NavLink: WA, Avatar: ey, IconLogout: vk, IconSettings: bk, IconFeedback: ty, IconButton: ny, NotificationPopover: Ck, FloatingContainer: eu, FloatingContainerItem: tu }, data() { return { showUserMenu: !1 } }, computed: { ...Ct }, methods: { navigateToHomePage() { this.$router.push("/") } } };
    Nk = { class: "header-content-wrapper" };
    Pk = { class: "header-controls" };
    Mk = { style: { "font-weight": "600" } };
    
    function Lk(t, e, n, r, o, i) {
        const s = fe("NavLink")
            , a = fe("NotificationPopover")
            , c = fe("Avatar")
            , l = fe("FloatingContainerItem")
            , h = fe("IconLogout")
            , f = fe("FloatingContainer");
        return Z(), we("header", null, [Q("div", Nk, [Q("div", { id: "brand-logo", onClick: e[0] || (e[0] = (...g) => i.navigateToHomePage && i.navigateToHomePage(...g)) }), Q("div", Pk, [ue(s, { page: "Home" }, { default: Ae(() => [dt(Ie(t.$t("navbar.home")), 1)]), _: 1 }), ue(s, { page: "allArticles", path: "articles" }, { default: Ae(() => [dt(Ie(t.$t("navbar.article")), 1)]), _: 1 }), ue(s, { page: "Users", path: "users" }, { default: Ae(() => [dt(Ie(t.$t("navbar.people")), 1)]), _: 1 }), this.localUser.roles?.includes("Lej.Instructor") || this.localUser.roles?.includes("Lej.SocialWorker") ? (Z(), $e(s, { key: 0, page: "templates" }, { default: Ae(() => [dt(Ie(t.$t("navbar.templates")), 1)]), _: 1 })) : Zt("", !0), e[5] || (e[5] = Q("div", { class: "flex-spacer" }, null, -1)), t.isAuthenticated ? (Z(), we(ze, { key: 1 }, [ue(a), ue(c, { user: t.localUser, onClick: e[1] || (e[1] = g => o.showUserMenu = !o.showUserMenu), style: { cursor: "pointer" } }, null, 8, ["user"]), ue(f, { show: o.showUserMenu, class: "user-menu", onClickedOutside: e[3] || (e[3] = g => o.showUserMenu = !1) }, { default: Ae(() => [ue(l, { routerLinkTo: { name: "user", params: { id: t.localUser._id || "no_user_id" } } }, { default: Ae(() => [Q("div", null, [Q("div", Mk, Ie(t.msalUser.name), 1), dt(" " + Ie(t.msalUser.username), 1)])]), _: 1 }, 8, ["routerLinkTo"]), e[4] || (e[4] = Q("hr", null, null, -1)), ue(l, { onClick: e[2] || (e[2] = g => t.$auth.signOut()) }, { default: Ae(() => [ue(h, { class: "logout-icon" }), dt(" " + Ie(t.$t("navbar.signout")), 1)]), _: 1 })]), _: 1 }, 8, ["show"])], 64)) : Zt("", !0)])])])
    }
    const Dk = Me(Ok, [["render", Lk], ["__scopeId", "data-v-37f09d23"]])
        , xk = {
            data() { return { maintenanceStart: Date, maintenanceEnd: Date, maintenance: !1 } }
            , created() { this.fetchMaintenanceStatus() }
            , methods: {
                async fetchMaintenanceStatus() {
                    const t = { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" };
                    try {
                        const n = (await Wt.get("maintenance/status", this.userId))
                            .data[0];
                        if (n) {
                            this.maintenanceStart = new Date(n?.maintenanceStart)
                                .toLocaleString("de-CH", t), this.maintenanceEnd = new Date(n?.maintenanceEnd)
                                .toLocaleString("de-CH", t);
                            const r = new Date(n?.maintenanceStart)
                                .getTime()
                                , o = new Date(n?.maintenanceEnd)
                                .getTime()
                                , i = new Date;
                            this.maintenance = i >= r && i <= o
                        }
                    } catch (e) { console.error("Error fetching maintenance status:", e) }
                }
            }
        }
        , Uk = { key: 0, class: "banner" }
        , Fk = ["innerHTML"];
    
    function Hk(t, e, n, r, o, i) { return o.maintenance ? (Z(), we("div", Uk, [Q("h3", null, [e[0] || (e[0] = dt(" ⚠️ ")), Q("span", { innerHTML: t.$t("maintenance.info") }, null, 8, Fk), dt(" " + Ie(o.maintenanceStart) + " - " + Ie(o.maintenanceEnd) + " ⚠️ ", 1)])])) : Zt("", !0) }
    const Bk = Me(xk, [["render", Hk], ["__scopeId", "data-v-6f16b9f4"]])
        , $k = { props: { isDisabled: { type: Boolean, default: !1 } }, computed: { primary() { return "primary" in this.$attrs && this.$attrs.primary !== !1 } } };
    
    function Kk(t, e, n, r, o, i) { return Z(), we("div", { class: sn(["control button", { primary: i.primary, disabled: n.isDisabled }]) }, [an(t.$slots, "default", {}, void 0, !0)], 2) }
    let nu, jk, qk, Vk, Gk, Wk, zk, Yk;
    ry = Me($k, [["render", Kk], ["__scopeId", "data-v-a2df64ce"]]);
    nu = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:bx='https://boxy-svg.com'%20viewBox='100%2071.08%20240.88%20278.92'%3e%3cdefs%3e%3clinearGradient%20gradientUnits='userSpaceOnUse'%20x1='200'%20y1='100'%20x2='200'%20y2='350'%20id='gradient-0'%20gradientTransform='matrix(-1.042304,%200.558769,%20-0.335454,%20-1.245111,%20582.857365,%20375.956311)'%3e%3cstop%20offset='0'%20style='stop-color:%20rgba(0,%20255,%2025,%201)'%3e%3c/stop%3e%3cstop%20offset='1'%20style='stop-color:%20rgb(5,%20134,%20255);'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3crect%20x='100'%20y='71.105'%20width='240.851'%20height='278.895'%20style='fill:%20url(%23gradient-0);'%20mask='url(%23bookL)'%3e%3c/rect%3e%3cmask%20id='bookL'%3e%3cpath%20style='fill:%20none;%20stroke-linecap:%20round;%20stroke-miterlimit:%206;%20stroke-width:%2035px;%20stroke:%20rgb(255,%20255,%20255);'%20d='M%20117.847%20312.348%20L%20118.18%20122.694'%20transform='matrix(-1,%200,%200,%20-1,%20235.864998,%20430.04599)'%3e%3c/path%3e%3cpath%20style='fill:%20none;%20stroke-linecap:%20round;%20stroke-miterlimit:%206;%20stroke-width:%2035px;%20stroke:%20rgb(255,%20255,%20255);'%20d='M%20282.114%20280.477%20L%20143.688%20280.477%20C%20109.849%20280.215%20108.337%20332.78%20143.688%20332.477%20L%20282.114%20332.477'%3e%3c/path%3e%3cg%20transform='matrix(1.109052,%200.348034,%20-0.366628,%201.168305,%2080.808006,%20-143.217468)'%20style=''%20bx:origin='0.57%200.543'%3e%3cpath%20stroke-width='1'%20d='M%20207.343%20167.216%20C%20211.47%20166.649%20213.333%20172.139%20214.145%20175.185%20C%20216.006%20182.152%20216.02%20191.16%20213.884%20198.069%20C%20213.145%20200.459%20211.592%20204.486%20208.782%20205.112%20C%20207.117%20205.482%20205.821%20204.583%20204.831%20203.386%20C%20203.27%20201.499%20202.461%20198.994%20201.859%20196.683%20C%20200.105%20189.944%20200.191%20181.178%20202.171%20174.491%20C%20202.969%20171.793%20204.315%20168.148%20207.343%20167.216%20Z'%20style='fill:%20rgba(255,%20255,%20255,%200.35);'%3e%3c/path%3e%3cpath%20id='leftWing'%20stroke-width='1'%20d='M%20136.309%20145.249%20C%20149.378%20130.686%20208.621%20157.924%20215.815%20209.319%20C%20219.973%20242.528%20180.009%20255.164%20176.173%20254.779%20C%20146.44%20250.773%20152.374%20210.609%20155.871%20207.315%20C%20163.944%20200.034%20159.627%20203.461%20149.797%20195.757%20C%20141.73%20190.672%20130.915%20150.566%20136.309%20145.249%20Z'%20style='fill:%20rgba(255,%20255,%20255,%200.35);'%3e%3c/path%3e%3cpath%20id='rightWing'%20stroke-width='1'%20d='M%20280.774%20144.094%20C%20267.707%20129.531%20208.463%20156.768%20201.27%20208.164%20C%20197.112%20241.371%20237.076%20254.009%20240.912%20253.623%20C%20270.645%20249.617%20264.71%20209.454%20261.213%20206.159%20C%20253.141%20198.878%20257.456%20202.306%20267.287%20194.601%20C%20275.353%20189.515%20286.17%20149.41%20280.774%20144.094%20Z'%20style='fill:%20rgba(255,%20255,%20255,%200.35);'%3e%3c/path%3e%3c/g%3e%3c/mask%3e%3c/svg%3e";
    jk = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAJ1BMVEVHcEwApPCAugD/uQDyUCIApe9/ugD/uQDyUCIApO//uQB/ugDyUCLrA3kuAAAACXRSTlMA7+/v7+Dg4OAQAwPHAAAARklEQVRIS2M4gwKOMDBo70YBDKMKRhWMKhicClxQgAcDQ5ISCmAYDEAQBYgyMBQbowCGmShgIgOD1SoUMKpgVMGogsGpAABMSqkpcm96jgAAAABJRU5ErkJggg==";
    qk = { components: { LejButton: ry } };
    Vk = { class: "login-wrapper" };
    Gk = { id: "app-title" };
    Wk = { id: "description" };
    zk = { id: "sign-in-text" };
    Yk = { class: "text" };
    
    function Qk(t, e, n, r, o, i) { const s = fe("LejButton"); return Z(), we("div", null, [e[4] || (e[4] = Q("div", { id: "login-bg-helper" }, null, -1)), e[5] || (e[5] = Q("div", { id: "space-helper" }, null, -1)), Q("div", Vk, [e[2] || (e[2] = Q("img", { id: "logo", src: nu }, null, -1)), Q("h1", Gk, Ie(t.$t("global.journal")), 1), Q("p", Wk, Ie(t.$t("login.description")), 1), e[3] || (e[3] = Q("hr", null, null, -1)), Q("p", zk, Ie(t.$t("login.information")), 1), ue(s, { id: "login-button", onClick: e[0] || (e[0] = a => t.$auth.signIn()) }, { default: Ae(() => [e[1] || (e[1] = Q("img", { id: "ms-logo", src: jk }, null, -1)), Q("div", Yk, Ie(t.$t("login.signin")), 1)]), _: 1 })]), e[6] || (e[6] = Q("div", { id: "rafisa-logo" }, null, -1))]) }
    const Jk = Me(qk, [["render", Qk], ["__scopeId", "data-v-24205405"]]);
    const Zr = typeof document < "u";
    
    function oy(t) { return typeof t == "object" || "displayName" in t || "props" in t || "__vccOpts" in t }
    
    function Xk(t) { return t.__esModule || t[Symbol.toStringTag] === "Module" || t.default && oy(t.default) }
    const xe = Object.assign;
    
    function Pa(t, e) {
        const n = {};
        for (const r in e) {
            const o = e[r];
            n[r] = hn(o) ? o.map(t) : t(o)
        }
        return n
    }
    const Xo = () => {}
        , hn = Array.isArray
        , iy = /#/g
        , Zk = /&/g
        , eR = /\//g
        , tR = /=/g
        , nR = /\?/g
        , sy = /\+/g
        , rR = /%5B/g
        , oR = /%5D/g
        , ay = /%5E/g
        , iR = /%60/g
        , cy = /%7B/g
        , sR = /%7C/g
        , ly = /%7D/g
        , aR = /%20/g;
    
    function ru(t) {
        return encodeURI("" + t)
            .replace(sR, "|")
            .replace(rR, "[")
            .replace(oR, "]")
    }
    
    function cR(t) {
        return ru(t)
            .replace(cy, "{")
            .replace(ly, "}")
            .replace(ay, "^")
    }
    
    function wc(t) {
        return ru(t)
            .replace(sy, "%2B")
            .replace(aR, "+")
            .replace(iy, "%23")
            .replace(Zk, "%26")
            .replace(iR, "`")
            .replace(cy, "{")
            .replace(ly, "}")
            .replace(ay, "^")
    }
    
    function lR(t) {
        return wc(t)
            .replace(tR, "%3D")
    }
    
    function uR(t) {
        return ru(t)
            .replace(iy, "%23")
            .replace(nR, "%3F")
    }
    
    function dR(t) {
        return t == null ? "" : uR(t)
            .replace(eR, "%2F")
    }
    
    function hi(t) { try { return decodeURIComponent("" + t) } catch {} return "" + t }
    const hR = /\/$/
        , fR = t => t.replace(hR, "");
    
    function Ma(t, e, n = "/") {
        let r, o = {}
            , i = ""
            , s = "";
        const a = e.indexOf("#");
        let c = e.indexOf("?");
        return a < c && a >= 0 && (c = -1), c > -1 && (r = e.slice(0, c), i = e.slice(c + 1, a > -1 ? a : e.length), o = t(i)), a > -1 && (r = r || e.slice(0, a), s = e.slice(a, e.length)), r = yR(r ?? e, n), { fullPath: r + (i && "?") + i + s, path: r, query: o, hash: hi(s) }
    }
    
    function pR(t, e) { const n = e.query ? t(e.query) : ""; return e.path + (n && "?") + n + (e.hash || "") }
    
    function Ih(t, e) {
        return !e || !t.toLowerCase()
            .startsWith(e.toLowerCase()) ? t : t.slice(e.length) || "/"
    }
    
    function gR(t, e, n) {
        const r = e.matched.length - 1
            , o = n.matched.length - 1;
        return r > -1 && r === o && bo(e.matched[r], n.matched[o]) && uy(e.params, n.params) && t(e.query) === t(n.query) && e.hash === n.hash
    }
    
    function bo(t, e) { return (t.aliasOf || t) === (e.aliasOf || e) }
    
    function uy(t, e) {
        if (Object.keys(t)
            .length !== Object.keys(e)
            .length) return !1;
        for (const n in t)
            if (!mR(t[n], e[n])) return !1;
        return !0
    }
    
    function mR(t, e) { return hn(t) ? wh(t, e) : hn(e) ? wh(e, t) : t === e }
    
    function wh(t, e) { return hn(e) ? t.length === e.length && t.every((n, r) => n === e[r]) : t.length === 1 && t[0] === e }
    
    function yR(t, e) {
        if (t.startsWith("/")) return t;
        if (!t) return e;
        const n = e.split("/")
            , r = t.split("/")
            , o = r[r.length - 1];
        (o === ".." || o === ".") && r.push("");
        let i = n.length - 1
            , s, a;
        for (s = 0; s < r.length; s++)
            if (a = r[s], a !== ".")
                if (a === "..") i > 1 && i--;
                else break;
        return n.slice(0, i)
            .join("/") + "/" + r.slice(s)
            .join("/")
    }
    const er = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 };
    var fi;
    (function (t) { t.pop = "pop", t.push = "push" })(fi || (fi = {}));
    var Zo;
    (function (t) { t.back = "back", t.forward = "forward", t.unknown = "" })(Zo || (Zo = {}));
    
    function CR(t) {
        if (!t)
            if (Zr) {
                const e = document.querySelector("base");
                t = e && e.getAttribute("href") || "/", t = t.replace(/^\w+:\/\/[^\/]+/, "")
            } else t = "/";
        return t[0] !== "/" && t[0] !== "#" && (t = "/" + t), fR(t)
    }
    const _R = /^[^#]+#/;
    
    function TR(t, e) { return t.replace(_R, "#") + e }
    
    function vR(t, e) {
        const n = document.documentElement.getBoundingClientRect()
            , r = t.getBoundingClientRect();
        return { behavior: e.behavior, left: r.left - n.left - (e.left || 0), top: r.top - n.top - (e.top || 0) }
    }
    const ra = () => ({ left: window.scrollX, top: window.scrollY });
    
    function ER(t) {
        let e;
        if ("el" in t) {
            const n = t.el
                , r = typeof n == "string" && n.startsWith("#")
                , o = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
            if (!o) return;
            e = vR(o, t)
        } else e = t;
        "scrollBehavior" in document.documentElement.style ? window.scrollTo(e) : window.scrollTo(e.left != null ? e.left : window.scrollX, e.top != null ? e.top : window.scrollY)
    }
    
    function Sh(t, e) { return (history.state ? history.state.position - e : -1) + t }
    const Sc = new Map;
    
    function AR(t, e) { Sc.set(t, e) }
    
    function bR(t) { const e = Sc.get(t); return Sc.delete(t), e }
    let IR = () => location.protocol + "//" + location.host;
    
    function dy(t, e) {
        const { pathname: n, search: r, hash: o } = e, i = t.indexOf("#");
        if (i > -1) {
            let a = o.includes(t.slice(i)) ? t.slice(i)
                .length : 1
                , c = o.slice(a);
            return c[0] !== "/" && (c = "/" + c), Ih(c, "")
        }
        return Ih(n, t) + r + o
    }
    
    function wR(t, e, n, r) {
        let o = []
            , i = []
            , s = null;
        const a = ({ state: g }) => {
            const T = dy(t, location)
                , A = n.value
                , b = e.value;
            let k = 0;
            if (g) { if (n.value = T, e.value = g, s && s === A) { s = null; return } k = b ? g.position - b.position : 0 } else r(T);
            o.forEach(O => { O(n.value, A, { delta: k, type: fi.pop, direction: k ? k > 0 ? Zo.forward : Zo.back : Zo.unknown }) })
        };
        
        function c() { s = n.value }
        
        function l(g) {
            o.push(g);
            const T = () => {
                const A = o.indexOf(g);
                A > -1 && o.splice(A, 1)
            };
            return i.push(T), T
        }
        
        function h() {
            const { history: g } = window;
            g.state && g.replaceState(xe({}, g.state, { scroll: ra() }), "")
        }
        
        function f() {
            for (const g of i) g();
            i = [], window.removeEventListener("popstate", a), window.removeEventListener("beforeunload", h)
        }
        return window.addEventListener("popstate", a), window.addEventListener("beforeunload", h, { passive: !0 }), { pauseListeners: c, listen: l, destroy: f }
    }
    
    function kh(t, e, n, r = !1, o = !1) { return { back: t, current: e, forward: n, replaced: r, position: window.history.length, scroll: o ? ra() : null } }
    
    function SR(t) {
        const { history: e, location: n } = window, r = { value: dy(t, n) }, o = { value: e.state };
        o.value || i(r.value, { back: null, current: r.value, forward: null, position: e.length - 1, replaced: !0, scroll: null }, !0);
        
        function i(c, l, h) {
            const f = t.indexOf("#")
                , g = f > -1 ? (n.host && document.querySelector("base") ? t : t.slice(f)) + c : IR() + t + c;
            try { e[h ? "replaceState" : "pushState"](l, "", g), o.value = l } catch (T) { console.error(T), n[h ? "replace" : "assign"](g) }
        }
        
        function s(c, l) {
            const h = xe({}, e.state, kh(o.value.back, c, o.value.forward, !0), l, { position: o.value.position });
            i(c, h, !0), r.value = c
        }
        
        function a(c, l) {
            const h = xe({}, o.value, e.state, { forward: c, scroll: ra() });
            i(h.current, h, !0);
            const f = xe({}, kh(r.value, c, null), { position: h.position + 1 }, l);
            i(c, f, !1), r.value = c
        }
        return { location: r, state: o, push: a, replace: s }
    }
    
    function kR(t) {
        t = CR(t);
        const e = SR(t)
            , n = wR(t, e.state, e.location, e.replace);
        
        function r(i, s = !0) { s || n.pauseListeners(), history.go(i) }
        const o = xe({ location: "", base: t, go: r, createHref: TR.bind(null, t) }, e, n);
        return Object.defineProperty(o, "location", { enumerable: !0, get: () => e.location.value }), Object.defineProperty(o, "state", { enumerable: !0, get: () => e.state.value }), o
    }
    
    function RR(t) { return typeof t == "string" || t && typeof t == "object" }
    
    function hy(t) { return typeof t == "string" || typeof t == "symbol" }
    const fy = Symbol("");
    var Rh;
    (function (t) { t[t.aborted = 4] = "aborted", t[t.cancelled = 8] = "cancelled", t[t.duplicated = 16] = "duplicated" })(Rh || (Rh = {}));
    
    function Io(t, e) { return xe(new Error, { type: t, [fy]: !0 }, e) }
    
    function Ln(t, e) { return t instanceof Error && fy in t && (e == null || !!(t.type & e)) }
    const Oh = "[^/]+?"
        , OR = { sensitive: !1, strict: !1, start: !0, end: !0 }
        , NR = /[.+*?^${}()[\]/\\]/g;
    
    function PR(t, e) {
        const n = xe({}, OR, e)
            , r = [];
        let o = n.start ? "^" : "";
        const i = [];
        for (const l of t) {
            const h = l.length ? [] : [90];
            n.strict && !l.length && (o += "/");
            for (let f = 0; f < l.length; f++) {
                const g = l[f];
                let T = 40 + (n.sensitive ? .25 : 0);
                if (g.type === 0) f || (o += "/"), o += g.value.replace(NR, "\\$&"), T += 40;
                else if (g.type === 1) {
                    const { value: A, repeatable: b, optional: k, regexp: O } = g;
                    i.push({ name: A, repeatable: b, optional: k });
                    const x = O || Oh;
                    if (x !== Oh) { T += 10; try { new RegExp(`(${x})`) } catch (w) { throw new Error(`Invalid custom RegExp for param "${A}" (${x}): ` + w.message) } }
                    let I = b ? `((?:${x})(?:/(?:${x}))*)` : `(${x})`;
                    f || (I = k && l.length < 2 ? `(?:/${I})` : "/" + I), k && (I += "?"), o += I, T += 20, k && (T += -8), b && (T += -20), x === ".*" && (T += -50)
                }
                h.push(T)
            }
            r.push(h)
        }
        if (n.strict && n.end) {
            const l = r.length - 1;
            r[l][r[l].length - 1] += .7000000000000001
        }
        n.strict || (o += "/?"), n.end ? o += "$" : n.strict && (o += "(?:/|$)");
        const s = new RegExp(o, n.sensitive ? "" : "i");
        
        function a(l) {
            const h = l.match(s)
                , f = {};
            if (!h) return null;
            for (let g = 1; g < h.length; g++) {
                const T = h[g] || ""
                    , A = i[g - 1];
                f[A.name] = T && A.repeatable ? T.split("/") : T
            }
            return f
        }
        
        function c(l) {
            let h = ""
                , f = !1;
            for (const g of t) {
                (!f || !h.endsWith("/")) && (h += "/"), f = !1;
                for (const T of g)
                    if (T.type === 0) h += T.value;
                    else if (T.type === 1) {
                    const { value: A, repeatable: b, optional: k } = T, O = A in l ? l[A] : "";
                    if (hn(O) && !b) throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);
                    const x = hn(O) ? O.join("/") : O;
                    if (!x)
                        if (k) g.length < 2 && (h.endsWith("/") ? h = h.slice(0, -1) : f = !0);
                        else throw new Error(`Missing required param "${A}"`);
                    h += x
                }
            }
            return h || "/"
        }
        return { re: s, score: r, keys: i, parse: a, stringify: c }
    }
    
    function MR(t, e) {
        let n = 0;
        for (; n < t.length && n < e.length;) {
            const r = e[n] - t[n];
            if (r) return r;
            n++
        }
        return t.length < e.length ? t.length === 1 && t[0] === 80 ? -1 : 1 : t.length > e.length ? e.length === 1 && e[0] === 80 ? 1 : -1 : 0
    }
    
    function py(t, e) {
        let n = 0;
        const r = t.score
            , o = e.score;
        for (; n < r.length && n < o.length;) {
            const i = MR(r[n], o[n]);
            if (i) return i;
            n++
        }
        if (Math.abs(o.length - r.length) === 1) { if (Nh(r)) return 1; if (Nh(o)) return -1 }
        return o.length - r.length
    }
    
    function Nh(t) { const e = t[t.length - 1]; return t.length > 0 && e[e.length - 1] < 0 }
    const LR = { type: 0, value: "" }
        , DR = /[a-zA-Z0-9_]/;
    
    function xR(t) {
        if (!t) return [[]];
        if (t === "/") return [[LR]];
        if (!t.startsWith("/")) throw new Error(`Invalid path "${t}"`);
        
        function e(T) { throw new Error(`ERR (${n})/"${l}": ${T}`) }
        let n = 0
            , r = n;
        const o = [];
        let i;
        
        function s() { i && o.push(i), i = [] }
        let a = 0
            , c, l = ""
            , h = "";
        
        function f() { l && (n === 0 ? i.push({ type: 0, value: l }) : n === 1 || n === 2 || n === 3 ? (i.length > 1 && (c === "*" || c === "+") && e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`), i.push({ type: 1, value: l, regexp: h, repeatable: c === "*" || c === "+", optional: c === "*" || c === "?" })) : e("Invalid state to consume buffer"), l = "") }
        
        function g() { l += c }
        for (; a < t.length;) {
            if (c = t[a++], c === "\\" && n !== 2) { r = n, n = 4; continue }
            switch (n) {
            case 0:
                c === "/" ? (l && f(), s()) : c === ":" ? (f(), n = 1) : g();
                break;
            case 4:
                g(), n = r;
                break;
            case 1:
                c === "(" ? n = 2 : DR.test(c) ? g() : (f(), n = 0, c !== "*" && c !== "?" && c !== "+" && a--);
                break;
            case 2:
                c === ")" ? h[h.length - 1] == "\\" ? h = h.slice(0, -1) + c : n = 3 : h += c;
                break;
            case 3:
                f(), n = 0, c !== "*" && c !== "?" && c !== "+" && a--, h = "";
                break;
            default:
                e("Unknown state");
                break
            }
        }
        return n === 2 && e(`Unfinished custom RegExp for param "${l}"`), f(), s(), o
    }
    
    function UR(t, e, n) {
        const r = PR(xR(t.path), n)
            , o = xe(r, { record: t, parent: e, children: [], alias: [] });
        return e && !o.record.aliasOf == !e.record.aliasOf && e.children.push(o), o
    }
    
    function FR(t, e) {
        const n = []
            , r = new Map;
        e = Dh({ strict: !1, end: !0, sensitive: !1 }, e);
        
        function o(f) { return r.get(f) }
        
        function i(f, g, T) {
            const A = !T
                , b = Mh(f);
            b.aliasOf = T && T.record;
            const k = Dh(e, f)
                , O = [b];
            if ("alias" in f) { const w = typeof f.alias == "string" ? [f.alias] : f.alias; for (const M of w) O.push(Mh(xe({}, b, { components: T ? T.record.components : b.components, path: M, aliasOf: T ? T.record : b }))) }
            let x, I;
            for (const w of O) {
                const { path: M } = w;
                if (g && M[0] !== "/") {
                    const L = g.record.path
                        , K = L[L.length - 1] === "/" ? "" : "/";
                    w.path = g.record.path + (M && K + M)
                }
                if (x = UR(w, g, k), T ? T.alias.push(x) : (I = I || x, I !== x && I.alias.push(x), A && f.name && !Lh(x) && s(f.name)), gy(x) && c(x), b.children) { const L = b.children; for (let K = 0; K < L.length; K++) i(L[K], x, T && T.children[K]) } T = T || x
            }
            return I ? () => { s(I) } : Xo
        }
        
        function s(f) {
            if (hy(f)) {
                const g = r.get(f);
                g && (r.delete(f), n.splice(n.indexOf(g), 1), g.children.forEach(s), g.alias.forEach(s))
            } else {
                const g = n.indexOf(f);
                g > -1 && (n.splice(g, 1), f.record.name && r.delete(f.record.name), f.children.forEach(s), f.alias.forEach(s))
            }
        }
        
        function a() { return n }
        
        function c(f) {
            const g = $R(f, n);
            n.splice(g, 0, f), f.record.name && !Lh(f) && r.set(f.record.name, f)
        }
        
        function l(f, g) {
            let T, A = {}
                , b, k;
            if ("name" in f && f.name) {
                if (T = r.get(f.name), !T) throw Io(1, { location: f });
                k = T.record.name, A = xe(Ph(g.params, T.keys.filter(I => !I.optional)
                    .concat(T.parent ? T.parent.keys.filter(I => I.optional) : [])
                    .map(I => I.name)), f.params && Ph(f.params, T.keys.map(I => I.name))), b = T.stringify(A)
            } else if (f.path != null) b = f.path, T = n.find(I => I.re.test(b)), T && (A = T.parse(b), k = T.record.name);
            else {
                if (T = g.name ? r.get(g.name) : n.find(I => I.re.test(g.path)), !T) throw Io(1, { location: f, currentLocation: g });
                k = T.record.name, A = xe({}, g.params, f.params), b = T.stringify(A)
            }
            const O = [];
            let x = T;
            for (; x;) O.unshift(x.record), x = x.parent;
            return { name: k, path: b, params: A, matched: O, meta: BR(O) }
        }
        t.forEach(f => i(f));
        
        function h() { n.length = 0, r.clear() }
        return { addRoute: i, resolve: l, removeRoute: s, clearRoutes: h, getRoutes: a, getRecordMatcher: o }
    }
    
    function Ph(t, e) { const n = {}; for (const r of e) r in t && (n[r] = t[r]); return n }
    
    function Mh(t) { const e = { path: t.path, redirect: t.redirect, name: t.name, meta: t.meta || {}, aliasOf: t.aliasOf, beforeEnter: t.beforeEnter, props: HR(t), children: t.children || [], instances: {}, leaveGuards: new Set, updateGuards: new Set, enterCallbacks: {}, components: "components" in t ? t.components || null : t.component && { default: t.component } }; return Object.defineProperty(e, "mods", { value: {} }), e }
    
    function HR(t) {
        const e = {}
            , n = t.props || !1;
        if ("component" in t) e.default = n;
        else
            for (const r in t.components) e[r] = typeof n == "object" ? n[r] : n;
        return e
    }
    
    function Lh(t) {
        for (; t;) {
            if (t.record.aliasOf) return !0;
            t = t.parent
        }
        return !1
    }
    
    function BR(t) { return t.reduce((e, n) => xe(e, n.meta), {}) }
    
    function Dh(t, e) { const n = {}; for (const r in t) n[r] = r in e ? e[r] : t[r]; return n }
    
    function $R(t, e) {
        let n = 0
            , r = e.length;
        for (; n !== r;) {
            const i = n + r >> 1;
            py(t, e[i]) < 0 ? r = i : n = i + 1
        }
        const o = KR(t);
        return o && (r = e.lastIndexOf(o, r - 1)), r
    }
    
    function KR(t) {
        let e = t;
        for (; e = e.parent;)
            if (gy(e) && py(t, e) === 0) return e
    }
    
    function gy({ record: t }) {
        return !!(t.name || t.components && Object.keys(t.components)
            .length || t.redirect)
    }
    
    function jR(t) {
        const e = {};
        if (t === "" || t === "?") return e;
        const r = (t[0] === "?" ? t.slice(1) : t)
            .split("&");
        for (let o = 0; o < r.length; ++o) {
            const i = r[o].replace(sy, " ")
                , s = i.indexOf("=")
                , a = hi(s < 0 ? i : i.slice(0, s))
                , c = s < 0 ? null : hi(i.slice(s + 1));
            if (a in e) {
                let l = e[a];
                hn(l) || (l = e[a] = [l]), l.push(c)
            } else e[a] = c
        }
        return e
    }
    
    function xh(t) {
        let e = "";
        for (let n in t) {
            const r = t[n];
            if (n = lR(n), r == null) { r !== void 0 && (e += (e.length ? "&" : "") + n); continue }(hn(r) ? r.map(i => i && wc(i)) : [r && wc(r)])
            .forEach(i => { i !== void 0 && (e += (e.length ? "&" : "") + n, i != null && (e += "=" + i)) })
        }
        return e
    }
    
    function qR(t) {
        const e = {};
        for (const n in t) {
            const r = t[n];
            r !== void 0 && (e[n] = hn(r) ? r.map(o => o == null ? null : "" + o) : r == null ? r : "" + r)
        }
        return e
    }
    const VR = Symbol("")
        , Uh = Symbol("")
        , ou = Symbol("")
        , my = Symbol("")
        , kc = Symbol("");
    
    function Bo() {
        let t = [];
        
        function e(r) {
            return t.push(r), () => {
                const o = t.indexOf(r);
                o > -1 && t.splice(o, 1)
            }
        }
        
        function n() { t = [] }
        return { add: e, list: () => t.slice(), reset: n }
    }
    
    function ir(t, e, n, r, o, i = s => s()) {
        const s = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
        return () => new Promise((a, c) => {
            const l = g => { g === !1 ? c(Io(4, { from: n, to: e })) : g instanceof Error ? c(g) : RR(g) ? c(Io(2, { from: e, to: g })) : (s && r.enterCallbacks[o] === s && typeof g == "function" && s.push(g), a()) }
                , h = i(() => t.call(r && r.instances[o], e, n, l));
            let f = Promise.resolve(h);
            t.length < 3 && (f = f.then(l)), f.catch(g => c(g))
        })
    }
    
    function La(t, e, n, r, o = i => i()) {
        const i = [];
        for (const s of t)
            for (const a in s.components) {
                let c = s.components[a];
                if (!(e !== "beforeRouteEnter" && !s.instances[a]))
                    if (oy(c)) {
                        const h = (c.__vccOpts || c)[e];
                        h && i.push(ir(h, n, r, s, a, o))
                    } else {
                        let l = c();
                        i.push(() => l.then(h => {
                            if (!h) throw new Error(`Couldn't resolve component "${a}" at "${s.path}"`);
                            const f = Xk(h) ? h.default : h;
                            s.mods[a] = h, s.components[a] = f;
                            const T = (f.__vccOpts || f)[e];
                            return T && ir(T, n, r, s, a, o)()
                        }))
                    }
            }
        return i
    }
    
    function Fh(t) {
        const e = In(ou)
            , n = In(my)
            , r = Ze(() => { const c = so(t.to); return e.resolve(c) })
            , o = Ze(() => { const { matched: c } = r.value, { length: l } = c, h = c[l - 1], f = n.matched; if (!h || !f.length) return -1; const g = f.findIndex(bo.bind(null, h)); if (g > -1) return g; const T = Hh(c[l - 2]); return l > 1 && Hh(h) === T && f[f.length - 1].path !== T ? f.findIndex(bo.bind(null, c[l - 2])) : g })
            , i = Ze(() => o.value > -1 && YR(n.params, r.value.params))
            , s = Ze(() => o.value > -1 && o.value === n.matched.length - 1 && uy(n.params, r.value.params));
        
        function a(c = {}) {
            return zR(c) ? e[so(t.replace) ? "replace" : "push"](so(t.to))
                .catch(Xo) : Promise.resolve()
        }
        return { route: r, href: Ze(() => r.value.href), isActive: i, isExactActive: s, navigate: a }
    }
    let GR;
    GR = yi({
        name: "RouterLink"
        , compatConfig: { MODE: 3 }
        , props: { to: { type: [String, Object], required: !0 }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" } }
        , useLink: Fh
        , setup(t, { slots: e }) {
            const n = So(Fh(t))
                , { options: r } = In(ou)
                , o = Ze(() => ({
                    [Bh(t.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive
                    , [Bh(t.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
                }));
            return () => { const i = e.default && e.default(n); return t.custom ? i : ko("a", { "aria-current": n.isExactActive ? t.ariaCurrentValue : null, href: n.href, onClick: n.navigate, class: o.value }, i) }
        }
    });
    WR = GR;
    
    function zR(t) { if (!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) && !t.defaultPrevented && !(t.button !== void 0 && t.button !== 0)) { if (t.currentTarget && t.currentTarget.getAttribute) { const e = t.currentTarget.getAttribute("target"); if (/\b_blank\b/i.test(e)) return } return t.preventDefault && t.preventDefault(), !0 } }
    
    function YR(t, e) {
        for (const n in e) {
            const r = e[n]
                , o = t[n];
            if (typeof r == "string") { if (r !== o) return !1 } else if (!hn(o) || o.length !== r.length || r.some((i, s) => i !== o[s])) return !1
        }
        return !0
    }
    
    function Hh(t) { return t ? t.aliasOf ? t.aliasOf.path : t.path : "" }
    const Bh = (t, e, n) => t ?? e ?? n
        , QR = yi({
            name: "RouterView"
            , inheritAttrs: !1
            , props: { name: { type: String, default: "default" }, route: Object }
            , compatConfig: { MODE: 3 }
            , setup(t, { attrs: e, slots: n }) {
                const r = In(kc)
                    , o = Ze(() => t.route || r.value)
                    , i = In(Uh, 0)
                    , s = Ze(() => {
                        let l = so(i);
                        const { matched: h } = o.value;
                        let f;
                        for (;
                            (f = h[l]) && !f.components;) l++;
                        return l
                    })
                    , a = Ze(() => o.value.matched[s.value]);
                Gi(Uh, Ze(() => s.value + 1)), Gi(VR, a), Gi(kc, o);
                const c = sr();
                return Nr(() => [c.value, a.value, t.name], ([l, h, f], [g, T, A]) => {
                    h && (h.instances[f] = l, T && T !== h && l && l === g && (h.leaveGuards.size || (h.leaveGuards = T.leaveGuards), h.updateGuards.size || (h.updateGuards = T.updateGuards))), l && h && (!T || !bo(h, T) || !g) && (h.enterCallbacks[f] || [])
                        .forEach(b => b(l))
                }, { flush: "post" }), () => {
                    const l = o.value
                        , h = t.name
                        , f = a.value
                        , g = f && f.components[h];
                    if (!g) return $h(n.default, { Component: g, route: l });
                    const T = f.props[h]
                        , A = T ? T === !0 ? l.params : typeof T == "function" ? T(l) : T : null
                        , k = ko(g, xe({}, A, e, { onVnodeUnmounted: O => { O.component.isUnmounted && (f.instances[h] = null) }, ref: c }));
                    return $h(n.default, { Component: k, route: l }) || k
                }
            }
        });
    
    function $h(t, e) { if (!t) return null; const n = t(e); return n.length === 1 ? n[0] : n }
    const JR = QR;
    
    function XR(t) {
        const e = FR(t.routes, t)
            , n = t.parseQuery || jR
            , r = t.stringifyQuery || xh
            , o = t.history
            , i = Bo()
            , s = Bo()
            , a = Bo()
            , c = Hc(er);
        let l = er;
        Zr && t.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
        const h = Pa.bind(null, j => "" + j)
            , f = Pa.bind(null, dR)
            , g = Pa.bind(null, hi);
        
        function T(j, Y) { let z, X; return hy(j) ? (z = e.getRecordMatcher(j), X = Y) : X = j, e.addRoute(X, z) }
        
        function A(j) {
            const Y = e.getRecordMatcher(j);
            Y && e.removeRoute(Y)
        }
        
        function b() {
            return e.getRoutes()
                .map(j => j.record)
        }
        
        function k(j) { return !!e.getRecordMatcher(j) }
        
        function O(j, Y) {
            if (Y = xe({}, Y || c.value), typeof j == "string") {
                const _ = Ma(n, j, Y.path)
                    , R = e.resolve({ path: _.path }, Y)
                    , m = o.createHref(_.fullPath);
                return xe(_, R, { params: g(R.params), hash: hi(_.hash), redirectedFrom: void 0, href: m })
            }
            let z;
            if (j.path != null) z = xe({}, j, {
                path: Ma(n, j.path, Y.path)
                    .path
            });
            else {
                const _ = xe({}, j.params);
                for (const R in _) _[R] == null && delete _[R];
                z = xe({}, j, { params: f(_) }), Y.params = f(Y.params)
            }
            const X = e.resolve(z, Y)
                , _e = j.hash || "";
            X.params = h(g(X.params));
            const ke = pR(r, xe({}, j, { hash: cR(_e), path: X.path }))
                , E = o.createHref(ke);
            return xe({ fullPath: ke, hash: _e, query: r === xh ? qR(j.query) : j.query || {} }, X, { redirectedFrom: void 0, href: E })
        }
        
        function x(j) { return typeof j == "string" ? Ma(n, j, c.value.path) : xe({}, j) }
        
        function I(j, Y) { if (l !== j) return Io(8, { from: Y, to: j }) }
        
        function w(j) { return K(j) }
        
        function M(j) { return w(xe(x(j), { replace: !0 })) }
        
        function L(j) { const Y = j.matched[j.matched.length - 1]; if (Y && Y.redirect) { const { redirect: z } = Y; let X = typeof z == "function" ? z(j) : z; return typeof X == "string" && (X = X.includes("?") || X.includes("#") ? X = x(X) : { path: X }, X.params = {}), xe({ query: j.query, hash: j.hash, params: X.path != null ? {} : j.params }, X) } }
        
        function K(j, Y) {
            const z = l = O(j)
                , X = c.value
                , _e = j.state
                , ke = j.force
                , E = j.replace === !0
                , _ = L(z);
            if (_) return K(xe(x(_), { state: typeof _ == "object" ? xe({}, _e, _.state) : _e, force: ke, replace: E }), Y || z);
            const R = z;
            R.redirectedFrom = Y;
            let m;
            return !ke && gR(r, X, z) && (m = Io(16, { to: R, from: X }), ge(X, X, !0, !1)), (m ? Promise.resolve(m) : te(R, X))
                .catch(u => Ln(u) ? Ln(u, 2) ? u : vt(u) : Ce(u, R, X))
                .then(u => { if (u) { if (Ln(u, 2)) return K(xe({ replace: E }, x(u.to), { state: typeof u.to == "object" ? xe({}, _e, u.to.state) : _e, force: ke }), Y || R) } else u = V(R, X, !0, E, _e); return de(R, X, u), u })
        }
        
        function G(j, Y) { const z = I(j, Y); return z ? Promise.reject(z) : Promise.resolve() }
        
        function H(j) {
            const Y = Et.values()
                .next()
                .value;
            return Y && typeof Y.runWithContext == "function" ? Y.runWithContext(j) : j()
        }
        
        function te(j, Y) {
            let z;
            const [X, _e, ke] = ZR(j, Y);
            z = La(X.reverse(), "beforeRouteLeave", j, Y);
            for (const _ of X) _.leaveGuards.forEach(R => { z.push(ir(R, j, Y)) });
            const E = G.bind(null, j, Y);
            return z.push(E), nt(z)
                .then(() => { z = []; for (const _ of i.list()) z.push(ir(_, j, Y)); return z.push(E), nt(z) })
                .then(() => { z = La(_e, "beforeRouteUpdate", j, Y); for (const _ of _e) _.updateGuards.forEach(R => { z.push(ir(R, j, Y)) }); return z.push(E), nt(z) })
                .then(() => {
                    z = [];
                    for (const _ of ke)
                        if (_.beforeEnter)
                            if (hn(_.beforeEnter))
                                for (const R of _.beforeEnter) z.push(ir(R, j, Y));
                            else z.push(ir(_.beforeEnter, j, Y));
                    return z.push(E), nt(z)
                })
                .then(() => (j.matched.forEach(_ => _.enterCallbacks = {}), z = La(ke, "beforeRouteEnter", j, Y, H), z.push(E), nt(z)))
                .then(() => { z = []; for (const _ of s.list()) z.push(ir(_, j, Y)); return z.push(E), nt(z) })
                .catch(_ => Ln(_, 8) ? _ : Promise.reject(_))
        }
        
        function de(j, Y, z) {
            a.list()
                .forEach(X => H(() => X(j, Y, z)))
        }
        
        function V(j, Y, z, X, _e) {
            const ke = I(j, Y);
            if (ke) return ke;
            const E = Y === er
                , _ = Zr ? history.state : {};
            z && (X || E ? o.replace(j.fullPath, xe({ scroll: E && _ && _.scroll }, _e)) : o.push(j.fullPath, _e)), c.value = j, ge(j, Y, z, E), vt()
        }
        let se;
        
        function He() {
            se || (se = o.listen((j, Y, z) => {
                if (!Bt.listening) return;
                const X = O(j)
                    , _e = L(X);
                if (_e) {
                    K(xe(_e, { replace: !0 }), X)
                        .catch(Xo);
                    return
                }
                l = X;
                const ke = c.value;
                Zr && AR(Sh(ke.fullPath, z.delta), ra()), te(X, ke)
                    .catch(E => Ln(E, 12) ? E : Ln(E, 2) ? (K(E.to, X)
                        .then(_ => { Ln(_, 20) && !z.delta && z.type === fi.pop && o.go(-1, !1) })
                        .catch(Xo), Promise.reject()) : (z.delta && o.go(-z.delta, !1), Ce(E, X, ke)))
                    .then(E => { E = E || V(X, ke, !1), E && (z.delta && !Ln(E, 8) ? o.go(-z.delta, !1) : z.type === fi.pop && Ln(E, 20) && o.go(-1, !1)), de(X, ke, E) })
                    .catch(Xo)
            }))
        }
        let tt = Bo()
            , Se = Bo()
            , Ee;
        
        function Ce(j, Y, z) { vt(j); const X = Se.list(); return X.length ? X.forEach(_e => _e(j, Y, z)) : console.error(j), Promise.reject(j) }
        
        function gt() { return Ee && c.value !== er ? Promise.resolve() : new Promise((j, Y) => { tt.add([j, Y]) }) }
        
        function vt(j) {
            return Ee || (Ee = !j, He(), tt.list()
                .forEach(([Y, z]) => j ? z(j) : Y()), tt.reset()), j
        }
        
        function ge(j, Y, z, X) {
            const { scrollBehavior: _e } = t;
            if (!Zr || !_e) return Promise.resolve();
            const ke = !z && bR(Sh(j.fullPath, 0)) || (X || !z) && history.state && history.state.scroll || null;
            return yf()
                .then(() => _e(j, Y, ke))
                .then(E => E && ER(E))
                .catch(E => Ce(E, j, Y))
        }
        const ve = j => o.go(j);
        let kt;
        const Et = new Set
            , Bt = {
                currentRoute: c
                , listening: !0
                , addRoute: T
                , removeRoute: A
                , clearRoutes: e.clearRoutes
                , hasRoute: k
                , getRoutes: b
                , resolve: O
                , options: t
                , push: w
                , replace: M
                , go: ve
                , back: () => ve(-1)
                , forward: () => ve(1)
                , beforeEach: i.add
                , beforeResolve: s.add
                , afterEach: a.add
                , onError: Se.add
                , isReady: gt
                , install(j) {
                    const Y = this;
                    j.component("RouterLink", WR), j.component("RouterView", JR), j.config.globalProperties.$router = Y, Object.defineProperty(j.config.globalProperties, "$route", { enumerable: !0, get: () => so(c) }), Zr && !kt && c.value === er && (kt = !0, w(o.location)
                        .catch(_e => {}));
                    const z = {};
                    for (const _e in er) Object.defineProperty(z, _e, { get: () => c.value[_e], enumerable: !0 });
                    j.provide(ou, Y), j.provide(my, rf(z)), j.provide(kc, c);
                    const X = j.unmount;
                    Et.add(j), j.unmount = function () { Et.delete(j), Et.size < 1 && (l = er, se && se(), se = null, c.value = er, kt = !1, Ee = !1), X() }
                }
            };
        
        function nt(j) { return j.reduce((Y, z) => Y.then(() => H(z)), Promise.resolve()) }
        return Bt
    }
    
    function ZR(t, e) {
        const n = []
            , r = []
            , o = []
            , i = Math.max(e.matched.length, t.matched.length);
        for (let s = 0; s < i; s++) {
            const a = e.matched[s];
            a && (t.matched.find(l => bo(l, a)) ? r.push(a) : n.push(a));
            const c = t.matched[s];
            c && (e.matched.find(l => bo(l, c)) || o.push(c))
        }
        return [n, r, o]
    }
    const e1 = { props: { text: { type: String, required: !0 }, target: { type: String, required: !0 } } }
        , t1 = ["href"]
        , n1 = { class: "text" };
    
    function r1(t, e, n, r, o, i) { return Z(), we("a", { class: "link-container", href: n.target, target: "_blank" }, [an(t.$slots, "default", {}, void 0, !0), Q("span", n1, Ie(n.text), 1)], 8, t1) }
    const o1 = Me(e1, [["render", r1], ["__scopeId", "data-v-91b07776"]])
        , i1 = { components: { LejIcon: Rn } };
    
    function s1(t, e, n, r, o, i) { const s = fe("LejIcon"); return Z(), $e(s, { viewBox: "0 0 28 28", colorProperty: "fill" }, { default: Ae(() => e[0] || (e[0] = [Q("path", { d: "M26.001 7.35334C26.001 5.54646 24.2882 4.23059 22.5423 4.69622L4.04572 9.62939C2.84195 9.95045 2.00439 11.0407 2.00439 12.2865V15.7136C2.00439 16.9594 2.84195 18.0496 4.04572 18.3707L7 19.1586V19.5C7 21.9853 9.01472 24 11.5 24C13.2899 24 14.8357 22.955 15.5606 21.4418L22.5423 23.3039C24.2882 23.7695 26.001 22.4536 26.001 20.6468V7.35334ZM22.9289 6.14556C23.7225 5.93391 24.501 6.53203 24.501 7.35334V20.6468C24.501 21.4681 23.7225 22.0662 22.9289 21.8545L4.43227 16.9214C3.8851 16.7754 3.50439 16.2799 3.50439 15.7136V12.2865C3.50439 11.7202 3.8851 11.2247 4.43227 11.0787L22.9289 6.14556ZM14.0722 21.0448C13.5474 21.9167 12.5918 22.5 11.5 22.5C9.8628 22.5 8.53192 21.1885 8.50057 19.5588L14.0722 21.0448Z", fill: "#212121" }, null, -1)])), _: 1 }) }
    const a1 = Me(i1, [["render", s1]])
        , c1 = { components: { LejIcon: Rn } };
    
    function l1(t, e, n, r, o, i) { const s = fe("LejIcon"); return Z(), $e(s, { colorProperty: "stroke" }, { default: Ae(() => e[0] || (e[0] = [Q("path", { d: "M12 19C9.23858 19 7 16.7614 7 14M12 19C14.7614 19 17 16.7614 17 14M12 19V14M7 14V11.8571C7 11.0592 7 10.6602 7.11223 10.3394C7.31326 9.76495 7.76495 9.31326 8.33944 9.11223C8.66019 9 9.05917 9 9.85714 9H14.1429C14.9408 9 15.3398 9 15.6606 9.11223C16.2351 9.31326 16.6867 9.76495 16.8878 10.3394C17 10.6602 17 11.0592 17 11.8571V14M7 14H4M17 14H20M17 10L19.5 7.5M4.5 20.5L8 17M7 10L4.5 7.5M19.5 20.5L16 17M14 6V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V6H14Z", stroke: "#000000", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, null, -1)])), _: 1 }) }
    const u1 = Me(c1, [["render", l1]])
        , d1 = { components: { LejIcon: Rn } };
    
    function h1(t, e, n, r, o, i) { const s = fe("LejIcon"); return Z(), $e(s, null, { default: Ae(() => e[0] || (e[0] = [Q("path", { d: "M12 19H12.01M8.21704 7.69689C8.75753 6.12753 10.2471 5 12 5C14.2091 5 16 6.79086 16 9C16 10.6565 14.9931 12.0778 13.558 12.6852C12.8172 12.9988 12.4468 13.1556 12.3172 13.2767C12.1629 13.4209 12.1336 13.4651 12.061 13.6634C12 13.8299 12 14.0866 12 14.6L12 16", stroke: "#000000", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, null, -1)])), _: 1 }) }
    const f1 = Me(d1, [["render", h1]])
        , p1 = { components: { LejIcon: Rn } };
    
    function g1(t, e, n, r, o, i) { const s = fe("LejIcon"); return Z(), $e(s, null, { default: Ae(() => e[0] || (e[0] = [Q("path", { d: "M6 6L18 18M18 6L6 18", stroke: "#000000", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, null, -1)])), _: 1 }) }
    let y1, C1, _1, T1, v1, E1;
    m1 = Me(p1, [["render", g1]]);
    y1 = { small: ["30em", "26.6667em"], medium: ["40em", "36.6667em"], large: ["50em", "46.6667em"] };
    C1 = {
        components: { IconButton: ny, IconExit: m1, LejButton: ry }
        , emits: { close: null }
        , props: { title: { type: String, required: !0 }, show: { type: Boolean, default: !1 }, actions: { type: Array, default: [] }, size: { type: String, default: "small" } }
        , data() { return { defaultButton: { label: this.$i18n.t("global.close"), func: this.close, primary: !0 } } }
        , methods: {
            close() { this.$emit("close") }
            , scrollToBottom() {
                const t = this.$refs.scrollpane;
                t.scrollTop = t.scrollHeight
            }
        }
        , computed: { computedSizeStyle() { const t = y1[this.size]; return `
                --modal-max-height:${t[0]};
                --modal-width:${t[1]};` } }
        , watch: { show(t, e) { t === !0 ? document.body.style.overflow = "hidden" : document.body.style.overflow = "" } }
        , beforeUnmount() { document.body.style.overflow = "" }
    };
    _1 = { class: "title" };
    T1 = { ref: "scrollpane", class: "content" };
    v1 = { key: 0, class: "action-container" };
    E1 = { key: 0, class: "flex-spacer" };
    
    function A1(t, e, n, r, o, i) {
        const s = fe("IconExit")
            , a = fe("IconButton")
            , c = fe("LejButton");
        return Z(), $e(el, { name: "modal-fade" }, { default: Ae(() => [n.show ? (Z(), we("div", { key: 0, class: "backdrop", onClick: e[2] || (e[2] = ho(l => i.close(), ["stop"])) }, [Q("dialog", { class: "modal", style: Sn(i.computedSizeStyle), onClick: e[1] || (e[1] = ho(() => {}, ["stop"])) }, [ue(a, { class: "close-button", title: t.$t("global.close"), onClick: e[0] || (e[0] = ho(l => i.close(), ["stop"])) }, { default: Ae(() => [ue(s)]), _: 1 }, 8, ["title"]), Q("header", null, [Q("h2", _1, Ie(n.title), 1)]), Q("section", T1, [an(t.$slots, "default", {}, () => [dt(Ie(t.$t("components.modal.attention")), 1)], !0)], 512), Q("footer", null, [n.actions ? (Z(), we("div", v1, [n.actions.length <= 0 ? (Z(), $e(c, { key: 0, onClick: o.defaultButton.func, primary: o.defaultButton.primary }, { default: Ae(() => [dt(Ie(o.defaultButton.label), 1)]), _: 1 }, 8, ["onClick", "primary"])) : Zt("", !0), (Z(!0), we(ze, null, Wc(n.actions, l => (Z(), we(ze, null, [ue(c, { onClick: l.func, primary: l.primary == !0 }, { default: Ae(() => [dt(Ie(l.label), 1)]), _: 2 }, 1032, ["onClick", "primary"]), n.actions.indexOf(l) == 0 ? (Z(), we("div", E1)) : Zt("", !0)], 64))), 256))])) : Zt("", !0)])], 4)])) : Zt("", !0)]), _: 3 })
    }
    let I1;
    b1 = Me(C1, [["render", A1], ["__scopeId", "data-v-d82044f7"]]);
    I1 = { components: { LejIcon: Rn } };
    
    function w1(t, e, n, r, o, i) { const s = fe("LejIcon"); return Z(), $e(s, null, { default: Ae(() => e[0] || (e[0] = [Q("path", { d: "M9 6L15 12L9 18", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, null, -1)])), _: 1 }) }
    let k1;
    S1 = Me(I1, [["render", w1]]);
    k1 = { components: { LejIcon: Rn } };
    
    function R1(t, e, n, r, o, i) { const s = fe("LejIcon"); return Z(), $e(s, null, { default: Ae(() => e[0] || (e[0] = [Q("path", { d: "M6 9L12 15L18 9", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, null, -1)])), _: 1 }) }
    let N1, P1, M1;
    O1 = Me(k1, [["render", R1]]);
    N1 = { components: { IconChevronRight: S1, IconChevronDown: O1 }, props: { buttonText: String, autoScroll: { type: Boolean } }, data() { return { show: Boolean, showMaxHeight: 0, intervalID: 0 } }, watch: { show() { this.showMaxHeight === 0 ? (this.showMaxHeight = this.$refs.content.scrollHeight + "px", this.autoScroll && (this.startScroll(), setTimeout(this.stopScroll, 200))) : this.showMaxHeight = 0 } }, methods: { startScroll() { this.intervalID = setInterval(this.scroll) }, stopScroll() { clearInterval(this.intervalID) }, scroll() { this.$refs.button?.scrollIntoView() }, toggleShow() { this.show = !this.show } } };
    P1 = { class: "collapse-container" };
    M1 = { class: "collapse-button-text" };
    
    function L1(t, e, n, r, o, i) {
        const s = fe("IconChevronDown")
            , a = fe("IconChevronRight");
        return Z(), we("div", P1, [n.buttonText !== void 0 ? (Z(), we("div", { key: 0, class: "collapse-button", onClick: e[0] || (e[0] = (...c) => i.toggleShow && i.toggleShow(...c)), ref: "button" }, [o.show ? (Z(), $e(a, { key: 1 })) : (Z(), $e(s, { key: 0 })), Q("h2", M1, Ie(n.buttonText), 1)], 512)) : Zt("", !0), Q("div", { class: "collapse-content", ref: "content", style: Sn({ "max-height": o.showMaxHeight }) }, [Q("div", null, [an(t.$slots, "default", {}, void 0, !0)])], 4)])
    }
    let x1, U1, F1, H1, B1, $1, K1, j1, q1;
    D1 = Me(N1, [["render", L1], ["__scopeId", "data-v-1ad81f45"]]);
    x1 = [{ id: 9, username: "l.brunner", name: "Lars Brunner", web_url: "https://gitlab.rafisa.net/l.brunner" }, { id: 31, username: "d.boulter", name: "Daniel Boulter", web_url: "https://gitlab.rafisa.net/d.boulter" }, { id: 13, username: "t.mohler", name: "Theodor Mohler", web_url: "https://gitlab.rafisa.net/t.mohler" }, { id: 30, username: "m.radziukynas", name: "Matas Radziukynas", web_url: "https://gitlab.rafisa.net/m.radziukynas" }, { id: 35, username: "s.beere", name: "Stephanie Beere", web_url: "https://gitlab.rafisa.net/s.beere" }, { id: 29, username: "y.schoenhaar", name: "Yannick  Sch\xf6nhaar", web_url: "https://gitlab.rafisa.net/y.schoenhaar" }, { id: 56, username: "i.gabdou", name: "Ilias Gabdou", web_url: "https://gitlab.rafisa.net/i.gabdou" }, { id: 61, username: "d.burger", name: "David Burger", web_url: "https://gitlab.rafisa.net/d.burger" }, { id: 81, username: "t.steinlin", name: "Tobias Steinlin", web_url: "https://gitlab.rafisa.net/t.steinlin" }, { id: 126, username: "j.macaluso", name: "Jeshuan Macaluso", web_url: "https://gitlab.rafisa.net/j.macaluso" }, { id: 136, username: "m.neulaendner", name: "Marlon Neul\xe4ndner", web_url: "https://gitlab.rafisa.net/m.neulaendner" }, { id: 69, username: "p.schindler", name: "Pascal Schindler", web_url: "https://gitlab.rafisa.net/p.schindler" }, { id: 420, username: "a.gfeller", name: "Adrian Gfeller", web_url: "https://gitlab.rafisa.net/a.gfeller" }];
    U1 = { emits: ["close"], components: { Modal: b1, Collapse: D1 }, props: { show: { type: Boolean, required: !0 } }, data() { return { contributors: [], version: String } }, created() { this.loadContributers(), this.loadVersion() }, methods: { emitClose() { this.$emit("close") }, async loadContributers() { this.contributors = x1.map(t => t.name) }, loadVersion() { this.version = AI.LATEST } } };
    F1 = { class: "about-us-container" };
    H1 = { id: "app-title" };
    B1 = { id: "app-version" };
    $1 = { id: "contributors-title" };
    K1 = { id: "contributors-grid" };
    j1 = { key: 0, class: "column1" };
    q1 = { key: 1, class: "column2" };
    
    function V1(t, e, n, r, o, i) { const s = fe("Modal"); return Z(), $e(s, { title: "", show: n.show, actions: null, onClose: i.emitClose, size: "large" }, { default: Ae(() => [Q("div", F1, [e[0] || (e[0] = Q("img", { id: "logo", src: nu }, null, -1)), Q("h2", H1, Ie(t.$t("global.journal")), 1), Q("h2", B1, Ie(o.version), 1), e[1] || (e[1] = Q("hr", null, null, -1)), Q("h2", $1, Ie(t.$t("about.contributors")) + " :", 1), Q("div", K1, [(Z(!0), we(ze, null, Wc(o.contributors, (a, c) => (Z(), we(ze, null, [c % 2 === 0 ? (Z(), we("div", j1, Ie(a), 1)) : (Z(), we("div", q1, Ie(a), 1))], 64))), 256))])])]), _: 1 }, 8, ["show", "onClose"]) }
    const G1 = Me(U1, [["render", V1], ["__scopeId", "data-v-7dc16555"]])
        , W1 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3csvg%20viewBox='103%2070%20173%20140'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:bx='https://boxy-svg.com'%3e%3cdefs%3e%3clinearGradient%20gradientUnits='userSpaceOnUse'%20x1='200'%20y1='100'%20x2='200'%20y2='350'%20id='gradient-0'%20gradientTransform='matrix(-0.841455,%200.831008,%20-0.475764,%20-0.775611,%20492.982452,%20174.896238)'%3e%3cstop%20offset='0'%20style='stop-color:%20rgba(0,%20255,%2025,%201)'/%3e%3cstop%20offset='1'%20style='stop-color:%20rgb(5,%20134,%20255);'/%3e%3c/linearGradient%3e%3cbx:grid%20x='0'%20y='0'%20width='98.832'%20height='103.115'/%3e%3c/defs%3e%3crect%20x='34.24'%20y='70.604'%20width='240.851'%20height='278.895'%20style='fill:%20url(%23gradient-0);'%20mask='url(%23bookL)'/%3e%3cmask%20id='bookL'%3e%3cg%20transform='matrix(1.162327,%200.01094,%20-0.011524,%201.224426,%20-51.344975,%20-103.902863)'%20style=''%20bx:origin='0.57%200.543'%3e%3cpath%20d='M%20207.343%20167.216%20C%20211.47%20166.649%20213.333%20172.139%20214.145%20175.185%20C%20216.006%20182.152%20216.02%20191.16%20213.884%20198.069%20C%20213.145%20200.459%20211.592%20204.486%20208.782%20205.112%20C%20207.117%20205.482%20205.821%20204.583%20204.831%20203.386%20C%20203.27%20201.499%20202.461%20198.994%20201.859%20196.683%20C%20200.105%20189.944%20200.191%20181.178%20202.171%20174.491%20C%20202.969%20171.793%20204.315%20168.148%20207.343%20167.216%20Z'%20style='fill:%20rgba(255,%20255,%20255,%200.71);'/%3e%3cpath%20id='leftWing'%20d='M%20136.309%20145.249%20C%20149.378%20130.686%20208.621%20157.924%20215.815%20209.319%20C%20219.973%20242.528%20180.009%20255.164%20176.173%20254.779%20C%20146.44%20250.773%20152.374%20210.609%20155.871%20207.315%20C%20163.944%20200.034%20159.627%20203.461%20149.797%20195.757%20C%20141.73%20190.672%20130.915%20150.566%20136.309%20145.249%20Z'%20style='fill:%20rgba(255,%20255,%20255,%200.71);'/%3e%3cpath%20id='rightWing'%20d='M%20280.774%20144.094%20C%20267.707%20129.531%20208.463%20156.768%20201.27%20208.164%20C%20197.112%20241.371%20237.076%20254.009%20240.912%20253.623%20C%20270.645%20249.617%20264.71%20209.454%20261.213%20206.159%20C%20253.141%20198.878%20257.456%20202.306%20267.287%20194.601%20C%20275.353%20189.515%20286.17%20149.41%20280.774%20144.094%20Z'%20style='fill:%20rgba(255,%20255,%20255,%200.71);'/%3e%3c/g%3e%3c/mask%3e%3c/svg%3e"
        , z1 = { components: { IconMegaphone: a1, IconFeedback: ty, IconBug: u1, IconQuestionMark: f1, SpecialLink: o1, FloatingContainer: eu, FloatingContainerItem: tu, AboutModal: G1 }, computed: { ...Ct }, data() { return { showFeedback: !1, showAboutModal: !1 } }, methods: { openAboutModal() { this.showAboutModal = !0 }, closeAboutModal() { this.showAboutModal = !1 } } }
        , Y1 = { key: 0 };
    
    function Q1(t, e, n, r, o, i) {
        const s = fe("IconMegaphone")
            , a = fe("IconQuestionMark")
            , c = fe("FloatingContainerItem")
            , l = fe("IconFeedback")
            , h = fe("IconBug")
            , f = fe("FloatingContainer")
            , g = fe("AboutModal");
        return Z(), we(ze, null, [t.isAuthenticated ? (Z(), we("footer", Y1, [e[5] || (e[5] = Q("img", { src: W1, style: { height: "var(--spacing-4)", "margin-right": "var(--margin-s)" } }, null, -1)), e[6] || (e[6] = Q("a", { href: "https://informatik-und-autismus.ch/", target: "_blank" }, "Rafisa Informatik GmbH", -1)), e[7] || (e[7] = Q("br", null, null, -1)), Q("div", null, [Q("span", null, "2023 \xa9 Rafisa Informatik GmbH - " + Ie(t.$t("footer.copyright")), 1), e[4] || (e[4] = Q("span", null, " \xa0|\xa0 ", -1)), Q("span", null, [Q("a", { href: "#", onClick: e[0] || (e[0] = ho((...T) => i.openAboutModal && i.openAboutModal(...T), ["prevent"])) }, Ie(t.$t("footer.about")), 1)])])])) : Zt("", !0), Q("div", { class: "floating-button", onClick: e[3] || (e[3] = (...T) => t.toggleMenu && t.toggleMenu(...T)) }, [ue(s, { class: "icon", iconColor: "white", width: "42", height: "42", onClick: e[1] || (e[1] = () => o.showFeedback = !o.showFeedback) }), ue(f, { class: "floating-container", show: o.showFeedback, onClickedOutside: e[2] || (e[2] = T => o.showFeedback = !1) }, { default: Ae(() => [ue(c, { routerLinkTo: { name: "FAQ" } }, { default: Ae(() => [ue(a), e[8] || (e[8] = dt(" FAQ "))]), _: 1 }), ue(c, { externalLink: "https://forms.office.com/e/ACGMU087rs" }, { default: Ae(() => [ue(l), dt(" " + Ie(t.$t("navbar.feedback")), 1)]), _: 1 }), ue(c, { externalLink: "mailto:lernjournal@rafisa.ch" }, { default: Ae(() => [ue(h), dt(" " + Ie(t.$t("navbar.bug")), 1)]), _: 1 })]), _: 1 }, 8, ["show"])]), ue(g, { show: o.showAboutModal, onClose: i.closeAboutModal }, null, 8, ["show", "onClose"])], 64)
    }
    const J1 = Me(z1, [["render", Q1], ["__scopeId", "data-v-ae526529"]])
        , X1 = { components: { NavBar: Dk, Footer: J1, LoginView: Jk, MaintenanceWidget: Bk }, data() { return { mounted: !1 } }, computed: { ...Ct, pageLoaded() { return this.mounted && this.authInProgress === !1 } }, mounted() { this.mounted = !0 } }
        , Z1 = { ref: "mainContainer" }
        , eO = { key: 0, id: "loading-helper" }
        , tO = { key: 1, id: "auth-helper" }
        , nO = { key: 0 }
        , rO = { id: "main-content-wrapper" };
    
    function oO(t, e, n, r, o, i) {
        const s = fe("NavBar")
            , a = fe("MaintenanceWidget")
            , c = fe("RouterView")
            , l = fe("LoginView")
            , h = fe("Footer");
        return Z(), we(ze, null, [Q("div", Z1, [i.pageLoaded ? (Z(), we("div", tO, [t.isAuthenticated ? (Z(), we("div", nO, [ue(s), ue(a), Q("main", rO, [(Z(), $e(c, { key: t.$route.path }))])])) : (Z(), $e(l, { key: 1 }))])) : (Z(), we("div", eO, e[0] || (e[0] = [Q("div", { class: "login-wrapper" }, [Q("img", { id: "logo", src: nu })], -1)])))], 512), t.isAuthenticated ? (Z(), $e(h, { key: 0 })) : Zt("", !0)], 64)
    }
    const iO = Me(X1, [["render", oO], ["__scopeId", "data-v-cda06f82"]]);
    
    function sO(t) {
        if (Object.keys(t.query)
            .length) return { path: t.path, query: {}, hash: t.hash }
    }
    
    function aO(t) { if (t.hash) return { path: t.path, query: t.query, hash: "" } }
    const cO = [{
            path: "/"
            , name: "Home"
            , component: () => Ot(() => import("./Home-bVdrzYoG.js")
                .then(async m => { await m.__tla; return m }), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]))
            , meta: { skipAuth: !0, title: "Home" }
            , beforeEnter: [sO, aO]
        }, {
            path: "/articles"
            , name: "allArticles"
            , component: () => Ot(() => import("./AllArticles-9MV9xgKa.js")
                .then(async m => { await m.__tla; return m }), __vite__mapDeps([9, 1, 2, 10, 4, 11, 12, 13, 14, 15, 6, 7, 16]))
            , meta: { title: "Lernjournale" }
        }, {
            path: "/articles/new"
            , name: "newArticle"
            , component: () => Ot(() => import("./ArticleEdit-CVn4RZe8.js")
                .then(async m => { await m.__tla; return m }), __vite__mapDeps([17, 18, 19, 20, 21, 22, 11, 12, 15, 4, 23, 24]))
            , meta: { title: "Neues Lernjournal", requiredRoles: ["Lej.Apprentice"] }
        }, {
            path: "/articles/:id"
            , name: "article"
            , component: () => Ot(() => import("./ArticleRead-OPUq2sbp.js")
                .then(async m => { await m.__tla; return m }), __vite__mapDeps([25, 19, 20, 6, 7, 11, 12, 4, 26, 27, 15, 28, 18, 21, 22, 29]))
            , meta: { title: "$article" }
        }, {
            path: "/articles/:id/edit"
            , name: "editArticle"
            , component: () => Ot(() => import("./ArticleEdit-CVn4RZe8.js")
                .then(async m => { await m.__tla; return m }), __vite__mapDeps([17, 18, 19, 20, 21, 22, 11, 12, 15, 4, 23, 24]))
            , meta: { title: "$article", requiredRoles: ["Lej.Apprentice"] }
        }, {
            path: "/users/:id"
            , name: "user"
            , component: () => Ot(() => import("./UserProfile-DgnUbHpM.js")
                .then(async m => { await m.__tla; return m }), __vite__mapDeps([30, 1, 2, 26, 14, 3, 4, 5, 6, 7, 31]))
            , meta: { title: "$users" }
        }, {
            path: "/users/:id/edit"
            , name: "editUser"
            , component: () => Ot(() => import("./EditUser-CQq3-5Mo.js")
                .then(async m => { await m.__tla; return m }), __vite__mapDeps([32, 11, 12, 33]))
            , meta: { title: "Benutzer editieren", requiredRoles: ["Lej.Instructor", "Lej.SocialWorker"] }
        }, {
            path: "/faq"
            , name: "FAQ"
            , component: () => Ot(() => import("./FAQView-CWutWwVD.js")
                .then(async m => { await m.__tla; return m }), __vite__mapDeps([34, 35]))
            , meta: { title: "FAQ" }
        }, {
            path: "/users"
            , name: "Users"
            , component: () => Ot(() => import("./AllUsers-CgFoLdy4.js")
                .then(async m => { await m.__tla; return m }), __vite__mapDeps([36, 1, 2, 10, 4, 11, 12, 13, 6, 7, 37]))
            , meta: { title: "Users" }
        }, {
            path: "/templates"
            , name: "templates"
            , component: () => Ot(() => import("./Templates-CfoJMHYE.js")
                .then(async m => { await m.__tla; return m }), __vite__mapDeps([38, 1, 2, 10, 4, 11, 12, 13, 28, 21, 39, 6, 7, 40]))
            , meta: { title: "Vorlagen", requiredRoles: ["Lej.Instructor", "Lej.SocialWorker"] }
        }, {
            path: "/templates/new"
            , name: "newTemplate"
            , component: () => Ot(() => import("./TemplateEdit-BSp4RW8m.js")
                .then(async m => { await m.__tla; return m }), __vite__mapDeps([41, 18, 19, 20, 21, 22, 11, 12, 23, 42]))
            , meta: { title: "Neue Vorlage", requiredRoles: ["Lej.Instructor"] }
        }, {
            path: "/templates/:id/edit"
            , name: "editTemplate"
            , component: () => Ot(() => import("./TemplateEdit-BSp4RW8m.js")
                .then(async m => { await m.__tla; return m }), __vite__mapDeps([41, 18, 19, 20, 21, 22, 11, 12, 23, 42]))
            , meta: { title: "$template", requiredRoles: ["Lej.Instructor"] }
        }, {
            path: "/templates/:id"
            , name: "template"
            , component: () => Ot(() => import("./TemplateRead-C_z0iuf4.js")
                .then(async m => { await m.__tla; return m }), __vite__mapDeps([43, 19, 20, 28, 26, 27, 11, 12, 39, 6, 7, 44]))
            , meta: { title: "template", requiredRoles: ["Lej.SocialWorker", "Lej.Instructor"] }
        }, {
            path: "/oops"
            , name: "NotFound"
            , component: () => Ot(() => import("./NotFoundView-CW5zz-qs.js")
                .then(async m => { await m.__tla; return m }), __vite__mapDeps([45, 46]))
            , meta: { title: "NotFound", errorStatus: 404 }
        }, {
            path: "/notifications"
            , name: "Notifications"
            , component: () => Ot(() => import("./AllNotifications-pdmjK9gQ.js")
                .then(async m => { await m.__tla; return m }), __vite__mapDeps([47, 1, 2, 14, 6, 7, 48]))
            , meta: { title: "Notifications" }
        }, {
            path: "/notifications/:id"
            , name: "Notification"
            , beforeEnter: async (t, e, n) => {
                await Wt.get("notifications", t.params.id)
                    .then(r => {
                        const o = r.data
                            , i = o.context.userId ? "user" : "article";
                        Wt.patch("notifications", o._id, { readAt: new Date })
                            .then(s => { Zm(s.data) }), n({ name: i, params: { id: o.context.userId || o.context.articleId } })
                    })
                    .catch(r => {
                        console.error(r), (void 0)
                            .$toast.error((void 0)
                                .$i18n.t("global.messages.error.network"))
                    })
            }
        }, { path: "/:pathMatch(.*)*", redirect: "/oops" }]
        , wi = XR({ history: kR("/"), routes: cO, linkActiveClass: "active-link" });
    wi.beforeEach((t, e, n) => {
        let r = `${Pe.global.t("global.journal")} | `;
        switch (t.name) {
        case "Home":
            document.title = `${r}${Pe.global.t("navbar.home")||Pe.global.t("global.loading")}`;
            break;
        case "allArticles":
            document.title = `${r}${Pe.global.t("article.articles")||Pe.global.t("global.loading")}`;
            break;
        case "newArticle":
            document.title = `${r}${Pe.global.t("article.newJournal")}`;
            break;
        case "editAbsence":
            document.title = `${r}${Pe.global.t("components.offweek.edit")||Pe.global.t("global.loading")}`;
            break;
        case "Users":
            document.title = `${r}${Pe.global.t("persons.people")||Pe.global.t("global.loading")}`;
            break;
        case "templates":
            document.title = `${r}${Pe.global.t("template.templates")||Pe.global.t("global.loading")}`;
            break;
        case "newTemplate":
            document.title = `${r}${Pe.global.t("template.newTemplate")}`;
            break;
        case "FAQ":
            document.title = `${r} FAQ`;
            break;
        case "NotFound":
            document.title = `${r}${Pe.global.t("global.notFound")||Pe.global.t("global.loading")}`;
            break;
        case "Notifications":
            document.title = `${r}${Pe.global.t("notification.name")||Pe.global.t("global.loading")}`;
            break;
        default:
            document.title = `${r}${Pe.global.t("global.loading")}`
        }
        return n()
    });
    const lO = "https://graph.microsoft.com/v1.0"
        , yy = et.create();
    yy.interceptors.request.use(async t => { console.debug("AXIOS INTERCEPTOR"), console.debug("config:", t); const e = await Ct.token({ account: Ct.msalUser(), scopes: Xs.graphTokenRequest.scopes }); return console.debug("Acquired Token:", e), e && (t.headers.Authorization = `Bearer ${e.accessToken}`, console.debug("set headers: ", t.headers)), t }, t => { console.error("AXIOS INTERCEPTOR"), console.error("error:", t) });
    const uO = { get: async t => { console.debug("customGraphClient - getting graph response..."); const e = await yy.get(lO + t, { responseType: "arraybuffer" }); return console.debug("customGraphClient - got graph response:", e), e } };
    var Cy = {}
        , oa = {};
    oa.byteLength = fO;
    oa.toByteArray = gO;
    oa.fromByteArray = CO;
    var vn = []
        , Qt = []
        , dO = typeof Uint8Array < "u" ? Uint8Array : Array
        , Da = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (var Vr = 0, hO = Da.length; Vr < hO; ++Vr) vn[Vr] = Da[Vr], Qt[Da.charCodeAt(Vr)] = Vr;
    Qt[45] = 62;
    Qt[95] = 63;
    
    function _y(t) {
        var e = t.length;
        if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var n = t.indexOf("=");
        n === -1 && (n = e);
        var r = n === e ? 0 : 4 - n % 4;
        return [n, r]
    }
    
    function fO(t) {
        var e = _y(t)
            , n = e[0]
            , r = e[1];
        return (n + r) * 3 / 4 - r
    }
    
    function pO(t, e, n) { return (e + n) * 3 / 4 - n }
    
    function gO(t) {
        var e, n = _y(t)
            , r = n[0]
            , o = n[1]
            , i = new dO(pO(t, r, o))
            , s = 0
            , a = o > 0 ? r - 4 : r
            , c;
        for (c = 0; c < a; c += 4) e = Qt[t.charCodeAt(c)] << 18 | Qt[t.charCodeAt(c + 1)] << 12 | Qt[t.charCodeAt(c + 2)] << 6 | Qt[t.charCodeAt(c + 3)], i[s++] = e >> 16 & 255, i[s++] = e >> 8 & 255, i[s++] = e & 255;
        return o === 2 && (e = Qt[t.charCodeAt(c)] << 2 | Qt[t.charCodeAt(c + 1)] >> 4, i[s++] = e & 255), o === 1 && (e = Qt[t.charCodeAt(c)] << 10 | Qt[t.charCodeAt(c + 1)] << 4 | Qt[t.charCodeAt(c + 2)] >> 2, i[s++] = e >> 8 & 255, i[s++] = e & 255), i
    }
    
    function mO(t) { return vn[t >> 18 & 63] + vn[t >> 12 & 63] + vn[t >> 6 & 63] + vn[t & 63] }
    
    function yO(t, e, n) { for (var r, o = [], i = e; i < n; i += 3) r = (t[i] << 16 & 0xff0000) + (t[i + 1] << 8 & 65280) + (t[i + 2] & 255), o.push(mO(r)); return o.join("") }
    
    function CO(t) { for (var e, n = t.length, r = n % 3, o = [], i = 16383, s = 0, a = n - r; s < a; s += i) o.push(yO(t, s, s + i > a ? a : s + i)); return r === 1 ? (e = t[n - 1], o.push(vn[e >> 2] + vn[e << 4 & 63] + "==")) : r === 2 && (e = (t[n - 2] << 8) + t[n - 1], o.push(vn[e >> 10] + vn[e >> 4 & 63] + vn[e << 2 & 63] + "=")), o.join("") }
    var iu = {};
    iu.read = function (t, e, n, r, o) {
        var i, s, a = o * 8 - r - 1
            , c = (1 << a) - 1
            , l = c >> 1
            , h = -7
            , f = n ? o - 1 : 0
            , g = n ? -1 : 1
            , T = t[e + f];
        for (f += g, i = T & (1 << -h) - 1, T >>= -h, h += a; h > 0; i = i * 256 + t[e + f], f += g, h -= 8);
        for (s = i & (1 << -h) - 1, i >>= -h, h += r; h > 0; s = s * 256 + t[e + f], f += g, h -= 8);
        if (i === 0) i = 1 - l;
        else {
            if (i === c) return s ? NaN : (T ? -1 : 1) * (1 / 0);
            s = s + Math.pow(2, r), i = i - l
        }
        return (T ? -1 : 1) * s * Math.pow(2, i - r)
    };
    iu.write = function (t, e, n, r, o, i) {
        var s, a, c, l = i * 8 - o - 1
            , h = (1 << l) - 1
            , f = h >> 1
            , g = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0
            , T = r ? 0 : i - 1
            , A = r ? 1 : -1
            , b = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
        for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = h) : (s = Math.floor(Math.log(e) / Math.LN2), e * (c = Math.pow(2, -s)) < 1 && (s--, c *= 2), s + f >= 1 ? e += g / c : e += g * Math.pow(2, 1 - f), e * c >= 2 && (s++, c /= 2), s + f >= h ? (a = 0, s = h) : s + f >= 1 ? (a = (e * c - 1) * Math.pow(2, o), s = s + f) : (a = e * Math.pow(2, f - 1) * Math.pow(2, o), s = 0)); o >= 8; t[n + T] = a & 255, T += A, a /= 256, o -= 8);
        for (s = s << o | a, l += o; l > 0; t[n + T] = s & 255, T += A, s /= 256, l -= 8);
        t[n + T - A] |= b * 128
    };
    (function (t) {
        var e = oa
            , n = iu
            , r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
        t.Buffer = a, t.SlowBuffer = x, t.INSPECT_MAX_BYTES = 50;
        var o = 0x7fffffff;
        t.kMaxLength = o, a.TYPED_ARRAY_SUPPORT = i(), !a.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
        
        function i() {
            try {
                var m = new Uint8Array(1)
                    , u = { foo: function () { return 42 } };
                return Object.setPrototypeOf(u, Uint8Array.prototype), Object.setPrototypeOf(m, u), m.foo() === 42
            } catch { return !1 }
        }
        Object.defineProperty(a.prototype, "parent", { enumerable: !0, get: function () { if (a.isBuffer(this)) return this.buffer } }), Object.defineProperty(a.prototype, "offset", { enumerable: !0, get: function () { if (a.isBuffer(this)) return this.byteOffset } });
        
        function s(m) { if (m > o) throw new RangeError('The value "' + m + '" is invalid for option "size"'); var u = new Uint8Array(m); return Object.setPrototypeOf(u, a.prototype), u }
        
        function a(m, u, d) { if (typeof m == "number") { if (typeof u == "string") throw new TypeError('The "string" argument must be of type string. Received type number'); return f(m) } return c(m, u, d) } a.poolSize = 8192;
        
        function c(m, u, d) { if (typeof m == "string") return g(m, u); if (ArrayBuffer.isView(m)) return A(m); if (m == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof m); if (E(m, ArrayBuffer) || m && E(m.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (E(m, SharedArrayBuffer) || m && E(m.buffer, SharedArrayBuffer))) return b(m, u, d); if (typeof m == "number") throw new TypeError('The "value" argument must not be of type number. Received type number'); var C = m.valueOf && m.valueOf(); if (C != null && C !== m) return a.from(C, u, d); var p = k(m); if (p) return p; if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof m[Symbol.toPrimitive] == "function") return a.from(m[Symbol.toPrimitive]("string"), u, d); throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof m) } a.from = function (m, u, d) { return c(m, u, d) }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array);
        
        function l(m) { if (typeof m != "number") throw new TypeError('"size" argument must be of type number'); if (m < 0) throw new RangeError('The value "' + m + '" is invalid for option "size"') }
        
        function h(m, u, d) {
            return l(m), m <= 0 ? s(m) : u !== void 0 ? typeof d == "string" ? s(m)
                .fill(u, d) : s(m)
                .fill(u) : s(m)
        }
        a.alloc = function (m, u, d) { return h(m, u, d) };
        
        function f(m) { return l(m), s(m < 0 ? 0 : O(m) | 0) } a.allocUnsafe = function (m) { return f(m) }, a.allocUnsafeSlow = function (m) { return f(m) };
        
        function g(m, u) {
            if ((typeof u != "string" || u === "") && (u = "utf8"), !a.isEncoding(u)) throw new TypeError("Unknown encoding: " + u);
            var d = I(m, u) | 0
                , C = s(d)
                , p = C.write(m, u);
            return p !== d && (C = C.slice(0, p)), C
        }
        
        function T(m) { for (var u = m.length < 0 ? 0 : O(m.length) | 0, d = s(u), C = 0; C < u; C += 1) d[C] = m[C] & 255; return d }
        
        function A(m) { if (E(m, Uint8Array)) { var u = new Uint8Array(m); return b(u.buffer, u.byteOffset, u.byteLength) } return T(m) }
        
        function b(m, u, d) { if (u < 0 || m.byteLength < u) throw new RangeError('"offset" is outside of buffer bounds'); if (m.byteLength < u + (d || 0)) throw new RangeError('"length" is outside of buffer bounds'); var C; return u === void 0 && d === void 0 ? C = new Uint8Array(m) : d === void 0 ? C = new Uint8Array(m, u) : C = new Uint8Array(m, u, d), Object.setPrototypeOf(C, a.prototype), C }
        
        function k(m) {
            if (a.isBuffer(m)) {
                var u = O(m.length) | 0
                    , d = s(u);
                return d.length === 0 || m.copy(d, 0, 0, u), d
            }
            if (m.length !== void 0) return typeof m.length != "number" || _(m.length) ? s(0) : T(m);
            if (m.type === "Buffer" && Array.isArray(m.data)) return T(m.data)
        }
        
        function O(m) { if (m >= o) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes"); return m | 0 }
        
        function x(m) { return +m != m && (m = 0), a.alloc(+m) } a.isBuffer = function (u) { return u != null && u._isBuffer === !0 && u !== a.prototype }, a.compare = function (u, d) {
            if (E(u, Uint8Array) && (u = a.from(u, u.offset, u.byteLength)), E(d, Uint8Array) && (d = a.from(d, d.offset, d.byteLength)), !a.isBuffer(u) || !a.isBuffer(d)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
            if (u === d) return 0;
            for (var C = u.length, p = d.length, y = 0, v = Math.min(C, p); y < v; ++y)
                if (u[y] !== d[y]) { C = u[y], p = d[y]; break } return C < p ? -1 : p < C ? 1 : 0
        }, a.isEncoding = function (u) {
            switch (String(u)
                .toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1
            }
        }, a.concat = function (u, d) {
            if (!Array.isArray(u)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (u.length === 0) return a.alloc(0);
            var C;
            if (d === void 0)
                for (d = 0, C = 0; C < u.length; ++C) d += u[C].length;
            var p = a.allocUnsafe(d)
                , y = 0;
            for (C = 0; C < u.length; ++C) {
                var v = u[C];
                if (E(v, Uint8Array)) y + v.length > p.length ? a.from(v)
                    .copy(p, y) : Uint8Array.prototype.set.call(p, v, y);
                else if (a.isBuffer(v)) v.copy(p, y);
                else throw new TypeError('"list" argument must be an Array of Buffers');
                y += v.length
            }
            return p
        };
        
        function I(m, u) {
            if (a.isBuffer(m)) return m.length;
            if (ArrayBuffer.isView(m) || E(m, ArrayBuffer)) return m.byteLength;
            if (typeof m != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof m);
            var d = m.length
                , C = arguments.length > 2 && arguments[2] === !0;
            if (!C && d === 0) return 0;
            for (var p = !1;;) switch (u) {
            case "ascii":
            case "latin1":
            case "binary":
                return d;
            case "utf8":
            case "utf-8":
                return Y(m)
                    .length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return d * 2;
            case "hex":
                return d >>> 1;
            case "base64":
                return _e(m)
                    .length;
            default:
                if (p) return C ? -1 : Y(m)
                    .length;
                u = ("" + u)
                    .toLowerCase(), p = !0
            }
        }
        a.byteLength = I;
        
        function w(m, u, d) {
            var C = !1;
            if ((u === void 0 || u < 0) && (u = 0), u > this.length || ((d === void 0 || d > this.length) && (d = this.length), d <= 0) || (d >>>= 0, u >>>= 0, d <= u)) return "";
            for (m || (m = "utf8");;) switch (m) {
            case "hex":
                return gt(this, u, d);
            case "utf8":
            case "utf-8":
                return He(this, u, d);
            case "ascii":
                return Ee(this, u, d);
            case "latin1":
            case "binary":
                return Ce(this, u, d);
            case "base64":
                return se(this, u, d);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return vt(this, u, d);
            default:
                if (C) throw new TypeError("Unknown encoding: " + m);
                m = (m + "")
                    .toLowerCase(), C = !0
            }
        }
        a.prototype._isBuffer = !0;
        
        function M(m, u, d) {
            var C = m[u];
            m[u] = m[d], m[d] = C
        }
        a.prototype.swap16 = function () { var u = this.length; if (u % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits"); for (var d = 0; d < u; d += 2) M(this, d, d + 1); return this }, a.prototype.swap32 = function () { var u = this.length; if (u % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits"); for (var d = 0; d < u; d += 4) M(this, d, d + 3), M(this, d + 1, d + 2); return this }, a.prototype.swap64 = function () { var u = this.length; if (u % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits"); for (var d = 0; d < u; d += 8) M(this, d, d + 7), M(this, d + 1, d + 6), M(this, d + 2, d + 5), M(this, d + 3, d + 4); return this }, a.prototype.toString = function () { var u = this.length; return u === 0 ? "" : arguments.length === 0 ? He(this, 0, u) : w.apply(this, arguments) }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function (u) { if (!a.isBuffer(u)) throw new TypeError("Argument must be a Buffer"); return this === u ? !0 : a.compare(this, u) === 0 }, a.prototype.inspect = function () {
            var u = ""
                , d = t.INSPECT_MAX_BYTES;
            return u = this.toString("hex", 0, d)
                .replace(/(.{2})/g, "$1 ")
                .trim(), this.length > d && (u += " ... "), "<Buffer " + u + ">"
        }, r && (a.prototype[r] = a.prototype.inspect), a.prototype.compare = function (u, d, C, p, y) {
            if (E(u, Uint8Array) && (u = a.from(u, u.offset, u.byteLength)), !a.isBuffer(u)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof u);
            if (d === void 0 && (d = 0), C === void 0 && (C = u ? u.length : 0), p === void 0 && (p = 0), y === void 0 && (y = this.length), d < 0 || C > u.length || p < 0 || y > this.length) throw new RangeError("out of range index");
            if (p >= y && d >= C) return 0;
            if (p >= y) return -1;
            if (d >= C) return 1;
            if (d >>>= 0, C >>>= 0, p >>>= 0, y >>>= 0, this === u) return 0;
            for (var v = y - p, D = C - d, $ = Math.min(v, D), B = this.slice(p, y), S = u.slice(d, C), P = 0; P < $; ++P)
                if (B[P] !== S[P]) { v = B[P], D = S[P]; break } return v < D ? -1 : D < v ? 1 : 0
        };
        
        function L(m, u, d, C, p) {
            if (m.length === 0) return -1;
            if (typeof d == "string" ? (C = d, d = 0) : d > 0x7fffffff ? d = 0x7fffffff : d < -0x80000000 && (d = -0x80000000), d = +d, _(d) && (d = p ? 0 : m.length - 1), d < 0 && (d = m.length + d), d >= m.length) {
                if (p) return -1;
                d = m.length - 1
            } else if (d < 0)
                if (p) d = 0;
                else return -1;
            if (typeof u == "string" && (u = a.from(u, C)), a.isBuffer(u)) return u.length === 0 ? -1 : K(m, u, d, C, p);
            if (typeof u == "number") return u = u & 255, typeof Uint8Array.prototype.indexOf == "function" ? p ? Uint8Array.prototype.indexOf.call(m, u, d) : Uint8Array.prototype.lastIndexOf.call(m, u, d) : K(m, [u], d, C, p);
            throw new TypeError("val must be string, number or Buffer")
        }
        
        function K(m, u, d, C, p) {
            var y = 1
                , v = m.length
                , D = u.length;
            if (C !== void 0 && (C = String(C)
                    .toLowerCase(), C === "ucs2" || C === "ucs-2" || C === "utf16le" || C === "utf-16le")) {
                if (m.length < 2 || u.length < 2) return -1;
                y = 2, v /= 2, D /= 2, d /= 2
            }
            
            function $(re, Ge) { return y === 1 ? re[Ge] : re.readUInt16BE(Ge * y) }
            var B;
            if (p) {
                var S = -1;
                for (B = d; B < v; B++)
                    if ($(m, B) === $(u, S === -1 ? 0 : B - S)) { if (S === -1 && (S = B), B - S + 1 === D) return S * y } else S !== -1 && (B -= B - S), S = -1
            } else
                for (d + D > v && (d = v - D), B = d; B >= 0; B--) {
                    for (var P = !0, ne = 0; ne < D; ne++)
                        if ($(m, B + ne) !== $(u, ne)) { P = !1; break } if (P) return B
                }
            return -1
        }
        a.prototype.includes = function (u, d, C) { return this.indexOf(u, d, C) !== -1 }, a.prototype.indexOf = function (u, d, C) { return L(this, u, d, C, !0) }, a.prototype.lastIndexOf = function (u, d, C) { return L(this, u, d, C, !1) };
        
        function G(m, u, d, C) {
            d = Number(d) || 0;
            var p = m.length - d;
            C ? (C = Number(C), C > p && (C = p)) : C = p;
            var y = u.length;
            C > y / 2 && (C = y / 2);
            for (var v = 0; v < C; ++v) {
                var D = parseInt(u.substr(v * 2, 2), 16);
                if (_(D)) return v;
                m[d + v] = D
            }
            return v
        }
        
        function H(m, u, d, C) { return ke(Y(u, m.length - d), m, d, C) }
        
        function te(m, u, d, C) { return ke(z(u), m, d, C) }
        
        function de(m, u, d, C) { return ke(_e(u), m, d, C) }
        
        function V(m, u, d, C) { return ke(X(u, m.length - d), m, d, C) } a.prototype.write = function (u, d, C, p) {
            if (d === void 0) p = "utf8", C = this.length, d = 0;
            else if (C === void 0 && typeof d == "string") p = d, C = this.length, d = 0;
            else if (isFinite(d)) d = d >>> 0, isFinite(C) ? (C = C >>> 0, p === void 0 && (p = "utf8")) : (p = C, C = void 0);
            else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            var y = this.length - d;
            if ((C === void 0 || C > y) && (C = y), u.length > 0 && (C < 0 || d < 0) || d > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            p || (p = "utf8");
            for (var v = !1;;) switch (p) {
            case "hex":
                return G(this, u, d, C);
            case "utf8":
            case "utf-8":
                return H(this, u, d, C);
            case "ascii":
            case "latin1":
            case "binary":
                return te(this, u, d, C);
            case "base64":
                return de(this, u, d, C);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return V(this, u, d, C);
            default:
                if (v) throw new TypeError("Unknown encoding: " + p);
                p = ("" + p)
                    .toLowerCase(), v = !0
            }
        }, a.prototype.toJSON = function () { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) } };
        
        function se(m, u, d) { return u === 0 && d === m.length ? e.fromByteArray(m) : e.fromByteArray(m.slice(u, d)) }
        
        function He(m, u, d) {
            d = Math.min(m.length, d);
            for (var C = [], p = u; p < d;) {
                var y = m[p]
                    , v = null
                    , D = y > 239 ? 4 : y > 223 ? 3 : y > 191 ? 2 : 1;
                if (p + D <= d) {
                    var $, B, S, P;
                    switch (D) {
                    case 1:
                        y < 128 && (v = y);
                        break;
                    case 2:
                        $ = m[p + 1], ($ & 192) === 128 && (P = (y & 31) << 6 | $ & 63, P > 127 && (v = P));
                        break;
                    case 3:
                        $ = m[p + 1], B = m[p + 2], ($ & 192) === 128 && (B & 192) === 128 && (P = (y & 15) << 12 | ($ & 63) << 6 | B & 63, P > 2047 && (P < 55296 || P > 57343) && (v = P));
                        break;
                    case 4:
                        $ = m[p + 1], B = m[p + 2], S = m[p + 3], ($ & 192) === 128 && (B & 192) === 128 && (S & 192) === 128 && (P = (y & 15) << 18 | ($ & 63) << 12 | (B & 63) << 6 | S & 63, P > 65535 && P < 1114112 && (v = P))
                    }
                }
                v === null ? (v = 65533, D = 1) : v > 65535 && (v -= 65536, C.push(v >>> 10 & 1023 | 55296), v = 56320 | v & 1023), C.push(v), p += D
            }
            return Se(C)
        }
        var tt = 4096;
        
        function Se(m) { var u = m.length; if (u <= tt) return String.fromCharCode.apply(String, m); for (var d = "", C = 0; C < u;) d += String.fromCharCode.apply(String, m.slice(C, C += tt)); return d }
        
        function Ee(m, u, d) {
            var C = "";
            d = Math.min(m.length, d);
            for (var p = u; p < d; ++p) C += String.fromCharCode(m[p] & 127);
            return C
        }
        
        function Ce(m, u, d) {
            var C = "";
            d = Math.min(m.length, d);
            for (var p = u; p < d; ++p) C += String.fromCharCode(m[p]);
            return C
        }
        
        function gt(m, u, d) {
            var C = m.length;
            (!u || u < 0) && (u = 0), (!d || d < 0 || d > C) && (d = C);
            for (var p = "", y = u; y < d; ++y) p += R[m[y]];
            return p
        }
        
        function vt(m, u, d) { for (var C = m.slice(u, d), p = "", y = 0; y < C.length - 1; y += 2) p += String.fromCharCode(C[y] + C[y + 1] * 256); return p } a.prototype.slice = function (u, d) {
            var C = this.length;
            u = ~~u, d = d === void 0 ? C : ~~d, u < 0 ? (u += C, u < 0 && (u = 0)) : u > C && (u = C), d < 0 ? (d += C, d < 0 && (d = 0)) : d > C && (d = C), d < u && (d = u);
            var p = this.subarray(u, d);
            return Object.setPrototypeOf(p, a.prototype), p
        };
        
        function ge(m, u, d) { if (m % 1 !== 0 || m < 0) throw new RangeError("offset is not uint"); if (m + u > d) throw new RangeError("Trying to access beyond buffer length") } a.prototype.readUintLE = a.prototype.readUIntLE = function (u, d, C) { u = u >>> 0, d = d >>> 0, C || ge(u, d, this.length); for (var p = this[u], y = 1, v = 0; ++v < d && (y *= 256);) p += this[u + v] * y; return p }, a.prototype.readUintBE = a.prototype.readUIntBE = function (u, d, C) { u = u >>> 0, d = d >>> 0, C || ge(u, d, this.length); for (var p = this[u + --d], y = 1; d > 0 && (y *= 256);) p += this[u + --d] * y; return p }, a.prototype.readUint8 = a.prototype.readUInt8 = function (u, d) { return u = u >>> 0, d || ge(u, 1, this.length), this[u] }, a.prototype.readUint16LE = a.prototype.readUInt16LE = function (u, d) { return u = u >>> 0, d || ge(u, 2, this.length), this[u] | this[u + 1] << 8 }, a.prototype.readUint16BE = a.prototype.readUInt16BE = function (u, d) { return u = u >>> 0, d || ge(u, 2, this.length), this[u] << 8 | this[u + 1] }, a.prototype.readUint32LE = a.prototype.readUInt32LE = function (u, d) { return u = u >>> 0, d || ge(u, 4, this.length), (this[u] | this[u + 1] << 8 | this[u + 2] << 16) + this[u + 3] * 0x1000000 }, a.prototype.readUint32BE = a.prototype.readUInt32BE = function (u, d) { return u = u >>> 0, d || ge(u, 4, this.length), this[u] * 0x1000000 + (this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3]) }, a.prototype.readIntLE = function (u, d, C) { u = u >>> 0, d = d >>> 0, C || ge(u, d, this.length); for (var p = this[u], y = 1, v = 0; ++v < d && (y *= 256);) p += this[u + v] * y; return y *= 128, p >= y && (p -= Math.pow(2, 8 * d)), p }, a.prototype.readIntBE = function (u, d, C) { u = u >>> 0, d = d >>> 0, C || ge(u, d, this.length); for (var p = d, y = 1, v = this[u + --p]; p > 0 && (y *= 256);) v += this[u + --p] * y; return y *= 128, v >= y && (v -= Math.pow(2, 8 * d)), v }, a.prototype.readInt8 = function (u, d) { return u = u >>> 0, d || ge(u, 1, this.length), this[u] & 128 ? (255 - this[u] + 1) * -1 : this[u] }, a.prototype.readInt16LE = function (u, d) { u = u >>> 0, d || ge(u, 2, this.length); var C = this[u] | this[u + 1] << 8; return C & 32768 ? C | 0xffff0000 : C }, a.prototype.readInt16BE = function (u, d) { u = u >>> 0, d || ge(u, 2, this.length); var C = this[u + 1] | this[u] << 8; return C & 32768 ? C | 0xffff0000 : C }, a.prototype.readInt32LE = function (u, d) { return u = u >>> 0, d || ge(u, 4, this.length), this[u] | this[u + 1] << 8 | this[u + 2] << 16 | this[u + 3] << 24 }, a.prototype.readInt32BE = function (u, d) { return u = u >>> 0, d || ge(u, 4, this.length), this[u] << 24 | this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3] }, a.prototype.readFloatLE = function (u, d) { return u = u >>> 0, d || ge(u, 4, this.length), n.read(this, u, !0, 23, 4) }, a.prototype.readFloatBE = function (u, d) { return u = u >>> 0, d || ge(u, 4, this.length), n.read(this, u, !1, 23, 4) }, a.prototype.readDoubleLE = function (u, d) { return u = u >>> 0, d || ge(u, 8, this.length), n.read(this, u, !0, 52, 8) }, a.prototype.readDoubleBE = function (u, d) { return u = u >>> 0, d || ge(u, 8, this.length), n.read(this, u, !1, 52, 8) };
        
        function ve(m, u, d, C, p, y) { if (!a.isBuffer(m)) throw new TypeError('"buffer" argument must be a Buffer instance'); if (u > p || u < y) throw new RangeError('"value" argument is out of bounds'); if (d + C > m.length) throw new RangeError("Index out of range") } a.prototype.writeUintLE = a.prototype.writeUIntLE = function (u, d, C, p) {
            if (u = +u, d = d >>> 0, C = C >>> 0, !p) {
                var y = Math.pow(2, 8 * C) - 1;
                ve(this, u, d, C, y, 0)
            }
            var v = 1
                , D = 0;
            for (this[d] = u & 255; ++D < C && (v *= 256);) this[d + D] = u / v & 255;
            return d + C
        }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function (u, d, C, p) {
            if (u = +u, d = d >>> 0, C = C >>> 0, !p) {
                var y = Math.pow(2, 8 * C) - 1;
                ve(this, u, d, C, y, 0)
            }
            var v = C - 1
                , D = 1;
            for (this[d + v] = u & 255; --v >= 0 && (D *= 256);) this[d + v] = u / D & 255;
            return d + C
        }, a.prototype.writeUint8 = a.prototype.writeUInt8 = function (u, d, C) { return u = +u, d = d >>> 0, C || ve(this, u, d, 1, 255, 0), this[d] = u & 255, d + 1 }, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function (u, d, C) { return u = +u, d = d >>> 0, C || ve(this, u, d, 2, 65535, 0), this[d] = u & 255, this[d + 1] = u >>> 8, d + 2 }, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function (u, d, C) { return u = +u, d = d >>> 0, C || ve(this, u, d, 2, 65535, 0), this[d] = u >>> 8, this[d + 1] = u & 255, d + 2 }, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function (u, d, C) { return u = +u, d = d >>> 0, C || ve(this, u, d, 4, 0xffffffff, 0), this[d + 3] = u >>> 24, this[d + 2] = u >>> 16, this[d + 1] = u >>> 8, this[d] = u & 255, d + 4 }, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function (u, d, C) { return u = +u, d = d >>> 0, C || ve(this, u, d, 4, 0xffffffff, 0), this[d] = u >>> 24, this[d + 1] = u >>> 16, this[d + 2] = u >>> 8, this[d + 3] = u & 255, d + 4 }, a.prototype.writeIntLE = function (u, d, C, p) {
            if (u = +u, d = d >>> 0, !p) {
                var y = Math.pow(2, 8 * C - 1);
                ve(this, u, d, C, y - 1, -y)
            }
            var v = 0
                , D = 1
                , $ = 0;
            for (this[d] = u & 255; ++v < C && (D *= 256);) u < 0 && $ === 0 && this[d + v - 1] !== 0 && ($ = 1), this[d + v] = (u / D >> 0) - $ & 255;
            return d + C
        }, a.prototype.writeIntBE = function (u, d, C, p) {
            if (u = +u, d = d >>> 0, !p) {
                var y = Math.pow(2, 8 * C - 1);
                ve(this, u, d, C, y - 1, -y)
            }
            var v = C - 1
                , D = 1
                , $ = 0;
            for (this[d + v] = u & 255; --v >= 0 && (D *= 256);) u < 0 && $ === 0 && this[d + v + 1] !== 0 && ($ = 1), this[d + v] = (u / D >> 0) - $ & 255;
            return d + C
        }, a.prototype.writeInt8 = function (u, d, C) { return u = +u, d = d >>> 0, C || ve(this, u, d, 1, 127, -128), u < 0 && (u = 255 + u + 1), this[d] = u & 255, d + 1 }, a.prototype.writeInt16LE = function (u, d, C) { return u = +u, d = d >>> 0, C || ve(this, u, d, 2, 32767, -32768), this[d] = u & 255, this[d + 1] = u >>> 8, d + 2 }, a.prototype.writeInt16BE = function (u, d, C) { return u = +u, d = d >>> 0, C || ve(this, u, d, 2, 32767, -32768), this[d] = u >>> 8, this[d + 1] = u & 255, d + 2 }, a.prototype.writeInt32LE = function (u, d, C) { return u = +u, d = d >>> 0, C || ve(this, u, d, 4, 0x7fffffff, -0x80000000), this[d] = u & 255, this[d + 1] = u >>> 8, this[d + 2] = u >>> 16, this[d + 3] = u >>> 24, d + 4 }, a.prototype.writeInt32BE = function (u, d, C) { return u = +u, d = d >>> 0, C || ve(this, u, d, 4, 0x7fffffff, -0x80000000), u < 0 && (u = 0xffffffff + u + 1), this[d] = u >>> 24, this[d + 1] = u >>> 16, this[d + 2] = u >>> 8, this[d + 3] = u & 255, d + 4 };
        
        function kt(m, u, d, C, p, y) { if (d + C > m.length) throw new RangeError("Index out of range"); if (d < 0) throw new RangeError("Index out of range") }
        
        function Et(m, u, d, C, p) { return u = +u, d = d >>> 0, p || kt(m, u, d, 4), n.write(m, u, d, C, 23, 4), d + 4 } a.prototype.writeFloatLE = function (u, d, C) { return Et(this, u, d, !0, C) }, a.prototype.writeFloatBE = function (u, d, C) { return Et(this, u, d, !1, C) };
        
        function Bt(m, u, d, C, p) { return u = +u, d = d >>> 0, p || kt(m, u, d, 8), n.write(m, u, d, C, 52, 8), d + 8 } a.prototype.writeDoubleLE = function (u, d, C) { return Bt(this, u, d, !0, C) }, a.prototype.writeDoubleBE = function (u, d, C) { return Bt(this, u, d, !1, C) }, a.prototype.copy = function (u, d, C, p) {
            if (!a.isBuffer(u)) throw new TypeError("argument should be a Buffer");
            if (C || (C = 0), !p && p !== 0 && (p = this.length), d >= u.length && (d = u.length), d || (d = 0), p > 0 && p < C && (p = C), p === C || u.length === 0 || this.length === 0) return 0;
            if (d < 0) throw new RangeError("targetStart out of bounds");
            if (C < 0 || C >= this.length) throw new RangeError("Index out of range");
            if (p < 0) throw new RangeError("sourceEnd out of bounds");
            p > this.length && (p = this.length), u.length - d < p - C && (p = u.length - d + C);
            var y = p - C;
            return this === u && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(d, C, p) : Uint8Array.prototype.set.call(u, this.subarray(C, p), d), y
        }, a.prototype.fill = function (u, d, C, p) {
            if (typeof u == "string") {
                if (typeof d == "string" ? (p = d, d = 0, C = this.length) : typeof C == "string" && (p = C, C = this.length), p !== void 0 && typeof p != "string") throw new TypeError("encoding must be a string");
                if (typeof p == "string" && !a.isEncoding(p)) throw new TypeError("Unknown encoding: " + p);
                if (u.length === 1) {
                    var y = u.charCodeAt(0);
                    (p === "utf8" && y < 128 || p === "latin1") && (u = y)
                }
            } else typeof u == "number" ? u = u & 255 : typeof u == "boolean" && (u = Number(u));
            if (d < 0 || this.length < d || this.length < C) throw new RangeError("Out of range index");
            if (C <= d) return this;
            d = d >>> 0, C = C === void 0 ? this.length : C >>> 0, u || (u = 0);
            var v;
            if (typeof u == "number")
                for (v = d; v < C; ++v) this[v] = u;
            else {
                var D = a.isBuffer(u) ? u : a.from(u, p)
                    , $ = D.length;
                if ($ === 0) throw new TypeError('The value "' + u + '" is invalid for argument "value"');
                for (v = 0; v < C - d; ++v) this[v + d] = D[v % $]
            }
            return this
        };
        var nt = /[^+/0-9A-Za-z-_]/g;
        
        function j(m) {
            if (m = m.split("=")[0], m = m.trim()
                .replace(nt, ""), m.length < 2) return "";
            for (; m.length % 4 !== 0;) m = m + "=";
            return m
        }
        
        function Y(m, u) {
            u = u || 1 / 0;
            for (var d, C = m.length, p = null, y = [], v = 0; v < C; ++v) {
                if (d = m.charCodeAt(v), d > 55295 && d < 57344) {
                    if (!p) {
                        if (d > 56319) {
                            (u -= 3) > -1 && y.push(239, 191, 189);
                            continue
                        } else if (v + 1 === C) {
                            (u -= 3) > -1 && y.push(239, 191, 189);
                            continue
                        }
                        p = d;
                        continue
                    }
                    if (d < 56320) {
                        (u -= 3) > -1 && y.push(239, 191, 189), p = d;
                        continue
                    }
                    d = (p - 55296 << 10 | d - 56320) + 65536
                } else p && (u -= 3) > -1 && y.push(239, 191, 189);
                if (p = null, d < 128) {
                    if ((u -= 1) < 0) break;
                    y.push(d)
                } else if (d < 2048) {
                    if ((u -= 2) < 0) break;
                    y.push(d >> 6 | 192, d & 63 | 128)
                } else if (d < 65536) {
                    if ((u -= 3) < 0) break;
                    y.push(d >> 12 | 224, d >> 6 & 63 | 128, d & 63 | 128)
                } else if (d < 1114112) {
                    if ((u -= 4) < 0) break;
                    y.push(d >> 18 | 240, d >> 12 & 63 | 128, d >> 6 & 63 | 128, d & 63 | 128)
                } else throw new Error("Invalid code point")
            }
            return y
        }
        
        function z(m) { for (var u = [], d = 0; d < m.length; ++d) u.push(m.charCodeAt(d) & 255); return u }
        
        function X(m, u) { for (var d, C, p, y = [], v = 0; v < m.length && !((u -= 2) < 0); ++v) d = m.charCodeAt(v), C = d >> 8, p = d % 256, y.push(p), y.push(C); return y }
        
        function _e(m) { return e.toByteArray(j(m)) }
        
        function ke(m, u, d, C) { for (var p = 0; p < C && !(p + d >= u.length || p >= m.length); ++p) u[p + d] = m[p]; return p }
        
        function E(m, u) { return m instanceof u || m != null && m.constructor != null && m.constructor.name != null && m.constructor.name === u.name }
        
        function _(m) { return m !== m }
        var R = function () {
            for (var m = "0123456789abcdef", u = new Array(256), d = 0; d < 16; ++d)
                for (var C = d * 16, p = 0; p < 16; ++p) u[C + p] = m[d] + m[p];
            return u
        }()
    })(Cy);
    const _O = async () => {
        console.debug("onLoggedInCallbackFn - msalUser:", Ct.msalUser());
        const t = Ct.msalUser()
            , e = t.idTokenClaims.upn || t.username;
        console.debug("onLoggedInCallbackFn - Logging in to App"), await Wt.post("login")
            .then(n => { console.debug("onLoggedInCallbackFn - userlogin repsone:", n, e), localStorage.setItem("loginHint", e), Bl(n.data), vO(n.data._id) })
            .catch(n => { console.error(n) })
    }, TO = async () => {
        console.debug("onPageLoad - Trying to load localUser");
        const t = Ct.msalUser();
        t ? await Wt.get("users", { azureId: t.idTokenClaims.oid })
            .then(e => {
                const n = e.data;
                Bl(n), console.debug("onPageLoad - Succesfully loaded localUser", n)
            })
            .catch(e => { console.error("onPageLoad - There was an error while trying to load the localUser", e) }) : console.warn("onPageLoad - Active msal session missing. localUser cannot be loaded. Login required.")
    };
    
    function vO(t) {
        console.debug("updateUserPhoto - attempting to load user photo from AAD..."), uO.get("/me/photos('240x240')/$value")
            .then(e => {
                const r = new Cy.Buffer.from(e.data, "binary")
                    .toString("base64");
                console.debug("updateUserPhoto - user photo from AAD received"), Wt.patch("users/" + t + "/photo", null, { photo: r })
                    .then(o => { console.debug("updateUserPhoto - succesfully updated photo of user", { response: o }), Bl(o.data) })
                    .catch(o => { console.error("Something went wrong while trying to update the user's photo", o) })
            })
            .catch(e => { console.error("There was an error while trying to load the users photo", e) })
    }
    const Si = _T(iO)
        , Ty = new Hl(Xs.msalConfig);
    await Ty.initialize();
    Si.use(wi);
    Si.use(Pe);
    Si.use(qA, { config: Xs, msalInstance: Ty, onLoggedInCallbackFn: _O, onPageLoadCallbackFn: TO });
    Si.use(Gl, { position: "top-right", maxToasts: 5 });
    let Is = !1
        , vy = !1;
    wi.beforeEach(async (t, e, n) => {
        if (t.meta.skipAuth) return n();
        vy || await new Promise(a => setTimeout(a, 100));
        const r = Ct.msalUserRoles()
            , o = t.meta.requiredRoles;
        if (!o || o.length === 0) return n();
        if (!r || r.length === 0) return n({ name: "NotFound", meta: { errorStatus: 403 } });
        if (!o.some(a => r.includes(a) || r.includes("@ALL"))) return console.log("Access Denied"), Hn({ response: { status: 403 } }), Is = !0, n({ name: "NotFound", meta: { errorStatus: 403 } });
        async function s(a, c) {
            const l = a.params.id
                , h = a.name === "editArticle" ? "articles" : "templates";
            try {
                const f = await Wt.get(h, l)
                    , g = f.data;
                return console.log("data", g, h, f), Ct.isAuthenticated() && Ct.localUser()
                    ._id === g.author_id ? c() : (Hn({ response: { status: 403 } }), Is = !0, c({ name: "NotFound", meta: { errorStatus: 403 } }))
            } catch { return c("/oops") }
        }
        return t.name === "editArticle" || t.name === "editTemplate" ? s(t, n) : n()
    });
    wi.afterEach((t, e) => { t.meta.errorStatus === 404 && !Is ? (Hn({ response: { status: 404 } }), Is = !1) : t.meta.errorStatus = 403 });
    wi.isReady()
        .then(() => { vy = !0, Si.mount("#app") })
})();
export { b1 as $, bO as A, v_ as B, so as C, J0 as D, E_ as E, ze as F, it as G, wO as H, IO as I, sn as J, Sn as K, ry as L, ho as M, ko as N, Yu as O, RO as P, HC as Q, WR as R, tk as S, el as T, Ef as U, fp as V, PO as W, Ly as X, EO as Y, ny as Z, Me as _, Wt as a, S1 as a0, Rn as a1, ey as a2, m1 as a3, MO as a4, O1 as a5, D1 as a6, WA as a7, NO as a8, OO as a9, eu as aa, tu as ab, cr as ac, nk as ad, Zm as ae, Hn as af, Q as b, we as c, $e as d, Zt as e, ue as f, Ct as g, fe as h, dt as i, So as j, sr as k, yi as l, AO as m, Vc as n, Z as o, Le as p, yf as q, Wc as r, Gc as s, Ie as t, kO as u, Nr as v, Ae as w, Ze as x, SO as y, an as z, __tla };
