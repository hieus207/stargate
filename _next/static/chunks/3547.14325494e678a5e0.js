"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3547], {
    23547: function (e, a, d) {
        d.r(a),
            d.d(a, {
                bridges: function () {
                    return ib
                }
            });
        var s = d(62795)
            , i = d(69961)
            , o = d(82784)
            , n = d(38623)
            , c = d(9866)
            , r = d(25536)
            , m = d(35440)
            , t = d(79429)
            , b = d(10889)
            , l = d(81339)
            , y = d(93912)
            , f = d(91185)
            , C = d(48220)
            , D = {
                deployments: {
                    ethereum: {
                        eid: 101,
                        dstGasMin: 15e4,
                        dstFeeBp: 7,
                        bridge: {
                            address: "0x50002CdFe7CCb0C41F519c6Eb0653158d11cd907"
                        }
                    },
                    arbitrum: {
                        eid: 110,
                        dstGasMin: 15e5,
                        dstFeeBp: 7,
                        bridge: {
                            address: "0x1BAcC2205312534375c8d1801C27D28370656cFf"
                        }
                    },
                    avalanche: {
                        eid: 106,
                        dstGasMin: 15e4,
                        dstFeeBp: 7,
                        bridge: {
                            address: "0xA5972EeE0C9B5bBb89a5B16D1d65f94c9EF25166"
                        }
                    },
                    bsc: {
                        eid: 102,
                        dstGasMin: 15e4,
                        dstFeeBp: 7,
                        bridge: {
                            address: "0x2762409Baa1804D94D8c0bCFF8400B78Bf915D5B"
                        }
                    },
                    optimism: {
                        eid: 111,
                        dstGasMin: 15e4,
                        dstFeeBp: 7,
                        bridge: {
                            address: "0x86Bb63148d17d445Ed5398ef26Aa05Bf76dD5b59"
                        }
                    },
                    polygon: {
                        eid: 109,
                        dstGasMin: 15e4,
                        dstFeeBp: 7,
                        bridge: {
                            address: "0x488863D609F3A673875a914fBeE7508a1DE45eC6"
                        }
                    },
                    aptos: {
                        eid: 108,
                        dstGasMin: 1e4,
                        dstFeeBp: 0,
                        bridge: {
                            address: "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa"
                        }
                    }
                }
            }
            , E = k(D, {
                sharedDecimals: 6,
                deployments: {
                    ethereum: {
                        token: {
                            decimals: 6,
                            symbol: "USDC",
                            name: "USD Coin",
                            address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
                        }
                    },
                    avalanche: {
                        token: {
                            decimals: 6,
                            symbol: "USDC",
                            name: "USD Coin",
                            address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E"
                        }
                    },
                    polygon: {
                        token: {
                            decimals: 6,
                            symbol: "USDC",
                            name: "USD Coin",
                            address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
                        }
                    },
                    arbitrum: {
                        token: {
                            decimals: 6,
                            symbol: "USDC",
                            name: "USD Coin",
                            address: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8"
                        }
                    },
                    optimism: {
                        token: {
                            decimals: 6,
                            symbol: "USDC",
                            name: "USD Coin",
                            address: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607"
                        }
                    },
                    bsc: {
                        token: {
                            decimals: 18,
                            symbol: "USDC",
                            name: "USD Coin",
                            address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d"
                        }
                    },
                    aptos: {
                        token: {
                            decimals: 6,
                            symbol: "USDC",
                            name: "USD Coin",
                            address: "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC"
                        }
                    }
                }
            })
            , A = k(D, {
                sharedDecimals: 6,
                deployments: {
                    ethereum: {
                        token: {
                            decimals: 6,
                            symbol: "USDT",
                            name: "USD Tether",
                            address: "0xdAC17F958D2ee523a2206206994597C13D831ec7"
                        }
                    },
                    bsc: {
                        token: {
                            decimals: 18,
                            symbol: "USDT",
                            name: "USD Tether",
                            address: "0x55d398326f99059fF775485246999027B3197955"
                        }
                    },
                    avalanche: {
                        token: {
                            decimals: 6,
                            symbol: "USDT",
                            name: "USD Tether",
                            address: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7"
                        }
                    },
                    polygon: {
                        token: {
                            decimals: 6,
                            symbol: "USDT",
                            name: "USD Tether",
                            address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
                        }
                    },
                    aptos: {
                        token: {
                            decimals: 6,
                            symbol: "USDT",
                            name: "USD Tether",
                            address: "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDT"
                        }
                    }
                }
            })
            , h = k(D, {
                sharedDecimals: 6,
                deployments: {
                    ethereum: {
                        token: {
                            decimals: 8,
                            symbol: "WBTC",
                            name: "Wrapped BTC",
                            address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"
                        }
                    },
                    aptos: {
                        token: {
                            decimals: 6,
                            symbol: "WBTC",
                            name: "Wrapped BTC",
                            address: "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::WBTC"
                        }
                    }
                }
            })
            , x = k(D, {
                sharedDecimals: 6,
                deployments: {
                    ethereum: {
                        token: {
                            decimals: 18,
                            symbol: "USDD",
                            name: "Decentralized USD",
                            address: "0x0C10bF8FcB7Bf5412187A595ab97a3609160b5c6"
                        }
                    },
                    bsc: {
                        token: {
                            decimals: 18,
                            symbol: "USDD",
                            name: "Decentralized USD",
                            address: "0xd17479997F34dd9156Deef8F95A52D81D265be9c"
                        }
                    },
                    aptos: {
                        token: {
                            decimals: 6,
                            symbol: "USDD",
                            name: "Decentralized USD",
                            address: "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDD"
                        }
                    }
                }
            })
            , B = k(D, {
                sharedDecimals: 6,
                deployments: {
                    ethereum: {
                        token: {
                            decimals: 18,
                            symbol: "ETH",
                            name: "Ether"
                        }
                    },
                    arbitrum: {
                        token: {
                            decimals: 18,
                            symbol: "ETH",
                            name: "Ether"
                        }
                    },
                    optimism: {
                        token: {
                            decimals: 18,
                            symbol: "ETH",
                            name: "Ether"
                        }
                    },
                    aptos: {
                        token: {
                            decimals: 6,
                            symbol: "WETH",
                            name: "Wrapped Ether",
                            address: "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::WETH"
                        }
                    }
                }
            })
            , F = k(D, {
                sharedDecimals: 6,
                deployments: {
                    ethereum: {
                        token: {
                            decimals: 18,
                            symbol: "WETH",
                            name: "Wrapped Ether",
                            address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
                        }
                    },
                    arbitrum: {
                        token: {
                            decimals: 18,
                            symbol: "WETH",
                            name: "Wrapped Ether",
                            address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1"
                        }
                    },
                    optimism: {
                        token: {
                            decimals: 18,
                            symbol: "WETH",
                            name: "Wrapped Ether",
                            address: "0x4200000000000000000000000000000000000006"
                        }
                    },
                    aptos: {
                        token: {
                            decimals: 6,
                            symbol: "WETH",
                            name: "Wrapped Ether",
                            address: "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::WETH"
                        }
                    }
                }
            });
        function k(e, a) {
            let d = {
                sharedDecimals: a.sharedDecimals,
                deployments: {}
            };
            for (let s of Object.keys(e.deployments)) {
                if (!a.deployments[s])
                    continue;
                let i = a.deployments[s].token
                    , o = (0,
                        n.gj)(i) ? n.WU.from({
                            ...i,
                            chainKey: s
                        }) : n.sN.from({
                            ...i,
                            chainKey: s
                        });
                d.deployments[s] = {
                    ...e.deployments[s],
                    ...a.deployments[s],
                    token: o
                }
            }
            return d
        }
        var p = "aptos-v1";
        function K(e, a) {
            let d = u(e, a);
            if (d)
                return d;
            throw Error("No deployment for ".concat(e))
        }
        function u(e, a) {
            return a.deployments[e]
        }
        function T(e, a) {
            return e * (10000n - BigInt(a)) / 10000n
        }
        var S = class {
            async getOptions(e) {
                return {
                    options: [{
                        mode: "taxi"
                    }]
                }
            }
            async getRoute(e) {
                var a;
                let [d, s, { srcAmount: i, srcAmountMax: o, dstAmount: n }, r] = await Promise.all([this.getMessageFee({
                    ...e,
                    dstNativeAmount: 0n
                }), this.getMessageFee({
                    ...e,
                    dstNativeAmount: e.dstNativeAmount
                }), this.getAmounts({
                    ...e
                }), null === (a = this.getDuration) || void 0 === a ? void 0 : a.call(this, e)])
                    , m = (0,
                        c.Cy)(d, s);
                return (0,
                    c.Jg)(e, {
                        route: p,
                        srcAmount: i,
                        dstAmount: n,
                        srcAmountMax: o,
                        fees: m,
                        messageFee: d,
                        allowance: v,
                        duration: r
                    })
            }
            async getAmounts(e) {
                let a = K(e.srcChainKey, this.config)
                    , d = K(e.dstChainKey, this.config)
                    , s = (0,
                        c.LA)(e.srcAmount, {
                            localDecimals: a.token.decimals,
                            sharedDecimals: this.config.sharedDecimals
                        })
                    , i = T((0,
                        n.oO)(s, {
                            from: a.token.decimals,
                            to: d.token.decimals
                        }), d.dstFeeBp);
                return {
                    srcAmount: s,
                    dstAmount: i,
                    srcAmountMax: v
                }
            }
            async getMessageFee(e) {
                let a = await this.getClient(e.srcChainKey)
                    , d = K(e.srcChainKey, this.config)
                    , s = K(e.dstChainKey, this.config)
                    , i = (0,
                        r.w$)(s.dstGasMin, e.dstNativeAmount, e.dstAddress)
                    , [o, n] = await a.view({
                        payload: {
                            function: "".concat(d.bridge.address, "::coin_bridge::quote_fee"),
                            functionArguments: [s.eid, !1, i, []]
                        }
                    });
                return {
                    nativeFee: BigInt(o),
                    zroFee: BigInt(n)
                }
            }
            async transfer(e) {
                let a = await this.getClient(e.srcChainKey)
                    , d = K(e.srcChainKey, this.config)
                    , s = K(e.dstChainKey, this.config)
                    , i = (0,
                        r.w$)(s.dstGasMin, e.dstNativeAmount, e.dstAddress)
                    , { nativeFee: o, zroFee: c } = await this.getMessageFee(e)
                    , { bridge: m } = d
                    , t = function (e) {
                        let { token: a } = e;
                        if ((0,
                            n.gj)(a))
                            return a.address;
                        throw Error("Invalid deployment", {
                            cause: e
                        })
                    }(d)
                    , b = s.eid
                    , l = (0,
                        n.fs)(e.dstAddress, (0,
                            n.H1)(e.dstChainKey))
                    , y = e.srcAmount
                    , f = (0,
                        n.iI)(s.token)
                    , C = {
                        function: "".concat(m.address, "::coin_bridge::send_coin_from"),
                        typeArguments: [t],
                        functionArguments: [b.toString(), l, y.toString(), o.toString(), c.toString(), f, i, []]
                    };
                return (0,
                    r._X)({
                        sender: e.srcAddress,
                        data: C
                    }, {
                        client: a
                    })
            }
            supportsTransfer(e, a) {
                var d, s;
                return "aptos" === e.chainKey && "aptos" !== a.chainKey && (null === (d = u(e.chainKey, this.config)) || void 0 === d ? void 0 : d.token.equals(e)) && (null === (s = u(a.chainKey, this.config)) || void 0 === s ? void 0 : s.token.equals(a))
            }
            constructor(e, a) {
                this.getDuration = void 0,
                    this.config = e,
                    this.getClient = a
            }
        }
            , v = 0xffffffffffffffffn
            , P = class {
                async getOptions(e) {
                    return {
                        options: [{
                            mode: "taxi"
                        }]
                    }
                }
                async getRoute(e) {
                    var a;
                    let [d, s, { srcAmount: i, srcAmountMax: o, dstAmount: n }, r, m] = await Promise.all([this.getMessageFee({
                        ...e,
                        dstNativeAmount: 0n
                    }), this.getMessageFee({
                        ...e,
                        dstNativeAmount: e.dstNativeAmount
                    }), this.getAmounts({
                        ...e
                    }), null === (a = this.getDuration) || void 0 === a ? void 0 : a.call(this, e), this.getAllowance(e)])
                        , t = (0,
                            c.Cy)(d, s);
                    return (0,
                        c.Jg)(e, {
                            route: p,
                            srcAmount: i,
                            dstAmount: n,
                            srcAmountMax: o,
                            fees: t,
                            messageFee: d,
                            allowance: m,
                            duration: r
                        })
                }
                async getAmounts(e) {
                    let a = K(e.srcChainKey, this.config)
                        , d = K(e.dstChainKey, this.config)
                        , s = (0,
                            c.LA)(e.srcAmount, {
                                localDecimals: a.token.decimals,
                                sharedDecimals: this.config.sharedDecimals
                            })
                        , i = T((0,
                            n.oO)(s, {
                                from: a.token.decimals,
                                to: d.token.decimals
                            }), d.dstFeeBp);
                    return {
                        srcAmount: s,
                        dstAmount: i,
                        srcAmountMax: n.Bz
                    }
                }
                async approve(e) {
                    let a = K(e.srcChainKey, this.config);
                    if (!(0,
                        n.gj)(a.token))
                        throw Error("Cannot approve ETH");
                    return (0,
                        m._X)({
                            from: (0,
                                t.K)(e.srcAddress),
                            to: (0,
                                t.K)(e.srcToken),
                            data: (0,
                                b.R)({
                                    abi: l.Wo,
                                    functionName: "approve",
                                    args: [(0,
                                        t.K)(a.bridge.address), e.srcAmount]
                                })
                        }, {
                            chainKey: e.srcChainKey
                        })
                }
                async getAllowance(e) {
                    let a = K(e.srcChainKey, this.config);
                    return (0,
                        n.gj)(a.token) ? (await this.getClient(e.srcChainKey)).readContract({
                            abi: l.Wo,
                            functionName: "allowance",
                            address: (0,
                                t.K)(a.token.address),
                            args: [(0,
                                t.K)(e.srcAddress), (0,
                                    t.K)(a.bridge.address)]
                        }) : n.Bz
                }
                async getMessageFee(e) {
                    let a = await this.getClient(e.srcChainKey)
                        , d = K(e.srcChainKey, this.config)
                        , s = K(e.dstChainKey, this.config)
                        , i = y.DR
                        , o = I({
                            dstGasMin: s.dstGasMin,
                            dstNativeAmount: e.dstNativeAmount,
                            dstNativeAddress: e.dstAddress
                        })
                        , [n, c] = await a.readContract({
                            abi: g,
                            functionName: "quoteForSend",
                            args: [{
                                refundAddress: (0,
                                    t.K)(e.srcAddress),
                                zroPaymentAddress: i
                            }, o],
                            address: (0,
                                t.K)(d.bridge.address)
                        });
                    return {
                        nativeFee: n,
                        zroFee: c
                    }
                }
                async transfer(e) {
                    let a = K(e.srcChainKey, this.config)
                        , d = K(e.dstChainKey, this.config)
                        , s = y.DR
                        , i = (0,
                            t.K)(e.srcAddress)
                        , o = I({
                            dstGasMin: d.dstGasMin,
                            dstNativeAmount: e.dstNativeAmount,
                            dstNativeAddress: e.dstAddress
                        })
                        , { nativeFee: c } = await this.getMessageFee(e)
                        , r = (0,
                            n.fs)(e.dstAddress, (0,
                                n.H1)(e.dstChainKey))
                        , l = e.srcAmount
                        , C = M(e.srcToken) ? e.srcAmount + c : c
                        , D = M(e.srcToken) ? (0,
                            b.R)({
                                abi: g,
                                functionName: "sendETHToAptos",
                                args: [(0,
                                    f.ci)(r), l, {
                                    refundAddress: i,
                                    zroPaymentAddress: s
                                }, o]
                            }) : (0,
                                b.R)({
                                    abi: g,
                                    functionName: "sendToAptos",
                                    args: [(0,
                                        t.K)(e.srcToken), (0,
                                            f.ci)(r), l, {
                                        refundAddress: i,
                                        zroPaymentAddress: s
                                    }, o]
                                });
                    return (0,
                        m._X)({
                            data: D,
                            from: i,
                            to: (0,
                                t.K)(a.bridge.address),
                            value: C
                        }, {
                            chainKey: e.srcChainKey
                        })
                }
                supportsTransfer(e, a) {
                    var d, s;
                    return "aptos" === a.chainKey && "aptos" !== e.chainKey && (null === (d = u(e.chainKey, this.config)) || void 0 === d ? void 0 : d.token.equals(e)) && (null === (s = u(a.chainKey, this.config)) || void 0 === s ? void 0 : s.token.equals(a))
                }
                constructor(e, a) {
                    this.getDuration = void 0,
                        this.config = e,
                        this.getClient = a
                }
            }
            ;
        function I(e) {
            let { dstGasMin: a, dstNativeAddress: d, dstNativeAmount: s } = e;
            return s > 0n ? (0,
                C._)(["uint16", "uint", "uint", "bytes32"], [2, BigInt(a), s, d]) : (0,
                    C._)(["uint16", "uint256"], [1, BigInt(a)])
        }
        var g = [{
            inputs: [{
                components: [{
                    name: "refundAddress",
                    type: "address"
                }, {
                    name: "zroPaymentAddress",
                    type: "address"
                }],
                name: "_callParams",
                type: "tuple"
            }, {
                name: "_adapterParams",
                type: "bytes"
            }],
            name: "quoteForSend",
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
                name: "_toAddress",
                type: "bytes32"
            }, {
                name: "_amountLD",
                type: "uint256"
            }, {
                components: [{
                    name: "refundAddress",
                    type: "address"
                }, {
                    name: "zroPaymentAddress",
                    type: "address"
                }],
                name: "_callParams",
                type: "tuple"
            }, {
                name: "_adapterParams",
                type: "bytes"
            }],
            name: "sendETHToAptos",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [{
                name: "_token",
                type: "address"
            }, {
                name: "_toAddress",
                type: "bytes32"
            }, {
                name: "_amountLD",
                type: "uint256"
            }, {
                components: [{
                    name: "refundAddress",
                    type: "address"
                }, {
                    name: "zroPaymentAddress",
                    type: "address"
                }],
                name: "_callParams",
                type: "tuple"
            }, {
                name: "_adapterParams",
                type: "bytes"
            }],
            name: "sendToAptos",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        }];
        function M(e) {
            return "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE" === (0,
                t.K)(e)
        }
        function U(e) {
            return [(0,
                s.$)(new S(e, i.p), "AptosBridge"), (0,
                    s.$)(new P(e, o.s), "AptosBridge")]
        }
        var R = d(12116)
            , G = d(56194)
            , H = d(62821)
            , L = d(33404)
            , N = d(36234)
            , O = d(29739)
            , w = d(92117)
            , W = d(52713)
            , X = d(37861)
            , V = d(61869);
        let z = (0,
            X.C2)({
                sharedDecimals: 6,
                version: 3,
                limit: !1,
                fee: !0,
                deployments: {
                    base: {
                        eid: 30184,
                        token: {
                            chainKey: "base",
                            address: "0x49d803d2DF2295185610f44961F2Dcd40326F25C",
                            decimals: 18,
                            name: "Shark Cat",
                            symbol: "SC"
                        }
                    },
                    solana: {
                        eid: 30168,
                        token: {
                            chainKey: "solana",
                            address: "6D7NaB2xsLd7cauWu1wKk6KBsJohJmP2qZH9GEfVi5Ui",
                            decimals: 6,
                            name: "Shark Cat",
                            symbol: "SC",
                            programId: V.H_
                        },
                        tokenEscrow: {
                            address: "5iz5Rg2Rww1L4rxnD1CxwekZFG7EKiWPefdsLc5xx976"
                        },
                        oft: {
                            programId: "HRPXLCqspQocTjfcX4rvAPaY9q6Gwb1rrD3xXWrfJWdW"
                        }
                    }
                },
                coinMarketCapId: 30309
            })
            , Z = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x77A4B0BfE5C7257F67a1DE1B99aA7E157035B1b2",
                                decimals: 18,
                                name: "Token7007",
                                symbol: "7007"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                chainKey: "arbitrum",
                                address: "0x75eC618A817EB0A4a7E44aC3dFc64c963DAf921A",
                                decimals: 18,
                                name: "Token7007",
                                symbol: "7007"
                            },
                            oftProxy: {
                                address: "0xa4889a7023e375344f7fc42ca164d8aadf5e8dcc"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0x77A4B0BfE5C7257F67a1DE1B99aA7E157035B1b2",
                                decimals: 18,
                                name: "Token7007",
                                symbol: "7007"
                            }
                        }
                    },
                    coinGeckoId: "token7007"
                })
            , Q = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            token: {
                                chainKey: "ethereum",
                                symbol: "ABOND",
                                address: "0xe6828D65bf5023AE1851D90D8783Cc821ba7eeE1",
                                decimals: 18
                            }
                        },
                        bsc: {
                            eid: 102,
                            oftProxy: {
                                address: "0xe6828D65bf5023AE1851D90D8783Cc821ba7eeE1"
                            },
                            token: {
                                chainKey: "bsc",
                                symbol: "ABOND",
                                address: "0x34294AfABCbaFfc616ac6614F6d2e17260b78BEd",
                                decimals: 18
                            }
                        },
                        polygon: {
                            eid: 109,
                            token: {
                                chainKey: "polygon",
                                symbol: "ABOND",
                                address: "0xe6828D65bf5023AE1851D90D8783Cc821ba7eeE1",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 8,
                    version: 2,
                    fee: !1,
                    coinMarketCapId: 29157
                })
            , Y = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x61DBbBb552dc893ab3aAd09F289f811E67cEf285",
                                decimals: 18,
                                name: "Skate",
                                symbol: "SKATE"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                chainKey: "arbitrum",
                                address: "0x61DBbBb552dc893ab3aAd09F289f811E67cEf285",
                                decimals: 18,
                                name: "Skate",
                                symbol: "SKATE"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            token: {
                                chainKey: "bsc",
                                decimals: 18,
                                symbol: "SKATE",
                                name: "Skate",
                                address: "0x61DBbBb552dc893ab3aAd09F289f811E67cEf285"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            token: {
                                chainKey: "solana",
                                name: "Skate",
                                symbol: "SKATE",
                                address: "9v6BKHg8WWKBPTGqLFQz87RxyaHHDygx8SnZEbBFmns2",
                                decimals: 9,
                                programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                            },
                            tokenEscrow: {
                                address: "3AqnMqPKs9hUHLvNax17JmYJ9DAGNQt2RTSScBe868zq"
                            },
                            oft: {
                                programId: "BSe38ota5jSQv4UUCZfJYyr9E6zvq1PZBAotJgUhzZn9"
                            }
                        }
                    },
                    coinMarketCapId: 29073
                })
            , q = (0,
                X.C2)({
                    version: 3,
                    sharedDecimals: 6,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                decimals: 18,
                                symbol: "Anon",
                                name: "HeyAnon",
                                address: "0x79bbF4508B1391af3A0F4B30bb5FC4aa9ab0E07C"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            oft: {
                                programId: "A1oayh35gLkRG8fHcXtfdGJmbsubAeJA7URVVET3h8MZ"
                            },
                            token: {
                                address: "9McvH6w97oewLmPxqQEoHUAv3u5iYMyQ9AeZZhguYf1T",
                                chainKey: "solana",
                                decimals: 9,
                                name: "HeyAnon",
                                symbol: "Anon",
                                programId: V.H_
                            },
                            tokenEscrow: {
                                address: "3aHBZCkjV1X2EMMTiNxBC2WZ4fv1jW7Mt58ukfHefnPu"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            token: {
                                chainKey: "bsc",
                                decimals: 18,
                                symbol: "Anon",
                                name: "HeyAnon",
                                address: "0x79bbF4508B1391af3A0F4B30bb5FC4aa9ab0E07C"
                            }
                        },
                        iota: {
                            eid: 30284,
                            token: {
                                chainKey: "iota",
                                decimals: 18,
                                symbol: "Anon",
                                name: "HeyAnon",
                                address: "0x79bbF4508B1391af3A0F4B30bb5FC4aa9ab0E07C"
                            }
                        },
                        kava: {
                            eid: 30177,
                            token: {
                                chainKey: "kava",
                                decimals: 18,
                                symbol: "Anon",
                                name: "HeyAnon",
                                address: "0x79bbF4508B1391af3A0F4B30bb5FC4aa9ab0E07C"
                            }
                        },
                        metis: {
                            eid: 30151,
                            token: {
                                chainKey: "metis",
                                decimals: 18,
                                symbol: "Anon",
                                name: "HeyAnon",
                                address: "0x79bbF4508B1391af3A0F4B30bb5FC4aa9ab0E07C"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                chainKey: "arbitrum",
                                decimals: 18,
                                symbol: "Anon",
                                name: "HeyAnon",
                                address: "0x79bbF4508B1391af3A0F4B30bb5FC4aa9ab0E07C"
                            }
                        },
                        sonic: {
                            eid: 30332,
                            token: {
                                chainKey: "sonic",
                                decimals: 18,
                                symbol: "Anon",
                                name: "HeyAnon",
                                address: "0x79bbF4508B1391af3A0F4B30bb5FC4aa9ab0E07C"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                address: "0x79bbF4508B1391af3A0F4B30bb5FC4aa9ab0E07C",
                                chainKey: "base",
                                decimals: 18,
                                name: "HeyAnon",
                                symbol: "Anon"
                            }
                        },
                        avalanche: {
                            eid: 30106,
                            token: {
                                address: "0x79bbF4508B1391af3A0F4B30bb5FC4aa9ab0E07C",
                                chainKey: "avalanche",
                                decimals: 18,
                                name: "HeyAnon",
                                symbol: "Anon"
                            }
                        }
                    },
                    coinMarketCapId: 35092,
                    coinGeckoId: ""
                })
            , J = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinGeckoId: "airtor-protocol",
                    deployments: {
                        base: {
                            eid: 30184,
                            version: 3,
                            token: {
                                chainKey: "base",
                                decimals: 18,
                                symbol: "ANYONE",
                                name: "ANyONe Protocol",
                                address: "0xe67F39FbE8C24ef8b3542efED1eE9963cEFC1f2a"
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            version: 3,
                            oftProxy: {
                                address: "0xaa469fc353c0CCFfc8fc192E021AFBc4e5303892"
                            },
                            token: {
                                chainKey: "ethereum",
                                decimals: 18,
                                symbol: "ANYONE",
                                name: "ANyONe Protocol",
                                address: "0xFeAc2Eae96899709a43E252B6B92971D32F9C0F9"
                            }
                        },
                        peaq: {
                            eid: 30302,
                            version: 3,
                            token: {
                                chainKey: "peaq",
                                decimals: 18,
                                symbol: "ANYONE",
                                name: "ANyONe Protocol",
                                address: "0xe67F39FbE8C24ef8b3542efED1eE9963cEFC1f2a"
                            }
                        }
                    }
                })
            , j = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x4d224452801ACEd8B2F0aebE155379bb5D594381",
                                decimals: 18,
                                name: "ApeCoin",
                                symbol: "APE"
                            },
                            oftProxy: {
                                address: "0x5182feDE730b31a9CF7f49C5781214B4a99F2370"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                chainKey: "arbitrum",
                                address: "0x7f9FBf9bDd3F4105C478b996B648FE6e828a1e98",
                                decimals: 18,
                                name: "ApeCoin",
                                symbol: "APE"
                            }
                        },
                        ape: {
                            eid: 30312,
                            token: {
                                chainKey: "ape",
                                decimals: 18,
                                name: "ApeCoin",
                                symbol: "APE"
                            },
                            oftNative: {
                                address: "0xe4103e80c967f58591a1d7cA443ed7E392FeD862"
                            }
                        }
                    },
                    coinMarketCapId: 18876
                })
            , _ = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        zksync: {
                            eid: 30165,
                            token: {
                                chainKey: "zksync",
                                address: "0x67154b6a149081E796049F2a3B17e1c356d2bA61",
                                decimals: 18,
                                name: "Autocompounding Pirex Ether OFT",
                                symbol: "apxETH"
                            }
                        },
                        blast: {
                            eid: 30243,
                            token: {
                                chainKey: "blast",
                                address: "0xCd615270aB3a7a3A262A4E49935D002278C76b78",
                                decimals: 18,
                                name: "Autocompounding Pirex Ether OFT",
                                symbol: "apxETH"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                chainKey: "arbitrum",
                                address: "0x16Ed8E219cde31E14a80dCb6C9127A5EC6e88e46",
                                decimals: 18,
                                name: "Autocompounding Pirex Ether OFT",
                                symbol: "apxETH"
                            }
                        },
                        linea: {
                            eid: 30183,
                            token: {
                                chainKey: "linea",
                                address: "0xEd97D39448D1c3891aAFCb28c9CF63F893D65743",
                                decimals: 18,
                                name: "Autocompounding Pirex Ether OFT",
                                symbol: "apxETH"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            token: {
                                chainKey: "bsc",
                                address: "0x16Ed8E219cde31E14a80dCb6C9127A5EC6e88e46",
                                decimals: 18,
                                name: "Autocompounding Pirex Ether OFT",
                                symbol: "apxETH"
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x9Ba021B0a9b958B5E75cE9f6dff97C7eE52cb3E6",
                                decimals: 18,
                                name: "Autocompounding Pirex Ether",
                                symbol: "apxETH"
                            },
                            oftProxy: {
                                address: "0xe5ec9e3fa47d93a8a1062c983227f255bbeaf1f1"
                            }
                        },
                        mode: {
                            eid: 30260,
                            token: {
                                chainKey: "mode",
                                address: "0xCd615270aB3a7a3A262A4E49935D002278C76b78",
                                decimals: 18,
                                name: "Autocompounding Pirex Ether OFT",
                                symbol: "apxETH"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0xEd97D39448D1c3891aAFCb28c9CF63F893D65743",
                                decimals: 18,
                                name: "Autocompounding Pirex Ether OFT",
                                symbol: "apxETH"
                            }
                        },
                        optimism: {
                            eid: 30111,
                            token: {
                                chainKey: "optimism",
                                address: "0x16Ed8E219cde31E14a80dCb6C9127A5EC6e88e46",
                                decimals: 18,
                                name: "Autocompounding Pirex Ether OFT",
                                symbol: "apxETH"
                            }
                        },
                        gnosis: {
                            eid: 30145,
                            token: {
                                chainKey: "gnosis",
                                address: "0xef2a1BF104a9600eeDEFA9ACe6877E51e5add29D",
                                decimals: 18,
                                name: "Autocompounding Pirex Ether OFT",
                                symbol: "apxETH"
                            }
                        },
                        scroll: {
                            eid: 30214,
                            token: {
                                chainKey: "scroll",
                                address: "0xCd615270aB3a7a3A262A4E49935D002278C76b78",
                                decimals: 18,
                                name: "Autocompounding Pirex Ether OFT",
                                symbol: "apxETH"
                            }
                        }
                    }
                })
            , $ = (0,
                X.C2)({
                    deployments: {
                        arbitrum: {
                            eid: 110,
                            oftProxy: {
                                address: "0x64F282290e8d0196c2929a9119250C361e025BAB"
                            },
                            token: {
                                chainKey: "arbitrum",
                                symbol: "ARKEN",
                                address: "0xAf5db6E1CC585ca312E8c8F7c499033590cf5C98",
                                decimals: 18
                            }
                        },
                        bsc: {
                            eid: 102,
                            token: {
                                chainKey: "bsc",
                                symbol: "ARKEN",
                                address: "0x1D4268a58ee7EC2cc2Af5d70a2fD2B3a896527a2",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 9,
                    version: 2,
                    fee: !1,
                    coinMarketCapId: 23969
                })
            , ee = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinMarketCapId: 7105,
                    deployments: {
                        base: {
                            eid: 30184,
                            version: 3,
                            token: {
                                chainKey: "base",
                                decimals: 18,
                                symbol: "ASK",
                                name: "Permission Token",
                                address: "0xBB146326778227A8498b105a18f84E0987A684b4"
                            }
                        },
                        polygon: {
                            eid: 30109,
                            version: 3,
                            oftProxy: {
                                address: "0xBB146326778227A8498b105a18f84E0987A684b4"
                            },
                            token: {
                                chainKey: "polygon",
                                decimals: 18,
                                symbol: "ASK",
                                name: "Permission Token",
                                address: "0xaA3717090CDDc9B227e49d0D84A28aC0a996e6Ff"
                            }
                        }
                    }
                })
            , ea = (0,
                X.C2)({
                    fee: !0,
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    deployments: {
                        polygon: {
                            eid: 30109,
                            token: {
                                chainKey: "polygon",
                                symbol: "ASTRAFER",
                                address: "0xDfCe1e99A31C4597a3f8A8945cBfa9037655e335",
                                decimals: 18
                            },
                            oftProxy: {
                                address: "0xa7f18d7a493c80378253b8129cbcfdfa85ddb7c8"
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                symbol: "ASTRAFER",
                                address: "0xb51B97Dd5569FAB69495316B5a065CCcfF4B829d",
                                decimals: 18
                            }
                        }
                    },
                    coinMarketCapId: 20886
                })
            , ed = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0xbe0Ed4138121EcFC5c0E56B40517da27E6c5226B",
                                decimals: 18,
                                name: "Aethir Token",
                                symbol: "ATH"
                            },
                            oftProxy: {
                                address: "0x5786C150609a4eF8957bc614a13e8e29558EaBA4"
                            }
                        },
                        zksync: {
                            eid: 30165,
                            token: {
                                chainKey: "zksync",
                                address: "0xB5a58C1D3542A65F93A5a504765CD2Cd3155A418",
                                decimals: 18,
                                name: "Aethir Token",
                                symbol: "ATH"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            token: {
                                chainKey: "solana",
                                address: "Dm5BxyMetG3Aq5PaG1BrG7rBYqEMtnkjvPNMExfacVk7",
                                decimals: 9,
                                name: "Aethir Token",
                                symbol: "ATH",
                                programId: V.H_
                            },
                            tokenEscrow: {
                                address: "HFzERTDFuphN7e6uYGKpk92CBTVqG8CwzbcK6rmrjNXW"
                            },
                            oft: {
                                programId: "5HNxbq5TiMM8YgMHNtLzkMvR6YtJSfkTn857i52aRi1p"
                            }
                        }
                    },
                    coinMarketCapId: 30083,
                    coinGeckoId: "aethir"
                })
            , es = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0x80ca9edce4583b8043351a1046f18244b24ef869",
                                decimals: 18,
                                name: "AVA",
                                symbol: "AVA"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            token: {
                                chainKey: "solana",
                                name: "Ava AI",
                                symbol: "AVA",
                                address: "DKu9kykSfbN5LBfFXtNNDPaX35o4Fv6vJ9FKk7pZpump",
                                decimals: 6,
                                programId: V.H_
                            },
                            tokenEscrow: {
                                address: "5hJNuJ2ueCVcoKvom2Ge4c3nXaA8erJvG1NjuN9jgrx9"
                            },
                            oft: {
                                programId: "HhawHXUxwurzbrR7n9sR1ungbuNwFj1zMLfMt5BKXbFB"
                            }
                        }
                    },
                    coinMarketCapId: 34116,
                    coinGeckoId: "ava-ai"
                })
            , ei = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0x31ea904A7eca45122890dEb8dA3473A2081bc9d1",
                                decimals: 18,
                                name: "Bonsai3",
                                symbol: "BAI"
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x31ea904A7eca45122890dEb8dA3473A2081bc9d1",
                                decimals: 18,
                                name: "Bonsai3",
                                symbol: "BAI"
                            }
                        }
                    },
                    coinMarketCapId: 28503
                })
            , eo = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            oftProxy: {
                                address: "0xE15bCB9E0EA69e6aB9FA080c4c4A5632896298C3"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "BAL",
                                address: "0xba100000625a3754423978a60c9317c58a424e3D",
                                decimals: 18
                            }
                        },
                        avalanche: {
                            eid: 106,
                            token: {
                                chainKey: "avalanche",
                                symbol: "BAL",
                                address: "0xE15bCB9E0EA69e6aB9FA080c4c4A5632896298C3",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 6,
                    version: 2,
                    fee: !0,
                    coinMarketCapId: 5728
                })
            , en = (0,
                X.C2)({
                    deployments: {
                        optimism: {
                            eid: 111,
                            token: {
                                chainKey: "optimism",
                                symbol: "BEETS",
                                address: "0xb4Bc46bc6cB217B59ea8F4530BaE26Bf69F677f0",
                                decimals: 18
                            }
                        },
                        fantom: {
                            eid: 112,
                            oftProxy: {
                                address: "0x8d038dA833b154EBcFB7965a9eE7C4Ad72671b21"
                            },
                            token: {
                                chainKey: "fantom",
                                symbol: "BEETS",
                                address: "0xF24Bcf4d1e507740041C9cFd2DddB29585aDCe1e",
                                decimals: 18
                            }
                        },
                        sonic: {
                            eid: 332,
                            token: {
                                chainKey: "sonic",
                                address: "0x1E5fe95fB90ac0530F581C617272cd0864626795",
                                decimals: 18,
                                name: "Beethovenx",
                                symbol: "BEETS"
                            }
                        }
                    },
                    sharedDecimals: 6,
                    version: 2,
                    fee: !1,
                    coinMarketCapId: 13244
                })
            , ec = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        bsc: {
                            eid: 30102,
                            token: {
                                chainKey: "bsc",
                                address: "0x2A73F85024f101F3FAC9FbCBcE60707B6b3A6203",
                                decimals: 18,
                                name: "BetaOFT",
                                symbol: "BETA"
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0xBe1a001FE942f96Eea22bA08783140B9Dcc09D28",
                                decimals: 18,
                                name: "Beta Token",
                                symbol: "BETA"
                            },
                            oftProxy: {
                                address: "0x2a73f85024f101f3fac9fbcbce60707b6b3a6203"
                            }
                        }
                    },
                    coinMarketCapId: 11307
                })
            , er = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            oftProxy: {
                                address: "0xb92D5bA343396599076A52bb95D0029286b8F463"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "BETS",
                                address: "0x94025780a1aB58868D9B2dBBB775f44b32e8E6e5",
                                decimals: 18
                            }
                        },
                        bsc: {
                            eid: 102,
                            oftProxy: {
                                address: "0xeb90e1256ab885067b4e3264ea431affbc8582e2"
                            },
                            token: {
                                chainKey: "bsc",
                                symbol: "BETS",
                                address: "0x94025780a1aB58868D9B2dBBB775f44b32e8E6e5",
                                decimals: 18
                            }
                        },
                        avalanche: {
                            eid: 106,
                            oftProxy: {
                                address: "0x73ddb67cb110012676fa3770fe595f85b9ee1ac3"
                            },
                            token: {
                                chainKey: "avalanche",
                                symbol: "BETS",
                                address: "0x94025780a1aB58868D9B2dBBB775f44b32e8E6e5",
                                decimals: 18
                            }
                        },
                        polygon: {
                            eid: 109,
                            oftProxy: {
                                address: "0xcf3f8622319ace86f1e877f4bf3f586329cdded8"
                            },
                            token: {
                                chainKey: "polygon",
                                symbol: "BETS",
                                address: "0x94025780a1aB58868D9B2dBBB775f44b32e8E6e5",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 110,
                            oftProxy: {
                                address: "0x63a28da45373619400f8df9a2f9858a845374864"
                            },
                            token: {
                                chainKey: "arbitrum",
                                symbol: "BETS",
                                address: "0x94025780a1aB58868D9B2dBBB775f44b32e8E6e5",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 18,
                    version: 1,
                    fee: !1,
                    coinMarketCapId: 18453
                })
            , em = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinMarketCapId: 35214,
                    deployments: {
                        bsc: {
                            eid: 30102,
                            version: 3,
                            token: {
                                chainKey: "bsc",
                                decimals: 18,
                                symbol: "BMT",
                                name: "Bubblemaps",
                                address: "0x7d814b9eD370Ec0a502EdC3267393bF62d891B62"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            oft: {
                                programId: "BCE3naS4LHAfGeiN34dTTR42vBcKMC8tafF8SBDTAD5c"
                            },
                            token: {
                                chainKey: "solana",
                                decimals: 9,
                                symbol: "BMT",
                                name: "Bubblemaps",
                                address: "FQgtfugBdpFN7PZ6NdPrZpVLDBrPGxXesi4gVu3vErhY",
                                programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                            },
                            tokenEscrow: {
                                address: "CCDxmUAYCUjyEzF7FbyCAWwceQbRyz4KtjoC2mLBUPJG"
                            }
                        }
                    }
                })
            , et = (0,
                X.C2)({
                    version: 3,
                    sharedDecimals: 6,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        soneium: {
                            eid: 30340,
                            token: {
                                address: "0xA0aeBd4Ae5F256B72B7D43f67eD934237Adb1AeE",
                                chainKey: "soneium",
                                decimals: 18,
                                name: "BONSAI COIN",
                                symbol: "BONSAICOIN"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                address: "0xA0aeBd4Ae5F256B72B7D43f67eD934237Adb1AeE",
                                chainKey: "base",
                                decimals: 18,
                                name: "BONSAI COIN",
                                symbol: "BONSAICOIN"
                            }
                        }
                    },
                    coinGeckoId: "bonsai-coin"
                })
            , eb = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        sonic: {
                            eid: 30332,
                            token: {
                                chainKey: "sonic",
                                address: "0x7A0C53F7eb34C5BC8B01691723669adA9D6CB384",
                                decimals: 18,
                                name: "SpookyToken",
                                symbol: "BOO"
                            }
                        },
                        fantom: {
                            eid: 30112,
                            token: {
                                chainKey: "fantom",
                                address: "0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE",
                                decimals: 18,
                                name: "SpookyToken",
                                symbol: "BOO"
                            },
                            oftProxy: {
                                address: "0x3AF1CF07F9960e06B76D701c0CD7F1120707378A"
                            }
                        }
                    },
                    coinMarketCapId: 9608,
                    coinGeckoId: "spookyswap"
                })
            , el = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinGeckoId: "boop-4",
                    deployments: {
                        bsc: {
                            eid: 30102,
                            version: 3,
                            token: {
                                chainKey: "bsc",
                                decimals: 18,
                                symbol: "BOOP",
                                name: "BOOP",
                                address: "0x9A70815DFB644a24B57358E1041F8d0324c8f6e1"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            oft: {
                                programId: "5cYXkrghW4c5pHcHe6iNfytLHcq3piyck1WfkenywEaz"
                            },
                            token: {
                                chainKey: "solana",
                                decimals: 9,
                                symbol: "BOOP",
                                name: "BOOP",
                                address: "boopkpWqe68MSxLqBGogs8ZbUDN4GXaLhFwNP7mpP1i",
                                programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                            },
                            tokenEscrow: {
                                address: "oKgoCetviSetP9vVWtWPmtzF73etTM4kcdXZQAKwMJJ"
                            }
                        }
                    }
                })
            , ey = (0,
                X.C2)({
                    version: 3,
                    limit: !1,
                    fee: !0,
                    sharedDecimals: 6,
                    deployments: {
                        base: {
                            eid: 30184,
                            token: {
                                address: "0x37d2Adc008118d04f259fc0c16ff66bF5a637D20",
                                chainKey: "base",
                                decimals: 18,
                                name: "DeBoxToken",
                                symbol: "BOX"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            token: {
                                address: "0x6386Adc4BC9c21984E34fD916BB349dD861742af",
                                chainKey: "bsc",
                                decimals: 18,
                                name: "DeBoxToken",
                                symbol: "BOX"
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            oftProxy: {
                                address: "0xe3B60790607AFe418ADCAADcB5E07f8124eD4b26"
                            },
                            token: {
                                address: "0x32B77729cD87F1EF2bEa4C650c16f89f08472c69",
                                chainKey: "ethereum",
                                decimals: 18,
                                name: "DeBoxToken",
                                symbol: "BOX"
                            }
                        },
                        mantle: {
                            eid: 30181,
                            token: {
                                address: "0x3d142CDb27B537AF57a55eE8f54adA953b4b9Ecd",
                                chainKey: "mantle",
                                decimals: 18,
                                name: "DeBoxToken",
                                symbol: "BOX"
                            }
                        }
                    },
                    coinMarketCapId: 33116,
                    coinGeckoId: "debox"
                })
            , ef = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinMarketCapId: 7605,
                    deployments: {
                        arbitrum: {
                            eid: 30110,
                            version: 3,
                            token: {
                                chainKey: "arbitrum",
                                decimals: 18,
                                symbol: "BPRO",
                                name: "BitPro",
                                address: "0xDbae615958708C0Bc61234D2624b95077B017Eb7"
                            }
                        },
                        rootstock: {
                            eid: 30333,
                            version: 3,
                            oftProxy: {
                                address: "0x1497801FA1C6b9787E4A1FF55Fa9422D0896003B"
                            },
                            token: {
                                chainKey: "rootstock",
                                decimals: 18,
                                symbol: "BPRO",
                                name: "BitPRO",
                                address: "0x440CD83C160De5C96Ddb20246815eA44C7aBBCa8"
                            }
                        }
                    }
                })
            , eC = (0,
                X.C2)({
                    version: 3,
                    sharedDecimals: 6,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                address: "0xBEaB712832112bd7664226db7CD025B153D3af55",
                                chainKey: "ethereum",
                                decimals: 18,
                                name: "Bright Union",
                                symbol: "BRIGHT"
                            },
                            oftProxy: {
                                address: "0x781B40005b308FF254e891F1a552271DD1ED12A6"
                            }
                        },
                        gnosis: {
                            eid: 30145,
                            token: {
                                address: "0xb7e10110EeDCa190da51b22e90a2caEE014C8140",
                                chainKey: "gnosis",
                                decimals: 18,
                                name: "Bright Union",
                                symbol: "BRIGHT"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                address: "0xa26a4611b8313BbB25ccB1A9e227ecC536a2f8F7",
                                chainKey: "base",
                                decimals: 18,
                                name: "Bright Union",
                                symbol: "BRIGHT"
                            }
                        }
                    },
                    coinGeckoId: "bright-union"
                })
            , eD = (0,
                X.C2)({
                    version: 3,
                    sharedDecimals: 6,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        base: {
                            eid: 30184,
                            token: {
                                address: "0xaB10E517f3138b17108B32129E8C8446AD44a267",
                                chainKey: "base",
                                decimals: 18,
                                name: "Battle.tech by Virtuals",
                                symbol: "BTA"
                            },
                            oftProxy: {
                                address: "0xE66d6054CD609A53669b6F09727Ea9388Ad84077"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            token: {
                                address: "BatJTTdVgREJDaqkaexb2HYKXFfaF9v2HJT3R9WJZtQp",
                                chainKey: "solana",
                                decimals: 9,
                                name: "Battle.Tech",
                                symbol: "BTA",
                                programId: V.H_
                            },
                            oft: {
                                programId: "69rfwU6zCSsiP7etSdvs8mW6omheYLAfCy9hDv4y3F1C"
                            },
                            tokenEscrow: {
                                address: "CF87frdrDZJxbBCZ62rp5RkzX8EzD4XaBcBVGPpFPmRp"
                            }
                        }
                    }
                })
            , eE = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            token: {
                                chainKey: "ethereum",
                                symbol: "BTC.b",
                                address: "0x2297aEbD383787A160DD0d9F71508148769342E3",
                                decimals: 8
                            }
                        },
                        bsc: {
                            eid: 102,
                            token: {
                                chainKey: "bsc",
                                symbol: "BTC.b",
                                address: "0x2297aEbD383787A160DD0d9F71508148769342E3",
                                decimals: 8
                            }
                        },
                        polygon: {
                            eid: 109,
                            token: {
                                chainKey: "polygon",
                                symbol: "BTC.b",
                                address: "0x2297aEbD383787A160DD0d9F71508148769342E3",
                                decimals: 8
                            }
                        },
                        arbitrum: {
                            eid: 110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "BTC.b",
                                address: "0x2297aEbD383787A160DD0d9F71508148769342E3",
                                decimals: 8
                            }
                        },
                        optimism: {
                            eid: 111,
                            token: {
                                chainKey: "optimism",
                                symbol: "BTC.b",
                                address: "0x2297aEbD383787A160DD0d9F71508148769342E3",
                                decimals: 8
                            }
                        },
                        avalanche: {
                            eid: 106,
                            oftProxy: {
                                address: "0x2297aEbD383787A160DD0d9F71508148769342E3"
                            },
                            token: {
                                chainKey: "avalanche",
                                symbol: "BTC.b",
                                address: "0x152b9d0FdC40C096757F570A51E494bd4b943E50",
                                decimals: 8
                            }
                        }
                    },
                    sharedDecimals: 8,
                    version: 2,
                    fee: !0,
                    coinMarketCapId: 20721,
                    coinGeckoId: "bitcoin-avalanche-bridged-btc-b"
                })
            , eA = (0,
                X.C2)({
                    version: 3,
                    sharedDecimals: 6,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        bsc: {
                            eid: 30102,
                            token: {
                                address: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
                                chainKey: "bsc",
                                decimals: 18,
                                name: "BTCB Token",
                                symbol: "BTCB"
                            },
                            oftProxy: {
                                address: "0x5b7b01bEBCdf408Dd14429A9b12465AB45204B13"
                            }
                        },
                        goat: {
                            eid: 30361,
                            token: {
                                address: "0xfe41e7e5cB3460c483AB2A38eb605Cda9e2d248E",
                                chainKey: "goat",
                                decimals: 18,
                                name: "BTCB Token",
                                symbol: "BTCB"
                            }
                        }
                    },
                    coinGeckoId: "binance-bitcoin"
                })
            , eh = (0,
                X.C2)({
                    deployments: {
                        bsc: {
                            eid: 102,
                            oftProxy: {
                                address: "0xb274202daBA6AE180c665B4fbE59857b7c3a8091"
                            },
                            token: {
                                chainKey: "bsc",
                                symbol: "Cake",
                                address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
                                decimals: 18
                            }
                        },
                        ethereum: {
                            eid: 101,
                            token: {
                                chainKey: "ethereum",
                                symbol: "Cake",
                                address: "0x152649eA73beAb28c5b49B26eb48f7EAD6d4c898",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "Cake",
                                address: "0x1b896893dfc86bb67Cf57767298b9073D2c1bA2c",
                                decimals: 18
                            }
                        },
                        zkevm: {
                            eid: 158,
                            token: {
                                chainKey: "zkevm",
                                symbol: "Cake",
                                address: "0x0D1E753a25eBda689453309112904807625bEFBe",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 8,
                    version: 2,
                    fee: !0,
                    coinMarketCapId: 7186
                })
            , ex = (0,
                X.C2)({
                    fee: !0,
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    deployments: {
                        bsc: {
                            eid: 30102,
                            version: 3,
                            token: {
                                chainKey: "bsc",
                                symbol: "CAT",
                                address: "0x6894CDe390a3f51155ea41Ed24a33A4827d3063D",
                                decimals: 18
                            },
                            oftProxy: {
                                address: "0x27A2914fA4bA0Ec60d42E2bc0726c3A8a6D7B000"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            token: {
                                chainKey: "solana",
                                symbol: "CAT",
                                address: "3joMReCCSESngJEpFLoKR2dNcChjSRCDtybQet5uSpse",
                                decimals: 6,
                                programId: V.H_
                            },
                            tokenEscrow: {
                                address: "FEf59AJ5vbzXGkdZkZrV1pf1GHCaceG7MVC2FP1HN2Vg"
                            },
                            oft: {
                                programId: "CATLZdvDfQcK99YntCaeDs8o342HcXRP1R5t4yTT5dUw"
                            }
                        }
                    },
                    coinMarketCapId: 32724
                })
            , eB = (0,
                X.C2)({
                    version: 3,
                    sharedDecimals: 6,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        bsc: {
                            eid: 30102,
                            token: {
                                address: "0xCeFC79C16Cd62cF0c35C1D16D23b9f266f2edA51",
                                chainKey: "bsc",
                                decimals: 18,
                                name: "Catton AI",
                                symbol: "CATTON"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            token: {
                                address: "EnYkmHKm13mLnBgpvHJZE2T6rqi8weQXoFuPccW9ZiD5",
                                chainKey: "solana",
                                decimals: 6,
                                name: "Catton AI",
                                symbol: "CATTON",
                                programId: V.H_
                            },
                            oft: {
                                programId: "6KFkz9jSy6qtXCjrthFr2ao8MyDngjosW1FHuk9VLJ4B"
                            },
                            tokenEscrow: {
                                address: "Bomp5GaYBvaL8QpFtXqisZFBiZbhBpzvmJ3BZWBghUnk"
                            }
                        }
                    },
                    coinGeckoId: "catton-ai"
                })
            , eF = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinMarketCapId: 4710,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            version: 3,
                            oftProxy: {
                                address: "0x721C5CB57F5dB41fFA8b276cAe5ed9D58E7fa1C2"
                            },
                            token: {
                                chainKey: "ethereum",
                                decimals: 10,
                                symbol: "CERE",
                                name: "CERE Network",
                                address: "0x2dA719DB753dFA10a62E140f436E1d67F2ddB0d6"
                            }
                        },
                        base: {
                            eid: 30184,
                            version: 3,
                            token: {
                                chainKey: "base",
                                decimals: 10,
                                symbol: "CERE",
                                name: "CERE Token",
                                address: "0x9886447Ff4c350f4600E4BF95Db756Bdc629b1cA"
                            }
                        }
                    }
                })
            , ek = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinMarketCapId: 23756,
                    deployments: {
                        bsc: {
                            eid: 30102,
                            version: 3,
                            oftProxy: {
                                address: "0x25b107caC488D6aF84A79c0C9B80865433a011f0"
                            },
                            token: {
                                chainKey: "bsc",
                                decimals: 18,
                                symbol: "CGPT",
                                name: "ChainGPT",
                                address: "0x9840652DC04fb9db2C43853633f0F62BE6f00f98"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            oft: {
                                programId: "EqJ86eWWUYncpGtXwpgXjKjVTNHygB3kJdM72w236VX6"
                            },
                            token: {
                                chainKey: "solana",
                                decimals: 9,
                                symbol: "CGPT",
                                name: "ChainGPT",
                                address: "CCDfDXZxzZtkZLuhY48gyKdXc5KywqpR8xEVHHh8ck1G",
                                programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                            },
                            tokenEscrow: {
                                address: "HXRMSLC7Dcn7ZWuapY4rV7eSnL4DYPvjuPXRKAMFc9Qu"
                            }
                        }
                    }
                })
            , ep = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinMarketCapId: 33978,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            version: 3,
                            oftProxy: {
                                address: "0x4aFA9620D0B79137383A7A9AB3477837d475e948"
                            },
                            token: {
                                chainKey: "ethereum",
                                decimals: 18,
                                symbol: "cmETH",
                                name: "cmETH",
                                address: "0xE6829d9a7eE3040e1276Fa75293Bde931859e8fA"
                            }
                        },
                        hyperliquid: {
                            eid: 30367,
                            version: 3,
                            token: {
                                chainKey: "hyperliquid",
                                decimals: 18,
                                symbol: "cmETH",
                                name: "cmETH",
                                address: "0xE6829d9a7eE3040e1276Fa75293Bde931859e8fA"
                            }
                        },
                        mantle: {
                            eid: 30181,
                            version: 3,
                            token: {
                                chainKey: "mantle",
                                decimals: 18,
                                symbol: "cmETH",
                                name: "cmETH",
                                address: "0xE6829d9a7eE3040e1276Fa75293Bde931859e8fA"
                            }
                        }
                    }
                })
            , eK = (0,
                X.C2)({
                    fee: !0,
                    sharedDecimals: 8,
                    version: 2,
                    deployments: {
                        ethereum: {
                            eid: 101,
                            token: {
                                chainKey: "ethereum",
                                symbol: "CMPT",
                                address: "0x3d000462Fb9826804a45c0EA869b83b69587F2dB",
                                decimals: 18
                            },
                            oftProxy: {
                                address: "0x1883af6b51fb7f69577880004a82c9d68582022c"
                            }
                        },
                        arbitrum: {
                            eid: 110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "CMPT",
                                address: "0x1883aF6b51fb7F69577880004a82c9d68582022C",
                                decimals: 18
                            }
                        },
                        base: {
                            eid: 184,
                            token: {
                                chainKey: "base",
                                symbol: "CMPT",
                                address: "0x1883aF6b51fb7F69577880004a82c9d68582022C",
                                decimals: 18
                            }
                        }
                    },
                    coinMarketCapId: 30352
                })
            , eu = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        etherlink: {
                            eid: 30292,
                            token: {
                                chainKey: "etherlink",
                                address: "0x6b43732a9AE9F8654d496c0A075Aa4Aa43057A0B",
                                decimals: 18,
                                name: "Sugarverse",
                                symbol: "CNDY"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                chainKey: "arbitrum",
                                address: "0x6b43732a9AE9F8654d496c0A075Aa4Aa43057A0B",
                                decimals: 18,
                                name: "Sugarverse",
                                symbol: "CNDY"
                            }
                        }
                    },
                    coinMarketCapId: 34376,
                    coinGeckoId: "sugarverse"
                })
            , eT = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinMarketCapId: 33720,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            version: 3,
                            oftProxy: {
                                address: "0xC14459931cF666DCcAd582D63288AefB9f0bDca9"
                            },
                            token: {
                                chainKey: "ethereum",
                                decimals: 18,
                                symbol: "COOK",
                                name: "COOK",
                                address: "0x9F0C013016E8656bC256f948CD4B79ab25c7b94D"
                            }
                        },
                        hyperliquid: {
                            eid: 30367,
                            version: 3,
                            token: {
                                chainKey: "hyperliquid",
                                decimals: 18,
                                symbol: "COOK",
                                name: "COOK",
                                address: "0x9F0C013016E8656bC256f948CD4B79ab25c7b94D"
                            }
                        },
                        mantle: {
                            eid: 30181,
                            version: 3,
                            token: {
                                chainKey: "mantle",
                                decimals: 18,
                                symbol: "COOK",
                                name: "COOK",
                                address: "0x9F0C013016E8656bC256f948CD4B79ab25c7b94D"
                            }
                        }
                    }
                })
            , eS = (0,
                X.C2)({
                    sharedDecimals: 4,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x420FcA0121DC28039145009570975747295f2329",
                                decimals: 18,
                                name: "COQINU",
                                symbol: "COQ"
                            }
                        },
                        avalanche: {
                            eid: 30106,
                            token: {
                                chainKey: "avalanche",
                                address: "0x420FcA0121DC28039145009570975747295f2329",
                                decimals: 18,
                                name: "COQINU",
                                symbol: "COQ"
                            },
                            oftProxy: {
                                address: "0x347f7268ad43f3f7b68c4d64a8c0523830100c8b"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0x420FcA0121DC28039145009570975747295f2329",
                                decimals: 18,
                                name: "COQINU",
                                symbol: "COQ"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                chainKey: "arbitrum",
                                address: "0x420FcA0121DC28039145009570975747295f2329",
                                decimals: 18,
                                name: "COQINU",
                                symbol: "COQ"
                            }
                        },
                        mantle: {
                            eid: 30181,
                            token: {
                                chainKey: "mantle",
                                address: "0x420FcA0121DC28039145009570975747295f2329",
                                decimals: 18,
                                name: "COQINU",
                                symbol: "COQ"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            token: {
                                address: "coqAhf1TXdRRkuNmGYKb57rmkNbExPuM5uHYBi13uXZ",
                                chainKey: "solana",
                                decimals: 4,
                                name: "COQINU",
                                symbol: "COQ",
                                programId: V.H_
                            },
                            oft: {
                                programId: "coqrLCXBMK6KVRt7xknMcA9uVJz5t7v6KwWUF5MXuXY"
                            },
                            tokenEscrow: {
                                address: "coqH6oDiA2MZr4wQzGTnGWy2RaC4oxQJ9injeCMKQ5h"
                            }
                        }
                    },
                    coinMarketCapId: 28675
                })
            , ev = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            oftProxy: {
                                address: "0xC7aE4aB742F6b0b203f6710C87677005Bc45ad01"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "CRV",
                                address: "0xD533a949740bb3306d119CC777fa900bA034cd52",
                                decimals: 18
                            }
                        },
                        fantom: {
                            eid: 112,
                            token: {
                                chainKey: "fantom",
                                symbol: "CRV",
                                address: "0xC7aE4aB742F6b0b203f6710C87677005Bc45ad01",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 6,
                    version: 2,
                    fee: !1,
                    coinMarketCapId: 6538
                })
            , eP = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            oftProxy: {
                                address: "0xaa798BF5eC09B6E3bC059Ea4d36d4Ca53e063EF7"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "crvUSD",
                                address: "0xf939E0A03FB07F59A73314E73794Be0E57ac1b4E",
                                decimals: 18
                            }
                        },
                        fantom: {
                            eid: 112,
                            token: {
                                chainKey: "fantom",
                                symbol: "crvUSD",
                                address: "0xaa798BF5eC09B6E3bC059Ea4d36d4Ca53e063EF7",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 6,
                    version: 2,
                    fee: !0,
                    coinMarketCapId: 24927
                })
            , eI = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    deployments: {
                        base: {
                            eid: 30184,
                            version: 3,
                            token: {
                                chainKey: "base",
                                decimals: 18,
                                symbol: "CVAI",
                                name: "CV AGENTLAUNCHER Token",
                                address: "0x6b34D1C35689DbA179C2eDdF6a01530BBb1D28a8"
                            }
                        },
                        polygon: {
                            eid: 30109,
                            version: 3,
                            token: {
                                chainKey: "polygon",
                                decimals: 18,
                                symbol: "CVAI",
                                name: "CV AGENTLAUNCHER Token",
                                address: "0x6b34D1C35689DbA179C2eDdF6a01530BBb1D28a8"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            oft: {
                                programId: "9N2wyziEDzyuAtfGWb3FrMNjr1LS27CZVMkGWfyKEnEr"
                            },
                            token: {
                                chainKey: "solana",
                                decimals: 9,
                                symbol: "CVAI",
                                name: "AGENTLAUNCHER Token",
                                address: "8TC4ZJA5cwB5gmLemBfPP95v1Mft82kHGF9a87kepNno",
                                programId: V.H_
                            },
                            tokenEscrow: {
                                address: "3m8hbvz5BE6Zxtt8Q4kotKWqRGahRvM769tquMUNRECJ"
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            version: 3,
                            token: {
                                chainKey: "ethereum",
                                decimals: 18,
                                symbol: "CVAI",
                                name: "CV AGENTLAUNCHER Token",
                                address: "0x6b34D1C35689DbA179C2eDdF6a01530BBb1D28a8"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            version: 3,
                            token: {
                                chainKey: "bsc",
                                decimals: 18,
                                symbol: "CVAI",
                                name: "CV AGENTLAUNCHER Token",
                                address: "0x6b34D1C35689DbA179C2eDdF6a01530BBb1D28a8"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            version: 3,
                            token: {
                                chainKey: "arbitrum",
                                decimals: 18,
                                symbol: "CVAI",
                                name: "CV AGENTLAUNCHER Token",
                                address: "0x6b34D1C35689DbA179C2eDdF6a01530BBb1D28a8"
                            }
                        }
                    }
                })
            , eg = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        optimism: {
                            eid: 30111,
                            token: {
                                chainKey: "optimism",
                                address: "0x14778860E937f509e651192a90589dE711Fb88a9",
                                decimals: 18,
                                name: "CyberConnect",
                                symbol: "CYBER"
                            },
                            oftProxy: {
                                address: "0x9A9D5a29206Dde4F70825032dF32333De5f63921"
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x14778860E937f509e651192a90589dE711Fb88a9",
                                decimals: 18,
                                name: "CyberConnect",
                                symbol: "CYBER"
                            },
                            oftProxy: {
                                address: "0xcb07992de144bdee56fdb66fff2454b43243b052"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            token: {
                                chainKey: "bsc",
                                address: "0x14778860E937f509e651192a90589dE711Fb88a9",
                                decimals: 18,
                                name: "CyberConnect",
                                symbol: "CYBER"
                            },
                            oftProxy: {
                                address: "0x9a9d5a29206dde4f70825032df32333de5f63921"
                            }
                        }
                    },
                    coinMarketCapId: 24781
                })
            , eM = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinMarketCapId: 32224,
                    deployments: {
                        blast: {
                            eid: 30243,
                            version: 3,
                            oftProxy: {
                                address: "0x7Bb6cAC7e47E8149C4Ef62b759Ee8b2E56C0304F"
                            },
                            token: {
                                chainKey: "blast",
                                decimals: 18,
                                symbol: "CYBRO",
                                name: "Cybro Token",
                                address: "0x963eec23618BbC8e1766661d5f263f18094Ae4d5"
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            version: 3,
                            token: {
                                chainKey: "ethereum",
                                decimals: 18,
                                symbol: "CYBRO",
                                name: "Cybro Token",
                                address: "0xD58826d2C0bAbf1A60d8b508160b52E9C19AFf07"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            version: 3,
                            token: {
                                chainKey: "bsc",
                                decimals: 18,
                                symbol: "CYBRO",
                                name: "Cybro Token",
                                address: "0xA9972b1fAC35fdd8cBdbaA315A002B2Ad91d2ad6"
                            }
                        }
                    }
                })
            , eU = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            oftProxy: {
                                address: "0x91a40C733c97a6e1BF876EaF9ed8c08102eB491f"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "DAI",
                                address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
                                decimals: 18
                            }
                        },
                        fantom: {
                            eid: 112,
                            token: {
                                chainKey: "fantom",
                                symbol: "DAI",
                                address: "0x91a40C733c97a6e1BF876EaF9ed8c08102eB491f",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 18,
                    version: 1,
                    fee: !1,
                    coinMarketCapId: 4943
                })
            , eR = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinMarketCapId: 0,
                    coinGeckoId: "dawae-2",
                    deployments: {
                        sonic: {
                            eid: 30332,
                            version: 3,
                            token: {
                                chainKey: "sonic",
                                decimals: 18,
                                symbol: "DAWAE",
                                name: "Dawae",
                                address: "0x7A5C61047aD8fA4a743c75Eb46a01300c7c9dADA"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            oft: {
                                programId: "BoXzSxwNc9ZhX5RXChRDgageCKRzSZTDb2ZZwHRucmY7"
                            },
                            token: {
                                chainKey: "solana",
                                decimals: 9,
                                symbol: "DAWAE",
                                name: "DAWAE",
                                address: "DZSs9nHSr9BBunLNWd6PDstesJ4PBLMFVK1GbZ9urYNZ",
                                programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                            },
                            tokenEscrow: {
                                address: "5gN9by9fg8LBkRs9npF13buu62aAkeL7aehgTzcPKUEt"
                            }
                        }
                    }
                })
            , eG = (0,
                X.C2)({
                    deployments: {
                        bsc: {
                            eid: 102,
                            oftProxy: {
                                address: "0x5e6adF21e76F9D4258FC68fD5c8fCb826185f8ef"
                            },
                            token: {
                                chainKey: "bsc",
                                symbol: "DegenReborn",
                                name: "DegenReborn",
                                address: "0x1a131F7B106D58f33eAf0fE5B47DB2f2045E5732",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 110,
                            oftProxy: {
                                address: "0xcbd78fb59cdae1cd70e4d27c2d9ceb8691589715"
                            },
                            token: {
                                chainKey: "arbitrum",
                                symbol: "DegenReborn",
                                name: "DegenReborn",
                                address: "0x881ee52679537C6834fDeeB3673da2e3eCb50DF6",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 18,
                    version: 1,
                    fee: !1,
                    coinMarketCapId: 24276
                })
            , eH = (0,
                X.C2)({
                    coinMarketCapId: 30096,
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        arbitrum: {
                            eid: 30110,
                            token: {
                                chainKey: "arbitrum",
                                address: "0x9F07F8A82cB1af1466252e505b7b7ddee103bC91",
                                decimals: 18,
                                name: "DEGEN",
                                symbol: "DEGEN"
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0xfee293840D23B0B2De8C55e1Cf7A9F01C157767c",
                                decimals: 18,
                                name: "DEGEN",
                                symbol: "DEGEN"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
                                decimals: 18,
                                name: "Degen",
                                symbol: "DEGEN"
                            },
                            oftProxy: {
                                address: "0xdb8e759859058952c34953c8469f464109826e52"
                            }
                        },
                        degen: {
                            eid: 30267,
                            token: {
                                chainKey: "degen",
                                decimals: 18,
                                symbol: "DEGEN",
                                name: "DEGEN"
                            },
                            oftNative: {
                                address: "0x962311BAF97E6E703f219aE251A181Fb8Cb9F258"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            token: {
                                chainKey: "solana",
                                symbol: "DEGEN",
                                name: "DEGEN",
                                address: "A7n89LqW67HJKzJkdWZa2xojuK4N5GBKHz3dfjATCZPz",
                                decimals: 6,
                                programId: V.H_
                            },
                            tokenEscrow: {
                                address: "Bj4zRevshJHtWzuKawFoRt69ipggMiA48SM4BrxBuveH"
                            },
                            oft: {
                                programId: "DEGENjhEjBFtbdyPCBQRZK32T2jXmzHkBijEgC9esgvU"
                            }
                        }
                    }
                })
            , eL = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0xBcF1d3bf77f4D29d9c54AE5dC51d8C2ACea5Be3C",
                                decimals: 18,
                                name: "DEGENAI",
                                symbol: "degenai"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            token: {
                                chainKey: "solana",
                                address: "Gu3LDkn7Vx3bmCzLafYNKcDxv2mH7YN44NJZFXnypump",
                                decimals: 6,
                                name: "DEGENAI",
                                symbol: "degenai",
                                programId: V.H_
                            },
                            tokenEscrow: {
                                address: "C7TyogQXdRYUg6qefWPNWgHk52oTdFwGnrUd2M3WB9o6"
                            },
                            oft: {
                                programId: "B4bD1RaEwHk5a2BBQPnHjP4ZGgmVFQ1jhJBXgny9h1qC"
                            }
                        }
                    },
                    coinGeckoId: "degen-spartan-ai"
                })
            , eN = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        optimism: {
                            eid: 30111,
                            token: {
                                chainKey: "optimism",
                                address: "0x09D9420332bff75522a45FcFf4855F82a0a3ff50",
                                decimals: 18,
                                name: "Dinero OFT",
                                symbol: "DINERO"
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x6DF0E641FC9847c0c6Fde39bE6253045440c14d3",
                                decimals: 18,
                                name: "Dinero Governance Token",
                                symbol: "DINERO"
                            },
                            oftProxy: {
                                address: "0x09D9420332bff75522a45FcFf4855F82a0a3ff50"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0x09D9420332bff75522a45FcFf4855F82a0a3ff50",
                                decimals: 18,
                                name: "Dinero OFT",
                                symbol: "DINERO"
                            }
                        },
                        zksync: {
                            eid: 30165,
                            token: {
                                chainKey: "zksync",
                                name: "Dinero OFT",
                                symbol: "DINERO",
                                address: "0xd0fB453E03f128A35d7409135981C754170378A5",
                                decimals: 18
                            }
                        },
                        flare: {
                            eid: 30295,
                            token: {
                                chainKey: "flare",
                                name: "Dinero OFT",
                                symbol: "DINERO",
                                address: "0xBE6D2BE4e01D4304a28eDD13038311e112313ec8",
                                decimals: 18
                            }
                        }
                    },
                    coinMarketCapId: 32492,
                    coinGeckoId: "dinero-2"
                })
            , eO = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            token: {
                                chainKey: "ethereum",
                                symbol: "DMAIL",
                                address: "0xcC6f1e1B87cfCbe9221808d2d85C501aab0B5192",
                                decimals: 18
                            }
                        },
                        bsc: {
                            eid: 102,
                            token: {
                                chainKey: "bsc",
                                symbol: "DMAIL",
                                address: "0xcC6f1e1B87cfCbe9221808d2d85C501aab0B5192",
                                decimals: 18
                            }
                        },
                        linea: {
                            eid: 183,
                            token: {
                                chainKey: "linea",
                                symbol: "DMAIL",
                                address: "0xcC6f1e1B87cfCbe9221808d2d85C501aab0B5192",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 8,
                    version: 2,
                    fee: !1,
                    coinMarketCapId: 19779
                })
            , ew = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            token: {
                                chainKey: "ethereum",
                                symbol: "DMT",
                                address: "0x0B7f0e51Cd1739D6C96982D55aD8fA634dd43A9C",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 110,
                            oftProxy: {
                                address: "0xa9Aa07F082D9c15D0B6D7e9e5B68b1f898399C29"
                            },
                            token: {
                                chainKey: "arbitrum",
                                symbol: "DMT",
                                address: "0x8B0E6f19Ee57089F7649A455D89D7bC6314D04e8",
                                decimals: 18
                            }
                        },
                        sanko: {
                            eid: 278,
                            token: {
                                chainKey: "sanko",
                                symbol: "DMT",
                                decimals: 18
                            },
                            oftNative: {
                                address: "0x7393aE4835FDfed4f25E46a10D6bDB2fd49A2706"
                            }
                        }
                    },
                    sharedDecimals: 6,
                    version: 2,
                    fee: !1,
                    coinMarketCapId: 25653
                })
            , eW = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinMarketCapId: 7558,
                    deployments: {
                        arbitrum: {
                            eid: 30110,
                            version: 3,
                            token: {
                                chainKey: "arbitrum",
                                decimals: 18,
                                symbol: "DOC",
                                name: "Dollar on Chain",
                                address: "0x2AD62eb9744c720364F6ac856360a43e8a2229b5"
                            }
                        },
                        rootstock: {
                            eid: 30333,
                            version: 3,
                            oftProxy: {
                                address: "0x5da928A27283674411eF7e2739efd41EE6E53B53"
                            },
                            token: {
                                chainKey: "rootstock",
                                decimals: 18,
                                symbol: "DOC",
                                name: "Dollar on Chain",
                                address: "0xe700691dA7b9851F2F35f8b8182c69c53CcaD9Db"
                            }
                        }
                    }
                })
            , eX = (0,
                X.C2)({
                    version: 3,
                    sharedDecimals: 6,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        bsc: {
                            eid: 30102,
                            token: {
                                address: "0xbA2aE424d960c26247Dd6c32edC70B295c744C43",
                                chainKey: "bsc",
                                decimals: 8,
                                name: "Dogecoin",
                                symbol: "DOGE"
                            },
                            oftProxy: {
                                address: "0x0E9A492Bd9D4241028f794b9580847e5C3444776"
                            }
                        },
                        goat: {
                            eid: 30361,
                            token: {
                                address: "0x1E0d0303a8c4aD428953f5ACB1477dB42bb838cf",
                                chainKey: "goat",
                                decimals: 18,
                                name: "GOAT BSC DOGE",
                                symbol: "DOGEB"
                            }
                        }
                    },
                    coinMarketCapId: 74
                })
            , eV = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0xd5EB7E91Ae88Ea2550F9bFD04208399c95dF4dC7",
                                decimals: 18,
                                name: "DogLibre",
                                symbol: "DOGL"
                            },
                            oftProxy: {
                                address: "0xA80F36BA18c7f721F3F7ACDbcDEfd3a86869A036"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0xB757977bc882A14db86b048f2abb2F2a14D33184",
                                decimals: 18,
                                name: "DogLibre",
                                symbol: "DOGL"
                            }
                        },
                        solana: {
                            eid: 30168,
                            token: {
                                chainKey: "solana",
                                symbol: "DOGL",
                                address: "8bk3hKqrq1NgLKck937Fj6PoY9jAJgGpUKQ28qutgqha",
                                decimals: 6,
                                name: "DogLibre",
                                programId: V.H_
                            },
                            oft: {
                                programId: "HRPXLCqspQocTjfcX4rvAPaY9q6Gwb1rrD3xXWrfJWdW"
                            }
                        }
                    },
                    coinMarketCapId: 31499,
                    coinGeckoId: "doglibre"
                })
            , ez = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0x84054a6b72dd5c58Da8106e410e62658083a80E4",
                                decimals: 18,
                                symbol: "DTF"
                            }
                        },
                        solana: {
                            eid: 30168,
                            token: {
                                chainKey: "solana",
                                symbol: "DTF",
                                address: "EmhVWGUa2Q9PN4QjzFjvuVyzFKg4s3ERwjKR9dQDpump",
                                decimals: 6
                            },
                            tokenEscrow: {
                                address: "4bB2QifJcaMfw5RVnXR6P3CQJ8kv6cJgAqR9mLpKQ2Vh"
                            },
                            oft: {
                                programId: "HRPXLCqspQocTjfcX4rvAPaY9q6Gwb1rrD3xXWrfJWdW"
                            }
                        }
                    },
                    coinGeckoId: "believe-in-something-2"
                })
            , eZ = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 2,
                    fee: !1,
                    deployments: {
                        sonic: {
                            eid: 332,
                            token: {
                                chainKey: "sonic",
                                address: "0x7A08Bf5304094CA4C7b4132Ef62b5EDc4a3478B7",
                                decimals: 18,
                                name: "SonicEco",
                                symbol: "ECO"
                            }
                        },
                        fantom: {
                            eid: 112,
                            token: {
                                chainKey: "fantom",
                                address: "0xB8a32897016C1B2ee0797090162eAFe58f032795",
                                decimals: 18,
                                name: "FantomEco",
                                symbol: "ECO"
                            },
                            oftProxy: {
                                address: "0xba1c51F4DD0a96BD4ce624a4B0b48Cf039b4f2a5"
                            }
                        }
                    },
                    coinGeckoId: "fantom-eco-2"
                })
            , eQ = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            token: {
                                chainKey: "ethereum",
                                symbol: "EDU",
                                address: "0xf8173a39c56a554837C4C7f104153A005D284D11",
                                decimals: 18
                            }
                        },
                        bsc: {
                            eid: 102,
                            oftProxy: {
                                address: "0x67fb304001ad03c282266b965b51e97aa54a2fab"
                            },
                            token: {
                                chainKey: "bsc",
                                symbol: "EDU",
                                address: "0xBdEAe1cA48894A1759A8374D63925f21f2Ee2639",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "EDU",
                                address: "0xf8173a39c56a554837c4c7f104153a005d284d11",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 8,
                    version: 2,
                    fee: !1,
                    coinMarketCapId: 24613
                })
            , eY = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        arbitrum: {
                            eid: 30110,
                            token: {
                                chainKey: "arbitrum",
                                address: "0xda71EA8ef58D015de8C5cEA8f7B890db3A103E67",
                                decimals: 18,
                                name: "Emdx Token",
                                symbol: "EMDX"
                            }
                        },
                        avalanche: {
                            eid: 30106,
                            token: {
                                chainKey: "avalanche",
                                address: "0xe533B81297B820D2Eb2cd837263926596328E8D2",
                                decimals: 18,
                                name: "EMDX Token",
                                symbol: "EMDX"
                            },
                            oftProxy: {
                                address: "0x3CB9aEBE6c9097135E8421B4C7A93e2c0B99200f"
                            }
                        }
                    }
                })
            , eq = (0,
                X.C2)({
                    fee: !0,
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    deployments: {
                        bsc: {
                            eid: 30102,
                            token: {
                                chainKey: "bsc",
                                symbol: "ENA",
                                decimals: 18,
                                address: "0x58538e6A46E07434d7E7375Bc268D3cb839C0133"
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                symbol: "ENA",
                                decimals: 18,
                                address: "0x57e114B691Db790C35207b2e685D4A43181e6061"
                            },
                            oftProxy: {
                                address: "0x58538e6a46e07434d7e7375bc268d3cb839c0133"
                            }
                        },
                        mode: {
                            eid: 30260,
                            token: {
                                chainKey: "mode",
                                symbol: "ENA",
                                decimals: 18,
                                address: "0x58538e6A46E07434d7E7375Bc268D3cb839C0133"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "ENA",
                                decimals: 18,
                                address: "0x58538e6A46E07434d7E7375Bc268D3cb839C0133"
                            }
                        },
                        blast: {
                            eid: 30243,
                            token: {
                                chainKey: "blast",
                                symbol: "ENA",
                                decimals: 18,
                                address: "0x58538e6A46E07434d7E7375Bc268D3cb839C0133"
                            }
                        },
                        fraxtal: {
                            eid: 30255,
                            token: {
                                chainKey: "fraxtal",
                                symbol: "ENA",
                                decimals: 18,
                                address: "0x58538e6A46E07434d7E7375Bc268D3cb839C0133"
                            }
                        },
                        kava: {
                            eid: 30177,
                            token: {
                                chainKey: "kava",
                                symbol: "ENA",
                                decimals: 18,
                                address: "0x58538e6A46E07434d7E7375Bc268D3cb839C0133"
                            }
                        },
                        scroll: {
                            eid: 30214,
                            token: {
                                chainKey: "scroll",
                                symbol: "ENA",
                                decimals: 18,
                                address: "0x58538e6A46E07434d7E7375Bc268D3cb839C0133"
                            }
                        },
                        metis: {
                            eid: 30151,
                            token: {
                                chainKey: "metis",
                                symbol: "ENA",
                                decimals: 18,
                                address: "0x58538e6A46E07434d7E7375Bc268D3cb839C0133"
                            }
                        },
                        manta: {
                            eid: 30217,
                            token: {
                                chainKey: "manta",
                                symbol: "ENA",
                                decimals: 18,
                                address: "0x58538e6A46E07434d7E7375Bc268D3cb839C0133"
                            }
                        },
                        optimism: {
                            eid: 30111,
                            token: {
                                chainKey: "optimism",
                                symbol: "ENA",
                                decimals: 18,
                                address: "0x58538e6A46E07434d7E7375Bc268D3cb839C0133"
                            }
                        },
                        linea: {
                            eid: 30183,
                            token: {
                                chainKey: "linea",
                                symbol: "ENA",
                                decimals: 18,
                                address: "0x58538e6A46E07434d7E7375Bc268D3cb839C0133"
                            }
                        },
                        mantle: {
                            eid: 30181,
                            token: {
                                chainKey: "mantle",
                                symbol: "ENA",
                                decimals: 18,
                                address: "0x58538e6A46E07434d7E7375Bc268D3cb839C0133"
                            }
                        },
                        zksync: {
                            eid: 30165,
                            token: {
                                chainKey: "zksync",
                                symbol: "ENA",
                                address: "0x686b311F82b407f0be842652a98e5619F64cC25F",
                                decimals: 18
                            }
                        },
                        zircuit: {
                            eid: 30303,
                            token: {
                                chainKey: "zircuit",
                                symbol: "ENA",
                                address: "0x813635891aA06bd55036bbd8f7d1A34aB3de9a0F",
                                decimals: 18
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                symbol: "ENA",
                                address: "0x58538e6A46E07434d7E7375Bc268D3cb839C0133",
                                decimals: 18
                            }
                        },
                        swell: {
                            eid: 30335,
                            token: {
                                chainKey: "swell",
                                symbol: "ENA",
                                address: "0x58538e6A46E07434d7E7375Bc268D3cb839C0133",
                                decimals: 18
                            }
                        },
                        morph: {
                            eid: 30322,
                            token: {
                                chainKey: "morph",
                                symbol: "ENA",
                                name: "ENA",
                                address: "0x58538e6A46E07434d7E7375Bc268D3cb839C0133",
                                decimals: 18
                            }
                        },
                        solana: {
                            eid: 30168,
                            token: {
                                chainKey: "solana",
                                symbol: "ENA",
                                address: "72QvBVwpxqmheEPfaCwWSWqEFsUy3rhWt6JhQBMNTwD1",
                                decimals: 9
                            },
                            oft: {
                                programId: "5sVQd9aeB4GtFA3PFRK7gkGCNCQzovxh7faaGccwQXuU"
                            }
                        },
                        ton: {
                            eid: 30343,
                            msgType: 1,
                            oftProxy: {
                                address: "0x0f87d442a6b820e642ae9ad262f2e07b9c529cb4f070b9152ef362604c69b392"
                            },
                            token: {
                                chainKey: "ton",
                                symbol: "ENA",
                                address: "0x058591596327b4965b25efce4ecce246f504fa3d7c9851d9a20b853de6506e1e",
                                decimals: 6
                            },
                            controller: {
                                address: "0x1eb2bbea3d8c0d42ff7fd60f0264c866c934bbff727526ca759e7374cae0c166"
                            },
                            ulnManager: {
                                address: "0x150645746e25be5486eb3b2f5d98b44c6b324697c48d495d059f96fc9d3ec368"
                            }
                        }
                    },
                    coinMarketCapId: 30171
                })
            , eJ = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0xA35b1B31Ce002FBF2058D22F30f95D405200A15b",
                                decimals: 18,
                                name: "ETHx",
                                symbol: "ETHx"
                            },
                            oftProxy: {
                                address: "0x39d0ce7d1509a4f22619D0f666978FBe820665E9"
                            }
                        },
                        gnosis: {
                            eid: 30145,
                            token: {
                                chainKey: "gnosis",
                                address: "0x01aF04690d17DC27b891A7F67E9EEe4d14DE8EA8",
                                decimals: 18,
                                name: "ETHx",
                                symbol: "ETHx"
                            },
                            oftProxy: {
                                address: "0xac9da18c76d54a744612e72492838227df0308bb"
                            }
                        },
                        xlayer: {
                            eid: 30274,
                            token: {
                                chainKey: "xlayer",
                                address: "0xDC685bf4b416f8D5cAc64927E9c516be45b81d28",
                                decimals: 18,
                                name: "ETHx",
                                symbol: "ETHx"
                            },
                            oftProxy: {
                                address: "0xC0A0fDD802b2750b7f972C2a7972c8942328099f"
                            }
                        }
                    },
                    coinMarketCapId: 27566
                })
            , ej = (0,
                X.C2)({
                    version: 3,
                    sharedDecimals: 6,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                address: "0xd9Fcd98c322942075A5C3860693e9f4f03AAE07b",
                                chainKey: "ethereum",
                                decimals: 18,
                                name: "Euler",
                                symbol: "EUL"
                            },
                            oftProxy: {
                                address: "0x4d7e09f73843Bd4735AaF7A74b6d877bac75a531"
                            }
                        },
                        bob: {
                            eid: 30279,
                            token: {
                                address: "0xDe1763aFA5eB658CfFFfD16835AfeB47e7aC0B8D",
                                chainKey: "bob",
                                decimals: 18,
                                name: "Euler",
                                symbol: "EUL"
                            },
                            oftProxy: {
                                address: "0x797964F9eB3A733D443810820f56c9ebAab1d1c2"
                            }
                        },
                        bera: {
                            eid: 30362,
                            token: {
                                address: "0xEb9b5f4EB023aE754fF59A04c9C038D58606DAC6",
                                chainKey: "bera",
                                decimals: 18,
                                name: "Euler",
                                symbol: "EUL"
                            },
                            oftProxy: {
                                address: "0xc1d31b2812Cc920341349a717d14bAdFb1BCab11"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            token: {
                                address: "0x2117E8b79e8E176A670c9fCf945d4348556bfFad",
                                chainKey: "bsc",
                                decimals: 18,
                                name: "Euler",
                                symbol: "EUL"
                            },
                            oftProxy: {
                                address: "0x1633269308F154fbECBb15F91d72D2aFA6af95B4"
                            }
                        },
                        unichain: {
                            eid: 30320,
                            token: {
                                address: "0xE9C43e09C5FA733bCC2aEAa96063A4a60147AA09",
                                chainKey: "unichain",
                                decimals: 18,
                                name: "Euler",
                                symbol: "EUL"
                            },
                            oftProxy: {
                                address: "0x41a11d85577Bb21743E11Eca62e2b241DC1eD5C0"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                address: "0x462cD9E0247b2e63831c3189aE738E5E9a5a4b64",
                                chainKey: "arbitrum",
                                decimals: 18,
                                name: "Euler",
                                symbol: "EUL"
                            },
                            oftProxy: {
                                address: "0x174834a9DE4C2f0c13c7353e62C229E8D607c808"
                            }
                        },
                        sonic: {
                            eid: 30332,
                            token: {
                                address: "0x8e15C8D399e86d4FD7B427D42f06c60cDD9397e7",
                                chainKey: "sonic",
                                decimals: 18,
                                name: "Euler",
                                symbol: "EUL"
                            },
                            oftProxy: {
                                address: "0x31aA74232A0b0E50e5bF95780b2116710a34c7E9"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                address: "0xa153Ad732F831a79b5575Fa02e793EC4E99181b0",
                                chainKey: "base",
                                decimals: 18,
                                name: "Euler",
                                symbol: "EUL"
                            },
                            oftProxy: {
                                address: "0x9ff7ea0Cf94b8665c2F5d17560Bd34Ab9BbAcd21"
                            }
                        },
                        swell: {
                            eid: 30335,
                            token: {
                                address: "0x80ccFBec4b8c82265abdc226Ad3Df84C0726E7A3",
                                chainKey: "swell",
                                decimals: 18,
                                name: "Euler",
                                symbol: "EUL"
                            },
                            oftProxy: {
                                address: "0xD0148dDB69f4d8182Ef863d6f81ED6519D8c83a2"
                            }
                        },
                        avalanche: {
                            eid: 30106,
                            token: {
                                address: "0x9ceeD3A7f753608372eeAb300486cc7c2F38AC68",
                                chainKey: "avalanche",
                                decimals: 18,
                                name: "Euler",
                                symbol: "EUL"
                            },
                            oftProxy: {
                                address: "0xF1A5F97AB84158Cf6d8ba8dEF68780Fc2Fd64310"
                            }
                        }
                    },
                    coinMarketCapId: 14280
                })
            , e_ = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        arbitrum: {
                            eid: 30110,
                            token: {
                                address: "0xaB24c63bee518Ac956c8123389fc538c7e36d82C",
                                chainKey: "arbitrum",
                                decimals: 18,
                                name: "Defactor",
                                symbol: "FACTR"
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            oftProxy: {
                                address: "0xddB9A194722E8940F25AdB87E343A100241Ff8F6"
                            },
                            token: {
                                address: "0xe0bCEEF36F3a6eFDd5EEBFACD591423f8549B9D5",
                                chainKey: "ethereum",
                                decimals: 18,
                                name: "Defactor",
                                symbol: "FACTR"
                            }
                        }
                    },
                    coinMarketCapId: 13255,
                    coinGeckoId: "defactor"
                })
            , e$ = (0,
                X.C2)({
                    version: 3,
                    limit: !1,
                    fee: !0,
                    sharedDecimals: 6,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                address: "0xf9Fa60EF4F23F00CCE403cc4d2c11Baf4880A0d6",
                                chainKey: "ethereum",
                                decimals: 18,
                                symbol: "FAR",
                                name: "Farcana"
                            }
                        },
                        polygon: {
                            eid: 30109,
                            token: {
                                address: "0x5F32AbeeBD3c2fac1E7459A27e1AE9f1C16ccccA",
                                chainKey: "polygon",
                                decimals: 18,
                                symbol: "FAR",
                                name: "Farcana"
                            },
                            oftProxy: {
                                address: "0x1a53F62A8eeeE5CEa2aa822dD0c8B5ed1FF20159"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            token: {
                                address: "0xDC816B6bd4786720e91Eb17D4DaBf0E1eEf5eE91",
                                chainKey: "bsc",
                                decimals: 18,
                                name: "FARCANA",
                                symbol: "FAR"
                            }
                        }
                    },
                    coinMarketCapId: 22331,
                    coinGeckoId: "Farcana"
                })
            , e0 = (0,
                X.C2)({
                    version: 3,
                    sharedDecimals: 8,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                address: "0xC96dE26018A54D51c097160568752c4E3BD6C364",
                                chainKey: "ethereum",
                                decimals: 8,
                                name: "Fire Bitcoin",
                                symbol: "FBTC"
                            },
                            oftProxy: {
                                address: "0x0b835f07a2a54C0e80c1F585e5b6Dd732816dA3F"
                            }
                        },
                        bera: {
                            eid: 30362,
                            token: {
                                address: "0xbAC93A69c62a1518136FF840B788Ba715cbDfE2B",
                                chainKey: "bera",
                                decimals: 8,
                                name: "Fire Bitcoin",
                                symbol: "FBTC"
                            },
                            oftProxy: {
                                address: "0x0b835f07a2a54C0e80c1F585e5b6Dd732816dA3F"
                            }
                        }
                    },
                    coinMarketCapId: 32306
                })
            , e1 = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinMarketCapId: 20077,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            version: 3,
                            oftProxy: {
                                address: "0x8F57f33e587004Ce3caEF213935E82e490Fca460"
                            },
                            token: {
                                chainKey: "ethereum",
                                decimals: 18,
                                symbol: "FLOWER",
                                name: "Flower",
                                address: "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380"
                            }
                        },
                        polygon: {
                            eid: 30109,
                            version: 3,
                            token: {
                                chainKey: "polygon",
                                decimals: 18,
                                symbol: "FLOWER",
                                name: "Flower",
                                address: "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380"
                            }
                        },
                        base: {
                            eid: 30184,
                            version: 3,
                            token: {
                                chainKey: "base",
                                decimals: 18,
                                symbol: "FLOWER",
                                name: "Flower",
                                address: "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380"
                            }
                        }
                    }
                })
            , e3 = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            oftProxy: {
                                address: "0x53028b435A62fdA4FD6a199193922bE9f6b8a9B7"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "FLUID",
                                address: "0x4E47951508Fd4A4126F8ff9CF5E6Fa3b7cC8E073",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "FLUID",
                                address: "0x4E47951508Fd4A4126F8ff9CF5E6Fa3b7cC8E073",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 18,
                    version: 1,
                    fee: !1
                })
            , e8 = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        blast: {
                            eid: 30243,
                            token: {
                                chainKey: "blast",
                                address: "0xE41228a455700cAF09E551805A8aB37caa39D08c",
                                decimals: 18,
                                name: "Frax Price Index",
                                symbol: "FPI"
                            }
                        },
                        metis: {
                            eid: 30151,
                            token: {
                                chainKey: "metis",
                                address: "0xE41228a455700cAF09E551805A8aB37caa39D08c",
                                decimals: 18,
                                name: "Frax Price Index",
                                symbol: "FPI"
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x853d955aCEf822Db058eb8505911ED77F175b99e",
                                decimals: 18,
                                name: "Frax",
                                symbol: "FRAX"
                            },
                            oftProxy: {
                                address: "0xE41228a455700cAF09E551805A8aB37caa39D08c"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0xE41228a455700cAF09E551805A8aB37caa39D08c",
                                decimals: 18,
                                name: "Frax Price Index",
                                symbol: "FPI"
                            }
                        },
                        mode: {
                            eid: 30260,
                            token: {
                                chainKey: "mode",
                                address: "0xEed9DE5E41b53D1C8fAB8AAB4b0e446F828c1483",
                                decimals: 18,
                                name: "Frax Price Index",
                                symbol: "FPI"
                            }
                        },
                        sei: {
                            eid: 30280,
                            token: {
                                chainKey: "sei",
                                address: "0xEed9DE5E41b53D1C8fAB8AAB4b0e446F828c1483",
                                decimals: 18,
                                name: "Frax Price Index",
                                symbol: "FPI"
                            }
                        },
                        xlayer: {
                            eid: 30274,
                            token: {
                                chainKey: "xlayer",
                                address: "0xEed9DE5E41b53D1C8fAB8AAB4b0e446F828c1483",
                                decimals: 18,
                                name: "Frax Price Index",
                                symbol: "FPI"
                            }
                        }
                    },
                    coinMarketCapId: 19425
                })
            , e2 = (0,
                X.C2)({
                    fee: !0,
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            oftProxy: {
                                address: "0x909DBdE1eBE906Af95660033e478D59EFe831fED"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "FRAX",
                                address: "0x853d955aCEf822Db058eb8505911ED77F175b99e",
                                decimals: 18
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                symbol: "FRAX",
                                address: "0x909DBdE1eBE906Af95660033e478D59EFe831fED",
                                decimals: 18
                            }
                        },
                        mode: {
                            eid: 30260,
                            token: {
                                chainKey: "mode",
                                symbol: "FRAX",
                                address: "0x80Eede496655FB9047dd39d9f418d5483ED600df",
                                decimals: 18
                            }
                        },
                        blast: {
                            eid: 30243,
                            token: {
                                chainKey: "blast",
                                symbol: "FRAX",
                                address: "0x909DBdE1eBE906Af95660033e478D59EFe831fED",
                                decimals: 18
                            }
                        },
                        metis: {
                            eid: 30151,
                            token: {
                                chainKey: "metis",
                                symbol: "FRAX",
                                address: "0x909DBdE1eBE906Af95660033e478D59EFe831fED",
                                decimals: 18
                            }
                        },
                        sei: {
                            eid: 30280,
                            token: {
                                chainKey: "sei",
                                symbol: "FRAX",
                                address: "0x80Eede496655FB9047dd39d9f418d5483ED600df",
                                decimals: 18
                            }
                        },
                        xlayer: {
                            eid: 30274,
                            token: {
                                chainKey: "xlayer",
                                symbol: "FRAX",
                                address: "0x80eede496655fb9047dd39d9f418d5483ed600df",
                                decimals: 18
                            }
                        }
                    },
                    coinMarketCapId: 6952
                })
            , e6 = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x5E8422345238F34275888049021821E8E08CAa1f",
                                decimals: 18,
                                name: "Frax Ether",
                                symbol: "frxETH"
                            },
                            oftProxy: {
                                address: "0xF010a7c8877043681D59AD125EbF575633505942"
                            }
                        },
                        metis: {
                            eid: 30151,
                            token: {
                                chainKey: "metis",
                                address: "0xF010a7c8877043681D59AD125EbF575633505942",
                                decimals: 18,
                                name: "Frax Ether",
                                symbol: "frxETH"
                            }
                        },
                        blast: {
                            eid: 30243,
                            token: {
                                chainKey: "blast",
                                address: "0xF010a7c8877043681D59AD125EbF575633505942",
                                decimals: 18,
                                name: "Frax Ether",
                                symbol: "frxETH"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0xF010a7c8877043681D59AD125EbF575633505942",
                                decimals: 18,
                                name: "Frax Ether",
                                symbol: "frxETH"
                            }
                        },
                        mode: {
                            eid: 30260,
                            token: {
                                chainKey: "mode",
                                address: "0x43eDD7f3831b08FE70B7555ddD373C8bF65a9050",
                                decimals: 18,
                                name: "Frax Ether",
                                symbol: "frxETH"
                            }
                        },
                        sei: {
                            eid: 30280,
                            token: {
                                chainKey: "sei",
                                address: "0x43eDD7f3831b08FE70B7555ddD373C8bF65a9050",
                                decimals: 18,
                                name: "Frax Ether",
                                symbol: "frxETH"
                            }
                        },
                        xlayer: {
                            eid: 30274,
                            token: {
                                chainKey: "xlayer",
                                address: "0x43eDD7f3831b08FE70B7555ddD373C8bF65a9050",
                                decimals: 18,
                                name: "Frax Ether",
                                symbol: "frxETH"
                            }
                        }
                    },
                    coinMarketCapId: 23225
                })
            , e4 = (0,
                X.C2)({
                    version: 3,
                    limit: !1,
                    fee: !0,
                    sharedDecimals: 6,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            version: 3,
                            token: {
                                address: "0xD6C7bB8531295e88D364EA67D5D1acC7D3F87454",
                                chainKey: "ethereum",
                                decimals: 18,
                                symbol: "FTR",
                                name: "Fautor"
                            },
                            oftProxy: {
                                address: "0xbCc9a0c41fC42D55270fe45D45e6AF9cc31F71ff"
                            }
                        },
                        avalanche: {
                            eid: 30106,
                            token: {
                                address: "0x61f23250451305f6C4426E81C50aE535Edf94A02",
                                chainKey: "avalanche",
                                decimals: 18,
                                symbol: "FTR",
                                name: "Fautor"
                            }
                        }
                    },
                    coinMarketCapId: 31953,
                    coinGeckoId: "fautor"
                })
            , e7 = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        arbitrum: {
                            eid: 30110,
                            token: {
                                address: "0xAC9eF66dC75E5340304d5cc48E185FF5262Ae3Ac",
                                chainKey: "arbitrum",
                                decimals: 18,
                                name: "Fuego",
                                symbol: "FUEGO"
                            }
                        },
                        avalanche: {
                            eid: 30106,
                            token: {
                                address: "0xAC9eF66dC75E5340304d5cc48E185FF5262Ae3Ac",
                                chainKey: "avalanche",
                                decimals: 18,
                                name: "Fuego",
                                symbol: "FUEGO"
                            }
                        },
                        base: {
                            eid: 30184,
                            oftProxy: {
                                address: "0x6f756c0437a8c2193456A5bF09a61185a56dcC76"
                            },
                            token: {
                                address: "0x36912b5cf63E509f18E53ac98B3012Fa79e77bf5",
                                chainKey: "base",
                                decimals: 18,
                                name: "Fuego",
                                symbol: "FUEGO"
                            }
                        },
                        sonic: {
                            eid: 30332,
                            token: {
                                chainKey: "sonic",
                                address: "0xac9ef66dc75e5340304d5cc48e185ff5262ae3ac",
                                decimals: 18,
                                name: "Fuego",
                                symbol: "FUEGO"
                            }
                        }
                    },
                    coinGeckoId: "fuego"
                })
            , e9 = (0,
                X.C2)({
                    deployments: {
                        blast: {
                            eid: 30243,
                            token: {
                                chainKey: "blast",
                                symbol: "FXS (old)",
                                name: "FXS (old)",
                                address: "0x23432452B720C80553458496D4D9d7C5003280d0",
                                decimals: 18
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            oftProxy: {
                                address: "0x23432452B720C80553458496D4D9d7C5003280d0"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "FXS (old)",
                                name: "FXS (old)",
                                address: "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
                                decimals: 18
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                symbol: "FXS (old)",
                                name: "FXS (old)",
                                address: "0x23432452B720C80553458496D4D9d7C5003280d0",
                                decimals: 18
                            }
                        },
                        metis: {
                            eid: 30151,
                            token: {
                                chainKey: "metis",
                                symbol: "FXS (old)",
                                name: "FXS (old)",
                                address: "0x23432452B720C80553458496D4D9d7C5003280d0",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    coinMarketCapId: 6953
                })
            , e5 = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinMarketCapId: 6953,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            version: 3,
                            oftProxy: {
                                address: "0xC6F59a4fD50cAc677B51558489E03138Ac1784EC"
                            },
                            token: {
                                chainKey: "ethereum",
                                decimals: 18,
                                symbol: "FXS",
                                name: "Frax Share",
                                address: "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0"
                            }
                        },
                        xlayer: {
                            eid: 30274,
                            version: 3,
                            token: {
                                chainKey: "xlayer",
                                decimals: 18,
                                symbol: "FXS",
                                name: "Frax Share",
                                address: "0x64445f0aecC51E94aD52d8AC56b7190e764E561a"
                            }
                        },
                        polygon: {
                            eid: 30109,
                            version: 3,
                            token: {
                                chainKey: "polygon",
                                decimals: 18,
                                symbol: "FXS",
                                name: "Frax Share",
                                address: "0x64445f0aecC51E94aD52d8AC56b7190e764E561a"
                            }
                        },
                        ink: {
                            eid: 30339,
                            version: 3,
                            token: {
                                chainKey: "ink",
                                decimals: 18,
                                symbol: "FXS",
                                name: "Frax Share",
                                address: "0x64445f0aecC51E94aD52d8AC56b7190e764E561a"
                            }
                        },
                        sei: {
                            eid: 30280,
                            version: 3,
                            token: {
                                chainKey: "sei",
                                decimals: 18,
                                symbol: "FXS",
                                name: "Frax Share",
                                address: "0x64445f0aecC51E94aD52d8AC56b7190e764E561a"
                            }
                        },
                        fraxtal: {
                            eid: 30255,
                            version: 3,
                            oftProxy: {
                                address: "0xd86fBBd0c8715d2C1f40e451e5C3514e65E7576A"
                            },
                            token: {
                                chainKey: "fraxtal",
                                decimals: 18,
                                symbol: "FXS",
                                name: "Frax Share",
                                address: "0xFc00000000000000000000000000000000000002"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            version: 3,
                            token: {
                                chainKey: "bsc",
                                decimals: 18,
                                symbol: "FXS",
                                name: "Frax Share",
                                address: "0x64445f0aecC51E94aD52d8AC56b7190e764E561a"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            version: 3,
                            token: {
                                chainKey: "arbitrum",
                                decimals: 18,
                                symbol: "FXS",
                                name: "Frax Share",
                                address: "0x64445f0aecC51E94aD52d8AC56b7190e764E561a"
                            }
                        },
                        sonic: {
                            eid: 30332,
                            version: 3,
                            token: {
                                chainKey: "sonic",
                                decimals: 18,
                                symbol: "FXS",
                                name: "Frax Share",
                                address: "0x64445f0aecC51E94aD52d8AC56b7190e764E561a"
                            }
                        },
                        base: {
                            eid: 30184,
                            version: 3,
                            token: {
                                chainKey: "base",
                                decimals: 18,
                                symbol: "FXS",
                                name: "Frax Share",
                                address: "0x0CEAC003B0d2479BebeC9f4b2EBAd0a803759bbf"
                            }
                        },
                        optimism: {
                            eid: 30111,
                            version: 3,
                            token: {
                                chainKey: "optimism",
                                decimals: 18,
                                symbol: "FXS",
                                name: "Frax Share",
                                address: "0x64445f0aecC51E94aD52d8AC56b7190e764E561a"
                            }
                        },
                        mode: {
                            eid: 30260,
                            version: 3,
                            token: {
                                chainKey: "mode",
                                decimals: 18,
                                symbol: "FXS",
                                name: "Frax Share",
                                address: "0x64445f0aecC51E94aD52d8AC56b7190e764E561a"
                            }
                        },
                        blast: {
                            eid: 30243,
                            version: 3,
                            token: {
                                chainKey: "blast",
                                decimals: 18,
                                symbol: "FXS",
                                name: "Frax Share",
                                address: "0x64445f0aecC51E94aD52d8AC56b7190e764E561a"
                            }
                        },
                        avalanche: {
                            eid: 30106,
                            version: 3,
                            token: {
                                chainKey: "avalanche",
                                decimals: 18,
                                symbol: "FXS",
                                name: "Frax Share",
                                address: "0x64445f0aecC51E94aD52d8AC56b7190e764E561a"
                            }
                        },
                        zkevm: {
                            eid: 30158,
                            version: 3,
                            token: {
                                chainKey: "zkevm",
                                decimals: 18,
                                symbol: "FXS",
                                name: "Frax Share",
                                address: "0x64445f0aecC51E94aD52d8AC56b7190e764E561a"
                            }
                        }
                    }
                })
            , ae = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinGeckoId: "fyde",
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            version: 3,
                            oftProxy: {
                                address: "0x72527FeC7d84764C405F28bD7E00E2693bbCB519"
                            },
                            token: {
                                chainKey: "ethereum",
                                decimals: 18,
                                symbol: "FYDE",
                                name: "Fyde",
                                address: "0x8a462E6a0051d006E33152FBEaDFB9A14198DE30"
                            }
                        },
                        base: {
                            eid: 30184,
                            version: 3,
                            token: {
                                chainKey: "base",
                                decimals: 18,
                                symbol: "FYDE",
                                name: "Fyde",
                                address: "0xAc80E841Cb4ed3f85436DE84EE1e92cDF00144E6"
                            }
                        }
                    }
                })
            , aa = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinGeckoId: "giza",
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            version: 3,
                            oftProxy: {
                                address: "0x0b0E004b88A9c37453ad75C450F1147E9DEc97c3"
                            },
                            token: {
                                chainKey: "ethereum",
                                decimals: 18,
                                symbol: "GIZA",
                                name: "Giza",
                                address: "0x590830dFDf9A3F68aFCDdE2694773dEBDF267774"
                            }
                        },
                        base: {
                            eid: 30184,
                            version: 3,
                            token: {
                                chainKey: "base",
                                decimals: 18,
                                symbol: "GIZA",
                                name: "Giza",
                                address: "0x590830dFDf9A3F68aFCDdE2694773dEBDF267774"
                            }
                        }
                    }
                })
            , ad = (0,
                X.C2)({
                    deployments: {
                        avalanche: {
                            eid: 106,
                            token: {
                                chainKey: "avalanche",
                                symbol: "GMBL",
                                address: "0x236626887687bf6a102269207f8f0A08549Ae4f4",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 110,
                            oftProxy: {
                                address: "0x236626887687bf6a102269207f8f0a08549ae4f4"
                            },
                            token: {
                                chainKey: "arbitrum",
                                symbol: "GMBL",
                                address: "0xE9A5aF50874c0ef2748b5DB70104B5ccb5557f6d",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 8,
                    version: 2,
                    fee: !1
                })
            , as = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinMarketCapId: 9103,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            version: 3,
                            oftProxy: {
                                address: "0x66BD9B4A80a603a2bBA8962bC210fe15A286426A"
                            },
                            token: {
                                chainKey: "ethereum",
                                decimals: 18,
                                symbol: "GMEE",
                                name: "GAMEE",
                                address: "0xD9016A907Dc0ECfA3ca425ab20B6b785B42F2373"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            oft: {
                                programId: "8PVbX6gmTSPsJJzUx6wewK2kBuhVQU7KmV5X8Dtvuh2y"
                            },
                            token: {
                                chainKey: "solana",
                                decimals: 9,
                                symbol: "GMEE",
                                name: "GAMEE",
                                address: "J324HJvWdpZoXXzckqs5h9BhhZDnp3vp86tnrDwoGwxC",
                                programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                            },
                            tokenEscrow: {
                                address: "7hGV1HJXxU9KmsG2Ka9XwzSYXVRjBvJdpMMUHpsZnBsG"
                            }
                        }
                    }
                })
            , ai = (0,
                X.C2)({
                    version: 3,
                    sharedDecimals: 6,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                address: "0xb5130F4767AB0ACC579f25a76e8f9E977CB3F948",
                                chainKey: "ethereum",
                                decimals: 18,
                                name: "Godcoin",
                                symbol: "GOD"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                address: "0xb5130F4767AB0ACC579f25a76e8f9E977CB3F948",
                                chainKey: "arbitrum",
                                decimals: 18,
                                name: "Godcoin",
                                symbol: "GOD"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                address: "0xb5130F4767AB0ACC579f25a76e8f9E977CB3F948",
                                chainKey: "base",
                                decimals: 18,
                                name: "Godcoin",
                                symbol: "GOD"
                            }
                        }
                    },
                    coinMarketCapId: 35489
                })
            , ao = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        sonic: {
                            eid: 30332,
                            token: {
                                chainKey: "sonic",
                                address: "0x9fDbC3f8Abc05Fa8f3Ad3C17D2F806c1230c4564",
                                decimals: 18,
                                name: "GOGGLES",
                                symbol: "GOGLZ"
                            }
                        },
                        fantom: {
                            eid: 30112,
                            token: {
                                chainKey: "fantom",
                                address: "0x662B3d319e693aA578EDd4BD8a5c9395BC49e9F4",
                                decimals: 18,
                                name: "GOGGLES",
                                symbol: "GOGLZ"
                            },
                            oftProxy: {
                                address: "0x95ae0a728375e293eface67ea94e4b50c3a7a0fd"
                            }
                        }
                    },
                    coinMarketCapId: 33438,
                    coinGeckoId: "goggles"
                })
            , an = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            token: {
                                chainKey: "ethereum",
                                symbol: "GOLD",
                                address: "0x9DeB0fc809955b79c85e82918E8586d3b7d2695a",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "GOLD",
                                address: "0x8b5e4C9a188b1A187f2D1E80b1c2fB17fA2922e1",
                                decimals: 18
                            }
                        },
                        base: {
                            eid: 184,
                            oftProxy: {
                                address: "0xdee1b2dab488b0d71677200ea1330fdced01e144"
                            },
                            token: {
                                chainKey: "base",
                                symbol: "GOLD",
                                address: "0xbeFD5C25A59ef2C1316c5A4944931171F30Cd3E4",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 6,
                    version: 2,
                    fee: !1,
                    coinMarketCapId: 27897
                })
            , ac = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        bsc: {
                            eid: 30102,
                            token: {
                                address: "0x30842a9c941d9DE3AF582c41ad12b11D776ba69e",
                                chainKey: "bsc",
                                decimals: 18,
                                name: "QnA3.AI Token",
                                symbol: "GPT"
                            },
                            oftProxy: {
                                address: "0xE99aE1BEB4aae669F9C4FFcbb90263685fB4C8C3"
                            }
                        },
                        islander: {
                            eid: 30330,
                            token: {
                                address: "0x3C7053d28D986385529d04FB19A5DEaD278C2d8F",
                                chainKey: "islander",
                                decimals: 18,
                                name: "QnA3.AI",
                                symbol: "GPT"
                            }
                        }
                    },
                    coinMarketCapId: 29576
                })
            , ar = (0,
                X.C2)({
                    version: 3,
                    sharedDecimals: 6,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                address: "0x64d3CAe387405d91f7b0D91fb1D824A281719500",
                                chainKey: "ethereum",
                                decimals: 18,
                                name: "GammaSwap",
                                symbol: "GS"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                address: "0xb08D8BeCAB1bf76A9Ce3d2d5fa946F65EC1d3e83",
                                chainKey: "arbitrum",
                                decimals: 18,
                                name: "GammaSwap",
                                symbol: "GS"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                address: "0xc4d44c155f95FD4E94600d191a4a01bb571dF7DF",
                                chainKey: "base",
                                decimals: 18,
                                name: "GammaSwap",
                                symbol: "GS"
                            }
                        },
                        sonic: {
                            eid: 30332,
                            token: {
                                chainKey: "sonic",
                                decimals: 18,
                                symbol: "GS",
                                name: "GammaSwap",
                                address: "0xf9F143705b2BBDE9b4ABfD0320F328aE59364f5e"
                            }
                        }
                    },
                    coinGeckoId: "gammaswap"
                })
            , am = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            oftProxy: {
                                address: "0x7bab349ba33d37ce6b56c117a9d0214e67806336"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "GUILD",
                                address: "0x83E9F223e1edb3486F876EE888d76bFba26c475A",
                                decimals: 18
                            }
                        },
                        polygon: {
                            eid: 109,
                            token: {
                                chainKey: "polygon",
                                symbol: "GUILD",
                                address: "0xAfF41DA975501E5b71848C975834341777D1a473",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 18,
                    version: 1,
                    fee: !1,
                    coinMarketCapId: 15664
                })
            , at = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        bsc: {
                            eid: 30102,
                            token: {
                                chainKey: "bsc",
                                address: "0x2E72393A57287b1A09857Db589B27bB0fd499922",
                                decimals: 18,
                                name: "Happy Cat",
                                symbol: "HAPPY"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            token: {
                                chainKey: "solana",
                                address: "HAPPYwgFcjEJDzRtfWE6tiHE9zGdzpNky2FvjPHsvvGZ",
                                decimals: 9,
                                name: "Happy Cat",
                                symbol: "HAPPY",
                                programId: V.H_
                            },
                            tokenEscrow: {
                                address: "FFsA3qxV3mLBXddKxPmkJMmHj6zN8dDWipGzHpp8jHUX"
                            },
                            oft: {
                                programId: "EB1c1XixvsRpRhPcQ9bBsyQuYkB8px5E85McfxfjHgvP"
                            }
                        }
                    },
                    coinMarketCapId: 33892,
                    coinGeckoId: "happycat-2"
                })
            , ab = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        kava: {
                            eid: 30177,
                            token: {
                                chainKey: "kava",
                                address: "0x25e9171C98Fc1924Fa9415CF50750274F0664764",
                                decimals: 6,
                                name: "Hard",
                                symbol: "HARD"
                            },
                            oftProxy: {
                                address: "0xaDc565C6bC2DcC268abDD4408Ac156E0D00fCb62"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            token: {
                                chainKey: "bsc",
                                address: "0x0f1E2C34f688d68Af730cBd0b79bb4B5519e00e0",
                                decimals: 6,
                                name: "Hard",
                                symbol: "HARD"
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x63fE3EB27e98DA740Ee24AB5cc1a17Ebd20fEC1C",
                                decimals: 6,
                                name: "Hard",
                                symbol: "HARD"
                            }
                        },
                        tron: {
                            eid: 30420,
                            token: {
                                chainKey: "tron",
                                address: "0xe1c8869751fef3aa3500c208fbc01b2b25737be1",
                                decimals: 6,
                                name: "Hard",
                                symbol: "HARD"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            token: {
                                chainKey: "solana",
                                name: "Hard",
                                symbol: "HARD",
                                address: "2cxr5BU6XVkDm7qaPFby5fBZaFDC1DyQvjjtb1Qkvnxp",
                                decimals: 6,
                                programId: V.H_
                            },
                            tokenEscrow: {
                                address: "FEMGnyMCmygJy2rJeiD4CJEtK93A3JAva1ScaqEq6ghN"
                            },
                            oft: {
                                programId: "5Bu6CcAgMVQ7nmY2faDADpY1No3iBAXDmohAJeuiGzSW"
                            }
                        }
                    },
                    coinMarketCapId: 7576,
                    coinGeckoId: "kava-lend"
                })
            , al = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            token: {
                                chainKey: "ethereum",
                                symbol: "HERA",
                                address: "0xA2c2C937333165d4c5f2dC5f31a43E1239FeCfeB",
                                decimals: 18
                            }
                        },
                        metis: {
                            eid: 151,
                            oftProxy: {
                                address: "0x9c598da94c840147c9a1eabe1ae8df750674ddf6"
                            },
                            token: {
                                chainKey: "metis",
                                symbol: "HERA",
                                address: "0x6F05709bc91Bad933346F9E159f0D3FdBc2c9DCE",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 8,
                    version: 2,
                    fee: !1,
                    coinMarketCapId: 19225
                })
            , ay = (0,
                X.C2)({
                    version: 3,
                    sharedDecimals: 6,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        base: {
                            eid: 30184,
                            token: {
                                address: "0x91dA780BC7f4B7Cf19ABE90411a2a296Ec5FF787",
                                chainKey: "base",
                                decimals: 18,
                                name: "Hive Intelligence",
                                symbol: "HINT"
                            },
                            oftProxy: {
                                address: "0xc8De92105c01Af3A58791CdBaf14f232621dbE17"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            token: {
                                address: "0x91dA780BC7f4B7Cf19ABE90411a2a296Ec5FF787",
                                chainKey: "bsc",
                                decimals: 18,
                                name: "Hive Intelligence",
                                symbol: "HINT"
                            }
                        }
                    },
                    coinMarketCapId: 35241
                })
            , af = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinMarketCapId: 2682,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            version: 3,
                            oftProxy: {
                                address: "0xC36c89Fa76336180fFbdD6847378CcE418Da4CF6"
                            },
                            token: {
                                chainKey: "ethereum",
                                decimals: 18,
                                symbol: "HOT",
                                name: "HoloToken",
                                address: "0x6c6EE5e31d828De241282B9606C8e98Ea48526E2"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            version: 3,
                            token: {
                                chainKey: "arbitrum",
                                decimals: 18,
                                symbol: "HOT",
                                name: "HoloToken",
                                address: "0x17E1E5c6bc9ebb11647C94e1c5e3Ba619F2781ea"
                            }
                        },
                        base: {
                            eid: 30184,
                            version: 3,
                            token: {
                                chainKey: "base",
                                decimals: 18,
                                symbol: "HOT",
                                name: "HoloToken",
                                address: "0xf3dD141109Dfe8e4c006F88a2A8747a086e7C1f8"
                            }
                        }
                    }
                })
            , aC = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinMarketCapId: 36576,
                    deployments: {
                        bsc: {
                            eid: 30102,
                            version: 3,
                            token: {
                                chainKey: "bsc",
                                decimals: 6,
                                symbol: "HUMA",
                                name: "Huma Finance",
                                address: "0x92516e0DDf1dDBF7FAB1b79CaC26689fDC5ba8e6"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            oft: {
                                programId: "BRGv9mxfDeZWxJWPUfX687r9f4Kmg1Qhhq5C9cBSKaM"
                            },
                            token: {
                                chainKey: "solana",
                                decimals: 6,
                                symbol: "HUMA",
                                name: "Huma Finance",
                                address: "HUMA1821qVDKta3u2ovmfDQeW2fSQouSKE8fkF44wvGw",
                                programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                            },
                            tokenEscrow: {
                                address: "Eae9HsnubBNCJiTyMBVhoiynbRBqpD4GbFcPWwscNwRQ"
                            }
                        }
                    }
                })
            , aD = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0x12c26138b666360AB2B7A1B149dF9Cf6642CDfBf",
                                decimals: 18,
                                symbol: "ICL"
                            }
                        },
                        mode: {
                            eid: 30260,
                            token: {
                                chainKey: "mode",
                                address: "0x95177295a394f2b9b04545fff58f4af0673e839d",
                                decimals: 18,
                                symbol: "ICL"
                            },
                            oftProxy: {
                                address: "0xa52E2bf962b714071064dE9b5eea792ad39f4250"
                            }
                        }
                    },
                    coinGeckoId: "ironclad-token"
                })
            , aE = (0,
                X.C2)({
                    deployments: {
                        bsc: {
                            eid: 102,
                            oftProxy: {
                                address: "0xcF7d4b692c478b77aff32BB1493C54C84F27f85A"
                            },
                            token: {
                                chainKey: "bsc",
                                symbol: "IDIA",
                                address: "0x0b15Ddf19D47E6a86A56148fb4aFFFc6929BcB89",
                                decimals: 18
                            }
                        },
                        polygon: {
                            eid: 109,
                            token: {
                                chainKey: "polygon",
                                symbol: "IDIA",
                                address: "0x8255775bea425f910044ddFb7681D6d87fD5489d",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "IDIA",
                                address: "0x6Db8b088c4d41d622B44CD81B900bA690f2d496C",
                                decimals: 18
                            }
                        },
                        mantle: {
                            eid: 181,
                            token: {
                                chainKey: "mantle",
                                symbol: "IDIA",
                                address: "0x08D1099101De99B14C68975222A235b63e6B8C91",
                                decimals: 18
                            }
                        },
                        linea: {
                            eid: 183,
                            token: {
                                chainKey: "linea",
                                symbol: "IDIA",
                                address: "0x1044F1F2e208e213FBdFfeEbDc4eE0d194307438",
                                decimals: 18
                            }
                        },
                        base: {
                            eid: 184,
                            token: {
                                chainKey: "base",
                                symbol: "IDIA",
                                address: "0x8255775bea425f910044ddFb7681D6d87fD5489d",
                                decimals: 18
                            }
                        },
                        taiko: {
                            eid: 290,
                            token: {
                                chainKey: "taiko",
                                symbol: "IDIA",
                                address: "0x23aaB921D8283f099bc3FE3741Cb369B1ee095a8",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 8,
                    version: 2,
                    fee: !1,
                    coinMarketCapId: 10933
                })
            , aA = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinMarketCapId: 9281,
                    deployments: {
                        base: {
                            eid: 30184,
                            version: 3,
                            token: {
                                chainKey: "base",
                                decimals: 18,
                                symbol: "IMO",
                                name: "IMO",
                                address: "0x5A7a2bf9fFae199f088B25837DcD7E115CF8E1bb"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            oft: {
                                programId: "Cdc7bibYFHbPMqYDKxAiSiViW3mTXBX9q7FidkXLe2qv"
                            },
                            token: {
                                chainKey: "solana",
                                decimals: 9,
                                symbol: "IMO",
                                name: "IMO",
                                address: "27oVJFWGCUpTZcrJyDsd9Ca13WNXFNcHu648XVxsGCnS",
                                programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                            },
                            tokenEscrow: {
                                address: "5PFZZ1EK8HYJsHmna9AMDXWb6NXHymauKhqocyLdMrr3"
                            }
                        }
                    }
                })
            , ah = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            oftProxy: {
                                address: "0x8D279274789CceC8af94a430A5996eAaCE9609A9"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "INSP",
                                address: "0x186eF81fd8E77EEC8BfFC3039e7eC41D5FC0b457",
                                decimals: 18
                            }
                        },
                        bsc: {
                            eid: 102,
                            token: {
                                chainKey: "bsc",
                                symbol: "INSP",
                                address: "0x8D279274789CceC8af94a430A5996eAaCE9609A9",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 8,
                    version: 2,
                    fee: !1,
                    coinMarketCapId: 28610
                })
            , ax = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0x42e07fA3d31190731368Ca2F88D12D80139DCa42",
                                decimals: 18,
                                name: "INT OS",
                                symbol: "INTOS"
                            },
                            oftProxy: {
                                address: "0xd97E1d6051a2c36Fd9CfD2E1640C699C29724860"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            token: {
                                chainKey: "solana",
                                address: "7YKfh8hFbgHkwtAogfSWjsEGVNH5e1DoFF9Dj31U9CMe",
                                decimals: 6,
                                name: "INT OS",
                                symbol: "INTOS",
                                programId: V.H_
                            },
                            tokenEscrow: {
                                address: "CkWH4bb2hyZW5nHbzbH1eU3Wr9ATbSHkUkzoKaT7uRcw"
                            },
                            oft: {
                                programId: "9G1nFUBh9sqvyHJByFtTWY1enYN81Z4f2VjeEzX6nZrb"
                            }
                        }
                    },
                    coinMarketCapId: 35160,
                    coinGeckoId: "int-os"
                })
            , aB = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            oftProxy: {
                                address: "0x02b88b31492c19d9e3145934cdb63a8a9b5b4b10"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "IRL",
                                address: "0xa80221D067603e30060F75E2458AA361f8eE5402",
                                decimals: 18
                            }
                        },
                        bsc: {
                            eid: 102,
                            token: {
                                chainKey: "bsc",
                                symbol: "IRL",
                                address: "0xa80221D067603e30060F75E2458AA361f8eE5402",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 8,
                    version: 2,
                    fee: !1,
                    coinMarketCapId: 20858
                })
            , aF = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x157a6df6b74f4e5e45af4e4615fde7b49225a662",
                                decimals: 18,
                                name: "ISLAND",
                                symbol: "ISLAND"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0x157a6df6b74f4e5e45af4e4615fde7b49225a662",
                                decimals: 18,
                                name: "ISLAND",
                                symbol: "ISLAND"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            token: {
                                chainKey: "solana",
                                name: "ISLAND",
                                symbol: "ISLAND",
                                address: "HX6zNkjJ7zy653VoDWzbaYpSg7BrgLfq4i4RA7D5nkkz",
                                decimals: 6,
                                programId: V.H_
                            },
                            tokenEscrow: {
                                address: "ASQJRNiXHQ4wYPewkXq7RFcY1nmPZB696JoQynbSjPpB"
                            },
                            oft: {
                                programId: "FTPEhpxj7q6tB7SAgoLawurF1zvWxfAoor9rLEGspPop"
                            }
                        }
                    },
                    coinMarketCapId: 34794,
                    coinGeckoId: "island-token"
                })
            , ak = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            oftProxy: {
                                address: "0x8cfa44e930B7743123738Eb2d7e78beaA964732e"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "ITP",
                                address: "0x2b1D36f5B61AdDAf7DA7ebbd11B35FD8cfb0DE31",
                                decimals: 18
                            }
                        },
                        bsc: {
                            eid: 102,
                            token: {
                                chainKey: "bsc",
                                symbol: "ITP",
                                address: "0x2b1D36f5B61AdDAf7DA7ebbd11B35FD8cfb0DE31",
                                decimals: 18
                            }
                        },
                        avalanche: {
                            eid: 106,
                            token: {
                                chainKey: "avalanche",
                                symbol: "ITP",
                                address: "0x2b1D36f5B61AdDAf7DA7ebbd11B35FD8cfb0DE31",
                                decimals: 18
                            }
                        },
                        polygon: {
                            eid: 109,
                            token: {
                                chainKey: "polygon",
                                symbol: "ITP",
                                address: "0x2b1D36f5B61AdDAf7DA7ebbd11B35FD8cfb0DE31",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "ITP",
                                address: "0x2b1D36f5B61AdDAf7DA7ebbd11B35FD8cfb0DE31",
                                decimals: 18
                            }
                        },
                        optimism: {
                            eid: 111,
                            token: {
                                chainKey: "optimism",
                                symbol: "ITP",
                                address: "0x2b1D36f5B61AdDAf7DA7ebbd11B35FD8cfb0DE31",
                                decimals: 18
                            }
                        },
                        fantom: {
                            eid: 112,
                            token: {
                                chainKey: "fantom",
                                symbol: "ITP",
                                address: "0x2b1D36f5B61AdDAf7DA7ebbd11B35FD8cfb0DE31",
                                decimals: 18
                            }
                        },
                        zkevm: {
                            eid: 158,
                            token: {
                                chainKey: "zkevm",
                                symbol: "ITP",
                                address: "0x2b1D36f5B61AdDAf7DA7ebbd11B35FD8cfb0DE31",
                                decimals: 18
                            }
                        },
                        zksync: {
                            eid: 165,
                            token: {
                                chainKey: "zksync",
                                symbol: "ITP",
                                address: "0xd03465338226ea0178337F4abb16FdD6df529F57",
                                decimals: 18
                            }
                        },
                        linea: {
                            eid: 183,
                            token: {
                                chainKey: "linea",
                                symbol: "ITP",
                                address: "0x2b1D36f5B61AdDAf7DA7ebbd11B35FD8cfb0DE31",
                                decimals: 18
                            }
                        },
                        base: {
                            eid: 184,
                            token: {
                                chainKey: "base",
                                symbol: "ITP",
                                address: "0x2b1D36f5B61AdDAf7DA7ebbd11B35FD8cfb0DE31",
                                decimals: 18
                            }
                        },
                        scroll: {
                            eid: 214,
                            token: {
                                chainKey: "scroll",
                                symbol: "ITP",
                                address: "0x2b1D36f5B61AdDAf7DA7ebbd11B35FD8cfb0DE31",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 8,
                    version: 2,
                    fee: !1,
                    coinMarketCapId: 22877
                })
            , ap = (0,
                X.C2)({
                    deployments: {
                        bsc: {
                            eid: 102,
                            token: {
                                chainKey: "bsc",
                                symbol: "JOE",
                                address: "0x371c7ec6D8039ff7933a2AA28EB827Ffe1F52f07",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "JOE",
                                address: "0x371c7ec6D8039ff7933a2AA28EB827Ffe1F52f07",
                                decimals: 18
                            }
                        },
                        avalanche: {
                            eid: 106,
                            oftProxy: {
                                address: "0x371c7ec6D8039ff7933a2AA28EB827Ffe1F52f07"
                            },
                            token: {
                                chainKey: "avalanche",
                                symbol: "JOE",
                                address: "0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd",
                                decimals: 18
                            }
                        },
                        mantle: {
                            eid: 181,
                            token: {
                                chainKey: "mantle",
                                symbol: "JOE",
                                address: "0x371c7ec6D8039ff7933a2AA28EB827Ffe1F52f07",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 8,
                    version: 2,
                    fee: !0,
                    coinMarketCapId: 11396
                })
            , aK = (0,
                X.C2)({
                    version: 3,
                    sharedDecimals: 6,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                address: "0x3f80B1c54Ae920Be41a77f8B902259D48cf24cCf",
                                chainKey: "ethereum",
                                decimals: 18,
                                name: "KERNEL",
                                symbol: "KERNEL"
                            },
                            oftProxy: {
                                address: "0x2A1D74de3027ccE18d31011518C571130a4cd513"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            token: {
                                address: "0x9eCaf80c1303CCA8791aFBc0AD405c8a35e8d9f1",
                                chainKey: "bsc",
                                decimals: 18,
                                name: "KERNEL",
                                symbol: "KERNEL"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                address: "0x6E401189c8A68D05562c9Bab7f674f910821EAcF",
                                chainKey: "arbitrum",
                                decimals: 18,
                                name: "KERNEL",
                                symbol: "KERNEL"
                            }
                        }
                    }
                })
            , au = (0,
                X.C2)({
                    strict: true,
                    limit: false,
                    version: 3,
                    fee: true,
                    sharedDecimals: 6,
                    coinMarketCapId: 36053,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            version: 3,
                            token: {
                                chainKey: "ethereum",
                                decimals: 18,
                                symbol: "OL",
                                name: "OPENLOOT",
                                address: "0x1F57da732A77636D913C9a75d685B26CC85DCC3A"
                            },
                            oftProxy: {
                                address: "0x3f160760535Eb715d5809a26cF55408A2d9844c1"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            version: 3,
                            token: {
                                chainKey: "bsc",
                                decimals: 18,
                                symbol: "OL",
                                name: "OPENLOOT",
                                address: "0x3f160760535Eb715d5809a26cF55408A2d9844c1"
                            }
                        }
                    }
                })
            , aT = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x285c48f6bEB6B7476bC05B2b8Cf3FAb93578e466",
                                decimals: 18,
                                name: "KIM",
                                symbol: "KIM"
                            }
                        },
                        mode: {
                            eid: 30260,
                            token: {
                                chainKey: "mode",
                                address: "0x6863fb62Ed27A9DdF458105B507C15b5d741d62e",
                                decimals: 18,
                                name: "KIM Token",
                                symbol: "KIM"
                            },
                            oftProxy: {
                                address: "0xf9eb1e5c227d55ac2dfd71f0d85d128c3fd6cd83"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0x5dC25aA049837B696d1dc0F966aC8DF1491f819B",
                                decimals: 18,
                                name: "KIM",
                                symbol: "KIM"
                            }
                        },
                        optimism: {
                            eid: 30111,
                            token: {
                                chainKey: "optimism",
                                address: "0x5D1942345D63562fD38d17C28Dcd22e7b3E9Cfb4",
                                decimals: 18,
                                name: "KIM",
                                symbol: "KIM"
                            }
                        }
                    },
                    coinMarketCapId: 31455
                })
            , aS = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x288741b45AD4042f7b124E38b53cEc5E9ccA0376",
                                decimals: 18,
                                name: "KOLZ",
                                symbol: "KOLZ"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0x50CE4129Ca261CCDe4EB100c170843c2936Bc11b",
                                decimals: 18,
                                name: "KOLZ",
                                symbol: "KOLZ"
                            }
                        }
                    },
                    coinMarketCapId: 34067,
                    coinGeckoId: "kolz"
                })
            , av = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinMarketCapId: 36450,
                    deployments: {
                        klaytn: {
                            eid: 30150,
                            version: 3,
                            oftProxy: {
                                address: "0x17d9939Af659dc3fD1898C0D783ed07347DE345f"
                            },
                            token: {
                                chainKey: "klaytn",
                                decimals: 18,
                                symbol: "LAIR",
                                name: "Lair",
                                address: "0xD70C7D511560493C79DF607076fB863f5c8A50b0"
                            }
                        },
                        bera: {
                            eid: 30362,
                            version: 3,
                            oftProxy: {
                                address: "0xEeeD1e4d748E80beA27F03EA4143374F9EfFc2e2"
                            },
                            token: {
                                chainKey: "bera",
                                decimals: 18,
                                symbol: "LAIR",
                                name: "Lair",
                                address: "0xf3530788DEB3d21E8fA2c3CBBF93317FB38a0D3C"
                            }
                        }
                    }
                })
            , aP = (0,
                X.C2)({
                    version: 3,
                    sharedDecimals: 6,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                address: "0x8236a87084f8B84306f72007F36F2618A5634494",
                                chainKey: "ethereum",
                                decimals: 8,
                                name: "Lombard Staked Bitcoin",
                                symbol: "LBTC"
                            },
                            oftProxy: {
                                address: "0x1290A6b480f7eF14925229fdB66f5680aD8F44AD"
                            },
                            executorLzReceiveOption: {
                                gasLimit: 2e5
                            }
                        },
                        bera: {
                            eid: 30362,
                            token: {
                                address: "0xecAc9C5F704e954931349Da37F60E39f515c11c1",
                                chainKey: "bera",
                                decimals: 8,
                                name: "Lombard Staked Bitcoin",
                                symbol: "LBTC"
                            },
                            oftProxy: {
                                address: "0x630e12D53D4E041b8C5451aD035Ea841E08391d7"
                            },
                            executorLzReceiveOption: {
                                gasLimit: 2e5
                            }
                        },
                        morph: {
                            eid: 30322,
                            version: 3,
                            oftProxy: {
                                address: "0x2e1871Fc8ac793dCf2A74Ce004eE21D913763565"
                            },
                            token: {
                                chainKey: "morph",
                                decimals: 8,
                                symbol: "LBTC",
                                name: "Lombard Staked Bitcoin",
                                address: "0xecAc9C5F704e954931349Da37F60E39f515c11c1"
                            }
                        }
                    },
                    coinMarketCapId: 33652
                })
            , aI = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            oftProxy: {
                                address: "0xc31813C38b32C0f826c2dbF3360d5899740c9669"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "LIF3",
                                address: "0x7138Eb0d563f3F6722500936A11DcAe99D738A2c",
                                decimals: 18
                            }
                        },
                        bsc: {
                            eid: 102,
                            token: {
                                chainKey: "bsc",
                                symbol: "LIF3",
                                address: "0x336f374198c872Ba760e85af9c6331C3c5A535d3",
                                decimals: 18
                            }
                        },
                        polygon: {
                            eid: 109,
                            token: {
                                chainKey: "polygon",
                                symbol: "LIF3",
                                address: "0x110B25D2B21eE73eB401F3aE7833f7072912A0Bf",
                                decimals: 18
                            }
                        },
                        fantom: {
                            eid: 112,
                            token: {
                                chainKey: "fantom",
                                symbol: "LIF3",
                                address: "0x5e074C28149cC35c1e5fbC79d8A6ea688dba2314",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 8,
                    version: 2,
                    fee: !0,
                    coinMarketCapId: 20611
                })
            , ag = (0,
                X.C2)({
                    fee: !0,
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            version: 3,
                            token: {
                                chainKey: "ethereum",
                                symbol: "LILY",
                                name: "Lily's Coin",
                                address: "0x7ce89243Cc0d9e746609c57845ECCbD9bB4B7315",
                                decimals: 18
                            },
                            oftProxy: {
                                address: "0xB257f39eD1a8E195FF2cF69d477D53535e38160D"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            token: {
                                chainKey: "solana",
                                symbol: "LILY",
                                address: "Co5WwGeZfpfqGE1tUyAp1SBjcmumoY9sNN99MXRbX98K",
                                decimals: 9,
                                programId: V.H_
                            },
                            tokenEscrow: {
                                address: "FxDVE3zwsZ9aD5SWikLjrRhHyD16nu9WKKZzreY6cy7v"
                            },
                            oft: {
                                programId: "LiLYm6Hbew7mXyaRsqg8U5dCguFzwsp4QLDzjAnyAy7"
                            }
                        }
                    },
                    coinMarketCapId: 33718
                })
            , aM = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            oftProxy: {
                                address: "0xfcc421b4f8372d84124ea16a6146bc1c08d4c69d"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "LSHARE",
                                address: "0x8E01397163b21F64ceC1f06cA6cC7d9aA8F718e9",
                                decimals: 18
                            }
                        },
                        bsc: {
                            eid: 102,
                            token: {
                                chainKey: "bsc",
                                symbol: "LSHARE",
                                address: "0x0c08638473CAfbCa3beb113616A1871F4bfaD4f9",
                                decimals: 18
                            }
                        },
                        polygon: {
                            eid: 109,
                            token: {
                                chainKey: "polygon",
                                symbol: "LSHARE",
                                address: "0x5eAB32Fe1D104cE0C5436feDC3433B646096e47C",
                                decimals: 18
                            }
                        },
                        fantom: {
                            eid: 112,
                            token: {
                                chainKey: "fantom",
                                symbol: "LSHARE",
                                address: "0x8fF27b58E1d969bEFC9c8aEAE93A6EB7E2250c8f",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 8,
                    version: 2,
                    fee: !0
                })
            , aU = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                address: "0x7C1156E515aA1A2E851674120074968C905aAF37",
                                chainKey: "ethereum",
                                decimals: 18,
                                name: "Level USD",
                                symbol: "lvlUSD"
                            },
                            oftProxy: {
                                address: "0x2F12D09333a6BE8CC7c2d3E11a83deF02cf0CbfA"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                address: "0xa8Cf99f2572500A9Df5cd794c0e24F132448addE",
                                chainKey: "base",
                                decimals: 18,
                                name: "Level USD",
                                symbol: "lvlUSD"
                            }
                        }
                    },
                    coinGeckoId: "1127"
                })
            , aR = (0,
                X.C2)({
                    version: 3,
                    sharedDecimals: 6,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                address: "0xc690F7C7FcfFA6a82b79faB7508c466FEfdfc8c5",
                                chainKey: "ethereum",
                                decimals: 18,
                                name: "Lympo tokens",
                                symbol: "LYM"
                            },
                            oftProxy: {
                                address: "0x2Dc2650cE5A4cc275403163F4A7681d7ec8Ae8F0"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            token: {
                                address: "3pYRq2JDB7kgj8VQajbkvxvEp7oYDzvsohL4FmjZiUow",
                                chainKey: "solana",
                                decimals: 9,
                                name: "Lympo tokens",
                                symbol: "LYM",
                                programId: V.H_
                            },
                            oft: {
                                programId: "FkRsGG1Au3MdbsKkNdZBXJq1U5R6A84uWv3ACGqXkmSU"
                            },
                            tokenEscrow: {
                                address: "EU49AR9WTT3nw4xHnBRmjJByFhBknsSP2Li7iMegTwkj"
                            }
                        }
                    },
                    coinMarketCapId: 2554
                })
            , aG = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        bsc: {
                            eid: 30102,
                            token: {
                                chainKey: "bsc",
                                address: "0x6A661312938D22A2A0e27F585073E4406903990a",
                                decimals: 18,
                                name: "MAHA.xyz",
                                symbol: "MAHA"
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x745407c86DF8DB893011912d3aB28e68B62E49B0",
                                decimals: 18,
                                name: "MahaDAO",
                                symbol: "MAHA"
                            },
                            oftProxy: {
                                address: "0x3a7b708e71ff72506afa674ea14881e39ce9fde2"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0x554bba833518793056CF105E66aBEA330672c0dE",
                                decimals: 18,
                                name: "MAHA.xyz",
                                symbol: "MAHA"
                            }
                        },
                        linea: {
                            eid: 30183,
                            token: {
                                chainKey: "linea",
                                address: "0x6A661312938D22A2A0e27F585073E4406903990a",
                                decimals: 18,
                                name: "MAHA.xyz",
                                symbol: "MAHA"
                            }
                        }
                    },
                    coinMarketCapId: 8043
                })
            , aH = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            token: {
                                chainKey: "ethereum",
                                symbol: "MAV",
                                address: "0x7448c7456a97769F6cD04F1E83A4a23cCdC46aBD",
                                decimals: 18
                            }
                        },
                        bsc: {
                            eid: 102,
                            token: {
                                chainKey: "bsc",
                                symbol: "MAV",
                                address: "0xd691d9a68C887BDF34DA8c36f63487333ACfD103",
                                decimals: 18
                            }
                        },
                        zksync: {
                            eid: 165,
                            token: {
                                chainKey: "zksync",
                                symbol: "MAV",
                                address: "0x787c09494Ec8Bcb24DcAf8659E7d5D69979eE508",
                                decimals: 18
                            }
                        },
                        base: {
                            eid: 184,
                            token: {
                                chainKey: "base",
                                symbol: "MAV",
                                address: "0x64b88c73A5DfA78D1713fE1b4c69a22d7E0faAa7",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "MAV",
                                address: "0x7448c7456a97769f6cd04f1e83a4a23ccdc46abd",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 18,
                    version: 1,
                    fee: !1,
                    coinMarketCapId: 18037
                })
            , aL = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            oftProxy: {
                                address: "0xE6C2B672B3eB64A1F460AdcD9676a3B6c67abD4D"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "MAVIA",
                                address: "0x24fcFC492C1393274B6bcd568ac9e225BEc93584",
                                decimals: 18
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                symbol: "MAVIA",
                                address: "0x24fcFC492C1393274B6bcd568ac9e225BEc93584",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !1,
                    coinMarketCapId: 28829
                })
            , aN = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x4041381e947CFD3D483d67a25C6aa9Dc924250c5",
                                decimals: 18,
                                name: "Manta mBTC",
                                symbol: "Manta mBTC"
                            }
                        },
                        manta: {
                            eid: 30217,
                            token: {
                                chainKey: "manta",
                                address: "0x1468177DbCb2a772F3d182d2F1358d442B553089",
                                decimals: 18,
                                name: "Manta mBTC",
                                symbol: "Manta mBTC"
                            },
                            oftProxy: {
                                address: "0x560eff0dd24c90f6a090a9dd5b64701de6416627"
                            }
                        }
                    },
                    coinGeckoId: "manta-mbtc"
                })
            , aO = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    fee: !0,
                    limit: !1,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0xc9E503562d0Db0A2629288a5D3b1c94Ea7741869",
                                decimals: 18,
                                name: "MetalCore",
                                symbol: "MCG"
                            },
                            oftProxy: {
                                address: "0x3bE3F3efc077F8dd519b052FbA78515470bc4567"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            token: {
                                chainKey: "solana",
                                symbol: "MCG",
                                address: "H1nf1F4eoHtiWiSBwLYAhJvAb7CDFY32eYA64mhL8Rp",
                                decimals: 9,
                                name: "MetalCore",
                                programId: V.H_
                            },
                            tokenEscrow: {
                                address: "8dAbc7hyaao8spHujyHuQDsChHizfRvBcX8d6qJbahVk"
                            },
                            oft: {
                                programId: "3Szn1pnBpxHtcAYpgtrToyAgqf4sengDQiqx3LH9cg7i"
                            }
                        }
                    },
                    coinMarketCapId: 31165,
                    coinGeckoId: "metalcore"
                })
            , aw = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0x813f392d21a55819Be5E78157BFCdBD25530f4E8",
                                decimals: 18,
                                name: "Melania Meme",
                                symbol: "MELANIA"
                            }
                        },
                        solana: {
                            eid: 30168,
                            token: {
                                chainKey: "solana",
                                address: "FUAfBo2jgks6gB4Z4LfZkqSZgzNucisEHqnNebaRxM1P",
                                decimals: 6,
                                name: "Melania Meme",
                                symbol: "MELANIA",
                                programId: V.H_
                            },
                            tokenEscrow: {
                                address: "fyvenCCW6pigsS3LHSuezxMPptmpNBDTNJ62pf5FDMV"
                            },
                            oft: {
                                programId: "HRPXLCqspQocTjfcX4rvAPaY9q6Gwb1rrD3xXWrfJWdW"
                            }
                        }
                    },
                    coinMarketCapId: 35347
                })
            , aW = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x8CdF550C04Bc9B9F10938368349C9c8051A772b6",
                                decimals: 18,
                                name: "Manta mETH",
                                symbol: "Manta mETH"
                            }
                        },
                        manta: {
                            eid: 30217,
                            token: {
                                chainKey: "manta",
                                address: "0xACCBC418a994a27a75644d8d591afC22FaBA594e",
                                decimals: 18,
                                name: "Manta mETH",
                                symbol: "Manta mETH"
                            },
                            oftProxy: {
                                address: "0x0dd209540aab669bd5bfee6e1f3b12595939c55e"
                            }
                        }
                    },
                    coinGeckoId: "manta-meth"
                })
            , aX = (0,
                X.C2)({
                    deployments: {
                        bsc: {
                            eid: 102,
                            token: {
                                chainKey: "bsc",
                                symbol: "METIS",
                                address: "0xceCB301c2e2A04dD631428C386DD21db70716F8a",
                                decimals: 18
                            }
                        },
                        avalanche: {
                            eid: 106,
                            token: {
                                chainKey: "avalanche",
                                symbol: "METIS",
                                address: "0xceCB301c2e2A04dD631428C386DD21db70716F8a",
                                decimals: 18
                            }
                        },
                        metis: {
                            eid: 151,
                            token: {
                                chainKey: "metis",
                                symbol: "METIS",
                                name: "Metis",
                                decimals: 18
                            },
                            oftNative: {
                                address: "0xceCB301c2e2A04dD631428C386DD21db70716F8a"
                            }
                        }
                    },
                    sharedDecimals: 6,
                    version: 2,
                    fee: !0,
                    coinMarketCapId: 9640
                })
            , aV = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            oftProxy: {
                                address: "0x439a5f0f5E8d149DDA9a0Ca367D4a8e4D6f83C10"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "MIM",
                                address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
                                decimals: 18
                            }
                        },
                        bsc: {
                            eid: 102,
                            oftProxy: {
                                address: "0x41d5a04b4e03dc27dc1f5c5a576ad2187bc601af"
                            },
                            token: {
                                chainKey: "bsc",
                                symbol: "MIM",
                                address: "0xfE19F0B51438fd612f6FD59C1dbB3eA319f433Ba",
                                decimals: 18
                            }
                        },
                        avalanche: {
                            eid: 106,
                            oftProxy: {
                                address: "0xb3a66127ccb143bfb01d3aecd3ce9d17381b130d"
                            },
                            token: {
                                chainKey: "avalanche",
                                symbol: "MIM",
                                address: "0x130966628846BFd36ff31a822705796e8cb8C18D",
                                decimals: 18
                            }
                        },
                        polygon: {
                            eid: 109,
                            oftProxy: {
                                address: "0xca0d86afc25c57a6d2acdf331cabd4c9cee05533"
                            },
                            token: {
                                chainKey: "polygon",
                                symbol: "MIM",
                                address: "0x49a0400587A7F65072c87c4910449fDcC5c47242",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 110,
                            oftProxy: {
                                address: "0x957a8af7894e76e16db17c2a913496a4e60b7090"
                            },
                            token: {
                                chainKey: "arbitrum",
                                symbol: "MIM",
                                address: "0xFEa7a6a0B346362BF88A9e4A88416B77a57D6c2A",
                                decimals: 18
                            }
                        },
                        optimism: {
                            eid: 111,
                            oftProxy: {
                                address: "0x48686c24697fe9042531b64d792304e514e74339"
                            },
                            token: {
                                chainKey: "optimism",
                                symbol: "MIM",
                                address: "0xB153FB3d196A8eB25522705560ac152eeEc57901",
                                decimals: 18
                            }
                        },
                        fantom: {
                            eid: 112,
                            oftProxy: {
                                address: "0xc5c01568a3b5d8c203964049615401aaf0783191"
                            },
                            token: {
                                chainKey: "fantom",
                                symbol: "MIM",
                                address: "0x82f0B8B456c1A451378467398982d4834b6829c1",
                                decimals: 18
                            }
                        },
                        moonriver: {
                            eid: 167,
                            oftProxy: {
                                address: "0xef2dbdfec54c466f7ff92c9c5c75abb6794f0195"
                            },
                            token: {
                                chainKey: "moonriver",
                                symbol: "MIM",
                                address: "0x0caE51e1032e8461f4806e26332c030E34De3aDb",
                                decimals: 18
                            }
                        },
                        kava: {
                            eid: 177,
                            oftProxy: {
                                address: "0xc7a161cfd0e133d289b13692b636b8e8b5cd8d8c"
                            },
                            token: {
                                chainKey: "kava",
                                symbol: "MIM",
                                address: "0x471EE749bA270eb4c1165B5AD95E614947f6fCeb",
                                decimals: 18
                            }
                        },
                        base: {
                            eid: 184,
                            oftProxy: {
                                address: "0x4035957323fc05ad9704230e3dc1e7663091d262"
                            },
                            token: {
                                chainKey: "base",
                                symbol: "MIM",
                                address: "0x4A3A6Dd60A34bB2Aba60D73B4C88315E9CeB6A3D",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 8,
                    version: 2,
                    fee: !1,
                    coinMarketCapId: 162
                })
            , az = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            token: {
                                chainKey: "ethereum",
                                symbol: "mkUSD",
                                address: "0x4591DBfF62656E7859Afe5e45f6f47D3669fBB28",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "mkUSD",
                                address: "0x4591DBfF62656E7859Afe5e45f6f47D3669fBB28",
                                decimals: 18
                            }
                        },
                        optimism: {
                            eid: 111,
                            token: {
                                chainKey: "optimism",
                                symbol: "mkUSD",
                                address: "0x4591DBfF62656E7859Afe5e45f6f47D3669fBB28",
                                decimals: 18
                            }
                        },
                        base: {
                            eid: 184,
                            token: {
                                chainKey: "base",
                                symbol: "mkUSD",
                                address: "0x4591DBfF62656E7859Afe5e45f6f47D3669fBB28",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 18,
                    version: 1,
                    fee: !1,
                    coinMarketCapId: 28094
                })
            , aZ = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinMarketCapId: 36078,
                    deployments: {
                        bsc: {
                            eid: 30102,
                            version: 3,
                            token: {
                                chainKey: "bsc",
                                decimals: 18,
                                symbol: "MNSRY",
                                name: "MANSORY",
                                address: "0x0fCfE33b46E5B21e5E96B722d4c85510198F9255"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            oft: {
                                programId: "5Wk2dwSDQXeFdQzFQ4Pck8qtSshDxDHxRc7ZTWUQTAn7"
                            },
                            token: {
                                chainKey: "solana",
                                decimals: 6,
                                symbol: "MNSRY",
                                name: "MANSORY",
                                address: "1xdtu7y3LkkrVCAbm5KGKfYzq1qgKhxxk5AaJBqpump",
                                programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                            },
                            tokenEscrow: {
                                address: "7aogRzk1gTNYBsL7VwfYHUkDGfLGKLspTyQPjZhyVPzE"
                            }
                        }
                    }
                })
            , aQ = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinMarketCapId: 31526,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            version: 3,
                            oftProxy: {
                                address: "0x2B11834Ed1FeAEd4b4b3a86A6F571315E25A884D"
                            },
                            token: {
                                chainKey: "ethereum",
                                decimals: 18,
                                symbol: "MOCA",
                                name: "Moca",
                                address: "0xF944e35f95E819E752f3cCB5Faf40957d311e8c5"
                            }
                        },
                        base: {
                            eid: 30184,
                            version: 3,
                            token: {
                                chainKey: "base",
                                decimals: 18,
                                symbol: "MOCA",
                                name: "Moca",
                                address: "0x2B11834Ed1FeAEd4b4b3a86A6F571315E25A884D"
                            }
                        }
                    }
                })
            , aY = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x084382D1cc4f4DFD1769b1cC1Ac2A9b1f8365e90",
                                decimals: 18,
                                name: "MODE",
                                symbol: "MODE"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0x084382D1cc4f4DFD1769b1cC1Ac2A9b1f8365e90",
                                decimals: 18,
                                name: "Mode",
                                symbol: "MODE"
                            }
                        },
                        optimism: {
                            eid: 30111,
                            token: {
                                chainKey: "optimism",
                                address: "0x084382D1cc4f4DFD1769b1cC1Ac2A9b1f8365e90",
                                decimals: 18,
                                name: "Mode",
                                symbol: "MODE"
                            }
                        },
                        mode: {
                            eid: 30260,
                            token: {
                                chainKey: "mode",
                                address: "0xDfc7C877a950e49D2610114102175A06C2e3167a",
                                decimals: 18,
                                name: "Mode",
                                symbol: "MODE"
                            },
                            oftProxy: {
                                address: "0x6b7b1574bf0c612dd655144b8b39f50476bd4dea"
                            }
                        }
                    },
                    coinMarketCapId: 31016
                })
            , aq = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0xeD2d13A70acbD61074fC56bd0d0845e35f793e5E",
                                decimals: 18,
                                name: "Planet Mojo",
                                symbol: "MOJO"
                            }
                        },
                        polygon: {
                            eid: 30109,
                            token: {
                                chainKey: "polygon",
                                address: "0xeD2d13A70acbD61074fC56bd0d0845e35f793e5E",
                                decimals: 18,
                                name: "Planet Mojo",
                                symbol: "MOJO"
                            }
                        }
                    },
                    coinMarketCapId: 30490
                })
            , aJ = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0xc555D625828c4527d477e595fF1Dd5801B4a600e",
                                decimals: 18,
                                name: "MON",
                                symbol: "MON"
                            },
                            oftProxy: {
                                address: "0x3c4a6a026b6545d06ca1bc1111ef900942f826a9"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                chainKey: "arbitrum",
                                address: "0xfc87D55bC8bF441AbfC24D04B2068a8f77BcFcC0",
                                decimals: 18,
                                name: "MON",
                                symbol: "MON"
                            }
                        }
                    },
                    coinMarketCapId: 30950
                })
            , aj = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        base: {
                            eid: 30184,
                            token: {
                                address: "0x08BF7F2005Ab25A90d4f88eFd70Dbdf0EF6B7554",
                                chainKey: "base",
                                decimals: 18,
                                name: "Moongate",
                                symbol: "MGT"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            token: {
                                address: "0x3C6256F234Ba638E5883c46b3fEdb00ea2e66b8A",
                                chainKey: "bsc",
                                decimals: 18,
                                name: "Moongate",
                                symbol: "MGT"
                            },
                            oftProxy: {
                                address: "0x08BF7F2005Ab25A90d4f88eFd70Dbdf0EF6B7554"
                            }
                        }
                    },
                    coinMarketCapId: 34163,
                    coinGeckoId: "moongate"
                })
            , a_ = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0xcBB8f1BDA10b9696c57E13BC128Fe674769DCEc0",
                                decimals: 18,
                                name: "MOR",
                                symbol: "MOR"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                chainKey: "arbitrum",
                                address: "0x092bAaDB7DEf4C3981454dD9c0A0D7FF07bCFc86",
                                decimals: 18,
                                name: "MOR",
                                symbol: "MOR"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0x7431aDa8a591C955a994a21710752EF9b882b8e3",
                                decimals: 18,
                                name: "MOR",
                                symbol: "MOR"
                            }
                        }
                    },
                    coinMarketCapId: 31656
                })
            , a$ = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0xC227717ef4Ae4D982E14789eB33bA942243c3FEe",
                                decimals: 18,
                                name: "Mozaic Token",
                                symbol: "MOZ"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                chainKey: "arbitrum",
                                address: "0x20547341E58fB558637FA15379C92e11F7b7F710",
                                decimals: 18,
                                name: "Mozaic Token",
                                symbol: "MOZ"
                            },
                            oftProxy: {
                                address: "0x80cf6a0dcfe90a2c8f89b842a7f71da78fe92c6e"
                            }
                        }
                    },
                    coinMarketCapId: 24839
                })
            , a0 = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            oftProxy: {
                                address: "0x5c574153B195AE284C063a84fB9C73d9fd37955F"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "msETH",
                                address: "0x64351fC9810aDAd17A690E4e1717Df5e7e085160",
                                decimals: 18
                            }
                        },
                        optimism: {
                            eid: 111,
                            oftProxy: {
                                address: "0x95dcff2bfd19af97267b8c9d516206dcc87eecdd"
                            },
                            token: {
                                chainKey: "optimism",
                                symbol: "msETH",
                                address: "0x1610e3c85dd44Af31eD7f33a63642012Dca0C5A5",
                                decimals: 18
                            }
                        },
                        base: {
                            eid: 184,
                            oftProxy: {
                                address: "0x30eac06d1e495411ee15cb59714eb9da29fc200e"
                            },
                            token: {
                                chainKey: "base",
                                symbol: "msETH",
                                address: "0x7Ba6F01772924a82D9626c126347A28299E98c98",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 18,
                    version: 1,
                    fee: !1,
                    coinMarketCapId: 2396
                })
            , a1 = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            oftProxy: {
                                address: "0xf37982e3f33ac007c690ed6266f3402d24aa27ea"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "msUSD",
                                address: "0xab5eB14c09D416F0aC63661E57EDB7AEcDb9BEfA",
                                decimals: 18
                            }
                        },
                        optimism: {
                            eid: 111,
                            oftProxy: {
                                address: "0xc2C433D36d7184192E442a243b351a9e3055FD5f"
                            },
                            token: {
                                chainKey: "optimism",
                                symbol: "msUSD",
                                address: "0x9dAbAE7274D28A45F0B65Bf8ED201A5731492ca0",
                                decimals: 18
                            }
                        },
                        base: {
                            eid: 184,
                            oftProxy: {
                                address: "0x2af13bf84f8b452cb86839330f514cc5c2899217"
                            },
                            token: {
                                chainKey: "base",
                                symbol: "msUSD",
                                address: "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 18,
                    version: 1,
                    fee: !1,
                    coinMarketCapId: 3408
                })
            , a3 = (0,
                X.C2)({
                    deployments: {
                        bsc: {
                            eid: 102,
                            oftProxy: {
                                address: "0x76326791a0d491cdb24a349354ec024756816d12"
                            },
                            token: {
                                chainKey: "bsc",
                                symbol: "MTVT",
                                address: "0xB92c5e0135A510A4a3A8803F143d2Cb085BBAf73",
                                decimals: 18
                            }
                        },
                        metis: {
                            eid: 151,
                            token: {
                                chainKey: "metis",
                                symbol: "MTVT",
                                address: "0x52b4FC2CA0D9b194769AB9a3dC36c2C6831f2520",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 9,
                    version: 2,
                    fee: !1,
                    coinMarketCapId: 15974
                })
            , a8 = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x3f24E1d7a973867fC2A03fE199E5502514E0e11E",
                                decimals: 18,
                                name: "mUSD",
                                symbol: "mUSD"
                            }
                        },
                        manta: {
                            eid: 30217,
                            token: {
                                chainKey: "manta",
                                address: "0x649d4524897cE85A864DC2a2D5A11Adb3044f44a",
                                decimals: 18,
                                name: "mUSD",
                                symbol: "mUSD"
                            },
                            oftProxy: {
                                address: "0x3fa1993e14133a019db6da85fde3779998d8aa2c"
                            }
                        }
                    },
                    coinGeckoId: "manta-musd"
                })
            , a2 = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinGeckoId: "open-loot",
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            version: 3,
                            oftProxy: {
                                address: "0x3f160760535Eb715d5809a26cF55408A2d9844c1"
                            },
                            token: {
                                chainKey: "ethereum",
                                decimals: 18,
                                symbol: "OL",
                                name: "OPENLOOT",
                                address: "0x1F57da732A77636D913C9a75d685B26CC85DCC3A"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            version: 3,
                            token: {
                                chainKey: "bsc",
                                decimals: 18,
                                symbol: "OL",
                                name: "Open Loot",
                                address: "0x3f160760535Eb715d5809a26cF55408A2d9844c1"
                            }
                        }
                    }
                })
            , a6 = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            token: {
                                chainKey: "ethereum",
                                symbol: "OLE",
                                address: "0x1B6e9c73beE68102d9dd4A2627f97bFf4183ab0A",
                                decimals: 18
                            }
                        },
                        bsc: {
                            eid: 102,
                            token: {
                                chainKey: "bsc",
                                symbol: "OLE",
                                address: "0xB7E2713CF55cf4b469B5a8421Ae6Fc0ED18F1467",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "OLE",
                                address: "0x7Be5Dd337CC6cE3e474F64E2A92A566445290864",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 18,
                    version: 1,
                    fee: !1,
                    coinMarketCapId: 20719
                })
            , a4 = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            oftProxy: {
                                address: "0xa0aA943666B4309C1989E3a7ebe7dbe11de36212"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "OMNI",
                                address: "0x9e20461bc2c4c980f62f1B279D71734207a6A356",
                                decimals: 18
                            }
                        },
                        bsc: {
                            eid: 102,
                            token: {
                                chainKey: "bsc",
                                symbol: "OMNI",
                                address: "0x9e20461bc2c4c980f62f1B279D71734207a6A356",
                                decimals: 18
                            }
                        },
                        polygon: {
                            eid: 109,
                            token: {
                                chainKey: "polygon",
                                symbol: "OMNI",
                                address: "0x9e20461bc2c4c980f62f1B279D71734207a6A356",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "OMNI",
                                address: "0x9e20461bc2c4c980f62f1B279D71734207a6A356",
                                decimals: 18
                            }
                        },
                        base: {
                            eid: 184,
                            token: {
                                chainKey: "base",
                                symbol: "OMNI",
                                address: "0xC48E605c7b722a57277e087a6170B9E227e5AC0A",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 8,
                    version: 2,
                    fee: !1,
                    coinMarketCapId: 28827
                })
            , a7 = (0,
                X.C2)({
                    deployments: {
                        bsc: {
                            eid: 102,
                            oftProxy: {
                                address: "0x9ba0b9c177846e6e447a5293c0f687e18df9da08"
                            },
                            token: {
                                chainKey: "bsc",
                                symbol: "OOE",
                                address: "0x8ea5219a16c2dbF1d6335A6aa0c6bd45c50347C5",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "OOE",
                                address: "0xDCbf4CB83d27C408B30dD7F39bfcabD7176B1Ba3",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 8,
                    version: 2,
                    fee: !1,
                    coinMarketCapId: 9938
                })
            , a9 = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinMarketCapId: 29331,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            version: 3,
                            oftProxy: {
                                address: "0xbd26Aa1903b29101B48A27F2CB8A2889FBBEf223"
                            },
                            token: {
                                chainKey: "ethereum",
                                decimals: 18,
                                symbol: "OORT",
                                name: "OORT",
                                address: "0x5651fA7a726B9Ec0cAd00Ee140179912B6E73599"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            version: 3,
                            oftProxy: {
                                address: "0xbd26Aa1903b29101B48A27F2CB8A2889FBBEf223"
                            },
                            token: {
                                chainKey: "bsc",
                                decimals: 18,
                                symbol: "OORT",
                                name: "OORT",
                                address: "0x5651fA7a726B9Ec0cAd00Ee140179912B6E73599"
                            }
                        }
                    }
                })
            , a5 = (0,
                X.C2)({
                    deployments: {
                        avalanche: {
                            eid: 30106,
                            token: {
                                chainKey: "avalanche",
                                symbol: "OP",
                                address: "0xaC800FD6159c2a2CB8fC31EF74621eB430287a5A",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "OP",
                                address: "0xaC800FD6159c2a2CB8fC31EF74621eB430287a5A",
                                decimals: 18
                            }
                        },
                        optimism: {
                            eid: 30111,
                            oftProxy: {
                                address: "0xaC800FD6159c2a2CB8fC31EF74621eB430287a5A"
                            },
                            token: {
                                chainKey: "optimism",
                                symbol: "OP",
                                address: "0x4200000000000000000000000000000000000042",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !1,
                    coinMarketCapId: 11840
                })
            , de = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        arbitrum: {
                            eid: 30110,
                            token: {
                                address: "0x333333C465a19C85f85c6CfbED7B16b0B26E3333",
                                chainKey: "arbitrum",
                                decimals: 18,
                                symbol: "ORA",
                                name: "ORA Coin"
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            token: {
                                address: "0x33333333FEde34409Fb7f67c6585047E1F653333",
                                chainKey: "ethereum",
                                decimals: 18,
                                symbol: "ORA",
                                name: "ORA Coin"
                            },
                            oftProxy: {
                                address: "0x5e1F75388dc768f6129b9ee859BFB1361631a77e"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            token: {
                                address: "0x333333C465a19C85f85c6CfbED7B16b0B26E3333",
                                chainKey: "bsc",
                                decimals: 18,
                                symbol: "ORA",
                                name: "ORA Coin"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                address: "0x333333C465a19C85f85c6CfbED7B16b0B26E3333",
                                chainKey: "base",
                                decimals: 18,
                                symbol: "ORA",
                                name: "ORA Coin"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            token: {
                                chainKey: "solana",
                                symbol: "ORA",
                                name: "ORA Coin",
                                address: "BPYhCMNao2XG4UR771LurHrwUg3rcp76jmg4XFfAacvg",
                                decimals: 9,
                                programId: V.H_
                            },
                            tokenEscrow: {
                                address: "6er6i7RSw5FZ5BScPftGQVinEsurVSgPvS8iKchziQRn"
                            },
                            oft: {
                                programId: "12UJoD4VRHneWXoy1j4k3KTACP8ZYX55sS4sbwzuk8KF"
                            }
                        }
                    },
                    coinMarketCapId: 34165,
                    coinGeckoId: "ora-coin"
                })
            , da = (0,
                X.C2)({
                    strict: !1,
                    sharedDecimals: 10,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0xABD4C63d2616A5201454168269031355f4764337",
                                decimals: 18,
                                name: "Orderly Network",
                                symbol: "ORDER"
                            },
                            oftProxy: {
                                address: "0x17435cC940e03aA52c349738c72C7Aa44FfA6525"
                            }
                        },
                        optimism: {
                            eid: 30111,
                            token: {
                                chainKey: "optimism",
                                address: "0x4E200fE2f3eFb977d5fd9c430A41531FB04d97B8",
                                decimals: 18,
                                name: "Orderly Network",
                                symbol: "ORDER"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0x4E200fE2f3eFb977d5fd9c430A41531FB04d97B8",
                                decimals: 18,
                                name: "Orderly Network",
                                symbol: "ORDER"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                chainKey: "arbitrum",
                                address: "0x4E200fE2f3eFb977d5fd9c430A41531FB04d97B8",
                                decimals: 18,
                                name: "Orderly Network",
                                symbol: "ORDER"
                            }
                        },
                        polygon: {
                            eid: 30109,
                            token: {
                                chainKey: "polygon",
                                address: "0x4E200fE2f3eFb977d5fd9c430A41531FB04d97B8",
                                decimals: 18,
                                name: "Orderly Network",
                                symbol: "ORDER"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            token: {
                                chainKey: "solana",
                                symbol: "ORDER",
                                name: "Orderly Network",
                                address: "ABt79MkRXUsoHuV2CVQT32YMXQhTparKFjmidQxgiQ6E",
                                decimals: 10,
                                programId: V.H_
                            },
                            tokenEscrow: {
                                address: "7PGWT8rti8jpRiySA9pfG3fiReW5Go8jQp3UWXc5SrSk"
                            },
                            oft: {
                                programId: "GZGX6QfUo62VbPyYqPZS6t27Uke1dJmoAP6V3rw6ntTH"
                            }
                        },
                        avalanche: {
                            eid: 30106,
                            version: 3,
                            token: {
                                chainKey: "avalanche",
                                decimals: 18,
                                symbol: "ORDER",
                                name: "Orderly Network",
                                address: "0x4E200fE2f3eFb977d5fd9c430A41531FB04d97B8"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            version: 3,
                            token: {
                                chainKey: "bsc",
                                decimals: 18,
                                symbol: "ORDER",
                                name: "Orderly Network",
                                address: "0x4E200fE2f3eFb977d5fd9c430A41531FB04d97B8"
                            }
                        }
                    },
                    coinMarketCapId: 32809,
                    coinGeckoId: "orderly-network"
                })
            , dd = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            oftProxy: {
                                address: "0x58ff71c056942600bc4acf8bdf48f82e6ad1f392"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "OSAK",
                                address: "0xa21Af1050F7B26e0cfF45ee51548254C41ED6b5c",
                                decimals: 18
                            }
                        },
                        bsc: {
                            eid: 102,
                            token: {
                                chainKey: "bsc",
                                symbol: "OSAK",
                                address: "0x11cd72f7A4B699c67f225ca8aBb20bC9F8DB90c7",
                                decimals: 18
                            }
                        },
                        avalanche: {
                            eid: 106,
                            token: {
                                chainKey: "avalanche",
                                symbol: "OSAK",
                                address: "0x96E1056a8814De39c8c3Cd0176042d6ceCD807d7",
                                decimals: 18
                            }
                        },
                        polygon: {
                            eid: 109,
                            token: {
                                chainKey: "polygon",
                                symbol: "OSAK",
                                address: "0x11cd72f7A4B699c67f225ca8aBb20bC9F8DB90c7",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "OSAK",
                                address: "0xbFd5206962267c7b4b4A8B3D76AC2E1b2A5c4d5e",
                                decimals: 18
                            }
                        },
                        optimism: {
                            eid: 111,
                            token: {
                                chainKey: "optimism",
                                symbol: "OSAK",
                                address: "0xbFd5206962267c7b4b4A8B3D76AC2E1b2A5c4d5e",
                                decimals: 18
                            }
                        },
                        base: {
                            eid: 184,
                            token: {
                                chainKey: "base",
                                symbol: "OSAK",
                                address: "0xbFd5206962267c7b4b4A8B3D76AC2E1b2A5c4d5e",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 4,
                    version: 2,
                    fee: !0,
                    coinMarketCapId: 27533
                })
            , ds = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            oftProxy: {
                                address: "0x227dcc37d9a071d1a2adb7edc40b7ec38a2097b3"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "OX",
                                address: "0xba0Dda8762C24dA9487f5FA026a9B64b695A07Ea",
                                decimals: 18
                            }
                        },
                        bsc: {
                            eid: 102,
                            token: {
                                chainKey: "bsc",
                                symbol: "OX",
                                address: "0xba0Dda8762C24dA9487f5FA026a9B64b695A07Ea",
                                decimals: 18
                            }
                        },
                        avalanche: {
                            eid: 106,
                            token: {
                                chainKey: "avalanche",
                                symbol: "OX",
                                address: "0xba0Dda8762C24dA9487f5FA026a9B64b695A07Ea",
                                decimals: 18
                            }
                        },
                        polygon: {
                            eid: 109,
                            token: {
                                chainKey: "polygon",
                                symbol: "OX",
                                address: "0xba0Dda8762C24dA9487f5FA026a9B64b695A07Ea",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "OX",
                                address: "0xba0Dda8762C24dA9487f5FA026a9B64b695A07Ea",
                                decimals: 18
                            }
                        },
                        base: {
                            eid: 184,
                            token: {
                                chainKey: "base",
                                symbol: "OX",
                                address: "0xba0Dda8762C24dA9487f5FA026a9B64b695A07Ea",
                                decimals: 18
                            }
                        },
                        blast: {
                            eid: 243,
                            token: {
                                chainKey: "blast",
                                symbol: "OX",
                                address: "0xba0Dda8762C24dA9487f5FA026a9B64b695A07Ea",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 18,
                    version: 1,
                    fee: !1,
                    coinMarketCapId: 29530
                })
            , di = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            oftProxy: {
                                address: "0xcd5f17b1fe981ba260c40c67e740b7290b50ea50"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "OX.old",
                                address: "0x78a0A62Fba6Fb21A83FE8a3433d44C73a4017A6f",
                                decimals: 18
                            }
                        },
                        bsc: {
                            eid: 102,
                            token: {
                                chainKey: "bsc",
                                symbol: "OX.old",
                                address: "0x78a0A62Fba6Fb21A83FE8a3433d44C73a4017A6f",
                                decimals: 18
                            }
                        },
                        avalanche: {
                            eid: 106,
                            token: {
                                chainKey: "avalanche",
                                symbol: "OX.old",
                                address: "0x78a0A62Fba6Fb21A83FE8a3433d44C73a4017A6f",
                                decimals: 18
                            }
                        },
                        polygon: {
                            eid: 109,
                            token: {
                                chainKey: "polygon",
                                symbol: "OX.old",
                                address: "0x78a0A62Fba6Fb21A83FE8a3433d44C73a4017A6f",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "OX.old",
                                address: "0x78a0A62Fba6Fb21A83FE8a3433d44C73a4017A6f",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 18,
                    version: 1,
                    fee: !1,
                    coinMarketCapId: 26543
                })
            , dn = (0,
                X.C2)({
                    version: 3,
                    sharedDecimals: 6,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        sonic: {
                            eid: 30332,
                            token: {
                                address: "0xE4A4353CD8F008f1a70f1a564535990479E8ceb7",
                                chainKey: "sonic",
                                decimals: 18,
                                name: "Paladin Token",
                                symbol: "PAL"
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            token: {
                                address: "0xAB846Fb6C81370327e784Ae7CbB6d6a6af6Ff4BF",
                                chainKey: "ethereum",
                                decimals: 18,
                                name: "Paladin Token",
                                symbol: "PAL"
                            },
                            oftProxy: {
                                address: "0x7d01DA772ac7F9dAAccDe81C0D1A27FD419c65B2"
                            }
                        }
                    },
                    coinGeckoId: "paladin"
                })
            , dc = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinMarketCapId: 27772,
                    deployments: {
                        plumephoenix: {
                            eid: 30370,
                            version: 3,
                            token: {
                                chainKey: "plumephoenix",
                                decimals: 6,
                                symbol: "PayUSD",
                                name: "Pay USD",
                                address: "0xe9e8330a71912F03E54E7D93795acD9a56f070Aa"
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            version: 3,
                            oftProxy: {
                                address: "0xe9e8330a71912F03E54E7D93795acD9a56f070Aa"
                            },
                            token: {
                                chainKey: "ethereum",
                                decimals: 6,
                                symbol: "PYUSD",
                                name: "PayPal USD",
                                address: "0x6c3ea9036406852006290770BEdFcAbA0e23A0e8"
                            }
                        }
                    }
                })
            , dr = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        bsc: {
                            eid: 30102,
                            token: {
                                chainKey: "bsc",
                                address: "0x3C1B057cb7AcEB4F2c4D889A29fEBec30A6A3146",
                                decimals: 18,
                                name: "PolkaBridge",
                                symbol: "PBR"
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x298d492e8c1d909D3F63Bc4A36C66c64ACB3d695",
                                decimals: 18,
                                name: "PolkaBridge",
                                symbol: "PBR"
                            },
                            oftProxy: {
                                address: "0x5cc16c5bd87d68ad459e895e886cd851cc5709ff"
                            }
                        }
                    },
                    coinMarketCapId: 8320,
                    coinGeckoId: "polkabridge"
                })
            , dm = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                symbol: "PEAQ",
                                address: "0x1EeF208926667594E5136e89D0e9DD6907959197",
                                decimals: 18
                            }
                        },
                        peaq: {
                            eid: 30302,
                            token: {
                                address: "0x0000000000000000000000000000000000000809",
                                chainKey: "peaq",
                                symbol: "PEAQ",
                                decimals: 18
                            },
                            oftProxy: {
                                address: "0xe4103e80c967f58591a1d7cA443ed7E392FeD862"
                            }
                        }
                    },
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    coinMarketCapId: 14588
                })
            , dt = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        abstract: {
                            eid: 30324,
                            version: 3,
                            token: {
                                chainKey: "abstract",
                                address: "0x9eBe3A824Ca958e4b3Da772D2065518F009CBa62",
                                decimals: 18,
                                symbol: "PENGU",
                                name: "Pudgy Penguins"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            version: 3,
                            token: {
                                chainKey: "bsc",
                                address: "0x6418c0dd099a9FDA397C766304CDd918233E8847",
                                decimals: 18,
                                symbol: "PENGU",
                                name: "Pudgy Penguins"
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            version: 3,
                            token: {
                                chainKey: "ethereum",
                                address: "0x6418c0dd099a9FDA397C766304CDd918233E8847",
                                decimals: 18,
                                symbol: "PENGU",
                                name: "Pudgy Penguins"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            token: {
                                address: "2zMMhcVQEXDtdE6vsFS7S7D5oUodfJHE8vd1gnBouauv",
                                programId: V.H_,
                                chainKey: "solana",
                                decimals: 6,
                                symbol: "PENGU",
                                name: "Pudgy Penguins"
                            },
                            oft: {
                                programId: "EfRMrTJWU2CYm52kHmRYozQNdF8RH5aTi3xyeSuLAX2Y"
                            },
                            tokenEscrow: {
                                address: "8qytKBooPvD4Q7vdrKnjKmiweShS4D5mPzsgQc6HqgvX"
                            }
                        }
                    },
                    coinMarketCapId: 34466
                })
            , db = (0,
                X.C2)({
                    deployments: {
                        arbitrum: {
                            eid: 110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "PEPE",
                                address: "0x25d887Ce7a35172C62FeBFD67a1856F20FaEbB00",
                                decimals: 18
                            }
                        },
                        ethereum: {
                            eid: 101,
                            oftProxy: {
                                address: "0x25d887Ce7a35172C62FeBFD67a1856F20FaEbB00"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "PEPE",
                                address: "0x6982508145454Ce325dDbE47a25d4ec3d2311933",
                                decimals: 18
                            }
                        },
                        bsc: {
                            eid: 102,
                            token: {
                                chainKey: "bsc",
                                symbol: "PEPE",
                                address: "0x25d887Ce7a35172C62FeBFD67a1856F20FaEbB00",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 4,
                    version: 2,
                    fee: !0,
                    coinMarketCapId: 24478
                })
            , dl = (0,
                X.C2)({
                    version: 3,
                    sharedDecimals: 6,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                address: "0x60bE1e1fE41c1370ADaF5d8e66f07Cf1C2Df2268",
                                chainKey: "ethereum",
                                decimals: 18,
                                name: "Perion Credits",
                                symbol: "PERC"
                            },
                            oftProxy: {
                                address: "0xF598797d9C160aeF2A14712C20b7731cBe5861da"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                address: "0xF598797d9C160aeF2A14712C20b7731cBe5861da",
                                chainKey: "base",
                                decimals: 18,
                                name: "Perion Credits",
                                symbol: "PERC"
                            }
                        }
                    },
                    coinMarketCapId: 17837
                })
            , dy = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0xD3C68968137317a57a9bAbeacC7707Ec433548B4",
                                decimals: 18,
                                name: "Phavercoin",
                                symbol: "SOCIAL"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0xD3C68968137317a57a9bAbeacC7707Ec433548B4",
                                decimals: 18,
                                name: "Phavercoin",
                                symbol: "SOCIAL"
                            }
                        },
                        cyber: {
                            eid: 30283,
                            token: {
                                chainKey: "cyber",
                                address: "0xD3C68968137317a57a9bAbeacC7707Ec433548B4",
                                decimals: 18,
                                name: "Phavercoin",
                                symbol: "SOCIAL"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            token: {
                                chainKey: "solana",
                                name: "Phavercoin",
                                symbol: "SOCIAL",
                                address: "4WS7CeusWMwWGNALHDJtyxvN9yxydoB7pvM6Pwd9F2VA",
                                decimals: 9,
                                programId: V.H_
                            },
                            tokenEscrow: {
                                address: "AaJo3TXRwH5B7n9Uss8LgoPxMcYAK4AJ7NN4FRmK2rof"
                            },
                            oft: {
                                programId: "GLJf5ETq8KTKYvTmiuhV41DDGvcASeZJMVdh7uwxxo1y"
                            }
                        }
                    },
                    coinMarketCapId: 33060
                })
            , df = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0xBE5ACfd64358805616b5cbD5277B9A85011d7Cf1",
                                decimals: 18,
                                name: "Pichi",
                                symbol: "PCH"
                            }
                        },
                        mantle: {
                            eid: 30181,
                            token: {
                                chainKey: "mantle",
                                address: "0xBE5ACfd64358805616b5cbD5277B9A85011d7Cf1",
                                decimals: 18,
                                name: "Pichi",
                                symbol: "PCH"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                chainKey: "arbitrum",
                                address: "0xBE5ACfd64358805616b5cbD5277B9A85011d7Cf1",
                                decimals: 18,
                                name: "Pichi",
                                symbol: "PCH"
                            }
                        }
                    },
                    coinGeckoId: "pichi-finance"
                })
            , dC = (0,
                X.C2)({
                    version: 3,
                    sharedDecimals: 6,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                address: "0xa73B792906c79509d73FDfaAa78561e195010706",
                                chainKey: "ethereum",
                                decimals: 18,
                                name: "Pipo",
                                symbol: "PIPO"
                            },
                            oftProxy: {
                                address: "0xF11743E4B037543dFD6c277124b24F8F162aC57f"
                            }
                        },
                        soneium: {
                            eid: 30340,
                            token: {
                                address: "0x8CD846c404C7267350a2920576816603Cd5C6539",
                                chainKey: "soneium",
                                decimals: 18,
                                name: "Pipo",
                                symbol: "PIPO"
                            }
                        }
                    },
                    coinGeckoId: "pipo-2"
                })
            , dD = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x4C1746A800D224393fE2470C70A35717eD4eA5F1",
                                decimals: 18,
                                symbol: "PLUME"
                            },
                            oftProxy: {
                                address: "0xbDA8a2285F4C3e75b37E467C4DB9bC633FfbD29d"
                            }
                        },
                        solana: {
                            eid: 30168,
                            token: {
                                chainKey: "solana",
                                symbol: "PLUME",
                                address: "C7Xr4VM6H3W9HHpVep96Hrknkxv2c33kcBTi6e9ZjphW",
                                decimals: 6
                            },
                            oft: {
                                programId: "HRPXLCqspQocTjfcX4rvAPaY9q6Gwb1rrD3xXWrfJWdW"
                            }
                        }
                    },
                    coinMarketCapId: 35364
                })
            , dE = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        arbitrum: {
                            eid: 30110,
                            token: {
                                address: "0x0B3EAEAd748facDb9d943d3407011f16Eb17D0Cf",
                                chainKey: "arbitrum",
                                decimals: 18,
                                name: "Primex Finance",
                                symbol: "PMX"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                address: "0x0B3EAEAd748facDb9d943d3407011f16Eb17D0Cf",
                                chainKey: "base",
                                decimals: 18,
                                name: "Primex Finance",
                                symbol: "PMX"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            token: {
                                address: "0x0B3EAEAd748facDb9d943d3407011f16Eb17D0Cf",
                                chainKey: "bsc",
                                decimals: 18,
                                name: "Primex Finance",
                                symbol: "PMX"
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            oftProxy: {
                                address: "0x1C3f687A5FE3b52178455378C893E317711388f6"
                            },
                            token: {
                                address: "0x0B3EAEAd748facDb9d943d3407011f16Eb17D0Cf",
                                chainKey: "ethereum",
                                decimals: 18,
                                name: "Primex Finance",
                                symbol: "PMX"
                            }
                        },
                        polygon: {
                            eid: 30109,
                            token: {
                                address: "0x0B3EAEAd748facDb9d943d3407011f16Eb17D0Cf",
                                chainKey: "polygon",
                                decimals: 18,
                                name: "Primex Finance",
                                symbol: "PMX"
                            }
                        }
                    },
                    coinMarketCapId: 20738,
                    coinGeckoId: "primex-finance"
                })
            , dA = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        fantom: {
                            eid: 30112,
                            token: {
                                chainKey: "fantom",
                                address: "0x5c725631FD299703D0A74C23F89a55c6B9A0C52F",
                                decimals: 18,
                                name: "Polter.Finance Protocol Token",
                                symbol: "POLTER"
                            },
                            oftProxy: {
                                address: "0x3822858C943d74b93936168f79f7CA73A43D2e6C"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0xA0820613976B441E2c6A90E4877E2fb5f7D72552",
                                decimals: 18,
                                name: "Polter.Finance Protocol Token",
                                symbol: "POLTER"
                            }
                        }
                    },
                    coinGeckoId: "polter-finance"
                })
            , dh = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinGeckoId: "primefi",
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            version: 3,
                            token: {
                                chainKey: "ethereum",
                                decimals: 18,
                                symbol: "PRFI",
                                name: "PRFI",
                                address: "0x7BBCf1B600565AE023a1806ef637Af4739dE3255"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            version: 3,
                            token: {
                                chainKey: "arbitrum",
                                decimals: 18,
                                symbol: "PRFI",
                                name: "PRFI",
                                address: "0x7BBCf1B600565AE023a1806ef637Af4739dE3255"
                            }
                        },
                        base: {
                            eid: 30184,
                            version: 3,
                            token: {
                                chainKey: "base",
                                decimals: 18,
                                symbol: "PRFI",
                                name: "PRFI",
                                address: "0x7BBCf1B600565AE023a1806ef637Af4739dE3255"
                            }
                        },
                        hyperliquid: {
                            eid: 30367,
                            version: 3,
                            token: {
                                chainKey: "hyperliquid",
                                decimals: 18,
                                symbol: "PRFI",
                                name: "PRFI",
                                address: "0x7BBCf1B600565AE023a1806ef637Af4739dE3255"
                            }
                        },
                        xdc: {
                            eid: 30365,
                            version: 3,
                            token: {
                                chainKey: "xdc",
                                decimals: 18,
                                symbol: "PRFI",
                                name: "PRFI",
                                address: "0x81B244d0be055EF3BEF1b09B7826Cc2b108B2cBD"
                            }
                        }
                    }
                })
            , dx = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinMarketCapId: 36223,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            version: 3,
                            token: {
                                chainKey: "ethereum",
                                decimals: 18,
                                symbol: "PROMPT",
                                name: "Prompt",
                                address: "0x28d38dF637dB75533bD3F71426F3410a82041544"
                            }
                        },
                        base: {
                            eid: 30184,
                            version: 3,
                            token: {
                                chainKey: "base",
                                decimals: 18,
                                symbol: "PROMPT",
                                name: "Prompt",
                                address: "0x30c7235866872213F68cb1F08c37Cb9eCCB93452"
                            }
                        }
                    }
                })
            , dB = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x915424Ac489433130d92B04096F3b96c82e92a9D",
                                decimals: 18,
                                name: "Prosper",
                                symbol: "PROS"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            token: {
                                chainKey: "bsc",
                                address: "0x915424Ac489433130d92B04096F3b96c82e92a9D",
                                decimals: 18,
                                name: "Prosper",
                                symbol: "PROS"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                address: "0x915424Ac489433130d92B04096F3b96c82e92a9D",
                                chainKey: "base",
                                decimals: 18,
                                name: "Prosper",
                                symbol: "PROS"
                            }
                        }
                    },
                    coinMarketCapId: 8255,
                    coinGeckoId: "prosper"
                })
            , dF = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x31b6100F5F4466e6dAeb1edb2f2cE6e548cF8938",
                                decimals: 18,
                                name: "Puff",
                                symbol: "Puff"
                            }
                        },
                        mantle: {
                            eid: 30181,
                            token: {
                                chainKey: "mantle",
                                address: "0x26a6b0dcdCfb981362aFA56D581e4A7dBA3Be140",
                                decimals: 18,
                                name: "Puff",
                                symbol: "PUFF"
                            },
                            oftProxy: {
                                address: "0xe6fa1be9daa660c99268f3f47fc193ba066a3aac"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0x823C9E9f4C51C1a169CEF4bf7922F46bEB493D11",
                                decimals: 18,
                                name: "Puff",
                                symbol: "Puff"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            token: {
                                chainKey: "solana",
                                address: "2roCYDBxhnSPqwvU37Bp51wLHiqTLoXU1Am3fGGi5zPr",
                                decimals: 9,
                                name: "Puff",
                                symbol: "PUFF",
                                programId: V.H_
                            },
                            tokenEscrow: {
                                address: "GXnKwpg7t8cZD3EMbYBSkuDTPiZBGTy5qQgF3svANaCJ"
                            },
                            oft: {
                                programId: "ETvVX3ECxWGgp22zQwSKH4mnufyxeUa1vM9V4UVyTF6H"
                            }
                        }
                    },
                    coinMarketCapId: 29945
                })
            , dk = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinMarketCapId: 32325,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            version: 3,
                            oftProxy: {
                                address: "0xAfF2e841851700D1Fc101995Ee6b81Ae21Bb87D7"
                            },
                            token: {
                                chainKey: "ethereum",
                                decimals: 18,
                                symbol: "SPK",
                                name: "Spark",
                                address: "0xc20059e0317DE91738d13af027DfC4a50781b066"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            version: 3,
                            token: {
                                chainKey: "bsc",
                                decimals: 18,
                                symbol: "SPK",
                                name: "Spark",
                                address: "0xAfF2e841851700D1Fc101995Ee6b81Ae21Bb87D7"
                            }
                        }
                    }
                })
            , dp = (0,
                X.C2)({
                    version: 3,
                    sharedDecimals: 8,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                address: "0xADc9c900b05F39f48bB6F402A1BAE60929F4f9A8",
                                chainKey: "ethereum",
                                decimals: 8,
                                name: "pumpBTC.bera",
                                symbol: "pumpBTC.bera"
                            }
                        },
                        bera: {
                            eid: 30362,
                            token: {
                                address: "0x1fCca65fb6Ae3b2758b9b2B394CB227eAE404e1E",
                                chainKey: "bera",
                                decimals: 8,
                                name: "pumpBTC.bera",
                                symbol: "pumpBTC.bera"
                            }
                        }
                    },
                    coinMarketCapId: 32722
                })
            , dK = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        bsc: {
                            eid: 30102,
                            token: {
                                chainKey: "bsc",
                                address: "0x300d2c875C6fb8Ce4bf5480B4d34b7c9ea8a33A4",
                                decimals: 18,
                                name: "Pirex Ether OFT",
                                symbol: "pxETH"
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x04C154b66CB340F3Ae24111CC767e0184Ed00Cc6",
                                decimals: 18,
                                name: "Pirex Ether",
                                symbol: "pxETH"
                            },
                            oftProxy: {
                                address: "0x1cd5b73d12cb23b2835c873e4faffe83bbcef208"
                            }
                        },
                        optimism: {
                            eid: 30111,
                            token: {
                                chainKey: "optimism",
                                address: "0x300d2c875C6fb8Ce4bf5480B4d34b7c9ea8a33A4",
                                decimals: 18,
                                name: "Pirex Ether OFT",
                                symbol: "pxETH"
                            }
                        },
                        gnosis: {
                            eid: 30145,
                            token: {
                                chainKey: "gnosis",
                                address: "0xA7490A2d3e0fa0FfC461eAdC465c19d370265D1B",
                                decimals: 18,
                                name: "Pirex Ether OFT",
                                symbol: "pxETH"
                            }
                        },
                        scroll: {
                            eid: 30214,
                            token: {
                                chainKey: "scroll",
                                address: "0x9E0d7D79735e1c63333128149c7b616a0dC0bBDb",
                                decimals: 18,
                                name: "Pirex Ether OFT",
                                symbol: "pxETH"
                            }
                        },
                        blast: {
                            eid: 30243,
                            token: {
                                chainKey: "blast",
                                address: "0x9E0d7D79735e1c63333128149c7b616a0dC0bBDb",
                                decimals: 18,
                                name: "Pirex Ether OFT",
                                symbol: "pxETH"
                            }
                        },
                        mode: {
                            eid: 30260,
                            token: {
                                chainKey: "mode",
                                address: "0x9E0d7D79735e1c63333128149c7b616a0dC0bBDb",
                                decimals: 18,
                                name: "Pirex Ether OFT",
                                symbol: "pxETH"
                            }
                        },
                        zksync: {
                            eid: 30165,
                            token: {
                                chainKey: "zksync",
                                address: "0x8bA0aAe056de87AeFcBc973623D9D43470eaE248",
                                decimals: 18,
                                name: "Pirex Ether OFT",
                                symbol: "pxETH"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0x58adE43A276ddF3e101941571eDe398a32492Ed7",
                                decimals: 18,
                                name: "Pirex Ether OFT",
                                symbol: "pxETH"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                chainKey: "arbitrum",
                                address: "0x300d2c875C6fb8Ce4bf5480B4d34b7c9ea8a33A4",
                                decimals: 18,
                                name: "Pirex Ether OFT",
                                symbol: "pxETH"
                            }
                        },
                        linea: {
                            eid: 30183,
                            token: {
                                chainKey: "linea",
                                address: "0x58adE43A276ddF3e101941571eDe398a32492Ed7",
                                decimals: 18,
                                name: "Pirex Ether OFT",
                                symbol: "pxETH"
                            }
                        },
                        fraxtal: {
                            eid: 30255,
                            token: {
                                chainKey: "fraxtal",
                                address: "0x58adE43A276ddF3e101941571eDe398a32492Ed7",
                                decimals: 18,
                                name: "Pirex Ether OFT",
                                symbol: "pxETH"
                            }
                        }
                    },
                    coinGeckoId: "dinero-staked-eth"
                });
        var du = d(20218);
        let dT = (0,
            X.C2)({
                deployments: {
                    ethereum: {
                        eid: 101,
                        oftProxy: {
                            address: "0xD3FDCb837DAfdb7C9C3eBD48FE22a53F6Dd3d7D7"
                        },
                        token: {
                            chainKey: "ethereum",
                            symbol: "QI",
                            address: "0x559b7bfC48a5274754b08819F75C5F27aF53D53b",
                            decimals: 18
                        }
                    },
                    bsc: {
                        eid: 102,
                        token: {
                            chainKey: "bsc",
                            symbol: "QI",
                            address: "0xD3FDCb837DAfdb7C9C3eBD48FE22a53F6Dd3d7D7",
                            decimals: 18
                        }
                    },
                    avalanche: {
                        eid: 106,
                        token: {
                            chainKey: "avalanche",
                            symbol: "QI",
                            address: "0xD3FDCb837DAfdb7C9C3eBD48FE22a53F6Dd3d7D7",
                            decimals: 18
                        }
                    },
                    polygon: {
                        eid: 109,
                        token: {
                            chainKey: "polygon",
                            symbol: "QI",
                            address: "0xD3FDCb837DAfdb7C9C3eBD48FE22a53F6Dd3d7D7",
                            decimals: 18
                        }
                    },
                    arbitrum: {
                        eid: 110,
                        token: {
                            chainKey: "arbitrum",
                            symbol: "QI",
                            address: "0xD3FDCb837DAfdb7C9C3eBD48FE22a53F6Dd3d7D7",
                            decimals: 18
                        }
                    },
                    optimism: {
                        eid: 111,
                        token: {
                            chainKey: "optimism",
                            symbol: "QI",
                            address: "0xD3FDCb837DAfdb7C9C3eBD48FE22a53F6Dd3d7D7",
                            decimals: 18
                        }
                    },
                    fantom: {
                        eid: 112,
                        token: {
                            chainKey: "fantom",
                            symbol: "QI",
                            address: "0xD3FDCb837DAfdb7C9C3eBD48FE22a53F6Dd3d7D7",
                            decimals: 18
                        }
                    },
                    moonbeam: {
                        eid: 126,
                        token: {
                            chainKey: "moonbeam",
                            symbol: "QI",
                            address: "0xD3FDCb837DAfdb7C9C3eBD48FE22a53F6Dd3d7D7",
                            decimals: 18
                        }
                    },
                    metis: {
                        eid: 151,
                        token: {
                            chainKey: "metis",
                            symbol: "QI",
                            address: "0xD3FDCb837DAfdb7C9C3eBD48FE22a53F6Dd3d7D7",
                            decimals: 18
                        }
                    },
                    kava: {
                        eid: 177,
                        token: {
                            chainKey: "kava",
                            symbol: "QI",
                            address: "0xD3FDCb837DAfdb7C9C3eBD48FE22a53F6Dd3d7D7",
                            decimals: 18
                        }
                    },
                    mantle: {
                        eid: 181,
                        token: {
                            chainKey: "mantle",
                            symbol: "QI",
                            address: "0xD3FDCb837DAfdb7C9C3eBD48FE22a53F6Dd3d7D7",
                            decimals: 18
                        }
                    },
                    linea: {
                        eid: 183,
                        token: {
                            chainKey: "linea",
                            symbol: "QI",
                            address: "0xD3FDCb837DAfdb7C9C3eBD48FE22a53F6Dd3d7D7",
                            decimals: 18
                        }
                    },
                    base: {
                        eid: 184,
                        token: {
                            chainKey: "base",
                            symbol: "QI",
                            address: "0xD3FDCb837DAfdb7C9C3eBD48FE22a53F6Dd3d7D7",
                            decimals: 18
                        }
                    }
                },
                sharedDecimals: 8,
                version: 2,
                fee: !1,
                coinMarketCapId: 10237
            })
            , dS = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    fee: !0,
                    limit: !1,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x44709a920fCcF795fbC57BAA433cc3dd53C44DbE",
                                decimals: 18,
                                name: "DappRadar",
                                symbol: "RADAR"
                            },
                            oftProxy: {
                                address: "0x1713bd4cd1b8f0342c48fbd68658605346386324"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            token: {
                                chainKey: "bsc",
                                address: "0x489580eB70a50515296eF31E8179fF3e77E24965",
                                decimals: 18,
                                name: "DappRadar",
                                symbol: "RADAR"
                            },
                            oftProxy: {
                                address: "0x1713bd4cd1b8f0342c48fbd68658605346386324"
                            }
                        },
                        polygon: {
                            eid: 30109,
                            token: {
                                chainKey: "polygon",
                                address: "0xdCb72AE4d5dc6Ae274461d57E65dB8D50d0a33AD",
                                decimals: 18,
                                name: "DappRadar",
                                symbol: "RADAR"
                            },
                            oftProxy: {
                                address: "0x1713bd4cd1b8f0342c48fbd68658605346386324"
                            }
                        }
                    },
                    coinMarketCapId: 15188,
                    coinGeckoId: "dappradar"
                })
            , dv = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            oftProxy: {
                                address: "0x1F1aA4d239002bB818536c95E9b762a1FC8484C1"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "RAIN",
                                address: "0xe3944AB788A60ca266f1eEc3C26925b95f6370aD",
                                decimals: 18
                            }
                        },
                        base: {
                            eid: 184,
                            token: {
                                chainKey: "base",
                                symbol: "RAIN",
                                address: "0x1F1aA4d239002bB818536c95E9b762a1FC8484C1",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 8,
                    version: 2,
                    fee: !0,
                    coinMarketCapId: 27319
                })
            , dP = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !1,
                    deployments: {
                        arbitrum: {
                            eid: 30110,
                            token: {
                                address: "0x441Fcb23dFe8289cf572126FEDCf450974ADc891",
                                chainKey: "arbitrum",
                                decimals: 18,
                                name: "RBTC",
                                symbol: "RBTC"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                address: "0x441Fcb23dFe8289cf572126FEDCf450974ADc891",
                                chainKey: "base",
                                decimals: 18,
                                name: "RBTC",
                                symbol: "RBTC"
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            token: {
                                address: "0x1e44f98cC78d505A61F63b26D13b116CF51dbB87",
                                chainKey: "ethereum",
                                decimals: 18,
                                name: "RBTC",
                                symbol: "RBTC"
                            }
                        },
                        rootstock: {
                            eid: 30333,
                            oftNative: {
                                address: "0x5ca9fa3e15f0d6841a64e83722898b9a80df7a1e"
                            },
                            token: {
                                chainKey: "rootstock",
                                decimals: 18,
                                name: "RBTC",
                                symbol: "RBTC"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            oft: {
                                programId: "8D4ngtM1m6xMLmEC5Jzd6N7r5cyoLwhMuoJhEskkgWA9"
                            },
                            token: {
                                chainKey: "solana",
                                decimals: 9,
                                symbol: "RBTC",
                                name: "RBTC",
                                address: "8yev7nLen2PFN2uYGhzsUbu243wMa9z4ZrCwuXs6DEQw",
                                programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                            },
                            tokenEscrow: {
                                address: "CHDJkrJUhrG7JBcN9V1dx4KW4DiLTg1aBy42nk2Kg4uN"
                            }
                        }
                    },
                    coinMarketCapId: 3626,
                    coinGeckoId: "rootstock"
                })
            , dI = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            token: {
                                chainKey: "ethereum",
                                symbol: "RDNT",
                                address: "0x137dDB47Ee24EaA998a535Ab00378d6BFa84F893",
                                decimals: 18
                            }
                        },
                        bsc: {
                            eid: 102,
                            token: {
                                chainKey: "bsc",
                                symbol: "RDNT",
                                address: "0xf7DE7E8A6bd59ED41a4b5fe50278b3B7f31384dF",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "RDNT",
                                address: "0x3082CC23568eA640225c2467653dB90e9250AaA0",
                                decimals: 18
                            }
                        },
                        base: {
                            eid: 184,
                            token: {
                                chainKey: "base",
                                symbol: "RDNT",
                                address: "0xd722E55C1d9D9fA0021A5215Cbb904b92B3dC5d4",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 8,
                    version: 2,
                    fee: !1,
                    coinMarketCapId: 21106
                })
            , dg = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinMarketCapId: 32229,
                    deployments: {
                        base: {
                            eid: 30184,
                            version: 3,
                            oftProxy: {
                                address: "0x3c48130227B657630e5D30F136A8CBB110640aA5"
                            },
                            token: {
                                chainKey: "base",
                                decimals: 18,
                                symbol: "RECORD",
                                name: "MusicProtocolRECORDToken",
                                address: "0xE642657E4F43e6DcF0bd73Ef24008394574Dee28"
                            }
                        },
                        plumephoenix: {
                            eid: 30370,
                            version: 3,
                            token: {
                                chainKey: "plumephoenix",
                                decimals: 18,
                                symbol: "RECORD",
                                name: "RECORD",
                                address: "0x3c48130227B657630e5D30F136A8CBB110640aA5"
                            }
                        },
                        solana: {
                            eid: 30168,
                            token: {
                                chainKey: "solana",
                                symbol: "RECORD",
                                address: "nMRuwNqQsTt47yyQ5LqDtXgeegvyu5kNvCJQ369KKp5",
                                decimals: 6
                            },
                            oft: {
                                programId: "HRPXLCqspQocTjfcX4rvAPaY9q6Gwb1rrD3xXWrfJWdW"
                            }
                        }
                    }
                })
            , dM = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            token: {
                                chainKey: "ethereum",
                                symbol: "REUNI",
                                address: "0x9ed7E4B1BFF939ad473dA5E7a218C771D1569456",
                                decimals: 6
                            }
                        },
                        bsc: {
                            eid: 102,
                            token: {
                                chainKey: "bsc",
                                symbol: "REUNI",
                                address: "0x9ed7E4B1BFF939ad473dA5E7a218C771D1569456",
                                decimals: 6
                            }
                        },
                        polygon: {
                            eid: 109,
                            token: {
                                chainKey: "polygon",
                                symbol: "REUNI",
                                address: "0x9ed7E4B1BFF939ad473dA5E7a218C771D1569456",
                                decimals: 6
                            }
                        },
                        avalanche: {
                            eid: 106,
                            token: {
                                chainKey: "avalanche",
                                symbol: "REUNI",
                                address: "0x9ed7E4B1BFF939ad473dA5E7a218C771D1569456",
                                decimals: 6
                            }
                        },
                        arbitrum: {
                            eid: 110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "REUNI",
                                address: "0x9ed7E4B1BFF939ad473dA5E7a218C771D1569456",
                                decimals: 6
                            }
                        },
                        optimism: {
                            eid: 111,
                            token: {
                                chainKey: "optimism",
                                symbol: "REUNI",
                                address: "0x9ed7E4B1BFF939ad473dA5E7a218C771D1569456",
                                decimals: 6
                            }
                        },
                        fantom: {
                            eid: 112,
                            token: {
                                chainKey: "fantom",
                                symbol: "REUNI",
                                address: "0x9ed7E4B1BFF939ad473dA5E7a218C771D1569456",
                                decimals: 6
                            }
                        }
                    },
                    sharedDecimals: 6,
                    version: 1,
                    fee: !1,
                    coinMarketCapId: 23996
                })
            , dU = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinMarketCapId: 6993,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            version: 3,
                            oftProxy: {
                                address: "0x87964551CAf340E17B7b00dFC1dB2F6b67B4D5B1"
                            },
                            token: {
                                chainKey: "ethereum",
                                decimals: 18,
                                symbol: "REVV",
                                name: "REVV",
                                address: "0x557B933a7C2c45672B610F8954A3deB39a51A8Ca"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            oft: {
                                programId: "25yYb7rDTqyxjEafvm4AyxjyT93CySenyz6Wbab7knUF"
                            },
                            token: {
                                chainKey: "solana",
                                decimals: 9,
                                symbol: "REVV",
                                name: "REVV",
                                address: "47gsKcJ9QAc97qSRkZE5h3R5pHMVQnmoovhd3niKzYEx",
                                programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                            },
                            tokenEscrow: {
                                address: "ChjU8yELhYt5gSDsR4x12QMRnU5PQTGyJLUv8Dey6DHN"
                            }
                        }
                    }
                })
            , dR = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        arbitrum: {
                            eid: 30110,
                            token: {
                                address: "0xe5e851b01DD3Eda24FDe709a407dB44555B6d1E0",
                                chainKey: "arbitrum",
                                decimals: 18,
                                name: "RIF",
                                symbol: "RIF"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                address: "0xe5e851b01DD3Eda24FDe709a407dB44555B6d1E0",
                                chainKey: "base",
                                decimals: 18,
                                name: "RIF",
                                symbol: "RIF"
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            token: {
                                address: "0x01b603be3D545F096015741e6503440282BF45fb",
                                chainKey: "ethereum",
                                decimals: 18,
                                name: "RIF",
                                symbol: "RIF"
                            }
                        },
                        rootstock: {
                            eid: 30333,
                            oftProxy: {
                                address: "0x9156935Cd0C26EA9f50BEf255f62Bc88f94765A2"
                            },
                            token: {
                                address: "0x2AcC95758f8b5F583470ba265EB685a8F45fC9D5",
                                chainKey: "rootstock",
                                decimals: 18,
                                name: "RIF",
                                symbol: "RIF"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            oft: {
                                programId: "8D4ngtM1m6xMLmEC5Jzd6N7r5cyoLwhMuoJhEskkgWA9"
                            },
                            token: {
                                chainKey: "solana",
                                decimals: 9,
                                symbol: "RIF",
                                name: "RIF",
                                address: "AAeENcfHbTExuTvs4q7r9Bjax98Dg6BGX3aMph4bTLdK",
                                programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                            },
                            tokenEscrow: {
                                address: "bdBiNFE9M6i4A9RBKdPCc4jbbiBxuMvTfGCaaPMpBnR"
                            }
                        }
                    },
                    coinMarketCapId: 3701
                })
            , dG = (0,
                X.C2)({
                    version: 3,
                    sharedDecimals: 6,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        sonic: {
                            eid: 30332,
                            token: {
                                address: "0x4BBA0693Aa204c80229469D0c95034BAeeD57CDA",
                                chainKey: "sonic",
                                decimals: 18,
                                name: "OneRing",
                                symbol: "RING"
                            }
                        },
                        fantom: {
                            eid: 30112,
                            token: {
                                address: "0x582423C10c9e83387a96d00A69bA3D11ee47B7b5",
                                chainKey: "fantom",
                                decimals: 18,
                                name: "OneRing",
                                symbol: "RING"
                            },
                            oftProxy: {
                                address: "0x34858B68FD411Bb9c339cED41FC6334E67C7e02D"
                            }
                        }
                    },
                    coinGeckoId: "onering"
                })
            , dH = (0,
                X.C2)({
                    coinGeckoId: "resolv-rlp",
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x4956b52aE2fF65D74CA2d61207523288e4528f96",
                                decimals: 18,
                                name: "Resolv Liquidity Provider Token",
                                symbol: "RLP"
                            },
                            oftProxy: {
                                address: "0x234C908E749961d0329a0eD5916d55a99d1aD06c"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                chainKey: "arbitrum",
                                address: "0x35E5dB674D8e93a03d814FA0ADa70731efe8a4b9",
                                decimals: 18,
                                name: "Resolv Liquidity Provider Token",
                                symbol: "RLP"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0xC31389794Ffac23331E0D9F611b7953f90AA5fDC",
                                decimals: 18,
                                name: "Resolv Liquidity Provider Token",
                                symbol: "RLP"
                            }
                        },
                        bera: {
                            eid: 30362,
                            token: {
                                address: "0x35E5dB674D8e93a03d814FA0ADa70731efe8a4b9",
                                chainKey: "bera",
                                decimals: 18,
                                name: "Resolv Liquidity Provider Token",
                                symbol: "RLP"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            token: {
                                chainKey: "bsc",
                                decimals: 18,
                                symbol: "RLP",
                                name: "Resolv Liquidity Provider Token",
                                address: "0x35E5dB674D8e93a03d814FA0ADa70731efe8a4b9"
                            }
                        },
                        hyperliquid: {
                            eid: 30367,
                            version: 3,
                            token: {
                                chainKey: "hyperliquid",
                                decimals: 18,
                                symbol: "RLP",
                                name: "Resolv Liquidity Provider Token",
                                address: "0x0a3d8466F5dE586FA5F6DE117301e2f90bCC5c48"
                            }
                        }
                    }
                })
            , dL = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            oftProxy: {
                                address: "0x85d456B2DfF1fd8245387C0BfB64Dfb700e98Ef3"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "rsETH",
                                address: "0xA1290d69c65A6Fe4DF752f95823fae25cB99e5A7",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "rsETH",
                                address: "0x4186BFC76E2E237523CBC30FD220FE055156b41F",
                                decimals: 18
                            }
                        },
                        manta: {
                            eid: 30217,
                            token: {
                                chainKey: "manta",
                                symbol: "rsETH",
                                address: "0x4186BFC76E2E237523CBC30FD220FE055156b41F",
                                decimals: 18
                            }
                        },
                        mode: {
                            eid: 30260,
                            token: {
                                chainKey: "mode",
                                symbol: "rsETH",
                                address: "0x4186BFC76E2E237523CBC30FD220FE055156b41F",
                                decimals: 18
                            }
                        },
                        blast: {
                            eid: 30243,
                            token: {
                                chainKey: "blast",
                                symbol: "rsETH",
                                address: "0x4186BFC76E2E237523CBC30FD220FE055156b41F",
                                decimals: 18
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                symbol: "rsETH",
                                address: "0x1Bc71130A0e39942a7658878169764Bbd8A45993",
                                decimals: 18
                            }
                        },
                        optimism: {
                            eid: 30111,
                            token: {
                                chainKey: "optimism",
                                symbol: "rsETH",
                                address: "0x4186BFC76E2E237523CBC30FD220FE055156b41F",
                                decimals: 18
                            }
                        },
                        scroll: {
                            eid: 30214,
                            token: {
                                chainKey: "scroll",
                                symbol: "rsETH",
                                address: "0x65421ba909200b81640d98B979d07487C9781B66",
                                decimals: 18
                            }
                        },
                        linea: {
                            eid: 30183,
                            token: {
                                chainKey: "linea",
                                symbol: "rsETH",
                                address: "0x4186BFC76E2E237523CBC30FD220FE055156b41F",
                                decimals: 18
                            }
                        },
                        zksync: {
                            eid: 30165,
                            token: {
                                chainKey: "zksync",
                                symbol: "rsETH",
                                address: "0x6bE2425C381eb034045b527780D2Bf4E21AB7236",
                                decimals: 18
                            }
                        },
                        zircuit: {
                            eid: 30303,
                            token: {
                                chainKey: "zircuit",
                                symbol: "rsETH",
                                address: "0x4186BFC76E2E237523CBC30FD220FE055156b41F",
                                decimals: 18
                            }
                        },
                        xlayer: {
                            eid: 30274,
                            token: {
                                chainKey: "xlayer",
                                symbol: "rsETH",
                                address: "0x1B3a9A689Ba7555F9D7984D7Ad4025574Ed5A0f9",
                                decimals: 18
                            }
                        },
                        swell: {
                            eid: 30335,
                            token: {
                                chainKey: "swell",
                                symbol: "rsETH",
                                address: "0xc3eACf0612346366Db554C991D7858716db09f58",
                                decimals: 18
                            }
                        },
                        hemi: {
                            eid: 30329,
                            token: {
                                chainKey: "hemi",
                                symbol: "rsETH",
                                address: "0xc3eACf0612346366Db554C991D7858716db09f58",
                                decimals: 18
                            }
                        },
                        bera: {
                            eid: 30362,
                            token: {
                                chainKey: "bera",
                                symbol: "rsETH",
                                address: "0x4186BFC76E2E237523CBC30FD220FE055156b41F",
                                decimals: 18
                            }
                        },
                        sonic: {
                            eid: 30332,
                            version: 3,
                            token: {
                                address: "0xd75787bA9ABa324420d522BdA84c08c87e5099b1",
                                decimals: 18,
                                symbol: "rsETH",
                                chainKey: "sonic"
                            }
                        },
                        unichain: {
                            eid: 30320,
                            version: 3,
                            token: {
                                address: "0xc3eACf0612346366Db554C991D7858716db09f58",
                                decimals: 18,
                                chainKey: "unichain",
                                symbol: "rsETH"
                            }
                        }
                    },
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !1,
                    coinMarketCapId: 29242
                })
            , dN = (0,
                X.C2)({
                    fee: !0,
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                symbol: "rswETH",
                                address: "0xFAe103DC9cf190eD75350761e95403b7b8aFa6c0",
                                decimals: 18
                            },
                            oftProxy: {
                                address: "0x1486D39646cdee84619bd05997319545A8575079"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "rswETH",
                                address: "0xB1Fe27b32fFb5CE54E272C096547F1e86c19e72F",
                                decimals: 18
                            }
                        },
                        scroll: {
                            eid: 30214,
                            token: {
                                chainKey: "scroll",
                                symbol: "rswETH",
                                address: "0x89f17aB70cAFB1468D633056161573efEfeA0713",
                                decimals: 18
                            }
                        },
                        linea: {
                            eid: 30183,
                            token: {
                                chainKey: "linea",
                                symbol: "rswETH",
                                address: "0xB1Fe27b32fFb5CE54E272C096547F1e86c19e72F",
                                decimals: 18
                            }
                        },
                        zircuit: {
                            eid: 30303,
                            token: {
                                chainKey: "zircuit",
                                symbol: "rswETH",
                                address: "0xD8b29106d4ceBad087C30B10c0E41BAa3A9ea703",
                                decimals: 18
                            }
                        },
                        bera: {
                            eid: 30362,
                            token: {
                                chainKey: "bera",
                                symbol: "rswETH",
                                address: "0x850CDF416668210ED0c36bfFF5d21921C7adA3b8",
                                decimals: 18
                            }
                        }
                    },
                    coinMarketCapId: 29974
                })
            , dO = (0,
                X.C2)({
                    version: 3,
                    sharedDecimals: 6,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                address: "0x09D4214C03D01F49544C0448DBE3A27f768F2b34",
                                chainKey: "ethereum",
                                decimals: 18,
                                name: "Reservoir Stablecoin",
                                symbol: "rUSD"
                            },
                            oftProxy: {
                                address: "0xf0e9f6D9Ba5D1B3f76e0f82F9DCDb9eBEef4b4dA"
                            },
                            executorLzReceiveOption: {
                                gasLimit: 2e5
                            }
                        },
                        bera: {
                            eid: 30362,
                            token: {
                                address: "0x09D4214C03D01F49544C0448DBE3A27f768F2b34",
                                chainKey: "bera",
                                decimals: 18,
                                name: "Reservoir Stablecoin",
                                symbol: "rUSD"
                            },
                            executorLzReceiveOption: {
                                gasLimit: 2e5
                            }
                        }
                    },
                    coinGeckoId: "reservoir-rusd"
                })
            , dw = (0,
                X.C2)({
                    coinMarketCapId: 33611,
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        bsc: {
                            eid: 30102,
                            token: {
                                chainKey: "bsc",
                                address: "0xE2B1dc2D4A3b4E59FDF0c47B71A7A86391a8B35a",
                                decimals: 18,
                                name: "RWA Inc",
                                symbol: "RWA"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                chainKey: "arbitrum",
                                address: "0xE2B1dc2D4A3b4E59FDF0c47B71A7A86391a8B35a",
                                decimals: 18,
                                name: "RWA Inc",
                                symbol: "RWA"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0xE2B1dc2D4A3b4E59FDF0c47B71A7A86391a8B35a",
                                decimals: 18,
                                name: "RWA Inc",
                                symbol: "RWA"
                            }
                        }
                    }
                })
            , dW = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    deployments: {
                        base: {
                            eid: 30184,
                            version: 3,
                            oftProxy: {
                                address: "0x8c47A7CC943f1c53102d226239f431B6f0133FeC"
                            },
                            token: {
                                chainKey: "base",
                                decimals: 18,
                                symbol: "RWAX",
                                name: "Rwax Token",
                                address: "0xe0023E73aab4fE9a22f059a9d27E857E027eE3dc"
                            }
                        },
                        plumephoenix: {
                            eid: 30370,
                            version: 3,
                            token: {
                                chainKey: "plumephoenix",
                                decimals: 18,
                                symbol: "RWAX",
                                name: "RWAX",
                                address: "0xd88eC8396e7b9731a2C0D564d520bee427b4B5E5"
                            }
                        }
                    },
                    coinGeckoId: "rwax"
                })
            , dX = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !1,
                    deployments: {
                        sonic: {
                            eid: 30332,
                            token: {
                                chainKey: "sonic",
                                decimals: 18,
                                name: "Sonic",
                                symbol: "S"
                            },
                            oftNative: {
                                address: "0xc2c08bef6c3659018aFf49917A8Cbe551A1deCaA"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            token: {
                                chainKey: "solana",
                                name: "Sonic",
                                symbol: "S",
                                address: "3rQK45d1ojXR7vtvCmeNjKKVycnVWqaVcP3zk1G39RJR",
                                decimals: 9,
                                programId: V.H_
                            },
                            tokenEscrow: {
                                address: "4Mtc837QFP3t5iKKhx8L5G8GV5a3wpmwUk7T9VqeLXkC"
                            },
                            oft: {
                                programId: "Bwmzh811xSSbK4CjWdiZ5bDzYNLRQ2BE1TDEcyiJbKeN"
                            }
                        }
                    },
                    coinMarketCapId: 32684,
                    coinGeckoId: "sonic-3"
                })
            , dV = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinGeckoId: "samurai-starter",
                    deployments: {
                        base: {
                            eid: 30184,
                            version: 3,
                            oftProxy: {
                                address: "0x705A91029c2A1432bd75DDEa9BAE2C04e8B7b077"
                            },
                            token: {
                                chainKey: "base",
                                decimals: 18,
                                symbol: "SAM",
                                name: "SAMURAI",
                                address: "0xed1779845520339693CDBffec49a74246E7D671b"
                            }
                        },
                        sonic: {
                            eid: 30332,
                            version: 3,
                            token: {
                                chainKey: "sonic",
                                decimals: 18,
                                symbol: "SAM",
                                name: "SAMURAI",
                                address: "0xCC5D9cc0d781d7F41F6809c0E8356C15942b775E"
                            }
                        }
                    }
                })
            , dz = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0xac531Eb26Ca1d21b85126De8FB87E80E09002DcF",
                                decimals: 18,
                                name: "SAND",
                                symbol: "SAND"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            token: {
                                chainKey: "bsc",
                                address: "0xac531Eb26Ca1d21b85126De8FB87E80E09002DcF",
                                decimals: 18,
                                name: "SAND",
                                symbol: "SAND"
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x3845badAde8e6dFF049820680d1F14bD3903a5d0",
                                decimals: 18,
                                name: "SAND",
                                symbol: "SAND"
                            },
                            oftProxy: {
                                address: "0xac531Eb26Ca1d21b85126De8FB87E80E09002DcF"
                            }
                        }
                    },
                    coinMarketCapId: 6210
                })
            , dZ = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinMarketCapId: 26456,
                    coinGeckoId: "",
                    deployments: {
                        arbitrum: {
                            eid: 30110,
                            version: 3,
                            oftProxy: {
                                address: "0xb9d852A3F9B3A82E243FaAB0272604102a111E1a"
                            },
                            token: {
                                chainKey: "arbitrum",
                                decimals: 18,
                                symbol: "SBC",
                                name: "Stable Coin",
                                address: "0xfdcC3dd6671eaB0709A4C0f3F53De9a333d80798"
                            }
                        },
                        polygon: {
                            eid: 30109,
                            version: 3,
                            oftProxy: {
                                address: "0xb9d852A3F9B3A82E243FaAB0272604102a111E1a"
                            },
                            token: {
                                chainKey: "polygon",
                                decimals: 18,
                                symbol: "SBC",
                                name: "Stable Coin",
                                address: "0xfdcC3dd6671eaB0709A4C0f3F53De9a333d80798"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            oft: {
                                programId: "FBLPCK5w3wxpfxsdZfBcRfQCSXcC9x2cmocYHb5K6EZc"
                            },
                            token: {
                                chainKey: "solana",
                                decimals: 9,
                                symbol: "SBC",
                                name: "Stable Coin",
                                address: "DBAzBUXaLj1qANCseUPZz4sp9F8d2sc78C4vKjhbTGMA",
                                programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                            },
                            tokenEscrow: {
                                address: "22f6xYM974eywBiryo2eUaJVsxdKqqPnqivzKuhjVPJG"
                            }
                        },
                        celo: {
                            eid: 30125,
                            version: 3,
                            oftProxy: {
                                address: "0xb9d852A3F9B3A82E243FaAB0272604102a111E1a"
                            },
                            token: {
                                chainKey: "celo",
                                decimals: 18,
                                symbol: "SBC",
                                name: "Stable Coin",
                                address: "0xDE093684c796204224BC081f937aa059D903c52a"
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            version: 3,
                            oftProxy: {
                                address: "0xb9d852A3F9B3A82E243FaAB0272604102a111E1a"
                            },
                            token: {
                                chainKey: "ethereum",
                                decimals: 18,
                                symbol: "SBC",
                                name: "Stable Coin",
                                address: "0xf9FB20B8E097904f0aB7d12e9DbeE88f2dcd0F16"
                            }
                        },
                        base: {
                            eid: 30184,
                            version: 3,
                            oftProxy: {
                                address: "0xb9d852A3F9B3A82E243FaAB0272604102a111E1a"
                            },
                            token: {
                                chainKey: "base",
                                decimals: 18,
                                symbol: "SBC",
                                name: "Stable Coin",
                                address: "0xfdcC3dd6671eaB0709A4C0f3F53De9a333d80798"
                            }
                        },
                        optimism: {
                            eid: 30111,
                            version: 3,
                            oftProxy: {
                                address: "0xb9d852A3F9B3A82E243FaAB0272604102a111E1a"
                            },
                            token: {
                                chainKey: "optimism",
                                decimals: 18,
                                symbol: "SBC",
                                name: "Stable Coin",
                                address: "0xf9FB20B8E097904f0aB7d12e9DbeE88f2dcd0F16"
                            }
                        },
                        avalanche: {
                            eid: 30106,
                            version: 3,
                            oftProxy: {
                                address: "0x1BF472c38B00F6070ABb61628d76870561890Bba"
                            },
                            token: {
                                chainKey: "avalanche",
                                decimals: 18,
                                symbol: "SBC",
                                name: "Stable Coin",
                                address: "0xf9FB20B8E097904f0aB7d12e9DbeE88f2dcd0F16"
                            }
                        }
                    }
                })
            , dQ = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0xC5ECB8c506898bd5eEeC63C5F69c7819E37084b8",
                                decimals: 18,
                                name: "Staked Dinero OFT",
                                symbol: "sDINERO"
                            }
                        },
                        optimism: {
                            eid: 30111,
                            token: {
                                chainKey: "optimism",
                                address: "0xC5ECB8c506898bd5eEeC63C5F69c7819E37084b8",
                                decimals: 18,
                                name: "Staked Dinero OFT",
                                symbol: "sDINERO"
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x55769490c825CCb09b2A6Ae955203FaBF04857fd",
                                decimals: 18,
                                name: "Staked Dinero",
                                symbol: "sDINERO"
                            },
                            oftProxy: {
                                address: "0xC5ECB8c506898bd5eEeC63C5F69c7819E37084b8"
                            }
                        },
                        zksync: {
                            eid: 30165,
                            token: {
                                chainKey: "zksync",
                                name: "Staked Dinero",
                                symbol: "sDINERO",
                                address: "0x5088c7858019a5579A29d4Bc2815E7475AF3A551",
                                decimals: 18
                            }
                        },
                        flare: {
                            eid: 30295,
                            token: {
                                chainKey: "flare",
                                name: "Staked Dinero",
                                symbol: "sDINERO",
                                address: "0x20A02ecD89632a228AB04C46Aa9Ac2Bc4E76f85D",
                                decimals: 18
                            }
                        }
                    },
                    coinMarketCapId: 32492
                })
            , dY = (0,
                X.C2)({
                    version: 3,
                    sharedDecimals: 6,
                    limit: !1,
                    fee: !1,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                address: "0xbdF43ecAdC5ceF51B7D1772F722E40596BC1788B",
                                chainKey: "ethereum",
                                decimals: 18,
                                name: "SEI",
                                symbol: "SEI"
                            }
                        },
                        sei: {
                            eid: 30280,
                            token: {
                                chainKey: "sei",
                                decimals: 18,
                                name: "SEI",
                                symbol: "SEI"
                            },
                            oftNative: {
                                address: "0xbdF43ecAdC5ceF51B7D1772F722E40596BC1788B"
                            }
                        },
                        solana: {
                            eid: 30168,
                            token: {
                                chainKey: "solana",
                                name: "SEI",
                                symbol: "SEI",
                                address: "5jPMp8GjiCSR7HrnTc3xBLrRCxKHri8BFbmuoFfosBPn",
                                decimals: 6
                            },
                            oft: {
                                programId: "HRPXLCqspQocTjfcX4rvAPaY9q6Gwb1rrD3xXWrfJWdW"
                            }
                        }
                    },
                    coinMarketCapId: 23149
                })
            , dq = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        base: {
                            eid: 30184,
                            token: {
                                address: "0x9bDE70Bad05b7D84dAc03024daE15aAce8C9CCa2",
                                chainKey: "base",
                                decimals: 18,
                                symbol: "SEILOR",
                                name: "Michael Seilor"
                            }
                        },
                        sei: {
                            eid: 30280,
                            token: {
                                address: "0x89aeC21572F6637cCbd0d66861AAAC46Dd775ed1",
                                chainKey: "sei",
                                decimals: 6,
                                symbol: "SEILOR",
                                name: "seilor"
                            },
                            oftProxy: {
                                address: "0x1Ed2a25b8FeF9d2a1436c901e326E8Afb8AdAe01"
                            }
                        }
                    },
                    coinMarketCapId: 27838,
                    coinGeckoId: "kryptonite"
                })
            , dJ = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            oftProxy: {
                                address: "0xe4796ccb6bb5de2290c417ac337f2b66ca2e770e"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "sFRAX",
                                address: "0xA663B02CF0a4b149d2aD41910CB81e23e1c41c32",
                                decimals: 18
                            }
                        },
                        blast: {
                            eid: 30243,
                            token: {
                                chainKey: "blast",
                                symbol: "sFRAX",
                                address: "0xe4796cCB6bB5DE2290C417Ac337F2b66CA2E770E",
                                decimals: 18
                            }
                        },
                        metis: {
                            eid: 30151,
                            token: {
                                chainKey: "metis",
                                symbol: "sFRAX",
                                address: "0xe4796cCB6bB5DE2290C417Ac337F2b66CA2E770E",
                                decimals: 18
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                symbol: "sFRAX",
                                address: "0xe4796cCB6bB5DE2290C417Ac337F2b66CA2E770E",
                                decimals: 18
                            }
                        },
                        sei: {
                            eid: 30280,
                            token: {
                                chainKey: "sei",
                                symbol: "sFRAX",
                                address: "0x5Bff88cA1442c2496f7E475E9e7786383Bc070c0",
                                decimals: 18
                            }
                        },
                        xlayer: {
                            eid: 30274,
                            token: {
                                chainKey: "xlayer",
                                symbol: "sFRAX",
                                address: "0x5bff88ca1442c2496f7e475e9e7786383bc070c0",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    coinMarketCapId: 6952
                })
            , dj = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            oftProxy: {
                                address: "0x1f55a02A049033E3419a8E2975cF3F572F4e6E9A"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "sfrxETH",
                                address: "0xac3E018457B222d93114458476f3E3416Abbe38F",
                                decimals: 18
                            }
                        },
                        metis: {
                            eid: 30151,
                            token: {
                                chainKey: "metis",
                                symbol: "sfrxETH",
                                address: "0x1f55a02A049033E3419a8E2975cF3F572F4e6E9A",
                                decimals: 18
                            }
                        },
                        blast: {
                            eid: 30243,
                            token: {
                                chainKey: "blast",
                                symbol: "sfrxETH",
                                address: "0x1f55a02A049033E3419a8E2975cF3F572F4e6E9A",
                                decimals: 18
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                symbol: "sfrxETH",
                                address: "0x1f55a02A049033E3419a8E2975cF3F572F4e6E9A",
                                decimals: 18
                            }
                        },
                        sei: {
                            eid: 30280,
                            token: {
                                chainKey: "sei",
                                symbol: "sfrxETH",
                                address: "0x3Ec3849C33291a9eF4c5dB86De593EB4A37fDe45",
                                decimals: 18
                            }
                        },
                        xlayer: {
                            eid: 30274,
                            token: {
                                chainKey: "xlayer",
                                symbol: "sfrxETH",
                                address: "0x3ec3849c33291a9ef4c5db86de593eb4a37fde45",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    coinMarketCapId: 23177
                })
            , d_ = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            token: {
                                chainKey: "ethereum",
                                symbol: "SFUND",
                                address: "0x560363BdA52BC6A44CA6C8c9B4a5FadbDa32fa60",
                                decimals: 18
                            }
                        },
                        bsc: {
                            eid: 102,
                            oftProxy: {
                                address: "0x560363bda52bc6a44ca6c8c9b4a5fadbda32fa60"
                            },
                            token: {
                                chainKey: "bsc",
                                symbol: "SFUND",
                                address: "0x477bC8d23c634C154061869478bce96BE6045D12",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "SFUND",
                                address: "0x560363BdA52BC6A44CA6C8c9B4a5FadbDa32fa60",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 18,
                    version: 1,
                    fee: !1,
                    coinMarketCapId: 8972
                })
            , d$ = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                address: "0xf2c88757f8d03634671208935974B60a2a28Bdb3",
                                chainKey: "ethereum",
                                decimals: 18,
                                name: "MyShell Token",
                                symbol: "SHELL"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            token: {
                                address: "0xf2c88757f8d03634671208935974B60a2a28Bdb3",
                                chainKey: "bsc",
                                decimals: 18,
                                name: "MyShell Token",
                                symbol: "SHELL"
                            }
                        }
                    }
                })
            , d0 = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            token: {
                                chainKey: "ethereum",
                                symbol: "SHRAP",
                                address: "0x31e4efe290973ebE91b3a875a7994f650942D28F",
                                decimals: 18
                            }
                        },
                        bsc: {
                            eid: 102,
                            token: {
                                chainKey: "bsc",
                                symbol: "SHRAP",
                                address: "0x31e4efe290973ebE91b3a875a7994f650942D28F",
                                decimals: 18
                            }
                        },
                        avalanche: {
                            eid: 106,
                            token: {
                                chainKey: "avalanche",
                                symbol: "SHRAP",
                                address: "0xd402298a793948698b9a63311404FBBEe944eAfD",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 18,
                    version: "shrap",
                    fee: !1,
                    coinMarketCapId: 28363
                })
            , d1 = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0x161e113B8E9BBAEfb846F73F31624F6f9607bd44",
                                decimals: 18,
                                name: "Simmi Token",
                                symbol: "SIMMI"
                            },
                            oftProxy: {
                                address: "0x12AC01e564a01f07948E20cA0674cc444965ea53"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            token: {
                                chainKey: "solana",
                                address: "6Nf3nFbyQ1p1CVQYtEZXfeM89XyvkFPyF2JosxdriH7S",
                                decimals: 9,
                                symbol: "SIMMI",
                                programId: V.H_
                            },
                            tokenEscrow: {
                                address: "5stRiruckfEEPLW9gQnx67HaZ7uZ9ECxgSBkhPaWwk7s"
                            },
                            oft: {
                                programId: "7euzvn1kCo67wDUE514NtNPF1zKuASRZHuzXoSZM7Xqm"
                            }
                        }
                    },
                    coinGeckoId: "simmi-token"
                })
            , d3 = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                decimals: 18,
                                symbol: "SLC",
                                name: "Silencio",
                                address: "0x7FA16cEd60019adE15edd0cDb03d689d557B6d1e"
                            }
                        },
                        peaq: {
                            eid: 30302,
                            version: 3,
                            oftProxy: {
                                address: "0x7FA16cEd60019adE15edd0cDb03d689d557B6d1e"
                            },
                            token: {
                                chainKey: "peaq",
                                decimals: 18,
                                symbol: "SLC",
                                name: "Silencio",
                                address: "0x5c3126bfB9A68a7021d461230127470b3824886B"
                            }
                        }
                    },
                    coinMarketCapId: 35433,
                    coinGeckoId: "silencio"
                })
            , d8 = (0,
                X.C2)({
                    version: 3,
                    sharedDecimals: 6,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                address: "0x4737D9b4592B40d51e110b94c9C043c6654067Ae",
                                chainKey: "ethereum",
                                decimals: 18,
                                name: "Staked lvlUSD",
                                symbol: "slvlUSD"
                            },
                            oftProxy: {
                                address: "0x180FcF9C9F5ECB75de90395d54cd7c69B3902Fcd"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                address: "0x2D175C43c58E57ccEB38B9BD204ee73Db25c66e8",
                                chainKey: "base",
                                decimals: 18,
                                name: "Staked Level USD",
                                symbol: "slvlUSD"
                            }
                        }
                    },
                    coinGeckoId: "level-staked-usd"
                })
            , d2 = (0,
                X.C2)({
                    fee: !0,
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                symbol: "SNSY",
                                address: "0x82a605D6D9114F4Ad6D5Ee461027477EeED31E34",
                                decimals: 18
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                symbol: "SNSY",
                                address: "0x3124678D62D2aa1f615B54525310fbfDa6DcF7AE",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "SNSY",
                                address: "0x3124678D62D2aa1f615B54525310fbfDa6DcF7AE",
                                decimals: 18
                            }
                        }
                    },
                    coinMarketCapId: 30156
                })
            , d6 = (0,
                X.C2)({
                    version: 3,
                    sharedDecimals: 8,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                address: "0x7A56E1C57C7475CCf742a1832B028F0456652F97",
                                chainKey: "ethereum",
                                decimals: 18,
                                name: "Solv BTC",
                                symbol: "SolvBTC"
                            },
                            oftProxy: {
                                address: "0xB12979Ff302Ac903849948037A51792cF7186E8e"
                            }
                        },
                        mp1: {
                            eid: 30331,
                            token: {
                                address: "0x541FD749419CA806a8bc7da8ac23D346f2dF8B77",
                                chainKey: "mp1",
                                decimals: 18,
                                name: "Solv BTC",
                                symbol: "SolvBTC"
                            },
                            oftProxy: {
                                address: "0xB12979Ff302Ac903849948037A51792cF7186E8e"
                            }
                        },
                        bera: {
                            eid: 30362,
                            token: {
                                address: "0x541FD749419CA806a8bc7da8ac23D346f2dF8B77",
                                chainKey: "bera",
                                decimals: 18,
                                name: "Solv BTC",
                                symbol: "SolvBTC"
                            },
                            oftProxy: {
                                address: "0xB12979Ff302Ac903849948037A51792cF7186E8e"
                            }
                        },
                        rootstock: {
                            eid: 30333,
                            token: {
                                chainKey: "rootstock",
                                decimals: 18,
                                symbol: "SolvBTC",
                                name: "Solv BTC",
                                address: "0x541FD749419CA806a8bc7da8ac23D346f2dF8B77"
                            },
                            oftProxy: {
                                address: "0xB12979Ff302Ac903849948037A51792cF7186E8e"
                            }
                        }
                    },
                    coinMarketCapId: 33312
                })
            , d4 = (0,
                X.C2)({
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinMarketCapId: 32087,
                    deployments: {
                        arbitrum: {
                            eid: 30110,
                            version: 3,
                            token: {
                                chainKey: "arbitrum",
                                decimals: 18,
                                symbol: "SOPH",
                                name: "Sophon",
                                address: "0x31DbA3c96481FDe3CD81C2aaF51F2D8bf618C742"
                            }
                        },
                        polygon: {
                            eid: 30109,
                            version: 3,
                            token: {
                                chainKey: "polygon",
                                decimals: 18,
                                symbol: "SOPH",
                                name: "Sophon",
                                address: "0xEb971Fd26783f32694dbB392dD7289de23109148"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            version: 3,
                            token: {
                                chainKey: "bsc",
                                decimals: 18,
                                symbol: "SOPH",
                                name: "Sophon",
                                address: "0x31DbA3c96481FDe3CD81C2aaF51F2D8bf618C742"
                            }
                        },
                        base: {
                            eid: 30184,
                            version: 3,
                            token: {
                                chainKey: "base",
                                decimals: 18,
                                symbol: "SOPH",
                                name: "Sophon",
                                address: "0x31DbA3c96481FDe3CD81C2aaF51F2D8bf618C742"
                            }
                        },
                        sophon: {
                            eid: 30334,
                            version: 3,
                            token: {
                                chainKey: "sophon",
                                decimals: 18,
                                symbol: "SOPH",
                                name: "Sophon"
                            },
                            oftNative: {
                                address: "0x70ff61C1436d19090321A312b1f4be89D62ac55C"
                            }
                        }
                    }
                })
            , d7 = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        sanko: {
                            eid: 30278,
                            token: {
                                chainKey: "sanko",
                                address: "0x3f710cBd0F4268719C6c2E5E078a4CAfAeED7d45",
                                decimals: 18,
                                name: "Smoovie Phone",
                                symbol: "SP"
                            },
                            oftProxy: {
                                address: "0xEa6B990F3d767CfD4bBdfb7Fced163818BFA8E31"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            token: {
                                chainKey: "solana",
                                address: "E8zSHWdtgJ7pST1QPRDYkrKpnVJNoekZgETYm1yieT72",
                                decimals: 9,
                                name: "Smoovie Phone",
                                symbol: "SP",
                                programId: V.H_
                            },
                            tokenEscrow: {
                                address: "5aRzYZKWqNMeYkTyQkMJwoZ6CrNf6x29kf49WYXQLLZZ"
                            },
                            oft: {
                                programId: "8k5EAWC9G6NHcVcsn6mUgqzYHgpB4kkAkAvaaEAUQLP5"
                            }
                        }
                    },
                    coinGeckoId: "smoovie-phone"
                })
            , d9 = (0,
                X.C2)({
                    version: 3,
                    sharedDecimals: 6,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                address: "0x0bc37BEA9068a86C221B8bd71eA6228260DAD5A2",
                                chainKey: "ethereum",
                                decimals: 18,
                                name: "Upland",
                                symbol: "SPARKLET"
                            },
                            oftProxy: {
                                address: "0xc6C856Ab43E76b304230A31eCD9AD916B8B6f8e1"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                address: "0x9CD44ecA3D1E0ADa6FbDaF5793031C3a500089B1",
                                chainKey: "base",
                                decimals: 18,
                                name: "UPLAND",
                                symbol: "SPARKLET"
                            }
                        }
                    },
                    coinMarketCapId: 32341
                })
            , d5 = (0,
                X.C2)({
                    version: 3,
                    sharedDecimals: 6,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                address: "0x738d1115B90efa71AE468F1287fc864775e23a31",
                                chainKey: "ethereum",
                                decimals: 18,
                                name: "Savings rUSD",
                                symbol: "srUSD"
                            },
                            oftProxy: {
                                address: "0x316cd39632Cac4F4CdfC21757c4500FE12f64514"
                            }
                        },
                        bera: {
                            eid: 30362,
                            token: {
                                address: "0x5475611Dffb8ef4d697Ae39df9395513b6E947d7",
                                chainKey: "bera",
                                decimals: 18,
                                name: "Savings rUSD",
                                symbol: "srUSD"
                            }
                        }
                    },
                    coinGeckoId: "reservoir-srusd"
                })
            , se = (0,
                X.C2)({
                    version: 3,
                    sharedDecimals: 6,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        bera: {
                            eid: 30362,
                            token: {
                                address: "0xf6718b2701D4a6498eF77D7c152b2137Ab28b8A3",
                                chainKey: "bera",
                                decimals: 18,
                                name: "Lorenzo stBTC",
                                symbol: "stBTC"
                            },
                            oftProxy: {
                                address: "0xbcE9988376C6b9c0c035bdbc9060568031d51130"
                            },
                            executorLzReceiveOption: {
                                gasLimit: 2e5
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            token: {
                                address: "0xf6718b2701D4a6498eF77D7c152b2137Ab28b8A3",
                                chainKey: "ethereum",
                                decimals: 18,
                                name: "Lorenzo stBTC",
                                symbol: "stBTC"
                            },
                            oftProxy: {
                                address: "0xbcE9988376C6b9c0c035bdbc9060568031d51130"
                            },
                            executorLzReceiveOption: {
                                gasLimit: 2e5
                            }
                        },
                        bsc: {
                            eid: 30102,
                            token: {
                                address: "0xf6718b2701D4a6498eF77D7c152b2137Ab28b8A3",
                                chainKey: "bsc",
                                decimals: 18,
                                name: "Lorenzo stBTC",
                                symbol: "stBTC"
                            },
                            oftProxy: {
                                address: "0xbcE9988376C6b9c0c035bdbc9060568031d51130"
                            },
                            executorLzReceiveOption: {
                                gasLimit: 2e5
                            }
                        }
                    },
                    coinGeckoId: "lorenzo-stbtc"
                })
            , sa = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            token: {
                                chainKey: "ethereum",
                                symbol: "STG",
                                address: "0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6",
                                decimals: 18
                            }
                        },
                        bsc: {
                            eid: 102,
                            token: {
                                chainKey: "bsc",
                                symbol: "STG",
                                address: "0xB0D502E938ed5f4df2E681fE6E419ff29631d62b",
                                decimals: 18
                            }
                        },
                        avalanche: {
                            eid: 106,
                            token: {
                                chainKey: "avalanche",
                                symbol: "STG",
                                address: "0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590",
                                decimals: 18
                            }
                        },
                        polygon: {
                            eid: 109,
                            token: {
                                chainKey: "polygon",
                                symbol: "STG",
                                address: "0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "STG",
                                address: "0x6694340fc020c5E6B96567843da2df01b2CE1eb6",
                                decimals: 18
                            }
                        },
                        optimism: {
                            eid: 111,
                            token: {
                                chainKey: "optimism",
                                symbol: "STG",
                                address: "0x296F55F8Fb28E498B858d0BcDA06D955B2Cb3f97",
                                decimals: 18
                            }
                        },
                        fantom: {
                            eid: 112,
                            token: {
                                chainKey: "fantom",
                                symbol: "STG",
                                address: "0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590",
                                decimals: 18
                            }
                        },
                        base: {
                            eid: 184,
                            token: {
                                chainKey: "base",
                                symbol: "STG",
                                address: "0xE3B53AF74a4BF62Ae5511055290838050bf764Df",
                                decimals: 18
                            }
                        },
                        linea: {
                            eid: 183,
                            token: {
                                chainKey: "linea",
                                symbol: "STG",
                                address: "0x808d7c71ad2ba3FA531b068a2417C63106BC0949",
                                decimals: 18
                            }
                        },
                        kava: {
                            eid: 177,
                            token: {
                                chainKey: "kava",
                                symbol: "STG",
                                address: "0x83c30eb8bc9ad7C56532895840039E62659896ea",
                                decimals: 18
                            }
                        },
                        mantle: {
                            eid: 181,
                            token: {
                                chainKey: "mantle",
                                symbol: "STG",
                                address: "0x8731d54E9D02c286767d56ac03e8037C07e01e98",
                                decimals: 18
                            }
                        },
                        scroll: {
                            eid: 214,
                            token: {
                                chainKey: "scroll",
                                symbol: "STG",
                                address: "0x8731d54e9d02c286767d56ac03e8037c07e01e98",
                                decimals: 18
                            }
                        },
                        bera: {
                            eid: 362,
                            token: {
                                chainKey: "bera",
                                symbol: "STG",
                                address: "0x9895D81bB462A195b4922ED7De0e3ACD007c32CB",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 18,
                    version: 0,
                    fee: !1,
                    coinMarketCapId: 18934
                })
            , sd = (0,
                X.C2)({
                    version: 3,
                    sharedDecimals: 6,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        bera: {
                            eid: 30362,
                            token: {
                                address: "0x2840F9d9f96321435Ab0f977E7FDBf32EA8b304f",
                                chainKey: "bera",
                                decimals: 18,
                                name: "USDa saving token",
                                symbol: "sUSDa"
                            },
                            executorLzReceiveOption: {
                                gasLimit: 2e5
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            token: {
                                address: "0x2B66AAdE1e9C062FF411bd47C44E0Ad696d43BD9",
                                chainKey: "ethereum",
                                decimals: 18,
                                name: "USDa saving token",
                                symbol: "sUSDa"
                            },
                            executorLzReceiveOption: {
                                gasLimit: 2e5
                            }
                        },
                        bsc: {
                            eid: 30102,
                            token: {
                                address: "0x73a325103935b0B5E7AA3acA6dba74AD22f82B03",
                                chainKey: "bsc",
                                decimals: 18,
                                name: "USDa saving token",
                                symbol: "sUSDa"
                            },
                            executorLzReceiveOption: {
                                gasLimit: 2e5
                            }
                        }
                    },
                    coinMarketCapId: 35538
                })
            , ss = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinGeckoId: "johnny-suede",
                    deployments: {
                        base: {
                            eid: 30184,
                            version: 3,
                            token: {
                                chainKey: "base",
                                decimals: 18,
                                symbol: "SUEDE",
                                name: "Johnny Suede",
                                address: "0x40461291347e1eCbb09499F3371D3f17f10d7159"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            oft: {
                                programId: "44pEAPoaynZmKQ2NmL85D6bFYqn6puk4pifNGbSQ9CFY"
                            },
                            token: {
                                chainKey: "solana",
                                decimals: 6,
                                symbol: "SUEDE",
                                name: "Johnny Suede",
                                address: "2nCeHpECQvnMfzjU5fDMAKws1vBxMzxvWr6qqLpApump",
                                programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                            },
                            tokenEscrow: {
                                address: "DZoSd8XuY6enMHAbA2nG4i4mazuyPUg8WZoJ7XFWakxj"
                            }
                        }
                    }
                })
            , si = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            oftProxy: {
                                address: "0x211Cc4DD073734dA055fbF44a2b4667d5E5fE5d2"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "sUSDe",
                                address: "0x9D39A5DE30e57443BfF2A8307A4256c8797A3497",
                                decimals: 18
                            }
                        },
                        mantle: {
                            eid: 30181,
                            token: {
                                chainKey: "mantle",
                                symbol: "sUSDe",
                                address: "0x211Cc4DD073734dA055fbF44a2b4667d5E5fE5d2",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "sUSDe",
                                address: "0x211Cc4DD073734dA055fbF44a2b4667d5E5fE5d2",
                                decimals: 18
                            }
                        },
                        manta: {
                            eid: 30217,
                            token: {
                                chainKey: "manta",
                                symbol: "sUSDe",
                                address: "0x211Cc4DD073734dA055fbF44a2b4667d5E5fE5d2",
                                decimals: 18
                            }
                        },
                        bsc: {
                            eid: 30102,
                            token: {
                                chainKey: "bsc",
                                symbol: "sUSDe",
                                address: "0x211Cc4DD073734dA055fbF44a2b4667d5E5fE5d2",
                                decimals: 18
                            }
                        },
                        fraxtal: {
                            eid: 30255,
                            token: {
                                chainKey: "fraxtal",
                                symbol: "sUSDe",
                                address: "0x211Cc4DD073734dA055fbF44a2b4667d5E5fE5d2",
                                decimals: 18
                            }
                        },
                        kava: {
                            eid: 30177,
                            token: {
                                chainKey: "kava",
                                symbol: "sUSDe",
                                address: "0x211Cc4DD073734dA055fbF44a2b4667d5E5fE5d2",
                                decimals: 18
                            }
                        },
                        metis: {
                            eid: 30151,
                            token: {
                                chainKey: "metis",
                                symbol: "sUSDe",
                                address: "0x211Cc4DD073734dA055fbF44a2b4667d5E5fE5d2",
                                decimals: 18
                            }
                        },
                        mode: {
                            eid: 30260,
                            token: {
                                chainKey: "mode",
                                symbol: "sUSDe",
                                address: "0x211Cc4DD073734dA055fbF44a2b4667d5E5fE5d2",
                                decimals: 18
                            }
                        },
                        optimism: {
                            eid: 30111,
                            token: {
                                chainKey: "optimism",
                                symbol: "sUSDe",
                                address: "0x211Cc4DD073734dA055fbF44a2b4667d5E5fE5d2",
                                decimals: 18
                            }
                        },
                        scroll: {
                            eid: 30214,
                            token: {
                                chainKey: "scroll",
                                symbol: "sUSDe",
                                address: "0x211Cc4DD073734dA055fbF44a2b4667d5E5fE5d2",
                                decimals: 18
                            }
                        },
                        blast: {
                            eid: 30243,
                            token: {
                                chainKey: "blast",
                                symbol: "sUSDe",
                                address: "0x211cc4dd073734da055fbf44a2b4667d5e5fe5d2",
                                decimals: 18
                            }
                        },
                        linea: {
                            eid: 30183,
                            token: {
                                chainKey: "linea",
                                symbol: "sUSDe",
                                address: "0x211Cc4DD073734dA055fbF44a2b4667d5E5fE5d2",
                                decimals: 18
                            }
                        },
                        zksync: {
                            eid: 30165,
                            token: {
                                chainKey: "zksync",
                                symbol: "sUSDe",
                                address: "0xAD17Da2f6Ac76746EF261E835C50b2651ce36DA8",
                                decimals: 18
                            }
                        },
                        zircuit: {
                            eid: 30303,
                            token: {
                                chainKey: "zircuit",
                                symbol: "sUSDe",
                                address: "0x211Cc4DD073734dA055fbF44a2b4667d5E5fE5d2",
                                decimals: 18
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                symbol: "sUSDe",
                                address: "0x211cc4dd073734da055fbf44a2b4667d5e5fe5d2",
                                decimals: 18
                            }
                        },
                        swell: {
                            eid: 30335,
                            token: {
                                chainKey: "swell",
                                symbol: "sUSDe",
                                address: "0x211Cc4DD073734dA055fbF44a2b4667d5E5fE5d2",
                                decimals: 18
                            }
                        },
                        morph: {
                            eid: 30322,
                            token: {
                                chainKey: "morph",
                                symbol: "sUSDe",
                                name: "Staked USDe",
                                address: "0x211Cc4DD073734dA055fbF44a2b4667d5E5fE5d2",
                                decimals: 18
                            }
                        },
                        bera: {
                            eid: 30362,
                            token: {
                                chainKey: "bera",
                                symbol: "sUSDe",
                                name: "Staked USDe",
                                address: "0x211Cc4DD073734dA055fbF44a2b4667d5E5fE5d2",
                                decimals: 18
                            }
                        },
                        solana: {
                            eid: 30168,
                            token: {
                                chainKey: "solana",
                                symbol: "sUSDe",
                                address: "Eh6XEPhSwoLv5wFApukmnaVSHQ6sAnoD9BmgmwQoN2sN",
                                decimals: 9
                            },
                            oft: {
                                programId: "CKsfN2UvdF6BxWmt12576GN4EtLynA7MxSqEm6jrCqMh"
                            }
                        },
                        aptos: {
                            eid: 30108,
                            token: {
                                chainKey: "aptos",
                                symbol: "sUSDe",
                                address: "0xb30a694a344edee467d9f82330bbe7c3b89f440a1ecd2da1f3bca266560fce69",
                                decimals: 6
                            },
                            oftProxy: {
                                address: "0xa84fcc405fa7e5415f02f50167aac3d4ec2947187aabb9087f6b16d31c8715e5"
                            }
                        },
                        hyperliquid: {
                            eid: 30367,
                            token: {
                                chainKey: "hyperliquid",
                                symbol: "sUSDe",
                                address: "0x211cc4dd073734da055fbf44a2b4667d5e5fe5d2",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !1,
                    coinMarketCapId: 29471
                })
            , so = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            oftProxy: {
                                address: "0x5C6392A69dc11f254457716c682F70e4B2ed7B05"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "swETH",
                                address: "0xf951E335afb289353dc249e82926178EaC7DEd78",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "swETH",
                                address: "0xbc011a12da28e8f0f528d9ee5e7039e22f91cf18",
                                decimals: 18
                            }
                        },
                        scroll: {
                            eid: 214,
                            token: {
                                chainKey: "scroll",
                                symbol: "swETH",
                                address: "0x850cdf416668210ed0c36bfff5d21921c7ada3b8",
                                decimals: 18
                            }
                        },
                        linea: {
                            eid: 183,
                            token: {
                                chainKey: "linea",
                                symbol: "swETH",
                                address: "0x850CDF416668210ED0c36bfFF5d21921C7adA3b8",
                                decimals: 18
                            }
                        },
                        zircuit: {
                            eid: 303,
                            token: {
                                chainKey: "zircuit",
                                symbol: "swETH",
                                address: "0x850CDF416668210ED0c36bfFF5d21921C7adA3b8",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 18,
                    version: 1,
                    fee: !1,
                    coinMarketCapId: 25147
                })
            , sn = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x968bE3F7bfeF0F8eDc3c1aD90232EbB0DA0867aA",
                                decimals: 18,
                                name: "Seedworld",
                                symbol: "SWORLD"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            token: {
                                chainKey: "bsc",
                                address: "0x968bE3F7bfeF0F8eDc3c1aD90232EbB0DA0867aA",
                                decimals: 18,
                                name: "Seedworld",
                                symbol: "SWORLD"
                            }
                        },
                        avalanche: {
                            eid: 30106,
                            token: {
                                chainKey: "avalanche",
                                address: "0x968bE3F7bfeF0F8eDc3c1aD90232EbB0DA0867aA",
                                decimals: 18,
                                name: "Seedworld",
                                symbol: "SWORLD"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                chainKey: "arbitrum",
                                address: "0x968bE3F7bfeF0F8eDc3c1aD90232EbB0DA0867aA",
                                decimals: 18,
                                name: "Seedworld",
                                symbol: "SWORLD"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0x968bE3F7bfeF0F8eDc3c1aD90232EbB0DA0867aA",
                                decimals: 18,
                                name: "Seedworld",
                                symbol: "SWORLD"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            oft: {
                                programId: "Fr8S1fx4jvsUrHSPoPy6w6wZYTLTpSpc6CY8pwrFiMok"
                            },
                            token: {
                                chainKey: "solana",
                                decimals: 9,
                                symbol: "SWORLD",
                                name: "Seedworld",
                                address: "Es6h4XKewn9Mr7V44VqQ5cAUPRY6uV5hhD4vnEZhgoQ6",
                                programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                            },
                            tokenEscrow: {
                                address: "qhCmv94mG1dTxYZFVVVnpJpsfkRYjttWabgUWSo6tgi"
                            }
                        }
                    },
                    coinMarketCapId: 33571
                })
            , sc = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x643C4E15d7d62Ad0aBeC4a9BD4b001aA3Ef52d66",
                                decimals: 18,
                                name: "Syrup Token",
                                symbol: "SYRUP"
                            },
                            oftProxy: {
                                address: "0x688AEe022AA544f150678B8E5720b6b96a9E9a2F"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0x688AEe022AA544f150678B8E5720b6b96a9E9a2F",
                                decimals: 18,
                                name: "Syrup Token",
                                symbol: "SYRUP"
                            }
                        }
                    },
                    coinMarketCapId: 33824
                })
            , sr = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        avalanche: {
                            eid: 30106,
                            token: {
                                chainKey: "avalanche",
                                address: "0x5Ac04b69bDE6f67C0bd5D6bA6fD5D816548b066a",
                                decimals: 18,
                                name: "NumberGoUpTech",
                                symbol: "TECH"
                            },
                            oftProxy: {
                                address: "0xe9A3B326c5B06FA848b11E07080c3AC926fBe787"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                chainKey: "arbitrum",
                                address: "0x488ef48FF9D803087CC96b347FC250244A9e8260",
                                decimals: 18,
                                name: "NumberGoUpTech",
                                symbol: "TECH"
                            }
                        },
                        mantle: {
                            eid: 30181,
                            token: {
                                chainKey: "mantle",
                                address: "0xC752F7CefFd8a52e541b256d2C73e65F8baC60c7",
                                decimals: 18,
                                name: "NumberGoUpTech",
                                symbol: "TECH"
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x835f2eb9B3dd2913f59019bfbC7B61A12Ef96cd6",
                                decimals: 18,
                                name: "NumberGoUpTech",
                                symbol: "TECH"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0xe9A3B326c5B06FA848b11E07080c3AC926fBe787",
                                decimals: 18,
                                name: "NumberGoUpTech",
                                symbol: "TECH"
                            }
                        }
                    },
                    coinMarketCapId: 29680
                })
            , sm = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            token: {
                                chainKey: "ethereum",
                                symbol: "TENET",
                                address: "0x788D86E00ab31Db859C3d6b80d5a9375801d7f2A",
                                decimals: 18
                            }
                        },
                        bsc: {
                            eid: 102,
                            token: {
                                chainKey: "bsc",
                                symbol: "TENET",
                                address: "0x788D86E00ab31Db859C3d6b80d5a9375801d7f2A",
                                decimals: 18
                            }
                        },
                        avalanche: {
                            eid: 106,
                            token: {
                                chainKey: "avalanche",
                                symbol: "TENET",
                                address: "0x788D86E00ab31Db859C3d6b80d5a9375801d7f2A",
                                decimals: 18
                            }
                        },
                        polygon: {
                            eid: 109,
                            token: {
                                chainKey: "polygon",
                                symbol: "TENET",
                                address: "0x788D86E00ab31Db859C3d6b80d5a9375801d7f2A",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "TENET",
                                address: "0x788D86E00ab31Db859C3d6b80d5a9375801d7f2A",
                                decimals: 18
                            }
                        },
                        optimism: {
                            eid: 111,
                            token: {
                                chainKey: "optimism",
                                symbol: "TENET",
                                address: "0x788D86E00ab31Db859C3d6b80d5a9375801d7f2A",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 6,
                    version: 2,
                    fee: !0,
                    coinMarketCapId: 24892
                })
            , st = (0,
                X.C2)({
                    coinMarketCapId: 4660,
                    sharedDecimals: 4,
                    version: 2,
                    fee: !1,
                    deployments: {
                        ethereum: {
                            eid: 101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x193f4A4a6ea24102F49b931DEeeb931f6E32405d",
                                decimals: 18,
                                name: "TLOS",
                                symbol: "TLOS"
                            }
                        },
                        bsc: {
                            eid: 102,
                            token: {
                                chainKey: "bsc",
                                address: "0x193f4A4a6ea24102F49b931DEeeb931f6E32405d",
                                decimals: 18,
                                name: "TLOS",
                                symbol: "TLOS"
                            }
                        },
                        avalanche: {
                            eid: 106,
                            token: {
                                chainKey: "avalanche",
                                address: "0xed667dC80a45b77305Cc395DB56D997597Dc6DdD",
                                decimals: 18,
                                name: "TLOS",
                                symbol: "TLOS"
                            }
                        },
                        polygon: {
                            eid: 109,
                            token: {
                                chainKey: "polygon",
                                address: "0x193f4A4a6ea24102F49b931DEeeb931f6E32405d",
                                decimals: 18,
                                name: "TLOS",
                                symbol: "TLOS"
                            }
                        },
                        arbitrum: {
                            eid: 110,
                            token: {
                                chainKey: "arbitrum",
                                address: "0x193f4A4a6ea24102F49b931DEeeb931f6E32405d",
                                decimals: 18,
                                name: "TLOS",
                                symbol: "TLOS"
                            }
                        },
                        telos: {
                            eid: 199,
                            oftNative: {
                                address: "0x02Ea28694Ae65358Be92bAFeF5Cb8C211f33Db1A"
                            },
                            token: {
                                chainKey: "telos",
                                decimals: 18,
                                name: "TLOS",
                                symbol: "TLOS"
                            }
                        }
                    }
                })
            , sb = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x68ccACa9ADF1552B3316d6067690eC27397c8ea8",
                                decimals: 18,
                                name: "Cryptos",
                                symbol: "TOS"
                            }
                        },
                        polygon: {
                            eid: 30109,
                            token: {
                                chainKey: "polygon",
                                address: "0x50AA659E6aB263B77d61Ff44cF4A1090141e7111",
                                decimals: 18,
                                name: "Cryptos",
                                symbol: "TOS"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                address: "0x883CFBd30bD076a063A453335414909545186275",
                                chainKey: "base",
                                decimals: 18,
                                name: "Cryptos",
                                symbol: "TOS"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            token: {
                                address: "0x883CFBd30bD076a063A453335414909545186275",
                                chainKey: "bsc",
                                decimals: 18,
                                name: "Cryptos",
                                symbol: "TOS"
                            }
                        }
                    },
                    coinMarketCapId: 21066
                })
            , sl = (0,
                X.C2)({
                    deployments: {
                        arbitrum: {
                            eid: 110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "TROVE",
                                address: "0x982239D38Af50B0168dA33346d85Fb12929c4c07",
                                decimals: 18
                            }
                        },
                        optimism: {
                            eid: 111,
                            token: {
                                chainKey: "optimism",
                                symbol: "TROVE",
                                address: "0x348Fdfe2c35934A96C1353185F09D0F9efBAdA86",
                                decimals: 18
                            }
                        },
                        base: {
                            eid: 184,
                            token: {
                                chainKey: "base",
                                symbol: "TROVE",
                                address: "0x348Fdfe2c35934A96C1353185F09D0F9efBAdA86",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 18,
                    version: 1,
                    fee: !1,
                    coinMarketCapId: 23580
                })
            , sy = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !1,
                    deployments: {
                        avalanche: {
                            eid: 30106,
                            token: {
                                address: "0xA80F36BA18c7f721F3F7ACDbcDEfd3a86869A036",
                                chainKey: "avalanche",
                                decimals: 18,
                                symbol: "TRUMP",
                                name: "OFFICIAL TRUMP"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                address: "0xc27468b12ffA6d714B1b5fBC87eF403F38b82AD4",
                                decimals: 18,
                                symbol: "TRUMP",
                                chainKey: "base",
                                name: "OFFICIAL TRUMP"
                            }
                        },
                        solana: {
                            eid: 30168,
                            token: {
                                chainKey: "solana",
                                name: "OFFICIAL TRUMP",
                                symbol: "TRUMP",
                                address: "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN",
                                decimals: 6,
                                programId: V.H_
                            },
                            tokenEscrow: {
                                address: "Cs9HQBLUCToNtap3MNpBKnERcdQSjxujkKHySDS9jX3o"
                            },
                            oft: {
                                programId: "HRPXLCqspQocTjfcX4rvAPaY9q6Gwb1rrD3xXWrfJWdW"
                            }
                        },
                        sei: {
                            eid: 30280,
                            token: {
                                address: "0xea3910f1C6E687B59835885904A2FD1944B51Ec6",
                                chainKey: "sei",
                                decimals: 18,
                                name: "OFFICIAL TRUMP",
                                symbol: "TRUMP"
                            }
                        },
                        linea: {
                            eid: 30183,
                            token: {
                                chainKey: "linea",
                                address: "0xea3910f1C6E687B59835885904A2FD1944B51Ec6",
                                decimals: 18,
                                name: "OFFICIAL TRUMP",
                                symbol: "TRUMP"
                            }
                        }
                    },
                    coinMarketCapId: 35336
                })
            , sf = (0,
                X.C2)({
                    version: 3,
                    sharedDecimals: 6,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        mantle: {
                            eid: 30181,
                            token: {
                                address: "0xFDfdFD005F127334F7c4eeFEF2252D2BF4B6E79E",
                                chainKey: "mantle",
                                decimals: 18,
                                name: "Unicorn Fart Dust",
                                symbol: "UFD"
                            }
                        },
                        solana: {
                            version: 4,
                            eid: 30168,
                            token: {
                                address: "eL5fUxj2J4CiQsmW85k5FG9DvuQjjUoBHoQBi2Kpump",
                                chainKey: "solana",
                                decimals: 6,
                                name: "Unicorn Fart Dust",
                                symbol: "UFD",
                                programId: V.H_
                            },
                            oft: {
                                programId: "ufdDLwyeFssBJ9TPnK13w6hZnybnEcWc2Xoqb6u8U8g"
                            },
                            tokenEscrow: {
                                address: "53RP7xwg73Pbo6c9gA58ahjCxDM39ks4j1tpeWvEWBat"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            token: {
                                address: "0xFDfdFD005F127334F7c4eeFEF2252D2BF4B6E79E",
                                chainKey: "bsc",
                                decimals: 18,
                                name: "Unicorn Fart Dust",
                                symbol: "UFD"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                address: "0xFDfdFD005F127334F7c4eeFEF2252D2BF4B6E79E",
                                chainKey: "arbitrum",
                                decimals: 18,
                                name: "Unicorn Fart Dust",
                                symbol: "UFD"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                address: "0xFDfdFD005F127334F7c4eeFEF2252D2BF4B6E79E",
                                chainKey: "base",
                                decimals: 18,
                                name: "Unicorn Fart Dust",
                                symbol: "UFD"
                            }
                        },
                        avalanche: {
                            eid: 30106,
                            token: {
                                address: "0xFDfdFD005F127334F7c4eeFEF2252D2BF4B6E79E",
                                chainKey: "avalanche",
                                decimals: 18,
                                name: "Unicorn Fart Dust",
                                symbol: "UFD"
                            }
                        }
                    },
                    coinMarketCapId: 34853
                })
            , sC = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            oftProxy: {
                                address: "0xB2E787C6C83D6d75f466371a2966b27a8b700828"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "UNB",
                                address: "0x8dB253a1943DdDf1AF9bcF8706ac9A0Ce939d922",
                                decimals: 18
                            }
                        },
                        bsc: {
                            eid: 102,
                            token: {
                                chainKey: "bsc",
                                symbol: "UNB",
                                address: "0xB2E787C6C83D6d75f466371a2966b27a8b700828",
                                decimals: 18
                            }
                        },
                        polygon: {
                            eid: 109,
                            token: {
                                chainKey: "polygon",
                                symbol: "UNB",
                                address: "0xB2E787C6C83D6d75f466371a2966b27a8b700828",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "UNB",
                                address: "0xB2E787C6C83D6d75f466371a2966b27a8b700828",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 9,
                    version: 2,
                    fee: !1,
                    coinMarketCapId: 7846
                })
            , sD = (0,
                X.C2)({
                    version: 3,
                    sharedDecimals: 6,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                address: "0x004E9C3EF86bc1ca1f0bB5C7662861Ee93350568",
                                chainKey: "ethereum",
                                decimals: 8,
                                name: "uniBTC",
                                symbol: "uniBTC"
                            },
                            oftProxy: {
                                address: "0x50fA1411201e2Ac0361FB893E903b80F141b8190"
                            },
                            executorLzReceiveOption: {
                                gasLimit: 2e5
                            }
                        },
                        bera: {
                            eid: 30362,
                            token: {
                                address: "0xC3827A4BC8224ee2D116637023b124CED6db6e90",
                                chainKey: "bera",
                                decimals: 8,
                                name: "uniBTC",
                                symbol: "uniBTC"
                            },
                            oftProxy: {
                                address: "0xdF1925B7A0f56a3ED7f74bE2a813Ae8bbA756e59"
                            },
                            executorLzReceiveOption: {
                                gasLimit: 2e5
                            }
                        }
                    },
                    coinGeckoId: "universal-btc"
                })
            , sE = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            oftProxy: {
                                address: "0x6f97D3F120fBbDaacF1c9da61a8aD126b7426861"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "UNIX",
                                address: "0xDDD6A0ECc3c6F6C102E5eA3d8Af7B801d1a77aC8",
                                decimals: 18
                            }
                        },
                        avalanche: {
                            eid: 106,
                            token: {
                                chainKey: "avalanche",
                                symbol: "UNIX",
                                address: "0x6f97D3F120fBbDaacF1c9da61a8aD126b7426861",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 18,
                    version: 1,
                    fee: !1,
                    coinMarketCapId: 14915
                })
            , sA = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            oftProxy: {
                                address: "0x35f899CE6cC304AeDFDB7835f623A30473b26457"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "unshETH",
                                address: "0x0Ae38f7E10A43B5b2fB064B42a2f4514cbA909ef",
                                decimals: 18
                            }
                        },
                        bsc: {
                            eid: 102,
                            token: {
                                chainKey: "bsc",
                                symbol: "unshETH",
                                address: "0x0Ae38f7E10A43B5b2fB064B42a2f4514cbA909ef",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "unshETH",
                                address: "0x0Ae38f7E10A43B5b2fB064B42a2f4514cbA909ef",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 18,
                    version: 1,
                    fee: !1,
                    coinMarketCapId: 1027
                })
            , sh = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !1,
                    deployments: {
                        arbitrum: {
                            eid: 30110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "USD0",
                                address: "0x35f1C5cB7Fb977E669fD244C567Da99d8a3a6850",
                                decimals: 18
                            },
                            oftProxy: {
                                address: "0xe14c486b93c3b62f76f88cf8fe4b36fb672f3b26",
                                approvalRequired: !1
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                symbol: "USD0",
                                address: "0x73A15FeD60Bf67631dC6cd7Bc5B6e8da8190aCF5",
                                decimals: 18
                            },
                            oftProxy: {
                                address: "0xE14C486b93C3B62F76F88cf8FE4B36fb672f3B26"
                            }
                        }
                    },
                    coinGeckoId: "usual-usd"
                })
            , sx = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !1,
                    deployments: {
                        arbitrum: {
                            eid: 30110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "USD0++",
                                address: "0x2B65F9d2e4B84a2dF6ff0525741b75d1276a9C2F",
                                decimals: 18
                            },
                            oftProxy: {
                                address: "0xd155d91009cbE9B0204B06CE1b62bf1D793d3111",
                                approvalRequired: !1
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                symbol: "USD0++",
                                address: "0x35D8949372D46B7a3D5A56006AE77B215fc69bC0",
                                decimals: 18
                            },
                            oftProxy: {
                                address: "0xd155d91009cbE9B0204B06CE1b62bf1D793d3111"
                            }
                        }
                    },
                    coinGeckoId: "usd0-liquid-bond"
                })
            , sB = (0,
                X.C2)({
                    version: 3,
                    sharedDecimals: 6,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        bera: {
                            eid: 30362,
                            token: {
                                address: "0xff12470a969Dd362EB6595FFB44C82c959Fe9ACc",
                                chainKey: "bera",
                                decimals: 18,
                                name: "USDa",
                                symbol: "USDa"
                            },
                            executorLzReceiveOption: {
                                gasLimit: 2e5
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            token: {
                                address: "0x8A60E489004Ca22d775C5F2c657598278d17D9c2",
                                chainKey: "ethereum",
                                decimals: 18,
                                name: "USDa",
                                symbol: "USDa"
                            },
                            executorLzReceiveOption: {
                                gasLimit: 2e5
                            }
                        },
                        bsc: {
                            eid: 30102,
                            token: {
                                address: "0x9356086146be5158E98aD827E21b5cF944699894",
                                chainKey: "bsc",
                                decimals: 18,
                                name: "USDa",
                                symbol: "USDa"
                            },
                            executorLzReceiveOption: {
                                gasLimit: 2e5
                            }
                        }
                    },
                    coinMarketCapId: 35368
                })
            , sF = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            oftProxy: {
                                address: "0x28a92dde19D9989F39A49905d7C9C2FAc7799bDf"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "USDC",
                                address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
                                decimals: 6
                            }
                        },
                        fantom: {
                            eid: 112,
                            token: {
                                chainKey: "fantom",
                                symbol: "USDC",
                                address: "0x28a92dde19D9989F39A49905d7C9C2FAc7799bDf",
                                decimals: 6
                            }
                        }
                    },
                    sharedDecimals: 6,
                    version: 2,
                    fee: !1,
                    coinMarketCapId: 3408
                })
            , sk = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            oftProxy: {
                                address: "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "USDe",
                                address: "0x4c9EDD5852cd905f086C759E8383e09bff1E68B3",
                                decimals: 18
                            }
                        },
                        mantle: {
                            eid: 30181,
                            token: {
                                chainKey: "mantle",
                                symbol: "USDe",
                                address: "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "USDe",
                                address: "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34",
                                decimals: 18
                            }
                        },
                        manta: {
                            eid: 30217,
                            token: {
                                chainKey: "manta",
                                symbol: "USDe",
                                address: "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34",
                                decimals: 18
                            }
                        },
                        bsc: {
                            eid: 30102,
                            token: {
                                chainKey: "bsc",
                                symbol: "USDe",
                                address: "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34",
                                decimals: 18
                            }
                        },
                        fraxtal: {
                            eid: 30255,
                            token: {
                                chainKey: "fraxtal",
                                symbol: "USDe",
                                address: "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34",
                                decimals: 18
                            }
                        },
                        kava: {
                            eid: 30177,
                            token: {
                                chainKey: "kava",
                                symbol: "USDe",
                                address: "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34",
                                decimals: 18
                            }
                        },
                        metis: {
                            eid: 30151,
                            token: {
                                chainKey: "metis",
                                symbol: "USDe",
                                address: "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34",
                                decimals: 18
                            }
                        },
                        mode: {
                            eid: 30260,
                            token: {
                                chainKey: "mode",
                                symbol: "USDe",
                                address: "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34",
                                decimals: 18
                            }
                        },
                        optimism: {
                            eid: 30111,
                            token: {
                                chainKey: "optimism",
                                symbol: "USDe",
                                address: "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34",
                                decimals: 18
                            }
                        },
                        scroll: {
                            eid: 30214,
                            token: {
                                chainKey: "scroll",
                                symbol: "USDe",
                                address: "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34",
                                decimals: 18
                            }
                        },
                        blast: {
                            eid: 30243,
                            token: {
                                chainKey: "blast",
                                symbol: "USDe",
                                address: "0x5d3a1ff2b6bab83b63cd9ad0787074081a52ef34",
                                decimals: 18
                            }
                        },
                        linea: {
                            eid: 30183,
                            token: {
                                chainKey: "linea",
                                symbol: "USDe",
                                address: "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34",
                                decimals: 18
                            }
                        },
                        zksync: {
                            eid: 30165,
                            token: {
                                chainKey: "zksync",
                                symbol: "USDe",
                                address: "0x39Fe7a0DACcE31Bd90418e3e659fb0b5f0B3Db0d",
                                decimals: 18
                            }
                        },
                        zircuit: {
                            eid: 30303,
                            token: {
                                chainKey: "zircuit",
                                symbol: "USDe",
                                address: "0x5d3a1ff2b6bab83b63cd9ad0787074081a52ef34",
                                decimals: 18
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                symbol: "USDe",
                                address: "0x5d3a1ff2b6bab83b63cd9ad0787074081a52ef34",
                                decimals: 18
                            }
                        },
                        swell: {
                            eid: 30335,
                            token: {
                                chainKey: "swell",
                                symbol: "USDe",
                                address: "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34",
                                decimals: 18
                            }
                        },
                        morph: {
                            eid: 30322,
                            token: {
                                chainKey: "morph",
                                symbol: "USDe",
                                name: "USDe",
                                address: "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34",
                                decimals: 18
                            }
                        },
                        bera: {
                            eid: 30362,
                            token: {
                                chainKey: "bera",
                                symbol: "USDe",
                                name: "USDe",
                                address: "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34",
                                decimals: 18
                            }
                        },
                        solana: {
                            eid: 30168,
                            token: {
                                chainKey: "solana",
                                symbol: "USDe",
                                address: "DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT",
                                decimals: 9
                            },
                            oft: {
                                programId: "9S6fwN8gZsr3ikUH38QWPDbLzyJTYcQd5GtrEWzoS2y9"
                            }
                        },
                        aptos: {
                            eid: 30108,
                            token: {
                                chainKey: "aptos",
                                symbol: "USDe",
                                address: "0xf37a8864fe737eb8ec2c2931047047cbaed1beed3fb0e5b7c5526dafd3b9c2e9",
                                decimals: 6
                            },
                            oftProxy: {
                                address: "0x9674429dcc02d2ed0d50fa24cb25262d349a5722b1a02502cff92e3cc85924b3"
                            }
                        }
                    },
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !1,
                    coinMarketCapId: 29470
                })
            , sp = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            oftProxy: {
                                address: "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "USDe",
                                address: "0x4c9EDD5852cd905f086C759E8383e09bff1E68B3",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "USDe",
                                address: "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34",
                                decimals: 18
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                symbol: "USDe",
                                address: "0x5d3a1ff2b6bab83b63cd9ad0787074081a52ef34",
                                decimals: 18
                            }
                        },
                        ton: {
                            eid: 30343,
                            msgType: 1,
                            oftProxy: {
                                address: "0x23a676145f8dee3632f722aac50392f22cf0b4be8f624e038279a6f5005fb669"
                            },
                            token: {
                                chainKey: "ton",
                                symbol: "USDe",
                                address: "0x086fa2a675f74347b08dd4606a549b8fdb98829cb282bc1949d3b12fbaed9dcc",
                                decimals: 6
                            },
                            controller: {
                                address: "0x1eb2bbea3d8c0d42ff7fd60f0264c866c934bbff727526ca759e7374cae0c166"
                            },
                            ulnManager: {
                                address: "0x150645746e25be5486eb3b2f5d98b44c6b324697c48d495d059f96fc9d3ec368"
                            }
                        },
                        hyperliquid: {
                            eid: 30367,
                            token: {
                                chainKey: "hyperliquid",
                                symbol: "USDe",
                                address: "0x5d3a1ff2b6bab83b63cd9ad0787074081a52ef34",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !1,
                    coinMarketCapId: 29470
                })
            , sK = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            version: 3,
                            oftProxy: {
                                address: "0x147BdE4F997f0d4C7544ED0C55eAcf1E5E6bf9c4"
                            },
                            token: {
                                chainKey: "ethereum",
                                decimals: 6,
                                symbol: "USDG",
                                name: "Global Dollar",
                                address: "0xe343167631d89B6Ffc58B88d6b7fB0228795491D"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            token: {
                                chainKey: "solana",
                                address: "2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH",
                                programId: V.nA,
                                decimals: 6,
                                symbol: "USDG",
                                name: "USDG"
                            },
                            oft: {
                                programId: "paxosVkYuJBKUQoZGAidRA47Qt4uidqG5fAt5kmr1nR"
                            },
                            tokenEscrow: {
                                address: "EPcyVe3LTpcT2gtxiXbaJuJp2cSAWvkZYb6gkkgxsrJN"
                            }
                        }
                    },
                    coinMarketCapId: 33793
                })
            , su = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            oftProxy: {
                                address: "0xcc1b99dDAc1a33c201a742A1851662E87BC7f22C"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "USDT",
                                address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
                                decimals: 6
                            }
                        },
                        fantom: {
                            eid: 112,
                            token: {
                                chainKey: "fantom",
                                symbol: "USDT",
                                address: "0xcc1b99dDAc1a33c201a742A1851662E87BC7f22C",
                                decimals: 6
                            }
                        }
                    },
                    sharedDecimals: 6,
                    version: 2,
                    fee: !1,
                    coinMarketCapId: 825
                })
            , sT = (0,
                X.C2)({
                    coinMarketCapId: 825,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    deployments: {
                        arbitrum: {
                            eid: 30110,
                            oftProxy: {
                                address: "0x238A52455a1EF6C987CaC94b28B4081aFE50ba06"
                            },
                            token: {
                                chainKey: "arbitrum",
                                address: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
                                decimals: 6,
                                name: "USD₮0",
                                symbol: "USD₮0"
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            oftProxy: {
                                address: "0x811ed79dB9D34E83BDB73DF6c3e07961Cfb0D5c0"
                            },
                            token: {
                                chainKey: "ethereum",
                                address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
                                decimals: 6,
                                symbol: "USDT"
                            }
                        },
                        tron: {
                            eid: 30420,
                            oftProxy: {
                                address: "0x8925c1dD3e5d8011946a3430d91Be742bA8EE930"
                            },
                            token: {
                                chainKey: "tron",
                                address: "0xa614f803B6FD780986A42c78Ec9c7f77e6DeD13C",
                                decimals: 6,
                                symbol: "USDT"
                            }
                        },
                        ton: {
                            eid: 30343,
                            msgType: 2,
                            oftProxy: {
                                address: "0x170725394aa56136fbd27d0ce31d8a98e0f8ae72a4d2379b5dde83e211a2d5fa"
                            },
                            token: {
                                chainKey: "ton",
                                address: "0xb113a994b5024a16719f69139328eb759596c38a25f59028b146fecdc3621dfe",
                                decimals: 6,
                                symbol: "USDT"
                            },
                            controller: {
                                address: "0x1eb2bbea3d8c0d42ff7fd60f0264c866c934bbff727526ca759e7374cae0c166"
                            },
                            ulnManager: {
                                address: "0x150645746e25be5486eb3b2f5d98b44c6b324697c48d495d059f96fc9d3ec368"
                            }
                        }
                    }
                })
            , sS = (0,
                X.C2)({
                    version: 3,
                    fee: !1,
                    sharedDecimals: 6,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            oftProxy: {
                                address: "0x6c96de32cea08842dcc4058c14d3aaad7fa41dee"
                            },
                            token: {
                                chainKey: "ethereum",
                                decimals: 6,
                                symbol: "USDT",
                                name: "Tether USD",
                                address: "0xdAC17F958D2ee523a2206206994597C13D831ec7"
                            }
                        },
                        ink: {
                            eid: 30339,
                            oftProxy: {
                                address: "0x1cB6De532588fCA4a21B7209DE7C456AF8434A65"
                            },
                            token: {
                                chainKey: "ink",
                                decimals: 6,
                                symbol: "USD₮0",
                                name: "USD₮0",
                                address: "0x0200C29006150606B650577BBE7B6248F58470c1"
                            }
                        },
                        bera: {
                            eid: 30362,
                            token: {
                                chainKey: "bera",
                                address: "0x779Ded0c9e1022225f8E0630b35a9b54bE713736",
                                decimals: 6,
                                symbol: "USD₮0",
                                name: "USD₮0"
                            },
                            oftProxy: {
                                address: "0x3Dc96399109df5ceb2C226664A086140bD0379cB"
                            }
                        },
                        unichain: {
                            eid: 30320,
                            token: {
                                chainKey: "unichain",
                                address: "0x9151434b16b9763660705744891fA906F660EcC5",
                                decimals: 6,
                                symbol: "USD₮0",
                                name: "USD₮0"
                            },
                            oftProxy: {
                                address: "0xc07bE8994D035631c36fb4a89C918CeFB2f03EC3"
                            }
                        },
                        optimism: {
                            eid: 30111,
                            token: {
                                chainKey: "optimism",
                                address: "0x01bFF41798a0BcF287b996046Ca68b395DbC1071",
                                decimals: 6,
                                symbol: "USD₮0",
                                name: "USD₮0"
                            },
                            oftProxy: {
                                address: "0xF03b4d9AC1D5d1E7c4cEf54C2A313b9fe051A0aD"
                            }
                        },
                        sei: {
                            eid: 30280,
                            version: 3,
                            oftProxy: {
                                address: "0x56Fe74A2e3b484b921c447357203431a3485CC60"
                            },
                            token: {
                                chainKey: "sei",
                                decimals: 6,
                                symbol: "USD₮0",
                                name: "USD₮0",
                                address: "0x9151434b16b9763660705744891fA906F660EcC5"
                            }
                        },
                        mp1: {
                            eid: 30331,
                            version: 3,
                            oftProxy: {
                                address: "0x3f82943338a8a76c35BFA0c1828aA27fd43a34E4"
                            },
                            token: {
                                chainKey: "mp1",
                                decimals: 6,
                                symbol: "USD₮0",
                                name: "USD₮0",
                                address: "0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb"
                            }
                        },
                        flare: {
                            eid: 30295,
                            version: 3,
                            oftProxy: {
                                address: "0x567287d2A9829215a37e3B88843d32f9221E7588"
                            },
                            token: {
                                chainKey: "flare",
                                decimals: 6,
                                symbol: "USD₮0",
                                name: "USD₮0",
                                address: "0xe7cd86e13AC4309349F30B3435a9d337750fC82D"
                            }
                        }
                    },
                    coinMarketCapId: 825
                })
            , sv = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    deployments: {
                        base: {
                            eid: 30184,
                            version: 3,
                            oftProxy: {
                                address: "0xeab8fA7AB28F05D7600558b873d5C7F805412304"
                            },
                            token: {
                                chainKey: "base",
                                decimals: 6,
                                symbol: "USD₮0",
                                name: "USD₮0",
                                address: "0x102d758f688a4C1C5a80b116bD945d4455460282"
                            }
                        },
                        soneium: {
                            eid: 30340,
                            version: 3,
                            oftProxy: {
                                address: "0xE09E8713e86B12af68B6F41237F3E9a57c064289"
                            },
                            token: {
                                chainKey: "soneium",
                                decimals: 6,
                                symbol: "USD₮0",
                                name: "USD₮0",
                                address: "0x102d758f688a4C1C5a80b116bD945d4455460282"
                            }
                        },
                        optimism: {
                            eid: 30111,
                            version: 3,
                            oftProxy: {
                                address: "0x8EfBdFF3bAe9a3ED3C0ac7aD86BEbF9aEe46086f"
                            },
                            token: {
                                chainKey: "optimism",
                                decimals: 6,
                                symbol: "USD₮0",
                                name: "USD₮0",
                                address: "0x01bFF41798a0BcF287b996046Ca68b395DbC1071"
                            }
                        },
                        swell: {
                            eid: 30335,
                            version: 3,
                            oftProxy: {
                                address: "0x62cbBe71B58f648BeE45D2AFe5EC51c2fCac25b2"
                            },
                            token: {
                                chainKey: "swell",
                                decimals: 6,
                                symbol: "USD₮0",
                                name: "USD₮0",
                                address: "0x102d758f688a4C1C5a80b116bD945d4455460282"
                            }
                        },
                        mode: {
                            eid: 30260,
                            version: 3,
                            oftProxy: {
                                address: "0x768f5787A6F02A60ae9370152BF93B3312341Ad7"
                            },
                            token: {
                                chainKey: "mode",
                                decimals: 6,
                                symbol: "USD₮0",
                                name: "USD₮0",
                                address: "0x102d758f688a4C1C5a80b116bD945d4455460282"
                            }
                        },
                        worldchain: {
                            eid: 30319,
                            version: 3,
                            oftProxy: {
                                address: "0x13a3CA7638802f66CE4E12b101727405Ec589F47"
                            },
                            token: {
                                chainKey: "worldchain",
                                decimals: 6,
                                symbol: "USD₮0",
                                name: "USD₮0",
                                address: "0x102d758f688a4C1C5a80b116bD945d4455460282"
                            }
                        },
                        lisk: {
                            eid: 30321,
                            version: 3,
                            oftProxy: {
                                address: "0xFd1e52AC0203B63c6628BaA53F242C8Ba952FE91"
                            },
                            token: {
                                chainKey: "lisk",
                                decimals: 6,
                                symbol: "USD₮0",
                                name: "USD₮0",
                                address: "0x43F2376D5D03553aE72F4A8093bbe9de4336EB08"
                            }
                        }
                    },
                    coinMarketCapId: 825
                })
            , sP = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    fee: !0,
                    limit: !1,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0xC139190F447e929f090Edeb554D95AbB8b18aC1C",
                                decimals: 18,
                                name: "USDtb",
                                symbol: "USDtb"
                            },
                            oftProxy: {
                                address: "0xc708B6887DB46005dA033501f8aeBee72d191a5d"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0xc708B6887DB46005dA033501f8aeBee72d191a5d",
                                decimals: 18,
                                name: "USDtb",
                                symbol: "USDtb"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                chainKey: "arbitrum",
                                address: "0xc708B6887DB46005dA033501f8aeBee72d191a5d",
                                decimals: 18,
                                name: "USDtb",
                                symbol: "USDtb"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            token: {
                                chainKey: "solana",
                                address: "39DrizvVVntnUhKkyy7Nu8v1YDySA1y4R1uBnv4U7zYy",
                                decimals: 9,
                                symbol: "USDtb",
                                programId: V.H_
                            },
                            tokenEscrow: {
                                address: "8rkzuEhp2JiEZFmN7wDZMxzUBGtruKDXWXMxsjEPWEAX"
                            },
                            oft: {
                                programId: "BpV7o3yBPYqLnbauX5zdLu8XPhuJ9DESQXgLh8dzqcZ4"
                            }
                        }
                    },
                    coinGeckoId: "usdtb"
                })
            , sI = (0,
                X.C2)({
                    coinMarketCapId: 29256,
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        mantle: {
                            eid: 30181,
                            token: {
                                chainKey: "mantle",
                                address: "0x5bE26527e817998A7206475496fDE1E68957c5A6",
                                decimals: 18,
                                name: "Ondo U.S. Dollar Yield",
                                symbol: "USDY"
                            },
                            oftProxy: {
                                address: "0x0bE393DC46248E4285dc5CAcA3084bc7e9bfbB41"
                            },
                            durationFrom: {
                                expected: 3900
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x96F6eF951840721AdBF46Ac996b59E0235CB985C",
                                decimals: 18,
                                name: "Ondo U.S. Dollar Yield",
                                symbol: "USDY"
                            },
                            oftProxy: {
                                address: "0xa6275720b3fB1Efe3E6EF2b5BF2293148852307D"
                            },
                            durationFrom: {
                                expected: 1080
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                chainKey: "arbitrum",
                                address: "0x35e050d3C0eC2d29D269a8EcEa763a183bDF9A9D",
                                decimals: 18,
                                name: "Ondo U.S. Dollar Yield",
                                symbol: "USDY"
                            },
                            oftProxy: {
                                address: "0x0bE393DC46248E4285dc5CAcA3084bc7e9bfbB41"
                            },
                            durationFrom: {
                                expected: 1320
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            oft: {
                                programId: "BGJQtQSPxa2nR9BodnjYb3Pbgft7nX5heQk3dr3uaFUB"
                            },
                            token: {
                                chainKey: "solana",
                                decimals: 6,
                                symbol: "USDY",
                                name: "Ondo US Dollar Yield",
                                address: "A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6",
                                programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                            },
                            tokenEscrow: {
                                address: "FLb5hKyiEjdur6rNAav6a4jkz8abzKrRLo25oXYhphgC"
                            }
                        }
                    }
                })
            , sg = (0,
                X.C2)({
                    fee: !0,
                    sharedDecimals: 8,
                    version: 3,
                    limit: !1,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                symbol: "USDz",
                                address: "0xA469B7Ee9ee773642b3e93E842e5D9b5BaA10067",
                                decimals: 18
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                symbol: "USDz",
                                address: "0x04D5ddf5f3a8939889F11E97f8c4BB48317F1938",
                                decimals: 18
                            }
                        }
                    },
                    coinGeckoId: "anzen-usdz"
                })
            , sM = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            oftProxy: {
                                address: "0xA8b326Ca02650Ac968C554d6C534412e49c92BC4"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "USH",
                                address: "0xE60779CC1b2c1d0580611c526a8DF0E3f870EC48",
                                decimals: 18
                            }
                        },
                        bsc: {
                            eid: 102,
                            token: {
                                chainKey: "bsc",
                                symbol: "USH",
                                address: "0x91d6d6aF7635B7b23A8CED9508117965180e2362",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "USH",
                                address: "0x51A80238B5738725128d3a3e06Ab41c1d4C05C74",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 18,
                    version: 1,
                    fee: !1,
                    coinMarketCapId: 23837
                })
            , sU = (0,
                X.C2)({
                    coinMarketCapId: 32873,
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x66a1E37c9b0eAddca17d3662D6c05F4DECf3e110",
                                decimals: 18,
                                name: "Resolv USD",
                                symbol: "USR"
                            },
                            oftProxy: {
                                address: "0xD2eE2776F34Ef4E7325745b06E6d464b08D4be0E"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                chainKey: "arbitrum",
                                address: "0x2492D0006411Af6C8bbb1c8afc1B0197350a79e9",
                                decimals: 18,
                                name: "Resolv USD",
                                symbol: "USR"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0x35E5dB674D8e93a03d814FA0ADa70731efe8a4b9",
                                decimals: 18,
                                name: "Resolv USD",
                                symbol: "USR"
                            }
                        },
                        bera: {
                            eid: 30362,
                            token: {
                                address: "0x2492D0006411Af6C8bbb1c8afc1B0197350a79e9",
                                chainKey: "bera",
                                decimals: 18,
                                name: "Resolv USD",
                                symbol: "USR"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            token: {
                                chainKey: "bsc",
                                decimals: 18,
                                symbol: "USR",
                                name: "Resolv USD",
                                address: "0x2492D0006411Af6C8bbb1c8afc1B0197350a79e9"
                            }
                        },
                        hyperliquid: {
                            eid: 30367,
                            version: 3,
                            token: {
                                chainKey: "hyperliquid",
                                decimals: 18,
                                symbol: "USR",
                                name: "Resolv USD",
                                address: "0x0aD339d66BF4AeD5ce31c64Bc37B3244b6394A77"
                            }
                        }
                    }
                })
            , sR = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinMarketCapId: 33979,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            version: 3,
                            oftProxy: {
                                address: "0xd277CBCFe8cB37CA90129a33EC7eE590ee392b59"
                            },
                            token: {
                                chainKey: "ethereum",
                                decimals: 18,
                                symbol: "USUAL",
                                name: "USUAL",
                                address: "0xC4441c2BE5d8fA8126822B9929CA0b81Ea0DE38E"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            version: 3,
                            oftProxy: {
                                address: "0xd277CBCFe8cB37CA90129a33EC7eE590ee392b59"
                            },
                            token: {
                                chainKey: "arbitrum",
                                decimals: 18,
                                symbol: "USUAL",
                                name: "USUAL",
                                address: "0x6A5D904519A2b605Da2D5DA7137ED5F4184F6513"
                            }
                        }
                    }
                })
            , sG = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    fee: !0,
                    limit: !1,
                    deployments: {
                        islander: {
                            eid: 30330,
                            token: {
                                chainKey: "islander",
                                decimals: 18,
                                name: "Vana",
                                symbol: "VANA"
                            },
                            oftNative: {
                                address: "0x7FF7Fa94b8b66Ef313f7970d4EEbd2CB3103a2C0"
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x7FF7Fa94b8b66Ef313f7970d4EEbd2CB3103a2C0",
                                decimals: 18,
                                name: "Vana",
                                symbol: "VANA"
                            }
                        },
                        optimism: {
                            eid: 30111,
                            token: {
                                chainKey: "optimism",
                                address: "0x7FF7Fa94b8b66Ef313f7970d4EEbd2CB3103a2C0",
                                decimals: 18,
                                name: "Vana",
                                symbol: "VANA"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                chainKey: "arbitrum",
                                address: "0x7FF7Fa94b8b66Ef313f7970d4EEbd2CB3103a2C0",
                                decimals: 18,
                                name: "Vana",
                                symbol: "VANA"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0x7FF7Fa94b8b66Ef313f7970d4EEbd2CB3103a2C0",
                                decimals: 18,
                                name: "Vana",
                                symbol: "VANA"
                            }
                        },
                        avalanche: {
                            eid: 30106,
                            token: {
                                chainKey: "avalanche",
                                address: "0x7FF7Fa94b8b66Ef313f7970d4EEbd2CB3103a2C0",
                                decimals: 18,
                                name: "Vana",
                                symbol: "VANA"
                            }
                        },
                        polygon: {
                            eid: 30109,
                            token: {
                                chainKey: "polygon",
                                address: "0x7FF7Fa94b8b66Ef313f7970d4EEbd2CB3103a2C0",
                                decimals: 18,
                                name: "Vana",
                                symbol: "VANA"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            token: {
                                chainKey: "bsc",
                                address: "0x7FF7Fa94b8b66Ef313f7970d4EEbd2CB3103a2C0",
                                decimals: 18,
                                name: "Vana",
                                symbol: "VANA"
                            }
                        }
                    },
                    coinGeckoId: "vana",
                    coinMarketCapId: 34619
                })
            , sH = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 2,
                    fee: !1,
                    deployments: {
                        astar: {
                            eid: 210,
                            token: {
                                chainKey: "astar",
                                address: "0xfffFffff00000000000000010000000000000010",
                                decimals: 18,
                                symbol: "vASTR",
                                name: "Voucher ASTR"
                            },
                            oftProxy: {
                                address: "0xba273b7Fa296614019c71Dcc54DCa6C922A93BcF"
                            }
                        },
                        soneium: {
                            eid: 340,
                            token: {
                                chainKey: "soneium",
                                address: "0x60336f9296C79dA4294A19153eC87F8E52158e5F",
                                decimals: 18,
                                symbol: "vASTR",
                                name: "Voucher ASTR"
                            }
                        }
                    },
                    coinGeckoId: "bifrost-voucher-astr"
                })
            , sL = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
                                decimals: 18,
                                symbol: "VIRTUAL",
                                name: "Virtual Protocol"
                            },
                            oftProxy: {
                                address: "0xA5A1AFbfF720f79f1f7833aAfBdcEe87770BbC93"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            token: {
                                address: "3iQL8BFS2vE7mww4ehAqQHAsbmRNCrPxizWAT2Zfyr9y",
                                programId: V.H_,
                                chainKey: "solana",
                                decimals: 9,
                                symbol: "VIRTUAL",
                                name: "Virtual Protocol"
                            },
                            oft: {
                                programId: "68CFnYVZYu4Q4AACuKZenwruvXd5dDj8UoXyyxQmm9We"
                            },
                            tokenEscrow: {
                                address: "AVRFkZ4nbekXpKQeQh5ADjaFDWAr7wGtj9Qv8BSLm4zD"
                            }
                        }
                    },
                    coinMarketCapId: 29420,
                    coinGeckoId: "virtual-protocol"
                })
            , sN = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0xe81941c13678A6396e438490601A40A34Bf90dd2",
                                decimals: 18,
                                name: "Vitalik AI",
                                symbol: "VITAI"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                chainKey: "arbitrum",
                                address: "0x1B7AD346b6Ff2D196DaA8E78AEd86Baa6D7e3B02",
                                decimals: 18,
                                name: "Vitalik Ai",
                                symbol: "VITAI"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0xe81941c13678A6396e438490601A40A34Bf90dd2",
                                decimals: 18,
                                name: "Vitalik AI",
                                symbol: "VITAI"
                            }
                        }
                    },
                    coinGeckoId: "vitai"
                })
            , sO = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 2,
                    fee: !1,
                    deployments: {
                        manta: {
                            eid: 217,
                            token: {
                                chainKey: "manta",
                                address: "0x7746ef546d562b443ae4b4145541a3b1a3d75717",
                                name: "Bifrost Voucher MANTA",
                                symbol: "vMANTA",
                                decimals: 18
                            }
                        },
                        moonbeam: {
                            eid: 126,
                            token: {
                                chainKey: "moonbeam",
                                address: "0xFFfFFfFfdA2a05FB50e7ae99275F4341AEd43379",
                                name: "Bifrost Voucher MANTA",
                                symbol: "vMANTA",
                                decimals: 18
                            },
                            oftProxy: {
                                address: "0xdebbb9309d95dabbfb82411a9c6daa3909b164a4"
                            }
                        }
                    },
                    coinGeckoId: "bifrost-voucher-manta"
                })
            , sw = (0,
                X.C2)({
                    version: 3,
                    sharedDecimals: 8,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                address: "0x09DEF5aBc67e967d54E8233A4b5EBBc1B3fbE34b",
                                chainKey: "ethereum",
                                decimals: 18,
                                name: "Wrapped aBTC",
                                symbol: "waBTC"
                            },
                            oftProxy: {
                                address: "0x37016812a5c2c54793Fd277b7f75086a47377d28"
                            },
                            executorLzReceiveOption: {
                                gasLimit: 2e5
                            }
                        },
                        bera: {
                            eid: 30362,
                            token: {
                                address: "0x09DEF5aBc67e967d54E8233A4b5EBBc1B3fbE34b",
                                chainKey: "bera",
                                decimals: 18,
                                name: "Wrapped aBTC",
                                symbol: "waBTC"
                            },
                            executorLzReceiveOption: {
                                gasLimit: 2e5
                            }
                        }
                    }
                })
            , sW = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            token: {
                                chainKey: "ethereum",
                                symbol: "WAGMI",
                                address: "0x92CC36D66e9d739D50673d1f27929a371FB83a67",
                                decimals: 18
                            }
                        },
                        bsc: {
                            eid: 102,
                            token: {
                                chainKey: "bsc",
                                symbol: "WAGMI",
                                address: "0xaf20f5f19698f1D19351028cd7103B63D30DE7d7",
                                decimals: 18
                            }
                        },
                        avalanche: {
                            eid: 106,
                            token: {
                                chainKey: "avalanche",
                                symbol: "WAGMI",
                                address: "0xaf20f5f19698f1D19351028cd7103B63D30DE7d7",
                                decimals: 18
                            }
                        },
                        polygon: {
                            eid: 109,
                            token: {
                                chainKey: "polygon",
                                symbol: "WAGMI",
                                address: "0x07Ed33a242BD9C08CA3C198e01189e35265024Da",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "WAGMI",
                                address: "0xaf20f5f19698f1D19351028cd7103B63D30DE7d7",
                                decimals: 18
                            }
                        },
                        optimism: {
                            eid: 111,
                            token: {
                                chainKey: "optimism",
                                symbol: "WAGMI",
                                address: "0xaf20f5f19698f1D19351028cd7103B63D30DE7d7",
                                decimals: 18
                            }
                        },
                        fantom: {
                            eid: 112,
                            token: {
                                chainKey: "fantom",
                                symbol: "WAGMI",
                                address: "0xb1F795776cB9DdAC6E7e162f31C7419Dd3d48297",
                                decimals: 18
                            }
                        },
                        zksync: {
                            eid: 165,
                            token: {
                                chainKey: "zksync",
                                symbol: "WAGMI",
                                address: "0x3613AD277DF1d5935D41400A181Aa9ec1DC2Dc9e",
                                decimals: 18
                            }
                        },
                        kava: {
                            eid: 177,
                            token: {
                                chainKey: "kava",
                                symbol: "WAGMI",
                                address: "0xaf20f5f19698f1D19351028cd7103B63D30DE7d7",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 18,
                    version: 1,
                    fee: !1,
                    coinMarketCapId: 28184
                })
            , sX = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x92CC36D66e9d739D50673d1f27929a371FB83a67",
                                decimals: 18,
                                name: "Wagmi",
                                symbol: "WAGMI"
                            },
                            oftProxy: {
                                address: "0xf5eC00e770DE25aef156D290C2504E163B22B4e4"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            token: {
                                chainKey: "solana",
                                name: "Wagmi",
                                symbol: "WAGMI",
                                address: "Hb4m5r21uoA1rWiNFBJgWN8W52QYbw6UV9jAQDbGNsqH",
                                decimals: 9,
                                programId: V.H_
                            },
                            tokenEscrow: {
                                address: "8eixYzbJKMkhysVDuzsFzddsy8wHWUnV39RJ9z4283gN"
                            },
                            oft: {
                                programId: "7svzFZxfmnPEhWroenza6eqqCDZvDyXgVDUtFp1r4rm4"
                            }
                        }
                    },
                    coinMarketCapId: 28184,
                    coinGeckoId: "wagmi-2"
                })
            , sV = (0,
                X.C2)({
                    deployments: {
                        bsc: {
                            eid: 102,
                            oftProxy: {
                                address: "0xa9004A5421372E1D83fB1f85b0fc986c912f91f3"
                            },
                            token: {
                                chainKey: "bsc",
                                symbol: "WBNB",
                                address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
                                decimals: 18
                            }
                        },
                        avalanche: {
                            eid: 106,
                            token: {
                                chainKey: "avalanche",
                                symbol: "WBNB",
                                address: "0xa9004A5421372E1D83fB1f85b0fc986c912f91f3",
                                decimals: 18
                            }
                        },
                        arbitrum: {
                            eid: 110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "WBNB",
                                address: "0xa9004A5421372E1D83fB1f85b0fc986c912f91f3",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 6,
                    version: 2,
                    fee: !0,
                    coinMarketCapId: 7192
                })
            , sz = (0,
                X.C2)({
                    sharedDecimals: 8,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
                                decimals: 8,
                                name: "Wrapped BTC",
                                symbol: "WBTC"
                            },
                            oftProxy: {
                                address: "0x0555E30da8f98308EdB960aa94C0Db47230d2B9c"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            token: {
                                chainKey: "bsc",
                                address: "0x0555E30da8f98308EdB960aa94C0Db47230d2B9c",
                                decimals: 8,
                                name: "Wrapped BTC",
                                symbol: "WBTC"
                            }
                        },
                        avalanche: {
                            eid: 30106,
                            token: {
                                chainKey: "avalanche",
                                address: "0x0555E30da8f98308EdB960aa94C0Db47230d2B9c",
                                decimals: 8,
                                name: "Wrapped BTC",
                                symbol: "WBTC"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0x0555E30da8f98308EdB960aa94C0Db47230d2B9c",
                                decimals: 8,
                                name: "Wrapped BTC",
                                symbol: "WBTC"
                            }
                        },
                        sei: {
                            eid: 30280,
                            token: {
                                chainKey: "sei",
                                address: "0x0555e30da8f98308edb960aa94c0db47230d2b9c",
                                decimals: 8,
                                name: "Wrapped BTC",
                                symbol: "WBTC"
                            }
                        },
                        soneium: {
                            eid: 30340,
                            token: {
                                chainKey: "soneium",
                                address: "0x0555E30da8f98308EdB960aa94C0Db47230d2B9c",
                                decimals: 8,
                                name: "Wrapped BTC",
                                symbol: "WBTC"
                            }
                        },
                        bera: {
                            eid: 30362,
                            token: {
                                chainKey: "bera",
                                address: "0x0555e30da8f98308edb960aa94c0db47230d2b9c",
                                decimals: 8,
                                name: "Wrapped BTC",
                                symbol: "WBTC"
                            }
                        },
                        unichain: {
                            eid: 30320,
                            token: {
                                chainKey: "unichain",
                                address: "0x0555E30da8f98308EdB960aa94C0Db47230d2B9c",
                                decimals: 8,
                                name: "Wrapped BTC",
                                symbol: "WBTC"
                            }
                        },
                        sonic: {
                            eid: 30332,
                            token: {
                                chainKey: "sonic",
                                address: "0x0555E30da8f98308EdB960aa94C0Db47230d2B9c",
                                decimals: 8,
                                name: "Wrapped BTC",
                                symbol: "WBTC"
                            }
                        },
                        telos: {
                            eid: 30199,
                            token: {
                                chainKey: "telos",
                                address: "0x0555E30da8f98308EdB960aa94C0Db47230d2B9c",
                                decimals: 8,
                                name: "Wrapped BTC",
                                symbol: "WBTC"
                            }
                        }
                    },
                    coinMarketCapId: 3717
                })
            , sZ = (0,
                X.C2)({
                    coinMarketCapId: 25653,
                    deployments: {
                        sanko: {
                            eid: 30278,
                            token: {
                                chainKey: "sanko",
                                symbol: "WDMT",
                                address: "0x754cDAd6f5821077d6915004Be2cE05f93d176f8",
                                decimals: 18
                            },
                            oftProxy: {
                                address: "0x96c25882275B9D40aFF45Ce01Ae0d5bD65C89e62"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            token: {
                                chainKey: "solana",
                                symbol: "WDMT",
                                address: "236dqm1gdXTqfw2DGwHVWoTgPAr4QKdWeNMr9fpxFXzr",
                                decimals: 9,
                                programId: V.H_
                            },
                            tokenEscrow: {
                                address: "79mQQbSJv555kQpytUHA6f9NcHVLb3e9SvWMn3hv3zfg"
                            },
                            oft: {
                                programId: "HMSP4qzMdDNQZGy8fzxy1NdYjnnUyTQKGkVExFgpwYfP"
                            }
                        }
                    },
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !1
                })
            , sQ = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                address: "0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee",
                                chainKey: "ethereum",
                                decimals: 18,
                                symbol: "weETH",
                                name: "Wrapped eETH"
                            },
                            oftProxy: {
                                address: "0xcd2eb13d6831d4602d80e5db9230a57596cdca63"
                            }
                        },
                        blast: {
                            eid: 30243,
                            token: {
                                address: "0x04C0599Ae5A44757c0af6F9eC3b93da8976c150A",
                                chainKey: "blast",
                                decimals: 18,
                                symbol: "weETH",
                                name: "Wrapped eETH"
                            }
                        },
                        mode: {
                            eid: 30260,
                            token: {
                                address: "0x04C0599Ae5A44757c0af6F9eC3b93da8976c150A",
                                chainKey: "mode",
                                decimals: 18,
                                symbol: "weETH",
                                name: "Wrapped eETH"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0x04C0599Ae5A44757c0af6F9eC3b93da8976c150A",
                                decimals: 18,
                                symbol: "weETH",
                                name: "Wrapped eETH"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            token: {
                                chainKey: "bsc",
                                address: "0x04C0599Ae5A44757c0af6F9eC3b93da8976c150A",
                                decimals: 18,
                                symbol: "weETH",
                                name: "Wrapped eETH"
                            }
                        },
                        linea: {
                            eid: 30183,
                            token: {
                                chainKey: "linea",
                                address: "0x1Bf74C010E6320bab11e2e5A532b5AC15e0b8aA6",
                                decimals: 18,
                                symbol: "weETH",
                                name: "Wrapped eETH"
                            }
                        },
                        optimism: {
                            eid: 30111,
                            token: {
                                chainKey: "optimism",
                                symbol: "weETH",
                                address: "0x5A7fACB970D094B6C7FF1df0eA68D99E6e73CBFF",
                                decimals: 18
                            }
                        },
                        scroll: {
                            eid: 30214,
                            token: {
                                chainKey: "scroll",
                                symbol: "weETH",
                                address: "0x01f0a31698C4d065659b9bdC21B3610292a1c506",
                                decimals: 18
                            }
                        },
                        zksync: {
                            eid: 30165,
                            token: {
                                chainKey: "zksync",
                                symbol: "weETH",
                                address: "0xc1fa6e2e8667d9be0ca938a54c7e0285e9df924a",
                                decimals: 18
                            }
                        },
                        swell: {
                            eid: 30335,
                            token: {
                                chainKey: "swell",
                                symbol: "weETH",
                                address: "0xA6cB988942610f6731e664379D15fFcfBf282b44",
                                decimals: 18
                            }
                        },
                        morph: {
                            eid: 30322,
                            token: {
                                chainKey: "morph",
                                symbol: "weETH",
                                address: "0x7DCC39B4d1C53CB31e1aBc0e358b43987FEF80f7",
                                decimals: 18
                            }
                        },
                        bera: {
                            eid: 30362,
                            token: {
                                chainKey: "bera",
                                symbol: "weETH",
                                address: "0x7DCC39B4d1C53CB31e1aBc0e358b43987FEF80f7",
                                decimals: 18
                            }
                        },
                        unichain: {
                            eid: 30320,
                            token: {
                                chainKey: "unichain",
                                symbol: "weETH",
                                address: "0x7DCC39B4d1C53CB31e1aBc0e358b43987FEF80f7",
                                decimals: 18
                            }
                        }
                    },
                    coinMarketCapId: 28568
                })
            , sY = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            oftProxy: {
                                address: "0x695921034f0387eAc4e11620EE91b1b15A6A09fE"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "WETH",
                                address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
                                decimals: 18
                            }
                        },
                        fantom: {
                            eid: 112,
                            token: {
                                chainKey: "fantom",
                                symbol: "WETH",
                                address: "0x695921034f0387eAc4e11620EE91b1b15A6A09fE",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 18,
                    version: 1,
                    fee: !1,
                    coinMarketCapId: 2396
                })
            , sq = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            oftProxy: {
                                address: "0x597e6ac6a5b2413169a9588ba5d72c73b9179929"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "WETH",
                                address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
                                decimals: 18
                            }
                        },
                        kava: {
                            eid: 177,
                            token: {
                                chainKey: "kava",
                                symbol: "WETH",
                                address: "0x2DfD4dE5AE386Cd3f4fC8e2cb39240852E47F5E8",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 18,
                    version: 1,
                    fee: !1,
                    coinMarketCapId: 2396
                })
            , sJ = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinGeckoId: "wild-goat-coin-2",
                    deployments: {
                        arbitrum: {
                            eid: 30110,
                            version: 3,
                            token: {
                                chainKey: "arbitrum",
                                decimals: 6,
                                symbol: "WGC",
                                name: "Wild Goat Coin",
                                address: "0xc53ac24320E3A54C7211e4993c8095078a0Cb3Cf"
                            }
                        },
                        xlayer: {
                            eid: 30274,
                            version: 3,
                            token: {
                                chainKey: "xlayer",
                                decimals: 6,
                                symbol: "WGC",
                                name: "Wild Goat Coin",
                                address: "0xc53ac24320E3A54C7211e4993c8095078a0Cb3Cf"
                            }
                        },
                        polygon: {
                            eid: 30109,
                            version: 3,
                            token: {
                                chainKey: "polygon",
                                decimals: 6,
                                symbol: "WGC",
                                name: "Wild Goat Coin",
                                address: "0xc53ac24320E3A54C7211e4993c8095078a0Cb3Cf"
                            }
                        },
                        bob: {
                            eid: 30279,
                            version: 3,
                            token: {
                                chainKey: "bob",
                                decimals: 6,
                                symbol: "WGC",
                                name: "Wild Goat Coin",
                                address: "0x3d63825B0d8669307366E6c8202f656b9E91D368"
                            }
                        },
                        ink: {
                            eid: 30339,
                            version: 3,
                            token: {
                                chainKey: "ink",
                                decimals: 6,
                                symbol: "WGC",
                                name: "Wild Goat Coin",
                                address: "0x3d63825B0d8669307366E6c8202f656b9E91D368"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            oft: {
                                programId: "1pxkkP66ntXRtBDt4yb92SAZofqi7ZD68VesDGSWGC3"
                            },
                            token: {
                                chainKey: "solana",
                                decimals: 6,
                                symbol: "WGC",
                                name: "Wild Goat Coin",
                                address: "8aB8hdzyqjCJdtP1rfdLNX8bGDjjM8S42BZ3j4zNVtRN",
                                programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                            },
                            tokenEscrow: {
                                address: "4mvPEBbkYigrWBGZAoswpUGzk5ifd1f5m8Zb2jTyCAZ2"
                            }
                        },
                        scroll: {
                            eid: 30214,
                            version: 3,
                            token: {
                                chainKey: "scroll",
                                decimals: 6,
                                symbol: "WGC",
                                name: "Wild Goat Coin",
                                address: "0xc53ac24320E3A54C7211e4993c8095078a0Cb3Cf"
                            }
                        },
                        celo: {
                            eid: 30125,
                            version: 3,
                            token: {
                                chainKey: "celo",
                                decimals: 6,
                                symbol: "WGC",
                                name: "Wild Goat Coin",
                                address: "0xc53ac24320E3A54C7211e4993c8095078a0Cb3Cf"
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            version: 3,
                            token: {
                                chainKey: "ethereum",
                                decimals: 6,
                                symbol: "WGC",
                                name: "Wild Goat Coin",
                                address: "0xc53ac24320E3A54C7211e4993c8095078a0Cb3Cf"
                            }
                        },
                        worldchain: {
                            eid: 30319,
                            version: 3,
                            token: {
                                chainKey: "worldchain",
                                decimals: 6,
                                symbol: "WGC",
                                name: "Wild Goat Coin",
                                address: "0x3d63825B0d8669307366E6c8202f656b9E91D368"
                            }
                        },
                        bera: {
                            eid: 30362,
                            version: 3,
                            token: {
                                chainKey: "bera",
                                decimals: 6,
                                symbol: "WGC",
                                name: "Wild Goat Coin",
                                address: "0xc53ac24320E3A54C7211e4993c8095078a0Cb3Cf"
                            }
                        },
                        unichain: {
                            eid: 30320,
                            version: 3,
                            token: {
                                chainKey: "unichain",
                                decimals: 6,
                                symbol: "WGC",
                                name: "Wild Goat Coin",
                                address: "0x3d63825B0d8669307366E6c8202f656b9E91D368"
                            }
                        },
                        zora: {
                            eid: 30195,
                            version: 3,
                            token: {
                                chainKey: "zora",
                                decimals: 6,
                                symbol: "WGC",
                                name: "Wild Goat Coin",
                                address: "0x3d63825B0d8669307366E6c8202f656b9E91D368"
                            }
                        },
                        opbnb: {
                            eid: 30202,
                            version: 3,
                            token: {
                                chainKey: "opbnb",
                                decimals: 6,
                                symbol: "WGC",
                                name: "Wild Goat Coin",
                                address: "0xc53ac24320E3A54C7211e4993c8095078a0Cb3Cf"
                            }
                        },
                        linea: {
                            eid: 30183,
                            version: 3,
                            token: {
                                chainKey: "linea",
                                decimals: 6,
                                symbol: "WGC",
                                name: "Wild Goat Coin",
                                address: "0xc53ac24320E3A54C7211e4993c8095078a0Cb3Cf"
                            }
                        },
                        soneium: {
                            eid: 30340,
                            version: 3,
                            token: {
                                chainKey: "soneium",
                                decimals: 6,
                                symbol: "WGC",
                                name: "Wild Goat Coin",
                                address: "0x3d63825B0d8669307366E6c8202f656b9E91D368"
                            }
                        },
                        sonic: {
                            eid: 30332,
                            version: 3,
                            token: {
                                chainKey: "sonic",
                                decimals: 6,
                                symbol: "WGC",
                                name: "Wild Goat Coin",
                                address: "0xc53ac24320E3A54C7211e4993c8095078a0Cb3Cf"
                            }
                        },
                        base: {
                            eid: 30184,
                            version: 3,
                            token: {
                                chainKey: "base",
                                decimals: 6,
                                symbol: "WGC",
                                name: "Wild Goat Coin",
                                address: "0x3d63825B0d8669307366E6c8202f656b9E91D368"
                            }
                        },
                        optimism: {
                            eid: 30111,
                            version: 3,
                            token: {
                                chainKey: "optimism",
                                decimals: 6,
                                symbol: "WGC",
                                name: "Wild Goat Coin",
                                address: "0x3d63825B0d8669307366E6c8202f656b9E91D368"
                            }
                        },
                        lisk: {
                            eid: 30321,
                            version: 3,
                            token: {
                                chainKey: "lisk",
                                decimals: 6,
                                symbol: "WGC",
                                name: "Wild Goat Coin",
                                address: "0x3d63825B0d8669307366E6c8202f656b9E91D368"
                            }
                        },
                        swell: {
                            eid: 30335,
                            version: 3,
                            token: {
                                chainKey: "swell",
                                decimals: 6,
                                symbol: "WGC",
                                name: "Wild Goat Coin",
                                address: "0x3d63825B0d8669307366E6c8202f656b9E91D368"
                            }
                        },
                        mode: {
                            eid: 30260,
                            version: 3,
                            token: {
                                chainKey: "mode",
                                decimals: 6,
                                symbol: "WGC",
                                name: "Wild Goat Coin",
                                address: "0x3d63825B0d8669307366E6c8202f656b9E91D368"
                            }
                        },
                        avalanche: {
                            eid: 30106,
                            version: 3,
                            token: {
                                chainKey: "avalanche",
                                decimals: 6,
                                symbol: "WGC",
                                name: "Wild Goat Coin",
                                address: "0xc53ac24320E3A54C7211e4993c8095078a0Cb3Cf"
                            }
                        },
                        cyber: {
                            eid: 30283,
                            version: 3,
                            token: {
                                chainKey: "cyber",
                                decimals: 6,
                                symbol: "WGC",
                                name: "Wild Goat Coin",
                                address: "0x3d63825B0d8669307366E6c8202f656b9E91D368"
                            }
                        },
                        mantle: {
                            eid: 30181,
                            version: 3,
                            token: {
                                chainKey: "mantle",
                                decimals: 6,
                                symbol: "WGC",
                                name: "Wild Goat Coin",
                                address: "0xc53ac24320E3A54C7211e4993c8095078a0Cb3Cf"
                            }
                        }
                    }
                })
            , sj = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        bsc: {
                            eid: 30102,
                            token: {
                                chainKey: "bsc",
                                address: "0x2DCE707c47Fd9C0f1833A281F45e3e41Ace2725B",
                                decimals: 18,
                                name: "dogwifhat",
                                symbol: "WIF"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0x1fba65dE0a9cBD2D1DF82d141897042d36Bb6c86",
                                decimals: 18,
                                name: "dogwifhat",
                                symbol: "WIF"
                            }
                        },
                        tron: {
                            eid: 30420,
                            token: {
                                chainKey: "tron",
                                address: "0x88d8ae3bfaa6e1e86baaf0703ed94235566a8245",
                                decimals: 18,
                                name: "dogwifhat",
                                symbol: "WIF"
                            }
                        },
                        solana: {
                            eid: 30168,
                            token: {
                                chainKey: "solana",
                                name: "dogwifhat",
                                symbol: "WIF",
                                address: "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm",
                                decimals: 6
                            },
                            tokenEscrow: {
                                address: "H25dfYToAM43VxwRyrwFF2bFKv13UL5dABFLfb79ywig"
                            },
                            oft: {
                                programId: "HRPXLCqspQocTjfcX4rvAPaY9q6Gwb1rrD3xXWrfJWdW"
                            }
                        }
                    },
                    coinMarketCapId: 28752
                })
            , s_ = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinMarketCapId: 9674,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            version: 3,
                            oftProxy: {
                                address: "0xaFdE2490236bc64950def5472296aa0D9758Db0d"
                            },
                            token: {
                                chainKey: "ethereum",
                                decimals: 18,
                                symbol: "WILD",
                                name: "Wilder",
                                address: "0x2a3bFF78B79A009976EeA096a51A948a3dC00e34"
                            }
                        },
                        polygon: {
                            eid: 30109,
                            version: 3,
                            token: {
                                chainKey: "polygon",
                                decimals: 18,
                                symbol: "WILD",
                                name: "Wilder World Token",
                                address: "0xaFdE2490236bc64950def5472296aa0D9758Db0d"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            oft: {
                                programId: "oeGLnBaojpMDL9JLHS2zKMmzdy6Yq7d1fgAueTP9Vu4"
                            },
                            token: {
                                chainKey: "solana",
                                decimals: 9,
                                symbol: "WILD",
                                name: "Wilder World Token",
                                address: "FVvd3s9dZYzsgitkJyWbmycSc8MkYZjyF7oqAEvmSxTZ",
                                programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                            },
                            tokenEscrow: {
                                address: "AXymaBxQ7qJteQQ1rqJKaynBzb5hCmNgxa4b7SPH9L57"
                            }
                        },
                        base: {
                            eid: 30184,
                            version: 3,
                            token: {
                                chainKey: "base",
                                decimals: 18,
                                symbol: "WILD",
                                name: "Wilder World Token",
                                address: "0xaFdE2490236bc64950def5472296aa0D9758Db0d"
                            }
                        }
                    }
                })
            , s$ = (0,
                X.C2)({
                    deployments: {
                        ethereum: {
                            eid: 101,
                            oftProxy: {
                                address: "0x885f0a0e5cd0bdb3e58995aad80e6c6bc2823dcb"
                            },
                            token: {
                                chainKey: "ethereum",
                                symbol: "WNCG",
                                address: "0xf203Ca1769ca8e9e8FE1DA9D147DB68B6c919817",
                                decimals: 18
                            }
                        },
                        bsc: {
                            eid: 102,
                            token: {
                                chainKey: "bsc",
                                symbol: "WNCG",
                                address: "0x52242cbAb41e290E9E17CCC50Cc437bB60020a9d",
                                decimals: 18
                            }
                        }
                    },
                    sharedDecimals: 2,
                    version: 2,
                    fee: !0,
                    coinMarketCapId: 11222
                })
            , s0 = (0,
                X.C2)({
                    sharedDecimals: 8,
                    version: 2,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x6BC08509B36A98E829dFfAD49Fde5e412645d0a3",
                                decimals: 18,
                                name: "WoofWork.io",
                                symbol: "WOOF"
                            },
                            oftProxy: {
                                address: "0x395b362d87fe1b2bd801546314a172e05c87e362"
                            }
                        },
                        base: {
                            eid: 184,
                            token: {
                                chainKey: "base",
                                address: "0xB3a9bd4861454bA94931ebFF410c3D828525dCe2",
                                decimals: 18,
                                name: "WoofWork.io",
                                symbol: "WOOF"
                            }
                        }
                    },
                    coinMarketCapId: 23371
                })
            , s1 = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinMarketCapId: 12409,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            version: 3,
                            oftProxy: {
                                address: "0xA2D339411624CfB6243F909b064E07320919EE3F"
                            },
                            token: {
                                chainKey: "ethereum",
                                decimals: 18,
                                symbol: "wstETH",
                                name: "Wrapped liquid staked Ether 2.0",
                                address: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0"
                            }
                        },
                        sei: {
                            eid: 30280,
                            version: 3,
                            token: {
                                chainKey: "sei",
                                decimals: 18,
                                symbol: "wstETH",
                                name: "Wrapped liquid staked Ether 2.0",
                                address: "0xBE574b6219C6D985d08712e90C21A88fd55f1ae8"
                            }
                        }
                    }
                })
            , s3 = (0,
                X.C2)({
                    version: 3,
                    sharedDecimals: 6,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        base: {
                            eid: 30184,
                            token: {
                                address: "0x91F9cc2649ac70a071602cadE9b0C1A5868af51D",
                                chainKey: "base",
                                decimals: 18,
                                name: "Wrapped XTZ",
                                symbol: "WXTZ"
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            token: {
                                address: "0xc9B53AB2679f573e480d01e0f49e2B5CFB7a3EAb",
                                chainKey: "ethereum",
                                decimals: 18,
                                name: "Wrapped XTZ",
                                symbol: "WXTZ"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            token: {
                                address: "0x91F9cc2649ac70a071602cadE9b0C1A5868af51D",
                                chainKey: "bsc",
                                decimals: 18,
                                name: "Wrapped XTZ",
                                symbol: "WXTZ"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                address: "0x7424f00845777A06E21F0bd8873f814A8A814B2D",
                                chainKey: "arbitrum",
                                decimals: 18,
                                name: "Wrapped XTZ",
                                symbol: "WXTZ"
                            }
                        },
                        etherlink: {
                            eid: 30292,
                            token: {
                                address: "0xc9B53AB2679f573e480d01e0f49e2B5CFB7a3EAb",
                                chainKey: "etherlink",
                                decimals: 18,
                                name: "Wrapped XTZ",
                                symbol: "WXTZ"
                            }
                        }
                    },
                    coinGeckoId: "wrapped-xtz"
                })
            , s8 = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            version: 3,
                            token: {
                                chainKey: "ethereum",
                                decimals: 18,
                                symbol: "XPLA",
                                name: "XPLA",
                                address: "0x332DD4F170cdfC27756EE4159E7DBF034c84C65b"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            version: 3,
                            token: {
                                chainKey: "bsc",
                                decimals: 18,
                                symbol: "XPLA",
                                name: "XPLA",
                                address: "0x332DD4F170cdfC27756EE4159E7DBF034c84C65b"
                            }
                        },
                        xpla: {
                            eid: 30216,
                            version: 3,
                            token: {
                                chainKey: "xpla",
                                decimals: 18,
                                symbol: "XPLA",
                                name: "XPLA"
                            },
                            oftNative: {
                                address: "0x332dd4f170cdfc27756ee4159e7dbf034c84c65b"
                            }
                        }
                    }
                })
            , s2 = (0,
                X.C2)({
                    version: 3,
                    sharedDecimals: 8,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                address: "0xd9D920AA40f578ab794426F5C90F6C731D159DEf",
                                chainKey: "ethereum",
                                decimals: 18,
                                name: "SolvBTC Babylon",
                                symbol: "xSolvBTC"
                            },
                            oftProxy: {
                                address: "0x94DaBd84Cd36c4D364FcDD5CdABf41E73dBc99e6"
                            }
                        },
                        mp1: {
                            eid: 30331,
                            token: {
                                address: "0xCC0966D8418d412c599A6421b760a847eB169A8c",
                                chainKey: "mp1",
                                decimals: 18,
                                name: "SolvBTC Babylon",
                                symbol: "xSolvBTC"
                            },
                            oftProxy: {
                                address: "0x94DaBd84Cd36c4D364FcDD5CdABf41E73dBc99e6"
                            }
                        },
                        bera: {
                            eid: 30362,
                            token: {
                                address: "0xCC0966D8418d412c599A6421b760a847eB169A8c",
                                chainKey: "bera",
                                decimals: 18,
                                name: "SolvBTC Babylon",
                                symbol: "xSolvBTC"
                            },
                            oftProxy: {
                                address: "0x94DaBd84Cd36c4D364FcDD5CdABf41E73dBc99e6"
                            }
                        },
                        rootstock: {
                            eid: 30333,
                            token: {
                                chainKey: "rootstock",
                                decimals: 18,
                                symbol: "xSolvBTC",
                                name: "xSolvBTC",
                                address: "0xCC0966D8418d412c599A6421b760a847eB169A8c"
                            },
                            oftProxy: {
                                address: "0x94DaBd84Cd36c4D364FcDD5CdABf41E73dBc99e6"
                            }
                        }
                    },
                    coinMarketCapId: 33310
                })
            , s6 = (0,
                X.C2)({
                    fee: !1,
                    sharedDecimals: 8,
                    version: 2,
                    deployments: {
                        ethereum: {
                            eid: 101,
                            token: {
                                chainKey: "ethereum",
                                symbol: "XVS",
                                address: "0xd3CC9d8f3689B83c91b7B59cAB4946B063EB894A",
                                decimals: 18
                            },
                            oftProxy: {
                                address: "0x888e317606b4c590bbad88653863e8b345702633"
                            }
                        },
                        bsc: {
                            eid: 102,
                            token: {
                                chainKey: "bsc",
                                symbol: "XVS",
                                address: "0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63",
                                decimals: 18
                            },
                            oftProxy: {
                                address: "0xf8f46791e3db29a029ec6c9d946226f3c613e854"
                            }
                        },
                        opbnb: {
                            eid: 202,
                            token: {
                                chainKey: "opbnb",
                                symbol: "XVS",
                                address: "0x3e2e61f1c075881f3fb8dd568043d8c221fd5c61",
                                decimals: 18
                            },
                            oftProxy: {
                                address: "0x100d331c1b5dcd41eacb1eced0e83dcebf3498b2"
                            }
                        },
                        arbitrum: {
                            eid: 110,
                            token: {
                                chainKey: "arbitrum",
                                symbol: "XVS",
                                address: "0xc1Eb7689147C81aC840d4FF0D298489fc7986d52",
                                decimals: 18
                            },
                            oftProxy: {
                                address: "0x20cEa49B5F7a6DBD78cAE772CA5973eF360AA1e6"
                            }
                        },
                        zksync: {
                            eid: 165,
                            token: {
                                chainKey: "zksync",
                                symbol: "XVS",
                                address: "0xD78ABD81a3D57712a3af080dc4185b698Fe9ac5A",
                                decimals: 18
                            },
                            oftProxy: {
                                address: "0x16a62B534e09A7534CD5847CFE5Bf6a4b0c1B116"
                            }
                        }
                    },
                    coinMarketCapId: 7288
                })
            , s4 = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinGeckoId: "yieldnest-restaked-bitfi-btc-kernel",
                    deployments: {
                        bsc: {
                            eid: 30102,
                            version: 3,
                            oftProxy: {
                                address: "0x59f1f7C4A003c2aE7c4C6DB24A831c92bb7EF9Ae"
                            },
                            token: {
                                chainKey: "bsc",
                                decimals: 8,
                                symbol: "ynBfBTCk",
                                name: "YieldNest Restaked BitFi BTC - Kernel",
                                address: "0x1B015705214bdcAAf43E8EDeCa13023143224Ab7"
                            }
                        },
                        hemi: {
                            eid: 30329,
                            version: 3,
                            oftProxy: {
                                address: "0x59f1f7C4A003c2aE7c4C6DB24A831c92bb7EF9Ae"
                            },
                            token: {
                                chainKey: "hemi",
                                decimals: 8,
                                symbol: "ynBfBTCk",
                                name: "YieldNest Restaked BitFi BTC - Kernel",
                                address: "0x472Ac3Bd4C130290137467EF24719F28788A79e5"
                            }
                        }
                    }
                })
            , s7 = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinGeckoId: "ynbnb-max",
                    deployments: {
                        bsc: {
                            eid: 30102,
                            version: 3,
                            oftProxy: {
                                address: "0x12A1ea4a8D6D698e4d6175f563957d1A55405947"
                            },
                            token: {
                                chainKey: "bsc",
                                decimals: 18,
                                symbol: "ynBNBx",
                                name: "ynBNB MAX",
                                address: "0x32C830f5c34122C6afB8aE87ABA541B7900a2C5F"
                            }
                        },
                        hemi: {
                            eid: 30329,
                            version: 3,
                            oftProxy: {
                                address: "0x12A1ea4a8D6D698e4d6175f563957d1A55405947"
                            },
                            token: {
                                chainKey: "hemi",
                                decimals: 18,
                                symbol: "ynBNBx",
                                name: "ynBNB MAX",
                                address: "0xBBc57D9dF01745db22Cc0b2f75Cf143B996A94c1"
                            }
                        }
                    }
                })
            , s9 = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinGeckoId: "yieldnest-restaked-btc-kernel",
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            version: 3,
                            oftProxy: {
                                address: "0xFD72FbB61798f3bcB707F5Ba98CB72a87CCa02A2"
                            },
                            token: {
                                chainKey: "ethereum",
                                decimals: 18,
                                symbol: "ynBTCk",
                                name: "YieldNest Restaked BTC - Kernel",
                                address: "0x68589adc7687A23Ff2B06fb032b997f09B44Ed5d"
                            }
                        },
                        hemi: {
                            eid: 30329,
                            version: 3,
                            oftProxy: {
                                address: "0xFD72FbB61798f3bcB707F5Ba98CB72a87CCa02A2"
                            },
                            token: {
                                chainKey: "hemi",
                                decimals: 18,
                                symbol: "ynBTCk",
                                name: "YieldNest Restaked BTC - Kernel",
                                address: "0x68589adc7687A23Ff2B06fb032b997f09B44Ed5d"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            version: 3,
                            oftProxy: {
                                address: "0x18fC76B4EBb856AF08AE041EcA0c0B0881DfD058"
                            },
                            token: {
                                chainKey: "bsc",
                                decimals: 18,
                                symbol: "ynBTCk",
                                name: "YieldNest Restaked BTC - Kernel",
                                address: "0x78839cE14a8213779128Ee4da6D75E1326606A56"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            version: 3,
                            oftProxy: {
                                address: "0xFD72FbB61798f3bcB707F5Ba98CB72a87CCa02A2"
                            },
                            token: {
                                chainKey: "arbitrum",
                                decimals: 18,
                                symbol: "ynBTCk",
                                name: "YieldNest Restaked BTC - Kernel",
                                address: "0x68589adc7687A23Ff2B06fb032b997f09B44Ed5d"
                            }
                        },
                        base: {
                            eid: 30184,
                            version: 3,
                            oftProxy: {
                                address: "0xFD72FbB61798f3bcB707F5Ba98CB72a87CCa02A2"
                            },
                            token: {
                                chainKey: "base",
                                decimals: 18,
                                symbol: "ynBTCk",
                                name: "YieldNest Restaked BTC - Kernel",
                                address: "0x68589adc7687A23Ff2B06fb032b997f09B44Ed5d"
                            }
                        },
                        optimism: {
                            eid: 30111,
                            version: 3,
                            oftProxy: {
                                address: "0xFD72FbB61798f3bcB707F5Ba98CB72a87CCa02A2"
                            },
                            token: {
                                chainKey: "optimism",
                                decimals: 18,
                                symbol: "ynBTCk",
                                name: "YieldNest Restaked BTC - Kernel",
                                address: "0x68589adc7687A23Ff2B06fb032b997f09B44Ed5d"
                            }
                        },
                        taiko: {
                            eid: 30290,
                            version: 3,
                            oftProxy: {
                                address: "0xFD72FbB61798f3bcB707F5Ba98CB72a87CCa02A2"
                            },
                            token: {
                                chainKey: "taiko",
                                decimals: 18,
                                symbol: "ynBTCk",
                                name: "YieldNest Restaked BTC - Kernel",
                                address: "0x68589adc7687A23Ff2B06fb032b997f09B44Ed5d"
                            }
                        }
                    }
                })
            , s5 = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinGeckoId: "yieldnest-restaked-coffer-btc-kernel",
                    deployments: {
                        bsc: {
                            eid: 30102,
                            version: 3,
                            oftProxy: {
                                address: "0x89935D6DB5f7BD0Faf142b1BBcfb57Ec44B255a3"
                            },
                            token: {
                                chainKey: "bsc",
                                decimals: 8,
                                symbol: "ynCoBTCk",
                                name: "YieldNest Restaked Coffer BTC - Kernel",
                                address: "0x132376b153d3cFf94615fe25712DB12CaAADf547"
                            }
                        },
                        hemi: {
                            eid: 30329,
                            version: 3,
                            oftProxy: {
                                address: "0x24ECbe695B1F5FDf154EC6f7c532C6A74dAB161c"
                            },
                            token: {
                                chainKey: "hemi",
                                decimals: 8,
                                symbol: "ynCoBTCk",
                                name: "YieldNest Restaked Coffer BTC - Kernel",
                                address: "0x8970a6A9Eae065aA81a94E86ebCAF4F3d4dd6DA1"
                            }
                        }
                    }
                })
            , ie = (0,
                X.C2)({
                    version: 3,
                    sharedDecimals: 6,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        arbitrum: {
                            eid: 30110,
                            token: {
                                address: "0xE231DB5F348d709239Ef1741EA30961B3B635a61",
                                chainKey: "arbitrum",
                                decimals: 18,
                                name: "ynETH MAX",
                                symbol: "ynETHx"
                            },
                            oftProxy: {
                                address: "0xBe82CBe217Bf4E0A87DD88C552e93054f4EF2C7C"
                            }
                        },
                        scroll: {
                            eid: 30214,
                            token: {
                                address: "0xE231DB5F348d709239Ef1741EA30961B3B635a61",
                                chainKey: "scroll",
                                decimals: 18,
                                name: "ynETH MAX",
                                symbol: "ynETHx"
                            },
                            oftProxy: {
                                address: "0xBe82CBe217Bf4E0A87DD88C552e93054f4EF2C7C"
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            token: {
                                address: "0x657d9ABA1DBb59e53f9F3eCAA878447dCfC96dCb",
                                chainKey: "ethereum",
                                decimals: 18,
                                name: "ynETH MAX",
                                symbol: "ynETHx"
                            },
                            oftProxy: {
                                address: "0x79a5959cc1CBe4D08E7800Bd16759D82e64169a1"
                            }
                        },
                        bera: {
                            eid: 30362,
                            token: {
                                address: "0xE231DB5F348d709239Ef1741EA30961B3B635a61",
                                chainKey: "bera",
                                decimals: 18,
                                name: "ynETH MAX",
                                symbol: "ynETHx"
                            },
                            oftProxy: {
                                address: "0xBe82CBe217Bf4E0A87DD88C552e93054f4EF2C7C"
                            }
                        },
                        fraxtal: {
                            eid: 30255,
                            token: {
                                address: "0xE231DB5F348d709239Ef1741EA30961B3B635a61",
                                chainKey: "fraxtal",
                                decimals: 18,
                                name: "ynETH MAX",
                                symbol: "ynETHx"
                            },
                            oftProxy: {
                                address: "0xBe82CBe217Bf4E0A87DD88C552e93054f4EF2C7C"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            token: {
                                address: "0xE231DB5F348d709239Ef1741EA30961B3B635a61",
                                chainKey: "bsc",
                                decimals: 18,
                                name: "ynETH MAX",
                                symbol: "ynETHx"
                            },
                            oftProxy: {
                                address: "0xBe82CBe217Bf4E0A87DD88C552e93054f4EF2C7C"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                address: "0xE231DB5F348d709239Ef1741EA30961B3B635a61",
                                chainKey: "base",
                                decimals: 18,
                                name: "ynETH MAX",
                                symbol: "ynETHx"
                            },
                            oftProxy: {
                                address: "0xBe82CBe217Bf4E0A87DD88C552e93054f4EF2C7C"
                            }
                        },
                        optimism: {
                            eid: 30111,
                            token: {
                                address: "0xE231DB5F348d709239Ef1741EA30961B3B635a61",
                                chainKey: "optimism",
                                decimals: 18,
                                name: "ynETH MAX",
                                symbol: "ynETHx"
                            },
                            oftProxy: {
                                address: "0xBe82CBe217Bf4E0A87DD88C552e93054f4EF2C7C"
                            }
                        },
                        taiko: {
                            eid: 30290,
                            token: {
                                address: "0xE231DB5F348d709239Ef1741EA30961B3B635a61",
                                chainKey: "taiko",
                                decimals: 18,
                                name: "ynETH MAX",
                                symbol: "ynETHx"
                            },
                            oftProxy: {
                                address: "0xBe82CBe217Bf4E0A87DD88C552e93054f4EF2C7C"
                            }
                        },
                        blast: {
                            eid: 30243,
                            token: {
                                address: "0xE231DB5F348d709239Ef1741EA30961B3B635a61",
                                chainKey: "blast",
                                decimals: 18,
                                name: "ynETH MAX",
                                symbol: "ynETHx"
                            },
                            oftProxy: {
                                address: "0xBe82CBe217Bf4E0A87DD88C552e93054f4EF2C7C"
                            }
                        },
                        mantle: {
                            eid: 30181,
                            token: {
                                address: "0xE231DB5F348d709239Ef1741EA30961B3B635a61",
                                chainKey: "mantle",
                                decimals: 18,
                                name: "ynETH MAX",
                                symbol: "ynETHx"
                            },
                            oftProxy: {
                                address: "0xBe82CBe217Bf4E0A87DD88C552e93054f4EF2C7C"
                            }
                        },
                        hemi: {
                            eid: 30329,
                            version: 3,
                            oftProxy: {
                                address: "0xD47e06ed020F86197193781260B2e2913BFF65AB"
                            },
                            token: {
                                chainKey: "hemi",
                                decimals: 18,
                                symbol: "ynETHx",
                                name: "ynETH MAX",
                                address: "0x0ce01De4e7C4Dc6531f251ee6A64A4D449bc1576"
                            }
                        },
                        ink: {
                            eid: 30339,
                            version: 3,
                            oftProxy: {
                                address: "0xD47e06ed020F86197193781260B2e2913BFF65AB"
                            },
                            token: {
                                chainKey: "ink",
                                decimals: 18,
                                symbol: "ynETHx",
                                name: "ynETH MAX",
                                address: "0x0ce01De4e7C4Dc6531f251ee6A64A4D449bc1576"
                            }
                        }
                    },
                    coinGeckoId: "yneth-max"
                })
            , ia = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinGeckoId: "wrapped-zenbtc",
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            version: 3,
                            oftProxy: {
                                address: "0x67c4FB7C4129342C0FCB95f5Fab9908870f7aF99"
                            },
                            token: {
                                chainKey: "ethereum",
                                decimals: 8,
                                symbol: "zenBTC",
                                name: "Zenrock BTC",
                                address: "0x2fE9754d5D28bac0ea8971C0Ca59428b8644C776"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            oft: {
                                programId: "GQ7Kst2CKmNjg99sGsDeFrGjpby5Avkz1PwwtRqKzD7F"
                            },
                            token: {
                                chainKey: "solana",
                                decimals: 8,
                                symbol: "zenBTC",
                                name: "Zenrock BTC",
                                address: "9hX59xHHnaZXLU6quvm5uGY2iDiT3jczaReHy6A6TYKw",
                                programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                            },
                            tokenEscrow: {
                                address: "8wTW1mJQZPwEFVHK6iDCRVvBgxBiGHuhoWB6WxfVev8C"
                            }
                        }
                    }
                })
            , id = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0xD2e92077ad4d7d50D7d60be13FffE3FB52cc0B9f",
                                decimals: 18,
                                name: "zerebro",
                                symbol: "ZEREBRO"
                            }
                        },
                        solana: {
                            eid: 30168,
                            version: 4,
                            token: {
                                chainKey: "solana",
                                symbol: "ZEREBRO",
                                address: "8x5VqbHA8D7NkD52uNuS5nnt3PwA8pLD34ymskeSo2Wn",
                                decimals: 6,
                                programId: V.H_
                            },
                            tokenEscrow: {
                                address: "BoS1kxeM8525QEfPa5vkh6FUehVXNC9ghZ42LgFEyao8"
                            },
                            oft: {
                                programId: "ZERx33PDkjfuCJrN72xQCrfRHwcb5fDJaFZnV2UqZEQ"
                            }
                        }
                    },
                    coinMarketCapId: 34083,
                    coinGeckoId: "zerebro"
                })
            , is = (0,
                X.C2)({
                    sharedDecimals: 6,
                    version: 3,
                    limit: !1,
                    fee: !0,
                    deployments: {
                        ethereum: {
                            eid: 30101,
                            token: {
                                chainKey: "ethereum",
                                address: "0x2Da17fAf782ae884faf7dB2208BBC66b6E085C22",
                                decimals: 18,
                                name: "ZeroLend",
                                symbol: "ZERO"
                            }
                        },
                        arbitrum: {
                            eid: 30110,
                            token: {
                                chainKey: "arbitrum",
                                address: "0x0Bd27617E20F09a8E7FFdaE281E383b4b2f7A742",
                                decimals: 18,
                                name: "ZeroLend",
                                symbol: "ZERO"
                            }
                        },
                        manta: {
                            eid: 30217,
                            token: {
                                chainKey: "manta",
                                address: "0xFCCa0098e740CE6D87e372717B210f5e2c27159D",
                                decimals: 18,
                                name: "ZeroLend",
                                symbol: "ZERO"
                            }
                        },
                        zircuit: {
                            eid: 30303,
                            token: {
                                chainKey: "zircuit",
                                address: "0x458AD5B487F4442245E4C5eA7249009E607A5583",
                                decimals: 18,
                                name: "ZeroLend",
                                symbol: "ZERO"
                            }
                        },
                        linea: {
                            eid: 30183,
                            token: {
                                chainKey: "linea",
                                address: "0x78354f8DcCB269a615A7e0a24f9B0718FDC3C7A7",
                                decimals: 18,
                                name: "ZeroLend",
                                symbol: "ZERO"
                            },
                            oftProxy: {
                                address: "0x671FbC39D7C99735E99Ce6918ff0666E88971D45"
                            }
                        },
                        base: {
                            eid: 30184,
                            token: {
                                chainKey: "base",
                                address: "0x458AD5B487F4442245E4C5eA7249009E607A5583",
                                decimals: 18,
                                name: "ZeroLend",
                                symbol: "ZERO"
                            }
                        },
                        blast: {
                            eid: 30243,
                            token: {
                                chainKey: "blast",
                                address: "0x6195FDA19376d2A3B3F7ED552247272308c644Dd",
                                decimals: 18,
                                name: "ZeroLend",
                                symbol: "ZERO"
                            }
                        },
                        bsc: {
                            eid: 30102,
                            token: {
                                chainKey: "bsc",
                                address: "0x458AD5B487F4442245E4C5eA7249009E607A5583",
                                decimals: 18,
                                name: "ZeroLend",
                                symbol: "ZERO"
                            }
                        },
                        xlayer: {
                            eid: 30274,
                            token: {
                                chainKey: "xlayer",
                                address: "0x98D56d03be3C0B9C58C67b209cA557d7DA9eb611",
                                decimals: 18,
                                name: "ZeroLend",
                                symbol: "ZERO"
                            }
                        }
                    },
                    coinMarketCapId: 31076,
                    coinGeckoId: "zerolend"
                })
            , ii = (0,
                X.C2)({
                    strict: !0,
                    limit: !1,
                    version: 3,
                    fee: !0,
                    sharedDecimals: 6,
                    coinMarketCapId: 29711,
                    deployments: {
                        bsc: {
                            eid: 30102,
                            version: 3,
                            token: {
                                chainKey: "bsc",
                                decimals: 18,
                                symbol: "ZRC",
                                name: "Zircuit",
                                address: "0xDaC991621fd8048D9f235324780ABD6c3aD26421"
                            }
                        },
                        ethereum: {
                            eid: 30101,
                            version: 3,
                            oftProxy: {
                                address: "0xB5EB63caAd0ca6e068114C42794AdA9B7757ebC1"
                            },
                            token: {
                                chainKey: "ethereum",
                                decimals: 18,
                                symbol: "ZRC",
                                name: "Zircuit",
                                address: "0xfd418e42783382E86Ae91e445406600Ba144D162"
                            }
                        }
                    }
                })
            , io = {
                ANON: q,
                BEETS: en,
                BRIGHT: eC,
                USDC: sF,
                USDT: su,
                USDT_TON: sT,
                WETH: sY,
                WETH_KAVA: sq,
                WBTC: sz,
                WBNB: sV,
                FBTC: e0,
                DAI: eU,
                CRV: ev,
                CVAI: eI,
                CERE: eF,
                PMX: dE,
                crvUSD: eP,
                IDIA: aE,
                MGT: aj,
                mkUSD: az,
                rUSD: dO,
                BAL: eo,
                stBTC: se,
                STG: sa,
                USR: sU,
                ARKEN: $,
                Cake: eh,
                BETS: er,
                WNCG: s$,
                ANYONE: J,
                MTVT: a3,
                SFUND: d_,
                PROS: dB,
                swETH: so,
                USDY: sI,
                TENET: sm,
                TROVE: sl,
                WAGMI: sW,
                WAGMI_V2: sX,
                LBTC: aP,
                QI: dT,
                GOLD: an,
                msUSD: a1,
                msETH: a0,
                METIS: aX,
                wstETH: s1,
                SHRAP: d0,
                FAR: e$,
                JOE: ap,
                FTR: e4,
                POLTER: dA,
                BTC_b: eE,
                BTCB: eA,
                RWA: dw,
                DAWAE: eR,
                RDNT: dI,
                REUNI: dM,
                USH: sM,
                unshETH: sA,
                PEPE: db,
                SOLVBTC: d6,
                MIM: aV,
                TRUMP: sy,
                DEGEN: eH,
                DEGEN_REBORN: eG,
                CAT: ex,
                DMT: ew,
                RLP: dH,
                WDMT: sZ,
                MAV: aH,
                TLOS: st,
                KERNEL: aK,
                KILO: au,
                OLE: a6,
                GUILD: am,
                LIF3: aI,
                lvlUSD: aU,
                UNB: sC,
                LSHARE: aM,
                LILY: ag,
                UNIX: sE,
                OMNI: a4,
                MELANIA: aw,
                IRL: aB,
                OOE: a7,
                INSP: ah,
                OSAK: dd,
                HERA: al,
                GMBL: ad,
                ABOND: Q,
                DMAIL: eO,
                rsETH: dL,
                SEI: dY,
                ITP: ak,
                ALT: Y,
                EDU: eQ,
                OX: ds,
                S: dX,
                OX_old: di,
                FLUID: e3,
                vASTR: sH,
                MAVIA: aL,
                OP: a5,
                FUEGO: e7,
                USDe: sk,
                USDe_ton: sp,
                sUSDe: si,
                RAIN: dv,
                FACTR: e_,
                sfrxETH: dj,
                SEILOR: dq,
                sFRAX: dJ,
                USDA: sB,
                FXS: e5,
                FXS_DEPRECATED: e9,
                BMT: em,
                weETH: sQ,
                ASTRAFER: ea,
                CMPT: eK,
                ENA: eq,
                SNSY: d2,
                waBTC: sw,
                XVS: s6,
                ZRO: (0,
                    X.C2)({
                        deployments: {
                            ethereum: {
                                eid: 30101,
                                token: {
                                    chainKey: "ethereum",
                                    symbol: "ZRO",
                                    address: "0x6985884C4392D348587B19cb9eAAf157F13271cd",
                                    decimals: 18
                                }
                            },
                            bsc: {
                                eid: 30102,
                                token: {
                                    chainKey: "bsc",
                                    symbol: "ZRO",
                                    address: "0x6985884C4392D348587B19cb9eAAf157F13271cd",
                                    decimals: 18
                                }
                            },
                            avalanche: {
                                eid: 30106,
                                token: {
                                    chainKey: "avalanche",
                                    symbol: "ZRO",
                                    address: "0x6985884C4392D348587B19cb9eAAf157F13271cd",
                                    decimals: 18
                                }
                            },
                            polygon: {
                                eid: 30109,
                                token: {
                                    chainKey: "polygon",
                                    symbol: "ZRO",
                                    address: "0x6985884C4392D348587B19cb9eAAf157F13271cd",
                                    decimals: 18
                                }
                            },
                            arbitrum: {
                                eid: 30110,
                                token: {
                                    chainKey: "arbitrum",
                                    symbol: "ZRO",
                                    address: "0x6985884C4392D348587B19cb9eAAf157F13271cd",
                                    decimals: 18
                                }
                            },
                            optimism: {
                                eid: 30111,
                                token: {
                                    chainKey: "optimism",
                                    symbol: "ZRO",
                                    address: "0x6985884C4392D348587B19cb9eAAf157F13271cd",
                                    decimals: 18
                                }
                            },
                            base: {
                                eid: 30184,
                                token: {
                                    chainKey: "base",
                                    symbol: "ZRO",
                                    address: "0x6985884C4392D348587B19cb9eAAf157F13271cd",
                                    decimals: 18
                                }
                            }
                        },
                        sharedDecimals: 6,
                        version: 3,
                        limit: !1,
                        fee: !0,
                        coinMarketCapId: 26997
                    }),
                FRAX: e2,
                USDz: sg,
                rswETH: dN,
                FPI: e8,
                frxETH: e6,
                MOZ: a$,
                COQ: eS,
                MODE: aY,
                BOOP: el,
                SLVL_USD: d8,
                TOS: sb,
                EMDX: eY,
                BAI: ei,
                TECH: sr,
                BETA: ec,
                MOJO: aq,
                mUSD: a8,
                mETH: aW,
                mBTC: aN,
                FLOWER: e1,
                pxETH: dK,
                ETHx: eJ,
                SAND: dz,
                CYBER: eg,
                WIF: sj,
                USDG: sK,
                IMO: aA,
                WXTZ: s3,
                APE: j,
                ORDER: da,
                PICHI: df,
                MAHA: aG,
                apxETH: _,
                SHELL: d$,
                vMANTA: sO,
                OL: a2,
                MON: aJ,
                PUFF: dF,
                WOOF: s0,
                DINERO: eN,
                sDINERO: dQ,
                SOLVBTC_BBN: s2,
                INTOS: ax,
                CGPT: ek,
                PUMP_BTC_BERA: dp,
                KIM: aT,
                PHAVERCOIN: dy,
                USD0: sh,
                USD0PP: sx,
                SOPH: d4,
                GOGLZ: ao,
                MOR: a_,
                ICL: aD,
                SWORLD: sn,
                BOX: ey,
                USDT0: sS,
                USDT0_bridged: sv,
                Token7007: Z,
                CNDY: eu,
                SYRUP: sc,
                PYUSD: du.ZL,
                PYUSD_FLOW: du.vF,
                PYUSD_BERA: du.y$,
                PIPO: dC,
                SC: z,
                PEAQ: dm,
                HAPPY: at,
                ynCoBtcK: s5,
                KOLZ: aS,
                ATH: ed,
                REVV: dU,
                DEGENAI: eL,
                SP: d7,
                sUSDA: sd,
                MCG: aO,
                BTA: eD,
                ECO: eZ,
                MNSRY: aZ,
                VITAI: sN,
                DOGL: eV,
                DOGEB: eX,
                ISLAND: aF,
                BOO: eb,
                USUAL: sR,
                ynBTCk: s9,
                ynBfBBTCk: s4,
                ynBNBx: s7,
                ORA: de,
                GMEE: as,
                GIZA: aa,
                PRFI: dh,
                PBR: dr,
                VANA: sG,
                SPARKLET: d9,
                GPT: ac,
                RWAX: dW,
                HARD: ab,
                BPRO: ef,
                ASK: ee,
                HINT: ay,
                RADAR: dS,
                AVA: es,
                DOC: eW,
                SUEDE: ss,
                ZEREBRO: id,
                SLC: d3,
                FYDE: ae,
                RING: dG,
                SAM: dV,
                OORT: a9,
                UNI_BTC: sD,
                HOT: af,
                UFD: sf,
                USDTB: sP,
                SIMMI: d1,
                SBC: dZ,
                PENGU: dt,
                PayUSD: dc,
                WGC: sJ,
                HUMA: aC,
                CYBRO: eM,
                GOD: ai,
                VIRTUAL: sL,
                DTF: ez,
                COOK: eT,
                ZRC: ii,
                ZERO: is,
                cmETH: ep,
                RBTC: dP,
                RECORD: dg,
                LAIR: av,
                MOCA: aQ,
                srUSD: d5,
                BONSAICOIN: et,
                PERC: dl,
                PLUME: dD,
                PUFFER: dk,
                RIF: dR,
                PAL: dn,
                EUL: ej,
                CATTON: eB,
                PROMPT: dx,
                WILD: s_,
                LYM: aR,
                XPLA: s8,
                ZENBTC: ia,
                ynETHx: ie,
                GS: ar
            };
        var ic = d(90372)
            , ir = d(12728)
            , im = d(59346);
        let it = {
            SHRAP: {
                direct: !0
            },
            OX: {
                direct: !0
            },
            XVS: {
                direct: !0
            },
            USDY: {
                patchDuration: !1
            },
            swETH: {
                direct: !0
            },
            DMT: {
                direct: !0
            },
            BEETS: {
                direct: !0
            },
            TLOS: {
                direct: !0
            },
            ECO: {
                direct: !0
            },
            vASTR: {
                direct: !0
            },
            vMANTA: {
                direct: !0
            }
        }
            , ib = function () {
                var e;
                let a = [];
                for (let [e, d] of Object.entries(io)) {
                    let s = it[e];
                    for (let e of (0,
                        G.A)(d, s))
                        (null == s ? void 0 : s.patchDuration) !== !1 && (0,
                            W.d)(e),
                            a.push(e)
                }
                return a.push(...(0,
                    L.L)(ir.H).map(W.d)),
                    a.push(...(0,
                        H.T)(ic.SK).map(W.d)),
                    a.push(...U(E), ...U(A), ...U(x), ...U(F), ...U(h), ...U(B)),
                    a.push(...(e = w.RJ,
                        [new w.st(e, o.s), new w.r7(e, i.p), new w.lk(e, O.getPublicConnection)].map(e => (0,
                            s.$)(e, N.X.USDC_CCTP_V1)))),
                    a.push(...(0,
                        R.$)(im.RJ.ETH)),
                    a
            }()
    },
    76908: function (e, a, d) {
        d.d(a, {
            q: function () {
                return o
            }
        });
        var s = d(38623)
            , i = d(41270);
        let o = i.z.object({
            deployments: i.z.record(i.z.object({
                votingEscrow: i.z.object({
                    address: i.z.string()
                }),
                rewardTokens: i.z.array(s.iK),
                feeDistributor: i.z.object({
                    address: i.z.string()
                })
            }))
        }).transform(e => {
            let a = {
                deployments: {}
            };
            for (let d in e.deployments) {
                let s = e.deployments[d];
                a.deployments[d] = {
                    chainKey: d,
                    ...s
                }
            }
            return a
        }
        ).parse({
            deployments: {
                ethereum: {
                    feeDistributor: {
                        address: "0xAF667811A7eDcD5B0066CD4cA0da51637DB76D09"
                    },
                    votingEscrow: {
                        address: "0x0e42acBD23FAee03249DAFF896b78d7e79fBD58E"
                    },
                    rewardTokens: [{
                        chainKey: "ethereum",
                        address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
                        symbol: "USDC",
                        decimals: 6,
                        name: "USD Coin"
                    }]
                },
                bsc: {
                    feeDistributor: {
                        address: "0xAF667811A7eDcD5B0066CD4cA0da51637DB76D09"
                    },
                    votingEscrow: {
                        address: "0xD4888870C8686c748232719051b677791dBDa26D"
                    },
                    rewardTokens: [{
                        chainKey: "bsc",
                        address: "0x55d398326f99059fF775485246999027B3197955",
                        symbol: "USDT",
                        decimals: 18,
                        name: "Tether USD"
                    }]
                },
                avalanche: {
                    feeDistributor: {
                        address: "0xAF667811A7eDcD5B0066CD4cA0da51637DB76D09"
                    },
                    votingEscrow: {
                        address: "0xCa0F57D295bbcE554DA2c07b005b7d6565a58fCE"
                    },
                    rewardTokens: [{
                        chainKey: "avalanche",
                        address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
                        symbol: "USDC",
                        decimals: 6,
                        name: "USD Coin"
                    }]
                },
                polygon: {
                    feeDistributor: {
                        address: "0xAF667811A7eDcD5B0066CD4cA0da51637DB76D09"
                    },
                    votingEscrow: {
                        address: "0x3AB2DA31bBD886A7eDF68a6b60D3CDe657D3A15D"
                    },
                    rewardTokens: [{
                        chainKey: "polygon",
                        address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
                        symbol: "USDC",
                        decimals: 6,
                        name: "USD Coin (PoS)"
                    }]
                },
                arbitrum: {
                    feeDistributor: {
                        address: "0xAF667811A7eDcD5B0066CD4cA0da51637DB76D09"
                    },
                    votingEscrow: {
                        address: "0xfBd849E6007f9BC3CC2D6Eb159c045B8dc660268"
                    },
                    rewardTokens: [{
                        chainKey: "arbitrum",
                        address: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
                        symbol: "USDC",
                        decimals: 6,
                        name: "USD Coin (Arb1)"
                    }]
                },
                optimism: {
                    feeDistributor: {
                        address: "0xAF667811A7eDcD5B0066CD4cA0da51637DB76D09"
                    },
                    votingEscrow: {
                        address: "0x43d2761ed16C89A2C4342e2B16A3C61Ccf88f05B"
                    },
                    rewardTokens: [{
                        chainKey: "optimism",
                        address: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
                        symbol: "USDC",
                        decimals: 6,
                        name: "USD Coin"
                    }]
                },
                fantom: {
                    feeDistributor: {
                        address: "0xAF667811A7eDcD5B0066CD4cA0da51637DB76D09"
                    },
                    votingEscrow: {
                        address: "0x933421675cDC8c280e5F21f0e061E77849293dba"
                    },
                    rewardTokens: [{
                        chainKey: "fantom",
                        address: "0x28a92dde19D9989F39A49905d7C9C2FAc7799bDf",
                        symbol: "USDC",
                        decimals: 6,
                        name: "USD Coin"
                    }]
                }
            }
        })
    },
    90372: function (e, a, d) {
        d.d(a, {
            xH: function () {
                return y
            },
            bQ: function () {
                return f
            },
            SK: function () {
                return l
            }
        });
        var s = d(38623)
            , i = d(24906);
        let o = {
            ethereum: s.WU.from({
                chainKey: "ethereum",
                decimals: 6,
                symbol: "USDC",
                name: "USD Coin",
                address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
            }),
            avalanche: s.WU.from({
                chainKey: "avalanche",
                decimals: 6,
                symbol: "USDC",
                name: "USD Coin",
                address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E"
            }),
            polygon: s.WU.from({
                chainKey: "polygon",
                decimals: 6,
                symbol: "USDC",
                name: "USD Coin (PoS)",
                address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
            }),
            arbitrum: s.WU.from({
                chainKey: "arbitrum",
                decimals: 6,
                symbol: "USDC",
                name: "USD Coin (Arb1)",
                address: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8"
            }),
            optimism: s.WU.from({
                chainKey: "optimism",
                decimals: 6,
                symbol: "USDC",
                name: "USD Coin",
                address: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607"
            })
        }
            , n = {
                bsc: s.WU.from({
                    chainKey: "bsc",
                    decimals: 18,
                    symbol: "USDT",
                    name: "Tether USD",
                    address: "0x55d398326f99059fF775485246999027B3197955"
                })
            };
        var c = d(3566)
            , r = d(41270);
        let m = d(72270).D.extend({
            type: r.ZP.enum(["lpStaking", "lpStakingTime"]),
            pid: r.ZP.number(),
            rewards: s.iK.array().nonempty(),
            stargateVersion: r.ZP.literal(c.C.V1)
        });
        var t = JSON.parse('[{"type":"lpStaking","address":"0xeA8DfEE1898a7e0a59f7527F076106d7e44c2176","symbol":"USDC","chainKey":"arbitrum","lpToken":{"chainKey":"arbitrum","decimals":6,"symbol":"S*USDC","name":"USD Coin (Arb1)-LP","address":"0x892785f33CdeE22A30AEF750F285E18c18040c3e"},"disabled":true,"stargateVersion":"v1","pid":0,"rewards":[{"chainKey":"arbitrum","decimals":18,"symbol":"STG","name":"StargateToken","address":"0x6694340fc020c5E6B96567843da2df01b2CE1eb6"}]},{"type":"lpStaking","address":"0xeA8DfEE1898a7e0a59f7527F076106d7e44c2176","symbol":"USDT","chainKey":"arbitrum","lpToken":{"chainKey":"arbitrum","decimals":6,"symbol":"S*USDT","name":"Tether USD-LP","address":"0xB6CfcF89a7B22988bfC96632aC2A9D6daB60d641"},"disabled":true,"stargateVersion":"v1","pid":1,"rewards":[{"chainKey":"arbitrum","decimals":18,"symbol":"STG","name":"StargateToken","address":"0x6694340fc020c5E6B96567843da2df01b2CE1eb6"}]},{"type":"lpStaking","address":"0xeA8DfEE1898a7e0a59f7527F076106d7e44c2176","symbol":"ETH","chainKey":"arbitrum","lpToken":{"chainKey":"arbitrum","decimals":18,"symbol":"S*SGETH","name":"Stargate Ether Vault-LP","address":"0x915A55e36A01285A14f05dE6e81ED9cE89772f8e"},"disabled":true,"stargateVersion":"v1","pid":2,"rewards":[{"chainKey":"arbitrum","decimals":18,"symbol":"STG","name":"StargateToken","address":"0x6694340fc020c5E6B96567843da2df01b2CE1eb6"}]},{"type":"lpStaking","address":"0xeA8DfEE1898a7e0a59f7527F076106d7e44c2176","symbol":"FRAX","chainKey":"arbitrum","lpToken":{"chainKey":"arbitrum","decimals":6,"symbol":"S*FRAX","name":"Frax-LP","address":"0xaa4BF442F024820B2C28Cd0FD72b82c63e66F56C"},"disabled":true,"stargateVersion":"v1","pid":3,"rewards":[{"chainKey":"arbitrum","decimals":18,"symbol":"STG","name":"StargateToken","address":"0x6694340fc020c5E6B96567843da2df01b2CE1eb6"}]},{"type":"lpStakingTime","address":"0x9774558534036Ff2E236331546691b4eB70594b1","symbol":"USDC","chainKey":"arbitrum","lpToken":{"chainKey":"arbitrum","decimals":6,"symbol":"S*USDC","name":"USD Coin (Arb1)-LP","address":"0x892785f33CdeE22A30AEF750F285E18c18040c3e"},"disabled":false,"stargateVersion":"v1","pid":0,"rewards":[{"chainKey":"arbitrum","decimals":18,"symbol":"ARB","name":"Arbitrum","address":"0x912CE59144191C1204E64559FE8253a0e49E6548"}]},{"type":"lpStakingTime","address":"0x9774558534036Ff2E236331546691b4eB70594b1","symbol":"USDT","chainKey":"arbitrum","lpToken":{"chainKey":"arbitrum","decimals":6,"symbol":"S*USDT","name":"Tether USD-LP","address":"0xB6CfcF89a7B22988bfC96632aC2A9D6daB60d641"},"disabled":false,"stargateVersion":"v1","pid":1,"rewards":[{"chainKey":"arbitrum","decimals":18,"symbol":"ARB","name":"Arbitrum","address":"0x912CE59144191C1204E64559FE8253a0e49E6548"}]},{"type":"lpStakingTime","address":"0x9774558534036Ff2E236331546691b4eB70594b1","symbol":"ETH","chainKey":"arbitrum","lpToken":{"chainKey":"arbitrum","decimals":18,"symbol":"S*SGETH","name":"Stargate Ether Vault-LP","address":"0x915A55e36A01285A14f05dE6e81ED9cE89772f8e"},"disabled":false,"stargateVersion":"v1","pid":2,"rewards":[{"chainKey":"arbitrum","decimals":18,"symbol":"ARB","name":"Arbitrum","address":"0x912CE59144191C1204E64559FE8253a0e49E6548"}]},{"type":"lpStakingTime","address":"0x9774558534036Ff2E236331546691b4eB70594b1","symbol":"FRAX","chainKey":"arbitrum","lpToken":{"chainKey":"arbitrum","decimals":6,"symbol":"S*FRAX","name":"Frax-LP","address":"0xaa4BF442F024820B2C28Cd0FD72b82c63e66F56C"},"disabled":false,"stargateVersion":"v1","pid":3,"rewards":[{"chainKey":"arbitrum","decimals":18,"symbol":"ARB","name":"Arbitrum","address":"0x912CE59144191C1204E64559FE8253a0e49E6548"}]},{"type":"lpStaking","address":"0x8731d54E9D02c286767d56ac03e8037C07e01e98","symbol":"USDC","chainKey":"avalanche","lpToken":{"chainKey":"avalanche","decimals":6,"symbol":"S*USDC","name":"USD Coin-LP","address":"0x1205f31718499dBf1fCa446663B532Ef87481fe1"},"disabled":false,"stargateVersion":"v1","pid":0,"rewards":[{"chainKey":"avalanche","decimals":18,"symbol":"STG","name":"StargateToken","address":"0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590"}]},{"type":"lpStaking","address":"0x8731d54E9D02c286767d56ac03e8037C07e01e98","symbol":"USDt","chainKey":"avalanche","lpToken":{"chainKey":"avalanche","decimals":6,"symbol":"S*USDt","name":"TetherToken-LP","address":"0x29e38769f23701A2e4A8Ef0492e19dA4604Be62c"},"disabled":false,"stargateVersion":"v1","pid":1,"rewards":[{"chainKey":"avalanche","decimals":18,"symbol":"STG","name":"StargateToken","address":"0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590"}]},{"type":"lpStaking","address":"0x8731d54E9D02c286767d56ac03e8037C07e01e98","symbol":"FRAX","chainKey":"avalanche","lpToken":{"chainKey":"avalanche","decimals":6,"symbol":"S*FRAX","name":"Frax-LP","address":"0x1c272232Df0bb6225dA87f4dEcD9d37c32f63Eea"},"disabled":false,"stargateVersion":"v1","pid":2,"rewards":[{"chainKey":"avalanche","decimals":18,"symbol":"STG","name":"StargateToken","address":"0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590"}]},{"type":"lpStakingTime","address":"0x06Eb48763f117c7Be887296CDcdfad2E4092739C","symbol":"ETH","chainKey":"base","lpToken":{"chainKey":"base","decimals":18,"symbol":"S*SGETH","name":"Stargate Ether Vault-LP","address":"0x28fc411f9e1c480AD312b3d9C60c22b965015c6B"},"disabled":false,"stargateVersion":"v1","pid":0,"rewards":[{"chainKey":"base","decimals":18,"symbol":"STG","name":"StargateToken","address":"0xE3B53AF74a4BF62Ae5511055290838050bf764Df"}]},{"type":"lpStakingTime","address":"0x06Eb48763f117c7Be887296CDcdfad2E4092739C","symbol":"USDbC","chainKey":"base","lpToken":{"chainKey":"base","decimals":6,"symbol":"S*USDbC","name":"USD Base Coin-LP","address":"0x4c80E24119CFB836cdF0a6b53dc23F04F7e652CA"},"disabled":false,"stargateVersion":"v1","pid":1,"rewards":[{"chainKey":"base","decimals":18,"symbol":"STG","name":"StargateToken","address":"0xE3B53AF74a4BF62Ae5511055290838050bf764Df"}]},{"type":"lpStaking","address":"0x3052A0F6ab15b4AE1df39962d5DdEFacA86DaB47","symbol":"USDT","chainKey":"bsc","lpToken":{"chainKey":"bsc","decimals":6,"symbol":"S*USDT","name":"Tether USD-LP","address":"0x9aA83081AA06AF7208Dcc7A4cB72C94d057D2cda"},"disabled":false,"stargateVersion":"v1","pid":0,"rewards":[{"chainKey":"bsc","decimals":18,"symbol":"STG","name":"StargateToken","address":"0xB0D502E938ed5f4df2E681fE6E419ff29631d62b"}]},{"type":"lpStaking","address":"0x3052A0F6ab15b4AE1df39962d5DdEFacA86DaB47","symbol":"BUSD","chainKey":"bsc","lpToken":{"chainKey":"bsc","decimals":6,"symbol":"S*BUSD","name":"BUSD Token-LP","address":"0x98a5737749490856b401DB5Dc27F522fC314A4e1"},"disabled":false,"stargateVersion":"v1","pid":1,"rewards":[{"chainKey":"bsc","decimals":18,"symbol":"STG","name":"StargateToken","address":"0xB0D502E938ed5f4df2E681fE6E419ff29631d62b"}]},{"type":"lpStakingTime","address":"0x18E08773daFfF53e84dDF4CEfC10c094f33671F4","symbol":"USDT","chainKey":"bsc","lpToken":{"chainKey":"bsc","decimals":6,"symbol":"S*USDT","name":"Tether USD-LP","address":"0x68C6c27fB0e02285829e69240BE16f32C5f8bEFe"},"disabled":true,"stargateVersion":"v1","pid":0,"rewards":[{"chainKey":"bsc","decimals":18,"symbol":"Metis","name":"Metis Token","address":"0xe552Fb52a4F19e44ef5A967632DBc320B0820639"}]},{"type":"lpStakingTime","address":"0x447f2078a1b6b2C1190B7b7aF98ef4B139d41F70","symbol":"USDT","chainKey":"bsc","lpToken":{"chainKey":"bsc","decimals":6,"symbol":"S*USDT","name":"Tether USD-LP","address":"0x68C6c27fB0e02285829e69240BE16f32C5f8bEFe"},"disabled":false,"stargateVersion":"v1","pid":0,"rewards":[{"chainKey":"bsc","decimals":18,"symbol":"METIS","name":"Metis","address":"0xceCB301c2e2A04dD631428C386DD21db70716F8a"}]},{"type":"lpStaking","address":"0xB0D502E938ed5f4df2E681fE6E419ff29631d62b","symbol":"USDC","chainKey":"ethereum","lpToken":{"chainKey":"ethereum","decimals":6,"symbol":"S*USDC","name":"USD Coin-LP","address":"0xdf0770dF86a8034b3EFEf0A1Bb3c889B8332FF56"},"disabled":false,"stargateVersion":"v1","pid":0,"rewards":[{"chainKey":"ethereum","decimals":18,"symbol":"STG","name":"StargateToken","address":"0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6"}]},{"type":"lpStaking","address":"0xB0D502E938ed5f4df2E681fE6E419ff29631d62b","symbol":"USDT","chainKey":"ethereum","lpToken":{"chainKey":"ethereum","decimals":6,"symbol":"S*USDT","name":"Tether USD-LP","address":"0x38EA452219524Bb87e18dE1C24D3bB59510BD783"},"disabled":false,"stargateVersion":"v1","pid":1,"rewards":[{"chainKey":"ethereum","decimals":18,"symbol":"STG","name":"StargateToken","address":"0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6"}]},{"type":"lpStaking","address":"0xB0D502E938ed5f4df2E681fE6E419ff29631d62b","symbol":"ETH","chainKey":"ethereum","lpToken":{"chainKey":"ethereum","decimals":18,"symbol":"S*SGETH","name":"Stargate Ether Vault-LP","address":"0x101816545F6bd2b1076434B54383a1E633390A2E"},"disabled":false,"stargateVersion":"v1","pid":2,"rewards":[{"chainKey":"ethereum","decimals":18,"symbol":"STG","name":"StargateToken","address":"0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6"}]},{"type":"lpStaking","address":"0xB0D502E938ed5f4df2E681fE6E419ff29631d62b","symbol":"DAI","chainKey":"ethereum","lpToken":{"chainKey":"ethereum","decimals":6,"symbol":"S*DAI","name":"Dai Stablecoin-LP","address":"0x0Faf1d2d3CED330824de3B8200fc8dc6E397850d"},"disabled":false,"stargateVersion":"v1","pid":3,"rewards":[{"chainKey":"ethereum","decimals":18,"symbol":"STG","name":"StargateToken","address":"0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6"}]},{"type":"lpStaking","address":"0xB0D502E938ed5f4df2E681fE6E419ff29631d62b","symbol":"FRAX","chainKey":"ethereum","lpToken":{"chainKey":"ethereum","decimals":6,"symbol":"S*FRAX","name":"Frax-LP","address":"0xfA0F307783AC21C39E939ACFF795e27b650F6e68"},"disabled":false,"stargateVersion":"v1","pid":4,"rewards":[{"chainKey":"ethereum","decimals":18,"symbol":"STG","name":"StargateToken","address":"0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6"}]},{"type":"lpStaking","address":"0xB0D502E938ed5f4df2E681fE6E419ff29631d62b","symbol":"sUSD","chainKey":"ethereum","lpToken":{"chainKey":"ethereum","decimals":6,"symbol":"S*sUSD","name":"Synth sUSD-LP","address":"0x590d4f8A68583639f215f675F3a259Ed84790580"},"disabled":false,"stargateVersion":"v1","pid":5,"rewards":[{"chainKey":"ethereum","decimals":18,"symbol":"STG","name":"StargateToken","address":"0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6"}]},{"type":"lpStaking","address":"0xB0D502E938ed5f4df2E681fE6E419ff29631d62b","symbol":"LUSD","chainKey":"ethereum","lpToken":{"chainKey":"ethereum","decimals":6,"symbol":"S*LUSD","name":"LUSD Stablecoin-LP","address":"0xE8F55368C82D38bbbbDb5533e7F56AfC2E978CC2"},"disabled":false,"stargateVersion":"v1","pid":6,"rewards":[{"chainKey":"ethereum","decimals":18,"symbol":"STG","name":"StargateToken","address":"0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6"}]},{"type":"lpStakingTime","address":"0x1c3000b8f475A958b87c73a5cc5780Ab763122FC","symbol":"USDT","chainKey":"ethereum","lpToken":{"chainKey":"ethereum","decimals":6,"symbol":"S*USDT","name":"Tether USD-LP","address":"0x430Ebff5E3E80A6C58E7e6ADA1d90F5c28AA116d"},"disabled":false,"stargateVersion":"v1","pid":0,"rewards":[{"chainKey":"ethereum","decimals":18,"symbol":"Metis","name":"Metis Token","address":"0x9E32b13ce7f2E80A01932B42553652E053D6ed8e"}]},{"type":"lpStaking","address":"0x224D8Fd7aB6AD4c6eb4611Ce56EF35Dec2277F03","symbol":"USDC","chainKey":"fantom","lpToken":{"chainKey":"fantom","decimals":6,"symbol":"S*USDC","name":"USD Coin-LP","address":"0x12edeA9cd262006cC3C4E77c90d2CD2DD4b1eb97"},"disabled":false,"stargateVersion":"v1","pid":0,"rewards":[{"chainKey":"fantom","decimals":18,"symbol":"STG","name":"StargateToken","address":"0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590"}]},{"type":"lpStaking","address":"0x224D8Fd7aB6AD4c6eb4611Ce56EF35Dec2277F03","symbol":"USDC","chainKey":"fantom","lpToken":{"chainKey":"fantom","decimals":6,"symbol":"S*USDC","name":"USD Coin-LP","address":"0xc647CE76ec30033Aa319d472Ae9f4462068f2AD7"},"disabled":false,"stargateVersion":"v1","pid":1,"rewards":[{"chainKey":"fantom","decimals":18,"symbol":"STG","name":"StargateToken","address":"0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590"}]},{"type":"lpStakingTime","address":"0x35F78Adf283Fe87732AbC9747d9f6630dF33276C","symbol":"USDt","chainKey":"kava","lpToken":{"chainKey":"kava","decimals":6,"symbol":"S*USDt","name":"TetherUSDt-LP","address":"0xAad094F6A75A14417d39f04E690fC216f080A41a"},"disabled":false,"stargateVersion":"v1","pid":0,"rewards":[{"chainKey":"kava","decimals":18,"symbol":"WKAVA","name":"Wrapped Kava","address":"0xc86c7C0eFbd6A49B35E8714C5f59D99De09A225b"}]},{"type":"lpStakingTime","address":"0x4a364f8c717cAAD9A442737Eb7b8A55cc6cf18D8","symbol":"ETH","chainKey":"linea","lpToken":{"chainKey":"linea","decimals":18,"symbol":"S*SGETH","name":"Stargate Ether Vault-LP","address":"0xAad094F6A75A14417d39f04E690fC216f080A41a"},"disabled":false,"stargateVersion":"v1","pid":0,"rewards":[{"chainKey":"linea","decimals":18,"symbol":"STG","name":"StargateToken","address":"0x808d7c71ad2ba3FA531b068a2417C63106BC0949"}]},{"type":"lpStakingTime","address":"0x352d8275AAE3e0c2404d9f68f6cEE084B5bEB3DD","symbol":"USDC","chainKey":"mantle","lpToken":{"chainKey":"mantle","decimals":6,"symbol":"S*USDC","name":"USD Coin-LP","address":"0xAad094F6A75A14417d39f04E690fC216f080A41a"},"disabled":false,"stargateVersion":"v1","pid":0,"rewards":[{"chainKey":"mantle","decimals":18,"symbol":"STG","name":"StargateToken","address":"0x8731d54E9D02c286767d56ac03e8037C07e01e98"}]},{"type":"lpStakingTime","address":"0x352d8275AAE3e0c2404d9f68f6cEE084B5bEB3DD","symbol":"USDT","chainKey":"mantle","lpToken":{"chainKey":"mantle","decimals":6,"symbol":"S*USDT","name":"Tether USD-LP","address":"0x2b60473a7C41Deb80EDdaafD5560e963440eb632"},"disabled":false,"stargateVersion":"v1","pid":1,"rewards":[{"chainKey":"mantle","decimals":18,"symbol":"STG","name":"StargateToken","address":"0x8731d54E9D02c286767d56ac03e8037C07e01e98"}]},{"type":"lpStakingTime","address":"0x45A01E4e04F14f7A4a6702c74187c5F6222033cd","symbol":"USDT","chainKey":"metis","lpToken":{"chainKey":"metis","decimals":6,"symbol":"S*USDT","name":"USDT Token-LP","address":"0x2b60473a7C41Deb80EDdaafD5560e963440eb632"},"disabled":false,"stargateVersion":"v1","pid":0,"rewards":[{"chainKey":"metis","decimals":18,"symbol":"Metis","name":"Metis Token","address":"0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000"}]},{"type":"lpStaking","address":"0x4a364f8c717cAAD9A442737Eb7b8A55cc6cf18D8","symbol":"USDC","chainKey":"optimism","lpToken":{"chainKey":"optimism","decimals":6,"symbol":"S*USDC","name":"USD Coin-LP","address":"0xDecC0c09c3B5f6e92EF4184125D5648a66E35298"},"disabled":true,"stargateVersion":"v1","pid":0,"rewards":[{"chainKey":"optimism","decimals":18,"symbol":"STG","name":"StargateToken","address":"0x296F55F8Fb28E498B858d0BcDA06D955B2Cb3f97"}]},{"type":"lpStaking","address":"0x4a364f8c717cAAD9A442737Eb7b8A55cc6cf18D8","symbol":"ETH","chainKey":"optimism","lpToken":{"chainKey":"optimism","decimals":18,"symbol":"S*SGETH","name":"Stargate Ether Vault-LP","address":"0xd22363e3762cA7339569F3d33EADe20127D5F98C"},"disabled":true,"stargateVersion":"v1","pid":1,"rewards":[{"chainKey":"optimism","decimals":18,"symbol":"STG","name":"StargateToken","address":"0x296F55F8Fb28E498B858d0BcDA06D955B2Cb3f97"}]},{"type":"lpStakingTime","address":"0x4DeA9e918c6289a52cd469cAC652727B7b412Cd2","symbol":"USDC","chainKey":"optimism","lpToken":{"chainKey":"optimism","decimals":6,"symbol":"S*USDC","name":"USD Coin-LP","address":"0xDecC0c09c3B5f6e92EF4184125D5648a66E35298"},"disabled":false,"stargateVersion":"v1","pid":0,"rewards":[{"chainKey":"optimism","decimals":18,"symbol":"OP","name":"Optimism","address":"0x4200000000000000000000000000000000000042"}]},{"type":"lpStakingTime","address":"0x4DeA9e918c6289a52cd469cAC652727B7b412Cd2","symbol":"ETH","chainKey":"optimism","lpToken":{"chainKey":"optimism","decimals":18,"symbol":"S*SGETH","name":"Stargate Ether Vault-LP","address":"0xd22363e3762cA7339569F3d33EADe20127D5F98C"},"disabled":false,"stargateVersion":"v1","pid":1,"rewards":[{"chainKey":"optimism","decimals":18,"symbol":"OP","name":"Optimism","address":"0x4200000000000000000000000000000000000042"}]},{"type":"lpStakingTime","address":"0x4DeA9e918c6289a52cd469cAC652727B7b412Cd2","symbol":"DAI","chainKey":"optimism","lpToken":{"chainKey":"optimism","decimals":6,"symbol":"S*DAI","name":"Dai Stablecoin-LP","address":"0x165137624F1f692e69659f944BF69DE02874ee27"},"disabled":false,"stargateVersion":"v1","pid":2,"rewards":[{"chainKey":"optimism","decimals":18,"symbol":"OP","name":"Optimism","address":"0x4200000000000000000000000000000000000042"}]},{"type":"lpStakingTime","address":"0x4DeA9e918c6289a52cd469cAC652727B7b412Cd2","symbol":"FRAX","chainKey":"optimism","lpToken":{"chainKey":"optimism","decimals":6,"symbol":"S*FRAX","name":"Frax-LP","address":"0x368605D9C6243A80903b9e326f1Cddde088B8924"},"disabled":false,"stargateVersion":"v1","pid":3,"rewards":[{"chainKey":"optimism","decimals":18,"symbol":"OP","name":"Optimism","address":"0x4200000000000000000000000000000000000042"}]},{"type":"lpStakingTime","address":"0x4DeA9e918c6289a52cd469cAC652727B7b412Cd2","symbol":"sUSD","chainKey":"optimism","lpToken":{"chainKey":"optimism","decimals":6,"symbol":"S*sUSD","name":"Synth sUSD-LP","address":"0x2F8bC9081c7FCFeC25b9f41a50d97EaA592058ae"},"disabled":false,"stargateVersion":"v1","pid":4,"rewards":[{"chainKey":"optimism","decimals":18,"symbol":"OP","name":"Optimism","address":"0x4200000000000000000000000000000000000042"}]},{"type":"lpStakingTime","address":"0x4DeA9e918c6289a52cd469cAC652727B7b412Cd2","symbol":"LUSD","chainKey":"optimism","lpToken":{"chainKey":"optimism","decimals":6,"symbol":"S*LUSD","name":"LUSD Stablecoin-LP","address":"0x3533F5e279bDBf550272a199a223dA798D9eff78"},"disabled":false,"stargateVersion":"v1","pid":5,"rewards":[{"chainKey":"optimism","decimals":18,"symbol":"OP","name":"Optimism","address":"0x4200000000000000000000000000000000000042"}]},{"type":"lpStaking","address":"0x8731d54E9D02c286767d56ac03e8037C07e01e98","symbol":"USDC","chainKey":"polygon","lpToken":{"chainKey":"polygon","decimals":6,"symbol":"S*USDC","name":"USD Coin (PoS)-LP","address":"0x1205f31718499dBf1fCa446663B532Ef87481fe1"},"disabled":false,"stargateVersion":"v1","pid":0,"rewards":[{"chainKey":"polygon","decimals":18,"symbol":"STG","name":"StargateToken","address":"0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590"}]},{"type":"lpStaking","address":"0x8731d54E9D02c286767d56ac03e8037C07e01e98","symbol":"USDT","chainKey":"polygon","lpToken":{"chainKey":"polygon","decimals":6,"symbol":"S*USDT","name":"(PoS) Tether USD-LP","address":"0x29e38769f23701A2e4A8Ef0492e19dA4604Be62c"},"disabled":false,"stargateVersion":"v1","pid":1,"rewards":[{"chainKey":"polygon","decimals":18,"symbol":"STG","name":"StargateToken","address":"0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590"}]},{"type":"lpStaking","address":"0x8731d54E9D02c286767d56ac03e8037C07e01e98","symbol":"DAI","chainKey":"polygon","lpToken":{"chainKey":"polygon","decimals":6,"symbol":"S*DAI","name":"(PoS) Dai Stablecoin-LP","address":"0x1c272232Df0bb6225dA87f4dEcD9d37c32f63Eea"},"disabled":false,"stargateVersion":"v1","pid":2,"rewards":[{"chainKey":"polygon","decimals":18,"symbol":"STG","name":"StargateToken","address":"0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590"}]},{"type":"lpStakingTime","address":"0x53Bf833A5d6c4ddA888F69c22C88C9f356a41614","symbol":"USDC","chainKey":"scroll","lpToken":{"chainKey":"scroll","decimals":6,"symbol":"S*USDC","name":"USD Coin-LP","address":"0xAad094F6A75A14417d39f04E690fC216f080A41a"},"disabled":false,"stargateVersion":"v1","pid":0,"rewards":[{"chainKey":"scroll","decimals":18,"symbol":"STG","name":"StargateToken","address":"0x8731d54E9D02c286767d56ac03e8037C07e01e98"}]},{"type":"lpStakingTime","address":"0x53Bf833A5d6c4ddA888F69c22C88C9f356a41614","symbol":"ETH","chainKey":"scroll","lpToken":{"chainKey":"scroll","decimals":18,"symbol":"S*SGETH","name":"Stargate Ether Vault-LP","address":"0x2b60473a7C41Deb80EDdaafD5560e963440eb632"},"disabled":false,"stargateVersion":"v1","pid":1,"rewards":[{"chainKey":"scroll","decimals":18,"symbol":"STG","name":"StargateToken","address":"0x8731d54E9D02c286767d56ac03e8037C07e01e98"}]}]');
        let b = m.array().parse(t);
        d(76908),
            d(81735);
        let l = new i.PA(i.RJ)
            , y = b
            , f = {
                deployments: {
                    ethereum: {
                        rewardToken: o.ethereum
                    },
                    avalanche: {
                        rewardToken: o.avalanche
                    },
                    bsc: {
                        rewardToken: n.bsc
                    },
                    polygon: {
                        rewardToken: o.polygon
                    },
                    arbitrum: {
                        rewardToken: o.arbitrum
                    },
                    optimism: {
                        rewardToken: o.optimism
                    },
                    fantom: {
                        rewardToken: s.WU.from({
                            chainKey: "fantom",
                            address: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75",
                            symbol: "USDC",
                            decimals: 6,
                            name: "USD Coin"
                        })
                    }
                }
            }
    },
    81735: function (e, a, d) {
        d.d(a, {
            e: function () {
                return n
            }
        });
        var s = d(38623)
            , i = d(41270);
        let o = i.ZP.object({
            stgToken: s.iK,
            veToken: s.iK,
            sveToken: s.iK.optional(),
            aastgToken: s.iK.optional(),
            minTime: i.ZP.number(),
            maxTime: i.ZP.number()
        })
            , n = i.ZP.object({
                deployments: i.ZP.record(o)
            }).parse({
                deployments: {
                    ethereum: {
                        stgToken: {
                            chainKey: "ethereum",
                            decimals: 18,
                            symbol: "STG",
                            name: "StargateToken",
                            address: "0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6"
                        },
                        veToken: {
                            symbol: "VESTG",
                            decimals: 18,
                            name: "veSTG",
                            chainKey: "ethereum",
                            address: "0x0e42acBD23FAee03249DAFF896b78d7e79fBD58E"
                        },
                        minTime: 2419200,
                        maxTime: 94608e3,
                        sveToken: {
                            chainKey: "ethereum",
                            symbol: "SVESTG",
                            decimals: 18,
                            name: "sveSTG",
                            address: "0x9485DbDa44B279311e3eEe374CED60b5364A97d9"
                        },
                        aastgToken: {
                            address: "0x4dFCAD285eF39FeD84e77eDf1B7DBC442565E55e",
                            chainKey: "ethereum",
                            decimals: 6,
                            name: "aaStargateToken",
                            symbol: "aaSTG"
                        }
                    },
                    bsc: {
                        stgToken: {
                            chainKey: "bsc",
                            decimals: 18,
                            symbol: "STG",
                            name: "StargateToken",
                            address: "0xB0D502E938ed5f4df2E681fE6E419ff29631d62b"
                        },
                        veToken: {
                            symbol: "VESTG",
                            decimals: 18,
                            name: "veSTG",
                            chainKey: "bsc",
                            address: "0xD4888870C8686c748232719051b677791dBDa26D"
                        },
                        minTime: 2419200,
                        maxTime: 94608e3
                    },
                    avalanche: {
                        stgToken: {
                            chainKey: "avalanche",
                            decimals: 18,
                            symbol: "STG",
                            name: "StargateToken",
                            address: "0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590"
                        },
                        veToken: {
                            symbol: "VESTG",
                            decimals: 18,
                            name: "veSTG",
                            chainKey: "avalanche",
                            address: "0xCa0F57D295bbcE554DA2c07b005b7d6565a58fCE"
                        },
                        minTime: 2419200,
                        maxTime: 94608e3
                    },
                    polygon: {
                        stgToken: {
                            chainKey: "polygon",
                            decimals: 18,
                            symbol: "STG",
                            name: "StargateToken",
                            address: "0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590"
                        },
                        veToken: {
                            symbol: "VESTG",
                            decimals: 18,
                            name: "veSTG",
                            chainKey: "polygon",
                            address: "0x3AB2DA31bBD886A7eDF68a6b60D3CDe657D3A15D"
                        },
                        minTime: 2419200,
                        maxTime: 94608e3
                    },
                    fantom: {
                        stgToken: {
                            chainKey: "fantom",
                            decimals: 18,
                            symbol: "STG",
                            name: "StargateToken",
                            address: "0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590"
                        },
                        veToken: {
                            symbol: "VESTG",
                            decimals: 18,
                            name: "veSTG",
                            chainKey: "fantom",
                            address: "0x933421675cDC8c280e5F21f0e061E77849293dba"
                        },
                        minTime: 2419200,
                        maxTime: 94608e3
                    },
                    arbitrum: {
                        stgToken: {
                            chainKey: "arbitrum",
                            decimals: 18,
                            symbol: "STG",
                            name: "StargateToken",
                            address: "0x6694340fc020c5E6B96567843da2df01b2CE1eb6"
                        },
                        veToken: {
                            symbol: "VESTG",
                            decimals: 18,
                            name: "veSTG",
                            chainKey: "arbitrum",
                            address: "0xfBd849E6007f9BC3CC2D6Eb159c045B8dc660268"
                        },
                        minTime: 2419200,
                        maxTime: 94608e3
                    },
                    optimism: {
                        stgToken: {
                            chainKey: "optimism",
                            decimals: 18,
                            symbol: "STG",
                            name: "StargateToken",
                            address: "0x296F55F8Fb28E498B858d0BcDA06D955B2Cb3f97"
                        },
                        veToken: {
                            symbol: "VESTG",
                            decimals: 18,
                            name: "veSTG",
                            chainKey: "optimism",
                            address: "0x43d2761ed16C89A2C4342e2B16A3C61Ccf88f05B"
                        },
                        minTime: 2419200,
                        maxTime: 94608e3
                    }
                }
            })
    }
}]);
