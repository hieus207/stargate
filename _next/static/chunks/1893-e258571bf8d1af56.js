"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[1893], {
    1893: function(t, e, i) {
        i.d(e, {
            y9: function() {
                return n
            },
            poolFormStore: function() {
                return K
            }
        });
        var s, n, o = i(38623), r = i(98530), d = i(59533), a = i(24594), u = i(47542), l = i(5515), h = i(28066), m = i(50054), p = i(90818), c = i(64770), g = i(39552), f = i(31174), A = i(35153), y = i(52805), v = i(15322), w = i(21518), T = i(86592), b = i(33221), S = i(48540), x = i(50671), D = i(41216), O = i(41270);
        let P = O.ZP.object({
            action: O.ZP.enum(["deposit", "redeem"]),
            dstAddress: O.ZP.string(),
            srcAddress: O.ZP.string(),
            dstAmount: O.ZP.string(),
            srcAmount: O.ZP.string(),
            mode: O.ZP.string().optional(),
            srcChain: O.ZP.string().optional(),
            dstChain: O.ZP.string().optional(),
            pool: O.ZP.string(),
            stargateVersion: O.ZP.string(),
            status: O.ZP.enum(["success", "error"]),
            srcTxTimestamp: O.ZP.number(),
            srcTxHash: O.ZP.string(),
            error: O.ZP.string(),
            errorCode: O.ZP.string()
        }).partial();
        async function C(t) {
            let e = P.parse(t);
            return (0,
            D.j)("pool", e)
        }
        async function k() {
            return [{
                type: "withdraw"
            }]
        }
        async function E(t) {
            let {allowance: e, amount: i} = t
              , s = [];
            return e.lessThan(i) && s.push({
                type: "approve"
            }),
            s.push({
                type: "deposit"
            }),
            s
        }
        let H = {
            arbitrum: 10000000n,
            avalanche: 25000000001n,
            base: 4828789n,
            bsc: 1000000000n,
            ethereum: 4617725379n,
            fantom: 24872154916n,
            kava: 1000000000n,
            linea: 113674727n,
            mantle: 20000000n,
            metis: 1247735823n,
            optimism: 2064256n,
            polygon: 30007728957n,
            scroll: 52147260n,
            aurora: 70000000n,
            sei: 100000000000n,
            lightlink: 120000000n
        }
          , W = {
            arbitrum: 76159n,
            avalanche: 53793n,
            base: 53793n,
            bsc: 53000n,
            ethereum: 53000n,
            fantom: 53000n,
            kava: 53000n,
            linea: 53793n,
            mantle: 286811167n,
            metis: 53000n,
            optimism: 53793n,
            polygon: 53000n,
            scroll: 53000n,
            aurora: 70666n,
            sei: 53793n,
            lightlink: 122177n
        };
        var B = i(15139);
        (s = n || (n = {})).DEPOSIT = "DEPOSIT",
        s.WITHDRAW = "WITHDRAW";
        class I {
            get isLoading() {
                var t, e;
                return null !== (e = null === (t = this.promises.redeemOptions) || void 0 === t ? void 0 : t.case({
                    pending: () => !0,
                    rejected: () => !1,
                    fulfilled: t => !1 === t.done
                })) && void 0 !== e && e
            }
            get adapter() {
                let {pool: t} = this;
                if (t) {
                    for (let e of B.b.adapters)
                        if (e.supportsPool(t))
                            return e
                }
            }
            get wallet() {
                return c.walletStore.evm
            }
            get errors() {
                let {wallet: t, amount: e, maxAmount: i, pool: s, adapter: n} = this
                  , o = [];
                function r(t) {
                    o.push(t)
                }
                if ("DEPOSIT" === this.form.mode) {
                    var d;
                    (null === (d = this.pool) || void 0 === d ? void 0 : d.disabled) && r("Pool is disabled")
                }
                return t || r("Connect wallet"),
                s ? n || r("Pool not supported") : r("Select pool"),
                // e && e.greaterThan(0) || r("Enter amount"),
                // i && e && e.greaterThan(i) && r("Amount exceeds balance"),
                o
            }
            get mode() {
                return this.form.mode
            }
            get depositAmount() {
                let {pool: t} = this;
                if (!t)
                    return;
                let e = (0,
                o.sp)(t.token, this.form.amount);
                if (e)
                    return (0,
                    o.LA)(e, t.sharedDecimals)
            }
            get withdrawAmount() {
                if (this.pool)
                    return (0,
                    o.sp)(this.pool.lpToken, this.form.amount)
            }
            get amount() {
                return "DEPOSIT" === this.form.mode ? this.depositAmount : this.withdrawAmount
            }
            get maxAmount() {
                return "DEPOSIT" === this.form.mode ? this.maxDepositAmount : this.maxWithdrawAmount
            }
            get tokenBalance() {
                if (this.pool && this.wallet)
                    return this.balanceStore.getBalance(this.pool.token, this.wallet.address)
            }
            get maxDepositAmount() {
                let {tokenBalance: t} = this;
                if (t) {
                    if ((0,
                    o.iI)(t.token)) {
                        let e = function(t) {
                            var e, i;
                            let s = null !== (e = H[t.chainKey]) && void 0 !== e ? e : 20000000000n
                              , n = null !== (i = W[t.chainKey]) && void 0 !== i ? i : 60000n;
                            return o.ih.fromBigInt(t, s * n * 4n)
                        }(t.token);
                        if (e)
                            return t.greaterThan(e) ? t.subtract(e) : t.multiply(0)
                    }
                    return t
                }
            }
            get maxWithdrawAmount() {
                if (this.pool && this.wallet)
                    return m._.getBalance(this.pool.lpToken, this.wallet.address)
            }
            get liquidityMinted() {
                return (0,
                f.d)(this.promises.liquidityMinted)
            }
            get depositedAmount() {
                return (0,
                f.d)(this.promises.depositedAmount)
            }
            get allRedeemOptions() {
                var t;
                return null === (t = (0,
                f.d)(this.promises.redeemOptions)) || void 0 === t ? void 0 : t.value
            }
            get enabledRedeemOptions() {
                let {allRedeemOptions: t, pool: e} = this;
                if (!t || !e)
                    return;
                let i = this.heuristics.find(t => t.supports(e))
                  , s = null == i ? void 0 : i.filter(t);
                return (null != s ? s : t).slice().sort( (t, e) => M(e) - M(t))
            }
            setMode(t) {
                this.form.mode = t
            }
            setAmount(t) {
                this.form.amount = t
            }
            setMaxAmount() {
                let {maxAmount: t} = this;
                if (!t)
                    throw Error("maxAmount is undefined");
                this.form.amount = t.toExact()
            }
            setPool(t) {
                this.pool !== t && (this.promises.liquidityMinted = void 0,
                this.pool = t)
            }
            get srcAddress() {
                var t;
                return null === (t = this.wallet) || void 0 === t ? void 0 : t.address
            }
            get dstAddress() {
                return this.srcAddress
            }
            close() {
                this.modals.confirmation = !1,
                this.modals.redeemOptions = !1
            }
            updateRedeemOptions() {
                let {adapter: t, amount: e, srcAddress: i, dstAddress: s} = this;
                (0,
                o.hu)(t, "adapter is undefined"),
                (0,
                o.hu)(e, "amount is undefined"),
                (0,
                o.hu)(i, "wallet not connected"),
                (0,
                o.hu)(s, "wallet not connected");
                let n = t.getRedeemOptions({
                    amount: e,
                    srcAddress: i,
                    dstAddress: s
                });
                return this.promises.redeemOptions = (0,
                a.p4)(n.then(t => (function(t) {
                    let e = d.LO.array([], {
                        deep: !1
                    })
                      , i = (0,
                    d.LO)({
                        value: e,
                        done: !1
                    });
                    return async function() {
                        for await(let i of t)
                            e.push(i);
                        i.done = !0
                    }(),
                    i
                }
                )(t))),
                n
            }
            async updateDepositedAmount() {
                let {adapter: t, wallet: e, pool: i} = this;
                if (this.promises.depositedAmount = void 0,
                !t || !e || !i)
                    return;
                let s = this.balanceStore.updateBalance(i.lpToken, e.address).then(e => t.getDepositedAmount({
                    amount: e
                }));
                return this.promises.depositedAmount = (0,
                a.p4)(s),
                s
            }
            async updateBalances() {
                let {wallet: t, pool: e} = this;
                if (t && e)
                    return Promise.all([this.balanceStore.updateBalance(e.token, t.address), this.balanceStore.updateBalance(e.lpToken, t.address)])
            }
            async updateLiquidityMinted() {
                let {adapter: t, pool: e, depositAmount: i} = this;
                if (this.promises.liquidityMinted = void 0,
                !t || !e || !i)
                    return;
                let s = t.getLiquidityMinted({
                    amount: i
                });
                return this.promises.liquidityMinted = (0,
                a.p4)(s),
                s
            }
            connectWallet() {
                p.uiStore.accountSlideIn.open()
            }
            subscribe() {
                let t = () => {
                    let {wallet: t, pool: e} = this;
                    this.updateBalances()
                }
                  , e = () => {
                    let {adapter: t, pool: e, depositAmount: i} = this;
                    this.updateLiquidityMinted()
                }
                  , i = () => {
                    let {adapter: t, wallet: e, pool: i} = this;
                    this.updateDepositedAmount()
                }
                  , s = [(0,
                d.EH)( () => i()), (0,
                d.EH)( () => t()), (0,
                d.EH)( () => e())];
                return () => {
                    s.forEach(t => t())
                }
            }
            constructor() {
                this.balanceStore = m._,
                this.poolStore = B.b,
                this.heuristics = d.LO.array(u.Wo, {
                    deep: !1
                }),
                this.pool = void 0,
                this.form = {
                    amount: "",
                    mode: "DEPOSIT"
                },
                this.selectedOption = void 0,
                this.promises = {
                    liquidityMinted: void 0,
                    depositedAmount: void 0,
                    redeemOptions: void 0
                },
                this.modals = {
                    confirmation: !1,
                    redeemOptions: !1
                },
                this.isConfirming = !1,
                this.isExecuting = !1,
                this.isWithdrawing = !1,
                this.isDepositing = !1,
                this.isApproving = !1,
                this.isSigning = !1,
                this.steps = [],
                this.deposit = (0,
                d.ls)((function*() {
                    let t = Z(this, "deposit")
                      , {depositAmount: e, wallet: i, adapter: s, pool: n, srcAddress: d, liquidityMinted: a} = this;
                    (0,
                    o.hu)(n, "pool is undefined"),
                    (0,
                    o.hu)(e, "amount is undefined"),
                    (0,
                    o.hu)(i, "wallet is undefined"),
                    (0,
                    o.hu)(d, "wallet is undefined"),
                    (0,
                    o.hu)(s, "adapter is undefined"),
                    (0,
                    o.hu)(a, "liquidityMinted is undefined");
                    try {
                        this.isExecuting = !0,
                        this.isDepositing = !0;
                        let o = yield s.getAllowance({
                            account: i.address
                        });
                        if (this.steps = yield E({
                            allowance: o,
                            amount: e
                        }),
                        yield i.switchChain(n.chainKey),
                        yield(0,
                        r.TD)(i, {
                            chainKey: n.chainKey,
                            address: d
                        }),
                        o.lessThan(e)) {
                            let t = {
                                account: i.address,
                                amount: (0,
                                A.y)(e)
                            }
                              , n = yield s.approve(t);
                            this.isApproving = !0;
                            let o = yield i.signAndSubmit(n);
                            this.isConfirming = !0,
                            yield o.wait(),
                            this.isConfirming = !1,
                            this.isApproving = !1,
                            h.actionStore.addAction(l.R.create({
                                txHash: o.txHash,
                                amount: t.amount,
                                createdTimestamp: (0,
                                v.u3)()
                            }))
                        }
                        let u = {
                            amount: e,
                            srcAddress: d,
                            dstAddress: d
                        };
                        yield(0,
                        r.TD)(i, {
                            chainKey: n.chainKey,
                            address: d
                        });
                        let m = yield s.deposit(u);
                        this.isSigning = !0;
                        let p = yield i.signAndSubmit(m);
                        this.isSigning = !1,
                        this.isConfirming = !0;
                        let c = yield p.wait();
                        this.isConfirming = !1,
                        this.setAmount("");
                        let g = w.k.create({
                            createdTimestamp: (0,
                            v.u3)(),
                            dstAddress: u.dstAddress,
                            srcAddress: u.srcAddress,
                            dstAmount: a,
                            srcAmount: e,
                            txHash: c.txHash
                        });
                        C({
                            ...t,
                            status: "success",
                            srcTxHash: c.txHash,
                            srcTxTimestamp: (0,
                            v.u3)()
                        }),
                        h.actionStore.addAction(g)
                    } catch (e) {
                        throw (0,
                        S.S)(e, () => {
                            let {message: i, title: s} = (0,
                            x.B)(e);
                            C({
                                ...t,
                                status: "error",
                                srcTxTimestamp: (0,
                                v.u3)(),
                                error: s,
                                errorCode: i.substring(0, 256)
                            })
                        }
                        ),
                        e
                    } finally {
                        this.steps = [],
                        this.isConfirming = !1,
                        this.isExecuting = !1,
                        this.isSigning = !1,
                        this.isApproving = !1,
                        this.isDepositing = !1,
                        this.updateBalances()
                    }
                }
                ).bind(this)),
                this.redeem = (0,
                d.ls)(function*(t) {
                    let e = Z(this, "redeem");
                    this.modals.redeemOptions = !1,
                    this.selectedOption = t,
                    this.isExecuting = !0;
                    let {wallet: i, adapter: s, pool: n, srcAddress: r, dstAddress: d} = this;
                    (0,
                    o.hu)(i, "wallet is undefined"),
                    (0,
                    o.hu)(s, "adapter is undefined"),
                    (0,
                    o.hu)(n, "pool is undefined"),
                    (0,
                    o.hu)(t, "option is undefined"),
                    (0,
                    o.hu)(r, "srcAddress is undefined"),
                    (0,
                    o.hu)(d, "dstAddress is undefined");
                    try {
                        this.isExecuting = !0,
                        this.isWithdrawing = !0,
                        this.steps = yield k();
                        let n = t.createInput({
                            srcAddress: r,
                            dstAddress: d
                        })
                          , o = n.srcAmount.token.chainKey
                          , a = n.dstAmount.token.chainKey;
                        yield(0,
                        g.b)(i, a),
                        yield i.switchChain(o);
                        let u = yield s.redeem(n);
                        this.isSigning = !0;
                        let l = yield i.signAndSubmit(u);
                        this.isSigning = !1,
                        this.isConfirming = !0;
                        let m = yield l.wait();
                        this.isConfirming = !1,
                        this.setAmount("");
                        let p = n.mode === b.Ki.LOCAL || n.mode === b.Ki.REMOTE
                          , c = T.z.create({
                            createdTimestamp: (0,
                            v.u3)(),
                            dstAddress: n.dstAddress,
                            srcAddress: n.srcAddress,
                            srcAmount: n.srcAmount,
                            dstAmount: n.dstAmount,
                            mode: n.mode,
                            txHash: m.txHash,
                            chainKey: o,
                            ...p && {
                                srcTxHash: m.txHash,
                                srcChainKey: o,
                                dstChainKey: a
                            }
                        });
                        C({
                            ...e,
                            status: "success",
                            srcTxHash: m.txHash,
                            srcTxTimestamp: (0,
                            v.u3)(),
                            mode: n.mode,
                            srcChain: o,
                            dstChain: a
                        }),
                        h.actionStore.addAction(c)
                    } catch (t) {
                        throw (0,
                        S.S)(t, () => {
                            let {message: i, title: s} = (0,
                            x.B)(t);
                            C({
                                ...e,
                                status: "error",
                                srcTxTimestamp: (0,
                                v.u3)(),
                                error: s,
                                errorCode: i.substring(0, 256)
                            })
                        }
                        ),
                        t
                    } finally {
                        this.steps = [],
                        this.isConfirming = !1,
                        this.isExecuting = !1,
                        this.isSigning = !1,
                        this.isApproving = !1,
                        this.isWithdrawing = !1,
                        this.selectedOption = void 0,
                        this.updateBalances(),
                        this.updateDepositedAmount()
                    }
                }),
                this.showWithdrawOptions = () => {
                    this.updateRedeemOptions(),
                    this.modals.redeemOptions = !0
                }
                ,
                (0,
                d.ky)(this, {
                    form: !0,
                    pool: d.LO.ref,
                    errors: d.Fl.struct,
                    setAmount: d.aD.bound,
                    amount: d.Fl.struct,
                    maxAmount: d.Fl.struct,
                    tokenBalance: d.Fl.struct,
                    wallet: !0,
                    liquidityMinted: d.Fl.struct,
                    adapter: d.Fl,
                    isConfirming: !0,
                    isExecuting: !0,
                    isWithdrawing: !0,
                    isDepositing: !0,
                    isApproving: !0,
                    isSigning: !0,
                    isLoading: d.Fl,
                    updateDepositedAmount: d.aD.bound,
                    updateBalances: d.aD.bound,
                    updateLiquidityMinted: d.aD.bound,
                    setMaxAmount: d.aD.bound,
                    setPool: d.aD.bound,
                    setMode: d.aD.bound,
                    deposit: d.ls,
                    redeem: d.ls
                }, {
                    autoBind: !0
                })
            }
        }
        let K = new I;
        function M(t) {
            var e, i;
            return (null !== (e = (0,
            y.W)(t.dstAmount)) && void 0 !== e ? e : 0) - (null !== (i = (0,
            y.W)(t.fee.nativeFee)) && void 0 !== i ? i : 0)
        }
        function Z(t, e) {
            var i, s;
            let {srcAddress: n, liquidityMinted: o, depositAmount: r, pool: d, selectedOption: a, mode: u} = t;
            return {
                action: e,
                dstAddress: n,
                srcAddress: n,
                srcAmount: "WITHDRAW" === u ? null == a ? void 0 : a.srcAmount.toBigInt().toString() : null == r ? void 0 : r.toBigInt().toString(),
                dstAmount: "WITHDRAW" === u ? null == a ? void 0 : null === (i = a.dstAmount) || void 0 === i ? void 0 : i.toBigInt().toString() : null == o ? void 0 : o.toBigInt().toString(),
                srcChain: null == d ? void 0 : d.chainKey,
                dstChain: "WITHDRAW" === u ? null == a ? void 0 : null === (s = a.dstAmount) || void 0 === s ? void 0 : s.token.chainKey : null == d ? void 0 : d.chainKey,
                pool: null == d ? void 0 : d.address,
                stargateVersion: null == d ? void 0 : d.stargateVersion
            }
        }
    }
}]);
