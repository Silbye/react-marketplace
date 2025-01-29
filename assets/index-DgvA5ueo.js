(function () {
  const a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) f(c);
  new MutationObserver((c) => {
    for (const d of c)
      if (d.type === "childList")
        for (const h of d.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && f(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(c) {
    const d = {};
    return (
      c.integrity && (d.integrity = c.integrity),
      c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : c.crossOrigin === "anonymous"
        ? (d.credentials = "omit")
        : (d.credentials = "same-origin"),
      d
    );
  }
  function f(c) {
    if (c.ep) return;
    c.ep = !0;
    const d = u(c);
    fetch(c.href, d);
  }
})();
var Qa = { exports: {} },
  Tl = {},
  Ka = { exports: {} },
  Se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Uc;
function Sp() {
  if (Uc) return Se;
  Uc = 1;
  var i = Symbol.for("react.element"),
    a = Symbol.for("react.portal"),
    u = Symbol.for("react.fragment"),
    f = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    d = Symbol.for("react.provider"),
    h = Symbol.for("react.context"),
    y = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    S = Symbol.for("react.memo"),
    N = Symbol.for("react.lazy"),
    j = Symbol.iterator;
  function _(E) {
    return E === null || typeof E != "object"
      ? null
      : ((E = (j && E[j]) || E["@@iterator"]),
        typeof E == "function" ? E : null);
  }
  var D = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    z = Object.assign,
    $ = {};
  function A(E, F, ce) {
    (this.props = E),
      (this.context = F),
      (this.refs = $),
      (this.updater = ce || D);
  }
  (A.prototype.isReactComponent = {}),
    (A.prototype.setState = function (E, F) {
      if (typeof E != "object" && typeof E != "function" && E != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, E, F, "setState");
    }),
    (A.prototype.forceUpdate = function (E) {
      this.updater.enqueueForceUpdate(this, E, "forceUpdate");
    });
  function M() {}
  M.prototype = A.prototype;
  function q(E, F, ce) {
    (this.props = E),
      (this.context = F),
      (this.refs = $),
      (this.updater = ce || D);
  }
  var Z = (q.prototype = new M());
  (Z.constructor = q), z(Z, A.prototype), (Z.isPureReactComponent = !0);
  var se = Array.isArray,
    C = Object.prototype.hasOwnProperty,
    ie = { current: null },
    he = { key: !0, ref: !0, __self: !0, __source: !0 };
  function oe(E, F, ce) {
    var me,
      ve = {},
      xe = null,
      Me = null;
    if (F != null)
      for (me in (F.ref !== void 0 && (Me = F.ref),
      F.key !== void 0 && (xe = "" + F.key),
      F))
        C.call(F, me) && !he.hasOwnProperty(me) && (ve[me] = F[me]);
    var Pe = arguments.length - 2;
    if (Pe === 1) ve.children = ce;
    else if (1 < Pe) {
      for (var ye = Array(Pe), Xe = 0; Xe < Pe; Xe++)
        ye[Xe] = arguments[Xe + 2];
      ve.children = ye;
    }
    if (E && E.defaultProps)
      for (me in ((Pe = E.defaultProps), Pe))
        ve[me] === void 0 && (ve[me] = Pe[me]);
    return {
      $$typeof: i,
      type: E,
      key: xe,
      ref: Me,
      props: ve,
      _owner: ie.current,
    };
  }
  function we(E, F) {
    return {
      $$typeof: i,
      type: E.type,
      key: F,
      ref: E.ref,
      props: E.props,
      _owner: E._owner,
    };
  }
  function Re(E) {
    return typeof E == "object" && E !== null && E.$$typeof === i;
  }
  function Ye(E) {
    var F = { "=": "=0", ":": "=2" };
    return (
      "$" +
      E.replace(/[=:]/g, function (ce) {
        return F[ce];
      })
    );
  }
  var it = /\/+/g;
  function Qe(E, F) {
    return typeof E == "object" && E !== null && E.key != null
      ? Ye("" + E.key)
      : F.toString(36);
  }
  function ut(E, F, ce, me, ve) {
    var xe = typeof E;
    (xe === "undefined" || xe === "boolean") && (E = null);
    var Me = !1;
    if (E === null) Me = !0;
    else
      switch (xe) {
        case "string":
        case "number":
          Me = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case i:
            case a:
              Me = !0;
          }
      }
    if (Me)
      return (
        (Me = E),
        (ve = ve(Me)),
        (E = me === "" ? "." + Qe(Me, 0) : me),
        se(ve)
          ? ((ce = ""),
            E != null && (ce = E.replace(it, "$&/") + "/"),
            ut(ve, F, ce, "", function (Xe) {
              return Xe;
            }))
          : ve != null &&
            (Re(ve) &&
              (ve = we(
                ve,
                ce +
                  (!ve.key || (Me && Me.key === ve.key)
                    ? ""
                    : ("" + ve.key).replace(it, "$&/") + "/") +
                  E
              )),
            F.push(ve)),
        1
      );
    if (((Me = 0), (me = me === "" ? "." : me + ":"), se(E)))
      for (var Pe = 0; Pe < E.length; Pe++) {
        xe = E[Pe];
        var ye = me + Qe(xe, Pe);
        Me += ut(xe, F, ce, ye, ve);
      }
    else if (((ye = _(E)), typeof ye == "function"))
      for (E = ye.call(E), Pe = 0; !(xe = E.next()).done; )
        (xe = xe.value),
          (ye = me + Qe(xe, Pe++)),
          (Me += ut(xe, F, ce, ye, ve));
    else if (xe === "object")
      throw (
        ((F = String(E)),
        Error(
          "Objects are not valid as a React child (found: " +
            (F === "[object Object]"
              ? "object with keys {" + Object.keys(E).join(", ") + "}"
              : F) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return Me;
  }
  function Te(E, F, ce) {
    if (E == null) return E;
    var me = [],
      ve = 0;
    return (
      ut(E, me, "", "", function (xe) {
        return F.call(ce, xe, ve++);
      }),
      me
    );
  }
  function Je(E) {
    if (E._status === -1) {
      var F = E._result;
      (F = F()),
        F.then(
          function (ce) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 1), (E._result = ce));
          },
          function (ce) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 2), (E._result = ce));
          }
        ),
        E._status === -1 && ((E._status = 0), (E._result = F));
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var De = { current: null },
    V = { transition: null },
    le = {
      ReactCurrentDispatcher: De,
      ReactCurrentBatchConfig: V,
      ReactCurrentOwner: ie,
    };
  function K() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (Se.Children = {
      map: Te,
      forEach: function (E, F, ce) {
        Te(
          E,
          function () {
            F.apply(this, arguments);
          },
          ce
        );
      },
      count: function (E) {
        var F = 0;
        return (
          Te(E, function () {
            F++;
          }),
          F
        );
      },
      toArray: function (E) {
        return (
          Te(E, function (F) {
            return F;
          }) || []
        );
      },
      only: function (E) {
        if (!Re(E))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return E;
      },
    }),
    (Se.Component = A),
    (Se.Fragment = u),
    (Se.Profiler = c),
    (Se.PureComponent = q),
    (Se.StrictMode = f),
    (Se.Suspense = m),
    (Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = le),
    (Se.act = K),
    (Se.cloneElement = function (E, F, ce) {
      if (E == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            E +
            "."
        );
      var me = z({}, E.props),
        ve = E.key,
        xe = E.ref,
        Me = E._owner;
      if (F != null) {
        if (
          (F.ref !== void 0 && ((xe = F.ref), (Me = ie.current)),
          F.key !== void 0 && (ve = "" + F.key),
          E.type && E.type.defaultProps)
        )
          var Pe = E.type.defaultProps;
        for (ye in F)
          C.call(F, ye) &&
            !he.hasOwnProperty(ye) &&
            (me[ye] = F[ye] === void 0 && Pe !== void 0 ? Pe[ye] : F[ye]);
      }
      var ye = arguments.length - 2;
      if (ye === 1) me.children = ce;
      else if (1 < ye) {
        Pe = Array(ye);
        for (var Xe = 0; Xe < ye; Xe++) Pe[Xe] = arguments[Xe + 2];
        me.children = Pe;
      }
      return {
        $$typeof: i,
        type: E.type,
        key: ve,
        ref: xe,
        props: me,
        _owner: Me,
      };
    }),
    (Se.createContext = function (E) {
      return (
        (E = {
          $$typeof: h,
          _currentValue: E,
          _currentValue2: E,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (E.Provider = { $$typeof: d, _context: E }),
        (E.Consumer = E)
      );
    }),
    (Se.createElement = oe),
    (Se.createFactory = function (E) {
      var F = oe.bind(null, E);
      return (F.type = E), F;
    }),
    (Se.createRef = function () {
      return { current: null };
    }),
    (Se.forwardRef = function (E) {
      return { $$typeof: y, render: E };
    }),
    (Se.isValidElement = Re),
    (Se.lazy = function (E) {
      return { $$typeof: N, _payload: { _status: -1, _result: E }, _init: Je };
    }),
    (Se.memo = function (E, F) {
      return { $$typeof: S, type: E, compare: F === void 0 ? null : F };
    }),
    (Se.startTransition = function (E) {
      var F = V.transition;
      V.transition = {};
      try {
        E();
      } finally {
        V.transition = F;
      }
    }),
    (Se.unstable_act = K),
    (Se.useCallback = function (E, F) {
      return De.current.useCallback(E, F);
    }),
    (Se.useContext = function (E) {
      return De.current.useContext(E);
    }),
    (Se.useDebugValue = function () {}),
    (Se.useDeferredValue = function (E) {
      return De.current.useDeferredValue(E);
    }),
    (Se.useEffect = function (E, F) {
      return De.current.useEffect(E, F);
    }),
    (Se.useId = function () {
      return De.current.useId();
    }),
    (Se.useImperativeHandle = function (E, F, ce) {
      return De.current.useImperativeHandle(E, F, ce);
    }),
    (Se.useInsertionEffect = function (E, F) {
      return De.current.useInsertionEffect(E, F);
    }),
    (Se.useLayoutEffect = function (E, F) {
      return De.current.useLayoutEffect(E, F);
    }),
    (Se.useMemo = function (E, F) {
      return De.current.useMemo(E, F);
    }),
    (Se.useReducer = function (E, F, ce) {
      return De.current.useReducer(E, F, ce);
    }),
    (Se.useRef = function (E) {
      return De.current.useRef(E);
    }),
    (Se.useState = function (E) {
      return De.current.useState(E);
    }),
    (Se.useSyncExternalStore = function (E, F, ce) {
      return De.current.useSyncExternalStore(E, F, ce);
    }),
    (Se.useTransition = function () {
      return De.current.useTransition();
    }),
    (Se.version = "18.3.1"),
    Se
  );
}
var $c;
function ru() {
  return $c || (($c = 1), (Ka.exports = Sp())), Ka.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ac;
function Ep() {
  if (Ac) return Tl;
  Ac = 1;
  var i = ru(),
    a = Symbol.for("react.element"),
    u = Symbol.for("react.fragment"),
    f = Object.prototype.hasOwnProperty,
    c = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(y, m, S) {
    var N,
      j = {},
      _ = null,
      D = null;
    S !== void 0 && (_ = "" + S),
      m.key !== void 0 && (_ = "" + m.key),
      m.ref !== void 0 && (D = m.ref);
    for (N in m) f.call(m, N) && !d.hasOwnProperty(N) && (j[N] = m[N]);
    if (y && y.defaultProps)
      for (N in ((m = y.defaultProps), m)) j[N] === void 0 && (j[N] = m[N]);
    return {
      $$typeof: a,
      type: y,
      key: _,
      ref: D,
      props: j,
      _owner: c.current,
    };
  }
  return (Tl.Fragment = u), (Tl.jsx = h), (Tl.jsxs = h), Tl;
}
var Hc;
function xp() {
  return Hc || ((Hc = 1), (Qa.exports = Ep())), Qa.exports;
}
var Q = xp(),
  T = ru(),
  qi = {},
  Ya = { exports: {} },
  xt = {},
  Xa = { exports: {} },
  Ga = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bc;
function kp() {
  return (
    Bc ||
      ((Bc = 1),
      (function (i) {
        function a(V, le) {
          var K = V.length;
          V.push(le);
          e: for (; 0 < K; ) {
            var E = (K - 1) >>> 1,
              F = V[E];
            if (0 < c(F, le)) (V[E] = le), (V[K] = F), (K = E);
            else break e;
          }
        }
        function u(V) {
          return V.length === 0 ? null : V[0];
        }
        function f(V) {
          if (V.length === 0) return null;
          var le = V[0],
            K = V.pop();
          if (K !== le) {
            V[0] = K;
            e: for (var E = 0, F = V.length, ce = F >>> 1; E < ce; ) {
              var me = 2 * (E + 1) - 1,
                ve = V[me],
                xe = me + 1,
                Me = V[xe];
              if (0 > c(ve, K))
                xe < F && 0 > c(Me, ve)
                  ? ((V[E] = Me), (V[xe] = K), (E = xe))
                  : ((V[E] = ve), (V[me] = K), (E = me));
              else if (xe < F && 0 > c(Me, K))
                (V[E] = Me), (V[xe] = K), (E = xe);
              else break e;
            }
          }
          return le;
        }
        function c(V, le) {
          var K = V.sortIndex - le.sortIndex;
          return K !== 0 ? K : V.id - le.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var d = performance;
          i.unstable_now = function () {
            return d.now();
          };
        } else {
          var h = Date,
            y = h.now();
          i.unstable_now = function () {
            return h.now() - y;
          };
        }
        var m = [],
          S = [],
          N = 1,
          j = null,
          _ = 3,
          D = !1,
          z = !1,
          $ = !1,
          A = typeof setTimeout == "function" ? setTimeout : null,
          M = typeof clearTimeout == "function" ? clearTimeout : null,
          q = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function Z(V) {
          for (var le = u(S); le !== null; ) {
            if (le.callback === null) f(S);
            else if (le.startTime <= V)
              f(S), (le.sortIndex = le.expirationTime), a(m, le);
            else break;
            le = u(S);
          }
        }
        function se(V) {
          if ((($ = !1), Z(V), !z))
            if (u(m) !== null) (z = !0), Je(C);
            else {
              var le = u(S);
              le !== null && De(se, le.startTime - V);
            }
        }
        function C(V, le) {
          (z = !1), $ && (($ = !1), M(oe), (oe = -1)), (D = !0);
          var K = _;
          try {
            for (
              Z(le), j = u(m);
              j !== null && (!(j.expirationTime > le) || (V && !Ye()));

            ) {
              var E = j.callback;
              if (typeof E == "function") {
                (j.callback = null), (_ = j.priorityLevel);
                var F = E(j.expirationTime <= le);
                (le = i.unstable_now()),
                  typeof F == "function"
                    ? (j.callback = F)
                    : j === u(m) && f(m),
                  Z(le);
              } else f(m);
              j = u(m);
            }
            if (j !== null) var ce = !0;
            else {
              var me = u(S);
              me !== null && De(se, me.startTime - le), (ce = !1);
            }
            return ce;
          } finally {
            (j = null), (_ = K), (D = !1);
          }
        }
        var ie = !1,
          he = null,
          oe = -1,
          we = 5,
          Re = -1;
        function Ye() {
          return !(i.unstable_now() - Re < we);
        }
        function it() {
          if (he !== null) {
            var V = i.unstable_now();
            Re = V;
            var le = !0;
            try {
              le = he(!0, V);
            } finally {
              le ? Qe() : ((ie = !1), (he = null));
            }
          } else ie = !1;
        }
        var Qe;
        if (typeof q == "function")
          Qe = function () {
            q(it);
          };
        else if (typeof MessageChannel < "u") {
          var ut = new MessageChannel(),
            Te = ut.port2;
          (ut.port1.onmessage = it),
            (Qe = function () {
              Te.postMessage(null);
            });
        } else
          Qe = function () {
            A(it, 0);
          };
        function Je(V) {
          (he = V), ie || ((ie = !0), Qe());
        }
        function De(V, le) {
          oe = A(function () {
            V(i.unstable_now());
          }, le);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (V) {
            V.callback = null;
          }),
          (i.unstable_continueExecution = function () {
            z || D || ((z = !0), Je(C));
          }),
          (i.unstable_forceFrameRate = function (V) {
            0 > V || 125 < V
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (we = 0 < V ? Math.floor(1e3 / V) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return _;
          }),
          (i.unstable_getFirstCallbackNode = function () {
            return u(m);
          }),
          (i.unstable_next = function (V) {
            switch (_) {
              case 1:
              case 2:
              case 3:
                var le = 3;
                break;
              default:
                le = _;
            }
            var K = _;
            _ = le;
            try {
              return V();
            } finally {
              _ = K;
            }
          }),
          (i.unstable_pauseExecution = function () {}),
          (i.unstable_requestPaint = function () {}),
          (i.unstable_runWithPriority = function (V, le) {
            switch (V) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                V = 3;
            }
            var K = _;
            _ = V;
            try {
              return le();
            } finally {
              _ = K;
            }
          }),
          (i.unstable_scheduleCallback = function (V, le, K) {
            var E = i.unstable_now();
            switch (
              (typeof K == "object" && K !== null
                ? ((K = K.delay),
                  (K = typeof K == "number" && 0 < K ? E + K : E))
                : (K = E),
              V)
            ) {
              case 1:
                var F = -1;
                break;
              case 2:
                F = 250;
                break;
              case 5:
                F = 1073741823;
                break;
              case 4:
                F = 1e4;
                break;
              default:
                F = 5e3;
            }
            return (
              (F = K + F),
              (V = {
                id: N++,
                callback: le,
                priorityLevel: V,
                startTime: K,
                expirationTime: F,
                sortIndex: -1,
              }),
              K > E
                ? ((V.sortIndex = K),
                  a(S, V),
                  u(m) === null &&
                    V === u(S) &&
                    ($ ? (M(oe), (oe = -1)) : ($ = !0), De(se, K - E)))
                : ((V.sortIndex = F), a(m, V), z || D || ((z = !0), Je(C))),
              V
            );
          }),
          (i.unstable_shouldYield = Ye),
          (i.unstable_wrapCallback = function (V) {
            var le = _;
            return function () {
              var K = _;
              _ = le;
              try {
                return V.apply(this, arguments);
              } finally {
                _ = K;
              }
            };
          });
      })(Ga)),
    Ga
  );
}
var Vc;
function Cp() {
  return Vc || ((Vc = 1), (Xa.exports = kp())), Xa.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wc;
function Rp() {
  if (Wc) return xt;
  Wc = 1;
  var i = ru(),
    a = Cp();
  function u(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var f = new Set(),
    c = {};
  function d(e, t) {
    h(e, t), h(e + "Capture", t);
  }
  function h(e, t) {
    for (c[e] = t, e = 0; e < t.length; e++) f.add(t[e]);
  }
  var y = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    m = Object.prototype.hasOwnProperty,
    S =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    N = {},
    j = {};
  function _(e) {
    return m.call(j, e)
      ? !0
      : m.call(N, e)
      ? !1
      : S.test(e)
      ? (j[e] = !0)
      : ((N[e] = !0), !1);
  }
  function D(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function z(e, t, n, r) {
    if (t === null || typeof t > "u" || D(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function $(e, t, n, r, l, o, s) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = s);
  }
  var A = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      A[e] = new $(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      A[t] = new $(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      A[e] = new $(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      A[e] = new $(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        A[e] = new $(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      A[e] = new $(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      A[e] = new $(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      A[e] = new $(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      A[e] = new $(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var M = /[\-:]([a-z])/g;
  function q(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(M, q);
      A[t] = new $(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(M, q);
        A[t] = new $(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(M, q);
      A[t] = new $(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      A[e] = new $(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (A.xlinkHref = new $(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      A[e] = new $(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function Z(e, t, n, r) {
    var l = A.hasOwnProperty(t) ? A[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (z(t, n, l, r) && (n = null),
      r || l === null
        ? _(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var se = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    C = Symbol.for("react.element"),
    ie = Symbol.for("react.portal"),
    he = Symbol.for("react.fragment"),
    oe = Symbol.for("react.strict_mode"),
    we = Symbol.for("react.profiler"),
    Re = Symbol.for("react.provider"),
    Ye = Symbol.for("react.context"),
    it = Symbol.for("react.forward_ref"),
    Qe = Symbol.for("react.suspense"),
    ut = Symbol.for("react.suspense_list"),
    Te = Symbol.for("react.memo"),
    Je = Symbol.for("react.lazy"),
    De = Symbol.for("react.offscreen"),
    V = Symbol.iterator;
  function le(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (V && e[V]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var K = Object.assign,
    E;
  function F(e) {
    if (E === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        E = (t && t[1]) || "";
      }
    return (
      `
` +
      E +
      e
    );
  }
  var ce = !1;
  function me(e, t) {
    if (!e || ce) return "";
    ce = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (P) {
            var r = P;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (P) {
            r = P;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (P) {
          r = P;
        }
        e();
      }
    } catch (P) {
      if (P && r && typeof P.stack == "string") {
        for (
          var l = P.stack.split(`
`),
            o = r.stack.split(`
`),
            s = l.length - 1,
            p = o.length - 1;
          1 <= s && 0 <= p && l[s] !== o[p];

        )
          p--;
        for (; 1 <= s && 0 <= p; s--, p--)
          if (l[s] !== o[p]) {
            if (s !== 1 || p !== 1)
              do
                if ((s--, p--, 0 > p || l[s] !== o[p])) {
                  var v =
                    `
` + l[s].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      v.includes("<anonymous>") &&
                      (v = v.replace("<anonymous>", e.displayName)),
                    v
                  );
                }
              while (1 <= s && 0 <= p);
            break;
          }
      }
    } finally {
      (ce = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? F(e) : "";
  }
  function ve(e) {
    switch (e.tag) {
      case 5:
        return F(e.type);
      case 16:
        return F("Lazy");
      case 13:
        return F("Suspense");
      case 19:
        return F("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = me(e.type, !1)), e;
      case 11:
        return (e = me(e.type.render, !1)), e;
      case 1:
        return (e = me(e.type, !0)), e;
      default:
        return "";
    }
  }
  function xe(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case he:
        return "Fragment";
      case ie:
        return "Portal";
      case we:
        return "Profiler";
      case oe:
        return "StrictMode";
      case Qe:
        return "Suspense";
      case ut:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Ye:
          return (e.displayName || "Context") + ".Consumer";
        case Re:
          return (e._context.displayName || "Context") + ".Provider";
        case it:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Te:
          return (
            (t = e.displayName || null), t !== null ? t : xe(e.type) || "Memo"
          );
        case Je:
          (t = e._payload), (e = e._init);
          try {
            return xe(e(t));
          } catch {}
      }
    return null;
  }
  function Me(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return xe(t);
      case 8:
        return t === oe ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function Pe(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function ye(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Xe(e) {
    var t = ye(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        o = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (s) {
            (r = "" + s), o.call(this, s);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (s) {
            r = "" + s;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Kn(e) {
    e._valueTracker || (e._valueTracker = Xe(e));
  }
  function Al(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = ye(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Tt(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Wr(e, t) {
    var n = t.checked;
    return K({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Hl(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = Pe(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function Qr(e, t) {
    (t = t.checked), t != null && Z(e, "checked", t, !1);
  }
  function Kr(e, t) {
    Qr(e, t);
    var n = Pe(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Yr(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Yr(e, t.type, Pe(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Bl(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function Yr(e, t, n) {
    (t !== "number" || Tt(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Yn = Array.isArray;
  function mt(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Pe(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ln(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(u(91));
    return K({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Xr(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(u(92));
        if (Yn(n)) {
          if (1 < n.length) throw Error(u(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: Pe(n) };
  }
  function mr(e, t) {
    var n = Pe(t.value),
      r = Pe(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function At(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Dt(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function vr(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Dt(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var gn,
    Vl = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          gn = gn || document.createElement("div"),
            gn.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = gn.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function vt(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var wn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Wl = ["Webkit", "ms", "Moz", "O"];
  Object.keys(wn).forEach(function (e) {
    Wl.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (wn[t] = wn[e]);
    });
  });
  function Gr(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (wn.hasOwnProperty(e) && wn[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function Ql(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Gr(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var Kl = K(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Sn(e, t) {
    if (t) {
      if (Kl[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(u(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(u(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(u(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(u(62));
    }
  }
  function yr(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Xn = null;
  function Jr(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var gr = null,
    En = null,
    on = null;
  function Gn(e) {
    if ((e = ml(e))) {
      if (typeof gr != "function") throw Error(u(280));
      var t = e.stateNode;
      t && ((t = pi(t)), gr(e.stateNode, e.type, t));
    }
  }
  function Jn(e) {
    En ? (on ? on.push(e) : (on = [e])) : (En = e);
  }
  function Yl() {
    if (En) {
      var e = En,
        t = on;
      if (((on = En = null), Gn(e), t)) for (e = 0; e < t.length; e++) Gn(t[e]);
    }
  }
  function Xl(e, t) {
    return e(t);
  }
  function g() {}
  var x = !1;
  function L(e, t, n) {
    if (x) return e(t, n);
    x = !0;
    try {
      return Xl(e, t, n);
    } finally {
      (x = !1), (En !== null || on !== null) && (g(), Yl());
    }
  }
  function I(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = pi(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(u(231, t, typeof n));
    return n;
  }
  var G = !1;
  if (y)
    try {
      var ne = {};
      Object.defineProperty(ne, "passive", {
        get: function () {
          G = !0;
        },
      }),
        window.addEventListener("test", ne, ne),
        window.removeEventListener("test", ne, ne);
    } catch {
      G = !1;
    }
  function fe(e, t, n, r, l, o, s, p, v) {
    var P = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, P);
    } catch (U) {
      this.onError(U);
    }
  }
  var X = !1,
    ee = null,
    W = !1,
    de = null,
    ge = {
      onError: function (e) {
        (X = !0), (ee = e);
      },
    };
  function je(e, t, n, r, l, o, s, p, v) {
    (X = !1), (ee = null), fe.apply(ge, arguments);
  }
  function Ze(e, t, n, r, l, o, s, p, v) {
    if ((je.apply(this, arguments), X)) {
      if (X) {
        var P = ee;
        (X = !1), (ee = null);
      } else throw Error(u(198));
      W || ((W = !0), (de = P));
    }
  }
  function _e(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function ze(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Ve(e) {
    if (_e(e) !== e) throw Error(u(188));
  }
  function xn(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = _e(e)), t === null)) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return Ve(l), e;
          if (o === r) return Ve(l), t;
          o = o.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== r.return) (n = l), (r = o);
      else {
        for (var s = !1, p = l.child; p; ) {
          if (p === n) {
            (s = !0), (n = l), (r = o);
            break;
          }
          if (p === r) {
            (s = !0), (r = l), (n = o);
            break;
          }
          p = p.sibling;
        }
        if (!s) {
          for (p = o.child; p; ) {
            if (p === n) {
              (s = !0), (n = o), (r = l);
              break;
            }
            if (p === r) {
              (s = !0), (r = o), (n = l);
              break;
            }
            p = p.sibling;
          }
          if (!s) throw Error(u(189));
        }
      }
      if (n.alternate !== r) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? e : t;
  }
  function kn(e) {
    return (e = xn(e)), e !== null ? Mt(e) : null;
  }
  function Mt(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Mt(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var kt = a.unstable_scheduleCallback,
    wr = a.unstable_cancelCallback,
    Zn = a.unstable_shouldYield,
    an = a.unstable_requestPaint,
    Fe = a.unstable_now,
    Sr = a.unstable_getCurrentPriorityLevel,
    Le = a.unstable_ImmediatePriority,
    qe = a.unstable_UserBlockingPriority,
    un = a.unstable_NormalPriority,
    qn = a.unstable_LowPriority,
    Ae = a.unstable_IdlePriority,
    Ht = null,
    Ct = null;
  function co(e) {
    if (Ct && typeof Ct.onCommitFiberRoot == "function")
      try {
        Ct.onCommitFiberRoot(Ht, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Bt = Math.clz32 ? Math.clz32 : $f,
    If = Math.log,
    Uf = Math.LN2;
  function $f(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((If(e) / Uf) | 0)) | 0;
  }
  var Gl = 64,
    Jl = 4194304;
  function Zr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Zl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes,
      s = n & 268435455;
    if (s !== 0) {
      var p = s & ~l;
      p !== 0 ? (r = Zr(p)) : ((o &= s), o !== 0 && (r = Zr(o)));
    } else (s = n & ~l), s !== 0 ? (r = Zr(s)) : o !== 0 && (r = Zr(o));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & l) &&
      ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - Bt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
  }
  function Af(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Hf(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        o = e.pendingLanes;
      0 < o;

    ) {
      var s = 31 - Bt(o),
        p = 1 << s,
        v = l[s];
      v === -1
        ? (!(p & n) || p & r) && (l[s] = Af(p, t))
        : v <= t && (e.expiredLanes |= p),
        (o &= ~p);
    }
  }
  function fo(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function mu() {
    var e = Gl;
    return (Gl <<= 1), !(Gl & 4194240) && (Gl = 64), e;
  }
  function po(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function qr(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Bt(t)),
      (e[t] = n);
  }
  function Bf(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - Bt(n),
        o = 1 << l;
      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
    }
  }
  function ho(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - Bt(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var Ne = 0;
  function vu(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var yu,
    mo,
    gu,
    wu,
    Su,
    vo = !1,
    ql = [],
    Cn = null,
    Rn = null,
    Pn = null,
    br = new Map(),
    el = new Map(),
    _n = [],
    Vf =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Eu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Cn = null;
        break;
      case "dragenter":
      case "dragleave":
        Rn = null;
        break;
      case "mouseover":
      case "mouseout":
        Pn = null;
        break;
      case "pointerover":
      case "pointerout":
        br.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        el.delete(t.pointerId);
    }
  }
  function tl(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [l],
        }),
        t !== null && ((t = ml(t)), t !== null && mo(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function Wf(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return (Cn = tl(Cn, e, t, n, r, l)), !0;
      case "dragenter":
        return (Rn = tl(Rn, e, t, n, r, l)), !0;
      case "mouseover":
        return (Pn = tl(Pn, e, t, n, r, l)), !0;
      case "pointerover":
        var o = l.pointerId;
        return br.set(o, tl(br.get(o) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return (
          (o = l.pointerId), el.set(o, tl(el.get(o) || null, e, t, n, r, l)), !0
        );
    }
    return !1;
  }
  function xu(e) {
    var t = bn(e.target);
    if (t !== null) {
      var n = _e(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = ze(n)), t !== null)) {
            (e.blockedOn = t),
              Su(e.priority, function () {
                gu(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function bl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = go(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (Xn = r), n.target.dispatchEvent(r), (Xn = null);
      } else return (t = ml(n)), t !== null && mo(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function ku(e, t, n) {
    bl(e) && n.delete(t);
  }
  function Qf() {
    (vo = !1),
      Cn !== null && bl(Cn) && (Cn = null),
      Rn !== null && bl(Rn) && (Rn = null),
      Pn !== null && bl(Pn) && (Pn = null),
      br.forEach(ku),
      el.forEach(ku);
  }
  function nl(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      vo ||
        ((vo = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, Qf)));
  }
  function rl(e) {
    function t(l) {
      return nl(l, e);
    }
    if (0 < ql.length) {
      nl(ql[0], e);
      for (var n = 1; n < ql.length; n++) {
        var r = ql[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Cn !== null && nl(Cn, e),
        Rn !== null && nl(Rn, e),
        Pn !== null && nl(Pn, e),
        br.forEach(t),
        el.forEach(t),
        n = 0;
      n < _n.length;
      n++
    )
      (r = _n[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < _n.length && ((n = _n[0]), n.blockedOn === null); )
      xu(n), n.blockedOn === null && _n.shift();
  }
  var Er = se.ReactCurrentBatchConfig,
    ei = !0;
  function Kf(e, t, n, r) {
    var l = Ne,
      o = Er.transition;
    Er.transition = null;
    try {
      (Ne = 1), yo(e, t, n, r);
    } finally {
      (Ne = l), (Er.transition = o);
    }
  }
  function Yf(e, t, n, r) {
    var l = Ne,
      o = Er.transition;
    Er.transition = null;
    try {
      (Ne = 4), yo(e, t, n, r);
    } finally {
      (Ne = l), (Er.transition = o);
    }
  }
  function yo(e, t, n, r) {
    if (ei) {
      var l = go(e, t, n, r);
      if (l === null) Fo(e, t, r, ti, n), Eu(e, r);
      else if (Wf(l, e, t, n, r)) r.stopPropagation();
      else if ((Eu(e, r), t & 4 && -1 < Vf.indexOf(e))) {
        for (; l !== null; ) {
          var o = ml(l);
          if (
            (o !== null && yu(o),
            (o = go(e, t, n, r)),
            o === null && Fo(e, t, r, ti, n),
            o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else Fo(e, t, r, null, n);
    }
  }
  var ti = null;
  function go(e, t, n, r) {
    if (((ti = null), (e = Jr(r)), (e = bn(e)), e !== null))
      if (((t = _e(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = ze(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (ti = e), null;
  }
  function Cu(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Sr()) {
          case Le:
            return 1;
          case qe:
            return 4;
          case un:
          case qn:
            return 16;
          case Ae:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ln = null,
    wo = null,
    ni = null;
  function Ru() {
    if (ni) return ni;
    var e,
      t = wo,
      n = t.length,
      r,
      l = "value" in Ln ? Ln.value : Ln.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === l[o - r]; r++);
    return (ni = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function ri(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function li() {
    return !0;
  }
  function Pu() {
    return !1;
  }
  function Rt(e) {
    function t(n, r, l, o, s) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = s),
        (this.currentTarget = null);
      for (var p in e)
        e.hasOwnProperty(p) && ((n = e[p]), (this[p] = n ? n(o) : o[p]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? li
          : Pu),
        (this.isPropagationStopped = Pu),
        this
      );
    }
    return (
      K(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = li));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = li));
        },
        persist: function () {},
        isPersistent: li,
      }),
      t
    );
  }
  var xr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    So = Rt(xr),
    ll = K({}, xr, { view: 0, detail: 0 }),
    Xf = Rt(ll),
    Eo,
    xo,
    il,
    ii = K({}, ll, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Co,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== il &&
              (il && e.type === "mousemove"
                ? ((Eo = e.screenX - il.screenX), (xo = e.screenY - il.screenY))
                : (xo = Eo = 0),
              (il = e)),
            Eo);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : xo;
      },
    }),
    _u = Rt(ii),
    Gf = K({}, ii, { dataTransfer: 0 }),
    Jf = Rt(Gf),
    Zf = K({}, ll, { relatedTarget: 0 }),
    ko = Rt(Zf),
    qf = K({}, xr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    bf = Rt(qf),
    ed = K({}, xr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    td = Rt(ed),
    nd = K({}, xr, { data: 0 }),
    Lu = Rt(nd),
    rd = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    ld = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    id = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function od(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = id[e])
      ? !!t[e]
      : !1;
  }
  function Co() {
    return od;
  }
  var ad = K({}, ll, {
      key: function (e) {
        if (e.key) {
          var t = rd[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = ri(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? ld[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Co,
      charCode: function (e) {
        return e.type === "keypress" ? ri(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? ri(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    ud = Rt(ad),
    sd = K({}, ii, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Nu = Rt(sd),
    cd = K({}, ll, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Co,
    }),
    fd = Rt(cd),
    dd = K({}, xr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    pd = Rt(dd),
    hd = K({}, ii, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    md = Rt(hd),
    vd = [9, 13, 27, 32],
    Ro = y && "CompositionEvent" in window,
    ol = null;
  y && "documentMode" in document && (ol = document.documentMode);
  var yd = y && "TextEvent" in window && !ol,
    Tu = y && (!Ro || (ol && 8 < ol && 11 >= ol)),
    Du = " ",
    Mu = !1;
  function zu(e, t) {
    switch (e) {
      case "keyup":
        return vd.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ju(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var kr = !1;
  function gd(e, t) {
    switch (e) {
      case "compositionend":
        return ju(t);
      case "keypress":
        return t.which !== 32 ? null : ((Mu = !0), Du);
      case "textInput":
        return (e = t.data), e === Du && Mu ? null : e;
      default:
        return null;
    }
  }
  function wd(e, t) {
    if (kr)
      return e === "compositionend" || (!Ro && zu(e, t))
        ? ((e = Ru()), (ni = wo = Ln = null), (kr = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Tu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Sd = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Fu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Sd[e.type] : t === "textarea";
  }
  function Ou(e, t, n, r) {
    Jn(r),
      (t = ci(t, "onChange")),
      0 < t.length &&
        ((n = new So("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var al = null,
    ul = null;
  function Ed(e) {
    es(e, 0);
  }
  function oi(e) {
    var t = Lr(e);
    if (Al(t)) return e;
  }
  function xd(e, t) {
    if (e === "change") return t;
  }
  var Iu = !1;
  if (y) {
    var Po;
    if (y) {
      var _o = "oninput" in document;
      if (!_o) {
        var Uu = document.createElement("div");
        Uu.setAttribute("oninput", "return;"),
          (_o = typeof Uu.oninput == "function");
      }
      Po = _o;
    } else Po = !1;
    Iu = Po && (!document.documentMode || 9 < document.documentMode);
  }
  function $u() {
    al && (al.detachEvent("onpropertychange", Au), (ul = al = null));
  }
  function Au(e) {
    if (e.propertyName === "value" && oi(ul)) {
      var t = [];
      Ou(t, ul, e, Jr(e)), L(Ed, t);
    }
  }
  function kd(e, t, n) {
    e === "focusin"
      ? ($u(), (al = t), (ul = n), al.attachEvent("onpropertychange", Au))
      : e === "focusout" && $u();
  }
  function Cd(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return oi(ul);
  }
  function Rd(e, t) {
    if (e === "click") return oi(t);
  }
  function Pd(e, t) {
    if (e === "input" || e === "change") return oi(t);
  }
  function _d(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Vt = typeof Object.is == "function" ? Object.is : _d;
  function sl(e, t) {
    if (Vt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!m.call(t, l) || !Vt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Hu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Bu(e, t) {
    var n = Hu(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Hu(n);
    }
  }
  function Vu(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Vu(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Wu() {
    for (var e = window, t = Tt(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Tt(e.document);
    }
    return t;
  }
  function Lo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Ld(e) {
    var t = Wu(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Vu(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && Lo(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            o = Math.min(r.start, l);
          (r = r.end === void 0 ? o : Math.min(r.end, l)),
            !e.extend && o > r && ((l = r), (r = o), (o = l)),
            (l = Bu(n, o));
          var s = Bu(n, r);
          l &&
            s &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== s.node ||
              e.focusOffset !== s.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(t), e.extend(s.node, s.offset))
              : (t.setEnd(s.node, s.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Nd = y && "documentMode" in document && 11 >= document.documentMode,
    Cr = null,
    No = null,
    cl = null,
    To = !1;
  function Qu(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    To ||
      Cr == null ||
      Cr !== Tt(r) ||
      ((r = Cr),
      "selectionStart" in r && Lo(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (cl && sl(cl, r)) ||
        ((cl = r),
        (r = ci(No, "onSelect")),
        0 < r.length &&
          ((t = new So("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Cr))));
  }
  function ai(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Rr = {
      animationend: ai("Animation", "AnimationEnd"),
      animationiteration: ai("Animation", "AnimationIteration"),
      animationstart: ai("Animation", "AnimationStart"),
      transitionend: ai("Transition", "TransitionEnd"),
    },
    Do = {},
    Ku = {};
  y &&
    ((Ku = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Rr.animationend.animation,
      delete Rr.animationiteration.animation,
      delete Rr.animationstart.animation),
    "TransitionEvent" in window || delete Rr.transitionend.transition);
  function ui(e) {
    if (Do[e]) return Do[e];
    if (!Rr[e]) return e;
    var t = Rr[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ku) return (Do[e] = t[n]);
    return e;
  }
  var Yu = ui("animationend"),
    Xu = ui("animationiteration"),
    Gu = ui("animationstart"),
    Ju = ui("transitionend"),
    Zu = new Map(),
    qu =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Nn(e, t) {
    Zu.set(e, t), d(t, [e]);
  }
  for (var Mo = 0; Mo < qu.length; Mo++) {
    var zo = qu[Mo],
      Td = zo.toLowerCase(),
      Dd = zo[0].toUpperCase() + zo.slice(1);
    Nn(Td, "on" + Dd);
  }
  Nn(Yu, "onAnimationEnd"),
    Nn(Xu, "onAnimationIteration"),
    Nn(Gu, "onAnimationStart"),
    Nn("dblclick", "onDoubleClick"),
    Nn("focusin", "onFocus"),
    Nn("focusout", "onBlur"),
    Nn(Ju, "onTransitionEnd"),
    h("onMouseEnter", ["mouseout", "mouseover"]),
    h("onMouseLeave", ["mouseout", "mouseover"]),
    h("onPointerEnter", ["pointerout", "pointerover"]),
    h("onPointerLeave", ["pointerout", "pointerover"]),
    d(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    d(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    d("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    d(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    d(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    d(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var fl =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Md = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(fl)
    );
  function bu(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Ze(r, t, void 0, e), (e.currentTarget = null);
  }
  function es(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var s = r.length - 1; 0 <= s; s--) {
            var p = r[s],
              v = p.instance,
              P = p.currentTarget;
            if (((p = p.listener), v !== o && l.isPropagationStopped()))
              break e;
            bu(l, p, P), (o = v);
          }
        else
          for (s = 0; s < r.length; s++) {
            if (
              ((p = r[s]),
              (v = p.instance),
              (P = p.currentTarget),
              (p = p.listener),
              v !== o && l.isPropagationStopped())
            )
              break e;
            bu(l, p, P), (o = v);
          }
      }
    }
    if (W) throw ((e = de), (W = !1), (de = null), e);
  }
  function Ie(e, t) {
    var n = t[Ho];
    n === void 0 && (n = t[Ho] = new Set());
    var r = e + "__bubble";
    n.has(r) || (ts(t, e, 2, !1), n.add(r));
  }
  function jo(e, t, n) {
    var r = 0;
    t && (r |= 4), ts(n, e, r, t);
  }
  var si = "_reactListening" + Math.random().toString(36).slice(2);
  function dl(e) {
    if (!e[si]) {
      (e[si] = !0),
        f.forEach(function (n) {
          n !== "selectionchange" && (Md.has(n) || jo(n, !1, e), jo(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[si] || ((t[si] = !0), jo("selectionchange", !1, t));
    }
  }
  function ts(e, t, n, r) {
    switch (Cu(t)) {
      case 1:
        var l = Kf;
        break;
      case 4:
        l = Yf;
        break;
      default:
        l = yo;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !G ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
  }
  function Fo(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
          var p = r.stateNode.containerInfo;
          if (p === l || (p.nodeType === 8 && p.parentNode === l)) break;
          if (s === 4)
            for (s = r.return; s !== null; ) {
              var v = s.tag;
              if (
                (v === 3 || v === 4) &&
                ((v = s.stateNode.containerInfo),
                v === l || (v.nodeType === 8 && v.parentNode === l))
              )
                return;
              s = s.return;
            }
          for (; p !== null; ) {
            if (((s = bn(p)), s === null)) return;
            if (((v = s.tag), v === 5 || v === 6)) {
              r = o = s;
              continue e;
            }
            p = p.parentNode;
          }
        }
        r = r.return;
      }
    L(function () {
      var P = o,
        U = Jr(n),
        H = [];
      e: {
        var O = Zu.get(e);
        if (O !== void 0) {
          var Y = So,
            b = e;
          switch (e) {
            case "keypress":
              if (ri(n) === 0) break e;
            case "keydown":
            case "keyup":
              Y = ud;
              break;
            case "focusin":
              (b = "focus"), (Y = ko);
              break;
            case "focusout":
              (b = "blur"), (Y = ko);
              break;
            case "beforeblur":
            case "afterblur":
              Y = ko;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Y = _u;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Y = Jf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Y = fd;
              break;
            case Yu:
            case Xu:
            case Gu:
              Y = bf;
              break;
            case Ju:
              Y = pd;
              break;
            case "scroll":
              Y = Xf;
              break;
            case "wheel":
              Y = md;
              break;
            case "copy":
            case "cut":
            case "paste":
              Y = td;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Y = Nu;
          }
          var te = (t & 4) !== 0,
            Ke = !te && e === "scroll",
            k = te ? (O !== null ? O + "Capture" : null) : O;
          te = [];
          for (var w = P, R; w !== null; ) {
            R = w;
            var B = R.stateNode;
            if (
              (R.tag === 5 &&
                B !== null &&
                ((R = B),
                k !== null &&
                  ((B = I(w, k)), B != null && te.push(pl(w, B, R)))),
              Ke)
            )
              break;
            w = w.return;
          }
          0 < te.length &&
            ((O = new Y(O, b, null, n, U)),
            H.push({ event: O, listeners: te }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((O = e === "mouseover" || e === "pointerover"),
            (Y = e === "mouseout" || e === "pointerout"),
            O &&
              n !== Xn &&
              (b = n.relatedTarget || n.fromElement) &&
              (bn(b) || b[sn]))
          )
            break e;
          if (
            (Y || O) &&
            ((O =
              U.window === U
                ? U
                : (O = U.ownerDocument)
                ? O.defaultView || O.parentWindow
                : window),
            Y
              ? ((b = n.relatedTarget || n.toElement),
                (Y = P),
                (b = b ? bn(b) : null),
                b !== null &&
                  ((Ke = _e(b)), b !== Ke || (b.tag !== 5 && b.tag !== 6)) &&
                  (b = null))
              : ((Y = null), (b = P)),
            Y !== b)
          ) {
            if (
              ((te = _u),
              (B = "onMouseLeave"),
              (k = "onMouseEnter"),
              (w = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((te = Nu),
                (B = "onPointerLeave"),
                (k = "onPointerEnter"),
                (w = "pointer")),
              (Ke = Y == null ? O : Lr(Y)),
              (R = b == null ? O : Lr(b)),
              (O = new te(B, w + "leave", Y, n, U)),
              (O.target = Ke),
              (O.relatedTarget = R),
              (B = null),
              bn(U) === P &&
                ((te = new te(k, w + "enter", b, n, U)),
                (te.target = R),
                (te.relatedTarget = Ke),
                (B = te)),
              (Ke = B),
              Y && b)
            )
              t: {
                for (te = Y, k = b, w = 0, R = te; R; R = Pr(R)) w++;
                for (R = 0, B = k; B; B = Pr(B)) R++;
                for (; 0 < w - R; ) (te = Pr(te)), w--;
                for (; 0 < R - w; ) (k = Pr(k)), R--;
                for (; w--; ) {
                  if (te === k || (k !== null && te === k.alternate)) break t;
                  (te = Pr(te)), (k = Pr(k));
                }
                te = null;
              }
            else te = null;
            Y !== null && ns(H, O, Y, te, !1),
              b !== null && Ke !== null && ns(H, Ke, b, te, !0);
          }
        }
        e: {
          if (
            ((O = P ? Lr(P) : window),
            (Y = O.nodeName && O.nodeName.toLowerCase()),
            Y === "select" || (Y === "input" && O.type === "file"))
          )
            var re = xd;
          else if (Fu(O))
            if (Iu) re = Pd;
            else {
              re = Cd;
              var ae = kd;
            }
          else
            (Y = O.nodeName) &&
              Y.toLowerCase() === "input" &&
              (O.type === "checkbox" || O.type === "radio") &&
              (re = Rd);
          if (re && (re = re(e, P))) {
            Ou(H, re, n, U);
            break e;
          }
          ae && ae(e, O, P),
            e === "focusout" &&
              (ae = O._wrapperState) &&
              ae.controlled &&
              O.type === "number" &&
              Yr(O, "number", O.value);
        }
        switch (((ae = P ? Lr(P) : window), e)) {
          case "focusin":
            (Fu(ae) || ae.contentEditable === "true") &&
              ((Cr = ae), (No = P), (cl = null));
            break;
          case "focusout":
            cl = No = Cr = null;
            break;
          case "mousedown":
            To = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (To = !1), Qu(H, n, U);
            break;
          case "selectionchange":
            if (Nd) break;
          case "keydown":
          case "keyup":
            Qu(H, n, U);
        }
        var ue;
        if (Ro)
          e: {
            switch (e) {
              case "compositionstart":
                var pe = "onCompositionStart";
                break e;
              case "compositionend":
                pe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                pe = "onCompositionUpdate";
                break e;
            }
            pe = void 0;
          }
        else
          kr
            ? zu(e, n) && (pe = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (pe = "onCompositionStart");
        pe &&
          (Tu &&
            n.locale !== "ko" &&
            (kr || pe !== "onCompositionStart"
              ? pe === "onCompositionEnd" && kr && (ue = Ru())
              : ((Ln = U),
                (wo = "value" in Ln ? Ln.value : Ln.textContent),
                (kr = !0))),
          (ae = ci(P, pe)),
          0 < ae.length &&
            ((pe = new Lu(pe, e, null, n, U)),
            H.push({ event: pe, listeners: ae }),
            ue
              ? (pe.data = ue)
              : ((ue = ju(n)), ue !== null && (pe.data = ue)))),
          (ue = yd ? gd(e, n) : wd(e, n)) &&
            ((P = ci(P, "onBeforeInput")),
            0 < P.length &&
              ((U = new Lu("onBeforeInput", "beforeinput", null, n, U)),
              H.push({ event: U, listeners: P }),
              (U.data = ue)));
      }
      es(H, t);
    });
  }
  function pl(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function ci(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        o = l.stateNode;
      l.tag === 5 &&
        o !== null &&
        ((l = o),
        (o = I(e, n)),
        o != null && r.unshift(pl(e, o, l)),
        (o = I(e, t)),
        o != null && r.push(pl(e, o, l))),
        (e = e.return);
    }
    return r;
  }
  function Pr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ns(e, t, n, r, l) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
      var p = n,
        v = p.alternate,
        P = p.stateNode;
      if (v !== null && v === r) break;
      p.tag === 5 &&
        P !== null &&
        ((p = P),
        l
          ? ((v = I(n, o)), v != null && s.unshift(pl(n, v, p)))
          : l || ((v = I(n, o)), v != null && s.push(pl(n, v, p)))),
        (n = n.return);
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var zd = /\r\n?/g,
    jd = /\u0000|\uFFFD/g;
  function rs(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        zd,
        `
`
      )
      .replace(jd, "");
  }
  function fi(e, t, n) {
    if (((t = rs(t)), rs(e) !== t && n)) throw Error(u(425));
  }
  function di() {}
  var Oo = null,
    Io = null;
  function Uo(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var $o = typeof setTimeout == "function" ? setTimeout : void 0,
    Fd = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ls = typeof Promise == "function" ? Promise : void 0,
    Od =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof ls < "u"
        ? function (e) {
            return ls.resolve(null).then(e).catch(Id);
          }
        : $o;
  function Id(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ao(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(l), rl(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    rl(t);
  }
  function Tn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function is(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var _r = Math.random().toString(36).slice(2),
    Zt = "__reactFiber$" + _r,
    hl = "__reactProps$" + _r,
    sn = "__reactContainer$" + _r,
    Ho = "__reactEvents$" + _r,
    Ud = "__reactListeners$" + _r,
    $d = "__reactHandles$" + _r;
  function bn(e) {
    var t = e[Zt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[sn] || n[Zt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = is(e); e !== null; ) {
            if ((n = e[Zt])) return n;
            e = is(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function ml(e) {
    return (
      (e = e[Zt] || e[sn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Lr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(u(33));
  }
  function pi(e) {
    return e[hl] || null;
  }
  var Bo = [],
    Nr = -1;
  function Dn(e) {
    return { current: e };
  }
  function Ue(e) {
    0 > Nr || ((e.current = Bo[Nr]), (Bo[Nr] = null), Nr--);
  }
  function Oe(e, t) {
    Nr++, (Bo[Nr] = e.current), (e.current = t);
  }
  var Mn = {},
    st = Dn(Mn),
    yt = Dn(!1),
    er = Mn;
  function Tr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Mn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      o;
    for (o in n) l[o] = t[o];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function gt(e) {
    return (e = e.childContextTypes), e != null;
  }
  function hi() {
    Ue(yt), Ue(st);
  }
  function os(e, t, n) {
    if (st.current !== Mn) throw Error(u(168));
    Oe(st, t), Oe(yt, n);
  }
  function as(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(u(108, Me(e) || "Unknown", l));
    return K({}, n, r);
  }
  function mi(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Mn),
      (er = st.current),
      Oe(st, e),
      Oe(yt, yt.current),
      !0
    );
  }
  function us(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(u(169));
    n
      ? ((e = as(e, t, er)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        Ue(yt),
        Ue(st),
        Oe(st, e))
      : Ue(yt),
      Oe(yt, n);
  }
  var cn = null,
    vi = !1,
    Vo = !1;
  function ss(e) {
    cn === null ? (cn = [e]) : cn.push(e);
  }
  function Ad(e) {
    (vi = !0), ss(e);
  }
  function zn() {
    if (!Vo && cn !== null) {
      Vo = !0;
      var e = 0,
        t = Ne;
      try {
        var n = cn;
        for (Ne = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (cn = null), (vi = !1);
      } catch (l) {
        throw (cn !== null && (cn = cn.slice(e + 1)), kt(Le, zn), l);
      } finally {
        (Ne = t), (Vo = !1);
      }
    }
    return null;
  }
  var Dr = [],
    Mr = 0,
    yi = null,
    gi = 0,
    zt = [],
    jt = 0,
    tr = null,
    fn = 1,
    dn = "";
  function nr(e, t) {
    (Dr[Mr++] = gi), (Dr[Mr++] = yi), (yi = e), (gi = t);
  }
  function cs(e, t, n) {
    (zt[jt++] = fn), (zt[jt++] = dn), (zt[jt++] = tr), (tr = e);
    var r = fn;
    e = dn;
    var l = 32 - Bt(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var o = 32 - Bt(t) + l;
    if (30 < o) {
      var s = l - (l % 5);
      (o = (r & ((1 << s) - 1)).toString(32)),
        (r >>= s),
        (l -= s),
        (fn = (1 << (32 - Bt(t) + l)) | (n << l) | r),
        (dn = o + e);
    } else (fn = (1 << o) | (n << l) | r), (dn = e);
  }
  function Wo(e) {
    e.return !== null && (nr(e, 1), cs(e, 1, 0));
  }
  function Qo(e) {
    for (; e === yi; )
      (yi = Dr[--Mr]), (Dr[Mr] = null), (gi = Dr[--Mr]), (Dr[Mr] = null);
    for (; e === tr; )
      (tr = zt[--jt]),
        (zt[jt] = null),
        (dn = zt[--jt]),
        (zt[jt] = null),
        (fn = zt[--jt]),
        (zt[jt] = null);
  }
  var Pt = null,
    _t = null,
    $e = !1,
    Wt = null;
  function fs(e, t) {
    var n = Ut(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function ds(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Pt = e), (_t = Tn(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Pt = e), (_t = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = tr !== null ? { id: fn, overflow: dn } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = Ut(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Pt = e),
              (_t = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Ko(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Yo(e) {
    if ($e) {
      var t = _t;
      if (t) {
        var n = t;
        if (!ds(e, t)) {
          if (Ko(e)) throw Error(u(418));
          t = Tn(n.nextSibling);
          var r = Pt;
          t && ds(e, t)
            ? fs(r, n)
            : ((e.flags = (e.flags & -4097) | 2), ($e = !1), (Pt = e));
        }
      } else {
        if (Ko(e)) throw Error(u(418));
        (e.flags = (e.flags & -4097) | 2), ($e = !1), (Pt = e);
      }
    }
  }
  function ps(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Pt = e;
  }
  function wi(e) {
    if (e !== Pt) return !1;
    if (!$e) return ps(e), ($e = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Uo(e.type, e.memoizedProps))),
      t && (t = _t))
    ) {
      if (Ko(e)) throw (hs(), Error(u(418)));
      for (; t; ) fs(e, t), (t = Tn(t.nextSibling));
    }
    if ((ps(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(u(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                _t = Tn(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        _t = null;
      }
    } else _t = Pt ? Tn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function hs() {
    for (var e = _t; e; ) e = Tn(e.nextSibling);
  }
  function zr() {
    (_t = Pt = null), ($e = !1);
  }
  function Xo(e) {
    Wt === null ? (Wt = [e]) : Wt.push(e);
  }
  var Hd = se.ReactCurrentBatchConfig;
  function vl(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(u(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(u(147, e));
        var l = r,
          o = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === o
          ? t.ref
          : ((t = function (s) {
              var p = l.refs;
              s === null ? delete p[o] : (p[o] = s);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != "string") throw Error(u(284));
      if (!n._owner) throw Error(u(290, e));
    }
    return e;
  }
  function Si(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        u(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function ms(e) {
    var t = e._init;
    return t(e._payload);
  }
  function vs(e) {
    function t(k, w) {
      if (e) {
        var R = k.deletions;
        R === null ? ((k.deletions = [w]), (k.flags |= 16)) : R.push(w);
      }
    }
    function n(k, w) {
      if (!e) return null;
      for (; w !== null; ) t(k, w), (w = w.sibling);
      return null;
    }
    function r(k, w) {
      for (k = new Map(); w !== null; )
        w.key !== null ? k.set(w.key, w) : k.set(w.index, w), (w = w.sibling);
      return k;
    }
    function l(k, w) {
      return (k = Hn(k, w)), (k.index = 0), (k.sibling = null), k;
    }
    function o(k, w, R) {
      return (
        (k.index = R),
        e
          ? ((R = k.alternate),
            R !== null
              ? ((R = R.index), R < w ? ((k.flags |= 2), w) : R)
              : ((k.flags |= 2), w))
          : ((k.flags |= 1048576), w)
      );
    }
    function s(k) {
      return e && k.alternate === null && (k.flags |= 2), k;
    }
    function p(k, w, R, B) {
      return w === null || w.tag !== 6
        ? ((w = $a(R, k.mode, B)), (w.return = k), w)
        : ((w = l(w, R)), (w.return = k), w);
    }
    function v(k, w, R, B) {
      var re = R.type;
      return re === he
        ? U(k, w, R.props.children, B, R.key)
        : w !== null &&
          (w.elementType === re ||
            (typeof re == "object" &&
              re !== null &&
              re.$$typeof === Je &&
              ms(re) === w.type))
        ? ((B = l(w, R.props)), (B.ref = vl(k, w, R)), (B.return = k), B)
        : ((B = Wi(R.type, R.key, R.props, null, k.mode, B)),
          (B.ref = vl(k, w, R)),
          (B.return = k),
          B);
    }
    function P(k, w, R, B) {
      return w === null ||
        w.tag !== 4 ||
        w.stateNode.containerInfo !== R.containerInfo ||
        w.stateNode.implementation !== R.implementation
        ? ((w = Aa(R, k.mode, B)), (w.return = k), w)
        : ((w = l(w, R.children || [])), (w.return = k), w);
    }
    function U(k, w, R, B, re) {
      return w === null || w.tag !== 7
        ? ((w = cr(R, k.mode, B, re)), (w.return = k), w)
        : ((w = l(w, R)), (w.return = k), w);
    }
    function H(k, w, R) {
      if ((typeof w == "string" && w !== "") || typeof w == "number")
        return (w = $a("" + w, k.mode, R)), (w.return = k), w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case C:
            return (
              (R = Wi(w.type, w.key, w.props, null, k.mode, R)),
              (R.ref = vl(k, null, w)),
              (R.return = k),
              R
            );
          case ie:
            return (w = Aa(w, k.mode, R)), (w.return = k), w;
          case Je:
            var B = w._init;
            return H(k, B(w._payload), R);
        }
        if (Yn(w) || le(w))
          return (w = cr(w, k.mode, R, null)), (w.return = k), w;
        Si(k, w);
      }
      return null;
    }
    function O(k, w, R, B) {
      var re = w !== null ? w.key : null;
      if ((typeof R == "string" && R !== "") || typeof R == "number")
        return re !== null ? null : p(k, w, "" + R, B);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case C:
            return R.key === re ? v(k, w, R, B) : null;
          case ie:
            return R.key === re ? P(k, w, R, B) : null;
          case Je:
            return (re = R._init), O(k, w, re(R._payload), B);
        }
        if (Yn(R) || le(R)) return re !== null ? null : U(k, w, R, B, null);
        Si(k, R);
      }
      return null;
    }
    function Y(k, w, R, B, re) {
      if ((typeof B == "string" && B !== "") || typeof B == "number")
        return (k = k.get(R) || null), p(w, k, "" + B, re);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case C:
            return (
              (k = k.get(B.key === null ? R : B.key) || null), v(w, k, B, re)
            );
          case ie:
            return (
              (k = k.get(B.key === null ? R : B.key) || null), P(w, k, B, re)
            );
          case Je:
            var ae = B._init;
            return Y(k, w, R, ae(B._payload), re);
        }
        if (Yn(B) || le(B)) return (k = k.get(R) || null), U(w, k, B, re, null);
        Si(w, B);
      }
      return null;
    }
    function b(k, w, R, B) {
      for (
        var re = null, ae = null, ue = w, pe = (w = 0), rt = null;
        ue !== null && pe < R.length;
        pe++
      ) {
        ue.index > pe ? ((rt = ue), (ue = null)) : (rt = ue.sibling);
        var Ce = O(k, ue, R[pe], B);
        if (Ce === null) {
          ue === null && (ue = rt);
          break;
        }
        e && ue && Ce.alternate === null && t(k, ue),
          (w = o(Ce, w, pe)),
          ae === null ? (re = Ce) : (ae.sibling = Ce),
          (ae = Ce),
          (ue = rt);
      }
      if (pe === R.length) return n(k, ue), $e && nr(k, pe), re;
      if (ue === null) {
        for (; pe < R.length; pe++)
          (ue = H(k, R[pe], B)),
            ue !== null &&
              ((w = o(ue, w, pe)),
              ae === null ? (re = ue) : (ae.sibling = ue),
              (ae = ue));
        return $e && nr(k, pe), re;
      }
      for (ue = r(k, ue); pe < R.length; pe++)
        (rt = Y(ue, k, pe, R[pe], B)),
          rt !== null &&
            (e &&
              rt.alternate !== null &&
              ue.delete(rt.key === null ? pe : rt.key),
            (w = o(rt, w, pe)),
            ae === null ? (re = rt) : (ae.sibling = rt),
            (ae = rt));
      return (
        e &&
          ue.forEach(function (Bn) {
            return t(k, Bn);
          }),
        $e && nr(k, pe),
        re
      );
    }
    function te(k, w, R, B) {
      var re = le(R);
      if (typeof re != "function") throw Error(u(150));
      if (((R = re.call(R)), R == null)) throw Error(u(151));
      for (
        var ae = (re = null), ue = w, pe = (w = 0), rt = null, Ce = R.next();
        ue !== null && !Ce.done;
        pe++, Ce = R.next()
      ) {
        ue.index > pe ? ((rt = ue), (ue = null)) : (rt = ue.sibling);
        var Bn = O(k, ue, Ce.value, B);
        if (Bn === null) {
          ue === null && (ue = rt);
          break;
        }
        e && ue && Bn.alternate === null && t(k, ue),
          (w = o(Bn, w, pe)),
          ae === null ? (re = Bn) : (ae.sibling = Bn),
          (ae = Bn),
          (ue = rt);
      }
      if (Ce.done) return n(k, ue), $e && nr(k, pe), re;
      if (ue === null) {
        for (; !Ce.done; pe++, Ce = R.next())
          (Ce = H(k, Ce.value, B)),
            Ce !== null &&
              ((w = o(Ce, w, pe)),
              ae === null ? (re = Ce) : (ae.sibling = Ce),
              (ae = Ce));
        return $e && nr(k, pe), re;
      }
      for (ue = r(k, ue); !Ce.done; pe++, Ce = R.next())
        (Ce = Y(ue, k, pe, Ce.value, B)),
          Ce !== null &&
            (e &&
              Ce.alternate !== null &&
              ue.delete(Ce.key === null ? pe : Ce.key),
            (w = o(Ce, w, pe)),
            ae === null ? (re = Ce) : (ae.sibling = Ce),
            (ae = Ce));
      return (
        e &&
          ue.forEach(function (wp) {
            return t(k, wp);
          }),
        $e && nr(k, pe),
        re
      );
    }
    function Ke(k, w, R, B) {
      if (
        (typeof R == "object" &&
          R !== null &&
          R.type === he &&
          R.key === null &&
          (R = R.props.children),
        typeof R == "object" && R !== null)
      ) {
        switch (R.$$typeof) {
          case C:
            e: {
              for (var re = R.key, ae = w; ae !== null; ) {
                if (ae.key === re) {
                  if (((re = R.type), re === he)) {
                    if (ae.tag === 7) {
                      n(k, ae.sibling),
                        (w = l(ae, R.props.children)),
                        (w.return = k),
                        (k = w);
                      break e;
                    }
                  } else if (
                    ae.elementType === re ||
                    (typeof re == "object" &&
                      re !== null &&
                      re.$$typeof === Je &&
                      ms(re) === ae.type)
                  ) {
                    n(k, ae.sibling),
                      (w = l(ae, R.props)),
                      (w.ref = vl(k, ae, R)),
                      (w.return = k),
                      (k = w);
                    break e;
                  }
                  n(k, ae);
                  break;
                } else t(k, ae);
                ae = ae.sibling;
              }
              R.type === he
                ? ((w = cr(R.props.children, k.mode, B, R.key)),
                  (w.return = k),
                  (k = w))
                : ((B = Wi(R.type, R.key, R.props, null, k.mode, B)),
                  (B.ref = vl(k, w, R)),
                  (B.return = k),
                  (k = B));
            }
            return s(k);
          case ie:
            e: {
              for (ae = R.key; w !== null; ) {
                if (w.key === ae)
                  if (
                    w.tag === 4 &&
                    w.stateNode.containerInfo === R.containerInfo &&
                    w.stateNode.implementation === R.implementation
                  ) {
                    n(k, w.sibling),
                      (w = l(w, R.children || [])),
                      (w.return = k),
                      (k = w);
                    break e;
                  } else {
                    n(k, w);
                    break;
                  }
                else t(k, w);
                w = w.sibling;
              }
              (w = Aa(R, k.mode, B)), (w.return = k), (k = w);
            }
            return s(k);
          case Je:
            return (ae = R._init), Ke(k, w, ae(R._payload), B);
        }
        if (Yn(R)) return b(k, w, R, B);
        if (le(R)) return te(k, w, R, B);
        Si(k, R);
      }
      return (typeof R == "string" && R !== "") || typeof R == "number"
        ? ((R = "" + R),
          w !== null && w.tag === 6
            ? (n(k, w.sibling), (w = l(w, R)), (w.return = k), (k = w))
            : (n(k, w), (w = $a(R, k.mode, B)), (w.return = k), (k = w)),
          s(k))
        : n(k, w);
    }
    return Ke;
  }
  var jr = vs(!0),
    ys = vs(!1),
    Ei = Dn(null),
    xi = null,
    Fr = null,
    Go = null;
  function Jo() {
    Go = Fr = xi = null;
  }
  function Zo(e) {
    var t = Ei.current;
    Ue(Ei), (e._currentValue = t);
  }
  function qo(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Or(e, t) {
    (xi = e),
      (Go = Fr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (wt = !0), (e.firstContext = null));
  }
  function Ft(e) {
    var t = e._currentValue;
    if (Go !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Fr === null)) {
        if (xi === null) throw Error(u(308));
        (Fr = e), (xi.dependencies = { lanes: 0, firstContext: e });
      } else Fr = Fr.next = e;
    return t;
  }
  var rr = null;
  function bo(e) {
    rr === null ? (rr = [e]) : rr.push(e);
  }
  function gs(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), bo(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      pn(e, r)
    );
  }
  function pn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var jn = !1;
  function ea(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function ws(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function hn(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Fn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), ke & 2)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        pn(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), bo(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      pn(e, n)
    );
  }
  function ki(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), ho(e, n);
    }
  }
  function Ss(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var s = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          o === null ? (l = o = s) : (o = o.next = s), (n = n.next);
        } while (n !== null);
        o === null ? (l = o = t) : (o = o.next = t);
      } else l = o = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function Ci(e, t, n, r) {
    var l = e.updateQueue;
    jn = !1;
    var o = l.firstBaseUpdate,
      s = l.lastBaseUpdate,
      p = l.shared.pending;
    if (p !== null) {
      l.shared.pending = null;
      var v = p,
        P = v.next;
      (v.next = null), s === null ? (o = P) : (s.next = P), (s = v);
      var U = e.alternate;
      U !== null &&
        ((U = U.updateQueue),
        (p = U.lastBaseUpdate),
        p !== s &&
          (p === null ? (U.firstBaseUpdate = P) : (p.next = P),
          (U.lastBaseUpdate = v)));
    }
    if (o !== null) {
      var H = l.baseState;
      (s = 0), (U = P = v = null), (p = o);
      do {
        var O = p.lane,
          Y = p.eventTime;
        if ((r & O) === O) {
          U !== null &&
            (U = U.next =
              {
                eventTime: Y,
                lane: 0,
                tag: p.tag,
                payload: p.payload,
                callback: p.callback,
                next: null,
              });
          e: {
            var b = e,
              te = p;
            switch (((O = t), (Y = n), te.tag)) {
              case 1:
                if (((b = te.payload), typeof b == "function")) {
                  H = b.call(Y, H, O);
                  break e;
                }
                H = b;
                break e;
              case 3:
                b.flags = (b.flags & -65537) | 128;
              case 0:
                if (
                  ((b = te.payload),
                  (O = typeof b == "function" ? b.call(Y, H, O) : b),
                  O == null)
                )
                  break e;
                H = K({}, H, O);
                break e;
              case 2:
                jn = !0;
            }
          }
          p.callback !== null &&
            p.lane !== 0 &&
            ((e.flags |= 64),
            (O = l.effects),
            O === null ? (l.effects = [p]) : O.push(p));
        } else
          (Y = {
            eventTime: Y,
            lane: O,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null,
          }),
            U === null ? ((P = U = Y), (v = H)) : (U = U.next = Y),
            (s |= O);
        if (((p = p.next), p === null)) {
          if (((p = l.shared.pending), p === null)) break;
          (O = p),
            (p = O.next),
            (O.next = null),
            (l.lastBaseUpdate = O),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (U === null && (v = H),
        (l.baseState = v),
        (l.firstBaseUpdate = P),
        (l.lastBaseUpdate = U),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (s |= l.lane), (l = l.next);
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      (or |= s), (e.lanes = s), (e.memoizedState = H);
    }
  }
  function Es(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(u(191, l));
          l.call(r);
        }
      }
  }
  var yl = {},
    qt = Dn(yl),
    gl = Dn(yl),
    wl = Dn(yl);
  function lr(e) {
    if (e === yl) throw Error(u(174));
    return e;
  }
  function ta(e, t) {
    switch ((Oe(wl, t), Oe(gl, e), Oe(qt, yl), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : vr(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = vr(t, e));
    }
    Ue(qt), Oe(qt, t);
  }
  function Ir() {
    Ue(qt), Ue(gl), Ue(wl);
  }
  function xs(e) {
    lr(wl.current);
    var t = lr(qt.current),
      n = vr(t, e.type);
    t !== n && (Oe(gl, e), Oe(qt, n));
  }
  function na(e) {
    gl.current === e && (Ue(qt), Ue(gl));
  }
  var He = Dn(0);
  function Ri(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var ra = [];
  function la() {
    for (var e = 0; e < ra.length; e++)
      ra[e]._workInProgressVersionPrimary = null;
    ra.length = 0;
  }
  var Pi = se.ReactCurrentDispatcher,
    ia = se.ReactCurrentBatchConfig,
    ir = 0,
    Be = null,
    be = null,
    tt = null,
    _i = !1,
    Sl = !1,
    El = 0,
    Bd = 0;
  function ct() {
    throw Error(u(321));
  }
  function oa(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Vt(e[n], t[n])) return !1;
    return !0;
  }
  function aa(e, t, n, r, l, o) {
    if (
      ((ir = o),
      (Be = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Pi.current = e === null || e.memoizedState === null ? Kd : Yd),
      (e = n(r, l)),
      Sl)
    ) {
      o = 0;
      do {
        if (((Sl = !1), (El = 0), 25 <= o)) throw Error(u(301));
        (o += 1),
          (tt = be = null),
          (t.updateQueue = null),
          (Pi.current = Xd),
          (e = n(r, l));
      } while (Sl);
    }
    if (
      ((Pi.current = Ti),
      (t = be !== null && be.next !== null),
      (ir = 0),
      (tt = be = Be = null),
      (_i = !1),
      t)
    )
      throw Error(u(300));
    return e;
  }
  function ua() {
    var e = El !== 0;
    return (El = 0), e;
  }
  function bt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return tt === null ? (Be.memoizedState = tt = e) : (tt = tt.next = e), tt;
  }
  function Ot() {
    if (be === null) {
      var e = Be.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = be.next;
    var t = tt === null ? Be.memoizedState : tt.next;
    if (t !== null) (tt = t), (be = e);
    else {
      if (e === null) throw Error(u(310));
      (be = e),
        (e = {
          memoizedState: be.memoizedState,
          baseState: be.baseState,
          baseQueue: be.baseQueue,
          queue: be.queue,
          next: null,
        }),
        tt === null ? (Be.memoizedState = tt = e) : (tt = tt.next = e);
    }
    return tt;
  }
  function xl(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function sa(e) {
    var t = Ot(),
      n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = be,
      l = r.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var s = l.next;
        (l.next = o.next), (o.next = s);
      }
      (r.baseQueue = l = o), (n.pending = null);
    }
    if (l !== null) {
      (o = l.next), (r = r.baseState);
      var p = (s = null),
        v = null,
        P = o;
      do {
        var U = P.lane;
        if ((ir & U) === U)
          v !== null &&
            (v = v.next =
              {
                lane: 0,
                action: P.action,
                hasEagerState: P.hasEagerState,
                eagerState: P.eagerState,
                next: null,
              }),
            (r = P.hasEagerState ? P.eagerState : e(r, P.action));
        else {
          var H = {
            lane: U,
            action: P.action,
            hasEagerState: P.hasEagerState,
            eagerState: P.eagerState,
            next: null,
          };
          v === null ? ((p = v = H), (s = r)) : (v = v.next = H),
            (Be.lanes |= U),
            (or |= U);
        }
        P = P.next;
      } while (P !== null && P !== o);
      v === null ? (s = r) : (v.next = p),
        Vt(r, t.memoizedState) || (wt = !0),
        (t.memoizedState = r),
        (t.baseState = s),
        (t.baseQueue = v),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (o = l.lane), (Be.lanes |= o), (or |= o), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function ca(e) {
    var t = Ot(),
      n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var s = (l = l.next);
      do (o = e(o, s.action)), (s = s.next);
      while (s !== l);
      Vt(o, t.memoizedState) || (wt = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, r];
  }
  function ks() {}
  function Cs(e, t) {
    var n = Be,
      r = Ot(),
      l = t(),
      o = !Vt(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (wt = !0)),
      (r = r.queue),
      fa(_s.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (tt !== null && tt.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        kl(9, Ps.bind(null, n, r, l, t), void 0, null),
        nt === null)
      )
        throw Error(u(349));
      ir & 30 || Rs(n, t, l);
    }
    return l;
  }
  function Rs(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Be.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Be.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Ps(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Ls(t) && Ns(e);
  }
  function _s(e, t, n) {
    return n(function () {
      Ls(t) && Ns(e);
    });
  }
  function Ls(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Vt(e, n);
    } catch {
      return !0;
    }
  }
  function Ns(e) {
    var t = pn(e, 1);
    t !== null && Xt(t, e, 1, -1);
  }
  function Ts(e) {
    var t = bt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: xl,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Qd.bind(null, Be, e)),
      [t.memoizedState, e]
    );
  }
  function kl(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = Be.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Be.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Ds() {
    return Ot().memoizedState;
  }
  function Li(e, t, n, r) {
    var l = bt();
    (Be.flags |= e),
      (l.memoizedState = kl(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function Ni(e, t, n, r) {
    var l = Ot();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (be !== null) {
      var s = be.memoizedState;
      if (((o = s.destroy), r !== null && oa(r, s.deps))) {
        l.memoizedState = kl(t, n, o, r);
        return;
      }
    }
    (Be.flags |= e), (l.memoizedState = kl(1 | t, n, o, r));
  }
  function Ms(e, t) {
    return Li(8390656, 8, e, t);
  }
  function fa(e, t) {
    return Ni(2048, 8, e, t);
  }
  function zs(e, t) {
    return Ni(4, 2, e, t);
  }
  function js(e, t) {
    return Ni(4, 4, e, t);
  }
  function Fs(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Os(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), Ni(4, 4, Fs.bind(null, t, e), n)
    );
  }
  function da() {}
  function Is(e, t) {
    var n = Ot();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && oa(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Us(e, t) {
    var n = Ot();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && oa(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function $s(e, t, n) {
    return ir & 21
      ? (Vt(n, t) ||
          ((n = mu()), (Be.lanes |= n), (or |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (wt = !0)), (e.memoizedState = n));
  }
  function Vd(e, t) {
    var n = Ne;
    (Ne = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = ia.transition;
    ia.transition = {};
    try {
      e(!1), t();
    } finally {
      (Ne = n), (ia.transition = r);
    }
  }
  function As() {
    return Ot().memoizedState;
  }
  function Wd(e, t, n) {
    var r = $n(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Hs(e))
    )
      Bs(t, n);
    else if (((n = gs(e, t, n, r)), n !== null)) {
      var l = ht();
      Xt(n, e, r, l), Vs(n, t, r);
    }
  }
  function Qd(e, t, n) {
    var r = $n(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Hs(e)) Bs(t, l);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var s = t.lastRenderedState,
            p = o(s, n);
          if (((l.hasEagerState = !0), (l.eagerState = p), Vt(p, s))) {
            var v = t.interleaved;
            v === null
              ? ((l.next = l), bo(t))
              : ((l.next = v.next), (v.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = gs(e, t, l, r)),
        n !== null && ((l = ht()), Xt(n, e, r, l), Vs(n, t, r));
    }
  }
  function Hs(e) {
    var t = e.alternate;
    return e === Be || (t !== null && t === Be);
  }
  function Bs(e, t) {
    Sl = _i = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function Vs(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), ho(e, n);
    }
  }
  var Ti = {
      readContext: Ft,
      useCallback: ct,
      useContext: ct,
      useEffect: ct,
      useImperativeHandle: ct,
      useInsertionEffect: ct,
      useLayoutEffect: ct,
      useMemo: ct,
      useReducer: ct,
      useRef: ct,
      useState: ct,
      useDebugValue: ct,
      useDeferredValue: ct,
      useTransition: ct,
      useMutableSource: ct,
      useSyncExternalStore: ct,
      useId: ct,
      unstable_isNewReconciler: !1,
    },
    Kd = {
      readContext: Ft,
      useCallback: function (e, t) {
        return (bt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Ft,
      useEffect: Ms,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Li(4194308, 4, Fs.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Li(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Li(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = bt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = bt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = Wd.bind(null, Be, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = bt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Ts,
      useDebugValue: da,
      useDeferredValue: function (e) {
        return (bt().memoizedState = e);
      },
      useTransition: function () {
        var e = Ts(!1),
          t = e[0];
        return (e = Vd.bind(null, e[1])), (bt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = Be,
          l = bt();
        if ($e) {
          if (n === void 0) throw Error(u(407));
          n = n();
        } else {
          if (((n = t()), nt === null)) throw Error(u(349));
          ir & 30 || Rs(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          Ms(_s.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          kl(9, Ps.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = bt(),
          t = nt.identifierPrefix;
        if ($e) {
          var n = dn,
            r = fn;
          (n = (r & ~(1 << (32 - Bt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = El++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = Bd++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Yd = {
      readContext: Ft,
      useCallback: Is,
      useContext: Ft,
      useEffect: fa,
      useImperativeHandle: Os,
      useInsertionEffect: zs,
      useLayoutEffect: js,
      useMemo: Us,
      useReducer: sa,
      useRef: Ds,
      useState: function () {
        return sa(xl);
      },
      useDebugValue: da,
      useDeferredValue: function (e) {
        var t = Ot();
        return $s(t, be.memoizedState, e);
      },
      useTransition: function () {
        var e = sa(xl)[0],
          t = Ot().memoizedState;
        return [e, t];
      },
      useMutableSource: ks,
      useSyncExternalStore: Cs,
      useId: As,
      unstable_isNewReconciler: !1,
    },
    Xd = {
      readContext: Ft,
      useCallback: Is,
      useContext: Ft,
      useEffect: fa,
      useImperativeHandle: Os,
      useInsertionEffect: zs,
      useLayoutEffect: js,
      useMemo: Us,
      useReducer: ca,
      useRef: Ds,
      useState: function () {
        return ca(xl);
      },
      useDebugValue: da,
      useDeferredValue: function (e) {
        var t = Ot();
        return be === null ? (t.memoizedState = e) : $s(t, be.memoizedState, e);
      },
      useTransition: function () {
        var e = ca(xl)[0],
          t = Ot().memoizedState;
        return [e, t];
      },
      useMutableSource: ks,
      useSyncExternalStore: Cs,
      useId: As,
      unstable_isNewReconciler: !1,
    };
  function Qt(e, t) {
    if (e && e.defaultProps) {
      (t = K({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function pa(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : K({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Di = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? _e(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = ht(),
        l = $n(e),
        o = hn(r, l);
      (o.payload = t),
        n != null && (o.callback = n),
        (t = Fn(e, o, l)),
        t !== null && (Xt(t, e, l, r), ki(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = ht(),
        l = $n(e),
        o = hn(r, l);
      (o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = Fn(e, o, l)),
        t !== null && (Xt(t, e, l, r), ki(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = ht(),
        r = $n(e),
        l = hn(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = Fn(e, l, r)),
        t !== null && (Xt(t, e, r, n), ki(t, e, r));
    },
  };
  function Ws(e, t, n, r, l, o, s) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, o, s)
        : t.prototype && t.prototype.isPureReactComponent
        ? !sl(n, r) || !sl(l, o)
        : !0
    );
  }
  function Qs(e, t, n) {
    var r = !1,
      l = Mn,
      o = t.contextType;
    return (
      typeof o == "object" && o !== null
        ? (o = Ft(o))
        : ((l = gt(t) ? er : st.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? Tr(e, l) : Mn)),
      (t = new t(n, o)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Di),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function Ks(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Di.enqueueReplaceState(t, t.state, null);
  }
  function ha(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), ea(e);
    var o = t.contextType;
    typeof o == "object" && o !== null
      ? (l.context = Ft(o))
      : ((o = gt(t) ? er : st.current), (l.context = Tr(e, o))),
      (l.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == "function" && (pa(e, t, o, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && Di.enqueueReplaceState(l, l.state, null),
        Ci(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Ur(e, t) {
    try {
      var n = "",
        r = t;
      do (n += ve(r)), (r = r.return);
      while (r);
      var l = n;
    } catch (o) {
      l =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function ma(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function va(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Gd = typeof WeakMap == "function" ? WeakMap : Map;
  function Ys(e, t, n) {
    (n = hn(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Ui || ((Ui = !0), (Da = r)), va(e, t);
      }),
      n
    );
  }
  function Xs(e, t, n) {
    (n = hn(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      (n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          va(e, t);
        });
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == "function" &&
        (n.callback = function () {
          va(e, t),
            typeof r != "function" &&
              (In === null ? (In = new Set([this])) : In.add(this));
          var s = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : "",
          });
        }),
      n
    );
  }
  function Gs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Gd();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = sp.bind(null, e, t, n)), t.then(e, e));
  }
  function Js(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Zs(e, t, n, r, l) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = l), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = hn(-1, 1)), (t.tag = 2), Fn(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var Jd = se.ReactCurrentOwner,
    wt = !1;
  function pt(e, t, n, r) {
    t.child = e === null ? ys(t, null, n, r) : jr(t, e.child, n, r);
  }
  function qs(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      Or(t, l),
      (r = aa(e, t, n, r, o, l)),
      (n = ua()),
      e !== null && !wt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          mn(e, t, l))
        : ($e && n && Wo(t), (t.flags |= 1), pt(e, t, r, l), t.child)
    );
  }
  function bs(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" &&
        !Ua(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), ec(e, t, o, r, l))
        : ((e = Wi(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), !(e.lanes & l))) {
      var s = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : sl), n(s, r) && e.ref === t.ref)
      )
        return mn(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = Hn(o, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function ec(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (sl(o, r) && e.ref === t.ref)
        if (((wt = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          e.flags & 131072 && (wt = !0);
        else return (t.lanes = e.lanes), mn(e, t, l);
    }
    return ya(e, t, n, r, l);
  }
  function tc(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Oe(Ar, Lt),
          (Lt |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Oe(Ar, Lt),
            (Lt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = o !== null ? o.baseLanes : n),
          Oe(Ar, Lt),
          (Lt |= r);
      }
    else
      o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        Oe(Ar, Lt),
        (Lt |= r);
    return pt(e, t, l, n), t.child;
  }
  function nc(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function ya(e, t, n, r, l) {
    var o = gt(n) ? er : st.current;
    return (
      (o = Tr(t, o)),
      Or(t, l),
      (n = aa(e, t, n, r, o, l)),
      (r = ua()),
      e !== null && !wt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          mn(e, t, l))
        : ($e && r && Wo(t), (t.flags |= 1), pt(e, t, n, l), t.child)
    );
  }
  function rc(e, t, n, r, l) {
    if (gt(n)) {
      var o = !0;
      mi(t);
    } else o = !1;
    if ((Or(t, l), t.stateNode === null))
      zi(e, t), Qs(t, n, r), ha(t, n, r, l), (r = !0);
    else if (e === null) {
      var s = t.stateNode,
        p = t.memoizedProps;
      s.props = p;
      var v = s.context,
        P = n.contextType;
      typeof P == "object" && P !== null
        ? (P = Ft(P))
        : ((P = gt(n) ? er : st.current), (P = Tr(t, P)));
      var U = n.getDerivedStateFromProps,
        H =
          typeof U == "function" ||
          typeof s.getSnapshotBeforeUpdate == "function";
      H ||
        (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
          typeof s.componentWillReceiveProps != "function") ||
        ((p !== r || v !== P) && Ks(t, s, r, P)),
        (jn = !1);
      var O = t.memoizedState;
      (s.state = O),
        Ci(t, r, s, l),
        (v = t.memoizedState),
        p !== r || O !== v || yt.current || jn
          ? (typeof U == "function" && (pa(t, n, U, r), (v = t.memoizedState)),
            (p = jn || Ws(t, n, p, r, O, v, P))
              ? (H ||
                  (typeof s.UNSAFE_componentWillMount != "function" &&
                    typeof s.componentWillMount != "function") ||
                  (typeof s.componentWillMount == "function" &&
                    s.componentWillMount(),
                  typeof s.UNSAFE_componentWillMount == "function" &&
                    s.UNSAFE_componentWillMount()),
                typeof s.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof s.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = v)),
            (s.props = r),
            (s.state = v),
            (s.context = P),
            (r = p))
          : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (s = t.stateNode),
        ws(e, t),
        (p = t.memoizedProps),
        (P = t.type === t.elementType ? p : Qt(t.type, p)),
        (s.props = P),
        (H = t.pendingProps),
        (O = s.context),
        (v = n.contextType),
        typeof v == "object" && v !== null
          ? (v = Ft(v))
          : ((v = gt(n) ? er : st.current), (v = Tr(t, v)));
      var Y = n.getDerivedStateFromProps;
      (U =
        typeof Y == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function") ||
        (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
          typeof s.componentWillReceiveProps != "function") ||
        ((p !== H || O !== v) && Ks(t, s, r, v)),
        (jn = !1),
        (O = t.memoizedState),
        (s.state = O),
        Ci(t, r, s, l);
      var b = t.memoizedState;
      p !== H || O !== b || yt.current || jn
        ? (typeof Y == "function" && (pa(t, n, Y, r), (b = t.memoizedState)),
          (P = jn || Ws(t, n, P, r, O, b, v) || !1)
            ? (U ||
                (typeof s.UNSAFE_componentWillUpdate != "function" &&
                  typeof s.componentWillUpdate != "function") ||
                (typeof s.componentWillUpdate == "function" &&
                  s.componentWillUpdate(r, b, v),
                typeof s.UNSAFE_componentWillUpdate == "function" &&
                  s.UNSAFE_componentWillUpdate(r, b, v)),
              typeof s.componentDidUpdate == "function" && (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof s.componentDidUpdate != "function" ||
                (p === e.memoizedProps && O === e.memoizedState) ||
                (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != "function" ||
                (p === e.memoizedProps && O === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = b)),
          (s.props = r),
          (s.state = b),
          (s.context = v),
          (r = P))
        : (typeof s.componentDidUpdate != "function" ||
            (p === e.memoizedProps && O === e.memoizedState) ||
            (t.flags |= 4),
          typeof s.getSnapshotBeforeUpdate != "function" ||
            (p === e.memoizedProps && O === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return ga(e, t, n, r, o, l);
  }
  function ga(e, t, n, r, l, o) {
    nc(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return l && us(t, n, !1), mn(e, t, o);
    (r = t.stateNode), (Jd.current = t);
    var p =
      s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && s
        ? ((t.child = jr(t, e.child, null, o)), (t.child = jr(t, null, p, o)))
        : pt(e, t, p, o),
      (t.memoizedState = r.state),
      l && us(t, n, !0),
      t.child
    );
  }
  function lc(e) {
    var t = e.stateNode;
    t.pendingContext
      ? os(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && os(e, t.context, !1),
      ta(e, t.containerInfo);
  }
  function ic(e, t, n, r, l) {
    return zr(), Xo(l), (t.flags |= 256), pt(e, t, n, r), t.child;
  }
  var wa = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Sa(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function oc(e, t, n) {
    var r = t.pendingProps,
      l = He.current,
      o = !1,
      s = (t.flags & 128) !== 0,
      p;
    if (
      ((p = s) ||
        (p = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      p
        ? ((o = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      Oe(He, l & 1),
      e === null)
    )
      return (
        Yo(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((s = r.children),
            (e = r.fallback),
            o
              ? ((r = t.mode),
                (o = t.child),
                (s = { mode: "hidden", children: s }),
                !(r & 1) && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = s))
                  : (o = Qi(s, r, 0, null)),
                (e = cr(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = Sa(n)),
                (t.memoizedState = wa),
                e)
              : Ea(t, s))
      );
    if (((l = e.memoizedState), l !== null && ((p = l.dehydrated), p !== null)))
      return Zd(e, t, s, r, p, l, n);
    if (o) {
      (o = r.fallback), (s = t.mode), (l = e.child), (p = l.sibling);
      var v = { mode: "hidden", children: r.children };
      return (
        !(s & 1) && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = v),
            (t.deletions = null))
          : ((r = Hn(l, v)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        p !== null ? (o = Hn(p, o)) : ((o = cr(o, s, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (s = e.child.memoizedState),
        (s =
          s === null
            ? Sa(n)
            : {
                baseLanes: s.baseLanes | n,
                cachePool: null,
                transitions: s.transitions,
              }),
        (o.memoizedState = s),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = wa),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = Hn(o, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function Ea(e, t) {
    return (
      (t = Qi({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Mi(e, t, n, r) {
    return (
      r !== null && Xo(r),
      jr(t, e.child, null, n),
      (e = Ea(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Zd(e, t, n, r, l, o, s) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = ma(Error(u(422)))), Mi(e, t, s, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = Qi({ mode: "visible", children: r.children }, l, 0, null)),
          (o = cr(o, l, s, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && jr(t, e.child, null, s),
          (t.child.memoizedState = Sa(s)),
          (t.memoizedState = wa),
          o);
    if (!(t.mode & 1)) return Mi(e, t, s, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var p = r.dgst;
      return (
        (r = p), (o = Error(u(419))), (r = ma(o, r, void 0)), Mi(e, t, s, r)
      );
    }
    if (((p = (s & e.childLanes) !== 0), wt || p)) {
      if (((r = nt), r !== null)) {
        switch (s & -s) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = l & (r.suspendedLanes | s) ? 0 : l),
          l !== 0 &&
            l !== o.retryLane &&
            ((o.retryLane = l), pn(e, l), Xt(r, e, l, -1));
      }
      return Ia(), (r = ma(Error(u(421)))), Mi(e, t, s, r);
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = cp.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = o.treeContext),
        (_t = Tn(l.nextSibling)),
        (Pt = t),
        ($e = !0),
        (Wt = null),
        e !== null &&
          ((zt[jt++] = fn),
          (zt[jt++] = dn),
          (zt[jt++] = tr),
          (fn = e.id),
          (dn = e.overflow),
          (tr = t)),
        (t = Ea(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function ac(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), qo(e.return, t, n);
  }
  function xa(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = n),
        (o.tailMode = l));
  }
  function uc(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if ((pt(e, t, r.children, n), (r = He.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && ac(e, n, t);
          else if (e.tag === 19) ac(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((Oe(He, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate),
              e !== null && Ri(e) === null && (l = n),
              (n = n.sibling);
          (n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            xa(t, !1, l, n, o);
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && Ri(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          xa(t, !0, n, null, o);
          break;
        case "together":
          xa(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function zi(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function mn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (or |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Hn(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = Hn(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function qd(e, t, n) {
    switch (t.tag) {
      case 3:
        lc(t), zr();
        break;
      case 5:
        xs(t);
        break;
      case 1:
        gt(t.type) && mi(t);
        break;
      case 4:
        ta(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        Oe(Ei, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (Oe(He, He.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? oc(e, t, n)
            : (Oe(He, He.current & 1),
              (e = mn(e, t, n)),
              e !== null ? e.sibling : null);
        Oe(He, He.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return uc(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          Oe(He, He.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), tc(e, t, n);
    }
    return mn(e, t, n);
  }
  var sc, ka, cc, fc;
  (sc = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (ka = function () {}),
    (cc = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), lr(qt.current);
        var o = null;
        switch (n) {
          case "input":
            (l = Wr(e, l)), (r = Wr(e, r)), (o = []);
            break;
          case "select":
            (l = K({}, l, { value: void 0 })),
              (r = K({}, r, { value: void 0 })),
              (o = []);
            break;
          case "textarea":
            (l = ln(e, l)), (r = ln(e, r)), (o = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = di);
        }
        Sn(n, r);
        var s;
        n = null;
        for (P in l)
          if (!r.hasOwnProperty(P) && l.hasOwnProperty(P) && l[P] != null)
            if (P === "style") {
              var p = l[P];
              for (s in p) p.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
            } else
              P !== "dangerouslySetInnerHTML" &&
                P !== "children" &&
                P !== "suppressContentEditableWarning" &&
                P !== "suppressHydrationWarning" &&
                P !== "autoFocus" &&
                (c.hasOwnProperty(P)
                  ? o || (o = [])
                  : (o = o || []).push(P, null));
        for (P in r) {
          var v = r[P];
          if (
            ((p = l != null ? l[P] : void 0),
            r.hasOwnProperty(P) && v !== p && (v != null || p != null))
          )
            if (P === "style")
              if (p) {
                for (s in p)
                  !p.hasOwnProperty(s) ||
                    (v && v.hasOwnProperty(s)) ||
                    (n || (n = {}), (n[s] = ""));
                for (s in v)
                  v.hasOwnProperty(s) &&
                    p[s] !== v[s] &&
                    (n || (n = {}), (n[s] = v[s]));
              } else n || (o || (o = []), o.push(P, n)), (n = v);
            else
              P === "dangerouslySetInnerHTML"
                ? ((v = v ? v.__html : void 0),
                  (p = p ? p.__html : void 0),
                  v != null && p !== v && (o = o || []).push(P, v))
                : P === "children"
                ? (typeof v != "string" && typeof v != "number") ||
                  (o = o || []).push(P, "" + v)
                : P !== "suppressContentEditableWarning" &&
                  P !== "suppressHydrationWarning" &&
                  (c.hasOwnProperty(P)
                    ? (v != null && P === "onScroll" && Ie("scroll", e),
                      o || p === v || (o = []))
                    : (o = o || []).push(P, v));
        }
        n && (o = o || []).push("style", n);
        var P = o;
        (t.updateQueue = P) && (t.flags |= 4);
      }
    }),
    (fc = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function Cl(e, t) {
    if (!$e)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function ft(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function bd(e, t, n) {
    var r = t.pendingProps;
    switch ((Qo(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ft(t), null;
      case 1:
        return gt(t.type) && hi(), ft(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Ir(),
          Ue(yt),
          Ue(st),
          la(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (wi(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), Wt !== null && (ja(Wt), (Wt = null)))),
          ka(e, t),
          ft(t),
          null
        );
      case 5:
        na(t);
        var l = lr(wl.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          cc(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(u(166));
            return ft(t), null;
          }
          if (((e = lr(qt.current)), wi(t))) {
            (r = t.stateNode), (n = t.type);
            var o = t.memoizedProps;
            switch (((r[Zt] = t), (r[hl] = o), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                Ie("cancel", r), Ie("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ie("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < fl.length; l++) Ie(fl[l], r);
                break;
              case "source":
                Ie("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Ie("error", r), Ie("load", r);
                break;
              case "details":
                Ie("toggle", r);
                break;
              case "input":
                Hl(r, o), Ie("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!o.multiple }),
                  Ie("invalid", r);
                break;
              case "textarea":
                Xr(r, o), Ie("invalid", r);
            }
            Sn(n, o), (l = null);
            for (var s in o)
              if (o.hasOwnProperty(s)) {
                var p = o[s];
                s === "children"
                  ? typeof p == "string"
                    ? r.textContent !== p &&
                      (o.suppressHydrationWarning !== !0 &&
                        fi(r.textContent, p, e),
                      (l = ["children", p]))
                    : typeof p == "number" &&
                      r.textContent !== "" + p &&
                      (o.suppressHydrationWarning !== !0 &&
                        fi(r.textContent, p, e),
                      (l = ["children", "" + p]))
                  : c.hasOwnProperty(s) &&
                    p != null &&
                    s === "onScroll" &&
                    Ie("scroll", r);
              }
            switch (n) {
              case "input":
                Kn(r), Bl(r, o, !0);
                break;
              case "textarea":
                Kn(r), At(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = di);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (s = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Dt(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = s.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
                : (e = s.createElementNS(e, n)),
              (e[Zt] = t),
              (e[hl] = r),
              sc(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((s = yr(n, r)), n)) {
                case "dialog":
                  Ie("cancel", e), Ie("close", e), (l = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ie("load", e), (l = r);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < fl.length; l++) Ie(fl[l], e);
                  l = r;
                  break;
                case "source":
                  Ie("error", e), (l = r);
                  break;
                case "img":
                case "image":
                case "link":
                  Ie("error", e), Ie("load", e), (l = r);
                  break;
                case "details":
                  Ie("toggle", e), (l = r);
                  break;
                case "input":
                  Hl(e, r), (l = Wr(e, r)), Ie("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = K({}, r, { value: void 0 })),
                    Ie("invalid", e);
                  break;
                case "textarea":
                  Xr(e, r), (l = ln(e, r)), Ie("invalid", e);
                  break;
                default:
                  l = r;
              }
              Sn(n, l), (p = l);
              for (o in p)
                if (p.hasOwnProperty(o)) {
                  var v = p[o];
                  o === "style"
                    ? Ql(e, v)
                    : o === "dangerouslySetInnerHTML"
                    ? ((v = v ? v.__html : void 0), v != null && Vl(e, v))
                    : o === "children"
                    ? typeof v == "string"
                      ? (n !== "textarea" || v !== "") && vt(e, v)
                      : typeof v == "number" && vt(e, "" + v)
                    : o !== "suppressContentEditableWarning" &&
                      o !== "suppressHydrationWarning" &&
                      o !== "autoFocus" &&
                      (c.hasOwnProperty(o)
                        ? v != null && o === "onScroll" && Ie("scroll", e)
                        : v != null && Z(e, o, v, s));
                }
              switch (n) {
                case "input":
                  Kn(e), Bl(e, r, !1);
                  break;
                case "textarea":
                  Kn(e), At(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Pe(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? mt(e, !!r.multiple, o, !1)
                      : r.defaultValue != null &&
                        mt(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = di);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return ft(t), null;
      case 6:
        if (e && t.stateNode != null) fc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(u(166));
          if (((n = lr(wl.current)), lr(qt.current), wi(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Zt] = t),
              (o = r.nodeValue !== n) && ((e = Pt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  fi(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    fi(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Zt] = t),
              (t.stateNode = r);
        }
        return ft(t), null;
      case 13:
        if (
          (Ue(He),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if ($e && _t !== null && t.mode & 1 && !(t.flags & 128))
            hs(), zr(), (t.flags |= 98560), (o = !1);
          else if (((o = wi(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(u(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(u(317));
              o[Zt] = t;
            } else
              zr(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            ft(t), (o = !1);
          } else Wt !== null && (ja(Wt), (Wt = null)), (o = !0);
          if (!o) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || He.current & 1 ? et === 0 && (et = 3) : Ia())),
            t.updateQueue !== null && (t.flags |= 4),
            ft(t),
            null);
      case 4:
        return (
          Ir(),
          ka(e, t),
          e === null && dl(t.stateNode.containerInfo),
          ft(t),
          null
        );
      case 10:
        return Zo(t.type._context), ft(t), null;
      case 17:
        return gt(t.type) && hi(), ft(t), null;
      case 19:
        if ((Ue(He), (o = t.memoizedState), o === null)) return ft(t), null;
        if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
          if (r) Cl(o, !1);
          else {
            if (et !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((s = Ri(e)), s !== null)) {
                  for (
                    t.flags |= 128,
                      Cl(o, !1),
                      r = s.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (o = n),
                      (e = r),
                      (o.flags &= 14680066),
                      (s = o.alternate),
                      s === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = s.childLanes),
                          (o.lanes = s.lanes),
                          (o.child = s.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = s.memoizedProps),
                          (o.memoizedState = s.memoizedState),
                          (o.updateQueue = s.updateQueue),
                          (o.type = s.type),
                          (e = s.dependencies),
                          (o.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return Oe(He, (He.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null &&
              Fe() > Hr &&
              ((t.flags |= 128), (r = !0), Cl(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = Ri(s)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Cl(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !s.alternate &&
                  !$e)
              )
                return ft(t), null;
            } else
              2 * Fe() - o.renderingStartTime > Hr &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Cl(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((s.sibling = t.child), (t.child = s))
            : ((n = o.last),
              n !== null ? (n.sibling = s) : (t.child = s),
              (o.last = s));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = Fe()),
            (t.sibling = null),
            (n = He.current),
            Oe(He, r ? (n & 1) | 2 : n & 1),
            t)
          : (ft(t), null);
      case 22:
      case 23:
        return (
          Oa(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? Lt & 1073741824 &&
              (ft(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : ft(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function ep(e, t) {
    switch ((Qo(t), t.tag)) {
      case 1:
        return (
          gt(t.type) && hi(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Ir(),
          Ue(yt),
          Ue(st),
          la(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return na(t), null;
      case 13:
        if (
          (Ue(He), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(u(340));
          zr();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return Ue(He), null;
      case 4:
        return Ir(), null;
      case 10:
        return Zo(t.type._context), null;
      case 22:
      case 23:
        return Oa(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ji = !1,
    dt = !1,
    tp = typeof WeakSet == "function" ? WeakSet : Set,
    J = null;
  function $r(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          We(e, t, r);
        }
      else n.current = null;
  }
  function Ca(e, t, n) {
    try {
      n();
    } catch (r) {
      We(e, t, r);
    }
  }
  var dc = !1;
  function np(e, t) {
    if (((Oo = ei), (e = Wu()), Lo(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              o = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break e;
            }
            var s = 0,
              p = -1,
              v = -1,
              P = 0,
              U = 0,
              H = e,
              O = null;
            t: for (;;) {
              for (
                var Y;
                H !== n || (l !== 0 && H.nodeType !== 3) || (p = s + l),
                  H !== o || (r !== 0 && H.nodeType !== 3) || (v = s + r),
                  H.nodeType === 3 && (s += H.nodeValue.length),
                  (Y = H.firstChild) !== null;

              )
                (O = H), (H = Y);
              for (;;) {
                if (H === e) break t;
                if (
                  (O === n && ++P === l && (p = s),
                  O === o && ++U === r && (v = s),
                  (Y = H.nextSibling) !== null)
                )
                  break;
                (H = O), (O = H.parentNode);
              }
              H = Y;
            }
            n = p === -1 || v === -1 ? null : { start: p, end: v };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Io = { focusedElem: e, selectionRange: n }, ei = !1, J = t;
      J !== null;

    )
      if (((t = J), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (J = e);
      else
        for (; J !== null; ) {
          t = J;
          try {
            var b = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (b !== null) {
                    var te = b.memoizedProps,
                      Ke = b.memoizedState,
                      k = t.stateNode,
                      w = k.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? te : Qt(t.type, te),
                        Ke
                      );
                    k.__reactInternalSnapshotBeforeUpdate = w;
                  }
                  break;
                case 3:
                  var R = t.stateNode.containerInfo;
                  R.nodeType === 1
                    ? (R.textContent = "")
                    : R.nodeType === 9 &&
                      R.documentElement &&
                      R.removeChild(R.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(u(163));
              }
          } catch (B) {
            We(t, t.return, B);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (J = e);
            break;
          }
          J = t.return;
        }
    return (b = dc), (dc = !1), b;
  }
  function Rl(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          (l.destroy = void 0), o !== void 0 && Ca(t, n, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Fi(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Ra(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function pc(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), pc(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Zt],
          delete t[hl],
          delete t[Ho],
          delete t[Ud],
          delete t[$d])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function hc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function mc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || hc(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Pa(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = di));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Pa(e, t, n), e = e.sibling; e !== null; )
        Pa(e, t, n), (e = e.sibling);
  }
  function _a(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (_a(e, t, n), e = e.sibling; e !== null; )
        _a(e, t, n), (e = e.sibling);
  }
  var ot = null,
    Kt = !1;
  function On(e, t, n) {
    for (n = n.child; n !== null; ) vc(e, t, n), (n = n.sibling);
  }
  function vc(e, t, n) {
    if (Ct && typeof Ct.onCommitFiberUnmount == "function")
      try {
        Ct.onCommitFiberUnmount(Ht, n);
      } catch {}
    switch (n.tag) {
      case 5:
        dt || $r(n, t);
      case 6:
        var r = ot,
          l = Kt;
        (ot = null),
          On(e, t, n),
          (ot = r),
          (Kt = l),
          ot !== null &&
            (Kt
              ? ((e = ot),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : ot.removeChild(n.stateNode));
        break;
      case 18:
        ot !== null &&
          (Kt
            ? ((e = ot),
              (n = n.stateNode),
              e.nodeType === 8
                ? Ao(e.parentNode, n)
                : e.nodeType === 1 && Ao(e, n),
              rl(e))
            : Ao(ot, n.stateNode));
        break;
      case 4:
        (r = ot),
          (l = Kt),
          (ot = n.stateNode.containerInfo),
          (Kt = !0),
          On(e, t, n),
          (ot = r),
          (Kt = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !dt &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var o = l,
              s = o.destroy;
            (o = o.tag),
              s !== void 0 && (o & 2 || o & 4) && Ca(n, t, s),
              (l = l.next);
          } while (l !== r);
        }
        On(e, t, n);
        break;
      case 1:
        if (
          !dt &&
          ($r(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (p) {
            We(n, t, p);
          }
        On(e, t, n);
        break;
      case 21:
        On(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((dt = (r = dt) || n.memoizedState !== null), On(e, t, n), (dt = r))
          : On(e, t, n);
        break;
      default:
        On(e, t, n);
    }
  }
  function yc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new tp()),
        t.forEach(function (r) {
          var l = fp.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function Yt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var o = e,
            s = t,
            p = s;
          e: for (; p !== null; ) {
            switch (p.tag) {
              case 5:
                (ot = p.stateNode), (Kt = !1);
                break e;
              case 3:
                (ot = p.stateNode.containerInfo), (Kt = !0);
                break e;
              case 4:
                (ot = p.stateNode.containerInfo), (Kt = !0);
                break e;
            }
            p = p.return;
          }
          if (ot === null) throw Error(u(160));
          vc(o, s, l), (ot = null), (Kt = !1);
          var v = l.alternate;
          v !== null && (v.return = null), (l.return = null);
        } catch (P) {
          We(l, t, P);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) gc(t, e), (t = t.sibling);
  }
  function gc(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Yt(t, e), en(e), r & 4)) {
          try {
            Rl(3, e, e.return), Fi(3, e);
          } catch (te) {
            We(e, e.return, te);
          }
          try {
            Rl(5, e, e.return);
          } catch (te) {
            We(e, e.return, te);
          }
        }
        break;
      case 1:
        Yt(t, e), en(e), r & 512 && n !== null && $r(n, n.return);
        break;
      case 5:
        if (
          (Yt(t, e),
          en(e),
          r & 512 && n !== null && $r(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            vt(l, "");
          } catch (te) {
            We(e, e.return, te);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            s = n !== null ? n.memoizedProps : o,
            p = e.type,
            v = e.updateQueue;
          if (((e.updateQueue = null), v !== null))
            try {
              p === "input" && o.type === "radio" && o.name != null && Qr(l, o),
                yr(p, s);
              var P = yr(p, o);
              for (s = 0; s < v.length; s += 2) {
                var U = v[s],
                  H = v[s + 1];
                U === "style"
                  ? Ql(l, H)
                  : U === "dangerouslySetInnerHTML"
                  ? Vl(l, H)
                  : U === "children"
                  ? vt(l, H)
                  : Z(l, U, H, P);
              }
              switch (p) {
                case "input":
                  Kr(l, o);
                  break;
                case "textarea":
                  mr(l, o);
                  break;
                case "select":
                  var O = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var Y = o.value;
                  Y != null
                    ? mt(l, !!o.multiple, Y, !1)
                    : O !== !!o.multiple &&
                      (o.defaultValue != null
                        ? mt(l, !!o.multiple, o.defaultValue, !0)
                        : mt(l, !!o.multiple, o.multiple ? [] : "", !1));
              }
              l[hl] = o;
            } catch (te) {
              We(e, e.return, te);
            }
        }
        break;
      case 6:
        if ((Yt(t, e), en(e), r & 4)) {
          if (e.stateNode === null) throw Error(u(162));
          (l = e.stateNode), (o = e.memoizedProps);
          try {
            l.nodeValue = o;
          } catch (te) {
            We(e, e.return, te);
          }
        }
        break;
      case 3:
        if (
          (Yt(t, e), en(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            rl(t.containerInfo);
          } catch (te) {
            We(e, e.return, te);
          }
        break;
      case 4:
        Yt(t, e), en(e);
        break;
      case 13:
        Yt(t, e),
          en(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (Ta = Fe())),
          r & 4 && yc(e);
        break;
      case 22:
        if (
          ((U = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((dt = (P = dt) || U), Yt(t, e), (dt = P)) : Yt(t, e),
          en(e),
          r & 8192)
        ) {
          if (
            ((P = e.memoizedState !== null),
            (e.stateNode.isHidden = P) && !U && e.mode & 1)
          )
            for (J = e, U = e.child; U !== null; ) {
              for (H = J = U; J !== null; ) {
                switch (((O = J), (Y = O.child), O.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Rl(4, O, O.return);
                    break;
                  case 1:
                    $r(O, O.return);
                    var b = O.stateNode;
                    if (typeof b.componentWillUnmount == "function") {
                      (r = O), (n = O.return);
                      try {
                        (t = r),
                          (b.props = t.memoizedProps),
                          (b.state = t.memoizedState),
                          b.componentWillUnmount();
                      } catch (te) {
                        We(r, n, te);
                      }
                    }
                    break;
                  case 5:
                    $r(O, O.return);
                    break;
                  case 22:
                    if (O.memoizedState !== null) {
                      Ec(H);
                      continue;
                    }
                }
                Y !== null ? ((Y.return = O), (J = Y)) : Ec(H);
              }
              U = U.sibling;
            }
          e: for (U = null, H = e; ; ) {
            if (H.tag === 5) {
              if (U === null) {
                U = H;
                try {
                  (l = H.stateNode),
                    P
                      ? ((o = l.style),
                        typeof o.setProperty == "function"
                          ? o.setProperty("display", "none", "important")
                          : (o.display = "none"))
                      : ((p = H.stateNode),
                        (v = H.memoizedProps.style),
                        (s =
                          v != null && v.hasOwnProperty("display")
                            ? v.display
                            : null),
                        (p.style.display = Gr("display", s)));
                } catch (te) {
                  We(e, e.return, te);
                }
              }
            } else if (H.tag === 6) {
              if (U === null)
                try {
                  H.stateNode.nodeValue = P ? "" : H.memoizedProps;
                } catch (te) {
                  We(e, e.return, te);
                }
            } else if (
              ((H.tag !== 22 && H.tag !== 23) ||
                H.memoizedState === null ||
                H === e) &&
              H.child !== null
            ) {
              (H.child.return = H), (H = H.child);
              continue;
            }
            if (H === e) break e;
            for (; H.sibling === null; ) {
              if (H.return === null || H.return === e) break e;
              U === H && (U = null), (H = H.return);
            }
            U === H && (U = null),
              (H.sibling.return = H.return),
              (H = H.sibling);
          }
        }
        break;
      case 19:
        Yt(t, e), en(e), r & 4 && yc(e);
        break;
      case 21:
        break;
      default:
        Yt(t, e), en(e);
    }
  }
  function en(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (hc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(u(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (vt(l, ""), (r.flags &= -33));
            var o = mc(e);
            _a(e, o, l);
            break;
          case 3:
          case 4:
            var s = r.stateNode.containerInfo,
              p = mc(e);
            Pa(e, p, s);
            break;
          default:
            throw Error(u(161));
        }
      } catch (v) {
        We(e, e.return, v);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function rp(e, t, n) {
    (J = e), wc(e);
  }
  function wc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; J !== null; ) {
      var l = J,
        o = l.child;
      if (l.tag === 22 && r) {
        var s = l.memoizedState !== null || ji;
        if (!s) {
          var p = l.alternate,
            v = (p !== null && p.memoizedState !== null) || dt;
          p = ji;
          var P = dt;
          if (((ji = s), (dt = v) && !P))
            for (J = l; J !== null; )
              (s = J),
                (v = s.child),
                s.tag === 22 && s.memoizedState !== null
                  ? xc(l)
                  : v !== null
                  ? ((v.return = s), (J = v))
                  : xc(l);
          for (; o !== null; ) (J = o), wc(o), (o = o.sibling);
          (J = l), (ji = p), (dt = P);
        }
        Sc(e);
      } else
        l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (J = o)) : Sc(e);
    }
  }
  function Sc(e) {
    for (; J !== null; ) {
      var t = J;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                dt || Fi(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !dt)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : Qt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var o = t.updateQueue;
                o !== null && Es(t, o, r);
                break;
              case 3:
                var s = t.updateQueue;
                if (s !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Es(t, s, n);
                }
                break;
              case 5:
                var p = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = p;
                  var v = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      v.autoFocus && n.focus();
                      break;
                    case "img":
                      v.src && (n.src = v.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var P = t.alternate;
                  if (P !== null) {
                    var U = P.memoizedState;
                    if (U !== null) {
                      var H = U.dehydrated;
                      H !== null && rl(H);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(u(163));
            }
          dt || (t.flags & 512 && Ra(t));
        } catch (O) {
          We(t, t.return, O);
        }
      }
      if (t === e) {
        J = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (J = n);
        break;
      }
      J = t.return;
    }
  }
  function Ec(e) {
    for (; J !== null; ) {
      var t = J;
      if (t === e) {
        J = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (J = n);
        break;
      }
      J = t.return;
    }
  }
  function xc(e) {
    for (; J !== null; ) {
      var t = J;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Fi(4, t);
            } catch (v) {
              We(t, n, v);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (v) {
                We(t, l, v);
              }
            }
            var o = t.return;
            try {
              Ra(t);
            } catch (v) {
              We(t, o, v);
            }
            break;
          case 5:
            var s = t.return;
            try {
              Ra(t);
            } catch (v) {
              We(t, s, v);
            }
        }
      } catch (v) {
        We(t, t.return, v);
      }
      if (t === e) {
        J = null;
        break;
      }
      var p = t.sibling;
      if (p !== null) {
        (p.return = t.return), (J = p);
        break;
      }
      J = t.return;
    }
  }
  var lp = Math.ceil,
    Oi = se.ReactCurrentDispatcher,
    La = se.ReactCurrentOwner,
    It = se.ReactCurrentBatchConfig,
    ke = 0,
    nt = null,
    Ge = null,
    at = 0,
    Lt = 0,
    Ar = Dn(0),
    et = 0,
    Pl = null,
    or = 0,
    Ii = 0,
    Na = 0,
    _l = null,
    St = null,
    Ta = 0,
    Hr = 1 / 0,
    vn = null,
    Ui = !1,
    Da = null,
    In = null,
    $i = !1,
    Un = null,
    Ai = 0,
    Ll = 0,
    Ma = null,
    Hi = -1,
    Bi = 0;
  function ht() {
    return ke & 6 ? Fe() : Hi !== -1 ? Hi : (Hi = Fe());
  }
  function $n(e) {
    return e.mode & 1
      ? ke & 2 && at !== 0
        ? at & -at
        : Hd.transition !== null
        ? (Bi === 0 && (Bi = mu()), Bi)
        : ((e = Ne),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Cu(e.type))),
          e)
      : 1;
  }
  function Xt(e, t, n, r) {
    if (50 < Ll) throw ((Ll = 0), (Ma = null), Error(u(185)));
    qr(e, n, r),
      (!(ke & 2) || e !== nt) &&
        (e === nt && (!(ke & 2) && (Ii |= n), et === 4 && An(e, at)),
        Et(e, r),
        n === 1 &&
          ke === 0 &&
          !(t.mode & 1) &&
          ((Hr = Fe() + 500), vi && zn()));
  }
  function Et(e, t) {
    var n = e.callbackNode;
    Hf(e, t);
    var r = Zl(e, e === nt ? at : 0);
    if (r === 0)
      n !== null && wr(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && wr(n), t === 1))
        e.tag === 0 ? Ad(Cc.bind(null, e)) : ss(Cc.bind(null, e)),
          Od(function () {
            !(ke & 6) && zn();
          }),
          (n = null);
      else {
        switch (vu(r)) {
          case 1:
            n = Le;
            break;
          case 4:
            n = qe;
            break;
          case 16:
            n = un;
            break;
          case 536870912:
            n = Ae;
            break;
          default:
            n = un;
        }
        n = Mc(n, kc.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function kc(e, t) {
    if (((Hi = -1), (Bi = 0), ke & 6)) throw Error(u(327));
    var n = e.callbackNode;
    if (Br() && e.callbackNode !== n) return null;
    var r = Zl(e, e === nt ? at : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Vi(e, r);
    else {
      t = r;
      var l = ke;
      ke |= 2;
      var o = Pc();
      (nt !== e || at !== t) && ((vn = null), (Hr = Fe() + 500), ur(e, t));
      do
        try {
          ap();
          break;
        } catch (p) {
          Rc(e, p);
        }
      while (!0);
      Jo(),
        (Oi.current = o),
        (ke = l),
        Ge !== null ? (t = 0) : ((nt = null), (at = 0), (t = et));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = fo(e)), l !== 0 && ((r = l), (t = za(e, l)))),
        t === 1)
      )
        throw ((n = Pl), ur(e, 0), An(e, r), Et(e, Fe()), n);
      if (t === 6) An(e, r);
      else {
        if (
          ((l = e.current.alternate),
          !(r & 30) &&
            !ip(l) &&
            ((t = Vi(e, r)),
            t === 2 && ((o = fo(e)), o !== 0 && ((r = o), (t = za(e, o)))),
            t === 1))
        )
          throw ((n = Pl), ur(e, 0), An(e, r), Et(e, Fe()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(u(345));
          case 2:
            sr(e, St, vn);
            break;
          case 3:
            if (
              (An(e, r),
              (r & 130023424) === r && ((t = Ta + 500 - Fe()), 10 < t))
            ) {
              if (Zl(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                ht(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = $o(sr.bind(null, e, St, vn), t);
              break;
            }
            sr(e, St, vn);
            break;
          case 4:
            if ((An(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var s = 31 - Bt(r);
              (o = 1 << s), (s = t[s]), s > l && (l = s), (r &= ~o);
            }
            if (
              ((r = l),
              (r = Fe() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * lp(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = $o(sr.bind(null, e, St, vn), r);
              break;
            }
            sr(e, St, vn);
            break;
          case 5:
            sr(e, St, vn);
            break;
          default:
            throw Error(u(329));
        }
      }
    }
    return Et(e, Fe()), e.callbackNode === n ? kc.bind(null, e) : null;
  }
  function za(e, t) {
    var n = _l;
    return (
      e.current.memoizedState.isDehydrated && (ur(e, t).flags |= 256),
      (e = Vi(e, t)),
      e !== 2 && ((t = St), (St = n), t !== null && ja(t)),
      e
    );
  }
  function ja(e) {
    St === null ? (St = e) : St.push.apply(St, e);
  }
  function ip(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              o = l.getSnapshot;
            l = l.value;
            try {
              if (!Vt(o(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function An(e, t) {
    for (
      t &= ~Na,
        t &= ~Ii,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - Bt(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Cc(e) {
    if (ke & 6) throw Error(u(327));
    Br();
    var t = Zl(e, 0);
    if (!(t & 1)) return Et(e, Fe()), null;
    var n = Vi(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = fo(e);
      r !== 0 && ((t = r), (n = za(e, r)));
    }
    if (n === 1) throw ((n = Pl), ur(e, 0), An(e, t), Et(e, Fe()), n);
    if (n === 6) throw Error(u(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      sr(e, St, vn),
      Et(e, Fe()),
      null
    );
  }
  function Fa(e, t) {
    var n = ke;
    ke |= 1;
    try {
      return e(t);
    } finally {
      (ke = n), ke === 0 && ((Hr = Fe() + 500), vi && zn());
    }
  }
  function ar(e) {
    Un !== null && Un.tag === 0 && !(ke & 6) && Br();
    var t = ke;
    ke |= 1;
    var n = It.transition,
      r = Ne;
    try {
      if (((It.transition = null), (Ne = 1), e)) return e();
    } finally {
      (Ne = r), (It.transition = n), (ke = t), !(ke & 6) && zn();
    }
  }
  function Oa() {
    (Lt = Ar.current), Ue(Ar);
  }
  function ur(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Fd(n)), Ge !== null))
      for (n = Ge.return; n !== null; ) {
        var r = n;
        switch ((Qo(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && hi();
            break;
          case 3:
            Ir(), Ue(yt), Ue(st), la();
            break;
          case 5:
            na(r);
            break;
          case 4:
            Ir();
            break;
          case 13:
            Ue(He);
            break;
          case 19:
            Ue(He);
            break;
          case 10:
            Zo(r.type._context);
            break;
          case 22:
          case 23:
            Oa();
        }
        n = n.return;
      }
    if (
      ((nt = e),
      (Ge = e = Hn(e.current, null)),
      (at = Lt = t),
      (et = 0),
      (Pl = null),
      (Na = Ii = or = 0),
      (St = _l = null),
      rr !== null)
    ) {
      for (t = 0; t < rr.length; t++)
        if (((n = rr[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            o = n.pending;
          if (o !== null) {
            var s = o.next;
            (o.next = l), (r.next = s);
          }
          n.pending = r;
        }
      rr = null;
    }
    return e;
  }
  function Rc(e, t) {
    do {
      var n = Ge;
      try {
        if ((Jo(), (Pi.current = Ti), _i)) {
          for (var r = Be.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          _i = !1;
        }
        if (
          ((ir = 0),
          (tt = be = Be = null),
          (Sl = !1),
          (El = 0),
          (La.current = null),
          n === null || n.return === null)
        ) {
          (et = 1), (Pl = t), (Ge = null);
          break;
        }
        e: {
          var o = e,
            s = n.return,
            p = n,
            v = t;
          if (
            ((t = at),
            (p.flags |= 32768),
            v !== null && typeof v == "object" && typeof v.then == "function")
          ) {
            var P = v,
              U = p,
              H = U.tag;
            if (!(U.mode & 1) && (H === 0 || H === 11 || H === 15)) {
              var O = U.alternate;
              O
                ? ((U.updateQueue = O.updateQueue),
                  (U.memoizedState = O.memoizedState),
                  (U.lanes = O.lanes))
                : ((U.updateQueue = null), (U.memoizedState = null));
            }
            var Y = Js(s);
            if (Y !== null) {
              (Y.flags &= -257),
                Zs(Y, s, p, o, t),
                Y.mode & 1 && Gs(o, P, t),
                (t = Y),
                (v = P);
              var b = t.updateQueue;
              if (b === null) {
                var te = new Set();
                te.add(v), (t.updateQueue = te);
              } else b.add(v);
              break e;
            } else {
              if (!(t & 1)) {
                Gs(o, P, t), Ia();
                break e;
              }
              v = Error(u(426));
            }
          } else if ($e && p.mode & 1) {
            var Ke = Js(s);
            if (Ke !== null) {
              !(Ke.flags & 65536) && (Ke.flags |= 256),
                Zs(Ke, s, p, o, t),
                Xo(Ur(v, p));
              break e;
            }
          }
          (o = v = Ur(v, p)),
            et !== 4 && (et = 2),
            _l === null ? (_l = [o]) : _l.push(o),
            (o = s);
          do {
            switch (o.tag) {
              case 3:
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var k = Ys(o, v, t);
                Ss(o, k);
                break e;
              case 1:
                p = v;
                var w = o.type,
                  R = o.stateNode;
                if (
                  !(o.flags & 128) &&
                  (typeof w.getDerivedStateFromError == "function" ||
                    (R !== null &&
                      typeof R.componentDidCatch == "function" &&
                      (In === null || !In.has(R))))
                ) {
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var B = Xs(o, p, t);
                  Ss(o, B);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Lc(n);
      } catch (re) {
        (t = re), Ge === n && n !== null && (Ge = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Pc() {
    var e = Oi.current;
    return (Oi.current = Ti), e === null ? Ti : e;
  }
  function Ia() {
    (et === 0 || et === 3 || et === 2) && (et = 4),
      nt === null || (!(or & 268435455) && !(Ii & 268435455)) || An(nt, at);
  }
  function Vi(e, t) {
    var n = ke;
    ke |= 2;
    var r = Pc();
    (nt !== e || at !== t) && ((vn = null), ur(e, t));
    do
      try {
        op();
        break;
      } catch (l) {
        Rc(e, l);
      }
    while (!0);
    if ((Jo(), (ke = n), (Oi.current = r), Ge !== null)) throw Error(u(261));
    return (nt = null), (at = 0), et;
  }
  function op() {
    for (; Ge !== null; ) _c(Ge);
  }
  function ap() {
    for (; Ge !== null && !Zn(); ) _c(Ge);
  }
  function _c(e) {
    var t = Dc(e.alternate, e, Lt);
    (e.memoizedProps = e.pendingProps),
      t === null ? Lc(e) : (Ge = t),
      (La.current = null);
  }
  function Lc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = ep(n, t)), n !== null)) {
          (n.flags &= 32767), (Ge = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (et = 6), (Ge = null);
          return;
        }
      } else if (((n = bd(n, t, Lt)), n !== null)) {
        Ge = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Ge = t;
        return;
      }
      Ge = t = e;
    } while (t !== null);
    et === 0 && (et = 5);
  }
  function sr(e, t, n) {
    var r = Ne,
      l = It.transition;
    try {
      (It.transition = null), (Ne = 1), up(e, t, n, r);
    } finally {
      (It.transition = l), (Ne = r);
    }
    return null;
  }
  function up(e, t, n, r) {
    do Br();
    while (Un !== null);
    if (ke & 6) throw Error(u(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(u(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
      (Bf(e, o),
      e === nt && ((Ge = nt = null), (at = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        $i ||
        (($i = !0),
        Mc(un, function () {
          return Br(), null;
        })),
      (o = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || o)
    ) {
      (o = It.transition), (It.transition = null);
      var s = Ne;
      Ne = 1;
      var p = ke;
      (ke |= 4),
        (La.current = null),
        np(e, n),
        gc(n, e),
        Ld(Io),
        (ei = !!Oo),
        (Io = Oo = null),
        (e.current = n),
        rp(n),
        an(),
        (ke = p),
        (Ne = s),
        (It.transition = o);
    } else e.current = n;
    if (
      ($i && (($i = !1), (Un = e), (Ai = l)),
      (o = e.pendingLanes),
      o === 0 && (In = null),
      co(n.stateNode),
      Et(e, Fe()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Ui) throw ((Ui = !1), (e = Da), (Da = null), e);
    return (
      Ai & 1 && e.tag !== 0 && Br(),
      (o = e.pendingLanes),
      o & 1 ? (e === Ma ? Ll++ : ((Ll = 0), (Ma = e))) : (Ll = 0),
      zn(),
      null
    );
  }
  function Br() {
    if (Un !== null) {
      var e = vu(Ai),
        t = It.transition,
        n = Ne;
      try {
        if (((It.transition = null), (Ne = 16 > e ? 16 : e), Un === null))
          var r = !1;
        else {
          if (((e = Un), (Un = null), (Ai = 0), ke & 6)) throw Error(u(331));
          var l = ke;
          for (ke |= 4, J = e.current; J !== null; ) {
            var o = J,
              s = o.child;
            if (J.flags & 16) {
              var p = o.deletions;
              if (p !== null) {
                for (var v = 0; v < p.length; v++) {
                  var P = p[v];
                  for (J = P; J !== null; ) {
                    var U = J;
                    switch (U.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rl(8, U, o);
                    }
                    var H = U.child;
                    if (H !== null) (H.return = U), (J = H);
                    else
                      for (; J !== null; ) {
                        U = J;
                        var O = U.sibling,
                          Y = U.return;
                        if ((pc(U), U === P)) {
                          J = null;
                          break;
                        }
                        if (O !== null) {
                          (O.return = Y), (J = O);
                          break;
                        }
                        J = Y;
                      }
                  }
                }
                var b = o.alternate;
                if (b !== null) {
                  var te = b.child;
                  if (te !== null) {
                    b.child = null;
                    do {
                      var Ke = te.sibling;
                      (te.sibling = null), (te = Ke);
                    } while (te !== null);
                  }
                }
                J = o;
              }
            }
            if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (J = s);
            else
              e: for (; J !== null; ) {
                if (((o = J), o.flags & 2048))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rl(9, o, o.return);
                  }
                var k = o.sibling;
                if (k !== null) {
                  (k.return = o.return), (J = k);
                  break e;
                }
                J = o.return;
              }
          }
          var w = e.current;
          for (J = w; J !== null; ) {
            s = J;
            var R = s.child;
            if (s.subtreeFlags & 2064 && R !== null) (R.return = s), (J = R);
            else
              e: for (s = w; J !== null; ) {
                if (((p = J), p.flags & 2048))
                  try {
                    switch (p.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Fi(9, p);
                    }
                  } catch (re) {
                    We(p, p.return, re);
                  }
                if (p === s) {
                  J = null;
                  break e;
                }
                var B = p.sibling;
                if (B !== null) {
                  (B.return = p.return), (J = B);
                  break e;
                }
                J = p.return;
              }
          }
          if (
            ((ke = l),
            zn(),
            Ct && typeof Ct.onPostCommitFiberRoot == "function")
          )
            try {
              Ct.onPostCommitFiberRoot(Ht, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (Ne = n), (It.transition = t);
      }
    }
    return !1;
  }
  function Nc(e, t, n) {
    (t = Ur(n, t)),
      (t = Ys(e, t, 1)),
      (e = Fn(e, t, 1)),
      (t = ht()),
      e !== null && (qr(e, 1, t), Et(e, t));
  }
  function We(e, t, n) {
    if (e.tag === 3) Nc(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Nc(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (In === null || !In.has(r)))
          ) {
            (e = Ur(n, e)),
              (e = Xs(t, e, 1)),
              (t = Fn(t, e, 1)),
              (e = ht()),
              t !== null && (qr(t, 1, e), Et(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function sp(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = ht()),
      (e.pingedLanes |= e.suspendedLanes & n),
      nt === e &&
        (at & n) === n &&
        (et === 4 || (et === 3 && (at & 130023424) === at && 500 > Fe() - Ta)
          ? ur(e, 0)
          : (Na |= n)),
      Et(e, t);
  }
  function Tc(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Jl), (Jl <<= 1), !(Jl & 130023424) && (Jl = 4194304))
        : (t = 1));
    var n = ht();
    (e = pn(e, t)), e !== null && (qr(e, t, n), Et(e, n));
  }
  function cp(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Tc(e, n);
  }
  function fp(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(u(314));
    }
    r !== null && r.delete(t), Tc(e, n);
  }
  var Dc;
  Dc = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || yt.current) wt = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (wt = !1), qd(e, t, n);
        wt = !!(e.flags & 131072);
      }
    else (wt = !1), $e && t.flags & 1048576 && cs(t, gi, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        zi(e, t), (e = t.pendingProps);
        var l = Tr(t, st.current);
        Or(t, n), (l = aa(null, t, r, e, l, n));
        var o = ua();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              gt(r) ? ((o = !0), mi(t)) : (o = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              ea(t),
              (l.updater = Di),
              (t.stateNode = l),
              (l._reactInternals = t),
              ha(t, r, e, n),
              (t = ga(null, t, r, !0, o, n)))
            : ((t.tag = 0), $e && o && Wo(t), pt(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (zi(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = pp(r)),
            (e = Qt(r, e)),
            l)
          ) {
            case 0:
              t = ya(null, t, r, e, n);
              break e;
            case 1:
              t = rc(null, t, r, e, n);
              break e;
            case 11:
              t = qs(null, t, r, e, n);
              break e;
            case 14:
              t = bs(null, t, r, Qt(r.type, e), n);
              break e;
          }
          throw Error(u(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Qt(r, l)),
          ya(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Qt(r, l)),
          rc(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((lc(t), e === null)) throw Error(u(387));
          (r = t.pendingProps),
            (o = t.memoizedState),
            (l = o.element),
            ws(e, t),
            Ci(t, r, null, n);
          var s = t.memoizedState;
          if (((r = s.element), o.isDehydrated))
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: s.cache,
                pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                transitions: s.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              (l = Ur(Error(u(423)), t)), (t = ic(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = Ur(Error(u(424)), t)), (t = ic(e, t, r, n, l));
              break e;
            } else
              for (
                _t = Tn(t.stateNode.containerInfo.firstChild),
                  Pt = t,
                  $e = !0,
                  Wt = null,
                  n = ys(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((zr(), r === l)) {
              t = mn(e, t, n);
              break e;
            }
            pt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          xs(t),
          e === null && Yo(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (s = l.children),
          Uo(r, l) ? (s = null) : o !== null && Uo(r, o) && (t.flags |= 32),
          nc(e, t),
          pt(e, t, s, n),
          t.child
        );
      case 6:
        return e === null && Yo(t), null;
      case 13:
        return oc(e, t, n);
      case 4:
        return (
          ta(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = jr(t, null, r, n)) : pt(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Qt(r, l)),
          qs(e, t, r, l, n)
        );
      case 7:
        return pt(e, t, t.pendingProps, n), t.child;
      case 8:
        return pt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return pt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (s = l.value),
            Oe(Ei, r._currentValue),
            (r._currentValue = s),
            o !== null)
          )
            if (Vt(o.value, s)) {
              if (o.children === l.children && !yt.current) {
                t = mn(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var p = o.dependencies;
                if (p !== null) {
                  s = o.child;
                  for (var v = p.firstContext; v !== null; ) {
                    if (v.context === r) {
                      if (o.tag === 1) {
                        (v = hn(-1, n & -n)), (v.tag = 2);
                        var P = o.updateQueue;
                        if (P !== null) {
                          P = P.shared;
                          var U = P.pending;
                          U === null
                            ? (v.next = v)
                            : ((v.next = U.next), (U.next = v)),
                            (P.pending = v);
                        }
                      }
                      (o.lanes |= n),
                        (v = o.alternate),
                        v !== null && (v.lanes |= n),
                        qo(o.return, n, t),
                        (p.lanes |= n);
                      break;
                    }
                    v = v.next;
                  }
                } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((s = o.return), s === null)) throw Error(u(341));
                  (s.lanes |= n),
                    (p = s.alternate),
                    p !== null && (p.lanes |= n),
                    qo(s, n, t),
                    (s = o.sibling);
                } else s = o.child;
                if (s !== null) s.return = o;
                else
                  for (s = o; s !== null; ) {
                    if (s === t) {
                      s = null;
                      break;
                    }
                    if (((o = s.sibling), o !== null)) {
                      (o.return = s.return), (s = o);
                      break;
                    }
                    s = s.return;
                  }
                o = s;
              }
          pt(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Or(t, n),
          (l = Ft(l)),
          (r = r(l)),
          (t.flags |= 1),
          pt(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = Qt(r, t.pendingProps)),
          (l = Qt(r.type, l)),
          bs(e, t, r, l, n)
        );
      case 15:
        return ec(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Qt(r, l)),
          zi(e, t),
          (t.tag = 1),
          gt(r) ? ((e = !0), mi(t)) : (e = !1),
          Or(t, n),
          Qs(t, r, l),
          ha(t, r, l, n),
          ga(null, t, r, !0, e, n)
        );
      case 19:
        return uc(e, t, n);
      case 22:
        return tc(e, t, n);
    }
    throw Error(u(156, t.tag));
  };
  function Mc(e, t) {
    return kt(e, t);
  }
  function dp(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Ut(e, t, n, r) {
    return new dp(e, t, n, r);
  }
  function Ua(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function pp(e) {
    if (typeof e == "function") return Ua(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === it)) return 11;
      if (e === Te) return 14;
    }
    return 2;
  }
  function Hn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Ut(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Wi(e, t, n, r, l, o) {
    var s = 2;
    if (((r = e), typeof e == "function")) Ua(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else
      e: switch (e) {
        case he:
          return cr(n.children, l, o, t);
        case oe:
          (s = 8), (l |= 8);
          break;
        case we:
          return (
            (e = Ut(12, n, t, l | 2)), (e.elementType = we), (e.lanes = o), e
          );
        case Qe:
          return (e = Ut(13, n, t, l)), (e.elementType = Qe), (e.lanes = o), e;
        case ut:
          return (e = Ut(19, n, t, l)), (e.elementType = ut), (e.lanes = o), e;
        case De:
          return Qi(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Re:
                s = 10;
                break e;
              case Ye:
                s = 9;
                break e;
              case it:
                s = 11;
                break e;
              case Te:
                s = 14;
                break e;
              case Je:
                (s = 16), (r = null);
                break e;
            }
          throw Error(u(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = Ut(s, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
    );
  }
  function cr(e, t, n, r) {
    return (e = Ut(7, e, r, t)), (e.lanes = n), e;
  }
  function Qi(e, t, n, r) {
    return (
      (e = Ut(22, e, r, t)),
      (e.elementType = De),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function $a(e, t, n) {
    return (e = Ut(6, e, null, t)), (e.lanes = n), e;
  }
  function Aa(e, t, n) {
    return (
      (t = Ut(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function hp(e, t, n, r, l) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = po(0)),
      (this.expirationTimes = po(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = po(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Ha(e, t, n, r, l, o, s, p, v) {
    return (
      (e = new hp(e, t, n, p, v)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = Ut(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      ea(o),
      e
    );
  }
  function mp(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ie,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function zc(e) {
    if (!e) return Mn;
    e = e._reactInternals;
    e: {
      if (_e(e) !== e || e.tag !== 1) throw Error(u(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (gt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(u(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (gt(n)) return as(e, n, t);
    }
    return t;
  }
  function jc(e, t, n, r, l, o, s, p, v) {
    return (
      (e = Ha(n, r, !0, e, l, o, s, p, v)),
      (e.context = zc(null)),
      (n = e.current),
      (r = ht()),
      (l = $n(n)),
      (o = hn(r, l)),
      (o.callback = t ?? null),
      Fn(n, o, l),
      (e.current.lanes = l),
      qr(e, l, r),
      Et(e, r),
      e
    );
  }
  function Ki(e, t, n, r) {
    var l = t.current,
      o = ht(),
      s = $n(l);
    return (
      (n = zc(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = hn(o, s)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Fn(l, t, s)),
      e !== null && (Xt(e, l, s, o), ki(e, l, s)),
      s
    );
  }
  function Yi(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Fc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ba(e, t) {
    Fc(e, t), (e = e.alternate) && Fc(e, t);
  }
  var Oc =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Va(e) {
    this._internalRoot = e;
  }
  (Xi.prototype.render = Va.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(u(409));
      Ki(e, t, null, null);
    }),
    (Xi.prototype.unmount = Va.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          ar(function () {
            Ki(null, e, null, null);
          }),
            (t[sn] = null);
        }
      });
  function Xi(e) {
    this._internalRoot = e;
  }
  Xi.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = wu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < _n.length && t !== 0 && t < _n[n].priority; n++);
      _n.splice(n, 0, e), n === 0 && xu(e);
    }
  };
  function Wa(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Gi(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Ic() {}
  function vp(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function () {
          var P = Yi(s);
          o.call(P);
        };
      }
      var s = jc(t, r, e, 0, null, !1, !1, "", Ic);
      return (
        (e._reactRootContainer = s),
        (e[sn] = s.current),
        dl(e.nodeType === 8 ? e.parentNode : e),
        ar(),
        s
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var p = r;
      r = function () {
        var P = Yi(v);
        p.call(P);
      };
    }
    var v = Ha(e, 0, !1, null, null, !1, !1, "", Ic);
    return (
      (e._reactRootContainer = v),
      (e[sn] = v.current),
      dl(e.nodeType === 8 ? e.parentNode : e),
      ar(function () {
        Ki(t, v, n, r);
      }),
      v
    );
  }
  function Ji(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var s = o;
      if (typeof l == "function") {
        var p = l;
        l = function () {
          var v = Yi(s);
          p.call(v);
        };
      }
      Ki(t, s, e, l);
    } else s = vp(n, t, e, l, r);
    return Yi(s);
  }
  (yu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Zr(t.pendingLanes);
          n !== 0 &&
            (ho(t, n | 1), Et(t, Fe()), !(ke & 6) && ((Hr = Fe() + 500), zn()));
        }
        break;
      case 13:
        ar(function () {
          var r = pn(e, 1);
          if (r !== null) {
            var l = ht();
            Xt(r, e, 1, l);
          }
        }),
          Ba(e, 1);
    }
  }),
    (mo = function (e) {
      if (e.tag === 13) {
        var t = pn(e, 134217728);
        if (t !== null) {
          var n = ht();
          Xt(t, e, 134217728, n);
        }
        Ba(e, 134217728);
      }
    }),
    (gu = function (e) {
      if (e.tag === 13) {
        var t = $n(e),
          n = pn(e, t);
        if (n !== null) {
          var r = ht();
          Xt(n, e, t, r);
        }
        Ba(e, t);
      }
    }),
    (wu = function () {
      return Ne;
    }),
    (Su = function (e, t) {
      var n = Ne;
      try {
        return (Ne = e), t();
      } finally {
        Ne = n;
      }
    }),
    (gr = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Kr(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = pi(r);
                if (!l) throw Error(u(90));
                Al(r), Kr(r, l);
              }
            }
          }
          break;
        case "textarea":
          mr(e, n);
          break;
        case "select":
          (t = n.value), t != null && mt(e, !!n.multiple, t, !1);
      }
    }),
    (Xl = Fa),
    (g = ar);
  var yp = { usingClientEntryPoint: !1, Events: [ml, Lr, pi, Jn, Yl, Fa] },
    Nl = {
      findFiberByHostInstance: bn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    gp = {
      bundleType: Nl.bundleType,
      version: Nl.version,
      rendererPackageName: Nl.rendererPackageName,
      rendererConfig: Nl.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: se.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = kn(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Nl.findFiberByHostInstance,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Zi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zi.isDisabled && Zi.supportsFiber)
      try {
        (Ht = Zi.inject(gp)), (Ct = Zi);
      } catch {}
  }
  return (
    (xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yp),
    (xt.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Wa(t)) throw Error(u(200));
      return mp(e, t, null, n);
    }),
    (xt.createRoot = function (e, t) {
      if (!Wa(e)) throw Error(u(299));
      var n = !1,
        r = "",
        l = Oc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Ha(e, 1, !1, null, null, n, !1, r, l)),
        (e[sn] = t.current),
        dl(e.nodeType === 8 ? e.parentNode : e),
        new Va(t)
      );
    }),
    (xt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(u(188))
          : ((e = Object.keys(e).join(",")), Error(u(268, e)));
      return (e = kn(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (xt.flushSync = function (e) {
      return ar(e);
    }),
    (xt.hydrate = function (e, t, n) {
      if (!Gi(t)) throw Error(u(200));
      return Ji(null, e, t, !0, n);
    }),
    (xt.hydrateRoot = function (e, t, n) {
      if (!Wa(e)) throw Error(u(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = "",
        s = Oc;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
        (t = jc(t, null, e, 1, n ?? null, l, !1, o, s)),
        (e[sn] = t.current),
        dl(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l);
      return new Xi(t);
    }),
    (xt.render = function (e, t, n) {
      if (!Gi(t)) throw Error(u(200));
      return Ji(null, e, t, !1, n);
    }),
    (xt.unmountComponentAtNode = function (e) {
      if (!Gi(e)) throw Error(u(40));
      return e._reactRootContainer
        ? (ar(function () {
            Ji(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[sn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (xt.unstable_batchedUpdates = Fa),
    (xt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Gi(n)) throw Error(u(200));
      if (e == null || e._reactInternals === void 0) throw Error(u(38));
      return Ji(e, t, n, !1, r);
    }),
    (xt.version = "18.3.1-next-f1338f8080-20240426"),
    xt
  );
}
var Qc;
function vf() {
  if (Qc) return Ya.exports;
  Qc = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (a) {
        console.error(a);
      }
  }
  return i(), (Ya.exports = Rp()), Ya.exports;
}
var Kc;
function Pp() {
  if (Kc) return qi;
  Kc = 1;
  var i = vf();
  return (qi.createRoot = i.createRoot), (qi.hydrateRoot = i.hydrateRoot), qi;
}
var _p = Pp(),
  Dl = {},
  Yc;
function Lp() {
  if (Yc) return Dl;
  (Yc = 1),
    Object.defineProperty(Dl, "__esModule", { value: !0 }),
    (Dl.parse = h),
    (Dl.serialize = S);
  const i = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    a = /^[\u0021-\u003A\u003C-\u007E]*$/,
    u =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    f = /^[\u0020-\u003A\u003D-\u007E]*$/,
    c = Object.prototype.toString,
    d = (() => {
      const _ = function () {};
      return (_.prototype = Object.create(null)), _;
    })();
  function h(_, D) {
    const z = new d(),
      $ = _.length;
    if ($ < 2) return z;
    const A = (D == null ? void 0 : D.decode) || N;
    let M = 0;
    do {
      const q = _.indexOf("=", M);
      if (q === -1) break;
      const Z = _.indexOf(";", M),
        se = Z === -1 ? $ : Z;
      if (q > se) {
        M = _.lastIndexOf(";", q - 1) + 1;
        continue;
      }
      const C = y(_, M, q),
        ie = m(_, q, C),
        he = _.slice(C, ie);
      if (z[he] === void 0) {
        let oe = y(_, q + 1, se),
          we = m(_, se, oe);
        const Re = A(_.slice(oe, we));
        z[he] = Re;
      }
      M = se + 1;
    } while (M < $);
    return z;
  }
  function y(_, D, z) {
    do {
      const $ = _.charCodeAt(D);
      if ($ !== 32 && $ !== 9) return D;
    } while (++D < z);
    return z;
  }
  function m(_, D, z) {
    for (; D > z; ) {
      const $ = _.charCodeAt(--D);
      if ($ !== 32 && $ !== 9) return D + 1;
    }
    return z;
  }
  function S(_, D, z) {
    const $ = (z == null ? void 0 : z.encode) || encodeURIComponent;
    if (!i.test(_)) throw new TypeError(`argument name is invalid: ${_}`);
    const A = $(D);
    if (!a.test(A)) throw new TypeError(`argument val is invalid: ${D}`);
    let M = _ + "=" + A;
    if (!z) return M;
    if (z.maxAge !== void 0) {
      if (!Number.isInteger(z.maxAge))
        throw new TypeError(`option maxAge is invalid: ${z.maxAge}`);
      M += "; Max-Age=" + z.maxAge;
    }
    if (z.domain) {
      if (!u.test(z.domain))
        throw new TypeError(`option domain is invalid: ${z.domain}`);
      M += "; Domain=" + z.domain;
    }
    if (z.path) {
      if (!f.test(z.path))
        throw new TypeError(`option path is invalid: ${z.path}`);
      M += "; Path=" + z.path;
    }
    if (z.expires) {
      if (!j(z.expires) || !Number.isFinite(z.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${z.expires}`);
      M += "; Expires=" + z.expires.toUTCString();
    }
    if (
      (z.httpOnly && (M += "; HttpOnly"),
      z.secure && (M += "; Secure"),
      z.partitioned && (M += "; Partitioned"),
      z.priority)
    )
      switch (
        typeof z.priority == "string" ? z.priority.toLowerCase() : void 0
      ) {
        case "low":
          M += "; Priority=Low";
          break;
        case "medium":
          M += "; Priority=Medium";
          break;
        case "high":
          M += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${z.priority}`);
      }
    if (z.sameSite)
      switch (
        typeof z.sameSite == "string" ? z.sameSite.toLowerCase() : z.sameSite
      ) {
        case !0:
        case "strict":
          M += "; SameSite=Strict";
          break;
        case "lax":
          M += "; SameSite=Lax";
          break;
        case "none":
          M += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${z.sameSite}`);
      }
    return M;
  }
  function N(_) {
    if (_.indexOf("%") === -1) return _;
    try {
      return decodeURIComponent(_);
    } catch {
      return _;
    }
  }
  function j(_) {
    return c.call(_) === "[object Date]";
  }
  return Dl;
}
Lp();
/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Xc = "popstate";
function Np(i = {}) {
  function a(c, d) {
    let {
      pathname: h = "/",
      search: y = "",
      hash: m = "",
    } = yn(c.location.hash.substring(1));
    return (
      !h.startsWith("/") && !h.startsWith(".") && (h = "/" + h),
      Ol(
        "",
        { pathname: h, search: y, hash: m },
        (d.state && d.state.usr) || null,
        (d.state && d.state.key) || "default"
      )
    );
  }
  function u(c, d) {
    let h = c.document.querySelector("base"),
      y = "";
    if (h && h.getAttribute("href")) {
      let m = c.location.href,
        S = m.indexOf("#");
      y = S === -1 ? m : m.slice(0, S);
    }
    return y + "#" + (typeof d == "string" ? d : Qn(d));
  }
  function f(c, d) {
    lt(
      c.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(
        d
      )})`
    );
  }
  return Dp(a, u, f, i);
}
function Ee(i, a) {
  if (i === !1 || i === null || typeof i > "u") throw new Error(a);
}
function lt(i, a) {
  if (!i) {
    typeof console < "u" && console.warn(a);
    try {
      throw new Error(a);
    } catch {}
  }
}
function Tp() {
  return Math.random().toString(36).substring(2, 10);
}
function Gc(i, a) {
  return { usr: i.state, key: i.key, idx: a };
}
function Ol(i, a, u = null, f) {
  return {
    pathname: typeof i == "string" ? i : i.pathname,
    search: "",
    hash: "",
    ...(typeof a == "string" ? yn(a) : a),
    state: u,
    key: (a && a.key) || f || Tp(),
  };
}
function Qn({ pathname: i = "/", search: a = "", hash: u = "" }) {
  return (
    a && a !== "?" && (i += a.charAt(0) === "?" ? a : "?" + a),
    u && u !== "#" && (i += u.charAt(0) === "#" ? u : "#" + u),
    i
  );
}
function yn(i) {
  let a = {};
  if (i) {
    let u = i.indexOf("#");
    u >= 0 && ((a.hash = i.substring(u)), (i = i.substring(0, u)));
    let f = i.indexOf("?");
    f >= 0 && ((a.search = i.substring(f)), (i = i.substring(0, f))),
      i && (a.pathname = i);
  }
  return a;
}
function Dp(i, a, u, f = {}) {
  let { window: c = document.defaultView, v5Compat: d = !1 } = f,
    h = c.history,
    y = "POP",
    m = null,
    S = N();
  S == null && ((S = 0), h.replaceState({ ...h.state, idx: S }, ""));
  function N() {
    return (h.state || { idx: null }).idx;
  }
  function j() {
    y = "POP";
    let A = N(),
      M = A == null ? null : A - S;
    (S = A), m && m({ action: y, location: $.location, delta: M });
  }
  function _(A, M) {
    y = "PUSH";
    let q = Ol($.location, A, M);
    u(q, A), (S = N() + 1);
    let Z = Gc(q, S),
      se = $.createHref(q);
    try {
      h.pushState(Z, "", se);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      c.location.assign(se);
    }
    d && m && m({ action: y, location: $.location, delta: 1 });
  }
  function D(A, M) {
    y = "REPLACE";
    let q = Ol($.location, A, M);
    u(q, A), (S = N());
    let Z = Gc(q, S),
      se = $.createHref(q);
    h.replaceState(Z, "", se),
      d && m && m({ action: y, location: $.location, delta: 0 });
  }
  function z(A) {
    let M = c.location.origin !== "null" ? c.location.origin : c.location.href,
      q = typeof A == "string" ? A : Qn(A);
    return (
      (q = q.replace(/ $/, "%20")),
      Ee(
        M,
        `No window.location.(origin|href) available to create URL for href: ${q}`
      ),
      new URL(q, M)
    );
  }
  let $ = {
    get action() {
      return y;
    },
    get location() {
      return i(c, h);
    },
    listen(A) {
      if (m) throw new Error("A history only accepts one active listener");
      return (
        c.addEventListener(Xc, j),
        (m = A),
        () => {
          c.removeEventListener(Xc, j), (m = null);
        }
      );
    },
    createHref(A) {
      return a(c, A);
    },
    createURL: z,
    encodeLocation(A) {
      let M = z(A);
      return { pathname: M.pathname, search: M.search, hash: M.hash };
    },
    push: _,
    replace: D,
    go(A) {
      return h.go(A);
    },
  };
  return $;
}
var Mp = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function zp(i) {
  return i.index === !0;
}
function lo(i, a, u = [], f = {}) {
  return i.map((c, d) => {
    let h = [...u, String(d)],
      y = typeof c.id == "string" ? c.id : h.join("-");
    if (
      (Ee(
        c.index !== !0 || !c.children,
        "Cannot specify children on an index route"
      ),
      Ee(
        !f[y],
        `Found a route id collision on id "${y}".  Route id's must be globally unique within Data Router usages`
      ),
      zp(c))
    ) {
      let m = { ...c, ...a(c), id: y };
      return (f[y] = m), m;
    } else {
      let m = { ...c, ...a(c), id: y, children: void 0 };
      return (
        (f[y] = m), c.children && (m.children = lo(c.children, a, h, f)), m
      );
    }
  });
}
function Wn(i, a, u = "/") {
  return to(i, a, u, !1);
}
function to(i, a, u, f) {
  let c = typeof a == "string" ? yn(a) : a,
    d = Jt(c.pathname || "/", u);
  if (d == null) return null;
  let h = yf(i);
  Fp(h);
  let y = null;
  for (let m = 0; y == null && m < h.length; ++m) {
    let S = Kp(d);
    y = Wp(h[m], S, f);
  }
  return y;
}
function jp(i, a) {
  let { route: u, pathname: f, params: c } = i;
  return { id: u.id, pathname: f, params: c, data: a[u.id], handle: u.handle };
}
function yf(i, a = [], u = [], f = "") {
  let c = (d, h, y) => {
    let m = {
      relativePath: y === void 0 ? d.path || "" : y,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: h,
      route: d,
    };
    m.relativePath.startsWith("/") &&
      (Ee(
        m.relativePath.startsWith(f),
        `Absolute route path "${m.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (m.relativePath = m.relativePath.slice(f.length)));
    let S = tn([f, m.relativePath]),
      N = u.concat(m);
    d.children &&
      d.children.length > 0 &&
      (Ee(
        d.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${S}".`
      ),
      yf(d.children, a, N, S)),
      !(d.path == null && !d.index) &&
        a.push({ path: S, score: Bp(S, d.index), routesMeta: N });
  };
  return (
    i.forEach((d, h) => {
      var y;
      if (d.path === "" || !((y = d.path) != null && y.includes("?"))) c(d, h);
      else for (let m of gf(d.path)) c(d, h, m);
    }),
    a
  );
}
function gf(i) {
  let a = i.split("/");
  if (a.length === 0) return [];
  let [u, ...f] = a,
    c = u.endsWith("?"),
    d = u.replace(/\?$/, "");
  if (f.length === 0) return c ? [d, ""] : [d];
  let h = gf(f.join("/")),
    y = [];
  return (
    y.push(...h.map((m) => (m === "" ? d : [d, m].join("/")))),
    c && y.push(...h),
    y.map((m) => (i.startsWith("/") && m === "" ? "/" : m))
  );
}
function Fp(i) {
  i.sort((a, u) =>
    a.score !== u.score
      ? u.score - a.score
      : Vp(
          a.routesMeta.map((f) => f.childrenIndex),
          u.routesMeta.map((f) => f.childrenIndex)
        )
  );
}
var Op = /^:[\w-]+$/,
  Ip = 3,
  Up = 2,
  $p = 1,
  Ap = 10,
  Hp = -2,
  Jc = (i) => i === "*";
function Bp(i, a) {
  let u = i.split("/"),
    f = u.length;
  return (
    u.some(Jc) && (f += Hp),
    a && (f += Up),
    u
      .filter((c) => !Jc(c))
      .reduce((c, d) => c + (Op.test(d) ? Ip : d === "" ? $p : Ap), f)
  );
}
function Vp(i, a) {
  return i.length === a.length && i.slice(0, -1).every((f, c) => f === a[c])
    ? i[i.length - 1] - a[a.length - 1]
    : 0;
}
function Wp(i, a, u = !1) {
  let { routesMeta: f } = i,
    c = {},
    d = "/",
    h = [];
  for (let y = 0; y < f.length; ++y) {
    let m = f[y],
      S = y === f.length - 1,
      N = d === "/" ? a : a.slice(d.length) || "/",
      j = io(
        { path: m.relativePath, caseSensitive: m.caseSensitive, end: S },
        N
      ),
      _ = m.route;
    if (
      (!j &&
        S &&
        u &&
        !f[f.length - 1].route.index &&
        (j = io(
          { path: m.relativePath, caseSensitive: m.caseSensitive, end: !1 },
          N
        )),
      !j)
    )
      return null;
    Object.assign(c, j.params),
      h.push({
        params: c,
        pathname: tn([d, j.pathname]),
        pathnameBase: Gp(tn([d, j.pathnameBase])),
        route: _,
      }),
      j.pathnameBase !== "/" && (d = tn([d, j.pathnameBase]));
  }
  return h;
}
function io(i, a) {
  typeof i == "string" && (i = { path: i, caseSensitive: !1, end: !0 });
  let [u, f] = Qp(i.path, i.caseSensitive, i.end),
    c = a.match(u);
  if (!c) return null;
  let d = c[0],
    h = d.replace(/(.)\/+$/, "$1"),
    y = c.slice(1);
  return {
    params: f.reduce((S, { paramName: N, isOptional: j }, _) => {
      if (N === "*") {
        let z = y[_] || "";
        h = d.slice(0, d.length - z.length).replace(/(.)\/+$/, "$1");
      }
      const D = y[_];
      return (
        j && !D ? (S[N] = void 0) : (S[N] = (D || "").replace(/%2F/g, "/")), S
      );
    }, {}),
    pathname: d,
    pathnameBase: h,
    pattern: i,
  };
}
function Qp(i, a = !1, u = !0) {
  lt(
    i === "*" || !i.endsWith("*") || i.endsWith("/*"),
    `Route path "${i}" will be treated as if it were "${i.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let f = [],
    c =
      "^" +
      i
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (h, y, m) => (
            f.push({ paramName: y, isOptional: m != null }),
            m ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    i.endsWith("*")
      ? (f.push({ paramName: "*" }),
        (c += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : u
      ? (c += "\\/*$")
      : i !== "" && i !== "/" && (c += "(?:(?=\\/|$))"),
    [new RegExp(c, a ? void 0 : "i"), f]
  );
}
function Kp(i) {
  try {
    return i
      .split("/")
      .map((a) => decodeURIComponent(a).replace(/\//g, "%2F"))
      .join("/");
  } catch (a) {
    return (
      lt(
        !1,
        `The URL path "${i}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`
      ),
      i
    );
  }
}
function Jt(i, a) {
  if (a === "/") return i;
  if (!i.toLowerCase().startsWith(a.toLowerCase())) return null;
  let u = a.endsWith("/") ? a.length - 1 : a.length,
    f = i.charAt(u);
  return f && f !== "/" ? null : i.slice(u) || "/";
}
function Yp(i, a = "/") {
  let {
    pathname: u,
    search: f = "",
    hash: c = "",
  } = typeof i == "string" ? yn(i) : i;
  return {
    pathname: u ? (u.startsWith("/") ? u : Xp(u, a)) : a,
    search: Jp(f),
    hash: Zp(c),
  };
}
function Xp(i, a) {
  let u = a.replace(/\/+$/, "").split("/");
  return (
    i.split("/").forEach((c) => {
      c === ".." ? u.length > 1 && u.pop() : c !== "." && u.push(c);
    }),
    u.length > 1 ? u.join("/") : "/"
  );
}
function Ja(i, a, u, f) {
  return `Cannot include a '${i}' character in a manually specified \`to.${a}\` field [${JSON.stringify(
    f
  )}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function wf(i) {
  return i.filter(
    (a, u) => u === 0 || (a.route.path && a.route.path.length > 0)
  );
}
function lu(i) {
  let a = wf(i);
  return a.map((u, f) => (f === a.length - 1 ? u.pathname : u.pathnameBase));
}
function iu(i, a, u, f = !1) {
  let c;
  typeof i == "string"
    ? (c = yn(i))
    : ((c = { ...i }),
      Ee(
        !c.pathname || !c.pathname.includes("?"),
        Ja("?", "pathname", "search", c)
      ),
      Ee(
        !c.pathname || !c.pathname.includes("#"),
        Ja("#", "pathname", "hash", c)
      ),
      Ee(!c.search || !c.search.includes("#"), Ja("#", "search", "hash", c)));
  let d = i === "" || c.pathname === "",
    h = d ? "/" : c.pathname,
    y;
  if (h == null) y = u;
  else {
    let j = a.length - 1;
    if (!f && h.startsWith("..")) {
      let _ = h.split("/");
      for (; _[0] === ".."; ) _.shift(), (j -= 1);
      c.pathname = _.join("/");
    }
    y = j >= 0 ? a[j] : "/";
  }
  let m = Yp(c, y),
    S = h && h !== "/" && h.endsWith("/"),
    N = (d || h === ".") && u.endsWith("/");
  return !m.pathname.endsWith("/") && (S || N) && (m.pathname += "/"), m;
}
var tn = (i) => i.join("/").replace(/\/\/+/g, "/"),
  Gp = (i) => i.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Jp = (i) => (!i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i),
  Zp = (i) => (!i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i),
  oo = class {
    constructor(i, a, u, f = !1) {
      (this.status = i),
        (this.statusText = a || ""),
        (this.internal = f),
        u instanceof Error
          ? ((this.data = u.toString()), (this.error = u))
          : (this.data = u);
    }
  };
function ao(i) {
  return (
    i != null &&
    typeof i.status == "number" &&
    typeof i.statusText == "string" &&
    typeof i.internal == "boolean" &&
    "data" in i
  );
}
var Sf = ["POST", "PUT", "PATCH", "DELETE"],
  qp = new Set(Sf),
  bp = ["GET", ...Sf],
  eh = new Set(bp),
  th = new Set([301, 302, 303, 307, 308]),
  nh = new Set([307, 308]),
  Za = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  rh = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Ml = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  ou = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  lh = (i) => ({ hasErrorBoundary: !!i.hasErrorBoundary }),
  Ef = "remix-router-transitions",
  xf = Symbol("ResetLoaderData");
function ih(i) {
  const a = i.window ? i.window : typeof window < "u" ? window : void 0,
    u =
      typeof a < "u" &&
      typeof a.document < "u" &&
      typeof a.document.createElement < "u";
  Ee(
    i.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let f = i.mapRouteProperties || lh,
    c = {},
    d = lo(i.routes, f, void 0, c),
    h,
    y = i.basename || "/",
    m = i.dataStrategy || ch,
    S = i.patchRoutesOnNavigation,
    N = { ...i.future },
    j = null,
    _ = new Set(),
    D = null,
    z = null,
    $ = null,
    A = i.hydrationData != null,
    M = Wn(d, i.history.location, y),
    q = null;
  if (M == null && !S) {
    let g = $t(404, { pathname: i.history.location.pathname }),
      { matches: x, route: L } = uf(d);
    (M = x), (q = { [L.id]: g });
  }
  M &&
    !i.hydrationData &&
    Gn(M, d, i.history.location.pathname).active &&
    (M = null);
  let Z;
  if (M)
    if (M.some((g) => g.route.lazy)) Z = !1;
    else if (!M.some((g) => g.route.loader)) Z = !0;
    else {
      let g = i.hydrationData ? i.hydrationData.loaderData : null,
        x = i.hydrationData ? i.hydrationData.errors : null;
      if (x) {
        let L = M.findIndex((I) => x[I.route.id] !== void 0);
        Z = M.slice(0, L + 1).every((I) => !tu(I.route, g, x));
      } else Z = M.every((L) => !tu(L.route, g, x));
    }
  else {
    (Z = !1), (M = []);
    let g = Gn(null, d, i.history.location.pathname);
    g.active && g.matches && (M = g.matches);
  }
  let se,
    C = {
      historyAction: i.history.action,
      location: i.history.location,
      matches: M,
      initialized: Z,
      navigation: Za,
      restoreScrollPosition: i.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (i.hydrationData && i.hydrationData.loaderData) || {},
      actionData: (i.hydrationData && i.hydrationData.actionData) || null,
      errors: (i.hydrationData && i.hydrationData.errors) || q,
      fetchers: new Map(),
      blockers: new Map(),
    },
    ie = "POP",
    he = !1,
    oe,
    we = !1,
    Re = new Map(),
    Ye = null,
    it = !1,
    Qe = !1,
    ut = new Set(),
    Te = new Map(),
    Je = 0,
    De = -1,
    V = new Map(),
    le = new Set(),
    K = new Map(),
    E = new Map(),
    F = new Set(),
    ce = new Map(),
    me,
    ve = null;
  function xe() {
    if (
      ((j = i.history.listen(({ action: g, location: x, delta: L }) => {
        if (me) {
          me(), (me = void 0);
          return;
        }
        lt(
          ce.size === 0 || L != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let I = yr({
          currentLocation: C.location,
          nextLocation: x,
          historyAction: g,
        });
        if (I && L != null) {
          let G = new Promise((ne) => {
            me = ne;
          });
          i.history.go(L * -1),
            Sn(I, {
              state: "blocked",
              location: x,
              proceed() {
                Sn(I, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: x,
                }),
                  G.then(() => i.history.go(L));
              },
              reset() {
                let ne = new Map(C.blockers);
                ne.set(I, Ml), ye({ blockers: ne });
              },
            });
          return;
        }
        return Tt(g, x);
      })),
      u)
    ) {
      Eh(a, Re);
      let g = () => xh(a, Re);
      a.addEventListener("pagehide", g),
        (Ye = () => a.removeEventListener("pagehide", g));
    }
    return C.initialized || Tt("POP", C.location, { initialHydration: !0 }), se;
  }
  function Me() {
    j && j(),
      Ye && Ye(),
      _.clear(),
      oe && oe.abort(),
      C.fetchers.forEach((g, x) => gn(x)),
      C.blockers.forEach((g, x) => Kl(x));
  }
  function Pe(g) {
    return _.add(g), () => _.delete(g);
  }
  function ye(g, x = {}) {
    C = { ...C, ...g };
    let L = [],
      I = [];
    C.fetchers.forEach((G, ne) => {
      G.state === "idle" && (F.has(ne) ? L.push(ne) : I.push(ne));
    }),
      [..._].forEach((G) =>
        G(C, {
          deletedFetchers: L,
          viewTransitionOpts: x.viewTransitionOpts,
          flushSync: x.flushSync === !0,
        })
      ),
      L.forEach((G) => gn(G)),
      I.forEach((G) => C.fetchers.delete(G));
  }
  function Xe(g, x, { flushSync: L } = {}) {
    var W, de;
    let I =
        C.actionData != null &&
        C.navigation.formMethod != null &&
        Gt(C.navigation.formMethod) &&
        C.navigation.state === "loading" &&
        ((W = g.state) == null ? void 0 : W._isRedirect) !== !0,
      G;
    x.actionData
      ? Object.keys(x.actionData).length > 0
        ? (G = x.actionData)
        : (G = null)
      : I
      ? (G = C.actionData)
      : (G = null);
    let ne = x.loaderData
        ? of(C.loaderData, x.loaderData, x.matches || [], x.errors)
        : C.loaderData,
      fe = C.blockers;
    fe.size > 0 && ((fe = new Map(fe)), fe.forEach((ge, je) => fe.set(je, Ml)));
    let X =
      he === !0 ||
      (C.navigation.formMethod != null &&
        Gt(C.navigation.formMethod) &&
        ((de = g.state) == null ? void 0 : de._isRedirect) !== !0);
    h && ((d = h), (h = void 0)),
      it ||
        ie === "POP" ||
        (ie === "PUSH"
          ? i.history.push(g, g.state)
          : ie === "REPLACE" && i.history.replace(g, g.state));
    let ee;
    if (ie === "POP") {
      let ge = Re.get(C.location.pathname);
      ge && ge.has(g.pathname)
        ? (ee = { currentLocation: C.location, nextLocation: g })
        : Re.has(g.pathname) &&
          (ee = { currentLocation: g, nextLocation: C.location });
    } else if (we) {
      let ge = Re.get(C.location.pathname);
      ge
        ? ge.add(g.pathname)
        : ((ge = new Set([g.pathname])), Re.set(C.location.pathname, ge)),
        (ee = { currentLocation: C.location, nextLocation: g });
    }
    ye(
      {
        ...x,
        actionData: G,
        loaderData: ne,
        historyAction: ie,
        location: g,
        initialized: !0,
        navigation: Za,
        revalidation: "idle",
        restoreScrollPosition: on(g, x.matches || C.matches),
        preventScrollReset: X,
        blockers: fe,
      },
      { viewTransitionOpts: ee, flushSync: L === !0 }
    ),
      (ie = "POP"),
      (he = !1),
      (we = !1),
      (it = !1),
      (Qe = !1),
      ve == null || ve.resolve(),
      (ve = null);
  }
  async function Kn(g, x) {
    if (typeof g == "number") {
      i.history.go(g);
      return;
    }
    let L = eu(
        C.location,
        C.matches,
        y,
        g,
        x == null ? void 0 : x.fromRouteId,
        x == null ? void 0 : x.relative
      ),
      { path: I, submission: G, error: ne } = Zc(!1, L, x),
      fe = C.location,
      X = Ol(C.location, I, x && x.state);
    X = { ...X, ...i.history.encodeLocation(X) };
    let ee = x && x.replace != null ? x.replace : void 0,
      W = "PUSH";
    ee === !0
      ? (W = "REPLACE")
      : ee === !1 ||
        (G != null &&
          Gt(G.formMethod) &&
          G.formAction === C.location.pathname + C.location.search &&
          (W = "REPLACE"));
    let de =
        x && "preventScrollReset" in x ? x.preventScrollReset === !0 : void 0,
      ge = (x && x.flushSync) === !0,
      je = yr({ currentLocation: fe, nextLocation: X, historyAction: W });
    if (je) {
      Sn(je, {
        state: "blocked",
        location: X,
        proceed() {
          Sn(je, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: X,
          }),
            Kn(g, x);
        },
        reset() {
          let Ze = new Map(C.blockers);
          Ze.set(je, Ml), ye({ blockers: Ze });
        },
      });
      return;
    }
    await Tt(W, X, {
      submission: G,
      pendingError: ne,
      preventScrollReset: de,
      replace: x && x.replace,
      enableViewTransition: x && x.viewTransition,
      flushSync: ge,
    });
  }
  function Al() {
    ve || (ve = kh()), mr(), ye({ revalidation: "loading" });
    let g = ve.promise;
    return C.navigation.state === "submitting"
      ? g
      : C.navigation.state === "idle"
      ? (Tt(C.historyAction, C.location, {
          startUninterruptedRevalidation: !0,
        }),
        g)
      : (Tt(ie || C.historyAction, C.navigation.location, {
          overrideNavigation: C.navigation,
          enableViewTransition: we === !0,
        }),
        g);
  }
  async function Tt(g, x, L) {
    oe && oe.abort(),
      (oe = null),
      (ie = g),
      (it = (L && L.startUninterruptedRevalidation) === !0),
      En(C.location, C.matches),
      (he = (L && L.preventScrollReset) === !0),
      (we = (L && L.enableViewTransition) === !0);
    let I = h || d,
      G = L && L.overrideNavigation,
      ne = Wn(I, x, y),
      fe = (L && L.flushSync) === !0,
      X = Gn(ne, I, x.pathname);
    if ((X.active && X.matches && (ne = X.matches), !ne)) {
      let { error: _e, notFoundMatches: ze, route: Ve } = Xn(x.pathname);
      Xe(
        x,
        { matches: ze, loaderData: {}, errors: { [Ve.id]: _e } },
        { flushSync: fe }
      );
      return;
    }
    if (
      C.initialized &&
      !Qe &&
      vh(C.location, x) &&
      !(L && L.submission && Gt(L.submission.formMethod))
    ) {
      Xe(x, { matches: ne }, { flushSync: fe });
      return;
    }
    oe = new AbortController();
    let ee = Vr(i.history, x, oe.signal, L && L.submission),
      W;
    if (L && L.pendingError)
      W = [fr(ne).route.id, { type: "error", error: L.pendingError }];
    else if (L && L.submission && Gt(L.submission.formMethod)) {
      let _e = await Wr(ee, x, L.submission, ne, X.active, {
        replace: L.replace,
        flushSync: fe,
      });
      if (_e.shortCircuited) return;
      if (_e.pendingActionResult) {
        let [ze, Ve] = _e.pendingActionResult;
        if (Nt(Ve) && ao(Ve.error) && Ve.error.status === 404) {
          (oe = null),
            Xe(x, {
              matches: _e.matches,
              loaderData: {},
              errors: { [ze]: Ve.error },
            });
          return;
        }
      }
      (ne = _e.matches || ne),
        (W = _e.pendingActionResult),
        (G = qa(x, L.submission)),
        (fe = !1),
        (X.active = !1),
        (ee = Vr(i.history, ee.url, ee.signal));
    }
    let {
      shortCircuited: de,
      matches: ge,
      loaderData: je,
      errors: Ze,
    } = await Hl(
      ee,
      x,
      ne,
      X.active,
      G,
      L && L.submission,
      L && L.fetcherSubmission,
      L && L.replace,
      L && L.initialHydration === !0,
      fe,
      W
    );
    de ||
      ((oe = null),
      Xe(x, { matches: ge || ne, ...af(W), loaderData: je, errors: Ze }));
  }
  async function Wr(g, x, L, I, G, ne = {}) {
    mr();
    let fe = wh(x, L);
    if ((ye({ navigation: fe }, { flushSync: ne.flushSync === !0 }), G)) {
      let W = await Jn(I, x.pathname, g.signal);
      if (W.type === "aborted") return { shortCircuited: !0 };
      if (W.type === "error") {
        let de = fr(W.partialMatches).route.id;
        return {
          matches: W.partialMatches,
          pendingActionResult: [de, { type: "error", error: W.error }],
        };
      } else if (W.matches) I = W.matches;
      else {
        let { notFoundMatches: de, error: ge, route: je } = Xn(x.pathname);
        return {
          matches: de,
          pendingActionResult: [je.id, { type: "error", error: ge }],
        };
      }
    }
    let X,
      ee = Fl(I, x);
    if (!ee.route.action && !ee.route.lazy)
      X = {
        type: "error",
        error: $t(405, {
          method: g.method,
          pathname: x.pathname,
          routeId: ee.route.id,
        }),
      };
    else if (
      ((X = (await ln("action", C, g, [ee], I, null))[ee.route.id]),
      g.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (dr(X)) {
      let W;
      return (
        ne && ne.replace != null
          ? (W = ne.replace)
          : (W =
              nf(X.response.headers.get("Location"), new URL(g.url), y) ===
              C.location.pathname + C.location.search),
        await mt(g, X, !0, { submission: L, replace: W }),
        { shortCircuited: !0 }
      );
    }
    if (Nt(X)) {
      let W = fr(I, ee.route.id);
      return (
        (ne && ne.replace) !== !0 && (ie = "PUSH"),
        { matches: I, pendingActionResult: [W.route.id, X] }
      );
    }
    return { matches: I, pendingActionResult: [ee.route.id, X] };
  }
  async function Hl(g, x, L, I, G, ne, fe, X, ee, W, de) {
    let ge = G || qa(x, ne),
      je = ne || fe || cf(ge),
      Ze = !it && !ee;
    if (I) {
      if (Ze) {
        let qe = Qr(de);
        ye(
          { navigation: ge, ...(qe !== void 0 ? { actionData: qe } : {}) },
          { flushSync: W }
        );
      }
      let Le = await Jn(L, x.pathname, g.signal);
      if (Le.type === "aborted") return { shortCircuited: !0 };
      if (Le.type === "error") {
        let qe = fr(Le.partialMatches).route.id;
        return {
          matches: Le.partialMatches,
          loaderData: {},
          errors: { [qe]: Le.error },
        };
      } else if (Le.matches) L = Le.matches;
      else {
        let { error: qe, notFoundMatches: un, route: qn } = Xn(x.pathname);
        return { matches: un, loaderData: {}, errors: { [qn.id]: qe } };
      }
    }
    let _e = h || d,
      [ze, Ve] = bc(
        i.history,
        C,
        L,
        je,
        x,
        ee === !0,
        Qe,
        ut,
        F,
        K,
        le,
        _e,
        y,
        de
      );
    if (((De = ++Je), ze.length === 0 && Ve.length === 0)) {
      let Le = Wl();
      return (
        Xe(
          x,
          {
            matches: L,
            loaderData: {},
            errors: de && Nt(de[1]) ? { [de[0]]: de[1].error } : null,
            ...af(de),
            ...(Le ? { fetchers: new Map(C.fetchers) } : {}),
          },
          { flushSync: W }
        ),
        { shortCircuited: !0 }
      );
    }
    if (Ze) {
      let Le = {};
      if (!I) {
        Le.navigation = ge;
        let qe = Qr(de);
        qe !== void 0 && (Le.actionData = qe);
      }
      Ve.length > 0 && (Le.fetchers = Kr(Ve)), ye(Le, { flushSync: W });
    }
    Ve.forEach((Le) => {
      vt(Le.key), Le.controller && Te.set(Le.key, Le.controller);
    });
    let xn = () => Ve.forEach((Le) => vt(Le.key));
    oe && oe.signal.addEventListener("abort", xn);
    let { loaderResults: kn, fetcherResults: Mt } = await Xr(C, L, ze, Ve, g);
    if (g.signal.aborted) return { shortCircuited: !0 };
    oe && oe.signal.removeEventListener("abort", xn),
      Ve.forEach((Le) => Te.delete(Le.key));
    let kt = bi(kn);
    if (kt)
      return await mt(g, kt.result, !0, { replace: X }), { shortCircuited: !0 };
    if (((kt = bi(Mt)), kt))
      return (
        le.add(kt.key),
        await mt(g, kt.result, !0, { replace: X }),
        { shortCircuited: !0 }
      );
    let { loaderData: wr, errors: Zn } = lf(C, L, kn, de, Ve, Mt);
    ee && C.errors && (Zn = { ...C.errors, ...Zn });
    let an = Wl(),
      Fe = Gr(De),
      Sr = an || Fe || Ve.length > 0;
    return {
      matches: L,
      loaderData: wr,
      errors: Zn,
      ...(Sr ? { fetchers: new Map(C.fetchers) } : {}),
    };
  }
  function Qr(g) {
    if (g && !Nt(g[1])) return { [g[0]]: g[1].data };
    if (C.actionData)
      return Object.keys(C.actionData).length === 0 ? null : C.actionData;
  }
  function Kr(g) {
    return (
      g.forEach((x) => {
        let L = C.fetchers.get(x.key),
          I = zl(void 0, L ? L.data : void 0);
        C.fetchers.set(x.key, I);
      }),
      new Map(C.fetchers)
    );
  }
  async function Bl(g, x, L, I) {
    vt(g);
    let G = (I && I.flushSync) === !0,
      ne = h || d,
      fe = eu(C.location, C.matches, y, L, x, I == null ? void 0 : I.relative),
      X = Wn(ne, fe, y),
      ee = Gn(X, ne, fe);
    if ((ee.active && ee.matches && (X = ee.matches), !X)) {
      Dt(g, x, $t(404, { pathname: fe }), { flushSync: G });
      return;
    }
    let { path: W, submission: de, error: ge } = Zc(!0, fe, I);
    if (ge) {
      Dt(g, x, ge, { flushSync: G });
      return;
    }
    let je = Fl(X, W),
      Ze = (I && I.preventScrollReset) === !0;
    if (de && Gt(de.formMethod)) {
      await Yr(g, x, W, je, X, ee.active, G, Ze, de);
      return;
    }
    K.set(g, { routeId: x, path: W }),
      await Yn(g, x, W, je, X, ee.active, G, Ze, de);
  }
  async function Yr(g, x, L, I, G, ne, fe, X, ee) {
    mr(), K.delete(g);
    function W(Ae) {
      if (!Ae.route.action && !Ae.route.lazy) {
        let Ht = $t(405, { method: ee.formMethod, pathname: L, routeId: x });
        return Dt(g, x, Ht, { flushSync: fe }), !0;
      }
      return !1;
    }
    if (!ne && W(I)) return;
    let de = C.fetchers.get(g);
    At(g, Sh(ee, de), { flushSync: fe });
    let ge = new AbortController(),
      je = Vr(i.history, L, ge.signal, ee);
    if (ne) {
      let Ae = await Jn(G, L, je.signal);
      if (Ae.type === "aborted") return;
      if (Ae.type === "error") {
        Dt(g, x, Ae.error, { flushSync: fe });
        return;
      } else if (Ae.matches) {
        if (((G = Ae.matches), (I = Fl(G, L)), W(I))) return;
      } else {
        Dt(g, x, $t(404, { pathname: L }), { flushSync: fe });
        return;
      }
    }
    Te.set(g, ge);
    let Ze = Je,
      ze = (await ln("action", C, je, [I], G, g))[I.route.id];
    if (je.signal.aborted) {
      Te.get(g) === ge && Te.delete(g);
      return;
    }
    if (F.has(g)) {
      if (dr(ze) || Nt(ze)) {
        At(g, Vn(void 0));
        return;
      }
    } else {
      if (dr(ze))
        if ((Te.delete(g), De > Ze)) {
          At(g, Vn(void 0));
          return;
        } else
          return (
            le.add(g),
            At(g, zl(ee)),
            mt(je, ze, !1, { fetcherSubmission: ee, preventScrollReset: X })
          );
      if (Nt(ze)) {
        Dt(g, x, ze.error);
        return;
      }
    }
    let Ve = C.navigation.location || C.location,
      xn = Vr(i.history, Ve, ge.signal),
      kn = h || d,
      Mt =
        C.navigation.state !== "idle"
          ? Wn(kn, C.navigation.location, y)
          : C.matches;
    Ee(Mt, "Didn't find any matches after fetcher action");
    let kt = ++Je;
    V.set(g, kt);
    let wr = zl(ee, ze.data);
    C.fetchers.set(g, wr);
    let [Zn, an] = bc(i.history, C, Mt, ee, Ve, !1, Qe, ut, F, K, le, kn, y, [
      I.route.id,
      ze,
    ]);
    an
      .filter((Ae) => Ae.key !== g)
      .forEach((Ae) => {
        let Ht = Ae.key,
          Ct = C.fetchers.get(Ht),
          co = zl(void 0, Ct ? Ct.data : void 0);
        C.fetchers.set(Ht, co),
          vt(Ht),
          Ae.controller && Te.set(Ht, Ae.controller);
      }),
      ye({ fetchers: new Map(C.fetchers) });
    let Fe = () => an.forEach((Ae) => vt(Ae.key));
    ge.signal.addEventListener("abort", Fe);
    let { loaderResults: Sr, fetcherResults: Le } = await Xr(C, Mt, Zn, an, xn);
    if (ge.signal.aborted) return;
    ge.signal.removeEventListener("abort", Fe),
      V.delete(g),
      Te.delete(g),
      an.forEach((Ae) => Te.delete(Ae.key));
    let qe = bi(Sr);
    if (qe) return mt(xn, qe.result, !1, { preventScrollReset: X });
    if (((qe = bi(Le)), qe))
      return le.add(qe.key), mt(xn, qe.result, !1, { preventScrollReset: X });
    let { loaderData: un, errors: qn } = lf(C, Mt, Sr, void 0, an, Le);
    if (C.fetchers.has(g)) {
      let Ae = Vn(ze.data);
      C.fetchers.set(g, Ae);
    }
    Gr(kt),
      C.navigation.state === "loading" && kt > De
        ? (Ee(ie, "Expected pending action"),
          oe && oe.abort(),
          Xe(C.navigation.location, {
            matches: Mt,
            loaderData: un,
            errors: qn,
            fetchers: new Map(C.fetchers),
          }))
        : (ye({
            errors: qn,
            loaderData: of(C.loaderData, un, Mt, qn),
            fetchers: new Map(C.fetchers),
          }),
          (Qe = !1));
  }
  async function Yn(g, x, L, I, G, ne, fe, X, ee) {
    let W = C.fetchers.get(g);
    At(g, zl(ee, W ? W.data : void 0), { flushSync: fe });
    let de = new AbortController(),
      ge = Vr(i.history, L, de.signal);
    if (ne) {
      let ze = await Jn(G, L, ge.signal);
      if (ze.type === "aborted") return;
      if (ze.type === "error") {
        Dt(g, x, ze.error, { flushSync: fe });
        return;
      } else if (ze.matches) (G = ze.matches), (I = Fl(G, L));
      else {
        Dt(g, x, $t(404, { pathname: L }), { flushSync: fe });
        return;
      }
    }
    Te.set(g, de);
    let je = Je,
      _e = (await ln("loader", C, ge, [I], G, g))[I.route.id];
    if ((Te.get(g) === de && Te.delete(g), !ge.signal.aborted)) {
      if (F.has(g)) {
        At(g, Vn(void 0));
        return;
      }
      if (dr(_e))
        if (De > je) {
          At(g, Vn(void 0));
          return;
        } else {
          le.add(g), await mt(ge, _e, !1, { preventScrollReset: X });
          return;
        }
      if (Nt(_e)) {
        Dt(g, x, _e.error);
        return;
      }
      At(g, Vn(_e.data));
    }
  }
  async function mt(
    g,
    x,
    L,
    {
      submission: I,
      fetcherSubmission: G,
      preventScrollReset: ne,
      replace: fe,
    } = {}
  ) {
    x.response.headers.has("X-Remix-Revalidate") && (Qe = !0);
    let X = x.response.headers.get("Location");
    Ee(X, "Expected a Location header on the redirect Response"),
      (X = nf(X, new URL(g.url), y));
    let ee = Ol(C.location, X, { _isRedirect: !0 });
    if (u) {
      let _e = !1;
      if (x.response.headers.has("X-Remix-Reload-Document")) _e = !0;
      else if (ou.test(X)) {
        const ze = i.history.createURL(X);
        _e = ze.origin !== a.location.origin || Jt(ze.pathname, y) == null;
      }
      if (_e) {
        fe ? a.location.replace(X) : a.location.assign(X);
        return;
      }
    }
    oe = null;
    let W =
        fe === !0 || x.response.headers.has("X-Remix-Replace")
          ? "REPLACE"
          : "PUSH",
      { formMethod: de, formAction: ge, formEncType: je } = C.navigation;
    !I && !G && de && ge && je && (I = cf(C.navigation));
    let Ze = I || G;
    if (nh.has(x.response.status) && Ze && Gt(Ze.formMethod))
      await Tt(W, ee, {
        submission: { ...Ze, formAction: X },
        preventScrollReset: ne || he,
        enableViewTransition: L ? we : void 0,
      });
    else {
      let _e = qa(ee, I);
      await Tt(W, ee, {
        overrideNavigation: _e,
        fetcherSubmission: G,
        preventScrollReset: ne || he,
        enableViewTransition: L ? we : void 0,
      });
    }
  }
  async function ln(g, x, L, I, G, ne) {
    let fe,
      X = {};
    try {
      fe = await fh(m, g, x, L, I, G, ne, c, f);
    } catch (ee) {
      return (
        I.forEach((W) => {
          X[W.route.id] = { type: "error", error: ee };
        }),
        X
      );
    }
    for (let [ee, W] of Object.entries(fe))
      if (yh(W)) {
        let de = W.result;
        X[ee] = { type: "redirect", response: hh(de, L, ee, G, y) };
      } else X[ee] = await ph(W);
    return X;
  }
  async function Xr(g, x, L, I, G) {
    let ne = ln("loader", g, G, L, x, null),
      fe = Promise.all(
        I.map(async (W) => {
          if (W.matches && W.match && W.controller) {
            let ge = (
              await ln(
                "loader",
                g,
                Vr(i.history, W.path, W.controller.signal),
                [W.match],
                W.matches,
                W.key
              )
            )[W.match.route.id];
            return { [W.key]: ge };
          } else
            return Promise.resolve({
              [W.key]: { type: "error", error: $t(404, { pathname: W.path }) },
            });
        })
      ),
      X = await ne,
      ee = (await fe).reduce((W, de) => Object.assign(W, de), {});
    return { loaderResults: X, fetcherResults: ee };
  }
  function mr() {
    (Qe = !0),
      K.forEach((g, x) => {
        Te.has(x) && ut.add(x), vt(x);
      });
  }
  function At(g, x, L = {}) {
    C.fetchers.set(g, x),
      ye(
        { fetchers: new Map(C.fetchers) },
        { flushSync: (L && L.flushSync) === !0 }
      );
  }
  function Dt(g, x, L, I = {}) {
    let G = fr(C.matches, x);
    gn(g),
      ye(
        { errors: { [G.route.id]: L }, fetchers: new Map(C.fetchers) },
        { flushSync: (I && I.flushSync) === !0 }
      );
  }
  function vr(g) {
    return (
      E.set(g, (E.get(g) || 0) + 1),
      F.has(g) && F.delete(g),
      C.fetchers.get(g) || rh
    );
  }
  function gn(g) {
    let x = C.fetchers.get(g);
    Te.has(g) && !(x && x.state === "loading" && V.has(g)) && vt(g),
      K.delete(g),
      V.delete(g),
      le.delete(g),
      F.delete(g),
      ut.delete(g),
      C.fetchers.delete(g);
  }
  function Vl(g) {
    let x = (E.get(g) || 0) - 1;
    x <= 0 ? (E.delete(g), F.add(g)) : E.set(g, x),
      ye({ fetchers: new Map(C.fetchers) });
  }
  function vt(g) {
    let x = Te.get(g);
    x && (x.abort(), Te.delete(g));
  }
  function wn(g) {
    for (let x of g) {
      let L = vr(x),
        I = Vn(L.data);
      C.fetchers.set(x, I);
    }
  }
  function Wl() {
    let g = [],
      x = !1;
    for (let L of le) {
      let I = C.fetchers.get(L);
      Ee(I, `Expected fetcher: ${L}`),
        I.state === "loading" && (le.delete(L), g.push(L), (x = !0));
    }
    return wn(g), x;
  }
  function Gr(g) {
    let x = [];
    for (let [L, I] of V)
      if (I < g) {
        let G = C.fetchers.get(L);
        Ee(G, `Expected fetcher: ${L}`),
          G.state === "loading" && (vt(L), V.delete(L), x.push(L));
      }
    return wn(x), x.length > 0;
  }
  function Ql(g, x) {
    let L = C.blockers.get(g) || Ml;
    return ce.get(g) !== x && ce.set(g, x), L;
  }
  function Kl(g) {
    C.blockers.delete(g), ce.delete(g);
  }
  function Sn(g, x) {
    let L = C.blockers.get(g) || Ml;
    Ee(
      (L.state === "unblocked" && x.state === "blocked") ||
        (L.state === "blocked" && x.state === "blocked") ||
        (L.state === "blocked" && x.state === "proceeding") ||
        (L.state === "blocked" && x.state === "unblocked") ||
        (L.state === "proceeding" && x.state === "unblocked"),
      `Invalid blocker state transition: ${L.state} -> ${x.state}`
    );
    let I = new Map(C.blockers);
    I.set(g, x), ye({ blockers: I });
  }
  function yr({ currentLocation: g, nextLocation: x, historyAction: L }) {
    if (ce.size === 0) return;
    ce.size > 1 && lt(!1, "A router only supports one blocker at a time");
    let I = Array.from(ce.entries()),
      [G, ne] = I[I.length - 1],
      fe = C.blockers.get(G);
    if (
      !(fe && fe.state === "proceeding") &&
      ne({ currentLocation: g, nextLocation: x, historyAction: L })
    )
      return G;
  }
  function Xn(g) {
    let x = $t(404, { pathname: g }),
      L = h || d,
      { matches: I, route: G } = uf(L);
    return { notFoundMatches: I, route: G, error: x };
  }
  function Jr(g, x, L) {
    if (((D = g), ($ = x), (z = L || null), !A && C.navigation === Za)) {
      A = !0;
      let I = on(C.location, C.matches);
      I != null && ye({ restoreScrollPosition: I });
    }
    return () => {
      (D = null), ($ = null), (z = null);
    };
  }
  function gr(g, x) {
    return (
      (z &&
        z(
          g,
          x.map((I) => jp(I, C.loaderData))
        )) ||
      g.key
    );
  }
  function En(g, x) {
    if (D && $) {
      let L = gr(g, x);
      D[L] = $();
    }
  }
  function on(g, x) {
    if (D) {
      let L = gr(g, x),
        I = D[L];
      if (typeof I == "number") return I;
    }
    return null;
  }
  function Gn(g, x, L) {
    if (S)
      if (g) {
        if (Object.keys(g[0].params).length > 0)
          return { active: !0, matches: to(x, L, y, !0) };
      } else return { active: !0, matches: to(x, L, y, !0) || [] };
    return { active: !1, matches: null };
  }
  async function Jn(g, x, L) {
    if (!S) return { type: "success", matches: g };
    let I = g;
    for (;;) {
      let G = h == null,
        ne = h || d,
        fe = c;
      try {
        await S({
          path: x,
          matches: I,
          patch: (W, de) => {
            L.aborted || tf(W, de, ne, fe, f);
          },
        });
      } catch (W) {
        return { type: "error", error: W, partialMatches: I };
      } finally {
        G && !L.aborted && (d = [...d]);
      }
      if (L.aborted) return { type: "aborted" };
      let X = Wn(ne, x, y);
      if (X) return { type: "success", matches: X };
      let ee = to(ne, x, y, !0);
      if (
        !ee ||
        (I.length === ee.length &&
          I.every((W, de) => W.route.id === ee[de].route.id))
      )
        return { type: "success", matches: null };
      I = ee;
    }
  }
  function Yl(g) {
    (c = {}), (h = lo(g, f, void 0, c));
  }
  function Xl(g, x) {
    let L = h == null;
    tf(g, x, h || d, c, f), L && ((d = [...d]), ye({}));
  }
  return (
    (se = {
      get basename() {
        return y;
      },
      get future() {
        return N;
      },
      get state() {
        return C;
      },
      get routes() {
        return d;
      },
      get window() {
        return a;
      },
      initialize: xe,
      subscribe: Pe,
      enableScrollRestoration: Jr,
      navigate: Kn,
      fetch: Bl,
      revalidate: Al,
      createHref: (g) => i.history.createHref(g),
      encodeLocation: (g) => i.history.encodeLocation(g),
      getFetcher: vr,
      deleteFetcher: Vl,
      dispose: Me,
      getBlocker: Ql,
      deleteBlocker: Kl,
      patchRoutes: Xl,
      _internalFetchControllers: Te,
      _internalSetRoutes: Yl,
    }),
    se
  );
}
function oh(i) {
  return (
    i != null &&
    (("formData" in i && i.formData != null) ||
      ("body" in i && i.body !== void 0))
  );
}
function eu(i, a, u, f, c, d) {
  let h, y;
  if (c) {
    h = [];
    for (let S of a)
      if ((h.push(S), S.route.id === c)) {
        y = S;
        break;
      }
  } else (h = a), (y = a[a.length - 1]);
  let m = iu(f || ".", lu(h), Jt(i.pathname, u) || i.pathname, d === "path");
  if (
    (f == null && ((m.search = i.search), (m.hash = i.hash)),
    (f == null || f === "" || f === ".") && y)
  ) {
    let S = au(m.search);
    if (y.route.index && !S)
      m.search = m.search ? m.search.replace(/^\?/, "?index&") : "?index";
    else if (!y.route.index && S) {
      let N = new URLSearchParams(m.search),
        j = N.getAll("index");
      N.delete("index"),
        j.filter((D) => D).forEach((D) => N.append("index", D));
      let _ = N.toString();
      m.search = _ ? `?${_}` : "";
    }
  }
  return (
    u !== "/" && (m.pathname = m.pathname === "/" ? u : tn([u, m.pathname])),
    Qn(m)
  );
}
function Zc(i, a, u) {
  if (!u || !oh(u)) return { path: a };
  if (u.formMethod && !gh(u.formMethod))
    return { path: a, error: $t(405, { method: u.formMethod }) };
  let f = () => ({ path: a, error: $t(400, { type: "invalid-body" }) }),
    d = (u.formMethod || "get").toUpperCase(),
    h = Cf(a);
  if (u.body !== void 0) {
    if (u.formEncType === "text/plain") {
      if (!Gt(d)) return f();
      let j =
        typeof u.body == "string"
          ? u.body
          : u.body instanceof FormData || u.body instanceof URLSearchParams
          ? Array.from(u.body.entries()).reduce(
              (_, [D, z]) => `${_}${D}=${z}
`,
              ""
            )
          : String(u.body);
      return {
        path: a,
        submission: {
          formMethod: d,
          formAction: h,
          formEncType: u.formEncType,
          formData: void 0,
          json: void 0,
          text: j,
        },
      };
    } else if (u.formEncType === "application/json") {
      if (!Gt(d)) return f();
      try {
        let j = typeof u.body == "string" ? JSON.parse(u.body) : u.body;
        return {
          path: a,
          submission: {
            formMethod: d,
            formAction: h,
            formEncType: u.formEncType,
            formData: void 0,
            json: j,
            text: void 0,
          },
        };
      } catch {
        return f();
      }
    }
  }
  Ee(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let y, m;
  if (u.formData) (y = nu(u.formData)), (m = u.formData);
  else if (u.body instanceof FormData) (y = nu(u.body)), (m = u.body);
  else if (u.body instanceof URLSearchParams) (y = u.body), (m = rf(y));
  else if (u.body == null) (y = new URLSearchParams()), (m = new FormData());
  else
    try {
      (y = new URLSearchParams(u.body)), (m = rf(y));
    } catch {
      return f();
    }
  let S = {
    formMethod: d,
    formAction: h,
    formEncType: (u && u.formEncType) || "application/x-www-form-urlencoded",
    formData: m,
    json: void 0,
    text: void 0,
  };
  if (Gt(S.formMethod)) return { path: a, submission: S };
  let N = yn(a);
  return (
    i && N.search && au(N.search) && y.append("index", ""),
    (N.search = `?${y}`),
    { path: Qn(N), submission: S }
  );
}
function qc(i, a, u = !1) {
  let f = i.findIndex((c) => c.route.id === a);
  return f >= 0 ? i.slice(0, u ? f + 1 : f) : i;
}
function bc(i, a, u, f, c, d, h, y, m, S, N, j, _, D) {
  let z = D ? (Nt(D[1]) ? D[1].error : D[1].data) : void 0,
    $ = i.createURL(a.location),
    A = i.createURL(c),
    M = u;
  d && a.errors
    ? (M = qc(u, Object.keys(a.errors)[0], !0))
    : D && Nt(D[1]) && (M = qc(u, D[0]));
  let q = D ? D[1].statusCode : void 0,
    Z = q && q >= 400,
    se = M.filter((ie, he) => {
      let { route: oe } = ie;
      if (oe.lazy) return !0;
      if (oe.loader == null) return !1;
      if (d) return tu(oe, a.loaderData, a.errors);
      if (ah(a.loaderData, a.matches[he], ie)) return !0;
      let we = a.matches[he],
        Re = ie;
      return ef(ie, {
        currentUrl: $,
        currentParams: we.params,
        nextUrl: A,
        nextParams: Re.params,
        ...f,
        actionResult: z,
        actionStatus: q,
        defaultShouldRevalidate: Z
          ? !1
          : h ||
            $.pathname + $.search === A.pathname + A.search ||
            $.search !== A.search ||
            uh(we, Re),
      });
    }),
    C = [];
  return (
    S.forEach((ie, he) => {
      if (d || !u.some((it) => it.route.id === ie.routeId) || m.has(he)) return;
      let oe = Wn(j, ie.path, _);
      if (!oe) {
        C.push({
          key: he,
          routeId: ie.routeId,
          path: ie.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let we = a.fetchers.get(he),
        Re = Fl(oe, ie.path),
        Ye = !1;
      N.has(he)
        ? (Ye = !1)
        : y.has(he)
        ? (y.delete(he), (Ye = !0))
        : we && we.state !== "idle" && we.data === void 0
        ? (Ye = h)
        : (Ye = ef(Re, {
            currentUrl: $,
            currentParams: a.matches[a.matches.length - 1].params,
            nextUrl: A,
            nextParams: u[u.length - 1].params,
            ...f,
            actionResult: z,
            actionStatus: q,
            defaultShouldRevalidate: Z ? !1 : h,
          })),
        Ye &&
          C.push({
            key: he,
            routeId: ie.routeId,
            path: ie.path,
            matches: oe,
            match: Re,
            controller: new AbortController(),
          });
    }),
    [se, C]
  );
}
function tu(i, a, u) {
  if (i.lazy) return !0;
  if (!i.loader) return !1;
  let f = a != null && a[i.id] !== void 0,
    c = u != null && u[i.id] !== void 0;
  return !f && c
    ? !1
    : typeof i.loader == "function" && i.loader.hydrate === !0
    ? !0
    : !f && !c;
}
function ah(i, a, u) {
  let f = !a || u.route.id !== a.route.id,
    c = !i.hasOwnProperty(u.route.id);
  return f || c;
}
function uh(i, a) {
  let u = i.route.path;
  return (
    i.pathname !== a.pathname ||
    (u != null && u.endsWith("*") && i.params["*"] !== a.params["*"])
  );
}
function ef(i, a) {
  if (i.route.shouldRevalidate) {
    let u = i.route.shouldRevalidate(a);
    if (typeof u == "boolean") return u;
  }
  return a.defaultShouldRevalidate;
}
function tf(i, a, u, f, c) {
  let d;
  if (i) {
    let m = f[i];
    Ee(m, `No route found to patch children into: routeId = ${i}`),
      m.children || (m.children = []),
      (d = m.children);
  } else d = u;
  let h = a.filter((m) => !d.some((S) => kf(m, S))),
    y = lo(
      h,
      c,
      [i || "_", "patch", String((d == null ? void 0 : d.length) || "0")],
      f
    );
  d.push(...y);
}
function kf(i, a) {
  return "id" in i && "id" in a && i.id === a.id
    ? !0
    : i.index === a.index &&
      i.path === a.path &&
      i.caseSensitive === a.caseSensitive
    ? (!i.children || i.children.length === 0) &&
      (!a.children || a.children.length === 0)
      ? !0
      : i.children.every((u, f) => {
          var c;
          return (c = a.children) == null ? void 0 : c.some((d) => kf(u, d));
        })
    : !1;
}
async function sh(i, a, u) {
  if (!i.lazy) return;
  let f = await i.lazy();
  if (!i.lazy) return;
  let c = u[i.id];
  Ee(c, "No route found in manifest");
  let d = {};
  for (let h in f) {
    let m = c[h] !== void 0 && h !== "hasErrorBoundary";
    lt(
      !m,
      `Route "${c.id}" has a static property "${h}" defined but its lazy function is also returning a value for this property. The lazy route property "${h}" will be ignored.`
    ),
      !m && !Mp.has(h) && (d[h] = f[h]);
  }
  Object.assign(c, d), Object.assign(c, { ...a(c), lazy: void 0 });
}
async function ch({ matches: i }) {
  let a = i.filter((f) => f.shouldLoad);
  return (await Promise.all(a.map((f) => f.resolve()))).reduce(
    (f, c, d) => Object.assign(f, { [a[d].route.id]: c }),
    {}
  );
}
async function fh(i, a, u, f, c, d, h, y, m, S) {
  let N = d.map((D) => (D.route.lazy ? sh(D.route, m, y) : void 0)),
    j = d.map((D, z) => {
      let $ = N[z],
        A = c.some((q) => q.route.id === D.route.id);
      return {
        ...D,
        shouldLoad: A,
        resolve: async (q) => (
          q &&
            f.method === "GET" &&
            (D.route.lazy || D.route.loader) &&
            (A = !0),
          A
            ? dh(a, f, D, $, q, S)
            : Promise.resolve({ type: "data", result: void 0 })
        ),
      };
    }),
    _ = await i({
      matches: j,
      request: f,
      params: d[0].params,
      fetcherKey: h,
      context: S,
    });
  try {
    await Promise.all(N);
  } catch {}
  return _;
}
async function dh(i, a, u, f, c, d) {
  let h,
    y,
    m = (S) => {
      let N,
        j = new Promise((z, $) => (N = $));
      (y = () => N()), a.signal.addEventListener("abort", y);
      let _ = (z) =>
          typeof S != "function"
            ? Promise.reject(
                new Error(
                  `You cannot call the handler for a route which defines a boolean "${i}" [routeId: ${u.route.id}]`
                )
              )
            : S(
                { request: a, params: u.params, context: d },
                ...(z !== void 0 ? [z] : [])
              ),
        D = (async () => {
          try {
            return { type: "data", result: await (c ? c(($) => _($)) : _()) };
          } catch (z) {
            return { type: "error", result: z };
          }
        })();
      return Promise.race([D, j]);
    };
  try {
    let S = u.route[i];
    if (f)
      if (S) {
        let N,
          [j] = await Promise.all([
            m(S).catch((_) => {
              N = _;
            }),
            f,
          ]);
        if (N !== void 0) throw N;
        h = j;
      } else if ((await f, (S = u.route[i]), S)) h = await m(S);
      else if (i === "action") {
        let N = new URL(a.url),
          j = N.pathname + N.search;
        throw $t(405, { method: a.method, pathname: j, routeId: u.route.id });
      } else return { type: "data", result: void 0 };
    else if (S) h = await m(S);
    else {
      let N = new URL(a.url),
        j = N.pathname + N.search;
      throw $t(404, { pathname: j });
    }
  } catch (S) {
    return { type: "error", result: S };
  } finally {
    y && a.signal.removeEventListener("abort", y);
  }
  return h;
}
async function ph(i) {
  var f, c, d, h;
  let { result: a, type: u } = i;
  if (Rf(a)) {
    let y;
    try {
      let m = a.headers.get("Content-Type");
      m && /\bapplication\/json\b/.test(m)
        ? a.body == null
          ? (y = null)
          : (y = await a.json())
        : (y = await a.text());
    } catch (m) {
      return { type: "error", error: m };
    }
    return u === "error"
      ? {
          type: "error",
          error: new oo(a.status, a.statusText, y),
          statusCode: a.status,
          headers: a.headers,
        }
      : { type: "data", data: y, statusCode: a.status, headers: a.headers };
  }
  if (u === "error") {
    if (sf(a)) {
      if (a.data instanceof Error)
        return {
          type: "error",
          error: a.data,
          statusCode: (f = a.init) == null ? void 0 : f.status,
        };
      a = new oo(
        ((c = a.init) == null ? void 0 : c.status) || 500,
        void 0,
        a.data
      );
    }
    return { type: "error", error: a, statusCode: ao(a) ? a.status : void 0 };
  }
  return sf(a)
    ? {
        type: "data",
        data: a.data,
        statusCode: (d = a.init) == null ? void 0 : d.status,
        headers:
          (h = a.init) != null && h.headers
            ? new Headers(a.init.headers)
            : void 0,
      }
    : { type: "data", data: a };
}
function hh(i, a, u, f, c) {
  let d = i.headers.get("Location");
  if (
    (Ee(
      d,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !ou.test(d))
  ) {
    let h = f.slice(0, f.findIndex((y) => y.route.id === u) + 1);
    (d = eu(new URL(a.url), h, c, d)), i.headers.set("Location", d);
  }
  return i;
}
function nf(i, a, u) {
  if (ou.test(i)) {
    let f = i,
      c = f.startsWith("//") ? new URL(a.protocol + f) : new URL(f),
      d = Jt(c.pathname, u) != null;
    if (c.origin === a.origin && d) return c.pathname + c.search + c.hash;
  }
  return i;
}
function Vr(i, a, u, f) {
  let c = i.createURL(Cf(a)).toString(),
    d = { signal: u };
  if (f && Gt(f.formMethod)) {
    let { formMethod: h, formEncType: y } = f;
    (d.method = h.toUpperCase()),
      y === "application/json"
        ? ((d.headers = new Headers({ "Content-Type": y })),
          (d.body = JSON.stringify(f.json)))
        : y === "text/plain"
        ? (d.body = f.text)
        : y === "application/x-www-form-urlencoded" && f.formData
        ? (d.body = nu(f.formData))
        : (d.body = f.formData);
  }
  return new Request(c, d);
}
function nu(i) {
  let a = new URLSearchParams();
  for (let [u, f] of i.entries())
    a.append(u, typeof f == "string" ? f : f.name);
  return a;
}
function rf(i) {
  let a = new FormData();
  for (let [u, f] of i.entries()) a.append(u, f);
  return a;
}
function mh(i, a, u, f = !1, c = !1) {
  let d = {},
    h = null,
    y,
    m = !1,
    S = {},
    N = u && Nt(u[1]) ? u[1].error : void 0;
  return (
    i.forEach((j) => {
      if (!(j.route.id in a)) return;
      let _ = j.route.id,
        D = a[_];
      if (
        (Ee(!dr(D), "Cannot handle redirect results in processLoaderData"),
        Nt(D))
      ) {
        let z = D.error;
        if ((N !== void 0 && ((z = N), (N = void 0)), (h = h || {}), c))
          h[_] = z;
        else {
          let $ = fr(i, _);
          h[$.route.id] == null && (h[$.route.id] = z);
        }
        f || (d[_] = xf),
          m || ((m = !0), (y = ao(D.error) ? D.error.status : 500)),
          D.headers && (S[_] = D.headers);
      } else
        (d[_] = D.data),
          D.statusCode && D.statusCode !== 200 && !m && (y = D.statusCode),
          D.headers && (S[_] = D.headers);
    }),
    N !== void 0 && u && ((h = { [u[0]]: N }), (d[u[0]] = void 0)),
    { loaderData: d, errors: h, statusCode: y || 200, loaderHeaders: S }
  );
}
function lf(i, a, u, f, c, d) {
  let { loaderData: h, errors: y } = mh(a, u, f);
  return (
    c.forEach((m) => {
      let { key: S, match: N, controller: j } = m,
        _ = d[S];
      if (
        (Ee(_, "Did not find corresponding fetcher result"),
        !(j && j.signal.aborted))
      )
        if (Nt(_)) {
          let D = fr(i.matches, N == null ? void 0 : N.route.id);
          (y && y[D.route.id]) || (y = { ...y, [D.route.id]: _.error }),
            i.fetchers.delete(S);
        } else if (dr(_)) Ee(!1, "Unhandled fetcher revalidation redirect");
        else {
          let D = Vn(_.data);
          i.fetchers.set(S, D);
        }
    }),
    { loaderData: h, errors: y }
  );
}
function of(i, a, u, f) {
  let c = Object.entries(a)
    .filter(([, d]) => d !== xf)
    .reduce((d, [h, y]) => ((d[h] = y), d), {});
  for (let d of u) {
    let h = d.route.id;
    if (
      (!a.hasOwnProperty(h) &&
        i.hasOwnProperty(h) &&
        d.route.loader &&
        (c[h] = i[h]),
      f && f.hasOwnProperty(h))
    )
      break;
  }
  return c;
}
function af(i) {
  return i
    ? Nt(i[1])
      ? { actionData: {} }
      : { actionData: { [i[0]]: i[1].data } }
    : {};
}
function fr(i, a) {
  return (
    (a ? i.slice(0, i.findIndex((f) => f.route.id === a) + 1) : [...i])
      .reverse()
      .find((f) => f.route.hasErrorBoundary === !0) || i[0]
  );
}
function uf(i) {
  let a =
    i.length === 1
      ? i[0]
      : i.find((u) => u.index || !u.path || u.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: a }],
    route: a,
  };
}
function $t(
  i,
  { pathname: a, routeId: u, method: f, type: c, message: d } = {}
) {
  let h = "Unknown Server Error",
    y = "Unknown @remix-run/router error";
  return (
    i === 400
      ? ((h = "Bad Request"),
        f && a && u
          ? (y = `You made a ${f} request to "${a}" but did not provide a \`loader\` for route "${u}", so there is no way to handle the request.`)
          : c === "invalid-body" && (y = "Unable to encode submission body"))
      : i === 403
      ? ((h = "Forbidden"), (y = `Route "${u}" does not match URL "${a}"`))
      : i === 404
      ? ((h = "Not Found"), (y = `No route matches URL "${a}"`))
      : i === 405 &&
        ((h = "Method Not Allowed"),
        f && a && u
          ? (y = `You made a ${f.toUpperCase()} request to "${a}" but did not provide an \`action\` for route "${u}", so there is no way to handle the request.`)
          : f && (y = `Invalid request method "${f.toUpperCase()}"`)),
    new oo(i || 500, h, new Error(y), !0)
  );
}
function bi(i) {
  let a = Object.entries(i);
  for (let u = a.length - 1; u >= 0; u--) {
    let [f, c] = a[u];
    if (dr(c)) return { key: f, result: c };
  }
}
function Cf(i) {
  let a = typeof i == "string" ? yn(i) : i;
  return Qn({ ...a, hash: "" });
}
function vh(i, a) {
  return i.pathname !== a.pathname || i.search !== a.search
    ? !1
    : i.hash === ""
    ? a.hash !== ""
    : i.hash === a.hash
    ? !0
    : a.hash !== "";
}
function yh(i) {
  return Rf(i.result) && th.has(i.result.status);
}
function Nt(i) {
  return i.type === "error";
}
function dr(i) {
  return (i && i.type) === "redirect";
}
function sf(i) {
  return (
    typeof i == "object" &&
    i != null &&
    "type" in i &&
    "data" in i &&
    "init" in i &&
    i.type === "DataWithResponseInit"
  );
}
function Rf(i) {
  return (
    i != null &&
    typeof i.status == "number" &&
    typeof i.statusText == "string" &&
    typeof i.headers == "object" &&
    typeof i.body < "u"
  );
}
function gh(i) {
  return eh.has(i.toUpperCase());
}
function Gt(i) {
  return qp.has(i.toUpperCase());
}
function au(i) {
  return new URLSearchParams(i).getAll("index").some((a) => a === "");
}
function Fl(i, a) {
  let u = typeof a == "string" ? yn(a).search : a.search;
  if (i[i.length - 1].route.index && au(u || "")) return i[i.length - 1];
  let f = wf(i);
  return f[f.length - 1];
}
function cf(i) {
  let {
    formMethod: a,
    formAction: u,
    formEncType: f,
    text: c,
    formData: d,
    json: h,
  } = i;
  if (!(!a || !u || !f)) {
    if (c != null)
      return {
        formMethod: a,
        formAction: u,
        formEncType: f,
        formData: void 0,
        json: void 0,
        text: c,
      };
    if (d != null)
      return {
        formMethod: a,
        formAction: u,
        formEncType: f,
        formData: d,
        json: void 0,
        text: void 0,
      };
    if (h !== void 0)
      return {
        formMethod: a,
        formAction: u,
        formEncType: f,
        formData: void 0,
        json: h,
        text: void 0,
      };
  }
}
function qa(i, a) {
  return a
    ? {
        state: "loading",
        location: i,
        formMethod: a.formMethod,
        formAction: a.formAction,
        formEncType: a.formEncType,
        formData: a.formData,
        json: a.json,
        text: a.text,
      }
    : {
        state: "loading",
        location: i,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function wh(i, a) {
  return {
    state: "submitting",
    location: i,
    formMethod: a.formMethod,
    formAction: a.formAction,
    formEncType: a.formEncType,
    formData: a.formData,
    json: a.json,
    text: a.text,
  };
}
function zl(i, a) {
  return i
    ? {
        state: "loading",
        formMethod: i.formMethod,
        formAction: i.formAction,
        formEncType: i.formEncType,
        formData: i.formData,
        json: i.json,
        text: i.text,
        data: a,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: a,
      };
}
function Sh(i, a) {
  return {
    state: "submitting",
    formMethod: i.formMethod,
    formAction: i.formAction,
    formEncType: i.formEncType,
    formData: i.formData,
    json: i.json,
    text: i.text,
    data: a ? a.data : void 0,
  };
}
function Vn(i) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: i,
  };
}
function Eh(i, a) {
  try {
    let u = i.sessionStorage.getItem(Ef);
    if (u) {
      let f = JSON.parse(u);
      for (let [c, d] of Object.entries(f || {}))
        d && Array.isArray(d) && a.set(c, new Set(d || []));
    }
  } catch {}
}
function xh(i, a) {
  if (a.size > 0) {
    let u = {};
    for (let [f, c] of a) u[f] = [...c];
    try {
      i.sessionStorage.setItem(Ef, JSON.stringify(u));
    } catch (f) {
      lt(
        !1,
        `Failed to save applied view transitions in sessionStorage (${f}).`
      );
    }
  }
}
function kh() {
  let i,
    a,
    u = new Promise((f, c) => {
      (i = async (d) => {
        f(d);
        try {
          await u;
        } catch {}
      }),
        (a = async (d) => {
          c(d);
          try {
            await u;
          } catch {}
        });
    });
  return { promise: u, resolve: i, reject: a };
}
var pr = T.createContext(null);
pr.displayName = "DataRouter";
var Il = T.createContext(null);
Il.displayName = "DataRouterState";
var uu = T.createContext({ isTransitioning: !1 });
uu.displayName = "ViewTransition";
var Pf = T.createContext(new Map());
Pf.displayName = "Fetchers";
var Ch = T.createContext(null);
Ch.displayName = "Await";
var nn = T.createContext(null);
nn.displayName = "Navigation";
var uo = T.createContext(null);
uo.displayName = "Location";
var rn = T.createContext({ outlet: null, matches: [], isDataRoute: !1 });
rn.displayName = "Route";
var su = T.createContext(null);
su.displayName = "RouteError";
function Rh(i, { relative: a } = {}) {
  Ee(
    Ul(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: u, navigator: f } = T.useContext(nn),
    { hash: c, pathname: d, search: h } = $l(i, { relative: a }),
    y = d;
  return (
    u !== "/" && (y = d === "/" ? u : tn([u, d])),
    f.createHref({ pathname: y, search: h, hash: c })
  );
}
function Ul() {
  return T.useContext(uo) != null;
}
function hr() {
  return (
    Ee(
      Ul(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    T.useContext(uo).location
  );
}
var _f =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Lf(i) {
  T.useContext(nn).static || T.useLayoutEffect(i);
}
function Ph() {
  let { isDataRoute: i } = T.useContext(rn);
  return i ? Ah() : _h();
}
function _h() {
  Ee(
    Ul(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let i = T.useContext(pr),
    { basename: a, navigator: u } = T.useContext(nn),
    { matches: f } = T.useContext(rn),
    { pathname: c } = hr(),
    d = JSON.stringify(lu(f)),
    h = T.useRef(!1);
  return (
    Lf(() => {
      h.current = !0;
    }),
    T.useCallback(
      (m, S = {}) => {
        if ((lt(h.current, _f), !h.current)) return;
        if (typeof m == "number") {
          u.go(m);
          return;
        }
        let N = iu(m, JSON.parse(d), c, S.relative === "path");
        i == null &&
          a !== "/" &&
          (N.pathname = N.pathname === "/" ? a : tn([a, N.pathname])),
          (S.replace ? u.replace : u.push)(N, S.state, S);
      },
      [a, u, d, c, i]
    )
  );
}
T.createContext(null);
function Lh() {
  let { matches: i } = T.useContext(rn),
    a = i[i.length - 1];
  return a ? a.params : {};
}
function $l(i, { relative: a } = {}) {
  let { matches: u } = T.useContext(rn),
    { pathname: f } = hr(),
    c = JSON.stringify(lu(u));
  return T.useMemo(() => iu(i, JSON.parse(c), f, a === "path"), [i, c, f, a]);
}
function Nh(i, a, u, f) {
  Ee(
    Ul(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: c } = T.useContext(nn),
    { matches: d } = T.useContext(rn),
    h = d[d.length - 1],
    y = h ? h.params : {},
    m = h ? h.pathname : "/",
    S = h ? h.pathnameBase : "/",
    N = h && h.route;
  {
    let M = (N && N.path) || "";
    Nf(
      m,
      !N || M.endsWith("*") || M.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${
        M === "/" ? "*" : `${M}/*`
      }">.`
    );
  }
  let j = hr(),
    _;
  _ = j;
  let D = _.pathname || "/",
    z = D;
  if (S !== "/") {
    let M = S.replace(/^\//, "").split("/");
    z = "/" + D.replace(/^\//, "").split("/").slice(M.length).join("/");
  }
  let $ = Wn(i, { pathname: z });
  return (
    lt(
      N || $ != null,
      `No routes matched location "${_.pathname}${_.search}${_.hash}" `
    ),
    lt(
      $ == null ||
        $[$.length - 1].route.element !== void 0 ||
        $[$.length - 1].route.Component !== void 0 ||
        $[$.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ),
    jh(
      $ &&
        $.map((M) =>
          Object.assign({}, M, {
            params: Object.assign({}, y, M.params),
            pathname: tn([
              S,
              c.encodeLocation
                ? c.encodeLocation(M.pathname).pathname
                : M.pathname,
            ]),
            pathnameBase:
              M.pathnameBase === "/"
                ? S
                : tn([
                    S,
                    c.encodeLocation
                      ? c.encodeLocation(M.pathnameBase).pathname
                      : M.pathnameBase,
                  ]),
          })
        ),
      d,
      u,
      f
    )
  );
}
function Th() {
  let i = $h(),
    a = ao(i)
      ? `${i.status} ${i.statusText}`
      : i instanceof Error
      ? i.message
      : JSON.stringify(i),
    u = i instanceof Error ? i.stack : null,
    f = "rgba(200,200,200, 0.5)",
    c = { padding: "0.5rem", backgroundColor: f },
    d = { padding: "2px 4px", backgroundColor: f },
    h = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", i),
    (h = T.createElement(
      T.Fragment,
      null,
      T.createElement("p", null, "💿 Hey developer 👋"),
      T.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        T.createElement("code", { style: d }, "ErrorBoundary"),
        " or",
        " ",
        T.createElement("code", { style: d }, "errorElement"),
        " prop on your route."
      )
    )),
    T.createElement(
      T.Fragment,
      null,
      T.createElement("h2", null, "Unexpected Application Error!"),
      T.createElement("h3", { style: { fontStyle: "italic" } }, a),
      u ? T.createElement("pre", { style: c }, u) : null,
      h
    )
  );
}
var Dh = T.createElement(Th, null),
  Mh = class extends T.Component {
    constructor(i) {
      super(i),
        (this.state = {
          location: i.location,
          revalidation: i.revalidation,
          error: i.error,
        });
    }
    static getDerivedStateFromError(i) {
      return { error: i };
    }
    static getDerivedStateFromProps(i, a) {
      return a.location !== i.location ||
        (a.revalidation !== "idle" && i.revalidation === "idle")
        ? { error: i.error, location: i.location, revalidation: i.revalidation }
        : {
            error: i.error !== void 0 ? i.error : a.error,
            location: a.location,
            revalidation: i.revalidation || a.revalidation,
          };
    }
    componentDidCatch(i, a) {
      console.error(
        "React Router caught the following error during render",
        i,
        a
      );
    }
    render() {
      return this.state.error !== void 0
        ? T.createElement(
            rn.Provider,
            { value: this.props.routeContext },
            T.createElement(su.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function zh({ routeContext: i, match: a, children: u }) {
  let f = T.useContext(pr);
  return (
    f &&
      f.static &&
      f.staticContext &&
      (a.route.errorElement || a.route.ErrorBoundary) &&
      (f.staticContext._deepestRenderedBoundaryId = a.route.id),
    T.createElement(rn.Provider, { value: i }, u)
  );
}
function jh(i, a = [], u = null, f = null) {
  if (i == null) {
    if (!u) return null;
    if (u.errors) i = u.matches;
    else if (a.length === 0 && !u.initialized && u.matches.length > 0)
      i = u.matches;
    else return null;
  }
  let c = i,
    d = u == null ? void 0 : u.errors;
  if (d != null) {
    let m = c.findIndex(
      (S) => S.route.id && (d == null ? void 0 : d[S.route.id]) !== void 0
    );
    Ee(
      m >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        d
      ).join(",")}`
    ),
      (c = c.slice(0, Math.min(c.length, m + 1)));
  }
  let h = !1,
    y = -1;
  if (u)
    for (let m = 0; m < c.length; m++) {
      let S = c[m];
      if (
        ((S.route.HydrateFallback || S.route.hydrateFallbackElement) && (y = m),
        S.route.id)
      ) {
        let { loaderData: N, errors: j } = u,
          _ =
            S.route.loader &&
            !N.hasOwnProperty(S.route.id) &&
            (!j || j[S.route.id] === void 0);
        if (S.route.lazy || _) {
          (h = !0), y >= 0 ? (c = c.slice(0, y + 1)) : (c = [c[0]]);
          break;
        }
      }
    }
  return c.reduceRight((m, S, N) => {
    let j,
      _ = !1,
      D = null,
      z = null;
    u &&
      ((j = d && S.route.id ? d[S.route.id] : void 0),
      (D = S.route.errorElement || Dh),
      h &&
        (y < 0 && N === 0
          ? (Nf(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (_ = !0),
            (z = null))
          : y === N &&
            ((_ = !0), (z = S.route.hydrateFallbackElement || null))));
    let $ = a.concat(c.slice(0, N + 1)),
      A = () => {
        let M;
        return (
          j
            ? (M = D)
            : _
            ? (M = z)
            : S.route.Component
            ? (M = T.createElement(S.route.Component, null))
            : S.route.element
            ? (M = S.route.element)
            : (M = m),
          T.createElement(zh, {
            match: S,
            routeContext: { outlet: m, matches: $, isDataRoute: u != null },
            children: M,
          })
        );
      };
    return u && (S.route.ErrorBoundary || S.route.errorElement || N === 0)
      ? T.createElement(Mh, {
          location: u.location,
          revalidation: u.revalidation,
          component: D,
          error: j,
          children: A(),
          routeContext: { outlet: null, matches: $, isDataRoute: !0 },
        })
      : A();
  }, null);
}
function cu(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Fh(i) {
  let a = T.useContext(pr);
  return Ee(a, cu(i)), a;
}
function Oh(i) {
  let a = T.useContext(Il);
  return Ee(a, cu(i)), a;
}
function Ih(i) {
  let a = T.useContext(rn);
  return Ee(a, cu(i)), a;
}
function fu(i) {
  let a = Ih(i),
    u = a.matches[a.matches.length - 1];
  return (
    Ee(
      u.route.id,
      `${i} can only be used on routes that contain a unique "id"`
    ),
    u.route.id
  );
}
function Uh() {
  return fu("useRouteId");
}
function $h() {
  var f;
  let i = T.useContext(su),
    a = Oh("useRouteError"),
    u = fu("useRouteError");
  return i !== void 0 ? i : (f = a.errors) == null ? void 0 : f[u];
}
function Ah() {
  let { router: i } = Fh("useNavigate"),
    a = fu("useNavigate"),
    u = T.useRef(!1);
  return (
    Lf(() => {
      u.current = !0;
    }),
    T.useCallback(
      async (c, d = {}) => {
        lt(u.current, _f),
          u.current &&
            (typeof c == "number"
              ? i.navigate(c)
              : await i.navigate(c, { fromRouteId: a, ...d }));
      },
      [i, a]
    )
  );
}
var ff = {};
function Nf(i, a, u) {
  !a && !ff[i] && ((ff[i] = !0), lt(!1, u));
}
var df = {};
function pf(i, a) {
  !i && !df[a] && ((df[a] = !0), console.warn(a));
}
function Hh(i) {
  let a = {
    hasErrorBoundary:
      i.hasErrorBoundary || i.ErrorBoundary != null || i.errorElement != null,
  };
  return (
    i.Component &&
      (i.element &&
        lt(
          !1,
          "You should not include both `Component` and `element` on your route - `Component` will be used."
        ),
      Object.assign(a, {
        element: T.createElement(i.Component),
        Component: void 0,
      })),
    i.HydrateFallback &&
      (i.hydrateFallbackElement &&
        lt(
          !1,
          "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
        ),
      Object.assign(a, {
        hydrateFallbackElement: T.createElement(i.HydrateFallback),
        HydrateFallback: void 0,
      })),
    i.ErrorBoundary &&
      (i.errorElement &&
        lt(
          !1,
          "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
        ),
      Object.assign(a, {
        errorElement: T.createElement(i.ErrorBoundary),
        ErrorBoundary: void 0,
      })),
    a
  );
}
var Bh = class {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((i, a) => {
        (this.resolve = (u) => {
          this.status === "pending" && ((this.status = "resolved"), i(u));
        }),
          (this.reject = (u) => {
            this.status === "pending" && ((this.status = "rejected"), a(u));
          });
      }));
  }
};
function Vh({ router: i, flushSync: a }) {
  let [u, f] = T.useState(i.state),
    [c, d] = T.useState(),
    [h, y] = T.useState({ isTransitioning: !1 }),
    [m, S] = T.useState(),
    [N, j] = T.useState(),
    [_, D] = T.useState(),
    z = T.useRef(new Map()),
    $ = T.useCallback(
      (Z, { deletedFetchers: se, flushSync: C, viewTransitionOpts: ie }) => {
        se.forEach((oe) => z.current.delete(oe)),
          Z.fetchers.forEach((oe, we) => {
            oe.data !== void 0 && z.current.set(we, oe.data);
          }),
          pf(
            C === !1 || a != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
          );
        let he =
          i.window != null &&
          i.window.document != null &&
          typeof i.window.document.startViewTransition == "function";
        if (
          (pf(
            ie == null || he,
            "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
          ),
          !ie || !he)
        ) {
          a && C ? a(() => f(Z)) : T.startTransition(() => f(Z));
          return;
        }
        if (a && C) {
          a(() => {
            N && (m && m.resolve(), N.skipTransition()),
              y({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: ie.currentLocation,
                nextLocation: ie.nextLocation,
              });
          });
          let oe = i.window.document.startViewTransition(() => {
            a(() => f(Z));
          });
          oe.finished.finally(() => {
            a(() => {
              S(void 0), j(void 0), d(void 0), y({ isTransitioning: !1 });
            });
          }),
            a(() => j(oe));
          return;
        }
        N
          ? (m && m.resolve(),
            N.skipTransition(),
            D({
              state: Z,
              currentLocation: ie.currentLocation,
              nextLocation: ie.nextLocation,
            }))
          : (d(Z),
            y({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: ie.currentLocation,
              nextLocation: ie.nextLocation,
            }));
      },
      [i.window, a, N, m]
    );
  T.useLayoutEffect(() => i.subscribe($), [i, $]),
    T.useEffect(() => {
      h.isTransitioning && !h.flushSync && S(new Bh());
    }, [h]),
    T.useEffect(() => {
      if (m && c && i.window) {
        let Z = c,
          se = m.promise,
          C = i.window.document.startViewTransition(async () => {
            T.startTransition(() => f(Z)), await se;
          });
        C.finished.finally(() => {
          S(void 0), j(void 0), d(void 0), y({ isTransitioning: !1 });
        }),
          j(C);
      }
    }, [c, m, i.window]),
    T.useEffect(() => {
      m && c && u.location.key === c.location.key && m.resolve();
    }, [m, N, u.location, c]),
    T.useEffect(() => {
      !h.isTransitioning &&
        _ &&
        (d(_.state),
        y({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: _.currentLocation,
          nextLocation: _.nextLocation,
        }),
        D(void 0));
    }, [h.isTransitioning, _]);
  let A = T.useMemo(
      () => ({
        createHref: i.createHref,
        encodeLocation: i.encodeLocation,
        go: (Z) => i.navigate(Z),
        push: (Z, se, C) =>
          i.navigate(Z, {
            state: se,
            preventScrollReset: C == null ? void 0 : C.preventScrollReset,
          }),
        replace: (Z, se, C) =>
          i.navigate(Z, {
            replace: !0,
            state: se,
            preventScrollReset: C == null ? void 0 : C.preventScrollReset,
          }),
      }),
      [i]
    ),
    M = i.basename || "/",
    q = T.useMemo(
      () => ({ router: i, navigator: A, static: !1, basename: M }),
      [i, A, M]
    );
  return T.createElement(
    T.Fragment,
    null,
    T.createElement(
      pr.Provider,
      { value: q },
      T.createElement(
        Il.Provider,
        { value: u },
        T.createElement(
          Pf.Provider,
          { value: z.current },
          T.createElement(
            uu.Provider,
            { value: h },
            T.createElement(
              Kh,
              {
                basename: M,
                location: u.location,
                navigationType: u.historyAction,
                navigator: A,
              },
              T.createElement(Wh, {
                routes: i.routes,
                future: i.future,
                state: u,
              })
            )
          )
        )
      )
    ),
    null
  );
}
var Wh = T.memo(Qh);
function Qh({ routes: i, future: a, state: u }) {
  return Nh(i, void 0, u, a);
}
function Kh({
  basename: i = "/",
  children: a = null,
  location: u,
  navigationType: f = "POP",
  navigator: c,
  static: d = !1,
}) {
  Ee(
    !Ul(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let h = i.replace(/^\/*/, "/"),
    y = T.useMemo(
      () => ({ basename: h, navigator: c, static: d, future: {} }),
      [h, c, d]
    );
  typeof u == "string" && (u = yn(u));
  let {
      pathname: m = "/",
      search: S = "",
      hash: N = "",
      state: j = null,
      key: _ = "default",
    } = u,
    D = T.useMemo(() => {
      let z = Jt(m, h);
      return z == null
        ? null
        : {
            location: { pathname: z, search: S, hash: N, state: j, key: _ },
            navigationType: f,
          };
    }, [h, m, S, N, j, _, f]);
  return (
    lt(
      D != null,
      `<Router basename="${h}"> is not able to match the URL "${m}${S}${N}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    D == null
      ? null
      : T.createElement(
          nn.Provider,
          { value: y },
          T.createElement(uo.Provider, { children: a, value: D })
        )
  );
}
var no = "get",
  ro = "application/x-www-form-urlencoded";
function so(i) {
  return i != null && typeof i.tagName == "string";
}
function Yh(i) {
  return so(i) && i.tagName.toLowerCase() === "button";
}
function Xh(i) {
  return so(i) && i.tagName.toLowerCase() === "form";
}
function Gh(i) {
  return so(i) && i.tagName.toLowerCase() === "input";
}
function Jh(i) {
  return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
}
function Zh(i, a) {
  return i.button === 0 && (!a || a === "_self") && !Jh(i);
}
var eo = null;
function qh() {
  if (eo === null)
    try {
      new FormData(document.createElement("form"), 0), (eo = !1);
    } catch {
      eo = !0;
    }
  return eo;
}
var bh = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function ba(i) {
  return i != null && !bh.has(i)
    ? (lt(
        !1,
        `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ro}"`
      ),
      null)
    : i;
}
function em(i, a) {
  let u, f, c, d, h;
  if (Xh(i)) {
    let y = i.getAttribute("action");
    (f = y ? Jt(y, a) : null),
      (u = i.getAttribute("method") || no),
      (c = ba(i.getAttribute("enctype")) || ro),
      (d = new FormData(i));
  } else if (Yh(i) || (Gh(i) && (i.type === "submit" || i.type === "image"))) {
    let y = i.form;
    if (y == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let m = i.getAttribute("formaction") || y.getAttribute("action");
    if (
      ((f = m ? Jt(m, a) : null),
      (u = i.getAttribute("formmethod") || y.getAttribute("method") || no),
      (c =
        ba(i.getAttribute("formenctype")) ||
        ba(y.getAttribute("enctype")) ||
        ro),
      (d = new FormData(y, i)),
      !qh())
    ) {
      let { name: S, type: N, value: j } = i;
      if (N === "image") {
        let _ = S ? `${S}.` : "";
        d.append(`${_}x`, "0"), d.append(`${_}y`, "0");
      } else S && d.append(S, j);
    }
  } else {
    if (so(i))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (u = no), (f = null), (c = ro), (h = i);
  }
  return (
    d && c === "text/plain" && ((h = d), (d = void 0)),
    { action: f, method: u.toLowerCase(), encType: c, formData: d, body: h }
  );
}
function du(i, a) {
  if (i === !1 || i === null || typeof i > "u") throw new Error(a);
}
async function tm(i, a) {
  if (i.id in a) return a[i.id];
  try {
    let u = await import(i.module);
    return (a[i.id] = u), u;
  } catch (u) {
    return (
      console.error(
        `Error loading route module \`${i.module}\`, reloading page...`
      ),
      console.error(u),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function nm(i) {
  return i == null
    ? !1
    : i.href == null
    ? i.rel === "preload" &&
      typeof i.imageSrcSet == "string" &&
      typeof i.imageSizes == "string"
    : typeof i.rel == "string" && typeof i.href == "string";
}
async function rm(i, a, u) {
  let f = await Promise.all(
    i.map(async (c) => {
      let d = a.routes[c.route.id];
      if (d) {
        let h = await tm(d, u);
        return h.links ? h.links() : [];
      }
      return [];
    })
  );
  return am(
    f
      .flat(1)
      .filter(nm)
      .filter((c) => c.rel === "stylesheet" || c.rel === "preload")
      .map((c) =>
        c.rel === "stylesheet"
          ? { ...c, rel: "prefetch", as: "style" }
          : { ...c, rel: "prefetch" }
      )
  );
}
function hf(i, a, u, f, c, d) {
  let h = (m, S) => (u[S] ? m.route.id !== u[S].route.id : !0),
    y = (m, S) => {
      var N;
      return (
        u[S].pathname !== m.pathname ||
        (((N = u[S].route.path) == null ? void 0 : N.endsWith("*")) &&
          u[S].params["*"] !== m.params["*"])
      );
    };
  return d === "assets"
    ? a.filter((m, S) => h(m, S) || y(m, S))
    : d === "data"
    ? a.filter((m, S) => {
        var j;
        let N = f.routes[m.route.id];
        if (!N || !N.hasLoader) return !1;
        if (h(m, S) || y(m, S)) return !0;
        if (m.route.shouldRevalidate) {
          let _ = m.route.shouldRevalidate({
            currentUrl: new URL(c.pathname + c.search + c.hash, window.origin),
            currentParams: ((j = u[0]) == null ? void 0 : j.params) || {},
            nextUrl: new URL(i, window.origin),
            nextParams: m.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof _ == "boolean") return _;
        }
        return !0;
      })
    : [];
}
function lm(i, a) {
  return im(
    i
      .map((u) => {
        let f = a.routes[u.route.id];
        if (!f) return [];
        let c = [f.module];
        return f.imports && (c = c.concat(f.imports)), c;
      })
      .flat(1)
  );
}
function im(i) {
  return [...new Set(i)];
}
function om(i) {
  let a = {},
    u = Object.keys(i).sort();
  for (let f of u) a[f] = i[f];
  return a;
}
function am(i, a) {
  let u = new Set();
  return (
    new Set(a),
    i.reduce((f, c) => {
      let d = JSON.stringify(om(c));
      return u.has(d) || (u.add(d), f.push({ key: d, link: c })), f;
    }, [])
  );
}
function um(i) {
  let a =
    typeof i == "string"
      ? new URL(
          i,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : i;
  return (
    a.pathname === "/"
      ? (a.pathname = "_root.data")
      : (a.pathname = `${a.pathname.replace(/\/$/, "")}.data`),
    a
  );
}
function sm() {
  let i = T.useContext(pr);
  return (
    du(
      i,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    i
  );
}
function cm() {
  let i = T.useContext(Il);
  return (
    du(
      i,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    i
  );
}
var pu = T.createContext(void 0);
pu.displayName = "FrameworkContext";
function Tf() {
  let i = T.useContext(pu);
  return (
    du(i, "You must render this element inside a <HydratedRouter> element"), i
  );
}
function fm(i, a) {
  let u = T.useContext(pu),
    [f, c] = T.useState(!1),
    [d, h] = T.useState(!1),
    {
      onFocus: y,
      onBlur: m,
      onMouseEnter: S,
      onMouseLeave: N,
      onTouchStart: j,
    } = a,
    _ = T.useRef(null);
  T.useEffect(() => {
    if ((i === "render" && h(!0), i === "viewport")) {
      let $ = (M) => {
          M.forEach((q) => {
            h(q.isIntersecting);
          });
        },
        A = new IntersectionObserver($, { threshold: 0.5 });
      return (
        _.current && A.observe(_.current),
        () => {
          A.disconnect();
        }
      );
    }
  }, [i]),
    T.useEffect(() => {
      if (f) {
        let $ = setTimeout(() => {
          h(!0);
        }, 100);
        return () => {
          clearTimeout($);
        };
      }
    }, [f]);
  let D = () => {
      c(!0);
    },
    z = () => {
      c(!1), h(!1);
    };
  return u
    ? i !== "intent"
      ? [d, _, {}]
      : [
          d,
          _,
          {
            onFocus: jl(y, D),
            onBlur: jl(m, z),
            onMouseEnter: jl(S, D),
            onMouseLeave: jl(N, z),
            onTouchStart: jl(j, D),
          },
        ]
    : [!1, _, {}];
}
function jl(i, a) {
  return (u) => {
    i && i(u), u.defaultPrevented || a(u);
  };
}
function dm({ page: i, ...a }) {
  let { router: u } = sm(),
    f = T.useMemo(() => Wn(u.routes, i, u.basename), [u.routes, i, u.basename]);
  return f ? T.createElement(hm, { page: i, matches: f, ...a }) : null;
}
function pm(i) {
  let { manifest: a, routeModules: u } = Tf(),
    [f, c] = T.useState([]);
  return (
    T.useEffect(() => {
      let d = !1;
      return (
        rm(i, a, u).then((h) => {
          d || c(h);
        }),
        () => {
          d = !0;
        }
      );
    }, [i, a, u]),
    f
  );
}
function hm({ page: i, matches: a, ...u }) {
  let f = hr(),
    { manifest: c, routeModules: d } = Tf(),
    { loaderData: h, matches: y } = cm(),
    m = T.useMemo(() => hf(i, a, y, c, f, "data"), [i, a, y, c, f]),
    S = T.useMemo(() => hf(i, a, y, c, f, "assets"), [i, a, y, c, f]),
    N = T.useMemo(() => {
      if (i === f.pathname + f.search + f.hash) return [];
      let D = new Set(),
        z = !1;
      if (
        (a.forEach((A) => {
          var q;
          let M = c.routes[A.route.id];
          !M ||
            !M.hasLoader ||
            ((!m.some((Z) => Z.route.id === A.route.id) &&
              A.route.id in h &&
              (q = d[A.route.id]) != null &&
              q.shouldRevalidate) ||
            M.hasClientLoader
              ? (z = !0)
              : D.add(A.route.id));
        }),
        D.size === 0)
      )
        return [];
      let $ = um(i);
      return (
        z &&
          D.size > 0 &&
          $.searchParams.set(
            "_routes",
            a
              .filter((A) => D.has(A.route.id))
              .map((A) => A.route.id)
              .join(",")
          ),
        [$.pathname + $.search]
      );
    }, [h, f, c, m, a, i, d]),
    j = T.useMemo(() => lm(S, c), [S, c]),
    _ = pm(S);
  return T.createElement(
    T.Fragment,
    null,
    N.map((D) =>
      T.createElement("link", {
        key: D,
        rel: "prefetch",
        as: "fetch",
        href: D,
        ...u,
      })
    ),
    j.map((D) =>
      T.createElement("link", { key: D, rel: "modulepreload", href: D, ...u })
    ),
    _.map(({ key: D, link: z }) => T.createElement("link", { key: D, ...z }))
  );
}
function mm(...i) {
  return (a) => {
    i.forEach((u) => {
      typeof u == "function" ? u(a) : u != null && (u.current = a);
    });
  };
}
var Df =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Df && (window.__reactRouterVersion = "7.1.1");
} catch {}
function vm(i, a) {
  return ih({
    basename: a == null ? void 0 : a.basename,
    future: a == null ? void 0 : a.future,
    history: Np({ window: a == null ? void 0 : a.window }),
    hydrationData: ym(),
    routes: i,
    mapRouteProperties: Hh,
    dataStrategy: a == null ? void 0 : a.dataStrategy,
    patchRoutesOnNavigation: a == null ? void 0 : a.patchRoutesOnNavigation,
    window: a == null ? void 0 : a.window,
  }).initialize();
}
function ym() {
  let i = window == null ? void 0 : window.__staticRouterHydrationData;
  return i && i.errors && (i = { ...i, errors: gm(i.errors) }), i;
}
function gm(i) {
  if (!i) return null;
  let a = Object.entries(i),
    u = {};
  for (let [f, c] of a)
    if (c && c.__type === "RouteErrorResponse")
      u[f] = new oo(c.status, c.statusText, c.data, c.internal === !0);
    else if (c && c.__type === "Error") {
      if (c.__subType) {
        let d = window[c.__subType];
        if (typeof d == "function")
          try {
            let h = new d(c.message);
            (h.stack = ""), (u[f] = h);
          } catch {}
      }
      if (u[f] == null) {
        let d = new Error(c.message);
        (d.stack = ""), (u[f] = d);
      }
    } else u[f] = c;
  return u;
}
var Mf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  hu = T.forwardRef(function (
    {
      onClick: a,
      discover: u = "render",
      prefetch: f = "none",
      relative: c,
      reloadDocument: d,
      replace: h,
      state: y,
      target: m,
      to: S,
      preventScrollReset: N,
      viewTransition: j,
      ..._
    },
    D
  ) {
    let { basename: z } = T.useContext(nn),
      $ = typeof S == "string" && Mf.test(S),
      A,
      M = !1;
    if (typeof S == "string" && $ && ((A = S), Df))
      try {
        let we = new URL(window.location.href),
          Re = S.startsWith("//") ? new URL(we.protocol + S) : new URL(S),
          Ye = Jt(Re.pathname, z);
        Re.origin === we.origin && Ye != null
          ? (S = Ye + Re.search + Re.hash)
          : (M = !0);
      } catch {
        lt(
          !1,
          `<Link to="${S}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let q = Rh(S, { relative: c }),
      [Z, se, C] = fm(f, _),
      ie = xm(S, {
        replace: h,
        state: y,
        target: m,
        preventScrollReset: N,
        relative: c,
        viewTransition: j,
      });
    function he(we) {
      a && a(we), we.defaultPrevented || ie(we);
    }
    let oe = T.createElement("a", {
      ..._,
      ...C,
      href: A || q,
      onClick: M || d ? a : he,
      ref: mm(D, se),
      target: m,
      "data-discover": !$ && u === "render" ? "true" : void 0,
    });
    return Z && !$
      ? T.createElement(T.Fragment, null, oe, T.createElement(dm, { page: q }))
      : oe;
  });
hu.displayName = "Link";
var wm = T.forwardRef(function (
  {
    "aria-current": a = "page",
    caseSensitive: u = !1,
    className: f = "",
    end: c = !1,
    style: d,
    to: h,
    viewTransition: y,
    children: m,
    ...S
  },
  N
) {
  let j = $l(h, { relative: S.relative }),
    _ = hr(),
    D = T.useContext(Il),
    { navigator: z, basename: $ } = T.useContext(nn),
    A = D != null && _m(j) && y === !0,
    M = z.encodeLocation ? z.encodeLocation(j).pathname : j.pathname,
    q = _.pathname,
    Z =
      D && D.navigation && D.navigation.location
        ? D.navigation.location.pathname
        : null;
  u ||
    ((q = q.toLowerCase()),
    (Z = Z ? Z.toLowerCase() : null),
    (M = M.toLowerCase())),
    Z && $ && (Z = Jt(Z, $) || Z);
  const se = M !== "/" && M.endsWith("/") ? M.length - 1 : M.length;
  let C = q === M || (!c && q.startsWith(M) && q.charAt(se) === "/"),
    ie =
      Z != null &&
      (Z === M || (!c && Z.startsWith(M) && Z.charAt(M.length) === "/")),
    he = { isActive: C, isPending: ie, isTransitioning: A },
    oe = C ? a : void 0,
    we;
  typeof f == "function"
    ? (we = f(he))
    : (we = [
        f,
        C ? "active" : null,
        ie ? "pending" : null,
        A ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let Re = typeof d == "function" ? d(he) : d;
  return T.createElement(
    hu,
    {
      ...S,
      "aria-current": oe,
      className: we,
      ref: N,
      style: Re,
      to: h,
      viewTransition: y,
    },
    typeof m == "function" ? m(he) : m
  );
});
wm.displayName = "NavLink";
var Sm = T.forwardRef(
  (
    {
      discover: i = "render",
      fetcherKey: a,
      navigate: u,
      reloadDocument: f,
      replace: c,
      state: d,
      method: h = no,
      action: y,
      onSubmit: m,
      relative: S,
      preventScrollReset: N,
      viewTransition: j,
      ..._
    },
    D
  ) => {
    let z = Rm(),
      $ = Pm(y, { relative: S }),
      A = h.toLowerCase() === "get" ? "get" : "post",
      M = typeof y == "string" && Mf.test(y),
      q = (Z) => {
        if ((m && m(Z), Z.defaultPrevented)) return;
        Z.preventDefault();
        let se = Z.nativeEvent.submitter,
          C = (se == null ? void 0 : se.getAttribute("formmethod")) || h;
        z(se || Z.currentTarget, {
          fetcherKey: a,
          method: C,
          navigate: u,
          replace: c,
          state: d,
          relative: S,
          preventScrollReset: N,
          viewTransition: j,
        });
      };
    return T.createElement("form", {
      ref: D,
      method: A,
      action: $,
      onSubmit: f ? m : q,
      ..._,
      "data-discover": !M && i === "render" ? "true" : void 0,
    });
  }
);
Sm.displayName = "Form";
function Em(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function zf(i) {
  let a = T.useContext(pr);
  return Ee(a, Em(i)), a;
}
function xm(
  i,
  {
    target: a,
    replace: u,
    state: f,
    preventScrollReset: c,
    relative: d,
    viewTransition: h,
  } = {}
) {
  let y = Ph(),
    m = hr(),
    S = $l(i, { relative: d });
  return T.useCallback(
    (N) => {
      if (Zh(N, a)) {
        N.preventDefault();
        let j = u !== void 0 ? u : Qn(m) === Qn(S);
        y(i, {
          replace: j,
          state: f,
          preventScrollReset: c,
          relative: d,
          viewTransition: h,
        });
      }
    },
    [m, y, S, u, f, a, i, c, d, h]
  );
}
var km = 0,
  Cm = () => `__${String(++km)}__`;
function Rm() {
  let { router: i } = zf("useSubmit"),
    { basename: a } = T.useContext(nn),
    u = Uh();
  return T.useCallback(
    async (f, c = {}) => {
      let { action: d, method: h, encType: y, formData: m, body: S } = em(f, a);
      if (c.navigate === !1) {
        let N = c.fetcherKey || Cm();
        await i.fetch(N, u, c.action || d, {
          preventScrollReset: c.preventScrollReset,
          formData: m,
          body: S,
          formMethod: c.method || h,
          formEncType: c.encType || y,
          flushSync: c.flushSync,
        });
      } else
        await i.navigate(c.action || d, {
          preventScrollReset: c.preventScrollReset,
          formData: m,
          body: S,
          formMethod: c.method || h,
          formEncType: c.encType || y,
          replace: c.replace,
          state: c.state,
          fromRouteId: u,
          flushSync: c.flushSync,
          viewTransition: c.viewTransition,
        });
    },
    [i, a, u]
  );
}
function Pm(i, { relative: a } = {}) {
  let { basename: u } = T.useContext(nn),
    f = T.useContext(rn);
  Ee(f, "useFormAction must be used inside a RouteContext");
  let [c] = f.matches.slice(-1),
    d = { ...$l(i || ".", { relative: a }) },
    h = hr();
  if (i == null) {
    d.search = h.search;
    let y = new URLSearchParams(d.search),
      m = y.getAll("index");
    if (m.some((N) => N === "")) {
      y.delete("index"),
        m.filter((j) => j).forEach((j) => y.append("index", j));
      let N = y.toString();
      d.search = N ? `?${N}` : "";
    }
  }
  return (
    (!i || i === ".") &&
      c.route.index &&
      (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"),
    u !== "/" && (d.pathname = d.pathname === "/" ? u : tn([u, d.pathname])),
    Qn(d)
  );
}
function _m(i, a = {}) {
  let u = T.useContext(uu);
  Ee(
    u != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: f } = zf("useViewTransitionState"),
    c = $l(i, { relative: a.relative });
  if (!u.isTransitioning) return !1;
  let d = Jt(u.currentLocation.pathname, f) || u.currentLocation.pathname,
    h = Jt(u.nextLocation.pathname, f) || u.nextLocation.pathname;
  return io(c.pathname, h) != null || io(c.pathname, d) != null;
}
new TextEncoder();
var Lm = vf();
/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Nm(i) {
  return T.createElement(Vh, { flushSync: Lm.flushSync, ...i });
}
function jf() {
  return Q.jsxs("div", {
    className: "content-sidebar",
    children: [
      Q.jsxs("div", {
        className: "content-sidebar__info",
        children: [
          Q.jsx("h4", {
            className: "content-sidebar__info--title",
            children: "Сервисы и услуги",
          }),
          Q.jsxs("div", {
            className: "content-sidebar__info__wrapper",
            children: [
              Q.jsxs("div", {
                className: "content-sidebar__info__item",
                children: [
                  Q.jsx("img", { src: "img/delivery.svg", alt: "" }),
                  Q.jsx("h5", { children: "Доставка" }),
                  Q.jsx("p", {
                    children:
                      "Проверка при получении и возможность бесплатно вернуть товар",
                  }),
                ],
              }),
              Q.jsxs("div", {
                className: "content-sidebar__info__item",
                children: [
                  Q.jsx("img", { src: "img/sedan.svg", alt: "" }),
                  Q.jsx("h5", { children: "Автотека" }),
                  Q.jsx("p", {
                    children:
                      "Отчёт с историей авто: пробег, владельцы, сведения о залоге, ДТП и ремонтах",
                  }),
                ],
              }),
              Q.jsxs("div", {
                className: "content-sidebar__info__item",
                children: [
                  Q.jsx("img", { src: "img/love.svg", alt: "" }),
                  Q.jsx("h5", { children: "Онлайн-бронирование жилья" }),
                  Q.jsx("p", {
                    children:
                      "Посуточная аренда квартир и домов: большой выбор вариантов для поездок по России",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      Q.jsxs("div", {
        className: "content-sidebar__footer",
        children: [
          Q.jsx("p", { children: "© ООО «Абито», 2011–2021" }),
          Q.jsx("a", { href: "#", children: "Политика конфиденциальности" }),
          Q.jsx("a", { href: "#", children: "Обработка персональных данных" }),
        ],
      }),
    ],
  });
}
function Tm(i) {
  return Q.jsxs(hu, {
    to: "/article/" + i.article.id,
    className: "content-cards__item",
    children: [
      Q.jsx("div", {
        className: "content-cards__item--img",
        children: Q.jsx("img", { src: i.article.imageSmall, alt: "image" }),
      }),
      Q.jsx("h5", {
        className: "content-cards__item--title",
        children: i.article.title,
      }),
      Q.jsxs("p", {
        className: "content-cards__item--price",
        children: [i.article.price, " ₽"],
      }),
      Q.jsx("p", {
        className: "content-cards__item--description",
        children: i.article.address,
      }),
      Q.jsx("p", {
        className: "content-cards__item--description",
        children: i.article.date,
      }),
    ],
  });
}
function Ff() {
  return Q.jsx("section", {
    className: "search",
    children: Q.jsx("div", {
      className: "container",
      children: Q.jsxs("div", {
        className: "search-box",
        children: [
          Q.jsx("input", { type: "text", placeholder: "Поиск по объявлениям" }),
          Q.jsxs("button", {
            children: [
              Q.jsx("img", { src: "img/search.svg", alt: "search" }),
              Q.jsx("span", { children: "найти" }),
            ],
          }),
        ],
      }),
    }),
  });
}
const Of = [
  {
    id: 0,
    title: "Пвх материал 2й сорт 1",
    price: 170,
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    imageSmall: "img/item_small.png",
    imageLarge: "img/item_large.png",
    desc: "Продаю не спеша самокат в хорошем состоянии. Торг возможен. За период эксплуатации не выявлено ни одной проблемы. Из минусов — нужно прокачать задний тормоз. Установлен отсекатель сзади. Покрышки CST внедорожные. Все на подшипниках, болты протянуты. Пробег 881км , это немного для такого зверя.",
  },
  {
    id: 1,
    title: "Пвх материал 2й сорт 2",
    price: 170,
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    imageSmall: "img/item_small.png",
    imageLarge: "img/item_large.png",
    desc: "Продаю не спеша самокат в хорошем состоянии. Торг возможен. За период эксплуатации не выявлено ни одной проблемы. Из минусов — нужно прокачать задний тормоз. Установлен отсекатель сзади. Покрышки CST внедорожные. Все на подшипниках, болты протянуты. Пробег 881км , это немного для такого зверя.",
  },
  {
    id: 2,
    title: "Пвх материал 2й сорт 3",
    price: 170,
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    imageSmall: "img/item_small.png",
    imageLarge: "img/item_large.png",
    desc: "Продаю не спеша самокат в хорошем состоянии. Торг возможен. За период эксплуатации не выявлено ни одной проблемы. Из минусов — нужно прокачать задний тормоз. Установлен отсекатель сзади. Покрышки CST внедорожные. Все на подшипниках, болты протянуты. Пробег 881км , это немного для такого зверя.",
  },
];
function mf() {
  return Q.jsxs("main", {
    children: [
      Q.jsx(Ff, {}),
      Q.jsx("section", {
        className: "content",
        children: Q.jsx("div", {
          className: "container",
          children: Q.jsxs("div", {
            className: "content-box",
            children: [
              Q.jsxs("div", {
                className: "content-main",
                children: [
                  Q.jsx("h2", {
                    className: "content-main__title",
                    children: "Рекомендации для вас",
                  }),
                  Q.jsx("div", {
                    className: "content-cards",
                    children: Of.map((i) => Q.jsx(Tm, { article: i }, i.id)),
                  }),
                ],
              }),
              Q.jsx(jf, {}),
            ],
          }),
        }),
      }),
    ],
  });
}
function Dm() {
  const { id: i } = Lh(),
    a = Of.find((u) => u.id === Number(i));
  return Q.jsxs("main", {
    children: [
      Q.jsx(Ff, {}),
      Q.jsx("section", {
        className: "content",
        children: Q.jsx("div", {
          className: "container",
          children: Q.jsxs("div", {
            className: "content-box",
            children: [
              Q.jsx("div", {
                className: "content-main",
                children: Q.jsxs("div", {
                  className: "content-item",
                  children: [
                    Q.jsxs("div", {
                      className: "content-item--left",
                      children: [
                        Q.jsx("h2", {
                          className: "content-item__title",
                          children: a.title,
                        }),
                        Q.jsx("img", {
                          src: a.imageSmall,
                          alt: "",
                          className: "content-item__image",
                        }),
                        Q.jsx("p", {
                          className: "content-item__description",
                          children: a.desc,
                        }),
                      ],
                    }),
                    Q.jsxs("div", {
                      className: "content-item--right",
                      children: [
                        Q.jsxs("h2", {
                          className: "content-item__title",
                          children: [a.price, " ₽"],
                        }),
                        Q.jsx("button", { children: "Показать телефон" }),
                      ],
                    }),
                  ],
                }),
              }),
              Q.jsx(jf, {}),
            ],
          }),
        }),
      }),
    ],
  });
}
function Mm() {
  return Q.jsx("header", {
    className: "header",
    children: Q.jsx("div", {
      className: "container",
      children: Q.jsxs("div", {
        className: "header-box",
        children: [
          Q.jsxs("div", {
            className: "header-logo",
            children: [
              Q.jsx("img", { src: "img/logo.svg", alt: "logo" }),
              Q.jsx("span", { children: "Abito" }),
            ],
          }),
          Q.jsxs("div", {
            className: "header-controls",
            children: [
              Q.jsx("a", { href: "#", children: "Вход и регистрация" }),
              Q.jsx("button", { children: "Подать объявление" }),
            ],
          }),
          Q.jsx("img", {
            src: "img/menu.svg",
            alt: "menu",
            className: "header-mobile",
          }),
        ],
      }),
    }),
  });
}
const zm = vm([
  { path: "/", element: Q.jsx(mf, {}) },
  { path: "/article/:id", element: Q.jsx(Dm, {}) },
  { path: "*", element: Q.jsx(mf, {}) },
]);
_p.createRoot(document.getElementById("root")).render(
  Q.jsxs(T.StrictMode, { children: [Q.jsx(Mm, {}), Q.jsx(Nm, { router: zm })] })
);
