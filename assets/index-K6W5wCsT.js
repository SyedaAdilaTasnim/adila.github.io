function i1(a, i) {
  for (var u = 0; u < i.length; u++) {
    const o = i[u];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const s in o)
        if (s !== "default" && !(s in a)) {
          const f = Object.getOwnPropertyDescriptor(o, s);
          f &&
            Object.defineProperty(
              a,
              s,
              f.get ? f : { enumerable: !0, get: () => o[s] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(a, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) o(s);
  new MutationObserver((s) => {
    for (const f of s)
      if (f.type === "childList")
        for (const h of f.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && o(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(s) {
    const f = {};
    return (
      s.integrity && (f.integrity = s.integrity),
      s.referrerPolicy && (f.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (f.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (f.credentials = "omit")
        : (f.credentials = "same-origin"),
      f
    );
  }
  function o(s) {
    if (s.ep) return;
    s.ep = !0;
    const f = u(s);
    fetch(s.href, f);
  }
})();
function r1(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default")
    ? a.default
    : a;
}
var cs = { exports: {} },
  ki = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var a0;
function o1() {
  if (a0) return ki;
  a0 = 1;
  var a = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.fragment");
  function u(o, s, f) {
    var h = null;
    if (
      (f !== void 0 && (h = "" + f),
      s.key !== void 0 && (h = "" + s.key),
      "key" in s)
    ) {
      f = {};
      for (var p in s) p !== "key" && (f[p] = s[p]);
    } else f = s;
    return (
      (s = f.ref),
      { $$typeof: a, type: o, key: h, ref: s !== void 0 ? s : null, props: f }
    );
  }
  return (ki.Fragment = i), (ki.jsx = u), (ki.jsxs = u), ki;
}
var l0;
function u1() {
  return l0 || ((l0 = 1), (cs.exports = o1())), cs.exports;
}
var N = u1(),
  ss = { exports: {} },
  pt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var i0;
function c1() {
  if (i0) return pt;
  i0 = 1;
  var a = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    u = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    f = Symbol.for("react.consumer"),
    h = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    v = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    S = Symbol.for("react.lazy"),
    E = Symbol.iterator;
  function M(x) {
    return x === null || typeof x != "object"
      ? null
      : ((x = (E && x[E]) || x["@@iterator"]),
        typeof x == "function" ? x : null);
  }
  var U = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    O = Object.assign,
    T = {};
  function q(x, L, Z) {
    (this.props = x),
      (this.context = L),
      (this.refs = T),
      (this.updater = Z || U);
  }
  (q.prototype.isReactComponent = {}),
    (q.prototype.setState = function (x, L) {
      if (typeof x != "object" && typeof x != "function" && x != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, x, L, "setState");
    }),
    (q.prototype.forceUpdate = function (x) {
      this.updater.enqueueForceUpdate(this, x, "forceUpdate");
    });
  function Q() {}
  Q.prototype = q.prototype;
  function F(x, L, Z) {
    (this.props = x),
      (this.context = L),
      (this.refs = T),
      (this.updater = Z || U);
  }
  var V = (F.prototype = new Q());
  (V.constructor = F), O(V, q.prototype), (V.isPureReactComponent = !0);
  var G = Array.isArray,
    _ = { H: null, A: null, T: null, S: null, V: null },
    J = Object.prototype.hasOwnProperty;
  function P(x, L, Z, W, rt, gt) {
    return (
      (Z = gt.ref),
      { $$typeof: a, type: x, key: L, ref: Z !== void 0 ? Z : null, props: gt }
    );
  }
  function tt(x, L) {
    return P(x.type, L, void 0, void 0, void 0, x.props);
  }
  function I(x) {
    return typeof x == "object" && x !== null && x.$$typeof === a;
  }
  function y(x) {
    var L = { "=": "=0", ":": "=2" };
    return (
      "$" +
      x.replace(/[=:]/g, function (Z) {
        return L[Z];
      })
    );
  }
  var X = /\/+/g;
  function et(x, L) {
    return typeof x == "object" && x !== null && x.key != null
      ? y("" + x.key)
      : L.toString(36);
  }
  function it() {}
  function At(x) {
    switch (x.status) {
      case "fulfilled":
        return x.value;
      case "rejected":
        throw x.reason;
      default:
        switch (
          (typeof x.status == "string"
            ? x.then(it, it)
            : ((x.status = "pending"),
              x.then(
                function (L) {
                  x.status === "pending" &&
                    ((x.status = "fulfilled"), (x.value = L));
                },
                function (L) {
                  x.status === "pending" &&
                    ((x.status = "rejected"), (x.reason = L));
                }
              )),
          x.status)
        ) {
          case "fulfilled":
            return x.value;
          case "rejected":
            throw x.reason;
        }
    }
    throw x;
  }
  function mt(x, L, Z, W, rt) {
    var gt = typeof x;
    (gt === "undefined" || gt === "boolean") && (x = null);
    var nt = !1;
    if (x === null) nt = !0;
    else
      switch (gt) {
        case "bigint":
        case "string":
        case "number":
          nt = !0;
          break;
        case "object":
          switch (x.$$typeof) {
            case a:
            case i:
              nt = !0;
              break;
            case S:
              return (nt = x._init), mt(nt(x._payload), L, Z, W, rt);
          }
      }
    if (nt)
      return (
        (rt = rt(x)),
        (nt = W === "" ? "." + et(x, 0) : W),
        G(rt)
          ? ((Z = ""),
            nt != null && (Z = nt.replace(X, "$&/") + "/"),
            mt(rt, L, Z, "", function (Be) {
              return Be;
            }))
          : rt != null &&
            (I(rt) &&
              (rt = tt(
                rt,
                Z +
                  (rt.key == null || (x && x.key === rt.key)
                    ? ""
                    : ("" + rt.key).replace(X, "$&/") + "/") +
                  nt
              )),
            L.push(rt)),
        1
      );
    nt = 0;
    var Mt = W === "" ? "." : W + ":";
    if (G(x))
      for (var Dt = 0; Dt < x.length; Dt++)
        (W = x[Dt]), (gt = Mt + et(W, Dt)), (nt += mt(W, L, Z, gt, rt));
    else if (((Dt = M(x)), typeof Dt == "function"))
      for (x = Dt.call(x), Dt = 0; !(W = x.next()).done; )
        (W = W.value), (gt = Mt + et(W, Dt++)), (nt += mt(W, L, Z, gt, rt));
    else if (gt === "object") {
      if (typeof x.then == "function") return mt(At(x), L, Z, W, rt);
      throw (
        ((L = String(x)),
        Error(
          "Objects are not valid as a React child (found: " +
            (L === "[object Object]"
              ? "object with keys {" + Object.keys(x).join(", ") + "}"
              : L) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return nt;
  }
  function B(x, L, Z) {
    if (x == null) return x;
    var W = [],
      rt = 0;
    return (
      mt(x, W, "", "", function (gt) {
        return L.call(Z, gt, rt++);
      }),
      W
    );
  }
  function K(x) {
    if (x._status === -1) {
      var L = x._result;
      (L = L()),
        L.then(
          function (Z) {
            (x._status === 0 || x._status === -1) &&
              ((x._status = 1), (x._result = Z));
          },
          function (Z) {
            (x._status === 0 || x._status === -1) &&
              ((x._status = 2), (x._result = Z));
          }
        ),
        x._status === -1 && ((x._status = 0), (x._result = L));
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var lt =
    typeof reportError == "function"
      ? reportError
      : function (x) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var L = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof x == "object" &&
                x !== null &&
                typeof x.message == "string"
                  ? String(x.message)
                  : String(x),
              error: x,
            });
            if (!window.dispatchEvent(L)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", x);
            return;
          }
          console.error(x);
        };
  function ct() {}
  return (
    (pt.Children = {
      map: B,
      forEach: function (x, L, Z) {
        B(
          x,
          function () {
            L.apply(this, arguments);
          },
          Z
        );
      },
      count: function (x) {
        var L = 0;
        return (
          B(x, function () {
            L++;
          }),
          L
        );
      },
      toArray: function (x) {
        return (
          B(x, function (L) {
            return L;
          }) || []
        );
      },
      only: function (x) {
        if (!I(x))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return x;
      },
    }),
    (pt.Component = q),
    (pt.Fragment = u),
    (pt.Profiler = s),
    (pt.PureComponent = F),
    (pt.StrictMode = o),
    (pt.Suspense = v),
    (pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _),
    (pt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (x) {
        return _.H.useMemoCache(x);
      },
    }),
    (pt.cache = function (x) {
      return function () {
        return x.apply(null, arguments);
      };
    }),
    (pt.cloneElement = function (x, L, Z) {
      if (x == null)
        throw Error(
          "The argument must be a React element, but you passed " + x + "."
        );
      var W = O({}, x.props),
        rt = x.key,
        gt = void 0;
      if (L != null)
        for (nt in (L.ref !== void 0 && (gt = void 0),
        L.key !== void 0 && (rt = "" + L.key),
        L))
          !J.call(L, nt) ||
            nt === "key" ||
            nt === "__self" ||
            nt === "__source" ||
            (nt === "ref" && L.ref === void 0) ||
            (W[nt] = L[nt]);
      var nt = arguments.length - 2;
      if (nt === 1) W.children = Z;
      else if (1 < nt) {
        for (var Mt = Array(nt), Dt = 0; Dt < nt; Dt++)
          Mt[Dt] = arguments[Dt + 2];
        W.children = Mt;
      }
      return P(x.type, rt, void 0, void 0, gt, W);
    }),
    (pt.createContext = function (x) {
      return (
        (x = {
          $$typeof: h,
          _currentValue: x,
          _currentValue2: x,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (x.Provider = x),
        (x.Consumer = { $$typeof: f, _context: x }),
        x
      );
    }),
    (pt.createElement = function (x, L, Z) {
      var W,
        rt = {},
        gt = null;
      if (L != null)
        for (W in (L.key !== void 0 && (gt = "" + L.key), L))
          J.call(L, W) &&
            W !== "key" &&
            W !== "__self" &&
            W !== "__source" &&
            (rt[W] = L[W]);
      var nt = arguments.length - 2;
      if (nt === 1) rt.children = Z;
      else if (1 < nt) {
        for (var Mt = Array(nt), Dt = 0; Dt < nt; Dt++)
          Mt[Dt] = arguments[Dt + 2];
        rt.children = Mt;
      }
      if (x && x.defaultProps)
        for (W in ((nt = x.defaultProps), nt))
          rt[W] === void 0 && (rt[W] = nt[W]);
      return P(x, gt, void 0, void 0, null, rt);
    }),
    (pt.createRef = function () {
      return { current: null };
    }),
    (pt.forwardRef = function (x) {
      return { $$typeof: p, render: x };
    }),
    (pt.isValidElement = I),
    (pt.lazy = function (x) {
      return { $$typeof: S, _payload: { _status: -1, _result: x }, _init: K };
    }),
    (pt.memo = function (x, L) {
      return { $$typeof: g, type: x, compare: L === void 0 ? null : L };
    }),
    (pt.startTransition = function (x) {
      var L = _.T,
        Z = {};
      _.T = Z;
      try {
        var W = x(),
          rt = _.S;
        rt !== null && rt(Z, W),
          typeof W == "object" &&
            W !== null &&
            typeof W.then == "function" &&
            W.then(ct, lt);
      } catch (gt) {
        lt(gt);
      } finally {
        _.T = L;
      }
    }),
    (pt.unstable_useCacheRefresh = function () {
      return _.H.useCacheRefresh();
    }),
    (pt.use = function (x) {
      return _.H.use(x);
    }),
    (pt.useActionState = function (x, L, Z) {
      return _.H.useActionState(x, L, Z);
    }),
    (pt.useCallback = function (x, L) {
      return _.H.useCallback(x, L);
    }),
    (pt.useContext = function (x) {
      return _.H.useContext(x);
    }),
    (pt.useDebugValue = function () {}),
    (pt.useDeferredValue = function (x, L) {
      return _.H.useDeferredValue(x, L);
    }),
    (pt.useEffect = function (x, L, Z) {
      var W = _.H;
      if (typeof Z == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return W.useEffect(x, L);
    }),
    (pt.useId = function () {
      return _.H.useId();
    }),
    (pt.useImperativeHandle = function (x, L, Z) {
      return _.H.useImperativeHandle(x, L, Z);
    }),
    (pt.useInsertionEffect = function (x, L) {
      return _.H.useInsertionEffect(x, L);
    }),
    (pt.useLayoutEffect = function (x, L) {
      return _.H.useLayoutEffect(x, L);
    }),
    (pt.useMemo = function (x, L) {
      return _.H.useMemo(x, L);
    }),
    (pt.useOptimistic = function (x, L) {
      return _.H.useOptimistic(x, L);
    }),
    (pt.useReducer = function (x, L, Z) {
      return _.H.useReducer(x, L, Z);
    }),
    (pt.useRef = function (x) {
      return _.H.useRef(x);
    }),
    (pt.useState = function (x) {
      return _.H.useState(x);
    }),
    (pt.useSyncExternalStore = function (x, L, Z) {
      return _.H.useSyncExternalStore(x, L, Z);
    }),
    (pt.useTransition = function () {
      return _.H.useTransition();
    }),
    (pt.version = "19.1.0"),
    pt
  );
}
var r0;
function qs() {
  return r0 || ((r0 = 1), (ss.exports = c1())), ss.exports;
}
var j = qs();
const Ul = r1(j),
  As = i1({ __proto__: null, default: Ul }, [j]);
var fs = { exports: {} },
  Li = {},
  ds = { exports: {} },
  hs = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var o0;
function s1() {
  return (
    o0 ||
      ((o0 = 1),
      (function (a) {
        function i(B, K) {
          var lt = B.length;
          B.push(K);
          t: for (; 0 < lt; ) {
            var ct = (lt - 1) >>> 1,
              x = B[ct];
            if (0 < s(x, K)) (B[ct] = K), (B[lt] = x), (lt = ct);
            else break t;
          }
        }
        function u(B) {
          return B.length === 0 ? null : B[0];
        }
        function o(B) {
          if (B.length === 0) return null;
          var K = B[0],
            lt = B.pop();
          if (lt !== K) {
            B[0] = lt;
            t: for (var ct = 0, x = B.length, L = x >>> 1; ct < L; ) {
              var Z = 2 * (ct + 1) - 1,
                W = B[Z],
                rt = Z + 1,
                gt = B[rt];
              if (0 > s(W, lt))
                rt < x && 0 > s(gt, W)
                  ? ((B[ct] = gt), (B[rt] = lt), (ct = rt))
                  : ((B[ct] = W), (B[Z] = lt), (ct = Z));
              else if (rt < x && 0 > s(gt, lt))
                (B[ct] = gt), (B[rt] = lt), (ct = rt);
              else break t;
            }
          }
          return K;
        }
        function s(B, K) {
          var lt = B.sortIndex - K.sortIndex;
          return lt !== 0 ? lt : B.id - K.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var f = performance;
          a.unstable_now = function () {
            return f.now();
          };
        } else {
          var h = Date,
            p = h.now();
          a.unstable_now = function () {
            return h.now() - p;
          };
        }
        var v = [],
          g = [],
          S = 1,
          E = null,
          M = 3,
          U = !1,
          O = !1,
          T = !1,
          q = !1,
          Q = typeof setTimeout == "function" ? setTimeout : null,
          F = typeof clearTimeout == "function" ? clearTimeout : null,
          V = typeof setImmediate < "u" ? setImmediate : null;
        function G(B) {
          for (var K = u(g); K !== null; ) {
            if (K.callback === null) o(g);
            else if (K.startTime <= B)
              o(g), (K.sortIndex = K.expirationTime), i(v, K);
            else break;
            K = u(g);
          }
        }
        function _(B) {
          if (((T = !1), G(B), !O))
            if (u(v) !== null) (O = !0), J || ((J = !0), et());
            else {
              var K = u(g);
              K !== null && mt(_, K.startTime - B);
            }
        }
        var J = !1,
          P = -1,
          tt = 5,
          I = -1;
        function y() {
          return q ? !0 : !(a.unstable_now() - I < tt);
        }
        function X() {
          if (((q = !1), J)) {
            var B = a.unstable_now();
            I = B;
            var K = !0;
            try {
              t: {
                (O = !1), T && ((T = !1), F(P), (P = -1)), (U = !0);
                var lt = M;
                try {
                  e: {
                    for (
                      G(B), E = u(v);
                      E !== null && !(E.expirationTime > B && y());

                    ) {
                      var ct = E.callback;
                      if (typeof ct == "function") {
                        (E.callback = null), (M = E.priorityLevel);
                        var x = ct(E.expirationTime <= B);
                        if (((B = a.unstable_now()), typeof x == "function")) {
                          (E.callback = x), G(B), (K = !0);
                          break e;
                        }
                        E === u(v) && o(v), G(B);
                      } else o(v);
                      E = u(v);
                    }
                    if (E !== null) K = !0;
                    else {
                      var L = u(g);
                      L !== null && mt(_, L.startTime - B), (K = !1);
                    }
                  }
                  break t;
                } finally {
                  (E = null), (M = lt), (U = !1);
                }
                K = void 0;
              }
            } finally {
              K ? et() : (J = !1);
            }
          }
        }
        var et;
        if (typeof V == "function")
          et = function () {
            V(X);
          };
        else if (typeof MessageChannel < "u") {
          var it = new MessageChannel(),
            At = it.port2;
          (it.port1.onmessage = X),
            (et = function () {
              At.postMessage(null);
            });
        } else
          et = function () {
            Q(X, 0);
          };
        function mt(B, K) {
          P = Q(function () {
            B(a.unstable_now());
          }, K);
        }
        (a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (B) {
            B.callback = null;
          }),
          (a.unstable_forceFrameRate = function (B) {
            0 > B || 125 < B
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (tt = 0 < B ? Math.floor(1e3 / B) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return M;
          }),
          (a.unstable_next = function (B) {
            switch (M) {
              case 1:
              case 2:
              case 3:
                var K = 3;
                break;
              default:
                K = M;
            }
            var lt = M;
            M = K;
            try {
              return B();
            } finally {
              M = lt;
            }
          }),
          (a.unstable_requestPaint = function () {
            q = !0;
          }),
          (a.unstable_runWithPriority = function (B, K) {
            switch (B) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                B = 3;
            }
            var lt = M;
            M = B;
            try {
              return K();
            } finally {
              M = lt;
            }
          }),
          (a.unstable_scheduleCallback = function (B, K, lt) {
            var ct = a.unstable_now();
            switch (
              (typeof lt == "object" && lt !== null
                ? ((lt = lt.delay),
                  (lt = typeof lt == "number" && 0 < lt ? ct + lt : ct))
                : (lt = ct),
              B)
            ) {
              case 1:
                var x = -1;
                break;
              case 2:
                x = 250;
                break;
              case 5:
                x = 1073741823;
                break;
              case 4:
                x = 1e4;
                break;
              default:
                x = 5e3;
            }
            return (
              (x = lt + x),
              (B = {
                id: S++,
                callback: K,
                priorityLevel: B,
                startTime: lt,
                expirationTime: x,
                sortIndex: -1,
              }),
              lt > ct
                ? ((B.sortIndex = lt),
                  i(g, B),
                  u(v) === null &&
                    B === u(g) &&
                    (T ? (F(P), (P = -1)) : (T = !0), mt(_, lt - ct)))
                : ((B.sortIndex = x),
                  i(v, B),
                  O || U || ((O = !0), J || ((J = !0), et()))),
              B
            );
          }),
          (a.unstable_shouldYield = y),
          (a.unstable_wrapCallback = function (B) {
            var K = M;
            return function () {
              var lt = M;
              M = K;
              try {
                return B.apply(this, arguments);
              } finally {
                M = lt;
              }
            };
          });
      })(hs)),
    hs
  );
}
var u0;
function f1() {
  return u0 || ((u0 = 1), (ds.exports = s1())), ds.exports;
}
var ms = { exports: {} },
  Te = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var c0;
function d1() {
  if (c0) return Te;
  c0 = 1;
  var a = qs();
  function i(v) {
    var g = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var S = 2; S < arguments.length; S++)
        g += "&args[]=" + encodeURIComponent(arguments[S]);
    }
    return (
      "Minified React error #" +
      v +
      "; visit " +
      g +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function u() {}
  var o = {
      d: {
        f: u,
        r: function () {
          throw Error(i(522));
        },
        D: u,
        C: u,
        L: u,
        m: u,
        X: u,
        S: u,
        M: u,
      },
      p: 0,
      findDOMNode: null,
    },
    s = Symbol.for("react.portal");
  function f(v, g, S) {
    var E =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: E == null ? null : "" + E,
      children: v,
      containerInfo: g,
      implementation: S,
    };
  }
  var h = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(v, g) {
    if (v === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return (
    (Te.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (Te.createPortal = function (v, g) {
      var S =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11))
        throw Error(i(299));
      return f(v, g, null, S);
    }),
    (Te.flushSync = function (v) {
      var g = h.T,
        S = o.p;
      try {
        if (((h.T = null), (o.p = 2), v)) return v();
      } finally {
        (h.T = g), (o.p = S), o.d.f();
      }
    }),
    (Te.preconnect = function (v, g) {
      typeof v == "string" &&
        (g
          ? ((g = g.crossOrigin),
            (g =
              typeof g == "string"
                ? g === "use-credentials"
                  ? g
                  : ""
                : void 0))
          : (g = null),
        o.d.C(v, g));
    }),
    (Te.prefetchDNS = function (v) {
      typeof v == "string" && o.d.D(v);
    }),
    (Te.preinit = function (v, g) {
      if (typeof v == "string" && g && typeof g.as == "string") {
        var S = g.as,
          E = p(S, g.crossOrigin),
          M = typeof g.integrity == "string" ? g.integrity : void 0,
          U = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        S === "style"
          ? o.d.S(v, typeof g.precedence == "string" ? g.precedence : void 0, {
              crossOrigin: E,
              integrity: M,
              fetchPriority: U,
            })
          : S === "script" &&
            o.d.X(v, {
              crossOrigin: E,
              integrity: M,
              fetchPriority: U,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
      }
    }),
    (Te.preinitModule = function (v, g) {
      if (typeof v == "string")
        if (typeof g == "object" && g !== null) {
          if (g.as == null || g.as === "script") {
            var S = p(g.as, g.crossOrigin);
            o.d.M(v, {
              crossOrigin: S,
              integrity: typeof g.integrity == "string" ? g.integrity : void 0,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
          }
        } else g == null && o.d.M(v);
    }),
    (Te.preload = function (v, g) {
      if (
        typeof v == "string" &&
        typeof g == "object" &&
        g !== null &&
        typeof g.as == "string"
      ) {
        var S = g.as,
          E = p(S, g.crossOrigin);
        o.d.L(v, S, {
          crossOrigin: E,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          type: typeof g.type == "string" ? g.type : void 0,
          fetchPriority:
            typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
          referrerPolicy:
            typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
          imageSrcSet:
            typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
          media: typeof g.media == "string" ? g.media : void 0,
        });
      }
    }),
    (Te.preloadModule = function (v, g) {
      if (typeof v == "string")
        if (g) {
          var S = p(g.as, g.crossOrigin);
          o.d.m(v, {
            as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
            crossOrigin: S,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          });
        } else o.d.m(v);
    }),
    (Te.requestFormReset = function (v) {
      o.d.r(v);
    }),
    (Te.unstable_batchedUpdates = function (v, g) {
      return v(g);
    }),
    (Te.useFormState = function (v, g, S) {
      return h.H.useFormState(v, g, S);
    }),
    (Te.useFormStatus = function () {
      return h.H.useHostTransitionStatus();
    }),
    (Te.version = "19.1.0"),
    Te
  );
}
var s0;
function h1() {
  if (s0) return ms.exports;
  s0 = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return a(), (ms.exports = d1()), ms.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var f0;
function m1() {
  if (f0) return Li;
  f0 = 1;
  var a = f1(),
    i = qs(),
    u = h1();
  function o(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function f(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function h(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function p(t) {
    if (f(t) !== t) throw Error(o(188));
  }
  function v(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = f(t)), e === null)) throw Error(o(188));
      return e !== t ? null : t;
    }
    for (var n = t, l = e; ; ) {
      var r = n.return;
      if (r === null) break;
      var c = r.alternate;
      if (c === null) {
        if (((l = r.return), l !== null)) {
          n = l;
          continue;
        }
        break;
      }
      if (r.child === c.child) {
        for (c = r.child; c; ) {
          if (c === n) return p(r), t;
          if (c === l) return p(r), e;
          c = c.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== l.return) (n = r), (l = c);
      else {
        for (var d = !1, m = r.child; m; ) {
          if (m === n) {
            (d = !0), (n = r), (l = c);
            break;
          }
          if (m === l) {
            (d = !0), (l = r), (n = c);
            break;
          }
          m = m.sibling;
        }
        if (!d) {
          for (m = c.child; m; ) {
            if (m === n) {
              (d = !0), (n = c), (l = r);
              break;
            }
            if (m === l) {
              (d = !0), (l = c), (n = r);
              break;
            }
            m = m.sibling;
          }
          if (!d) throw Error(o(189));
        }
      }
      if (n.alternate !== l) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? t : e;
  }
  function g(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = g(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var S = Object.assign,
    E = Symbol.for("react.element"),
    M = Symbol.for("react.transitional.element"),
    U = Symbol.for("react.portal"),
    O = Symbol.for("react.fragment"),
    T = Symbol.for("react.strict_mode"),
    q = Symbol.for("react.profiler"),
    Q = Symbol.for("react.provider"),
    F = Symbol.for("react.consumer"),
    V = Symbol.for("react.context"),
    G = Symbol.for("react.forward_ref"),
    _ = Symbol.for("react.suspense"),
    J = Symbol.for("react.suspense_list"),
    P = Symbol.for("react.memo"),
    tt = Symbol.for("react.lazy"),
    I = Symbol.for("react.activity"),
    y = Symbol.for("react.memo_cache_sentinel"),
    X = Symbol.iterator;
  function et(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (X && t[X]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var it = Symbol.for("react.client.reference");
  function At(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === it ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case O:
        return "Fragment";
      case q:
        return "Profiler";
      case T:
        return "StrictMode";
      case _:
        return "Suspense";
      case J:
        return "SuspenseList";
      case I:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case U:
          return "Portal";
        case V:
          return (t.displayName || "Context") + ".Provider";
        case F:
          return (t._context.displayName || "Context") + ".Consumer";
        case G:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case P:
          return (
            (e = t.displayName || null), e !== null ? e : At(t.type) || "Memo"
          );
        case tt:
          (e = t._payload), (t = t._init);
          try {
            return At(t(e));
          } catch {}
      }
    return null;
  }
  var mt = Array.isArray,
    B = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    K = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    lt = { pending: !1, data: null, method: null, action: null },
    ct = [],
    x = -1;
  function L(t) {
    return { current: t };
  }
  function Z(t) {
    0 > x || ((t.current = ct[x]), (ct[x] = null), x--);
  }
  function W(t, e) {
    x++, (ct[x] = t.current), (t.current = e);
  }
  var rt = L(null),
    gt = L(null),
    nt = L(null),
    Mt = L(null);
  function Dt(t, e) {
    switch ((W(nt, e), W(gt, t), W(rt, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Dm(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = Dm(e)), (t = wm(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    Z(rt), W(rt, t);
  }
  function Be() {
    Z(rt), Z(gt), Z(nt);
  }
  function Sa(t) {
    t.memoizedState !== null && W(Mt, t);
    var e = rt.current,
      n = wm(e, t.type);
    e !== n && (W(gt, t), W(rt, n));
  }
  function Gn(t) {
    gt.current === t && (Z(rt), Z(gt)),
      Mt.current === t && (Z(Mt), (Ni._currentValue = lt));
  }
  var Vn = Object.prototype.hasOwnProperty,
    Xn = a.unstable_scheduleCallback,
    fn = a.unstable_cancelCallback,
    Xa = a.unstable_shouldYield,
    ql = a.unstable_requestPaint,
    ce = a.unstable_now,
    nn = a.unstable_getCurrentPriorityLevel,
    Se = a.unstable_ImmediatePriority,
    dn = a.unstable_UserBlockingPriority,
    hn = a.unstable_NormalPriority,
    ht = a.unstable_LowPriority,
    lr = a.unstable_IdlePriority,
    ir = a.log,
    rr = a.unstable_setDisableYieldValue,
    se = null,
    Ct = null;
  function Ft(t) {
    if (
      (typeof ir == "function" && rr(t),
      Ct && typeof Ct.setStrictMode == "function")
    )
      try {
        Ct.setStrictMode(se, t);
      } catch {}
  }
  var Gt = Math.clz32 ? Math.clz32 : Xp,
    Yl = Math.log,
    Fo = Math.LN2;
  function Xp(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((Yl(t) / Fo) | 0)) | 0;
  }
  var or = 256,
    ur = 4194304;
  function xa(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return 64;
      case 128:
        return 128;
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
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function cr(t, e, n) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var r = 0,
      c = t.suspendedLanes,
      d = t.pingedLanes;
    t = t.warmLanes;
    var m = l & 134217727;
    return (
      m !== 0
        ? ((l = m & ~c),
          l !== 0
            ? (r = xa(l))
            : ((d &= m),
              d !== 0
                ? (r = xa(d))
                : n || ((n = m & ~t), n !== 0 && (r = xa(n)))))
        : ((m = l & ~c),
          m !== 0
            ? (r = xa(m))
            : d !== 0
            ? (r = xa(d))
            : n || ((n = l & ~t), n !== 0 && (r = xa(n)))),
      r === 0
        ? 0
        : e !== 0 &&
          e !== r &&
          (e & c) === 0 &&
          ((c = r & -r),
          (n = e & -e),
          c >= n || (c === 32 && (n & 4194048) !== 0))
        ? e
        : r
    );
  }
  function Gl(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Qp(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
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
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function mf() {
    var t = or;
    return (or <<= 1), (or & 4194048) === 0 && (or = 256), t;
  }
  function pf() {
    var t = ur;
    return (ur <<= 1), (ur & 62914560) === 0 && (ur = 4194304), t;
  }
  function Po(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Vl(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function Kp(t, e, n, l, r, c) {
    var d = t.pendingLanes;
    (t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0);
    var m = t.entanglements,
      b = t.expirationTimes,
      z = t.hiddenUpdates;
    for (n = d & ~n; 0 < n; ) {
      var $ = 31 - Gt(n),
        Y = 1 << $;
      (m[$] = 0), (b[$] = -1);
      var D = z[$];
      if (D !== null)
        for (z[$] = null, $ = 0; $ < D.length; $++) {
          var w = D[$];
          w !== null && (w.lane &= -536870913);
        }
      n &= ~Y;
    }
    l !== 0 && gf(t, l, 0),
      c !== 0 && r === 0 && t.tag !== 0 && (t.suspendedLanes |= c & ~(d & ~e));
  }
  function gf(t, e, n) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var l = 31 - Gt(e);
    (t.entangledLanes |= e),
      (t.entanglements[l] = t.entanglements[l] | 1073741824 | (n & 4194090));
  }
  function yf(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var l = 31 - Gt(n),
        r = 1 << l;
      (r & e) | (t[l] & e) && (t[l] |= e), (n &= ~r);
    }
  }
  function Io(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function tu(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function vf() {
    var t = K.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Fm(t.type));
  }
  function Zp(t, e) {
    var n = K.p;
    try {
      return (K.p = t), e();
    } finally {
      K.p = n;
    }
  }
  var Qn = Math.random().toString(36).slice(2),
    xe = "__reactFiber$" + Qn,
    Oe = "__reactProps$" + Qn,
    Qa = "__reactContainer$" + Qn,
    eu = "__reactEvents$" + Qn,
    Jp = "__reactListeners$" + Qn,
    Wp = "__reactHandles$" + Qn,
    bf = "__reactResources$" + Qn,
    Xl = "__reactMarker$" + Qn;
  function nu(t) {
    delete t[xe], delete t[Oe], delete t[eu], delete t[Jp], delete t[Wp];
  }
  function Ka(t) {
    var e = t[xe];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[Qa] || n[xe])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = Um(t); t !== null; ) {
            if ((n = t[xe])) return n;
            t = Um(t);
          }
        return e;
      }
      (t = n), (n = t.parentNode);
    }
    return null;
  }
  function Za(t) {
    if ((t = t[xe] || t[Qa])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Ql(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(o(33));
  }
  function Ja(t) {
    var e = t[bf];
    return (
      e ||
        (e = t[bf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function fe(t) {
    t[Xl] = !0;
  }
  var Sf = new Set(),
    xf = {};
  function Ca(t, e) {
    Wa(t, e), Wa(t + "Capture", e);
  }
  function Wa(t, e) {
    for (xf[t] = e, t = 0; t < e.length; t++) Sf.add(e[t]);
  }
  var Fp = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Cf = {},
    Tf = {};
  function Pp(t) {
    return Vn.call(Tf, t)
      ? !0
      : Vn.call(Cf, t)
      ? !1
      : Fp.test(t)
      ? (Tf[t] = !0)
      : ((Cf[t] = !0), !1);
  }
  function sr(t, e, n) {
    if (Pp(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var l = e.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function fr(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function Mn(t, e, n, l) {
    if (l === null) t.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + l);
    }
  }
  var au, Ef;
  function Fa(t) {
    if (au === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        (au = (e && e[1]) || ""),
          (Ef =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      au +
      t +
      Ef
    );
  }
  var lu = !1;
  function iu(t, e) {
    if (!t || lu) return "";
    lu = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var Y = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(Y.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(Y, []);
                } catch (w) {
                  var D = w;
                }
                Reflect.construct(t, [], Y);
              } else {
                try {
                  Y.call();
                } catch (w) {
                  D = w;
                }
                t.call(Y.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (w) {
                D = w;
              }
              (Y = t()) &&
                typeof Y.catch == "function" &&
                Y.catch(function () {});
            }
          } catch (w) {
            if (w && D && typeof w.stack == "string") return [w.stack, D.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var r = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      r &&
        r.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var c = l.DetermineComponentFrameRoot(),
        d = c[0],
        m = c[1];
      if (d && m) {
        var b = d.split(`
`),
          z = m.split(`
`);
        for (
          r = l = 0;
          l < b.length && !b[l].includes("DetermineComponentFrameRoot");

        )
          l++;
        for (; r < z.length && !z[r].includes("DetermineComponentFrameRoot"); )
          r++;
        if (l === b.length || r === z.length)
          for (
            l = b.length - 1, r = z.length - 1;
            1 <= l && 0 <= r && b[l] !== z[r];

          )
            r--;
        for (; 1 <= l && 0 <= r; l--, r--)
          if (b[l] !== z[r]) {
            if (l !== 1 || r !== 1)
              do
                if ((l--, r--, 0 > r || b[l] !== z[r])) {
                  var $ =
                    `
` + b[l].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      $.includes("<anonymous>") &&
                      ($ = $.replace("<anonymous>", t.displayName)),
                    $
                  );
                }
              while (1 <= l && 0 <= r);
            break;
          }
      }
    } finally {
      (lu = !1), (Error.prepareStackTrace = n);
    }
    return (n = t ? t.displayName || t.name : "") ? Fa(n) : "";
  }
  function Ip(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Fa(t.type);
      case 16:
        return Fa("Lazy");
      case 13:
        return Fa("Suspense");
      case 19:
        return Fa("SuspenseList");
      case 0:
      case 15:
        return iu(t.type, !1);
      case 11:
        return iu(t.type.render, !1);
      case 1:
        return iu(t.type, !0);
      case 31:
        return Fa("Activity");
      default:
        return "";
    }
  }
  function Af(t) {
    try {
      var e = "";
      do (e += Ip(t)), (t = t.return);
      while (t);
      return e;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  function Ge(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Mf(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function tg(t) {
    var e = Mf(t) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      l = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var r = n.get,
        c = n.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return r.call(this);
          },
          set: function (d) {
            (l = "" + d), c.call(this, d);
          },
        }),
        Object.defineProperty(t, e, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (d) {
            l = "" + d;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function dr(t) {
    t._valueTracker || (t._valueTracker = tg(t));
  }
  function Of(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      l = "";
    return (
      t && (l = Mf(t) ? (t.checked ? "true" : "false") : t.value),
      (t = l),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function hr(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var eg = /[\n"\\]/g;
  function Ve(t) {
    return t.replace(eg, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function ru(t, e, n, l, r, c, d, m) {
    (t.name = ""),
      d != null &&
      typeof d != "function" &&
      typeof d != "symbol" &&
      typeof d != "boolean"
        ? (t.type = d)
        : t.removeAttribute("type"),
      e != null
        ? d === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + Ge(e))
          : t.value !== "" + Ge(e) && (t.value = "" + Ge(e))
        : (d !== "submit" && d !== "reset") || t.removeAttribute("value"),
      e != null
        ? ou(t, d, Ge(e))
        : n != null
        ? ou(t, d, Ge(n))
        : l != null && t.removeAttribute("value"),
      r == null && c != null && (t.defaultChecked = !!c),
      r != null &&
        (t.checked = r && typeof r != "function" && typeof r != "symbol"),
      m != null &&
      typeof m != "function" &&
      typeof m != "symbol" &&
      typeof m != "boolean"
        ? (t.name = "" + Ge(m))
        : t.removeAttribute("name");
  }
  function Rf(t, e, n, l, r, c, d, m) {
    if (
      (c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (t.type = c),
      e != null || n != null)
    ) {
      if (!((c !== "submit" && c !== "reset") || e != null)) return;
      (n = n != null ? "" + Ge(n) : ""),
        (e = e != null ? "" + Ge(e) : n),
        m || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (l = l ?? r),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (t.checked = m ? t.checked : !!l),
      (t.defaultChecked = !!l),
      d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean" &&
        (t.name = d);
  }
  function ou(t, e, n) {
    (e === "number" && hr(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function Pa(t, e, n, l) {
    if (((t = t.options), e)) {
      e = {};
      for (var r = 0; r < n.length; r++) e["$" + n[r]] = !0;
      for (n = 0; n < t.length; n++)
        (r = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== r && (t[n].selected = r),
          r && l && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + Ge(n), e = null, r = 0; r < t.length; r++) {
        if (t[r].value === n) {
          (t[r].selected = !0), l && (t[r].defaultSelected = !0);
          return;
        }
        e !== null || t[r].disabled || (e = t[r]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function zf(t, e, n) {
    if (
      e != null &&
      ((e = "" + Ge(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Ge(n) : "";
  }
  function _f(t, e, n, l) {
    if (e == null) {
      if (l != null) {
        if (n != null) throw Error(o(92));
        if (mt(l)) {
          if (1 < l.length) throw Error(o(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), (e = n);
    }
    (n = Ge(e)),
      (t.defaultValue = n),
      (l = t.textContent),
      l === n && l !== "" && l !== null && (t.value = l);
  }
  function Ia(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var ng = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Df(t, e, n) {
    var l = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? l
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : l
      ? t.setProperty(e, n)
      : typeof n != "number" || n === 0 || ng.has(e)
      ? e === "float"
        ? (t.cssFloat = n)
        : (t[e] = ("" + n).trim())
      : (t[e] = n + "px");
  }
  function wf(t, e, n) {
    if (e != null && typeof e != "object") throw Error(o(62));
    if (((t = t.style), n != null)) {
      for (var l in n)
        !n.hasOwnProperty(l) ||
          (e != null && e.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? t.setProperty(l, "")
            : l === "float"
            ? (t.cssFloat = "")
            : (t[l] = ""));
      for (var r in e)
        (l = e[r]), e.hasOwnProperty(r) && n[r] !== l && Df(t, r, l);
    } else for (var c in e) e.hasOwnProperty(c) && Df(t, c, e[c]);
  }
  function uu(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  var ag = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    lg =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function mr(t) {
    return lg.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var cu = null;
  function su(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var tl = null,
    el = null;
  function Bf(t) {
    var e = Za(t);
    if (e && (t = e.stateNode)) {
      var n = t[Oe] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (ru(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + Ve("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var l = n[e];
              if (l !== t && l.form === t.form) {
                var r = l[Oe] || null;
                if (!r) throw Error(o(90));
                ru(
                  l,
                  r.value,
                  r.defaultValue,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              (l = n[e]), l.form === t.form && Of(l);
          }
          break t;
        case "textarea":
          zf(t, n.value, n.defaultValue);
          break t;
        case "select":
          (e = n.value), e != null && Pa(t, !!n.multiple, e, !1);
      }
    }
  }
  var fu = !1;
  function Nf(t, e, n) {
    if (fu) return t(e, n);
    fu = !0;
    try {
      var l = t(e);
      return l;
    } finally {
      if (
        ((fu = !1),
        (tl !== null || el !== null) &&
          (Ir(), tl && ((e = tl), (t = el), (el = tl = null), Bf(e), t)))
      )
        for (e = 0; e < t.length; e++) Bf(t[e]);
    }
  }
  function Kl(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var l = n[Oe] || null;
    if (l === null) return null;
    n = l[e];
    t: switch (e) {
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
        (l = !l.disabled) ||
          ((t = t.type),
          (l = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !l);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(o(231, e, typeof n));
    return n;
  }
  var On = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    du = !1;
  if (On)
    try {
      var Zl = {};
      Object.defineProperty(Zl, "passive", {
        get: function () {
          du = !0;
        },
      }),
        window.addEventListener("test", Zl, Zl),
        window.removeEventListener("test", Zl, Zl);
    } catch {
      du = !1;
    }
  var Kn = null,
    hu = null,
    pr = null;
  function jf() {
    if (pr) return pr;
    var t,
      e = hu,
      n = e.length,
      l,
      r = "value" in Kn ? Kn.value : Kn.textContent,
      c = r.length;
    for (t = 0; t < n && e[t] === r[t]; t++);
    var d = n - t;
    for (l = 1; l <= d && e[n - l] === r[c - l]; l++);
    return (pr = r.slice(t, 1 < l ? 1 - l : void 0));
  }
  function gr(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function yr() {
    return !0;
  }
  function Uf() {
    return !1;
  }
  function Re(t) {
    function e(n, l, r, c, d) {
      (this._reactName = n),
        (this._targetInst = r),
        (this.type = l),
        (this.nativeEvent = c),
        (this.target = d),
        (this.currentTarget = null);
      for (var m in t)
        t.hasOwnProperty(m) && ((n = t[m]), (this[m] = n ? n(c) : c[m]));
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? yr
          : Uf),
        (this.isPropagationStopped = Uf),
        this
      );
    }
    return (
      S(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = yr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = yr));
        },
        persist: function () {},
        isPersistent: yr,
      }),
      e
    );
  }
  var Ta = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    vr = Re(Ta),
    Jl = S({}, Ta, { view: 0, detail: 0 }),
    ig = Re(Jl),
    mu,
    pu,
    Wl,
    br = S({}, Jl, {
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
      getModifierState: yu,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Wl &&
              (Wl && t.type === "mousemove"
                ? ((mu = t.screenX - Wl.screenX), (pu = t.screenY - Wl.screenY))
                : (pu = mu = 0),
              (Wl = t)),
            mu);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : pu;
      },
    }),
    Hf = Re(br),
    rg = S({}, br, { dataTransfer: 0 }),
    og = Re(rg),
    ug = S({}, Jl, { relatedTarget: 0 }),
    gu = Re(ug),
    cg = S({}, Ta, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    sg = Re(cg),
    fg = S({}, Ta, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    dg = Re(fg),
    hg = S({}, Ta, { data: 0 }),
    $f = Re(hg),
    mg = {
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
    pg = {
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
    gg = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function yg(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = gg[t])
      ? !!e[t]
      : !1;
  }
  function yu() {
    return yg;
  }
  var vg = S({}, Jl, {
      key: function (t) {
        if (t.key) {
          var e = mg[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = gr(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? pg[t.keyCode] || "Unidentified"
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
      getModifierState: yu,
      charCode: function (t) {
        return t.type === "keypress" ? gr(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? gr(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    bg = Re(vg),
    Sg = S({}, br, {
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
    kf = Re(Sg),
    xg = S({}, Jl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: yu,
    }),
    Cg = Re(xg),
    Tg = S({}, Ta, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Eg = Re(Tg),
    Ag = S({}, br, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Mg = Re(Ag),
    Og = S({}, Ta, { newState: 0, oldState: 0 }),
    Rg = Re(Og),
    zg = [9, 13, 27, 32],
    vu = On && "CompositionEvent" in window,
    Fl = null;
  On && "documentMode" in document && (Fl = document.documentMode);
  var _g = On && "TextEvent" in window && !Fl,
    Lf = On && (!vu || (Fl && 8 < Fl && 11 >= Fl)),
    qf = " ",
    Yf = !1;
  function Gf(t, e) {
    switch (t) {
      case "keyup":
        return zg.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Vf(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var nl = !1;
  function Dg(t, e) {
    switch (t) {
      case "compositionend":
        return Vf(e);
      case "keypress":
        return e.which !== 32 ? null : ((Yf = !0), qf);
      case "textInput":
        return (t = e.data), t === qf && Yf ? null : t;
      default:
        return null;
    }
  }
  function wg(t, e) {
    if (nl)
      return t === "compositionend" || (!vu && Gf(t, e))
        ? ((t = jf()), (pr = hu = Kn = null), (nl = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Lf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Bg = {
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
  function Xf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Bg[t.type] : e === "textarea";
  }
  function Qf(t, e, n, l) {
    tl ? (el ? el.push(l) : (el = [l])) : (tl = l),
      (e = io(e, "onChange")),
      0 < e.length &&
        ((n = new vr("onChange", "change", null, n, l)),
        t.push({ event: n, listeners: e }));
  }
  var Pl = null,
    Il = null;
  function Ng(t) {
    Mm(t, 0);
  }
  function Sr(t) {
    var e = Ql(t);
    if (Of(e)) return t;
  }
  function Kf(t, e) {
    if (t === "change") return e;
  }
  var Zf = !1;
  if (On) {
    var bu;
    if (On) {
      var Su = "oninput" in document;
      if (!Su) {
        var Jf = document.createElement("div");
        Jf.setAttribute("oninput", "return;"),
          (Su = typeof Jf.oninput == "function");
      }
      bu = Su;
    } else bu = !1;
    Zf = bu && (!document.documentMode || 9 < document.documentMode);
  }
  function Wf() {
    Pl && (Pl.detachEvent("onpropertychange", Ff), (Il = Pl = null));
  }
  function Ff(t) {
    if (t.propertyName === "value" && Sr(Il)) {
      var e = [];
      Qf(e, Il, t, su(t)), Nf(Ng, e);
    }
  }
  function jg(t, e, n) {
    t === "focusin"
      ? (Wf(), (Pl = e), (Il = n), Pl.attachEvent("onpropertychange", Ff))
      : t === "focusout" && Wf();
  }
  function Ug(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Sr(Il);
  }
  function Hg(t, e) {
    if (t === "click") return Sr(e);
  }
  function $g(t, e) {
    if (t === "input" || t === "change") return Sr(e);
  }
  function kg(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var Ne = typeof Object.is == "function" ? Object.is : kg;
  function ti(t, e) {
    if (Ne(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      l = Object.keys(e);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var r = n[l];
      if (!Vn.call(e, r) || !Ne(t[r], e[r])) return !1;
    }
    return !0;
  }
  function Pf(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function If(t, e) {
    var n = Pf(t);
    t = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (((l = t + n.textContent.length), t <= e && l >= e))
          return { node: n, offset: e - t };
        t = l;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Pf(n);
    }
  }
  function td(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? td(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function ed(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = hr(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = hr(t.document);
    }
    return e;
  }
  function xu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var Lg = On && "documentMode" in document && 11 >= document.documentMode,
    al = null,
    Cu = null,
    ei = null,
    Tu = !1;
  function nd(t, e, n) {
    var l =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Tu ||
      al == null ||
      al !== hr(l) ||
      ((l = al),
      "selectionStart" in l && xu(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (ei && ti(ei, l)) ||
        ((ei = l),
        (l = io(Cu, "onSelect")),
        0 < l.length &&
          ((e = new vr("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: l }),
          (e.target = al))));
  }
  function Ea(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var ll = {
      animationend: Ea("Animation", "AnimationEnd"),
      animationiteration: Ea("Animation", "AnimationIteration"),
      animationstart: Ea("Animation", "AnimationStart"),
      transitionrun: Ea("Transition", "TransitionRun"),
      transitionstart: Ea("Transition", "TransitionStart"),
      transitioncancel: Ea("Transition", "TransitionCancel"),
      transitionend: Ea("Transition", "TransitionEnd"),
    },
    Eu = {},
    ad = {};
  On &&
    ((ad = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ll.animationend.animation,
      delete ll.animationiteration.animation,
      delete ll.animationstart.animation),
    "TransitionEvent" in window || delete ll.transitionend.transition);
  function Aa(t) {
    if (Eu[t]) return Eu[t];
    if (!ll[t]) return t;
    var e = ll[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in ad) return (Eu[t] = e[n]);
    return t;
  }
  var ld = Aa("animationend"),
    id = Aa("animationiteration"),
    rd = Aa("animationstart"),
    qg = Aa("transitionrun"),
    Yg = Aa("transitionstart"),
    Gg = Aa("transitioncancel"),
    od = Aa("transitionend"),
    ud = new Map(),
    Au =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Au.push("scrollEnd");
  function an(t, e) {
    ud.set(t, e), Ca(e, [t]);
  }
  var cd = new WeakMap();
  function Xe(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = cd.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: Af(e) }), cd.set(t, e), e);
    }
    return { value: t, source: e, stack: Af(e) };
  }
  var Qe = [],
    il = 0,
    Mu = 0;
  function xr() {
    for (var t = il, e = (Mu = il = 0); e < t; ) {
      var n = Qe[e];
      Qe[e++] = null;
      var l = Qe[e];
      Qe[e++] = null;
      var r = Qe[e];
      Qe[e++] = null;
      var c = Qe[e];
      if (((Qe[e++] = null), l !== null && r !== null)) {
        var d = l.pending;
        d === null ? (r.next = r) : ((r.next = d.next), (d.next = r)),
          (l.pending = r);
      }
      c !== 0 && sd(n, r, c);
    }
  }
  function Cr(t, e, n, l) {
    (Qe[il++] = t),
      (Qe[il++] = e),
      (Qe[il++] = n),
      (Qe[il++] = l),
      (Mu |= l),
      (t.lanes |= l),
      (t = t.alternate),
      t !== null && (t.lanes |= l);
  }
  function Ou(t, e, n, l) {
    return Cr(t, e, n, l), Tr(t);
  }
  function rl(t, e) {
    return Cr(t, null, null, e), Tr(t);
  }
  function sd(t, e, n) {
    t.lanes |= n;
    var l = t.alternate;
    l !== null && (l.lanes |= n);
    for (var r = !1, c = t.return; c !== null; )
      (c.childLanes |= n),
        (l = c.alternate),
        l !== null && (l.childLanes |= n),
        c.tag === 22 &&
          ((t = c.stateNode), t === null || t._visibility & 1 || (r = !0)),
        (t = c),
        (c = c.return);
    return t.tag === 3
      ? ((c = t.stateNode),
        r &&
          e !== null &&
          ((r = 31 - Gt(n)),
          (t = c.hiddenUpdates),
          (l = t[r]),
          l === null ? (t[r] = [e]) : l.push(e),
          (e.lane = n | 536870912)),
        c)
      : null;
  }
  function Tr(t) {
    if (50 < Mi) throw ((Mi = 0), (Bc = null), Error(o(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var ol = {};
  function Vg(t, e, n, l) {
    (this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function je(t, e, n, l) {
    return new Vg(t, e, n, l);
  }
  function Ru(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function Rn(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = je(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 65011712),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function fd(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function Er(t, e, n, l, r, c) {
    var d = 0;
    if (((l = t), typeof t == "function")) Ru(t) && (d = 1);
    else if (typeof t == "string")
      d = Qy(t, n, rt.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case I:
          return (t = je(31, n, e, r)), (t.elementType = I), (t.lanes = c), t;
        case O:
          return Ma(n.children, r, c, e);
        case T:
          (d = 8), (r |= 24);
          break;
        case q:
          return (
            (t = je(12, n, e, r | 2)), (t.elementType = q), (t.lanes = c), t
          );
        case _:
          return (t = je(13, n, e, r)), (t.elementType = _), (t.lanes = c), t;
        case J:
          return (t = je(19, n, e, r)), (t.elementType = J), (t.lanes = c), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case Q:
              case V:
                d = 10;
                break t;
              case F:
                d = 9;
                break t;
              case G:
                d = 11;
                break t;
              case P:
                d = 14;
                break t;
              case tt:
                (d = 16), (l = null);
                break t;
            }
          (d = 29),
            (n = Error(o(130, t === null ? "null" : typeof t, ""))),
            (l = null);
      }
    return (
      (e = je(d, n, e, r)), (e.elementType = t), (e.type = l), (e.lanes = c), e
    );
  }
  function Ma(t, e, n, l) {
    return (t = je(7, t, l, e)), (t.lanes = n), t;
  }
  function zu(t, e, n) {
    return (t = je(6, t, null, e)), (t.lanes = n), t;
  }
  function _u(t, e, n) {
    return (
      (e = je(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var ul = [],
    cl = 0,
    Ar = null,
    Mr = 0,
    Ke = [],
    Ze = 0,
    Oa = null,
    zn = 1,
    _n = "";
  function Ra(t, e) {
    (ul[cl++] = Mr), (ul[cl++] = Ar), (Ar = t), (Mr = e);
  }
  function dd(t, e, n) {
    (Ke[Ze++] = zn), (Ke[Ze++] = _n), (Ke[Ze++] = Oa), (Oa = t);
    var l = zn;
    t = _n;
    var r = 32 - Gt(l) - 1;
    (l &= ~(1 << r)), (n += 1);
    var c = 32 - Gt(e) + r;
    if (30 < c) {
      var d = r - (r % 5);
      (c = (l & ((1 << d) - 1)).toString(32)),
        (l >>= d),
        (r -= d),
        (zn = (1 << (32 - Gt(e) + r)) | (n << r) | l),
        (_n = c + t);
    } else (zn = (1 << c) | (n << r) | l), (_n = t);
  }
  function Du(t) {
    t.return !== null && (Ra(t, 1), dd(t, 1, 0));
  }
  function wu(t) {
    for (; t === Ar; )
      (Ar = ul[--cl]), (ul[cl] = null), (Mr = ul[--cl]), (ul[cl] = null);
    for (; t === Oa; )
      (Oa = Ke[--Ze]),
        (Ke[Ze] = null),
        (_n = Ke[--Ze]),
        (Ke[Ze] = null),
        (zn = Ke[--Ze]),
        (Ke[Ze] = null);
  }
  var Ae = null,
    Kt = null,
    Ot = !1,
    za = null,
    mn = !1,
    Bu = Error(o(519));
  function _a(t) {
    var e = Error(o(418, ""));
    throw (li(Xe(e, t)), Bu);
  }
  function hd(t) {
    var e = t.stateNode,
      n = t.type,
      l = t.memoizedProps;
    switch (((e[xe] = t), (e[Oe] = l), n)) {
      case "dialog":
        St("cancel", e), St("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        St("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Ri.length; n++) St(Ri[n], e);
        break;
      case "source":
        St("error", e);
        break;
      case "img":
      case "image":
      case "link":
        St("error", e), St("load", e);
        break;
      case "details":
        St("toggle", e);
        break;
      case "input":
        St("invalid", e),
          Rf(
            e,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0
          ),
          dr(e);
        break;
      case "select":
        St("invalid", e);
        break;
      case "textarea":
        St("invalid", e), _f(e, l.value, l.defaultValue, l.children), dr(e);
    }
    (n = l.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      l.suppressHydrationWarning === !0 ||
      _m(e.textContent, n)
        ? (l.popover != null && (St("beforetoggle", e), St("toggle", e)),
          l.onScroll != null && St("scroll", e),
          l.onScrollEnd != null && St("scrollend", e),
          l.onClick != null && (e.onclick = ro),
          (e = !0))
        : (e = !1),
      e || _a(t);
  }
  function md(t) {
    for (Ae = t.return; Ae; )
      switch (Ae.tag) {
        case 5:
        case 13:
          mn = !1;
          return;
        case 27:
        case 3:
          mn = !0;
          return;
        default:
          Ae = Ae.return;
      }
  }
  function ni(t) {
    if (t !== Ae) return !1;
    if (!Ot) return md(t), (Ot = !0), !1;
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || Jc(t.type, t.memoizedProps))),
        (n = !n)),
      n && Kt && _a(t),
      md(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(o(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((n = t.data), n === "/$")) {
              if (e === 0) {
                Kt = rn(t.nextSibling);
                break t;
              }
              e--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
          t = t.nextSibling;
        }
        Kt = null;
      }
    } else
      e === 27
        ? ((e = Kt), ca(t.type) ? ((t = Ic), (Ic = null), (Kt = t)) : (Kt = e))
        : (Kt = Ae ? rn(t.stateNode.nextSibling) : null);
    return !0;
  }
  function ai() {
    (Kt = Ae = null), (Ot = !1);
  }
  function pd() {
    var t = za;
    return (
      t !== null &&
        (De === null ? (De = t) : De.push.apply(De, t), (za = null)),
      t
    );
  }
  function li(t) {
    za === null ? (za = [t]) : za.push(t);
  }
  var Nu = L(null),
    Da = null,
    Dn = null;
  function Zn(t, e, n) {
    W(Nu, e._currentValue), (e._currentValue = n);
  }
  function wn(t) {
    (t._currentValue = Nu.current), Z(Nu);
  }
  function ju(t, e, n) {
    for (; t !== null; ) {
      var l = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), l !== null && (l.childLanes |= e))
          : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function Uu(t, e, n, l) {
    var r = t.child;
    for (r !== null && (r.return = t); r !== null; ) {
      var c = r.dependencies;
      if (c !== null) {
        var d = r.child;
        c = c.firstContext;
        t: for (; c !== null; ) {
          var m = c;
          c = r;
          for (var b = 0; b < e.length; b++)
            if (m.context === e[b]) {
              (c.lanes |= n),
                (m = c.alternate),
                m !== null && (m.lanes |= n),
                ju(c.return, n, t),
                l || (d = null);
              break t;
            }
          c = m.next;
        }
      } else if (r.tag === 18) {
        if (((d = r.return), d === null)) throw Error(o(341));
        (d.lanes |= n),
          (c = d.alternate),
          c !== null && (c.lanes |= n),
          ju(d, n, t),
          (d = null);
      } else d = r.child;
      if (d !== null) d.return = r;
      else
        for (d = r; d !== null; ) {
          if (d === t) {
            d = null;
            break;
          }
          if (((r = d.sibling), r !== null)) {
            (r.return = d.return), (d = r);
            break;
          }
          d = d.return;
        }
      r = d;
    }
  }
  function ii(t, e, n, l) {
    t = null;
    for (var r = e, c = !1; r !== null; ) {
      if (!c) {
        if ((r.flags & 524288) !== 0) c = !0;
        else if ((r.flags & 262144) !== 0) break;
      }
      if (r.tag === 10) {
        var d = r.alternate;
        if (d === null) throw Error(o(387));
        if (((d = d.memoizedProps), d !== null)) {
          var m = r.type;
          Ne(r.pendingProps.value, d.value) ||
            (t !== null ? t.push(m) : (t = [m]));
        }
      } else if (r === Mt.current) {
        if (((d = r.alternate), d === null)) throw Error(o(387));
        d.memoizedState.memoizedState !== r.memoizedState.memoizedState &&
          (t !== null ? t.push(Ni) : (t = [Ni]));
      }
      r = r.return;
    }
    t !== null && Uu(e, t, n, l), (e.flags |= 262144);
  }
  function Or(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Ne(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function wa(t) {
    (Da = t),
      (Dn = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function Ce(t) {
    return gd(Da, t);
  }
  function Rr(t, e) {
    return Da === null && wa(t), gd(t, e);
  }
  function gd(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), Dn === null)) {
      if (t === null) throw Error(o(308));
      (Dn = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else Dn = Dn.next = e;
    return n;
  }
  var Xg =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, l) {
                  t.push(l);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                });
            };
          },
    Qg = a.unstable_scheduleCallback,
    Kg = a.unstable_NormalPriority,
    oe = {
      $$typeof: V,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Hu() {
    return { controller: new Xg(), data: new Map(), refCount: 0 };
  }
  function ri(t) {
    t.refCount--,
      t.refCount === 0 &&
        Qg(Kg, function () {
          t.controller.abort();
        });
  }
  var oi = null,
    $u = 0,
    sl = 0,
    fl = null;
  function Zg(t, e) {
    if (oi === null) {
      var n = (oi = []);
      ($u = 0),
        (sl = Lc()),
        (fl = {
          status: "pending",
          value: void 0,
          then: function (l) {
            n.push(l);
          },
        });
    }
    return $u++, e.then(yd, yd), e;
  }
  function yd() {
    if (--$u === 0 && oi !== null) {
      fl !== null && (fl.status = "fulfilled");
      var t = oi;
      (oi = null), (sl = 0), (fl = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Jg(t, e) {
    var n = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (r) {
          n.push(r);
        },
      };
    return (
      t.then(
        function () {
          (l.status = "fulfilled"), (l.value = e);
          for (var r = 0; r < n.length; r++) (0, n[r])(e);
        },
        function (r) {
          for (l.status = "rejected", l.reason = r, r = 0; r < n.length; r++)
            (0, n[r])(void 0);
        }
      ),
      l
    );
  }
  var vd = B.S;
  B.S = function (t, e) {
    typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      Zg(t, e),
      vd !== null && vd(t, e);
  };
  var Ba = L(null);
  function ku() {
    var t = Ba.current;
    return t !== null ? t : Yt.pooledCache;
  }
  function zr(t, e) {
    e === null ? W(Ba, Ba.current) : W(Ba, e.pool);
  }
  function bd() {
    var t = ku();
    return t === null ? null : { parent: oe._currentValue, pool: t };
  }
  var ui = Error(o(460)),
    Sd = Error(o(474)),
    _r = Error(o(542)),
    Lu = { then: function () {} };
  function xd(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function Dr() {}
  function Cd(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(Dr, Dr), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), Ed(t), t);
      default:
        if (typeof e.status == "string") e.then(Dr, Dr);
        else {
          if (((t = Yt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(o(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (l) {
                if (e.status === "pending") {
                  var r = e;
                  (r.status = "fulfilled"), (r.value = l);
                }
              },
              function (l) {
                if (e.status === "pending") {
                  var r = e;
                  (r.status = "rejected"), (r.reason = l);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), Ed(t), t);
        }
        throw ((ci = e), ui);
    }
  }
  var ci = null;
  function Td() {
    if (ci === null) throw Error(o(459));
    var t = ci;
    return (ci = null), t;
  }
  function Ed(t) {
    if (t === ui || t === _r) throw Error(o(483));
  }
  var Jn = !1;
  function qu(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Yu(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function Wn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Fn(t, e, n) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (wt & 2) !== 0)) {
      var r = l.pending;
      return (
        r === null ? (e.next = e) : ((e.next = r.next), (r.next = e)),
        (l.pending = e),
        (e = Tr(t)),
        sd(t, null, n),
        e
      );
    }
    return Cr(t, l, e, n), Tr(t);
  }
  function si(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))
    ) {
      var l = e.lanes;
      (l &= t.pendingLanes), (n |= l), (e.lanes = n), yf(t, n);
    }
  }
  function Gu(t, e) {
    var n = t.updateQueue,
      l = t.alternate;
    if (l !== null && ((l = l.updateQueue), n === l)) {
      var r = null,
        c = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var d = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          c === null ? (r = c = d) : (c = c.next = d), (n = n.next);
        } while (n !== null);
        c === null ? (r = c = e) : (c = c.next = e);
      } else r = c = e;
      (n = {
        baseState: l.baseState,
        firstBaseUpdate: r,
        lastBaseUpdate: c,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (t.updateQueue = n);
      return;
    }
    (t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e);
  }
  var Vu = !1;
  function fi() {
    if (Vu) {
      var t = fl;
      if (t !== null) throw t;
    }
  }
  function di(t, e, n, l) {
    Vu = !1;
    var r = t.updateQueue;
    Jn = !1;
    var c = r.firstBaseUpdate,
      d = r.lastBaseUpdate,
      m = r.shared.pending;
    if (m !== null) {
      r.shared.pending = null;
      var b = m,
        z = b.next;
      (b.next = null), d === null ? (c = z) : (d.next = z), (d = b);
      var $ = t.alternate;
      $ !== null &&
        (($ = $.updateQueue),
        (m = $.lastBaseUpdate),
        m !== d &&
          (m === null ? ($.firstBaseUpdate = z) : (m.next = z),
          ($.lastBaseUpdate = b)));
    }
    if (c !== null) {
      var Y = r.baseState;
      (d = 0), ($ = z = b = null), (m = c);
      do {
        var D = m.lane & -536870913,
          w = D !== m.lane;
        if (w ? (Tt & D) === D : (l & D) === D) {
          D !== 0 && D === sl && (Vu = !0),
            $ !== null &&
              ($ = $.next =
                {
                  lane: 0,
                  tag: m.tag,
                  payload: m.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var dt = t,
              st = m;
            D = e;
            var Ut = n;
            switch (st.tag) {
              case 1:
                if (((dt = st.payload), typeof dt == "function")) {
                  Y = dt.call(Ut, Y, D);
                  break t;
                }
                Y = dt;
                break t;
              case 3:
                dt.flags = (dt.flags & -65537) | 128;
              case 0:
                if (
                  ((dt = st.payload),
                  (D = typeof dt == "function" ? dt.call(Ut, Y, D) : dt),
                  D == null)
                )
                  break t;
                Y = S({}, Y, D);
                break t;
              case 2:
                Jn = !0;
            }
          }
          (D = m.callback),
            D !== null &&
              ((t.flags |= 64),
              w && (t.flags |= 8192),
              (w = r.callbacks),
              w === null ? (r.callbacks = [D]) : w.push(D));
        } else
          (w = {
            lane: D,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null,
          }),
            $ === null ? ((z = $ = w), (b = Y)) : ($ = $.next = w),
            (d |= D);
        if (((m = m.next), m === null)) {
          if (((m = r.shared.pending), m === null)) break;
          (w = m),
            (m = w.next),
            (w.next = null),
            (r.lastBaseUpdate = w),
            (r.shared.pending = null);
        }
      } while (!0);
      $ === null && (b = Y),
        (r.baseState = b),
        (r.firstBaseUpdate = z),
        (r.lastBaseUpdate = $),
        c === null && (r.shared.lanes = 0),
        (ia |= d),
        (t.lanes = d),
        (t.memoizedState = Y);
    }
  }
  function Ad(t, e) {
    if (typeof t != "function") throw Error(o(191, t));
    t.call(e);
  }
  function Md(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) Ad(n[t], e);
  }
  var dl = L(null),
    wr = L(0);
  function Od(t, e) {
    (t = kn), W(wr, t), W(dl, e), (kn = t | e.baseLanes);
  }
  function Xu() {
    W(wr, kn), W(dl, dl.current);
  }
  function Qu() {
    (kn = wr.current), Z(dl), Z(wr);
  }
  var Pn = 0,
    yt = null,
    Nt = null,
    ae = null,
    Br = !1,
    hl = !1,
    Na = !1,
    Nr = 0,
    hi = 0,
    ml = null,
    Wg = 0;
  function Pt() {
    throw Error(o(321));
  }
  function Ku(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!Ne(t[n], e[n])) return !1;
    return !0;
  }
  function Zu(t, e, n, l, r, c) {
    return (
      (Pn = c),
      (yt = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (B.H = t === null || t.memoizedState === null ? sh : fh),
      (Na = !1),
      (c = n(l, r)),
      (Na = !1),
      hl && (c = zd(e, n, l, r)),
      Rd(t),
      c
    );
  }
  function Rd(t) {
    B.H = Lr;
    var e = Nt !== null && Nt.next !== null;
    if (((Pn = 0), (ae = Nt = yt = null), (Br = !1), (hi = 0), (ml = null), e))
      throw Error(o(300));
    t === null ||
      de ||
      ((t = t.dependencies), t !== null && Or(t) && (de = !0));
  }
  function zd(t, e, n, l) {
    yt = t;
    var r = 0;
    do {
      if ((hl && (ml = null), (hi = 0), (hl = !1), 25 <= r))
        throw Error(o(301));
      if (((r += 1), (ae = Nt = null), t.updateQueue != null)) {
        var c = t.updateQueue;
        (c.lastEffect = null),
          (c.events = null),
          (c.stores = null),
          c.memoCache != null && (c.memoCache.index = 0);
      }
      (B.H = ay), (c = e(n, l));
    } while (hl);
    return c;
  }
  function Fg() {
    var t = B.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? mi(e) : e),
      (t = t.useState()[0]),
      (Nt !== null ? Nt.memoizedState : null) !== t && (yt.flags |= 1024),
      e
    );
  }
  function Ju() {
    var t = Nr !== 0;
    return (Nr = 0), t;
  }
  function Wu(t, e, n) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n);
  }
  function Fu(t) {
    if (Br) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      Br = !1;
    }
    (Pn = 0), (ae = Nt = yt = null), (hl = !1), (hi = Nr = 0), (ml = null);
  }
  function ze() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return ae === null ? (yt.memoizedState = ae = t) : (ae = ae.next = t), ae;
  }
  function le() {
    if (Nt === null) {
      var t = yt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Nt.next;
    var e = ae === null ? yt.memoizedState : ae.next;
    if (e !== null) (ae = e), (Nt = t);
    else {
      if (t === null)
        throw yt.alternate === null ? Error(o(467)) : Error(o(310));
      (Nt = t),
        (t = {
          memoizedState: Nt.memoizedState,
          baseState: Nt.baseState,
          baseQueue: Nt.baseQueue,
          queue: Nt.queue,
          next: null,
        }),
        ae === null ? (yt.memoizedState = ae = t) : (ae = ae.next = t);
    }
    return ae;
  }
  function Pu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function mi(t) {
    var e = hi;
    return (
      (hi += 1),
      ml === null && (ml = []),
      (t = Cd(ml, t, e)),
      (e = yt),
      (ae === null ? e.memoizedState : ae.next) === null &&
        ((e = e.alternate),
        (B.H = e === null || e.memoizedState === null ? sh : fh)),
      t
    );
  }
  function jr(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return mi(t);
      if (t.$$typeof === V) return Ce(t);
    }
    throw Error(o(438, String(t)));
  }
  function Iu(t) {
    var e = null,
      n = yt.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var l = yt.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (e = {
              data: l.data.map(function (r) {
                return r.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = Pu()), (yt.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), l = 0; l < t; l++) n[l] = y;
    return e.index++, n;
  }
  function Bn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Ur(t) {
    var e = le();
    return tc(e, Nt, t);
  }
  function tc(t, e, n) {
    var l = t.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = n;
    var r = t.baseQueue,
      c = l.pending;
    if (c !== null) {
      if (r !== null) {
        var d = r.next;
        (r.next = c.next), (c.next = d);
      }
      (e.baseQueue = r = c), (l.pending = null);
    }
    if (((c = t.baseState), r === null)) t.memoizedState = c;
    else {
      e = r.next;
      var m = (d = null),
        b = null,
        z = e,
        $ = !1;
      do {
        var Y = z.lane & -536870913;
        if (Y !== z.lane ? (Tt & Y) === Y : (Pn & Y) === Y) {
          var D = z.revertLane;
          if (D === 0)
            b !== null &&
              (b = b.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: z.action,
                  hasEagerState: z.hasEagerState,
                  eagerState: z.eagerState,
                  next: null,
                }),
              Y === sl && ($ = !0);
          else if ((Pn & D) === D) {
            (z = z.next), D === sl && ($ = !0);
            continue;
          } else
            (Y = {
              lane: 0,
              revertLane: z.revertLane,
              action: z.action,
              hasEagerState: z.hasEagerState,
              eagerState: z.eagerState,
              next: null,
            }),
              b === null ? ((m = b = Y), (d = c)) : (b = b.next = Y),
              (yt.lanes |= D),
              (ia |= D);
          (Y = z.action),
            Na && n(c, Y),
            (c = z.hasEagerState ? z.eagerState : n(c, Y));
        } else
          (D = {
            lane: Y,
            revertLane: z.revertLane,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null,
          }),
            b === null ? ((m = b = D), (d = c)) : (b = b.next = D),
            (yt.lanes |= Y),
            (ia |= Y);
        z = z.next;
      } while (z !== null && z !== e);
      if (
        (b === null ? (d = c) : (b.next = m),
        !Ne(c, t.memoizedState) && ((de = !0), $ && ((n = fl), n !== null)))
      )
        throw n;
      (t.memoizedState = c),
        (t.baseState = d),
        (t.baseQueue = b),
        (l.lastRenderedState = c);
    }
    return r === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
  }
  function ec(t) {
    var e = le(),
      n = e.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = t;
    var l = n.dispatch,
      r = n.pending,
      c = e.memoizedState;
    if (r !== null) {
      n.pending = null;
      var d = (r = r.next);
      do (c = t(c, d.action)), (d = d.next);
      while (d !== r);
      Ne(c, e.memoizedState) || (de = !0),
        (e.memoizedState = c),
        e.baseQueue === null && (e.baseState = c),
        (n.lastRenderedState = c);
    }
    return [c, l];
  }
  function _d(t, e, n) {
    var l = yt,
      r = le(),
      c = Ot;
    if (c) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = e();
    var d = !Ne((Nt || r).memoizedState, n);
    d && ((r.memoizedState = n), (de = !0)), (r = r.queue);
    var m = Bd.bind(null, l, r, t);
    if (
      (pi(2048, 8, m, [t]),
      r.getSnapshot !== e || d || (ae !== null && ae.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        pl(9, Hr(), wd.bind(null, l, r, n, e), null),
        Yt === null)
      )
        throw Error(o(349));
      c || (Pn & 124) !== 0 || Dd(l, e, n);
    }
    return n;
  }
  function Dd(t, e, n) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = yt.updateQueue),
      e === null
        ? ((e = Pu()), (yt.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
  }
  function wd(t, e, n, l) {
    (e.value = n), (e.getSnapshot = l), Nd(e) && jd(t);
  }
  function Bd(t, e, n) {
    return n(function () {
      Nd(e) && jd(t);
    });
  }
  function Nd(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Ne(t, n);
    } catch {
      return !0;
    }
  }
  function jd(t) {
    var e = rl(t, 2);
    e !== null && Le(e, t, 2);
  }
  function nc(t) {
    var e = ze();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), Na)) {
        Ft(!0);
        try {
          n();
        } finally {
          Ft(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Bn,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Ud(t, e, n, l) {
    return (t.baseState = n), tc(t, Nt, typeof l == "function" ? l : Bn);
  }
  function Pg(t, e, n, l, r) {
    if (kr(t)) throw Error(o(485));
    if (((t = e.action), t !== null)) {
      var c = {
        payload: r,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (d) {
          c.listeners.push(d);
        },
      };
      B.T !== null ? n(!0) : (c.isTransition = !1),
        l(c),
        (n = e.pending),
        n === null
          ? ((c.next = e.pending = c), Hd(e, c))
          : ((c.next = n.next), (e.pending = n.next = c));
    }
  }
  function Hd(t, e) {
    var n = e.action,
      l = e.payload,
      r = t.state;
    if (e.isTransition) {
      var c = B.T,
        d = {};
      B.T = d;
      try {
        var m = n(r, l),
          b = B.S;
        b !== null && b(d, m), $d(t, e, m);
      } catch (z) {
        ac(t, e, z);
      } finally {
        B.T = c;
      }
    } else
      try {
        (c = n(r, l)), $d(t, e, c);
      } catch (z) {
        ac(t, e, z);
      }
  }
  function $d(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (l) {
            kd(t, e, l);
          },
          function (l) {
            return ac(t, e, l);
          }
        )
      : kd(t, e, n);
  }
  function kd(t, e, n) {
    (e.status = "fulfilled"),
      (e.value = n),
      Ld(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), Hd(t, n)));
  }
  function ac(t, e, n) {
    var l = t.pending;
    if (((t.pending = null), l !== null)) {
      l = l.next;
      do (e.status = "rejected"), (e.reason = n), Ld(e), (e = e.next);
      while (e !== l);
    }
    t.action = null;
  }
  function Ld(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function qd(t, e) {
    return e;
  }
  function Yd(t, e) {
    if (Ot) {
      var n = Yt.formState;
      if (n !== null) {
        t: {
          var l = yt;
          if (Ot) {
            if (Kt) {
              e: {
                for (var r = Kt, c = mn; r.nodeType !== 8; ) {
                  if (!c) {
                    r = null;
                    break e;
                  }
                  if (((r = rn(r.nextSibling)), r === null)) {
                    r = null;
                    break e;
                  }
                }
                (c = r.data), (r = c === "F!" || c === "F" ? r : null);
              }
              if (r) {
                (Kt = rn(r.nextSibling)), (l = r.data === "F!");
                break t;
              }
            }
            _a(l);
          }
          l = !1;
        }
        l && (e = n[0]);
      }
    }
    return (
      (n = ze()),
      (n.memoizedState = n.baseState = e),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qd,
        lastRenderedState: e,
      }),
      (n.queue = l),
      (n = oh.bind(null, yt, l)),
      (l.dispatch = n),
      (l = nc(!1)),
      (c = uc.bind(null, yt, !1, l.queue)),
      (l = ze()),
      (r = { state: e, dispatch: null, action: t, pending: null }),
      (l.queue = r),
      (n = Pg.bind(null, yt, r, c, n)),
      (r.dispatch = n),
      (l.memoizedState = t),
      [e, n, !1]
    );
  }
  function Gd(t) {
    var e = le();
    return Vd(e, Nt, t);
  }
  function Vd(t, e, n) {
    if (
      ((e = tc(t, e, qd)[0]),
      (t = Ur(Bn)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var l = mi(e);
      } catch (d) {
        throw d === ui ? _r : d;
      }
    else l = e;
    e = le();
    var r = e.queue,
      c = r.dispatch;
    return (
      n !== e.memoizedState &&
        ((yt.flags |= 2048), pl(9, Hr(), Ig.bind(null, r, n), null)),
      [l, c, t]
    );
  }
  function Ig(t, e) {
    t.action = e;
  }
  function Xd(t) {
    var e = le(),
      n = Nt;
    if (n !== null) return Vd(e, n, t);
    le(), (e = e.memoizedState), (n = le());
    var l = n.queue.dispatch;
    return (n.memoizedState = t), [e, l, !1];
  }
  function pl(t, e, n, l) {
    return (
      (t = { tag: t, create: n, deps: l, inst: e, next: null }),
      (e = yt.updateQueue),
      e === null && ((e = Pu()), (yt.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((l = n.next), (n.next = t), (t.next = l), (e.lastEffect = t)),
      t
    );
  }
  function Hr() {
    return { destroy: void 0, resource: void 0 };
  }
  function Qd() {
    return le().memoizedState;
  }
  function $r(t, e, n, l) {
    var r = ze();
    (l = l === void 0 ? null : l),
      (yt.flags |= t),
      (r.memoizedState = pl(1 | e, Hr(), n, l));
  }
  function pi(t, e, n, l) {
    var r = le();
    l = l === void 0 ? null : l;
    var c = r.memoizedState.inst;
    Nt !== null && l !== null && Ku(l, Nt.memoizedState.deps)
      ? (r.memoizedState = pl(e, c, n, l))
      : ((yt.flags |= t), (r.memoizedState = pl(1 | e, c, n, l)));
  }
  function Kd(t, e) {
    $r(8390656, 8, t, e);
  }
  function Zd(t, e) {
    pi(2048, 8, t, e);
  }
  function Jd(t, e) {
    return pi(4, 2, t, e);
  }
  function Wd(t, e) {
    return pi(4, 4, t, e);
  }
  function Fd(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function Pd(t, e, n) {
    (n = n != null ? n.concat([t]) : null), pi(4, 4, Fd.bind(null, e, t), n);
  }
  function lc() {}
  function Id(t, e) {
    var n = le();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    return e !== null && Ku(e, l[1]) ? l[0] : ((n.memoizedState = [t, e]), t);
  }
  function th(t, e) {
    var n = le();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    if (e !== null && Ku(e, l[1])) return l[0];
    if (((l = t()), Na)) {
      Ft(!0);
      try {
        t();
      } finally {
        Ft(!1);
      }
    }
    return (n.memoizedState = [l, e]), l;
  }
  function ic(t, e, n) {
    return n === void 0 || (Pn & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = am()), (yt.lanes |= t), (ia |= t), n);
  }
  function eh(t, e, n, l) {
    return Ne(n, e)
      ? n
      : dl.current !== null
      ? ((t = ic(t, n, l)), Ne(t, e) || (de = !0), t)
      : (Pn & 42) === 0
      ? ((de = !0), (t.memoizedState = n))
      : ((t = am()), (yt.lanes |= t), (ia |= t), e);
  }
  function nh(t, e, n, l, r) {
    var c = K.p;
    K.p = c !== 0 && 8 > c ? c : 8;
    var d = B.T,
      m = {};
    (B.T = m), uc(t, !1, e, n);
    try {
      var b = r(),
        z = B.S;
      if (
        (z !== null && z(m, b),
        b !== null && typeof b == "object" && typeof b.then == "function")
      ) {
        var $ = Jg(b, l);
        gi(t, e, $, ke(t));
      } else gi(t, e, l, ke(t));
    } catch (Y) {
      gi(t, e, { then: function () {}, status: "rejected", reason: Y }, ke());
    } finally {
      (K.p = c), (B.T = d);
    }
  }
  function ty() {}
  function rc(t, e, n, l) {
    if (t.tag !== 5) throw Error(o(476));
    var r = ah(t).queue;
    nh(
      t,
      r,
      e,
      lt,
      n === null
        ? ty
        : function () {
            return lh(t), n(l);
          }
    );
  }
  function ah(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: lt,
      baseState: lt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Bn,
        lastRenderedState: lt,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Bn,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function lh(t) {
    var e = ah(t).next.queue;
    gi(t, e, {}, ke());
  }
  function oc() {
    return Ce(Ni);
  }
  function ih() {
    return le().memoizedState;
  }
  function rh() {
    return le().memoizedState;
  }
  function ey(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = ke();
          t = Wn(n);
          var l = Fn(e, t, n);
          l !== null && (Le(l, e, n), si(l, e, n)),
            (e = { cache: Hu() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function ny(t, e, n) {
    var l = ke();
    (n = {
      lane: l,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      kr(t)
        ? uh(e, n)
        : ((n = Ou(t, e, n, l)), n !== null && (Le(n, t, l), ch(n, e, l)));
  }
  function oh(t, e, n) {
    var l = ke();
    gi(t, e, n, l);
  }
  function gi(t, e, n, l) {
    var r = {
      lane: l,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (kr(t)) uh(e, r);
    else {
      var c = t.alternate;
      if (
        t.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = e.lastRenderedReducer), c !== null)
      )
        try {
          var d = e.lastRenderedState,
            m = c(d, n);
          if (((r.hasEagerState = !0), (r.eagerState = m), Ne(m, d)))
            return Cr(t, e, r, 0), Yt === null && xr(), !1;
        } catch {
        } finally {
        }
      if (((n = Ou(t, e, r, l)), n !== null))
        return Le(n, t, l), ch(n, e, l), !0;
    }
    return !1;
  }
  function uc(t, e, n, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: Lc(),
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      kr(t))
    ) {
      if (e) throw Error(o(479));
    } else (e = Ou(t, n, l, 2)), e !== null && Le(e, t, 2);
  }
  function kr(t) {
    var e = t.alternate;
    return t === yt || (e !== null && e === yt);
  }
  function uh(t, e) {
    hl = Br = !0;
    var n = t.pending;
    n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e);
  }
  function ch(t, e, n) {
    if ((n & 4194048) !== 0) {
      var l = e.lanes;
      (l &= t.pendingLanes), (n |= l), (e.lanes = n), yf(t, n);
    }
  }
  var Lr = {
      readContext: Ce,
      use: jr,
      useCallback: Pt,
      useContext: Pt,
      useEffect: Pt,
      useImperativeHandle: Pt,
      useLayoutEffect: Pt,
      useInsertionEffect: Pt,
      useMemo: Pt,
      useReducer: Pt,
      useRef: Pt,
      useState: Pt,
      useDebugValue: Pt,
      useDeferredValue: Pt,
      useTransition: Pt,
      useSyncExternalStore: Pt,
      useId: Pt,
      useHostTransitionStatus: Pt,
      useFormState: Pt,
      useActionState: Pt,
      useOptimistic: Pt,
      useMemoCache: Pt,
      useCacheRefresh: Pt,
    },
    sh = {
      readContext: Ce,
      use: jr,
      useCallback: function (t, e) {
        return (ze().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: Ce,
      useEffect: Kd,
      useImperativeHandle: function (t, e, n) {
        (n = n != null ? n.concat([t]) : null),
          $r(4194308, 4, Fd.bind(null, e, t), n);
      },
      useLayoutEffect: function (t, e) {
        return $r(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        $r(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = ze();
        e = e === void 0 ? null : e;
        var l = t();
        if (Na) {
          Ft(!0);
          try {
            t();
          } finally {
            Ft(!1);
          }
        }
        return (n.memoizedState = [l, e]), l;
      },
      useReducer: function (t, e, n) {
        var l = ze();
        if (n !== void 0) {
          var r = n(e);
          if (Na) {
            Ft(!0);
            try {
              n(e);
            } finally {
              Ft(!1);
            }
          }
        } else r = e;
        return (
          (l.memoizedState = l.baseState = r),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: r,
          }),
          (l.queue = t),
          (t = t.dispatch = ny.bind(null, yt, t)),
          [l.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = ze();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = nc(t);
        var e = t.queue,
          n = oh.bind(null, yt, e);
        return (e.dispatch = n), [t.memoizedState, n];
      },
      useDebugValue: lc,
      useDeferredValue: function (t, e) {
        var n = ze();
        return ic(n, t, e);
      },
      useTransition: function () {
        var t = nc(!1);
        return (
          (t = nh.bind(null, yt, t.queue, !0, !1)),
          (ze().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, n) {
        var l = yt,
          r = ze();
        if (Ot) {
          if (n === void 0) throw Error(o(407));
          n = n();
        } else {
          if (((n = e()), Yt === null)) throw Error(o(349));
          (Tt & 124) !== 0 || Dd(l, e, n);
        }
        r.memoizedState = n;
        var c = { value: n, getSnapshot: e };
        return (
          (r.queue = c),
          Kd(Bd.bind(null, l, c, t), [t]),
          (l.flags |= 2048),
          pl(9, Hr(), wd.bind(null, l, c, n, e), null),
          n
        );
      },
      useId: function () {
        var t = ze(),
          e = Yt.identifierPrefix;
        if (Ot) {
          var n = _n,
            l = zn;
          (n = (l & ~(1 << (32 - Gt(l) - 1))).toString(32) + n),
            (e = "«" + e + "R" + n),
            (n = Nr++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "»");
        } else (n = Wg++), (e = "«" + e + "r" + n.toString(32) + "»");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: oc,
      useFormState: Yd,
      useActionState: Yd,
      useOptimistic: function (t) {
        var e = ze();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = n),
          (e = uc.bind(null, yt, !0, n)),
          (n.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: Iu,
      useCacheRefresh: function () {
        return (ze().memoizedState = ey.bind(null, yt));
      },
    },
    fh = {
      readContext: Ce,
      use: jr,
      useCallback: Id,
      useContext: Ce,
      useEffect: Zd,
      useImperativeHandle: Pd,
      useInsertionEffect: Jd,
      useLayoutEffect: Wd,
      useMemo: th,
      useReducer: Ur,
      useRef: Qd,
      useState: function () {
        return Ur(Bn);
      },
      useDebugValue: lc,
      useDeferredValue: function (t, e) {
        var n = le();
        return eh(n, Nt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Ur(Bn)[0],
          e = le().memoizedState;
        return [typeof t == "boolean" ? t : mi(t), e];
      },
      useSyncExternalStore: _d,
      useId: ih,
      useHostTransitionStatus: oc,
      useFormState: Gd,
      useActionState: Gd,
      useOptimistic: function (t, e) {
        var n = le();
        return Ud(n, Nt, t, e);
      },
      useMemoCache: Iu,
      useCacheRefresh: rh,
    },
    ay = {
      readContext: Ce,
      use: jr,
      useCallback: Id,
      useContext: Ce,
      useEffect: Zd,
      useImperativeHandle: Pd,
      useInsertionEffect: Jd,
      useLayoutEffect: Wd,
      useMemo: th,
      useReducer: ec,
      useRef: Qd,
      useState: function () {
        return ec(Bn);
      },
      useDebugValue: lc,
      useDeferredValue: function (t, e) {
        var n = le();
        return Nt === null ? ic(n, t, e) : eh(n, Nt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = ec(Bn)[0],
          e = le().memoizedState;
        return [typeof t == "boolean" ? t : mi(t), e];
      },
      useSyncExternalStore: _d,
      useId: ih,
      useHostTransitionStatus: oc,
      useFormState: Xd,
      useActionState: Xd,
      useOptimistic: function (t, e) {
        var n = le();
        return Nt !== null
          ? Ud(n, Nt, t, e)
          : ((n.baseState = t), [t, n.queue.dispatch]);
      },
      useMemoCache: Iu,
      useCacheRefresh: rh,
    },
    gl = null,
    yi = 0;
  function qr(t) {
    var e = yi;
    return (yi += 1), gl === null && (gl = []), Cd(gl, t, e);
  }
  function vi(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function Yr(t, e) {
    throw e.$$typeof === E
      ? Error(o(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          o(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function dh(t) {
    var e = t._init;
    return e(t._payload);
  }
  function hh(t) {
    function e(A, C) {
      if (t) {
        var R = A.deletions;
        R === null ? ((A.deletions = [C]), (A.flags |= 16)) : R.push(C);
      }
    }
    function n(A, C) {
      if (!t) return null;
      for (; C !== null; ) e(A, C), (C = C.sibling);
      return null;
    }
    function l(A) {
      for (var C = new Map(); A !== null; )
        A.key !== null ? C.set(A.key, A) : C.set(A.index, A), (A = A.sibling);
      return C;
    }
    function r(A, C) {
      return (A = Rn(A, C)), (A.index = 0), (A.sibling = null), A;
    }
    function c(A, C, R) {
      return (
        (A.index = R),
        t
          ? ((R = A.alternate),
            R !== null
              ? ((R = R.index), R < C ? ((A.flags |= 67108866), C) : R)
              : ((A.flags |= 67108866), C))
          : ((A.flags |= 1048576), C)
      );
    }
    function d(A) {
      return t && A.alternate === null && (A.flags |= 67108866), A;
    }
    function m(A, C, R, k) {
      return C === null || C.tag !== 6
        ? ((C = zu(R, A.mode, k)), (C.return = A), C)
        : ((C = r(C, R)), (C.return = A), C);
    }
    function b(A, C, R, k) {
      var at = R.type;
      return at === O
        ? $(A, C, R.props.children, k, R.key)
        : C !== null &&
          (C.elementType === at ||
            (typeof at == "object" &&
              at !== null &&
              at.$$typeof === tt &&
              dh(at) === C.type))
        ? ((C = r(C, R.props)), vi(C, R), (C.return = A), C)
        : ((C = Er(R.type, R.key, R.props, null, A.mode, k)),
          vi(C, R),
          (C.return = A),
          C);
    }
    function z(A, C, R, k) {
      return C === null ||
        C.tag !== 4 ||
        C.stateNode.containerInfo !== R.containerInfo ||
        C.stateNode.implementation !== R.implementation
        ? ((C = _u(R, A.mode, k)), (C.return = A), C)
        : ((C = r(C, R.children || [])), (C.return = A), C);
    }
    function $(A, C, R, k, at) {
      return C === null || C.tag !== 7
        ? ((C = Ma(R, A.mode, k, at)), (C.return = A), C)
        : ((C = r(C, R)), (C.return = A), C);
    }
    function Y(A, C, R) {
      if (
        (typeof C == "string" && C !== "") ||
        typeof C == "number" ||
        typeof C == "bigint"
      )
        return (C = zu("" + C, A.mode, R)), (C.return = A), C;
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case M:
            return (
              (R = Er(C.type, C.key, C.props, null, A.mode, R)),
              vi(R, C),
              (R.return = A),
              R
            );
          case U:
            return (C = _u(C, A.mode, R)), (C.return = A), C;
          case tt:
            var k = C._init;
            return (C = k(C._payload)), Y(A, C, R);
        }
        if (mt(C) || et(C))
          return (C = Ma(C, A.mode, R, null)), (C.return = A), C;
        if (typeof C.then == "function") return Y(A, qr(C), R);
        if (C.$$typeof === V) return Y(A, Rr(A, C), R);
        Yr(A, C);
      }
      return null;
    }
    function D(A, C, R, k) {
      var at = C !== null ? C.key : null;
      if (
        (typeof R == "string" && R !== "") ||
        typeof R == "number" ||
        typeof R == "bigint"
      )
        return at !== null ? null : m(A, C, "" + R, k);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case M:
            return R.key === at ? b(A, C, R, k) : null;
          case U:
            return R.key === at ? z(A, C, R, k) : null;
          case tt:
            return (at = R._init), (R = at(R._payload)), D(A, C, R, k);
        }
        if (mt(R) || et(R)) return at !== null ? null : $(A, C, R, k, null);
        if (typeof R.then == "function") return D(A, C, qr(R), k);
        if (R.$$typeof === V) return D(A, C, Rr(A, R), k);
        Yr(A, R);
      }
      return null;
    }
    function w(A, C, R, k, at) {
      if (
        (typeof k == "string" && k !== "") ||
        typeof k == "number" ||
        typeof k == "bigint"
      )
        return (A = A.get(R) || null), m(C, A, "" + k, at);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case M:
            return (
              (A = A.get(k.key === null ? R : k.key) || null), b(C, A, k, at)
            );
          case U:
            return (
              (A = A.get(k.key === null ? R : k.key) || null), z(C, A, k, at)
            );
          case tt:
            var vt = k._init;
            return (k = vt(k._payload)), w(A, C, R, k, at);
        }
        if (mt(k) || et(k)) return (A = A.get(R) || null), $(C, A, k, at, null);
        if (typeof k.then == "function") return w(A, C, R, qr(k), at);
        if (k.$$typeof === V) return w(A, C, R, Rr(C, k), at);
        Yr(C, k);
      }
      return null;
    }
    function dt(A, C, R, k) {
      for (
        var at = null, vt = null, ot = C, ft = (C = 0), me = null;
        ot !== null && ft < R.length;
        ft++
      ) {
        ot.index > ft ? ((me = ot), (ot = null)) : (me = ot.sibling);
        var Et = D(A, ot, R[ft], k);
        if (Et === null) {
          ot === null && (ot = me);
          break;
        }
        t && ot && Et.alternate === null && e(A, ot),
          (C = c(Et, C, ft)),
          vt === null ? (at = Et) : (vt.sibling = Et),
          (vt = Et),
          (ot = me);
      }
      if (ft === R.length) return n(A, ot), Ot && Ra(A, ft), at;
      if (ot === null) {
        for (; ft < R.length; ft++)
          (ot = Y(A, R[ft], k)),
            ot !== null &&
              ((C = c(ot, C, ft)),
              vt === null ? (at = ot) : (vt.sibling = ot),
              (vt = ot));
        return Ot && Ra(A, ft), at;
      }
      for (ot = l(ot); ft < R.length; ft++)
        (me = w(ot, A, ft, R[ft], k)),
          me !== null &&
            (t &&
              me.alternate !== null &&
              ot.delete(me.key === null ? ft : me.key),
            (C = c(me, C, ft)),
            vt === null ? (at = me) : (vt.sibling = me),
            (vt = me));
      return (
        t &&
          ot.forEach(function (ma) {
            return e(A, ma);
          }),
        Ot && Ra(A, ft),
        at
      );
    }
    function st(A, C, R, k) {
      if (R == null) throw Error(o(151));
      for (
        var at = null,
          vt = null,
          ot = C,
          ft = (C = 0),
          me = null,
          Et = R.next();
        ot !== null && !Et.done;
        ft++, Et = R.next()
      ) {
        ot.index > ft ? ((me = ot), (ot = null)) : (me = ot.sibling);
        var ma = D(A, ot, Et.value, k);
        if (ma === null) {
          ot === null && (ot = me);
          break;
        }
        t && ot && ma.alternate === null && e(A, ot),
          (C = c(ma, C, ft)),
          vt === null ? (at = ma) : (vt.sibling = ma),
          (vt = ma),
          (ot = me);
      }
      if (Et.done) return n(A, ot), Ot && Ra(A, ft), at;
      if (ot === null) {
        for (; !Et.done; ft++, Et = R.next())
          (Et = Y(A, Et.value, k)),
            Et !== null &&
              ((C = c(Et, C, ft)),
              vt === null ? (at = Et) : (vt.sibling = Et),
              (vt = Et));
        return Ot && Ra(A, ft), at;
      }
      for (ot = l(ot); !Et.done; ft++, Et = R.next())
        (Et = w(ot, A, ft, Et.value, k)),
          Et !== null &&
            (t &&
              Et.alternate !== null &&
              ot.delete(Et.key === null ? ft : Et.key),
            (C = c(Et, C, ft)),
            vt === null ? (at = Et) : (vt.sibling = Et),
            (vt = Et));
      return (
        t &&
          ot.forEach(function (l1) {
            return e(A, l1);
          }),
        Ot && Ra(A, ft),
        at
      );
    }
    function Ut(A, C, R, k) {
      if (
        (typeof R == "object" &&
          R !== null &&
          R.type === O &&
          R.key === null &&
          (R = R.props.children),
        typeof R == "object" && R !== null)
      ) {
        switch (R.$$typeof) {
          case M:
            t: {
              for (var at = R.key; C !== null; ) {
                if (C.key === at) {
                  if (((at = R.type), at === O)) {
                    if (C.tag === 7) {
                      n(A, C.sibling),
                        (k = r(C, R.props.children)),
                        (k.return = A),
                        (A = k);
                      break t;
                    }
                  } else if (
                    C.elementType === at ||
                    (typeof at == "object" &&
                      at !== null &&
                      at.$$typeof === tt &&
                      dh(at) === C.type)
                  ) {
                    n(A, C.sibling),
                      (k = r(C, R.props)),
                      vi(k, R),
                      (k.return = A),
                      (A = k);
                    break t;
                  }
                  n(A, C);
                  break;
                } else e(A, C);
                C = C.sibling;
              }
              R.type === O
                ? ((k = Ma(R.props.children, A.mode, k, R.key)),
                  (k.return = A),
                  (A = k))
                : ((k = Er(R.type, R.key, R.props, null, A.mode, k)),
                  vi(k, R),
                  (k.return = A),
                  (A = k));
            }
            return d(A);
          case U:
            t: {
              for (at = R.key; C !== null; ) {
                if (C.key === at)
                  if (
                    C.tag === 4 &&
                    C.stateNode.containerInfo === R.containerInfo &&
                    C.stateNode.implementation === R.implementation
                  ) {
                    n(A, C.sibling),
                      (k = r(C, R.children || [])),
                      (k.return = A),
                      (A = k);
                    break t;
                  } else {
                    n(A, C);
                    break;
                  }
                else e(A, C);
                C = C.sibling;
              }
              (k = _u(R, A.mode, k)), (k.return = A), (A = k);
            }
            return d(A);
          case tt:
            return (at = R._init), (R = at(R._payload)), Ut(A, C, R, k);
        }
        if (mt(R)) return dt(A, C, R, k);
        if (et(R)) {
          if (((at = et(R)), typeof at != "function")) throw Error(o(150));
          return (R = at.call(R)), st(A, C, R, k);
        }
        if (typeof R.then == "function") return Ut(A, C, qr(R), k);
        if (R.$$typeof === V) return Ut(A, C, Rr(A, R), k);
        Yr(A, R);
      }
      return (typeof R == "string" && R !== "") ||
        typeof R == "number" ||
        typeof R == "bigint"
        ? ((R = "" + R),
          C !== null && C.tag === 6
            ? (n(A, C.sibling), (k = r(C, R)), (k.return = A), (A = k))
            : (n(A, C), (k = zu(R, A.mode, k)), (k.return = A), (A = k)),
          d(A))
        : n(A, C);
    }
    return function (A, C, R, k) {
      try {
        yi = 0;
        var at = Ut(A, C, R, k);
        return (gl = null), at;
      } catch (ot) {
        if (ot === ui || ot === _r) throw ot;
        var vt = je(29, ot, null, A.mode);
        return (vt.lanes = k), (vt.return = A), vt;
      } finally {
      }
    };
  }
  var yl = hh(!0),
    mh = hh(!1),
    Je = L(null),
    pn = null;
  function In(t) {
    var e = t.alternate;
    W(ue, ue.current & 1),
      W(Je, t),
      pn === null &&
        (e === null || dl.current !== null || e.memoizedState !== null) &&
        (pn = t);
  }
  function ph(t) {
    if (t.tag === 22) {
      if ((W(ue, ue.current), W(Je, t), pn === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (pn = t);
      }
    } else ta();
  }
  function ta() {
    W(ue, ue.current), W(Je, Je.current);
  }
  function Nn(t) {
    Z(Je), pn === t && (pn = null), Z(ue);
  }
  var ue = L(0);
  function Gr(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || Pc(n))
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  function cc(t, e, n, l) {
    (e = t.memoizedState),
      (n = n(l, e)),
      (n = n == null ? e : S({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var sc = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var l = ke(),
        r = Wn(l);
      (r.payload = e),
        n != null && (r.callback = n),
        (e = Fn(t, r, l)),
        e !== null && (Le(e, t, l), si(e, t, l));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var l = ke(),
        r = Wn(l);
      (r.tag = 1),
        (r.payload = e),
        n != null && (r.callback = n),
        (e = Fn(t, r, l)),
        e !== null && (Le(e, t, l), si(e, t, l));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = ke(),
        l = Wn(n);
      (l.tag = 2),
        e != null && (l.callback = e),
        (e = Fn(t, l, n)),
        e !== null && (Le(e, t, n), si(e, t, n));
    },
  };
  function gh(t, e, n, l, r, c, d) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(l, c, d)
        : e.prototype && e.prototype.isPureReactComponent
        ? !ti(n, l) || !ti(r, c)
        : !0
    );
  }
  function yh(t, e, n, l) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, l),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, l),
      e.state !== t && sc.enqueueReplaceState(e, e.state, null);
  }
  function ja(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var l in e) l !== "ref" && (n[l] = e[l]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = S({}, n));
      for (var r in t) n[r] === void 0 && (n[r] = t[r]);
    }
    return n;
  }
  var Vr =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function vh(t) {
    Vr(t);
  }
  function bh(t) {
    console.error(t);
  }
  function Sh(t) {
    Vr(t);
  }
  function Xr(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function xh(t, e, n) {
    try {
      var l = t.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  function fc(t, e, n) {
    return (
      (n = Wn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        Xr(t, e);
      }),
      n
    );
  }
  function Ch(t) {
    return (t = Wn(t)), (t.tag = 3), t;
  }
  function Th(t, e, n, l) {
    var r = n.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var c = l.value;
      (t.payload = function () {
        return r(c);
      }),
        (t.callback = function () {
          xh(e, n, l);
        });
    }
    var d = n.stateNode;
    d !== null &&
      typeof d.componentDidCatch == "function" &&
      (t.callback = function () {
        xh(e, n, l),
          typeof r != "function" &&
            (ra === null ? (ra = new Set([this])) : ra.add(this));
        var m = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: m !== null ? m : "",
        });
      });
  }
  function ly(t, e, n, l, r) {
    if (
      ((n.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && ii(e, n, r, !0),
        (n = Je.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 13:
            return (
              pn === null ? jc() : n.alternate === null && Zt === 0 && (Zt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = r),
              l === Lu
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([l])) : e.add(l),
                  Hc(t, l, r)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === Lu
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([l])) : n.add(l)),
                  Hc(t, l, r)),
              !1
            );
        }
        throw Error(o(435, n.tag));
      }
      return Hc(t, l, r), jc(), !1;
    }
    if (Ot)
      return (
        (e = Je.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = r),
            l !== Bu && ((t = Error(o(422), { cause: l })), li(Xe(t, n))))
          : (l !== Bu && ((e = Error(o(423), { cause: l })), li(Xe(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (r &= -r),
            (t.lanes |= r),
            (l = Xe(l, n)),
            (r = fc(t.stateNode, l, r)),
            Gu(t, r),
            Zt !== 4 && (Zt = 2)),
        !1
      );
    var c = Error(o(520), { cause: l });
    if (
      ((c = Xe(c, n)),
      Ai === null ? (Ai = [c]) : Ai.push(c),
      Zt !== 4 && (Zt = 2),
      e === null)
    )
      return !0;
    (l = Xe(l, n)), (n = e);
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = r & -r),
            (n.lanes |= t),
            (t = fc(n.stateNode, l, t)),
            Gu(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (c = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (c !== null &&
                  typeof c.componentDidCatch == "function" &&
                  (ra === null || !ra.has(c)))))
          )
            return (
              (n.flags |= 65536),
              (r &= -r),
              (n.lanes |= r),
              (r = Ch(r)),
              Th(r, t, n, l),
              Gu(n, r),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Eh = Error(o(461)),
    de = !1;
  function ge(t, e, n, l) {
    e.child = t === null ? mh(e, null, n, l) : yl(e, t.child, n, l);
  }
  function Ah(t, e, n, l, r) {
    n = n.render;
    var c = e.ref;
    if ("ref" in l) {
      var d = {};
      for (var m in l) m !== "ref" && (d[m] = l[m]);
    } else d = l;
    return (
      wa(e),
      (l = Zu(t, e, n, d, c, r)),
      (m = Ju()),
      t !== null && !de
        ? (Wu(t, e, r), jn(t, e, r))
        : (Ot && m && Du(e), (e.flags |= 1), ge(t, e, l, r), e.child)
    );
  }
  function Mh(t, e, n, l, r) {
    if (t === null) {
      var c = n.type;
      return typeof c == "function" &&
        !Ru(c) &&
        c.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = c), Oh(t, e, c, l, r))
        : ((t = Er(n.type, null, l, e, e.mode, r)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((c = t.child), !bc(t, r))) {
      var d = c.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : ti), n(d, l) && t.ref === e.ref)
      )
        return jn(t, e, r);
    }
    return (
      (e.flags |= 1),
      (t = Rn(c, l)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function Oh(t, e, n, l, r) {
    if (t !== null) {
      var c = t.memoizedProps;
      if (ti(c, l) && t.ref === e.ref)
        if (((de = !1), (e.pendingProps = l = c), bc(t, r)))
          (t.flags & 131072) !== 0 && (de = !0);
        else return (e.lanes = t.lanes), jn(t, e, r);
    }
    return dc(t, e, n, l, r);
  }
  function Rh(t, e, n) {
    var l = e.pendingProps,
      r = l.children,
      c = t !== null ? t.memoizedState : null;
    if (l.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (((l = c !== null ? c.baseLanes | n : n), t !== null)) {
          for (r = e.child = t.child, c = 0; r !== null; )
            (c = c | r.lanes | r.childLanes), (r = r.sibling);
          e.childLanes = c & ~l;
        } else (e.childLanes = 0), (e.child = null);
        return zh(t, e, l, n);
      }
      if ((n & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && zr(e, c !== null ? c.cachePool : null),
          c !== null ? Od(e, c) : Xu(),
          ph(e);
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          zh(t, e, c !== null ? c.baseLanes | n : n, n)
        );
    } else
      c !== null
        ? (zr(e, c.cachePool), Od(e, c), ta(), (e.memoizedState = null))
        : (t !== null && zr(e, null), Xu(), ta());
    return ge(t, e, r, n), e.child;
  }
  function zh(t, e, n, l) {
    var r = ku();
    return (
      (r = r === null ? null : { parent: oe._currentValue, pool: r }),
      (e.memoizedState = { baseLanes: n, cachePool: r }),
      t !== null && zr(e, null),
      Xu(),
      ph(e),
      t !== null && ii(t, e, l, !0),
      null
    );
  }
  function Qr(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(o(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function dc(t, e, n, l, r) {
    return (
      wa(e),
      (n = Zu(t, e, n, l, void 0, r)),
      (l = Ju()),
      t !== null && !de
        ? (Wu(t, e, r), jn(t, e, r))
        : (Ot && l && Du(e), (e.flags |= 1), ge(t, e, n, r), e.child)
    );
  }
  function _h(t, e, n, l, r, c) {
    return (
      wa(e),
      (e.updateQueue = null),
      (n = zd(e, l, n, r)),
      Rd(t),
      (l = Ju()),
      t !== null && !de
        ? (Wu(t, e, c), jn(t, e, c))
        : (Ot && l && Du(e), (e.flags |= 1), ge(t, e, n, c), e.child)
    );
  }
  function Dh(t, e, n, l, r) {
    if ((wa(e), e.stateNode === null)) {
      var c = ol,
        d = n.contextType;
      typeof d == "object" && d !== null && (c = Ce(d)),
        (c = new n(l, c)),
        (e.memoizedState =
          c.state !== null && c.state !== void 0 ? c.state : null),
        (c.updater = sc),
        (e.stateNode = c),
        (c._reactInternals = e),
        (c = e.stateNode),
        (c.props = l),
        (c.state = e.memoizedState),
        (c.refs = {}),
        qu(e),
        (d = n.contextType),
        (c.context = typeof d == "object" && d !== null ? Ce(d) : ol),
        (c.state = e.memoizedState),
        (d = n.getDerivedStateFromProps),
        typeof d == "function" && (cc(e, n, d, l), (c.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function" ||
          (typeof c.UNSAFE_componentWillMount != "function" &&
            typeof c.componentWillMount != "function") ||
          ((d = c.state),
          typeof c.componentWillMount == "function" && c.componentWillMount(),
          typeof c.UNSAFE_componentWillMount == "function" &&
            c.UNSAFE_componentWillMount(),
          d !== c.state && sc.enqueueReplaceState(c, c.state, null),
          di(e, l, c, r),
          fi(),
          (c.state = e.memoizedState)),
        typeof c.componentDidMount == "function" && (e.flags |= 4194308),
        (l = !0);
    } else if (t === null) {
      c = e.stateNode;
      var m = e.memoizedProps,
        b = ja(n, m);
      c.props = b;
      var z = c.context,
        $ = n.contextType;
      (d = ol), typeof $ == "object" && $ !== null && (d = Ce($));
      var Y = n.getDerivedStateFromProps;
      ($ =
        typeof Y == "function" ||
        typeof c.getSnapshotBeforeUpdate == "function"),
        (m = e.pendingProps !== m),
        $ ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((m || z !== d) && yh(e, c, l, d)),
        (Jn = !1);
      var D = e.memoizedState;
      (c.state = D),
        di(e, l, c, r),
        fi(),
        (z = e.memoizedState),
        m || D !== z || Jn
          ? (typeof Y == "function" && (cc(e, n, Y, l), (z = e.memoizedState)),
            (b = Jn || gh(e, n, b, l, D, z, d))
              ? ($ ||
                  (typeof c.UNSAFE_componentWillMount != "function" &&
                    typeof c.componentWillMount != "function") ||
                  (typeof c.componentWillMount == "function" &&
                    c.componentWillMount(),
                  typeof c.UNSAFE_componentWillMount == "function" &&
                    c.UNSAFE_componentWillMount()),
                typeof c.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof c.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = l),
                (e.memoizedState = z)),
            (c.props = l),
            (c.state = z),
            (c.context = d),
            (l = b))
          : (typeof c.componentDidMount == "function" && (e.flags |= 4194308),
            (l = !1));
    } else {
      (c = e.stateNode),
        Yu(t, e),
        (d = e.memoizedProps),
        ($ = ja(n, d)),
        (c.props = $),
        (Y = e.pendingProps),
        (D = c.context),
        (z = n.contextType),
        (b = ol),
        typeof z == "object" && z !== null && (b = Ce(z)),
        (m = n.getDerivedStateFromProps),
        (z =
          typeof m == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function") ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((d !== Y || D !== b) && yh(e, c, l, b)),
        (Jn = !1),
        (D = e.memoizedState),
        (c.state = D),
        di(e, l, c, r),
        fi();
      var w = e.memoizedState;
      d !== Y ||
      D !== w ||
      Jn ||
      (t !== null && t.dependencies !== null && Or(t.dependencies))
        ? (typeof m == "function" && (cc(e, n, m, l), (w = e.memoizedState)),
          ($ =
            Jn ||
            gh(e, n, $, l, D, w, b) ||
            (t !== null && t.dependencies !== null && Or(t.dependencies)))
            ? (z ||
                (typeof c.UNSAFE_componentWillUpdate != "function" &&
                  typeof c.componentWillUpdate != "function") ||
                (typeof c.componentWillUpdate == "function" &&
                  c.componentWillUpdate(l, w, b),
                typeof c.UNSAFE_componentWillUpdate == "function" &&
                  c.UNSAFE_componentWillUpdate(l, w, b)),
              typeof c.componentDidUpdate == "function" && (e.flags |= 4),
              typeof c.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof c.componentDidUpdate != "function" ||
                (d === t.memoizedProps && D === t.memoizedState) ||
                (e.flags |= 4),
              typeof c.getSnapshotBeforeUpdate != "function" ||
                (d === t.memoizedProps && D === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = l),
              (e.memoizedState = w)),
          (c.props = l),
          (c.state = w),
          (c.context = b),
          (l = $))
        : (typeof c.componentDidUpdate != "function" ||
            (d === t.memoizedProps && D === t.memoizedState) ||
            (e.flags |= 4),
          typeof c.getSnapshotBeforeUpdate != "function" ||
            (d === t.memoizedProps && D === t.memoizedState) ||
            (e.flags |= 1024),
          (l = !1));
    }
    return (
      (c = l),
      Qr(t, e),
      (l = (e.flags & 128) !== 0),
      c || l
        ? ((c = e.stateNode),
          (n =
            l && typeof n.getDerivedStateFromError != "function"
              ? null
              : c.render()),
          (e.flags |= 1),
          t !== null && l
            ? ((e.child = yl(e, t.child, null, r)),
              (e.child = yl(e, null, n, r)))
            : ge(t, e, n, r),
          (e.memoizedState = c.state),
          (t = e.child))
        : (t = jn(t, e, r)),
      t
    );
  }
  function wh(t, e, n, l) {
    return ai(), (e.flags |= 256), ge(t, e, n, l), e.child;
  }
  var hc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function mc(t) {
    return { baseLanes: t, cachePool: bd() };
  }
  function pc(t, e, n) {
    return (t = t !== null ? t.childLanes & ~n : 0), e && (t |= We), t;
  }
  function Bh(t, e, n) {
    var l = e.pendingProps,
      r = !1,
      c = (e.flags & 128) !== 0,
      d;
    if (
      ((d = c) ||
        (d =
          t !== null && t.memoizedState === null ? !1 : (ue.current & 2) !== 0),
      d && ((r = !0), (e.flags &= -129)),
      (d = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (Ot) {
        if ((r ? In(e) : ta(), Ot)) {
          var m = Kt,
            b;
          if ((b = m)) {
            t: {
              for (b = m, m = mn; b.nodeType !== 8; ) {
                if (!m) {
                  m = null;
                  break t;
                }
                if (((b = rn(b.nextSibling)), b === null)) {
                  m = null;
                  break t;
                }
              }
              m = b;
            }
            m !== null
              ? ((e.memoizedState = {
                  dehydrated: m,
                  treeContext: Oa !== null ? { id: zn, overflow: _n } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (b = je(18, null, null, 0)),
                (b.stateNode = m),
                (b.return = e),
                (e.child = b),
                (Ae = e),
                (Kt = null),
                (b = !0))
              : (b = !1);
          }
          b || _a(e);
        }
        if (
          ((m = e.memoizedState),
          m !== null && ((m = m.dehydrated), m !== null))
        )
          return Pc(m) ? (e.lanes = 32) : (e.lanes = 536870912), null;
        Nn(e);
      }
      return (
        (m = l.children),
        (l = l.fallback),
        r
          ? (ta(),
            (r = e.mode),
            (m = Kr({ mode: "hidden", children: m }, r)),
            (l = Ma(l, r, n, null)),
            (m.return = e),
            (l.return = e),
            (m.sibling = l),
            (e.child = m),
            (r = e.child),
            (r.memoizedState = mc(n)),
            (r.childLanes = pc(t, d, n)),
            (e.memoizedState = hc),
            l)
          : (In(e), gc(e, m))
      );
    }
    if (
      ((b = t.memoizedState), b !== null && ((m = b.dehydrated), m !== null))
    ) {
      if (c)
        e.flags & 256
          ? (In(e), (e.flags &= -257), (e = yc(t, e, n)))
          : e.memoizedState !== null
          ? (ta(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (ta(),
            (r = l.fallback),
            (m = e.mode),
            (l = Kr({ mode: "visible", children: l.children }, m)),
            (r = Ma(r, m, n, null)),
            (r.flags |= 2),
            (l.return = e),
            (r.return = e),
            (l.sibling = r),
            (e.child = l),
            yl(e, t.child, null, n),
            (l = e.child),
            (l.memoizedState = mc(n)),
            (l.childLanes = pc(t, d, n)),
            (e.memoizedState = hc),
            (e = r));
      else if ((In(e), Pc(m))) {
        if (((d = m.nextSibling && m.nextSibling.dataset), d)) var z = d.dgst;
        (d = z),
          (l = Error(o(419))),
          (l.stack = ""),
          (l.digest = d),
          li({ value: l, source: null, stack: null }),
          (e = yc(t, e, n));
      } else if (
        (de || ii(t, e, n, !1), (d = (n & t.childLanes) !== 0), de || d)
      ) {
        if (
          ((d = Yt),
          d !== null &&
            ((l = n & -n),
            (l = (l & 42) !== 0 ? 1 : Io(l)),
            (l = (l & (d.suspendedLanes | n)) !== 0 ? 0 : l),
            l !== 0 && l !== b.retryLane))
        )
          throw ((b.retryLane = l), rl(t, l), Le(d, t, l), Eh);
        m.data === "$?" || jc(), (e = yc(t, e, n));
      } else
        m.data === "$?"
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = b.treeContext),
            (Kt = rn(m.nextSibling)),
            (Ae = e),
            (Ot = !0),
            (za = null),
            (mn = !1),
            t !== null &&
              ((Ke[Ze++] = zn),
              (Ke[Ze++] = _n),
              (Ke[Ze++] = Oa),
              (zn = t.id),
              (_n = t.overflow),
              (Oa = e)),
            (e = gc(e, l.children)),
            (e.flags |= 4096));
      return e;
    }
    return r
      ? (ta(),
        (r = l.fallback),
        (m = e.mode),
        (b = t.child),
        (z = b.sibling),
        (l = Rn(b, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = b.subtreeFlags & 65011712),
        z !== null ? (r = Rn(z, r)) : ((r = Ma(r, m, n, null)), (r.flags |= 2)),
        (r.return = e),
        (l.return = e),
        (l.sibling = r),
        (e.child = l),
        (l = r),
        (r = e.child),
        (m = t.child.memoizedState),
        m === null
          ? (m = mc(n))
          : ((b = m.cachePool),
            b !== null
              ? ((z = oe._currentValue),
                (b = b.parent !== z ? { parent: z, pool: z } : b))
              : (b = bd()),
            (m = { baseLanes: m.baseLanes | n, cachePool: b })),
        (r.memoizedState = m),
        (r.childLanes = pc(t, d, n)),
        (e.memoizedState = hc),
        l)
      : (In(e),
        (n = t.child),
        (t = n.sibling),
        (n = Rn(n, { mode: "visible", children: l.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((d = e.deletions),
          d === null ? ((e.deletions = [t]), (e.flags |= 16)) : d.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function gc(t, e) {
    return (
      (e = Kr({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function Kr(t, e) {
    return (
      (t = je(22, t, null, e)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function yc(t, e, n) {
    return (
      yl(e, t.child, null, n),
      (t = gc(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Nh(t, e, n) {
    t.lanes |= e;
    var l = t.alternate;
    l !== null && (l.lanes |= e), ju(t.return, e, n);
  }
  function vc(t, e, n, l, r) {
    var c = t.memoizedState;
    c === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: n,
          tailMode: r,
        })
      : ((c.isBackwards = e),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = l),
        (c.tail = n),
        (c.tailMode = r));
  }
  function jh(t, e, n) {
    var l = e.pendingProps,
      r = l.revealOrder,
      c = l.tail;
    if ((ge(t, e, l.children, n), (l = ue.current), (l & 2) !== 0))
      (l = (l & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && Nh(t, n, e);
          else if (t.tag === 19) Nh(t, n, e);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      l &= 1;
    }
    switch ((W(ue, l), r)) {
      case "forwards":
        for (n = e.child, r = null; n !== null; )
          (t = n.alternate),
            t !== null && Gr(t) === null && (r = n),
            (n = n.sibling);
        (n = r),
          n === null
            ? ((r = e.child), (e.child = null))
            : ((r = n.sibling), (n.sibling = null)),
          vc(e, !1, r, n, c);
        break;
      case "backwards":
        for (n = null, r = e.child, e.child = null; r !== null; ) {
          if (((t = r.alternate), t !== null && Gr(t) === null)) {
            e.child = r;
            break;
          }
          (t = r.sibling), (r.sibling = n), (n = r), (r = t);
        }
        vc(e, !0, n, null, c);
        break;
      case "together":
        vc(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function jn(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (ia |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((ii(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(o(153));
    if (e.child !== null) {
      for (
        t = e.child, n = Rn(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (n = n.sibling = Rn(t, t.pendingProps)),
          (n.return = e);
      n.sibling = null;
    }
    return e.child;
  }
  function bc(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Or(t)));
  }
  function iy(t, e, n) {
    switch (e.tag) {
      case 3:
        Dt(e, e.stateNode.containerInfo),
          Zn(e, oe, t.memoizedState.cache),
          ai();
        break;
      case 27:
      case 5:
        Sa(e);
        break;
      case 4:
        Dt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Zn(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (In(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
            ? Bh(t, e, n)
            : (In(e), (t = jn(t, e, n)), t !== null ? t.sibling : null);
        In(e);
        break;
      case 19:
        var r = (t.flags & 128) !== 0;
        if (
          ((l = (n & e.childLanes) !== 0),
          l || (ii(t, e, n, !1), (l = (n & e.childLanes) !== 0)),
          r)
        ) {
          if (l) return jh(t, e, n);
          e.flags |= 128;
        }
        if (
          ((r = e.memoizedState),
          r !== null &&
            ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
          W(ue, ue.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (e.lanes = 0), Rh(t, e, n);
      case 24:
        Zn(e, oe, t.memoizedState.cache);
    }
    return jn(t, e, n);
  }
  function Uh(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) de = !0;
      else {
        if (!bc(t, n) && (e.flags & 128) === 0) return (de = !1), iy(t, e, n);
        de = (t.flags & 131072) !== 0;
      }
    else (de = !1), Ot && (e.flags & 1048576) !== 0 && dd(e, Mr, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var l = e.elementType,
            r = l._init;
          if (((l = r(l._payload)), (e.type = l), typeof l == "function"))
            Ru(l)
              ? ((t = ja(l, t)), (e.tag = 1), (e = Dh(null, e, l, t, n)))
              : ((e.tag = 0), (e = dc(null, e, l, t, n)));
          else {
            if (l != null) {
              if (((r = l.$$typeof), r === G)) {
                (e.tag = 11), (e = Ah(null, e, l, t, n));
                break t;
              } else if (r === P) {
                (e.tag = 14), (e = Mh(null, e, l, t, n));
                break t;
              }
            }
            throw ((e = At(l) || l), Error(o(306, e, "")));
          }
        }
        return e;
      case 0:
        return dc(t, e, e.type, e.pendingProps, n);
      case 1:
        return (l = e.type), (r = ja(l, e.pendingProps)), Dh(t, e, l, r, n);
      case 3:
        t: {
          if ((Dt(e, e.stateNode.containerInfo), t === null))
            throw Error(o(387));
          l = e.pendingProps;
          var c = e.memoizedState;
          (r = c.element), Yu(t, e), di(e, l, null, n);
          var d = e.memoizedState;
          if (
            ((l = d.cache),
            Zn(e, oe, l),
            l !== c.cache && Uu(e, [oe], n, !0),
            fi(),
            (l = d.element),
            c.isDehydrated)
          )
            if (
              ((c = { element: l, isDehydrated: !1, cache: d.cache }),
              (e.updateQueue.baseState = c),
              (e.memoizedState = c),
              e.flags & 256)
            ) {
              e = wh(t, e, l, n);
              break t;
            } else if (l !== r) {
              (r = Xe(Error(o(424)), e)), li(r), (e = wh(t, e, l, n));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Kt = rn(t.firstChild),
                  Ae = e,
                  Ot = !0,
                  za = null,
                  mn = !0,
                  n = mh(e, null, l, n),
                  e.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
            }
          else {
            if ((ai(), l === r)) {
              e = jn(t, e, n);
              break t;
            }
            ge(t, e, l, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Qr(t, e),
          t === null
            ? (n = Lm(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : Ot ||
                ((n = e.type),
                (t = e.pendingProps),
                (l = oo(nt.current).createElement(n)),
                (l[xe] = e),
                (l[Oe] = t),
                ve(l, n, t),
                fe(l),
                (e.stateNode = l))
            : (e.memoizedState = Lm(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          Sa(e),
          t === null &&
            Ot &&
            ((l = e.stateNode = Hm(e.type, e.pendingProps, nt.current)),
            (Ae = e),
            (mn = !0),
            (r = Kt),
            ca(e.type) ? ((Ic = r), (Kt = rn(l.firstChild))) : (Kt = r)),
          ge(t, e, e.pendingProps.children, n),
          Qr(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            Ot &&
            ((r = l = Kt) &&
              ((l = By(l, e.type, e.pendingProps, mn)),
              l !== null
                ? ((e.stateNode = l),
                  (Ae = e),
                  (Kt = rn(l.firstChild)),
                  (mn = !1),
                  (r = !0))
                : (r = !1)),
            r || _a(e)),
          Sa(e),
          (r = e.type),
          (c = e.pendingProps),
          (d = t !== null ? t.memoizedProps : null),
          (l = c.children),
          Jc(r, c) ? (l = null) : d !== null && Jc(r, d) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((r = Zu(t, e, Fg, null, null, n)), (Ni._currentValue = r)),
          Qr(t, e),
          ge(t, e, l, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            Ot &&
            ((t = n = Kt) &&
              ((n = Ny(n, e.pendingProps, mn)),
              n !== null
                ? ((e.stateNode = n), (Ae = e), (Kt = null), (t = !0))
                : (t = !1)),
            t || _a(e)),
          null
        );
      case 13:
        return Bh(t, e, n);
      case 4:
        return (
          Dt(e, e.stateNode.containerInfo),
          (l = e.pendingProps),
          t === null ? (e.child = yl(e, null, l, n)) : ge(t, e, l, n),
          e.child
        );
      case 11:
        return Ah(t, e, e.type, e.pendingProps, n);
      case 7:
        return ge(t, e, e.pendingProps, n), e.child;
      case 8:
        return ge(t, e, e.pendingProps.children, n), e.child;
      case 12:
        return ge(t, e, e.pendingProps.children, n), e.child;
      case 10:
        return (
          (l = e.pendingProps),
          Zn(e, e.type, l.value),
          ge(t, e, l.children, n),
          e.child
        );
      case 9:
        return (
          (r = e.type._context),
          (l = e.pendingProps.children),
          wa(e),
          (r = Ce(r)),
          (l = l(r)),
          (e.flags |= 1),
          ge(t, e, l, n),
          e.child
        );
      case 14:
        return Mh(t, e, e.type, e.pendingProps, n);
      case 15:
        return Oh(t, e, e.type, e.pendingProps, n);
      case 19:
        return jh(t, e, n);
      case 31:
        return (
          (l = e.pendingProps),
          (n = e.mode),
          (l = { mode: l.mode, children: l.children }),
          t === null
            ? ((n = Kr(l, n)),
              (n.ref = e.ref),
              (e.child = n),
              (n.return = e),
              (e = n))
            : ((n = Rn(t.child, l)),
              (n.ref = e.ref),
              (e.child = n),
              (n.return = e),
              (e = n)),
          e
        );
      case 22:
        return Rh(t, e, n);
      case 24:
        return (
          wa(e),
          (l = Ce(oe)),
          t === null
            ? ((r = ku()),
              r === null &&
                ((r = Yt),
                (c = Hu()),
                (r.pooledCache = c),
                c.refCount++,
                c !== null && (r.pooledCacheLanes |= n),
                (r = c)),
              (e.memoizedState = { parent: l, cache: r }),
              qu(e),
              Zn(e, oe, r))
            : ((t.lanes & n) !== 0 && (Yu(t, e), di(e, null, null, n), fi()),
              (r = t.memoizedState),
              (c = e.memoizedState),
              r.parent !== l
                ? ((r = { parent: l, cache: l }),
                  (e.memoizedState = r),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = r),
                  Zn(e, oe, l))
                : ((l = c.cache),
                  Zn(e, oe, l),
                  l !== r.cache && Uu(e, [oe], n, !0))),
          ge(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(o(156, e.tag));
  }
  function Un(t) {
    t.flags |= 4;
  }
  function Hh(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Xm(e))) {
      if (
        ((e = Je.current),
        e !== null &&
          ((Tt & 4194048) === Tt
            ? pn !== null
            : ((Tt & 62914560) !== Tt && (Tt & 536870912) === 0) || e !== pn))
      )
        throw ((ci = Lu), Sd);
      t.flags |= 8192;
    }
  }
  function Zr(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? pf() : 536870912), (t.lanes |= e), (xl |= e));
  }
  function bi(t, e) {
    if (!Ot)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            e.alternate !== null && (n = e), (e = e.sibling);
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var l = null; n !== null; )
            n.alternate !== null && (l = n), (n = n.sibling);
          l === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function Qt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      l = 0;
    if (e)
      for (var r = t.child; r !== null; )
        (n |= r.lanes | r.childLanes),
          (l |= r.subtreeFlags & 65011712),
          (l |= r.flags & 65011712),
          (r.return = t),
          (r = r.sibling);
    else
      for (r = t.child; r !== null; )
        (n |= r.lanes | r.childLanes),
          (l |= r.subtreeFlags),
          (l |= r.flags),
          (r.return = t),
          (r = r.sibling);
    return (t.subtreeFlags |= l), (t.childLanes = n), e;
  }
  function ry(t, e, n) {
    var l = e.pendingProps;
    switch ((wu(e), e.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Qt(e), null;
      case 1:
        return Qt(e), null;
      case 3:
        return (
          (n = e.stateNode),
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          wn(oe),
          Be(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (ni(e)
              ? Un(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), pd())),
          Qt(e),
          null
        );
      case 26:
        return (
          (n = e.memoizedState),
          t === null
            ? (Un(e),
              n !== null ? (Qt(e), Hh(e, n)) : (Qt(e), (e.flags &= -16777217)))
            : n
            ? n !== t.memoizedState
              ? (Un(e), Qt(e), Hh(e, n))
              : (Qt(e), (e.flags &= -16777217))
            : (t.memoizedProps !== l && Un(e), Qt(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        Gn(e), (n = nt.current);
        var r = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== l && Un(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(o(166));
            return Qt(e), null;
          }
          (t = rt.current),
            ni(e) ? hd(e) : ((t = Hm(r, l, n)), (e.stateNode = t), Un(e));
        }
        return Qt(e), null;
      case 5:
        if ((Gn(e), (n = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== l && Un(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(o(166));
            return Qt(e), null;
          }
          if (((t = rt.current), ni(e))) hd(e);
          else {
            switch (((r = oo(nt.current)), t)) {
              case 1:
                t = r.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                t = r.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    t = r.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    t = r.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    (t = r.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof l.is == "string"
                        ? r.createElement("select", { is: l.is })
                        : r.createElement("select")),
                      l.multiple
                        ? (t.multiple = !0)
                        : l.size && (t.size = l.size);
                    break;
                  default:
                    t =
                      typeof l.is == "string"
                        ? r.createElement(n, { is: l.is })
                        : r.createElement(n);
                }
            }
            (t[xe] = e), (t[Oe] = l);
            t: for (r = e.child; r !== null; ) {
              if (r.tag === 5 || r.tag === 6) t.appendChild(r.stateNode);
              else if (r.tag !== 4 && r.tag !== 27 && r.child !== null) {
                (r.child.return = r), (r = r.child);
                continue;
              }
              if (r === e) break t;
              for (; r.sibling === null; ) {
                if (r.return === null || r.return === e) break t;
                r = r.return;
              }
              (r.sibling.return = r.return), (r = r.sibling);
            }
            e.stateNode = t;
            t: switch ((ve(t, n, l), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!l.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && Un(e);
          }
        }
        return Qt(e), (e.flags &= -16777217), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== l && Un(e);
        else {
          if (typeof l != "string" && e.stateNode === null) throw Error(o(166));
          if (((t = nt.current), ni(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (l = null),
              (r = Ae),
              r !== null)
            )
              switch (r.tag) {
                case 27:
                case 5:
                  l = r.memoizedProps;
              }
            (t[xe] = e),
              (t = !!(
                t.nodeValue === n ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                _m(t.nodeValue, n)
              )),
              t || _a(e);
          } else (t = oo(t).createTextNode(l)), (t[xe] = e), (e.stateNode = t);
        }
        return Qt(e), null;
      case 13:
        if (
          ((l = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((r = ni(e)), l !== null && l.dehydrated !== null)) {
            if (t === null) {
              if (!r) throw Error(o(318));
              if (
                ((r = e.memoizedState),
                (r = r !== null ? r.dehydrated : null),
                !r)
              )
                throw Error(o(317));
              r[xe] = e;
            } else
              ai(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Qt(e), (r = !1);
          } else
            (r = pd()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = r),
              (r = !0);
          if (!r) return e.flags & 256 ? (Nn(e), e) : (Nn(e), null);
        }
        if ((Nn(e), (e.flags & 128) !== 0)) return (e.lanes = n), e;
        if (
          ((n = l !== null), (t = t !== null && t.memoizedState !== null), n)
        ) {
          (l = e.child),
            (r = null),
            l.alternate !== null &&
              l.alternate.memoizedState !== null &&
              l.alternate.memoizedState.cachePool !== null &&
              (r = l.alternate.memoizedState.cachePool.pool);
          var c = null;
          l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (c = l.memoizedState.cachePool.pool),
            c !== r && (l.flags |= 2048);
        }
        return (
          n !== t && n && (e.child.flags |= 8192),
          Zr(e, e.updateQueue),
          Qt(e),
          null
        );
      case 4:
        return Be(), t === null && Vc(e.stateNode.containerInfo), Qt(e), null;
      case 10:
        return wn(e.type), Qt(e), null;
      case 19:
        if ((Z(ue), (r = e.memoizedState), r === null)) return Qt(e), null;
        if (((l = (e.flags & 128) !== 0), (c = r.rendering), c === null))
          if (l) bi(r, !1);
          else {
            if (Zt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((c = Gr(t)), c !== null)) {
                  for (
                    e.flags |= 128,
                      bi(r, !1),
                      t = c.updateQueue,
                      e.updateQueue = t,
                      Zr(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;

                  )
                    fd(n, t), (n = n.sibling);
                  return W(ue, (ue.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            r.tail !== null &&
              ce() > Fr &&
              ((e.flags |= 128), (l = !0), bi(r, !1), (e.lanes = 4194304));
          }
        else {
          if (!l)
            if (((t = Gr(c)), t !== null)) {
              if (
                ((e.flags |= 128),
                (l = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Zr(e, t),
                bi(r, !0),
                r.tail === null &&
                  r.tailMode === "hidden" &&
                  !c.alternate &&
                  !Ot)
              )
                return Qt(e), null;
            } else
              2 * ce() - r.renderingStartTime > Fr &&
                n !== 536870912 &&
                ((e.flags |= 128), (l = !0), bi(r, !1), (e.lanes = 4194304));
          r.isBackwards
            ? ((c.sibling = e.child), (e.child = c))
            : ((t = r.last),
              t !== null ? (t.sibling = c) : (e.child = c),
              (r.last = c));
        }
        return r.tail !== null
          ? ((e = r.tail),
            (r.rendering = e),
            (r.tail = e.sibling),
            (r.renderingStartTime = ce()),
            (e.sibling = null),
            (t = ue.current),
            W(ue, l ? (t & 1) | 2 : t & 1),
            e)
          : (Qt(e), null);
      case 22:
      case 23:
        return (
          Nn(e),
          Qu(),
          (l = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== l && (e.flags |= 8192)
            : l && (e.flags |= 8192),
          l
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Qt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Qt(e),
          (n = e.updateQueue),
          n !== null && Zr(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (l = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          l !== n && (e.flags |= 2048),
          t !== null && Z(Ba),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          wn(oe),
          Qt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, e.tag));
  }
  function oy(t, e) {
    switch ((wu(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          wn(oe),
          Be(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Gn(e), null;
      case 13:
        if (
          (Nn(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(o(340));
          ai();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return Z(ue), null;
      case 4:
        return Be(), null;
      case 10:
        return wn(e.type), null;
      case 22:
      case 23:
        return (
          Nn(e),
          Qu(),
          t !== null && Z(Ba),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return wn(oe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function $h(t, e) {
    switch ((wu(e), e.tag)) {
      case 3:
        wn(oe), Be();
        break;
      case 26:
      case 27:
      case 5:
        Gn(e);
        break;
      case 4:
        Be();
        break;
      case 13:
        Nn(e);
        break;
      case 19:
        Z(ue);
        break;
      case 10:
        wn(e.type);
        break;
      case 22:
      case 23:
        Nn(e), Qu(), t !== null && Z(Ba);
        break;
      case 24:
        wn(oe);
    }
  }
  function Si(t, e) {
    try {
      var n = e.updateQueue,
        l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var r = l.next;
        n = r;
        do {
          if ((n.tag & t) === t) {
            l = void 0;
            var c = n.create,
              d = n.inst;
            (l = c()), (d.destroy = l);
          }
          n = n.next;
        } while (n !== r);
      }
    } catch (m) {
      $t(e, e.return, m);
    }
  }
  function ea(t, e, n) {
    try {
      var l = e.updateQueue,
        r = l !== null ? l.lastEffect : null;
      if (r !== null) {
        var c = r.next;
        l = c;
        do {
          if ((l.tag & t) === t) {
            var d = l.inst,
              m = d.destroy;
            if (m !== void 0) {
              (d.destroy = void 0), (r = e);
              var b = n,
                z = m;
              try {
                z();
              } catch ($) {
                $t(r, b, $);
              }
            }
          }
          l = l.next;
        } while (l !== c);
      }
    } catch ($) {
      $t(e, e.return, $);
    }
  }
  function kh(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        Md(e, n);
      } catch (l) {
        $t(t, t.return, l);
      }
    }
  }
  function Lh(t, e, n) {
    (n.props = ja(t.type, t.memoizedProps)), (n.state = t.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (l) {
      $t(t, e, l);
    }
  }
  function xi(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var l = t.stateNode;
            break;
          case 30:
            l = t.stateNode;
            break;
          default:
            l = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(l)) : (n.current = l);
      }
    } catch (r) {
      $t(t, e, r);
    }
  }
  function gn(t, e) {
    var n = t.ref,
      l = t.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (r) {
          $t(t, e, r);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          $t(t, e, r);
        }
      else n.current = null;
  }
  function qh(t) {
    var e = t.type,
      n = t.memoizedProps,
      l = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break t;
        case "img":
          n.src ? (l.src = n.src) : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (r) {
      $t(t, t.return, r);
    }
  }
  function Sc(t, e, n) {
    try {
      var l = t.stateNode;
      Ry(l, t.type, n, e), (l[Oe] = e);
    } catch (r) {
      $t(t, t.return, r);
    }
  }
  function Yh(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && ca(t.type)) ||
      t.tag === 4
    );
  }
  function xc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Yh(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && ca(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Cc(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      (t = t.stateNode),
        e
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
              ? n.ownerDocument.body
              : n
            ).insertBefore(t, e)
          : ((e =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n),
            e.appendChild(t),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = ro));
    else if (
      l !== 4 &&
      (l === 27 && ca(t.type) && ((n = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (Cc(t, e, n), t = t.sibling; t !== null; )
        Cc(t, e, n), (t = t.sibling);
  }
  function Jr(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (
      l !== 4 &&
      (l === 27 && ca(t.type) && (n = t.stateNode), (t = t.child), t !== null)
    )
      for (Jr(t, e, n), t = t.sibling; t !== null; )
        Jr(t, e, n), (t = t.sibling);
  }
  function Gh(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var l = t.type, r = e.attributes; r.length; )
        e.removeAttributeNode(r[0]);
      ve(e, l, n), (e[xe] = t), (e[Oe] = n);
    } catch (c) {
      $t(t, t.return, c);
    }
  }
  var Hn = !1,
    It = !1,
    Tc = !1,
    Vh = typeof WeakSet == "function" ? WeakSet : Set,
    he = null;
  function uy(t, e) {
    if (((t = t.containerInfo), (Kc = mo), (t = ed(t)), xu(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var r = l.anchorOffset,
              c = l.focusNode;
            l = l.focusOffset;
            try {
              n.nodeType, c.nodeType;
            } catch {
              n = null;
              break t;
            }
            var d = 0,
              m = -1,
              b = -1,
              z = 0,
              $ = 0,
              Y = t,
              D = null;
            e: for (;;) {
              for (
                var w;
                Y !== n || (r !== 0 && Y.nodeType !== 3) || (m = d + r),
                  Y !== c || (l !== 0 && Y.nodeType !== 3) || (b = d + l),
                  Y.nodeType === 3 && (d += Y.nodeValue.length),
                  (w = Y.firstChild) !== null;

              )
                (D = Y), (Y = w);
              for (;;) {
                if (Y === t) break e;
                if (
                  (D === n && ++z === r && (m = d),
                  D === c && ++$ === l && (b = d),
                  (w = Y.nextSibling) !== null)
                )
                  break;
                (Y = D), (D = Y.parentNode);
              }
              Y = w;
            }
            n = m === -1 || b === -1 ? null : { start: m, end: b };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Zc = { focusedElem: t, selectionRange: n }, mo = !1, he = e;
      he !== null;

    )
      if (
        ((e = he), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)
      )
        (t.return = e), (he = t);
      else
        for (; he !== null; ) {
          switch (((e = he), (c = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && c !== null) {
                (t = void 0),
                  (n = e),
                  (r = c.memoizedProps),
                  (c = c.memoizedState),
                  (l = n.stateNode);
                try {
                  var dt = ja(n.type, r, n.elementType === n.type);
                  (t = l.getSnapshotBeforeUpdate(dt, c)),
                    (l.__reactInternalSnapshotBeforeUpdate = t);
                } catch (st) {
                  $t(n, n.return, st);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
                )
                  Fc(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Fc(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(o(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (he = t);
            break;
          }
          he = e.return;
        }
  }
  function Xh(t, e, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        na(t, n), l & 4 && Si(5, n);
        break;
      case 1:
        if ((na(t, n), l & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (d) {
              $t(n, n.return, d);
            }
          else {
            var r = ja(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(r, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (d) {
              $t(n, n.return, d);
            }
          }
        l & 64 && kh(n), l & 512 && xi(n, n.return);
        break;
      case 3:
        if ((na(t, n), l & 64 && ((t = n.updateQueue), t !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            Md(t, e);
          } catch (d) {
            $t(n, n.return, d);
          }
        }
        break;
      case 27:
        e === null && l & 4 && Gh(n);
      case 26:
      case 5:
        na(t, n), e === null && l & 4 && qh(n), l & 512 && xi(n, n.return);
        break;
      case 12:
        na(t, n);
        break;
      case 13:
        na(t, n),
          l & 4 && Zh(t, n),
          l & 64 &&
            ((t = n.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((n = yy.bind(null, n)), jy(t, n))));
        break;
      case 22:
        if (((l = n.memoizedState !== null || Hn), !l)) {
          (e = (e !== null && e.memoizedState !== null) || It), (r = Hn);
          var c = It;
          (Hn = l),
            (It = e) && !c ? aa(t, n, (n.subtreeFlags & 8772) !== 0) : na(t, n),
            (Hn = r),
            (It = c);
        }
        break;
      case 30:
        break;
      default:
        na(t, n);
    }
  }
  function Qh(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), Qh(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && nu(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var Vt = null,
    _e = !1;
  function $n(t, e, n) {
    for (n = n.child; n !== null; ) Kh(t, e, n), (n = n.sibling);
  }
  function Kh(t, e, n) {
    if (Ct && typeof Ct.onCommitFiberUnmount == "function")
      try {
        Ct.onCommitFiberUnmount(se, n);
      } catch {}
    switch (n.tag) {
      case 26:
        It || gn(n, e),
          $n(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        It || gn(n, e);
        var l = Vt,
          r = _e;
        ca(n.type) && ((Vt = n.stateNode), (_e = !1)),
          $n(t, e, n),
          _i(n.stateNode),
          (Vt = l),
          (_e = r);
        break;
      case 5:
        It || gn(n, e);
      case 6:
        if (
          ((l = Vt),
          (r = _e),
          (Vt = null),
          $n(t, e, n),
          (Vt = l),
          (_e = r),
          Vt !== null)
        )
          if (_e)
            try {
              (Vt.nodeType === 9
                ? Vt.body
                : Vt.nodeName === "HTML"
                ? Vt.ownerDocument.body
                : Vt
              ).removeChild(n.stateNode);
            } catch (c) {
              $t(n, e, c);
            }
          else
            try {
              Vt.removeChild(n.stateNode);
            } catch (c) {
              $t(n, e, c);
            }
        break;
      case 18:
        Vt !== null &&
          (_e
            ? ((t = Vt),
              jm(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                n.stateNode
              ),
              $i(t))
            : jm(Vt, n.stateNode));
        break;
      case 4:
        (l = Vt),
          (r = _e),
          (Vt = n.stateNode.containerInfo),
          (_e = !0),
          $n(t, e, n),
          (Vt = l),
          (_e = r);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        It || ea(2, n, e), It || ea(4, n, e), $n(t, e, n);
        break;
      case 1:
        It ||
          (gn(n, e),
          (l = n.stateNode),
          typeof l.componentWillUnmount == "function" && Lh(n, e, l)),
          $n(t, e, n);
        break;
      case 21:
        $n(t, e, n);
        break;
      case 22:
        (It = (l = It) || n.memoizedState !== null), $n(t, e, n), (It = l);
        break;
      default:
        $n(t, e, n);
    }
  }
  function Zh(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        $i(t);
      } catch (n) {
        $t(e, e.return, n);
      }
  }
  function cy(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Vh()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Vh()),
          e
        );
      default:
        throw Error(o(435, t.tag));
    }
  }
  function Ec(t, e) {
    var n = cy(t);
    e.forEach(function (l) {
      var r = vy.bind(null, t, l);
      n.has(l) || (n.add(l), l.then(r, r));
    });
  }
  function Ue(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var r = n[l],
          c = t,
          d = e,
          m = d;
        t: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (ca(m.type)) {
                (Vt = m.stateNode), (_e = !1);
                break t;
              }
              break;
            case 5:
              (Vt = m.stateNode), (_e = !1);
              break t;
            case 3:
            case 4:
              (Vt = m.stateNode.containerInfo), (_e = !0);
              break t;
          }
          m = m.return;
        }
        if (Vt === null) throw Error(o(160));
        Kh(c, d, r),
          (Vt = null),
          (_e = !1),
          (c = r.alternate),
          c !== null && (c.return = null),
          (r.return = null);
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) Jh(e, t), (e = e.sibling);
  }
  var ln = null;
  function Jh(t, e) {
    var n = t.alternate,
      l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ue(e, t),
          He(t),
          l & 4 && (ea(3, t, t.return), Si(3, t), ea(5, t, t.return));
        break;
      case 1:
        Ue(e, t),
          He(t),
          l & 512 && (It || n === null || gn(n, n.return)),
          l & 64 &&
            Hn &&
            ((t = t.updateQueue),
            t !== null &&
              ((l = t.callbacks),
              l !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? l : n.concat(l)))));
        break;
      case 26:
        var r = ln;
        if (
          (Ue(e, t),
          He(t),
          l & 512 && (It || n === null || gn(n, n.return)),
          l & 4)
        ) {
          var c = n !== null ? n.memoizedState : null;
          if (((l = t.memoizedState), n === null))
            if (l === null)
              if (t.stateNode === null) {
                t: {
                  (l = t.type),
                    (n = t.memoizedProps),
                    (r = r.ownerDocument || r);
                  e: switch (l) {
                    case "title":
                      (c = r.getElementsByTagName("title")[0]),
                        (!c ||
                          c[Xl] ||
                          c[xe] ||
                          c.namespaceURI === "http://www.w3.org/2000/svg" ||
                          c.hasAttribute("itemprop")) &&
                          ((c = r.createElement(l)),
                          r.head.insertBefore(
                            c,
                            r.querySelector("head > title")
                          )),
                        ve(c, l, n),
                        (c[xe] = t),
                        fe(c),
                        (l = c);
                      break t;
                    case "link":
                      var d = Gm("link", "href", r).get(l + (n.href || ""));
                      if (d) {
                        for (var m = 0; m < d.length; m++)
                          if (
                            ((c = d[m]),
                            c.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              c.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              c.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              c.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            d.splice(m, 1);
                            break e;
                          }
                      }
                      (c = r.createElement(l)),
                        ve(c, l, n),
                        r.head.appendChild(c);
                      break;
                    case "meta":
                      if (
                        (d = Gm("meta", "content", r).get(
                          l + (n.content || "")
                        ))
                      ) {
                        for (m = 0; m < d.length; m++)
                          if (
                            ((c = d[m]),
                            c.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              c.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              c.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              c.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              c.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            d.splice(m, 1);
                            break e;
                          }
                      }
                      (c = r.createElement(l)),
                        ve(c, l, n),
                        r.head.appendChild(c);
                      break;
                    default:
                      throw Error(o(468, l));
                  }
                  (c[xe] = t), fe(c), (l = c);
                }
                t.stateNode = l;
              } else Vm(r, t.type, t.stateNode);
            else t.stateNode = Ym(r, l, t.memoizedProps);
          else
            c !== l
              ? (c === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : c.count--,
                l === null
                  ? Vm(r, t.type, t.stateNode)
                  : Ym(r, l, t.memoizedProps))
              : l === null &&
                t.stateNode !== null &&
                Sc(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        Ue(e, t),
          He(t),
          l & 512 && (It || n === null || gn(n, n.return)),
          n !== null && l & 4 && Sc(t, t.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (
          (Ue(e, t),
          He(t),
          l & 512 && (It || n === null || gn(n, n.return)),
          t.flags & 32)
        ) {
          r = t.stateNode;
          try {
            Ia(r, "");
          } catch (w) {
            $t(t, t.return, w);
          }
        }
        l & 4 &&
          t.stateNode != null &&
          ((r = t.memoizedProps), Sc(t, r, n !== null ? n.memoizedProps : r)),
          l & 1024 && (Tc = !0);
        break;
      case 6:
        if ((Ue(e, t), He(t), l & 4)) {
          if (t.stateNode === null) throw Error(o(162));
          (l = t.memoizedProps), (n = t.stateNode);
          try {
            n.nodeValue = l;
          } catch (w) {
            $t(t, t.return, w);
          }
        }
        break;
      case 3:
        if (
          ((so = null),
          (r = ln),
          (ln = uo(e.containerInfo)),
          Ue(e, t),
          (ln = r),
          He(t),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            $i(e.containerInfo);
          } catch (w) {
            $t(t, t.return, w);
          }
        Tc && ((Tc = !1), Wh(t));
        break;
      case 4:
        (l = ln),
          (ln = uo(t.stateNode.containerInfo)),
          Ue(e, t),
          He(t),
          (ln = l);
        break;
      case 12:
        Ue(e, t), He(t);
        break;
      case 13:
        Ue(e, t),
          He(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (_c = ce()),
          l & 4 &&
            ((l = t.updateQueue),
            l !== null && ((t.updateQueue = null), Ec(t, l)));
        break;
      case 22:
        r = t.memoizedState !== null;
        var b = n !== null && n.memoizedState !== null,
          z = Hn,
          $ = It;
        if (
          ((Hn = z || r),
          (It = $ || b),
          Ue(e, t),
          (It = $),
          (Hn = z),
          He(t),
          l & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = r ? e._visibility & -2 : e._visibility | 1,
              r && (n === null || b || Hn || It || Ua(t)),
              n = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                b = n = e;
                try {
                  if (((c = b.stateNode), r))
                    (d = c.style),
                      typeof d.setProperty == "function"
                        ? d.setProperty("display", "none", "important")
                        : (d.display = "none");
                  else {
                    m = b.stateNode;
                    var Y = b.memoizedProps.style,
                      D =
                        Y != null && Y.hasOwnProperty("display")
                          ? Y.display
                          : null;
                    m.style.display =
                      D == null || typeof D == "boolean" ? "" : ("" + D).trim();
                  }
                } catch (w) {
                  $t(b, b.return, w);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                b = e;
                try {
                  b.stateNode.nodeValue = r ? "" : b.memoizedProps;
                } catch (w) {
                  $t(b, b.return, w);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              n === e && (n = null), (e = e.return);
            }
            n === e && (n = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        l & 4 &&
          ((l = t.updateQueue),
          l !== null &&
            ((n = l.retryQueue),
            n !== null && ((l.retryQueue = null), Ec(t, n))));
        break;
      case 19:
        Ue(e, t),
          He(t),
          l & 4 &&
            ((l = t.updateQueue),
            l !== null && ((t.updateQueue = null), Ec(t, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ue(e, t), He(t);
    }
  }
  function He(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, l = t.return; l !== null; ) {
          if (Yh(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(o(160));
        switch (n.tag) {
          case 27:
            var r = n.stateNode,
              c = xc(t);
            Jr(t, c, r);
            break;
          case 5:
            var d = n.stateNode;
            n.flags & 32 && (Ia(d, ""), (n.flags &= -33));
            var m = xc(t);
            Jr(t, m, d);
            break;
          case 3:
          case 4:
            var b = n.stateNode.containerInfo,
              z = xc(t);
            Cc(t, z, b);
            break;
          default:
            throw Error(o(161));
        }
      } catch ($) {
        $t(t, t.return, $);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Wh(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Wh(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function na(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) Xh(t, e.alternate, e), (e = e.sibling);
  }
  function Ua(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ea(4, e, e.return), Ua(e);
          break;
        case 1:
          gn(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && Lh(e, e.return, n),
            Ua(e);
          break;
        case 27:
          _i(e.stateNode);
        case 26:
        case 5:
          gn(e, e.return), Ua(e);
          break;
        case 22:
          e.memoizedState === null && Ua(e);
          break;
        case 30:
          Ua(e);
          break;
        default:
          Ua(e);
      }
      t = t.sibling;
    }
  }
  function aa(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var l = e.alternate,
        r = t,
        c = e,
        d = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          aa(r, c, n), Si(4, c);
          break;
        case 1:
          if (
            (aa(r, c, n),
            (l = c),
            (r = l.stateNode),
            typeof r.componentDidMount == "function")
          )
            try {
              r.componentDidMount();
            } catch (z) {
              $t(l, l.return, z);
            }
          if (((l = c), (r = l.updateQueue), r !== null)) {
            var m = l.stateNode;
            try {
              var b = r.shared.hiddenCallbacks;
              if (b !== null)
                for (r.shared.hiddenCallbacks = null, r = 0; r < b.length; r++)
                  Ad(b[r], m);
            } catch (z) {
              $t(l, l.return, z);
            }
          }
          n && d & 64 && kh(c), xi(c, c.return);
          break;
        case 27:
          Gh(c);
        case 26:
        case 5:
          aa(r, c, n), n && l === null && d & 4 && qh(c), xi(c, c.return);
          break;
        case 12:
          aa(r, c, n);
          break;
        case 13:
          aa(r, c, n), n && d & 4 && Zh(r, c);
          break;
        case 22:
          c.memoizedState === null && aa(r, c, n), xi(c, c.return);
          break;
        case 30:
          break;
        default:
          aa(r, c, n);
      }
      e = e.sibling;
    }
  }
  function Ac(t, e) {
    var n = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && ri(n));
  }
  function Mc(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && ri(t));
  }
  function yn(t, e, n, l) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Fh(t, e, n, l), (e = e.sibling);
  }
  function Fh(t, e, n, l) {
    var r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        yn(t, e, n, l), r & 2048 && Si(9, e);
        break;
      case 1:
        yn(t, e, n, l);
        break;
      case 3:
        yn(t, e, n, l),
          r & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && ri(t)));
        break;
      case 12:
        if (r & 2048) {
          yn(t, e, n, l), (t = e.stateNode);
          try {
            var c = e.memoizedProps,
              d = c.id,
              m = c.onPostCommit;
            typeof m == "function" &&
              m(
                d,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (b) {
            $t(e, e.return, b);
          }
        } else yn(t, e, n, l);
        break;
      case 13:
        yn(t, e, n, l);
        break;
      case 23:
        break;
      case 22:
        (c = e.stateNode),
          (d = e.alternate),
          e.memoizedState !== null
            ? c._visibility & 2
              ? yn(t, e, n, l)
              : Ci(t, e)
            : c._visibility & 2
            ? yn(t, e, n, l)
            : ((c._visibility |= 2),
              vl(t, e, n, l, (e.subtreeFlags & 10256) !== 0)),
          r & 2048 && Ac(d, e);
        break;
      case 24:
        yn(t, e, n, l), r & 2048 && Mc(e.alternate, e);
        break;
      default:
        yn(t, e, n, l);
    }
  }
  function vl(t, e, n, l, r) {
    for (r = r && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var c = t,
        d = e,
        m = n,
        b = l,
        z = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          vl(c, d, m, b, r), Si(8, d);
          break;
        case 23:
          break;
        case 22:
          var $ = d.stateNode;
          d.memoizedState !== null
            ? $._visibility & 2
              ? vl(c, d, m, b, r)
              : Ci(c, d)
            : (($._visibility |= 2), vl(c, d, m, b, r)),
            r && z & 2048 && Ac(d.alternate, d);
          break;
        case 24:
          vl(c, d, m, b, r), r && z & 2048 && Mc(d.alternate, d);
          break;
        default:
          vl(c, d, m, b, r);
      }
      e = e.sibling;
    }
  }
  function Ci(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          l = e,
          r = l.flags;
        switch (l.tag) {
          case 22:
            Ci(n, l), r & 2048 && Ac(l.alternate, l);
            break;
          case 24:
            Ci(n, l), r & 2048 && Mc(l.alternate, l);
            break;
          default:
            Ci(n, l);
        }
        e = e.sibling;
      }
  }
  var Ti = 8192;
  function bl(t) {
    if (t.subtreeFlags & Ti)
      for (t = t.child; t !== null; ) Ph(t), (t = t.sibling);
  }
  function Ph(t) {
    switch (t.tag) {
      case 26:
        bl(t),
          t.flags & Ti &&
            t.memoizedState !== null &&
            Zy(ln, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        bl(t);
        break;
      case 3:
      case 4:
        var e = ln;
        (ln = uo(t.stateNode.containerInfo)), bl(t), (ln = e);
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = Ti), (Ti = 16777216), bl(t), (Ti = e))
            : bl(t));
        break;
      default:
        bl(t);
    }
  }
  function Ih(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function Ei(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          (he = l), em(l, t);
        }
      Ih(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) tm(t), (t = t.sibling);
  }
  function tm(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ei(t), t.flags & 2048 && ea(9, t, t.return);
        break;
      case 3:
        Ei(t);
        break;
      case 12:
        Ei(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Wr(t))
          : Ei(t);
        break;
      default:
        Ei(t);
    }
  }
  function Wr(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          (he = l), em(l, t);
        }
      Ih(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          ea(8, e, e.return), Wr(e);
          break;
        case 22:
          (n = e.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), Wr(e));
          break;
        default:
          Wr(e);
      }
      t = t.sibling;
    }
  }
  function em(t, e) {
    for (; he !== null; ) {
      var n = he;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ea(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          ri(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) (l.return = n), (he = l);
      else
        t: for (n = t; he !== null; ) {
          l = he;
          var r = l.sibling,
            c = l.return;
          if ((Qh(l), l === n)) {
            he = null;
            break t;
          }
          if (r !== null) {
            (r.return = c), (he = r);
            break t;
          }
          he = c;
        }
    }
  }
  var sy = {
      getCacheForType: function (t) {
        var e = Ce(oe),
          n = e.data.get(t);
        return n === void 0 && ((n = t()), e.data.set(t, n)), n;
      },
    },
    fy = typeof WeakMap == "function" ? WeakMap : Map,
    wt = 0,
    Yt = null,
    bt = null,
    Tt = 0,
    Bt = 0,
    $e = null,
    la = !1,
    Sl = !1,
    Oc = !1,
    kn = 0,
    Zt = 0,
    ia = 0,
    Ha = 0,
    Rc = 0,
    We = 0,
    xl = 0,
    Ai = null,
    De = null,
    zc = !1,
    _c = 0,
    Fr = 1 / 0,
    Pr = null,
    ra = null,
    ye = 0,
    oa = null,
    Cl = null,
    Tl = 0,
    Dc = 0,
    wc = null,
    nm = null,
    Mi = 0,
    Bc = null;
  function ke() {
    if ((wt & 2) !== 0 && Tt !== 0) return Tt & -Tt;
    if (B.T !== null) {
      var t = sl;
      return t !== 0 ? t : Lc();
    }
    return vf();
  }
  function am() {
    We === 0 && (We = (Tt & 536870912) === 0 || Ot ? mf() : 536870912);
    var t = Je.current;
    return t !== null && (t.flags |= 32), We;
  }
  function Le(t, e, n) {
    ((t === Yt && (Bt === 2 || Bt === 9)) || t.cancelPendingCommit !== null) &&
      (El(t, 0), ua(t, Tt, We, !1)),
      Vl(t, n),
      ((wt & 2) === 0 || t !== Yt) &&
        (t === Yt &&
          ((wt & 2) === 0 && (Ha |= n), Zt === 4 && ua(t, Tt, We, !1)),
        vn(t));
  }
  function lm(t, e, n) {
    if ((wt & 6) !== 0) throw Error(o(327));
    var l = (!n && (e & 124) === 0 && (e & t.expiredLanes) === 0) || Gl(t, e),
      r = l ? my(t, e) : Uc(t, e, !0),
      c = l;
    do {
      if (r === 0) {
        Sl && !l && ua(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), c && !dy(n))) {
          (r = Uc(t, e, !1)), (c = !1);
          continue;
        }
        if (r === 2) {
          if (((c = e), t.errorRecoveryDisabledLanes & c)) var d = 0;
          else
            (d = t.pendingLanes & -536870913),
              (d = d !== 0 ? d : d & 536870912 ? 536870912 : 0);
          if (d !== 0) {
            e = d;
            t: {
              var m = t;
              r = Ai;
              var b = m.current.memoizedState.isDehydrated;
              if ((b && (El(m, d).flags |= 256), (d = Uc(m, d, !1)), d !== 2)) {
                if (Oc && !b) {
                  (m.errorRecoveryDisabledLanes |= c), (Ha |= c), (r = 4);
                  break t;
                }
                (c = De),
                  (De = r),
                  c !== null && (De === null ? (De = c) : De.push.apply(De, c));
              }
              r = d;
            }
            if (((c = !1), r !== 2)) continue;
          }
        }
        if (r === 1) {
          El(t, 0), ua(t, e, 0, !0);
          break;
        }
        t: {
          switch (((l = t), (c = r), c)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              ua(l, e, We, !la);
              break t;
            case 2:
              De = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((e & 62914560) === e && ((r = _c + 300 - ce()), 10 < r)) {
            if ((ua(l, e, We, !la), cr(l, 0, !0) !== 0)) break t;
            l.timeoutHandle = Bm(
              im.bind(null, l, n, De, Pr, zc, e, We, Ha, xl, la, c, 2, -0, 0),
              r
            );
            break t;
          }
          im(l, n, De, Pr, zc, e, We, Ha, xl, la, c, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    vn(t);
  }
  function im(t, e, n, l, r, c, d, m, b, z, $, Y, D, w) {
    if (
      ((t.timeoutHandle = -1),
      (Y = e.subtreeFlags),
      (Y & 8192 || (Y & 16785408) === 16785408) &&
        ((Bi = { stylesheets: null, count: 0, unsuspend: Ky }),
        Ph(e),
        (Y = Jy()),
        Y !== null))
    ) {
      (t.cancelPendingCommit = Y(
        dm.bind(null, t, e, c, n, l, r, d, m, b, $, 1, D, w)
      )),
        ua(t, c, d, !z);
      return;
    }
    dm(t, e, c, n, l, r, d, m, b);
  }
  function dy(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var l = 0; l < n.length; l++) {
          var r = n[l],
            c = r.getSnapshot;
          r = r.value;
          try {
            if (!Ne(c(), r)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
        (n.return = e), (e = n);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function ua(t, e, n, l) {
    (e &= ~Rc),
      (e &= ~Ha),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      l && (t.warmLanes |= e),
      (l = t.expirationTimes);
    for (var r = e; 0 < r; ) {
      var c = 31 - Gt(r),
        d = 1 << c;
      (l[c] = -1), (r &= ~d);
    }
    n !== 0 && gf(t, n, e);
  }
  function Ir() {
    return (wt & 6) === 0 ? (Oi(0), !1) : !0;
  }
  function Nc() {
    if (bt !== null) {
      if (Bt === 0) var t = bt.return;
      else (t = bt), (Dn = Da = null), Fu(t), (gl = null), (yi = 0), (t = bt);
      for (; t !== null; ) $h(t.alternate, t), (t = t.return);
      bt = null;
    }
  }
  function El(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && ((t.timeoutHandle = -1), _y(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      Nc(),
      (Yt = t),
      (bt = n = Rn(t.current, null)),
      (Tt = e),
      (Bt = 0),
      ($e = null),
      (la = !1),
      (Sl = Gl(t, e)),
      (Oc = !1),
      (xl = We = Rc = Ha = ia = Zt = 0),
      (De = Ai = null),
      (zc = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l; ) {
        var r = 31 - Gt(l),
          c = 1 << r;
        (e |= t[r]), (l &= ~c);
      }
    return (kn = e), xr(), n;
  }
  function rm(t, e) {
    (yt = null),
      (B.H = Lr),
      e === ui || e === _r
        ? ((e = Td()), (Bt = 3))
        : e === Sd
        ? ((e = Td()), (Bt = 4))
        : (Bt =
            e === Eh
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      ($e = e),
      bt === null && ((Zt = 1), Xr(t, Xe(e, t.current)));
  }
  function om() {
    var t = B.H;
    return (B.H = Lr), t === null ? Lr : t;
  }
  function um() {
    var t = B.A;
    return (B.A = sy), t;
  }
  function jc() {
    (Zt = 4),
      la || ((Tt & 4194048) !== Tt && Je.current !== null) || (Sl = !0),
      ((ia & 134217727) === 0 && (Ha & 134217727) === 0) ||
        Yt === null ||
        ua(Yt, Tt, We, !1);
  }
  function Uc(t, e, n) {
    var l = wt;
    wt |= 2;
    var r = om(),
      c = um();
    (Yt !== t || Tt !== e) && ((Pr = null), El(t, e)), (e = !1);
    var d = Zt;
    t: do
      try {
        if (Bt !== 0 && bt !== null) {
          var m = bt,
            b = $e;
          switch (Bt) {
            case 8:
              Nc(), (d = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Je.current === null && (e = !0);
              var z = Bt;
              if (((Bt = 0), ($e = null), Al(t, m, b, z), n && Sl)) {
                d = 0;
                break t;
              }
              break;
            default:
              (z = Bt), (Bt = 0), ($e = null), Al(t, m, b, z);
          }
        }
        hy(), (d = Zt);
        break;
      } catch ($) {
        rm(t, $);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (Dn = Da = null),
      (wt = l),
      (B.H = r),
      (B.A = c),
      bt === null && ((Yt = null), (Tt = 0), xr()),
      d
    );
  }
  function hy() {
    for (; bt !== null; ) cm(bt);
  }
  function my(t, e) {
    var n = wt;
    wt |= 2;
    var l = om(),
      r = um();
    Yt !== t || Tt !== e
      ? ((Pr = null), (Fr = ce() + 500), El(t, e))
      : (Sl = Gl(t, e));
    t: do
      try {
        if (Bt !== 0 && bt !== null) {
          e = bt;
          var c = $e;
          e: switch (Bt) {
            case 1:
              (Bt = 0), ($e = null), Al(t, e, c, 1);
              break;
            case 2:
            case 9:
              if (xd(c)) {
                (Bt = 0), ($e = null), sm(e);
                break;
              }
              (e = function () {
                (Bt !== 2 && Bt !== 9) || Yt !== t || (Bt = 7), vn(t);
              }),
                c.then(e, e);
              break t;
            case 3:
              Bt = 7;
              break t;
            case 4:
              Bt = 5;
              break t;
            case 7:
              xd(c)
                ? ((Bt = 0), ($e = null), sm(e))
                : ((Bt = 0), ($e = null), Al(t, e, c, 7));
              break;
            case 5:
              var d = null;
              switch (bt.tag) {
                case 26:
                  d = bt.memoizedState;
                case 5:
                case 27:
                  var m = bt;
                  if (!d || Xm(d)) {
                    (Bt = 0), ($e = null);
                    var b = m.sibling;
                    if (b !== null) bt = b;
                    else {
                      var z = m.return;
                      z !== null ? ((bt = z), to(z)) : (bt = null);
                    }
                    break e;
                  }
              }
              (Bt = 0), ($e = null), Al(t, e, c, 5);
              break;
            case 6:
              (Bt = 0), ($e = null), Al(t, e, c, 6);
              break;
            case 8:
              Nc(), (Zt = 6);
              break t;
            default:
              throw Error(o(462));
          }
        }
        py();
        break;
      } catch ($) {
        rm(t, $);
      }
    while (!0);
    return (
      (Dn = Da = null),
      (B.H = l),
      (B.A = r),
      (wt = n),
      bt !== null ? 0 : ((Yt = null), (Tt = 0), xr(), Zt)
    );
  }
  function py() {
    for (; bt !== null && !Xa(); ) cm(bt);
  }
  function cm(t) {
    var e = Uh(t.alternate, t, kn);
    (t.memoizedProps = t.pendingProps), e === null ? to(t) : (bt = e);
  }
  function sm(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = _h(n, e, e.pendingProps, e.type, void 0, Tt);
        break;
      case 11:
        e = _h(n, e, e.pendingProps, e.type.render, e.ref, Tt);
        break;
      case 5:
        Fu(e);
      default:
        $h(n, e), (e = bt = fd(e, kn)), (e = Uh(n, e, kn));
    }
    (t.memoizedProps = t.pendingProps), e === null ? to(t) : (bt = e);
  }
  function Al(t, e, n, l) {
    (Dn = Da = null), Fu(e), (gl = null), (yi = 0);
    var r = e.return;
    try {
      if (ly(t, r, e, n, Tt)) {
        (Zt = 1), Xr(t, Xe(n, t.current)), (bt = null);
        return;
      }
    } catch (c) {
      if (r !== null) throw ((bt = r), c);
      (Zt = 1), Xr(t, Xe(n, t.current)), (bt = null);
      return;
    }
    e.flags & 32768
      ? (Ot || l === 1
          ? (t = !0)
          : Sl || (Tt & 536870912) !== 0
          ? (t = !1)
          : ((la = t = !0),
            (l === 2 || l === 9 || l === 3 || l === 6) &&
              ((l = Je.current),
              l !== null && l.tag === 13 && (l.flags |= 16384))),
        fm(e, t))
      : to(e);
  }
  function to(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        fm(e, la);
        return;
      }
      t = e.return;
      var n = ry(e.alternate, e, kn);
      if (n !== null) {
        bt = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        bt = e;
        return;
      }
      bt = e = t;
    } while (e !== null);
    Zt === 0 && (Zt = 5);
  }
  function fm(t, e) {
    do {
      var n = oy(t.alternate, t);
      if (n !== null) {
        (n.flags &= 32767), (bt = n);
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        bt = t;
        return;
      }
      bt = t = n;
    } while (t !== null);
    (Zt = 6), (bt = null);
  }
  function dm(t, e, n, l, r, c, d, m, b) {
    t.cancelPendingCommit = null;
    do eo();
    while (ye !== 0);
    if ((wt & 6) !== 0) throw Error(o(327));
    if (e !== null) {
      if (e === t.current) throw Error(o(177));
      if (
        ((c = e.lanes | e.childLanes),
        (c |= Mu),
        Kp(t, n, c, d, m, b),
        t === Yt && ((bt = Yt = null), (Tt = 0)),
        (Cl = e),
        (oa = t),
        (Tl = n),
        (Dc = c),
        (wc = r),
        (nm = l),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            by(hn, function () {
              return ym(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (l = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || l)
      ) {
        (l = B.T), (B.T = null), (r = K.p), (K.p = 2), (d = wt), (wt |= 4);
        try {
          uy(t, e, n);
        } finally {
          (wt = d), (K.p = r), (B.T = l);
        }
      }
      (ye = 1), hm(), mm(), pm();
    }
  }
  function hm() {
    if (ye === 1) {
      ye = 0;
      var t = oa,
        e = Cl,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        (n = B.T), (B.T = null);
        var l = K.p;
        K.p = 2;
        var r = wt;
        wt |= 4;
        try {
          Jh(e, t);
          var c = Zc,
            d = ed(t.containerInfo),
            m = c.focusedElem,
            b = c.selectionRange;
          if (
            d !== m &&
            m &&
            m.ownerDocument &&
            td(m.ownerDocument.documentElement, m)
          ) {
            if (b !== null && xu(m)) {
              var z = b.start,
                $ = b.end;
              if (($ === void 0 && ($ = z), "selectionStart" in m))
                (m.selectionStart = z),
                  (m.selectionEnd = Math.min($, m.value.length));
              else {
                var Y = m.ownerDocument || document,
                  D = (Y && Y.defaultView) || window;
                if (D.getSelection) {
                  var w = D.getSelection(),
                    dt = m.textContent.length,
                    st = Math.min(b.start, dt),
                    Ut = b.end === void 0 ? st : Math.min(b.end, dt);
                  !w.extend && st > Ut && ((d = Ut), (Ut = st), (st = d));
                  var A = If(m, st),
                    C = If(m, Ut);
                  if (
                    A &&
                    C &&
                    (w.rangeCount !== 1 ||
                      w.anchorNode !== A.node ||
                      w.anchorOffset !== A.offset ||
                      w.focusNode !== C.node ||
                      w.focusOffset !== C.offset)
                  ) {
                    var R = Y.createRange();
                    R.setStart(A.node, A.offset),
                      w.removeAllRanges(),
                      st > Ut
                        ? (w.addRange(R), w.extend(C.node, C.offset))
                        : (R.setEnd(C.node, C.offset), w.addRange(R));
                  }
                }
              }
            }
            for (Y = [], w = m; (w = w.parentNode); )
              w.nodeType === 1 &&
                Y.push({ element: w, left: w.scrollLeft, top: w.scrollTop });
            for (
              typeof m.focus == "function" && m.focus(), m = 0;
              m < Y.length;
              m++
            ) {
              var k = Y[m];
              (k.element.scrollLeft = k.left), (k.element.scrollTop = k.top);
            }
          }
          (mo = !!Kc), (Zc = Kc = null);
        } finally {
          (wt = r), (K.p = l), (B.T = n);
        }
      }
      (t.current = e), (ye = 2);
    }
  }
  function mm() {
    if (ye === 2) {
      ye = 0;
      var t = oa,
        e = Cl,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        (n = B.T), (B.T = null);
        var l = K.p;
        K.p = 2;
        var r = wt;
        wt |= 4;
        try {
          Xh(t, e.alternate, e);
        } finally {
          (wt = r), (K.p = l), (B.T = n);
        }
      }
      ye = 3;
    }
  }
  function pm() {
    if (ye === 4 || ye === 3) {
      (ye = 0), ql();
      var t = oa,
        e = Cl,
        n = Tl,
        l = nm;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (ye = 5)
        : ((ye = 0), (Cl = oa = null), gm(t, t.pendingLanes));
      var r = t.pendingLanes;
      if (
        (r === 0 && (ra = null),
        tu(n),
        (e = e.stateNode),
        Ct && typeof Ct.onCommitFiberRoot == "function")
      )
        try {
          Ct.onCommitFiberRoot(se, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        (e = B.T), (r = K.p), (K.p = 2), (B.T = null);
        try {
          for (var c = t.onRecoverableError, d = 0; d < l.length; d++) {
            var m = l[d];
            c(m.value, { componentStack: m.stack });
          }
        } finally {
          (B.T = e), (K.p = r);
        }
      }
      (Tl & 3) !== 0 && eo(),
        vn(t),
        (r = t.pendingLanes),
        (n & 4194090) !== 0 && (r & 42) !== 0
          ? t === Bc
            ? Mi++
            : ((Mi = 0), (Bc = t))
          : (Mi = 0),
        Oi(0);
    }
  }
  function gm(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), ri(e)));
  }
  function eo(t) {
    return hm(), mm(), pm(), ym();
  }
  function ym() {
    if (ye !== 5) return !1;
    var t = oa,
      e = Dc;
    Dc = 0;
    var n = tu(Tl),
      l = B.T,
      r = K.p;
    try {
      (K.p = 32 > n ? 32 : n), (B.T = null), (n = wc), (wc = null);
      var c = oa,
        d = Tl;
      if (((ye = 0), (Cl = oa = null), (Tl = 0), (wt & 6) !== 0))
        throw Error(o(331));
      var m = wt;
      if (
        ((wt |= 4),
        tm(c.current),
        Fh(c, c.current, d, n),
        (wt = m),
        Oi(0, !1),
        Ct && typeof Ct.onPostCommitFiberRoot == "function")
      )
        try {
          Ct.onPostCommitFiberRoot(se, c);
        } catch {}
      return !0;
    } finally {
      (K.p = r), (B.T = l), gm(t, e);
    }
  }
  function vm(t, e, n) {
    (e = Xe(n, e)),
      (e = fc(t.stateNode, e, 2)),
      (t = Fn(t, e, 2)),
      t !== null && (Vl(t, 2), vn(t));
  }
  function $t(t, e, n) {
    if (t.tag === 3) vm(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          vm(e, t, n);
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (ra === null || !ra.has(l)))
          ) {
            (t = Xe(n, t)),
              (n = Ch(2)),
              (l = Fn(e, n, 2)),
              l !== null && (Th(n, l, e, t), Vl(l, 2), vn(l));
            break;
          }
        }
        e = e.return;
      }
  }
  function Hc(t, e, n) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new fy();
      var r = new Set();
      l.set(e, r);
    } else (r = l.get(e)), r === void 0 && ((r = new Set()), l.set(e, r));
    r.has(n) ||
      ((Oc = !0), r.add(n), (t = gy.bind(null, t, e, n)), e.then(t, t));
  }
  function gy(t, e, n) {
    var l = t.pingCache;
    l !== null && l.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      Yt === t &&
        (Tt & n) === n &&
        (Zt === 4 || (Zt === 3 && (Tt & 62914560) === Tt && 300 > ce() - _c)
          ? (wt & 2) === 0 && El(t, 0)
          : (Rc |= n),
        xl === Tt && (xl = 0)),
      vn(t);
  }
  function bm(t, e) {
    e === 0 && (e = pf()), (t = rl(t, e)), t !== null && (Vl(t, e), vn(t));
  }
  function yy(t) {
    var e = t.memoizedState,
      n = 0;
    e !== null && (n = e.retryLane), bm(t, n);
  }
  function vy(t, e) {
    var n = 0;
    switch (t.tag) {
      case 13:
        var l = t.stateNode,
          r = t.memoizedState;
        r !== null && (n = r.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      case 22:
        l = t.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    l !== null && l.delete(e), bm(t, n);
  }
  function by(t, e) {
    return Xn(t, e);
  }
  var no = null,
    Ml = null,
    $c = !1,
    ao = !1,
    kc = !1,
    $a = 0;
  function vn(t) {
    t !== Ml &&
      t.next === null &&
      (Ml === null ? (no = Ml = t) : (Ml = Ml.next = t)),
      (ao = !0),
      $c || (($c = !0), xy());
  }
  function Oi(t, e) {
    if (!kc && ao) {
      kc = !0;
      do
        for (var n = !1, l = no; l !== null; ) {
          if (t !== 0) {
            var r = l.pendingLanes;
            if (r === 0) var c = 0;
            else {
              var d = l.suspendedLanes,
                m = l.pingedLanes;
              (c = (1 << (31 - Gt(42 | t) + 1)) - 1),
                (c &= r & ~(d & ~m)),
                (c = c & 201326741 ? (c & 201326741) | 1 : c ? c | 2 : 0);
            }
            c !== 0 && ((n = !0), Tm(l, c));
          } else
            (c = Tt),
              (c = cr(
                l,
                l === Yt ? c : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1
              )),
              (c & 3) === 0 || Gl(l, c) || ((n = !0), Tm(l, c));
          l = l.next;
        }
      while (n);
      kc = !1;
    }
  }
  function Sy() {
    Sm();
  }
  function Sm() {
    ao = $c = !1;
    var t = 0;
    $a !== 0 && (zy() && (t = $a), ($a = 0));
    for (var e = ce(), n = null, l = no; l !== null; ) {
      var r = l.next,
        c = xm(l, e);
      c === 0
        ? ((l.next = null),
          n === null ? (no = r) : (n.next = r),
          r === null && (Ml = n))
        : ((n = l), (t !== 0 || (c & 3) !== 0) && (ao = !0)),
        (l = r);
    }
    Oi(t);
  }
  function xm(t, e) {
    for (
      var n = t.suspendedLanes,
        l = t.pingedLanes,
        r = t.expirationTimes,
        c = t.pendingLanes & -62914561;
      0 < c;

    ) {
      var d = 31 - Gt(c),
        m = 1 << d,
        b = r[d];
      b === -1
        ? ((m & n) === 0 || (m & l) !== 0) && (r[d] = Qp(m, e))
        : b <= e && (t.expiredLanes |= m),
        (c &= ~m);
    }
    if (
      ((e = Yt),
      (n = Tt),
      (n = cr(
        t,
        t === e ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (l = t.callbackNode),
      n === 0 ||
        (t === e && (Bt === 2 || Bt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && fn(l),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || Gl(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((l !== null && fn(l), tu(n))) {
        case 2:
        case 8:
          n = dn;
          break;
        case 32:
          n = hn;
          break;
        case 268435456:
          n = lr;
          break;
        default:
          n = hn;
      }
      return (
        (l = Cm.bind(null, t)),
        (n = Xn(n, l)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      l !== null && l !== null && fn(l),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Cm(t, e) {
    if (ye !== 0 && ye !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var n = t.callbackNode;
    if (eo() && t.callbackNode !== n) return null;
    var l = Tt;
    return (
      (l = cr(
        t,
        t === Yt ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      l === 0
        ? null
        : (lm(t, l, e),
          xm(t, ce()),
          t.callbackNode != null && t.callbackNode === n
            ? Cm.bind(null, t)
            : null)
    );
  }
  function Tm(t, e) {
    if (eo()) return null;
    lm(t, e, !0);
  }
  function xy() {
    Dy(function () {
      (wt & 6) !== 0 ? Xn(Se, Sy) : Sm();
    });
  }
  function Lc() {
    return $a === 0 && ($a = mf()), $a;
  }
  function Em(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : mr("" + t);
  }
  function Am(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function Cy(t, e, n, l, r) {
    if (e === "submit" && n && n.stateNode === r) {
      var c = Em((r[Oe] || null).action),
        d = l.submitter;
      d &&
        ((e = (e = d[Oe] || null)
          ? Em(e.formAction)
          : d.getAttribute("formAction")),
        e !== null && ((c = e), (d = null)));
      var m = new vr("action", "action", null, l, r);
      t.push({
        event: m,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if ($a !== 0) {
                  var b = d ? Am(r, d) : new FormData(r);
                  rc(
                    n,
                    { pending: !0, data: b, method: r.method, action: c },
                    null,
                    b
                  );
                }
              } else
                typeof c == "function" &&
                  (m.preventDefault(),
                  (b = d ? Am(r, d) : new FormData(r)),
                  rc(
                    n,
                    { pending: !0, data: b, method: r.method, action: c },
                    c,
                    b
                  ));
            },
            currentTarget: r,
          },
        ],
      });
    }
  }
  for (var qc = 0; qc < Au.length; qc++) {
    var Yc = Au[qc],
      Ty = Yc.toLowerCase(),
      Ey = Yc[0].toUpperCase() + Yc.slice(1);
    an(Ty, "on" + Ey);
  }
  an(ld, "onAnimationEnd"),
    an(id, "onAnimationIteration"),
    an(rd, "onAnimationStart"),
    an("dblclick", "onDoubleClick"),
    an("focusin", "onFocus"),
    an("focusout", "onBlur"),
    an(qg, "onTransitionRun"),
    an(Yg, "onTransitionStart"),
    an(Gg, "onTransitionCancel"),
    an(od, "onTransitionEnd"),
    Wa("onMouseEnter", ["mouseout", "mouseover"]),
    Wa("onMouseLeave", ["mouseout", "mouseover"]),
    Wa("onPointerEnter", ["pointerout", "pointerover"]),
    Wa("onPointerLeave", ["pointerout", "pointerover"]),
    Ca(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Ca(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Ca("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ca(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ca(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ca(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Ri =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Ay = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Ri)
    );
  function Mm(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var l = t[n],
        r = l.event;
      l = l.listeners;
      t: {
        var c = void 0;
        if (e)
          for (var d = l.length - 1; 0 <= d; d--) {
            var m = l[d],
              b = m.instance,
              z = m.currentTarget;
            if (((m = m.listener), b !== c && r.isPropagationStopped()))
              break t;
            (c = m), (r.currentTarget = z);
            try {
              c(r);
            } catch ($) {
              Vr($);
            }
            (r.currentTarget = null), (c = b);
          }
        else
          for (d = 0; d < l.length; d++) {
            if (
              ((m = l[d]),
              (b = m.instance),
              (z = m.currentTarget),
              (m = m.listener),
              b !== c && r.isPropagationStopped())
            )
              break t;
            (c = m), (r.currentTarget = z);
            try {
              c(r);
            } catch ($) {
              Vr($);
            }
            (r.currentTarget = null), (c = b);
          }
      }
    }
  }
  function St(t, e) {
    var n = e[eu];
    n === void 0 && (n = e[eu] = new Set());
    var l = t + "__bubble";
    n.has(l) || (Om(e, t, 2, !1), n.add(l));
  }
  function Gc(t, e, n) {
    var l = 0;
    e && (l |= 4), Om(n, t, l, e);
  }
  var lo = "_reactListening" + Math.random().toString(36).slice(2);
  function Vc(t) {
    if (!t[lo]) {
      (t[lo] = !0),
        Sf.forEach(function (n) {
          n !== "selectionchange" && (Ay.has(n) || Gc(n, !1, t), Gc(n, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[lo] || ((e[lo] = !0), Gc("selectionchange", !1, e));
    }
  }
  function Om(t, e, n, l) {
    switch (Fm(e)) {
      case 2:
        var r = Py;
        break;
      case 8:
        r = Iy;
        break;
      default:
        r = ls;
    }
    (n = r.bind(null, e, n, t)),
      (r = void 0),
      !du ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (r = !0),
      l
        ? r !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: r })
          : t.addEventListener(e, n, !0)
        : r !== void 0
        ? t.addEventListener(e, n, { passive: r })
        : t.addEventListener(e, n, !1);
  }
  function Xc(t, e, n, l, r) {
    var c = l;
    if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
      t: for (;;) {
        if (l === null) return;
        var d = l.tag;
        if (d === 3 || d === 4) {
          var m = l.stateNode.containerInfo;
          if (m === r) break;
          if (d === 4)
            for (d = l.return; d !== null; ) {
              var b = d.tag;
              if ((b === 3 || b === 4) && d.stateNode.containerInfo === r)
                return;
              d = d.return;
            }
          for (; m !== null; ) {
            if (((d = Ka(m)), d === null)) return;
            if (((b = d.tag), b === 5 || b === 6 || b === 26 || b === 27)) {
              l = c = d;
              continue t;
            }
            m = m.parentNode;
          }
        }
        l = l.return;
      }
    Nf(function () {
      var z = c,
        $ = su(n),
        Y = [];
      t: {
        var D = ud.get(t);
        if (D !== void 0) {
          var w = vr,
            dt = t;
          switch (t) {
            case "keypress":
              if (gr(n) === 0) break t;
            case "keydown":
            case "keyup":
              w = bg;
              break;
            case "focusin":
              (dt = "focus"), (w = gu);
              break;
            case "focusout":
              (dt = "blur"), (w = gu);
              break;
            case "beforeblur":
            case "afterblur":
              w = gu;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              w = Hf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              w = og;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              w = Cg;
              break;
            case ld:
            case id:
            case rd:
              w = sg;
              break;
            case od:
              w = Eg;
              break;
            case "scroll":
            case "scrollend":
              w = ig;
              break;
            case "wheel":
              w = Mg;
              break;
            case "copy":
            case "cut":
            case "paste":
              w = dg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              w = kf;
              break;
            case "toggle":
            case "beforetoggle":
              w = Rg;
          }
          var st = (e & 4) !== 0,
            Ut = !st && (t === "scroll" || t === "scrollend"),
            A = st ? (D !== null ? D + "Capture" : null) : D;
          st = [];
          for (var C = z, R; C !== null; ) {
            var k = C;
            if (
              ((R = k.stateNode),
              (k = k.tag),
              (k !== 5 && k !== 26 && k !== 27) ||
                R === null ||
                A === null ||
                ((k = Kl(C, A)), k != null && st.push(zi(C, k, R))),
              Ut)
            )
              break;
            C = C.return;
          }
          0 < st.length &&
            ((D = new w(D, dt, null, n, $)),
            Y.push({ event: D, listeners: st }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((D = t === "mouseover" || t === "pointerover"),
            (w = t === "mouseout" || t === "pointerout"),
            D &&
              n !== cu &&
              (dt = n.relatedTarget || n.fromElement) &&
              (Ka(dt) || dt[Qa]))
          )
            break t;
          if (
            (w || D) &&
            ((D =
              $.window === $
                ? $
                : (D = $.ownerDocument)
                ? D.defaultView || D.parentWindow
                : window),
            w
              ? ((dt = n.relatedTarget || n.toElement),
                (w = z),
                (dt = dt ? Ka(dt) : null),
                dt !== null &&
                  ((Ut = f(dt)),
                  (st = dt.tag),
                  dt !== Ut || (st !== 5 && st !== 27 && st !== 6)) &&
                  (dt = null))
              : ((w = null), (dt = z)),
            w !== dt)
          ) {
            if (
              ((st = Hf),
              (k = "onMouseLeave"),
              (A = "onMouseEnter"),
              (C = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((st = kf),
                (k = "onPointerLeave"),
                (A = "onPointerEnter"),
                (C = "pointer")),
              (Ut = w == null ? D : Ql(w)),
              (R = dt == null ? D : Ql(dt)),
              (D = new st(k, C + "leave", w, n, $)),
              (D.target = Ut),
              (D.relatedTarget = R),
              (k = null),
              Ka($) === z &&
                ((st = new st(A, C + "enter", dt, n, $)),
                (st.target = R),
                (st.relatedTarget = Ut),
                (k = st)),
              (Ut = k),
              w && dt)
            )
              e: {
                for (st = w, A = dt, C = 0, R = st; R; R = Ol(R)) C++;
                for (R = 0, k = A; k; k = Ol(k)) R++;
                for (; 0 < C - R; ) (st = Ol(st)), C--;
                for (; 0 < R - C; ) (A = Ol(A)), R--;
                for (; C--; ) {
                  if (st === A || (A !== null && st === A.alternate)) break e;
                  (st = Ol(st)), (A = Ol(A));
                }
                st = null;
              }
            else st = null;
            w !== null && Rm(Y, D, w, st, !1),
              dt !== null && Ut !== null && Rm(Y, Ut, dt, st, !0);
          }
        }
        t: {
          if (
            ((D = z ? Ql(z) : window),
            (w = D.nodeName && D.nodeName.toLowerCase()),
            w === "select" || (w === "input" && D.type === "file"))
          )
            var at = Kf;
          else if (Xf(D))
            if (Zf) at = $g;
            else {
              at = Ug;
              var vt = jg;
            }
          else
            (w = D.nodeName),
              !w ||
              w.toLowerCase() !== "input" ||
              (D.type !== "checkbox" && D.type !== "radio")
                ? z && uu(z.elementType) && (at = Kf)
                : (at = Hg);
          if (at && (at = at(t, z))) {
            Qf(Y, at, n, $);
            break t;
          }
          vt && vt(t, D, z),
            t === "focusout" &&
              z &&
              D.type === "number" &&
              z.memoizedProps.value != null &&
              ou(D, "number", D.value);
        }
        switch (((vt = z ? Ql(z) : window), t)) {
          case "focusin":
            (Xf(vt) || vt.contentEditable === "true") &&
              ((al = vt), (Cu = z), (ei = null));
            break;
          case "focusout":
            ei = Cu = al = null;
            break;
          case "mousedown":
            Tu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Tu = !1), nd(Y, n, $);
            break;
          case "selectionchange":
            if (Lg) break;
          case "keydown":
          case "keyup":
            nd(Y, n, $);
        }
        var ot;
        if (vu)
          t: {
            switch (t) {
              case "compositionstart":
                var ft = "onCompositionStart";
                break t;
              case "compositionend":
                ft = "onCompositionEnd";
                break t;
              case "compositionupdate":
                ft = "onCompositionUpdate";
                break t;
            }
            ft = void 0;
          }
        else
          nl
            ? Gf(t, n) && (ft = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (ft = "onCompositionStart");
        ft &&
          (Lf &&
            n.locale !== "ko" &&
            (nl || ft !== "onCompositionStart"
              ? ft === "onCompositionEnd" && nl && (ot = jf())
              : ((Kn = $),
                (hu = "value" in Kn ? Kn.value : Kn.textContent),
                (nl = !0))),
          (vt = io(z, ft)),
          0 < vt.length &&
            ((ft = new $f(ft, t, null, n, $)),
            Y.push({ event: ft, listeners: vt }),
            ot
              ? (ft.data = ot)
              : ((ot = Vf(n)), ot !== null && (ft.data = ot)))),
          (ot = _g ? Dg(t, n) : wg(t, n)) &&
            ((ft = io(z, "onBeforeInput")),
            0 < ft.length &&
              ((vt = new $f("onBeforeInput", "beforeinput", null, n, $)),
              Y.push({ event: vt, listeners: ft }),
              (vt.data = ot))),
          Cy(Y, t, z, n, $);
      }
      Mm(Y, e);
    });
  }
  function zi(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function io(t, e) {
    for (var n = e + "Capture", l = []; t !== null; ) {
      var r = t,
        c = r.stateNode;
      if (
        ((r = r.tag),
        (r !== 5 && r !== 26 && r !== 27) ||
          c === null ||
          ((r = Kl(t, n)),
          r != null && l.unshift(zi(t, r, c)),
          (r = Kl(t, e)),
          r != null && l.push(zi(t, r, c))),
        t.tag === 3)
      )
        return l;
      t = t.return;
    }
    return [];
  }
  function Ol(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Rm(t, e, n, l, r) {
    for (var c = e._reactName, d = []; n !== null && n !== l; ) {
      var m = n,
        b = m.alternate,
        z = m.stateNode;
      if (((m = m.tag), b !== null && b === l)) break;
      (m !== 5 && m !== 26 && m !== 27) ||
        z === null ||
        ((b = z),
        r
          ? ((z = Kl(n, c)), z != null && d.unshift(zi(n, z, b)))
          : r || ((z = Kl(n, c)), z != null && d.push(zi(n, z, b)))),
        (n = n.return);
    }
    d.length !== 0 && t.push({ event: e, listeners: d });
  }
  var My = /\r\n?/g,
    Oy = /\u0000|\uFFFD/g;
  function zm(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        My,
        `
`
      )
      .replace(Oy, "");
  }
  function _m(t, e) {
    return (e = zm(e)), zm(t) === e;
  }
  function ro() {}
  function jt(t, e, n, l, r, c) {
    switch (n) {
      case "children":
        typeof l == "string"
          ? e === "body" || (e === "textarea" && l === "") || Ia(t, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            e !== "body" &&
            Ia(t, "" + l);
        break;
      case "className":
        fr(t, "class", l);
        break;
      case "tabIndex":
        fr(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        fr(t, n, l);
        break;
      case "style":
        wf(t, l, c);
        break;
      case "data":
        if (e !== "object") {
          fr(t, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        (l = mr("" + l)), t.setAttribute(n, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof c == "function" &&
            (n === "formAction"
              ? (e !== "input" && jt(t, e, "name", r.name, r, null),
                jt(t, e, "formEncType", r.formEncType, r, null),
                jt(t, e, "formMethod", r.formMethod, r, null),
                jt(t, e, "formTarget", r.formTarget, r, null))
              : (jt(t, e, "encType", r.encType, r, null),
                jt(t, e, "method", r.method, r, null),
                jt(t, e, "target", r.target, r, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(n);
          break;
        }
        (l = mr("" + l)), t.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (t.onclick = ro);
        break;
      case "onScroll":
        l != null && St("scroll", t);
        break;
      case "onScrollEnd":
        l != null && St("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(o(61));
          if (((n = l.__html), n != null)) {
            if (r.children != null) throw Error(o(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        t.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (n = mr("" + l)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? t.setAttribute(n, "" + l)
          : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0
          ? t.setAttribute(n, "")
          : l !== !1 &&
            l != null &&
            typeof l != "function" &&
            typeof l != "symbol"
          ? t.setAttribute(n, l)
          : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? t.setAttribute(n, l)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? t.removeAttribute(n)
          : t.setAttribute(n, l);
        break;
      case "popover":
        St("beforetoggle", t), St("toggle", t), sr(t, "popover", l);
        break;
      case "xlinkActuate":
        Mn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        Mn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        Mn(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        Mn(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        Mn(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        Mn(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        Mn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        Mn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        Mn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        sr(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = ag.get(n) || n), sr(t, n, l));
    }
  }
  function Qc(t, e, n, l, r, c) {
    switch (n) {
      case "style":
        wf(t, l, c);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(o(61));
          if (((n = l.__html), n != null)) {
            if (r.children != null) throw Error(o(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? Ia(t, l)
          : (typeof l == "number" || typeof l == "bigint") && Ia(t, "" + l);
        break;
      case "onScroll":
        l != null && St("scroll", t);
        break;
      case "onScrollEnd":
        l != null && St("scrollend", t);
        break;
      case "onClick":
        l != null && (t.onclick = ro);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!xf.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((r = n.endsWith("Capture")),
              (e = n.slice(2, r ? n.length - 7 : void 0)),
              (c = t[Oe] || null),
              (c = c != null ? c[n] : null),
              typeof c == "function" && t.removeEventListener(e, c, r),
              typeof l == "function")
            ) {
              typeof c != "function" &&
                c !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, l, r);
              break t;
            }
            n in t
              ? (t[n] = l)
              : l === !0
              ? t.setAttribute(n, "")
              : sr(t, n, l);
          }
    }
  }
  function ve(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        St("error", t), St("load", t);
        var l = !1,
          r = !1,
          c;
        for (c in n)
          if (n.hasOwnProperty(c)) {
            var d = n[c];
            if (d != null)
              switch (c) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  r = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, e));
                default:
                  jt(t, e, c, d, n, null);
              }
          }
        r && jt(t, e, "srcSet", n.srcSet, n, null),
          l && jt(t, e, "src", n.src, n, null);
        return;
      case "input":
        St("invalid", t);
        var m = (c = d = r = null),
          b = null,
          z = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var $ = n[l];
            if ($ != null)
              switch (l) {
                case "name":
                  r = $;
                  break;
                case "type":
                  d = $;
                  break;
                case "checked":
                  b = $;
                  break;
                case "defaultChecked":
                  z = $;
                  break;
                case "value":
                  c = $;
                  break;
                case "defaultValue":
                  m = $;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if ($ != null) throw Error(o(137, e));
                  break;
                default:
                  jt(t, e, l, $, n, null);
              }
          }
        Rf(t, c, m, b, z, d, r, !1), dr(t);
        return;
      case "select":
        St("invalid", t), (l = d = c = null);
        for (r in n)
          if (n.hasOwnProperty(r) && ((m = n[r]), m != null))
            switch (r) {
              case "value":
                c = m;
                break;
              case "defaultValue":
                d = m;
                break;
              case "multiple":
                l = m;
              default:
                jt(t, e, r, m, n, null);
            }
        (e = c),
          (n = d),
          (t.multiple = !!l),
          e != null ? Pa(t, !!l, e, !1) : n != null && Pa(t, !!l, n, !0);
        return;
      case "textarea":
        St("invalid", t), (c = r = l = null);
        for (d in n)
          if (n.hasOwnProperty(d) && ((m = n[d]), m != null))
            switch (d) {
              case "value":
                l = m;
                break;
              case "defaultValue":
                r = m;
                break;
              case "children":
                c = m;
                break;
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(o(91));
                break;
              default:
                jt(t, e, d, m, n, null);
            }
        _f(t, l, r, c), dr(t);
        return;
      case "option":
        for (b in n)
          if (n.hasOwnProperty(b) && ((l = n[b]), l != null))
            switch (b) {
              case "selected":
                t.selected =
                  l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                jt(t, e, b, l, n, null);
            }
        return;
      case "dialog":
        St("beforetoggle", t), St("toggle", t), St("cancel", t), St("close", t);
        break;
      case "iframe":
      case "object":
        St("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Ri.length; l++) St(Ri[l], t);
        break;
      case "image":
        St("error", t), St("load", t);
        break;
      case "details":
        St("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        St("error", t), St("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (z in n)
          if (n.hasOwnProperty(z) && ((l = n[z]), l != null))
            switch (z) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, e));
              default:
                jt(t, e, z, l, n, null);
            }
        return;
      default:
        if (uu(e)) {
          for ($ in n)
            n.hasOwnProperty($) &&
              ((l = n[$]), l !== void 0 && Qc(t, e, $, l, n, void 0));
          return;
        }
    }
    for (m in n)
      n.hasOwnProperty(m) && ((l = n[m]), l != null && jt(t, e, m, l, n, null));
  }
  function Ry(t, e, n, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var r = null,
          c = null,
          d = null,
          m = null,
          b = null,
          z = null,
          $ = null;
        for (w in n) {
          var Y = n[w];
          if (n.hasOwnProperty(w) && Y != null)
            switch (w) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                b = Y;
              default:
                l.hasOwnProperty(w) || jt(t, e, w, null, l, Y);
            }
        }
        for (var D in l) {
          var w = l[D];
          if (((Y = n[D]), l.hasOwnProperty(D) && (w != null || Y != null)))
            switch (D) {
              case "type":
                c = w;
                break;
              case "name":
                r = w;
                break;
              case "checked":
                z = w;
                break;
              case "defaultChecked":
                $ = w;
                break;
              case "value":
                d = w;
                break;
              case "defaultValue":
                m = w;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (w != null) throw Error(o(137, e));
                break;
              default:
                w !== Y && jt(t, e, D, w, l, Y);
            }
        }
        ru(t, d, m, b, z, $, c, r);
        return;
      case "select":
        w = d = m = D = null;
        for (c in n)
          if (((b = n[c]), n.hasOwnProperty(c) && b != null))
            switch (c) {
              case "value":
                break;
              case "multiple":
                w = b;
              default:
                l.hasOwnProperty(c) || jt(t, e, c, null, l, b);
            }
        for (r in l)
          if (
            ((c = l[r]),
            (b = n[r]),
            l.hasOwnProperty(r) && (c != null || b != null))
          )
            switch (r) {
              case "value":
                D = c;
                break;
              case "defaultValue":
                m = c;
                break;
              case "multiple":
                d = c;
              default:
                c !== b && jt(t, e, r, c, l, b);
            }
        (e = m),
          (n = d),
          (l = w),
          D != null
            ? Pa(t, !!n, D, !1)
            : !!l != !!n &&
              (e != null ? Pa(t, !!n, e, !0) : Pa(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        w = D = null;
        for (m in n)
          if (
            ((r = n[m]),
            n.hasOwnProperty(m) && r != null && !l.hasOwnProperty(m))
          )
            switch (m) {
              case "value":
                break;
              case "children":
                break;
              default:
                jt(t, e, m, null, l, r);
            }
        for (d in l)
          if (
            ((r = l[d]),
            (c = n[d]),
            l.hasOwnProperty(d) && (r != null || c != null))
          )
            switch (d) {
              case "value":
                D = r;
                break;
              case "defaultValue":
                w = r;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(o(91));
                break;
              default:
                r !== c && jt(t, e, d, r, l, c);
            }
        zf(t, D, w);
        return;
      case "option":
        for (var dt in n)
          if (
            ((D = n[dt]),
            n.hasOwnProperty(dt) && D != null && !l.hasOwnProperty(dt))
          )
            switch (dt) {
              case "selected":
                t.selected = !1;
                break;
              default:
                jt(t, e, dt, null, l, D);
            }
        for (b in l)
          if (
            ((D = l[b]),
            (w = n[b]),
            l.hasOwnProperty(b) && D !== w && (D != null || w != null))
          )
            switch (b) {
              case "selected":
                t.selected =
                  D && typeof D != "function" && typeof D != "symbol";
                break;
              default:
                jt(t, e, b, D, l, w);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var st in n)
          (D = n[st]),
            n.hasOwnProperty(st) &&
              D != null &&
              !l.hasOwnProperty(st) &&
              jt(t, e, st, null, l, D);
        for (z in l)
          if (
            ((D = l[z]),
            (w = n[z]),
            l.hasOwnProperty(z) && D !== w && (D != null || w != null))
          )
            switch (z) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null) throw Error(o(137, e));
                break;
              default:
                jt(t, e, z, D, l, w);
            }
        return;
      default:
        if (uu(e)) {
          for (var Ut in n)
            (D = n[Ut]),
              n.hasOwnProperty(Ut) &&
                D !== void 0 &&
                !l.hasOwnProperty(Ut) &&
                Qc(t, e, Ut, void 0, l, D);
          for ($ in l)
            (D = l[$]),
              (w = n[$]),
              !l.hasOwnProperty($) ||
                D === w ||
                (D === void 0 && w === void 0) ||
                Qc(t, e, $, D, l, w);
          return;
        }
    }
    for (var A in n)
      (D = n[A]),
        n.hasOwnProperty(A) &&
          D != null &&
          !l.hasOwnProperty(A) &&
          jt(t, e, A, null, l, D);
    for (Y in l)
      (D = l[Y]),
        (w = n[Y]),
        !l.hasOwnProperty(Y) ||
          D === w ||
          (D == null && w == null) ||
          jt(t, e, Y, D, l, w);
  }
  var Kc = null,
    Zc = null;
  function oo(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Dm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function wm(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Jc(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Wc = null;
  function zy() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Wc
        ? !1
        : ((Wc = t), !0)
      : ((Wc = null), !1);
  }
  var Bm = typeof setTimeout == "function" ? setTimeout : void 0,
    _y = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Nm = typeof Promise == "function" ? Promise : void 0,
    Dy =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Nm < "u"
        ? function (t) {
            return Nm.resolve(null).then(t).catch(wy);
          }
        : Bm;
  function wy(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function ca(t) {
    return t === "head";
  }
  function jm(t, e) {
    var n = e,
      l = 0,
      r = 0;
    do {
      var c = n.nextSibling;
      if ((t.removeChild(n), c && c.nodeType === 8))
        if (((n = c.data), n === "/$")) {
          if (0 < l && 8 > l) {
            n = l;
            var d = t.ownerDocument;
            if ((n & 1 && _i(d.documentElement), n & 2 && _i(d.body), n & 4))
              for (n = d.head, _i(n), d = n.firstChild; d; ) {
                var m = d.nextSibling,
                  b = d.nodeName;
                d[Xl] ||
                  b === "SCRIPT" ||
                  b === "STYLE" ||
                  (b === "LINK" && d.rel.toLowerCase() === "stylesheet") ||
                  n.removeChild(d),
                  (d = m);
              }
          }
          if (r === 0) {
            t.removeChild(c), $i(e);
            return;
          }
          r--;
        } else
          n === "$" || n === "$?" || n === "$!"
            ? r++
            : (l = n.charCodeAt(0) - 48);
      else l = 0;
      n = c;
    } while (n);
    $i(e);
  }
  function Fc(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Fc(n), nu(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function By(t, e, n, l) {
    for (; t.nodeType === 1; ) {
      var r = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (l) {
        if (!t[Xl])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((c = t.getAttribute("rel")),
                c === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                c !== r.rel ||
                t.getAttribute("href") !==
                  (r.href == null || r.href === "" ? null : r.href) ||
                t.getAttribute("crossorigin") !==
                  (r.crossOrigin == null ? null : r.crossOrigin) ||
                t.getAttribute("title") !== (r.title == null ? null : r.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((c = t.getAttribute("src")),
                (c !== (r.src == null ? null : r.src) ||
                  t.getAttribute("type") !== (r.type == null ? null : r.type) ||
                  t.getAttribute("crossorigin") !==
                    (r.crossOrigin == null ? null : r.crossOrigin)) &&
                  c &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var c = r.name == null ? null : "" + r.name;
        if (r.type === "hidden" && t.getAttribute("name") === c) return t;
      } else return t;
      if (((t = rn(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Ny(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = rn(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Pc(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function jy(t, e) {
    var n = t.ownerDocument;
    if (t.data !== "$?" || n.readyState === "complete") e();
    else {
      var l = function () {
        e(), n.removeEventListener("DOMContentLoaded", l);
      };
      n.addEventListener("DOMContentLoaded", l), (t._reactRetry = l);
    }
  }
  function rn(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var Ic = null;
  function Um(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (e === 0) return t;
          e--;
        } else n === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Hm(t, e, n) {
    switch (((e = oo(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(o(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(o(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(o(454));
        return t;
      default:
        throw Error(o(451));
    }
  }
  function _i(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    nu(t);
  }
  var Fe = new Map(),
    $m = new Set();
  function uo(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var Ln = K.d;
  K.d = { f: Uy, r: Hy, D: $y, C: ky, L: Ly, m: qy, X: Gy, S: Yy, M: Vy };
  function Uy() {
    var t = Ln.f(),
      e = Ir();
    return t || e;
  }
  function Hy(t) {
    var e = Za(t);
    e !== null && e.tag === 5 && e.type === "form" ? lh(e) : Ln.r(t);
  }
  var Rl = typeof document > "u" ? null : document;
  function km(t, e, n) {
    var l = Rl;
    if (l && typeof e == "string" && e) {
      var r = Ve(e);
      (r = 'link[rel="' + t + '"][href="' + r + '"]'),
        typeof n == "string" && (r += '[crossorigin="' + n + '"]'),
        $m.has(r) ||
          ($m.add(r),
          (t = { rel: t, crossOrigin: n, href: e }),
          l.querySelector(r) === null &&
            ((e = l.createElement("link")),
            ve(e, "link", t),
            fe(e),
            l.head.appendChild(e)));
    }
  }
  function $y(t) {
    Ln.D(t), km("dns-prefetch", t, null);
  }
  function ky(t, e) {
    Ln.C(t, e), km("preconnect", t, e);
  }
  function Ly(t, e, n) {
    Ln.L(t, e, n);
    var l = Rl;
    if (l && t && e) {
      var r = 'link[rel="preload"][as="' + Ve(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((r += '[imagesrcset="' + Ve(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (r += '[imagesizes="' + Ve(n.imageSizes) + '"]'))
        : (r += '[href="' + Ve(t) + '"]');
      var c = r;
      switch (e) {
        case "style":
          c = zl(t);
          break;
        case "script":
          c = _l(t);
      }
      Fe.has(c) ||
        ((t = S(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n
        )),
        Fe.set(c, t),
        l.querySelector(r) !== null ||
          (e === "style" && l.querySelector(Di(c))) ||
          (e === "script" && l.querySelector(wi(c))) ||
          ((e = l.createElement("link")),
          ve(e, "link", t),
          fe(e),
          l.head.appendChild(e)));
    }
  }
  function qy(t, e) {
    Ln.m(t, e);
    var n = Rl;
    if (n && t) {
      var l = e && typeof e.as == "string" ? e.as : "script",
        r =
          'link[rel="modulepreload"][as="' + Ve(l) + '"][href="' + Ve(t) + '"]',
        c = r;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = _l(t);
      }
      if (
        !Fe.has(c) &&
        ((t = S({ rel: "modulepreload", href: t }, e)),
        Fe.set(c, t),
        n.querySelector(r) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(wi(c))) return;
        }
        (l = n.createElement("link")),
          ve(l, "link", t),
          fe(l),
          n.head.appendChild(l);
      }
    }
  }
  function Yy(t, e, n) {
    Ln.S(t, e, n);
    var l = Rl;
    if (l && t) {
      var r = Ja(l).hoistableStyles,
        c = zl(t);
      e = e || "default";
      var d = r.get(c);
      if (!d) {
        var m = { loading: 0, preload: null };
        if ((d = l.querySelector(Di(c)))) m.loading = 5;
        else {
          (t = S({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = Fe.get(c)) && ts(t, n);
          var b = (d = l.createElement("link"));
          fe(b),
            ve(b, "link", t),
            (b._p = new Promise(function (z, $) {
              (b.onload = z), (b.onerror = $);
            })),
            b.addEventListener("load", function () {
              m.loading |= 1;
            }),
            b.addEventListener("error", function () {
              m.loading |= 2;
            }),
            (m.loading |= 4),
            co(d, e, l);
        }
        (d = { type: "stylesheet", instance: d, count: 1, state: m }),
          r.set(c, d);
      }
    }
  }
  function Gy(t, e) {
    Ln.X(t, e);
    var n = Rl;
    if (n && t) {
      var l = Ja(n).hoistableScripts,
        r = _l(t),
        c = l.get(r);
      c ||
        ((c = n.querySelector(wi(r))),
        c ||
          ((t = S({ src: t, async: !0 }, e)),
          (e = Fe.get(r)) && es(t, e),
          (c = n.createElement("script")),
          fe(c),
          ve(c, "link", t),
          n.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        l.set(r, c));
    }
  }
  function Vy(t, e) {
    Ln.M(t, e);
    var n = Rl;
    if (n && t) {
      var l = Ja(n).hoistableScripts,
        r = _l(t),
        c = l.get(r);
      c ||
        ((c = n.querySelector(wi(r))),
        c ||
          ((t = S({ src: t, async: !0, type: "module" }, e)),
          (e = Fe.get(r)) && es(t, e),
          (c = n.createElement("script")),
          fe(c),
          ve(c, "link", t),
          n.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        l.set(r, c));
    }
  }
  function Lm(t, e, n, l) {
    var r = (r = nt.current) ? uo(r) : null;
    if (!r) throw Error(o(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = zl(n.href)),
            (n = Ja(r).hoistableStyles),
            (l = n.get(e)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              n.set(e, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = zl(n.href);
          var c = Ja(r).hoistableStyles,
            d = c.get(t);
          if (
            (d ||
              ((r = r.ownerDocument || r),
              (d = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              c.set(t, d),
              (c = r.querySelector(Di(t))) &&
                !c._p &&
                ((d.instance = c), (d.state.loading = 5)),
              Fe.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Fe.set(t, n),
                c || Xy(r, t, n, d.state))),
            e && l === null)
          )
            throw Error(o(528, ""));
          return d;
        }
        if (e && l !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = _l(n)),
              (n = Ja(r).hoistableScripts),
              (l = n.get(e)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, t));
    }
  }
  function zl(t) {
    return 'href="' + Ve(t) + '"';
  }
  function Di(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function qm(t) {
    return S({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Xy(t, e, n, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (l.loading = 1)
      : ((e = t.createElement("link")),
        (l.preload = e),
        e.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        ve(e, "link", n),
        fe(e),
        t.head.appendChild(e));
  }
  function _l(t) {
    return '[src="' + Ve(t) + '"]';
  }
  function wi(t) {
    return "script[async]" + t;
  }
  function Ym(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var l = t.querySelector('style[data-href~="' + Ve(n.href) + '"]');
          if (l) return (e.instance = l), fe(l), l;
          var r = S({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (t.ownerDocument || t).createElement("style")),
            fe(l),
            ve(l, "style", r),
            co(l, n.precedence, t),
            (e.instance = l)
          );
        case "stylesheet":
          r = zl(n.href);
          var c = t.querySelector(Di(r));
          if (c) return (e.state.loading |= 4), (e.instance = c), fe(c), c;
          (l = qm(n)),
            (r = Fe.get(r)) && ts(l, r),
            (c = (t.ownerDocument || t).createElement("link")),
            fe(c);
          var d = c;
          return (
            (d._p = new Promise(function (m, b) {
              (d.onload = m), (d.onerror = b);
            })),
            ve(c, "link", l),
            (e.state.loading |= 4),
            co(c, n.precedence, t),
            (e.instance = c)
          );
        case "script":
          return (
            (c = _l(n.src)),
            (r = t.querySelector(wi(c)))
              ? ((e.instance = r), fe(r), r)
              : ((l = n),
                (r = Fe.get(c)) && ((l = S({}, n)), es(l, r)),
                (t = t.ownerDocument || t),
                (r = t.createElement("script")),
                fe(r),
                ve(r, "link", l),
                t.head.appendChild(r),
                (e.instance = r))
          );
        case "void":
          return null;
        default:
          throw Error(o(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((l = e.instance), (e.state.loading |= 4), co(l, n.precedence, t));
    return e.instance;
  }
  function co(t, e, n) {
    for (
      var l = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        r = l.length ? l[l.length - 1] : null,
        c = r,
        d = 0;
      d < l.length;
      d++
    ) {
      var m = l[d];
      if (m.dataset.precedence === e) c = m;
      else if (c !== r) break;
    }
    c
      ? c.parentNode.insertBefore(t, c.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function ts(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function es(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var so = null;
  function Gm(t, e, n) {
    if (so === null) {
      var l = new Map(),
        r = (so = new Map());
      r.set(n, l);
    } else (r = so), (l = r.get(n)), l || ((l = new Map()), r.set(n, l));
    if (l.has(t)) return l;
    for (
      l.set(t, null), n = n.getElementsByTagName(t), r = 0;
      r < n.length;
      r++
    ) {
      var c = n[r];
      if (
        !(
          c[Xl] ||
          c[xe] ||
          (t === "link" && c.getAttribute("rel") === "stylesheet")
        ) &&
        c.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var d = c.getAttribute(e) || "";
        d = t + d;
        var m = l.get(d);
        m ? m.push(c) : l.set(d, [c]);
      }
    }
    return l;
  }
  function Vm(t, e, n) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function Qy(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Xm(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Bi = null;
  function Ky() {}
  function Zy(t, e, n) {
    if (Bi === null) throw Error(o(475));
    var l = Bi;
    if (
      e.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var r = zl(n.href),
          c = t.querySelector(Di(r));
        if (c) {
          (t = c._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (l.count++, (l = fo.bind(l)), t.then(l, l)),
            (e.state.loading |= 4),
            (e.instance = c),
            fe(c);
          return;
        }
        (c = t.ownerDocument || t),
          (n = qm(n)),
          (r = Fe.get(r)) && ts(n, r),
          (c = c.createElement("link")),
          fe(c);
        var d = c;
        (d._p = new Promise(function (m, b) {
          (d.onload = m), (d.onerror = b);
        })),
          ve(c, "link", n),
          (e.instance = c);
      }
      l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (l.count++,
          (e = fo.bind(l)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  function Jy() {
    if (Bi === null) throw Error(o(475));
    var t = Bi;
    return (
      t.stylesheets && t.count === 0 && ns(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var n = setTimeout(function () {
              if ((t.stylesheets && ns(t, t.stylesheets), t.unsuspend)) {
                var l = t.unsuspend;
                (t.unsuspend = null), l();
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                (t.unsuspend = null), clearTimeout(n);
              }
            );
          }
        : null
    );
  }
  function fo() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) ns(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var ho = null;
  function ns(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (ho = new Map()),
        e.forEach(Wy, t),
        (ho = null),
        fo.call(t));
  }
  function Wy(t, e) {
    if (!(e.state.loading & 4)) {
      var n = ho.get(t);
      if (n) var l = n.get(null);
      else {
        (n = new Map()), ho.set(t, n);
        for (
          var r = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            c = 0;
          c < r.length;
          c++
        ) {
          var d = r[c];
          (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") &&
            (n.set(d.dataset.precedence, d), (l = d));
        }
        l && n.set(null, l);
      }
      (r = e.instance),
        (d = r.getAttribute("data-precedence")),
        (c = n.get(d) || l),
        c === l && n.set(null, r),
        n.set(d, r),
        this.count++,
        (l = fo.bind(this)),
        r.addEventListener("load", l),
        r.addEventListener("error", l),
        c
          ? c.parentNode.insertBefore(r, c.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(r, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var Ni = {
    $$typeof: V,
    Provider: null,
    Consumer: null,
    _currentValue: lt,
    _currentValue2: lt,
    _threadCount: 0,
  };
  function Fy(t, e, n, l, r, c, d, m) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Po(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Po(0)),
      (this.hiddenUpdates = Po(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = r),
      (this.onCaughtError = c),
      (this.onRecoverableError = d),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = m),
      (this.incompleteTransitions = new Map());
  }
  function Qm(t, e, n, l, r, c, d, m, b, z, $, Y) {
    return (
      (t = new Fy(t, e, n, d, m, b, z, Y)),
      (e = 1),
      c === !0 && (e |= 24),
      (c = je(3, null, null, e)),
      (t.current = c),
      (c.stateNode = t),
      (e = Hu()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (c.memoizedState = { element: l, isDehydrated: n, cache: e }),
      qu(c),
      t
    );
  }
  function Km(t) {
    return t ? ((t = ol), t) : ol;
  }
  function Zm(t, e, n, l, r, c) {
    (r = Km(r)),
      l.context === null ? (l.context = r) : (l.pendingContext = r),
      (l = Wn(e)),
      (l.payload = { element: n }),
      (c = c === void 0 ? null : c),
      c !== null && (l.callback = c),
      (n = Fn(t, l, e)),
      n !== null && (Le(n, t, e), si(n, t, e));
  }
  function Jm(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function as(t, e) {
    Jm(t, e), (t = t.alternate) && Jm(t, e);
  }
  function Wm(t) {
    if (t.tag === 13) {
      var e = rl(t, 67108864);
      e !== null && Le(e, t, 67108864), as(t, 67108864);
    }
  }
  var mo = !0;
  function Py(t, e, n, l) {
    var r = B.T;
    B.T = null;
    var c = K.p;
    try {
      (K.p = 2), ls(t, e, n, l);
    } finally {
      (K.p = c), (B.T = r);
    }
  }
  function Iy(t, e, n, l) {
    var r = B.T;
    B.T = null;
    var c = K.p;
    try {
      (K.p = 8), ls(t, e, n, l);
    } finally {
      (K.p = c), (B.T = r);
    }
  }
  function ls(t, e, n, l) {
    if (mo) {
      var r = is(l);
      if (r === null) Xc(t, e, l, po, n), Pm(t, l);
      else if (e1(r, t, e, n, l)) l.stopPropagation();
      else if ((Pm(t, l), e & 4 && -1 < t1.indexOf(t))) {
        for (; r !== null; ) {
          var c = Za(r);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (((c = c.stateNode), c.current.memoizedState.isDehydrated)) {
                  var d = xa(c.pendingLanes);
                  if (d !== 0) {
                    var m = c;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; d; ) {
                      var b = 1 << (31 - Gt(d));
                      (m.entanglements[1] |= b), (d &= ~b);
                    }
                    vn(c), (wt & 6) === 0 && ((Fr = ce() + 500), Oi(0));
                  }
                }
                break;
              case 13:
                (m = rl(c, 2)), m !== null && Le(m, c, 2), Ir(), as(c, 2);
            }
          if (((c = is(l)), c === null && Xc(t, e, l, po, n), c === r)) break;
          r = c;
        }
        r !== null && l.stopPropagation();
      } else Xc(t, e, l, null, n);
    }
  }
  function is(t) {
    return (t = su(t)), rs(t);
  }
  var po = null;
  function rs(t) {
    if (((po = null), (t = Ka(t)), t !== null)) {
      var e = f(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = h(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (po = t), null;
  }
  function Fm(t) {
    switch (t) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (nn()) {
          case Se:
            return 2;
          case dn:
            return 8;
          case hn:
          case ht:
            return 32;
          case lr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var os = !1,
    sa = null,
    fa = null,
    da = null,
    ji = new Map(),
    Ui = new Map(),
    ha = [],
    t1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Pm(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        sa = null;
        break;
      case "dragenter":
      case "dragleave":
        fa = null;
        break;
      case "mouseover":
      case "mouseout":
        da = null;
        break;
      case "pointerover":
      case "pointerout":
        ji.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ui.delete(e.pointerId);
    }
  }
  function Hi(t, e, n, l, r, c) {
    return t === null || t.nativeEvent !== c
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: c,
          targetContainers: [r],
        }),
        e !== null && ((e = Za(e)), e !== null && Wm(e)),
        t)
      : ((t.eventSystemFlags |= l),
        (e = t.targetContainers),
        r !== null && e.indexOf(r) === -1 && e.push(r),
        t);
  }
  function e1(t, e, n, l, r) {
    switch (e) {
      case "focusin":
        return (sa = Hi(sa, t, e, n, l, r)), !0;
      case "dragenter":
        return (fa = Hi(fa, t, e, n, l, r)), !0;
      case "mouseover":
        return (da = Hi(da, t, e, n, l, r)), !0;
      case "pointerover":
        var c = r.pointerId;
        return ji.set(c, Hi(ji.get(c) || null, t, e, n, l, r)), !0;
      case "gotpointercapture":
        return (
          (c = r.pointerId), Ui.set(c, Hi(Ui.get(c) || null, t, e, n, l, r)), !0
        );
    }
    return !1;
  }
  function Im(t) {
    var e = Ka(t.target);
    if (e !== null) {
      var n = f(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = h(n)), e !== null)) {
            (t.blockedOn = e),
              Zp(t.priority, function () {
                if (n.tag === 13) {
                  var l = ke();
                  l = Io(l);
                  var r = rl(n, l);
                  r !== null && Le(r, n, l), as(n, l);
                }
              });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function go(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = is(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var l = new n.constructor(n.type, n);
        (cu = l), n.target.dispatchEvent(l), (cu = null);
      } else return (e = Za(n)), e !== null && Wm(e), (t.blockedOn = n), !1;
      e.shift();
    }
    return !0;
  }
  function t0(t, e, n) {
    go(t) && n.delete(e);
  }
  function n1() {
    (os = !1),
      sa !== null && go(sa) && (sa = null),
      fa !== null && go(fa) && (fa = null),
      da !== null && go(da) && (da = null),
      ji.forEach(t0),
      Ui.forEach(t0);
  }
  function yo(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      os ||
        ((os = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, n1)));
  }
  var vo = null;
  function e0(t) {
    vo !== t &&
      ((vo = t),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        vo === t && (vo = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            l = t[e + 1],
            r = t[e + 2];
          if (typeof l != "function") {
            if (rs(l || n) === null) continue;
            break;
          }
          var c = Za(n);
          c !== null &&
            (t.splice(e, 3),
            (e -= 3),
            rc(c, { pending: !0, data: r, method: n.method, action: l }, l, r));
        }
      }));
  }
  function $i(t) {
    function e(b) {
      return yo(b, t);
    }
    sa !== null && yo(sa, t),
      fa !== null && yo(fa, t),
      da !== null && yo(da, t),
      ji.forEach(e),
      Ui.forEach(e);
    for (var n = 0; n < ha.length; n++) {
      var l = ha[n];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < ha.length && ((n = ha[0]), n.blockedOn === null); )
      Im(n), n.blockedOn === null && ha.shift();
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var r = n[l],
          c = n[l + 1],
          d = r[Oe] || null;
        if (typeof c == "function") d || e0(n);
        else if (d) {
          var m = null;
          if (c && c.hasAttribute("formAction")) {
            if (((r = c), (d = c[Oe] || null))) m = d.formAction;
            else if (rs(r) !== null) continue;
          } else m = d.action;
          typeof m == "function" ? (n[l + 1] = m) : (n.splice(l, 3), (l -= 3)),
            e0(n);
        }
      }
  }
  function us(t) {
    this._internalRoot = t;
  }
  (bo.prototype.render = us.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(o(409));
      var n = e.current,
        l = ke();
      Zm(n, l, t, e, null, null);
    }),
    (bo.prototype.unmount = us.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          Zm(t.current, 2, null, t, null, null), Ir(), (e[Qa] = null);
        }
      });
  function bo(t) {
    this._internalRoot = t;
  }
  bo.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = vf();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < ha.length && e !== 0 && e < ha[n].priority; n++);
      ha.splice(n, 0, t), n === 0 && Im(t);
    }
  };
  var n0 = i.version;
  if (n0 !== "19.1.0") throw Error(o(527, n0, "19.1.0"));
  K.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(o(188))
        : ((t = Object.keys(t).join(",")), Error(o(268, t)));
    return (
      (t = v(e)),
      (t = t !== null ? g(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var a1 = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: B,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var So = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!So.isDisabled && So.supportsFiber)
      try {
        (se = So.inject(a1)), (Ct = So);
      } catch {}
  }
  return (
    (Li.createRoot = function (t, e) {
      if (!s(t)) throw Error(o(299));
      var n = !1,
        l = "",
        r = vh,
        c = bh,
        d = Sh,
        m = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (l = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (r = e.onUncaughtError),
          e.onCaughtError !== void 0 && (c = e.onCaughtError),
          e.onRecoverableError !== void 0 && (d = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (m = e.unstable_transitionCallbacks)),
        (e = Qm(t, 1, !1, null, null, n, l, r, c, d, m, null)),
        (t[Qa] = e.current),
        Vc(t),
        new us(e)
      );
    }),
    (Li.hydrateRoot = function (t, e, n) {
      if (!s(t)) throw Error(o(299));
      var l = !1,
        r = "",
        c = vh,
        d = bh,
        m = Sh,
        b = null,
        z = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (c = n.onUncaughtError),
          n.onCaughtError !== void 0 && (d = n.onCaughtError),
          n.onRecoverableError !== void 0 && (m = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (b = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (z = n.formState)),
        (e = Qm(t, 1, !0, e, n ?? null, l, r, c, d, m, b, z)),
        (e.context = Km(null)),
        (n = e.current),
        (l = ke()),
        (l = Io(l)),
        (r = Wn(l)),
        (r.callback = null),
        Fn(n, r, l),
        (n = l),
        (e.current.lanes = n),
        Vl(e, n),
        vn(e),
        (t[Qa] = e.current),
        Vc(t),
        new bo(e)
      );
    }),
    (Li.version = "19.1.0"),
    Li
  );
}
var d0;
function p1() {
  if (d0) return fs.exports;
  d0 = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return a(), (fs.exports = m1()), fs.exports;
}
var g1 = p1();
function Ga(a, ...i) {
  const u = new URL(`https://mui.com/production-error/?code=${a}`);
  return (
    i.forEach((o) => u.searchParams.append("args[]", o)),
    `Minified MUI error #${a}; visit ${u} for the full message.`
  );
}
const Tn = "$$material";
function Do() {
  return (
    (Do = Object.assign
      ? Object.assign.bind()
      : function (a) {
          for (var i = 1; i < arguments.length; i++) {
            var u = arguments[i];
            for (var o in u) ({}).hasOwnProperty.call(u, o) && (a[o] = u[o]);
          }
          return a;
        }),
    Do.apply(null, arguments)
  );
}
function y1(a) {
  if (a.sheet) return a.sheet;
  for (var i = 0; i < document.styleSheets.length; i++)
    if (document.styleSheets[i].ownerNode === a) return document.styleSheets[i];
}
function v1(a) {
  var i = document.createElement("style");
  return (
    i.setAttribute("data-emotion", a.key),
    a.nonce !== void 0 && i.setAttribute("nonce", a.nonce),
    i.appendChild(document.createTextNode("")),
    i.setAttribute("data-s", ""),
    i
  );
}
var b1 = (function () {
    function a(u) {
      var o = this;
      (this._insertTag = function (s) {
        var f;
        o.tags.length === 0
          ? o.insertionPoint
            ? (f = o.insertionPoint.nextSibling)
            : o.prepend
            ? (f = o.container.firstChild)
            : (f = o.before)
          : (f = o.tags[o.tags.length - 1].nextSibling),
          o.container.insertBefore(s, f),
          o.tags.push(s);
      }),
        (this.isSpeedy = u.speedy === void 0 ? !0 : u.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = u.nonce),
        (this.key = u.key),
        (this.container = u.container),
        (this.prepend = u.prepend),
        (this.insertionPoint = u.insertionPoint),
        (this.before = null);
    }
    var i = a.prototype;
    return (
      (i.hydrate = function (o) {
        o.forEach(this._insertTag);
      }),
      (i.insert = function (o) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(v1(this));
        var s = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var f = y1(s);
          try {
            f.insertRule(o, f.cssRules.length);
          } catch {}
        } else s.appendChild(document.createTextNode(o));
        this.ctr++;
      }),
      (i.flush = function () {
        this.tags.forEach(function (o) {
          var s;
          return (s = o.parentNode) == null ? void 0 : s.removeChild(o);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      a
    );
  })(),
  Ee = "-ms-",
  wo = "-moz-",
  Rt = "-webkit-",
  np = "comm",
  Ys = "rule",
  Gs = "decl",
  S1 = "@import",
  ap = "@keyframes",
  x1 = "@layer",
  C1 = Math.abs,
  Uo = String.fromCharCode,
  T1 = Object.assign;
function E1(a, i) {
  return be(a, 0) ^ 45
    ? (((((((i << 2) ^ be(a, 0)) << 2) ^ be(a, 1)) << 2) ^ be(a, 2)) << 2) ^
        be(a, 3)
    : 0;
}
function lp(a) {
  return a.trim();
}
function A1(a, i) {
  return (a = i.exec(a)) ? a[0] : a;
}
function zt(a, i, u) {
  return a.replace(i, u);
}
function Ms(a, i) {
  return a.indexOf(i);
}
function be(a, i) {
  return a.charCodeAt(i) | 0;
}
function Ki(a, i, u) {
  return a.slice(i, u);
}
function Sn(a) {
  return a.length;
}
function Vs(a) {
  return a.length;
}
function xo(a, i) {
  return i.push(a), a;
}
function M1(a, i) {
  return a.map(i).join("");
}
var Ho = 1,
  kl = 1,
  ip = 0,
  we = 0,
  re = 0,
  Ll = "";
function $o(a, i, u, o, s, f, h) {
  return {
    value: a,
    root: i,
    parent: u,
    type: o,
    props: s,
    children: f,
    line: Ho,
    column: kl,
    length: h,
    return: "",
  };
}
function qi(a, i) {
  return T1($o("", null, null, "", null, null, 0), a, { length: -a.length }, i);
}
function O1() {
  return re;
}
function R1() {
  return (
    (re = we > 0 ? be(Ll, --we) : 0), kl--, re === 10 && ((kl = 1), Ho--), re
  );
}
function Ye() {
  return (
    (re = we < ip ? be(Ll, we++) : 0), kl++, re === 10 && ((kl = 1), Ho++), re
  );
}
function En() {
  return be(Ll, we);
}
function Ao() {
  return we;
}
function Pi(a, i) {
  return Ki(Ll, a, i);
}
function Zi(a) {
  switch (a) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function rp(a) {
  return (Ho = kl = 1), (ip = Sn((Ll = a))), (we = 0), [];
}
function op(a) {
  return (Ll = ""), a;
}
function Mo(a) {
  return lp(Pi(we - 1, Os(a === 91 ? a + 2 : a === 40 ? a + 1 : a)));
}
function z1(a) {
  for (; (re = En()) && re < 33; ) Ye();
  return Zi(a) > 2 || Zi(re) > 3 ? "" : " ";
}
function _1(a, i) {
  for (
    ;
    --i &&
    Ye() &&
    !(re < 48 || re > 102 || (re > 57 && re < 65) || (re > 70 && re < 97));

  );
  return Pi(a, Ao() + (i < 6 && En() == 32 && Ye() == 32));
}
function Os(a) {
  for (; Ye(); )
    switch (re) {
      case a:
        return we;
      case 34:
      case 39:
        a !== 34 && a !== 39 && Os(re);
        break;
      case 40:
        a === 41 && Os(a);
        break;
      case 92:
        Ye();
        break;
    }
  return we;
}
function D1(a, i) {
  for (; Ye() && a + re !== 57; ) if (a + re === 84 && En() === 47) break;
  return "/*" + Pi(i, we - 1) + "*" + Uo(a === 47 ? a : Ye());
}
function w1(a) {
  for (; !Zi(En()); ) Ye();
  return Pi(a, we);
}
function B1(a) {
  return op(Oo("", null, null, null, [""], (a = rp(a)), 0, [0], a));
}
function Oo(a, i, u, o, s, f, h, p, v) {
  for (
    var g = 0,
      S = 0,
      E = h,
      M = 0,
      U = 0,
      O = 0,
      T = 1,
      q = 1,
      Q = 1,
      F = 0,
      V = "",
      G = s,
      _ = f,
      J = o,
      P = V;
    q;

  )
    switch (((O = F), (F = Ye()))) {
      case 40:
        if (O != 108 && be(P, E - 1) == 58) {
          Ms((P += zt(Mo(F), "&", "&\f")), "&\f") != -1 && (Q = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        P += Mo(F);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        P += z1(O);
        break;
      case 92:
        P += _1(Ao() - 1, 7);
        continue;
      case 47:
        switch (En()) {
          case 42:
          case 47:
            xo(N1(D1(Ye(), Ao()), i, u), v);
            break;
          default:
            P += "/";
        }
        break;
      case 123 * T:
        p[g++] = Sn(P) * Q;
      case 125 * T:
      case 59:
      case 0:
        switch (F) {
          case 0:
          case 125:
            q = 0;
          case 59 + S:
            Q == -1 && (P = zt(P, /\f/g, "")),
              U > 0 &&
                Sn(P) - E &&
                xo(
                  U > 32
                    ? m0(P + ";", o, u, E - 1)
                    : m0(zt(P, " ", "") + ";", o, u, E - 2),
                  v
                );
            break;
          case 59:
            P += ";";
          default:
            if (
              (xo((J = h0(P, i, u, g, S, s, p, V, (G = []), (_ = []), E)), f),
              F === 123)
            )
              if (S === 0) Oo(P, i, J, J, G, f, E, p, _);
              else
                switch (M === 99 && be(P, 3) === 110 ? 100 : M) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Oo(
                      a,
                      J,
                      J,
                      o && xo(h0(a, J, J, 0, 0, s, p, V, s, (G = []), E), _),
                      s,
                      _,
                      E,
                      p,
                      o ? G : _
                    );
                    break;
                  default:
                    Oo(P, J, J, J, [""], _, 0, p, _);
                }
        }
        (g = S = U = 0), (T = Q = 1), (V = P = ""), (E = h);
        break;
      case 58:
        (E = 1 + Sn(P)), (U = O);
      default:
        if (T < 1) {
          if (F == 123) --T;
          else if (F == 125 && T++ == 0 && R1() == 125) continue;
        }
        switch (((P += Uo(F)), F * T)) {
          case 38:
            Q = S > 0 ? 1 : ((P += "\f"), -1);
            break;
          case 44:
            (p[g++] = (Sn(P) - 1) * Q), (Q = 1);
            break;
          case 64:
            En() === 45 && (P += Mo(Ye())),
              (M = En()),
              (S = E = Sn((V = P += w1(Ao())))),
              F++;
            break;
          case 45:
            O === 45 && Sn(P) == 2 && (T = 0);
        }
    }
  return f;
}
function h0(a, i, u, o, s, f, h, p, v, g, S) {
  for (
    var E = s - 1, M = s === 0 ? f : [""], U = Vs(M), O = 0, T = 0, q = 0;
    O < o;
    ++O
  )
    for (var Q = 0, F = Ki(a, E + 1, (E = C1((T = h[O])))), V = a; Q < U; ++Q)
      (V = lp(T > 0 ? M[Q] + " " + F : zt(F, /&\f/g, M[Q]))) && (v[q++] = V);
  return $o(a, i, u, s === 0 ? Ys : p, v, g, S);
}
function N1(a, i, u) {
  return $o(a, i, u, np, Uo(O1()), Ki(a, 2, -2), 0);
}
function m0(a, i, u, o) {
  return $o(a, i, u, Gs, Ki(a, 0, o), Ki(a, o + 1, -1), o);
}
function Hl(a, i) {
  for (var u = "", o = Vs(a), s = 0; s < o; s++) u += i(a[s], s, a, i) || "";
  return u;
}
function j1(a, i, u, o) {
  switch (a.type) {
    case x1:
      if (a.children.length) break;
    case S1:
    case Gs:
      return (a.return = a.return || a.value);
    case np:
      return "";
    case ap:
      return (a.return = a.value + "{" + Hl(a.children, o) + "}");
    case Ys:
      a.value = a.props.join(",");
  }
  return Sn((u = Hl(a.children, o)))
    ? (a.return = a.value + "{" + u + "}")
    : "";
}
function U1(a) {
  var i = Vs(a);
  return function (u, o, s, f) {
    for (var h = "", p = 0; p < i; p++) h += a[p](u, o, s, f) || "";
    return h;
  };
}
function H1(a) {
  return function (i) {
    i.root || ((i = i.return) && a(i));
  };
}
function up(a) {
  var i = Object.create(null);
  return function (u) {
    return i[u] === void 0 && (i[u] = a(u)), i[u];
  };
}
var $1 = function (i, u, o) {
    for (
      var s = 0, f = 0;
      (s = f), (f = En()), s === 38 && f === 12 && (u[o] = 1), !Zi(f);

    )
      Ye();
    return Pi(i, we);
  },
  k1 = function (i, u) {
    var o = -1,
      s = 44;
    do
      switch (Zi(s)) {
        case 0:
          s === 38 && En() === 12 && (u[o] = 1), (i[o] += $1(we - 1, u, o));
          break;
        case 2:
          i[o] += Mo(s);
          break;
        case 4:
          if (s === 44) {
            (i[++o] = En() === 58 ? "&\f" : ""), (u[o] = i[o].length);
            break;
          }
        default:
          i[o] += Uo(s);
      }
    while ((s = Ye()));
    return i;
  },
  L1 = function (i, u) {
    return op(k1(rp(i), u));
  },
  p0 = new WeakMap(),
  q1 = function (i) {
    if (!(i.type !== "rule" || !i.parent || i.length < 1)) {
      for (
        var u = i.value,
          o = i.parent,
          s = i.column === o.column && i.line === o.line;
        o.type !== "rule";

      )
        if (((o = o.parent), !o)) return;
      if (
        !(i.props.length === 1 && u.charCodeAt(0) !== 58 && !p0.get(o)) &&
        !s
      ) {
        p0.set(i, !0);
        for (
          var f = [], h = L1(u, f), p = o.props, v = 0, g = 0;
          v < h.length;
          v++
        )
          for (var S = 0; S < p.length; S++, g++)
            i.props[g] = f[v] ? h[v].replace(/&\f/g, p[S]) : p[S] + " " + h[v];
      }
    }
  },
  Y1 = function (i) {
    if (i.type === "decl") {
      var u = i.value;
      u.charCodeAt(0) === 108 &&
        u.charCodeAt(2) === 98 &&
        ((i.return = ""), (i.value = ""));
    }
  };
function cp(a, i) {
  switch (E1(a, i)) {
    case 5103:
      return Rt + "print-" + a + a;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Rt + a + a;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Rt + a + wo + a + Ee + a + a;
    case 6828:
    case 4268:
      return Rt + a + Ee + a + a;
    case 6165:
      return Rt + a + Ee + "flex-" + a + a;
    case 5187:
      return (
        Rt + a + zt(a, /(\w+).+(:[^]+)/, Rt + "box-$1$2" + Ee + "flex-$1$2") + a
      );
    case 5443:
      return Rt + a + Ee + "flex-item-" + zt(a, /flex-|-self/, "") + a;
    case 4675:
      return (
        Rt +
        a +
        Ee +
        "flex-line-pack" +
        zt(a, /align-content|flex-|-self/, "") +
        a
      );
    case 5548:
      return Rt + a + Ee + zt(a, "shrink", "negative") + a;
    case 5292:
      return Rt + a + Ee + zt(a, "basis", "preferred-size") + a;
    case 6060:
      return (
        Rt +
        "box-" +
        zt(a, "-grow", "") +
        Rt +
        a +
        Ee +
        zt(a, "grow", "positive") +
        a
      );
    case 4554:
      return Rt + zt(a, /([^-])(transform)/g, "$1" + Rt + "$2") + a;
    case 6187:
      return (
        zt(
          zt(zt(a, /(zoom-|grab)/, Rt + "$1"), /(image-set)/, Rt + "$1"),
          a,
          ""
        ) + a
      );
    case 5495:
    case 3959:
      return zt(a, /(image-set\([^]*)/, Rt + "$1$`$1");
    case 4968:
      return (
        zt(
          zt(a, /(.+:)(flex-)?(.*)/, Rt + "box-pack:$3" + Ee + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        Rt +
        a +
        a
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return zt(a, /(.+)-inline(.+)/, Rt + "$1$2") + a;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Sn(a) - 1 - i > 6)
        switch (be(a, i + 1)) {
          case 109:
            if (be(a, i + 4) !== 45) break;
          case 102:
            return (
              zt(
                a,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  Rt +
                  "$2-$3$1" +
                  wo +
                  (be(a, i + 3) == 108 ? "$3" : "$2-$3")
              ) + a
            );
          case 115:
            return ~Ms(a, "stretch")
              ? cp(zt(a, "stretch", "fill-available"), i) + a
              : a;
        }
      break;
    case 4949:
      if (be(a, i + 1) !== 115) break;
    case 6444:
      switch (be(a, Sn(a) - 3 - (~Ms(a, "!important") && 10))) {
        case 107:
          return zt(a, ":", ":" + Rt) + a;
        case 101:
          return (
            zt(
              a,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Rt +
                (be(a, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Rt +
                "$2$3$1" +
                Ee +
                "$2box$3"
            ) + a
          );
      }
      break;
    case 5936:
      switch (be(a, i + 11)) {
        case 114:
          return Rt + a + Ee + zt(a, /[svh]\w+-[tblr]{2}/, "tb") + a;
        case 108:
          return Rt + a + Ee + zt(a, /[svh]\w+-[tblr]{2}/, "tb-rl") + a;
        case 45:
          return Rt + a + Ee + zt(a, /[svh]\w+-[tblr]{2}/, "lr") + a;
      }
      return Rt + a + Ee + a + a;
  }
  return a;
}
var G1 = function (i, u, o, s) {
    if (i.length > -1 && !i.return)
      switch (i.type) {
        case Gs:
          i.return = cp(i.value, i.length);
          break;
        case ap:
          return Hl([qi(i, { value: zt(i.value, "@", "@" + Rt) })], s);
        case Ys:
          if (i.length)
            return M1(i.props, function (f) {
              switch (A1(f, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Hl(
                    [qi(i, { props: [zt(f, /:(read-\w+)/, ":" + wo + "$1")] })],
                    s
                  );
                case "::placeholder":
                  return Hl(
                    [
                      qi(i, {
                        props: [zt(f, /:(plac\w+)/, ":" + Rt + "input-$1")],
                      }),
                      qi(i, { props: [zt(f, /:(plac\w+)/, ":" + wo + "$1")] }),
                      qi(i, { props: [zt(f, /:(plac\w+)/, Ee + "input-$1")] }),
                    ],
                    s
                  );
              }
              return "";
            });
      }
  },
  V1 = [G1],
  X1 = function (i) {
    var u = i.key;
    if (u === "css") {
      var o = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(o, function (T) {
        var q = T.getAttribute("data-emotion");
        q.indexOf(" ") !== -1 &&
          (document.head.appendChild(T), T.setAttribute("data-s", ""));
      });
    }
    var s = i.stylisPlugins || V1,
      f = {},
      h,
      p = [];
    (h = i.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + u + ' "]'),
        function (T) {
          for (
            var q = T.getAttribute("data-emotion").split(" "), Q = 1;
            Q < q.length;
            Q++
          )
            f[q[Q]] = !0;
          p.push(T);
        }
      );
    var v,
      g = [q1, Y1];
    {
      var S,
        E = [
          j1,
          H1(function (T) {
            S.insert(T);
          }),
        ],
        M = U1(g.concat(s, E)),
        U = function (q) {
          return Hl(B1(q), M);
        };
      v = function (q, Q, F, V) {
        (S = F),
          U(q ? q + "{" + Q.styles + "}" : Q.styles),
          V && (O.inserted[Q.name] = !0);
      };
    }
    var O = {
      key: u,
      sheet: new b1({
        key: u,
        container: h,
        nonce: i.nonce,
        speedy: i.speedy,
        prepend: i.prepend,
        insertionPoint: i.insertionPoint,
      }),
      nonce: i.nonce,
      inserted: f,
      registered: {},
      insert: v,
    };
    return O.sheet.hydrate(p), O;
  },
  ps = { exports: {} },
  _t = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var g0;
function Q1() {
  if (g0) return _t;
  g0 = 1;
  var a = typeof Symbol == "function" && Symbol.for,
    i = a ? Symbol.for("react.element") : 60103,
    u = a ? Symbol.for("react.portal") : 60106,
    o = a ? Symbol.for("react.fragment") : 60107,
    s = a ? Symbol.for("react.strict_mode") : 60108,
    f = a ? Symbol.for("react.profiler") : 60114,
    h = a ? Symbol.for("react.provider") : 60109,
    p = a ? Symbol.for("react.context") : 60110,
    v = a ? Symbol.for("react.async_mode") : 60111,
    g = a ? Symbol.for("react.concurrent_mode") : 60111,
    S = a ? Symbol.for("react.forward_ref") : 60112,
    E = a ? Symbol.for("react.suspense") : 60113,
    M = a ? Symbol.for("react.suspense_list") : 60120,
    U = a ? Symbol.for("react.memo") : 60115,
    O = a ? Symbol.for("react.lazy") : 60116,
    T = a ? Symbol.for("react.block") : 60121,
    q = a ? Symbol.for("react.fundamental") : 60117,
    Q = a ? Symbol.for("react.responder") : 60118,
    F = a ? Symbol.for("react.scope") : 60119;
  function V(_) {
    if (typeof _ == "object" && _ !== null) {
      var J = _.$$typeof;
      switch (J) {
        case i:
          switch (((_ = _.type), _)) {
            case v:
            case g:
            case o:
            case f:
            case s:
            case E:
              return _;
            default:
              switch (((_ = _ && _.$$typeof), _)) {
                case p:
                case S:
                case O:
                case U:
                case h:
                  return _;
                default:
                  return J;
              }
          }
        case u:
          return J;
      }
    }
  }
  function G(_) {
    return V(_) === g;
  }
  return (
    (_t.AsyncMode = v),
    (_t.ConcurrentMode = g),
    (_t.ContextConsumer = p),
    (_t.ContextProvider = h),
    (_t.Element = i),
    (_t.ForwardRef = S),
    (_t.Fragment = o),
    (_t.Lazy = O),
    (_t.Memo = U),
    (_t.Portal = u),
    (_t.Profiler = f),
    (_t.StrictMode = s),
    (_t.Suspense = E),
    (_t.isAsyncMode = function (_) {
      return G(_) || V(_) === v;
    }),
    (_t.isConcurrentMode = G),
    (_t.isContextConsumer = function (_) {
      return V(_) === p;
    }),
    (_t.isContextProvider = function (_) {
      return V(_) === h;
    }),
    (_t.isElement = function (_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === i;
    }),
    (_t.isForwardRef = function (_) {
      return V(_) === S;
    }),
    (_t.isFragment = function (_) {
      return V(_) === o;
    }),
    (_t.isLazy = function (_) {
      return V(_) === O;
    }),
    (_t.isMemo = function (_) {
      return V(_) === U;
    }),
    (_t.isPortal = function (_) {
      return V(_) === u;
    }),
    (_t.isProfiler = function (_) {
      return V(_) === f;
    }),
    (_t.isStrictMode = function (_) {
      return V(_) === s;
    }),
    (_t.isSuspense = function (_) {
      return V(_) === E;
    }),
    (_t.isValidElementType = function (_) {
      return (
        typeof _ == "string" ||
        typeof _ == "function" ||
        _ === o ||
        _ === g ||
        _ === f ||
        _ === s ||
        _ === E ||
        _ === M ||
        (typeof _ == "object" &&
          _ !== null &&
          (_.$$typeof === O ||
            _.$$typeof === U ||
            _.$$typeof === h ||
            _.$$typeof === p ||
            _.$$typeof === S ||
            _.$$typeof === q ||
            _.$$typeof === Q ||
            _.$$typeof === F ||
            _.$$typeof === T))
      );
    }),
    (_t.typeOf = V),
    _t
  );
}
var y0;
function K1() {
  return y0 || ((y0 = 1), (ps.exports = Q1())), ps.exports;
}
var gs, v0;
function Z1() {
  if (v0) return gs;
  v0 = 1;
  var a = K1(),
    i = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    u = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    o = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    s = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    f = {};
  (f[a.ForwardRef] = o), (f[a.Memo] = s);
  function h(O) {
    return a.isMemo(O) ? s : f[O.$$typeof] || i;
  }
  var p = Object.defineProperty,
    v = Object.getOwnPropertyNames,
    g = Object.getOwnPropertySymbols,
    S = Object.getOwnPropertyDescriptor,
    E = Object.getPrototypeOf,
    M = Object.prototype;
  function U(O, T, q) {
    if (typeof T != "string") {
      if (M) {
        var Q = E(T);
        Q && Q !== M && U(O, Q, q);
      }
      var F = v(T);
      g && (F = F.concat(g(T)));
      for (var V = h(O), G = h(T), _ = 0; _ < F.length; ++_) {
        var J = F[_];
        if (!u[J] && !(q && q[J]) && !(G && G[J]) && !(V && V[J])) {
          var P = S(T, J);
          try {
            p(O, J, P);
          } catch {}
        }
      }
    }
    return O;
  }
  return (gs = U), gs;
}
Z1();
var J1 = !0;
function sp(a, i, u) {
  var o = "";
  return (
    u.split(" ").forEach(function (s) {
      a[s] !== void 0 ? i.push(a[s] + ";") : s && (o += s + " ");
    }),
    o
  );
}
var Xs = function (i, u, o) {
    var s = i.key + "-" + u.name;
    (o === !1 || J1 === !1) &&
      i.registered[s] === void 0 &&
      (i.registered[s] = u.styles);
  },
  Qs = function (i, u, o) {
    Xs(i, u, o);
    var s = i.key + "-" + u.name;
    if (i.inserted[u.name] === void 0) {
      var f = u;
      do i.insert(u === f ? "." + s : "", f, i.sheet, !0), (f = f.next);
      while (f !== void 0);
    }
  };
function W1(a) {
  for (var i = 0, u, o = 0, s = a.length; s >= 4; ++o, s -= 4)
    (u =
      (a.charCodeAt(o) & 255) |
      ((a.charCodeAt(++o) & 255) << 8) |
      ((a.charCodeAt(++o) & 255) << 16) |
      ((a.charCodeAt(++o) & 255) << 24)),
      (u = (u & 65535) * 1540483477 + (((u >>> 16) * 59797) << 16)),
      (u ^= u >>> 24),
      (i =
        ((u & 65535) * 1540483477 + (((u >>> 16) * 59797) << 16)) ^
        ((i & 65535) * 1540483477 + (((i >>> 16) * 59797) << 16)));
  switch (s) {
    case 3:
      i ^= (a.charCodeAt(o + 2) & 255) << 16;
    case 2:
      i ^= (a.charCodeAt(o + 1) & 255) << 8;
    case 1:
      (i ^= a.charCodeAt(o) & 255),
        (i = (i & 65535) * 1540483477 + (((i >>> 16) * 59797) << 16));
  }
  return (
    (i ^= i >>> 13),
    (i = (i & 65535) * 1540483477 + (((i >>> 16) * 59797) << 16)),
    ((i ^ (i >>> 15)) >>> 0).toString(36)
  );
}
var F1 = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  P1 = /[A-Z]|^ms/g,
  I1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  fp = function (i) {
    return i.charCodeAt(1) === 45;
  },
  b0 = function (i) {
    return i != null && typeof i != "boolean";
  },
  ys = up(function (a) {
    return fp(a) ? a : a.replace(P1, "-$&").toLowerCase();
  }),
  S0 = function (i, u) {
    switch (i) {
      case "animation":
      case "animationName":
        if (typeof u == "string")
          return u.replace(I1, function (o, s, f) {
            return (xn = { name: s, styles: f, next: xn }), s;
          });
    }
    return F1[i] !== 1 && !fp(i) && typeof u == "number" && u !== 0
      ? u + "px"
      : u;
  };
function Ji(a, i, u) {
  if (u == null) return "";
  var o = u;
  if (o.__emotion_styles !== void 0) return o;
  switch (typeof u) {
    case "boolean":
      return "";
    case "object": {
      var s = u;
      if (s.anim === 1)
        return (xn = { name: s.name, styles: s.styles, next: xn }), s.name;
      var f = u;
      if (f.styles !== void 0) {
        var h = f.next;
        if (h !== void 0)
          for (; h !== void 0; )
            (xn = { name: h.name, styles: h.styles, next: xn }), (h = h.next);
        var p = f.styles + ";";
        return p;
      }
      return tv(a, i, u);
    }
    case "function": {
      if (a !== void 0) {
        var v = xn,
          g = u(a);
        return (xn = v), Ji(a, i, g);
      }
      break;
    }
  }
  var S = u;
  if (i == null) return S;
  var E = i[S];
  return E !== void 0 ? E : S;
}
function tv(a, i, u) {
  var o = "";
  if (Array.isArray(u))
    for (var s = 0; s < u.length; s++) o += Ji(a, i, u[s]) + ";";
  else
    for (var f in u) {
      var h = u[f];
      if (typeof h != "object") {
        var p = h;
        i != null && i[p] !== void 0
          ? (o += f + "{" + i[p] + "}")
          : b0(p) && (o += ys(f) + ":" + S0(f, p) + ";");
      } else if (
        Array.isArray(h) &&
        typeof h[0] == "string" &&
        (i == null || i[h[0]] === void 0)
      )
        for (var v = 0; v < h.length; v++)
          b0(h[v]) && (o += ys(f) + ":" + S0(f, h[v]) + ";");
      else {
        var g = Ji(a, i, h);
        switch (f) {
          case "animation":
          case "animationName": {
            o += ys(f) + ":" + g + ";";
            break;
          }
          default:
            o += f + "{" + g + "}";
        }
      }
    }
  return o;
}
var x0 = /label:\s*([^\s;{]+)\s*(;|$)/g,
  xn;
function Ii(a, i, u) {
  if (
    a.length === 1 &&
    typeof a[0] == "object" &&
    a[0] !== null &&
    a[0].styles !== void 0
  )
    return a[0];
  var o = !0,
    s = "";
  xn = void 0;
  var f = a[0];
  if (f == null || f.raw === void 0) (o = !1), (s += Ji(u, i, f));
  else {
    var h = f;
    s += h[0];
  }
  for (var p = 1; p < a.length; p++)
    if (((s += Ji(u, i, a[p])), o)) {
      var v = f;
      s += v[p];
    }
  x0.lastIndex = 0;
  for (var g = "", S; (S = x0.exec(s)) !== null; ) g += "-" + S[1];
  var E = W1(s) + g;
  return { name: E, styles: s, next: xn };
}
var ev = function (i) {
    return i();
  },
  dp = As.useInsertionEffect ? As.useInsertionEffect : !1,
  hp = dp || ev,
  C0 = dp || j.useLayoutEffect,
  mp = j.createContext(typeof HTMLElement < "u" ? X1({ key: "css" }) : null);
mp.Provider;
var Ks = function (i) {
    return j.forwardRef(function (u, o) {
      var s = j.useContext(mp);
      return i(u, s, o);
    });
  },
  tr = j.createContext({}),
  Zs = {}.hasOwnProperty,
  Rs = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  nv = function (i, u) {
    var o = {};
    for (var s in u) Zs.call(u, s) && (o[s] = u[s]);
    return (o[Rs] = i), o;
  },
  av = function (i) {
    var u = i.cache,
      o = i.serialized,
      s = i.isStringTag;
    return (
      Xs(u, o, s),
      hp(function () {
        return Qs(u, o, s);
      }),
      null
    );
  },
  lv = Ks(function (a, i, u) {
    var o = a.css;
    typeof o == "string" && i.registered[o] !== void 0 && (o = i.registered[o]);
    var s = a[Rs],
      f = [o],
      h = "";
    typeof a.className == "string"
      ? (h = sp(i.registered, f, a.className))
      : a.className != null && (h = a.className + " ");
    var p = Ii(f, void 0, j.useContext(tr));
    h += i.key + "-" + p.name;
    var v = {};
    for (var g in a) Zs.call(a, g) && g !== "css" && g !== Rs && (v[g] = a[g]);
    return (
      (v.className = h),
      u && (v.ref = u),
      j.createElement(
        j.Fragment,
        null,
        j.createElement(av, {
          cache: i,
          serialized: p,
          isStringTag: typeof s == "string",
        }),
        j.createElement(s, v)
      )
    );
  }),
  iv = lv,
  T0 = function (i, u) {
    var o = arguments;
    if (u == null || !Zs.call(u, "css"))
      return j.createElement.apply(void 0, o);
    var s = o.length,
      f = new Array(s);
    (f[0] = iv), (f[1] = nv(i, u));
    for (var h = 2; h < s; h++) f[h] = o[h];
    return j.createElement.apply(null, f);
  };
(function (a) {
  var i;
  i || (i = a.JSX || (a.JSX = {}));
})(T0 || (T0 = {}));
var rv = Ks(function (a, i) {
  var u = a.styles,
    o = Ii([u], void 0, j.useContext(tr)),
    s = j.useRef();
  return (
    C0(
      function () {
        var f = i.key + "-global",
          h = new i.sheet.constructor({
            key: f,
            nonce: i.sheet.nonce,
            container: i.sheet.container,
            speedy: i.sheet.isSpeedy,
          }),
          p = !1,
          v = document.querySelector(
            'style[data-emotion="' + f + " " + o.name + '"]'
          );
        return (
          i.sheet.tags.length && (h.before = i.sheet.tags[0]),
          v !== null &&
            ((p = !0), v.setAttribute("data-emotion", f), h.hydrate([v])),
          (s.current = [h, p]),
          function () {
            h.flush();
          }
        );
      },
      [i]
    ),
    C0(
      function () {
        var f = s.current,
          h = f[0],
          p = f[1];
        if (p) {
          f[1] = !1;
          return;
        }
        if ((o.next !== void 0 && Qs(i, o.next, !0), h.tags.length)) {
          var v = h.tags[h.tags.length - 1].nextElementSibling;
          (h.before = v), h.flush();
        }
        i.insert("", o, h, !1);
      },
      [i, o.name]
    ),
    null
  );
});
function Js() {
  for (var a = arguments.length, i = new Array(a), u = 0; u < a; u++)
    i[u] = arguments[u];
  return Ii(i);
}
function er() {
  var a = Js.apply(void 0, arguments),
    i = "animation-" + a.name;
  return {
    name: i,
    styles: "@keyframes " + i + "{" + a.styles + "}",
    anim: 1,
    toString: function () {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    },
  };
}
var ov =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  uv = up(function (a) {
    return (
      ov.test(a) ||
      (a.charCodeAt(0) === 111 &&
        a.charCodeAt(1) === 110 &&
        a.charCodeAt(2) < 91)
    );
  }),
  cv = uv,
  sv = function (i) {
    return i !== "theme";
  },
  E0 = function (i) {
    return typeof i == "string" && i.charCodeAt(0) > 96 ? cv : sv;
  },
  A0 = function (i, u, o) {
    var s;
    if (u) {
      var f = u.shouldForwardProp;
      s =
        i.__emotion_forwardProp && f
          ? function (h) {
              return i.__emotion_forwardProp(h) && f(h);
            }
          : f;
    }
    return typeof s != "function" && o && (s = i.__emotion_forwardProp), s;
  },
  fv = function (i) {
    var u = i.cache,
      o = i.serialized,
      s = i.isStringTag;
    return (
      Xs(u, o, s),
      hp(function () {
        return Qs(u, o, s);
      }),
      null
    );
  },
  dv = function a(i, u) {
    var o = i.__emotion_real === i,
      s = (o && i.__emotion_base) || i,
      f,
      h;
    u !== void 0 && ((f = u.label), (h = u.target));
    var p = A0(i, u, o),
      v = p || E0(s),
      g = !v("as");
    return function () {
      var S = arguments,
        E =
          o && i.__emotion_styles !== void 0 ? i.__emotion_styles.slice(0) : [];
      if (
        (f !== void 0 && E.push("label:" + f + ";"),
        S[0] == null || S[0].raw === void 0)
      )
        E.push.apply(E, S);
      else {
        var M = S[0];
        E.push(M[0]);
        for (var U = S.length, O = 1; O < U; O++) E.push(S[O], M[O]);
      }
      var T = Ks(function (q, Q, F) {
        var V = (g && q.as) || s,
          G = "",
          _ = [],
          J = q;
        if (q.theme == null) {
          J = {};
          for (var P in q) J[P] = q[P];
          J.theme = j.useContext(tr);
        }
        typeof q.className == "string"
          ? (G = sp(Q.registered, _, q.className))
          : q.className != null && (G = q.className + " ");
        var tt = Ii(E.concat(_), Q.registered, J);
        (G += Q.key + "-" + tt.name), h !== void 0 && (G += " " + h);
        var I = g && p === void 0 ? E0(V) : v,
          y = {};
        for (var X in q) (g && X === "as") || (I(X) && (y[X] = q[X]));
        return (
          (y.className = G),
          F && (y.ref = F),
          j.createElement(
            j.Fragment,
            null,
            j.createElement(fv, {
              cache: Q,
              serialized: tt,
              isStringTag: typeof V == "string",
            }),
            j.createElement(V, y)
          )
        );
      });
      return (
        (T.displayName =
          f !== void 0
            ? f
            : "Styled(" +
              (typeof s == "string"
                ? s
                : s.displayName || s.name || "Component") +
              ")"),
        (T.defaultProps = i.defaultProps),
        (T.__emotion_real = T),
        (T.__emotion_base = s),
        (T.__emotion_styles = E),
        (T.__emotion_forwardProp = p),
        Object.defineProperty(T, "toString", {
          value: function () {
            return "." + h;
          },
        }),
        (T.withComponent = function (q, Q) {
          var F = a(q, Do({}, u, Q, { shouldForwardProp: A0(T, Q, !0) }));
          return F.apply(void 0, E);
        }),
        T
      );
    };
  },
  hv = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  zs = dv.bind(null);
hv.forEach(function (a) {
  zs[a] = zs(a);
});
function mv(a) {
  return a == null || Object.keys(a).length === 0;
}
function pp(a) {
  const { styles: i, defaultTheme: u = {} } = a,
    o = typeof i == "function" ? (s) => i(mv(s) ? u : s) : i;
  return N.jsx(rv, { styles: o });
}
function gp(a, i) {
  return zs(a, i);
}
function pv(a, i) {
  Array.isArray(a.__emotion_styles) &&
    (a.__emotion_styles = i(a.__emotion_styles));
}
const M0 = [];
function ga(a) {
  return (M0[0] = a), Ii(M0);
}
var vs = { exports: {} },
  Ht = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var O0;
function gv() {
  if (O0) return Ht;
  O0 = 1;
  var a = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    u = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    f = Symbol.for("react.consumer"),
    h = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    v = Symbol.for("react.suspense"),
    g = Symbol.for("react.suspense_list"),
    S = Symbol.for("react.memo"),
    E = Symbol.for("react.lazy"),
    M = Symbol.for("react.view_transition"),
    U = Symbol.for("react.client.reference");
  function O(T) {
    if (typeof T == "object" && T !== null) {
      var q = T.$$typeof;
      switch (q) {
        case a:
          switch (((T = T.type), T)) {
            case u:
            case s:
            case o:
            case v:
            case g:
            case M:
              return T;
            default:
              switch (((T = T && T.$$typeof), T)) {
                case h:
                case p:
                case E:
                case S:
                  return T;
                case f:
                  return T;
                default:
                  return q;
              }
          }
        case i:
          return q;
      }
    }
  }
  return (
    (Ht.ContextConsumer = f),
    (Ht.ContextProvider = h),
    (Ht.Element = a),
    (Ht.ForwardRef = p),
    (Ht.Fragment = u),
    (Ht.Lazy = E),
    (Ht.Memo = S),
    (Ht.Portal = i),
    (Ht.Profiler = s),
    (Ht.StrictMode = o),
    (Ht.Suspense = v),
    (Ht.SuspenseList = g),
    (Ht.isContextConsumer = function (T) {
      return O(T) === f;
    }),
    (Ht.isContextProvider = function (T) {
      return O(T) === h;
    }),
    (Ht.isElement = function (T) {
      return typeof T == "object" && T !== null && T.$$typeof === a;
    }),
    (Ht.isForwardRef = function (T) {
      return O(T) === p;
    }),
    (Ht.isFragment = function (T) {
      return O(T) === u;
    }),
    (Ht.isLazy = function (T) {
      return O(T) === E;
    }),
    (Ht.isMemo = function (T) {
      return O(T) === S;
    }),
    (Ht.isPortal = function (T) {
      return O(T) === i;
    }),
    (Ht.isProfiler = function (T) {
      return O(T) === s;
    }),
    (Ht.isStrictMode = function (T) {
      return O(T) === o;
    }),
    (Ht.isSuspense = function (T) {
      return O(T) === v;
    }),
    (Ht.isSuspenseList = function (T) {
      return O(T) === g;
    }),
    (Ht.isValidElementType = function (T) {
      return (
        typeof T == "string" ||
        typeof T == "function" ||
        T === u ||
        T === s ||
        T === o ||
        T === v ||
        T === g ||
        (typeof T == "object" &&
          T !== null &&
          (T.$$typeof === E ||
            T.$$typeof === S ||
            T.$$typeof === h ||
            T.$$typeof === f ||
            T.$$typeof === p ||
            T.$$typeof === U ||
            T.getModuleId !== void 0))
      );
    }),
    (Ht.typeOf = O),
    Ht
  );
}
var R0;
function yv() {
  return R0 || ((R0 = 1), (vs.exports = gv())), vs.exports;
}
var yp = yv();
function Cn(a) {
  if (typeof a != "object" || a === null) return !1;
  const i = Object.getPrototypeOf(a);
  return (
    (i === null ||
      i === Object.prototype ||
      Object.getPrototypeOf(i) === null) &&
    !(Symbol.toStringTag in a) &&
    !(Symbol.iterator in a)
  );
}
function vp(a) {
  if (j.isValidElement(a) || yp.isValidElementType(a) || !Cn(a)) return a;
  const i = {};
  return (
    Object.keys(a).forEach((u) => {
      i[u] = vp(a[u]);
    }),
    i
  );
}
function Me(a, i, u = { clone: !0 }) {
  const o = u.clone ? { ...a } : a;
  return (
    Cn(a) &&
      Cn(i) &&
      Object.keys(i).forEach((s) => {
        j.isValidElement(i[s]) || yp.isValidElementType(i[s])
          ? (o[s] = i[s])
          : Cn(i[s]) && Object.prototype.hasOwnProperty.call(a, s) && Cn(a[s])
          ? (o[s] = Me(a[s], i[s], u))
          : u.clone
          ? (o[s] = Cn(i[s]) ? vp(i[s]) : i[s])
          : (o[s] = i[s]);
      }),
    o
  );
}
const vv = (a) => {
  const i = Object.keys(a).map((u) => ({ key: u, val: a[u] })) || [];
  return (
    i.sort((u, o) => u.val - o.val),
    i.reduce((u, o) => ({ ...u, [o.key]: o.val }), {})
  );
};
function bv(a) {
  const {
      values: i = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: u = "px",
      step: o = 5,
      ...s
    } = a,
    f = vv(i),
    h = Object.keys(f);
  function p(M) {
    return `@media (min-width:${typeof i[M] == "number" ? i[M] : M}${u})`;
  }
  function v(M) {
    return `@media (max-width:${
      (typeof i[M] == "number" ? i[M] : M) - o / 100
    }${u})`;
  }
  function g(M, U) {
    const O = h.indexOf(U);
    return `@media (min-width:${
      typeof i[M] == "number" ? i[M] : M
    }${u}) and (max-width:${
      (O !== -1 && typeof i[h[O]] == "number" ? i[h[O]] : U) - o / 100
    }${u})`;
  }
  function S(M) {
    return h.indexOf(M) + 1 < h.length ? g(M, h[h.indexOf(M) + 1]) : p(M);
  }
  function E(M) {
    const U = h.indexOf(M);
    return U === 0
      ? p(h[1])
      : U === h.length - 1
      ? v(h[U])
      : g(M, h[h.indexOf(M) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: h,
    values: f,
    up: p,
    down: v,
    between: g,
    only: S,
    not: E,
    unit: u,
    ...s,
  };
}
function z0(a, i) {
  if (!a.containerQueries) return i;
  const u = Object.keys(i)
    .filter((o) => o.startsWith("@container"))
    .sort((o, s) => {
      const f = /min-width:\s*([0-9.]+)/;
      return +(o.match(f)?.[1] || 0) - +(s.match(f)?.[1] || 0);
    });
  return u.length
    ? u.reduce(
        (o, s) => {
          const f = i[s];
          return delete o[s], (o[s] = f), o;
        },
        { ...i }
      )
    : i;
}
function Sv(a, i) {
  return (
    i === "@" ||
    (i.startsWith("@") &&
      (a.some((u) => i.startsWith(`@${u}`)) || !!i.match(/^@\d/)))
  );
}
function xv(a, i) {
  const u = i.match(/^@([^/]+)?\/?(.+)?$/);
  if (!u) return null;
  const [, o, s] = u,
    f = Number.isNaN(+o) ? o || 0 : +o;
  return a.containerQueries(s).up(f);
}
function Cv(a) {
  const i = (f, h) => f.replace("@media", h ? `@container ${h}` : "@container");
  function u(f, h) {
    (f.up = (...p) => i(a.breakpoints.up(...p), h)),
      (f.down = (...p) => i(a.breakpoints.down(...p), h)),
      (f.between = (...p) => i(a.breakpoints.between(...p), h)),
      (f.only = (...p) => i(a.breakpoints.only(...p), h)),
      (f.not = (...p) => {
        const v = i(a.breakpoints.not(...p), h);
        return v.includes("not all and")
          ? v
              .replace("not all and ", "")
              .replace("min-width:", "width<")
              .replace("max-width:", "width>")
              .replace("and", "or")
          : v;
      });
  }
  const o = {},
    s = (f) => (u(o, f), o);
  return u(s), { ...a, containerQueries: s };
}
const Tv = { borderRadius: 4 };
function Xi(a, i) {
  return i ? Me(a, i, { clone: !1 }) : a;
}
const ko = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  _0 = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (a) => `@media (min-width:${ko[a]}px)`,
  },
  Ev = {
    containerQueries: (a) => ({
      up: (i) => {
        let u = typeof i == "number" ? i : ko[i] || i;
        return (
          typeof u == "number" && (u = `${u}px`),
          a ? `@container ${a} (min-width:${u})` : `@container (min-width:${u})`
        );
      },
    }),
  };
function on(a, i, u) {
  const o = a.theme || {};
  if (Array.isArray(i)) {
    const f = o.breakpoints || _0;
    return i.reduce((h, p, v) => ((h[f.up(f.keys[v])] = u(i[v])), h), {});
  }
  if (typeof i == "object") {
    const f = o.breakpoints || _0;
    return Object.keys(i).reduce((h, p) => {
      if (Sv(f.keys, p)) {
        const v = xv(o.containerQueries ? o : Ev, p);
        v && (h[v] = u(i[p], p));
      } else if (Object.keys(f.values || ko).includes(p)) {
        const v = f.up(p);
        h[v] = u(i[p], p);
      } else {
        const v = p;
        h[v] = i[v];
      }
      return h;
    }, {});
  }
  return u(i);
}
function bp(a = {}) {
  return (
    a.keys?.reduce((u, o) => {
      const s = a.up(o);
      return (u[s] = {}), u;
    }, {}) || {}
  );
}
function _s(a, i) {
  return a.reduce((u, o) => {
    const s = u[o];
    return (!s || Object.keys(s).length === 0) && delete u[o], u;
  }, i);
}
function Av(a, ...i) {
  const u = bp(a),
    o = [u, ...i].reduce((s, f) => Me(s, f), {});
  return _s(Object.keys(u), o);
}
function Mv(a, i) {
  if (typeof a != "object") return {};
  const u = {},
    o = Object.keys(i);
  return (
    Array.isArray(a)
      ? o.forEach((s, f) => {
          f < a.length && (u[s] = !0);
        })
      : o.forEach((s) => {
          a[s] != null && (u[s] = !0);
        }),
    u
  );
}
function bs({ values: a, breakpoints: i, base: u }) {
  const o = u || Mv(a, i),
    s = Object.keys(o);
  if (s.length === 0) return a;
  let f;
  return s.reduce(
    (h, p, v) => (
      Array.isArray(a)
        ? ((h[p] = a[v] != null ? a[v] : a[f]), (f = v))
        : typeof a == "object"
        ? ((h[p] = a[p] != null ? a[p] : a[f]), (f = p))
        : (h[p] = a),
      h
    ),
    {}
  );
}
function ut(a) {
  if (typeof a != "string") throw new Error(Ga(7));
  return a.charAt(0).toUpperCase() + a.slice(1);
}
function Lo(a, i, u = !0) {
  if (!i || typeof i != "string") return null;
  if (a && a.vars && u) {
    const o = `vars.${i}`
      .split(".")
      .reduce((s, f) => (s && s[f] ? s[f] : null), a);
    if (o != null) return o;
  }
  return i.split(".").reduce((o, s) => (o && o[s] != null ? o[s] : null), a);
}
function Bo(a, i, u, o = u) {
  let s;
  return (
    typeof a == "function"
      ? (s = a(u))
      : Array.isArray(a)
      ? (s = a[u] || o)
      : (s = Lo(a, u) || o),
    i && (s = i(s, o, a)),
    s
  );
}
function ee(a) {
  const { prop: i, cssProperty: u = a.prop, themeKey: o, transform: s } = a,
    f = (h) => {
      if (h[i] == null) return null;
      const p = h[i],
        v = h.theme,
        g = Lo(v, o) || {};
      return on(h, p, (E) => {
        let M = Bo(g, s, E);
        return (
          E === M &&
            typeof E == "string" &&
            (M = Bo(g, s, `${i}${E === "default" ? "" : ut(E)}`, E)),
          u === !1 ? M : { [u]: M }
        );
      });
    };
  return (f.propTypes = {}), (f.filterProps = [i]), f;
}
function Ov(a) {
  const i = {};
  return (u) => (i[u] === void 0 && (i[u] = a(u)), i[u]);
}
const Rv = { m: "margin", p: "padding" },
  zv = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  D0 = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  _v = Ov((a) => {
    if (a.length > 2)
      if (D0[a]) a = D0[a];
      else return [a];
    const [i, u] = a.split(""),
      o = Rv[i],
      s = zv[u] || "";
    return Array.isArray(s) ? s.map((f) => o + f) : [o + s];
  }),
  Ws = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  Fs = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...Ws, ...Fs];
function nr(a, i, u, o) {
  const s = Lo(a, i, !0) ?? u;
  return typeof s == "number" || typeof s == "string"
    ? (f) =>
        typeof f == "string"
          ? f
          : typeof s == "string"
          ? s.startsWith("var(") && f === 0
            ? 0
            : s.startsWith("var(") && f === 1
            ? s
            : `calc(${f} * ${s})`
          : s * f
    : Array.isArray(s)
    ? (f) => {
        if (typeof f == "string") return f;
        const h = Math.abs(f),
          p = s[h];
        return f >= 0
          ? p
          : typeof p == "number"
          ? -p
          : typeof p == "string" && p.startsWith("var(")
          ? `calc(-1 * ${p})`
          : `-${p}`;
      }
    : typeof s == "function"
    ? s
    : () => {};
}
function qo(a) {
  return nr(a, "spacing", 8);
}
function Va(a, i) {
  return typeof i == "string" || i == null ? i : a(i);
}
function Dv(a, i) {
  return (u) => a.reduce((o, s) => ((o[s] = Va(i, u)), o), {});
}
function wv(a, i, u, o) {
  if (!i.includes(u)) return null;
  const s = _v(u),
    f = Dv(s, o),
    h = a[u];
  return on(a, h, f);
}
function Sp(a, i) {
  const u = qo(a.theme);
  return Object.keys(a)
    .map((o) => wv(a, i, o, u))
    .reduce(Xi, {});
}
function Jt(a) {
  return Sp(a, Ws);
}
Jt.propTypes = {};
Jt.filterProps = Ws;
function Wt(a) {
  return Sp(a, Fs);
}
Wt.propTypes = {};
Wt.filterProps = Fs;
function xp(a = 8, i = qo({ spacing: a })) {
  if (a.mui) return a;
  const u = (...o) =>
    (o.length === 0 ? [1] : o)
      .map((f) => {
        const h = i(f);
        return typeof h == "number" ? `${h}px` : h;
      })
      .join(" ");
  return (u.mui = !0), u;
}
function Yo(...a) {
  const i = a.reduce(
      (o, s) => (
        s.filterProps.forEach((f) => {
          o[f] = s;
        }),
        o
      ),
      {}
    ),
    u = (o) => Object.keys(o).reduce((s, f) => (i[f] ? Xi(s, i[f](o)) : s), {});
  return (
    (u.propTypes = {}),
    (u.filterProps = a.reduce((o, s) => o.concat(s.filterProps), [])),
    u
  );
}
function Ie(a) {
  return typeof a != "number" ? a : `${a}px solid`;
}
function tn(a, i) {
  return ee({ prop: a, themeKey: "borders", transform: i });
}
const Bv = tn("border", Ie),
  Nv = tn("borderTop", Ie),
  jv = tn("borderRight", Ie),
  Uv = tn("borderBottom", Ie),
  Hv = tn("borderLeft", Ie),
  $v = tn("borderColor"),
  kv = tn("borderTopColor"),
  Lv = tn("borderRightColor"),
  qv = tn("borderBottomColor"),
  Yv = tn("borderLeftColor"),
  Gv = tn("outline", Ie),
  Vv = tn("outlineColor"),
  Go = (a) => {
    if (a.borderRadius !== void 0 && a.borderRadius !== null) {
      const i = nr(a.theme, "shape.borderRadius", 4),
        u = (o) => ({ borderRadius: Va(i, o) });
      return on(a, a.borderRadius, u);
    }
    return null;
  };
Go.propTypes = {};
Go.filterProps = ["borderRadius"];
Yo(Bv, Nv, jv, Uv, Hv, $v, kv, Lv, qv, Yv, Go, Gv, Vv);
const Vo = (a) => {
  if (a.gap !== void 0 && a.gap !== null) {
    const i = nr(a.theme, "spacing", 8),
      u = (o) => ({ gap: Va(i, o) });
    return on(a, a.gap, u);
  }
  return null;
};
Vo.propTypes = {};
Vo.filterProps = ["gap"];
const Xo = (a) => {
  if (a.columnGap !== void 0 && a.columnGap !== null) {
    const i = nr(a.theme, "spacing", 8),
      u = (o) => ({ columnGap: Va(i, o) });
    return on(a, a.columnGap, u);
  }
  return null;
};
Xo.propTypes = {};
Xo.filterProps = ["columnGap"];
const Qo = (a) => {
  if (a.rowGap !== void 0 && a.rowGap !== null) {
    const i = nr(a.theme, "spacing", 8),
      u = (o) => ({ rowGap: Va(i, o) });
    return on(a, a.rowGap, u);
  }
  return null;
};
Qo.propTypes = {};
Qo.filterProps = ["rowGap"];
const Xv = ee({ prop: "gridColumn" }),
  Qv = ee({ prop: "gridRow" }),
  Kv = ee({ prop: "gridAutoFlow" }),
  Zv = ee({ prop: "gridAutoColumns" }),
  Jv = ee({ prop: "gridAutoRows" }),
  Wv = ee({ prop: "gridTemplateColumns" }),
  Fv = ee({ prop: "gridTemplateRows" }),
  Pv = ee({ prop: "gridTemplateAreas" }),
  Iv = ee({ prop: "gridArea" });
Yo(Vo, Xo, Qo, Xv, Qv, Kv, Zv, Jv, Wv, Fv, Pv, Iv);
function $l(a, i) {
  return i === "grey" ? i : a;
}
const tb = ee({ prop: "color", themeKey: "palette", transform: $l }),
  eb = ee({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: $l,
  }),
  nb = ee({ prop: "backgroundColor", themeKey: "palette", transform: $l });
Yo(tb, eb, nb);
function qe(a) {
  return a <= 1 && a !== 0 ? `${a * 100}%` : a;
}
const ab = ee({ prop: "width", transform: qe }),
  Ps = (a) => {
    if (a.maxWidth !== void 0 && a.maxWidth !== null) {
      const i = (u) => {
        const o = a.theme?.breakpoints?.values?.[u] || ko[u];
        return o
          ? a.theme?.breakpoints?.unit !== "px"
            ? { maxWidth: `${o}${a.theme.breakpoints.unit}` }
            : { maxWidth: o }
          : { maxWidth: qe(u) };
      };
      return on(a, a.maxWidth, i);
    }
    return null;
  };
Ps.filterProps = ["maxWidth"];
const lb = ee({ prop: "minWidth", transform: qe }),
  ib = ee({ prop: "height", transform: qe }),
  rb = ee({ prop: "maxHeight", transform: qe }),
  ob = ee({ prop: "minHeight", transform: qe });
ee({ prop: "size", cssProperty: "width", transform: qe });
ee({ prop: "size", cssProperty: "height", transform: qe });
const ub = ee({ prop: "boxSizing" });
Yo(ab, Ps, lb, ib, rb, ob, ub);
const ar = {
  border: { themeKey: "borders", transform: Ie },
  borderTop: { themeKey: "borders", transform: Ie },
  borderRight: { themeKey: "borders", transform: Ie },
  borderBottom: { themeKey: "borders", transform: Ie },
  borderLeft: { themeKey: "borders", transform: Ie },
  borderColor: { themeKey: "palette" },
  borderTopColor: { themeKey: "palette" },
  borderRightColor: { themeKey: "palette" },
  borderBottomColor: { themeKey: "palette" },
  borderLeftColor: { themeKey: "palette" },
  outline: { themeKey: "borders", transform: Ie },
  outlineColor: { themeKey: "palette" },
  borderRadius: { themeKey: "shape.borderRadius", style: Go },
  color: { themeKey: "palette", transform: $l },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: $l,
  },
  backgroundColor: { themeKey: "palette", transform: $l },
  p: { style: Wt },
  pt: { style: Wt },
  pr: { style: Wt },
  pb: { style: Wt },
  pl: { style: Wt },
  px: { style: Wt },
  py: { style: Wt },
  padding: { style: Wt },
  paddingTop: { style: Wt },
  paddingRight: { style: Wt },
  paddingBottom: { style: Wt },
  paddingLeft: { style: Wt },
  paddingX: { style: Wt },
  paddingY: { style: Wt },
  paddingInline: { style: Wt },
  paddingInlineStart: { style: Wt },
  paddingInlineEnd: { style: Wt },
  paddingBlock: { style: Wt },
  paddingBlockStart: { style: Wt },
  paddingBlockEnd: { style: Wt },
  m: { style: Jt },
  mt: { style: Jt },
  mr: { style: Jt },
  mb: { style: Jt },
  ml: { style: Jt },
  mx: { style: Jt },
  my: { style: Jt },
  margin: { style: Jt },
  marginTop: { style: Jt },
  marginRight: { style: Jt },
  marginBottom: { style: Jt },
  marginLeft: { style: Jt },
  marginX: { style: Jt },
  marginY: { style: Jt },
  marginInline: { style: Jt },
  marginInlineStart: { style: Jt },
  marginInlineEnd: { style: Jt },
  marginBlock: { style: Jt },
  marginBlockStart: { style: Jt },
  marginBlockEnd: { style: Jt },
  displayPrint: {
    cssProperty: !1,
    transform: (a) => ({ "@media print": { display: a } }),
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: { style: Vo },
  rowGap: { style: Qo },
  columnGap: { style: Xo },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: { themeKey: "zIndex" },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: { themeKey: "shadows" },
  width: { transform: qe },
  maxWidth: { style: Ps },
  minWidth: { transform: qe },
  height: { transform: qe },
  maxHeight: { transform: qe },
  minHeight: { transform: qe },
  boxSizing: {},
  font: { themeKey: "font" },
  fontFamily: { themeKey: "typography" },
  fontSize: { themeKey: "typography" },
  fontStyle: { themeKey: "typography" },
  fontWeight: { themeKey: "typography" },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: { cssProperty: !1, themeKey: "typography" },
};
function cb(...a) {
  const i = a.reduce((o, s) => o.concat(Object.keys(s)), []),
    u = new Set(i);
  return a.every((o) => u.size === Object.keys(o).length);
}
function sb(a, i) {
  return typeof a == "function" ? a(i) : a;
}
function fb() {
  function a(u, o, s, f) {
    const h = { [u]: o, theme: s },
      p = f[u];
    if (!p) return { [u]: o };
    const { cssProperty: v = u, themeKey: g, transform: S, style: E } = p;
    if (o == null) return null;
    if (g === "typography" && o === "inherit") return { [u]: o };
    const M = Lo(s, g) || {};
    return E
      ? E(h)
      : on(h, o, (O) => {
          let T = Bo(M, S, O);
          return (
            O === T &&
              typeof O == "string" &&
              (T = Bo(M, S, `${u}${O === "default" ? "" : ut(O)}`, O)),
            v === !1 ? T : { [v]: T }
          );
        });
  }
  function i(u) {
    const { sx: o, theme: s = {}, nested: f } = u || {};
    if (!o) return null;
    const h = s.unstable_sxConfig ?? ar;
    function p(v) {
      let g = v;
      if (typeof v == "function") g = v(s);
      else if (typeof v != "object") return v;
      if (!g) return null;
      const S = bp(s.breakpoints),
        E = Object.keys(S);
      let M = S;
      return (
        Object.keys(g).forEach((U) => {
          const O = sb(g[U], s);
          if (O != null)
            if (typeof O == "object")
              if (h[U]) M = Xi(M, a(U, O, s, h));
              else {
                const T = on({ theme: s }, O, (q) => ({ [U]: q }));
                cb(T, O)
                  ? (M[U] = i({ sx: O, theme: s, nested: !0 }))
                  : (M = Xi(M, T));
              }
            else M = Xi(M, a(U, O, s, h));
        }),
        !f && s.modularCssLayers
          ? { "@layer sx": z0(s, _s(E, M)) }
          : z0(s, _s(E, M))
      );
    }
    return Array.isArray(o) ? o.map(p) : p(o);
  }
  return i;
}
const ya = fb();
ya.filterProps = ["sx"];
function db(a, i) {
  const u = this;
  if (u.vars) {
    if (!u.colorSchemes?.[a] || typeof u.getColorSchemeSelector != "function")
      return {};
    let o = u.getColorSchemeSelector(a);
    return o === "&"
      ? i
      : ((o.includes("data-") || o.includes(".")) &&
          (o = `*:where(${o.replace(/\s*&$/, "")}) &`),
        { [o]: i });
  }
  return u.palette.mode === a ? i : {};
}
function Ko(a = {}, ...i) {
  const {
      breakpoints: u = {},
      palette: o = {},
      spacing: s,
      shape: f = {},
      ...h
    } = a,
    p = bv(u),
    v = xp(s);
  let g = Me(
    {
      breakpoints: p,
      direction: "ltr",
      components: {},
      palette: { mode: "light", ...o },
      spacing: v,
      shape: { ...Tv, ...f },
    },
    h
  );
  return (
    (g = Cv(g)),
    (g.applyStyles = db),
    (g = i.reduce((S, E) => Me(S, E), g)),
    (g.unstable_sxConfig = { ...ar, ...h?.unstable_sxConfig }),
    (g.unstable_sx = function (E) {
      return ya({ sx: E, theme: this });
    }),
    g
  );
}
function hb(a) {
  return Object.keys(a).length === 0;
}
function Is(a = null) {
  const i = j.useContext(tr);
  return !i || hb(i) ? a : i;
}
const mb = Ko();
function Zo(a = mb) {
  return Is(a);
}
function Ss(a) {
  const i = ga(a);
  return a !== i && i.styles
    ? (i.styles.match(/^@layer\s+[^{]*$/) ||
        (i.styles = `@layer global{${i.styles}}`),
      i)
    : a;
}
function Cp({ styles: a, themeId: i, defaultTheme: u = {} }) {
  const o = Zo(u),
    s = (i && o[i]) || o;
  let f = typeof a == "function" ? a(s) : a;
  return (
    s.modularCssLayers &&
      (Array.isArray(f)
        ? (f = f.map((h) => Ss(typeof h == "function" ? h(s) : h)))
        : (f = Ss(f))),
    N.jsx(pp, { styles: f })
  );
}
const pb = (a) => {
  const i = { systemProps: {}, otherProps: {} },
    u = a?.theme?.unstable_sxConfig ?? ar;
  return (
    Object.keys(a).forEach((o) => {
      u[o] ? (i.systemProps[o] = a[o]) : (i.otherProps[o] = a[o]);
    }),
    i
  );
};
function tf(a) {
  const { sx: i, ...u } = a,
    { systemProps: o, otherProps: s } = pb(u);
  let f;
  return (
    Array.isArray(i)
      ? (f = [o, ...i])
      : typeof i == "function"
      ? (f = (...h) => {
          const p = i(...h);
          return Cn(p) ? { ...o, ...p } : o;
        })
      : (f = { ...o, ...i }),
    { ...s, sx: f }
  );
}
const w0 = (a) => a,
  gb = () => {
    let a = w0;
    return {
      configure(i) {
        a = i;
      },
      generate(i) {
        return a(i);
      },
      reset() {
        a = w0;
      },
    };
  },
  Tp = gb();
function Ep(a) {
  var i,
    u,
    o = "";
  if (typeof a == "string" || typeof a == "number") o += a;
  else if (typeof a == "object")
    if (Array.isArray(a)) {
      var s = a.length;
      for (i = 0; i < s; i++)
        a[i] && (u = Ep(a[i])) && (o && (o += " "), (o += u));
    } else for (u in a) a[u] && (o && (o += " "), (o += u));
  return o;
}
function qt() {
  for (var a, i, u = 0, o = "", s = arguments.length; u < s; u++)
    (a = arguments[u]) && (i = Ep(a)) && (o && (o += " "), (o += i));
  return o;
}
function yb(a = {}) {
  const {
      themeId: i,
      defaultTheme: u,
      defaultClassName: o = "MuiBox-root",
      generateClassName: s,
    } = a,
    f = gp("div", {
      shouldForwardProp: (p) => p !== "theme" && p !== "sx" && p !== "as",
    })(ya);
  return j.forwardRef(function (v, g) {
    const S = Zo(u),
      { className: E, component: M = "div", ...U } = tf(v);
    return N.jsx(f, {
      as: M,
      ref: g,
      className: qt(E, s ? s(o) : o),
      theme: (i && S[i]) || S,
      ...U,
    });
  });
}
const vb = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected",
};
function un(a, i, u = "Mui") {
  const o = vb[i];
  return o ? `${u}-${o}` : `${Tp.generate(a)}-${i}`;
}
function cn(a, i, u = "Mui") {
  const o = {};
  return (
    i.forEach((s) => {
      o[s] = un(a, s, u);
    }),
    o
  );
}
function Ap(a) {
  const { variants: i, ...u } = a,
    o = { variants: i, style: ga(u), isProcessed: !0 };
  return (
    o.style === u ||
      (i &&
        i.forEach((s) => {
          typeof s.style != "function" && (s.style = ga(s.style));
        })),
    o
  );
}
const bb = Ko();
function xs(a) {
  return a !== "ownerState" && a !== "theme" && a !== "sx" && a !== "as";
}
function La(a, i) {
  return (
    i &&
      a &&
      typeof a == "object" &&
      a.styles &&
      !a.styles.startsWith("@layer") &&
      (a.styles = `@layer ${i}{${String(a.styles)}}`),
    a
  );
}
function Sb(a) {
  return a ? (i, u) => u[a] : null;
}
function xb(a, i, u) {
  a.theme = Tb(a.theme) ? u : a.theme[i] || a.theme;
}
function Ro(a, i, u) {
  const o = typeof i == "function" ? i(a) : i;
  if (Array.isArray(o)) return o.flatMap((s) => Ro(a, s, u));
  if (Array.isArray(o?.variants)) {
    let s;
    if (o.isProcessed) s = u ? La(o.style, u) : o.style;
    else {
      const { variants: f, ...h } = o;
      s = u ? La(ga(h), u) : h;
    }
    return Mp(a, o.variants, [s], u);
  }
  return o?.isProcessed
    ? u
      ? La(ga(o.style), u)
      : o.style
    : u
    ? La(ga(o), u)
    : o;
}
function Mp(a, i, u = [], o = void 0) {
  let s;
  t: for (let f = 0; f < i.length; f += 1) {
    const h = i[f];
    if (typeof h.props == "function") {
      if (
        ((s ??= { ...a, ...a.ownerState, ownerState: a.ownerState }),
        !h.props(s))
      )
        continue;
    } else
      for (const p in h.props)
        if (a[p] !== h.props[p] && a.ownerState?.[p] !== h.props[p]) continue t;
    typeof h.style == "function"
      ? ((s ??= { ...a, ...a.ownerState, ownerState: a.ownerState }),
        u.push(o ? La(ga(h.style(s)), o) : h.style(s)))
      : u.push(o ? La(ga(h.style), o) : h.style);
  }
  return u;
}
function Op(a = {}) {
  const {
    themeId: i,
    defaultTheme: u = bb,
    rootShouldForwardProp: o = xs,
    slotShouldForwardProp: s = xs,
  } = a;
  function f(p) {
    xb(p, i, u);
  }
  return (p, v = {}) => {
    pv(p, (J) => J.filter((P) => P !== ya));
    const {
        name: g,
        slot: S,
        skipVariantsResolver: E,
        skipSx: M,
        overridesResolver: U = Sb(Ab(S)),
        ...O
      } = v,
      T = (g && g.startsWith("Mui")) || S ? "components" : "custom",
      q = E !== void 0 ? E : (S && S !== "Root" && S !== "root") || !1,
      Q = M || !1;
    let F = xs;
    S === "Root" || S === "root"
      ? (F = o)
      : S
      ? (F = s)
      : Eb(p) && (F = void 0);
    const V = gp(p, { shouldForwardProp: F, label: Cb(), ...O }),
      G = (J) => {
        if (J.__emotion_real === J) return J;
        if (typeof J == "function")
          return function (tt) {
            return Ro(tt, J, tt.theme.modularCssLayers ? T : void 0);
          };
        if (Cn(J)) {
          const P = Ap(J);
          return function (I) {
            return P.variants
              ? Ro(I, P, I.theme.modularCssLayers ? T : void 0)
              : I.theme.modularCssLayers
              ? La(P.style, T)
              : P.style;
          };
        }
        return J;
      },
      _ = (...J) => {
        const P = [],
          tt = J.map(G),
          I = [];
        if (
          (P.push(f),
          g &&
            U &&
            I.push(function (it) {
              const mt = it.theme.components?.[g]?.styleOverrides;
              if (!mt) return null;
              const B = {};
              for (const K in mt)
                B[K] = Ro(
                  it,
                  mt[K],
                  it.theme.modularCssLayers ? "theme" : void 0
                );
              return U(it, B);
            }),
          g &&
            !q &&
            I.push(function (it) {
              const mt = it.theme?.components?.[g]?.variants;
              return mt
                ? Mp(it, mt, [], it.theme.modularCssLayers ? "theme" : void 0)
                : null;
            }),
          Q || I.push(ya),
          Array.isArray(tt[0]))
        ) {
          const et = tt.shift(),
            it = new Array(P.length).fill(""),
            At = new Array(I.length).fill("");
          let mt;
          (mt = [...it, ...et, ...At]),
            (mt.raw = [...it, ...et.raw, ...At]),
            P.unshift(mt);
        }
        const y = [...P, ...tt, ...I],
          X = V(...y);
        return p.muiName && (X.muiName = p.muiName), X;
      };
    return V.withConfig && (_.withConfig = V.withConfig), _;
  };
}
function Cb(a, i) {
  return void 0;
}
function Tb(a) {
  for (const i in a) return !1;
  return !0;
}
function Eb(a) {
  return typeof a == "string" && a.charCodeAt(0) > 96;
}
function Ab(a) {
  return a && a.charAt(0).toLowerCase() + a.slice(1);
}
const Mb = Op();
function Wi(a, i, u = !1) {
  const o = { ...i };
  for (const s in a)
    if (Object.prototype.hasOwnProperty.call(a, s)) {
      const f = s;
      if (f === "components" || f === "slots") o[f] = { ...a[f], ...o[f] };
      else if (f === "componentsProps" || f === "slotProps") {
        const h = a[f],
          p = i[f];
        if (!p) o[f] = h || {};
        else if (!h) o[f] = p;
        else {
          o[f] = { ...p };
          for (const v in h)
            if (Object.prototype.hasOwnProperty.call(h, v)) {
              const g = v;
              o[f][g] = Wi(h[g], p[g], u);
            }
        }
      } else
        f === "className" && u && i.className
          ? (o.className = qt(a?.className, i?.className))
          : f === "style" && u && i.style
          ? (o.style = { ...a?.style, ...i?.style })
          : o[f] === void 0 && (o[f] = a[f]);
    }
  return o;
}
function Ob(a) {
  const { theme: i, name: u, props: o } = a;
  return !i ||
    !i.components ||
    !i.components[u] ||
    !i.components[u].defaultProps
    ? o
    : Wi(i.components[u].defaultProps, o);
}
function Rb({ props: a, name: i, defaultTheme: u, themeId: o }) {
  let s = Zo(u);
  return o && (s = s[o] || s), Ob({ theme: s, name: i, props: a });
}
const ef = typeof window < "u" ? j.useLayoutEffect : j.useEffect;
function zb(a, i = Number.MIN_SAFE_INTEGER, u = Number.MAX_SAFE_INTEGER) {
  return Math.max(i, Math.min(a, u));
}
function nf(a, i = 0, u = 1) {
  return zb(a, i, u);
}
function _b(a) {
  a = a.slice(1);
  const i = new RegExp(`.{1,${a.length >= 6 ? 2 : 1}}`, "g");
  let u = a.match(i);
  return (
    u && u[0].length === 1 && (u = u.map((o) => o + o)),
    u
      ? `rgb${u.length === 4 ? "a" : ""}(${u
          .map((o, s) =>
            s < 3
              ? parseInt(o, 16)
              : Math.round((parseInt(o, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function va(a) {
  if (a.type) return a;
  if (a.charAt(0) === "#") return va(_b(a));
  const i = a.indexOf("("),
    u = a.substring(0, i);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(u))
    throw new Error(Ga(9, a));
  let o = a.substring(i + 1, a.length - 1),
    s;
  if (u === "color") {
    if (
      ((o = o.split(" ")),
      (s = o.shift()),
      o.length === 4 && o[3].charAt(0) === "/" && (o[3] = o[3].slice(1)),
      !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(
        s
      ))
    )
      throw new Error(Ga(10, s));
  } else o = o.split(",");
  return (
    (o = o.map((f) => parseFloat(f))), { type: u, values: o, colorSpace: s }
  );
}
const Db = (a) => {
    const i = va(a);
    return i.values
      .slice(0, 3)
      .map((u, o) => (i.type.includes("hsl") && o !== 0 ? `${u}%` : u))
      .join(" ");
  },
  Gi = (a, i) => {
    try {
      return Db(a);
    } catch {
      return a;
    }
  };
function Jo(a) {
  const { type: i, colorSpace: u } = a;
  let { values: o } = a;
  return (
    i.includes("rgb")
      ? (o = o.map((s, f) => (f < 3 ? parseInt(s, 10) : s)))
      : i.includes("hsl") && ((o[1] = `${o[1]}%`), (o[2] = `${o[2]}%`)),
    i.includes("color") ? (o = `${u} ${o.join(" ")}`) : (o = `${o.join(", ")}`),
    `${i}(${o})`
  );
}
function Rp(a) {
  a = va(a);
  const { values: i } = a,
    u = i[0],
    o = i[1] / 100,
    s = i[2] / 100,
    f = o * Math.min(s, 1 - s),
    h = (g, S = (g + u / 30) % 12) =>
      s - f * Math.max(Math.min(S - 3, 9 - S, 1), -1);
  let p = "rgb";
  const v = [
    Math.round(h(0) * 255),
    Math.round(h(8) * 255),
    Math.round(h(4) * 255),
  ];
  return (
    a.type === "hsla" && ((p += "a"), v.push(i[3])), Jo({ type: p, values: v })
  );
}
function Ds(a) {
  a = va(a);
  let i = a.type === "hsl" || a.type === "hsla" ? va(Rp(a)).values : a.values;
  return (
    (i = i.map(
      (u) => (
        a.type !== "color" && (u /= 255),
        u <= 0.03928 ? u / 12.92 : ((u + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * i[0] + 0.7152 * i[1] + 0.0722 * i[2]).toFixed(3))
  );
}
function wb(a, i) {
  const u = Ds(a),
    o = Ds(i);
  return (Math.max(u, o) + 0.05) / (Math.min(u, o) + 0.05);
}
function pe(a, i) {
  return (
    (a = va(a)),
    (i = nf(i)),
    (a.type === "rgb" || a.type === "hsl") && (a.type += "a"),
    a.type === "color" ? (a.values[3] = `/${i}`) : (a.values[3] = i),
    Jo(a)
  );
}
function Co(a, i, u) {
  try {
    return pe(a, i);
  } catch {
    return a;
  }
}
function af(a, i) {
  if (((a = va(a)), (i = nf(i)), a.type.includes("hsl"))) a.values[2] *= 1 - i;
  else if (a.type.includes("rgb") || a.type.includes("color"))
    for (let u = 0; u < 3; u += 1) a.values[u] *= 1 - i;
  return Jo(a);
}
function kt(a, i, u) {
  try {
    return af(a, i);
  } catch {
    return a;
  }
}
function lf(a, i) {
  if (((a = va(a)), (i = nf(i)), a.type.includes("hsl")))
    a.values[2] += (100 - a.values[2]) * i;
  else if (a.type.includes("rgb"))
    for (let u = 0; u < 3; u += 1) a.values[u] += (255 - a.values[u]) * i;
  else if (a.type.includes("color"))
    for (let u = 0; u < 3; u += 1) a.values[u] += (1 - a.values[u]) * i;
  return Jo(a);
}
function Lt(a, i, u) {
  try {
    return lf(a, i);
  } catch {
    return a;
  }
}
function Bb(a, i = 0.15) {
  return Ds(a) > 0.5 ? af(a, i) : lf(a, i);
}
function To(a, i, u) {
  try {
    return Bb(a, i);
  } catch {
    return a;
  }
}
const zp = j.createContext(null);
function rf() {
  return j.useContext(zp);
}
const Nb = typeof Symbol == "function" && Symbol.for,
  jb = Nb ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Ub(a, i) {
  return typeof i == "function" ? i(a) : { ...a, ...i };
}
function Hb(a) {
  const { children: i, theme: u } = a,
    o = rf(),
    s = j.useMemo(() => {
      const f = o === null ? { ...u } : Ub(o, u);
      return f != null && (f[jb] = o !== null), f;
    }, [u, o]);
  return N.jsx(zp.Provider, { value: s, children: i });
}
const $b = j.createContext();
function kb({ value: a, ...i }) {
  return N.jsx($b.Provider, { value: a ?? !0, ...i });
}
const _p = j.createContext(void 0);
function Lb({ value: a, children: i }) {
  return N.jsx(_p.Provider, { value: a, children: i });
}
function qb(a) {
  const { theme: i, name: u, props: o } = a;
  if (!i || !i.components || !i.components[u]) return o;
  const s = i.components[u];
  return s.defaultProps
    ? Wi(s.defaultProps, o, i.components.mergeClassNameAndStyle)
    : !s.styleOverrides && !s.variants
    ? Wi(s, o, i.components.mergeClassNameAndStyle)
    : o;
}
function Yb({ props: a, name: i }) {
  const u = j.useContext(_p);
  return qb({ props: a, name: i, theme: { components: u } });
}
let B0 = 0;
function Gb(a) {
  const [i, u] = j.useState(a),
    o = a || i;
  return (
    j.useEffect(() => {
      i == null && ((B0 += 1), u(`mui-${B0}`));
    }, [i]),
    o
  );
}
const Vb = { ...As },
  N0 = Vb.useId;
function Dp(a) {
  if (N0 !== void 0) {
    const i = N0();
    return a ?? i;
  }
  return Gb(a);
}
function Xb(a) {
  const i = Is(),
    u = Dp() || "",
    { modularCssLayers: o } = a;
  let s = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return (
    !o || i !== null
      ? (s = "")
      : typeof o == "string"
      ? (s = o.replace(/mui(?!\.)/g, s))
      : (s = `@layer ${s};`),
    ef(() => {
      const f = document.querySelector("head");
      if (!f) return;
      const h = f.firstChild;
      if (s) {
        if (
          h &&
          h.hasAttribute?.("data-mui-layer-order") &&
          h.getAttribute("data-mui-layer-order") === u
        )
          return;
        const p = document.createElement("style");
        p.setAttribute("data-mui-layer-order", u),
          (p.textContent = s),
          f.prepend(p);
      } else f.querySelector(`style[data-mui-layer-order="${u}"]`)?.remove();
    }, [s, u]),
    s ? N.jsx(Cp, { styles: s }) : null
  );
}
const j0 = {};
function U0(a, i, u, o = !1) {
  return j.useMemo(() => {
    const s = (a && i[a]) || i;
    if (typeof u == "function") {
      const f = u(s),
        h = a ? { ...i, [a]: f } : f;
      return o ? () => h : h;
    }
    return a ? { ...i, [a]: u } : { ...i, ...u };
  }, [a, i, u, o]);
}
function wp(a) {
  const { children: i, theme: u, themeId: o } = a,
    s = Is(j0),
    f = rf() || j0,
    h = U0(o, s, u),
    p = U0(o, f, u, !0),
    v = (o ? h[o] : h).direction === "rtl",
    g = Xb(h);
  return N.jsx(Hb, {
    theme: p,
    children: N.jsx(tr.Provider, {
      value: h,
      children: N.jsx(kb, {
        value: v,
        children: N.jsxs(Lb, {
          value: o ? h[o].components : h.components,
          children: [g, i],
        }),
      }),
    }),
  });
}
const H0 = { theme: void 0 };
function Qb(a) {
  let i, u;
  return function (s) {
    let f = i;
    return (
      (f === void 0 || s.theme !== u) &&
        ((H0.theme = s.theme), (f = Ap(a(H0))), (i = f), (u = s.theme)),
      f
    );
  };
}
const of = "mode",
  uf = "color-scheme",
  Kb = "data-color-scheme";
function Zb(a) {
  const {
    defaultMode: i = "system",
    defaultLightColorScheme: u = "light",
    defaultDarkColorScheme: o = "dark",
    modeStorageKey: s = of,
    colorSchemeStorageKey: f = uf,
    attribute: h = Kb,
    colorSchemeNode: p = "document.documentElement",
    nonce: v,
  } = a || {};
  let g = "",
    S = h;
  if (
    (h === "class" && (S = ".%s"),
    h === "data" && (S = "[data-%s]"),
    S.startsWith("."))
  ) {
    const M = S.substring(1);
    g += `${p}.classList.remove('${M}'.replace('%s', light), '${M}'.replace('%s', dark));
      ${p}.classList.add('${M}'.replace('%s', colorScheme));`;
  }
  const E = S.match(/\[([^\]]+)\]/);
  if (E) {
    const [M, U] = E[1].split("=");
    U ||
      (g += `${p}.removeAttribute('${M}'.replace('%s', light));
      ${p}.removeAttribute('${M}'.replace('%s', dark));`),
      (g += `
      ${p}.setAttribute('${M}'.replace('%s', colorScheme), ${
        U ? `${U}.replace('%s', colorScheme)` : '""'
      });`);
  } else g += `${p}.setAttribute('${S}', colorScheme);`;
  return N.jsx(
    "script",
    {
      suppressHydrationWarning: !0,
      nonce: typeof window > "u" ? v : "",
      dangerouslySetInnerHTML: {
        __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${s}') || '${i}';
  const dark = localStorage.getItem('${f}-dark') || '${o}';
  const light = localStorage.getItem('${f}-light') || '${u}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${g}
  }
} catch(e){}})();`,
      },
    },
    "mui-color-scheme-init"
  );
}
function Jb() {}
const Wb = ({ key: a, storageWindow: i }) => (
  !i && typeof window < "u" && (i = window),
  {
    get(u) {
      if (typeof window > "u") return;
      if (!i) return u;
      let o;
      try {
        o = i.localStorage.getItem(a);
      } catch {}
      return o || u;
    },
    set: (u) => {
      if (i)
        try {
          i.localStorage.setItem(a, u);
        } catch {}
    },
    subscribe: (u) => {
      if (!i) return Jb;
      const o = (s) => {
        const f = s.newValue;
        s.key === a && u(f);
      };
      return (
        i.addEventListener("storage", o),
        () => {
          i.removeEventListener("storage", o);
        }
      );
    },
  }
);
function Cs() {}
function $0(a) {
  if (
    typeof window < "u" &&
    typeof window.matchMedia == "function" &&
    a === "system"
  )
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
}
function Bp(a, i) {
  if (a.mode === "light" || (a.mode === "system" && a.systemMode === "light"))
    return i("light");
  if (a.mode === "dark" || (a.mode === "system" && a.systemMode === "dark"))
    return i("dark");
}
function Fb(a) {
  return Bp(a, (i) => {
    if (i === "light") return a.lightColorScheme;
    if (i === "dark") return a.darkColorScheme;
  });
}
function Pb(a) {
  const {
      defaultMode: i = "light",
      defaultLightColorScheme: u,
      defaultDarkColorScheme: o,
      supportedColorSchemes: s = [],
      modeStorageKey: f = of,
      colorSchemeStorageKey: h = uf,
      storageWindow: p = typeof window > "u" ? void 0 : window,
      storageManager: v = Wb,
      noSsr: g = !1,
    } = a,
    S = s.join(","),
    E = s.length > 1,
    M = j.useMemo(() => v?.({ key: f, storageWindow: p }), [v, f, p]),
    U = j.useMemo(
      () => v?.({ key: `${h}-light`, storageWindow: p }),
      [v, h, p]
    ),
    O = j.useMemo(() => v?.({ key: `${h}-dark`, storageWindow: p }), [v, h, p]),
    [T, q] = j.useState(() => {
      const tt = M?.get(i) || i,
        I = U?.get(u) || u,
        y = O?.get(o) || o;
      return {
        mode: tt,
        systemMode: $0(tt),
        lightColorScheme: I,
        darkColorScheme: y,
      };
    }),
    [Q, F] = j.useState(g || !E);
  j.useEffect(() => {
    F(!0);
  }, []);
  const V = Fb(T),
    G = j.useCallback(
      (tt) => {
        q((I) => {
          if (tt === I.mode) return I;
          const y = tt ?? i;
          return M?.set(y), { ...I, mode: y, systemMode: $0(y) };
        });
      },
      [M, i]
    ),
    _ = j.useCallback(
      (tt) => {
        tt
          ? typeof tt == "string"
            ? tt && !S.includes(tt)
              ? console.error(
                  `\`${tt}\` does not exist in \`theme.colorSchemes\`.`
                )
              : q((I) => {
                  const y = { ...I };
                  return (
                    Bp(I, (X) => {
                      X === "light" && (U?.set(tt), (y.lightColorScheme = tt)),
                        X === "dark" && (O?.set(tt), (y.darkColorScheme = tt));
                    }),
                    y
                  );
                })
            : q((I) => {
                const y = { ...I },
                  X = tt.light === null ? u : tt.light,
                  et = tt.dark === null ? o : tt.dark;
                return (
                  X &&
                    (S.includes(X)
                      ? ((y.lightColorScheme = X), U?.set(X))
                      : console.error(
                          `\`${X}\` does not exist in \`theme.colorSchemes\`.`
                        )),
                  et &&
                    (S.includes(et)
                      ? ((y.darkColorScheme = et), O?.set(et))
                      : console.error(
                          `\`${et}\` does not exist in \`theme.colorSchemes\`.`
                        )),
                  y
                );
              })
          : q(
              (I) => (
                U?.set(u),
                O?.set(o),
                { ...I, lightColorScheme: u, darkColorScheme: o }
              )
            );
      },
      [S, U, O, u, o]
    ),
    J = j.useCallback(
      (tt) => {
        T.mode === "system" &&
          q((I) => {
            const y = tt?.matches ? "dark" : "light";
            return I.systemMode === y ? I : { ...I, systemMode: y };
          });
      },
      [T.mode]
    ),
    P = j.useRef(J);
  return (
    (P.current = J),
    j.useEffect(() => {
      if (typeof window.matchMedia != "function" || !E) return;
      const tt = (...y) => P.current(...y),
        I = window.matchMedia("(prefers-color-scheme: dark)");
      return (
        I.addListener(tt),
        tt(I),
        () => {
          I.removeListener(tt);
        }
      );
    }, [E]),
    j.useEffect(() => {
      if (E) {
        const tt =
            M?.subscribe((X) => {
              (!X || ["light", "dark", "system"].includes(X)) && G(X || i);
            }) || Cs,
          I =
            U?.subscribe((X) => {
              (!X || S.match(X)) && _({ light: X });
            }) || Cs,
          y =
            O?.subscribe((X) => {
              (!X || S.match(X)) && _({ dark: X });
            }) || Cs;
        return () => {
          tt(), I(), y();
        };
      }
    }, [_, G, S, i, p, E, M, U, O]),
    {
      ...T,
      mode: Q ? T.mode : void 0,
      systemMode: Q ? T.systemMode : void 0,
      colorScheme: Q ? V : void 0,
      setMode: G,
      setColorScheme: _,
    }
  );
}
const Ib =
  "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function tS(a) {
  const {
      themeId: i,
      theme: u = {},
      modeStorageKey: o = of,
      colorSchemeStorageKey: s = uf,
      disableTransitionOnChange: f = !1,
      defaultColorScheme: h,
      resolveTheme: p,
    } = a,
    v = {
      allColorSchemes: [],
      colorScheme: void 0,
      darkColorScheme: void 0,
      lightColorScheme: void 0,
      mode: void 0,
      setColorScheme: () => {},
      setMode: () => {},
      systemMode: void 0,
    },
    g = j.createContext(void 0),
    S = () => j.useContext(g) || v,
    E = {},
    M = {};
  function U(Q) {
    const {
        children: F,
        theme: V,
        modeStorageKey: G = o,
        colorSchemeStorageKey: _ = s,
        disableTransitionOnChange: J = f,
        storageManager: P,
        storageWindow: tt = typeof window > "u" ? void 0 : window,
        documentNode: I = typeof document > "u" ? void 0 : document,
        colorSchemeNode: y = typeof document > "u"
          ? void 0
          : document.documentElement,
        disableNestedContext: X = !1,
        disableStyleSheetGeneration: et = !1,
        defaultMode: it = "system",
        forceThemeRerender: At = !1,
        noSsr: mt,
      } = Q,
      B = j.useRef(!1),
      K = rf(),
      lt = j.useContext(g),
      ct = !!lt && !X,
      x = j.useMemo(() => V || (typeof u == "function" ? u() : u), [V]),
      L = x[i],
      Z = L || x,
      { colorSchemes: W = E, components: rt = M, cssVarPrefix: gt } = Z,
      nt = Object.keys(W)
        .filter((se) => !!W[se])
        .join(","),
      Mt = j.useMemo(() => nt.split(","), [nt]),
      Dt = typeof h == "string" ? h : h.light,
      Be = typeof h == "string" ? h : h.dark,
      Sa =
        W[Dt] && W[Be]
          ? it
          : W[Z.defaultColorScheme]?.palette?.mode || Z.palette?.mode,
      {
        mode: Gn,
        setMode: Vn,
        systemMode: Xn,
        lightColorScheme: fn,
        darkColorScheme: Xa,
        colorScheme: ql,
        setColorScheme: ce,
      } = Pb({
        supportedColorSchemes: Mt,
        defaultLightColorScheme: Dt,
        defaultDarkColorScheme: Be,
        modeStorageKey: G,
        colorSchemeStorageKey: _,
        defaultMode: Sa,
        storageManager: P,
        storageWindow: tt,
        noSsr: mt,
      });
    let nn = Gn,
      Se = ql;
    ct && ((nn = lt.mode), (Se = lt.colorScheme));
    let dn = Se || Z.defaultColorScheme;
    Z.vars && !At && (dn = Z.defaultColorScheme);
    const hn = j.useMemo(() => {
        const se = Z.generateThemeVars?.() || Z.vars,
          Ct = {
            ...Z,
            components: rt,
            colorSchemes: W,
            cssVarPrefix: gt,
            vars: se,
          };
        if (
          (typeof Ct.generateSpacing == "function" &&
            (Ct.spacing = Ct.generateSpacing()),
          dn)
        ) {
          const Ft = W[dn];
          Ft &&
            typeof Ft == "object" &&
            Object.keys(Ft).forEach((Gt) => {
              Ft[Gt] && typeof Ft[Gt] == "object"
                ? (Ct[Gt] = { ...Ct[Gt], ...Ft[Gt] })
                : (Ct[Gt] = Ft[Gt]);
            });
        }
        return p ? p(Ct) : Ct;
      }, [Z, dn, rt, W, gt]),
      ht = Z.colorSchemeSelector;
    ef(() => {
      if (Se && y && ht && ht !== "media") {
        const se = ht;
        let Ct = ht;
        if (
          (se === "class" && (Ct = ".%s"),
          se === "data" && (Ct = "[data-%s]"),
          se?.startsWith("data-") &&
            !se.includes("%s") &&
            (Ct = `[${se}="%s"]`),
          Ct.startsWith("."))
        )
          y.classList.remove(
            ...Mt.map((Ft) => Ct.substring(1).replace("%s", Ft))
          ),
            y.classList.add(Ct.substring(1).replace("%s", Se));
        else {
          const Ft = Ct.replace("%s", Se).match(/\[([^\]]+)\]/);
          if (Ft) {
            const [Gt, Yl] = Ft[1].split("=");
            Yl ||
              Mt.forEach((Fo) => {
                y.removeAttribute(Gt.replace(Se, Fo));
              }),
              y.setAttribute(Gt, Yl ? Yl.replace(/"|'/g, "") : "");
          } else y.setAttribute(Ct, Se);
        }
      }
    }, [Se, ht, y, Mt]),
      j.useEffect(() => {
        let se;
        if (J && B.current && I) {
          const Ct = I.createElement("style");
          Ct.appendChild(I.createTextNode(Ib)),
            I.head.appendChild(Ct),
            window.getComputedStyle(I.body),
            (se = setTimeout(() => {
              I.head.removeChild(Ct);
            }, 1));
        }
        return () => {
          clearTimeout(se);
        };
      }, [Se, J, I]),
      j.useEffect(
        () => (
          (B.current = !0),
          () => {
            B.current = !1;
          }
        ),
        []
      );
    const lr = j.useMemo(
      () => ({
        allColorSchemes: Mt,
        colorScheme: Se,
        darkColorScheme: Xa,
        lightColorScheme: fn,
        mode: nn,
        setColorScheme: ce,
        setMode: Vn,
        systemMode: Xn,
      }),
      [Mt, Se, Xa, fn, nn, ce, Vn, Xn, hn.colorSchemeSelector]
    );
    let ir = !0;
    (et || Z.cssVariables === !1 || (ct && K?.cssVarPrefix === gt)) &&
      (ir = !1);
    const rr = N.jsxs(j.Fragment, {
      children: [
        N.jsx(wp, { themeId: L ? i : void 0, theme: hn, children: F }),
        ir && N.jsx(pp, { styles: hn.generateStyleSheets?.() || [] }),
      ],
    });
    return ct ? rr : N.jsx(g.Provider, { value: lr, children: rr });
  }
  const O = typeof h == "string" ? h : h.light,
    T = typeof h == "string" ? h : h.dark;
  return {
    CssVarsProvider: U,
    useColorScheme: S,
    getInitColorSchemeScript: (Q) =>
      Zb({
        colorSchemeStorageKey: s,
        defaultLightColorScheme: O,
        defaultDarkColorScheme: T,
        modeStorageKey: o,
        ...Q,
      }),
  };
}
function eS(a = "") {
  function i(...o) {
    if (!o.length) return "";
    const s = o[0];
    return typeof s == "string" &&
      !s.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/
      )
      ? `, var(--${a ? `${a}-` : ""}${s}${i(...o.slice(1))})`
      : `, ${s}`;
  }
  return (o, ...s) => `var(--${a ? `${a}-` : ""}${o}${i(...s)})`;
}
const k0 = (a, i, u, o = []) => {
    let s = a;
    i.forEach((f, h) => {
      h === i.length - 1
        ? Array.isArray(s)
          ? (s[Number(f)] = u)
          : s && typeof s == "object" && (s[f] = u)
        : s &&
          typeof s == "object" &&
          (s[f] || (s[f] = o.includes(f) ? [] : {}), (s = s[f]));
    });
  },
  nS = (a, i, u) => {
    function o(s, f = [], h = []) {
      Object.entries(s).forEach(([p, v]) => {
        (!u || (u && !u([...f, p]))) &&
          v != null &&
          (typeof v == "object" && Object.keys(v).length > 0
            ? o(v, [...f, p], Array.isArray(v) ? [...h, p] : h)
            : i([...f, p], v, h));
      });
    }
    o(a);
  },
  aS = (a, i) =>
    typeof i == "number"
      ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((o) =>
          a.includes(o)
        ) || a[a.length - 1].toLowerCase().includes("opacity")
        ? i
        : `${i}px`
      : i;
function Ts(a, i) {
  const { prefix: u, shouldSkipGeneratingVar: o } = i || {},
    s = {},
    f = {},
    h = {};
  return (
    nS(
      a,
      (p, v, g) => {
        if (
          (typeof v == "string" || typeof v == "number") &&
          (!o || !o(p, v))
        ) {
          const S = `--${u ? `${u}-` : ""}${p.join("-")}`,
            E = aS(p, v);
          Object.assign(s, { [S]: E }),
            k0(f, p, `var(${S})`, g),
            k0(h, p, `var(${S}, ${E})`, g);
        }
      },
      (p) => p[0] === "vars"
    ),
    { css: s, vars: f, varsWithDefaults: h }
  );
}
function lS(a, i = {}) {
  const {
      getSelector: u = q,
      disableCssColorScheme: o,
      colorSchemeSelector: s,
    } = i,
    {
      colorSchemes: f = {},
      components: h,
      defaultColorScheme: p = "light",
      ...v
    } = a,
    { vars: g, css: S, varsWithDefaults: E } = Ts(v, i);
  let M = E;
  const U = {},
    { [p]: O, ...T } = f;
  if (
    (Object.entries(T || {}).forEach(([V, G]) => {
      const { vars: _, css: J, varsWithDefaults: P } = Ts(G, i);
      (M = Me(M, P)), (U[V] = { css: J, vars: _ });
    }),
    O)
  ) {
    const { css: V, vars: G, varsWithDefaults: _ } = Ts(O, i);
    (M = Me(M, _)), (U[p] = { css: V, vars: G });
  }
  function q(V, G) {
    let _ = s;
    if (
      (s === "class" && (_ = ".%s"),
      s === "data" && (_ = "[data-%s]"),
      s?.startsWith("data-") && !s.includes("%s") && (_ = `[${s}="%s"]`),
      V)
    ) {
      if (_ === "media")
        return a.defaultColorScheme === V
          ? ":root"
          : {
              [`@media (prefers-color-scheme: ${f[V]?.palette?.mode || V})`]: {
                ":root": G,
              },
            };
      if (_)
        return a.defaultColorScheme === V
          ? `:root, ${_.replace("%s", String(V))}`
          : _.replace("%s", String(V));
    }
    return ":root";
  }
  return {
    vars: M,
    generateThemeVars: () => {
      let V = { ...g };
      return (
        Object.entries(U).forEach(([, { vars: G }]) => {
          V = Me(V, G);
        }),
        V
      );
    },
    generateStyleSheets: () => {
      const V = [],
        G = a.defaultColorScheme || "light";
      function _(tt, I) {
        Object.keys(I).length &&
          V.push(typeof tt == "string" ? { [tt]: { ...I } } : tt);
      }
      _(u(void 0, { ...S }), S);
      const { [G]: J, ...P } = U;
      if (J) {
        const { css: tt } = J,
          I = f[G]?.palette?.mode,
          y = !o && I ? { colorScheme: I, ...tt } : { ...tt };
        _(u(G, { ...y }), y);
      }
      return (
        Object.entries(P).forEach(([tt, { css: I }]) => {
          const y = f[tt]?.palette?.mode,
            X = !o && y ? { colorScheme: y, ...I } : { ...I };
          _(u(tt, { ...X }), X);
        }),
        V
      );
    },
  };
}
function iS(a) {
  return function (u) {
    return a === "media"
      ? `@media (prefers-color-scheme: ${u})`
      : a
      ? a.startsWith("data-") && !a.includes("%s")
        ? `[${a}="${u}"] &`
        : a === "class"
        ? `.${u} &`
        : a === "data"
        ? `[data-${u}] &`
        : `${a.replace("%s", u)} &`
      : "&";
  };
}
function An(a, i, u = void 0) {
  const o = {};
  for (const s in a) {
    const f = a[s];
    let h = "",
      p = !0;
    for (let v = 0; v < f.length; v += 1) {
      const g = f[v];
      g &&
        ((h += (p === !0 ? "" : " ") + i(g)),
        (p = !1),
        u && u[g] && (h += " " + u[g]));
    }
    o[s] = h;
  }
  return o;
}
const rS = Ko(),
  oS = Mb("div", { name: "MuiStack", slot: "Root" });
function uS(a) {
  return Rb({ props: a, name: "MuiStack", defaultTheme: rS });
}
function cS(a, i) {
  const u = j.Children.toArray(a).filter(Boolean);
  return u.reduce(
    (o, s, f) => (
      o.push(s),
      f < u.length - 1 && o.push(j.cloneElement(i, { key: `separator-${f}` })),
      o
    ),
    []
  );
}
const sS = (a) =>
    ({
      row: "Left",
      "row-reverse": "Right",
      column: "Top",
      "column-reverse": "Bottom",
    }[a]),
  fS = ({ ownerState: a, theme: i }) => {
    let u = {
      display: "flex",
      flexDirection: "column",
      ...on(
        { theme: i },
        bs({ values: a.direction, breakpoints: i.breakpoints.values }),
        (o) => ({ flexDirection: o })
      ),
    };
    if (a.spacing) {
      const o = qo(i),
        s = Object.keys(i.breakpoints.values).reduce(
          (v, g) => (
            ((typeof a.spacing == "object" && a.spacing[g] != null) ||
              (typeof a.direction == "object" && a.direction[g] != null)) &&
              (v[g] = !0),
            v
          ),
          {}
        ),
        f = bs({ values: a.direction, base: s }),
        h = bs({ values: a.spacing, base: s });
      typeof f == "object" &&
        Object.keys(f).forEach((v, g, S) => {
          if (!f[v]) {
            const M = g > 0 ? f[S[g - 1]] : "column";
            f[v] = M;
          }
        }),
        (u = Me(
          u,
          on({ theme: i }, h, (v, g) =>
            a.useFlexGap
              ? { gap: Va(o, v) }
              : {
                  "& > :not(style):not(style)": { margin: 0 },
                  "& > :not(style) ~ :not(style)": {
                    [`margin${sS(g ? f[g] : a.direction)}`]: Va(o, v),
                  },
                }
          )
        ));
    }
    return (u = Av(i.breakpoints, u)), u;
  };
function dS(a = {}) {
  const {
      createStyledComponent: i = oS,
      useThemeProps: u = uS,
      componentName: o = "MuiStack",
    } = a,
    s = () => An({ root: ["root"] }, (v) => un(o, v), {}),
    f = i(fS);
  return j.forwardRef(function (v, g) {
    const S = u(v),
      E = tf(S),
      {
        component: M = "div",
        direction: U = "column",
        spacing: O = 0,
        divider: T,
        children: q,
        className: Q,
        useFlexGap: F = !1,
        ...V
      } = E,
      G = { direction: U, spacing: O, useFlexGap: F },
      _ = s();
    return N.jsx(f, {
      as: M,
      ownerState: G,
      ref: g,
      className: qt(_.root, Q),
      ...V,
      children: T ? cS(q, T) : q,
    });
  });
}
const Fi = { black: "#000", white: "#fff" },
  hS = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  Dl = {
    50: "#f3e5f5",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    700: "#7b1fa2",
  },
  wl = {
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    700: "#d32f2f",
    800: "#c62828",
  },
  Yi = {
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    700: "#f57c00",
    900: "#e65100",
  },
  Bl = {
    50: "#e3f2fd",
    200: "#90caf9",
    400: "#42a5f5",
    700: "#1976d2",
    800: "#1565c0",
  },
  Nl = {
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    700: "#0288d1",
    900: "#01579b",
  },
  jl = {
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
  };
function Np() {
  return {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: Fi.white, default: Fi.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  };
}
const mS = Np();
function jp() {
  return {
    text: {
      primary: Fi.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: Fi.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
}
const L0 = jp();
function q0(a, i, u, o) {
  const s = o.light || o,
    f = o.dark || o * 1.5;
  a[i] ||
    (a.hasOwnProperty(u)
      ? (a[i] = a[u])
      : i === "light"
      ? (a.light = lf(a.main, s))
      : i === "dark" && (a.dark = af(a.main, f)));
}
function pS(a = "light") {
  return a === "dark"
    ? { main: Bl[200], light: Bl[50], dark: Bl[400] }
    : { main: Bl[700], light: Bl[400], dark: Bl[800] };
}
function gS(a = "light") {
  return a === "dark"
    ? { main: Dl[200], light: Dl[50], dark: Dl[400] }
    : { main: Dl[500], light: Dl[300], dark: Dl[700] };
}
function yS(a = "light") {
  return a === "dark"
    ? { main: wl[500], light: wl[300], dark: wl[700] }
    : { main: wl[700], light: wl[400], dark: wl[800] };
}
function vS(a = "light") {
  return a === "dark"
    ? { main: Nl[400], light: Nl[300], dark: Nl[700] }
    : { main: Nl[700], light: Nl[500], dark: Nl[900] };
}
function bS(a = "light") {
  return a === "dark"
    ? { main: jl[400], light: jl[300], dark: jl[700] }
    : { main: jl[800], light: jl[500], dark: jl[900] };
}
function SS(a = "light") {
  return a === "dark"
    ? { main: Yi[400], light: Yi[300], dark: Yi[700] }
    : { main: "#ed6c02", light: Yi[500], dark: Yi[900] };
}
function cf(a) {
  const {
      mode: i = "light",
      contrastThreshold: u = 3,
      tonalOffset: o = 0.2,
      ...s
    } = a,
    f = a.primary || pS(i),
    h = a.secondary || gS(i),
    p = a.error || yS(i),
    v = a.info || vS(i),
    g = a.success || bS(i),
    S = a.warning || SS(i);
  function E(T) {
    return wb(T, L0.text.primary) >= u ? L0.text.primary : mS.text.primary;
  }
  const M = ({
    color: T,
    name: q,
    mainShade: Q = 500,
    lightShade: F = 300,
    darkShade: V = 700,
  }) => {
    if (
      ((T = { ...T }),
      !T.main && T[Q] && (T.main = T[Q]),
      !T.hasOwnProperty("main"))
    )
      throw new Error(Ga(11, q ? ` (${q})` : "", Q));
    if (typeof T.main != "string")
      throw new Error(Ga(12, q ? ` (${q})` : "", JSON.stringify(T.main)));
    return (
      q0(T, "light", F, o),
      q0(T, "dark", V, o),
      T.contrastText || (T.contrastText = E(T.main)),
      T
    );
  };
  let U;
  return (
    i === "light" ? (U = Np()) : i === "dark" && (U = jp()),
    Me(
      {
        common: { ...Fi },
        mode: i,
        primary: M({ color: f, name: "primary" }),
        secondary: M({
          color: h,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: M({ color: p, name: "error" }),
        warning: M({ color: S, name: "warning" }),
        info: M({ color: v, name: "info" }),
        success: M({ color: g, name: "success" }),
        grey: hS,
        contrastThreshold: u,
        getContrastText: E,
        augmentColor: M,
        tonalOffset: o,
        ...U,
      },
      s
    )
  );
}
function xS(a) {
  const i = {};
  return (
    Object.entries(a).forEach((o) => {
      const [s, f] = o;
      typeof f == "object" &&
        (i[s] = `${f.fontStyle ? `${f.fontStyle} ` : ""}${
          f.fontVariant ? `${f.fontVariant} ` : ""
        }${f.fontWeight ? `${f.fontWeight} ` : ""}${
          f.fontStretch ? `${f.fontStretch} ` : ""
        }${f.fontSize || ""}${f.lineHeight ? `/${f.lineHeight} ` : ""}${
          f.fontFamily || ""
        }`);
    }),
    i
  );
}
function CS(a, i) {
  return {
    toolbar: {
      minHeight: 56,
      [a.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
      [a.up("sm")]: { minHeight: 64 },
    },
    ...i,
  };
}
function TS(a) {
  return Math.round(a * 1e5) / 1e5;
}
const Y0 = { textTransform: "uppercase" },
  G0 = '"Roboto", "Helvetica", "Arial", sans-serif';
function Up(a, i) {
  const {
      fontFamily: u = G0,
      fontSize: o = 14,
      fontWeightLight: s = 300,
      fontWeightRegular: f = 400,
      fontWeightMedium: h = 500,
      fontWeightBold: p = 700,
      htmlFontSize: v = 16,
      allVariants: g,
      pxToRem: S,
      ...E
    } = typeof i == "function" ? i(a) : i,
    M = o / 14,
    U = S || ((q) => `${(q / v) * M}rem`),
    O = (q, Q, F, V, G) => ({
      fontFamily: u,
      fontWeight: q,
      fontSize: U(Q),
      lineHeight: F,
      ...(u === G0 ? { letterSpacing: `${TS(V / Q)}em` } : {}),
      ...G,
      ...g,
    }),
    T = {
      h1: O(s, 96, 1.167, -1.5),
      h2: O(s, 60, 1.2, -0.5),
      h3: O(f, 48, 1.167, 0),
      h4: O(f, 34, 1.235, 0.25),
      h5: O(f, 24, 1.334, 0),
      h6: O(h, 20, 1.6, 0.15),
      subtitle1: O(f, 16, 1.75, 0.15),
      subtitle2: O(h, 14, 1.57, 0.1),
      body1: O(f, 16, 1.5, 0.15),
      body2: O(f, 14, 1.43, 0.15),
      button: O(h, 14, 1.75, 0.4, Y0),
      caption: O(f, 12, 1.66, 0.4),
      overline: O(f, 12, 2.66, 1, Y0),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return Me(
    {
      htmlFontSize: v,
      pxToRem: U,
      fontFamily: u,
      fontSize: o,
      fontWeightLight: s,
      fontWeightRegular: f,
      fontWeightMedium: h,
      fontWeightBold: p,
      ...T,
    },
    E,
    { clone: !1 }
  );
}
const ES = 0.2,
  AS = 0.14,
  MS = 0.12;
function Xt(...a) {
  return [
    `${a[0]}px ${a[1]}px ${a[2]}px ${a[3]}px rgba(0,0,0,${ES})`,
    `${a[4]}px ${a[5]}px ${a[6]}px ${a[7]}px rgba(0,0,0,${AS})`,
    `${a[8]}px ${a[9]}px ${a[10]}px ${a[11]}px rgba(0,0,0,${MS})`,
  ].join(",");
}
const OS = [
    "none",
    Xt(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    Xt(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    Xt(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    Xt(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    Xt(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    Xt(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    Xt(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    Xt(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    Xt(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    Xt(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    Xt(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    Xt(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    Xt(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    Xt(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    Xt(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    Xt(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    Xt(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    Xt(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    Xt(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    Xt(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    Xt(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    Xt(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    Xt(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    Xt(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  RS = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  zS = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function V0(a) {
  return `${Math.round(a)}ms`;
}
function _S(a) {
  if (!a) return 0;
  const i = a / 36;
  return Math.min(Math.round((4 + 15 * i ** 0.25 + i / 5) * 10), 3e3);
}
function DS(a) {
  const i = { ...RS, ...a.easing },
    u = { ...zS, ...a.duration };
  return {
    getAutoHeightDuration: _S,
    create: (s = ["all"], f = {}) => {
      const {
        duration: h = u.standard,
        easing: p = i.easeInOut,
        delay: v = 0,
        ...g
      } = f;
      return (Array.isArray(s) ? s : [s])
        .map(
          (S) =>
            `${S} ${typeof h == "string" ? h : V0(h)} ${p} ${
              typeof v == "string" ? v : V0(v)
            }`
        )
        .join(",");
    },
    ...a,
    easing: i,
    duration: u,
  };
}
const wS = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};
function BS(a) {
  return (
    Cn(a) ||
    typeof a > "u" ||
    typeof a == "string" ||
    typeof a == "boolean" ||
    typeof a == "number" ||
    Array.isArray(a)
  );
}
function Hp(a = {}) {
  const i = { ...a };
  function u(o) {
    const s = Object.entries(o);
    for (let f = 0; f < s.length; f++) {
      const [h, p] = s[f];
      !BS(p) || h.startsWith("unstable_")
        ? delete o[h]
        : Cn(p) && ((o[h] = { ...p }), u(o[h]));
    }
  }
  return (
    u(i),
    `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(i, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
  );
}
function ws(a = {}, ...i) {
  const {
    breakpoints: u,
    mixins: o = {},
    spacing: s,
    palette: f = {},
    transitions: h = {},
    typography: p = {},
    shape: v,
    ...g
  } = a;
  if (a.vars && a.generateThemeVars === void 0) throw new Error(Ga(20));
  const S = cf(f),
    E = Ko(a);
  let M = Me(E, {
    mixins: CS(E.breakpoints, o),
    palette: S,
    shadows: OS.slice(),
    typography: Up(S, p),
    transitions: DS(h),
    zIndex: { ...wS },
  });
  return (
    (M = Me(M, g)),
    (M = i.reduce((U, O) => Me(U, O), M)),
    (M.unstable_sxConfig = { ...ar, ...g?.unstable_sxConfig }),
    (M.unstable_sx = function (O) {
      return ya({ sx: O, theme: this });
    }),
    (M.toRuntimeSource = Hp),
    M
  );
}
function Bs(a) {
  let i;
  return (
    a < 1 ? (i = 5.11916 * a ** 2) : (i = 4.5 * Math.log(a + 1) + 2),
    Math.round(i * 10) / 1e3
  );
}
const NS = [...Array(25)].map((a, i) => {
  if (i === 0) return "none";
  const u = Bs(i);
  return `linear-gradient(rgba(255 255 255 / ${u}), rgba(255 255 255 / ${u}))`;
});
function $p(a) {
  return {
    inputPlaceholder: a === "dark" ? 0.5 : 0.42,
    inputUnderline: a === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: a === "dark" ? 0.2 : 0.12,
    switchTrack: a === "dark" ? 0.3 : 0.38,
  };
}
function kp(a) {
  return a === "dark" ? NS : [];
}
function jS(a) {
  const { palette: i = { mode: "light" }, opacity: u, overlays: o, ...s } = a,
    f = cf(i);
  return {
    palette: f,
    opacity: { ...$p(f.mode), ...u },
    overlays: o || kp(f.mode),
    ...s,
  };
}
function US(a) {
  return (
    !!a[0].match(
      /(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/
    ) ||
    !!a[0].match(/sxConfig$/) ||
    (a[0] === "palette" &&
      !!a[1]?.match(/(mode|contrastThreshold|tonalOffset)/))
  );
}
const HS = (a) => [
    ...[...Array(25)].map((i, u) => `--${a ? `${a}-` : ""}overlays-${u}`),
    `--${a ? `${a}-` : ""}palette-AppBar-darkBg`,
    `--${a ? `${a}-` : ""}palette-AppBar-darkColor`,
  ],
  $S = (a) => (i, u) => {
    const o = a.rootSelector || ":root",
      s = a.colorSchemeSelector;
    let f = s;
    if (
      (s === "class" && (f = ".%s"),
      s === "data" && (f = "[data-%s]"),
      s?.startsWith("data-") && !s.includes("%s") && (f = `[${s}="%s"]`),
      a.defaultColorScheme === i)
    ) {
      if (i === "dark") {
        const h = {};
        return (
          HS(a.cssVarPrefix).forEach((p) => {
            (h[p] = u[p]), delete u[p];
          }),
          f === "media"
            ? { [o]: u, "@media (prefers-color-scheme: dark)": { [o]: h } }
            : f
            ? { [f.replace("%s", i)]: h, [`${o}, ${f.replace("%s", i)}`]: u }
            : { [o]: { ...u, ...h } }
        );
      }
      if (f && f !== "media") return `${o}, ${f.replace("%s", String(i))}`;
    } else if (i) {
      if (f === "media")
        return { [`@media (prefers-color-scheme: ${String(i)})`]: { [o]: u } };
      if (f) return f.replace("%s", String(i));
    }
    return o;
  };
function kS(a, i) {
  i.forEach((u) => {
    a[u] || (a[u] = {});
  });
}
function H(a, i, u) {
  !a[i] && u && (a[i] = u);
}
function Vi(a) {
  return typeof a != "string" || !a.startsWith("hsl") ? a : Rp(a);
}
function qn(a, i) {
  `${i}Channel` in a || (a[`${i}Channel`] = Gi(Vi(a[i])));
}
function LS(a) {
  return typeof a == "number"
    ? `${a}px`
    : typeof a == "string" || typeof a == "function" || Array.isArray(a)
    ? a
    : "8px";
}
const bn = (a) => {
    try {
      return a();
    } catch {}
  },
  qS = (a = "mui") => eS(a);
function Es(a, i, u, o) {
  if (!i) return;
  i = i === !0 ? {} : i;
  const s = o === "dark" ? "dark" : "light";
  if (!u) {
    a[o] = jS({ ...i, palette: { mode: s, ...i?.palette } });
    return;
  }
  const { palette: f, ...h } = ws({
    ...u,
    palette: { mode: s, ...i?.palette },
  });
  return (
    (a[o] = {
      ...i,
      palette: f,
      opacity: { ...$p(s), ...i?.opacity },
      overlays: i?.overlays || kp(s),
    }),
    h
  );
}
function YS(a = {}, ...i) {
  const {
      colorSchemes: u = { light: !0 },
      defaultColorScheme: o,
      disableCssColorScheme: s = !1,
      cssVarPrefix: f = "mui",
      shouldSkipGeneratingVar: h = US,
      colorSchemeSelector: p = u.light && u.dark ? "media" : void 0,
      rootSelector: v = ":root",
      ...g
    } = a,
    S = Object.keys(u)[0],
    E = o || (u.light && S !== "light" ? "light" : S),
    M = qS(f),
    { [E]: U, light: O, dark: T, ...q } = u,
    Q = { ...q };
  let F = U;
  if (
    (((E === "dark" && !("dark" in u)) || (E === "light" && !("light" in u))) &&
      (F = !0),
    !F)
  )
    throw new Error(Ga(21, E));
  const V = Es(Q, F, g, E);
  O && !Q.light && Es(Q, O, void 0, "light"),
    T && !Q.dark && Es(Q, T, void 0, "dark");
  let G = {
    defaultColorScheme: E,
    ...V,
    cssVarPrefix: f,
    colorSchemeSelector: p,
    rootSelector: v,
    getCssVar: M,
    colorSchemes: Q,
    font: { ...xS(V.typography), ...V.font },
    spacing: LS(g.spacing),
  };
  Object.keys(G.colorSchemes).forEach((I) => {
    const y = G.colorSchemes[I].palette,
      X = (et) => {
        const it = et.split("-"),
          At = it[1],
          mt = it[2];
        return M(et, y[At][mt]);
      };
    if (
      (y.mode === "light" &&
        (H(y.common, "background", "#fff"),
        H(y.common, "onBackground", "#000")),
      y.mode === "dark" &&
        (H(y.common, "background", "#000"),
        H(y.common, "onBackground", "#fff")),
      kS(y, [
        "Alert",
        "AppBar",
        "Avatar",
        "Button",
        "Chip",
        "FilledInput",
        "LinearProgress",
        "Skeleton",
        "Slider",
        "SnackbarContent",
        "SpeedDialAction",
        "StepConnector",
        "StepContent",
        "Switch",
        "TableCell",
        "Tooltip",
      ]),
      y.mode === "light")
    ) {
      H(y.Alert, "errorColor", kt(y.error.light, 0.6)),
        H(y.Alert, "infoColor", kt(y.info.light, 0.6)),
        H(y.Alert, "successColor", kt(y.success.light, 0.6)),
        H(y.Alert, "warningColor", kt(y.warning.light, 0.6)),
        H(y.Alert, "errorFilledBg", X("palette-error-main")),
        H(y.Alert, "infoFilledBg", X("palette-info-main")),
        H(y.Alert, "successFilledBg", X("palette-success-main")),
        H(y.Alert, "warningFilledBg", X("palette-warning-main")),
        H(
          y.Alert,
          "errorFilledColor",
          bn(() => y.getContrastText(y.error.main))
        ),
        H(
          y.Alert,
          "infoFilledColor",
          bn(() => y.getContrastText(y.info.main))
        ),
        H(
          y.Alert,
          "successFilledColor",
          bn(() => y.getContrastText(y.success.main))
        ),
        H(
          y.Alert,
          "warningFilledColor",
          bn(() => y.getContrastText(y.warning.main))
        ),
        H(y.Alert, "errorStandardBg", Lt(y.error.light, 0.9)),
        H(y.Alert, "infoStandardBg", Lt(y.info.light, 0.9)),
        H(y.Alert, "successStandardBg", Lt(y.success.light, 0.9)),
        H(y.Alert, "warningStandardBg", Lt(y.warning.light, 0.9)),
        H(y.Alert, "errorIconColor", X("palette-error-main")),
        H(y.Alert, "infoIconColor", X("palette-info-main")),
        H(y.Alert, "successIconColor", X("palette-success-main")),
        H(y.Alert, "warningIconColor", X("palette-warning-main")),
        H(y.AppBar, "defaultBg", X("palette-grey-100")),
        H(y.Avatar, "defaultBg", X("palette-grey-400")),
        H(y.Button, "inheritContainedBg", X("palette-grey-300")),
        H(y.Button, "inheritContainedHoverBg", X("palette-grey-A100")),
        H(y.Chip, "defaultBorder", X("palette-grey-400")),
        H(y.Chip, "defaultAvatarColor", X("palette-grey-700")),
        H(y.Chip, "defaultIconColor", X("palette-grey-700")),
        H(y.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"),
        H(y.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"),
        H(y.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"),
        H(y.LinearProgress, "primaryBg", Lt(y.primary.main, 0.62)),
        H(y.LinearProgress, "secondaryBg", Lt(y.secondary.main, 0.62)),
        H(y.LinearProgress, "errorBg", Lt(y.error.main, 0.62)),
        H(y.LinearProgress, "infoBg", Lt(y.info.main, 0.62)),
        H(y.LinearProgress, "successBg", Lt(y.success.main, 0.62)),
        H(y.LinearProgress, "warningBg", Lt(y.warning.main, 0.62)),
        H(y.Skeleton, "bg", `rgba(${X("palette-text-primaryChannel")} / 0.11)`),
        H(y.Slider, "primaryTrack", Lt(y.primary.main, 0.62)),
        H(y.Slider, "secondaryTrack", Lt(y.secondary.main, 0.62)),
        H(y.Slider, "errorTrack", Lt(y.error.main, 0.62)),
        H(y.Slider, "infoTrack", Lt(y.info.main, 0.62)),
        H(y.Slider, "successTrack", Lt(y.success.main, 0.62)),
        H(y.Slider, "warningTrack", Lt(y.warning.main, 0.62));
      const et = To(y.background.default, 0.8);
      H(y.SnackbarContent, "bg", et),
        H(
          y.SnackbarContent,
          "color",
          bn(() => y.getContrastText(et))
        ),
        H(y.SpeedDialAction, "fabHoverBg", To(y.background.paper, 0.15)),
        H(y.StepConnector, "border", X("palette-grey-400")),
        H(y.StepContent, "border", X("palette-grey-400")),
        H(y.Switch, "defaultColor", X("palette-common-white")),
        H(y.Switch, "defaultDisabledColor", X("palette-grey-100")),
        H(y.Switch, "primaryDisabledColor", Lt(y.primary.main, 0.62)),
        H(y.Switch, "secondaryDisabledColor", Lt(y.secondary.main, 0.62)),
        H(y.Switch, "errorDisabledColor", Lt(y.error.main, 0.62)),
        H(y.Switch, "infoDisabledColor", Lt(y.info.main, 0.62)),
        H(y.Switch, "successDisabledColor", Lt(y.success.main, 0.62)),
        H(y.Switch, "warningDisabledColor", Lt(y.warning.main, 0.62)),
        H(y.TableCell, "border", Lt(Co(y.divider, 1), 0.88)),
        H(y.Tooltip, "bg", Co(y.grey[700], 0.92));
    }
    if (y.mode === "dark") {
      H(y.Alert, "errorColor", Lt(y.error.light, 0.6)),
        H(y.Alert, "infoColor", Lt(y.info.light, 0.6)),
        H(y.Alert, "successColor", Lt(y.success.light, 0.6)),
        H(y.Alert, "warningColor", Lt(y.warning.light, 0.6)),
        H(y.Alert, "errorFilledBg", X("palette-error-dark")),
        H(y.Alert, "infoFilledBg", X("palette-info-dark")),
        H(y.Alert, "successFilledBg", X("palette-success-dark")),
        H(y.Alert, "warningFilledBg", X("palette-warning-dark")),
        H(
          y.Alert,
          "errorFilledColor",
          bn(() => y.getContrastText(y.error.dark))
        ),
        H(
          y.Alert,
          "infoFilledColor",
          bn(() => y.getContrastText(y.info.dark))
        ),
        H(
          y.Alert,
          "successFilledColor",
          bn(() => y.getContrastText(y.success.dark))
        ),
        H(
          y.Alert,
          "warningFilledColor",
          bn(() => y.getContrastText(y.warning.dark))
        ),
        H(y.Alert, "errorStandardBg", kt(y.error.light, 0.9)),
        H(y.Alert, "infoStandardBg", kt(y.info.light, 0.9)),
        H(y.Alert, "successStandardBg", kt(y.success.light, 0.9)),
        H(y.Alert, "warningStandardBg", kt(y.warning.light, 0.9)),
        H(y.Alert, "errorIconColor", X("palette-error-main")),
        H(y.Alert, "infoIconColor", X("palette-info-main")),
        H(y.Alert, "successIconColor", X("palette-success-main")),
        H(y.Alert, "warningIconColor", X("palette-warning-main")),
        H(y.AppBar, "defaultBg", X("palette-grey-900")),
        H(y.AppBar, "darkBg", X("palette-background-paper")),
        H(y.AppBar, "darkColor", X("palette-text-primary")),
        H(y.Avatar, "defaultBg", X("palette-grey-600")),
        H(y.Button, "inheritContainedBg", X("palette-grey-800")),
        H(y.Button, "inheritContainedHoverBg", X("palette-grey-700")),
        H(y.Chip, "defaultBorder", X("palette-grey-700")),
        H(y.Chip, "defaultAvatarColor", X("palette-grey-300")),
        H(y.Chip, "defaultIconColor", X("palette-grey-300")),
        H(y.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"),
        H(y.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"),
        H(y.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"),
        H(y.LinearProgress, "primaryBg", kt(y.primary.main, 0.5)),
        H(y.LinearProgress, "secondaryBg", kt(y.secondary.main, 0.5)),
        H(y.LinearProgress, "errorBg", kt(y.error.main, 0.5)),
        H(y.LinearProgress, "infoBg", kt(y.info.main, 0.5)),
        H(y.LinearProgress, "successBg", kt(y.success.main, 0.5)),
        H(y.LinearProgress, "warningBg", kt(y.warning.main, 0.5)),
        H(y.Skeleton, "bg", `rgba(${X("palette-text-primaryChannel")} / 0.13)`),
        H(y.Slider, "primaryTrack", kt(y.primary.main, 0.5)),
        H(y.Slider, "secondaryTrack", kt(y.secondary.main, 0.5)),
        H(y.Slider, "errorTrack", kt(y.error.main, 0.5)),
        H(y.Slider, "infoTrack", kt(y.info.main, 0.5)),
        H(y.Slider, "successTrack", kt(y.success.main, 0.5)),
        H(y.Slider, "warningTrack", kt(y.warning.main, 0.5));
      const et = To(y.background.default, 0.98);
      H(y.SnackbarContent, "bg", et),
        H(
          y.SnackbarContent,
          "color",
          bn(() => y.getContrastText(et))
        ),
        H(y.SpeedDialAction, "fabHoverBg", To(y.background.paper, 0.15)),
        H(y.StepConnector, "border", X("palette-grey-600")),
        H(y.StepContent, "border", X("palette-grey-600")),
        H(y.Switch, "defaultColor", X("palette-grey-300")),
        H(y.Switch, "defaultDisabledColor", X("palette-grey-600")),
        H(y.Switch, "primaryDisabledColor", kt(y.primary.main, 0.55)),
        H(y.Switch, "secondaryDisabledColor", kt(y.secondary.main, 0.55)),
        H(y.Switch, "errorDisabledColor", kt(y.error.main, 0.55)),
        H(y.Switch, "infoDisabledColor", kt(y.info.main, 0.55)),
        H(y.Switch, "successDisabledColor", kt(y.success.main, 0.55)),
        H(y.Switch, "warningDisabledColor", kt(y.warning.main, 0.55)),
        H(y.TableCell, "border", kt(Co(y.divider, 1), 0.68)),
        H(y.Tooltip, "bg", Co(y.grey[700], 0.92));
    }
    qn(y.background, "default"),
      qn(y.background, "paper"),
      qn(y.common, "background"),
      qn(y.common, "onBackground"),
      qn(y, "divider"),
      Object.keys(y).forEach((et) => {
        const it = y[et];
        et !== "tonalOffset" &&
          it &&
          typeof it == "object" &&
          (it.main && H(y[et], "mainChannel", Gi(Vi(it.main))),
          it.light && H(y[et], "lightChannel", Gi(Vi(it.light))),
          it.dark && H(y[et], "darkChannel", Gi(Vi(it.dark))),
          it.contrastText &&
            H(y[et], "contrastTextChannel", Gi(Vi(it.contrastText))),
          et === "text" && (qn(y[et], "primary"), qn(y[et], "secondary")),
          et === "action" &&
            (it.active && qn(y[et], "active"),
            it.selected && qn(y[et], "selected")));
      });
  }),
    (G = i.reduce((I, y) => Me(I, y), G));
  const _ = {
      prefix: f,
      disableCssColorScheme: s,
      shouldSkipGeneratingVar: h,
      getSelector: $S(G),
    },
    { vars: J, generateThemeVars: P, generateStyleSheets: tt } = lS(G, _);
  return (
    (G.vars = J),
    Object.entries(G.colorSchemes[G.defaultColorScheme]).forEach(([I, y]) => {
      G[I] = y;
    }),
    (G.generateThemeVars = P),
    (G.generateStyleSheets = tt),
    (G.generateSpacing = function () {
      return xp(g.spacing, qo(this));
    }),
    (G.getColorSchemeSelector = iS(p)),
    (G.spacing = G.generateSpacing()),
    (G.shouldSkipGeneratingVar = h),
    (G.unstable_sxConfig = { ...ar, ...g?.unstable_sxConfig }),
    (G.unstable_sx = function (y) {
      return ya({ sx: y, theme: this });
    }),
    (G.toRuntimeSource = Hp),
    G
  );
}
function X0(a, i, u) {
  a.colorSchemes &&
    u &&
    (a.colorSchemes[i] = {
      ...(u !== !0 && u),
      palette: cf({ ...(u === !0 ? {} : u.palette), mode: i }),
    });
}
function Wo(a = {}, ...i) {
  const {
      palette: u,
      cssVariables: o = !1,
      colorSchemes: s = u ? void 0 : { light: !0 },
      defaultColorScheme: f = u?.mode,
      ...h
    } = a,
    p = f || "light",
    v = s?.[p],
    g = {
      ...s,
      ...(u
        ? { [p]: { ...(typeof v != "boolean" && v), palette: u } }
        : void 0),
    };
  if (o === !1) {
    if (!("colorSchemes" in a)) return ws(a, ...i);
    let S = u;
    "palette" in a ||
      (g[p] &&
        (g[p] !== !0
          ? (S = g[p].palette)
          : p === "dark" && (S = { mode: "dark" })));
    const E = ws({ ...a, palette: S }, ...i);
    return (
      (E.defaultColorScheme = p),
      (E.colorSchemes = g),
      E.palette.mode === "light" &&
        ((E.colorSchemes.light = {
          ...(g.light !== !0 && g.light),
          palette: E.palette,
        }),
        X0(E, "dark", g.dark)),
      E.palette.mode === "dark" &&
        ((E.colorSchemes.dark = {
          ...(g.dark !== !0 && g.dark),
          palette: E.palette,
        }),
        X0(E, "light", g.light)),
      E
    );
  }
  return (
    !u && !("light" in g) && p === "light" && (g.light = !0),
    YS(
      {
        ...h,
        colorSchemes: g,
        defaultColorScheme: p,
        ...(typeof o != "boolean" && o),
      },
      ...i
    )
  );
}
const sf = Wo();
function GS() {
  const a = Zo(sf);
  return a[Tn] || a;
}
function VS(a) {
  return a !== "ownerState" && a !== "theme" && a !== "sx" && a !== "as";
}
const Lp = (a) => VS(a) && a !== "classes",
  ne = Op({ themeId: Tn, defaultTheme: sf, rootShouldForwardProp: Lp });
function XS({ theme: a, ...i }) {
  const u = Tn in a ? a[Tn] : void 0;
  return N.jsx(wp, { ...i, themeId: u ? Tn : void 0, theme: u || a });
}
const Eo = {
    colorSchemeStorageKey: "mui-color-scheme",
    defaultLightColorScheme: "light",
    defaultDarkColorScheme: "dark",
    modeStorageKey: "mui-mode",
  },
  { CssVarsProvider: QS } = tS({
    themeId: Tn,
    theme: () => Wo({ cssVariables: !0 }),
    colorSchemeStorageKey: Eo.colorSchemeStorageKey,
    modeStorageKey: Eo.modeStorageKey,
    defaultColorScheme: {
      light: Eo.defaultLightColorScheme,
      dark: Eo.defaultDarkColorScheme,
    },
    resolveTheme: (a) => {
      const i = { ...a, typography: Up(a.palette, a.typography) };
      return (
        (i.unstable_sx = function (o) {
          return ya({ sx: o, theme: this });
        }),
        i
      );
    },
  }),
  KS = QS;
function ZS({ theme: a, ...i }) {
  const u = j.useMemo(() => {
    if (typeof a == "function") return a;
    const o = Tn in a ? a[Tn] : a;
    return "colorSchemes" in o ? null : "vars" in o ? a : { ...a, vars: null };
  }, [a]);
  return u ? N.jsx(XS, { theme: u, ...i }) : N.jsx(KS, { theme: a, ...i });
}
function JS(a) {
  return N.jsx(Cp, { ...a, defaultTheme: sf, themeId: Tn });
}
function qp(a) {
  return function (u) {
    return N.jsx(JS, {
      styles: typeof a == "function" ? (o) => a({ theme: o, ...u }) : a,
    });
  };
}
function WS() {
  return tf;
}
function en(a) {
  return Yb(a);
}
const Ns = typeof qp({}) == "function",
  FS = (a, i) => ({
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    boxSizing: "border-box",
    WebkitTextSizeAdjust: "100%",
    ...(i && !a.vars && { colorScheme: a.palette.mode }),
  }),
  PS = (a) => ({
    color: (a.vars || a).palette.text.primary,
    ...a.typography.body1,
    backgroundColor: (a.vars || a).palette.background.default,
    "@media print": { backgroundColor: (a.vars || a).palette.common.white },
  }),
  Yp = (a, i = !1) => {
    const u = {};
    i &&
      a.colorSchemes &&
      typeof a.getColorSchemeSelector == "function" &&
      Object.entries(a.colorSchemes).forEach(([f, h]) => {
        const p = a.getColorSchemeSelector(f);
        p.startsWith("@")
          ? (u[p] = { ":root": { colorScheme: h.palette?.mode } })
          : (u[p.replace(/\s*&/, "")] = { colorScheme: h.palette?.mode });
      });
    let o = {
      html: FS(a, i),
      "*, *::before, *::after": { boxSizing: "inherit" },
      "strong, b": { fontWeight: a.typography.fontWeightBold },
      body: {
        margin: 0,
        ...PS(a),
        "&::backdrop": {
          backgroundColor: (a.vars || a).palette.background.default,
        },
      },
      ...u,
    };
    const s = a.components?.MuiCssBaseline?.styleOverrides;
    return s && (o = [o, s]), o;
  },
  zo = "mui-ecs",
  IS = (a) => {
    const i = Yp(a, !1),
      u = Array.isArray(i) ? i[0] : i;
    return (
      !a.vars &&
        u &&
        (u.html[`:root:has(${zo})`] = { colorScheme: a.palette.mode }),
      a.colorSchemes &&
        Object.entries(a.colorSchemes).forEach(([o, s]) => {
          const f = a.getColorSchemeSelector(o);
          f.startsWith("@")
            ? (u[f] = {
                [`:root:not(:has(.${zo}))`]: { colorScheme: s.palette?.mode },
              })
            : (u[f.replace(/\s*&/, "")] = {
                [`&:not(:has(.${zo}))`]: { colorScheme: s.palette?.mode },
              });
        }),
      i
    );
  },
  t2 = qp(
    Ns
      ? ({ theme: a, enableColorScheme: i }) => Yp(a, i)
      : ({ theme: a }) => IS(a)
  );
function e2(a) {
  const i = en({ props: a, name: "MuiCssBaseline" }),
    { children: u, enableColorScheme: o = !1 } = i;
  return N.jsxs(j.Fragment, {
    children: [
      Ns && N.jsx(t2, { enableColorScheme: o }),
      !Ns && !o && N.jsx("span", { className: zo, style: { display: "none" } }),
      u,
    ],
  });
}
const ba = Qb;
function n2(a) {
  return un("MuiSvgIcon", a);
}
cn("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const a2 = (a) => {
    const { color: i, fontSize: u, classes: o } = a,
      s = {
        root: ["root", i !== "inherit" && `color${ut(i)}`, `fontSize${ut(u)}`],
      };
    return An(s, n2, o);
  },
  l2 = ne("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [
        i.root,
        u.color !== "inherit" && i[`color${ut(u.color)}`],
        i[`fontSize${ut(u.fontSize)}`],
      ];
    },
  })(
    ba(({ theme: a }) => ({
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      flexShrink: 0,
      transition: a.transitions?.create?.("fill", {
        duration: (a.vars ?? a).transitions?.duration?.shorter,
      }),
      variants: [
        { props: (i) => !i.hasSvgAsChild, style: { fill: "currentColor" } },
        { props: { fontSize: "inherit" }, style: { fontSize: "inherit" } },
        {
          props: { fontSize: "small" },
          style: { fontSize: a.typography?.pxToRem?.(20) || "1.25rem" },
        },
        {
          props: { fontSize: "medium" },
          style: { fontSize: a.typography?.pxToRem?.(24) || "1.5rem" },
        },
        {
          props: { fontSize: "large" },
          style: { fontSize: a.typography?.pxToRem?.(35) || "2.1875rem" },
        },
        ...Object.entries((a.vars ?? a).palette)
          .filter(([, i]) => i && i.main)
          .map(([i]) => ({
            props: { color: i },
            style: { color: (a.vars ?? a).palette?.[i]?.main },
          })),
        {
          props: { color: "action" },
          style: { color: (a.vars ?? a).palette?.action?.active },
        },
        {
          props: { color: "disabled" },
          style: { color: (a.vars ?? a).palette?.action?.disabled },
        },
        { props: { color: "inherit" }, style: { color: void 0 } },
      ],
    }))
  ),
  js = j.forwardRef(function (i, u) {
    const o = en({ props: i, name: "MuiSvgIcon" }),
      {
        children: s,
        className: f,
        color: h = "inherit",
        component: p = "svg",
        fontSize: v = "medium",
        htmlColor: g,
        inheritViewBox: S = !1,
        titleAccess: E,
        viewBox: M = "0 0 24 24",
        ...U
      } = o,
      O = j.isValidElement(s) && s.type === "svg",
      T = {
        ...o,
        color: h,
        component: p,
        fontSize: v,
        instanceFontSize: i.fontSize,
        inheritViewBox: S,
        viewBox: M,
        hasSvgAsChild: O,
      },
      q = {};
    S || (q.viewBox = M);
    const Q = a2(T);
    return N.jsxs(l2, {
      as: p,
      className: qt(Q.root, f),
      focusable: "false",
      color: g,
      "aria-hidden": E ? void 0 : !0,
      role: E ? "img" : void 0,
      ref: u,
      ...q,
      ...U,
      ...(O && s.props),
      ownerState: T,
      children: [
        O ? s.props.children : s,
        E ? N.jsx("title", { children: E }) : null,
      ],
    });
  });
js.muiName = "SvgIcon";
function sn(a, i) {
  function u(o, s) {
    return N.jsx(js, { "data-testid": void 0, ref: s, ...o, children: a });
  }
  return (u.muiName = js.muiName), j.memo(j.forwardRef(u));
}
function _o(a) {
  const i = j.useRef(a);
  return (
    ef(() => {
      i.current = a;
    }),
    j.useRef((...u) => (0, i.current)(...u)).current
  );
}
function No(...a) {
  const i = j.useRef(void 0),
    u = j.useCallback((o) => {
      const s = a.map((f) => {
        if (f == null) return null;
        if (typeof f == "function") {
          const h = f,
            p = h(o);
          return typeof p == "function"
            ? p
            : () => {
                h(null);
              };
        }
        return (
          (f.current = o),
          () => {
            f.current = null;
          }
        );
      });
      return () => {
        s.forEach((f) => f?.());
      };
    }, a);
  return j.useMemo(
    () =>
      a.every((o) => o == null)
        ? null
        : (o) => {
            i.current && (i.current(), (i.current = void 0)),
              o != null && (i.current = u(o));
          },
    a
  );
}
function i2(a, i) {
  if (a == null) return {};
  var u = {};
  for (var o in a)
    if ({}.hasOwnProperty.call(a, o)) {
      if (i.indexOf(o) !== -1) continue;
      u[o] = a[o];
    }
  return u;
}
function Us(a, i) {
  return (
    (Us = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (u, o) {
          return (u.__proto__ = o), u;
        }),
    Us(a, i)
  );
}
function r2(a, i) {
  (a.prototype = Object.create(i.prototype)),
    (a.prototype.constructor = a),
    Us(a, i);
}
const Q0 = Ul.createContext(null);
function o2(a) {
  if (a === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return a;
}
function ff(a, i) {
  var u = function (f) {
      return i && j.isValidElement(f) ? i(f) : f;
    },
    o = Object.create(null);
  return (
    a &&
      j.Children.map(a, function (s) {
        return s;
      }).forEach(function (s) {
        o[s.key] = u(s);
      }),
    o
  );
}
function u2(a, i) {
  (a = a || {}), (i = i || {});
  function u(S) {
    return S in i ? i[S] : a[S];
  }
  var o = Object.create(null),
    s = [];
  for (var f in a) f in i ? s.length && ((o[f] = s), (s = [])) : s.push(f);
  var h,
    p = {};
  for (var v in i) {
    if (o[v])
      for (h = 0; h < o[v].length; h++) {
        var g = o[v][h];
        p[o[v][h]] = u(g);
      }
    p[v] = u(v);
  }
  for (h = 0; h < s.length; h++) p[s[h]] = u(s[h]);
  return p;
}
function qa(a, i, u) {
  return u[i] != null ? u[i] : a.props[i];
}
function c2(a, i) {
  return ff(a.children, function (u) {
    return j.cloneElement(u, {
      onExited: i.bind(null, u),
      in: !0,
      appear: qa(u, "appear", a),
      enter: qa(u, "enter", a),
      exit: qa(u, "exit", a),
    });
  });
}
function s2(a, i, u) {
  var o = ff(a.children),
    s = u2(i, o);
  return (
    Object.keys(s).forEach(function (f) {
      var h = s[f];
      if (j.isValidElement(h)) {
        var p = f in i,
          v = f in o,
          g = i[f],
          S = j.isValidElement(g) && !g.props.in;
        v && (!p || S)
          ? (s[f] = j.cloneElement(h, {
              onExited: u.bind(null, h),
              in: !0,
              exit: qa(h, "exit", a),
              enter: qa(h, "enter", a),
            }))
          : !v && p && !S
          ? (s[f] = j.cloneElement(h, { in: !1 }))
          : v &&
            p &&
            j.isValidElement(g) &&
            (s[f] = j.cloneElement(h, {
              onExited: u.bind(null, h),
              in: g.props.in,
              exit: qa(h, "exit", a),
              enter: qa(h, "enter", a),
            }));
      }
    }),
    s
  );
}
var f2 =
    Object.values ||
    function (a) {
      return Object.keys(a).map(function (i) {
        return a[i];
      });
    },
  d2 = {
    component: "div",
    childFactory: function (i) {
      return i;
    },
  },
  df = (function (a) {
    r2(i, a);
    function i(o, s) {
      var f;
      f = a.call(this, o, s) || this;
      var h = f.handleExited.bind(o2(f));
      return (
        (f.state = {
          contextValue: { isMounting: !0 },
          handleExited: h,
          firstRender: !0,
        }),
        f
      );
    }
    var u = i.prototype;
    return (
      (u.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (u.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (i.getDerivedStateFromProps = function (s, f) {
        var h = f.children,
          p = f.handleExited,
          v = f.firstRender;
        return { children: v ? c2(s, p) : s2(s, h, p), firstRender: !1 };
      }),
      (u.handleExited = function (s, f) {
        var h = ff(this.props.children);
        s.key in h ||
          (s.props.onExited && s.props.onExited(f),
          this.mounted &&
            this.setState(function (p) {
              var v = Do({}, p.children);
              return delete v[s.key], { children: v };
            }));
      }),
      (u.render = function () {
        var s = this.props,
          f = s.component,
          h = s.childFactory,
          p = i2(s, ["component", "childFactory"]),
          v = this.state.contextValue,
          g = f2(this.state.children).map(h);
        return (
          delete p.appear,
          delete p.enter,
          delete p.exit,
          f === null
            ? Ul.createElement(Q0.Provider, { value: v }, g)
            : Ul.createElement(
                Q0.Provider,
                { value: v },
                Ul.createElement(f, p, g)
              )
        );
      }),
      i
    );
  })(Ul.Component);
df.propTypes = {};
df.defaultProps = d2;
const K0 = {};
function Gp(a, i) {
  const u = j.useRef(K0);
  return u.current === K0 && (u.current = a(i)), u;
}
const h2 = [];
function m2(a) {
  j.useEffect(a, h2);
}
class hf {
  static create() {
    return new hf();
  }
  currentId = null;
  start(i, u) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = null), u();
      }, i));
  }
  clear = () => {
    this.currentId !== null &&
      (clearTimeout(this.currentId), (this.currentId = null));
  };
  disposeEffect = () => this.clear;
}
function p2() {
  const a = Gp(hf.create).current;
  return m2(a.disposeEffect), a;
}
function g2(a) {
  return un("MuiPaper", a);
}
cn("MuiPaper", [
  "root",
  "rounded",
  "outlined",
  "elevation",
  "elevation0",
  "elevation1",
  "elevation2",
  "elevation3",
  "elevation4",
  "elevation5",
  "elevation6",
  "elevation7",
  "elevation8",
  "elevation9",
  "elevation10",
  "elevation11",
  "elevation12",
  "elevation13",
  "elevation14",
  "elevation15",
  "elevation16",
  "elevation17",
  "elevation18",
  "elevation19",
  "elevation20",
  "elevation21",
  "elevation22",
  "elevation23",
  "elevation24",
]);
const y2 = (a) => {
    const { square: i, elevation: u, variant: o, classes: s } = a,
      f = {
        root: [
          "root",
          o,
          !i && "rounded",
          o === "elevation" && `elevation${u}`,
        ],
      };
    return An(f, g2, s);
  },
  v2 = ne("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [
        i.root,
        i[u.variant],
        !u.square && i.rounded,
        u.variant === "elevation" && i[`elevation${u.elevation}`],
      ];
    },
  })(
    ba(({ theme: a }) => ({
      backgroundColor: (a.vars || a).palette.background.paper,
      color: (a.vars || a).palette.text.primary,
      transition: a.transitions.create("box-shadow"),
      variants: [
        {
          props: ({ ownerState: i }) => !i.square,
          style: { borderRadius: a.shape.borderRadius },
        },
        {
          props: { variant: "outlined" },
          style: { border: `1px solid ${(a.vars || a).palette.divider}` },
        },
        {
          props: { variant: "elevation" },
          style: {
            boxShadow: "var(--Paper-shadow)",
            backgroundImage: "var(--Paper-overlay)",
          },
        },
      ],
    }))
  ),
  b2 = j.forwardRef(function (i, u) {
    const o = en({ props: i, name: "MuiPaper" }),
      s = GS(),
      {
        className: f,
        component: h = "div",
        elevation: p = 1,
        square: v = !1,
        variant: g = "elevation",
        ...S
      } = o,
      E = { ...o, component: h, elevation: p, square: v, variant: g },
      M = y2(E);
    return N.jsx(v2, {
      as: h,
      ownerState: E,
      className: qt(M.root, f),
      ref: u,
      ...S,
      style: {
        ...(g === "elevation" && {
          "--Paper-shadow": (s.vars || s).shadows[p],
          ...(s.vars && { "--Paper-overlay": s.vars.overlays?.[p] }),
          ...(!s.vars &&
            s.palette.mode === "dark" && {
              "--Paper-overlay": `linear-gradient(${pe("#fff", Bs(p))}, ${pe(
                "#fff",
                Bs(p)
              )})`,
            }),
        }),
        ...S.style,
      },
    });
  });
function S2(a) {
  return typeof a == "string";
}
function x2(a, i, u) {
  return a === void 0 || S2(a)
    ? i
    : { ...i, ownerState: { ...i.ownerState, ...u } };
}
function C2(a, i, u) {
  return typeof a == "function" ? a(i, u) : a;
}
function T2(a, i = []) {
  if (a === void 0) return {};
  const u = {};
  return (
    Object.keys(a)
      .filter(
        (o) =>
          o.match(/^on[A-Z]/) && typeof a[o] == "function" && !i.includes(o)
      )
      .forEach((o) => {
        u[o] = a[o];
      }),
    u
  );
}
function Z0(a) {
  if (a === void 0) return {};
  const i = {};
  return (
    Object.keys(a)
      .filter((u) => !(u.match(/^on[A-Z]/) && typeof a[u] == "function"))
      .forEach((u) => {
        i[u] = a[u];
      }),
    i
  );
}
function E2(a) {
  const {
    getSlotProps: i,
    additionalProps: u,
    externalSlotProps: o,
    externalForwardedProps: s,
    className: f,
  } = a;
  if (!i) {
    const U = qt(u?.className, f, s?.className, o?.className),
      O = { ...u?.style, ...s?.style, ...o?.style },
      T = { ...u, ...s, ...o };
    return (
      U.length > 0 && (T.className = U),
      Object.keys(O).length > 0 && (T.style = O),
      { props: T, internalRef: void 0 }
    );
  }
  const h = T2({ ...s, ...o }),
    p = Z0(o),
    v = Z0(s),
    g = i(h),
    S = qt(g?.className, u?.className, f, s?.className, o?.className),
    E = { ...g?.style, ...u?.style, ...s?.style, ...o?.style },
    M = { ...g, ...u, ...v, ...p };
  return (
    S.length > 0 && (M.className = S),
    Object.keys(E).length > 0 && (M.style = E),
    { props: M, internalRef: g.ref }
  );
}
function Qi(a, i) {
  const {
      className: u,
      elementType: o,
      ownerState: s,
      externalForwardedProps: f,
      internalForwardedProps: h,
      shouldForwardComponentProp: p = !1,
      ...v
    } = i,
    {
      component: g,
      slots: S = { [a]: void 0 },
      slotProps: E = { [a]: void 0 },
      ...M
    } = f,
    U = S[a] || o,
    O = C2(E[a], s),
    {
      props: { component: T, ...q },
      internalRef: Q,
    } = E2({
      className: u,
      ...v,
      externalForwardedProps: a === "root" ? M : void 0,
      externalSlotProps: O,
    }),
    F = No(Q, O?.ref, i.ref),
    V = a === "root" ? T || g : T,
    G = x2(
      U,
      {
        ...(a === "root" && !g && !S[a] && h),
        ...(a !== "root" && !S[a] && h),
        ...q,
        ...(V && !p && { as: V }),
        ...(V && p && { component: V }),
        ref: F,
      },
      s
    );
  return [U, G];
}
function J0(a) {
  try {
    return a.matches(":focus-visible");
  } catch {}
  return !1;
}
class jo {
  static create() {
    return new jo();
  }
  static use() {
    const i = Gp(jo.create).current,
      [u, o] = j.useState(!1);
    return (
      (i.shouldMount = u),
      (i.setShouldMount = o),
      j.useEffect(i.mountEffect, [u]),
      i
    );
  }
  constructor() {
    (this.ref = { current: null }),
      (this.mounted = null),
      (this.didMount = !1),
      (this.shouldMount = !1),
      (this.setShouldMount = null);
  }
  mount() {
    return (
      this.mounted ||
        ((this.mounted = M2()),
        (this.shouldMount = !0),
        this.setShouldMount(this.shouldMount)),
      this.mounted
    );
  }
  mountEffect = () => {
    this.shouldMount &&
      !this.didMount &&
      this.ref.current !== null &&
      ((this.didMount = !0), this.mounted.resolve());
  };
  start(...i) {
    this.mount().then(() => this.ref.current?.start(...i));
  }
  stop(...i) {
    this.mount().then(() => this.ref.current?.stop(...i));
  }
  pulsate(...i) {
    this.mount().then(() => this.ref.current?.pulsate(...i));
  }
}
function A2() {
  return jo.use();
}
function M2() {
  let a, i;
  const u = new Promise((o, s) => {
    (a = o), (i = s);
  });
  return (u.resolve = a), (u.reject = i), u;
}
function O2(a) {
  const {
      className: i,
      classes: u,
      pulsate: o = !1,
      rippleX: s,
      rippleY: f,
      rippleSize: h,
      in: p,
      onExited: v,
      timeout: g,
    } = a,
    [S, E] = j.useState(!1),
    M = qt(i, u.ripple, u.rippleVisible, o && u.ripplePulsate),
    U = { width: h, height: h, top: -(h / 2) + f, left: -(h / 2) + s },
    O = qt(u.child, S && u.childLeaving, o && u.childPulsate);
  return (
    !p && !S && E(!0),
    j.useEffect(() => {
      if (!p && v != null) {
        const T = setTimeout(v, g);
        return () => {
          clearTimeout(T);
        };
      }
    }, [v, p, g]),
    N.jsx("span", {
      className: M,
      style: U,
      children: N.jsx("span", { className: O }),
    })
  );
}
const Pe = cn("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  Hs = 550,
  R2 = 80,
  z2 = er`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,
  _2 = er`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,
  D2 = er`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,
  w2 = ne("span", { name: "MuiTouchRipple", slot: "Root" })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
  }),
  B2 = ne(O2, { name: "MuiTouchRipple", slot: "Ripple" })`
  opacity: 0;
  position: absolute;

  &.${Pe.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${z2};
    animation-duration: ${Hs}ms;
    animation-timing-function: ${({ theme: a }) =>
      a.transitions.easing.easeInOut};
  }

  &.${Pe.ripplePulsate} {
    animation-duration: ${({ theme: a }) => a.transitions.duration.shorter}ms;
  }

  & .${Pe.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Pe.childLeaving} {
    opacity: 0;
    animation-name: ${_2};
    animation-duration: ${Hs}ms;
    animation-timing-function: ${({ theme: a }) =>
      a.transitions.easing.easeInOut};
  }

  & .${Pe.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${D2};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: a }) =>
      a.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,
  N2 = j.forwardRef(function (i, u) {
    const o = en({ props: i, name: "MuiTouchRipple" }),
      { center: s = !1, classes: f = {}, className: h, ...p } = o,
      [v, g] = j.useState([]),
      S = j.useRef(0),
      E = j.useRef(null);
    j.useEffect(() => {
      E.current && (E.current(), (E.current = null));
    }, [v]);
    const M = j.useRef(!1),
      U = p2(),
      O = j.useRef(null),
      T = j.useRef(null),
      q = j.useCallback(
        (G) => {
          const {
            pulsate: _,
            rippleX: J,
            rippleY: P,
            rippleSize: tt,
            cb: I,
          } = G;
          g((y) => [
            ...y,
            N.jsx(
              B2,
              {
                classes: {
                  ripple: qt(f.ripple, Pe.ripple),
                  rippleVisible: qt(f.rippleVisible, Pe.rippleVisible),
                  ripplePulsate: qt(f.ripplePulsate, Pe.ripplePulsate),
                  child: qt(f.child, Pe.child),
                  childLeaving: qt(f.childLeaving, Pe.childLeaving),
                  childPulsate: qt(f.childPulsate, Pe.childPulsate),
                },
                timeout: Hs,
                pulsate: _,
                rippleX: J,
                rippleY: P,
                rippleSize: tt,
              },
              S.current
            ),
          ]),
            (S.current += 1),
            (E.current = I);
        },
        [f]
      ),
      Q = j.useCallback(
        (G = {}, _ = {}, J = () => {}) => {
          const {
            pulsate: P = !1,
            center: tt = s || _.pulsate,
            fakeElement: I = !1,
          } = _;
          if (G?.type === "mousedown" && M.current) {
            M.current = !1;
            return;
          }
          G?.type === "touchstart" && (M.current = !0);
          const y = I ? null : T.current,
            X = y
              ? y.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let et, it, At;
          if (
            tt ||
            G === void 0 ||
            (G.clientX === 0 && G.clientY === 0) ||
            (!G.clientX && !G.touches)
          )
            (et = Math.round(X.width / 2)), (it = Math.round(X.height / 2));
          else {
            const { clientX: mt, clientY: B } =
              G.touches && G.touches.length > 0 ? G.touches[0] : G;
            (et = Math.round(mt - X.left)), (it = Math.round(B - X.top));
          }
          if (tt)
            (At = Math.sqrt((2 * X.width ** 2 + X.height ** 2) / 3)),
              At % 2 === 0 && (At += 1);
          else {
            const mt =
                Math.max(Math.abs((y ? y.clientWidth : 0) - et), et) * 2 + 2,
              B = Math.max(Math.abs((y ? y.clientHeight : 0) - it), it) * 2 + 2;
            At = Math.sqrt(mt ** 2 + B ** 2);
          }
          G?.touches
            ? O.current === null &&
              ((O.current = () => {
                q({
                  pulsate: P,
                  rippleX: et,
                  rippleY: it,
                  rippleSize: At,
                  cb: J,
                });
              }),
              U.start(R2, () => {
                O.current && (O.current(), (O.current = null));
              }))
            : q({
                pulsate: P,
                rippleX: et,
                rippleY: it,
                rippleSize: At,
                cb: J,
              });
        },
        [s, q, U]
      ),
      F = j.useCallback(() => {
        Q({}, { pulsate: !0 });
      }, [Q]),
      V = j.useCallback(
        (G, _) => {
          if ((U.clear(), G?.type === "touchend" && O.current)) {
            O.current(),
              (O.current = null),
              U.start(0, () => {
                V(G, _);
              });
            return;
          }
          (O.current = null),
            g((J) => (J.length > 0 ? J.slice(1) : J)),
            (E.current = _);
        },
        [U]
      );
    return (
      j.useImperativeHandle(u, () => ({ pulsate: F, start: Q, stop: V }), [
        F,
        Q,
        V,
      ]),
      N.jsx(w2, {
        className: qt(Pe.root, f.root, h),
        ref: T,
        ...p,
        children: N.jsx(df, { component: null, exit: !0, children: v }),
      })
    );
  });
function j2(a) {
  return un("MuiButtonBase", a);
}
const U2 = cn("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  H2 = (a) => {
    const {
        disabled: i,
        focusVisible: u,
        focusVisibleClassName: o,
        classes: s,
      } = a,
      h = An({ root: ["root", i && "disabled", u && "focusVisible"] }, j2, s);
    return u && o && (h.root += ` ${o}`), h;
  },
  $2 = ne("button", { name: "MuiButtonBase", slot: "Root" })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": { borderStyle: "none" },
    [`&.${U2.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  $s = j.forwardRef(function (i, u) {
    const o = en({ props: i, name: "MuiButtonBase" }),
      {
        action: s,
        centerRipple: f = !1,
        children: h,
        className: p,
        component: v = "button",
        disabled: g = !1,
        disableRipple: S = !1,
        disableTouchRipple: E = !1,
        focusRipple: M = !1,
        focusVisibleClassName: U,
        LinkComponent: O = "a",
        onBlur: T,
        onClick: q,
        onContextMenu: Q,
        onDragLeave: F,
        onFocus: V,
        onFocusVisible: G,
        onKeyDown: _,
        onKeyUp: J,
        onMouseDown: P,
        onMouseLeave: tt,
        onMouseUp: I,
        onTouchEnd: y,
        onTouchMove: X,
        onTouchStart: et,
        tabIndex: it = 0,
        TouchRippleProps: At,
        touchRippleRef: mt,
        type: B,
        ...K
      } = o,
      lt = j.useRef(null),
      ct = A2(),
      x = No(ct.ref, mt),
      [L, Z] = j.useState(!1);
    g && L && Z(!1),
      j.useImperativeHandle(
        s,
        () => ({
          focusVisible: () => {
            Z(!0), lt.current.focus();
          },
        }),
        []
      );
    const W = ct.shouldMount && !S && !g;
    j.useEffect(() => {
      L && M && !S && ct.pulsate();
    }, [S, M, L, ct]);
    const rt = Yn(ct, "start", P, E),
      gt = Yn(ct, "stop", Q, E),
      nt = Yn(ct, "stop", F, E),
      Mt = Yn(ct, "stop", I, E),
      Dt = Yn(
        ct,
        "stop",
        (ht) => {
          L && ht.preventDefault(), tt && tt(ht);
        },
        E
      ),
      Be = Yn(ct, "start", et, E),
      Sa = Yn(ct, "stop", y, E),
      Gn = Yn(ct, "stop", X, E),
      Vn = Yn(
        ct,
        "stop",
        (ht) => {
          J0(ht.target) || Z(!1), T && T(ht);
        },
        !1
      ),
      Xn = _o((ht) => {
        lt.current || (lt.current = ht.currentTarget),
          J0(ht.target) && (Z(!0), G && G(ht)),
          V && V(ht);
      }),
      fn = () => {
        const ht = lt.current;
        return v && v !== "button" && !(ht.tagName === "A" && ht.href);
      },
      Xa = _o((ht) => {
        M &&
          !ht.repeat &&
          L &&
          ht.key === " " &&
          ct.stop(ht, () => {
            ct.start(ht);
          }),
          ht.target === ht.currentTarget &&
            fn() &&
            ht.key === " " &&
            ht.preventDefault(),
          _ && _(ht),
          ht.target === ht.currentTarget &&
            fn() &&
            ht.key === "Enter" &&
            !g &&
            (ht.preventDefault(), q && q(ht));
      }),
      ql = _o((ht) => {
        M &&
          ht.key === " " &&
          L &&
          !ht.defaultPrevented &&
          ct.stop(ht, () => {
            ct.pulsate(ht);
          }),
          J && J(ht),
          q &&
            ht.target === ht.currentTarget &&
            fn() &&
            ht.key === " " &&
            !ht.defaultPrevented &&
            q(ht);
      });
    let ce = v;
    ce === "button" && (K.href || K.to) && (ce = O);
    const nn = {};
    ce === "button"
      ? ((nn.type = B === void 0 ? "button" : B), (nn.disabled = g))
      : (!K.href && !K.to && (nn.role = "button"),
        g && (nn["aria-disabled"] = g));
    const Se = No(u, lt),
      dn = {
        ...o,
        centerRipple: f,
        component: v,
        disabled: g,
        disableRipple: S,
        disableTouchRipple: E,
        focusRipple: M,
        tabIndex: it,
        focusVisible: L,
      },
      hn = H2(dn);
    return N.jsxs($2, {
      as: ce,
      className: qt(hn.root, p),
      ownerState: dn,
      onBlur: Vn,
      onClick: q,
      onContextMenu: gt,
      onFocus: Xn,
      onKeyDown: Xa,
      onKeyUp: ql,
      onMouseDown: rt,
      onMouseLeave: Dt,
      onMouseUp: Mt,
      onDragLeave: nt,
      onTouchEnd: Sa,
      onTouchMove: Gn,
      onTouchStart: Be,
      ref: Se,
      tabIndex: g ? -1 : it,
      type: B,
      ...nn,
      ...K,
      children: [h, W ? N.jsx(N2, { ref: x, center: f, ...At }) : null],
    });
  });
function Yn(a, i, u, o = !1) {
  return _o((s) => (u && u(s), o || a[i](s), !0));
}
function k2(a) {
  return typeof a.main == "string";
}
function L2(a, i = []) {
  if (!k2(a)) return !1;
  for (const u of i)
    if (!a.hasOwnProperty(u) || typeof a[u] != "string") return !1;
  return !0;
}
function Ya(a = []) {
  return ([, i]) => i && L2(i, a);
}
function q2(a) {
  return un("MuiCircularProgress", a);
}
cn("MuiCircularProgress", [
  "root",
  "determinate",
  "indeterminate",
  "colorPrimary",
  "colorSecondary",
  "svg",
  "circle",
  "circleDeterminate",
  "circleIndeterminate",
  "circleDisableShrink",
]);
const pa = 44,
  ks = er`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,
  Ls = er`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,
  Y2 =
    typeof ks != "string"
      ? Js`
        animation: ${ks} 1.4s linear infinite;
      `
      : null,
  G2 =
    typeof Ls != "string"
      ? Js`
        animation: ${Ls} 1.4s ease-in-out infinite;
      `
      : null,
  V2 = (a) => {
    const { classes: i, variant: u, color: o, disableShrink: s } = a,
      f = {
        root: ["root", u, `color${ut(o)}`],
        svg: ["svg"],
        circle: ["circle", `circle${ut(u)}`, s && "circleDisableShrink"],
      };
    return An(f, q2, i);
  },
  X2 = ne("span", {
    name: "MuiCircularProgress",
    slot: "Root",
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [i.root, i[u.variant], i[`color${ut(u.color)}`]];
    },
  })(
    ba(({ theme: a }) => ({
      display: "inline-block",
      variants: [
        {
          props: { variant: "determinate" },
          style: { transition: a.transitions.create("transform") },
        },
        {
          props: { variant: "indeterminate" },
          style: Y2 || { animation: `${ks} 1.4s linear infinite` },
        },
        ...Object.entries(a.palette)
          .filter(Ya())
          .map(([i]) => ({
            props: { color: i },
            style: { color: (a.vars || a).palette[i].main },
          })),
      ],
    }))
  ),
  Q2 = ne("svg", { name: "MuiCircularProgress", slot: "Svg" })({
    display: "block",
  }),
  K2 = ne("circle", {
    name: "MuiCircularProgress",
    slot: "Circle",
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [
        i.circle,
        i[`circle${ut(u.variant)}`],
        u.disableShrink && i.circleDisableShrink,
      ];
    },
  })(
    ba(({ theme: a }) => ({
      stroke: "currentColor",
      variants: [
        {
          props: { variant: "determinate" },
          style: { transition: a.transitions.create("stroke-dashoffset") },
        },
        {
          props: { variant: "indeterminate" },
          style: { strokeDasharray: "80px, 200px", strokeDashoffset: 0 },
        },
        {
          props: ({ ownerState: i }) =>
            i.variant === "indeterminate" && !i.disableShrink,
          style: G2 || { animation: `${Ls} 1.4s ease-in-out infinite` },
        },
      ],
    }))
  ),
  Z2 = j.forwardRef(function (i, u) {
    const o = en({ props: i, name: "MuiCircularProgress" }),
      {
        className: s,
        color: f = "primary",
        disableShrink: h = !1,
        size: p = 40,
        style: v,
        thickness: g = 3.6,
        value: S = 0,
        variant: E = "indeterminate",
        ...M
      } = o,
      U = {
        ...o,
        color: f,
        disableShrink: h,
        size: p,
        thickness: g,
        value: S,
        variant: E,
      },
      O = V2(U),
      T = {},
      q = {},
      Q = {};
    if (E === "determinate") {
      const F = 2 * Math.PI * ((pa - g) / 2);
      (T.strokeDasharray = F.toFixed(3)),
        (Q["aria-valuenow"] = Math.round(S)),
        (T.strokeDashoffset = `${(((100 - S) / 100) * F).toFixed(3)}px`),
        (q.transform = "rotate(-90deg)");
    }
    return N.jsx(X2, {
      className: qt(O.root, s),
      style: { width: p, height: p, ...q, ...v },
      ownerState: U,
      ref: u,
      role: "progressbar",
      ...Q,
      ...M,
      children: N.jsx(Q2, {
        className: O.svg,
        ownerState: U,
        viewBox: `${pa / 2} ${pa / 2} ${pa} ${pa}`,
        children: N.jsx(K2, {
          className: O.circle,
          style: T,
          ownerState: U,
          cx: pa,
          cy: pa,
          r: (pa - g) / 2,
          fill: "none",
          strokeWidth: g,
        }),
      }),
    });
  });
function J2(a) {
  return un("MuiTypography", a);
}
cn("MuiTypography", [
  "root",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "inherit",
  "button",
  "caption",
  "overline",
  "alignLeft",
  "alignRight",
  "alignCenter",
  "alignJustify",
  "noWrap",
  "gutterBottom",
  "paragraph",
]);
const W2 = {
    primary: !0,
    secondary: !0,
    error: !0,
    info: !0,
    success: !0,
    warning: !0,
    textPrimary: !0,
    textSecondary: !0,
    textDisabled: !0,
  },
  F2 = WS(),
  P2 = (a) => {
    const {
        align: i,
        gutterBottom: u,
        noWrap: o,
        paragraph: s,
        variant: f,
        classes: h,
      } = a,
      p = {
        root: [
          "root",
          f,
          a.align !== "inherit" && `align${ut(i)}`,
          u && "gutterBottom",
          o && "noWrap",
          s && "paragraph",
        ],
      };
    return An(p, J2, h);
  },
  I2 = ne("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [
        i.root,
        u.variant && i[u.variant],
        u.align !== "inherit" && i[`align${ut(u.align)}`],
        u.noWrap && i.noWrap,
        u.gutterBottom && i.gutterBottom,
        u.paragraph && i.paragraph,
      ];
    },
  })(
    ba(({ theme: a }) => ({
      margin: 0,
      variants: [
        {
          props: { variant: "inherit" },
          style: {
            font: "inherit",
            lineHeight: "inherit",
            letterSpacing: "inherit",
          },
        },
        ...Object.entries(a.typography)
          .filter(([i, u]) => i !== "inherit" && u && typeof u == "object")
          .map(([i, u]) => ({ props: { variant: i }, style: u })),
        ...Object.entries(a.palette)
          .filter(Ya())
          .map(([i]) => ({
            props: { color: i },
            style: { color: (a.vars || a).palette[i].main },
          })),
        ...Object.entries(a.palette?.text || {})
          .filter(([, i]) => typeof i == "string")
          .map(([i]) => ({
            props: { color: `text${ut(i)}` },
            style: { color: (a.vars || a).palette.text[i] },
          })),
        {
          props: ({ ownerState: i }) => i.align !== "inherit",
          style: { textAlign: "var(--Typography-textAlign)" },
        },
        {
          props: ({ ownerState: i }) => i.noWrap,
          style: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          },
        },
        {
          props: ({ ownerState: i }) => i.gutterBottom,
          style: { marginBottom: "0.35em" },
        },
        {
          props: ({ ownerState: i }) => i.paragraph,
          style: { marginBottom: 16 },
        },
      ],
    }))
  ),
  W0 = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p",
  },
  ie = j.forwardRef(function (i, u) {
    const { color: o, ...s } = en({ props: i, name: "MuiTypography" }),
      f = !W2[o],
      h = F2({ ...s, ...(f && { color: o }) }),
      {
        align: p = "inherit",
        className: v,
        component: g,
        gutterBottom: S = !1,
        noWrap: E = !1,
        paragraph: M = !1,
        variant: U = "body1",
        variantMapping: O = W0,
        ...T
      } = h,
      q = {
        ...h,
        align: p,
        color: o,
        className: v,
        component: g,
        gutterBottom: S,
        noWrap: E,
        paragraph: M,
        variant: U,
        variantMapping: O,
      },
      Q = g || (M ? "p" : O[U] || W0[U]) || "span",
      F = P2(q);
    return N.jsx(I2, {
      as: Q,
      ref: u,
      className: qt(F.root, v),
      ...T,
      ownerState: q,
      style: {
        ...(p !== "inherit" && { "--Typography-textAlign": p }),
        ...T.style,
      },
    });
  }),
  t3 = sn(
    N.jsx("path", {
      d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z",
    })
  );
function e3(a) {
  return un("MuiChip", a);
}
const xt = cn("MuiChip", [
    "root",
    "sizeSmall",
    "sizeMedium",
    "colorDefault",
    "colorError",
    "colorInfo",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorWarning",
    "disabled",
    "clickable",
    "clickableColorPrimary",
    "clickableColorSecondary",
    "deletable",
    "deletableColorPrimary",
    "deletableColorSecondary",
    "outlined",
    "filled",
    "outlinedPrimary",
    "outlinedSecondary",
    "filledPrimary",
    "filledSecondary",
    "avatar",
    "avatarSmall",
    "avatarMedium",
    "avatarColorPrimary",
    "avatarColorSecondary",
    "icon",
    "iconSmall",
    "iconMedium",
    "iconColorPrimary",
    "iconColorSecondary",
    "label",
    "labelSmall",
    "labelMedium",
    "deleteIcon",
    "deleteIconSmall",
    "deleteIconMedium",
    "deleteIconColorPrimary",
    "deleteIconColorSecondary",
    "deleteIconOutlinedColorPrimary",
    "deleteIconOutlinedColorSecondary",
    "deleteIconFilledColorPrimary",
    "deleteIconFilledColorSecondary",
    "focusVisible",
  ]),
  n3 = (a) => {
    const {
        classes: i,
        disabled: u,
        size: o,
        color: s,
        iconColor: f,
        onDelete: h,
        clickable: p,
        variant: v,
      } = a,
      g = {
        root: [
          "root",
          v,
          u && "disabled",
          `size${ut(o)}`,
          `color${ut(s)}`,
          p && "clickable",
          p && `clickableColor${ut(s)}`,
          h && "deletable",
          h && `deletableColor${ut(s)}`,
          `${v}${ut(s)}`,
        ],
        label: ["label", `label${ut(o)}`],
        avatar: ["avatar", `avatar${ut(o)}`, `avatarColor${ut(s)}`],
        icon: ["icon", `icon${ut(o)}`, `iconColor${ut(f)}`],
        deleteIcon: [
          "deleteIcon",
          `deleteIcon${ut(o)}`,
          `deleteIconColor${ut(s)}`,
          `deleteIcon${ut(v)}Color${ut(s)}`,
        ],
      };
    return An(g, e3, i);
  },
  a3 = ne("div", {
    name: "MuiChip",
    slot: "Root",
    overridesResolver: (a, i) => {
      const { ownerState: u } = a,
        {
          color: o,
          iconColor: s,
          clickable: f,
          onDelete: h,
          size: p,
          variant: v,
        } = u;
      return [
        { [`& .${xt.avatar}`]: i.avatar },
        { [`& .${xt.avatar}`]: i[`avatar${ut(p)}`] },
        { [`& .${xt.avatar}`]: i[`avatarColor${ut(o)}`] },
        { [`& .${xt.icon}`]: i.icon },
        { [`& .${xt.icon}`]: i[`icon${ut(p)}`] },
        { [`& .${xt.icon}`]: i[`iconColor${ut(s)}`] },
        { [`& .${xt.deleteIcon}`]: i.deleteIcon },
        { [`& .${xt.deleteIcon}`]: i[`deleteIcon${ut(p)}`] },
        { [`& .${xt.deleteIcon}`]: i[`deleteIconColor${ut(o)}`] },
        { [`& .${xt.deleteIcon}`]: i[`deleteIcon${ut(v)}Color${ut(o)}`] },
        i.root,
        i[`size${ut(p)}`],
        i[`color${ut(o)}`],
        f && i.clickable,
        f && o !== "default" && i[`clickableColor${ut(o)})`],
        h && i.deletable,
        h && o !== "default" && i[`deletableColor${ut(o)}`],
        i[v],
        i[`${v}${ut(o)}`],
      ];
    },
  })(
    ba(({ theme: a }) => {
      const i =
        a.palette.mode === "light" ? a.palette.grey[700] : a.palette.grey[300];
      return {
        maxWidth: "100%",
        fontFamily: a.typography.fontFamily,
        fontSize: a.typography.pxToRem(13),
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: 32,
        lineHeight: 1.5,
        color: (a.vars || a).palette.text.primary,
        backgroundColor: (a.vars || a).palette.action.selected,
        borderRadius: 32 / 2,
        whiteSpace: "nowrap",
        transition: a.transitions.create(["background-color", "box-shadow"]),
        cursor: "unset",
        outline: 0,
        textDecoration: "none",
        border: 0,
        padding: 0,
        verticalAlign: "middle",
        boxSizing: "border-box",
        [`&.${xt.disabled}`]: {
          opacity: (a.vars || a).palette.action.disabledOpacity,
          pointerEvents: "none",
        },
        [`& .${xt.avatar}`]: {
          marginLeft: 5,
          marginRight: -6,
          width: 24,
          height: 24,
          color: a.vars ? a.vars.palette.Chip.defaultAvatarColor : i,
          fontSize: a.typography.pxToRem(12),
        },
        [`& .${xt.avatarColorPrimary}`]: {
          color: (a.vars || a).palette.primary.contrastText,
          backgroundColor: (a.vars || a).palette.primary.dark,
        },
        [`& .${xt.avatarColorSecondary}`]: {
          color: (a.vars || a).palette.secondary.contrastText,
          backgroundColor: (a.vars || a).palette.secondary.dark,
        },
        [`& .${xt.avatarSmall}`]: {
          marginLeft: 4,
          marginRight: -4,
          width: 18,
          height: 18,
          fontSize: a.typography.pxToRem(10),
        },
        [`& .${xt.icon}`]: { marginLeft: 5, marginRight: -6 },
        [`& .${xt.deleteIcon}`]: {
          WebkitTapHighlightColor: "transparent",
          color: a.vars
            ? `rgba(${a.vars.palette.text.primaryChannel} / 0.26)`
            : pe(a.palette.text.primary, 0.26),
          fontSize: 22,
          cursor: "pointer",
          margin: "0 5px 0 -6px",
          "&:hover": {
            color: a.vars
              ? `rgba(${a.vars.palette.text.primaryChannel} / 0.4)`
              : pe(a.palette.text.primary, 0.4),
          },
        },
        variants: [
          {
            props: { size: "small" },
            style: {
              height: 24,
              [`& .${xt.icon}`]: {
                fontSize: 18,
                marginLeft: 4,
                marginRight: -4,
              },
              [`& .${xt.deleteIcon}`]: {
                fontSize: 16,
                marginRight: 4,
                marginLeft: -4,
              },
            },
          },
          ...Object.entries(a.palette)
            .filter(Ya(["contrastText"]))
            .map(([u]) => ({
              props: { color: u },
              style: {
                backgroundColor: (a.vars || a).palette[u].main,
                color: (a.vars || a).palette[u].contrastText,
                [`& .${xt.deleteIcon}`]: {
                  color: a.vars
                    ? `rgba(${a.vars.palette[u].contrastTextChannel} / 0.7)`
                    : pe(a.palette[u].contrastText, 0.7),
                  "&:hover, &:active": {
                    color: (a.vars || a).palette[u].contrastText,
                  },
                },
              },
            })),
          {
            props: (u) => u.iconColor === u.color,
            style: {
              [`& .${xt.icon}`]: {
                color: a.vars ? a.vars.palette.Chip.defaultIconColor : i,
              },
            },
          },
          {
            props: (u) => u.iconColor === u.color && u.color !== "default",
            style: { [`& .${xt.icon}`]: { color: "inherit" } },
          },
          {
            props: { onDelete: !0 },
            style: {
              [`&.${xt.focusVisible}`]: {
                backgroundColor: a.vars
                  ? `rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`
                  : pe(
                      a.palette.action.selected,
                      a.palette.action.selectedOpacity +
                        a.palette.action.focusOpacity
                    ),
              },
            },
          },
          ...Object.entries(a.palette)
            .filter(Ya(["dark"]))
            .map(([u]) => ({
              props: { color: u, onDelete: !0 },
              style: {
                [`&.${xt.focusVisible}`]: {
                  background: (a.vars || a).palette[u].dark,
                },
              },
            })),
          {
            props: { clickable: !0 },
            style: {
              userSelect: "none",
              WebkitTapHighlightColor: "transparent",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: a.vars
                  ? `rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))`
                  : pe(
                      a.palette.action.selected,
                      a.palette.action.selectedOpacity +
                        a.palette.action.hoverOpacity
                    ),
              },
              [`&.${xt.focusVisible}`]: {
                backgroundColor: a.vars
                  ? `rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`
                  : pe(
                      a.palette.action.selected,
                      a.palette.action.selectedOpacity +
                        a.palette.action.focusOpacity
                    ),
              },
              "&:active": { boxShadow: (a.vars || a).shadows[1] },
            },
          },
          ...Object.entries(a.palette)
            .filter(Ya(["dark"]))
            .map(([u]) => ({
              props: { color: u, clickable: !0 },
              style: {
                [`&:hover, &.${xt.focusVisible}`]: {
                  backgroundColor: (a.vars || a).palette[u].dark,
                },
              },
            })),
          {
            props: { variant: "outlined" },
            style: {
              backgroundColor: "transparent",
              border: a.vars
                ? `1px solid ${a.vars.palette.Chip.defaultBorder}`
                : `1px solid ${
                    a.palette.mode === "light"
                      ? a.palette.grey[400]
                      : a.palette.grey[700]
                  }`,
              [`&.${xt.clickable}:hover`]: {
                backgroundColor: (a.vars || a).palette.action.hover,
              },
              [`&.${xt.focusVisible}`]: {
                backgroundColor: (a.vars || a).palette.action.focus,
              },
              [`& .${xt.avatar}`]: { marginLeft: 4 },
              [`& .${xt.avatarSmall}`]: { marginLeft: 2 },
              [`& .${xt.icon}`]: { marginLeft: 4 },
              [`& .${xt.iconSmall}`]: { marginLeft: 2 },
              [`& .${xt.deleteIcon}`]: { marginRight: 5 },
              [`& .${xt.deleteIconSmall}`]: { marginRight: 3 },
            },
          },
          ...Object.entries(a.palette)
            .filter(Ya())
            .map(([u]) => ({
              props: { variant: "outlined", color: u },
              style: {
                color: (a.vars || a).palette[u].main,
                border: `1px solid ${
                  a.vars
                    ? `rgba(${a.vars.palette[u].mainChannel} / 0.7)`
                    : pe(a.palette[u].main, 0.7)
                }`,
                [`&.${xt.clickable}:hover`]: {
                  backgroundColor: a.vars
                    ? `rgba(${a.vars.palette[u].mainChannel} / ${a.vars.palette.action.hoverOpacity})`
                    : pe(a.palette[u].main, a.palette.action.hoverOpacity),
                },
                [`&.${xt.focusVisible}`]: {
                  backgroundColor: a.vars
                    ? `rgba(${a.vars.palette[u].mainChannel} / ${a.vars.palette.action.focusOpacity})`
                    : pe(a.palette[u].main, a.palette.action.focusOpacity),
                },
                [`& .${xt.deleteIcon}`]: {
                  color: a.vars
                    ? `rgba(${a.vars.palette[u].mainChannel} / 0.7)`
                    : pe(a.palette[u].main, 0.7),
                  "&:hover, &:active": { color: (a.vars || a).palette[u].main },
                },
              },
            })),
        ],
      };
    })
  ),
  l3 = ne("span", {
    name: "MuiChip",
    slot: "Label",
    overridesResolver: (a, i) => {
      const { ownerState: u } = a,
        { size: o } = u;
      return [i.label, i[`label${ut(o)}`]];
    },
  })({
    overflow: "hidden",
    textOverflow: "ellipsis",
    paddingLeft: 12,
    paddingRight: 12,
    whiteSpace: "nowrap",
    variants: [
      {
        props: { variant: "outlined" },
        style: { paddingLeft: 11, paddingRight: 11 },
      },
      { props: { size: "small" }, style: { paddingLeft: 8, paddingRight: 8 } },
      {
        props: { size: "small", variant: "outlined" },
        style: { paddingLeft: 7, paddingRight: 7 },
      },
    ],
  });
function F0(a) {
  return a.key === "Backspace" || a.key === "Delete";
}
const i3 = j.forwardRef(function (i, u) {
    const o = en({ props: i, name: "MuiChip" }),
      {
        avatar: s,
        className: f,
        clickable: h,
        color: p = "default",
        component: v,
        deleteIcon: g,
        disabled: S = !1,
        icon: E,
        label: M,
        onClick: U,
        onDelete: O,
        onKeyDown: T,
        onKeyUp: q,
        size: Q = "medium",
        variant: F = "filled",
        tabIndex: V,
        skipFocusWhenDisabled: G = !1,
        slots: _ = {},
        slotProps: J = {},
        ...P
      } = o,
      tt = j.useRef(null),
      I = No(tt, u),
      y = (nt) => {
        nt.stopPropagation(), O && O(nt);
      },
      X = (nt) => {
        nt.currentTarget === nt.target && F0(nt) && nt.preventDefault(),
          T && T(nt);
      },
      et = (nt) => {
        nt.currentTarget === nt.target && O && F0(nt) && O(nt), q && q(nt);
      },
      it = h !== !1 && U ? !0 : h,
      At = it || O ? $s : v || "div",
      mt = {
        ...o,
        component: At,
        disabled: S,
        size: Q,
        color: p,
        iconColor: (j.isValidElement(E) && E.props.color) || p,
        onDelete: !!O,
        clickable: it,
        variant: F,
      },
      B = n3(mt),
      K =
        At === $s
          ? {
              component: v || "div",
              focusVisibleClassName: B.focusVisible,
              ...(O && { disableRipple: !0 }),
            }
          : {};
    let lt = null;
    O &&
      (lt =
        g && j.isValidElement(g)
          ? j.cloneElement(g, {
              className: qt(g.props.className, B.deleteIcon),
              onClick: y,
            })
          : N.jsx(t3, { className: B.deleteIcon, onClick: y }));
    let ct = null;
    s &&
      j.isValidElement(s) &&
      (ct = j.cloneElement(s, { className: qt(B.avatar, s.props.className) }));
    let x = null;
    E &&
      j.isValidElement(E) &&
      (x = j.cloneElement(E, { className: qt(B.icon, E.props.className) }));
    const L = { slots: _, slotProps: J },
      [Z, W] = Qi("root", {
        elementType: a3,
        externalForwardedProps: { ...L, ...P },
        ownerState: mt,
        shouldForwardComponentProp: !0,
        ref: I,
        className: qt(B.root, f),
        additionalProps: {
          disabled: it && S ? !0 : void 0,
          tabIndex: G && S ? -1 : V,
          ...K,
        },
        getSlotProps: (nt) => ({
          ...nt,
          onClick: (Mt) => {
            nt.onClick?.(Mt), U?.(Mt);
          },
          onKeyDown: (Mt) => {
            nt.onKeyDown?.(Mt), X?.(Mt);
          },
          onKeyUp: (Mt) => {
            nt.onKeyUp?.(Mt), et?.(Mt);
          },
        }),
      }),
      [rt, gt] = Qi("label", {
        elementType: l3,
        externalForwardedProps: L,
        ownerState: mt,
        className: B.label,
      });
    return N.jsxs(Z, {
      as: At,
      ...W,
      children: [ct || x, N.jsx(rt, { ...gt, children: M }), lt],
    });
  }),
  r3 = sn(
    N.jsx("path", {
      d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
    })
  );
function o3(a) {
  return un("MuiAvatar", a);
}
cn("MuiAvatar", [
  "root",
  "colorDefault",
  "circular",
  "rounded",
  "square",
  "img",
  "fallback",
]);
const u3 = (a) => {
    const { classes: i, variant: u, colorDefault: o } = a;
    return An(
      {
        root: ["root", u, o && "colorDefault"],
        img: ["img"],
        fallback: ["fallback"],
      },
      o3,
      i
    );
  },
  c3 = ne("div", {
    name: "MuiAvatar",
    slot: "Root",
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [i.root, i[u.variant], u.colorDefault && i.colorDefault];
    },
  })(
    ba(({ theme: a }) => ({
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      width: 40,
      height: 40,
      fontFamily: a.typography.fontFamily,
      fontSize: a.typography.pxToRem(20),
      lineHeight: 1,
      borderRadius: "50%",
      overflow: "hidden",
      userSelect: "none",
      variants: [
        {
          props: { variant: "rounded" },
          style: { borderRadius: (a.vars || a).shape.borderRadius },
        },
        { props: { variant: "square" }, style: { borderRadius: 0 } },
        {
          props: { colorDefault: !0 },
          style: {
            color: (a.vars || a).palette.background.default,
            ...(a.vars
              ? { backgroundColor: a.vars.palette.Avatar.defaultBg }
              : {
                  backgroundColor: a.palette.grey[400],
                  ...a.applyStyles("dark", {
                    backgroundColor: a.palette.grey[600],
                  }),
                }),
          },
        },
      ],
    }))
  ),
  s3 = ne("img", { name: "MuiAvatar", slot: "Img" })({
    width: "100%",
    height: "100%",
    textAlign: "center",
    objectFit: "cover",
    color: "transparent",
    textIndent: 1e4,
  }),
  f3 = ne(r3, { name: "MuiAvatar", slot: "Fallback" })({
    width: "75%",
    height: "75%",
  });
function d3({ crossOrigin: a, referrerPolicy: i, src: u, srcSet: o }) {
  const [s, f] = j.useState(!1);
  return (
    j.useEffect(() => {
      if (!u && !o) return;
      f(!1);
      let h = !0;
      const p = new Image();
      return (
        (p.onload = () => {
          h && f("loaded");
        }),
        (p.onerror = () => {
          h && f("error");
        }),
        (p.crossOrigin = a),
        (p.referrerPolicy = i),
        (p.src = u),
        o && (p.srcset = o),
        () => {
          h = !1;
        }
      );
    }, [a, i, u, o]),
    s
  );
}
const h3 = j.forwardRef(function (i, u) {
    const o = en({ props: i, name: "MuiAvatar" }),
      {
        alt: s,
        children: f,
        className: h,
        component: p = "div",
        slots: v = {},
        slotProps: g = {},
        imgProps: S,
        sizes: E,
        src: M,
        srcSet: U,
        variant: O = "circular",
        ...T
      } = o;
    let q = null;
    const Q = { ...o, component: p, variant: O },
      F = d3({
        ...S,
        ...(typeof g.img == "function" ? g.img(Q) : g.img),
        src: M,
        srcSet: U,
      }),
      V = M || U,
      G = V && F !== "error";
    (Q.colorDefault = !G), delete Q.ownerState;
    const _ = u3(Q),
      [J, P] = Qi("root", {
        ref: u,
        className: qt(_.root, h),
        elementType: c3,
        externalForwardedProps: { slots: v, slotProps: g, component: p, ...T },
        ownerState: Q,
      }),
      [tt, I] = Qi("img", {
        className: _.img,
        elementType: s3,
        externalForwardedProps: {
          slots: v,
          slotProps: { img: { ...S, ...g.img } },
        },
        additionalProps: { alt: s, src: M, srcSet: U, sizes: E },
        ownerState: Q,
      }),
      [y, X] = Qi("fallback", {
        className: _.fallback,
        elementType: f3,
        externalForwardedProps: { slots: v, slotProps: g },
        shouldForwardComponentProp: !0,
        ownerState: Q,
      });
    return (
      G
        ? (q = N.jsx(tt, { ...I }))
        : f || f === 0
        ? (q = f)
        : V && s
        ? (q = s[0])
        : (q = N.jsx(y, { ...X })),
      N.jsx(J, { ...P, children: q })
    );
  }),
  m3 = cn("MuiBox", ["root"]),
  p3 = Wo(),
  te = yb({
    themeId: Tn,
    defaultTheme: p3,
    defaultClassName: m3.root,
    generateClassName: Tp.generate,
  });
function g3(a) {
  return un("MuiButton", a);
}
const ka = cn("MuiButton", [
    "root",
    "text",
    "textInherit",
    "textPrimary",
    "textSecondary",
    "textSuccess",
    "textError",
    "textInfo",
    "textWarning",
    "outlined",
    "outlinedInherit",
    "outlinedPrimary",
    "outlinedSecondary",
    "outlinedSuccess",
    "outlinedError",
    "outlinedInfo",
    "outlinedWarning",
    "contained",
    "containedInherit",
    "containedPrimary",
    "containedSecondary",
    "containedSuccess",
    "containedError",
    "containedInfo",
    "containedWarning",
    "disableElevation",
    "focusVisible",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorError",
    "colorInfo",
    "colorWarning",
    "textSizeSmall",
    "textSizeMedium",
    "textSizeLarge",
    "outlinedSizeSmall",
    "outlinedSizeMedium",
    "outlinedSizeLarge",
    "containedSizeSmall",
    "containedSizeMedium",
    "containedSizeLarge",
    "sizeMedium",
    "sizeSmall",
    "sizeLarge",
    "fullWidth",
    "startIcon",
    "endIcon",
    "icon",
    "iconSizeSmall",
    "iconSizeMedium",
    "iconSizeLarge",
    "loading",
    "loadingWrapper",
    "loadingIconPlaceholder",
    "loadingIndicator",
    "loadingPositionCenter",
    "loadingPositionStart",
    "loadingPositionEnd",
  ]),
  y3 = j.createContext({}),
  v3 = j.createContext(void 0),
  b3 = (a) => {
    const {
        color: i,
        disableElevation: u,
        fullWidth: o,
        size: s,
        variant: f,
        loading: h,
        loadingPosition: p,
        classes: v,
      } = a,
      g = {
        root: [
          "root",
          h && "loading",
          f,
          `${f}${ut(i)}`,
          `size${ut(s)}`,
          `${f}Size${ut(s)}`,
          `color${ut(i)}`,
          u && "disableElevation",
          o && "fullWidth",
          h && `loadingPosition${ut(p)}`,
        ],
        startIcon: ["icon", "startIcon", `iconSize${ut(s)}`],
        endIcon: ["icon", "endIcon", `iconSize${ut(s)}`],
        loadingIndicator: ["loadingIndicator"],
        loadingWrapper: ["loadingWrapper"],
      },
      S = An(g, g3, v);
    return { ...v, ...S };
  },
  Vp = [
    {
      props: { size: "small" },
      style: { "& > *:nth-of-type(1)": { fontSize: 18 } },
    },
    {
      props: { size: "medium" },
      style: { "& > *:nth-of-type(1)": { fontSize: 20 } },
    },
    {
      props: { size: "large" },
      style: { "& > *:nth-of-type(1)": { fontSize: 22 } },
    },
  ],
  S3 = ne($s, {
    shouldForwardProp: (a) => Lp(a) || a === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [
        i.root,
        i[u.variant],
        i[`${u.variant}${ut(u.color)}`],
        i[`size${ut(u.size)}`],
        i[`${u.variant}Size${ut(u.size)}`],
        u.color === "inherit" && i.colorInherit,
        u.disableElevation && i.disableElevation,
        u.fullWidth && i.fullWidth,
        u.loading && i.loading,
      ];
    },
  })(
    ba(({ theme: a }) => {
      const i =
          a.palette.mode === "light"
            ? a.palette.grey[300]
            : a.palette.grey[800],
        u =
          a.palette.mode === "light"
            ? a.palette.grey.A100
            : a.palette.grey[700];
      return {
        ...a.typography.button,
        minWidth: 64,
        padding: "6px 16px",
        border: 0,
        borderRadius: (a.vars || a).shape.borderRadius,
        transition: a.transitions.create(
          ["background-color", "box-shadow", "border-color", "color"],
          { duration: a.transitions.duration.short }
        ),
        "&:hover": { textDecoration: "none" },
        [`&.${ka.disabled}`]: { color: (a.vars || a).palette.action.disabled },
        variants: [
          {
            props: { variant: "contained" },
            style: {
              color: "var(--variant-containedColor)",
              backgroundColor: "var(--variant-containedBg)",
              boxShadow: (a.vars || a).shadows[2],
              "&:hover": {
                boxShadow: (a.vars || a).shadows[4],
                "@media (hover: none)": { boxShadow: (a.vars || a).shadows[2] },
              },
              "&:active": { boxShadow: (a.vars || a).shadows[8] },
              [`&.${ka.focusVisible}`]: { boxShadow: (a.vars || a).shadows[6] },
              [`&.${ka.disabled}`]: {
                color: (a.vars || a).palette.action.disabled,
                boxShadow: (a.vars || a).shadows[0],
                backgroundColor: (a.vars || a).palette.action
                  .disabledBackground,
              },
            },
          },
          {
            props: { variant: "outlined" },
            style: {
              padding: "5px 15px",
              border: "1px solid currentColor",
              borderColor: "var(--variant-outlinedBorder, currentColor)",
              backgroundColor: "var(--variant-outlinedBg)",
              color: "var(--variant-outlinedColor)",
              [`&.${ka.disabled}`]: {
                border: `1px solid ${
                  (a.vars || a).palette.action.disabledBackground
                }`,
              },
            },
          },
          {
            props: { variant: "text" },
            style: {
              padding: "6px 8px",
              color: "var(--variant-textColor)",
              backgroundColor: "var(--variant-textBg)",
            },
          },
          ...Object.entries(a.palette)
            .filter(Ya())
            .map(([o]) => ({
              props: { color: o },
              style: {
                "--variant-textColor": (a.vars || a).palette[o].main,
                "--variant-outlinedColor": (a.vars || a).palette[o].main,
                "--variant-outlinedBorder": a.vars
                  ? `rgba(${a.vars.palette[o].mainChannel} / 0.5)`
                  : pe(a.palette[o].main, 0.5),
                "--variant-containedColor": (a.vars || a).palette[o]
                  .contrastText,
                "--variant-containedBg": (a.vars || a).palette[o].main,
                "@media (hover: hover)": {
                  "&:hover": {
                    "--variant-containedBg": (a.vars || a).palette[o].dark,
                    "--variant-textBg": a.vars
                      ? `rgba(${a.vars.palette[o].mainChannel} / ${a.vars.palette.action.hoverOpacity})`
                      : pe(a.palette[o].main, a.palette.action.hoverOpacity),
                    "--variant-outlinedBorder": (a.vars || a).palette[o].main,
                    "--variant-outlinedBg": a.vars
                      ? `rgba(${a.vars.palette[o].mainChannel} / ${a.vars.palette.action.hoverOpacity})`
                      : pe(a.palette[o].main, a.palette.action.hoverOpacity),
                  },
                },
              },
            })),
          {
            props: { color: "inherit" },
            style: {
              color: "inherit",
              borderColor: "currentColor",
              "--variant-containedBg": a.vars
                ? a.vars.palette.Button.inheritContainedBg
                : i,
              "@media (hover: hover)": {
                "&:hover": {
                  "--variant-containedBg": a.vars
                    ? a.vars.palette.Button.inheritContainedHoverBg
                    : u,
                  "--variant-textBg": a.vars
                    ? `rgba(${a.vars.palette.text.primaryChannel} / ${a.vars.palette.action.hoverOpacity})`
                    : pe(a.palette.text.primary, a.palette.action.hoverOpacity),
                  "--variant-outlinedBg": a.vars
                    ? `rgba(${a.vars.palette.text.primaryChannel} / ${a.vars.palette.action.hoverOpacity})`
                    : pe(a.palette.text.primary, a.palette.action.hoverOpacity),
                },
              },
            },
          },
          {
            props: { size: "small", variant: "text" },
            style: { padding: "4px 5px", fontSize: a.typography.pxToRem(13) },
          },
          {
            props: { size: "large", variant: "text" },
            style: { padding: "8px 11px", fontSize: a.typography.pxToRem(15) },
          },
          {
            props: { size: "small", variant: "outlined" },
            style: { padding: "3px 9px", fontSize: a.typography.pxToRem(13) },
          },
          {
            props: { size: "large", variant: "outlined" },
            style: { padding: "7px 21px", fontSize: a.typography.pxToRem(15) },
          },
          {
            props: { size: "small", variant: "contained" },
            style: { padding: "4px 10px", fontSize: a.typography.pxToRem(13) },
          },
          {
            props: { size: "large", variant: "contained" },
            style: { padding: "8px 22px", fontSize: a.typography.pxToRem(15) },
          },
          {
            props: { disableElevation: !0 },
            style: {
              boxShadow: "none",
              "&:hover": { boxShadow: "none" },
              [`&.${ka.focusVisible}`]: { boxShadow: "none" },
              "&:active": { boxShadow: "none" },
              [`&.${ka.disabled}`]: { boxShadow: "none" },
            },
          },
          { props: { fullWidth: !0 }, style: { width: "100%" } },
          {
            props: { loadingPosition: "center" },
            style: {
              transition: a.transitions.create(
                ["background-color", "box-shadow", "border-color"],
                { duration: a.transitions.duration.short }
              ),
              [`&.${ka.loading}`]: { color: "transparent" },
            },
          },
        ],
      };
    })
  ),
  x3 = ne("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [
        i.startIcon,
        u.loading && i.startIconLoadingStart,
        i[`iconSize${ut(u.size)}`],
      ];
    },
  })(({ theme: a }) => ({
    display: "inherit",
    marginRight: 8,
    marginLeft: -4,
    variants: [
      { props: { size: "small" }, style: { marginLeft: -2 } },
      {
        props: { loadingPosition: "start", loading: !0 },
        style: {
          transition: a.transitions.create(["opacity"], {
            duration: a.transitions.duration.short,
          }),
          opacity: 0,
        },
      },
      {
        props: { loadingPosition: "start", loading: !0, fullWidth: !0 },
        style: { marginRight: -8 },
      },
      ...Vp,
    ],
  })),
  C3 = ne("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [
        i.endIcon,
        u.loading && i.endIconLoadingEnd,
        i[`iconSize${ut(u.size)}`],
      ];
    },
  })(({ theme: a }) => ({
    display: "inherit",
    marginRight: -4,
    marginLeft: 8,
    variants: [
      { props: { size: "small" }, style: { marginRight: -2 } },
      {
        props: { loadingPosition: "end", loading: !0 },
        style: {
          transition: a.transitions.create(["opacity"], {
            duration: a.transitions.duration.short,
          }),
          opacity: 0,
        },
      },
      {
        props: { loadingPosition: "end", loading: !0, fullWidth: !0 },
        style: { marginLeft: -8 },
      },
      ...Vp,
    ],
  })),
  T3 = ne("span", { name: "MuiButton", slot: "LoadingIndicator" })(
    ({ theme: a }) => ({
      display: "none",
      position: "absolute",
      visibility: "visible",
      variants: [
        { props: { loading: !0 }, style: { display: "flex" } },
        { props: { loadingPosition: "start" }, style: { left: 14 } },
        {
          props: { loadingPosition: "start", size: "small" },
          style: { left: 10 },
        },
        {
          props: { variant: "text", loadingPosition: "start" },
          style: { left: 6 },
        },
        {
          props: { loadingPosition: "center" },
          style: {
            left: "50%",
            transform: "translate(-50%)",
            color: (a.vars || a).palette.action.disabled,
          },
        },
        { props: { loadingPosition: "end" }, style: { right: 14 } },
        {
          props: { loadingPosition: "end", size: "small" },
          style: { right: 10 },
        },
        {
          props: { variant: "text", loadingPosition: "end" },
          style: { right: 6 },
        },
        {
          props: { loadingPosition: "start", fullWidth: !0 },
          style: { position: "relative", left: -10 },
        },
        {
          props: { loadingPosition: "end", fullWidth: !0 },
          style: { position: "relative", right: -10 },
        },
      ],
    })
  ),
  P0 = ne("span", { name: "MuiButton", slot: "LoadingIconPlaceholder" })({
    display: "inline-block",
    width: "1em",
    height: "1em",
  }),
  I0 = j.forwardRef(function (i, u) {
    const o = j.useContext(y3),
      s = j.useContext(v3),
      f = Wi(o, i),
      h = en({ props: f, name: "MuiButton" }),
      {
        children: p,
        color: v = "primary",
        component: g = "button",
        className: S,
        disabled: E = !1,
        disableElevation: M = !1,
        disableFocusRipple: U = !1,
        endIcon: O,
        focusVisibleClassName: T,
        fullWidth: q = !1,
        id: Q,
        loading: F = null,
        loadingIndicator: V,
        loadingPosition: G = "center",
        size: _ = "medium",
        startIcon: J,
        type: P,
        variant: tt = "text",
        ...I
      } = h,
      y = Dp(Q),
      X = V ?? N.jsx(Z2, { "aria-labelledby": y, color: "inherit", size: 16 }),
      et = {
        ...h,
        color: v,
        component: g,
        disabled: E,
        disableElevation: M,
        disableFocusRipple: U,
        fullWidth: q,
        loading: F,
        loadingIndicator: X,
        loadingPosition: G,
        size: _,
        type: P,
        variant: tt,
      },
      it = b3(et),
      At =
        (J || (F && G === "start")) &&
        N.jsx(x3, {
          className: it.startIcon,
          ownerState: et,
          children:
            J ||
            N.jsx(P0, { className: it.loadingIconPlaceholder, ownerState: et }),
        }),
      mt =
        (O || (F && G === "end")) &&
        N.jsx(C3, {
          className: it.endIcon,
          ownerState: et,
          children:
            O ||
            N.jsx(P0, { className: it.loadingIconPlaceholder, ownerState: et }),
        }),
      B = s || "",
      K =
        typeof F == "boolean"
          ? N.jsx("span", {
              className: it.loadingWrapper,
              style: { display: "contents" },
              children:
                F &&
                N.jsx(T3, {
                  className: it.loadingIndicator,
                  ownerState: et,
                  children: X,
                }),
            })
          : null;
    return N.jsxs(S3, {
      ownerState: et,
      className: qt(o.className, it.root, S, B),
      component: g,
      disabled: E || F,
      focusRipple: !U,
      focusVisibleClassName: qt(it.focusVisible, T),
      ref: u,
      type: P,
      id: F ? y : Q,
      ...I,
      classes: it,
      children: [At, G !== "end" && K, p, G === "end" && K, mt],
    });
  });
function E3(a) {
  return un("MuiCard", a);
}
cn("MuiCard", ["root"]);
const A3 = (a) => {
    const { classes: i } = a;
    return An({ root: ["root"] }, E3, i);
  },
  M3 = ne(b2, { name: "MuiCard", slot: "Root" })({ overflow: "hidden" }),
  tp = j.forwardRef(function (i, u) {
    const o = en({ props: i, name: "MuiCard" }),
      { className: s, raised: f = !1, ...h } = o,
      p = { ...o, raised: f },
      v = A3(p);
    return N.jsx(M3, {
      className: qt(v.root, s),
      elevation: f ? 8 : void 0,
      ref: u,
      ownerState: p,
      ...h,
    });
  }),
  ep = dS({
    createStyledComponent: ne("div", { name: "MuiStack", slot: "Root" }),
    useThemeProps: (a) => en({ props: a, name: "MuiStack" }),
  }),
  O3 = sn(
    N.jsx("path", {
      d: "M12 7V3H2v18h20V7zM6 19H4v-2h2zm0-4H4v-2h2zm0-4H4V9h2zm0-4H4V5h2zm4 12H8v-2h2zm0-4H8v-2h2zm0-4H8V9h2zm0-4H8V5h2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8zm-2-8h-2v2h2zm0 4h-2v2h2z",
    })
  ),
  R3 = sn(
    N.jsx("path", {
      d: "M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6z",
    })
  ),
  z3 = sn(
    N.jsx("path", {
      d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z",
    })
  ),
  _3 = sn(
    N.jsx("path", {
      d: "M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2M5 8V7h2v3.82C5.84 10.4 5 9.3 5 8m14 0c0 1.3-.84 2.4-2 2.82V7h2z",
    })
  ),
  D3 = sn(
    N.jsx("path", {
      d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56M12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56m2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8M12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96M14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2m.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2z",
    })
  ),
  w3 = sn(
    N.jsx("path", {
      d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z",
    })
  ),
  B3 = sn(
    N.jsx("path", {
      d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02z",
    })
  ),
  N3 = sn([
    N.jsx(
      "path",
      {
        d: "M13 8.57c-.79 0-1.43.64-1.43 1.43s.64 1.43 1.43 1.43 1.43-.64 1.43-1.43-.64-1.43-1.43-1.43",
      },
      "0"
    ),
    N.jsx(
      "path",
      {
        d: "M13 3C9.25 3 6.2 5.94 6.02 9.64L4.1 12.2c-.25.33-.01.8.4.8H6v3c0 1.1.9 2 2 2h1v3h7v-4.68c2.36-1.12 4-3.53 4-6.32 0-3.87-3.13-7-7-7m3 7c0 .13-.01.26-.02.39l.83.66c.08.06.1.16.05.25l-.8 1.39c-.05.09-.16.12-.24.09l-.99-.4c-.21.16-.43.29-.67.39L14 13.83c-.01.1-.1.17-.2.17h-1.6c-.1 0-.18-.07-.2-.17l-.15-1.06c-.25-.1-.47-.23-.68-.39l-.99.4c-.09.03-.2 0-.25-.09l-.8-1.39c-.05-.08-.03-.19.05-.25l.84-.66c-.01-.13-.02-.26-.02-.39s.02-.27.04-.39l-.85-.66c-.08-.06-.1-.16-.05-.26l.8-1.38c.05-.09.15-.12.24-.09l1 .4c.2-.15.43-.29.67-.39L12 6.17c.02-.1.1-.17.2-.17h1.6c.1 0 .18.07.2.17l.15 1.06c.24.1.46.23.67.39l1-.4c.09-.03.2 0 .24.09l.8 1.38c.05.09.03.2-.05.26l-.85.66c.03.12.04.25.04.39",
      },
      "1"
    ),
  ]),
  j3 = sn(
    N.jsx("path", {
      d: "M5 13.18v4L12 21l7-3.82v-4L12 17zM12 3 1 9l11 6 9-4.91V17h2V9z",
    })
  ),
  U3 = () => {
    const [a, i] = j.useState(null),
      u = [
        { name: "React", color: "#61dafb" },
        { name: "JavaScript", color: "#f7df1e" },
        { name: "HTML5", color: "#e34f26" },
        { name: "CSS3", color: "#1572b6" },
        { name: "Bootstrap", color: "#563d7c" },
        { name: "Material-UI", color: "#0081cb" },
        { name: "Git", color: "#f05032" },
        { name: "Responsive Design", color: "#EBA83D" },
        { name: "UI/UX Design", color: "#1F1F23" },
      ],
      o = [
        {
          title: "Frontend Developer",
          company: "HindukushSoft Technologies",
          description:
            "Currently building modern web applications and user interfaces with React and modern frontend technologies.",
          icon: N.jsx(R3, {}),
          color: "#EBA83D",
        },
        {
          title: "Frontend Technology Trainer",
          company: "Freelance",
          description:
            "Teaching web development concepts, React, and modern frontend technologies to aspiring developers through personalized learning.",
          icon: N.jsx(j3, {}),
          color: "#1F1F23",
        },
        {
          title: "Computer Science Graduate",
          company: "University of Chitral",
          description:
            "Built a strong foundation in computer science principles and software development methodologies.",
          icon: N.jsx(_3, {}),
          color: "#3776ab",
        },
        {
          title: "Aspire Leader Alumna",
          company: "Leadership Program",
          description:
            "Developed leadership skills and community impact initiatives that drive positive change.",
          icon: N.jsx(N3, {}),
          color: "#009688",
        },
      ],
      s = [
        {
          icon: N.jsx(B3, {}),
          text: "+92 343 0891330",
          href: "tel:+923430891330",
          color: "#EBA83D",
        },
        {
          icon: N.jsx(z3, {}),
          text: "adila@hindukushsoft.com",
          href: "mailto:adila@hindukushsoft.com",
          color: "#1F1F23",
        },
        {
          icon: N.jsx(w3, {}),
          text: "linkedin.com/in/adila-tasnim-09b073265",
          href: "https://linkedin.com/in/adila-tasnim-09b073265",
          color: "#0077b5",
        },
        {
          icon: N.jsx(D3, {}),
          text: "adila.is-a.dev",
          href: "https://adila.is-a.dev",
          color: "#3776ab",
        },
        {
          icon: N.jsx(O3, {}),
          text: "www.hindukushsoft.com",
          href: "https://www.hindukushsoft.com",
          color: "#009688",
        },
      ];
    return N.jsx(te, {
      sx: {
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "#FAFAFA",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
      },
      children: N.jsxs(te, {
        sx: {
          backgroundColor: "white",
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
          border: "1px solid rgba(0, 0, 0, 0.06)",
          width: { xs: "95vw", sm: "90vw", md: "85vw" },
          maxWidth: "1200px",
          margin: "0 auto",
        },
        children: [
          N.jsx(te, {
            sx: {
              position: "relative",
              background: "linear-gradient(135deg, #1F1F23 0%, #2A2A2E 100%)",
              color: "white",
              px: { xs: 3, sm: 4, md: 6 },
              py: { xs: 6, md: 8 },
            },
            children: N.jsxs(te, {
              sx: {
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: { xs: 4, md: 6 },
                maxWidth: "1000px",
                mx: "auto",
              },
              children: [
                N.jsx(te, {
                  sx: { flex: "0 0 auto", position: "relative" },
                  children: N.jsx(te, {
                    sx: {
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        inset: "-4px",
                        background: "linear-gradient(45deg, #EBA83D, #F4C574)",
                        borderRadius: "50%",
                        zIndex: 0,
                      },
                    },
                    children: N.jsx(h3, {
                      src: "./Adila.webp",
                      sx: {
                        width: { xs: 200, md: 240 },
                        height: { xs: 200, md: 240 },
                        position: "relative",
                        zIndex: 1,
                        objectFit: "cover",
                        "& .MuiAvatar-img": {
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        },
                      },
                    }),
                  }),
                }),
                N.jsxs(te, {
                  sx: { flex: 1, textAlign: { xs: "center", md: "left" } },
                  children: [
                    N.jsx(ie, {
                      variant: "body2",
                      sx: {
                        color: "#EBA83D",
                        fontWeight: 600,
                        mb: 1,
                        fontSize: "0.875rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      },
                      children: "Hello, I'm",
                    }),
                    N.jsx(ie, {
                      variant: "h1",
                      sx: {
                        mb: 1,
                        fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                        fontWeight: 800,
                        lineHeight: 1.1,
                        color: "white",
                      },
                      children: "Adila Tasnim",
                    }),
                    N.jsx(ie, {
                      variant: "h3",
                      sx: {
                        mb: 3,
                        fontSize: {
                          xs: "1.25rem",
                          sm: "1.5rem",
                          md: "1.875rem",
                        },
                        fontWeight: 600,
                        color: "#EBA83D",
                      },
                      children: "Frontend Developer",
                    }),
                    N.jsx(ie, {
                      variant: "body1",
                      sx: {
                        mb: 4,
                        fontSize: { xs: "1rem", md: "1.125rem" },
                        maxWidth: "500px",
                        mx: { xs: "auto", md: 0 },
                        color: "rgba(255, 255, 255, 0.9)",
                        lineHeight: 1.6,
                      },
                      children:
                        "Passionate about building scalable solutions, teaching the next generation of developers, and exploring emerging technologies that create meaningful impact.",
                    }),
                    N.jsxs(ep, {
                      direction: "row",
                      spacing: 2,
                      sx: {
                        justifyContent: { xs: "center", md: "flex-start" },
                        flexWrap: "wrap",
                        gap: 2,
                      },
                      children: [
                        N.jsx(I0, {
                          variant: "contained",
                          sx: {
                            backgroundColor: "#EBA83D",
                            color: "white",
                            px: 3,
                            py: 1.5,
                            "&:hover": { backgroundColor: "#D49220" },
                          },
                          href: "mailto:adila@hindukushsoft.com",
                          children: "Let's Connect",
                        }),
                        N.jsx(I0, {
                          variant: "outlined",
                          sx: {
                            color: "#EBA83D",
                            borderColor: "#EBA83D",
                            px: 3,
                            py: 1.5,
                            "&:hover": {
                              backgroundColor: "rgba(235, 168, 61, 0.1)",
                              borderColor: "#EBA83D",
                            },
                          },
                          href: "https://www.hindukushsoft.com",
                          target: "_blank",
                          children: "Visit Website",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          N.jsxs(te, {
            sx: { px: { xs: 3, sm: 4, md: 6 }, py: { xs: 6, md: 8 } },
            children: [
              N.jsx(ie, {
                variant: "h3",
                sx: {
                  textAlign: "center",
                  mb: 1,
                  fontWeight: 700,
                  color: "#1F1F23",
                },
                children: "About Me",
              }),
              N.jsx(ie, {
                variant: "body2",
                sx: {
                  textAlign: "center",
                  mb: 6,
                  color: "#666666",
                  fontStyle: "italic",
                },
                children: "Let me tell you a bit about my journey...",
              }),
              N.jsx(te, {
                sx: { maxWidth: "800px", mx: "auto", mb: 8 },
                children: N.jsxs(tp, {
                  sx: {
                    p: { xs: 3, md: 4 },
                    backgroundColor: "white",
                    borderRadius: "16px",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
                    border: "1px solid rgba(0, 0, 0, 0.06)",
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      background: "linear-gradient(90deg, #EBA83D, #F4C574)",
                      borderRadius: "16px 16px 0 0",
                    },
                  },
                  children: [
                    N.jsxs(ie, {
                      variant: "body1",
                      sx: {
                        fontSize: { xs: "1rem", md: "1.125rem" },
                        lineHeight: 1.7,
                        mb: 3,
                        color: "#1F1F23",
                      },
                      children: [
                        "Hi there! I'm ",
                        N.jsx(te, {
                          component: "span",
                          sx: { color: "#EBA83D", fontWeight: 600 },
                          children: "Adila Tasnim",
                        }),
                        ", a passionate Frontend Developer at ",
                        N.jsx(te, {
                          component: "span",
                          sx: { color: "#1F1F23", fontWeight: 600 },
                          children: "HindukushSoft Technologies",
                        }),
                        ". I specialize in creating beautiful, responsive web applications using React and modern frontend technologies. My journey in tech has been driven by a deep love for problem-solving and a genuine desire to make technology accessible to everyone.",
                      ],
                    }),
                    N.jsx(ie, {
                      variant: "body1",
                      sx: {
                        fontSize: { xs: "1rem", md: "1.125rem" },
                        lineHeight: 1.7,
                        mb: 3,
                        color: "#1F1F23",
                      },
                      children:
                        "What sets me apart is my dual role as both a developer and educator. I've spent countless hours crafting user interfaces, building React applications, and creating seamless user experiences. This experience, combined with my passion for teaching, has not only sharpened my technical and communication skills but also deepened my understanding of web development from different perspectives.",
                    }),
                    N.jsxs(ie, {
                      variant: "body1",
                      sx: {
                        fontSize: { xs: "1rem", md: "1.125rem" },
                        lineHeight: 1.7,
                        mb: 3,
                        color: "#1F1F23",
                      },
                      children: [
                        "I'm particularly drawn to projects that solve real-world problems through intuitive user experiences. Whether it's building responsive web applications, creating interactive user interfaces, or optimizing performance and accessibility, I approach each challenge with curiosity and determination. My mission is simple: ",
                        N.jsx(te, {
                          component: "span",
                          sx: {
                            color: "#EBA83D",
                            fontWeight: 600,
                            fontStyle: "italic",
                          },
                          children:
                            "to build beautiful, functional solutions that improve lives and inspire the next generation of developers.",
                        }),
                      ],
                    }),
                    N.jsx(ie, {
                      variant: "body1",
                      sx: {
                        fontSize: { xs: "1rem", md: "1.125rem" },
                        lineHeight: 1.7,
                        color: "#1F1F23",
                      },
                      children:
                        "When I'm not coding, you'll find me mentoring aspiring developers, exploring new frontend frameworks and design trends, or working on community initiatives. I believe that great user experiences should be inclusive and accessible, and I'm committed to using my skills to make a positive impact in the digital world.",
                    }),
                  ],
                }),
              }),
              N.jsx(ie, {
                variant: "h4",
                sx: {
                  textAlign: "center",
                  mb: 4,
                  fontWeight: 600,
                  color: "#1F1F23",
                },
                children: "My Tech Stack",
              }),
              N.jsx(te, {
                sx: { mb: 8 },
                children: N.jsx(ep, {
                  direction: "row",
                  spacing: 2,
                  sx: { flexWrap: "wrap", justifyContent: "center", gap: 2 },
                  children: u.map((f, h) =>
                    N.jsx(
                      i3,
                      {
                        label: f.name,
                        onMouseEnter: () => i(f.name),
                        onMouseLeave: () => i(null),
                        sx: {
                          backgroundColor:
                            a === f.name ? f.color : "rgba(31, 31, 35, 0.06)",
                          color: a === f.name ? "white" : f.color,
                          borderColor: f.color,
                          border: `1px solid ${f.color}30`,
                          fontWeight: 500,
                          fontSize: "0.875rem",
                          px: 2,
                          py: 1,
                          cursor: "pointer",
                          "&:hover": {
                            transform: "translateY(-2px)",
                            boxShadow: `0 4px 12px ${f.color}20`,
                          },
                        },
                      },
                      h
                    )
                  ),
                }),
              }),
              N.jsx(ie, {
                variant: "h4",
                sx: {
                  textAlign: "center",
                  mb: 6,
                  fontWeight: 600,
                  color: "#1F1F23",
                },
                children: "My Journey",
              }),
              N.jsx(te, {
                sx: {
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
                  gap: 3,
                  mb: 8,
                },
                children: o.map((f, h) =>
                  N.jsx(
                    tp,
                    {
                      sx: {
                        p: 3,
                        backgroundColor: "white",
                        borderRadius: "16px",
                        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
                        border: "1px solid rgba(0, 0, 0, 0.06)",
                        position: "relative",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "3px",
                          background: f.color,
                          borderRadius: "16px 16px 0 0",
                        },
                      },
                      children: N.jsxs(te, {
                        sx: {
                          display: "flex",
                          alignItems: "flex-start",
                          mb: 2,
                        },
                        children: [
                          N.jsx(te, {
                            sx: {
                              width: 48,
                              height: 48,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: "12px",
                              backgroundColor: `${f.color}10`,
                              color: f.color,
                              mr: 3,
                              fontSize: "1.5rem",
                              flexShrink: 0,
                            },
                            children: f.icon,
                          }),
                          N.jsxs(te, {
                            sx: { flex: 1 },
                            children: [
                              N.jsx(ie, {
                                variant: "h6",
                                sx: {
                                  fontWeight: 600,
                                  mb: 0.5,
                                  color: "#1F1F23",
                                },
                                children: f.title,
                              }),
                              N.jsx(ie, {
                                variant: "subtitle2",
                                sx: { color: f.color, fontWeight: 500, mb: 2 },
                                children: f.company,
                              }),
                              N.jsx(ie, {
                                variant: "body2",
                                sx: { lineHeight: 1.6, color: "#666666" },
                                children: f.description,
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    h
                  )
                ),
              }),
              N.jsx(ie, {
                variant: "h4",
                sx: {
                  textAlign: "center",
                  mb: 6,
                  fontWeight: 600,
                  color: "#1F1F23",
                },
                children: "Let's Connect",
              }),
              N.jsx(te, {
                sx: {
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)",
                  },
                  gap: 3,
                  maxWidth: "900px",
                  mx: "auto",
                },
                children: s.map((f, h) =>
                  N.jsxs(
                    te,
                    {
                      component: "a",
                      href: f.href,
                      target: f.href.startsWith("http") ? "_blank" : void 0,
                      sx: {
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                        color: "inherit",
                        p: 3,
                        borderRadius: "16px",
                        backgroundColor: "white",
                        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
                        border: "1px solid rgba(0, 0, 0, 0.06)",
                        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                        "&:hover": {
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                          transform: "translateY(-2px)",
                        },
                      },
                      children: [
                        N.jsx(te, {
                          sx: {
                            width: 40,
                            height: 40,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "10px",
                            backgroundColor: f.color,
                            color: "white",
                            mr: 3,
                            fontSize: "1.25rem",
                            flexShrink: 0,
                          },
                          children: f.icon,
                        }),
                        N.jsx(ie, {
                          variant: "body2",
                          sx: {
                            fontWeight: 500,
                            fontSize: "0.875rem",
                            color: "#1F1F23",
                            wordBreak: "break-word",
                            lineHeight: 1.4,
                          },
                          children: f.text,
                        }),
                      ],
                    },
                    h
                  )
                ),
              }),
            ],
          }),
          N.jsxs(te, {
            sx: {
              backgroundColor: "#1F1F23",
              color: "white",
              px: { xs: 3, sm: 4, md: 6 },
              py: 4,
              borderRadius: "0 0 24px 24px",
            },
            children: [
              N.jsx(ie, {
                variant: "h6",
                sx: {
                  textAlign: "center",
                  fontWeight: 500,
                  fontSize: "1rem",
                  mb: 1,
                },
                children: "Thank you for visiting my portfolio!",
              }),
              N.jsx(ie, {
                variant: "body2",
                sx: {
                  textAlign: "center",
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: "0.875rem",
                  mb: 1,
                },
                children:
                  "© 2024 Adila Tasnim • Building solutions that inspire and empower",
              }),
              N.jsx(ie, {
                variant: "body2",
                sx: {
                  textAlign: "center",
                  color: "rgba(255, 255, 255, 0.6)",
                  fontSize: "0.75rem",
                },
                children: "Designed by HindukushSoft Technologies",
              }),
            ],
          }),
        ],
      }),
    });
  },
  H3 = Wo({
    palette: {
      mode: "light",
      primary: { main: "#EBA83D", light: "#F4C574", dark: "#D49220" },
      secondary: { main: "#1F1F23", light: "#2A2A2E", dark: "#161619" },
      background: { default: "#FAFAFA", paper: "#FFFFFF" },
      text: { primary: "#1F1F23", secondary: "#666666" },
      grey: {
        50: "#FAFAFA",
        100: "#F5F5F5",
        200: "#EEEEEE",
        300: "#E0E0E0",
        400: "#BDBDBD",
        500: "#9E9E9E",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
      },
    },
    typography: {
      fontFamily:
        "'Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', sans-serif",
      h1: {
        fontFamily: "'Inter', sans-serif",
        fontWeight: 800,
        fontSize: "3.5rem",
        letterSpacing: "-0.02em",
        lineHeight: 1.1,
      },
      h2: {
        fontFamily: "'Inter', sans-serif",
        fontWeight: 700,
        fontSize: "2.5rem",
        letterSpacing: "-0.015em",
        lineHeight: 1.2,
      },
      h3: {
        fontFamily: "'Inter', sans-serif",
        fontWeight: 600,
        fontSize: "1.875rem",
        letterSpacing: "-0.01em",
        lineHeight: 1.3,
      },
      h4: {
        fontFamily: "'Inter', sans-serif",
        fontWeight: 600,
        fontSize: "1.5rem",
        letterSpacing: "-0.005em",
        lineHeight: 1.4,
      },
      h5: {
        fontFamily: "'Inter', sans-serif",
        fontWeight: 600,
        fontSize: "1.25rem",
        lineHeight: 1.5,
      },
      h6: {
        fontFamily: "'Inter', sans-serif",
        fontWeight: 600,
        fontSize: "1.125rem",
        lineHeight: 1.5,
      },
      body1: {
        fontFamily: "'Inter', sans-serif",
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: 1.6,
        letterSpacing: "0.01em",
      },
      body2: {
        fontFamily: "'Inter', sans-serif",
        fontWeight: 400,
        fontSize: "0.875rem",
        lineHeight: 1.5,
        letterSpacing: "0.01em",
      },
      subtitle1: {
        fontFamily: "'Inter', sans-serif",
        fontWeight: 500,
        fontSize: "1rem",
        lineHeight: 1.5,
      },
      subtitle2: {
        fontFamily: "'Inter', sans-serif",
        fontWeight: 500,
        fontSize: "0.875rem",
        lineHeight: 1.5,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontWeight: 600,
            borderRadius: "12px",
            padding: "12px 24px",
            fontSize: "0.95rem",
            fontFamily: "'Inter', sans-serif",
            boxShadow: "none",
            transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
              transform: "translateY(-1px)",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: "16px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
            border: "1px solid rgba(0, 0, 0, 0.06)",
            transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
              transform: "translateY(-2px)",
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: "8px",
            fontWeight: 500,
            fontSize: "0.875rem",
            padding: "4px 12px",
            fontFamily: "'Inter', sans-serif",
            transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
          },
        },
      },
    },
  });
function $3() {
  return N.jsxs(ZS, { theme: H3, children: [N.jsx(e2, {}), N.jsx(U3, {})] });
}
g1.createRoot(document.getElementById("root")).render(
  N.jsx(j.StrictMode, { children: N.jsx($3, {}) })
);
