"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8070], {
    24260: function(t, i, s) {
        s.d(i, {
            j: function() {
                return n
            }
        });
        var e = s(41216)
          , r = s(41270);
        let a = r.ZP.object({
            action: r.ZP.enum(["deposit", "redeem", "claim"]),
            srcAddress: r.ZP.string(),
            srcAmount: r.ZP.string().optional(),
            srcChain: r.ZP.string(),
            rewards: r.ZP.string().optional(),
            farm: r.ZP.string(),
            stargateVersion: r.ZP.string(),
            status: r.ZP.enum(["success", "error"]),
            srcTxTimestamp: r.ZP.number(),
            srcTxHash: r.ZP.string(),
            error: r.ZP.string(),
            errorCode: r.ZP.string()
        }).partial();
        async function n(t) {
            let i = a.parse(t);
            return (0,
            e.j)("farm", i)
        }
    },
    617: function(t, i, s) {
        s.d(i, {
            u: function() {
                return f
            }
        });
        var e = s(38623)
          , r = s(59533)
          , a = s(28066)
          , n = s(64770)
          , o = s(48540)
          , u = s(50671)
          , l = s(15322)
          , h = s(62895)
          , m = s(42717)
          , d = s(24260)
          , c = s(75016);
        class g {
            async claim(t) {
                let {farm: i} = t;
                if (this.isClaiming)
                    throw Error("Already claiming");
                let s = function(t, i) {
                    let {wallet: s, farm: e} = t;
                    return {
                        action: i,
                        srcAddress: null == s ? void 0 : s.address,
                        farm: null == e ? void 0 : e.address,
                        srcChain: null == e ? void 0 : e.chainKey,
                        stargateVersion: null == e ? void 0 : e.stargateVersion
                    }
                }(this, "claim")
                  , {wallet: n} = this
                  , g = c.K.getAdapter(i);
                try {
                    this.farm = i,
                    this.isClaiming = !0,
                    (0,
                    e.hu)(n, "No wallet"),
                    (0,
                    e.hu)(g, "No adapter");
                    let t = n.address
                      , o = await g.getPendingRewards({
                        user: t
                    });
                    await n.switchChain(i.chainKey);
                    let u = o.rewards.filter(t => t.greaterThan(0)).map(t => t.token)
                      , h = await g.claim({
                        tokens: u,
                        user: t
                    });
                    (0,
                    r.z)( () => {
                        this.isSigning = !0
                    }
                    );
                    let c = await n.signAndSubmit(h);
                    (0,
                    r.z)( () => {
                        this.isSigning = !1,
                        this.isConfirming = !0
                    }
                    );
                    let f = await c.wait()
                      , p = m.w.create({
                        createdTimestamp: (0,
                        l.u3)(),
                        from: t,
                        rewards: o.rewards,
                        txHash: f.txHash
                    });
                    (0,
                    d.j)({
                        ...s,
                        status: "success",
                        srcTxHash: f.txHash,
                        srcTxTimestamp: (0,
                        l.u3)(),
                        rewards: o.rewards.map(t => "".concat(t.toSignificant(), " ").concat(t.token.symbol)).join(", ")
                    }),
                    a.actionStore.addAction(p)
                } catch (t) {
                    throw (0,
                    o.S)(t, () => {
                        let {message: i, title: e} = (0,
                        u.B)(t);
                        (0,
                        d.j)({
                            ...s,
                            status: "error",
                            srcTxTimestamp: (0,
                            l.u3)(),
                            error: e,
                            errorCode: i.substring(0, 256)
                        })
                    }
                    ),
                    t
                } finally {
                    n && (h.earnStore.updateFarmData(),
                    h.earnStore.updateFarmPosition(i, n.address)),
                    (0,
                    r.z)( () => {
                        this.isSigning = !1,
                        this.isConfirming = !1,
                        this.isClaiming = !1,
                        this.farm = void 0
                    }
                    )
                }
            }
            get wallet() {
                return n.walletStore.evm
            }
            constructor() {
                this.isSigning = !1,
                this.isConfirming = !1,
                this.isClaiming = !1,
                this.farm = void 0,
                (0,
                r.ky)(this, {
                    farm: r.LO.ref,
                    wallet: r.Fl,
                    claim: r.aD.bound
                }, {
                    autoBind: !0
                })
            }
        }
        let f = new g
    },
    96168: function(t, i, s) {
        s.d(i, {
            c: function() {
                return r
            },
            farmFormStore: function() {
                return P
            }
        });
        var e, r, a = s(38623), n = s(59533), o = s(5515), u = s(28066), l = s(50054), h = s(64770), m = s(35153), d = s(15322), c = s(62895), g = s(50031), f = s(68500), p = s(15139), S = s(48540), w = s(50671), v = s(24260);
        async function A() {
            return [{
                type: "unstake"
            }]
        }
        async function x(t) {
            let {allowance: i, amount: s} = t
              , e = [];
            return i.lessThan(s) && e.push({
                type: "approve"
            }),
            e.push({
                type: "stake"
            }),
            e
        }
        var y = s(75016);
        (e = r || (r = {})).DEPOSIT = "DEPOSIT",
        e.WITHDRAW = "WITHDRAW";
        class T {
            update() {
                return Promise.allSettled([this.updateFarmPosition(), this.updatePoolPosition()])
            }
            updatePoolPosition() {
                return (0,
                a.hu)(this.pool, "Farm not found"),
                (0,
                a.hu)(this.wallet, "Wallet not found"),
                c.earnStore.updatePoolBalance(this.pool, this.wallet.address)
            }
            updateFarmPosition() {
                return (0,
                a.hu)(this.farm, "Farm not found"),
                (0,
                a.hu)(this.wallet, "Wallet not found"),
                c.earnStore.updateFarmPosition(this.farm, this.wallet.address)
            }
            get errors() {
                let {amount: t, maxAmount: i, form: s} = this
                  , e = []
                  , r = t => e.push(t);
                return ("" === s.amount.trim() || (null == t ? void 0 : t.equalTo(0))) && r("Enter amount"),
                // return false,
                t || r("Invalid amount"),
                i && t && t.greaterThan(i) && r("Invalid amount"),
                e
            }
            get farmPosition() {
                if (this.wallet && this.farm)
                    return c.earnStore.getFarmPosition(this.farm, this.wallet.address)
            }
            get poolPosition() {
                if (this.wallet && this.pool)
                    return c.earnStore.getPoolPosition(this.pool, this.wallet.address)
            }
            get pool() {
                var t;
                let i = null === (t = this.farm) || void 0 === t ? void 0 : t.lpToken;
                if (i)
                    return p.b.pools.find(t => t.lpToken.equals(i))
            }
            get error() {
                return this.errors[0]
            }
            get amount() {
                if (this.farm)
                    return (0,
                    a.sp)(this.farm.lpToken, this.form.amount)
            }
            get maxDepositAmount() {
                if (this.farm && this.wallet)
                    return l._.getBalance(this.farm.lpToken, this.wallet.address)
            }
            get maxWithdrawAmount() {
                var t;
                return null === (t = this.farmPosition) || void 0 === t ? void 0 : t.depositedAmount
            }
            get maxAmount() {
                return "DEPOSIT" === this.form.mode ? this.maxDepositAmount : this.maxWithdrawAmount
            }
            get wallet() {
                return h.walletStore.evm
            }
            get adapter() {
                return this.farm ? y.K.getAdapter(this.farm) : void 0
            }
            setAmount(t) {
                this.form.amount = t
            }
            setMaxAmount() {
                this.maxAmount && (this.form.amount = this.maxAmount.toExact())
            }
            setMode(t) {
                this.form.mode = t
            }
            setFarm(t) {
                t !== this.farm && (this.farm = t)
            }
            constructor() {
                this.form = {
                    amount: "",
                    mode: "DEPOSIT"
                },
                this.farm = void 0,
                this.isConfirming = !1,
                this.isSigning = !1,
                this.isDepositing = !1,
                this.isWithdrawing = !1,
                this.isExecuting = !1,
                this.isApproving = !1,
                this.steps = [],
                this.promises = {
                    farmPosition: void 0
                },
                this.withdraw = (0,
                n.ls)((function*() {
                    let t = C(this, "redeem")
                      , {adapter: i, farm: s, amount: e, wallet: r} = this;
                    (0,
                    a.hu)(i, "Adapter not found"),
                    (0,
                    a.hu)(s, "Farm not found"),
                    (0,
                    a.hu)(e, "Invalid amount"),
                    (0,
                    a.hu)(r, "Wallet not found");
                    try {
                        this.steps = yield A(),
                        this.isExecuting = !0,
                        this.isWithdrawing = !0;
                        let a = {
                            amount: e
                        }
                          , n = yield i.withdraw(a);
                        yield r.switchChain(s.chainKey),
                        this.isSigning = !0;
                        let o = yield r.signAndSubmit(n);
                        this.isSigning = !1,
                        this.isConfirming = !0;
                        let l = yield o.wait();
                        this.isConfirming = !1;
                        let h = f.c.create({
                            txHash: l.txHash,
                            amount: a.amount,
                            createdTimestamp: (0,
                            d.u3)(),
                            from: r.address
                        });
                        (0,
                        v.j)({
                            ...t,
                            status: "success",
                            srcTxHash: l.txHash,
                            srcTxTimestamp: (0,
                            d.u3)()
                        }),
                        u.actionStore.addAction(h),
                        this.form.amount = ""
                    } catch (i) {
                        throw (0,
                        S.S)(i, () => {
                            let {message: s, title: e} = (0,
                            w.B)(i);
                            (0,
                            v.j)({
                                ...t,
                                status: "error",
                                srcTxTimestamp: (0,
                                d.u3)(),
                                error: e,
                                errorCode: s.substring(0, 256)
                            })
                        }
                        ),
                        i
                    } finally {
                        this.steps = [],
                        this.update(),
                        this.isSigning = !1,
                        this.isConfirming = !1,
                        this.isExecuting = !1,
                        this.isWithdrawing = !1
                    }
                }
                ).bind(this)),
                this.deposit = (0,
                n.ls)((function*() {
                    let t = C(this, "deposit")
                      , {adapter: i, farm: s, amount: e, wallet: r} = this;
                    (0,
                    a.hu)(i, "Adapter not found"),
                    (0,
                    a.hu)(s, "Farm not found"),
                    (0,
                    a.hu)(e, "Invalid amount"),
                    (0,
                    a.hu)(r, "Wallet not found");
                    try {
                        this.isExecuting = !0,
                        this.isDepositing = !0;
                        let a = {
                            amount: e
                        };
                        yield r.switchChain(s.chainKey);
                        let n = yield i.getAllowance({
                            owner: r.address
                        });
                        if (this.steps = yield x({
                            allowance: n,
                            amount: e
                        }),
                        n.lessThan(e)) {
                            this.isApproving = !0;
                            let t = (0,
                            m.y)(e)
                              , s = yield i.approve({
                                amount: t
                            })
                              , a = yield r.signAndSubmit(s);
                            this.isConfirming = !0;
                            let n = yield a.wait();
                            this.isConfirming = !1,
                            this.isApproving = !1,
                            u.actionStore.addAction(o.R.create({
                                txHash: n.txHash,
                                amount: t,
                                createdTimestamp: (0,
                                d.u3)()
                            }))
                        }
                        let l = yield i.deposit(a);
                        this.isSigning = !0;
                        let h = yield r.signAndSubmit(l);
                        this.isSigning = !1,
                        this.isConfirming = !0;
                        let c = yield h.wait();
                        this.isConfirming = !1;
                        let f = g.E.create({
                            amount: a.amount,
                            createdTimestamp: (0,
                            d.u3)(),
                            txHash: c.txHash,
                            from: r.address
                        });
                        (0,
                        v.j)({
                            ...t,
                            status: "success",
                            srcTxHash: c.txHash,
                            srcTxTimestamp: (0,
                            d.u3)()
                        }),
                        u.actionStore.addAction(f),
                        this.form.amount = ""
                    } catch (i) {
                        throw (0,
                        S.S)(i, () => {
                            let {message: s, title: e} = (0,
                            w.B)(i);
                            (0,
                            v.j)({
                                ...t,
                                status: "error",
                                srcTxTimestamp: (0,
                                d.u3)(),
                                error: e,
                                errorCode: s.substring(0, 256)
                            })
                        }
                        ),
                        i
                    } finally {
                        this.steps = [],
                        this.update(),
                        this.isExecuting = !1,
                        this.isApproving = !1,
                        this.isDepositing = !1,
                        this.isSigning = !1,
                        this.isConfirming = !1
                    }
                }
                ).bind(this)),
                (0,
                n.ky)(this, {
                    form: !0,
                    farm: n.LO.ref,
                    farmPosition: n.Fl.struct,
                    adapter: n.Fl.struct,
                    amount: n.Fl.struct,
                    maxDepositAmount: n.Fl.struct,
                    maxWithdrawAmount: n.Fl.struct,
                    setAmount: n.aD.bound,
                    setMaxAmount: n.aD.bound,
                    isConfirming: !0,
                    isExecuting: !0,
                    isWithdrawing: !0,
                    isDepositing: !0,
                    isApproving: !0,
                    isSigning: !0
                })
            }
        }
        let P = new T;
        function C(t, i) {
            let {wallet: s, farm: e, amount: r} = t;
            return {
                action: i,
                srcAddress: null == s ? void 0 : s.address,
                farm: null == e ? void 0 : e.address,
                srcChain: null == e ? void 0 : e.chainKey,
                stargateVersion: null == e ? void 0 : e.stargateVersion,
                srcAmount: null == r ? void 0 : r.toBigInt().toString()
            }
        }
    },
    58070: function(t, i, s) {
        s.r(i);
        var e = s(30589)
          , r = s(80200)
          , a = s(76728)
          , n = s(28066)
          , o = s(50054)
          , u = s(87840)
          , l = s(46860)
          , h = s(798)
          , m = s(90818)
          , d = s(64770)
          , c = s(62895)
          , g = s(617)
          , f = s(96168)
          , p = s(75016)
          , S = s(1893)
          , w = s(15139)
          , v = s(5759);
        Object.assign(window, {
            app: {
                uiStore: m.uiStore,
                busStore: r.i,
                poolStore: w.b,
                poolFormStore: S.poolFormStore,
                bridgeStore: e.bridgeStore,
                walletStore: d.walletStore,
                actionStore: n.actionStore,
                dstNativeAmountStore: u.Y,
                tokenStore: h.y,
                farmStore: p.K,
                farmFormStore: f.farmFormStore,
                farmClaimStore: g.u,
                fiatStore: l.WI,
                stakeStore: v.stakeStore,
                stakeOverviewStore: v.stakeOverviewStore,
                stakeAddStore: v.stakeAddStore,
                stakeRewardStore: v.U,
                balanceStore: o._,
                earnStore: c.earnStore,
                cctpStore: a.cctpStore
            }
        })
    }
}]);
