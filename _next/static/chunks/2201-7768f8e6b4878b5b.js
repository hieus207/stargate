(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2201, 54], {
    69314: function() {},
    74854: function() {},
    66602: function() {},
    85338: function() {},
    30589: function(e, t, n) {
        "use strict";
        n.d(t, {
            bridgeStore: function() {
                return eM
            },
            eQ: function() {
                return eC
            }
        });
        var a = n(27573)
          , i = n(38623)
          , s = n(98530)
          , r = n(59533)
          , o = n(24594)
          , d = n(84427)
          , u = n(82285)
          , l = n(41216)
          , p = n(41270);
        let c = p.ZP.object({
            bridge: p.ZP.string(),
            mode: p.ZP.string(),
            srcChain: p.ZP.string(),
            dstChain: p.ZP.string(),
            srcAmount: p.ZP.string(),
            dstAmount: p.ZP.string(),
            dstAmountMin: p.ZP.string(),
            srcToken: p.ZP.string(),
            dstToken: p.ZP.string(),
            srcAddress: p.ZP.string(),
            dstAddress: p.ZP.string(),
            srcWallet: p.ZP.string().nullable(),
            dstWallet: p.ZP.string().nullable(),
            dstNativeAmount: p.ZP.string(),
            srcNativeBalance: p.ZP.string(),
            dstNativeBalance: p.ZP.string(),
            status: p.ZP.enum(["success", "error"]),
            srcTxTimestamp: p.ZP.number(),
            srcTxHash: p.ZP.string(),
            error: p.ZP.string(),
            errorCode: p.ZP.string()
        }).partial();
        async function y(e) {
            let t = c.parse(e);
            return (0,
            l.j)("bridge", t)
        }
        async function m(e) {
            let t = []
              , {allowance: n, srcAmount: a} = e;
            return a.greaterThan(n) && t.push({
                type: "approve"
            }),
            t.push({
                type: "bridge"
            }),
            t
        }
        var h = n(69383)
          , f = n(59418)
          , g = n(35440)
          , v = n(24906)
          , b = n(80417)
          , T = n(26412)
          , _ = n.n(T)
          , x = n(44230)
          , w = n.n(x);
        let A = {
            STARGATE_V1: "stargate-v1",
            OFT: "oft",
            OFT_WRAPPER: "oft-wrapper"
        };
        async function k(e) {
            let t = [];
            for (let n of (await Promise.allSettled(e)))
                "fulfilled" === n.status && t.push(n.value);
            return t
        }
        var C = n(61869);
        async function E(e, t) {
            let {srcToken: n, dstToken: a, srcAddress: s, dstAddress: r, srcAmount: o, dstAmountMin: d, dstNativeAmount: u} = e;
            async function l(e, t) {
                var l, p;
                let {mode: c} = t
                  , y = await O(e, n, a, t.mode).catch(M("getExtraGas failed"));
                if (P(y))
                    return {
                        srcToken: n,
                        dstToken: a,
                        name: F(e),
                        mode: t.mode,
                        option: t,
                        input: {
                            srcAmount: o,
                            dstAmountMin: d
                        },
                        dstAmount: void 0,
                        bridge: e,
                        error: y
                    };
                let m = u.equalTo(0) ? i.FA.forV1(y) : i.FA.forV2({
                    extraGas: y,
                    dstNativeAddress: r,
                    dstNativeAmount: u
                })
                  , f = {
                    mode: c,
                    srcChainKey: n.chainKey,
                    dstChainKey: a.chainKey,
                    srcToken: n,
                    dstToken: a,
                    srcAmount: o,
                    dstAmountMin: d,
                    dstNativeAmount: u,
                    srcAddress: s,
                    dstAddress: r,
                    adapterParams: m
                }
                  , [b,T,_,x,w,k] = await Promise.all([e.getMessageFee(f).catch(M("getMessageFee failed")), e.getMessageFee({
                    ...f,
                    adapterParams: (null === (l = m.dstNativeAmount) || void 0 === l ? void 0 : l.greaterThan(0)) ? i.FA.forV2({
                        dstNativeAddress: null !== (p = m.dstNativeAddress) && void 0 !== p ? p : g.dE,
                        dstNativeAmount: m.dstNativeAmount.multiply(0),
                        extraGas: m.extraGas
                    }) : m
                }).then(e => e.nativeFee).catch(M("getGasCost failed")), e.getOutput({
                    ...f
                }).catch(M("getOutput failed")), e.getLimit({
                    ...f
                }).catch(M("getLimit failed")), e.getAllowance({
                    token: n,
                    address: s
                }).catch(M("getAllowance failed")), e.getDuration({
                    mode: c,
                    srcToken: n,
                    dstToken: a
                }).catch(M("getDuration failed"))])
                  , E = P(x) ? void 0 : x.lessThan(o) ? x : o
                  , I = P(_) ? void 0 : _.dstAmount;
                return {
                    route: function(e) {
                        if (e instanceof v.fj)
                            return A.STARGATE_V1;
                        if (e instanceof C.e5)
                            return A.OFT;
                        if (e instanceof h.C2)
                            return A.OFT_WRAPPER;
                        throw Error("Unknown route type ".concat(e.constructor.name))
                    }(e),
                    name: F(e),
                    option: t,
                    mode: c,
                    srcToken: n,
                    dstToken: a,
                    adapterParams: m,
                    srcAmount: E,
                    srcAmountMax: S(x),
                    dstAmount: I,
                    dstAmountMin: d,
                    input: {
                        srcAmount: o,
                        dstAmountMin: d
                    },
                    duration: P(k) ? void 0 : {
                        estimated: k
                    },
                    allowance: S(w),
                    output: S(_),
                    gasCost: S(T),
                    messageFee: S(b),
                    bridge: e,
                    dstNativeAmount: u,
                    srcAddress: s,
                    dstAddress: r,
                    error: function(e) {
                        for (let t in e) {
                            let n = e[t];
                            if (P(n))
                                return n
                        }
                    }({
                        messageFee: b,
                        gasCost: T,
                        output: _,
                        srcAmountMax: x,
                        allowance: w,
                        duration: k
                    })
                }
            }
            return k(t.map(async e => {
                let {options: t} = await I(e, n, a);
                return k(t.map(async t => l(e, t)))
            }
            )).then(e => e.flat())
        }
        let I = _()(async (e, t, n) => e.getOptions({
            srcToken: t,
            dstToken: n
        }), {
            isPromise: !0,
            maxAge: w()("10m"),
            updateExpire: !0,
            maxSize: 1e3
        })
          , O = _()(async (e, t, n, a) => e.getExtraGas({
            srcToken: t,
            dstToken: n,
            mode: a
        }), {
            isPromise: !0,
            maxAge: w()("10m"),
            updateExpire: !0,
            maxSize: 1e3
        });
        function F(e) {
            return e instanceof v.fj ? "StargateV1Bridge" : e instanceof b.Nm ? "StargateV2Bridge" : e instanceof f.Zr ? "OftBridgeV0" : e instanceof f.Z0 ? "OftBridgeV1" : e instanceof f.WW ? "OftBridgeV2" : e instanceof h.C2 ? "OftWrapperBridge" : e instanceof f.Se ? "OftBridgeV3" : "Bridge"
        }
        function M(e) {
            return t => t instanceof Error ? t : Error(e, {
                cause: t
            })
        }
        function P(e) {
            return e instanceof Error
        }
        function S(e) {
            if (!P(e))
                return e
        }
        var N = n(51967);
        async function K(e, t) {
            return await k(t.map(async t => {
                let {options: n} = await t.getOptions(e);
                return await k(n.map(async n => {
                    try {
                        let a = await t.getRoute({
                            mode: n.mode,
                            ...e
                        });
                        if (a.error)
                            throw a.error;
                        return {
                            name: D(t),
                            ...a,
                            bridge: t,
                            output: {
                                dstAmount: a.dstAmount,
                                fee: {}
                            },
                            input: e
                        }
                    } catch (e) {
                        if (e instanceof Error)
                            return {
                                name: D(t),
                                mode: n.mode,
                                error: e
                            };
                        throw e
                    }
                }
                ))
            }
            )).then(e => e.flat().filter(e => !e.messageFee || e.messageFee.nativeFee.lessThan(N.aZ)))
        }
        function D(e) {
            let t = e.name;
            return "string" == typeof t ? t : "BridgeV2"
        }
        var z = n(38314)
          , R = n(72595);
        async function B(e, t) {
            let n = t.filter(z.h)
              , a = t.filter(R.v)
              , [i,s] = await Promise.all([E(e, n), K(e, a)]);
            return [...i, ...s]
        }
        var j = n(23974)
          , L = n(12728)
          , Z = n(50224)
          , V = n(2978);
        let W = (j.O.NEXT_PUBLIC_STAGE === i.Hf.TESTNET ? V.p : j.O.NEXT_PUBLIC_STAGE === i.Hf.SANDBOX ? Z.q : L.H).getConfigs().flatMap(e => Object.values(e.deployments).map(e => e.token));
        var G = n(66822)
          , q = n(70491);
        async function U(e) {
            let t = (0,
            q.J)(e.chainKey);
            return "0x" !== await t.getCode(e.address)
        }
        let H = _()(async e => {
            let {chainKey: t, address: n} = e;
            return !!(0,
            i.ld)(t) && U({
                chainKey: t,
                address: n
            })
        }
        , {
            isPromise: !0,
            maxAge: w()("5m"),
            updateExpire: !0,
            maxSize: 1e3,
            isDeepEqual: !0
        });
        var J = n(28066)
          , X = n(50054)
          , Y = n(87840)
          , $ = n(46860)
          , Q = n(798)
          , ee = n(90818)
          , et = n(64770);
        function en(e, t) {
            var n;
            if (e && (t || (t = null === (n = function(e) {
                let t = e.chainKey
                  , n = (0,
                i.lJ)(t);
                if (n) {
                    if ("solana" === n.chainType)
                        return et.walletStore.solana;
                    if ("aptos" === n.chainType)
                        return et.walletStore.aptos;
                    if ("evm" === n.chainType)
                        return et.walletStore.evm;
                    if ("tron" === n.chainType)
                        return et.walletStore.tron;
                    if ("ton" === n.chainType)
                        return et.walletStore.ton;
                    if ("hypercore" === n.chainType)
                        return et.walletStore.evm
                }
            }(e)) || void 0 === n ? void 0 : n.address),
            t))
                return X._.getBalance(e, t)
        }
        var ea = n(97250)
          , ei = n(19879)
          , es = n(39552)
          , er = n(31174)
          , eo = n(35153)
          , ed = n(52805)
          , eu = n(48540)
          , el = n(86030)
          , ep = n(68171)
          , ec = n(50671)
          , ey = n(15322)
          , em = n(31348)
          , eh = n(36234);
        async function ef() {
            switch (j.O.NEXT_PUBLIC_STAGE) {
            case "mainnet":
                return Promise.all([n.e(928), n.e(3755), n.e(8209), n.e(8167), n.e(1566), n.e(2222), n.e(3952), n.e(3547)]).then(n.bind(n, 23547)).then(e => e.bridges);
            case "testnet":
                return Promise.all([n.e(1566), n.e(3952), n.e(6990)]).then(n.bind(n, 72738)).then(e => e.bridges);
            case "sandbox":
                return n.e(888).then(n.bind(n, 40888)).then(e => e.bridges);
            default:
                throw Error("Could not import bridges for stage ".concat(j.O.NEXT_PUBLIC_STAGE))
            }
        }
        var eg = n(56509);
        function ev() {
            if ("undefined" != typeof document)
                return !1 === document.hidden
        }
        var eb = n(69808);
        class eT {
            get isSrcAddressBlocked() {
                return (0,
                er.d)(this.promises.isSrcAddressBlocked)
            }
            get isDstAddressBlocked() {
                return (0,
                er.d)(this.promises.isDstAddressBlocked)
            }
            get isMultisig() {
                return (0,
                er.d)(this.promises.isMultisig)
            }
            get isLoading() {
                var e;
                return (null === (e = this.promises.routes) || void 0 === e ? void 0 : e.state) === "pending"
            }
            get isSrcMaxAmountExceeded() {
                if (this.srcAmountMax && this.srcAmount)
                    return this.srcAmount.greaterThan(this.srcAmountMax)
            }
            get isRateLimited() {
                let {srcToken: e} = this;
                return e && "USDY" === e.symbol
            }
            get bridges() {
                var e;
                return null !== (e = (0,
                er.d)(this.promises.bridges)) && void 0 !== e ? e : []
            }
            get supportedBridges() {
                let {srcToken: e, dstToken: t, bridges: n} = this;
                return e && t ? n.filter(n => n.supportsTransfer(e, t)) : []
            }
            get tokens() {
                let e = [];
                for (let t of Q.y.tokens) {
                    let n = Q.y.getDetails(t);
                    (null == n ? void 0 : n.isBridgeable) && e.push(t)
                }
                return e
            }
            get output() {
                var e;
                return null === (e = this.route) || void 0 === e ? void 0 : e.output
            }
            get messageFee() {
                var e;
                return null === (e = this.route) || void 0 === e ? void 0 : e.messageFee
            }
            get srcToken() {
                return this.form.srcToken
            }
            get dstToken() {
                return this.form.dstToken
            }
            get isDstNativeAmountEnabled() {
                return !this.isUsdcCctpV1OnlyRoute && !this.isHypercoreOnlyRoute
            }
            get isHypercoreOnlyRoute() {
                return "hypercore" === this.dstChainKey || "hypercore-testnet" === this.dstChainKey || "hypercore" === this.srcChainKey || "hypercore-testnet" === this.srcChainKey
            }
            get isUsdcCctpV1OnlyRoute() {
                let {supportedBridges: e} = this;
                return e.every(e => eK(e) === eh.X.USDC_CCTP_V1)
            }
            get isCustomDstAddressEnabled() {
                return !!this.isMultisig || void 0 !== this.form.dstAddress
            }
            get isConnected() {
                var e, t, n;
                return this.isCustomDstAddressEnabled ? (null === (e = this.srcWallet) || void 0 === e ? void 0 : e.isConnected) === !0 : (null === (t = this.srcWallet) || void 0 === t ? void 0 : t.isConnected) === !0 && (null === (n = this.dstWallet) || void 0 === n ? void 0 : n.isConnected) === !0
            }
            get routes() {
                let e = (0,
                er.d)(this.promises.routes);
                if (e)
                    return e.slice().sort(eI).reverse()
            }
            get route() {
                let {routes: e} = this;
                if (e) {
                    for (let t of e)
                        if (!t.error && t.mode === this.form.mode)
                            return t;
                    for (let t of e)
                        if (!t.error)
                            return t
                }
            }
            get srcAmountMax() {
                let e;
                if (!this.routes)
                    return this.srcBalance;
                for (let n of this.routes) {
                    var t;
                    (!e || (null === (t = n.srcAmountMax) || void 0 === t ? void 0 : t.greaterThan(e))) && (e = n.srcAmountMax)
                }
                return e
            }
            get allowance() {
                var e;
                return null === (e = this.route) || void 0 === e ? void 0 : e.allowance
            }
            get bridge() {
                var e;
                return null === (e = this.route) || void 0 === e ? void 0 : e.bridge
            }
            get chains() {
                return Array.from(new Set(this.tokens.map(e => e.chainKey)))
            }
            get tokenOptions() {
                return this.tokens.map(e => {
                    let t = en(e)
                      , n = W.some(t => t.equals(e));
                    return {
                        searchText: (0,
                        eb.n)(e.symbol),
                        balance: t,
                        token: e,
                        valid: !0,
                        disabled: !1,
                        bus: n
                    }
                }
                ).sort( (e, t) => {
                    var n, a;
                    return n = e.token.symbol,
                    a = t.token.symbol,
                    n.localeCompare(a)
                }
                ).sort( (e, t) => (0,
                em.m)(t.balance, e.balance))
            }
            get srcTokenOptions() {
                let e = ee.uiStore.isHideEmptyBalancesEnabled.value;
                return this.tokenOptions.map(e => {
                    let {token: t, balance: n, bus: a, searchText: i} = e;
                    return n && (null == n || n.equalTo(0)),
                    {
                        searchText: i,
                        balance: n,
                        token: t,
                        disabled: !1,
                        bus: a,
                        overlay: void 0
                    }
                }
                ).filter(t => {
                    var n;
                    return !e || !this.srcWallet || (null === (n = t.balance) || void 0 === n ? void 0 : n.greaterThan(0))
                }
                )
            }
            get dstTokenOptions() {
                let {srcToken: e} = this.form;
                return this.tokenOptions.map(t => {
                    let {token: n, balance: a, bus: i, searchText: s} = t
                      , r = e ? e_(e, n) : void 0;
                    return {
                        searchText: s,
                        balance: a,
                        token: n,
                        valid: r,
                        bus: i,
                        disabled: !!e && !r
                    }
                }
                ).filter(e => !e.disabled)
            }
            get srcTokenOptionsGroups() {
                var e;
                let {srcChainKey: t} = this.form
                  , {srcTokenOptions: n} = this;
                return [{
                    title: "".concat(null === (e = (0,
                    i.lJ)(t)) || void 0 === e ? void 0 : e.name, " Network"),
                    key: "src",
                    items: n.filter(e => e.token.chainKey === t)
                }, {
                    title: "All networks",
                    key: "all",
                    items: n.filter(e => e.token.chainKey !== t)
                }].filter(e => e.items.length > 0)
            }
            get dstTokenOptionsGroups() {
                var e, t;
                let {dstChainKey: n} = this.form
                  , {dstTokenOptions: a} = this
                  , s = {
                    title: "All networks",
                    key: "all",
                    items: a.filter(e => e.token.chainKey !== n)
                };
                return n ? [{
                    title: null !== (t = null === (e = (0,
                    i.lJ)(n)) || void 0 === e ? void 0 : e.name) && void 0 !== t ? t : "".concat(n, " Network"),
                    key: "dst",
                    items: a.filter(e => e.token.chainKey === n)
                }, s].filter(e => e.items.length > 0) : [s]
            }
            get srcNetworkOptions() {
                let e = Array.from(new Set(this.srcTokenOptions.map(e => e.token.chainKey)))
                  , t = et.walletStore.evm;
                return e.map(e => ({
                    chainName: eO(e),
                    chainKey: e,
                    disabled: !1,
                    overlay: (null == t ? void 0 : t.chainKey) === e ? (0,
                    a.jsx)(ei.xu, {
                        color: "success.main",
                        children: "Connected"
                    }) : void 0
                })).sort(eF)
            }
            get dstNetworkOptions() {
                let {srcToken: e} = this.form;
                return this.chains.map(t => {
                    var n;
                    let a = e ? e.chainKey === t ? "Transfers between same chain not available" : (0,
                    i.Gd)(e.chainKey) && (0,
                    i.Gd)(t) ? "Transfers between APTOS not available" : void 0 === ew(e, t) ? "".concat($.WI.getSymbol(e), " is not available on ").concat(null === (n = (0,
                    i.lJ)(t)) || void 0 === n ? void 0 : n.name, " via this pathway") : void 0 : void 0;
                    return {
                        chainName: eO(t),
                        chainKey: t,
                        disabled: !!a,
                        overlay: a
                    }
                }
                ).sort(eF)
            }
            get dstWallet() {
                if (this.isCustomDstAddressEnabled)
                    return;
                let {dstChainKey: e} = this.form;
                if (e) {
                    if ((0,
                    i.Gd)(e))
                        return et.walletStore.aptos;
                    if ((0,
                    i.zR)(e))
                        return et.walletStore.solana;
                    if ((0,
                    i.ld)(e))
                        return et.walletStore.evm;
                    if ((0,
                    i.IZ)(e))
                        return et.walletStore.tron;
                    if (eN(e))
                        return et.walletStore.ton;
                    if ((0,
                    i.Pe)(e))
                        return et.walletStore.evm
                }
            }
            get srcWallet() {
                let {srcChainKey: e} = this.form;
                if (e) {
                    if ((0,
                    i.Gd)(e))
                        return et.walletStore.aptos;
                    if ((0,
                    i.zR)(e))
                        return et.walletStore.solana;
                    if ((0,
                    i.ld)(e))
                        return et.walletStore.evm;
                    if ((0,
                    i.IZ)(e))
                        return et.walletStore.tron;
                    if (eN(e))
                        return et.walletStore.ton;
                    if ((0,
                    i.Pe)(e))
                        return et.walletStore.evm
                }
            }
            get srcAddress() {
                var e;
                return null === (e = this.srcWallet) || void 0 === e ? void 0 : e.address
            }
            get isCustomDstAddressValid() {
                let {dstAddress: e} = this.form;
                if (void 0 !== e)
                    return this.dstChainType === i.Jb.EVM ? (0,
                    i.lp)(e) : this.dstChainType === i.Jb.SOLANA ? (0,
                    i.BV)(e) : this.dstChainType === i.Jb.APTOS ? (0,
                    i.$v)(e) : this.dstChainType === i.Jb.TRON ? (0,
                    i.vc)(e) : this.dstChainType === i.Jb.TON && (0,
                    i.ud)(e)
            }
            get dstAddress() {
                var e;
                return this.isCustomDstAddressEnabled ? this.isCustomDstAddressValid ? this.form.dstAddress : void 0 : null === (e = this.dstWallet) || void 0 === e ? void 0 : e.address
            }
            get srcChain() {
                return (0,
                i.lJ)(this.srcChainKey)
            }
            get srcChainType() {
                var e;
                return null === (e = this.srcChain) || void 0 === e ? void 0 : e.chainType
            }
            get srcChainKey() {
                return this.form.srcChainKey
            }
            get dstChain() {
                return (0,
                i.lJ)(this.dstChainKey)
            }
            get dstChainType() {
                var e;
                return null === (e = this.dstChain) || void 0 === e ? void 0 : e.chainType
            }
            get dstChainKey() {
                return this.form.dstChainKey
            }
            get srcNativeBalance() {
                if (this.form.srcChainKey)
                    return en((0,
                    i.JK)(this.form.srcChainKey))
            }
            get dstNativeBalance() {
                if (this.form.dstChainKey)
                    return en((0,
                    i.JK)(this.form.dstChainKey))
            }
            get srcNativeCost() {
                var e;
                return null === (e = this.messageFee) || void 0 === e ? void 0 : e.nativeFee
            }
            get dstNativeAmountConfig() {
                let {srcChainKey: e, dstChainKey: t} = this;
                if (t && e)
                    return Y.Y.getConfig({
                        srcChainKey: e,
                        dstChainKey: t
                    })
            }
            get dstNativeAmountDefault() {
                var e;
                return null === (e = this.dstNativeAmountConfig) || void 0 === e ? void 0 : e.default
            }
            get dstNativeAmountMax() {
                var e;
                return null === (e = this.dstNativeAmountConfig) || void 0 === e ? void 0 : e.max
            }
            get dstNativeAmountMin() {
                let {dstChainKey: e} = this
                  , t = (0,
                i.lJ)(e);
                if (t)
                    return "solana" === t.chainKey ? (0,
                    i.Vm)("0.0015", t.nativeCurrency) : (0,
                    i.Vm)("0", t.nativeCurrency)
            }
            get maxAmount() {
                let {srcChainKey: e} = this.form
                  , {srcBalance: t, srcNativeCost: n} = this;
                if (e && t) {
                    if ((0,
                    i.Gd)(e)) {
                        let {srcAmountMax: e} = this;
                        return e ? e.lessThan(t) ? e : t : void 0
                    }
                    if (null == n ? void 0 : n.token.equals(t.token)) {
                        let e = t.subtract(n);
                        return e.greaterThan(0) ? e : e.multiply(0)
                    }
                    return t
                }
            }
            get srcBalance() {
                return en(this.form.srcToken)
            }
            get dstBalance() {
                return en(this.form.dstToken)
            }
            get srcAmount() {
                return (0,
                i.eo)(this.form.amount, this.form.srcToken)
            }
            get dstAmount() {
                var e;
                return null === (e = this.route) || void 0 === e ? void 0 : e.dstAmount
            }
            get outputAmount() {
                var e;
                return null === (e = this.output) || void 0 === e ? void 0 : e.dstAmount
            }
            get slippage() {
                let e = (0,
                i.FN)(this.form.slippage);
                if (!(!e || e.lessThan(0)) && !e.greaterThan(new i.gG(50,100)))
                    return e
            }
            get mode() {
                var e;
                return null === (e = this.route) || void 0 === e ? void 0 : e.mode
            }
            get dstAmountMin() {
                let {slippage: e, srcAmount: t, dstToken: n} = this;
                if (!e || !t || !n)
                    return;
                let a = t.multiply(new i.gG(100,100).subtract(e))
                  , s = (0,
                i.ph)(a, n);
                return i.ih.fromBigInt(n, s.toBigInt())
            }
            get dstNativeAmount() {
                var e, t;
                if (!this.dstChainKey)
                    return;
                let n = (0,
                i.JK)(this.dstChainKey)
                  , a = i.ih.fromRawAmount(n, 0);
                return !this.isDstNativeAmountEnabled || (null === (e = this.dstToken) || void 0 === e ? void 0 : e.equals(n)) || !this.form.dstNativeAmount ? a : this.isCustomDstAddressEnabled && this.isCustomDstAddressValid ? G.w.MAX === this.form.dstNativeAmount ? this.dstNativeAmountMax : G.w.DEFAULT === this.form.dstNativeAmount ? this.dstNativeAmountDefault : null !== (t = (0,
                i.eo)(this.form.dstNativeAmount, n)) && void 0 !== t ? t : a : G.w.MAX === this.form.dstNativeAmount ? this.dstNativeAmountMax : G.w.DEFAULT === this.form.dstNativeAmount ? this.dstNativeAmountDefault : G.w.AUTO === this.form.dstNativeAmount ? this.srcAddress ? this.dstNativeBalance && this.dstNativeAmountDefault ? this.dstNativeBalance.lessThan(this.dstNativeAmountDefault) ? this.dstNativeAmountDefault : a : void 0 : a : (0,
                i.eo)(this.form.dstNativeAmount, n)
            }
            get errors() {
                var e, t, n, a, i;
                let s = [];
                function r(e) {
                    s.push(e)
                }
                let {isLoading: o, srcNativeBalance: d, srcNativeCost: u, srcAmount: l, srcAmountMax: p, dstAmountMin: c, outputAmount: y, form: m, route: h, isSrcAddressBlocked: f, isDstAddressBlocked: g} = this
                  , {srcChainKey: v, dstChainKey: b, srcToken: T, dstToken: _} = m;
                return o && r("Checking routes..."),
                this.isMultisig && !this.isCustomDstAddressValid && r("Enter custom address"),
                v && v === b && r("Select different chain"),
                u && d && !this.isMultisig && u.greaterThan(d) && r("Not enough native for gas"),
                b || r("Select network"),
                v || r("Select network"),
                "solana" === this.srcChainType && "ton" === this.dstChainType && r("No route found"),
                this.srcChainType && !this.srcWallet && r("".concat((0,
                ep.bn)(this.srcChainType), " Wallet Required")),
                !this.dstChainType || this.dstWallet || this.isCustomDstAddressEnabled || r("".concat((0,
                ep.bn)(this.dstChainType), " Wallet Required")),
                l && l.greaterThan(0) ? (null == p ? void 0 : p.lessThan(l)) || (null == h ? void 0 : h.srcAmountMax.lessThan(l)) || (null == h ? void 0 : h.srcAmountMax.equalTo(0)) ? r("Limit exceeded") : (null === (e = this.maxAmount) || void 0 === e ? void 0 : e.lessThan(l)) ? r("Insufficient balance") : (null === (t = this.outputAmount) || void 0 === t ? void 0 : t.equalTo(0)) && r("Invalid amount") : r("Enter amount"),
                v && v === b && r("Change network"),
                this.dstNativeAmount ? this.dstNativeAmount.equalTo(0) || ((null === (a = this.dstNativeAmountMax) || void 0 === a ? void 0 : a.lessThan(this.dstNativeAmount)) ? r("Gas too large") : (null === (i = this.dstNativeAmountMin) || void 0 === i ? void 0 : i.greaterThan(this.dstNativeAmount)) && r("Invalid gas")) : r("Set gas on destination"),
                c && (null == y ? void 0 : y.lessThan(c)) && r("Increase slippage"),
                v && T && v !== T.chainKey && r("Select other pair"),
                b && _ && b !== _.chainKey && r("Select other pair"),
                T && _ && !e_(T, _) && r("Select other pair"),
                this.isCustomDstAddressEnabled && (!this.isCustomDstAddressValid && this.dstChainType && r("Invalid ".concat(this.dstChainType, " address")),
                this.isCustomDstAddressValid && this.isUsdcCctpV1OnlyRoute && r("Custom address not supported on CCTP")),
                this.dstAddress || r("Enter address"),
                this.slippage || r("Set valid slippage"),
                h || r("No route found"),
                (null === (n = this.promises.isMultisig) || void 0 === n ? void 0 : n.state) !== "fulfilled" && r("Checking if multisig..."),
                // void 0 === f || void 0 === g ? r("Checking address...") : (f || g) && r("Unsupported address"),
                s
            }
            get isApproved() {
                let {allowance: e, srcAmount: t} = this;
                if (e && t)
                    return !t.greaterThan(e)
            }
            get adapterParams() {
                var e;
                return null === (e = this.route) || void 0 === e ? void 0 : e.adapterParams
            }
            setSlippage(e) {
                void 0 !== (0,
                i.Tv)(e) && (this.form.slippage = e)
            }
            setAmount(e) {
                void 0 !== (0,
                i.Tv)(e) && (this.form.amount = e)
            }
            setPreferredBridge(e) {
                "number" == typeof e && (e = String(e)),
                this.form.preferredBridge = "2" === e ? "StargateV2Bridge" : e
            }
            setRoute(e) {
                this.form.mode = e.mode
            }
            setDstAddress(e) {
                this.form.dstAddress = e
            }
            setIsCustomDstAddressEnabled(e) {
                this.form.dstAddress = e ? "" : void 0
            }
            setDstNativeAmount(e) {
                this.form.dstNativeAmount = e
            }
            setMaxAmount() {
                this.maxAmount && (this.form.amount = this.maxAmount.toExact())
            }
            setSrcChainKey(e) {
                this.form.srcChainKey = e;
                let {srcToken: t, dstToken: n} = this.form;
                if (t)
                    this.form.srcToken = ex(t, e);
                else if (n) {
                    let t = ew(n, e);
                    this.form.srcToken = t
                }
                this.form.srcToken && this.form.dstToken && !e_(this.form.srcToken, this.form.dstToken) && (this.form.dstToken = ew(this.form.srcToken, this.form.dstToken.chainKey))
            }
            setDstChainKey(e) {
                this.form.dstChainKey = e;
                let {srcToken: t, dstToken: n} = this.form;
                if (t) {
                    let n = ew(t, e);
                    this.form.dstToken = n
                } else
                    n && (this.form.dstToken = ex(n, e))
            }
            setSrcToken(e) {
                if (!function(e) {
                    let {dstChainKey: t, dstToken: n} = eM.form;
                    return !t || !((0,
                    i.Gd)(t) && (0,
                    i.Gd)(e.chainKey)) && (!!(0,
                    i.Gd)(t) || !!(0,
                    i.Gd)(e.chainKey)) && (!n || e_(e, n))
                }(e) && (this.form.dstToken = void 0),
                this.form.srcToken = e,
                this.form.srcChainKey = e.chainKey,
                !this.form.dstToken) {
                    let t = this.form.dstChainKey ? ew(e, this.form.dstChainKey) : function(e) {
                        let {tokens: t} = eM;
                        return t.find(t => e_(e, t))
                    }(e);
                    t && (this.form.dstToken = t,
                    this.form.dstChainKey = t.chainKey)
                }
            }
            setDstToken(e) {
                this.form.dstToken = e,
                this.form.dstChainKey = e.chainKey
            }
            switch() {
                let {form: e} = this;
                [e.srcChainKey,e.dstChainKey,e.srcToken,e.dstToken] = [e.dstChainKey, e.srcChainKey, e.dstToken, e.srcToken]
            }
            async updateIsMultisig() {
                this.promises.isMultisig = void 0;
                let {srcChainKey: e, srcAddress: t} = this;
                e && t && (this.promises.isMultisig = (0,
                o.p4)(H({
                    chainKey: e,
                    address: t
                })))
            }
            updateSrcAddressBlocked() {
                let {srcAddress: e} = this;
                this.promises.isSrcAddressBlocked = e ? (0,
                o.p4)((0,
                eg.g)(e)) : void 0
            }
            updateDstAddressBlocked() {
                let {dstAddress: e} = this;
                this.promises.isDstAddressBlocked = e ? (0,
                o.p4)((0,
                eg.g)(e)) : void 0
            }
            async updateBalances() {
                let {evm: e, aptos: t, solana: n, tron: a, ton: s} = et.walletStore;
                return Promise.allSettled(eA().map(r => {
                    e && (0,
                    i.ld)(r.chainKey) ? X._.updateBalance(r, e.address) : t && (0,
                    i.Gd)(r.chainKey) ? X._.updateBalance(r, t.address) : n && (0,
                    i.zR)(r.chainKey) ? X._.updateBalance(r, n.address) : a && (0,
                    i.IZ)(r.chainKey) ? X._.updateBalance(r, a.address) : s && eN(r.chainKey) ? X._.updateBalance(r, s.address) : e && (0,
                    i.Pe)(r.chainKey) && X._.updateBalance(r, e.address)
                }
                ))
            }
            async updateRoutes() {
                var e;
                this.promises.routes = void 0;
                let {supportedBridges: t, srcToken: n, dstToken: a, srcAddress: i, dstAddress: s, dstNativeAmount: r, srcAmount: d, dstAmountMin: u} = this;
                if (!t.length || !n || !a || !i || !s || !r || !u || !d || d.equalTo(0))
                    return;
                let l = this.isUsdcCctpV1OnlyRoute ? t : (e = eh.X.USDC_CCTP_V1,
                t.filter(t => eK(t) !== e));
                this.promises.routes = (0,
                o.p4)(B({
                    srcToken: n,
                    dstToken: a,
                    srcAddress: i,
                    dstAddress: s,
                    dstNativeAmount: r,
                    srcAmount: d,
                    dstAmountMin: u
                }, l))
            }
            subscribe() {
                if (this.unsubscribe)
                    throw Error("Already subscribed");
                let e = () => {
                    let {srcAddress: e, srcChainKey: t} = this;
                    this.updateIsMultisig()
                }
                  , t = () => {
                    let {ton: e} = et.walletStore;
                    e && eA().filter(e => eN(e.chainKey)).forEach(t => {
                        X._.updateBalance(t, e.address)
                    }
                    )
                }
                  , n = () => {
                    let {evm: e} = et.walletStore;
                    e && eA().filter(e => (0,
                    i.ld)(e.chainKey)).forEach(t => {
                        X._.updateBalance(t, e.address)
                    }
                    )
                }
                  , a = () => {
                    let {aptos: e} = et.walletStore;
                    if (!e)
                        return;
                    let {address: t} = e;
                    eA().filter(e => (0,
                    i.Gd)(e.chainKey)).forEach(e => {
                        X._.updateBalance(e, t)
                    }
                    )
                }
                  , s = () => {
                    let {tron: e} = et.walletStore;
                    if (!e)
                        return;
                    let {address: t} = e;
                    eA().filter(e => (0,
                    i.IZ)(e.chainKey)).forEach(e => {
                        X._.updateBalance(e, t)
                    }
                    )
                }
                  , o = () => {
                    let {solana: e} = et.walletStore;
                    if (!e)
                        return;
                    let {address: t} = e;
                    eA().filter(e => (0,
                    i.zR)(e.chainKey)).forEach(e => {
                        X._.updateBalance(e, t)
                    }
                    )
                }
                  , d = () => {
                    let {evm: e} = et.walletStore;
                    e && eA().filter(e => (0,
                    i.Pe)(e.chainKey)).forEach(t => {
                        X._.updateBalance(t, e.address)
                    }
                    )
                }
                  , u = () => {
                    let {srcChainKey: e, dstChainKey: t} = eM;
                    e && t && Y.Y.update({
                        srcChainKey: e,
                        dstChainKey: t
                    })
                }
                  , l = () => {
                    let {srcAddress: e} = this;
                    this.updateSrcAddressBlocked()
                }
                  , p = () => {
                    let {dstAddress: e} = this;
                    this.updateDstAddressBlocked()
                }
                  , c = () => {
                    let {bridges: e, srcToken: t, dstToken: n, srcAddress: a, dstAddress: i, dstNativeAmount: s, srcAmount: r, dstAmountMin: o} = this;
                    this.updateRoutes()
                }
                  , y = [(0,
                r.EH)( () => o()), (0,
                r.EH)( () => d()), (0,
                r.EH)( () => n()), (0,
                r.EH)( () => a()), (0,
                r.EH)( () => s()), (0,
                r.EH)( () => t()), (0,
                r.EH)( () => u()), (0,
                r.EH)( () => c()), (0,
                r.EH)( () => e()), (0,
                r.EH)( () => l()), (0,
                r.EH)( () => p()), ek( () => ev() && n(), 3e4), ek( () => ev() && a(), 3e4)];
                return this.unsubscribe = () => {
                    y.forEach(e => e()),
                    this.unsubscribe = void 0
                }
                ,
                this.unsubscribe
            }
            constructor() {
                this.isSigning = !1,
                this.isMining = !1,
                this.isExecuting = !1,
                this.isApproving = !1,
                this.isRegistering = !1,
                this.steps = [],
                this.form = {
                    preferredBridge: void 0,
                    mode: "bus",
                    slippage: "0.5",
                    srcToken: void 0,
                    dstToken: void 0,
                    srcChainKey: void 0,
                    dstChainKey: void 0,
                    amount: "",
                    dstAddress: void 0,
                    dstNativeAmount: G.w.AUTO
                },
                this.unsubscribe = void 0,
                this.promises = {
                    bridges: (0,
                    o.p4)(ef()),
                    routes: void 0,
                    isMultisig: void 0,
                    isSrcAddressBlocked: void 0,
                    isDstAddressBlocked: void 0
                },
                this.transfer = (0,
                r.ls)(function*() {
                    let e = function(e) {
                        var t, n;
                        let {form: a, mode: i, route: s, srcWallet: r, dstWallet: o, srcAmount: d, dstAmount: u, dstAmountMin: l, srcAddress: p, dstAddress: c, srcNativeBalance: y, dstNativeBalance: m, dstNativeAmount: h} = e
                          , {srcChainKey: f, dstChainKey: g, dstToken: v, srcToken: b} = a;
                        return {
                            mode: i,
                            bridge: null == s ? void 0 : s.name,
                            srcAddress: p,
                            dstAddress: c,
                            srcAmount: null == d ? void 0 : d.toBigInt().toString(),
                            dstAmount: null == u ? void 0 : u.toBigInt().toString(),
                            dstAmountMin: null == l ? void 0 : l.toBigInt().toString(),
                            dstNativeAmount: null == h ? void 0 : h.toBigInt().toString(),
                            srcChain: f,
                            dstChain: g,
                            srcToken: b ? eP(b) : void 0,
                            dstToken: v ? eP(v) : void 0,
                            srcWallet: null !== (t = null == r ? void 0 : r.type) && void 0 !== t ? t : null,
                            dstWallet: null !== (n = null == o ? void 0 : o.type) && void 0 !== n ? n : null,
                            srcNativeBalance: null == y ? void 0 : y.toBigInt().toString(),
                            dstNativeBalance: null == m ? void 0 : m.toBigInt().toString()
                        }
                    }(this);
                    try {
                        this.isExecuting = !0;
                        let {route: t, srcWallet: n, dstWallet: a, dstAmount: r, dstAddress: o, bridge: d, dstNativeAmount: l} = this;
                        (0,
                        i.hu)(t, "route"),
                        (0,
                        i.hu)(null == n ? void 0 : n.address, "srcWallet"),
                        (0,
                        i.hu)(l, "dstNativeAmount"),
                        (0,
                        i.hu)(d, "bridge"),
                        (0,
                        i.hu)(r, "dstAmount");
                        let p = eS(this);
                        this.steps = yield m(t),
                        a && a.address === o && (yield(0,
                        es.b)(a, p.dstChainKey)),
                        this.isApproved || (yield this.approve()),
                        (0,
                        i.hu)(p.srcAddress === t.srcAddress, "srcAddress"),
                        (0,
                        i.hu)(p.dstAddress === t.dstAddress, "dstAddress"),
                        (0,
                        i.hu)(p.srcAmount.greaterThanOrEqualTo(t.srcAmount), "amount"),
                        (0,
                        i.hu)(p.dstAmountMin.lessThanOrEqualTo(t.dstAmountMin), "minAmount"),
                        (0,
                        i.hu)(p.dstToken.equals(t.dstToken), "dstToken"),
                        (0,
                        i.hu)(p.srcToken.equals(t.srcToken), "srcToken"),
                        (0,
                        i.hu)(p.mode === t.mode, "mode"),
                        (0,
                        i.hu)(t.bridge === d, "bridge"),
                        (0,
                        i.Pe)(p.srcChainKey) || (yield n.switchChain(p.srcChainKey)),
                        this.isSigning = !0;
                        let c = e => {
                            let {txHash: n, receipt: a} = e;
                            return u.K.create({
                                bridge: eK(t.bridge),
                                txHash: n,
                                receipt: a,
                                srcTxHash: "bus" === p.mode ? void 0 : n,
                                srcTxTimestamp: "bus" === p.mode ? void 0 : (0,
                                ey.u3)(),
                                srcAddress: p.srcAddress,
                                dstAddress: p.dstAddress,
                                dstAmount: r,
                                srcAmount: p.srcAmount,
                                mode: p.mode,
                                estimatedDuration: t.duration.estimated,
                                createdTimestamp: (0,
                                ey.u3)(),
                                isCompleted: !1,
                                isClaimed: !this.isUsdcCctpV1OnlyRoute && void 0
                            })
                        }
                          , h = yield d.transfer(p);
                        if (h.estimateNative) {
                            yield(0,
                            s.TD)(n, {
                                chainKey: p.srcChainKey,
                                address: p.srcAddress
                            });
                            let t = yield n.signAndSubmit(h);
                            this.isSigning = !1,
                            this.isMining = !0;
                            let a = yield t.wait();
                            this.isMining = !1,
                            this.setAmount("");
                            let i = c({
                                txHash: a.txHash
                            });
                            J.actionStore.addAction(i),
                            y({
                                ...e,
                                status: "success",
                                srcTxHash: a.txHash,
                                srcTxTimestamp: (0,
                                ey.u3)()
                            })
                        } else if (h.signatures) {
                            let t = yield eD(h, n)
                              , a = c({
                                receipt: (0,
                                i.Cp)(t)
                            });
                            J.actionStore.addAction(a),
                            y({
                                ...e,
                                status: "success"
                            })
                        } else
                            throw Error("Invalid transaction", {
                                cause: h
                            });
                        this.updateBalances()
                    } catch (t) {
                        throw (0,
                        eu.S)(t, () => {
                            let {message: n, title: i} = (0,
                            ec.B)(t);
                            y({
                                ...e,
                                status: "error",
                                srcTxTimestamp: (0,
                                ey.u3)(),
                                error: i,
                                errorCode: n.substring(0, 256)
                            }),
                            d.Am.error((0,
                            a.jsxs)(ea.F, {
                                children: [(0,
                                a.jsx)("h1", {
                                    children: i
                                }), (0,
                                a.jsx)("p", {
                                    children: n
                                })]
                            }))
                        }
                        ),
                        t
                    } finally {
                        this.isSigning = !1,
                        this.isMining = !1,
                        this.isExecuting = !1
                    }
                }),
                this.approve = (0,
                r.ls)(function*() {
                    this.isApproving = !0;
                    try {
                        let {bridge: e, srcWallet: t} = this;
                        (0,
                        i.hu)(e, "bridge"),
                        (0,
                        i.hu)(t, "srcWallet");
                        let n = eS(this);
                        yield t.switchChain(n.srcChainKey),
                        yield(0,
                        s.TD)(t, {
                            chainKey: n.srcChainKey,
                            address: n.srcAddress
                        }),
                        (0,
                        i.hu)(e.approve, "approve");
                        let a = (0,
                        z.h)(e) ? yield e.approve({
                            amount: (0,
                            eo.y)(n.srcAmount),
                            address: n.srcAddress
                        }) : yield e.approve({
                            ...n,
                            srcAmount: (0,
                            eo.y)(n.srcAmount)
                        })
                          , r = yield t.signAndSubmit(a);
                        yield r.wait()
                    } finally {
                        this.isApproving = !1
                    }
                }),
                (0,
                r.ky)(this, {
                    tokens: r.Fl.struct,
                    adapterParams: r.Fl.struct,
                    dstNativeAmount: r.Fl.struct,
                    srcAmount: r.Fl.struct,
                    srcAmountMax: r.Fl.struct,
                    allowance: r.Fl.struct,
                    messageFee: r.Fl.struct,
                    output: r.Fl.struct,
                    dstNativeBalance: r.Fl.struct,
                    srcNativeBalance: r.Fl.struct,
                    srcToken: r.Fl.struct,
                    dstToken: r.Fl.struct,
                    dstAddress: r.Fl,
                    routes: r.Fl.struct,
                    route: r.Fl.struct,
                    setPreferredBridge: r.aD,
                    maxAmount: r.Fl.struct,
                    updateRoutes: r.aD,
                    setDstAddress: r.aD,
                    errors: r.Fl.struct,
                    tokenOptions: r.Fl.struct,
                    srcTokenOptionsGroups: r.Fl.struct,
                    dstTokenOptionsGroups: r.Fl.struct,
                    srcNetworkOptions: r.Fl.struct,
                    dstNetworkOptions: r.Fl.struct,
                    isApproved: r.Fl,
                    isSrcMaxAmountExceeded: r.Fl
                }, {
                    autoBind: !0
                }),
                (0,
                el.K)(this.form, {
                    name: "bridge.form",
                    serialize: e => JSON.stringify({
                        preferredBridge: e.preferredBridge
                    }),
                    deserialize: e => JSON.parse(e)
                })
            }
        }
        function e_(e, t) {
            return e.chainKey !== t.chainKey && eM.bridges.some(n => n.supportsTransfer(e, t))
        }
        function ex(e, t) {
            let {tokens: n} = eM;
            return n.find(n => {
                if (n.chainKey !== t)
                    return !1;
                let a = $.WI.getSymbol(n);
                if (a && e.symbol === a)
                    return !0;
                let i = $.WI.getSymbol(e);
                return !!i && n.symbol === i
            }
            )
        }
        function ew(e, t) {
            let {tokens: n} = eM;
            return n.find(n => n.chainKey === t && e_(e, n))
        }
        function eA() {
            return Q.y.tokens
        }
        function ek(e, t) {
            let n = setInterval(e, t);
            return () => clearInterval(n)
        }
        function eC(e) {
            var t, n, a;
            if (!e.error)
                return (null !== (n = (0,
                ed.W)(null === (t = e.output) || void 0 === t ? void 0 : t.dstAmount)) && void 0 !== n ? n : 0) - (null !== (a = (0,
                ed.W)(e.gasCost)) && void 0 !== a ? a : Number.POSITIVE_INFINITY)
        }
        function eE(e) {
            return e.name === eM.form.preferredBridge
        }
        function eI(e, t) {
            var n, a;
            let i = eE(t) ? -1 : eE(e) ? 1 : 0;
            return 0 !== i ? i : (null !== (n = eC(e)) && void 0 !== n ? n : -1e6) - (null !== (a = eC(t)) && void 0 !== a ? a : -1e6)
        }
        function eO(e) {
            var t, n;
            return null !== (n = null === (t = (0,
            i.lJ)(e)) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : e
        }
        function eF(e, t) {
            return !!e.disabled == !!t.disabled ? e.chainName.localeCompare(t.chainName) : e.disabled ? 0 : -1
        }
        let eM = new eT;
        function eP(e) {
            return (0,
            i.gj)(e) ? e.address : "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
        }
        function eS(e) {
            let {form: t, mode: n, route: a, srcWallet: s, messageFee: r, srcAmount: o, dstAmount: d, dstAmountMin: u, srcAddress: l, dstAddress: p, adapterParams: c, outputAmount: y, dstNativeAmount: m} = e
              , {srcChainKey: h, dstChainKey: f, dstToken: g, srcToken: v} = t;
            return (0,
            i.hu)(a, "route"),
            (0,
            i.hu)(h, "srcChainKey"),
            (0,
            i.hu)(f, "dstChainKey"),
            (0,
            i.hu)(v, "srcToken"),
            (0,
            i.hu)(g, "dstToken"),
            (0,
            i.hu)(l, "srcAddress"),
            (0,
            i.hu)(p, "dstAddress"),
            (0,
            i.hu)(n, "mode"),
            (0,
            i.hu)(o, "srcAmount"),
            (0,
            i.hu)(d, "dstAmount"),
            (0,
            i.hu)(u, "dstAmountMin"),
            (0,
            i.hu)(y, "outputAmount"),
            (0,
            i.hu)(null == s ? void 0 : s.address, "srcWallet"),
            (0,
            i.hu)(m, "dstNativeAmount"),
            {
                mode: n,
                srcChainKey: h,
                dstChainKey: f,
                srcToken: v,
                dstToken: g,
                srcAddress: l,
                dstAddress: p,
                srcAmount: o,
                dstAmountMin: u,
                dstNativeAmount: m,
                fee: r,
                adapterParams: c
            }
        }
        function eN(e) {
            return "ton" === e || "ton-testnet" === e
        }
        function eK(e) {
            let {name: t} = e;
            if (Object.values(eh.X).includes(t))
                return t
        }
        async function eD(e, t) {
            let {intentHandlers: a} = await Promise.all([n.e(1566), n.e(5646)]).then(n.bind(n, 35646))
              , i = a.find(t => t.supports(e));
            if (!i)
                throw Error("No handler for ".concat(e.action));
            let s = [];
            for (let {typedData: n, chainKey: a} of e.signatures) {
                a && await t.switchChain(a);
                let e = await (null == t ? void 0 : t.signer)._signTypedData(n.domain, n.types, n.message);
                s.push(e)
            }
            let {receipt: r} = await i.send({
                signatures: s,
                params: e.params
            });
            return r
        }
    },
    7223: function(e, t, n) {
        "use strict";
        n.d(t, {
            t: function() {
                return s
            }
        });
        var a = n(27573)
          , i = n(3815);
        let s = e => {
            let {isPending: t} = e;
            return (0,
            a.jsx)(i.A, {
                type: "transfer",
                size: 20,
                iconSx: {
                    opacity: () => t ? .5 : 1
                }
            })
        }
    },
    38314: function(e, t, n) {
        "use strict";
        function a(e) {
            return "getOutput"in e
        }
        n.d(t, {
            h: function() {
                return a
            }
        })
    },
    72595: function(e, t, n) {
        "use strict";
        function a(e) {
            return "getRoute"in e
        }
        n.d(t, {
            v: function() {
                return a
            }
        })
    },
    66822: function(e, t, n) {
        "use strict";
        var a, i;
        n.d(t, {
            w: function() {
                return a
            }
        }),
        (i = a || (a = {})).DEFAULT = "DEFAULT",
        i.AUTO = "AUTO",
        i.MAX = "MAX"
    },
    69961: function(e, t, n) {
        "use strict";
        n.d(t, {
            p: function() {
                return i
            }
        });
        var a = n(26412);
        let i = n.n(a)()(async e => {
            let {Aptos: t, AptosConfig: a, Network: i} = await Promise.all([n.e(5989), n.e(8209)]).then(n.bind(n, 18209))
              , s = {
                aptos: i.MAINNET,
                "aptos-testnet": i.TESTNET
            }[e];
            if (s)
                return new t(new a({
                    network: s
                }));
            throw Error("Unsupported chain ".concat(e))
        }
        , {
            maxSize: Number.POSITIVE_INFINITY,
            isPromise: !0
        })
    },
    50054: function(e, t, n) {
        "use strict";
        n.d(t, {
            _: function() {
                return R
            }
        });
        var a = n(38623)
          , i = n(26412)
          , s = n.n(i)
          , r = n(69961);
        let o = {
            supports: e => (0,
            a.Gd)(e.chainKey),
            async getBalance(e, t) {
                var n, i;
                let s = await d(e.chainKey, t)
                  , r = e.address
                  , o = null !== (i = null === (n = s.find(e => e.asset_type === r)) || void 0 === n ? void 0 : n.amount) && void 0 !== i ? i : "0";
                return a.ih.fromRawAmount(e, o)
            }
        }
          , d = s()(async function(e, t) {
            let n = await (0,
            r.p)(e);
            return await n.getCurrentFungibleAssetBalances({
                options: {
                    where: {
                        owner_address: {
                            _eq: t
                        }
                    },
                    limit: 1e3
                }
            })
        }, {
            isPromise: !0,
            maxAge: 1e3,
            maxSize: 1e3
        });
        var u = n(10658)
          , l = n(18396)
          , p = n.n(l)
          , c = n(13914)
          , y = n(79719)
          , m = n.n(y)
          , h = n(79429)
          , f = n(81339)
          , g = n(82784);
        let v = Number.POSITIVE_INFINITY;
        async function b(e, t, n, a) {
            if (0 === t.length)
                return [];
            let i = t.filter(e => e !== c.Lb)
              , [s,r] = await n.readContract({
                abi: T,
                functionName: "getBalances",
                args: [e, i],
                address: a
            });
            return t.map(t => {
                let n = i.indexOf(t);
                if (!s.at(n))
                    return null;
                let a = r.at(n);
                if (void 0 === a)
                    throw Error("Could not get balance for token ".concat(t, " and user ").concat(e));
                return a
            }
            )
        }
        let T = [{
            inputs: [{
                name: "user",
                type: "address"
            }, {
                name: "tokens",
                type: "address[]"
            }],
            name: "getBalances",
            outputs: [{
                name: "_successes",
                type: "bool[]"
            }, {
                name: "_balances",
                type: "uint256[]"
            }],
            stateMutability: "view",
            type: "function"
        }]
          , _ = function(e) {
            async function t(t, n) {
                let i = await e(t.chainKey)
                  , s = (0,
                a.gj)(t) ? await i.readContract({
                    address: (0,
                    h.K)(t.address),
                    abi: f.Wo,
                    functionName: "balanceOf",
                    args: [(0,
                    h.K)(n)]
                }) : await i.getBalance({
                    address: (0,
                    h.K)(n)
                });
                return a.ih.fromBigInt(t, s)
            }
            return {
                supports(e) {
                    var t;
                    return (null === (t = (0,
                    a.lJ)(e.chainKey)) || void 0 === t ? void 0 : t.chainType) === a.Jb.EVM
                },
                getBalance: s()(t, {
                    isDeepEqual: !0,
                    maxAge: 3e3,
                    maxSize: v
                })
            }
        }(g.s)
          , x = function(e, t) {
            let n = s()(async (n, a) => {
                var i, s, r;
                return i = await t(n),
                s = (0,
                h.K)(e[n]),
                r = {
                    maxBatchSize: 1e3,
                    cacheMap: new (p())({
                        ttl: 3e3
                    })
                },
                new (m())(async e => {
                    for (let t of e)
                        if (t.owner !== a)
                            throw Error("Owner mismatch for token ".concat(t.token, " and user ").concat(t.owner));
                    return b(a, e.map(e => e.token), i, s)
                }
                ,r)
            }
            , {
                isPromise: !0,
                maxSize: v
            });
            return {
                supports: t => t.chainKey in e,
                async getBalance(e, t) {
                    let i = (0,
                    h.K)(t)
                      , s = (0,
                    a.gj)(e) ? (0,
                    h.K)(e.address) : c.Lb
                      , r = await n(e.chainKey, i)
                      , o = await r.load({
                        token: s,
                        owner: i
                    });
                    if (null === o)
                        throw Error("Could not get balance for token ".concat(e, " and user ").concat(t));
                    return a.ih.fromBigInt(e, o)
                }
            }
        }(u.EP, g.s)
          , w = {
            supports: e => {
                var t;
                return (null === (t = (0,
                a.lJ)(e.chainKey)) || void 0 === t ? void 0 : t.chainType) === a.Jb.EVM
            }
            ,
            getBalance: (e, t) => (e.chainKey in u.EP ? x : _).getBalance(e, t)
        }
          , A = {
            supports(e) {
                var t;
                return (null === (t = (0,
                a.lJ)(e.chainKey)) || void 0 === t ? void 0 : t.chainType) === a.Jb.HYPERCORE
            },
            async getBalance(e, t) {
                let {getBalance: a} = await n.e(3987).then(n.bind(n, 73987));
                return a(e, t)
            }
        };
        var k = n(44230)
          , C = n.n(k);
        let E = {
            supports: e => "solana-testnet" === e.chainKey || "solana" === e.chainKey,
            getBalance: async (e, t) => {
                if ((0,
                a.gj)(e)) {
                    var n, i;
                    let s = e.address
                      , r = null !== (i = null === (n = (await I(e.chainKey, t))[s]) || void 0 === n ? void 0 : n.info.tokenAmount.amount) && void 0 !== i ? i : "0";
                    return a.ih.fromRawAmount(e, r)
                }
                {
                    let n = await O(e.chainKey, t);
                    return a.ih.fromRawAmount(e, BigInt(n))
                }
            }
        }
          , I = s()(M, {
            isPromise: !0,
            maxAge: C()("3s"),
            maxSize: Number.POSITIVE_INFINITY
        })
          , O = s()(F, {
            isPromise: !0,
            maxAge: C()("3s"),
            maxSize: Number.POSITIVE_INFINITY
        });
        async function F(e, t) {
            let[{PublicKey: a},{getPublicConnection: i}] = await Promise.all([Promise.all([n.e(5608), n.e(5989), n.e(9266)]).then(n.bind(n, 55041)), n.e(9739).then(n.bind(n, 29739))]);
            return (await i(e)).getBalance(new a(t))
        }
        async function M(e, t) {
            let[{PublicKey: a},{TOKEN_PROGRAM_ID: i, TOKEN_2022_PROGRAM_ID: s},{getPublicConnection: r}] = await Promise.all([Promise.all([n.e(5608), n.e(5989), n.e(9266)]).then(n.bind(n, 55041)), Promise.all([n.e(5608), n.e(2044), n.e(4552), n.e(7275), n.e(5989), n.e(9266), n.e(3515), n.e(2326)]).then(n.bind(n, 48852)), n.e(9739).then(n.bind(n, 29739))])
              , o = new a(t)
              , d = await r(e)
              , [u,l] = await Promise.all([d.getParsedTokenAccountsByOwner(o, {
                programId: i
            }), d.getParsedTokenAccountsByOwner(o, {
                programId: s
            })]);
            return Object.fromEntries([...u.value, ...l.value].map(e => e.account.data.parsed).map(e => [e.info.mint, e]))
        }
        let P = {
            supports(e) {
                var t;
                return (null === (t = (0,
                a.lJ)(e.chainKey)) || void 0 === t ? void 0 : t.chainType) === a.Jb.TON
            },
            async getBalance(e, t) {
                let {getBalance: a} = await Promise.all([n.e(6160), n.e(1417), n.e(1352), n.e(1707)]).then(n.bind(n, 27985));
                return a(e, t)
            }
        }
          , S = {
            supports: e => "tron" === e.chainKey || "tron-testnet" === e.chainKey,
            getBalance: async (e, t) => {
                let {toHexAddress: a} = await n.e(7490).then(n.bind(n, 37490))
                  , i = t.startsWith("0x") ? t : a(t);
                return w.getBalance(e, i)
            }
        };
        var N = n(46016)
          , K = n(59533);
        class D {
            getBalance(e, t) {
                let n = z(e, t);
                return this.balances.get(n)
            }
            constructor() {
                this.balances = new K.vP,
                this.providers = [w, E, o, S, P, A],
                this.updateBalance = (0,
                K.ls)(function*(e, t) {
                    let n = z(e, t);
                    for (let a of this.providers)
                        if (a.supports(e)) {
                            let i = yield a.getBalance(e, t);
                            return yield(0,
                            N.z)( () => {
                                let e = this.balances.get(n);
                                if (null == e ? void 0 : e.equalTo(i))
                                    return e;
                                this.balances.set(n, i)
                            }
                            ),
                            i
                        }
                    throw Error("No provider for ".concat(e.symbol, " on ").concat(e.chainKey))
                }),
                (0,
                K.ky)(this, {
                    providers: !1
                }, {
                    autoBind: !0
                })
            }
        }
        let z = (e, t) => [e.id, t].join(":")
          , R = new D
    },
    87840: function(e, t, n) {
        "use strict";
        n.d(t, {
            Y: function() {
                return u
            }
        });
        var a = n(38623)
          , i = n(59533)
          , s = n(8189);
        class r {
            getConfig(e) {
                let t = d(e);
                return this.configs.get(t)
            }
            constructor() {
                this.configs = new i.vP,
                this.update = (0,
                i.ls)(function*(e) {
                    let t = d(e)
                      , n = yield o(e);
                    return this.configs.set(t, n),
                    n
                }),
                (0,
                i.ky)(this, {}, {
                    autoBind: !0
                })
            }
        }
        async function o(e) {
            let t = (0,
            a.JK)(e.dstChainKey)
              , n = await s.u.bridge.dstNativeAmount.query({
                srcChainKey: e.srcChainKey,
                dstChainKey: e.dstChainKey
            });
            return {
                max: a.ih.fromRawAmount(t, n.maxAmount.asBigInt),
                default: a.ih.fromRawAmount(t, n.defaultAmount.asBigInt)
            }
        }
        function d(e) {
            return "".concat(e.srcChainKey, ":").concat(e.dstChainKey)
        }
        let u = new r
    },
    46016: function(e, t, n) {
        "use strict";
        n.d(t, {
            z: function() {
                return r
            }
        });
        var a = n(59533);
        async function i(e) {
            return new Promise(t => setTimeout(t, e))
        }
        async function s(e) {
            return new Promise(t => requestIdleCallback(t, {
                timeout: e
            }))
        }
        let r = function(e) {
            let t, n = [];
            function i() {
                let e = n;
                t = void 0,
                n = [],
                (0,
                a.z)( () => {
                    for (let t of e)
                        null == t || t()
                }
                )
            }
            return function(a) {
                return (n.push(a),
                t) ? t : t = e().then(i)
            }
        }(async () => {
            "function" == typeof requestIdleCallback ? (await i(1e3),
            await s(2e3)) : await i(2e3)
        }
        )
    },
    9455: function(e, t, n) {
        "use strict";
        n.d(t, {
            P: function() {
                return u
            }
        });
        var a = n(27573)
          , i = n(19879);
        let s = (0,
        i.zo)(i.xu, {
            name: "DetailsRoot",
            shouldForwardProp: e => "stripped" !== e
        })(e => {
            let {stripped: t} = e;
            return {
                display: "flex",
                flexDirection: "column",
                gap: t ? 0 : 8
            }
        }
        )
          , r = (0,
        i.zo)("div", {
            name: "DetailsItem",
            shouldForwardProp: e => "stripped" !== e
        })(e => {
            let {theme: t, stripped: n} = e;
            return {
                ...t.typography.p3,
                display: "flex",
                justifyContent: "space-between",
                ...n && {
                    ...t.typography.p2,
                    padding: "14px 16px",
                    borderRadius: 8,
                    "&:nth-of-type(even)": {
                        background: t.palette.background.field
                    }
                }
            }
        }
        )
          , o = (0,
        i.zo)("div", {
            name: "Details-ItemKey"
        })(e => {
            let {theme: t} = e;
            return {
                color: t.palette.text.secondary
            }
        }
        )
          , d = (0,
        i.zo)("div", {
            name: "Details-ItemValue"
        })(e => {
            let {theme: t} = e;
            return {
                color: t.palette.text.primary
            }
        }
        )
          , u = e => {
            let {items: t, sx: n, stripped: i, itemSx: u} = e;
            return (0,
            a.jsx)(s, {
                sx: n,
                stripped: i,
                children: t.map( (e, t) => {
                    let {key: n, label: s, value: l} = e;
                    return (0,
                    a.jsxs)(r, {
                        stripped: i,
                        sx: u,
                        children: [(0,
                        a.jsx)(o, {
                            children: null != s ? s : n
                        }), (0,
                        a.jsx)(d, {
                            children: l
                        })]
                    }, null != n ? n : t)
                }
                )
            })
        }
    },
    89550: function(e, t, n) {
        "use strict";
        n.d(t, {
            B: function() {
                return f
            },
            H: function() {
                return h
            }
        });
        var a = n(27573)
          , i = n(19879)
          , s = n(24069);
        let r = (0,
        i.zo)("button", {
            name: "ListItem"
        })(e => {
            let {theme: t, disabled: n, overlay: a} = e;
            return {
                display: "flex",
                justifyContent: "space-between",
                position: "relative",
                alignItems: "stretch",
                background: "transparent",
                border: "0",
                color: t.palette.text.primary,
                width: "100%",
                padding: 0,
                borderRadius: 8,
                ...t.typography.p2,
                transition: s.fV,
                "&:focus": {
                    background: t.palette.background.field,
                    outline: 0
                },
                ...!n && {
                    cursor: "pointer",
                    "&:hover": {
                        background: t.palette.background.field
                    }
                },
                ...n && {
                    opacity: .5,
                    cursor: "initial"
                },
                "&:not(:hover) > [class*=ListItemOverlay]": {
                    display: "none"
                },
                ...a && {
                    "&:hover > [class*=ListItemRight]": {
                        display: "none"
                    }
                }
            }
        }
        )
          , o = (0,
        i.zo)("div", {
            name: "ListItemLeft"
        })( () => ({
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flex: 1,
            justifyContent: "space-between"
        }))
          , d = (0,
        i.zo)("div", {
            name: "ListItemRight",
            label: "ListItemRight"
        })( () => ({
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "space-between"
        }))
          , u = (0,
        i.zo)("div", {
            name: "ListItemCenter"
        })( () => ({
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flex: 1,
            justifyContent: "space-between"
        }))
          , l = (0,
        i.zo)("div", {
            name: "ListItemLabel"
        })(e => {
            let {theme: t} = e;
            return {
                color: t.palette.text.secondary,
                whiteSpace: "nowrap",
                ...t.typography.p3
            }
        }
        )
          , p = (0,
        i.zo)("div", {
            name: "ListItemValue"
        })(e => {
            let {theme: t} = e;
            return {
                ...t.typography.p1
            }
        }
        )
          , c = (0,
        i.zo)("div", {
            name: "ListItemStart"
        })({
            width: 32,
            height: 32,
            marginRight: 12,
            alignSelf: "center",
            flexShrink: 0
        })
          , y = (0,
        i.zo)("div", {
            name: "ListItemEnd"
        })({
            marginLeft: 12,
            alignSelf: "center"
        })
          , m = (0,
        i.zo)("div", {
            name: "ListItemOverlay",
            label: "ListItemOverlay"
        })(e => {
            let {theme: t} = e;
            return {
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                textAlign: "end",
                marginLeft: 12,
                maxWidth: "40%",
                ...t.typography.p3
            }
        }
        )
          , h = e => {
            let {bottomCenter: t, bottomLeft: n, bottomRight: i, endAdornment: s, onClick: h, startAdornment: f, topCenter: g, topLeft: v, topRight: b, overlay: T, ..._} = e;
            return (0,
            a.jsxs)(r, {
                onClick: h,
                overlay: T,
                ..._,
                children: [f && (0,
                a.jsx)(c, {
                    children: f
                }), (0,
                a.jsxs)(o, {
                    children: [(0,
                    a.jsx)(p, {
                        children: v
                    }), (0,
                    a.jsx)(l, {
                        children: n
                    })]
                }), (g || t) && (0,
                a.jsxs)(u, {
                    children: [(0,
                    a.jsx)(p, {
                        children: g
                    }), (0,
                    a.jsx)(l, {
                        children: t
                    })]
                }), (0,
                a.jsxs)(d, {
                    children: [(0,
                    a.jsx)(p, {
                        children: b
                    }), (0,
                    a.jsx)(l, {
                        children: i
                    })]
                }), s && (0,
                a.jsx)(y, {
                    children: s
                }), T && (0,
                a.jsx)(m, {
                    children: T
                })]
            })
        }
          , f = (0,
        i.zo)("div", {
            name: "ListItem-ListHeader"
        })(e => {
            let {theme: t} = e;
            return {
                ...t.typography.p3,
                color: t.palette.text.secondary,
                marginLeft: t.spacing(2),
                marginRight: t.spacing(2),
                marginTop: t.spacing(1),
                marginBottom: t.spacing(1),
                borderBottom: "1px solid ".concat(t.palette.divider),
                paddingBottom: 4,
                "&:first-of-type": {
                    marginTop: 0
                }
            }
        }
        )
    },
    44229: function(e, t, n) {
        "use strict";
        n.d(t, {
            u: function() {
                return m
            }
        });
        var a = n(27573)
          , i = n(21293)
          , s = n(19879)
          , r = n(24069)
          , o = n(18703);
        let d = (0,
        s.zo)(i.aV)( () => ({
            background: "rgba(0 0 0 / 0.72)",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "grid",
            placeItems: "center",
            overflowY: "auto",
            zIndex: 200,
            "&[data-state='open']": {
                animation: r.Ji
            },
            "&[data-state='closed']": {
                animation: r.U6,
                opacity: 0
            }
        }))
          , u = (0,
        s.zo)(i.VY, {
            name: "Modal-DialogContent"
        })(e => {
            let {theme: t} = e;
            return {
                pointerEvents: "none",
                backgroundColor: t.palette.background.paper,
                maxWidth: "100%",
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 210,
                paddingTop: 24,
                display: "flex",
                overflow: "hidden",
                flexDirection: "column",
                fontFamily: t.typography.fontFamily,
                borderRadius: t.shape.borderRadius,
                width: "100%",
                height: "100%",
                "&[data-state='open']": {
                    animation: r.uO
                },
                "&[data-state='closed']": {
                    animation: r.Gq,
                    opacity: 0
                },
                [t.breakpoints.up("md")]: {
                    width: 400,
                    height: 664
                }
            }
        }
        )
          , l = (0,
        s.zo)(i.Dx)(e => {
            let {theme: t} = e;
            return {
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 20,
                marginRight: 24,
                marginLeft: 24,
                color: t.palette.text.primary,
                ...t.typography.h4
            }
        }
        )
          , p = (0,
        s.zo)(i.x8)(e => {
            let {theme: t} = e;
            return {
                backgroundColor: "transparent",
                border: 0,
                position: "absolute",
                top: 23,
                right: 19,
                cursor: "pointer",
                color: t.palette.text.primary,
                paddingRight: 0,
                "&:hover": {
                    filter: "brightness(1.5)"
                }
            }
        }
        )
          , c = (0,
        s.zo)("div", {
            name: "ScrollContainer"
        })(e => {
            let {theme: t} = e;
            return {
                overflowY: "scroll",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                "&::-webkit-scrollbar": {
                    width: "1px"
                },
                "&::-webkit-scrollbar-track": {
                    background: "transparent"
                },
                "&::-webkit-scrollbar-thumb": {
                    background: t.palette.text.secondary
                },
                "&::-webkit-scrollbar-thumb:hover": {
                    background: t.palette.text.secondary
                }
            }
        }
        )
          , y = (0,
        s.zo)("div", {
            name: "ModalTopAdornment"
        })( () => ({
            marginBottom: "32px"
        }))
          , m = e => {
            let {title: t, open: n, onClose: s, children: r, topAdornment: m, overlay: h=!0, onOpenAutoFocus: f, contentSx: g} = e;
            return (0,
            a.jsx)(i.fC, {
                open: n,
                onOpenChange: e => !e && (null == s ? void 0 : s()),
                children: (0,
                a.jsxs)(i.h_, {
                    children: [h && (0,
                    a.jsx)(d, {}), (0,
                    a.jsxs)(u, {
                        onOpenAutoFocus: f,
                        children: [(0,
                        a.jsx)(l, {
                            children: t
                        }), m && (0,
                        a.jsx)(y, {
                            children: m
                        }), (0,
                        a.jsx)(c, {
                            sx: g,
                            children: r
                        }), (0,
                        a.jsx)(p, {
                            asChild: !0,
                            children: (0,
                            a.jsx)(o.J, {
                                type: "close",
                                size: 24
                            })
                        })]
                    })]
                })
            })
        }
    },
    14200: function(e, t, n) {
        "use strict";
        n.d(t, {
            O: function() {
                return o
            }
        });
        var a = n(27573)
          , i = n(83201)
          , s = n(97428)
          , r = n(19879);
        let o = e => {
            let {variant: t, ...n} = e
              , o = (0,
            r.Fg)()
              , {width: d, height: u} = n;
            return (0,
            a.jsxs)(i.ZP, {
                ...n,
                backgroundColor: (0,
                s.dc)(o.palette.background.paper, "light" === o.palette.mode ? -4 : 100),
                foregroundColor: (0,
                s.dc)(o.palette.background.paper, "light" === o.palette.mode ? -8 : 140),
                children: ["rectangular" === t && (0,
                a.jsx)("rect", {
                    x: 0,
                    y: 0,
                    rx: 4,
                    ry: 4,
                    height: u,
                    width: d
                }), "circular" === t && (0,
                a.jsx)("rect", {
                    x: 0,
                    y: 0,
                    height: u,
                    width: d,
                    rx: 1e3,
                    ry: 1e3
                })]
            })
        }
    },
    32471: function(e, t, n) {
        "use strict";
        n.d(t, {
            tM: function() {
                return y
            },
            mD: function() {
                return c
            },
            oX: function() {
                return _
            }
        });
        var a = n(27573)
          , i = n(21293)
          , s = JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.5.7","a":"","k":"","d":"","tc":""},"fr":30,"ip":0,"op":30,"w":70,"h":70,"nm":"Stargate Lottie","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"stargate_close_icon-03 Outlines 2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":9,"s":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":15,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":18,"s":[0]},{"t":25,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[35,35,0],"ix":2},"a":{"a":0,"k":[30.5,30.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-8.25,8.25],[8.25,-8.25]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.414165003159,0.787234317555,0.665130734911,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":3,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.34],"y":[1]},"o":{"x":[0.66],"y":[0]},"t":18,"s":[0]},{"t":30,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.34],"y":[1]},"o":{"x":[0.66],"y":[0]},"t":2,"s":[100]},{"t":18,"s":[0]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"tr","p":{"a":0,"k":[47.75,13.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":180,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":30,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"stargate_close_icon-04 Outlines 2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":9,"s":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":15,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":18,"s":[0]},{"t":25,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[35,35,0],"ix":2},"a":{"a":0,"k":[30.5,30.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-8.25,-8.25],[8.25,8.25]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.414165003159,0.787234317555,0.665130734911,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":3,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.34],"y":[1]},"o":{"x":[0.66],"y":[0]},"t":18,"s":[0]},{"t":30,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.34],"y":[1]},"o":{"x":[0.66],"y":[0]},"t":2,"s":[100]},{"t":18,"s":[0]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"tr","p":{"a":0,"k":[47.75,47.75],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":180,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":30,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"stargate_close_icon-02 Outlines 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.34,"y":1},"o":{"x":0.66,"y":0},"t":2,"s":[35,35,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.34,"y":1},"o":{"x":0.66,"y":0},"t":18,"s":[52.628,35,0],"to":[0,0,0],"ti":[0,0,0]},{"t":30,"s":[35,35,0]}],"ix":2},"a":{"a":0,"k":[30.5,30.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-12.75,25.5],[12.75,-0.009],[-12.734,-25.5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":1,"k":[{"i":{"x":[0.279],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":2,"s":[0.414165003159,0.787234317555,0.665130734911,1]},{"i":{"x":[0.672],"y":[-64.364]},"o":{"x":[0.296],"y":[0]},"t":15,"s":[0.6,0.6,0.6,1]},{"i":{"x":[0.695],"y":[-42.564]},"o":{"x":[0.352],"y":[23.373]},"t":18,"s":[0.6,0.6,0.6,1]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.441],"y":[62.923]},"t":19,"s":[0.6,0.6,0.6,1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":20,"s":[0.6,0.6,0.6,1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":21,"s":[0.6,0.6,0.6,1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":25,"s":[0.6,0.6,0.6,1]},{"t":29,"s":[0.414165003159,0.787234317555,0.665130734911,1]}],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":3,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[17.75,30.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":30,"st":0,"bm":0}],"markers":[]}')
          , r = n(80762)
          , o = n(18703)
          , d = n(19879)
          , u = n(24069)
          , l = n(82397)
          , p = n.n(l);
        let c = 210
          , y = 400
          , m = (0,
        d.zo)(i.VY, {
            name: "SlideIn-SlideInContent"
        })(e => {
            let {theme: t} = e;
            return {
                backgroundColor: t.palette.background.paper,
                maxWidth: "100%",
                position: "fixed",
                top: 0,
                bottom: 0,
                right: 0,
                zIndex: c,
                display: "flex",
                flex: 1,
                flexDirection: "column",
                fontFamily: t.typography.fontFamily,
                width: "100%",
                height: "100%",
                transition: "box-shadow 300ms",
                transitionDelay: "50ms",
                "&[data-state='open']": {
                    animation: u.MP
                },
                "&[data-state='closed']": {
                    animation: u.Pc,
                    pointerEvents: "none"
                },
                [t.breakpoints.down("md")]: {
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12
                },
                [t.breakpoints.up("md")]: {
                    width: y,
                    height: "auto",
                    marginTop: 8,
                    marginBottom: 8,
                    marginRight: 12,
                    borderRadius: t.shape.borderRadius,
                    boxShadow: "0px 4px 111.9px 0px rgba(0,0,0,0.12)",
                    "&:hover": {
                        boxShadow: "0px 4px 111.9px 0px rgba(0, 0, 0, 0.20)"
                    },
                    "&[data-state='open']": {
                        animation: u.x$
                    },
                    "&[data-state='closed']": {
                        animation: u.iX,
                        pointerEvents: "none"
                    }
                }
            }
        }
        )
          , h = (0,
        d.zo)("div", {
            name: "SlideIn-DialogContent"
        })(e => {
            let {theme: t} = e;
            return {
                overflow: "hidden",
                display: "flex",
                flexGrow: 1,
                [t.breakpoints.up("md")]: {
                    borderRadius: t.shape.borderRadius
                }
            }
        }
        )
          , f = (0,
        d.zo)(i.x8)({
            backgroundColor: "transparent",
            border: 0,
            position: "absolute",
            top: 16,
            right: 16,
            cursor: "pointer",
            paddingRight: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
            "& img": {
                width: 24
            },
            "&:hover": {
                opacity: .7
            }
        })
          , g = (0,
        d.zo)("div", {
            name: "SlideIn-ScrollContainer"
        })(e => {
            let {theme: t} = e;
            return {
                overflowY: "scroll",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                "&::-webkit-scrollbar": {
                    width: "1px"
                },
                "&::-webkit-scrollbar-track": {
                    background: "transparent"
                },
                "&::-webkit-scrollbar-thumb": {
                    background: t.palette.text.secondary
                },
                "&::-webkit-scrollbar-thumb:hover": {
                    background: t.palette.text.secondary
                }
            }
        }
        )
          , v = (0,
        d.zo)("div", {
            name: "SlideIn-TopAdornment"
        })({
            marginBottom: "12px",
            marginLeft: "16px"
        })
          , b = (0,
        d.zo)("button", {
            name: "SlideIn-CloseBar"
        })(e => {
            let {theme: t} = e;
            return {
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                marginLeft: -56,
                width: 56,
                backgroundColor: "transparent",
                border: 0,
                cursor: "pointer",
                display: "none",
                opacity: 0,
                zIndex: 215,
                transition: "opacity 300ms",
                outline: "none",
                transitionDelay: "50ms",
                "&:hover": {
                    opacity: 1
                },
                [t.breakpoints.up("md")]: {
                    display: "block"
                }
            }
        }
        )
          , T = (0,
        d.zo)("div", {
            name: "SlideIn-CloseBarIcon"
        })({
            width: 20,
            height: 20,
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)"
        })
          , _ = e => {
            let {open: t, onClose: n, children: d, topAdornment: u, height: l, showClose: c, contentSx: y, withCloseBar: _} = e;
            return (0,
            a.jsx)(i.fC, {
                open: t,
                onOpenChange: e => !e && (null == n ? void 0 : n()),
                modal: !1,
                children: (0,
                a.jsx)(i.h_, {
                    children: (0,
                    a.jsxs)(m, {
                        height: l,
                        onInteractOutside: e => {
                            e.preventDefault()
                        }
                        ,
                        sx: y,
                        children: [_ && (0,
                        a.jsx)(b, {
                            onClick: n,
                            children: (0,
                            a.jsx)(T, {
                                children: (0,
                                a.jsx)(p(), {
                                    play: !0,
                                    loop: !0,
                                    animationData: s,
                                    rendererSettings: {
                                        preserveAspectRatio: "xMidYMid slice"
                                    }
                                })
                            })
                        }), (0,
                        a.jsxs)(h, {
                            children: [u && (0,
                            a.jsx)(v, {
                                children: u
                            }), (0,
                            a.jsx)(g, {
                                children: d
                            }), (0,
                            a.jsx)(f, {
                                asChild: !0,
                                children: c && (0,
                                a.jsx)(r.z, {
                                    variant: "incognito",
                                    type: "button",
                                    onClick: n,
                                    children: (0,
                                    a.jsx)(o.J, {
                                        type: "close",
                                        size: 24,
                                        sx: {
                                            color: e => e.palette.text.secondary
                                        }
                                    })
                                })
                            })]
                        })]
                    })
                })
            })
        }
    },
    97250: function(e, t, n) {
        "use strict";
        n.d(t, {
            F: function() {
                return h
            },
            V: function() {
                return g
            }
        });
        var a = n(27573)
          , i = n(19902)
          , s = n(84427)
          , r = n(90818)
          , o = n(77535)
          , d = n(80762)
          , u = n(18703)
          , l = n(32471)
          , p = n(50449)
          , c = n(19879);
        let y = (0,
        a.jsx)(c.nz, {
            styles: e => ({
                ":root": {
                    "--toastify-z-index": 210,
                    "--toastify-color-progress-light": e.palette.text.primary,
                    "--toastify-icon-color-success": "".concat(e.palette.success.main, " !important"),
                    "--toastify-color-progress-success": "".concat(e.palette.text.secondary, " !important"),
                    "--toastify-color-error": e.palette.error.main,
                    "--toastify-color-progress-error": "".concat(e.palette.text.secondary, " !important"),
                    "--toastify-color-warning": e.palette.warning.main,
                    "--toastify-color-progress-warning": "".concat(e.palette.text.secondary, " !important"),
                    "--toastify-color-progress-info": "".concat(e.palette.text.secondary, " !important")
                },
                ".Toastify .Toastify__toast-container": {
                    width: 332,
                    maxWidth: "100%",
                    marginTop: o.M,
                    top: 0
                },
                ".Toastify .Toastify__toast": {
                    backgroundColor: e.palette.background.paper,
                    minHeight: 72,
                    border: "1px solid ".concat(e.palette.divider),
                    borderRadius: e.shape.borderRadius,
                    paddingRight: 50,
                    boxShadow: "none",
                    animationDuration: "200ms",
                    animationTimingFunction: "ease-out"
                },
                ".Toastify .Toastify__progress-bar": {
                    height: 2,
                    width: "90%",
                    left: 15
                },
                ".Toastify .Toastify__toast-container h1": {
                    ...e.typography.p2,
                    fontWeight: "500",
                    color: e.palette.text.primary
                },
                ".Toastify .Toastify__toast-container p": {
                    ...e.typography.p3,
                    color: e.palette.text.secondary,
                    marginTop: "4px",
                    lineBreak: "anywhere"
                },
                ".Toastify .Toastify__toast-container a": {
                    textDecoration: "underline"
                },
                ".Toastify .Toastify__toast-icon": {
                    marginBottom: "auto"
                }
            })
        })
          , m = (0,
        c.zo)("div", {
            name: "ToastContent"
        })({
            display: "flex",
            "& > svg": {
                marginRight: "12px"
            }
        })
          , h = (0,
        i.Pi)(e => {
            let {children: t, contentSx: n} = e;
            return (0,
            a.jsx)(m, {
                sx: n,
                children: (0,
                a.jsx)("div", {
                    children: t
                })
            })
        }
        )
          , f = (0,
        i.Pi)( () => {
            let e = (0,
            c.Fg)()
              , t = r.uiStore.accountSlideIn.value
              , {appHeaderBanner: n} = r.uiStore
              , i = n.value;
            return (0,
            a.jsx)(c.nz, {
                styles: {
                    ".Toastify .Toastify__toast-container--top-right": {
                        transform: "translate(0, ".concat(i ? "".concat(p.tL, "px") : "0px", ")"),
                        [e.breakpoints.up("md")]: {
                            transform: "translate(".concat(t ? "-".concat(l.tM + 10, "px") : "0px", ", ").concat(i ? "".concat(p.pZ, "px") : "0px", ")"),
                            transition: "200ms transform"
                        }
                    }
                }
            })
        }
        )
          , g = e => {
            let {children: t, toastDelay: n=7e3} = e;
            return (0,
            a.jsxs)(a.Fragment, {
                children: [t, y, (0,
                a.jsx)(f, {}), (0,
                a.jsx)(s.Ix, {
                    autoClose: n,
                    closeButton: b,
                    closeOnClick: !1,
                    pauseOnHover: !0,
                    pauseOnFocusLoss: !0,
                    transition: s.Mi,
                    icon: e => {
                        let {type: t} = e;
                        return "success" === t ? (0,
                        a.jsx)(u.J, {
                            type: "success",
                            size: 24,
                            sx: {
                                color: e => e.palette.success.main
                            }
                        }) : "error" === t || "warning" === t ? (0,
                        a.jsx)(u.J, {
                            type: "error",
                            size: 24,
                            sx: {
                                color: e => e.palette.error.main
                            }
                        }) : (0,
                        a.jsx)(u.J, {
                            type: "info",
                            size: 24,
                            sx: {
                                color: e => e.palette.text.secondary
                            }
                        })
                    }
                })]
            })
        }
          , v = (0,
        c.zo)("div", {
            name: "CloseButton"
        })( () => ({
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translate(-50%, -50%)"
        }))
          , b = e => {
            let {closeToast: t, ariaLabel: n} = e;
            return (0,
            a.jsx)(d.z, {
                variant: "incognito",
                "aria-label": n,
                sx: {
                    position: "absolute",
                    right: 0,
                    top: 0,
                    height: 16,
                    marginTop: 2,
                    marginRight: 1,
                    zIndex: 220,
                    color: e => e.palette.text.secondary
                },
                onClick: e => {
                    t(e)
                }
                ,
                children: (0,
                a.jsx)(v, {
                    children: (0,
                    a.jsx)(u.J, {
                        type: "close",
                        size: 16,
                        sx: {
                            color: e => e.palette.text.primary
                        }
                    })
                })
            })
        }
    },
    39552: function(e, t, n) {
        "use strict";
        async function a(e, t) {
            if (e.supportsChain && !await e.supportsChain(t))
                throw Error("Wallet does not support chain ".concat(t))
        }
        n.d(t, {
            b: function() {
                return a
            }
        })
    },
    57403: function(e, t, n) {
        "use strict";
        n.d(t, {
            K: function() {
                return i
            }
        });
        var a = n(46860);
        function i(e) {
            if (void 0 === e)
                return "-";
            let t = a.WI.getFiatAmount(e);
            return void 0 === t ? "-" : t.value.toLocaleString("en-US", s)
        }
        let s = {
            currency: "USD",
            style: "currency",
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
        }
    },
    31174: function(e, t, n) {
        "use strict";
        function a(e) {
            if ((null == e ? void 0 : e.state) === "fulfilled")
                return e.value
        }
        n.d(t, {
            d: function() {
                return a
            }
        })
    },
    35153: function(e, t, n) {
        "use strict";
        n.d(t, {
            y: function() {
                return i
            }
        });
        var a = n(38623);
        function i(e) {
            return a.ih.fromBigInt(e.token, a.Bz)
        }
    },
    56509: function(e, t, n) {
        "use strict";
        n.d(t, {
            g: function() {
                return o
            }
        });
        var a = n(26412)
          , i = n.n(a)
          , s = n(65720)
          , r = n(41270);
        let o = i()(async e => {
            let {data: t} = await s.Z.get("api/v1/address/".concat(e, "/blocked"));
            return d.parse(t).isBlocked
        }
        , {
            isPromise: !0,
            maxAge: 6e4
        })
          , d = r.z.object({
            isBlocked: r.z.boolean()
        })
    },
    52470: function(e, t, n) {
        "use strict";
        function a(e) {
            return e.icon ? e.icon : "https://icons-ckg.pages.dev/lz-scan/wallets/".concat(e.type.toLowerCase(), ".svg")
        }
        n.d(t, {
            o: function() {
                return a
            }
        })
    },
    48540: function(e, t, n) {
        "use strict";
        n.d(t, {
            S: function() {
                return i
            }
        });
        let a = new WeakSet;
        function i(e, t) {
            !function(e) {
                if (e && "object" == typeof e)
                    return a.has(e)
            }(e) && (e && "object" == typeof e && a.add(e),
            t())
        }
    },
    69808: function(e, t, n) {
        "use strict";
        n.d(t, {
            n: function() {
                return i
            }
        });
        let a = new Map;
        function i(e) {
            let t = a.get(e);
            if (t)
                return t;
            let n = e.toLowerCase().replaceAll("₮", "t").trim().replaceAll(/\s+/g, "").replaceAll(/[^\w\s]/g, "");
            return a.set(e, n),
            n
        }
    },
    50671: function(e, t, n) {
        "use strict";
        var a, i;
        function s(e) {
            return {
                title: (null == e ? void 0 : e.code) === 4001 ? "Transaction rejected" : "Transaction failed",
                message: function(e) {
                    var t;
                    let n = null == e ? void 0 : e.code;
                    if (n && "string" == typeof n && "INSUFFICIENT_FUNDS" === n)
                        return "Insufficient funds for gas. Make sure you have enough gas.";
                    let a = null == e ? void 0 : e.reason;
                    if (a && "string" == typeof a)
                        return a;
                    let i = (null == e ? void 0 : e.message) || (null == e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : t.message);
                    if (i && "string" == typeof i) {
                        if ("string" == typeof i) {
                            if (i.includes("INSUFFICIENT_BALANCE_FOR_TRANSACTION_FEE"))
                                return "Insufficient funds for gas. Make sure you have enough gas.";
                            if (i.includes("RejectedByUser"))
                                return "Transaction was rejected.";
                            if (i.includes("insufficient funds for gas"))
                                return "Insufficient funds for gas. Make sure you have enough gas."
                        }
                        return i
                    }
                    return String(null != e ? e : "Unknown error")
                }(e)
            }
        }
        n.d(t, {
            B: function() {
                return s
            }
        }),
        (i = a || (a = {})).INSUFFICIENT_FUNDS = "Insufficient funds for gas. Make sure you have enough gas.",
        i.REJECTED_BY_USER = "Transaction was rejected."
    },
    31348: function(e, t, n) {
        "use strict";
        n.d(t, {
            m: function() {
                return i
            }
        });
        var a = n(46860);
        function i(e, t) {
            return (e ? s(e) : 0) - (t ? s(t) : 0)
        }
        function s(e) {
            var t;
            let n = a.WI.getFiatAmount(e, a.Yw.USD);
            return null !== (t = null == n ? void 0 : n.value) && void 0 !== t ? t : 0
        }
    },
    69383: function(e, t, n) {
        "use strict";
        n.d(t, {
            C2: function() {
                return tf
            }
        });
        var a, i, s, r, o, d, u, l = n(18226), p = n(38623), c = n(35440), y = n(34541), m = n(27500), h = n(6518), f = n(5769), g = n(32489), v = Object.defineProperty, b = (e, t, n) => t in e ? v(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n, T = (e, t, n) => (b(e, "symbol" != typeof t ? t + "" : t, n),
        n);
        (a = r || (r = {})).assertEqual = e => e,
        a.assertIs = function(e) {}
        ,
        a.assertNever = function(e) {
            throw Error()
        }
        ,
        a.arrayToEnum = e => {
            let t = {};
            for (let n of e)
                t[n] = n;
            return t
        }
        ,
        a.getValidEnumValues = e => {
            let t = a.objectKeys(e).filter(t => "number" != typeof e[e[t]])
              , n = {};
            for (let a of t)
                n[a] = e[a];
            return a.objectValues(n)
        }
        ,
        a.objectValues = e => a.objectKeys(e).map(function(t) {
            return e[t]
        }),
        a.objectKeys = "function" == typeof Object.keys ? e => Object.keys(e) : e => {
            let t = [];
            for (let n in e)
                Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
            return t
        }
        ,
        a.find = (e, t) => {
            for (let n of e)
                if (t(n))
                    return n
        }
        ,
        a.isInteger = "function" == typeof Number.isInteger ? e => Number.isInteger(e) : e => "number" == typeof e && isFinite(e) && Math.floor(e) === e,
        a.joinValues = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
            return e.map(e => "string" == typeof e ? "'".concat(e, "'") : e).join(t)
        }
        ,
        a.jsonStringifyReplacer = (e, t) => "bigint" == typeof t ? t.toString() : t,
        (o || (o = {})).mergeShapes = (e, t) => ({
            ...e,
            ...t
        });
        var _ = r.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"])
          , x = e => {
            switch (typeof e) {
            case "undefined":
                return _.undefined;
            case "string":
                return _.string;
            case "number":
                return isNaN(e) ? _.nan : _.number;
            case "boolean":
                return _.boolean;
            case "function":
                return _.function;
            case "bigint":
                return _.bigint;
            case "symbol":
                return _.symbol;
            case "object":
                if (Array.isArray(e))
                    return _.array;
                if (null === e)
                    return _.null;
                if (e.then && "function" == typeof e.then && e.catch && "function" == typeof e.catch)
                    return _.promise;
                if ("undefined" != typeof Map && e instanceof Map)
                    return _.map;
                if ("undefined" != typeof Set && e instanceof Set)
                    return _.set;
                if ("undefined" != typeof Date && e instanceof Date)
                    return _.date;
                return _.object;
            default:
                return _.unknown
            }
        }
          , w = r.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"])
          , A = class extends Error {
            get errors() {
                return this.issues
            }
            format(e) {
                let t = e || function(e) {
                    return e.message
                }
                  , n = {
                    _errors: []
                }
                  , a = e => {
                    for (let i of e.issues)
                        if ("invalid_union" === i.code)
                            i.unionErrors.map(a);
                        else if ("invalid_return_type" === i.code)
                            a(i.returnTypeError);
                        else if ("invalid_arguments" === i.code)
                            a(i.argumentsError);
                        else if (0 === i.path.length)
                            n._errors.push(t(i));
                        else {
                            let e = n
                              , a = 0;
                            for (; a < i.path.length; ) {
                                let n = i.path[a];
                                a === i.path.length - 1 ? (e[n] = e[n] || {
                                    _errors: []
                                },
                                e[n]._errors.push(t(i))) : e[n] = e[n] || {
                                    _errors: []
                                },
                                e = e[n],
                                a++
                            }
                        }
                }
                ;
                return a(this),
                n
            }
            toString() {
                return this.message
            }
            get message() {
                return JSON.stringify(this.issues, r.jsonStringifyReplacer, 2)
            }
            get isEmpty() {
                return 0 === this.issues.length
            }
            flatten() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e => e.message
                  , t = {}
                  , n = [];
                for (let a of this.issues)
                    a.path.length > 0 ? (t[a.path[0]] = t[a.path[0]] || [],
                    t[a.path[0]].push(e(a))) : n.push(e(a));
                return {
                    formErrors: n,
                    fieldErrors: t
                }
            }
            get formErrors() {
                return this.flatten()
            }
            constructor(e) {
                var t;
                super(),
                t = this,
                this.issues = [],
                this.addIssue = e => {
                    this.issues = [...this.issues, e]
                }
                ,
                this.addIssues = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    t.issues = [...t.issues, ...e]
                }
                ;
                let n = new.target.prototype;
                Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n,
                this.name = "ZodError",
                this.issues = e
            }
        }
        ;
        A.create = e => new A(e);
        var k = (e, t) => {
            let n;
            switch (e.code) {
            case w.invalid_type:
                n = e.received === _.undefined ? "Required" : "Expected ".concat(e.expected, ", received ").concat(e.received);
                break;
            case w.invalid_literal:
                n = "Invalid literal value, expected ".concat(JSON.stringify(e.expected, r.jsonStringifyReplacer));
                break;
            case w.unrecognized_keys:
                n = "Unrecognized key(s) in object: ".concat(r.joinValues(e.keys, ", "));
                break;
            case w.invalid_union:
                n = "Invalid input";
                break;
            case w.invalid_union_discriminator:
                n = "Invalid discriminator value. Expected ".concat(r.joinValues(e.options));
                break;
            case w.invalid_enum_value:
                n = "Invalid enum value. Expected ".concat(r.joinValues(e.options), ", received '").concat(e.received, "'");
                break;
            case w.invalid_arguments:
                n = "Invalid function arguments";
                break;
            case w.invalid_return_type:
                n = "Invalid function return type";
                break;
            case w.invalid_date:
                n = "Invalid date";
                break;
            case w.invalid_string:
                "object" == typeof e.validation ? "includes"in e.validation ? (n = 'Invalid input: must include "'.concat(e.validation.includes, '"'),
                "number" == typeof e.validation.position && (n = "".concat(n, " at one or more positions greater than or equal to ").concat(e.validation.position))) : "startsWith"in e.validation ? n = 'Invalid input: must start with "'.concat(e.validation.startsWith, '"') : "endsWith"in e.validation ? n = 'Invalid input: must end with "'.concat(e.validation.endsWith, '"') : r.assertNever(e.validation) : n = "regex" !== e.validation ? "Invalid ".concat(e.validation) : "Invalid";
                break;
            case w.too_small:
                n = "array" === e.type ? "Array must contain ".concat(e.exact ? "exactly" : e.inclusive ? "at least" : "more than", " ").concat(e.minimum, " element(s)") : "string" === e.type ? "String must contain ".concat(e.exact ? "exactly" : e.inclusive ? "at least" : "over", " ").concat(e.minimum, " character(s)") : "number" === e.type ? "Number must be ".concat(e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than ").concat(e.minimum) : "date" === e.type ? "Date must be ".concat(e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than ").concat(new Date(Number(e.minimum))) : "Invalid input";
                break;
            case w.too_big:
                n = "array" === e.type ? "Array must contain ".concat(e.exact ? "exactly" : e.inclusive ? "at most" : "less than", " ").concat(e.maximum, " element(s)") : "string" === e.type ? "String must contain ".concat(e.exact ? "exactly" : e.inclusive ? "at most" : "under", " ").concat(e.maximum, " character(s)") : "number" === e.type ? "Number must be ".concat(e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than", " ").concat(e.maximum) : "bigint" === e.type ? "BigInt must be ".concat(e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than", " ").concat(e.maximum) : "date" === e.type ? "Date must be ".concat(e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than", " ").concat(new Date(Number(e.maximum))) : "Invalid input";
                break;
            case w.custom:
                n = "Invalid input";
                break;
            case w.invalid_intersection_types:
                n = "Intersection results could not be merged";
                break;
            case w.not_multiple_of:
                n = "Number must be a multiple of ".concat(e.multipleOf);
                break;
            case w.not_finite:
                n = "Number must be finite";
                break;
            default:
                n = t.defaultError,
                r.assertNever(e)
            }
            return {
                message: n
            }
        }
          , C = k;
        function E() {
            return C
        }
        var I = e => {
            let {data: t, path: n, errorMaps: a, issueData: i} = e
              , s = [...n, ...i.path || []]
              , r = {
                ...i,
                path: s
            }
              , o = "";
            for (let e of a.filter(e => !!e).slice().reverse())
                o = e(r, {
                    data: t,
                    defaultError: o
                }).message;
            return {
                ...i,
                path: s,
                message: i.message || o
            }
        }
        ;
        function O(e, t) {
            let n = I({
                issueData: t,
                data: e.data,
                path: e.path,
                errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, E(), k].filter(e => !!e)
            });
            e.common.issues.push(n)
        }
        var F = class {
            dirty() {
                "valid" === this.value && (this.value = "dirty")
            }
            abort() {
                "aborted" !== this.value && (this.value = "aborted")
            }
            static mergeArray(e, t) {
                let n = [];
                for (let a of t) {
                    if ("aborted" === a.status)
                        return M;
                    "dirty" === a.status && e.dirty(),
                    n.push(a.value)
                }
                return {
                    status: e.value,
                    value: n
                }
            }
            static async mergeObjectAsync(e, t) {
                let n = [];
                for (let e of t)
                    n.push({
                        key: await e.key,
                        value: await e.value
                    });
                return F.mergeObjectSync(e, n)
            }
            static mergeObjectSync(e, t) {
                let n = {};
                for (let a of t) {
                    let {key: t, value: i} = a;
                    if ("aborted" === t.status || "aborted" === i.status)
                        return M;
                    "dirty" === t.status && e.dirty(),
                    "dirty" === i.status && e.dirty(),
                    "__proto__" !== t.value && (void 0 !== i.value || a.alwaysSet) && (n[t.value] = i.value)
                }
                return {
                    status: e.value,
                    value: n
                }
            }
            constructor() {
                this.value = "valid"
            }
        }
          , M = Object.freeze({
            status: "aborted"
        })
          , P = e => ({
            status: "dirty",
            value: e
        })
          , S = e => ({
            status: "valid",
            value: e
        })
          , N = e => "aborted" === e.status
          , K = e => "dirty" === e.status
          , D = e => "valid" === e.status
          , z = e => "undefined" != typeof Promise && e instanceof Promise;
        (i = d || (d = {})).errToObj = e => "string" == typeof e ? {
            message: e
        } : e || {},
        i.toString = e => "string" == typeof e ? e : null == e ? void 0 : e.message;
        var R = class {
            get path() {
                return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)),
                this._cachedPath
            }
            constructor(e, t, n, a) {
                this._cachedPath = [],
                this.parent = e,
                this.data = t,
                this._path = n,
                this._key = a
            }
        }
          , B = (e, t) => {
            if (D(t))
                return {
                    success: !0,
                    data: t.value
                };
            if (!e.common.issues.length)
                throw Error("Validation failed but no issues detected.");
            return {
                success: !1,
                get error() {
                    if (this._error)
                        return this._error;
                    let t = new A(e.common.issues);
                    return this._error = t,
                    this._error
                }
            }
        }
        ;
        function j(e) {
            if (!e)
                return {};
            let {errorMap: t, invalid_type_error: n, required_error: a, description: i} = e;
            if (t && (n || a))
                throw Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
            return t ? {
                errorMap: t,
                description: i
            } : {
                errorMap: (e, t) => "invalid_type" !== e.code ? {
                    message: t.defaultError
                } : void 0 === t.data ? {
                    message: null != a ? a : t.defaultError
                } : {
                    message: null != n ? n : t.defaultError
                },
                description: i
            }
        }
        var L = class {
            get description() {
                return this._def.description
            }
            _getType(e) {
                return x(e.data)
            }
            _getOrReturnCtx(e, t) {
                return t || {
                    common: e.parent.common,
                    data: e.data,
                    parsedType: x(e.data),
                    schemaErrorMap: this._def.errorMap,
                    path: e.path,
                    parent: e.parent
                }
            }
            _processInputParams(e) {
                return {
                    status: new F,
                    ctx: {
                        common: e.parent.common,
                        data: e.data,
                        parsedType: x(e.data),
                        schemaErrorMap: this._def.errorMap,
                        path: e.path,
                        parent: e.parent
                    }
                }
            }
            _parseSync(e) {
                let t = this._parse(e);
                if (z(t))
                    throw Error("Synchronous parse encountered promise.");
                return t
            }
            _parseAsync(e) {
                return Promise.resolve(this._parse(e))
            }
            parse(e, t) {
                let n = this.safeParse(e, t);
                if (n.success)
                    return n.data;
                throw n.error
            }
            safeParse(e, t) {
                var n;
                let a = {
                    common: {
                        issues: [],
                        async: null !== (n = null == t ? void 0 : t.async) && void 0 !== n && n,
                        contextualErrorMap: null == t ? void 0 : t.errorMap
                    },
                    path: (null == t ? void 0 : t.path) || [],
                    schemaErrorMap: this._def.errorMap,
                    parent: null,
                    data: e,
                    parsedType: x(e)
                }
                  , i = this._parseSync({
                    data: e,
                    path: a.path,
                    parent: a
                });
                return B(a, i)
            }
            async parseAsync(e, t) {
                let n = await this.safeParseAsync(e, t);
                if (n.success)
                    return n.data;
                throw n.error
            }
            async safeParseAsync(e, t) {
                let n = {
                    common: {
                        issues: [],
                        contextualErrorMap: null == t ? void 0 : t.errorMap,
                        async: !0
                    },
                    path: (null == t ? void 0 : t.path) || [],
                    schemaErrorMap: this._def.errorMap,
                    parent: null,
                    data: e,
                    parsedType: x(e)
                }
                  , a = this._parse({
                    data: e,
                    path: n.path,
                    parent: n
                });
                return B(n, await (z(a) ? a : Promise.resolve(a)))
            }
            refine(e, t) {
                let n = e => "string" == typeof t || void 0 === t ? {
                    message: t
                } : "function" == typeof t ? t(e) : t;
                return this._refinement( (t, a) => {
                    let i = e(t)
                      , s = () => a.addIssue({
                        code: w.custom,
                        ...n(t)
                    });
                    return "undefined" != typeof Promise && i instanceof Promise ? i.then(e => !!e || (s(),
                    !1)) : !!i || (s(),
                    !1)
                }
                )
            }
            refinement(e, t) {
                return this._refinement( (n, a) => !!e(n) || (a.addIssue("function" == typeof t ? t(n, a) : t),
                !1))
            }
            _refinement(e) {
                return new eC({
                    schema: this,
                    typeName: u.ZodEffects,
                    effect: {
                        type: "refinement",
                        refinement: e
                    }
                })
            }
            superRefine(e) {
                return this._refinement(e)
            }
            optional() {
                return eE.create(this, this._def)
            }
            nullable() {
                return eI.create(this, this._def)
            }
            nullish() {
                return this.nullable().optional()
            }
            array() {
                return eu.create(this, this._def)
            }
            promise() {
                return ek.create(this, this._def)
            }
            or(e) {
                return ep.create([this, e], this._def)
            }
            and(e) {
                return em.create(this, e, this._def)
            }
            transform(e) {
                return new eC({
                    ...j(this._def),
                    schema: this,
                    typeName: u.ZodEffects,
                    effect: {
                        type: "transform",
                        transform: e
                    }
                })
            }
            default(e) {
                return new eO({
                    ...j(this._def),
                    innerType: this,
                    defaultValue: "function" == typeof e ? e : () => e,
                    typeName: u.ZodDefault
                })
            }
            brand() {
                return new eS({
                    typeName: u.ZodBranded,
                    type: this,
                    ...j(this._def)
                })
            }
            catch(e) {
                return new eF({
                    ...j(this._def),
                    innerType: this,
                    catchValue: "function" == typeof e ? e : () => e,
                    typeName: u.ZodCatch
                })
            }
            describe(e) {
                return new this.constructor({
                    ...this._def,
                    description: e
                })
            }
            pipe(e) {
                return eN.create(this, e)
            }
            readonly() {
                return eK.create(this)
            }
            isOptional() {
                return this.safeParse(void 0).success
            }
            isNullable() {
                return this.safeParse(null).success
            }
            constructor(e) {
                this.spa = this.safeParseAsync,
                this._def = e,
                this.parse = this.parse.bind(this),
                this.safeParse = this.safeParse.bind(this),
                this.parseAsync = this.parseAsync.bind(this),
                this.safeParseAsync = this.safeParseAsync.bind(this),
                this.spa = this.spa.bind(this),
                this.refine = this.refine.bind(this),
                this.refinement = this.refinement.bind(this),
                this.superRefine = this.superRefine.bind(this),
                this.optional = this.optional.bind(this),
                this.nullable = this.nullable.bind(this),
                this.nullish = this.nullish.bind(this),
                this.array = this.array.bind(this),
                this.promise = this.promise.bind(this),
                this.or = this.or.bind(this),
                this.and = this.and.bind(this),
                this.transform = this.transform.bind(this),
                this.brand = this.brand.bind(this),
                this.default = this.default.bind(this),
                this.catch = this.catch.bind(this),
                this.describe = this.describe.bind(this),
                this.pipe = this.pipe.bind(this),
                this.readonly = this.readonly.bind(this),
                this.isNullable = this.isNullable.bind(this),
                this.isOptional = this.isOptional.bind(this)
            }
        }
          , Z = /^c[^\s-]{8,}$/i
          , V = /^[a-z][a-z0-9]*$/
          , W = /[0-9A-HJKMNP-TV-Z]{26}/
          , G = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i
          , q = /^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i
          , U = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")
          , H = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/
          , J = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/
          , X = e => e.precision ? new RegExp(e.offset ? "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{".concat(e.precision, "}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{".concat(e.precision, "}Z$")) : 0 === e.precision ? e.offset ? RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")
          , Y = class extends L {
            _parse(e) {
                let t;
                if (this._def.coerce && (e.data = String(e.data)),
                this._getType(e) !== _.string) {
                    let t = this._getOrReturnCtx(e);
                    return O(t, {
                        code: w.invalid_type,
                        expected: _.string,
                        received: t.parsedType
                    }),
                    M
                }
                let n = new F;
                for (let s of this._def.checks)
                    if ("min" === s.kind)
                        e.data.length < s.value && (O(t = this._getOrReturnCtx(e, t), {
                            code: w.too_small,
                            minimum: s.value,
                            type: "string",
                            inclusive: !0,
                            exact: !1,
                            message: s.message
                        }),
                        n.dirty());
                    else if ("max" === s.kind)
                        e.data.length > s.value && (O(t = this._getOrReturnCtx(e, t), {
                            code: w.too_big,
                            maximum: s.value,
                            type: "string",
                            inclusive: !0,
                            exact: !1,
                            message: s.message
                        }),
                        n.dirty());
                    else if ("length" === s.kind) {
                        let a = e.data.length > s.value
                          , i = e.data.length < s.value;
                        (a || i) && (t = this._getOrReturnCtx(e, t),
                        a ? O(t, {
                            code: w.too_big,
                            maximum: s.value,
                            type: "string",
                            inclusive: !0,
                            exact: !0,
                            message: s.message
                        }) : i && O(t, {
                            code: w.too_small,
                            minimum: s.value,
                            type: "string",
                            inclusive: !0,
                            exact: !0,
                            message: s.message
                        }),
                        n.dirty())
                    } else if ("email" === s.kind)
                        q.test(e.data) || (O(t = this._getOrReturnCtx(e, t), {
                            validation: "email",
                            code: w.invalid_string,
                            message: s.message
                        }),
                        n.dirty());
                    else if ("emoji" === s.kind)
                        U.test(e.data) || (O(t = this._getOrReturnCtx(e, t), {
                            validation: "emoji",
                            code: w.invalid_string,
                            message: s.message
                        }),
                        n.dirty());
                    else if ("uuid" === s.kind)
                        G.test(e.data) || (O(t = this._getOrReturnCtx(e, t), {
                            validation: "uuid",
                            code: w.invalid_string,
                            message: s.message
                        }),
                        n.dirty());
                    else if ("cuid" === s.kind)
                        Z.test(e.data) || (O(t = this._getOrReturnCtx(e, t), {
                            validation: "cuid",
                            code: w.invalid_string,
                            message: s.message
                        }),
                        n.dirty());
                    else if ("cuid2" === s.kind)
                        V.test(e.data) || (O(t = this._getOrReturnCtx(e, t), {
                            validation: "cuid2",
                            code: w.invalid_string,
                            message: s.message
                        }),
                        n.dirty());
                    else if ("ulid" === s.kind)
                        W.test(e.data) || (O(t = this._getOrReturnCtx(e, t), {
                            validation: "ulid",
                            code: w.invalid_string,
                            message: s.message
                        }),
                        n.dirty());
                    else if ("url" === s.kind)
                        try {
                            new URL(e.data)
                        } catch (a) {
                            O(t = this._getOrReturnCtx(e, t), {
                                validation: "url",
                                code: w.invalid_string,
                                message: s.message
                            }),
                            n.dirty()
                        }
                    else if ("regex" === s.kind)
                        s.regex.lastIndex = 0,
                        s.regex.test(e.data) || (O(t = this._getOrReturnCtx(e, t), {
                            validation: "regex",
                            code: w.invalid_string,
                            message: s.message
                        }),
                        n.dirty());
                    else if ("trim" === s.kind)
                        e.data = e.data.trim();
                    else if ("includes" === s.kind)
                        e.data.includes(s.value, s.position) || (O(t = this._getOrReturnCtx(e, t), {
                            code: w.invalid_string,
                            validation: {
                                includes: s.value,
                                position: s.position
                            },
                            message: s.message
                        }),
                        n.dirty());
                    else if ("toLowerCase" === s.kind)
                        e.data = e.data.toLowerCase();
                    else if ("toUpperCase" === s.kind)
                        e.data = e.data.toUpperCase();
                    else if ("startsWith" === s.kind)
                        e.data.startsWith(s.value) || (O(t = this._getOrReturnCtx(e, t), {
                            code: w.invalid_string,
                            validation: {
                                startsWith: s.value
                            },
                            message: s.message
                        }),
                        n.dirty());
                    else if ("endsWith" === s.kind)
                        e.data.endsWith(s.value) || (O(t = this._getOrReturnCtx(e, t), {
                            code: w.invalid_string,
                            validation: {
                                endsWith: s.value
                            },
                            message: s.message
                        }),
                        n.dirty());
                    else if ("datetime" === s.kind)
                        X(s).test(e.data) || (O(t = this._getOrReturnCtx(e, t), {
                            code: w.invalid_string,
                            validation: "datetime",
                            message: s.message
                        }),
                        n.dirty());
                    else if ("ip" === s.kind) {
                        var a, i;
                        a = e.data,
                        ("v4" === (i = s.version) || !i) && H.test(a) || ("v6" === i || !i) && J.test(a) || (O(t = this._getOrReturnCtx(e, t), {
                            validation: "ip",
                            code: w.invalid_string,
                            message: s.message
                        }),
                        n.dirty())
                    } else
                        r.assertNever(s);
                return {
                    status: n.value,
                    value: e.data
                }
            }
            _addCheck(e) {
                return new Y({
                    ...this._def,
                    checks: [...this._def.checks, e]
                })
            }
            email(e) {
                return this._addCheck({
                    kind: "email",
                    ...d.errToObj(e)
                })
            }
            url(e) {
                return this._addCheck({
                    kind: "url",
                    ...d.errToObj(e)
                })
            }
            emoji(e) {
                return this._addCheck({
                    kind: "emoji",
                    ...d.errToObj(e)
                })
            }
            uuid(e) {
                return this._addCheck({
                    kind: "uuid",
                    ...d.errToObj(e)
                })
            }
            cuid(e) {
                return this._addCheck({
                    kind: "cuid",
                    ...d.errToObj(e)
                })
            }
            cuid2(e) {
                return this._addCheck({
                    kind: "cuid2",
                    ...d.errToObj(e)
                })
            }
            ulid(e) {
                return this._addCheck({
                    kind: "ulid",
                    ...d.errToObj(e)
                })
            }
            ip(e) {
                return this._addCheck({
                    kind: "ip",
                    ...d.errToObj(e)
                })
            }
            datetime(e) {
                var t;
                return "string" == typeof e ? this._addCheck({
                    kind: "datetime",
                    precision: null,
                    offset: !1,
                    message: e
                }) : this._addCheck({
                    kind: "datetime",
                    precision: void 0 === (null == e ? void 0 : e.precision) ? null : null == e ? void 0 : e.precision,
                    offset: null !== (t = null == e ? void 0 : e.offset) && void 0 !== t && t,
                    ...d.errToObj(null == e ? void 0 : e.message)
                })
            }
            regex(e, t) {
                return this._addCheck({
                    kind: "regex",
                    regex: e,
                    ...d.errToObj(t)
                })
            }
            includes(e, t) {
                return this._addCheck({
                    kind: "includes",
                    value: e,
                    position: null == t ? void 0 : t.position,
                    ...d.errToObj(null == t ? void 0 : t.message)
                })
            }
            startsWith(e, t) {
                return this._addCheck({
                    kind: "startsWith",
                    value: e,
                    ...d.errToObj(t)
                })
            }
            endsWith(e, t) {
                return this._addCheck({
                    kind: "endsWith",
                    value: e,
                    ...d.errToObj(t)
                })
            }
            min(e, t) {
                return this._addCheck({
                    kind: "min",
                    value: e,
                    ...d.errToObj(t)
                })
            }
            max(e, t) {
                return this._addCheck({
                    kind: "max",
                    value: e,
                    ...d.errToObj(t)
                })
            }
            length(e, t) {
                return this._addCheck({
                    kind: "length",
                    value: e,
                    ...d.errToObj(t)
                })
            }
            get isDatetime() {
                return !!this._def.checks.find(e => "datetime" === e.kind)
            }
            get isEmail() {
                return !!this._def.checks.find(e => "email" === e.kind)
            }
            get isURL() {
                return !!this._def.checks.find(e => "url" === e.kind)
            }
            get isEmoji() {
                return !!this._def.checks.find(e => "emoji" === e.kind)
            }
            get isUUID() {
                return !!this._def.checks.find(e => "uuid" === e.kind)
            }
            get isCUID() {
                return !!this._def.checks.find(e => "cuid" === e.kind)
            }
            get isCUID2() {
                return !!this._def.checks.find(e => "cuid2" === e.kind)
            }
            get isULID() {
                return !!this._def.checks.find(e => "ulid" === e.kind)
            }
            get isIP() {
                return !!this._def.checks.find(e => "ip" === e.kind)
            }
            get minLength() {
                let e = null;
                for (let t of this._def.checks)
                    "min" === t.kind && (null === e || t.value > e) && (e = t.value);
                return e
            }
            get maxLength() {
                let e = null;
                for (let t of this._def.checks)
                    "max" === t.kind && (null === e || t.value < e) && (e = t.value);
                return e
            }
            constructor() {
                super(...arguments),
                this._regex = (e, t, n) => this.refinement(t => e.test(t), {
                    validation: t,
                    code: w.invalid_string,
                    ...d.errToObj(n)
                }),
                this.nonempty = e => this.min(1, d.errToObj(e)),
                this.trim = () => new Y({
                    ...this._def,
                    checks: [...this._def.checks, {
                        kind: "trim"
                    }]
                }),
                this.toLowerCase = () => new Y({
                    ...this._def,
                    checks: [...this._def.checks, {
                        kind: "toLowerCase"
                    }]
                }),
                this.toUpperCase = () => new Y({
                    ...this._def,
                    checks: [...this._def.checks, {
                        kind: "toUpperCase"
                    }]
                })
            }
        }
        ;
        Y.create = e => {
            var t;
            return new Y({
                checks: [],
                typeName: u.ZodString,
                coerce: null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
                ...j(e)
            })
        }
        ;
        var $ = class extends L {
            _parse(e) {
                let t;
                if (this._def.coerce && (e.data = Number(e.data)),
                this._getType(e) !== _.number) {
                    let t = this._getOrReturnCtx(e);
                    return O(t, {
                        code: w.invalid_type,
                        expected: _.number,
                        received: t.parsedType
                    }),
                    M
                }
                let n = new F;
                for (let a of this._def.checks)
                    "int" === a.kind ? r.isInteger(e.data) || (O(t = this._getOrReturnCtx(e, t), {
                        code: w.invalid_type,
                        expected: "integer",
                        received: "float",
                        message: a.message
                    }),
                    n.dirty()) : "min" === a.kind ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (O(t = this._getOrReturnCtx(e, t), {
                        code: w.too_small,
                        minimum: a.value,
                        type: "number",
                        inclusive: a.inclusive,
                        exact: !1,
                        message: a.message
                    }),
                    n.dirty()) : "max" === a.kind ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (O(t = this._getOrReturnCtx(e, t), {
                        code: w.too_big,
                        maximum: a.value,
                        type: "number",
                        inclusive: a.inclusive,
                        exact: !1,
                        message: a.message
                    }),
                    n.dirty()) : "multipleOf" === a.kind ? 0 !== function(e, t) {
                        let n = (e.toString().split(".")[1] || "").length
                          , a = (t.toString().split(".")[1] || "").length
                          , i = n > a ? n : a;
                        return parseInt(e.toFixed(i).replace(".", "")) % parseInt(t.toFixed(i).replace(".", "")) / Math.pow(10, i)
                    }(e.data, a.value) && (O(t = this._getOrReturnCtx(e, t), {
                        code: w.not_multiple_of,
                        multipleOf: a.value,
                        message: a.message
                    }),
                    n.dirty()) : "finite" === a.kind ? Number.isFinite(e.data) || (O(t = this._getOrReturnCtx(e, t), {
                        code: w.not_finite,
                        message: a.message
                    }),
                    n.dirty()) : r.assertNever(a);
                return {
                    status: n.value,
                    value: e.data
                }
            }
            gte(e, t) {
                return this.setLimit("min", e, !0, d.toString(t))
            }
            gt(e, t) {
                return this.setLimit("min", e, !1, d.toString(t))
            }
            lte(e, t) {
                return this.setLimit("max", e, !0, d.toString(t))
            }
            lt(e, t) {
                return this.setLimit("max", e, !1, d.toString(t))
            }
            setLimit(e, t, n, a) {
                return new $({
                    ...this._def,
                    checks: [...this._def.checks, {
                        kind: e,
                        value: t,
                        inclusive: n,
                        message: d.toString(a)
                    }]
                })
            }
            _addCheck(e) {
                return new $({
                    ...this._def,
                    checks: [...this._def.checks, e]
                })
            }
            int(e) {
                return this._addCheck({
                    kind: "int",
                    message: d.toString(e)
                })
            }
            positive(e) {
                return this._addCheck({
                    kind: "min",
                    value: 0,
                    inclusive: !1,
                    message: d.toString(e)
                })
            }
            negative(e) {
                return this._addCheck({
                    kind: "max",
                    value: 0,
                    inclusive: !1,
                    message: d.toString(e)
                })
            }
            nonpositive(e) {
                return this._addCheck({
                    kind: "max",
                    value: 0,
                    inclusive: !0,
                    message: d.toString(e)
                })
            }
            nonnegative(e) {
                return this._addCheck({
                    kind: "min",
                    value: 0,
                    inclusive: !0,
                    message: d.toString(e)
                })
            }
            multipleOf(e, t) {
                return this._addCheck({
                    kind: "multipleOf",
                    value: e,
                    message: d.toString(t)
                })
            }
            finite(e) {
                return this._addCheck({
                    kind: "finite",
                    message: d.toString(e)
                })
            }
            safe(e) {
                return this._addCheck({
                    kind: "min",
                    inclusive: !0,
                    value: Number.MIN_SAFE_INTEGER,
                    message: d.toString(e)
                })._addCheck({
                    kind: "max",
                    inclusive: !0,
                    value: Number.MAX_SAFE_INTEGER,
                    message: d.toString(e)
                })
            }
            get minValue() {
                let e = null;
                for (let t of this._def.checks)
                    "min" === t.kind && (null === e || t.value > e) && (e = t.value);
                return e
            }
            get maxValue() {
                let e = null;
                for (let t of this._def.checks)
                    "max" === t.kind && (null === e || t.value < e) && (e = t.value);
                return e
            }
            get isInt() {
                return !!this._def.checks.find(e => "int" === e.kind || "multipleOf" === e.kind && r.isInteger(e.value))
            }
            get isFinite() {
                let e = null
                  , t = null;
                for (let n of this._def.checks) {
                    if ("finite" === n.kind || "int" === n.kind || "multipleOf" === n.kind)
                        return !0;
                    "min" === n.kind ? (null === t || n.value > t) && (t = n.value) : "max" === n.kind && (null === e || n.value < e) && (e = n.value)
                }
                return Number.isFinite(t) && Number.isFinite(e)
            }
            constructor() {
                super(...arguments),
                this.min = this.gte,
                this.max = this.lte,
                this.step = this.multipleOf
            }
        }
        ;
        $.create = e => new $({
            checks: [],
            typeName: u.ZodNumber,
            coerce: (null == e ? void 0 : e.coerce) || !1,
            ...j(e)
        });
        var Q = class extends L {
            _parse(e) {
                let t;
                if (this._def.coerce && (e.data = BigInt(e.data)),
                this._getType(e) !== _.bigint) {
                    let t = this._getOrReturnCtx(e);
                    return O(t, {
                        code: w.invalid_type,
                        expected: _.bigint,
                        received: t.parsedType
                    }),
                    M
                }
                let n = new F;
                for (let a of this._def.checks)
                    "min" === a.kind ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (O(t = this._getOrReturnCtx(e, t), {
                        code: w.too_small,
                        type: "bigint",
                        minimum: a.value,
                        inclusive: a.inclusive,
                        message: a.message
                    }),
                    n.dirty()) : "max" === a.kind ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (O(t = this._getOrReturnCtx(e, t), {
                        code: w.too_big,
                        type: "bigint",
                        maximum: a.value,
                        inclusive: a.inclusive,
                        message: a.message
                    }),
                    n.dirty()) : "multipleOf" === a.kind ? e.data % a.value !== BigInt(0) && (O(t = this._getOrReturnCtx(e, t), {
                        code: w.not_multiple_of,
                        multipleOf: a.value,
                        message: a.message
                    }),
                    n.dirty()) : r.assertNever(a);
                return {
                    status: n.value,
                    value: e.data
                }
            }
            gte(e, t) {
                return this.setLimit("min", e, !0, d.toString(t))
            }
            gt(e, t) {
                return this.setLimit("min", e, !1, d.toString(t))
            }
            lte(e, t) {
                return this.setLimit("max", e, !0, d.toString(t))
            }
            lt(e, t) {
                return this.setLimit("max", e, !1, d.toString(t))
            }
            setLimit(e, t, n, a) {
                return new Q({
                    ...this._def,
                    checks: [...this._def.checks, {
                        kind: e,
                        value: t,
                        inclusive: n,
                        message: d.toString(a)
                    }]
                })
            }
            _addCheck(e) {
                return new Q({
                    ...this._def,
                    checks: [...this._def.checks, e]
                })
            }
            positive(e) {
                return this._addCheck({
                    kind: "min",
                    value: BigInt(0),
                    inclusive: !1,
                    message: d.toString(e)
                })
            }
            negative(e) {
                return this._addCheck({
                    kind: "max",
                    value: BigInt(0),
                    inclusive: !1,
                    message: d.toString(e)
                })
            }
            nonpositive(e) {
                return this._addCheck({
                    kind: "max",
                    value: BigInt(0),
                    inclusive: !0,
                    message: d.toString(e)
                })
            }
            nonnegative(e) {
                return this._addCheck({
                    kind: "min",
                    value: BigInt(0),
                    inclusive: !0,
                    message: d.toString(e)
                })
            }
            multipleOf(e, t) {
                return this._addCheck({
                    kind: "multipleOf",
                    value: e,
                    message: d.toString(t)
                })
            }
            get minValue() {
                let e = null;
                for (let t of this._def.checks)
                    "min" === t.kind && (null === e || t.value > e) && (e = t.value);
                return e
            }
            get maxValue() {
                let e = null;
                for (let t of this._def.checks)
                    "max" === t.kind && (null === e || t.value < e) && (e = t.value);
                return e
            }
            constructor() {
                super(...arguments),
                this.min = this.gte,
                this.max = this.lte
            }
        }
        ;
        Q.create = e => {
            var t;
            return new Q({
                checks: [],
                typeName: u.ZodBigInt,
                coerce: null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
                ...j(e)
            })
        }
        ;
        var ee = class extends L {
            _parse(e) {
                if (this._def.coerce && (e.data = !!e.data),
                this._getType(e) !== _.boolean) {
                    let t = this._getOrReturnCtx(e);
                    return O(t, {
                        code: w.invalid_type,
                        expected: _.boolean,
                        received: t.parsedType
                    }),
                    M
                }
                return S(e.data)
            }
        }
        ;
        ee.create = e => new ee({
            typeName: u.ZodBoolean,
            coerce: (null == e ? void 0 : e.coerce) || !1,
            ...j(e)
        });
        var et = class extends L {
            _parse(e) {
                let t;
                if (this._def.coerce && (e.data = new Date(e.data)),
                this._getType(e) !== _.date) {
                    let t = this._getOrReturnCtx(e);
                    return O(t, {
                        code: w.invalid_type,
                        expected: _.date,
                        received: t.parsedType
                    }),
                    M
                }
                if (isNaN(e.data.getTime()))
                    return O(this._getOrReturnCtx(e), {
                        code: w.invalid_date
                    }),
                    M;
                let n = new F;
                for (let a of this._def.checks)
                    "min" === a.kind ? e.data.getTime() < a.value && (O(t = this._getOrReturnCtx(e, t), {
                        code: w.too_small,
                        message: a.message,
                        inclusive: !0,
                        exact: !1,
                        minimum: a.value,
                        type: "date"
                    }),
                    n.dirty()) : "max" === a.kind ? e.data.getTime() > a.value && (O(t = this._getOrReturnCtx(e, t), {
                        code: w.too_big,
                        message: a.message,
                        inclusive: !0,
                        exact: !1,
                        maximum: a.value,
                        type: "date"
                    }),
                    n.dirty()) : r.assertNever(a);
                return {
                    status: n.value,
                    value: new Date(e.data.getTime())
                }
            }
            _addCheck(e) {
                return new et({
                    ...this._def,
                    checks: [...this._def.checks, e]
                })
            }
            min(e, t) {
                return this._addCheck({
                    kind: "min",
                    value: e.getTime(),
                    message: d.toString(t)
                })
            }
            max(e, t) {
                return this._addCheck({
                    kind: "max",
                    value: e.getTime(),
                    message: d.toString(t)
                })
            }
            get minDate() {
                let e = null;
                for (let t of this._def.checks)
                    "min" === t.kind && (null === e || t.value > e) && (e = t.value);
                return null != e ? new Date(e) : null
            }
            get maxDate() {
                let e = null;
                for (let t of this._def.checks)
                    "max" === t.kind && (null === e || t.value < e) && (e = t.value);
                return null != e ? new Date(e) : null
            }
        }
        ;
        et.create = e => new et({
            checks: [],
            coerce: (null == e ? void 0 : e.coerce) || !1,
            typeName: u.ZodDate,
            ...j(e)
        });
        var en = class extends L {
            _parse(e) {
                if (this._getType(e) !== _.symbol) {
                    let t = this._getOrReturnCtx(e);
                    return O(t, {
                        code: w.invalid_type,
                        expected: _.symbol,
                        received: t.parsedType
                    }),
                    M
                }
                return S(e.data)
            }
        }
        ;
        en.create = e => new en({
            typeName: u.ZodSymbol,
            ...j(e)
        });
        var ea = class extends L {
            _parse(e) {
                if (this._getType(e) !== _.undefined) {
                    let t = this._getOrReturnCtx(e);
                    return O(t, {
                        code: w.invalid_type,
                        expected: _.undefined,
                        received: t.parsedType
                    }),
                    M
                }
                return S(e.data)
            }
        }
        ;
        ea.create = e => new ea({
            typeName: u.ZodUndefined,
            ...j(e)
        });
        var ei = class extends L {
            _parse(e) {
                if (this._getType(e) !== _.null) {
                    let t = this._getOrReturnCtx(e);
                    return O(t, {
                        code: w.invalid_type,
                        expected: _.null,
                        received: t.parsedType
                    }),
                    M
                }
                return S(e.data)
            }
        }
        ;
        ei.create = e => new ei({
            typeName: u.ZodNull,
            ...j(e)
        });
        var es = class extends L {
            _parse(e) {
                return S(e.data)
            }
            constructor() {
                super(...arguments),
                this._any = !0
            }
        }
        ;
        es.create = e => new es({
            typeName: u.ZodAny,
            ...j(e)
        });
        var er = class extends L {
            _parse(e) {
                return S(e.data)
            }
            constructor() {
                super(...arguments),
                this._unknown = !0
            }
        }
        ;
        er.create = e => new er({
            typeName: u.ZodUnknown,
            ...j(e)
        });
        var eo = class extends L {
            _parse(e) {
                let t = this._getOrReturnCtx(e);
                return O(t, {
                    code: w.invalid_type,
                    expected: _.never,
                    received: t.parsedType
                }),
                M
            }
        }
        ;
        eo.create = e => new eo({
            typeName: u.ZodNever,
            ...j(e)
        });
        var ed = class extends L {
            _parse(e) {
                if (this._getType(e) !== _.undefined) {
                    let t = this._getOrReturnCtx(e);
                    return O(t, {
                        code: w.invalid_type,
                        expected: _.void,
                        received: t.parsedType
                    }),
                    M
                }
                return S(e.data)
            }
        }
        ;
        ed.create = e => new ed({
            typeName: u.ZodVoid,
            ...j(e)
        });
        var eu = class extends L {
            _parse(e) {
                let {ctx: t, status: n} = this._processInputParams(e)
                  , a = this._def;
                if (t.parsedType !== _.array)
                    return O(t, {
                        code: w.invalid_type,
                        expected: _.array,
                        received: t.parsedType
                    }),
                    M;
                if (null !== a.exactLength) {
                    let e = t.data.length > a.exactLength.value
                      , i = t.data.length < a.exactLength.value;
                    (e || i) && (O(t, {
                        code: e ? w.too_big : w.too_small,
                        minimum: i ? a.exactLength.value : void 0,
                        maximum: e ? a.exactLength.value : void 0,
                        type: "array",
                        inclusive: !0,
                        exact: !0,
                        message: a.exactLength.message
                    }),
                    n.dirty())
                }
                if (null !== a.minLength && t.data.length < a.minLength.value && (O(t, {
                    code: w.too_small,
                    minimum: a.minLength.value,
                    type: "array",
                    inclusive: !0,
                    exact: !1,
                    message: a.minLength.message
                }),
                n.dirty()),
                null !== a.maxLength && t.data.length > a.maxLength.value && (O(t, {
                    code: w.too_big,
                    maximum: a.maxLength.value,
                    type: "array",
                    inclusive: !0,
                    exact: !1,
                    message: a.maxLength.message
                }),
                n.dirty()),
                t.common.async)
                    return Promise.all([...t.data].map( (e, n) => a.type._parseAsync(new R(t,e,t.path,n)))).then(e => F.mergeArray(n, e));
                let i = [...t.data].map( (e, n) => a.type._parseSync(new R(t,e,t.path,n)));
                return F.mergeArray(n, i)
            }
            get element() {
                return this._def.type
            }
            min(e, t) {
                return new eu({
                    ...this._def,
                    minLength: {
                        value: e,
                        message: d.toString(t)
                    }
                })
            }
            max(e, t) {
                return new eu({
                    ...this._def,
                    maxLength: {
                        value: e,
                        message: d.toString(t)
                    }
                })
            }
            length(e, t) {
                return new eu({
                    ...this._def,
                    exactLength: {
                        value: e,
                        message: d.toString(t)
                    }
                })
            }
            nonempty(e) {
                return this.min(1, e)
            }
        }
        ;
        eu.create = (e, t) => new eu({
            type: e,
            minLength: null,
            maxLength: null,
            exactLength: null,
            typeName: u.ZodArray,
            ...j(t)
        });
        var el = class extends L {
            _getCached() {
                if (null !== this._cached)
                    return this._cached;
                let e = this._def.shape()
                  , t = r.objectKeys(e);
                return this._cached = {
                    shape: e,
                    keys: t
                }
            }
            _parse(e) {
                if (this._getType(e) !== _.object) {
                    let t = this._getOrReturnCtx(e);
                    return O(t, {
                        code: w.invalid_type,
                        expected: _.object,
                        received: t.parsedType
                    }),
                    M
                }
                let {status: t, ctx: n} = this._processInputParams(e)
                  , {shape: a, keys: i} = this._getCached()
                  , s = [];
                if (!(this._def.catchall instanceof eo && "strip" === this._def.unknownKeys))
                    for (let e in n.data)
                        i.includes(e) || s.push(e);
                let r = [];
                for (let e of i) {
                    let t = a[e]
                      , i = n.data[e];
                    r.push({
                        key: {
                            status: "valid",
                            value: e
                        },
                        value: t._parse(new R(n,i,n.path,e)),
                        alwaysSet: e in n.data
                    })
                }
                if (this._def.catchall instanceof eo) {
                    let e = this._def.unknownKeys;
                    if ("passthrough" === e)
                        for (let e of s)
                            r.push({
                                key: {
                                    status: "valid",
                                    value: e
                                },
                                value: {
                                    status: "valid",
                                    value: n.data[e]
                                }
                            });
                    else if ("strict" === e)
                        s.length > 0 && (O(n, {
                            code: w.unrecognized_keys,
                            keys: s
                        }),
                        t.dirty());
                    else if ("strip" === e)
                        ;
                    else
                        throw Error("Internal ZodObject error: invalid unknownKeys value.")
                } else {
                    let e = this._def.catchall;
                    for (let t of s) {
                        let a = n.data[t];
                        r.push({
                            key: {
                                status: "valid",
                                value: t
                            },
                            value: e._parse(new R(n,a,n.path,t)),
                            alwaysSet: t in n.data
                        })
                    }
                }
                return n.common.async ? Promise.resolve().then(async () => {
                    let e = [];
                    for (let t of r) {
                        let n = await t.key;
                        e.push({
                            key: n,
                            value: await t.value,
                            alwaysSet: t.alwaysSet
                        })
                    }
                    return e
                }
                ).then(e => F.mergeObjectSync(t, e)) : F.mergeObjectSync(t, r)
            }
            get shape() {
                return this._def.shape()
            }
            strict(e) {
                return d.errToObj,
                new el({
                    ...this._def,
                    unknownKeys: "strict",
                    ...void 0 !== e ? {
                        errorMap: (t, n) => {
                            var a, i, s, r;
                            let o = null !== (s = null === (i = (a = this._def).errorMap) || void 0 === i ? void 0 : i.call(a, t, n).message) && void 0 !== s ? s : n.defaultError;
                            return "unrecognized_keys" === t.code ? {
                                message: null !== (r = d.errToObj(e).message) && void 0 !== r ? r : o
                            } : {
                                message: o
                            }
                        }
                    } : {}
                })
            }
            strip() {
                return new el({
                    ...this._def,
                    unknownKeys: "strip"
                })
            }
            passthrough() {
                return new el({
                    ...this._def,
                    unknownKeys: "passthrough"
                })
            }
            extend(e) {
                return new el({
                    ...this._def,
                    shape: () => ({
                        ...this._def.shape(),
                        ...e
                    })
                })
            }
            merge(e) {
                return new el({
                    unknownKeys: e._def.unknownKeys,
                    catchall: e._def.catchall,
                    shape: () => ({
                        ...this._def.shape(),
                        ...e._def.shape()
                    }),
                    typeName: u.ZodObject
                })
            }
            setKey(e, t) {
                return this.augment({
                    [e]: t
                })
            }
            catchall(e) {
                return new el({
                    ...this._def,
                    catchall: e
                })
            }
            pick(e) {
                let t = {};
                return r.objectKeys(e).forEach(n => {
                    e[n] && this.shape[n] && (t[n] = this.shape[n])
                }
                ),
                new el({
                    ...this._def,
                    shape: () => t
                })
            }
            omit(e) {
                let t = {};
                return r.objectKeys(this.shape).forEach(n => {
                    e[n] || (t[n] = this.shape[n])
                }
                ),
                new el({
                    ...this._def,
                    shape: () => t
                })
            }
            deepPartial() {
                return function e(t) {
                    if (t instanceof el) {
                        let n = {};
                        for (let a in t.shape) {
                            let i = t.shape[a];
                            n[a] = eE.create(e(i))
                        }
                        return new el({
                            ...t._def,
                            shape: () => n
                        })
                    }
                    return t instanceof eu ? new eu({
                        ...t._def,
                        type: e(t.element)
                    }) : t instanceof eE ? eE.create(e(t.unwrap())) : t instanceof eI ? eI.create(e(t.unwrap())) : t instanceof eh ? eh.create(t.items.map(t => e(t))) : t
                }(this)
            }
            partial(e) {
                let t = {};
                return r.objectKeys(this.shape).forEach(n => {
                    let a = this.shape[n];
                    e && !e[n] ? t[n] = a : t[n] = a.optional()
                }
                ),
                new el({
                    ...this._def,
                    shape: () => t
                })
            }
            required(e) {
                let t = {};
                return r.objectKeys(this.shape).forEach(n => {
                    if (e && !e[n])
                        t[n] = this.shape[n];
                    else {
                        let e = this.shape[n];
                        for (; e instanceof eE; )
                            e = e._def.innerType;
                        t[n] = e
                    }
                }
                ),
                new el({
                    ...this._def,
                    shape: () => t
                })
            }
            keyof() {
                return ex(r.objectKeys(this.shape))
            }
            constructor() {
                super(...arguments),
                this._cached = null,
                this.nonstrict = this.passthrough,
                this.augment = this.extend
            }
        }
        ;
        el.create = (e, t) => new el({
            shape: () => e,
            unknownKeys: "strip",
            catchall: eo.create(),
            typeName: u.ZodObject,
            ...j(t)
        }),
        el.strictCreate = (e, t) => new el({
            shape: () => e,
            unknownKeys: "strict",
            catchall: eo.create(),
            typeName: u.ZodObject,
            ...j(t)
        }),
        el.lazycreate = (e, t) => new el({
            shape: e,
            unknownKeys: "strip",
            catchall: eo.create(),
            typeName: u.ZodObject,
            ...j(t)
        });
        var ep = class extends L {
            _parse(e) {
                let {ctx: t} = this._processInputParams(e)
                  , n = this._def.options;
                if (t.common.async)
                    return Promise.all(n.map(async e => {
                        let n = {
                            ...t,
                            common: {
                                ...t.common,
                                issues: []
                            },
                            parent: null
                        };
                        return {
                            result: await e._parseAsync({
                                data: t.data,
                                path: t.path,
                                parent: n
                            }),
                            ctx: n
                        }
                    }
                    )).then(function(e) {
                        for (let t of e)
                            if ("valid" === t.result.status)
                                return t.result;
                        for (let n of e)
                            if ("dirty" === n.result.status)
                                return t.common.issues.push(...n.ctx.common.issues),
                                n.result;
                        let n = e.map(e => new A(e.ctx.common.issues));
                        return O(t, {
                            code: w.invalid_union,
                            unionErrors: n
                        }),
                        M
                    });
                {
                    let e;
                    let a = [];
                    for (let i of n) {
                        let n = {
                            ...t,
                            common: {
                                ...t.common,
                                issues: []
                            },
                            parent: null
                        }
                          , s = i._parseSync({
                            data: t.data,
                            path: t.path,
                            parent: n
                        });
                        if ("valid" === s.status)
                            return s;
                        "dirty" !== s.status || e || (e = {
                            result: s,
                            ctx: n
                        }),
                        n.common.issues.length && a.push(n.common.issues)
                    }
                    if (e)
                        return t.common.issues.push(...e.ctx.common.issues),
                        e.result;
                    let i = a.map(e => new A(e));
                    return O(t, {
                        code: w.invalid_union,
                        unionErrors: i
                    }),
                    M
                }
            }
            get options() {
                return this._def.options
            }
        }
        ;
        ep.create = (e, t) => new ep({
            options: e,
            typeName: u.ZodUnion,
            ...j(t)
        });
        var ec = e => {
            if (e instanceof eT)
                return ec(e.schema);
            if (e instanceof eC)
                return ec(e.innerType());
            if (e instanceof e_)
                return [e.value];
            if (e instanceof ew)
                return e.options;
            if (e instanceof eA)
                return Object.keys(e.enum);
            if (e instanceof eO)
                return ec(e._def.innerType);
            if (e instanceof ea)
                return [void 0];
            else if (e instanceof ei)
                return [null];
            else
                return null
        }
          , ey = class extends L {
            _parse(e) {
                let {ctx: t} = this._processInputParams(e);
                if (t.parsedType !== _.object)
                    return O(t, {
                        code: w.invalid_type,
                        expected: _.object,
                        received: t.parsedType
                    }),
                    M;
                let n = this.discriminator
                  , a = t.data[n]
                  , i = this.optionsMap.get(a);
                return i ? t.common.async ? i._parseAsync({
                    data: t.data,
                    path: t.path,
                    parent: t
                }) : i._parseSync({
                    data: t.data,
                    path: t.path,
                    parent: t
                }) : (O(t, {
                    code: w.invalid_union_discriminator,
                    options: Array.from(this.optionsMap.keys()),
                    path: [n]
                }),
                M)
            }
            get discriminator() {
                return this._def.discriminator
            }
            get options() {
                return this._def.options
            }
            get optionsMap() {
                return this._def.optionsMap
            }
            static create(e, t, n) {
                let a = new Map;
                for (let n of t) {
                    let t = ec(n.shape[e]);
                    if (!t)
                        throw Error("A discriminator value for key `".concat(e, "` could not be extracted from all schema options"));
                    for (let i of t) {
                        if (a.has(i))
                            throw Error("Discriminator property ".concat(String(e), " has duplicate value ").concat(String(i)));
                        a.set(i, n)
                    }
                }
                return new ey({
                    typeName: u.ZodDiscriminatedUnion,
                    discriminator: e,
                    options: t,
                    optionsMap: a,
                    ...j(n)
                })
            }
        }
          , em = class extends L {
            _parse(e) {
                let {status: t, ctx: n} = this._processInputParams(e)
                  , a = (e, a) => {
                    if (N(e) || N(a))
                        return M;
                    let i = function e(t, n) {
                        let a = x(t)
                          , i = x(n);
                        if (t === n)
                            return {
                                valid: !0,
                                data: t
                            };
                        if (a === _.object && i === _.object) {
                            let a = r.objectKeys(n)
                              , i = r.objectKeys(t).filter(e => -1 !== a.indexOf(e))
                              , s = {
                                ...t,
                                ...n
                            };
                            for (let a of i) {
                                let i = e(t[a], n[a]);
                                if (!i.valid)
                                    return {
                                        valid: !1
                                    };
                                s[a] = i.data
                            }
                            return {
                                valid: !0,
                                data: s
                            }
                        }
                        if (a === _.array && i === _.array) {
                            if (t.length !== n.length)
                                return {
                                    valid: !1
                                };
                            let a = [];
                            for (let i = 0; i < t.length; i++) {
                                let s = e(t[i], n[i]);
                                if (!s.valid)
                                    return {
                                        valid: !1
                                    };
                                a.push(s.data)
                            }
                            return {
                                valid: !0,
                                data: a
                            }
                        }
                        return a === _.date && i === _.date && +t == +n ? {
                            valid: !0,
                            data: t
                        } : {
                            valid: !1
                        }
                    }(e.value, a.value);
                    return i.valid ? ((K(e) || K(a)) && t.dirty(),
                    {
                        status: t.value,
                        value: i.data
                    }) : (O(n, {
                        code: w.invalid_intersection_types
                    }),
                    M)
                }
                ;
                return n.common.async ? Promise.all([this._def.left._parseAsync({
                    data: n.data,
                    path: n.path,
                    parent: n
                }), this._def.right._parseAsync({
                    data: n.data,
                    path: n.path,
                    parent: n
                })]).then(e => {
                    let[t,n] = e;
                    return a(t, n)
                }
                ) : a(this._def.left._parseSync({
                    data: n.data,
                    path: n.path,
                    parent: n
                }), this._def.right._parseSync({
                    data: n.data,
                    path: n.path,
                    parent: n
                }))
            }
        }
        ;
        em.create = (e, t, n) => new em({
            left: e,
            right: t,
            typeName: u.ZodIntersection,
            ...j(n)
        });
        var eh = class extends L {
            _parse(e) {
                let {status: t, ctx: n} = this._processInputParams(e);
                if (n.parsedType !== _.array)
                    return O(n, {
                        code: w.invalid_type,
                        expected: _.array,
                        received: n.parsedType
                    }),
                    M;
                if (n.data.length < this._def.items.length)
                    return O(n, {
                        code: w.too_small,
                        minimum: this._def.items.length,
                        inclusive: !0,
                        exact: !1,
                        type: "array"
                    }),
                    M;
                !this._def.rest && n.data.length > this._def.items.length && (O(n, {
                    code: w.too_big,
                    maximum: this._def.items.length,
                    inclusive: !0,
                    exact: !1,
                    type: "array"
                }),
                t.dirty());
                let a = [...n.data].map( (e, t) => {
                    let a = this._def.items[t] || this._def.rest;
                    return a ? a._parse(new R(n,e,n.path,t)) : null
                }
                ).filter(e => !!e);
                return n.common.async ? Promise.all(a).then(e => F.mergeArray(t, e)) : F.mergeArray(t, a)
            }
            get items() {
                return this._def.items
            }
            rest(e) {
                return new eh({
                    ...this._def,
                    rest: e
                })
            }
        }
        ;
        eh.create = (e, t) => {
            if (!Array.isArray(e))
                throw Error("You must pass an array of schemas to z.tuple([ ... ])");
            return new eh({
                items: e,
                typeName: u.ZodTuple,
                rest: null,
                ...j(t)
            })
        }
        ;
        var ef = class extends L {
            get keySchema() {
                return this._def.keyType
            }
            get valueSchema() {
                return this._def.valueType
            }
            _parse(e) {
                let {status: t, ctx: n} = this._processInputParams(e);
                if (n.parsedType !== _.object)
                    return O(n, {
                        code: w.invalid_type,
                        expected: _.object,
                        received: n.parsedType
                    }),
                    M;
                let a = []
                  , i = this._def.keyType
                  , s = this._def.valueType;
                for (let e in n.data)
                    a.push({
                        key: i._parse(new R(n,e,n.path,e)),
                        value: s._parse(new R(n,n.data[e],n.path,e))
                    });
                return n.common.async ? F.mergeObjectAsync(t, a) : F.mergeObjectSync(t, a)
            }
            get element() {
                return this._def.valueType
            }
            static create(e, t, n) {
                return new ef(t instanceof L ? {
                    keyType: e,
                    valueType: t,
                    typeName: u.ZodRecord,
                    ...j(n)
                } : {
                    keyType: Y.create(),
                    valueType: e,
                    typeName: u.ZodRecord,
                    ...j(t)
                })
            }
        }
          , eg = class extends L {
            get keySchema() {
                return this._def.keyType
            }
            get valueSchema() {
                return this._def.valueType
            }
            _parse(e) {
                let {status: t, ctx: n} = this._processInputParams(e);
                if (n.parsedType !== _.map)
                    return O(n, {
                        code: w.invalid_type,
                        expected: _.map,
                        received: n.parsedType
                    }),
                    M;
                let a = this._def.keyType
                  , i = this._def.valueType
                  , s = [...n.data.entries()].map( (e, t) => {
                    let[s,r] = e;
                    return {
                        key: a._parse(new R(n,s,n.path,[t, "key"])),
                        value: i._parse(new R(n,r,n.path,[t, "value"]))
                    }
                }
                );
                if (n.common.async) {
                    let e = new Map;
                    return Promise.resolve().then(async () => {
                        for (let n of s) {
                            let a = await n.key
                              , i = await n.value;
                            if ("aborted" === a.status || "aborted" === i.status)
                                return M;
                            ("dirty" === a.status || "dirty" === i.status) && t.dirty(),
                            e.set(a.value, i.value)
                        }
                        return {
                            status: t.value,
                            value: e
                        }
                    }
                    )
                }
                {
                    let e = new Map;
                    for (let n of s) {
                        let a = n.key
                          , i = n.value;
                        if ("aborted" === a.status || "aborted" === i.status)
                            return M;
                        ("dirty" === a.status || "dirty" === i.status) && t.dirty(),
                        e.set(a.value, i.value)
                    }
                    return {
                        status: t.value,
                        value: e
                    }
                }
            }
        }
        ;
        eg.create = (e, t, n) => new eg({
            valueType: t,
            keyType: e,
            typeName: u.ZodMap,
            ...j(n)
        });
        var ev = class extends L {
            _parse(e) {
                let {status: t, ctx: n} = this._processInputParams(e);
                if (n.parsedType !== _.set)
                    return O(n, {
                        code: w.invalid_type,
                        expected: _.set,
                        received: n.parsedType
                    }),
                    M;
                let a = this._def;
                null !== a.minSize && n.data.size < a.minSize.value && (O(n, {
                    code: w.too_small,
                    minimum: a.minSize.value,
                    type: "set",
                    inclusive: !0,
                    exact: !1,
                    message: a.minSize.message
                }),
                t.dirty()),
                null !== a.maxSize && n.data.size > a.maxSize.value && (O(n, {
                    code: w.too_big,
                    maximum: a.maxSize.value,
                    type: "set",
                    inclusive: !0,
                    exact: !1,
                    message: a.maxSize.message
                }),
                t.dirty());
                let i = this._def.valueType;
                function s(e) {
                    let n = new Set;
                    for (let a of e) {
                        if ("aborted" === a.status)
                            return M;
                        "dirty" === a.status && t.dirty(),
                        n.add(a.value)
                    }
                    return {
                        status: t.value,
                        value: n
                    }
                }
                let r = [...n.data.values()].map( (e, t) => i._parse(new R(n,e,n.path,t)));
                return n.common.async ? Promise.all(r).then(e => s(e)) : s(r)
            }
            min(e, t) {
                return new ev({
                    ...this._def,
                    minSize: {
                        value: e,
                        message: d.toString(t)
                    }
                })
            }
            max(e, t) {
                return new ev({
                    ...this._def,
                    maxSize: {
                        value: e,
                        message: d.toString(t)
                    }
                })
            }
            size(e, t) {
                return this.min(e, t).max(e, t)
            }
            nonempty(e) {
                return this.min(1, e)
            }
        }
        ;
        ev.create = (e, t) => new ev({
            valueType: e,
            minSize: null,
            maxSize: null,
            typeName: u.ZodSet,
            ...j(t)
        });
        var eb = class extends L {
            _parse(e) {
                let {ctx: t} = this._processInputParams(e);
                if (t.parsedType !== _.function)
                    return O(t, {
                        code: w.invalid_type,
                        expected: _.function,
                        received: t.parsedType
                    }),
                    M;
                function n(e, n) {
                    return I({
                        data: e,
                        path: t.path,
                        errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, E(), k].filter(e => !!e),
                        issueData: {
                            code: w.invalid_arguments,
                            argumentsError: n
                        }
                    })
                }
                function a(e, n) {
                    return I({
                        data: e,
                        path: t.path,
                        errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, E(), k].filter(e => !!e),
                        issueData: {
                            code: w.invalid_return_type,
                            returnTypeError: n
                        }
                    })
                }
                let i = {
                    errorMap: t.common.contextualErrorMap
                }
                  , s = t.data;
                if (this._def.returns instanceof ek) {
                    let e = this;
                    return S(async function() {
                        for (var t = arguments.length, r = Array(t), o = 0; o < t; o++)
                            r[o] = arguments[o];
                        let d = new A([])
                          , u = await e._def.args.parseAsync(r, i).catch(e => {
                            throw d.addIssue(n(r, e)),
                            d
                        }
                        )
                          , l = await Reflect.apply(s, this, u);
                        return await e._def.returns._def.type.parseAsync(l, i).catch(e => {
                            throw d.addIssue(a(l, e)),
                            d
                        }
                        )
                    })
                }
                {
                    let e = this;
                    return S(function() {
                        for (var t = arguments.length, r = Array(t), o = 0; o < t; o++)
                            r[o] = arguments[o];
                        let d = e._def.args.safeParse(r, i);
                        if (!d.success)
                            throw new A([n(r, d.error)]);
                        let u = Reflect.apply(s, this, d.data)
                          , l = e._def.returns.safeParse(u, i);
                        if (!l.success)
                            throw new A([a(u, l.error)]);
                        return l.data
                    })
                }
            }
            parameters() {
                return this._def.args
            }
            returnType() {
                return this._def.returns
            }
            args() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return new eb({
                    ...this._def,
                    args: eh.create(t).rest(er.create())
                })
            }
            returns(e) {
                return new eb({
                    ...this._def,
                    returns: e
                })
            }
            implement(e) {
                return this.parse(e)
            }
            strictImplement(e) {
                return this.parse(e)
            }
            static create(e, t, n) {
                return new eb({
                    args: e || eh.create([]).rest(er.create()),
                    returns: t || er.create(),
                    typeName: u.ZodFunction,
                    ...j(n)
                })
            }
            constructor() {
                super(...arguments),
                this.validate = this.implement
            }
        }
          , eT = class extends L {
            get schema() {
                return this._def.getter()
            }
            _parse(e) {
                let {ctx: t} = this._processInputParams(e);
                return this._def.getter()._parse({
                    data: t.data,
                    path: t.path,
                    parent: t
                })
            }
        }
        ;
        eT.create = (e, t) => new eT({
            getter: e,
            typeName: u.ZodLazy,
            ...j(t)
        });
        var e_ = class extends L {
            _parse(e) {
                if (e.data !== this._def.value) {
                    let t = this._getOrReturnCtx(e);
                    return O(t, {
                        received: t.data,
                        code: w.invalid_literal,
                        expected: this._def.value
                    }),
                    M
                }
                return {
                    status: "valid",
                    value: e.data
                }
            }
            get value() {
                return this._def.value
            }
        }
        ;
        function ex(e, t) {
            return new ew({
                values: e,
                typeName: u.ZodEnum,
                ...j(t)
            })
        }
        e_.create = (e, t) => new e_({
            value: e,
            typeName: u.ZodLiteral,
            ...j(t)
        });
        var ew = class extends L {
            _parse(e) {
                if ("string" != typeof e.data) {
                    let t = this._getOrReturnCtx(e)
                      , n = this._def.values;
                    return O(t, {
                        expected: r.joinValues(n),
                        received: t.parsedType,
                        code: w.invalid_type
                    }),
                    M
                }
                if (-1 === this._def.values.indexOf(e.data)) {
                    let t = this._getOrReturnCtx(e)
                      , n = this._def.values;
                    return O(t, {
                        received: t.data,
                        code: w.invalid_enum_value,
                        options: n
                    }),
                    M
                }
                return S(e.data)
            }
            get options() {
                return this._def.values
            }
            get enum() {
                let e = {};
                for (let t of this._def.values)
                    e[t] = t;
                return e
            }
            get Values() {
                let e = {};
                for (let t of this._def.values)
                    e[t] = t;
                return e
            }
            get Enum() {
                let e = {};
                for (let t of this._def.values)
                    e[t] = t;
                return e
            }
            extract(e) {
                return ew.create(e)
            }
            exclude(e) {
                return ew.create(this.options.filter(t => !e.includes(t)))
            }
        }
        ;
        ew.create = ex;
        var eA = class extends L {
            _parse(e) {
                let t = r.getValidEnumValues(this._def.values)
                  , n = this._getOrReturnCtx(e);
                if (n.parsedType !== _.string && n.parsedType !== _.number) {
                    let e = r.objectValues(t);
                    return O(n, {
                        expected: r.joinValues(e),
                        received: n.parsedType,
                        code: w.invalid_type
                    }),
                    M
                }
                if (-1 === t.indexOf(e.data)) {
                    let e = r.objectValues(t);
                    return O(n, {
                        received: n.data,
                        code: w.invalid_enum_value,
                        options: e
                    }),
                    M
                }
                return S(e.data)
            }
            get enum() {
                return this._def.values
            }
        }
        ;
        eA.create = (e, t) => new eA({
            values: e,
            typeName: u.ZodNativeEnum,
            ...j(t)
        });
        var ek = class extends L {
            unwrap() {
                return this._def.type
            }
            _parse(e) {
                let {ctx: t} = this._processInputParams(e);
                return t.parsedType !== _.promise && !1 === t.common.async ? (O(t, {
                    code: w.invalid_type,
                    expected: _.promise,
                    received: t.parsedType
                }),
                M) : S((t.parsedType === _.promise ? t.data : Promise.resolve(t.data)).then(e => this._def.type.parseAsync(e, {
                    path: t.path,
                    errorMap: t.common.contextualErrorMap
                })))
            }
        }
        ;
        ek.create = (e, t) => new ek({
            type: e,
            typeName: u.ZodPromise,
            ...j(t)
        });
        var eC = class extends L {
            innerType() {
                return this._def.schema
            }
            sourceType() {
                return this._def.schema._def.typeName === u.ZodEffects ? this._def.schema.sourceType() : this._def.schema
            }
            _parse(e) {
                let {status: t, ctx: n} = this._processInputParams(e)
                  , a = this._def.effect || null
                  , i = {
                    addIssue: e => {
                        O(n, e),
                        e.fatal ? t.abort() : t.dirty()
                    }
                    ,
                    get path() {
                        return n.path
                    }
                };
                if (i.addIssue = i.addIssue.bind(i),
                "preprocess" === a.type) {
                    let e = a.transform(n.data, i);
                    return n.common.issues.length ? {
                        status: "dirty",
                        value: n.data
                    } : n.common.async ? Promise.resolve(e).then(e => this._def.schema._parseAsync({
                        data: e,
                        path: n.path,
                        parent: n
                    })) : this._def.schema._parseSync({
                        data: e,
                        path: n.path,
                        parent: n
                    })
                }
                if ("refinement" === a.type) {
                    let e = e => {
                        let t = a.refinement(e, i);
                        if (n.common.async)
                            return Promise.resolve(t);
                        if (t instanceof Promise)
                            throw Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                        return e
                    }
                    ;
                    if (!1 !== n.common.async)
                        return this._def.schema._parseAsync({
                            data: n.data,
                            path: n.path,
                            parent: n
                        }).then(n => "aborted" === n.status ? M : ("dirty" === n.status && t.dirty(),
                        e(n.value).then( () => ({
                            status: t.value,
                            value: n.value
                        }))));
                    {
                        let a = this._def.schema._parseSync({
                            data: n.data,
                            path: n.path,
                            parent: n
                        });
                        return "aborted" === a.status ? M : ("dirty" === a.status && t.dirty(),
                        e(a.value),
                        {
                            status: t.value,
                            value: a.value
                        })
                    }
                }
                if ("transform" === a.type) {
                    if (!1 !== n.common.async)
                        return this._def.schema._parseAsync({
                            data: n.data,
                            path: n.path,
                            parent: n
                        }).then(e => D(e) ? Promise.resolve(a.transform(e.value, i)).then(e => ({
                            status: t.value,
                            value: e
                        })) : e);
                    {
                        let e = this._def.schema._parseSync({
                            data: n.data,
                            path: n.path,
                            parent: n
                        });
                        if (!D(e))
                            return e;
                        let s = a.transform(e.value, i);
                        if (s instanceof Promise)
                            throw Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                        return {
                            status: t.value,
                            value: s
                        }
                    }
                }
                r.assertNever(a)
            }
        }
        ;
        eC.create = (e, t, n) => new eC({
            schema: e,
            typeName: u.ZodEffects,
            effect: t,
            ...j(n)
        }),
        eC.createWithPreprocess = (e, t, n) => new eC({
            schema: t,
            effect: {
                type: "preprocess",
                transform: e
            },
            typeName: u.ZodEffects,
            ...j(n)
        });
        var eE = class extends L {
            _parse(e) {
                return this._getType(e) === _.undefined ? S(void 0) : this._def.innerType._parse(e)
            }
            unwrap() {
                return this._def.innerType
            }
        }
        ;
        eE.create = (e, t) => new eE({
            innerType: e,
            typeName: u.ZodOptional,
            ...j(t)
        });
        var eI = class extends L {
            _parse(e) {
                return this._getType(e) === _.null ? S(null) : this._def.innerType._parse(e)
            }
            unwrap() {
                return this._def.innerType
            }
        }
        ;
        eI.create = (e, t) => new eI({
            innerType: e,
            typeName: u.ZodNullable,
            ...j(t)
        });
        var eO = class extends L {
            _parse(e) {
                let {ctx: t} = this._processInputParams(e)
                  , n = t.data;
                return t.parsedType === _.undefined && (n = this._def.defaultValue()),
                this._def.innerType._parse({
                    data: n,
                    path: t.path,
                    parent: t
                })
            }
            removeDefault() {
                return this._def.innerType
            }
        }
        ;
        eO.create = (e, t) => new eO({
            innerType: e,
            typeName: u.ZodDefault,
            defaultValue: "function" == typeof t.default ? t.default : () => t.default,
            ...j(t)
        });
        var eF = class extends L {
            _parse(e) {
                let {ctx: t} = this._processInputParams(e)
                  , n = {
                    ...t,
                    common: {
                        ...t.common,
                        issues: []
                    }
                }
                  , a = this._def.innerType._parse({
                    data: n.data,
                    path: n.path,
                    parent: {
                        ...n
                    }
                });
                return z(a) ? a.then(e => ({
                    status: "valid",
                    value: "valid" === e.status ? e.value : this._def.catchValue({
                        get error() {
                            return new A(n.common.issues)
                        },
                        input: n.data
                    })
                })) : {
                    status: "valid",
                    value: "valid" === a.status ? a.value : this._def.catchValue({
                        get error() {
                            return new A(n.common.issues)
                        },
                        input: n.data
                    })
                }
            }
            removeCatch() {
                return this._def.innerType
            }
        }
        ;
        eF.create = (e, t) => new eF({
            innerType: e,
            typeName: u.ZodCatch,
            catchValue: "function" == typeof t.catch ? t.catch : () => t.catch,
            ...j(t)
        });
        var eM = class extends L {
            _parse(e) {
                if (this._getType(e) !== _.nan) {
                    let t = this._getOrReturnCtx(e);
                    return O(t, {
                        code: w.invalid_type,
                        expected: _.nan,
                        received: t.parsedType
                    }),
                    M
                }
                return {
                    status: "valid",
                    value: e.data
                }
            }
        }
        ;
        eM.create = e => new eM({
            typeName: u.ZodNaN,
            ...j(e)
        });
        var eP = Symbol("zod_brand")
          , eS = class extends L {
            _parse(e) {
                let {ctx: t} = this._processInputParams(e)
                  , n = t.data;
                return this._def.type._parse({
                    data: n,
                    path: t.path,
                    parent: t
                })
            }
            unwrap() {
                return this._def.type
            }
        }
          , eN = class extends L {
            _parse(e) {
                let {status: t, ctx: n} = this._processInputParams(e);
                if (n.common.async)
                    return (async () => {
                        let e = await this._def.in._parseAsync({
                            data: n.data,
                            path: n.path,
                            parent: n
                        });
                        return "aborted" === e.status ? M : "dirty" === e.status ? (t.dirty(),
                        P(e.value)) : this._def.out._parseAsync({
                            data: e.value,
                            path: n.path,
                            parent: n
                        })
                    }
                    )();
                {
                    let e = this._def.in._parseSync({
                        data: n.data,
                        path: n.path,
                        parent: n
                    });
                    return "aborted" === e.status ? M : "dirty" === e.status ? (t.dirty(),
                    {
                        status: "dirty",
                        value: e.value
                    }) : this._def.out._parseSync({
                        data: e.value,
                        path: n.path,
                        parent: n
                    })
                }
            }
            static create(e, t) {
                return new eN({
                    in: e,
                    out: t,
                    typeName: u.ZodPipeline
                })
            }
        }
          , eK = class extends L {
            _parse(e) {
                let t = this._def.innerType._parse(e);
                return D(t) && (t.value = Object.freeze(t.value)),
                t
            }
        }
        ;
        eK.create = (e, t) => new eK({
            innerType: e,
            typeName: u.ZodReadonly,
            ...j(t)
        });
        var eD = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = arguments.length > 2 ? arguments[2] : void 0;
            return e ? es.create().superRefine( (a, i) => {
                var s, r;
                if (!e(a)) {
                    let e = "function" == typeof t ? t(a) : "string" == typeof t ? {
                        message: t
                    } : t
                      , o = null === (r = null !== (s = e.fatal) && void 0 !== s ? s : n) || void 0 === r || r;
                    i.addIssue({
                        code: "custom",
                        ..."string" == typeof e ? {
                            message: e
                        } : e,
                        fatal: o
                    })
                }
            }
            ) : es.create()
        }
          , ez = {
            object: el.lazycreate
        };
        (s = u || (u = {})).ZodString = "ZodString",
        s.ZodNumber = "ZodNumber",
        s.ZodNaN = "ZodNaN",
        s.ZodBigInt = "ZodBigInt",
        s.ZodBoolean = "ZodBoolean",
        s.ZodDate = "ZodDate",
        s.ZodSymbol = "ZodSymbol",
        s.ZodUndefined = "ZodUndefined",
        s.ZodNull = "ZodNull",
        s.ZodAny = "ZodAny",
        s.ZodUnknown = "ZodUnknown",
        s.ZodNever = "ZodNever",
        s.ZodVoid = "ZodVoid",
        s.ZodArray = "ZodArray",
        s.ZodObject = "ZodObject",
        s.ZodUnion = "ZodUnion",
        s.ZodDiscriminatedUnion = "ZodDiscriminatedUnion",
        s.ZodIntersection = "ZodIntersection",
        s.ZodTuple = "ZodTuple",
        s.ZodRecord = "ZodRecord",
        s.ZodMap = "ZodMap",
        s.ZodSet = "ZodSet",
        s.ZodFunction = "ZodFunction",
        s.ZodLazy = "ZodLazy",
        s.ZodLiteral = "ZodLiteral",
        s.ZodEnum = "ZodEnum",
        s.ZodEffects = "ZodEffects",
        s.ZodNativeEnum = "ZodNativeEnum",
        s.ZodOptional = "ZodOptional",
        s.ZodNullable = "ZodNullable",
        s.ZodDefault = "ZodDefault",
        s.ZodCatch = "ZodCatch",
        s.ZodPromise = "ZodPromise",
        s.ZodBranded = "ZodBranded",
        s.ZodPipeline = "ZodPipeline",
        s.ZodReadonly = "ZodReadonly";
        var eR = Y.create
          , eB = $.create
          , ej = eM.create
          , eL = Q.create
          , eZ = ee.create
          , eV = et.create
          , eW = en.create
          , eG = ea.create
          , eq = ei.create
          , eU = es.create
          , eH = er.create
          , eJ = eo.create
          , eX = ed.create
          , eY = eu.create
          , e$ = el.create
          , eQ = el.strictCreate
          , e0 = ep.create
          , e1 = ey.create
          , e6 = em.create
          , e2 = eh.create
          , e5 = ef.create
          , e3 = eg.create
          , e4 = ev.create
          , e7 = eb.create
          , e8 = eT.create
          , e9 = e_.create
          , te = ew.create
          , tt = eA.create
          , tn = ek.create
          , ta = eC.create
          , ti = eE.create
          , ts = eI.create
          , tr = eC.createWithPreprocess
          , to = eN.create
          , td = Object.freeze({
            __proto__: null,
            defaultErrorMap: k,
            setErrorMap: function(e) {
                C = e
            },
            getErrorMap: E,
            makeIssue: I,
            EMPTY_PATH: [],
            addIssueToContext: O,
            ParseStatus: F,
            INVALID: M,
            DIRTY: P,
            OK: S,
            isAborted: N,
            isDirty: K,
            isValid: D,
            isAsync: z,
            get util() {
                return r
            },
            get objectUtil() {
                return o
            },
            ZodParsedType: _,
            getParsedType: x,
            ZodType: L,
            ZodString: Y,
            ZodNumber: $,
            ZodBigInt: Q,
            ZodBoolean: ee,
            ZodDate: et,
            ZodSymbol: en,
            ZodUndefined: ea,
            ZodNull: ei,
            ZodAny: es,
            ZodUnknown: er,
            ZodNever: eo,
            ZodVoid: ed,
            ZodArray: eu,
            ZodObject: el,
            ZodUnion: ep,
            ZodDiscriminatedUnion: ey,
            ZodIntersection: em,
            ZodTuple: eh,
            ZodRecord: ef,
            ZodMap: eg,
            ZodSet: ev,
            ZodFunction: eb,
            ZodLazy: eT,
            ZodLiteral: e_,
            ZodEnum: ew,
            ZodNativeEnum: eA,
            ZodPromise: ek,
            ZodEffects: eC,
            ZodTransformer: eC,
            ZodOptional: eE,
            ZodNullable: eI,
            ZodDefault: eO,
            ZodCatch: eF,
            ZodNaN: eM,
            BRAND: eP,
            ZodBranded: eS,
            ZodPipeline: eN,
            ZodReadonly: eK,
            custom: eD,
            Schema: L,
            ZodSchema: L,
            late: ez,
            get ZodFirstPartyTypeKind() {
                return u
            },
            coerce: {
                string: e => Y.create({
                    ...e,
                    coerce: !0
                }),
                number: e => $.create({
                    ...e,
                    coerce: !0
                }),
                boolean: e => ee.create({
                    ...e,
                    coerce: !0
                }),
                bigint: e => Q.create({
                    ...e,
                    coerce: !0
                }),
                date: e => et.create({
                    ...e,
                    coerce: !0
                })
            },
            any: eU,
            array: eY,
            bigint: eL,
            boolean: eZ,
            date: eV,
            discriminatedUnion: e1,
            effect: ta,
            enum: te,
            function: e7,
            instanceof: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    message: "Input not instance of ".concat(e.name)
                };
                return eD(t => t instanceof e, t)
            },
            intersection: e6,
            lazy: e8,
            literal: e9,
            map: e3,
            nan: ej,
            nativeEnum: tt,
            never: eJ,
            null: eq,
            nullable: ts,
            number: eB,
            object: e$,
            oboolean: () => eZ().optional(),
            onumber: () => eB().optional(),
            optional: ti,
            ostring: () => eR().optional(),
            pipeline: to,
            preprocess: tr,
            promise: tn,
            record: e5,
            set: e4,
            strictObject: eQ,
            string: eR,
            symbol: eW,
            transformer: ta,
            tuple: e2,
            undefined: eG,
            union: e0,
            unknown: eH,
            void: eX,
            NEVER: M,
            ZodIssueCode: w,
            quotelessJson: e => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:"),
            ZodError: A
        });
        td.object({
            deployments: td.record(td.object({
                oftWrapper: td.object({
                    version: td.number().optional(),
                    address: td.string()
                })
            }))
        }),
        td.object({
            caller: td.string(),
            callerBps: td.number(),
            partnerId: td.number()
        });
        var tu = [{
            inputs: [{
                internalType: "address",
                name: "_lzEndpoint",
                type: "address"
            }],
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "Approval",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "uint16",
                name: "_srcChainId",
                type: "uint16"
            }, {
                indexed: !1,
                internalType: "bytes",
                name: "_srcAddress",
                type: "bytes"
            }, {
                indexed: !1,
                internalType: "uint64",
                name: "_nonce",
                type: "uint64"
            }, {
                indexed: !1,
                internalType: "bytes32",
                name: "_hash",
                type: "bytes32"
            }],
            name: "CallOFTReceivedSuccess",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "uint16",
                name: "_srcChainId",
                type: "uint16"
            }, {
                indexed: !1,
                internalType: "bytes",
                name: "_srcAddress",
                type: "bytes"
            }, {
                indexed: !1,
                internalType: "uint64",
                name: "_nonce",
                type: "uint64"
            }, {
                indexed: !1,
                internalType: "bytes",
                name: "_payload",
                type: "bytes"
            }, {
                indexed: !1,
                internalType: "bytes",
                name: "_reason",
                type: "bytes"
            }],
            name: "MessageFailed",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "address",
                name: "_address",
                type: "address"
            }],
            name: "NonContractAddress",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "OwnershipTransferred",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "uint16",
                name: "_srcChainId",
                type: "uint16"
            }, {
                indexed: !0,
                internalType: "address",
                name: "_to",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }],
            name: "ReceiveFromChain",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "uint16",
                name: "_srcChainId",
                type: "uint16"
            }, {
                indexed: !1,
                internalType: "bytes",
                name: "_srcAddress",
                type: "bytes"
            }, {
                indexed: !1,
                internalType: "uint64",
                name: "_nonce",
                type: "uint64"
            }, {
                indexed: !1,
                internalType: "bytes32",
                name: "_payloadHash",
                type: "bytes32"
            }],
            name: "RetryMessageSuccess",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "uint16",
                name: "_dstChainId",
                type: "uint16"
            }, {
                indexed: !0,
                internalType: "address",
                name: "_from",
                type: "address"
            }, {
                indexed: !0,
                internalType: "bytes32",
                name: "_toAddress",
                type: "bytes32"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }],
            name: "SendToChain",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "uint16",
                name: "feeBp",
                type: "uint16"
            }],
            name: "SetDefaultFeeBp",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "uint16",
                name: "dstchainId",
                type: "uint16"
            }, {
                indexed: !1,
                internalType: "bool",
                name: "enabled",
                type: "bool"
            }, {
                indexed: !1,
                internalType: "uint16",
                name: "feeBp",
                type: "uint16"
            }],
            name: "SetFeeBp",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "address",
                name: "feeOwner",
                type: "address"
            }],
            name: "SetFeeOwner",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "uint16",
                name: "_dstChainId",
                type: "uint16"
            }, {
                indexed: !1,
                internalType: "uint16",
                name: "_type",
                type: "uint16"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "_minDstGas",
                type: "uint256"
            }],
            name: "SetMinDstGas",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "address",
                name: "precrime",
                type: "address"
            }],
            name: "SetPrecrime",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "uint16",
                name: "_remoteChainId",
                type: "uint16"
            }, {
                indexed: !1,
                internalType: "bytes",
                name: "_path",
                type: "bytes"
            }],
            name: "SetTrustedRemote",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "uint16",
                name: "_remoteChainId",
                type: "uint16"
            }, {
                indexed: !1,
                internalType: "bytes",
                name: "_remoteAddress",
                type: "bytes"
            }],
            name: "SetTrustedRemoteAddress",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "bool",
                name: "_useCustomAdapterParams",
                type: "bool"
            }],
            name: "SetUseCustomAdapterParams",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "Transfer",
            type: "event"
        }, {
            inputs: [],
            name: "BP_DENOMINATOR",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "NO_EXTRA_GAS",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "PT_SEND",
            outputs: [{
                internalType: "uint8",
                name: "",
                type: "uint8"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "PT_SEND_AND_CALL",
            outputs: [{
                internalType: "uint8",
                name: "",
                type: "uint8"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "owner",
                type: "address"
            }, {
                internalType: "address",
                name: "spender",
                type: "address"
            }],
            name: "allowance",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "approve",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "account",
                type: "address"
            }],
            name: "balanceOf",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_srcChainId",
                type: "uint16"
            }, {
                internalType: "bytes",
                name: "_srcAddress",
                type: "bytes"
            }, {
                internalType: "uint64",
                name: "_nonce",
                type: "uint64"
            }, {
                internalType: "bytes32",
                name: "_from",
                type: "bytes32"
            }, {
                internalType: "address",
                name: "_to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }, {
                internalType: "bytes",
                name: "_payload",
                type: "bytes"
            }, {
                internalType: "uint256",
                name: "_gasForCall",
                type: "uint256"
            }],
            name: "callOnOFTReceived",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "",
                type: "uint16"
            }],
            name: "chainIdToFeeBps",
            outputs: [{
                internalType: "uint16",
                name: "feeBP",
                type: "uint16"
            }, {
                internalType: "bool",
                name: "enabled",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "circulatingSupply",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "",
                type: "uint16"
            }, {
                internalType: "bytes",
                name: "",
                type: "bytes"
            }, {
                internalType: "uint64",
                name: "",
                type: "uint64"
            }],
            name: "creditedPackets",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "decimals",
            outputs: [{
                internalType: "uint8",
                name: "",
                type: "uint8"
            }],
            stateMutability: "pure",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256"
            }],
            name: "decreaseAllowance",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "defaultFeeBp",
            outputs: [{
                internalType: "uint16",
                name: "",
                type: "uint16"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_dstChainId",
                type: "uint16"
            }, {
                internalType: "bytes32",
                name: "_toAddress",
                type: "bytes32"
            }, {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }, {
                internalType: "bytes",
                name: "_payload",
                type: "bytes"
            }, {
                internalType: "uint64",
                name: "_dstGasForCall",
                type: "uint64"
            }, {
                internalType: "bool",
                name: "_useZro",
                type: "bool"
            }, {
                internalType: "bytes",
                name: "_adapterParams",
                type: "bytes"
            }],
            name: "estimateSendAndCallFee",
            outputs: [{
                internalType: "uint256",
                name: "nativeFee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "zroFee",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_dstChainId",
                type: "uint16"
            }, {
                internalType: "bytes32",
                name: "_toAddress",
                type: "bytes32"
            }, {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }, {
                internalType: "bool",
                name: "_useZro",
                type: "bool"
            }, {
                internalType: "bytes",
                name: "_adapterParams",
                type: "bytes"
            }],
            name: "estimateSendFee",
            outputs: [{
                internalType: "uint256",
                name: "nativeFee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "zroFee",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "",
                type: "uint16"
            }, {
                internalType: "bytes",
                name: "",
                type: "bytes"
            }, {
                internalType: "uint64",
                name: "",
                type: "uint64"
            }],
            name: "failedMessages",
            outputs: [{
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "feeOwner",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_srcChainId",
                type: "uint16"
            }, {
                internalType: "bytes",
                name: "_srcAddress",
                type: "bytes"
            }],
            name: "forceResumeReceive",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_version",
                type: "uint16"
            }, {
                internalType: "uint16",
                name: "_chainId",
                type: "uint16"
            }, {
                internalType: "address",
                name: "",
                type: "address"
            }, {
                internalType: "uint256",
                name: "_configType",
                type: "uint256"
            }],
            name: "getConfig",
            outputs: [{
                internalType: "bytes",
                name: "",
                type: "bytes"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_remoteChainId",
                type: "uint16"
            }],
            name: "getTrustedRemoteAddress",
            outputs: [{
                internalType: "bytes",
                name: "",
                type: "bytes"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256"
            }],
            name: "increaseAllowance",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_srcChainId",
                type: "uint16"
            }, {
                internalType: "bytes",
                name: "_srcAddress",
                type: "bytes"
            }],
            name: "isTrustedRemote",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "lzEndpoint",
            outputs: [{
                internalType: "contract ILayerZeroEndpoint",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_srcChainId",
                type: "uint16"
            }, {
                internalType: "bytes",
                name: "_srcAddress",
                type: "bytes"
            }, {
                internalType: "uint64",
                name: "_nonce",
                type: "uint64"
            }, {
                internalType: "bytes",
                name: "_payload",
                type: "bytes"
            }],
            name: "lzReceive",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "",
                type: "uint16"
            }, {
                internalType: "uint16",
                name: "",
                type: "uint16"
            }],
            name: "minDstGasLookup",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "name",
            outputs: [{
                internalType: "string",
                name: "",
                type: "string"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_srcChainId",
                type: "uint16"
            }, {
                internalType: "bytes",
                name: "_srcAddress",
                type: "bytes"
            }, {
                internalType: "uint64",
                name: "_nonce",
                type: "uint64"
            }, {
                internalType: "bytes",
                name: "_payload",
                type: "bytes"
            }],
            name: "nonblockingLzReceive",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "owner",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "precrime",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_dstChainId",
                type: "uint16"
            }, {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }],
            name: "quoteOFTFee",
            outputs: [{
                internalType: "uint256",
                name: "fee",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_srcChainId",
                type: "uint16"
            }, {
                internalType: "bytes",
                name: "_srcAddress",
                type: "bytes"
            }, {
                internalType: "uint64",
                name: "_nonce",
                type: "uint64"
            }, {
                internalType: "bytes",
                name: "_payload",
                type: "bytes"
            }],
            name: "retryMessage",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_from",
                type: "address"
            }, {
                internalType: "uint16",
                name: "_dstChainId",
                type: "uint16"
            }, {
                internalType: "bytes32",
                name: "_toAddress",
                type: "bytes32"
            }, {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_minAmount",
                type: "uint256"
            }, {
                internalType: "bytes",
                name: "_payload",
                type: "bytes"
            }, {
                internalType: "uint64",
                name: "_dstGasForCall",
                type: "uint64"
            }, {
                components: [{
                    internalType: "address payable",
                    name: "refundAddress",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "zroPaymentAddress",
                    type: "address"
                }, {
                    internalType: "bytes",
                    name: "adapterParams",
                    type: "bytes"
                }],
                internalType: "struct ICommonOFT.LzCallParams",
                name: "_callParams",
                type: "tuple"
            }],
            name: "sendAndCall",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_from",
                type: "address"
            }, {
                internalType: "uint16",
                name: "_dstChainId",
                type: "uint16"
            }, {
                internalType: "bytes32",
                name: "_toAddress",
                type: "bytes32"
            }, {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_minAmount",
                type: "uint256"
            }, {
                components: [{
                    internalType: "address payable",
                    name: "refundAddress",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "zroPaymentAddress",
                    type: "address"
                }, {
                    internalType: "bytes",
                    name: "adapterParams",
                    type: "bytes"
                }],
                internalType: "struct ICommonOFT.LzCallParams",
                name: "_callParams",
                type: "tuple"
            }],
            name: "sendFrom",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_version",
                type: "uint16"
            }, {
                internalType: "uint16",
                name: "_chainId",
                type: "uint16"
            }, {
                internalType: "uint256",
                name: "_configType",
                type: "uint256"
            }, {
                internalType: "bytes",
                name: "_config",
                type: "bytes"
            }],
            name: "setConfig",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_feeBp",
                type: "uint16"
            }],
            name: "setDefaultFeeBp",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_dstChainId",
                type: "uint16"
            }, {
                internalType: "bool",
                name: "_enabled",
                type: "bool"
            }, {
                internalType: "uint16",
                name: "_feeBp",
                type: "uint16"
            }],
            name: "setFeeBp",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_feeOwner",
                type: "address"
            }],
            name: "setFeeOwner",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_dstChainId",
                type: "uint16"
            }, {
                internalType: "uint16",
                name: "_packetType",
                type: "uint16"
            }, {
                internalType: "uint256",
                name: "_minGas",
                type: "uint256"
            }],
            name: "setMinDstGas",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_precrime",
                type: "address"
            }],
            name: "setPrecrime",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_version",
                type: "uint16"
            }],
            name: "setReceiveVersion",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_version",
                type: "uint16"
            }],
            name: "setSendVersion",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_srcChainId",
                type: "uint16"
            }, {
                internalType: "bytes",
                name: "_path",
                type: "bytes"
            }],
            name: "setTrustedRemote",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_remoteChainId",
                type: "uint16"
            }, {
                internalType: "bytes",
                name: "_remoteAddress",
                type: "bytes"
            }],
            name: "setTrustedRemoteAddress",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "bool",
                name: "_useCustomAdapterParams",
                type: "bool"
            }],
            name: "setUseCustomAdapterParams",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "sharedDecimals",
            outputs: [{
                internalType: "uint8",
                name: "",
                type: "uint8"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4"
            }],
            name: "supportsInterface",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "symbol",
            outputs: [{
                internalType: "string",
                name: "",
                type: "string"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "token",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalSupply",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "transfer",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "from",
                type: "address"
            }, {
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "transferFrom",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "",
                type: "uint16"
            }],
            name: "trustedRemoteLookup",
            outputs: [{
                internalType: "bytes",
                name: "",
                type: "bytes"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "useCustomAdapterParams",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }]
          , tl = class {
            static createInterface() {
                return new y.vU(tu)
            }
            static connect(e, t) {
                return new m.CH(e,tu,t)
            }
        }
        ;
        T(tl, "abi", tu);
        var tp = [{
            inputs: [{
                internalType: "uint256",
                name: "_defaultBps",
                type: "uint256"
            }],
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "OwnershipTransferred",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "oft",
                type: "address"
            }, {
                indexed: !1,
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "WrapperFeeWithdrawn",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "bytes2",
                name: "partnerId",
                type: "bytes2"
            }, {
                indexed: !1,
                internalType: "address",
                name: "token",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "wrapperFee",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "callerFee",
                type: "uint256"
            }],
            name: "WrapperFees",
            type: "event"
        }, {
            inputs: [],
            name: "BPS_DENOMINATOR",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "MAX_UINT",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "defaultBps",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_oft",
                type: "address"
            }, {
                internalType: "uint16",
                name: "_dstChainId",
                type: "uint16"
            }, {
                internalType: "bytes",
                name: "_toAddress",
                type: "bytes"
            }, {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }, {
                internalType: "bool",
                name: "_useZro",
                type: "bool"
            }, {
                internalType: "bytes",
                name: "_adapterParams",
                type: "bytes"
            }, {
                components: [{
                    internalType: "uint256",
                    name: "callerBps",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "caller",
                    type: "address"
                }, {
                    internalType: "bytes2",
                    name: "partnerId",
                    type: "bytes2"
                }],
                internalType: "struct IOFTWrapper.FeeObj",
                name: "_feeObj",
                type: "tuple"
            }],
            name: "estimateSendFee",
            outputs: [{
                internalType: "uint256",
                name: "nativeFee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "zroFee",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_oft",
                type: "address"
            }, {
                internalType: "uint16",
                name: "_dstChainId",
                type: "uint16"
            }, {
                internalType: "bytes32",
                name: "_toAddress",
                type: "bytes32"
            }, {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }, {
                internalType: "bool",
                name: "_useZro",
                type: "bool"
            }, {
                internalType: "bytes",
                name: "_adapterParams",
                type: "bytes"
            }, {
                components: [{
                    internalType: "uint256",
                    name: "callerBps",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "caller",
                    type: "address"
                }, {
                    internalType: "bytes2",
                    name: "partnerId",
                    type: "bytes2"
                }],
                internalType: "struct IOFTWrapper.FeeObj",
                name: "_feeObj",
                type: "tuple"
            }],
            name: "estimateSendFeeV2",
            outputs: [{
                internalType: "uint256",
                name: "nativeFee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "zroFee",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_token",
                type: "address"
            }, {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_callerBps",
                type: "uint256"
            }],
            name: "getAmountAndFees",
            outputs: [{
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "wrapperFee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "callerFee",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "oftBps",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "owner",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_nativeOft",
                type: "address"
            }, {
                internalType: "uint16",
                name: "_dstChainId",
                type: "uint16"
            }, {
                internalType: "bytes",
                name: "_toAddress",
                type: "bytes"
            }, {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_minAmount",
                type: "uint256"
            }, {
                internalType: "address payable",
                name: "_refundAddress",
                type: "address"
            }, {
                internalType: "address",
                name: "_zroPaymentAddress",
                type: "address"
            }, {
                internalType: "bytes",
                name: "_adapterParams",
                type: "bytes"
            }, {
                components: [{
                    internalType: "uint256",
                    name: "callerBps",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "caller",
                    type: "address"
                }, {
                    internalType: "bytes2",
                    name: "partnerId",
                    type: "bytes2"
                }],
                internalType: "struct IOFTWrapper.FeeObj",
                name: "_feeObj",
                type: "tuple"
            }],
            name: "sendNativeOFT",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_nativeOft",
                type: "address"
            }, {
                internalType: "uint16",
                name: "_dstChainId",
                type: "uint16"
            }, {
                internalType: "bytes32",
                name: "_toAddress",
                type: "bytes32"
            }, {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_minAmount",
                type: "uint256"
            }, {
                components: [{
                    internalType: "address payable",
                    name: "refundAddress",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "zroPaymentAddress",
                    type: "address"
                }, {
                    internalType: "bytes",
                    name: "adapterParams",
                    type: "bytes"
                }],
                internalType: "struct ICommonOFT.LzCallParams",
                name: "_callParams",
                type: "tuple"
            }, {
                components: [{
                    internalType: "uint256",
                    name: "callerBps",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "caller",
                    type: "address"
                }, {
                    internalType: "bytes2",
                    name: "partnerId",
                    type: "bytes2"
                }],
                internalType: "struct IOFTWrapper.FeeObj",
                name: "_feeObj",
                type: "tuple"
            }],
            name: "sendNativeOFTFeeV2",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_oft",
                type: "address"
            }, {
                internalType: "uint16",
                name: "_dstChainId",
                type: "uint16"
            }, {
                internalType: "bytes",
                name: "_toAddress",
                type: "bytes"
            }, {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_minAmount",
                type: "uint256"
            }, {
                internalType: "address payable",
                name: "_refundAddress",
                type: "address"
            }, {
                internalType: "address",
                name: "_zroPaymentAddress",
                type: "address"
            }, {
                internalType: "bytes",
                name: "_adapterParams",
                type: "bytes"
            }, {
                components: [{
                    internalType: "uint256",
                    name: "callerBps",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "caller",
                    type: "address"
                }, {
                    internalType: "bytes2",
                    name: "partnerId",
                    type: "bytes2"
                }],
                internalType: "struct IOFTWrapper.FeeObj",
                name: "_feeObj",
                type: "tuple"
            }],
            name: "sendOFT",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_oft",
                type: "address"
            }, {
                internalType: "uint16",
                name: "_dstChainId",
                type: "uint16"
            }, {
                internalType: "bytes32",
                name: "_toAddress",
                type: "bytes32"
            }, {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_minAmount",
                type: "uint256"
            }, {
                components: [{
                    internalType: "address payable",
                    name: "refundAddress",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "zroPaymentAddress",
                    type: "address"
                }, {
                    internalType: "bytes",
                    name: "adapterParams",
                    type: "bytes"
                }],
                internalType: "struct ICommonOFT.LzCallParams",
                name: "_callParams",
                type: "tuple"
            }, {
                components: [{
                    internalType: "uint256",
                    name: "callerBps",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "caller",
                    type: "address"
                }, {
                    internalType: "bytes2",
                    name: "partnerId",
                    type: "bytes2"
                }],
                internalType: "struct IOFTWrapper.FeeObj",
                name: "_feeObj",
                type: "tuple"
            }],
            name: "sendOFTFeeV2",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_oft",
                type: "address"
            }, {
                internalType: "uint16",
                name: "_dstChainId",
                type: "uint16"
            }, {
                internalType: "bytes32",
                name: "_toAddress",
                type: "bytes32"
            }, {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_minAmount",
                type: "uint256"
            }, {
                components: [{
                    internalType: "address payable",
                    name: "refundAddress",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "zroPaymentAddress",
                    type: "address"
                }, {
                    internalType: "bytes",
                    name: "adapterParams",
                    type: "bytes"
                }],
                internalType: "struct ICommonOFT.LzCallParams",
                name: "_callParams",
                type: "tuple"
            }, {
                components: [{
                    internalType: "uint256",
                    name: "callerBps",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "caller",
                    type: "address"
                }, {
                    internalType: "bytes2",
                    name: "partnerId",
                    type: "bytes2"
                }],
                internalType: "struct IOFTWrapper.FeeObj",
                name: "_feeObj",
                type: "tuple"
            }],
            name: "sendOFTV2",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_proxyOft",
                type: "address"
            }, {
                internalType: "uint16",
                name: "_dstChainId",
                type: "uint16"
            }, {
                internalType: "bytes",
                name: "_toAddress",
                type: "bytes"
            }, {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_minAmount",
                type: "uint256"
            }, {
                internalType: "address payable",
                name: "_refundAddress",
                type: "address"
            }, {
                internalType: "address",
                name: "_zroPaymentAddress",
                type: "address"
            }, {
                internalType: "bytes",
                name: "_adapterParams",
                type: "bytes"
            }, {
                components: [{
                    internalType: "uint256",
                    name: "callerBps",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "caller",
                    type: "address"
                }, {
                    internalType: "bytes2",
                    name: "partnerId",
                    type: "bytes2"
                }],
                internalType: "struct IOFTWrapper.FeeObj",
                name: "_feeObj",
                type: "tuple"
            }],
            name: "sendProxyOFT",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_proxyOft",
                type: "address"
            }, {
                internalType: "uint16",
                name: "_dstChainId",
                type: "uint16"
            }, {
                internalType: "bytes32",
                name: "_toAddress",
                type: "bytes32"
            }, {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_minAmount",
                type: "uint256"
            }, {
                components: [{
                    internalType: "address payable",
                    name: "refundAddress",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "zroPaymentAddress",
                    type: "address"
                }, {
                    internalType: "bytes",
                    name: "adapterParams",
                    type: "bytes"
                }],
                internalType: "struct ICommonOFT.LzCallParams",
                name: "_callParams",
                type: "tuple"
            }, {
                components: [{
                    internalType: "uint256",
                    name: "callerBps",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "caller",
                    type: "address"
                }, {
                    internalType: "bytes2",
                    name: "partnerId",
                    type: "bytes2"
                }],
                internalType: "struct IOFTWrapper.FeeObj",
                name: "_feeObj",
                type: "tuple"
            }],
            name: "sendProxyOFTFeeV2",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_proxyOft",
                type: "address"
            }, {
                internalType: "uint16",
                name: "_dstChainId",
                type: "uint16"
            }, {
                internalType: "bytes32",
                name: "_toAddress",
                type: "bytes32"
            }, {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_minAmount",
                type: "uint256"
            }, {
                components: [{
                    internalType: "address payable",
                    name: "refundAddress",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "zroPaymentAddress",
                    type: "address"
                }, {
                    internalType: "bytes",
                    name: "adapterParams",
                    type: "bytes"
                }],
                internalType: "struct ICommonOFT.LzCallParams",
                name: "_callParams",
                type: "tuple"
            }, {
                components: [{
                    internalType: "uint256",
                    name: "callerBps",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "caller",
                    type: "address"
                }, {
                    internalType: "bytes2",
                    name: "partnerId",
                    type: "bytes2"
                }],
                internalType: "struct IOFTWrapper.FeeObj",
                name: "_feeObj",
                type: "tuple"
            }],
            name: "sendProxyOFTV2",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_defaultBps",
                type: "uint256"
            }],
            name: "setDefaultBps",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_token",
                type: "address"
            }, {
                internalType: "uint256",
                name: "_bps",
                type: "uint256"
            }],
            name: "setOFTBps",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_oft",
                type: "address"
            }, {
                internalType: "address",
                name: "_to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }],
            name: "withdrawFees",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }]
          , tc = class {
            static createInterface() {
                return new y.vU(tp)
            }
            static connect(e, t) {
                return new m.CH(e,tp,t)
            }
        }
        ;
        T(tc, "abi", tp);
        var ty = [{
            inputs: [{
                internalType: "address",
                name: "_token",
                type: "address"
            }, {
                internalType: "address",
                name: "_lzEndpoint",
                type: "address"
            }],
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "uint16",
                name: "_srcChainId",
                type: "uint16"
            }, {
                indexed: !1,
                internalType: "bytes",
                name: "_srcAddress",
                type: "bytes"
            }, {
                indexed: !1,
                internalType: "uint64",
                name: "_nonce",
                type: "uint64"
            }, {
                indexed: !1,
                internalType: "bytes32",
                name: "_hash",
                type: "bytes32"
            }],
            name: "CallOFTReceivedSuccess",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "uint16",
                name: "_srcChainId",
                type: "uint16"
            }, {
                indexed: !1,
                internalType: "bytes",
                name: "_srcAddress",
                type: "bytes"
            }, {
                indexed: !1,
                internalType: "uint64",
                name: "_nonce",
                type: "uint64"
            }, {
                indexed: !1,
                internalType: "bytes",
                name: "_payload",
                type: "bytes"
            }, {
                indexed: !1,
                internalType: "bytes",
                name: "_reason",
                type: "bytes"
            }],
            name: "MessageFailed",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "address",
                name: "_address",
                type: "address"
            }],
            name: "NonContractAddress",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "OwnershipTransferred",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "uint16",
                name: "_srcChainId",
                type: "uint16"
            }, {
                indexed: !0,
                internalType: "address",
                name: "_to",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }],
            name: "ReceiveFromChain",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "uint16",
                name: "_srcChainId",
                type: "uint16"
            }, {
                indexed: !1,
                internalType: "bytes",
                name: "_srcAddress",
                type: "bytes"
            }, {
                indexed: !1,
                internalType: "uint64",
                name: "_nonce",
                type: "uint64"
            }, {
                indexed: !1,
                internalType: "bytes32",
                name: "_payloadHash",
                type: "bytes32"
            }],
            name: "RetryMessageSuccess",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "uint16",
                name: "_dstChainId",
                type: "uint16"
            }, {
                indexed: !0,
                internalType: "address",
                name: "_from",
                type: "address"
            }, {
                indexed: !0,
                internalType: "bytes32",
                name: "_toAddress",
                type: "bytes32"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }],
            name: "SendToChain",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "uint16",
                name: "feeBp",
                type: "uint16"
            }],
            name: "SetDefaultFeeBp",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "uint16",
                name: "dstchainId",
                type: "uint16"
            }, {
                indexed: !1,
                internalType: "bool",
                name: "enabled",
                type: "bool"
            }, {
                indexed: !1,
                internalType: "uint16",
                name: "feeBp",
                type: "uint16"
            }],
            name: "SetFeeBp",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "address",
                name: "feeOwner",
                type: "address"
            }],
            name: "SetFeeOwner",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "uint16",
                name: "_dstChainId",
                type: "uint16"
            }, {
                indexed: !1,
                internalType: "uint16",
                name: "_type",
                type: "uint16"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "_minDstGas",
                type: "uint256"
            }],
            name: "SetMinDstGas",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "address",
                name: "precrime",
                type: "address"
            }],
            name: "SetPrecrime",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "uint16",
                name: "_remoteChainId",
                type: "uint16"
            }, {
                indexed: !1,
                internalType: "bytes",
                name: "_path",
                type: "bytes"
            }],
            name: "SetTrustedRemote",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "uint16",
                name: "_remoteChainId",
                type: "uint16"
            }, {
                indexed: !1,
                internalType: "bytes",
                name: "_remoteAddress",
                type: "bytes"
            }],
            name: "SetTrustedRemoteAddress",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "bool",
                name: "_useCustomAdapterParams",
                type: "bool"
            }],
            name: "SetUseCustomAdapterParams",
            type: "event"
        }, {
            inputs: [],
            name: "BP_DENOMINATOR",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "NO_EXTRA_GAS",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "PT_SEND",
            outputs: [{
                internalType: "uint8",
                name: "",
                type: "uint8"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "PT_SEND_AND_CALL",
            outputs: [{
                internalType: "uint8",
                name: "",
                type: "uint8"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_srcChainId",
                type: "uint16"
            }, {
                internalType: "bytes",
                name: "_srcAddress",
                type: "bytes"
            }, {
                internalType: "uint64",
                name: "_nonce",
                type: "uint64"
            }, {
                internalType: "bytes32",
                name: "_from",
                type: "bytes32"
            }, {
                internalType: "address",
                name: "_to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }, {
                internalType: "bytes",
                name: "_payload",
                type: "bytes"
            }, {
                internalType: "uint256",
                name: "_gasForCall",
                type: "uint256"
            }],
            name: "callOnOFTReceived",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "",
                type: "uint16"
            }],
            name: "chainIdToFeeBps",
            outputs: [{
                internalType: "uint16",
                name: "feeBP",
                type: "uint16"
            }, {
                internalType: "bool",
                name: "enabled",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "circulatingSupply",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "",
                type: "uint16"
            }, {
                internalType: "bytes",
                name: "",
                type: "bytes"
            }, {
                internalType: "uint64",
                name: "",
                type: "uint64"
            }],
            name: "creditedPackets",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "defaultFeeBp",
            outputs: [{
                internalType: "uint16",
                name: "",
                type: "uint16"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_dstChainId",
                type: "uint16"
            }, {
                internalType: "bytes32",
                name: "_toAddress",
                type: "bytes32"
            }, {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }, {
                internalType: "bytes",
                name: "_payload",
                type: "bytes"
            }, {
                internalType: "uint64",
                name: "_dstGasForCall",
                type: "uint64"
            }, {
                internalType: "bool",
                name: "_useZro",
                type: "bool"
            }, {
                internalType: "bytes",
                name: "_adapterParams",
                type: "bytes"
            }],
            name: "estimateSendAndCallFee",
            outputs: [{
                internalType: "uint256",
                name: "nativeFee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "zroFee",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_dstChainId",
                type: "uint16"
            }, {
                internalType: "bytes32",
                name: "_toAddress",
                type: "bytes32"
            }, {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }, {
                internalType: "bool",
                name: "_useZro",
                type: "bool"
            }, {
                internalType: "bytes",
                name: "_adapterParams",
                type: "bytes"
            }],
            name: "estimateSendFee",
            outputs: [{
                internalType: "uint256",
                name: "nativeFee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "zroFee",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "",
                type: "uint16"
            }, {
                internalType: "bytes",
                name: "",
                type: "bytes"
            }, {
                internalType: "uint64",
                name: "",
                type: "uint64"
            }],
            name: "failedMessages",
            outputs: [{
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "feeOwner",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_srcChainId",
                type: "uint16"
            }, {
                internalType: "bytes",
                name: "_srcAddress",
                type: "bytes"
            }],
            name: "forceResumeReceive",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_version",
                type: "uint16"
            }, {
                internalType: "uint16",
                name: "_chainId",
                type: "uint16"
            }, {
                internalType: "address",
                name: "",
                type: "address"
            }, {
                internalType: "uint256",
                name: "_configType",
                type: "uint256"
            }],
            name: "getConfig",
            outputs: [{
                internalType: "bytes",
                name: "",
                type: "bytes"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_remoteChainId",
                type: "uint16"
            }],
            name: "getTrustedRemoteAddress",
            outputs: [{
                internalType: "bytes",
                name: "",
                type: "bytes"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_srcChainId",
                type: "uint16"
            }, {
                internalType: "bytes",
                name: "_srcAddress",
                type: "bytes"
            }],
            name: "isTrustedRemote",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "lzEndpoint",
            outputs: [{
                internalType: "contract ILayerZeroEndpoint",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_srcChainId",
                type: "uint16"
            }, {
                internalType: "bytes",
                name: "_srcAddress",
                type: "bytes"
            }, {
                internalType: "uint64",
                name: "_nonce",
                type: "uint64"
            }, {
                internalType: "bytes",
                name: "_payload",
                type: "bytes"
            }],
            name: "lzReceive",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "",
                type: "uint16"
            }, {
                internalType: "uint16",
                name: "",
                type: "uint16"
            }],
            name: "minDstGasLookup",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_srcChainId",
                type: "uint16"
            }, {
                internalType: "bytes",
                name: "_srcAddress",
                type: "bytes"
            }, {
                internalType: "uint64",
                name: "_nonce",
                type: "uint64"
            }, {
                internalType: "bytes",
                name: "_payload",
                type: "bytes"
            }],
            name: "nonblockingLzReceive",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "outboundAmount",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "owner",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "precrime",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_dstChainId",
                type: "uint16"
            }, {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }],
            name: "quoteOFTFee",
            outputs: [{
                internalType: "uint256",
                name: "fee",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_srcChainId",
                type: "uint16"
            }, {
                internalType: "bytes",
                name: "_srcAddress",
                type: "bytes"
            }, {
                internalType: "uint64",
                name: "_nonce",
                type: "uint64"
            }, {
                internalType: "bytes",
                name: "_payload",
                type: "bytes"
            }],
            name: "retryMessage",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_from",
                type: "address"
            }, {
                internalType: "uint16",
                name: "_dstChainId",
                type: "uint16"
            }, {
                internalType: "bytes32",
                name: "_toAddress",
                type: "bytes32"
            }, {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_minAmount",
                type: "uint256"
            }, {
                internalType: "bytes",
                name: "_payload",
                type: "bytes"
            }, {
                internalType: "uint64",
                name: "_dstGasForCall",
                type: "uint64"
            }, {
                components: [{
                    internalType: "address payable",
                    name: "refundAddress",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "zroPaymentAddress",
                    type: "address"
                }, {
                    internalType: "bytes",
                    name: "adapterParams",
                    type: "bytes"
                }],
                internalType: "struct ICommonOFT.LzCallParams",
                name: "_callParams",
                type: "tuple"
            }],
            name: "sendAndCall",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_from",
                type: "address"
            }, {
                internalType: "uint16",
                name: "_dstChainId",
                type: "uint16"
            }, {
                internalType: "bytes32",
                name: "_toAddress",
                type: "bytes32"
            }, {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_minAmount",
                type: "uint256"
            }, {
                components: [{
                    internalType: "address payable",
                    name: "refundAddress",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "zroPaymentAddress",
                    type: "address"
                }, {
                    internalType: "bytes",
                    name: "adapterParams",
                    type: "bytes"
                }],
                internalType: "struct ICommonOFT.LzCallParams",
                name: "_callParams",
                type: "tuple"
            }],
            name: "sendFrom",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_version",
                type: "uint16"
            }, {
                internalType: "uint16",
                name: "_chainId",
                type: "uint16"
            }, {
                internalType: "uint256",
                name: "_configType",
                type: "uint256"
            }, {
                internalType: "bytes",
                name: "_config",
                type: "bytes"
            }],
            name: "setConfig",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_feeBp",
                type: "uint16"
            }],
            name: "setDefaultFeeBp",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_dstChainId",
                type: "uint16"
            }, {
                internalType: "bool",
                name: "_enabled",
                type: "bool"
            }, {
                internalType: "uint16",
                name: "_feeBp",
                type: "uint16"
            }],
            name: "setFeeBp",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_feeOwner",
                type: "address"
            }],
            name: "setFeeOwner",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_dstChainId",
                type: "uint16"
            }, {
                internalType: "uint16",
                name: "_packetType",
                type: "uint16"
            }, {
                internalType: "uint256",
                name: "_minGas",
                type: "uint256"
            }],
            name: "setMinDstGas",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_precrime",
                type: "address"
            }],
            name: "setPrecrime",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_version",
                type: "uint16"
            }],
            name: "setReceiveVersion",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_version",
                type: "uint16"
            }],
            name: "setSendVersion",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_srcChainId",
                type: "uint16"
            }, {
                internalType: "bytes",
                name: "_path",
                type: "bytes"
            }],
            name: "setTrustedRemote",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "_remoteChainId",
                type: "uint16"
            }, {
                internalType: "bytes",
                name: "_remoteAddress",
                type: "bytes"
            }],
            name: "setTrustedRemoteAddress",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "bool",
                name: "_useCustomAdapterParams",
                type: "bool"
            }],
            name: "setUseCustomAdapterParams",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "sharedDecimals",
            outputs: [{
                internalType: "uint8",
                name: "",
                type: "uint8"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4"
            }],
            name: "supportsInterface",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "token",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint16",
                name: "",
                type: "uint16"
            }],
            name: "trustedRemoteLookup",
            outputs: [{
                internalType: "bytes",
                name: "",
                type: "bytes"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "useCustomAdapterParams",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }]
          , tm = class {
            static createInterface() {
                return new y.vU(ty)
            }
            static connect(e, t) {
                return new m.CH(e,ty,t)
            }
        }
        ;
        T(tm, "abi", ty);
        var th = {
            deployments: {
                ethereum: {
                    oftWrapper: {
                        address: "0x86355F02119bdBC28ED6A4D5E0cA327Ca7730fFF"
                    }
                },
                bsc: {
                    oftWrapper: {
                        address: "0x86355F02119bdBC28ED6A4D5E0cA327Ca7730fFF"
                    }
                },
                avalanche: {
                    oftWrapper: {
                        address: "0x86355F02119bdBC28ED6A4D5E0cA327Ca7730fFF"
                    }
                },
                polygon: {
                    oftWrapper: {
                        address: "0x86355F02119bdBC28ED6A4D5E0cA327Ca7730fFF"
                    }
                },
                arbitrum: {
                    oftWrapper: {
                        address: "0x86355F02119bdBC28ED6A4D5E0cA327Ca7730fFF"
                    }
                },
                optimism: {
                    oftWrapper: {
                        address: "0x86355F02119bdBC28ED6A4D5E0cA327Ca7730fFF"
                    }
                },
                fantom: {
                    oftWrapper: {
                        address: "0x86355F02119bdBC28ED6A4D5E0cA327Ca7730fFF"
                    }
                },
                zkevm: {
                    oftWrapper: {
                        address: "0x86355F02119bdBC28ED6A4D5E0cA327Ca7730fFF"
                    }
                },
                moonbeam: {
                    oftWrapper: {
                        address: "0x86355F02119bdBC28ED6A4D5E0cA327Ca7730fFF"
                    }
                },
                zksync: {
                    oftWrapper: {
                        address: "0xDAc7479e5F7c01CC59bbF7c1C4EDF5604ADA1FF2"
                    }
                },
                metis: {
                    oftWrapper: {
                        address: "0x36d4686e19c052787D7f24E6913cEbC025714895"
                    }
                },
                base: {
                    oftWrapper: {
                        address: "0x36d4686e19c052787D7f24E6913cEbC025714895"
                    }
                },
                linea: {
                    oftWrapper: {
                        address: "0x36d4686e19c052787D7f24E6913cEbC025714895"
                    }
                },
                kava: {
                    oftWrapper: {
                        address: "0x36d4686e19c052787D7f24E6913cEbC025714895"
                    }
                },
                moonriver: {
                    oftWrapper: {
                        address: "0x36d4686e19c052787D7f24E6913cEbC025714895"
                    }
                },
                celo: {
                    oftWrapper: {
                        address: "0x36d4686e19c052787D7f24E6913cEbC025714895"
                    }
                },
                okx: {
                    oftWrapper: {
                        address: "0x36d4686e19c052787D7f24E6913cEbC025714895"
                    }
                },
                klaytn: {
                    oftWrapper: {
                        address: "0x36d4686e19c052787D7f24E6913cEbC025714895"
                    }
                },
                harmony: {
                    oftWrapper: {
                        address: "0x36d4686e19c052787D7f24E6913cEbC025714895"
                    }
                },
                coredao: {
                    oftWrapper: {
                        address: "0x36d4686e19c052787D7f24E6913cEbC025714895"
                    }
                },
                scroll: {
                    oftWrapper: {
                        address: "0x36d4686e19c052787D7f24E6913cEbC025714895"
                    }
                },
                mantle: {
                    oftWrapper: {
                        address: "0x36d4686e19c052787D7f24E6913cEbC025714895"
                    }
                },
                taiko: {
                    oftWrapper: {
                        address: "0xcc0Ee4232fb1dc01F016b2f3bB3728Acdf7A3563"
                    }
                },
                zora: {
                    oftWrapper: {
                        address: "0x36d4686e19c052787D7f24E6913cEbC025714895"
                    }
                }
            }
        }
          , tf = class {
            async getOptions() {
                return {
                    options: [{
                        mode: "taxi"
                    }]
                }
            }
            chainKeyToEndpointId(e) {
                return this.getOftDeployment(e).eid
            }
            tryGetOftDeployment(e) {
                let t = this.oft.deployments[e];
                if (t)
                    return t
            }
            getOftDeployment(e) {
                let t = this.tryGetOftDeployment(e);
                return (0,
                p.hu)(t, "No deployment for ".concat(e)),
                t
            }
            getWrapperDeployment(e) {
                let t = this.wrapperConfig.deployments[e];
                return (0,
                p.hu)(t, "No oftWrapper for ".concat(e)),
                t.oftWrapper
            }
            supportsClaim(e) {
                return this.supportsRegister(e)
            }
            supportsRegister(e) {
                var t;
                return !!(0,
                p.ld)(e.chainKey) && !!(null === (t = this.tryGetOftDeployment(e.chainKey)) || void 0 === t ? void 0 : t.token.equals(e))
            }
            async getDuration(e) {
                let {srcToken: t, dstToken: n} = e
                  , {oftProxy: a, token: i, oftNative: s, eid: r} = this.getOftDeployment(t.chainKey)
                  , o = a ? a.address : s ? s.address : (0,
                p.hD)(i) ? i.address : null;
                (0,
                p.hu)(o, "address");
                let d = this.chainKeyToEndpointId(n.chainKey);
                return (0,
                p.XO)({
                    address: o,
                    eid: r
                }, d)
            }
            async getAllowance(e) {
                let {token: t, address: n} = e
                  , a = this.getWrapperDeployment(t.chainKey);
                return this.isValidNative(t) ? p.ih.fromRawAmount(t, h.Bz.toBigInt()) : this.erc20.forToken(t).allowance(n, a.address)
            }
            async approve(e) {
                let {amount: t} = e
                  , n = this.getWrapperDeployment(t.token.chainKey);
                return this.erc20.forToken(t.token).approve(t, n.address)
            }
            supportsTransfer(e, t) {
                return !!(0,
                p.ld)(e.chainKey) && (!!(this.isValidNative(e) && this.isValidToken(t) || this.isValidToken(e) && this.isValidNative(t)) || !!(this.isValidToken(e) && this.isValidToken(t)))
            }
            async isRegistered(e) {
                return !0
            }
            async getUnclaimed(e) {
                let {token: t} = e;
                return p.ih.fromRawAmount(t, 0)
            }
            async claim(e) {
                throw Error("Method not supported.")
            }
            async register(e) {
                throw Error("Method not supported.")
            }
            async transfer(e) {
                return ((0,
                l.b)(e),
                1 === this.oft.version) ? this.sendOFTV1(e) : this.sendOFTV2(e)
            }
            async sendOFTV2(e) {
                (0,
                p.hu)(2 === this.oft.version);
                let t = e.srcChainKey
                  , n = this.getWrapperContract(e.srcToken)
                  , a = this.getOFTV2Contract(e.srcToken)
                  , i = e.srcAmount
                  , s = (0,
                p.ph)(e.dstAmountMin, e.srcToken)
                  , r = this.chainKeyToEndpointId(e.dstChainKey)
                  , o = this.encodeDstAddress(e.dstAddress, e.dstChainKey)
                  , d = this.isValidNative(e.srcToken) ? e.srcAmount.add(e.fee.nativeFee).quotient : e.fee.nativeFee.quotient
                  , u = this.getSendMethod(e.srcToken);
                if ("sendOFTV2" !== u && "sendOFTFeeV2" !== u && "sendProxyOFTV2" !== u && "sendProxyOFTFeeV2" !== u && "sendNativeOFTFeeV2" !== u)
                    throw Error("Invalid method ".concat(u, " used for OFTV2"));
                let l = n.populateTransaction[u](a.address, r, o, i.quotient, s.quotient, this.buildLayerZeroCallParams(e.adapterParams, e.srcAddress), this.feeObj, {
                    value: d,
                    from: e.srcAddress
                });
                return (0,
                c._X)(l, {
                    provider: this.providerFactory(t),
                    chainKey: t
                })
            }
            async sendOFTV1(e) {
                (0,
                p.hu)(1 === this.oft.version);
                let t = e.srcChainKey
                  , n = this.getWrapperContract(e.srcToken)
                  , a = this.getOFTV2Contract(e.srcToken)
                  , i = this.buildLayerZeroTxParams(e.adapterParams)
                  , s = e.srcAmount
                  , r = (0,
                p.ph)(e.dstAmountMin, e.srcToken)
                  , o = this.isValidNative(e.srcToken) ? e.srcAmount.add(e.fee.nativeFee).quotient : e.fee.nativeFee.quotient
                  , d = this.chainKeyToEndpointId(e.dstChainKey)
                  , u = this.encodeDstAddress(e.dstAddress, e.dstChainKey)
                  , l = f.d
                  , y = this.getSendMethod(e.srcToken);
                if ("sendNativeOFT" === y)
                    throw Error("NativeOFT is not supported");
                if (!("sendOFT" === y || "sendProxyOFT" === y))
                    throw Error("Invalid method ".concat(y, " used for OFTV1"));
                let m = n.populateTransaction[y](a.address, d, u, s.quotient, r.quotient, e.srcAddress, l, i, this.feeObj, {
                    value: o,
                    from: e.srcAddress
                });
                return (0,
                c._X)(m, {
                    provider: this.providerFactory(t),
                    chainKey: t
                })
            }
            encodeDstAddress(e, t) {
                return 1 === this.oft.version ? e : g.Dv((0,
                p.fs)(e, (0,
                p.H1)(t)))
            }
            async getMessageFee(e) {
                let {srcToken: t, dstToken: n, adapterParams: a} = e
                  , i = this.getWrapperContract(t)
                  , s = (0,
                p.JK)(t.chainKey)
                  , r = this.buildLayerZeroTxParams(a)
                  , o = this.chainKeyToEndpointId(n.chainKey)
                  , d = this.encodeDstAddress(c.IP, n.chainKey)
                  , u = this.feeObj
                  , l = this.getQuotedAddress(t)
                  , y = i[1 === this.oft.version ? "estimateSendFee" : "estimateSendFeeV2"].bind(i)
                  , m = await y(l, o, d, 0, !1, r, u);
                return {
                    nativeFee: p.ih.fromRawAmount(s, m.nativeFee.toBigInt()),
                    zroFee: p.ih.fromRawAmount(s, m.zroFee.toBigInt())
                }
            }
            async getExtraGas(e) {
                let {srcToken: t, dstToken: n} = e;
                (0,
                p.hu)(t, "srcToken");
                let a = n.chainKey
                  , i = this.getOFTV2Contract(t)
                  , s = this.chainKeyToEndpointId(a)
                  , r = (await i.minDstGasLookup(s, 0)).toNumber();
                return r > 0 ? r : "arbitrum" === a ? 3e6 : "aptos" === a || "aptos-testnet" === a ? 1e4 : 25e4
            }
            async getOutput(e) {
                let {srcAmount: t, dstToken: n} = e
                  , a = n.chainKey
                  , {amount: i, ...s} = await this.getAmountAndFees(t)
                  , r = await this.getOFTFee(i, a)
                  , o = this.removeDust(i.subtract(r))
                  , d = (0,
                p.ph)(o, n);
                return {
                    fee: {
                        callerFee: s.callerFee,
                        wrapperFee: s.wrapperFee,
                        oftFee: r
                    },
                    dstAmount: d
                }
            }
            removeDust(e) {
                return this.oft.sharedDecimals ? (0,
                p.LA)(e, this.oft.sharedDecimals) : e
            }
            getQuotedAddress(e) {
                let {chainKey: t} = e
                  , {oftNative: n, oftProxy: a, token: i} = this.getOftDeployment(t);
                return n ? n.address : a ? a.address : ((0,
                p.hu)((0,
                p.hD)(i)),
                i.address)
            }
            async getAmountAndFees(e) {
                let t = e.token
                  , n = this.getWrapperContract(t)
                  , a = await n.getAmountAndFees(this.getQuotedAddress(t), e.quotient, this.partner.callerBps);
                return {
                    callerFee: p.ih.fromRawAmount(t, a.callerFee.toBigInt()),
                    wrapperFee: p.ih.fromRawAmount(t, a.wrapperFee.toBigInt()),
                    amount: p.ih.fromRawAmount(t, a.amount.toBigInt())
                }
            }
            async getOFTFee(e, t) {
                let n = e.token;
                if (!this.oft.fee)
                    return e.multiply(0);
                (0,
                p.hu)(2 === this.oft.version);
                let a = this.chainKeyToEndpointId(t)
                  , i = this.getOFTV2Contract(n)
                  , s = await i.quoteOFTFee(a, e.quotient);
                return p.ih.fromRawAmount(e.token, s.toBigInt())
            }
            async getLimit(e) {
                let {srcToken: t, dstToken: n} = e;
                return p.ih.fromRawAmount(t, p.Bz)
            }
            getWrapperContract(e) {
                let t = this.getWrapperDeployment(e.chainKey)
                  , n = this.providerFactory(e.chainKey);
                return tc.connect(t.address, n)
            }
            getOFTV2Contract(e) {
                let t = this.providerFactory(e.chainKey)
                  , {oftNative: n, oftProxy: a, oft: i} = this.getOftDeployment(e.chainKey);
                if (n)
                    return tm.connect(n.address, t);
                if ((0,
                p.hu)((0,
                p.hD)(e)),
                a)
                    return tm.connect(a.address, t);
                if (i)
                    return tl.connect(i.address, t);
                throw Error("No OFT for ".concat(e.chainKey))
            }
            buildLayerZeroTxParams(e) {
                return (0,
                c.wn)(e)
            }
            getSendMethod(e) {
                let {oftProxy: t, oftNative: n} = this.getOftDeployment(e.chainKey)
                  , a = this.oft.fee;
                if (1 === this.oft.version)
                    return n ? "sendNativeOFT" : t ? "sendProxyOFT" : "sendOFT";
                if (n) {
                    if (a)
                        return "sendNativeOFTFeeV2";
                    throw Error("Method sendNativeOFTV2 is not supported")
                }
                return ((0,
                p.hu)((0,
                p.hD)(e)),
                t && a) ? "sendProxyOFTFeeV2" : t ? "sendProxyOFTV2" : a ? "sendOFTFeeV2" : "sendOFTV2"
            }
            buildLayerZeroCallParams(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.d;
                return {
                    adapterParams: this.buildLayerZeroTxParams(e),
                    refundAddress: t,
                    zroPaymentAddress: n
                }
            }
            get feeObj() {
                return {
                    caller: this.partner.caller,
                    callerBps: this.partner.callerBps,
                    partnerId: g.$m([this.partner.partnerId], 2)
                }
            }
            isValidNative(e) {
                var t;
                let {oftNative: n, token: a} = null !== (t = this.tryGetOftDeployment(e.chainKey)) && void 0 !== t ? t : {};
                return !!a && !!n && a.equals(e)
            }
            isValidToken(e) {
                var t;
                return !!(null === (t = this.tryGetOftDeployment(e.chainKey)) || void 0 === t ? void 0 : t.token.equals(e))
            }
            constructor(e, t, n, a=th) {
                this.providerFactory = e,
                this.oft = t,
                this.partner = n,
                this.wrapperConfig = a,
                this.erc20 = new c.gp(e)
            }
        }
    },
    57387: function(e, t, n) {
        "use strict";
        n.d(t, {
            JD: function() {
                return c
            },
            L_: function() {
                return p
            },
            RE: function() {
                return u
            },
            b0: function() {
                return y
            },
            ci: function() {
                return o
            },
            cm: function() {
                return r
            },
            gP: function() {
                return d
            },
            o6: function() {
                return l
            }
        });
        var a = n(38623)
          , i = n(35440)
          , s = n(91185)
          , r = "oft";
        function o(e, t) {
            var n;
            let {dstChainKey: r, adapterParams: o} = e
              , {executorLzReceiveOption: d} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , l = u(r, t)
              , p = i.Ei.newOptions();
            if ((null == (d = null != d ? d : l.executorLzReceiveOption) ? void 0 : d.gasLimit) && p.addExecutorLzReceiveOption(d.gasLimit, d.nativeValue),
            2 === o.version && (null === (n = o.dstNativeAmount) || void 0 === n ? void 0 : n.greaterThan(0))) {
                let {dstNativeAddress: e, dstNativeAmount: t} = o;
                if (!e)
                    throw Error("No dstNativeAddress");
                let n = (0,
                a.fs)(e, (0,
                a.H1)(r));
                p.addExecutorNativeDropOption(t.toBigInt(), (0,
                s.ci)(n))
            }
            return p
        }
        function d(e, t) {
            return t.deployments[e]
        }
        function u(e, t) {
            let n = d(e, t);
            if (n)
                return n;
            throw Error("No deployment found for chainKey: ".concat(e))
        }
        function l(e, t, n, i) {
            var s, r, o;
            return !!((null === (s = i.deployments[e.chainKey]) || void 0 === s ? void 0 : s.token.equals(e)) && (null === (r = i.deployments[t.chainKey]) || void 0 === r ? void 0 : r.token.equals(t))) && (null === (o = (0,
            a.lJ)(e.chainKey)) || void 0 === o ? void 0 : o.chainType) === n
        }
        function p(e, t) {
            var n;
            let {srcChainKey: a} = e
              , i = null === (n = d(a, t)) || void 0 === n ? void 0 : n.durationFrom;
            if (i)
                return {
                    estimated: i.expected
                }
        }
        function c(e, t, n) {
            let a = function(e, t) {
                let {executorLzReceiveOption: n} = t;
                return n ? e.addExecutorLzReceiveOption(n.gasLimit, n.nativeValue) : e
            }(i.Ei.newOptions(), n);
            return e > 0n && a.addExecutorNativeDropOption(e, (0,
            s.ci)(t)),
            a
        }
        function y(e, t) {
            let n = function(e, t) {
                let {srcChainKey: n} = t
                  , i = u(n, e);
                return (0,
                a.oO)(1n, {
                    from: e.sharedDecimals,
                    to: i.token.decimals
                })
            }(e, t);
            if (t.srcAmount < n)
                throw Error("Invalid srcAmount: ".concat(t.srcAmount, "n, min amount: ").concat(n, "n"))
        }
    },
    59418: function(e, t, n) {
        "use strict";
        n.d(t, {
            Se: function() {
                return M
            },
            WW: function() {
                return E
            },
            Z0: function() {
                return T
            },
            Zr: function() {
                return A
            },
            qD: function() {
                return x
            }
        });
        var a = n(57387)
          , i = n(38623)
          , s = n(35440)
          , r = n(48220)
          , o = n(79429)
          , d = n(51967)
          , u = n(81339)
          , l = n(93912)
          , p = n(10889)
          , c = n(21237)
          , y = n(91185)
          , m = n(9866);
        function h(e) {
            return e.dstNativeAmount > 0n ? (0,
            r._)(["uint16", "uint", "uint", "address"], [2, e.dstGasMin, e.dstNativeAmount, (0,
            o.K)(e.dstNativeAddress)]) : 0n === e.dstGasMin ? "0x" : (0,
            r._)(["uint16", "uint256"], [1, e.dstGasMin])
        }
        function f(e, t) {
            let {localDecimals: n, sharedDecimals: a} = t
              , i = n - a;
            return i > 0 ? e / BigInt(10 ** i) * BigInt(10 ** i) : e
        }
        function g(e, t) {
            var n, s;
            let r = (0,
            a.RE)(e, t)
              , d = null !== (s = null !== (n = r.oftProxy) && void 0 !== n ? n : r.oftNative) && void 0 !== s ? s : r.token;
            if ((0,
            i.gj)(d))
                return (0,
                o.K)(d.address);
            throw Error("No OApp address found for ".concat(e), {
                cause: t
            })
        }
        async function v(e, t, n) {
            let s = (0,
            a.RE)(e.srcChainKey, t);
            if (void 0 === s.oftProxy || !1 === s.oftProxy.approvalRequired || !(0,
            i.gj)(s.token))
                return d.zL;
            let r = (0,
            o.K)(s.token.address)
              , l = (0,
            o.K)(s.oftProxy.address)
              , p = (0,
            o.K)(e.srcAddress);
            return n.readContract({
                abi: u.Wo,
                address: r,
                functionName: "allowance",
                args: [p, l]
            })
        }
        function b(e) {
            return e.toLowerCase()
        }
        var T = class {
            validateConfig() {
                (0,
                i.hu)(1 === this.config.version, "Invalid config.version: is not 1"),
                (0,
                i.hu)(!1 === this.config.fee, "Invalid config.fee: is not false")
            }
            async getOptions(e) {
                return {
                    options: [{
                        mode: "taxi"
                    }]
                }
            }
            async getDuration(e) {
                let t = (0,
                a.L_)(e, this.config);
                return null != t ? t : {
                    estimated: void 0
                }
            }
            async getAllowance(e) {
                return v(e, this.config, await this.getViemClient(e.srcChainKey))
            }
            async getRoute(e) {
                let {srcChainKey: t, dstChainKey: n, srcAmount: s} = e
                  , r = await this.getDstGasMin({
                    srcChainKey: t,
                    dstChainKey: n
                })
                  , o = (0,
                a.RE)(t, this.config)
                  , d = (0,
                a.RE)(n, this.config)
                  , [u,l,p,c] = await Promise.all([this.getMessageFee({
                    ...e,
                    dstGasMin: r,
                    dstNativeAmount: 0n
                }), this.getMessageFee({
                    ...e,
                    dstGasMin: r,
                    dstNativeAmount: e.dstNativeAmount
                }), this.getAllowance(e), this.getDuration(e)])
                  , y = (0,
                i.oO)(s, {
                    from: o.token.decimals,
                    to: d.token.decimals
                })
                  , h = (0,
                m.Cy)(u, l);
                return (0,
                m.Jg)(e, {
                    route: a.cm,
                    srcAmount: s,
                    dstAmount: y,
                    srcAmountMax: i.Bz,
                    duration: c,
                    allowance: p,
                    messageFee: u,
                    fees: h
                })
            }
            async approve(e) {
                var t;
                let {srcToken: n, srcAddress: i, srcChainKey: r, srcAmount: o} = e
                  , d = null === (t = (0,
                a.RE)(r, this.config).oftProxy) || void 0 === t ? void 0 : t.address;
                if (!d)
                    throw Error("No spender found");
                return (0,
                s._X)((0,
                s.$6)({
                    token: n,
                    owner: i,
                    amount: o,
                    spender: d
                }), {
                    chainKey: r
                })
            }
            async getMessageFee(e) {
                let {srcChainKey: t, dstChainKey: n, dstNativeAmount: i, dstAddress: s, srcAmount: r, dstGasMin: d} = e
                  , u = await this.getViemClient(t)
                  , l = (0,
                a.RE)(n, this.config)
                  , p = (0,
                o.K)(g(t, this.config))
                  , c = h({
                    dstNativeAmount: i,
                    dstNativeAddress: (0,
                    o.K)(s),
                    dstGasMin: d
                })
                  , [y,m] = await u.readContract({
                    abi: _,
                    address: p,
                    functionName: "estimateSendFee",
                    args: [l.eid, (0,
                    o.K)(s), r, !1, c]
                });
                return {
                    nativeFee: y,
                    zroFee: m
                }
            }
            async transfer(e) {
                let {srcChainKey: t, srcAddress: n, dstAddress: i, srcAmount: r, dstNativeAmount: d, dstChainKey: u} = e
                  , c = (0,
                a.RE)(u, this.config).eid
                  , y = (0,
                o.K)(g(t, this.config))
                  , m = (0,
                o.K)(n)
                  , f = (0,
                o.K)(i)
                  , v = await this.getDstGasMin({
                    srcChainKey: t,
                    dstChainKey: u
                })
                  , T = l.DR
                  , x = h({
                    dstNativeAmount: d,
                    dstNativeAddress: f,
                    dstGasMin: v
                })
                  , {nativeFee: w} = await this.getMessageFee({
                    srcChainKey: t,
                    dstChainKey: u,
                    dstNativeAmount: d,
                    dstAddress: i,
                    srcAmount: r,
                    dstGasMin: v
                })
                  , A = (0,
                p.R)({
                    abi: _,
                    functionName: "sendFrom",
                    args: [m, c, f, r, m, T, x]
                });
                return (0,
                s._X)({
                    from: m,
                    data: b(A),
                    value: w,
                    to: y
                }, {
                    chainKey: t
                })
            }
            supportsTransfer(e, t) {
                return (0,
                a.o6)(e, t, i.Jb.EVM, this.config)
            }
            async getDstGasMin(e) {
                let {srcChainKey: t, dstChainKey: n} = e
                  , i = await this.getViemClient(t)
                  , s = (0,
                a.RE)(n, this.config)
                  , r = (0,
                o.K)(g(t, this.config));
                return await i.readContract({
                    abi: _,
                    address: r,
                    functionName: "minDstGasLookup",
                    args: [s.eid, 0]
                }) || this.getDstGasMinDefault({
                    dstChainKey: n
                })
            }
            getDstGasMinDefault(e) {
                let {dstChainKey: t} = e;
                return "arbitrum" === t ? 3000000n : (0,
                i.Gd)(t) ? 10000n : 250000n
            }
            constructor(e, t) {
                this.config = e,
                this.getViemClient = t,
                this.validateConfig()
            }
        }
          , _ = [{
            inputs: [{
                name: "_dstChainId",
                type: "uint16"
            }, {
                name: "_toAddress",
                type: "bytes"
            }, {
                name: "_amount",
                type: "uint256"
            }, {
                name: "_useZro",
                type: "bool"
            }, {
                name: "_adapterParams",
                type: "bytes"
            }],
            name: "estimateSendFee",
            outputs: [{
                name: "nativeFee",
                type: "uint256"
            }, {
                name: "zroFee",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                name: "_from",
                type: "address"
            }, {
                name: "_dstChainId",
                type: "uint16"
            }, {
                name: "_toAddress",
                type: "bytes"
            }, {
                name: "_amount",
                type: "uint256"
            }, {
                name: "_refundAddress",
                type: "address"
            }, {
                name: "_zroPaymentAddress",
                type: "address"
            }, {
                name: "_adapterParams",
                type: "bytes"
            }],
            name: "sendFrom",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [{
                name: "",
                type: "uint16"
            }, {
                name: "",
                type: "uint16"
            }],
            name: "minDstGasLookup",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }]
          , x = class extends T {
            validateConfig() {
                (0,
                i.hu)("shrap" === this.config.version, "Invalid config.version: is not shrap")
            }
            async transfer(e) {
                if ("avalanche" !== e.srcChainKey)
                    return super.transfer(e);
                let {srcChainKey: t, srcAddress: n, dstAddress: i, srcAmount: r, dstNativeAmount: d, dstChainKey: u} = e
                  , l = (0,
                a.RE)(u, this.config).eid
                  , c = g(t, this.config)
                  , y = (0,
                o.K)(n)
                  , m = (0,
                o.K)(i)
                  , f = await this.getDstGasMin({
                    srcChainKey: t,
                    dstChainKey: u
                })
                  , v = h({
                    dstNativeAmount: d,
                    dstNativeAddress: m,
                    dstGasMin: f
                })
                  , b = s.dE
                  , {nativeFee: T} = await this.getMessageFee({
                    ...e,
                    dstGasMin: f
                });
                return (0,
                s._X)({
                    from: y,
                    data: (0,
                    p.R)({
                        abi: w,
                        functionName: "sendFrom",
                        args: [y, l, m, r, y, b, v, 0n]
                    }),
                    value: T,
                    to: c
                }, {
                    chainKey: t
                })
            }
            constructor(e, t) {
                super(e, t),
                this.config = e,
                this.getViemClient = t
            }
        }
          , w = [{
            inputs: [{
                name: "_from",
                type: "address"
            }, {
                name: "_dstChainId",
                type: "uint16"
            }, {
                name: "_toAddress",
                type: "bytes"
            }, {
                name: "_amount",
                type: "uint256"
            }, {
                name: "_refundAddress",
                type: "address"
            }, {
                name: "_zroPaymentAddress",
                type: "address"
            }, {
                name: "_adapterParams",
                type: "bytes"
            }, {
                name: "",
                type: "uint256"
            }],
            name: "sendFrom",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        }]
          , A = class {
            validateConfig() {
                (0,
                i.hu)(0 === this.config.version, "Invalid config.version: is not 0"),
                (0,
                i.hu)(!1 === this.config.fee, "Invalid config.fee: is not false")
            }
            async getOptions(e) {
                return {
                    options: [{
                        mode: "taxi"
                    }]
                }
            }
            async getDuration(e) {
                let t = (0,
                a.L_)(e, this.config);
                return null != t ? t : {
                    estimated: void 0
                }
            }
            async getRoute(e) {
                let {srcChainKey: t, dstChainKey: n, srcAmount: s} = e
                  , r = (0,
                a.RE)(t, this.config)
                  , o = (0,
                a.RE)(n, this.config)
                  , [d,u,l] = await Promise.all([this.getMessageFee({
                    ...e,
                    dstNativeAmount: 0n
                }), this.getMessageFee({
                    ...e,
                    dstNativeAmount: e.dstNativeAmount
                }), this.getDuration(e)])
                  , p = (0,
                i.oO)(e.srcAmount, {
                    from: r.token.decimals,
                    to: o.token.decimals
                })
                  , c = (0,
                m.Cy)(d, u);
                return (0,
                m.Jg)(e, {
                    route: a.cm,
                    srcAmount: s,
                    dstAmount: p,
                    srcAmountMax: i.Bz,
                    duration: l,
                    allowance: i.Bz,
                    messageFee: d,
                    fees: c
                })
            }
            async getMessageFee(e) {
                let {srcChainKey: t, dstChainKey: n, dstNativeAmount: i, dstAddress: s} = e
                  , r = (0,
                o.K)(g(t, this.config))
                  , d = this.getEndpoint(t)
                  , u = (0,
                a.RE)(n, this.config)
                  , l = this.getDstGasMin()
                  , p = await this.getViemClient(t)
                  , y = (0,
                c.E)([{
                    name: "dstAddress",
                    type: "bytes"
                }, {
                    name: "dstNativeAmount",
                    type: "uint256"
                }], [r, i])
                  , m = h({
                    dstNativeAmount: i,
                    dstNativeAddress: (0,
                    o.K)(s),
                    dstGasMin: l
                })
                  , [f,v] = await p.readContract({
                    abi: k,
                    address: (0,
                    o.K)(d.address),
                    functionName: "estimateFees",
                    args: [u.eid, r, y, !1, m]
                });
                return {
                    nativeFee: f,
                    zroFee: v
                }
            }
            async transfer(e) {
                let {srcChainKey: t, srcAddress: n, dstAddress: i, srcAmount: r, dstNativeAmount: d, dstChainKey: u} = e
                  , c = (0,
                a.RE)(u, this.config)
                  , y = (0,
                o.K)(g(t, this.config))
                  , m = (0,
                o.K)(n)
                  , f = (0,
                o.K)(i)
                  , v = c.eid
                  , T = h({
                    dstNativeAmount: d,
                    dstNativeAddress: f,
                    dstGasMin: this.getDstGasMin()
                })
                  , {nativeFee: _} = await this.getMessageFee(e)
                  , x = (0,
                p.R)({
                    abi: C,
                    functionName: "sendTokens",
                    args: [v, f, r, l.DR, T]
                });
                return (0,
                s._X)({
                    from: m,
                    data: b(x),
                    value: _,
                    to: y
                }, {
                    chainKey: t
                })
            }
            supportsTransfer(e, t) {
                return (0,
                a.o6)(e, t, i.Jb.EVM, this.config)
            }
            getEndpoint(e) {
                let {eid: t} = (0,
                a.RE)(e, this.config)
                  , n = i.hF.getDeployment(t);
                return n.endpoint || n.endpointV1
            }
            getDstGasMin() {
                return 85000n
            }
            constructor(e, t) {
                this.config = e,
                this.getViemClient = t,
                this.validateConfig()
            }
        }
          , k = [{
            inputs: [{
                name: "_dstChainId",
                type: "uint16"
            }, {
                name: "_userApplication",
                type: "address"
            }, {
                name: "_payload",
                type: "bytes"
            }, {
                name: "_payInZRO",
                type: "bool"
            }, {
                name: "_adapterParams",
                type: "bytes"
            }],
            name: "estimateFees",
            outputs: [{
                name: "nativeFee",
                type: "uint256"
            }, {
                name: "zroFee",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }]
          , C = [{
            inputs: [{
                name: "_dstChainId",
                type: "uint16"
            }, {
                name: "_to",
                type: "bytes"
            }, {
                name: "_qty",
                type: "uint256"
            }, {
                name: "zroPaymentAddress",
                type: "address"
            }, {
                name: "adapterParam",
                type: "bytes"
            }],
            name: "sendTokens",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        }]
          , E = class {
            validateConfig() {
                (0,
                i.hu)(2 === this.config.version, "Invalid config.version: is not 2")
            }
            async getOptions(e) {
                return {
                    options: [{
                        mode: "taxi"
                    }]
                }
            }
            async getDuration(e) {
                let t = (0,
                a.L_)(e, this.config);
                return null != t ? t : {
                    estimated: void 0
                }
            }
            async getAllowance(e) {
                return v(e, this.config, await this.getViemClient(e.srcChainKey))
            }
            async getAmounts(e) {
                let {srcChainKey: t, dstChainKey: n} = e
                  , s = await this.getViemClient(t)
                  , r = (0,
                a.RE)(t, this.config)
                  , u = (0,
                a.RE)(n, this.config)
                  , l = (0,
                o.K)(g(t, this.config))
                  , p = f(e.srcAmount, {
                    localDecimals: r.token.decimals,
                    sharedDecimals: this.config.sharedDecimals
                })
                  , c = this.config.fee ? await s.readContract({
                    address: l,
                    abi: F,
                    functionName: "quoteOFTFee",
                    args: [u.eid, p]
                }) : 0n
                  , y = (0,
                i.oO)(p - c, {
                    from: r.token.decimals,
                    to: u.token.decimals
                });
                return {
                    srcAmount: p,
                    srcAmountMax: d.zL,
                    dstAmount: y,
                    oftFee: c
                }
            }
            async getRoute(e) {
                let {srcChainKey: t, dstChainKey: n, srcToken: i} = e
                  , s = await this.getDstGasMin({
                    srcChainKey: t,
                    dstChainKey: n
                })
                  , [r,o,d,{srcAmount: u, srcAmountMax: l, dstAmount: p, oftFee: c},y] = await Promise.all([this.getMessageFee({
                    ...e,
                    dstGasMin: s,
                    dstNativeAmount: 0n
                }), this.getMessageFee({
                    ...e,
                    dstGasMin: s,
                    dstNativeAmount: e.dstNativeAmount
                }), this.getAllowance(e), this.getAmounts(e), this.getDuration(e)])
                  , h = (0,
                m.Cy)(r, o).concat({
                    amount: c,
                    token: i,
                    type: "oft"
                });
                return (0,
                m.Jg)(e, {
                    route: a.cm,
                    srcAmount: u,
                    dstAmount: p,
                    srcAmountMax: l,
                    duration: y,
                    allowance: d,
                    messageFee: r,
                    fees: h
                })
            }
            async approve(e) {
                var t;
                let {srcToken: n, srcAddress: i, srcChainKey: r, srcAmount: o} = e
                  , d = null === (t = (0,
                a.RE)(r, this.config).oftProxy) || void 0 === t ? void 0 : t.address;
                if (!d)
                    throw Error("No spender found");
                return (0,
                s._X)((0,
                s.$6)({
                    token: n,
                    owner: i,
                    amount: o,
                    spender: d
                }), {
                    chainKey: r
                })
            }
            async getMessageFee(e) {
                let {srcChainKey: t, dstChainKey: n, dstNativeAmount: s, srcAmount: r, dstGasMin: d, dstAddress: u} = e
                  , l = await this.getViemClient(t)
                  , p = (0,
                a.RE)(n, this.config)
                  , c = (0,
                o.K)(g(t, this.config))
                  , m = (0,
                i.fs)(e.dstAddress, (0,
                i.H1)(n))
                  , f = h({
                    dstNativeAmount: s,
                    dstNativeAddress: u,
                    dstGasMin: d
                })
                  , [v,b] = await l.readContract({
                    abi: I,
                    address: c,
                    functionName: "estimateSendFee",
                    args: [p.eid, (0,
                    y.ci)(m), r, !1, f]
                });
                return {
                    nativeFee: v,
                    zroFee: b
                }
            }
            async transfer(e) {
                let {srcChainKey: t, srcAddress: n, srcAmount: r, dstNativeAmount: d, dstChainKey: u, dstAddress: c} = e
                  , m = (0,
                a.RE)(t, this.config)
                  , f = (0,
                a.RE)(u, this.config)
                  , v = (0,
                o.K)(g(t, this.config));
                (0,
                i.hu)(2 === m.version, "Invalid srcDeployment.version: is not 2");
                let T = await this.getDstGasMin({
                    srcChainKey: t,
                    dstChainKey: u
                })
                  , {nativeFee: _} = await this.getMessageFee({
                    ...e,
                    dstGasMin: T
                })
                  , x = m.oftNative ? _ + r : _
                  , w = f.eid
                  , A = (0,
                o.K)(n)
                  , k = function(e) {
                    if (e.match(/^0x[0-9a-f]+$/i))
                        return e;
                    throw Error("Invalid hex ".concat(e))
                }(c)
                  , C = (0,
                i.fs)(e.dstAddress, (0,
                i.H1)(u))
                  , E = (0,
                i.oO)(e.dstAmountMin, {
                    from: f.token.decimals,
                    to: m.token.decimals
                })
                  , I = {
                    adapterParams: h({
                        dstNativeAmount: d,
                        dstNativeAddress: k,
                        dstGasMin: T
                    }),
                    refundAddress: A,
                    zroPaymentAddress: l.DR
                }
                  , M = this.config.fee ? (0,
                p.R)({
                    abi: F,
                    functionName: "sendFrom",
                    args: [A, w, (0,
                    y.ci)(C), r, E, I]
                }) : (0,
                p.R)({
                    abi: O,
                    functionName: "sendFrom",
                    args: [A, w, (0,
                    y.ci)(C), r, I]
                });
                return (0,
                s._X)({
                    from: A,
                    data: b(M),
                    value: x,
                    to: v
                }, {
                    chainKey: t
                })
            }
            supportsTransfer(e, t) {
                return (0,
                a.o6)(e, t, i.Jb.EVM, this.config)
            }
            async getDstGasMin(e) {
                let {srcChainKey: t, dstChainKey: n} = e
                  , i = await this.getViemClient(t)
                  , s = (0,
                a.RE)(n, this.config)
                  , r = (0,
                o.K)(g(t, this.config));
                return await i.readContract({
                    abi: I,
                    address: r,
                    functionName: "minDstGasLookup",
                    args: [s.eid, 0]
                }) || this.getDstGasMinDefault({
                    dstChainKey: n
                })
            }
            getDstGasMinDefault(e) {
                let {dstChainKey: t} = e;
                return "arbitrum" === t ? 3000000n : (0,
                i.Gd)(t) ? 10000n : 250000n
            }
            constructor(e, t) {
                this.config = e,
                this.getViemClient = t,
                this.validateConfig()
            }
        }
          , I = [{
            inputs: [{
                name: "_dstChainId",
                type: "uint16"
            }, {
                name: "_toAddress",
                type: "bytes32"
            }, {
                name: "_amount",
                type: "uint256"
            }, {
                name: "_useZro",
                type: "bool"
            }, {
                name: "_adapterParams",
                type: "bytes"
            }],
            name: "estimateSendFee",
            outputs: [{
                name: "nativeFee",
                type: "uint256"
            }, {
                name: "zroFee",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                name: "",
                type: "uint16"
            }, {
                name: "",
                type: "uint16"
            }],
            name: "minDstGasLookup",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }]
          , O = [{
            inputs: [{
                name: "_from",
                type: "address"
            }, {
                name: "_dstChainId",
                type: "uint16"
            }, {
                name: "_toAddress",
                type: "bytes32"
            }, {
                name: "_amount",
                type: "uint256"
            }, {
                components: [{
                    name: "refundAddress",
                    type: "address"
                }, {
                    name: "zroPaymentAddress",
                    type: "address"
                }, {
                    name: "adapterParams",
                    type: "bytes"
                }],
                name: "_callParams",
                type: "tuple"
            }],
            name: "sendFrom",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [{
                name: "",
                type: "uint16"
            }, {
                name: "",
                type: "uint16"
            }],
            name: "minDstGasLookup",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }]
          , F = [{
            inputs: [{
                internalType: "uint16",
                name: "_dstChainId",
                type: "uint16"
            }, {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }],
            name: "quoteOFTFee",
            outputs: [{
                internalType: "uint256",
                name: "fee",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                name: "_from",
                type: "address"
            }, {
                name: "_dstChainId",
                type: "uint16"
            }, {
                name: "_toAddress",
                type: "bytes32"
            }, {
                name: "_amount",
                type: "uint256"
            }, {
                name: "_minAmount",
                type: "uint256"
            }, {
                components: [{
                    name: "refundAddress",
                    type: "address"
                }, {
                    name: "zroPaymentAddress",
                    type: "address"
                }, {
                    name: "adapterParams",
                    type: "bytes"
                }],
                name: "_callParams",
                type: "tuple"
            }],
            name: "sendFrom",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        }]
          , M = class {
            validateConfig() {
                (0,
                i.hu)(3 === this.config.version, "Invalid config.version: is not 3")
            }
            async getOptions(e) {
                return {
                    options: [{
                        mode: "taxi"
                    }]
                }
            }
            async getDuration(e) {
                let t = (0,
                a.L_)(e, this.config);
                return null != t ? t : {
                    estimated: void 0
                }
            }
            async getMessageFee(e) {
                let t = await this.getViemClient(e.srcChainKey)
                  , {oftAddress: n, payInZro: a, ...i} = P(e, this.config)
                  , {nativeFee: s, lzTokenFee: r} = await t.readContract({
                    abi: S,
                    address: n,
                    functionName: "quoteSend",
                    args: [i, a]
                });
                return {
                    nativeFee: s,
                    zroFee: r
                }
            }
            async getAmounts(e) {
                let t = (0,
                a.RE)(e.srcChainKey, this.config)
                  , n = (0,
                a.RE)(e.dstChainKey, this.config);
                if (t.oftNative && !1 === this.config.fee) {
                    let a = f(e.srcAmount, {
                        localDecimals: t.token.decimals,
                        sharedDecimals: this.config.sharedDecimals
                    })
                      , s = (0,
                    i.oO)(a, {
                        from: t.token.decimals,
                        to: n.token.decimals
                    });
                    return {
                        srcAmount: a,
                        srcAmountMax: i.Bz,
                        dstAmount: s,
                        fees: []
                    }
                }
                let s = await this.getViemClient(e.srcChainKey)
                  , {oftAddress: r, payInZro: o, ...d} = P(e, this.config)
                  , [u,l,p] = await s.readContract({
                    abi: S,
                    address: r,
                    functionName: "quoteOFT",
                    args: [d]
                })
                  , c = !1 === this.config.limit ? i.Bz : u.maxAmountLD
                  , y = l.map(t => ({
                    amount: t.feeAmountLD,
                    token: e.srcToken,
                    type: t.description
                }));
                return {
                    srcAmount: p.amountSentLD,
                    srcAmountMax: c,
                    dstAmount: (0,
                    i.oO)(p.amountReceivedLD, {
                        from: t.token.decimals,
                        to: n.token.decimals
                    }),
                    fees: y
                }
            }
            async getAllowance(e) {
                return v(e, this.config, await this.getViemClient(e.srcChainKey))
            }
            async getRoute(e) {
                (0,
                a.b0)(this.config, e);
                let[t,n,i,s,r] = await Promise.all([this.getMessageFee({
                    ...e,
                    dstNativeAmount: 0n
                }), this.getMessageFee({
                    ...e,
                    dstNativeAmount: e.dstNativeAmount
                }), this.getAmounts({
                    ...e
                }), this.getAllowance({
                    ...e
                }), this.getDuration({
                    ...e
                })])
                  , o = (0,
                m.Cy)(t, n);
                return (0,
                m.Jg)(e, {
                    route: a.cm,
                    messageFee: t,
                    allowance: s,
                    ...i,
                    fees: o,
                    duration: r
                })
            }
            async approve(e) {
                var t;
                let {srcToken: n, srcAddress: i, srcChainKey: r, srcAmount: o} = e
                  , d = null === (t = (0,
                a.RE)(r, this.config).oftProxy) || void 0 === t ? void 0 : t.address;
                if (!d)
                    throw Error("No spender found");
                return (0,
                s._X)((0,
                s.$6)({
                    token: n,
                    owner: i,
                    amount: o,
                    spender: d
                }), {
                    chainKey: r
                })
            }
            async transfer(e) {
                let {srcChainKey: t} = e
                  , n = (0,
                a.RE)(t, this.config)
                  , {oftAddress: i, payInZro: r, sender: o, ...d} = P(e, this.config)
                  , {nativeFee: u, zroFee: l} = await this.getMessageFee(e)
                  , c = n.oftNative ? u + d.amountLD : u;
                return (0,
                s._X)({
                    from: o,
                    data: (0,
                    p.R)({
                        abi: S,
                        functionName: "send",
                        args: [d, {
                            nativeFee: u,
                            lzTokenFee: l
                        }, o]
                    }),
                    value: c,
                    to: i
                }, {
                    chainKey: t
                })
            }
            supportsTransfer(e, t) {
                return (0,
                a.o6)(e, t, i.Jb.EVM, this.config)
            }
            constructor(e, t) {
                this.config = e,
                this.getViemClient = t,
                this.validateConfig()
            }
        }
        ;
        function P(e, t) {
            let n = (0,
            a.RE)(e.srcChainKey, t)
              , s = (0,
            a.RE)(e.dstChainKey, t)
              , r = g(e.srcChainKey, t)
              , d = (0,
            o.K)(e.srcAddress)
              , u = (0,
            i.H1)(e.dstChainKey)
              , l = (0,
            i.fs)(e.dstAddress, u)
              , p = f(e.srcAmount, {
                localDecimals: n.token.decimals,
                sharedDecimals: t.sharedDecimals
            })
              , c = (0,
            i.oO)(e.dstAmountMin, {
                from: s.token.decimals,
                to: n.token.decimals
            })
              , m = (0,
            a.JD)(e.dstNativeAmount, l, s)
              , {executorLzReceiveOption: h} = s;
            return h && m.addExecutorLzReceiveOption(h.gasLimit, h.nativeValue),
            {
                oftAddress: r,
                sender: d,
                dstEid: s.eid,
                to: (0,
                y.ci)(l),
                amountLD: p,
                minAmountLD: c,
                extraOptions: m.toHex(),
                composeMsg: "0x",
                oftCmd: "0x",
                payInZro: !1
            }
        }
        var S = [{
            inputs: [{
                components: [{
                    name: "dstEid",
                    type: "uint32"
                }, {
                    name: "to",
                    type: "bytes32"
                }, {
                    name: "amountLD",
                    type: "uint256"
                }, {
                    name: "minAmountLD",
                    type: "uint256"
                }, {
                    name: "extraOptions",
                    type: "bytes"
                }, {
                    name: "composeMsg",
                    type: "bytes"
                }, {
                    name: "oftCmd",
                    type: "bytes"
                }],
                name: "_sendParam",
                type: "tuple"
            }],
            name: "quoteOFT",
            outputs: [{
                components: [{
                    name: "minAmountLD",
                    type: "uint256"
                }, {
                    name: "maxAmountLD",
                    type: "uint256"
                }],
                name: "oftLimit",
                type: "tuple"
            }, {
                components: [{
                    name: "feeAmountLD",
                    type: "int256"
                }, {
                    name: "description",
                    type: "string"
                }],
                name: "oftFeeDetails",
                type: "tuple[]"
            }, {
                components: [{
                    name: "amountSentLD",
                    type: "uint256"
                }, {
                    name: "amountReceivedLD",
                    type: "uint256"
                }],
                name: "oftReceipt",
                type: "tuple"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                components: [{
                    name: "dstEid",
                    type: "uint32"
                }, {
                    name: "to",
                    type: "bytes32"
                }, {
                    name: "amountLD",
                    type: "uint256"
                }, {
                    name: "minAmountLD",
                    type: "uint256"
                }, {
                    name: "extraOptions",
                    type: "bytes"
                }, {
                    name: "composeMsg",
                    type: "bytes"
                }, {
                    name: "oftCmd",
                    type: "bytes"
                }],
                name: "_sendParam",
                type: "tuple"
            }, {
                name: "_payInLzToken",
                type: "bool"
            }],
            name: "quoteSend",
            outputs: [{
                components: [{
                    name: "nativeFee",
                    type: "uint256"
                }, {
                    name: "lzTokenFee",
                    type: "uint256"
                }],
                name: "msgFee",
                type: "tuple"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                components: [{
                    name: "dstEid",
                    type: "uint32"
                }, {
                    name: "to",
                    type: "bytes32"
                }, {
                    name: "amountLD",
                    type: "uint256"
                }, {
                    name: "minAmountLD",
                    type: "uint256"
                }, {
                    name: "extraOptions",
                    type: "bytes"
                }, {
                    name: "composeMsg",
                    type: "bytes"
                }, {
                    name: "oftCmd",
                    type: "bytes"
                }],
                name: "_sendParam",
                type: "tuple"
            }, {
                components: [{
                    name: "nativeFee",
                    type: "uint256"
                }, {
                    name: "lzTokenFee",
                    type: "uint256"
                }],
                name: "_fee",
                type: "tuple"
            }, {
                name: "_refundAddress",
                type: "address"
            }],
            name: "send",
            outputs: [{
                components: [{
                    name: "guid",
                    type: "bytes32"
                }, {
                    name: "nonce",
                    type: "uint64"
                }, {
                    components: [{
                        name: "nativeFee",
                        type: "uint256"
                    }, {
                        name: "lzTokenFee",
                        type: "uint256"
                    }],
                    name: "fee",
                    type: "tuple"
                }],
                name: "msgReceipt",
                type: "tuple"
            }, {
                components: [{
                    name: "amountSentLD",
                    type: "uint256"
                }, {
                    name: "amountReceivedLD",
                    type: "uint256"
                }],
                name: "oftReceipt",
                type: "tuple"
            }],
            stateMutability: "payable",
            type: "function"
        }]
    },
    61869: function(e, t, n) {
        "use strict";
        n.d(t, {
            H3: function() {
                return k
            },
            H_: function() {
                return _
            },
            e5: function() {
                return T
            },
            nA: function() {
                return x
            }
        });
        var a = n(57387)
          , i = n(55041)
          , s = n(86946)
          , r = n(18226)
          , o = n(38623)
          , d = n(32151)
          , u = n(93372)
          , l = n(18119)
          , p = n(32489)
          , c = n(26412)
          , y = n(14337)
          , m = n(7863)
          , h = n(13535)
          , f = n(13380)
          , g = n(77334);
        async function v(e, t, n, a, s) {
            return new i.TransactionMessage({
                payerKey: t,
                recentBlockhash: await e.getLatestBlockhash(a).then(e => e.blockhash),
                instructions: n
            }).compileToV0Message(s)
        }
        async function b(e, t, n, a, s) {
            return new i.VersionedTransaction(await v(e, t, n, a, s))
        }
        var T = class {
            getTokenProgramId(e) {
                let t = this.getDeployment(e).token;
                return t.programId ? new i.PublicKey(t.programId) : u.H_
            }
            getOftProgramId(e) {
                var t;
                let n = this.getDeployment(e);
                return (0,
                o.hu)(null === (t = n.oft) || void 0 === t ? void 0 : t.programId, "programId is required"),
                new i.PublicKey(n.oft.programId)
            }
            getDeriver(e) {
                if (!this.derivers[e]) {
                    let t = this.getOftProgramId(e)
                      , n = new d.mE(t);
                    this.derivers[e] = n
                }
                return this.derivers[e]
            }
            getOftInstance(e) {
                let t = this.getDeriver(e)
                  , n = this.getDeployment(e);
                (0,
                o.hu)((0,
                o.gj)(n.token), "Token address is required");
                let a = new i.PublicKey(n.token.address)
                  , s = n.tokenEscrow ? new i.PublicKey(n.tokenEscrow.address) : void 0;
                return t.oftConfig(null != s ? s : a)[0]
            }
            validateConfig(e) {
                (0,
                o.hu)(3 === e.version, "OftBridgeConfig version 3 is required")
            }
            supportsClaim(e) {
                return this.supportsRegister(e)
            }
            supportsRegister(e) {
                var t;
                let {chainKey: n} = e;
                return !!(0,
                o.zR)(n) && !!(null === (t = this.tryGetDeployment(e.chainKey)) || void 0 === t ? void 0 : t.token.equals(e))
            }
            supportsTransfer(e, t) {
                var n, a;
                return !!((0,
                o.zR)(e.chainKey) && (null === (n = this.tryGetDeployment(e.chainKey)) || void 0 === n ? void 0 : n.token.equals(e)) && (null === (a = this.tryGetDeployment(t.chainKey)) || void 0 === a ? void 0 : a.token.equals(t)))
            }
            async getQuoteAccounts(e, t, n) {
                let a = await this.getConnection(e)
                  , s = this.getOftInstance(e)
                  , r = this.getPeer(e, n)
                  , o = new i.PublicKey(t)
                  , d = await this.getPeerInfo(a, r);
                return await this.sendHelper.getQuoteAccounts(a, o, s, n, (0,
                p.Dv)(d.address))
            }
            async getSendAccounts(e, t, n) {
                let a = await this.getConnection(e)
                  , s = new i.PublicKey(t)
                  , r = this.getOftInstance(e)
                  , o = this.getPeer(e, n)
                  , d = await this.getPeerInfo(a, o);
                return await this.sendHelper.getSendAccounts(a, s, r, n, (0,
                p.Dv)(d.address))
            }
            async getMessageFee(e) {
                var t;
                if (null === (t = this.logger) || void 0 === t || t.log("getMessageFee", e),
                !e.srcAddress)
                    throw Error("srcAddress is required");
                if (!(0,
                o.hD)(e.srcToken))
                    throw Error("srcToken is required");
                if (!e.srcAmount)
                    throw Error("srcAmount is required");
                if (!e.dstAmountMin)
                    throw Error("dstAmountMin is required");
                if (!e.dstAddress)
                    throw Error("dstAddress is required");
                let n = e.srcToken.chainKey
                  , a = e.dstToken.chainKey
                  , s = this.getDeployment(n)
                  , r = this.chainKeyToEndpointId(a)
                  , u = new i.PublicKey(e.srcAddress)
                  , l = new i.PublicKey(e.srcToken.address)
                  , p = e.srcAmount.toBigInt()
                  , c = (0,
                o.ph)(e.dstAmountMin, e.srcToken).toBigInt()
                  , y = (0,
                o.fs)(e.dstAddress, (0,
                o.H1)(a))
                  , m = s.tokenEscrow ? new i.PublicKey(s.tokenEscrow.address) : void 0
                  , {adapterParams: h} = e
                  , f = this.getPeer(n, r)
                  , g = await this.getConnection(n)
                  , v = this.getTokenProgramId(n)
                  , b = this.getOftProgramId(n)
                  , [T,_,x] = await Promise.all([this.createOptions({
                    adapterParams: h,
                    dstChainKey: a
                }), this.getPeerInfo(g, f), this.getQuoteAccounts(n, e.srcAddress, r)])
                  , w = await d.TG.quoteWithUln(g, u, l, r, p, c, T.toBytes(), Array.from(y), !1, m, void 0, _.address, x, v, b);
                return o.v7.from(n, {
                    nativeFee: w.nativeFee,
                    zroFee: w.lzTokenFee
                })
            }
            async createOptions(e) {
                let {adapterParams: t, dstChainKey: n} = e;
                return (0,
                a.ci)({
                    adapterParams: t,
                    dstChainKey: n
                }, this.config)
            }
            async getOutput(e) {
                (0,
                o.hu)(e.srcAddress, "srcAddress is required"),
                (0,
                o.hu)(e.dstAddress, "dstAddress is required"),
                (0,
                o.hu)(e.srcAmount, "srcAmount is required"),
                (0,
                o.hu)(e.dstAmountMin, "dstAmountMin is required"),
                (0,
                o.hu)(e.adapterParams, "adapterParams is required");
                let t = e.srcAmount.token
                  , n = e.dstToken
                  , a = await this.quoteOft({
                    srcAddress: e.srcAddress,
                    dstAddress: e.dstAddress,
                    srcAmount: e.srcAmount,
                    dstAmountMin: e.dstAmountMin,
                    adapterParams: e.adapterParams
                })
                  , i = (0,
                o.ph)(a.oftReceipt.amountReceivedLd, n)
                  , s = a.oftFeeDetails.reduce( (e, t) => e + t.feeAmountLd.toBigInt(), 0n);
                return {
                    dstAmount: i,
                    fee: {
                        bridgeFee: o.ih.fromBigInt(t, s)
                    }
                }
            }
            getDuration(e) {
                throw Error("Method not implemented.")
            }
            async getLimit(e) {
                return (0,
                o.hu)(e.srcAddress, "srcAddress is required"),
                (0,
                o.hu)(e.dstAddress, "dstAddress is required"),
                (0,
                o.hu)(e.srcAmount, "srcAmount is required"),
                (0,
                o.hu)(e.dstAmountMin, "dstAmountMin is required"),
                (0,
                o.hu)(e.adapterParams, "adapterParams is required"),
                (await this.quoteOft({
                    srcAddress: e.srcAddress,
                    dstAddress: e.dstAddress,
                    srcAmount: e.srcAmount,
                    dstAmountMin: e.dstAmountMin,
                    adapterParams: e.adapterParams
                })).oftLimits.maxAmountLd
            }
            async quoteOft(e) {
                var t;
                null === (t = this.logger) || void 0 === t || t.log("quoteOft", e);
                let n = e.srcAmount.token
                  , a = e.dstAmountMin.token
                  , s = n.chainKey
                  , r = a.chainKey
                  , u = e.srcAddress
                  , l = e.dstAddress
                  , p = this.getDeployment(s);
                (0,
                o.hu)((0,
                o.hD)(p.token), "Token address is required");
                let c = new i.PublicKey(u)
                  , y = new i.PublicKey(p.token.address)
                  , m = this.chainKeyToEndpointId(r)
                  , h = e.srcAmount.toBigInt()
                  , f = BigInt(0)
                  , g = (0,
                o.fs)(l, (0,
                o.H1)(r))
                  , v = p.tokenEscrow ? new i.PublicKey(p.tokenEscrow.address) : void 0
                  , b = await this.getConnection(s)
                  , T = o.FA.forV1(0)
                  , _ = await this.createOptions({
                    adapterParams: T,
                    dstChainKey: r
                })
                  , x = this.getTokenProgramId(s)
                  , w = this.getOftProgramId(s)
                  , {oftLimits: A, oftReceipt: k, oftFeeDetails: C} = await d.TG.quoteOft(b, c, y, m, h, f, _.toBytes(), Array.from(g), !1, v, void 0, x, w)
                  , E = e => o.ih.fromBigInt(n, BigInt(e));
                return {
                    oftLimits: {
                        minAmountLd: E(A.minAmountLd.toString()),
                        maxAmountLd: E(A.maxAmountLd.toString())
                    },
                    oftReceipt: {
                        amountReceivedLd: E(k.amountReceivedLd.toString()),
                        amountSentLd: E(k.amountSentLd.toString())
                    },
                    oftFeeDetails: C.map(e => ({
                        description: e.description,
                        feeAmountLd: E(e.feeAmountLd.toString())
                    }))
                }
            }
            async getExtraGas(e) {
                return 0
            }
            async getAllowance(e) {
                let {token: t} = e;
                return o.ih.fromRawAmount(t, o.Bz)
            }
            async getOptions(e) {
                return {
                    options: [{
                        mode: "taxi"
                    }]
                }
            }
            async getUnclaimed(e) {
                let {token: t} = e;
                return o.ih.fromRawAmount(t, 0)
            }
            async isRegistered(e) {
                return !0
            }
            async transfer(e) {
                (0,
                r.b)(e);
                let t = new i.PublicKey(e.srcAddress)
                  , {srcChainKey: n} = e
                  , a = await this.getConnection(n)
                  , o = await this.getTransactionInstruction(e)
                  , d = await this.getComputeUnitsLimit(a, o, e)
                  , u = i.ComputeBudgetProgram.setComputeUnitLimit({
                    units: d
                })
                  , l = await this.getAddPriorityFeeInstruction({
                    srcChainKey: n
                })
                  , p = await b(a, t, l ? [u, l, o] : [u, o]);
                return (0,
                s._X)(p, {
                    connection: a
                })
            }
            claim(e) {
                throw Error("Method not implemented.")
            }
            register(e) {
                throw Error("Method not implemented.")
            }
            approve(e) {
                throw Error("Method not implemented.")
            }
            async getAddPriorityFeeInstruction(e) {
                let {srcChainKey: t} = e
                  , n = this.getDeployment(t);
                if ("TRUMP" !== n.token.symbol)
                    return;
                let a = await this.getConnection(t)
                  , s = await a.getRecentPrioritizationFees({
                    lockedWritableAccounts: [function(e) {
                        if (!(0,
                        o.gj)(e))
                            throw Error("No address for ".concat(e.symbol));
                        return new i.PublicKey(e.address)
                    }(n.token)]
                })
                  , r = s.reduce( (e, t) => t.prioritizationFee / s.length + e, 0);
                return i.ComputeBudgetProgram.setComputeUnitPrice({
                    microLamports: Math.ceil(1.2 * r)
                })
            }
            async getTransactionInstruction(e) {
                let t = this.getDeployment(e.srcChainKey);
                (0,
                o.hu)((0,
                o.hD)(t.token), "Token address is required");
                let n = new i.PublicKey(e.srcAddress)
                  , a = new i.PublicKey(t.token.address)
                  , s = this.getTokenProgramId(e.srcChainKey)
                  , r = await (0,
                l.Am)(a, n, !1, s)
                  , u = e.srcToken.chainKey
                  , p = e.dstToken.chainKey
                  , c = this.chainKeyToEndpointId(p)
                  , y = e.srcAmount.toBigInt()
                  , m = (0,
                o.ph)(e.dstAmountMin, e.srcToken).toBigInt()
                  , h = (0,
                o.fs)(e.dstAddress, (0,
                o.H1)(p))
                  , f = e.fee.nativeFee.toBigInt()
                  , g = e.fee.zroFee.toBigInt()
                  , v = t.tokenEscrow ? new i.PublicKey(t.tokenEscrow.address) : void 0
                  , {adapterParams: b} = e
                  , T = await this.createOptions({
                    adapterParams: b,
                    dstChainKey: p
                })
                  , _ = await this.getConnection(u)
                  , x = this.getPeer(u, c)
                  , w = await this.getPeerInfo(_, x)
                  , A = await this.getSendAccounts(u, e.srcAddress, c)
                  , k = this.getOftProgramId(u);
                return await d.TG.sendWithUln(_, n, a, r, c, y, m, T.toBytes(), Array.from(h), f, g, v, void 0, w.address, A, s, k)
            }
            getPeerInfo(e, t) {
                return d.JG.accounts.Peer.fromAccountAddress(e, t)
            }
            getPeer(e, t) {
                let n = this.getOftInstance(e);
                return this.getDeriver(e).peer(n, t)[0]
            }
            async getComputeUnitsLimit(e, t, n) {
                let a = new i.PublicKey(n.srcAddress)
                  , r = await (0,
                s.bc)(e, [t], a, []);
                return null === r ? 1e3 : r < 1e3 ? 1e3 : Math.ceil(1.5 * r)
            }
            tryGetDeployment(e) {
                return this.config.deployments[e]
            }
            getDeployment(e) {
                let t = this.tryGetDeployment(e);
                if (t)
                    return t;
                throw Error("Deployment not found for chainKey ".concat(e))
            }
            chainKeyToEndpointId(e) {
                return this.getDeployment(e).eid
            }
            constructor(e, t, {cacheTime: n=0, verbose: a=!1}={}) {
                if (this.sendHelper = new d.Wb,
                this.derivers = {},
                this.logger = void 0,
                this.getConnection = e,
                this.config = t,
                this.validateConfig(t),
                a && (this.logger = console),
                n > 0) {
                    let e = {
                        isDeepEqual: !0,
                        isPromise: !0,
                        maxSize: 1e3,
                        maxAge: n
                    };
                    this.quoteOft = c(this.quoteOft.bind(this), e),
                    this.getMessageFee = c(this.getMessageFee.bind(this), e),
                    this.getPeerInfo = c(this.getPeerInfo.bind(this), e),
                    this.getQuoteAccounts = c(this.getQuoteAccounts.bind(this), e),
                    this.getSendAccounts = c(this.getSendAccounts.bind(this), e)
                }
            }
        }
          , _ = u.H_.toString()
          , x = u.nA.toString()
          , w = new i.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL")
          , A = async () => ({
            estimated: 60
        })
          , k = class {
            supportsTransfer(e, t) {
                return (0,
                a.o6)(e, t, "solana", this.config)
            }
            async getOptions(e) {
                return {
                    options: [{
                        mode: "taxi"
                    }]
                }
            }
            getTokenEscrow(e) {
                let t = (0,
                a.RE)(e, this.config).tokenEscrow;
                if (!t)
                    throw Error("Token escrow not found for chain ".concat(e));
                return (0,
                y.ZL)(t.address)
            }
            getLookupTable(e) {
                switch (e) {
                case "solana":
                    return (0,
                    y.ZL)("AokBxha6VMLLgf97B5VYHEtqztamWmYERBmmFvjuTzJB");
                case "solana-testnet":
                    return (0,
                    y.ZL)("9thqPdbR27A1yLWw2spwJLySemiGMXxPnEvfmXVk4KuK")
                }
                throw Error("No LookupTableAddress for: ".concat(e))
            }
            getTokenMint(e) {
                let t = (0,
                a.RE)(e, this.config)
                  , n = t.token;
                if (!(0,
                o.gj)(n))
                    throw Error("Token mint not found for chain ".concat(e), {
                        cause: t
                    });
                return (0,
                y.ZL)(n.address)
            }
            getOftProgramId(e) {
                let t = (0,
                a.RE)(e, this.config)
                  , n = t.oft;
                if (!(null == n ? void 0 : n.programId))
                    throw Error("Oft program not found for chain ".concat(e), {
                        cause: t
                    });
                return (0,
                y.ZL)(n.programId)
            }
            getTokenProgramId(e) {
                let t = (0,
                a.RE)(e, this.config)
                  , n = t.token;
                if (!n.programId)
                    throw Error("token program not found for chain ".concat(e), {
                        cause: t
                    });
                return (0,
                y.ZL)(n.programId)
            }
            async getRoute(e) {
                let t = await this.getRpc(e.srcChainKey)
                  , n = (0,
                a.RE)(e.srcChainKey, this.config)
                  , i = (0,
                a.RE)(e.dstChainKey, this.config)
                  , s = (0,
                o.Hy)(e.dstChainKey).chainType
                  , r = i.eid
                  , d = e.srcAmount
                  , u = (0,
                o.oO)(e.dstAmountMin, {
                    from: i.token.decimals,
                    to: n.token.decimals
                })
                  , l = (0,
                o.fs)(e.dstAddress, s)
                  , p = (0,
                a.JD)(0n, l, i)
                  , c = this.getOftProgramId(e.srcChainKey)
                  , m = {
                    payer: (0,
                    y.ZL)(e.srcAddress),
                    tokenEscrow: this.getTokenEscrow(e.srcChainKey),
                    tokenMint: this.getTokenMint(e.srcChainKey)
                }
                  , h = {
                    dstEid: r,
                    to: l,
                    amountLd: d,
                    minAmountLd: u,
                    options: p.toBytes()
                }
                  , [f,v,b] = await Promise.all([g.gS.quote(t, m, h, {
                    oft: c
                }), g.gS.quoteOft(t, m, h, c), this.getDuration(e)])
                  , T = (0,
                o.oO)(v.oftReceipt.amountReceivedLd, {
                    from: n.token.decimals,
                    to: i.token.decimals
                });
                return {
                    route: a.cm,
                    srcAmount: v.oftReceipt.amountSentLd,
                    dstAmount: T,
                    messageFee: {
                        nativeFee: f.nativeFee,
                        zroFee: f.lzTokenFee
                    },
                    duration: b,
                    srcAmountMax: v.oftLimits.maxAmountLd,
                    dstAmountMin: e.dstAmountMin,
                    srcAddress: e.srcAddress,
                    dstAddress: e.dstAddress,
                    srcChainKey: e.srcChainKey,
                    dstChainKey: e.dstChainKey,
                    srcToken: e.srcToken,
                    dstToken: e.dstToken,
                    dstNativeAmount: e.dstNativeAmount,
                    mode: e.mode,
                    option: {
                        mode: e.mode
                    },
                    allowance: o.Bz,
                    error: void 0
                }
            }
            async transfer(e) {
                let t = await this.getRpc(e.srcChainKey)
                  , n = (0,
                a.RE)(e.srcChainKey, this.config)
                  , r = (0,
                a.RE)(e.dstChainKey, this.config)
                  , d = (0,
                o.Hy)(e.dstChainKey).chainType
                  , u = r.eid
                  , l = e.srcAmount
                  , p = (0,
                o.oO)(e.dstAmountMin, {
                    from: r.token.decimals,
                    to: n.token.decimals
                })
                  , c = (0,
                o.fs)(e.dstAddress, d)
                  , v = (0,
                a.JD)(e.dstNativeAmount, c, r)
                  , T = this.getOftProgramId(e.srcChainKey)
                  , _ = (0,
                y.ZL)(e.srcAddress)
                  , x = this.getTokenMint(e.srcChainKey)
                  , A = this.getTokenEscrow(e.srcChainKey)
                  , k = this.getTokenProgramId(e.srcChainKey)
                  , C = function(e) {
                    let {walletAddress: t, tokenMintAddress: n, tokenProgramId: a} = e
                      , s = function(e) {
                        let {walletAddress: t, tokenMintAddress: n, tokenProgramId: a} = e;
                        return i.PublicKey.findProgramAddressSync([t.toBuffer(), a.toBuffer(), n.toBuffer()], w)[0]
                    }({
                        walletAddress: (0,
                        h.I)(t),
                        tokenMintAddress: (0,
                        h.I)(n),
                        tokenProgramId: (0,
                        h.I)(a)
                    });
                    return (0,
                    y.ZL)(s)
                }({
                    walletAddress: _,
                    tokenMintAddress: x,
                    tokenProgramId: k
                })
                  , E = {
                    dstEid: u,
                    to: c,
                    amountLd: l,
                    minAmountLd: p,
                    options: v.toBytes()
                }
                  , I = await g.gS.quote(t, {
                    payer: _,
                    tokenEscrow: A,
                    tokenMint: x
                }, E, {
                    oft: T
                })
                  , O = {
                    dstEid: u,
                    to: c,
                    amountLd: l,
                    minAmountLd: p,
                    options: v.toBytes(),
                    nativeFee: I.nativeFee
                }
                  , F = await g.gS.send(t, {
                    tokenSource: C,
                    tokenEscrow: A,
                    tokenMint: x,
                    payer: (0,
                    m.rO)(_)
                }, O, {
                    oft: T,
                    token: k
                })
                  , M = (0,
                f.h)(F.instruction)
                  , P = new i.Connection(t.getEndpoint())
                  , S = await P.getAddressLookupTable((0,
                h.I)(this.getLookupTable(e.srcChainKey)))
                  , N = (null == S ? void 0 : S.value) ? [S.value] : void 0
                  , K = await (0,
                s.bc)(P, [M], (0,
                h.I)(_), null != N ? N : [])
                  , D = i.ComputeBudgetProgram.setComputeUnitLimit({
                    units: Math.ceil((null != K ? K : 1e3) * 1.5)
                })
                  , z = await b(P, (0,
                h.I)(_), [D, M], void 0, N);
                return (0,
                s._X)(z, {
                    connection: P
                })
            }
            constructor(e, t, n={}) {
                var a;
                this.config = e,
                this.getRpc = t,
                this.getDuration = null !== (a = n.getDuration) && void 0 !== a ? a : A
            }
        }
    },
    86946: function(e, t, n) {
        "use strict";
        n.d(t, {
            _X: function() {
                return i
            },
            bc: function() {
                return r
            }
        });
        var a = n(55041);
        function i(e, t) {
            return {
                async build() {
                    throw Error("Not implemented")
                },
                unwrap: async () => e,
                estimateGas() {
                    throw Error("Not implemented")
                },
                async signAndSubmitTransaction(n) {
                    let a = await t.connection.getLatestBlockhashAndContext()
                      , i = await n.signTransaction(e, {})
                      , s = await t.connection.sendRawTransaction(i.serialize());
                    return {
                        txHash: s,
                        async wait() {
                            let e = (await t.connection.confirmTransaction({
                                signature: s,
                                blockhash: a.value.blockhash,
                                lastValidBlockHeight: a.value.lastValidBlockHeight
                            }, "confirmed")).value.err;
                            if (e)
                                throw Error("Confirmation of transaction ".concat(s, " failed"), {
                                    cause: e
                                });
                            return {
                                txHash: s
                            }
                        }
                    }
                },
                estimateNative() {
                    throw Error("Not implemented")
                }
            }
        }
        var s = e => {
            let t = e.value.err;
            if (t) {
                if ("object" == typeof t) {
                    let e = Object.keys(t);
                    if (1 === e.length) {
                        if ("InstructionError" !== e[0])
                            throw Error("Unknown RPC error: ".concat(t));
                        let n = t.InstructionError;
                        throw Error("Error in transaction: instruction index ".concat(n[0], ", custom program error ").concat(n[1].Custom))
                    }
                }
                throw Error(t.toString())
            }
        }
          , r = async (e, t, n, i) => {
            let r = [a.ComputeBudgetProgram.setComputeUnitLimit({
                units: 14e5
            }), ...t]
              , o = new a.VersionedTransaction(new a.TransactionMessage({
                instructions: r,
                payerKey: n,
                recentBlockhash: a.PublicKey.default.toString()
            }).compileToV0Message(i))
              , d = await e.simulateTransaction(o, {
                replaceRecentBlockhash: !0,
                sigVerify: !1
            });
            return s(d),
            d.value.unitsConsumed || null
        }
    },
    13914: function(e, t, n) {
        "use strict";
        n.d(t, {
            Lb: function() {
                return C
            }
        }),
        n(65720);
        var a = n(41270);
        n(87376).Buffer;
        var i = a.z.string().refine(function(e) {
            try {
                return BigInt(e),
                !0
            } catch (e) {
                return !1
            }
        });
        a.z.object({
            srcToken: a.z.string().optional(),
            srcChainKey: a.z.string().optional()
        }),
        a.z.object({
            srcToken: a.z.string(),
            dstToken: a.z.string(),
            srcChainKey: a.z.string(),
            dstChainKey: a.z.string(),
            srcAmount: i,
            dstAmountMin: i,
            srcAddress: a.z.string(),
            dstAddress: a.z.string(),
            dstNativeAmount: i.default("0")
        });
        var s = a.z.object({
            message: a.z.string()
        });
        a.z.object({
            txHash: a.z.string()
        }),
        a.z.object({
            message: a.z.lazy( () => k).optional()
        }),
        a.z.object({
            srcChainKey: a.z.string(),
            dstChainKey: a.z.string()
        });
        var r = a.z.object({
            dstNativeAmountMax: a.z.record(a.z.string(), i),
            dstNativeAmountDefault: a.z.record(a.z.string(), i)
        });
        a.z.object({
            options: r
        });
        var o = a.z.object({
            data: a.z.string(),
            from: a.z.string().optional(),
            to: a.z.string(),
            value: a.z.string().optional()
        })
          , d = a.z.object({
            validUntil: a.z.number().optional(),
            network: a.z.string().optional(),
            from: a.z.string(),
            messages: a.z.object({
                address: a.z.string(),
                amount: a.z.string(),
                stateInit: a.z.string().optional(),
                payload: a.z.string().optional()
            }).array()
        })
          , u = a.z.object({
            encoding: a.z.enum(["hex"]),
            data: a.z.string(),
            type: a.z.enum(["simple"])
        })
          , l = a.z.object({
            encoding: a.z.enum(["base64"]),
            data: a.z.string()
        })
          , p = a.z.object({
            encoding: a.z.enum(["hex"]),
            data: a.z.string()
        })
          , c = a.z.object({})
          , y = a.z.object({
            type: a.z.string(),
            amount: i,
            token: a.z.string(),
            chainKey: a.z.string()
        })
          , m = a.z.object({
            estimated: a.z.number().nullable()
        })
          , h = a.z.object({
            bridge: a.z.string(),
            srcChainKey: a.z.string(),
            dstChainKey: a.z.string(),
            srcAddress: a.z.string(),
            dstAddress: a.z.string(),
            srcToken: a.z.string(),
            dstToken: a.z.string(),
            srcAmount: i,
            srcAmountMax: i,
            dstAmount: i,
            dstAmountMin: i,
            duration: m,
            allowance: i,
            error: a.z.null(),
            dstNativeAmount: i,
            dstNativeAmountMax: i.optional(),
            fees: y.array(),
            steps: a.z.lazy( () => a.z.union([_, x, w, A]).array())
        })
          , f = a.z.object({
            bridge: a.z.string(),
            error: s
        });
        a.z.object({
            routes: a.z.union([h, f]).array()
        });
        var g = a.z.object({
            isBridgeable: a.z.boolean().optional(),
            chainKey: a.z.string(),
            address: a.z.string(),
            decimals: a.z.number(),
            symbol: a.z.string(),
            name: a.z.string(),
            price: a.z.object({
                usd: a.z.number().optional()
            }).optional()
        })
          , v = a.z.object({
            name: a.z.string(),
            shortName: a.z.string(),
            chainKey: a.z.string(),
            chainType: a.z.string(),
            chainId: a.z.union([a.z.number(), a.z.string()]),
            nativeCurrency: g
        });
        a.z.object({
            chains: v.array()
        }),
        a.z.object({
            tokens: g.array()
        });
        var b = a.z.union([o, d, p, u, l, c]);
        a.z.object({
            abi: a.z.unknown(),
            args: a.z.array(a.z.unknown())
        });
        var T = a.z.object({
            type: a.z.string()
        })
          , _ = T.extend({
            type: a.z.literal("bridge"),
            chainKey: a.z.string(),
            sender: a.z.string(),
            transaction: b
        })
          , x = T.extend({
            type: a.z.literal("approve"),
            chainKey: a.z.string(),
            sender: a.z.string(),
            transaction: b
        })
          , w = T.extend({
            type: a.z.literal("register"),
            chainKey: a.z.string(),
            sender: a.z.string(),
            transaction: b
        })
          , A = T.extend({
            type: a.z.literal("claim"),
            chainKey: a.z.string(),
            sender: a.z.string(),
            transaction: b
        })
          , k = a.z.object({
            srcTxHash: a.z.string(),
            dstTxHash: a.z.string().optional()
        });
        a.z.object({
            chainKey: a.z.string(),
            address: a.z.string(),
            token: a.z.string().optional()
        }),
        a.z.object({
            unclaimed: a.z.record(a.z.string(), i)
        });
        var C = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
    },
    98530: function(e, t, n) {
        "use strict";
        n.d(t, {
            KP: function() {
                return o
            },
            TD: function() {
                return d
            },
            ab: function() {
                return r
            },
            qj: function() {
                return i
            }
        });
        var a = n(38623)
          , i = class {
            get autoConnectStorageKey() {
                return ["wallet", this.chainType, this.type, "autoconnect"].join(":")
            }
            get isAutoConnectEnabled() {
                return "undefined" != typeof localStorage && "true" === localStorage.getItem(this.autoConnectStorageKey)
            }
            set isAutoConnectEnabled(e) {
                "undefined" != typeof localStorage && (e ? localStorage.setItem(this.autoConnectStorageKey, "true") : localStorage.removeItem(this.autoConnectStorageKey))
            }
            async getChainKey() {
                var e;
                let t = await this.getNativeChainId();
                return null === (e = (0,
                a.z0)(this.chainType, t)) || void 0 === e ? void 0 : e.chainKey
            }
            constructor() {
                this.isConnected = !1,
                this.isAvailable = !1,
                this.isConnecting = !1,
                this.isSwitchingChain = !1,
                this.publicKey = void 0,
                this.address = void 0,
                this.nativeChainId = void 0
            }
        }
          , s = class extends Error {
        }
          , r = class extends s {
            constructor(...e) {
                super(...e),
                this.name = "UserRejectedRequestError",
                this.shortMessage = "User rejected the request."
            }
        }
          , o = class extends s {
            constructor(...e) {
                super(...e),
                this.name = "SyncWalletError",
                this.shortMessage = "Failed to sync wallet."
            }
        }
        ;
        async function d(e, t) {
            let[n,i] = await Promise.all([e.getNativeChainId(), e.getAddress()]);
            if (n !== (0,
            a.Hy)(t.chainKey).nativeChainId)
                throw Error("Invalid wallet chain");
            if (i.toLowerCase() !== t.address.toLowerCase())
                throw Error("Invalid wallet address")
        }
    }
}]);
