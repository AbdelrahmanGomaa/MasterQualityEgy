var rn = (n) => {
  throw TypeError(n);
};
var mt = (n, e, t) => e.has(n) || rn("Cannot " + t);
var h = (n, e, t) => (mt(n, e, "read from private field"), t ? t.call(n) : e.get(n)), b = (n, e, t) => e.has(n) ? rn("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), v = (n, e, t, o) => (mt(n, e, "write to private field"), o ? o.call(n, t) : e.set(n, t), t), an = (n, e, t) => (mt(n, e, "access private method"), t);
import { UMB_AUTH_CONTEXT as ko } from "@umbraco-cms/backoffice/auth";
import { USYNC_SIGNALR_CONTEXT_TOKEN as In, HandlerStatus as Ye, ChangeType as xt, USYNC_DETAILS_MODAL as To, uSyncActionDataSource as Po, uSyncSettingsDataSource as Io, uSyncMigrationDataSource as xo, ActionsService as Qe, MigrationsService as bt, SettingsService as vt, uSyncConstants as x, uSyncActionRepository as xn, USYNC_CORE_CONTEXT_TOKEN as An, uSyncWorkspaceContext as Ao, uSyncMenuElement as Ro, SyncLegacyFilesCondition as Do, OpenAPI as wt } from "@jumoo/uSync";
import { css as D, property as C, customElement as P, LitElement as Te, html as d, ifDefined as Rn, nothing as R, state as y, classMap as cn, when as At, query as Oo } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as qe } from "@umbraco-cms/backoffice/element-api";
import { UMB_MODAL_MANAGER_CONTEXT as Wt, UmbModalBaseElement as jt, UmbModalToken as zt } from "@umbraco-cms/backoffice/modal";
import { UmbLitElement as Ve } from "@umbraco-cms/backoffice/lit-element";
import { UmbControllerBase as Bt } from "@umbraco-cms/backoffice/class-api";
import { UmbObjectState as Le, UmbArrayState as St, UmbBooleanState as ln } from "@umbraco-cms/backoffice/observable-api";
import * as un from "@jumoo/uSync/external/signalr";
import { UmbContextToken as Dn } from "@umbraco-cms/backoffice/context-api";
import { tryExecuteAndNotify as U } from "@umbraco-cms/backoffice/resources";
import { UMB_WORKSPACE_CONTEXT as No } from "@umbraco-cms/backoffice/workspace";
import { UmbTextStyles as Mo } from "@umbraco-cms/backoffice/style";
import { UmbConditionBase as Lo, umbExtensionsRegistry as Ho } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_SECTION_CONTEXT as Uo } from "@umbraco-cms/backoffice/section";
import { UmbId as Wo } from "@umbraco-cms/backoffice/id";
import { UmbTemporaryFileManager as jo, TemporaryFileStatus as On } from "@umbraco-cms/backoffice/temporary-file";
var zo = Object.defineProperty, Bo = Object.getOwnPropertyDescriptor, Nn = (n) => {
  throw TypeError(n);
}, pt = (n, e, t, o) => {
  for (var s = o > 1 ? void 0 : o ? Bo(e, t) : e, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (s = (o ? i(e, t, s) : i(s)) || s);
  return o && s && zo(e, t, s), s;
}, Fo = (n, e, t) => e.has(n) || Nn("Cannot " + t), qo = (n, e, t) => e.has(n) ? Nn("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), Vo = (n, e, t) => (Fo(n, e, "access private method"), t), Rt, Mn;
let Se = class extends Te {
  constructor() {
    super(...arguments), qo(this, Rt), this.disabled = !1;
  }
  render() {
    var e, t;
    const n = this.group.buttons.map((o) => d`
				<usync-action-button
					.button=${o}
					.disabled=${this.disabled}
					state=${Rn(this.state)}
					@usync-action-click=${(s) => Vo(this, Rt, Mn).call(this, s, this.group)}></usync-action-button>
			`);
    return d`
			<uui-box class="action-box ${this.disabled ? "disabled" : ""}">
				<div class="box-content">
					<h2 class="box-heading">${(e = this.group) == null ? void 0 : e.groupName}</h2>
					<umb-icon name=${(t = this.group) == null ? void 0 : t.icon}></umb-icon>
					<div class="box-buttons">${n}</div>
				</div>
			</uui-box>
		`;
  }
};
Rt = /* @__PURE__ */ new WeakSet();
Mn = function(n, e) {
  var t;
  (t = n.detail) != null && t.button && this.dispatchEvent(
    new CustomEvent("perform-action", {
      detail: {
        group: e,
        key: n.detail.button.key,
        force: n.detail.button.force,
        clean: n.detail.button.clean,
        file: n.detail.button.file
      }
    })
  );
};
Se.styles = D`
		:host {
			flex-grow: 1;
		}

		.action-box {
			transition: opacity 0.2s ease-in-out;
		}

		.box-content {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.box-heading {
			font-size: var(--uui-size-7);
			margin: 0;
		}

		umb-icon {
			margin: var(--uui-size-space-6);
			font-size: var(--uui-type-h2-size);
			color: var(--uui-color-text-alt);
		}

		uui-button {
			margin: 0 var(--uui-size-space-2);
			font-size: var(--uui-size-6);
		}

		.box-buttons {
			margin: var(--uui-size-space-2) 0;
		}

		.disabled {
			opacity: 0.4;
		}
	`;
pt([
  C({ type: Object })
], Se.prototype, "group", 2);
pt([
  C({ type: String })
], Se.prototype, "state", 2);
pt([
  C({ type: Boolean })
], Se.prototype, "disabled", 2);
Se = pt([
  P("usync-action-box")
], Se);
var Go = Object.defineProperty, Ko = Object.getOwnPropertyDescriptor, Pe = (n, e, t, o) => {
  for (var s = o > 1 ? void 0 : o ? Ko(e, t) : e, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (s = (o ? i(e, t, s) : i(s)) || s);
  return o && s && Go(e, t, s), s;
};
let G = class extends qe(Te) {
  constructor() {
    super(), this.addMsg = {}, this.title = "", this.complete = !1, this.consumeContext(In, (n) => {
      this.observe(n.update, (e) => {
        this.updateMsg = e;
      }), this.observe(n.add, (e) => {
        this.addMsg = e;
      });
    });
  }
  render() {
    var e, t;
    if (!this.actions) return R;
    var n = (e = this.actions) == null ? void 0 : e.map((o) => d`
				<div
					style="position: relative;"
					class="action 
                    ${o.status == Ye.COMPLETE ? "complete" : ""} 
                    ${o.status == Ye.PROCESSING ? "working" : ""}">
					<uui-icon .name=${o.icon ?? "icon-box"}></uui-icon>
					${this.renderBadge(o)}
					<h5>${o.name ?? "unknown"}</h5>
				</div>
			`);
    return d`
			<uui-box>
				<h2>${this.title}</h2>
				<div class="action-list">${n}</div>
				<div class="update-box">${(t = this.updateMsg) == null ? void 0 : t.message}</div>
			</uui-box>
		`;
  }
  renderBadge(n) {
    if (n.status == Ye.PENDING) return;
    if (n.status == Ye.PROCESSING)
      return d`<uui-badge color="positive" look="default">
				<uui-icon name="icon-sync"></uui-icon
			></uui-badge>`;
    const e = n.inError ? "warning" : "positive", t = n.inError ? "Some errors occured duing import" : "Changes imported successfully";
    return !this.complete || n.changes == 0 ? d`<uui-badge .color=${e} look="default" title=${t}
				><uui-icon name="icon-check"></uui-icon
			></uui-badge>` : d`<uui-badge .color=${e} title=${t}>${n.changes}</uui-badge>`;
  }
};
G.styles = D`
		:host {
			display: block;
		}

		h2 {
			text-align: center;
			margin: 0;
		}

		.action-list {
			margin-top: var(--uui-size-space-4);
			padding: var(--uui-size-space-4) 0;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}

		.action {
			display: flex;
			flex-direction: column;
			align-items: center;
			min-width: 90px;
			color: var(--uui-color-text-alt);
			opacity: 0.67;
		}

		.action uui-icon {
			font-size: var(--uui-type-h3-size);
		}

		.action uui-badge uui-icon {
			font-size: 16px;
		}

		.complete {
			color: var(--uui-color-default-emphasis);
		}

		.working {
			color: var(--uui-color-positive);
			opacity: 1;
		}

		.update-box {
			font-weight: bold;
			text-align: center;
		}
	`;
Pe([
  y()
], G.prototype, "updateMsg", 2);
Pe([
  y()
], G.prototype, "addMsg", 2);
Pe([
  C({ type: String })
], G.prototype, "title", 2);
Pe([
  C({ type: Array })
], G.prototype, "actions", 2);
Pe([
  C({ type: Boolean })
], G.prototype, "complete", 2);
G = Pe([
  P("usync-progress-box")
], G);
var Xo = Object.defineProperty, Jo = Object.getOwnPropertyDescriptor, Ln = (n) => {
  throw TypeError(n);
}, ft = (n, e, t, o) => {
  for (var s = o > 1 ? void 0 : o ? Jo(e, t) : e, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (s = (o ? i(e, t, s) : i(s)) || s);
  return o && s && Xo(e, t, s), s;
}, Ft = (n, e, t) => e.has(n) || Ln("Cannot " + t), Yo = (n, e, t) => (Ft(n, e, "read from private field"), e.get(n)), hn = (n, e, t) => e.has(n) ? Ln("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), Qo = (n, e, t, o) => (Ft(n, e, "write to private field"), e.set(n, t), t), dn = (n, e, t) => (Ft(n, e, "access private method"), t), it, tt, Hn, Un;
let Ce = class extends qe(Te) {
  constructor() {
    super(), hn(this, tt), hn(this, it), this.results = [], this.showAll = !1, this.changeCount = 0, this.consumeContext(Wt, (n) => {
      Qo(this, it, n);
    });
  }
  groupBy(n, e) {
    return n.reduce((t, o) => {
      const s = e(o), r = t[s] || [];
      return r.push(o), { ...t, [s]: r };
    }, {});
  }
  render() {
    var t, o, s;
    this.changeCount = ((t = this.results) == null ? void 0 : t.filter((r) => r.change !== xt.NO_CHANGE).length) ?? 0;
    const n = this.groupBy(this.results || [], (r) => r.itemType), e = [];
    for (const r in n) {
      if ((n[r].filter((l) => l.change !== xt.NO_CHANGE).length ?? 0) === 0 && !this.showAll) continue;
      const a = d`<usync-result-group
				.groupName=${r}
				.results=${n[r]}
				.showAll=${this.showAll}
				@show-detail=${dn(this, tt, Un)}></usync-result-group> `;
      e.push(a);
    }
    return this.changeCount == 0 && !this.showAll ? d`
					${this.renderResultBar(((o = this.results) == null ? void 0 : o.length) || 0, this.changeCount)}
					<div class="empty">
						<umb-localize key="uSync_noChange"></umb-localize>
					</div>
				` : d`<div id="result-box">
					${this.renderResultBar(((s = this.results) == null ? void 0 : s.length) || 0, this.changeCount)}
					${e}
				</div>`;
  }
  renderResultBar(n, e) {
    const t = e === 0 ? "uSync_noChangeCount" : "uSync_changeCount";
    return d`<div class="result-header">
			<uui-toggle
				.label=${this.localize.term("uSync_showAll")}
				?checked=${this.showAll}
				@change=${dn(this, tt, Hn)}></uui-toggle>
			<umb-localize .key=${t} .args=${[n, e]}
				>${e}/${n} items</umb-localize
			>
		</div>`;
  }
};
it = /* @__PURE__ */ new WeakMap();
tt = /* @__PURE__ */ new WeakSet();
Hn = function() {
  this.showAll = !this.showAll;
};
Un = async function(n) {
  var s;
  const e = n.detail, t = (s = Yo(this, it)) == null ? void 0 : s.open(this, To, {
    data: {
      item: e
    }
  });
  await (t == null ? void 0 : t.onSubmit().catch(() => {
  }));
};
Ce.styles = D`
		:host {
			display: block;
			margin: var(--uui-size-space-4) 0;
			display: flex;
			flex-direction: column;
			gap: var(--uui-size-space-4);
		}

		#result-box {
			display: flex;
			flex-direction: column;
			gap: var(--uui-size-space-4);
		}

		uui-table {
			position: relative;
			z-index: 100;
		}

		.result-header {
			display: flex;
			justify-content: space-between;
			padding: var(--uui-size-space-4);
		}

		.result-header h3 {
			margin: 0;
			padding: 0;
		}

		.empty {
			padding: var(--uui-size-20);
			font-size: var(--uui-type-h5-size);
			text-align: center;
			font-weight: 900;
		}

		.error {
			background-color: #fce4ec;
		}
	`;
ft([
  C({ type: Array })
], Ce.prototype, "results", 2);
ft([
  y()
], Ce.prototype, "showAll", 2);
ft([
  y()
], Ce.prototype, "changeCount", 2);
Ce = ft([
  P("usync-results")
], Ce);
function K() {
}
K.prototype = {
  diff: function(e, t) {
    var o, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = s.callback;
    typeof s == "function" && (r = s, s = {}), this.options = s;
    var i = this;
    function a(E) {
      return r ? (setTimeout(function() {
        r(void 0, E);
      }, 0), !0) : E;
    }
    e = this.castInput(e), t = this.castInput(t), e = this.removeEmpty(this.tokenize(e)), t = this.removeEmpty(this.tokenize(t));
    var l = t.length, u = e.length, p = 1, g = l + u;
    s.maxEditLength && (g = Math.min(g, s.maxEditLength));
    var N = (o = s.timeout) !== null && o !== void 0 ? o : 1 / 0, X = Date.now() + N, T = [{
      oldPos: -1,
      lastComponent: void 0
    }], J = this.extractCommon(T[0], t, e, 0);
    if (T[0].oldPos + 1 >= u && J + 1 >= l)
      return a([{
        value: this.join(t),
        count: t.length
      }]);
    var Ie = -1 / 0, le = 1 / 0;
    function tn() {
      for (var E = Math.max(Ie, -p); E <= Math.min(le, p); E += 2) {
        var Y = void 0, xe = T[E - 1], Ae = T[E + 1];
        xe && (T[E - 1] = void 0);
        var yt = !1;
        if (Ae) {
          var on = Ae.oldPos - E;
          yt = Ae && 0 <= on && on < l;
        }
        var sn = xe && xe.oldPos + 1 < u;
        if (!yt && !sn) {
          T[E] = void 0;
          continue;
        }
        if (!sn || yt && xe.oldPos + 1 < Ae.oldPos ? Y = i.addToPath(Ae, !0, void 0, 0) : Y = i.addToPath(xe, void 0, !0, 1), J = i.extractCommon(Y, t, e, E), Y.oldPos + 1 >= u && J + 1 >= l)
          return a(Zo(i, Y.lastComponent, t, e, i.useLongestToken));
        T[E] = Y, Y.oldPos + 1 >= u && (le = Math.min(le, E - 1)), J + 1 >= l && (Ie = Math.max(Ie, E + 1));
      }
      p++;
    }
    if (r)
      (function E() {
        setTimeout(function() {
          if (p > g || Date.now() > X)
            return r();
          tn() || E();
        }, 0);
      })();
    else
      for (; p <= g && Date.now() <= X; ) {
        var nn = tn();
        if (nn)
          return nn;
      }
  },
  addToPath: function(e, t, o, s) {
    var r = e.lastComponent;
    return r && r.added === t && r.removed === o ? {
      oldPos: e.oldPos + s,
      lastComponent: {
        count: r.count + 1,
        added: t,
        removed: o,
        previousComponent: r.previousComponent
      }
    } : {
      oldPos: e.oldPos + s,
      lastComponent: {
        count: 1,
        added: t,
        removed: o,
        previousComponent: r
      }
    };
  },
  extractCommon: function(e, t, o, s) {
    for (var r = t.length, i = o.length, a = e.oldPos, l = a - s, u = 0; l + 1 < r && a + 1 < i && this.equals(t[l + 1], o[a + 1]); )
      l++, a++, u++;
    return u && (e.lastComponent = {
      count: u,
      previousComponent: e.lastComponent
    }), e.oldPos = a, l;
  },
  equals: function(e, t) {
    return this.options.comparator ? this.options.comparator(e, t) : e === t || this.options.ignoreCase && e.toLowerCase() === t.toLowerCase();
  },
  removeEmpty: function(e) {
    for (var t = [], o = 0; o < e.length; o++)
      e[o] && t.push(e[o]);
    return t;
  },
  castInput: function(e) {
    return e;
  },
  tokenize: function(e) {
    return e.split("");
  },
  join: function(e) {
    return e.join("");
  }
};
function Zo(n, e, t, o, s) {
  for (var r = [], i; e; )
    r.push(e), i = e.previousComponent, delete e.previousComponent, e = i;
  r.reverse();
  for (var a = 0, l = r.length, u = 0, p = 0; a < l; a++) {
    var g = r[a];
    if (g.removed) {
      if (g.value = n.join(o.slice(p, p + g.count)), p += g.count, a && r[a - 1].added) {
        var X = r[a - 1];
        r[a - 1] = r[a], r[a] = X;
      }
    } else {
      if (!g.added && s) {
        var N = t.slice(u, u + g.count);
        N = N.map(function(J, Ie) {
          var le = o[p + Ie];
          return le.length > J.length ? le : J;
        }), g.value = n.join(N);
      } else
        g.value = n.join(t.slice(u, u + g.count));
      u += g.count, g.added || (p += g.count);
    }
  }
  var T = r[l - 1];
  return l > 1 && typeof T.value == "string" && (T.added || T.removed) && n.equals("", T.value) && (r[l - 2].value += T.value, r.pop()), r;
}
function es(n, e) {
  if (typeof n == "function")
    e.callback = n;
  else if (n)
    for (var t in n)
      n.hasOwnProperty(t) && (e[t] = n[t]);
  return e;
}
var pn = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/, fn = /\S/, qt = new K();
qt.equals = function(n, e) {
  return this.options.ignoreCase && (n = n.toLowerCase(), e = e.toLowerCase()), n === e || this.options.ignoreWhitespace && !fn.test(n) && !fn.test(e);
};
qt.tokenize = function(n) {
  for (var e = n.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/), t = 0; t < e.length - 1; t++)
    !e[t + 1] && e[t + 2] && pn.test(e[t]) && pn.test(e[t + 2]) && (e[t] += e[t + 2], e.splice(t + 1, 2), t--);
  return e;
};
function ts(n, e, t) {
  return t = es(t, {
    ignoreWhitespace: !0
  }), qt.diff(n, e, t);
}
var Wn = new K();
Wn.tokenize = function(n) {
  this.options.stripTrailingCr && (n = n.replace(/\r\n/g, `
`));
  var e = [], t = n.split(/(\n|\r\n)/);
  t[t.length - 1] || t.pop();
  for (var o = 0; o < t.length; o++) {
    var s = t[o];
    o % 2 && !this.options.newlineIsToken ? e[e.length - 1] += s : (this.options.ignoreWhitespace && (s = s.trim()), e.push(s));
  }
  return e;
};
var ns = new K();
ns.tokenize = function(n) {
  return n.split(/(\S.+?[.!?])(?=\s+|$)/);
};
var os = new K();
os.tokenize = function(n) {
  return n.split(/([{}:;,]|\s+)/);
};
function nt(n) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? nt = function(e) {
    return typeof e;
  } : nt = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, nt(n);
}
var ss = Object.prototype.toString, Ue = new K();
Ue.useLongestToken = !0;
Ue.tokenize = Wn.tokenize;
Ue.castInput = function(n) {
  var e = this.options, t = e.undefinedReplacement, o = e.stringifyReplacer, s = o === void 0 ? function(r, i) {
    return typeof i > "u" ? t : i;
  } : o;
  return typeof n == "string" ? n : JSON.stringify(Dt(n, null, null, s), s, "  ");
};
Ue.equals = function(n, e) {
  return K.prototype.equals.call(Ue, n.replace(/,([\r\n])/g, "$1"), e.replace(/,([\r\n])/g, "$1"));
};
function Dt(n, e, t, o, s) {
  e = e || [], t = t || [], o && (n = o(s, n));
  var r;
  for (r = 0; r < e.length; r += 1)
    if (e[r] === n)
      return t[r];
  var i;
  if (ss.call(n) === "[object Array]") {
    for (e.push(n), i = new Array(n.length), t.push(i), r = 0; r < n.length; r += 1)
      i[r] = Dt(n[r], e, t, o, s);
    return e.pop(), t.pop(), i;
  }
  if (n && n.toJSON && (n = n.toJSON()), nt(n) === "object" && n !== null) {
    e.push(n), i = {}, t.push(i);
    var a = [], l;
    for (l in n)
      n.hasOwnProperty(l) && a.push(l);
    for (a.sort(), r = 0; r < a.length; r += 1)
      l = a[r], i[l] = Dt(n[l], e, t, o, l);
    e.pop(), t.pop();
  } else
    i = n;
  return i;
}
var Ot = new K();
Ot.tokenize = function(n) {
  return n.slice();
};
Ot.join = Ot.removeEmpty = function(n) {
  return n;
};
var rs = Object.defineProperty, is = Object.getOwnPropertyDescriptor, jn = (n) => {
  throw TypeError(n);
}, zn = (n, e, t, o) => {
  for (var s = o > 1 ? void 0 : o ? is(e, t) : e, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (s = (o ? i(e, t, s) : i(s)) || s);
  return o && s && rs(e, t, s), s;
}, as = (n, e, t) => e.has(n) || jn("Cannot " + t), cs = (n, e, t) => e.has(n) ? jn("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), gn = (n, e, t) => (as(n, e, "access private method"), t), ot, Nt;
let at = class extends qe(Te) {
  constructor() {
    super(...arguments), cs(this, ot);
  }
  render() {
    var n;
    return ((n = this.item) == null ? void 0 : n.change) == xt.CREATE ? this.render_create() : d`
			<uui-table>
				<uui-table-head>
					<uui-table-head-cell>
						<umb-localize key="uSync_changeAction">Action</umb-localize>
					</uui-table-head-cell>
					<uui-table-head-cell>
						<umb-localize key="uSync_changeItem">Item</umb-localize>
					</uui-table-head-cell>
					<uui-table-head-cell>
						<umb-localize key="uSync_changeDiffrence">Difference</umb-localize>
					</uui-table-head-cell>
				</uui-table-head>
				${this.render_details()}
			</uui-table>
		`;
  }
  render_create() {
    return d`
			<h1>
				<umb-localize key="uSync_changeCreate">This item is being created</umb-localize>
			</h1>
		`;
  }
  render_details() {
    var e;
    var n = (e = this.item) == null ? void 0 : e.details.map((t) => {
      const o = gn(this, ot, Nt).call(this, t.oldValue), s = gn(this, ot, Nt).call(this, t.newValue), i = ts(o, s).map((a) => a.added ? d`<ins>${a.value}</ins>` : a.removed ? d`<del>${a.value}</del>` : d`<span>${a.value}</span>`);
      return d`
				<uui-table-row>
					<uui-table-cell>${t.name}</uui-table-cell>
					<uui-table-cell>${t.change}</uui-table-cell>
					<uui-table-cell class="detail-data">
						<pre>${i}</pre>
					</uui-table-cell>
				</uui-table-row>
			`;
    });
    return n;
  }
  render_changes() {
  }
};
ot = /* @__PURE__ */ new WeakSet();
Nt = function(n) {
  try {
    return JSON.stringify(JSON.parse(n ?? ""), null, 1);
  } catch {
    return n ?? "";
  }
};
at.styles = D`
		:host {
			display: block;
			margin: var(--uui-size-space-4) 0;
		}

		uui-table-cell {
			vertical-align: top;
		}

		uui-table-cell pre {
			margin: 0;
			padding: 0;
		}

		pre ins {
			color: var(--uui-color-positive);
		}

		pre del {
			color: var(--uui-color-danger);
		}
	`;
zn([
  C({ type: Object })
], at.prototype, "item", 2);
at = zn([
  P("usync-change-view")
], at);
class _n extends Error {
  constructor(e, t, o) {
    super(o), this.name = "ApiError", this.url = t.url, this.status = t.status, this.statusText = t.statusText, this.body = t.body, this.request = e;
  }
}
class ls extends Error {
  constructor(e) {
    super(e), this.name = "CancelError";
  }
  get isCancelled() {
    return !0;
  }
}
class us {
  constructor(e) {
    this._isResolved = !1, this._isRejected = !1, this._isCancelled = !1, this.cancelHandlers = [], this.promise = new Promise((t, o) => {
      this._resolve = t, this._reject = o;
      const s = (a) => {
        this._isResolved || this._isRejected || this._isCancelled || (this._isResolved = !0, this._resolve && this._resolve(a));
      }, r = (a) => {
        this._isResolved || this._isRejected || this._isCancelled || (this._isRejected = !0, this._reject && this._reject(a));
      }, i = (a) => {
        this._isResolved || this._isRejected || this._isCancelled || this.cancelHandlers.push(a);
      };
      return Object.defineProperty(i, "isResolved", {
        get: () => this._isResolved
      }), Object.defineProperty(i, "isRejected", {
        get: () => this._isRejected
      }), Object.defineProperty(i, "isCancelled", {
        get: () => this._isCancelled
      }), e(s, r, i);
    });
  }
  get [Symbol.toStringTag]() {
    return "Cancellable Promise";
  }
  then(e, t) {
    return this.promise.then(e, t);
  }
  catch(e) {
    return this.promise.catch(e);
  }
  finally(e) {
    return this.promise.finally(e);
  }
  cancel() {
    if (!(this._isResolved || this._isRejected || this._isCancelled)) {
      if (this._isCancelled = !0, this.cancelHandlers.length)
        try {
          for (const e of this.cancelHandlers)
            e();
        } catch (e) {
          console.warn("Cancellation threw an error", e);
          return;
        }
      this.cancelHandlers.length = 0, this._reject && this._reject(new ls("Request aborted"));
    }
  }
  get isCancelled() {
    return this._isCancelled;
  }
}
class yn {
  constructor() {
    this._fns = [];
  }
  eject(e) {
    const t = this._fns.indexOf(e);
    t !== -1 && (this._fns = [...this._fns.slice(0, t), ...this._fns.slice(t + 1)]);
  }
  use(e) {
    this._fns = [...this._fns, e];
  }
}
const M = {
  BASE: "",
  CREDENTIALS: "include",
  ENCODE_PATH: void 0,
  HEADERS: void 0,
  PASSWORD: void 0,
  TOKEN: void 0,
  USERNAME: void 0,
  VERSION: "Latest",
  WITH_CREDENTIALS: !1,
  interceptors: {
    request: new yn(),
    response: new yn()
  }
}, Ui = {
  enum: ["NoChange", "Create", "Update", "Delete", "Error", "Warning"],
  type: "string"
}, Wi = {
  enum: ["NoChange", "Create", "Import", "Export", "Update", "Delete", "WillChange", "Information", "Rolledback", "Fail", "ImportFail", "Mismatch", "ParentMissing", "Hidden", "Clean", "Removed"],
  type: "string"
}, ji = {
  enum: ["Default", "Info", "Error", "Success", "Warning"],
  type: "string"
}, zi = {
  required: ["actions", "createClean", "enabled", "failOnMissingParent", "group", "guidNames", "settings", "useFlatStructure"],
  type: "object",
  properties: {
    enabled: {
      type: "boolean",
      default: !0
    },
    actions: {
      type: "array",
      items: {
        type: "string"
      }
    },
    useFlatStructure: {
      type: "boolean",
      default: !0
    },
    guidNames: {
      type: "boolean",
      default: !1
    },
    failOnMissingParent: {
      type: "boolean",
      default: !1
    },
    group: {
      type: "string",
      default: ""
    },
    createClean: {
      type: "boolean"
    },
    settings: {
      type: "object",
      additionalProperties: {
        type: "string"
      }
    }
  },
  additionalProperties: !1
}, Bi = {
  enum: ["Pending", "Processing", "Complete", "Error"],
  type: "string"
}, Fi = {
  required: ["category", "message", "type"],
  type: "object",
  properties: {
    message: {
      type: "string"
    },
    category: {
      type: "string"
    },
    type: {
      $ref: "#/components/schemas/EventMessageTypeModel"
    }
  },
  additionalProperties: !1
}, qi = {
  required: ["action", "requestId", "stepNumber"],
  type: "object",
  properties: {
    requestId: {
      type: "string"
    },
    action: {
      type: "string"
    },
    stepNumber: {
      type: "integer",
      format: "int32"
    },
    options: {
      oneOf: [
        {
          $ref: "#/components/schemas/uSyncOptions"
        }
      ],
      nullable: !0
    },
    username: {
      type: "string",
      nullable: !0
    }
  },
  additionalProperties: !1
}, Vi = {
  required: ["complete", "requestId"],
  type: "object",
  properties: {
    requestId: {
      type: "string"
    },
    status: {
      type: "array",
      items: {
        oneOf: [
          {
            $ref: "#/components/schemas/SyncHandlerSummary"
          }
        ]
      },
      nullable: !0
    },
    actions: {
      type: "array",
      items: {
        oneOf: [
          {
            $ref: "#/components/schemas/uSyncActionView"
          }
        ]
      },
      nullable: !0
    },
    complete: {
      type: "boolean"
    }
  },
  additionalProperties: !1
}, Gi = {
  required: ["children", "clean", "color", "file", "force", "key", "label", "look"],
  type: "object",
  properties: {
    key: {
      type: "string"
    },
    label: {
      type: "string"
    },
    look: {
      type: "string"
    },
    color: {
      type: "string"
    },
    force: {
      type: "boolean"
    },
    clean: {
      type: "boolean"
    },
    file: {
      type: "boolean"
    },
    children: {
      type: "array",
      items: {
        oneOf: [
          {
            $ref: "#/components/schemas/SyncActionButton"
          }
        ]
      }
    }
  },
  additionalProperties: !1
}, Ki = {
  required: ["buttons", "groupName", "icon", "key"],
  type: "object",
  properties: {
    key: {
      type: "string"
    },
    icon: {
      type: "string"
    },
    groupName: {
      type: "string"
    },
    buttons: {
      type: "array",
      items: {
        oneOf: [
          {
            $ref: "#/components/schemas/SyncActionButton"
          }
        ]
      }
    }
  },
  additionalProperties: !1
}, Xi = {
  required: ["changes", "icon", "inError", "name", "status"],
  type: "object",
  properties: {
    icon: {
      type: "string"
    },
    name: {
      type: "string"
    },
    status: {
      $ref: "#/components/schemas/HandlerStatus"
    },
    changes: {
      type: "integer",
      format: "int32"
    },
    inError: {
      type: "boolean"
    }
  },
  additionalProperties: !1
}, Ji = {
  required: ["hasLegacy", "latestFolder", "latestVersion", "legacyTypes"],
  type: "object",
  properties: {
    hasLegacy: {
      type: "boolean"
    },
    legacyFolder: {
      type: "string",
      nullable: !0
    },
    legacyTypes: {
      type: "array",
      items: {
        type: "string"
      }
    },
    latestFolder: {
      type: "string"
    },
    latestVersion: {
      type: "string"
    }
  },
  additionalProperties: !1
}, Yi = {
  required: ["errors", "success"],
  type: "object",
  properties: {
    success: {
      type: "boolean"
    },
    errors: {
      type: "array",
      items: {
        type: "string"
      }
    }
  },
  additionalProperties: !1
}, Qi = {
  required: ["change", "details", "handler", "itemType", "key", "name", "success"],
  type: "object",
  properties: {
    key: {
      type: "string",
      format: "uuid"
    },
    name: {
      type: "string"
    },
    handler: {
      type: "string"
    },
    itemType: {
      type: "string"
    },
    change: {
      $ref: "#/components/schemas/ChangeType"
    },
    success: {
      type: "boolean"
    },
    details: {
      type: "array",
      items: {
        oneOf: [
          {
            $ref: "#/components/schemas/uSyncChange"
          }
        ]
      }
    },
    message: {
      type: "string",
      nullable: !0
    }
  },
  additionalProperties: !1
}, Zi = {
  required: ["version"],
  type: "object",
  properties: {
    version: {
      type: "string"
    }
  },
  additionalProperties: !1
}, ea = {
  type: "object",
  additionalProperties: !1
}, ta = {
  required: ["change", "name", "newValue", "oldValue", "path", "success"],
  type: "object",
  properties: {
    success: {
      type: "boolean"
    },
    name: {
      type: "string"
    },
    path: {
      type: "string"
    },
    oldValue: {
      type: "string"
    },
    newValue: {
      type: "string"
    },
    change: {
      $ref: "#/components/schemas/ChangeDetailType"
    }
  },
  additionalProperties: !1
}, na = {
  required: ["disabledHandlers", "enabled", "handlerDefaults", "handlerGroups", "handlers", "isSelectable"],
  type: "object",
  properties: {
    enabled: {
      type: "boolean",
      default: !0
    },
    handlerGroups: {
      type: "array",
      items: {
        type: "string"
      }
    },
    disabledHandlers: {
      type: "array",
      items: {
        type: "string"
      }
    },
    handlerDefaults: {
      oneOf: [
        {
          $ref: "#/components/schemas/HandlerSettings"
        }
      ]
    },
    handlers: {
      type: "object",
      additionalProperties: {
        oneOf: [
          {
            $ref: "#/components/schemas/HandlerSettings"
          }
        ]
      }
    },
    isSelectable: {
      type: "boolean"
    }
  },
  additionalProperties: !1
}, oa = {
  required: ["clean", "clientId", "files", "force", "group", "set"],
  type: "object",
  properties: {
    clientId: {
      type: "string"
    },
    force: {
      type: "boolean"
    },
    clean: {
      type: "boolean"
    },
    files: {
      type: "boolean"
    },
    group: {
      type: "string"
    },
    set: {
      type: "string"
    }
  },
  additionalProperties: !1
}, sa = {
  required: ["addOnPing", "backgroundNotifications", "cacheFolderKeys", "customMappings", "defaultExtension", "defaultSet", "disableDashboard", "disableNotificationSuppression", "enableHistory", "exportAtStartup", "exportOnSave", "failOnDuplicates", "failOnMissingParent", "firstBootGroup", "folders", "hideAddOns", "importAtStartup", "importOnFirstBoot", "isRootSite", "legacyFolder", "lockRoot", "lockRootTypes", "onceFile", "rebuildCacheOnCompletion", "reportDebug", "rootFolder", "showVersionCheckWarning", "stopFile", "summaryDashboard", "summaryLimit", "uiEnabledGroups"],
  type: "object",
  properties: {
    rootFolder: {
      type: "string",
      default: "uSync/v14/"
    },
    folders: {
      type: "array",
      items: {
        type: "string"
      },
      default: "uSync/Root/, uSync/v14/"
    },
    legacyFolder: {
      type: "string",
      default: "uSync/v9"
    },
    isRootSite: {
      type: "boolean",
      default: !1
    },
    lockRoot: {
      type: "boolean",
      default: !0
    },
    stopFile: {
      type: "string",
      default: "usync.stop"
    },
    onceFile: {
      type: "string",
      default: "usync.once"
    },
    lockRootTypes: {
      type: "array",
      items: {
        type: "string"
      }
    },
    defaultSet: {
      type: "string",
      default: "Default"
    },
    importAtStartup: {
      type: "string",
      default: "None"
    },
    exportAtStartup: {
      type: "string",
      default: "None"
    },
    exportOnSave: {
      type: "string",
      default: "All"
    },
    uiEnabledGroups: {
      type: "string",
      default: "All"
    },
    reportDebug: {
      type: "boolean",
      default: !1
    },
    addOnPing: {
      type: "boolean",
      default: !0
    },
    rebuildCacheOnCompletion: {
      type: "boolean",
      default: !1
    },
    failOnMissingParent: {
      type: "boolean",
      default: !1
    },
    failOnDuplicates: {
      type: "boolean",
      default: !1
    },
    cacheFolderKeys: {
      type: "boolean",
      default: !0
    },
    showVersionCheckWarning: {
      type: "boolean",
      default: !0
    },
    customMappings: {
      type: "object",
      additionalProperties: {
        type: "string"
      }
    },
    enableHistory: {
      type: "boolean",
      default: !0
    },
    defaultExtension: {
      type: "string",
      default: "config"
    },
    importOnFirstBoot: {
      type: "boolean",
      default: !1
    },
    firstBootGroup: {
      type: "string",
      default: "All"
    },
    disableDashboard: {
      type: "boolean",
      default: "false"
    },
    summaryDashboard: {
      type: "boolean",
      default: "false"
    },
    summaryLimit: {
      type: "integer",
      format: "int32",
      default: 1e3
    },
    hideAddOns: {
      type: "string"
    },
    disableNotificationSuppression: {
      type: "boolean",
      default: "true"
    },
    backgroundNotifications: {
      type: "boolean",
      default: !1
    }
  },
  additionalProperties: !1
}, Ge = (n) => typeof n == "string", Ct = (n) => Ge(n) && n !== "", Vt = (n) => n instanceof Blob, Bn = (n) => n instanceof FormData, hs = (n) => {
  try {
    return btoa(n);
  } catch {
    return Buffer.from(n).toString("base64");
  }
}, ds = (n) => {
  const e = [], t = (s, r) => {
    e.push(`${encodeURIComponent(s)}=${encodeURIComponent(String(r))}`);
  }, o = (s, r) => {
    r != null && (r instanceof Date ? t(s, r.toISOString()) : Array.isArray(r) ? r.forEach((i) => o(s, i)) : typeof r == "object" ? Object.entries(r).forEach(([i, a]) => o(`${s}[${i}]`, a)) : t(s, r));
  };
  return Object.entries(n).forEach(([s, r]) => o(s, r)), e.length ? `?${e.join("&")}` : "";
}, ps = (n, e) => {
  const t = n.ENCODE_PATH || encodeURI, o = e.url.replace("{api-version}", n.VERSION).replace(/{(.*?)}/g, (r, i) => {
    var a;
    return (a = e.path) != null && a.hasOwnProperty(i) ? t(String(e.path[i])) : r;
  }), s = n.BASE + o;
  return e.query ? s + ds(e.query) : s;
}, fs = (n) => {
  if (n.formData) {
    const e = new FormData(), t = (o, s) => {
      Ge(s) || Vt(s) ? e.append(o, s) : e.append(o, JSON.stringify(s));
    };
    return Object.entries(n.formData).filter(([, o]) => o != null).forEach(([o, s]) => {
      Array.isArray(s) ? s.forEach((r) => t(o, r)) : t(o, s);
    }), e;
  }
}, Ze = async (n, e) => typeof e == "function" ? e(n) : e, gs = async (n, e) => {
  const [t, o, s, r] = await Promise.all([
    // @ts-ignore
    Ze(e, n.TOKEN),
    // @ts-ignore
    Ze(e, n.USERNAME),
    // @ts-ignore
    Ze(e, n.PASSWORD),
    // @ts-ignore
    Ze(e, n.HEADERS)
  ]), i = Object.entries({
    Accept: "application/json",
    ...r,
    ...e.headers
  }).filter(([, a]) => a != null).reduce((a, [l, u]) => ({
    ...a,
    [l]: String(u)
  }), {});
  if (Ct(t) && (i.Authorization = `Bearer ${t}`), Ct(o) && Ct(s)) {
    const a = hs(`${o}:${s}`);
    i.Authorization = `Basic ${a}`;
  }
  return e.body !== void 0 && (e.mediaType ? i["Content-Type"] = e.mediaType : Vt(e.body) ? i["Content-Type"] = e.body.type || "application/octet-stream" : Ge(e.body) ? i["Content-Type"] = "text/plain" : Bn(e.body) || (i["Content-Type"] = "application/json")), new Headers(i);
}, _s = (n) => {
  var e, t;
  if (n.body !== void 0)
    return (e = n.mediaType) != null && e.includes("application/json") || (t = n.mediaType) != null && t.includes("+json") ? JSON.stringify(n.body) : Ge(n.body) || Vt(n.body) || Bn(n.body) ? n.body : JSON.stringify(n.body);
}, ys = async (n, e, t, o, s, r, i) => {
  const a = new AbortController();
  let l = {
    headers: r,
    body: o ?? s,
    method: e.method,
    signal: a.signal
  };
  n.WITH_CREDENTIALS && (l.credentials = n.CREDENTIALS);
  for (const u of n.interceptors.request._fns)
    l = await u(l);
  return i(() => a.abort()), await fetch(t, l);
}, ms = (n, e) => {
  if (e) {
    const t = n.headers.get(e);
    if (Ge(t))
      return t;
  }
}, bs = async (n) => {
  if (n.status !== 204)
    try {
      const e = n.headers.get("Content-Type");
      if (e) {
        const t = ["application/octet-stream", "application/pdf", "application/zip", "audio/", "image/", "video/"];
        if (e.includes("application/json") || e.includes("+json"))
          return await n.json();
        if (t.some((o) => e.includes(o)))
          return await n.blob();
        if (e.includes("multipart/form-data"))
          return await n.formData();
        if (e.includes("text/"))
          return await n.text();
      }
    } catch (e) {
      console.error(e);
    }
}, vs = (n, e) => {
  const o = {
    400: "Bad Request",
    401: "Unauthorized",
    402: "Payment Required",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    406: "Not Acceptable",
    407: "Proxy Authentication Required",
    408: "Request Timeout",
    409: "Conflict",
    410: "Gone",
    411: "Length Required",
    412: "Precondition Failed",
    413: "Payload Too Large",
    414: "URI Too Long",
    415: "Unsupported Media Type",
    416: "Range Not Satisfiable",
    417: "Expectation Failed",
    418: "Im a teapot",
    421: "Misdirected Request",
    422: "Unprocessable Content",
    423: "Locked",
    424: "Failed Dependency",
    425: "Too Early",
    426: "Upgrade Required",
    428: "Precondition Required",
    429: "Too Many Requests",
    431: "Request Header Fields Too Large",
    451: "Unavailable For Legal Reasons",
    500: "Internal Server Error",
    501: "Not Implemented",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout",
    505: "HTTP Version Not Supported",
    506: "Variant Also Negotiates",
    507: "Insufficient Storage",
    508: "Loop Detected",
    510: "Not Extended",
    511: "Network Authentication Required",
    ...n.errors
  }[e.status];
  if (o)
    throw new _n(n, e, o);
  if (!e.ok) {
    const s = e.status ?? "unknown", r = e.statusText ?? "unknown", i = (() => {
      try {
        return JSON.stringify(e.body, null, 2);
      } catch {
        return;
      }
    })();
    throw new _n(
      n,
      e,
      `Generic Error: status: ${s}; status text: ${r}; body: ${i}`
    );
  }
}, L = (n, e) => new us(async (t, o, s) => {
  try {
    const r = ps(n, e), i = fs(e), a = _s(e), l = await gs(n, e);
    if (!s.isCancelled) {
      let u = await ys(n, e, r, a, i, l, s);
      for (const T of n.interceptors.response._fns)
        u = await T(u);
      const p = await bs(u), g = ms(u, e.responseHeader);
      let N = p;
      e.responseTransformer && u.ok && (N = await e.responseTransformer(p));
      const X = {
        url: r,
        ok: u.ok,
        status: u.status,
        statusText: u.statusText,
        body: g ?? N
      };
      vs(e, X), t(X.body);
    }
  } catch (r) {
    o(r);
  }
});
class ra {
  /**
   * @returns unknown OK
   * @throws ApiError
   */
  static getActions() {
    return L(M, {
      method: "GET",
      url: "/umbraco/usync/api/v1/Actions"
    });
  }
  /**
   * @param data The data for the request.
   * @param data.requestId
   * @returns unknown OK
   * @throws ApiError
   */
  static download(e = {}) {
    return L(M, {
      method: "POST",
      url: "/umbraco/usync/api/v1/Download",
      query: {
        requestId: e.requestId
      }
    });
  }
  /**
   * @param data The data for the request.
   * @param data.requestBody
   * @returns unknown OK
   * @throws ApiError
   */
  static performAction(e = {}) {
    return L(M, {
      method: "POST",
      url: "/umbraco/usync/api/v1/Perform",
      body: e.requestBody,
      mediaType: "application/json"
    });
  }
  /**
   * @param data The data for the request.
   * @param data.tempKey
   * @returns unknown OK
   * @throws ApiError
   */
  static processUpload(e = {}) {
    return L(M, {
      method: "POST",
      url: "/umbraco/usync/api/v1/ProcessUpload",
      query: {
        tempKey: e.tempKey
      }
    });
  }
}
class ia {
  /**
   * @returns unknown OK
   * @throws ApiError
   */
  static checkLegacy() {
    return L(M, {
      method: "GET",
      url: "/umbraco/usync/api/v1/CheckLegacy"
    });
  }
  /**
   * @returns boolean OK
   * @throws ApiError
   */
  static copyLegacy() {
    return L(M, {
      method: "POST",
      url: "/umbraco/usync/api/v1/CopyLegacy"
    });
  }
  /**
   * @returns boolean OK
   * @throws ApiError
   */
  static ignoreLegacy() {
    return L(M, {
      method: "POST",
      url: "/umbraco/usync/api/v1/IgnoreLegacy"
    });
  }
}
class aa {
  /**
   * @returns unknown OK
   * @throws ApiError
   */
  static getAddOns() {
    return L(M, {
      method: "GET",
      url: "/umbraco/usync/api/v1/AddOns"
    });
  }
  /**
   * @returns unknown OK
   * @throws ApiError
   */
  static getAddonSplash() {
    return L(M, {
      method: "GET",
      url: "/umbraco/usync/api/v1/AddOnSplash"
    });
  }
  /**
   * @param data The data for the request.
   * @param data.id
   * @returns unknown OK
   * @throws ApiError
   */
  static getHandlerSetSettings(e = {}) {
    return L(M, {
      method: "GET",
      url: "/umbraco/usync/api/v1/HandlerSettings",
      query: {
        id: e.id
      }
    });
  }
  /**
   * @returns unknown OK
   * @throws ApiError
   */
  static getSettings() {
    return L(M, {
      method: "GET",
      url: "/umbraco/usync/api/v1/Settings"
    });
  }
}
const ca = {
  NO_CHANGE: "NoChange",
  CREATE: "Create",
  UPDATE: "Update",
  DELETE: "Delete",
  ERROR: "Error",
  WARNING: "Warning"
}, Q = {
  NO_CHANGE: "NoChange",
  CREATE: "Create",
  IMPORT: "Import",
  EXPORT: "Export",
  UPDATE: "Update",
  DELETE: "Delete",
  WILL_CHANGE: "WillChange",
  INFORMATION: "Information",
  ROLLEDBACK: "Rolledback",
  FAIL: "Fail",
  IMPORT_FAIL: "ImportFail",
  MISMATCH: "Mismatch",
  PARENT_MISSING: "ParentMissing",
  HIDDEN: "Hidden",
  CLEAN: "Clean",
  REMOVED: "Removed"
}, la = {
  DEFAULT: "Default",
  INFO: "Info",
  ERROR: "Error",
  SUCCESS: "Success",
  WARNING: "Warning"
}, ua = {
  PENDING: "Pending",
  PROCESSING: "Processing",
  COMPLETE: "Complete",
  ERROR: "Error"
};
var ws = Object.defineProperty, Ss = Object.getOwnPropertyDescriptor, Fn = (n) => {
  throw TypeError(n);
}, Cs = (n, e, t, o) => {
  for (var s = o > 1 ? void 0 : o ? Ss(e, t) : e, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (s = (o ? i(e, t, s) : i(s)) || s);
  return o && s && ws(e, t, s), s;
}, Es = (n, e, t) => e.has(n) || Fn("Cannot " + t), $s = (n, e, t) => e.has(n) ? Fn("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), ks = (n, e, t) => (Es(n, e, "access private method"), t), Mt, qn;
let ct = class extends jt {
  constructor() {
    super(...arguments), $s(this, Mt);
  }
  render() {
    var n, e;
    return d`
			<umb-body-layout headline="Changes : ${((n = this.data) == null ? void 0 : n.item.name) ?? ""}">
				<uui-box .headline=${this.localize.term("uSync_detailHeadline")}>
					<div slot="header">
						<umb-localize key="uSync_detailHeader"></umb-localize>
					</div>
					<usync-change-view .item=${(e = this.data) == null ? void 0 : e.item}></usync-change-view>
				</uui-box>
				<div slot="actions">
					<uui-button
						id="cancel"
						.label=${this.localize.term("general_close")}
						@click="${ks(this, Mt, qn)}"></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
Mt = /* @__PURE__ */ new WeakSet();
qn = function() {
  var n;
  (n = this.modalContext) == null || n.reject();
};
ct = Cs([
  P("usync-details-modal")
], ct);
const Ts = ct, Ps = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ts,
  get uSyncDetailsModalElement() {
    return ct;
  }
}, Symbol.toStringTag, { value: "Module" })), ha = new zt("usync.details.modal", {
  modal: {
    type: "sidebar",
    size: "large"
  }
});
var Is = Object.defineProperty, xs = Object.getOwnPropertyDescriptor, Vn = (n) => {
  throw TypeError(n);
}, As = (n, e, t, o) => {
  for (var s = o > 1 ? void 0 : o ? xs(e, t) : e, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (s = (o ? i(e, t, s) : i(s)) || s);
  return o && s && Is(e, t, s), s;
}, Rs = (n, e, t) => e.has(n) || Vn("Cannot " + t), Ds = (n, e, t) => e.has(n) ? Vn("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), Os = (n, e, t) => (Rs(n, e, "access private method"), t), Lt, Gn;
let lt = class extends jt {
  constructor() {
    super(...arguments), Ds(this, Lt);
  }
  render() {
    var e, t, o;
    const n = `Error: ${((e = this.data) == null ? void 0 : e.action.name) ?? ""} [${(t = this.data) == null ? void 0 : t.action.itemType}]`;
    return d`<umb-body-layout .headline=${n}>
			<strong>
				<umb-localize key="uSync_errorHeader"></umb-localize>
			</strong>
			<div class="error">${(o = this.data) == null ? void 0 : o.action.message}</div>
			<div slot="actions">
				<uui-button
					id="cancel"
					.label=${this.localize.term("general_close")}
					@click="${Os(this, Lt, Gn)}"></uui-button>
			</div>
		</umb-body-layout>`;
  }
};
Lt = /* @__PURE__ */ new WeakSet();
Gn = function() {
  var n;
  (n = this.modalContext) == null || n.reject();
};
lt.styles = D`
		umb-body-layout {
			max-width: 450px;
		}

		.error {
			padding: 10px;
			font-family: monospace;
			color: red;
		}
	`;
lt = As([
  P("usync-error-modal")
], lt);
const Ns = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get default() {
    return lt;
  }
}, Symbol.toStringTag, { value: "Module" })), Ms = new zt("usync.error.modal", {
  modal: {
    type: "dialog"
  }
});
var Ls = Object.defineProperty, Hs = Object.getOwnPropertyDescriptor, Kn = (n) => {
  throw TypeError(n);
}, Ke = (n, e, t, o) => {
  for (var s = o > 1 ? void 0 : o ? Hs(e, t) : e, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (s = (o ? i(e, t, s) : i(s)) || s);
  return o && s && Ls(e, t, s), s;
}, Us = (n, e, t) => e.has(n) || Kn("Cannot " + t), Ws = (n, e, t) => e.has(n) ? Kn("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), mn = (n, e, t) => (Us(n, e, "access private method"), t), st, Xn, Jn;
let re = class extends Ve {
  constructor() {
    super(...arguments), Ws(this, st), this.expanded = !1, this.showAll = !1, this.results = [], this.groupName = "";
  }
  getChangeCount() {
    var n;
    return (n = this.results) == null ? void 0 : n.filter((e) => e.change !== Q.NO_CHANGE).length;
  }
  render() {
    var e;
    const n = this.getChangeCount() ?? 0;
    return n === 0 && !this.showAll ? R : d`
			<uui-box class=${cn({ has_changes: n > 0 })}>
				<div
					class="summary ${At(this.expanded, () => "expanded")}"
					@click=${() => this.expanded = !this.expanded}>
					<h4>${this.localize.term("uSync_" + this.groupName)}</h4>
					<h4 class="count">${n}/${(e = this.results) == null ? void 0 : e.length}</h4>
				</div>
				<uui-table>
					${At(
      this.expanded == !0,
      () => d`${this.renderGroupedRows(this.results)}`
    )}
				</uui-table>
			</uui-box>
		`;
  }
  renderGroupedRows(n) {
    const e = n == null ? void 0 : n.map((t) => {
      if (!this.showAll && t.change == Q.NO_CHANGE) return R;
      const o = t.change == Q.NO_CHANGE ? "icon-trafic" : t.success ? "icon-check color-green" : "icon-wrong color-red";
      return d`
				<uui-table-row
					class=${cn({ changerow: t.change != Q.NO_CHANGE })}>
					<uui-table-cell class="icon-cell" .noPadding=${!0}>
						<umb-icon .name=${o}></umb-icon>
					</uui-table-cell>
					<uui-table-cell
						@click=${() => mn(this, st, Xn).call(this, t)}
						.clipText=${!0}
						style="--uui-table-cell-padding: var(--uui-size-space-2);">
						<div class="item-name">
							<div>${t.name}</div>
							<div>${this.renderMessage(t)}</div>
						</div>
						<div class="item-detail">
							<div>${t.itemType}</div>
							<div>${t.change}</div>
						</div>
					</uui-table-cell>
				</uui-table-row>
			`;
    });
    return d`${e}`;
  }
  renderMessage(n) {
    return n.change != Q.FAIL && n.change != Q.IMPORT_FAIL || !n.message ? d`<em>${n.message}</em>` : d` <uui-button
					look="default"
					color="danger"
					label="View error"
					compact
					@click=${(e) => mn(this, st, Jn).call(this, e, n)}></uui-button>`;
  }
};
st = /* @__PURE__ */ new WeakSet();
Xn = async function(n) {
  n.change != Q.NO_CHANGE && this.dispatchEvent(
    new CustomEvent("show-detail", { detail: n })
  );
};
Jn = async function(n, e) {
  n.stopPropagation();
  const t = await this.getContext(Wt), o = t == null ? void 0 : t.open(this, Ms, {
    data: {
      action: e
    }
  });
  return await (o == null ? void 0 : o.onSubmit().catch(() => {
  }));
};
re.styles = D`
		uui-box {
			cursor: pointer;
			--uui-box-default-padding: 1px 20px;
		}

		.summary {
			display: flex;
			margin: 0 -20px;
			padding: 0 20px;
			justify-content: space-between;
		}

		.expanded {
			border-bottom: 1px solid var(--uui-color-border);
		}

		.count {
			color: var(--uui-color-border);
		}

		.has_changes .count {
			color: var(--uui-text);
		}

		.changerow {
			cursor: pointer;
		}

		.icon-cell {
			width: var(--uui-size-8);
		}

		.item-name {
			display: flex;
			justify-content: space-between;
		}

		.item-detail {
			display: flex;
			justify-content: space-between;
			font-size: smaller;
			color: var(--uui-color-disabled-contrast);
		}

		uui-table-row:first-child uui-table-cell {
			border-top-color: transparent;
		}
	`;
Ke([
  y()
], re.prototype, "expanded", 2);
Ke([
  C({ type: Boolean })
], re.prototype, "showAll", 2);
Ke([
  C({ type: Array })
], re.prototype, "results", 2);
Ke([
  C({ type: String })
], re.prototype, "groupName", 2);
re = Ke([
  P("usync-result-group")
], re);
var W, fe, ge, dt, Yn;
class js extends Bt {
  constructor(t) {
    super(t);
    b(this, dt);
    b(this, W);
    b(this, fe);
    b(this, ge);
    v(this, fe, new Le(void 0)), this.update = h(this, fe).asObservable(), v(this, ge, new Le({})), this.add = h(this, ge).asObservable(), this.provideContext(In, this);
  }
  hostConnected() {
    super.hostConnected(), an(this, dt, Yn).call(this, "/umbraco/SyncHub");
  }
  hostDisconnected() {
    var t;
    super.hostDisconnected(), (t = h(this, W)) == null || t.stop().then(() => {
      console.debug("connection stopped");
    });
  }
  getClientId() {
    var t;
    return ((t = h(this, W)) == null ? void 0 : t.connectionId) ?? null;
  }
}
W = new WeakMap(), fe = new WeakMap(), ge = new WeakMap(), dt = new WeakSet(), Yn = function(t) {
  v(this, W, new un.HubConnectionBuilder().configureLogging(un.LogLevel.Warning).withUrl(t).build()), h(this, W).on("add", (o) => {
    h(this, ge).setValue(o);
  }), h(this, W).on("update", (o) => {
    h(this, fe).setValue(o);
  }), h(this, W).start().then(() => {
    console.debug("connection started");
  });
};
const da = new Dn(
  "uSyncSignalRContext"
);
class oe extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.HttpError}.
   *
   * @param {string} errorMessage A descriptive error message.
   * @param {number} statusCode The HTTP status code represented by this error.
   */
  constructor(e, t) {
    const o = new.target.prototype;
    super(`${e}: Status code '${t}'`), this.statusCode = t, this.__proto__ = o;
  }
}
class Gt extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.TimeoutError}.
   *
   * @param {string} errorMessage A descriptive error message.
   */
  constructor(e = "A timeout occurred.") {
    const t = new.target.prototype;
    super(e), this.__proto__ = t;
  }
}
class H extends Error {
  /** Constructs a new instance of {@link AbortError}.
   *
   * @param {string} errorMessage A descriptive error message.
   */
  constructor(e = "An abort occurred.") {
    const t = new.target.prototype;
    super(e), this.__proto__ = t;
  }
}
class zs extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.UnsupportedTransportError}.
   *
   * @param {string} message A descriptive error message.
   * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
   */
  constructor(e, t) {
    const o = new.target.prototype;
    super(e), this.transport = t, this.errorType = "UnsupportedTransportError", this.__proto__ = o;
  }
}
class Bs extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.DisabledTransportError}.
   *
   * @param {string} message A descriptive error message.
   * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
   */
  constructor(e, t) {
    const o = new.target.prototype;
    super(e), this.transport = t, this.errorType = "DisabledTransportError", this.__proto__ = o;
  }
}
class Fs extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.FailedToStartTransportError}.
   *
   * @param {string} message A descriptive error message.
   * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
   */
  constructor(e, t) {
    const o = new.target.prototype;
    super(e), this.transport = t, this.errorType = "FailedToStartTransportError", this.__proto__ = o;
  }
}
class bn extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.FailedToNegotiateWithServerError}.
   *
   * @param {string} message A descriptive error message.
   */
  constructor(e) {
    const t = new.target.prototype;
    super(e), this.errorType = "FailedToNegotiateWithServerError", this.__proto__ = t;
  }
}
class qs extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.AggregateErrors}.
   *
   * @param {string} message A descriptive error message.
   * @param {Error[]} innerErrors The collection of errors this error is aggregating.
   */
  constructor(e, t) {
    const o = new.target.prototype;
    super(e), this.innerErrors = t, this.__proto__ = o;
  }
}
class Qn {
  constructor(e, t, o) {
    this.statusCode = e, this.statusText = t, this.content = o;
  }
}
class gt {
  get(e, t) {
    return this.send({
      ...t,
      method: "GET",
      url: e
    });
  }
  post(e, t) {
    return this.send({
      ...t,
      method: "POST",
      url: e
    });
  }
  delete(e, t) {
    return this.send({
      ...t,
      method: "DELETE",
      url: e
    });
  }
  /** Gets all cookies that apply to the specified URL.
   *
   * @param url The URL that the cookies are valid for.
   * @returns {string} A string containing all the key-value cookie pairs for the specified URL.
   */
  // @ts-ignore
  getCookieString(e) {
    return "";
  }
}
var c;
(function(n) {
  n[n.Trace = 0] = "Trace", n[n.Debug = 1] = "Debug", n[n.Information = 2] = "Information", n[n.Warning = 3] = "Warning", n[n.Error = 4] = "Error", n[n.Critical = 5] = "Critical", n[n.None = 6] = "None";
})(c || (c = {}));
class We {
  constructor() {
  }
  /** @inheritDoc */
  // eslint-disable-next-line
  log(e, t) {
  }
}
We.instance = new We();
const Vs = "8.0.7";
class w {
  static isRequired(e, t) {
    if (e == null)
      throw new Error(`The '${t}' argument is required.`);
  }
  static isNotEmpty(e, t) {
    if (!e || e.match(/^\s*$/))
      throw new Error(`The '${t}' argument should not be empty.`);
  }
  static isIn(e, t, o) {
    if (!(e in t))
      throw new Error(`Unknown ${o} value: ${e}.`);
  }
}
class m {
  // react-native has a window but no document so we should check both
  static get isBrowser() {
    return !m.isNode && typeof window == "object" && typeof window.document == "object";
  }
  // WebWorkers don't have a window object so the isBrowser check would fail
  static get isWebWorker() {
    return !m.isNode && typeof self == "object" && "importScripts" in self;
  }
  // react-native has a window but no document
  static get isReactNative() {
    return !m.isNode && typeof window == "object" && typeof window.document > "u";
  }
  // Node apps shouldn't have a window object, but WebWorkers don't either
  // so we need to check for both WebWorker and window
  static get isNode() {
    return typeof process < "u" && process.release && process.release.name === "node";
  }
}
function je(n, e) {
  let t = "";
  return ie(n) ? (t = `Binary data of length ${n.byteLength}`, e && (t += `. Content: '${Gs(n)}'`)) : typeof n == "string" && (t = `String data of length ${n.length}`, e && (t += `. Content: '${n}'`)), t;
}
function Gs(n) {
  const e = new Uint8Array(n);
  let t = "";
  return e.forEach((o) => {
    const s = o < 16 ? "0" : "";
    t += `0x${s}${o.toString(16)} `;
  }), t.substr(0, t.length - 1);
}
function ie(n) {
  return n && typeof ArrayBuffer < "u" && (n instanceof ArrayBuffer || // Sometimes we get an ArrayBuffer that doesn't satisfy instanceof
  n.constructor && n.constructor.name === "ArrayBuffer");
}
async function Zn(n, e, t, o, s, r) {
  const i = {}, [a, l] = Ee();
  i[a] = l, n.log(c.Trace, `(${e} transport) sending data. ${je(s, r.logMessageContent)}.`);
  const u = ie(s) ? "arraybuffer" : "text", p = await t.post(o, {
    content: s,
    headers: { ...i, ...r.headers },
    responseType: u,
    timeout: r.timeout,
    withCredentials: r.withCredentials
  });
  n.log(c.Trace, `(${e} transport) request complete. Response status: ${p.statusCode}.`);
}
function Ks(n) {
  return n === void 0 ? new ut(c.Information) : n === null ? We.instance : n.log !== void 0 ? n : new ut(n);
}
class Xs {
  constructor(e, t) {
    this._subject = e, this._observer = t;
  }
  dispose() {
    const e = this._subject.observers.indexOf(this._observer);
    e > -1 && this._subject.observers.splice(e, 1), this._subject.observers.length === 0 && this._subject.cancelCallback && this._subject.cancelCallback().catch((t) => {
    });
  }
}
class ut {
  constructor(e) {
    this._minLevel = e, this.out = console;
  }
  log(e, t) {
    if (e >= this._minLevel) {
      const o = `[${(/* @__PURE__ */ new Date()).toISOString()}] ${c[e]}: ${t}`;
      switch (e) {
        case c.Critical:
        case c.Error:
          this.out.error(o);
          break;
        case c.Warning:
          this.out.warn(o);
          break;
        case c.Information:
          this.out.info(o);
          break;
        default:
          this.out.log(o);
          break;
      }
    }
  }
}
function Ee() {
  let n = "X-SignalR-User-Agent";
  return m.isNode && (n = "User-Agent"), [n, Js(Vs, Ys(), Zs(), Qs())];
}
function Js(n, e, t, o) {
  let s = "Microsoft SignalR/";
  const r = n.split(".");
  return s += `${r[0]}.${r[1]}`, s += ` (${n}; `, e && e !== "" ? s += `${e}; ` : s += "Unknown OS; ", s += `${t}`, o ? s += `; ${o}` : s += "; Unknown Runtime Version", s += ")", s;
}
function Ys() {
  if (m.isNode)
    switch (process.platform) {
      case "win32":
        return "Windows NT";
      case "darwin":
        return "macOS";
      case "linux":
        return "Linux";
      default:
        return process.platform;
    }
  else
    return "";
}
function Qs() {
  if (m.isNode)
    return process.versions.node;
}
function Zs() {
  return m.isNode ? "NodeJS" : "Browser";
}
function Et(n) {
  return n.stack ? n.stack : n.message ? n.message : `${n}`;
}
function er() {
  if (typeof globalThis < "u")
    return globalThis;
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("could not find global");
}
class tr extends gt {
  constructor(e) {
    if (super(), this._logger = e, typeof fetch > "u" || m.isNode) {
      const t = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      this._jar = new (t("tough-cookie")).CookieJar(), typeof fetch > "u" ? this._fetchType = t("node-fetch") : this._fetchType = fetch, this._fetchType = t("fetch-cookie")(this._fetchType, this._jar);
    } else
      this._fetchType = fetch.bind(er());
    if (typeof AbortController > "u") {
      const t = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      this._abortControllerType = t("abort-controller");
    } else
      this._abortControllerType = AbortController;
  }
  /** @inheritDoc */
  async send(e) {
    if (e.abortSignal && e.abortSignal.aborted)
      throw new H();
    if (!e.method)
      throw new Error("No method defined.");
    if (!e.url)
      throw new Error("No url defined.");
    const t = new this._abortControllerType();
    let o;
    e.abortSignal && (e.abortSignal.onabort = () => {
      t.abort(), o = new H();
    });
    let s = null;
    if (e.timeout) {
      const l = e.timeout;
      s = setTimeout(() => {
        t.abort(), this._logger.log(c.Warning, "Timeout from HTTP request."), o = new Gt();
      }, l);
    }
    e.content === "" && (e.content = void 0), e.content && (e.headers = e.headers || {}, ie(e.content) ? e.headers["Content-Type"] = "application/octet-stream" : e.headers["Content-Type"] = "text/plain;charset=UTF-8");
    let r;
    try {
      r = await this._fetchType(e.url, {
        body: e.content,
        cache: "no-cache",
        credentials: e.withCredentials === !0 ? "include" : "same-origin",
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          ...e.headers
        },
        method: e.method,
        mode: "cors",
        redirect: "follow",
        signal: t.signal
      });
    } catch (l) {
      throw o || (this._logger.log(c.Warning, `Error from HTTP request. ${l}.`), l);
    } finally {
      s && clearTimeout(s), e.abortSignal && (e.abortSignal.onabort = null);
    }
    if (!r.ok) {
      const l = await vn(r, "text");
      throw new oe(l || r.statusText, r.status);
    }
    const a = await vn(r, e.responseType);
    return new Qn(r.status, r.statusText, a);
  }
  getCookieString(e) {
    let t = "";
    return m.isNode && this._jar && this._jar.getCookies(e, (o, s) => t = s.join("; ")), t;
  }
}
function vn(n, e) {
  let t;
  switch (e) {
    case "arraybuffer":
      t = n.arrayBuffer();
      break;
    case "text":
      t = n.text();
      break;
    case "blob":
    case "document":
    case "json":
      throw new Error(`${e} is not supported.`);
    default:
      t = n.text();
      break;
  }
  return t;
}
class nr extends gt {
  constructor(e) {
    super(), this._logger = e;
  }
  /** @inheritDoc */
  send(e) {
    return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new H()) : e.method ? e.url ? new Promise((t, o) => {
      const s = new XMLHttpRequest();
      s.open(e.method, e.url, !0), s.withCredentials = e.withCredentials === void 0 ? !0 : e.withCredentials, s.setRequestHeader("X-Requested-With", "XMLHttpRequest"), e.content === "" && (e.content = void 0), e.content && (ie(e.content) ? s.setRequestHeader("Content-Type", "application/octet-stream") : s.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"));
      const r = e.headers;
      r && Object.keys(r).forEach((i) => {
        s.setRequestHeader(i, r[i]);
      }), e.responseType && (s.responseType = e.responseType), e.abortSignal && (e.abortSignal.onabort = () => {
        s.abort(), o(new H());
      }), e.timeout && (s.timeout = e.timeout), s.onload = () => {
        e.abortSignal && (e.abortSignal.onabort = null), s.status >= 200 && s.status < 300 ? t(new Qn(s.status, s.statusText, s.response || s.responseText)) : o(new oe(s.response || s.responseText || s.statusText, s.status));
      }, s.onerror = () => {
        this._logger.log(c.Warning, `Error from HTTP request. ${s.status}: ${s.statusText}.`), o(new oe(s.statusText, s.status));
      }, s.ontimeout = () => {
        this._logger.log(c.Warning, "Timeout from HTTP request."), o(new Gt());
      }, s.send(e.content);
    }) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."));
  }
}
class or extends gt {
  /** Creates a new instance of the {@link @microsoft/signalr.DefaultHttpClient}, using the provided {@link @microsoft/signalr.ILogger} to log messages. */
  constructor(e) {
    if (super(), typeof fetch < "u" || m.isNode)
      this._httpClient = new tr(e);
    else if (typeof XMLHttpRequest < "u")
      this._httpClient = new nr(e);
    else
      throw new Error("No usable HttpClient found.");
  }
  /** @inheritDoc */
  send(e) {
    return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new H()) : e.method ? e.url ? this._httpClient.send(e) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."));
  }
  getCookieString(e) {
    return this._httpClient.getCookieString(e);
  }
}
class A {
  static write(e) {
    return `${e}${A.RecordSeparator}`;
  }
  static parse(e) {
    if (e[e.length - 1] !== A.RecordSeparator)
      throw new Error("Message is incomplete.");
    const t = e.split(A.RecordSeparator);
    return t.pop(), t;
  }
}
A.RecordSeparatorCode = 30;
A.RecordSeparator = String.fromCharCode(A.RecordSeparatorCode);
class sr {
  // Handshake request is always JSON
  writeHandshakeRequest(e) {
    return A.write(JSON.stringify(e));
  }
  parseHandshakeResponse(e) {
    let t, o;
    if (ie(e)) {
      const a = new Uint8Array(e), l = a.indexOf(A.RecordSeparatorCode);
      if (l === -1)
        throw new Error("Message is incomplete.");
      const u = l + 1;
      t = String.fromCharCode.apply(null, Array.prototype.slice.call(a.slice(0, u))), o = a.byteLength > u ? a.slice(u).buffer : null;
    } else {
      const a = e, l = a.indexOf(A.RecordSeparator);
      if (l === -1)
        throw new Error("Message is incomplete.");
      const u = l + 1;
      t = a.substring(0, u), o = a.length > u ? a.substring(u) : null;
    }
    const s = A.parse(t), r = JSON.parse(s[0]);
    if (r.type)
      throw new Error("Expected a handshake response from the server.");
    return [o, r];
  }
}
var f;
(function(n) {
  n[n.Invocation = 1] = "Invocation", n[n.StreamItem = 2] = "StreamItem", n[n.Completion = 3] = "Completion", n[n.StreamInvocation = 4] = "StreamInvocation", n[n.CancelInvocation = 5] = "CancelInvocation", n[n.Ping = 6] = "Ping", n[n.Close = 7] = "Close", n[n.Ack = 8] = "Ack", n[n.Sequence = 9] = "Sequence";
})(f || (f = {}));
class rr {
  constructor() {
    this.observers = [];
  }
  next(e) {
    for (const t of this.observers)
      t.next(e);
  }
  error(e) {
    for (const t of this.observers)
      t.error && t.error(e);
  }
  complete() {
    for (const e of this.observers)
      e.complete && e.complete();
  }
  subscribe(e) {
    return this.observers.push(e), new Xs(this, e);
  }
}
class ir {
  constructor(e, t, o) {
    this._bufferSize = 1e5, this._messages = [], this._totalMessageCount = 0, this._waitForSequenceMessage = !1, this._nextReceivingSequenceId = 1, this._latestReceivedSequenceId = 0, this._bufferedByteCount = 0, this._reconnectInProgress = !1, this._protocol = e, this._connection = t, this._bufferSize = o;
  }
  async _send(e) {
    const t = this._protocol.writeMessage(e);
    let o = Promise.resolve();
    if (this._isInvocationMessage(e)) {
      this._totalMessageCount++;
      let s = () => {
      }, r = () => {
      };
      ie(t) ? this._bufferedByteCount += t.byteLength : this._bufferedByteCount += t.length, this._bufferedByteCount >= this._bufferSize && (o = new Promise((i, a) => {
        s = i, r = a;
      })), this._messages.push(new ar(t, this._totalMessageCount, s, r));
    }
    try {
      this._reconnectInProgress || await this._connection.send(t);
    } catch {
      this._disconnected();
    }
    await o;
  }
  _ack(e) {
    let t = -1;
    for (let o = 0; o < this._messages.length; o++) {
      const s = this._messages[o];
      if (s._id <= e.sequenceId)
        t = o, ie(s._message) ? this._bufferedByteCount -= s._message.byteLength : this._bufferedByteCount -= s._message.length, s._resolver();
      else if (this._bufferedByteCount < this._bufferSize)
        s._resolver();
      else
        break;
    }
    t !== -1 && (this._messages = this._messages.slice(t + 1));
  }
  _shouldProcessMessage(e) {
    if (this._waitForSequenceMessage)
      return e.type !== f.Sequence ? !1 : (this._waitForSequenceMessage = !1, !0);
    if (!this._isInvocationMessage(e))
      return !0;
    const t = this._nextReceivingSequenceId;
    return this._nextReceivingSequenceId++, t <= this._latestReceivedSequenceId ? (t === this._latestReceivedSequenceId && this._ackTimer(), !1) : (this._latestReceivedSequenceId = t, this._ackTimer(), !0);
  }
  _resetSequence(e) {
    if (e.sequenceId > this._nextReceivingSequenceId) {
      this._connection.stop(new Error("Sequence ID greater than amount of messages we've received."));
      return;
    }
    this._nextReceivingSequenceId = e.sequenceId;
  }
  _disconnected() {
    this._reconnectInProgress = !0, this._waitForSequenceMessage = !0;
  }
  async _resend() {
    const e = this._messages.length !== 0 ? this._messages[0]._id : this._totalMessageCount + 1;
    await this._connection.send(this._protocol.writeMessage({ type: f.Sequence, sequenceId: e }));
    const t = this._messages;
    for (const o of t)
      await this._connection.send(o._message);
    this._reconnectInProgress = !1;
  }
  _dispose(e) {
    e ?? (e = new Error("Unable to reconnect to server."));
    for (const t of this._messages)
      t._rejector(e);
  }
  _isInvocationMessage(e) {
    switch (e.type) {
      case f.Invocation:
      case f.StreamItem:
      case f.Completion:
      case f.StreamInvocation:
      case f.CancelInvocation:
        return !0;
      case f.Close:
      case f.Sequence:
      case f.Ping:
      case f.Ack:
        return !1;
    }
  }
  _ackTimer() {
    this._ackTimerHandle === void 0 && (this._ackTimerHandle = setTimeout(async () => {
      try {
        this._reconnectInProgress || await this._connection.send(this._protocol.writeMessage({ type: f.Ack, sequenceId: this._latestReceivedSequenceId }));
      } catch {
      }
      clearTimeout(this._ackTimerHandle), this._ackTimerHandle = void 0;
    }, 1e3));
  }
}
class ar {
  constructor(e, t, o, s) {
    this._message = e, this._id = t, this._resolver = o, this._rejector = s;
  }
}
const cr = 30 * 1e3, lr = 15 * 1e3, ur = 1e5;
var _;
(function(n) {
  n.Disconnected = "Disconnected", n.Connecting = "Connecting", n.Connected = "Connected", n.Disconnecting = "Disconnecting", n.Reconnecting = "Reconnecting";
})(_ || (_ = {}));
class Kt {
  /** @internal */
  // Using a public static factory method means we can have a private constructor and an _internal_
  // create method that can be used by HubConnectionBuilder. An "internal" constructor would just
  // be stripped away and the '.d.ts' file would have no constructor, which is interpreted as a
  // public parameter-less constructor.
  static create(e, t, o, s, r, i, a) {
    return new Kt(e, t, o, s, r, i, a);
  }
  constructor(e, t, o, s, r, i, a) {
    this._nextKeepAlive = 0, this._freezeEventListener = () => {
      this._logger.log(c.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://learn.microsoft.com/aspnet/core/signalr/javascript-client#bsleep");
    }, w.isRequired(e, "connection"), w.isRequired(t, "logger"), w.isRequired(o, "protocol"), this.serverTimeoutInMilliseconds = r ?? cr, this.keepAliveIntervalInMilliseconds = i ?? lr, this._statefulReconnectBufferSize = a ?? ur, this._logger = t, this._protocol = o, this.connection = e, this._reconnectPolicy = s, this._handshakeProtocol = new sr(), this.connection.onreceive = (l) => this._processIncomingData(l), this.connection.onclose = (l) => this._connectionClosed(l), this._callbacks = {}, this._methods = {}, this._closedCallbacks = [], this._reconnectingCallbacks = [], this._reconnectedCallbacks = [], this._invocationId = 0, this._receivedHandshakeResponse = !1, this._connectionState = _.Disconnected, this._connectionStarted = !1, this._cachedPingMessage = this._protocol.writeMessage({ type: f.Ping });
  }
  /** Indicates the state of the {@link HubConnection} to the server. */
  get state() {
    return this._connectionState;
  }
  /** Represents the connection id of the {@link HubConnection} on the server. The connection id will be null when the connection is either
   *  in the disconnected state or if the negotiation step was skipped.
   */
  get connectionId() {
    return this.connection && this.connection.connectionId || null;
  }
  /** Indicates the url of the {@link HubConnection} to the server. */
  get baseUrl() {
    return this.connection.baseUrl || "";
  }
  /**
   * Sets a new url for the HubConnection. Note that the url can only be changed when the connection is in either the Disconnected or
   * Reconnecting states.
   * @param {string} url The url to connect to.
   */
  set baseUrl(e) {
    if (this._connectionState !== _.Disconnected && this._connectionState !== _.Reconnecting)
      throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
    if (!e)
      throw new Error("The HubConnection url must be a valid url.");
    this.connection.baseUrl = e;
  }
  /** Starts the connection.
   *
   * @returns {Promise<void>} A Promise that resolves when the connection has been successfully established, or rejects with an error.
   */
  start() {
    return this._startPromise = this._startWithStateTransitions(), this._startPromise;
  }
  async _startWithStateTransitions() {
    if (this._connectionState !== _.Disconnected)
      return Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));
    this._connectionState = _.Connecting, this._logger.log(c.Debug, "Starting HubConnection.");
    try {
      await this._startInternal(), m.isBrowser && window.document.addEventListener("freeze", this._freezeEventListener), this._connectionState = _.Connected, this._connectionStarted = !0, this._logger.log(c.Debug, "HubConnection connected successfully.");
    } catch (e) {
      return this._connectionState = _.Disconnected, this._logger.log(c.Debug, `HubConnection failed to start successfully because of error '${e}'.`), Promise.reject(e);
    }
  }
  async _startInternal() {
    this._stopDuringStartError = void 0, this._receivedHandshakeResponse = !1;
    const e = new Promise((t, o) => {
      this._handshakeResolver = t, this._handshakeRejecter = o;
    });
    await this.connection.start(this._protocol.transferFormat);
    try {
      let t = this._protocol.version;
      this.connection.features.reconnect || (t = 1);
      const o = {
        protocol: this._protocol.name,
        version: t
      };
      if (this._logger.log(c.Debug, "Sending handshake request."), await this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(o)), this._logger.log(c.Information, `Using HubProtocol '${this._protocol.name}'.`), this._cleanupTimeout(), this._resetTimeoutPeriod(), this._resetKeepAliveInterval(), await e, this._stopDuringStartError)
        throw this._stopDuringStartError;
      (this.connection.features.reconnect || !1) && (this._messageBuffer = new ir(this._protocol, this.connection, this._statefulReconnectBufferSize), this.connection.features.disconnected = this._messageBuffer._disconnected.bind(this._messageBuffer), this.connection.features.resend = () => {
        if (this._messageBuffer)
          return this._messageBuffer._resend();
      }), this.connection.features.inherentKeepAlive || await this._sendMessage(this._cachedPingMessage);
    } catch (t) {
      throw this._logger.log(c.Debug, `Hub handshake failed with error '${t}' during start(). Stopping HubConnection.`), this._cleanupTimeout(), this._cleanupPingTimer(), await this.connection.stop(t), t;
    }
  }
  /** Stops the connection.
   *
   * @returns {Promise<void>} A Promise that resolves when the connection has been successfully terminated, or rejects with an error.
   */
  async stop() {
    const e = this._startPromise;
    this.connection.features.reconnect = !1, this._stopPromise = this._stopInternal(), await this._stopPromise;
    try {
      await e;
    } catch {
    }
  }
  _stopInternal(e) {
    if (this._connectionState === _.Disconnected)
      return this._logger.log(c.Debug, `Call to HubConnection.stop(${e}) ignored because it is already in the disconnected state.`), Promise.resolve();
    if (this._connectionState === _.Disconnecting)
      return this._logger.log(c.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise;
    const t = this._connectionState;
    return this._connectionState = _.Disconnecting, this._logger.log(c.Debug, "Stopping HubConnection."), this._reconnectDelayHandle ? (this._logger.log(c.Debug, "Connection stopped during reconnect delay. Done reconnecting."), clearTimeout(this._reconnectDelayHandle), this._reconnectDelayHandle = void 0, this._completeClose(), Promise.resolve()) : (t === _.Connected && this._sendCloseMessage(), this._cleanupTimeout(), this._cleanupPingTimer(), this._stopDuringStartError = e || new H("The connection was stopped before the hub handshake could complete."), this.connection.stop(e));
  }
  async _sendCloseMessage() {
    try {
      await this._sendWithProtocol(this._createCloseMessage());
    } catch {
    }
  }
  /** Invokes a streaming hub method on the server using the specified name and arguments.
   *
   * @typeparam T The type of the items returned by the server.
   * @param {string} methodName The name of the server method to invoke.
   * @param {any[]} args The arguments used to invoke the server method.
   * @returns {IStreamResult<T>} An object that yields results from the server as they are received.
   */
  stream(e, ...t) {
    const [o, s] = this._replaceStreamingParams(t), r = this._createStreamInvocation(e, t, s);
    let i;
    const a = new rr();
    return a.cancelCallback = () => {
      const l = this._createCancelInvocation(r.invocationId);
      return delete this._callbacks[r.invocationId], i.then(() => this._sendWithProtocol(l));
    }, this._callbacks[r.invocationId] = (l, u) => {
      if (u) {
        a.error(u);
        return;
      } else l && (l.type === f.Completion ? l.error ? a.error(new Error(l.error)) : a.complete() : a.next(l.item));
    }, i = this._sendWithProtocol(r).catch((l) => {
      a.error(l), delete this._callbacks[r.invocationId];
    }), this._launchStreams(o, i), a;
  }
  _sendMessage(e) {
    return this._resetKeepAliveInterval(), this.connection.send(e);
  }
  /**
   * Sends a js object to the server.
   * @param message The js object to serialize and send.
   */
  _sendWithProtocol(e) {
    return this._messageBuffer ? this._messageBuffer._send(e) : this._sendMessage(this._protocol.writeMessage(e));
  }
  /** Invokes a hub method on the server using the specified name and arguments. Does not wait for a response from the receiver.
   *
   * The Promise returned by this method resolves when the client has sent the invocation to the server. The server may still
   * be processing the invocation.
   *
   * @param {string} methodName The name of the server method to invoke.
   * @param {any[]} args The arguments used to invoke the server method.
   * @returns {Promise<void>} A Promise that resolves when the invocation has been successfully sent, or rejects with an error.
   */
  send(e, ...t) {
    const [o, s] = this._replaceStreamingParams(t), r = this._sendWithProtocol(this._createInvocation(e, t, !0, s));
    return this._launchStreams(o, r), r;
  }
  /** Invokes a hub method on the server using the specified name and arguments.
   *
   * The Promise returned by this method resolves when the server indicates it has finished invoking the method. When the promise
   * resolves, the server has finished invoking the method. If the server method returns a result, it is produced as the result of
   * resolving the Promise.
   *
   * @typeparam T The expected return type.
   * @param {string} methodName The name of the server method to invoke.
   * @param {any[]} args The arguments used to invoke the server method.
   * @returns {Promise<T>} A Promise that resolves with the result of the server method (if any), or rejects with an error.
   */
  invoke(e, ...t) {
    const [o, s] = this._replaceStreamingParams(t), r = this._createInvocation(e, t, !1, s);
    return new Promise((a, l) => {
      this._callbacks[r.invocationId] = (p, g) => {
        if (g) {
          l(g);
          return;
        } else p && (p.type === f.Completion ? p.error ? l(new Error(p.error)) : a(p.result) : l(new Error(`Unexpected message type: ${p.type}`)));
      };
      const u = this._sendWithProtocol(r).catch((p) => {
        l(p), delete this._callbacks[r.invocationId];
      });
      this._launchStreams(o, u);
    });
  }
  on(e, t) {
    !e || !t || (e = e.toLowerCase(), this._methods[e] || (this._methods[e] = []), this._methods[e].indexOf(t) === -1 && this._methods[e].push(t));
  }
  off(e, t) {
    if (!e)
      return;
    e = e.toLowerCase();
    const o = this._methods[e];
    if (o)
      if (t) {
        const s = o.indexOf(t);
        s !== -1 && (o.splice(s, 1), o.length === 0 && delete this._methods[e]);
      } else
        delete this._methods[e];
  }
  /** Registers a handler that will be invoked when the connection is closed.
   *
   * @param {Function} callback The handler that will be invoked when the connection is closed. Optionally receives a single argument containing the error that caused the connection to close (if any).
   */
  onclose(e) {
    e && this._closedCallbacks.push(e);
  }
  /** Registers a handler that will be invoked when the connection starts reconnecting.
   *
   * @param {Function} callback The handler that will be invoked when the connection starts reconnecting. Optionally receives a single argument containing the error that caused the connection to start reconnecting (if any).
   */
  onreconnecting(e) {
    e && this._reconnectingCallbacks.push(e);
  }
  /** Registers a handler that will be invoked when the connection successfully reconnects.
   *
   * @param {Function} callback The handler that will be invoked when the connection successfully reconnects.
   */
  onreconnected(e) {
    e && this._reconnectedCallbacks.push(e);
  }
  _processIncomingData(e) {
    if (this._cleanupTimeout(), this._receivedHandshakeResponse || (e = this._processHandshakeResponse(e), this._receivedHandshakeResponse = !0), e) {
      const t = this._protocol.parseMessages(e, this._logger);
      for (const o of t)
        if (!(this._messageBuffer && !this._messageBuffer._shouldProcessMessage(o)))
          switch (o.type) {
            case f.Invocation:
              this._invokeClientMethod(o).catch((s) => {
                this._logger.log(c.Error, `Invoke client method threw error: ${Et(s)}`);
              });
              break;
            case f.StreamItem:
            case f.Completion: {
              const s = this._callbacks[o.invocationId];
              if (s) {
                o.type === f.Completion && delete this._callbacks[o.invocationId];
                try {
                  s(o);
                } catch (r) {
                  this._logger.log(c.Error, `Stream callback threw error: ${Et(r)}`);
                }
              }
              break;
            }
            case f.Ping:
              break;
            case f.Close: {
              this._logger.log(c.Information, "Close message received from server.");
              const s = o.error ? new Error("Server returned an error on close: " + o.error) : void 0;
              o.allowReconnect === !0 ? this.connection.stop(s) : this._stopPromise = this._stopInternal(s);
              break;
            }
            case f.Ack:
              this._messageBuffer && this._messageBuffer._ack(o);
              break;
            case f.Sequence:
              this._messageBuffer && this._messageBuffer._resetSequence(o);
              break;
            default:
              this._logger.log(c.Warning, `Invalid message type: ${o.type}.`);
              break;
          }
    }
    this._resetTimeoutPeriod();
  }
  _processHandshakeResponse(e) {
    let t, o;
    try {
      [o, t] = this._handshakeProtocol.parseHandshakeResponse(e);
    } catch (s) {
      const r = "Error parsing handshake response: " + s;
      this._logger.log(c.Error, r);
      const i = new Error(r);
      throw this._handshakeRejecter(i), i;
    }
    if (t.error) {
      const s = "Server returned handshake error: " + t.error;
      this._logger.log(c.Error, s);
      const r = new Error(s);
      throw this._handshakeRejecter(r), r;
    } else
      this._logger.log(c.Debug, "Server handshake complete.");
    return this._handshakeResolver(), o;
  }
  _resetKeepAliveInterval() {
    this.connection.features.inherentKeepAlive || (this._nextKeepAlive = (/* @__PURE__ */ new Date()).getTime() + this.keepAliveIntervalInMilliseconds, this._cleanupPingTimer());
  }
  _resetTimeoutPeriod() {
    if ((!this.connection.features || !this.connection.features.inherentKeepAlive) && (this._timeoutHandle = setTimeout(() => this.serverTimeout(), this.serverTimeoutInMilliseconds), this._pingServerHandle === void 0)) {
      let e = this._nextKeepAlive - (/* @__PURE__ */ new Date()).getTime();
      e < 0 && (e = 0), this._pingServerHandle = setTimeout(async () => {
        if (this._connectionState === _.Connected)
          try {
            await this._sendMessage(this._cachedPingMessage);
          } catch {
            this._cleanupPingTimer();
          }
      }, e);
    }
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  serverTimeout() {
    this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."));
  }
  async _invokeClientMethod(e) {
    const t = e.target.toLowerCase(), o = this._methods[t];
    if (!o) {
      this._logger.log(c.Warning, `No client method with the name '${t}' found.`), e.invocationId && (this._logger.log(c.Warning, `No result given for '${t}' method and invocation ID '${e.invocationId}'.`), await this._sendWithProtocol(this._createCompletionMessage(e.invocationId, "Client didn't provide a result.", null)));
      return;
    }
    const s = o.slice(), r = !!e.invocationId;
    let i, a, l;
    for (const u of s)
      try {
        const p = i;
        i = await u.apply(this, e.arguments), r && i && p && (this._logger.log(c.Error, `Multiple results provided for '${t}'. Sending error to server.`), l = this._createCompletionMessage(e.invocationId, "Client provided multiple results.", null)), a = void 0;
      } catch (p) {
        a = p, this._logger.log(c.Error, `A callback for the method '${t}' threw error '${p}'.`);
      }
    l ? await this._sendWithProtocol(l) : r ? (a ? l = this._createCompletionMessage(e.invocationId, `${a}`, null) : i !== void 0 ? l = this._createCompletionMessage(e.invocationId, null, i) : (this._logger.log(c.Warning, `No result given for '${t}' method and invocation ID '${e.invocationId}'.`), l = this._createCompletionMessage(e.invocationId, "Client didn't provide a result.", null)), await this._sendWithProtocol(l)) : i && this._logger.log(c.Error, `Result given for '${t}' method but server is not expecting a result.`);
  }
  _connectionClosed(e) {
    this._logger.log(c.Debug, `HubConnection.connectionClosed(${e}) called while in state ${this._connectionState}.`), this._stopDuringStartError = this._stopDuringStartError || e || new H("The underlying connection was closed before the hub handshake could complete."), this._handshakeResolver && this._handshakeResolver(), this._cancelCallbacksWithError(e || new Error("Invocation canceled due to the underlying connection being closed.")), this._cleanupTimeout(), this._cleanupPingTimer(), this._connectionState === _.Disconnecting ? this._completeClose(e) : this._connectionState === _.Connected && this._reconnectPolicy ? this._reconnect(e) : this._connectionState === _.Connected && this._completeClose(e);
  }
  _completeClose(e) {
    if (this._connectionStarted) {
      this._connectionState = _.Disconnected, this._connectionStarted = !1, this._messageBuffer && (this._messageBuffer._dispose(e ?? new Error("Connection closed.")), this._messageBuffer = void 0), m.isBrowser && window.document.removeEventListener("freeze", this._freezeEventListener);
      try {
        this._closedCallbacks.forEach((t) => t.apply(this, [e]));
      } catch (t) {
        this._logger.log(c.Error, `An onclose callback called with error '${e}' threw error '${t}'.`);
      }
    }
  }
  async _reconnect(e) {
    const t = Date.now();
    let o = 0, s = e !== void 0 ? e : new Error("Attempting to reconnect due to a unknown error."), r = this._getNextRetryDelay(o++, 0, s);
    if (r === null) {
      this._logger.log(c.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt."), this._completeClose(e);
      return;
    }
    if (this._connectionState = _.Reconnecting, e ? this._logger.log(c.Information, `Connection reconnecting because of error '${e}'.`) : this._logger.log(c.Information, "Connection reconnecting."), this._reconnectingCallbacks.length !== 0) {
      try {
        this._reconnectingCallbacks.forEach((i) => i.apply(this, [e]));
      } catch (i) {
        this._logger.log(c.Error, `An onreconnecting callback called with error '${e}' threw error '${i}'.`);
      }
      if (this._connectionState !== _.Reconnecting) {
        this._logger.log(c.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
        return;
      }
    }
    for (; r !== null; ) {
      if (this._logger.log(c.Information, `Reconnect attempt number ${o} will start in ${r} ms.`), await new Promise((i) => {
        this._reconnectDelayHandle = setTimeout(i, r);
      }), this._reconnectDelayHandle = void 0, this._connectionState !== _.Reconnecting) {
        this._logger.log(c.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
        return;
      }
      try {
        if (await this._startInternal(), this._connectionState = _.Connected, this._logger.log(c.Information, "HubConnection reconnected successfully."), this._reconnectedCallbacks.length !== 0)
          try {
            this._reconnectedCallbacks.forEach((i) => i.apply(this, [this.connection.connectionId]));
          } catch (i) {
            this._logger.log(c.Error, `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${i}'.`);
          }
        return;
      } catch (i) {
        if (this._logger.log(c.Information, `Reconnect attempt failed because of error '${i}'.`), this._connectionState !== _.Reconnecting) {
          this._logger.log(c.Debug, `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`), this._connectionState === _.Disconnecting && this._completeClose();
          return;
        }
        s = i instanceof Error ? i : new Error(i.toString()), r = this._getNextRetryDelay(o++, Date.now() - t, s);
      }
    }
    this._logger.log(c.Information, `Reconnect retries have been exhausted after ${Date.now() - t} ms and ${o} failed attempts. Connection disconnecting.`), this._completeClose();
  }
  _getNextRetryDelay(e, t, o) {
    try {
      return this._reconnectPolicy.nextRetryDelayInMilliseconds({
        elapsedMilliseconds: t,
        previousRetryCount: e,
        retryReason: o
      });
    } catch (s) {
      return this._logger.log(c.Error, `IRetryPolicy.nextRetryDelayInMilliseconds(${e}, ${t}) threw error '${s}'.`), null;
    }
  }
  _cancelCallbacksWithError(e) {
    const t = this._callbacks;
    this._callbacks = {}, Object.keys(t).forEach((o) => {
      const s = t[o];
      try {
        s(null, e);
      } catch (r) {
        this._logger.log(c.Error, `Stream 'error' callback called with '${e}' threw error: ${Et(r)}`);
      }
    });
  }
  _cleanupPingTimer() {
    this._pingServerHandle && (clearTimeout(this._pingServerHandle), this._pingServerHandle = void 0);
  }
  _cleanupTimeout() {
    this._timeoutHandle && clearTimeout(this._timeoutHandle);
  }
  _createInvocation(e, t, o, s) {
    if (o)
      return s.length !== 0 ? {
        arguments: t,
        streamIds: s,
        target: e,
        type: f.Invocation
      } : {
        arguments: t,
        target: e,
        type: f.Invocation
      };
    {
      const r = this._invocationId;
      return this._invocationId++, s.length !== 0 ? {
        arguments: t,
        invocationId: r.toString(),
        streamIds: s,
        target: e,
        type: f.Invocation
      } : {
        arguments: t,
        invocationId: r.toString(),
        target: e,
        type: f.Invocation
      };
    }
  }
  _launchStreams(e, t) {
    if (e.length !== 0) {
      t || (t = Promise.resolve());
      for (const o in e)
        e[o].subscribe({
          complete: () => {
            t = t.then(() => this._sendWithProtocol(this._createCompletionMessage(o)));
          },
          error: (s) => {
            let r;
            s instanceof Error ? r = s.message : s && s.toString ? r = s.toString() : r = "Unknown error", t = t.then(() => this._sendWithProtocol(this._createCompletionMessage(o, r)));
          },
          next: (s) => {
            t = t.then(() => this._sendWithProtocol(this._createStreamItemMessage(o, s)));
          }
        });
    }
  }
  _replaceStreamingParams(e) {
    const t = [], o = [];
    for (let s = 0; s < e.length; s++) {
      const r = e[s];
      if (this._isObservable(r)) {
        const i = this._invocationId;
        this._invocationId++, t[i] = r, o.push(i.toString()), e.splice(s, 1);
      }
    }
    return [t, o];
  }
  _isObservable(e) {
    return e && e.subscribe && typeof e.subscribe == "function";
  }
  _createStreamInvocation(e, t, o) {
    const s = this._invocationId;
    return this._invocationId++, o.length !== 0 ? {
      arguments: t,
      invocationId: s.toString(),
      streamIds: o,
      target: e,
      type: f.StreamInvocation
    } : {
      arguments: t,
      invocationId: s.toString(),
      target: e,
      type: f.StreamInvocation
    };
  }
  _createCancelInvocation(e) {
    return {
      invocationId: e,
      type: f.CancelInvocation
    };
  }
  _createStreamItemMessage(e, t) {
    return {
      invocationId: e,
      item: t,
      type: f.StreamItem
    };
  }
  _createCompletionMessage(e, t, o) {
    return t ? {
      error: t,
      invocationId: e,
      type: f.Completion
    } : {
      invocationId: e,
      result: o,
      type: f.Completion
    };
  }
  _createCloseMessage() {
    return { type: f.Close };
  }
}
const hr = [0, 2e3, 1e4, 3e4, null];
class wn {
  constructor(e) {
    this._retryDelays = e !== void 0 ? [...e, null] : hr;
  }
  nextRetryDelayInMilliseconds(e) {
    return this._retryDelays[e.previousRetryCount];
  }
}
class se {
}
se.Authorization = "Authorization";
se.Cookie = "Cookie";
class dr extends gt {
  constructor(e, t) {
    super(), this._innerClient = e, this._accessTokenFactory = t;
  }
  async send(e) {
    let t = !0;
    this._accessTokenFactory && (!this._accessToken || e.url && e.url.indexOf("/negotiate?") > 0) && (t = !1, this._accessToken = await this._accessTokenFactory()), this._setAuthorizationHeader(e);
    const o = await this._innerClient.send(e);
    return t && o.statusCode === 401 && this._accessTokenFactory ? (this._accessToken = await this._accessTokenFactory(), this._setAuthorizationHeader(e), await this._innerClient.send(e)) : o;
  }
  _setAuthorizationHeader(e) {
    e.headers || (e.headers = {}), this._accessToken ? e.headers[se.Authorization] = `Bearer ${this._accessToken}` : this._accessTokenFactory && e.headers[se.Authorization] && delete e.headers[se.Authorization];
  }
  getCookieString(e) {
    return this._innerClient.getCookieString(e);
  }
}
var S;
(function(n) {
  n[n.None = 0] = "None", n[n.WebSockets = 1] = "WebSockets", n[n.ServerSentEvents = 2] = "ServerSentEvents", n[n.LongPolling = 4] = "LongPolling";
})(S || (S = {}));
var $;
(function(n) {
  n[n.Text = 1] = "Text", n[n.Binary = 2] = "Binary";
})($ || ($ = {}));
let pr = class {
  constructor() {
    this._isAborted = !1, this.onabort = null;
  }
  abort() {
    this._isAborted || (this._isAborted = !0, this.onabort && this.onabort());
  }
  get signal() {
    return this;
  }
  get aborted() {
    return this._isAborted;
  }
};
class Sn {
  // This is an internal type, not exported from 'index' so this is really just internal.
  get pollAborted() {
    return this._pollAbort.aborted;
  }
  constructor(e, t, o) {
    this._httpClient = e, this._logger = t, this._pollAbort = new pr(), this._options = o, this._running = !1, this.onreceive = null, this.onclose = null;
  }
  async connect(e, t) {
    if (w.isRequired(e, "url"), w.isRequired(t, "transferFormat"), w.isIn(t, $, "transferFormat"), this._url = e, this._logger.log(c.Trace, "(LongPolling transport) Connecting."), t === $.Binary && typeof XMLHttpRequest < "u" && typeof new XMLHttpRequest().responseType != "string")
      throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
    const [o, s] = Ee(), r = { [o]: s, ...this._options.headers }, i = {
      abortSignal: this._pollAbort.signal,
      headers: r,
      timeout: 1e5,
      withCredentials: this._options.withCredentials
    };
    t === $.Binary && (i.responseType = "arraybuffer");
    const a = `${e}&_=${Date.now()}`;
    this._logger.log(c.Trace, `(LongPolling transport) polling: ${a}.`);
    const l = await this._httpClient.get(a, i);
    l.statusCode !== 200 ? (this._logger.log(c.Error, `(LongPolling transport) Unexpected response code: ${l.statusCode}.`), this._closeError = new oe(l.statusText || "", l.statusCode), this._running = !1) : this._running = !0, this._receiving = this._poll(this._url, i);
  }
  async _poll(e, t) {
    try {
      for (; this._running; )
        try {
          const o = `${e}&_=${Date.now()}`;
          this._logger.log(c.Trace, `(LongPolling transport) polling: ${o}.`);
          const s = await this._httpClient.get(o, t);
          s.statusCode === 204 ? (this._logger.log(c.Information, "(LongPolling transport) Poll terminated by server."), this._running = !1) : s.statusCode !== 200 ? (this._logger.log(c.Error, `(LongPolling transport) Unexpected response code: ${s.statusCode}.`), this._closeError = new oe(s.statusText || "", s.statusCode), this._running = !1) : s.content ? (this._logger.log(c.Trace, `(LongPolling transport) data received. ${je(s.content, this._options.logMessageContent)}.`), this.onreceive && this.onreceive(s.content)) : this._logger.log(c.Trace, "(LongPolling transport) Poll timed out, reissuing.");
        } catch (o) {
          this._running ? o instanceof Gt ? this._logger.log(c.Trace, "(LongPolling transport) Poll timed out, reissuing.") : (this._closeError = o, this._running = !1) : this._logger.log(c.Trace, `(LongPolling transport) Poll errored after shutdown: ${o.message}`);
        }
    } finally {
      this._logger.log(c.Trace, "(LongPolling transport) Polling complete."), this.pollAborted || this._raiseOnClose();
    }
  }
  async send(e) {
    return this._running ? Zn(this._logger, "LongPolling", this._httpClient, this._url, e, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"));
  }
  async stop() {
    this._logger.log(c.Trace, "(LongPolling transport) Stopping polling."), this._running = !1, this._pollAbort.abort();
    try {
      await this._receiving, this._logger.log(c.Trace, `(LongPolling transport) sending DELETE request to ${this._url}.`);
      const e = {}, [t, o] = Ee();
      e[t] = o;
      const s = {
        headers: { ...e, ...this._options.headers },
        timeout: this._options.timeout,
        withCredentials: this._options.withCredentials
      };
      let r;
      try {
        await this._httpClient.delete(this._url, s);
      } catch (i) {
        r = i;
      }
      r ? r instanceof oe && (r.statusCode === 404 ? this._logger.log(c.Trace, "(LongPolling transport) A 404 response was returned from sending a DELETE request.") : this._logger.log(c.Trace, `(LongPolling transport) Error sending a DELETE request: ${r}`)) : this._logger.log(c.Trace, "(LongPolling transport) DELETE request accepted.");
    } finally {
      this._logger.log(c.Trace, "(LongPolling transport) Stop finished."), this._raiseOnClose();
    }
  }
  _raiseOnClose() {
    if (this.onclose) {
      let e = "(LongPolling transport) Firing onclose event.";
      this._closeError && (e += " Error: " + this._closeError), this._logger.log(c.Trace, e), this.onclose(this._closeError);
    }
  }
}
class fr {
  constructor(e, t, o, s) {
    this._httpClient = e, this._accessToken = t, this._logger = o, this._options = s, this.onreceive = null, this.onclose = null;
  }
  async connect(e, t) {
    return w.isRequired(e, "url"), w.isRequired(t, "transferFormat"), w.isIn(t, $, "transferFormat"), this._logger.log(c.Trace, "(SSE transport) Connecting."), this._url = e, this._accessToken && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(this._accessToken)}`), new Promise((o, s) => {
      let r = !1;
      if (t !== $.Text) {
        s(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
        return;
      }
      let i;
      if (m.isBrowser || m.isWebWorker)
        i = new this._options.EventSource(e, { withCredentials: this._options.withCredentials });
      else {
        const a = this._httpClient.getCookieString(e), l = {};
        l.Cookie = a;
        const [u, p] = Ee();
        l[u] = p, i = new this._options.EventSource(e, { withCredentials: this._options.withCredentials, headers: { ...l, ...this._options.headers } });
      }
      try {
        i.onmessage = (a) => {
          if (this.onreceive)
            try {
              this._logger.log(c.Trace, `(SSE transport) data received. ${je(a.data, this._options.logMessageContent)}.`), this.onreceive(a.data);
            } catch (l) {
              this._close(l);
              return;
            }
        }, i.onerror = (a) => {
          r ? this._close() : s(new Error("EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled."));
        }, i.onopen = () => {
          this._logger.log(c.Information, `SSE connected to ${this._url}`), this._eventSource = i, r = !0, o();
        };
      } catch (a) {
        s(a);
        return;
      }
    });
  }
  async send(e) {
    return this._eventSource ? Zn(this._logger, "SSE", this._httpClient, this._url, e, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"));
  }
  stop() {
    return this._close(), Promise.resolve();
  }
  _close(e) {
    this._eventSource && (this._eventSource.close(), this._eventSource = void 0, this.onclose && this.onclose(e));
  }
}
class gr {
  constructor(e, t, o, s, r, i) {
    this._logger = o, this._accessTokenFactory = t, this._logMessageContent = s, this._webSocketConstructor = r, this._httpClient = e, this.onreceive = null, this.onclose = null, this._headers = i;
  }
  async connect(e, t) {
    w.isRequired(e, "url"), w.isRequired(t, "transferFormat"), w.isIn(t, $, "transferFormat"), this._logger.log(c.Trace, "(WebSockets transport) Connecting.");
    let o;
    return this._accessTokenFactory && (o = await this._accessTokenFactory()), new Promise((s, r) => {
      e = e.replace(/^http/, "ws");
      let i;
      const a = this._httpClient.getCookieString(e);
      let l = !1;
      if (m.isNode || m.isReactNative) {
        const u = {}, [p, g] = Ee();
        u[p] = g, o && (u[se.Authorization] = `Bearer ${o}`), a && (u[se.Cookie] = a), i = new this._webSocketConstructor(e, void 0, {
          headers: { ...u, ...this._headers }
        });
      } else
        o && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(o)}`);
      i || (i = new this._webSocketConstructor(e)), t === $.Binary && (i.binaryType = "arraybuffer"), i.onopen = (u) => {
        this._logger.log(c.Information, `WebSocket connected to ${e}.`), this._webSocket = i, l = !0, s();
      }, i.onerror = (u) => {
        let p = null;
        typeof ErrorEvent < "u" && u instanceof ErrorEvent ? p = u.error : p = "There was an error with the transport", this._logger.log(c.Information, `(WebSockets transport) ${p}.`);
      }, i.onmessage = (u) => {
        if (this._logger.log(c.Trace, `(WebSockets transport) data received. ${je(u.data, this._logMessageContent)}.`), this.onreceive)
          try {
            this.onreceive(u.data);
          } catch (p) {
            this._close(p);
            return;
          }
      }, i.onclose = (u) => {
        if (l)
          this._close(u);
        else {
          let p = null;
          typeof ErrorEvent < "u" && u instanceof ErrorEvent ? p = u.error : p = "WebSocket failed to connect. The connection could not be found on the server, either the endpoint may not be a SignalR endpoint, the connection ID is not present on the server, or there is a proxy blocking WebSockets. If you have multiple servers check that sticky sessions are enabled.", r(new Error(p));
        }
      };
    });
  }
  send(e) {
    return this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN ? (this._logger.log(c.Trace, `(WebSockets transport) sending data. ${je(e, this._logMessageContent)}.`), this._webSocket.send(e), Promise.resolve()) : Promise.reject("WebSocket is not in the OPEN state");
  }
  stop() {
    return this._webSocket && this._close(void 0), Promise.resolve();
  }
  _close(e) {
    this._webSocket && (this._webSocket.onclose = () => {
    }, this._webSocket.onmessage = () => {
    }, this._webSocket.onerror = () => {
    }, this._webSocket.close(), this._webSocket = void 0), this._logger.log(c.Trace, "(WebSockets transport) socket closed."), this.onclose && (this._isCloseEvent(e) && (e.wasClean === !1 || e.code !== 1e3) ? this.onclose(new Error(`WebSocket closed with status code: ${e.code} (${e.reason || "no reason given"}).`)) : e instanceof Error ? this.onclose(e) : this.onclose());
  }
  _isCloseEvent(e) {
    return e && typeof e.wasClean == "boolean" && typeof e.code == "number";
  }
}
const Cn = 100;
class _r {
  constructor(e, t = {}) {
    if (this._stopPromiseResolver = () => {
    }, this.features = {}, this._negotiateVersion = 1, w.isRequired(e, "url"), this._logger = Ks(t.logger), this.baseUrl = this._resolveUrl(e), t = t || {}, t.logMessageContent = t.logMessageContent === void 0 ? !1 : t.logMessageContent, typeof t.withCredentials == "boolean" || t.withCredentials === void 0)
      t.withCredentials = t.withCredentials === void 0 ? !0 : t.withCredentials;
    else
      throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
    t.timeout = t.timeout === void 0 ? 100 * 1e3 : t.timeout;
    let o = null, s = null;
    if (m.isNode && typeof require < "u") {
      const r = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      o = r("ws"), s = r("eventsource");
    }
    !m.isNode && typeof WebSocket < "u" && !t.WebSocket ? t.WebSocket = WebSocket : m.isNode && !t.WebSocket && o && (t.WebSocket = o), !m.isNode && typeof EventSource < "u" && !t.EventSource ? t.EventSource = EventSource : m.isNode && !t.EventSource && typeof s < "u" && (t.EventSource = s), this._httpClient = new dr(t.httpClient || new or(this._logger), t.accessTokenFactory), this._connectionState = "Disconnected", this._connectionStarted = !1, this._options = t, this.onreceive = null, this.onclose = null;
  }
  async start(e) {
    if (e = e || $.Binary, w.isIn(e, $, "transferFormat"), this._logger.log(c.Debug, `Starting connection with transfer format '${$[e]}'.`), this._connectionState !== "Disconnected")
      return Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));
    if (this._connectionState = "Connecting", this._startInternalPromise = this._startInternal(e), await this._startInternalPromise, this._connectionState === "Disconnecting") {
      const t = "Failed to start the HttpConnection before stop() was called.";
      return this._logger.log(c.Error, t), await this._stopPromise, Promise.reject(new H(t));
    } else if (this._connectionState !== "Connected") {
      const t = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
      return this._logger.log(c.Error, t), Promise.reject(new H(t));
    }
    this._connectionStarted = !0;
  }
  send(e) {
    return this._connectionState !== "Connected" ? Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State.")) : (this._sendQueue || (this._sendQueue = new Xt(this.transport)), this._sendQueue.send(e));
  }
  async stop(e) {
    if (this._connectionState === "Disconnected")
      return this._logger.log(c.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnected state.`), Promise.resolve();
    if (this._connectionState === "Disconnecting")
      return this._logger.log(c.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise;
    this._connectionState = "Disconnecting", this._stopPromise = new Promise((t) => {
      this._stopPromiseResolver = t;
    }), await this._stopInternal(e), await this._stopPromise;
  }
  async _stopInternal(e) {
    this._stopError = e;
    try {
      await this._startInternalPromise;
    } catch {
    }
    if (this.transport) {
      try {
        await this.transport.stop();
      } catch (t) {
        this._logger.log(c.Error, `HttpConnection.transport.stop() threw error '${t}'.`), this._stopConnection();
      }
      this.transport = void 0;
    } else
      this._logger.log(c.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
  }
  async _startInternal(e) {
    let t = this.baseUrl;
    this._accessTokenFactory = this._options.accessTokenFactory, this._httpClient._accessTokenFactory = this._accessTokenFactory;
    try {
      if (this._options.skipNegotiation)
        if (this._options.transport === S.WebSockets)
          this.transport = this._constructTransport(S.WebSockets), await this._startTransport(t, e);
        else
          throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");
      else {
        let o = null, s = 0;
        do {
          if (o = await this._getNegotiationResponse(t), this._connectionState === "Disconnecting" || this._connectionState === "Disconnected")
            throw new H("The connection was stopped during negotiation.");
          if (o.error)
            throw new Error(o.error);
          if (o.ProtocolVersion)
            throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
          if (o.url && (t = o.url), o.accessToken) {
            const r = o.accessToken;
            this._accessTokenFactory = () => r, this._httpClient._accessToken = r, this._httpClient._accessTokenFactory = void 0;
          }
          s++;
        } while (o.url && s < Cn);
        if (s === Cn && o.url)
          throw new Error("Negotiate redirection limit exceeded.");
        await this._createTransport(t, this._options.transport, o, e);
      }
      this.transport instanceof Sn && (this.features.inherentKeepAlive = !0), this._connectionState === "Connecting" && (this._logger.log(c.Debug, "The HttpConnection connected successfully."), this._connectionState = "Connected");
    } catch (o) {
      return this._logger.log(c.Error, "Failed to start the connection: " + o), this._connectionState = "Disconnected", this.transport = void 0, this._stopPromiseResolver(), Promise.reject(o);
    }
  }
  async _getNegotiationResponse(e) {
    const t = {}, [o, s] = Ee();
    t[o] = s;
    const r = this._resolveNegotiateUrl(e);
    this._logger.log(c.Debug, `Sending negotiation request: ${r}.`);
    try {
      const i = await this._httpClient.post(r, {
        content: "",
        headers: { ...t, ...this._options.headers },
        timeout: this._options.timeout,
        withCredentials: this._options.withCredentials
      });
      if (i.statusCode !== 200)
        return Promise.reject(new Error(`Unexpected status code returned from negotiate '${i.statusCode}'`));
      const a = JSON.parse(i.content);
      return (!a.negotiateVersion || a.negotiateVersion < 1) && (a.connectionToken = a.connectionId), a.useStatefulReconnect && this._options._useStatefulReconnect !== !0 ? Promise.reject(new bn("Client didn't negotiate Stateful Reconnect but the server did.")) : a;
    } catch (i) {
      let a = "Failed to complete negotiation with the server: " + i;
      return i instanceof oe && i.statusCode === 404 && (a = a + " Either this is not a SignalR endpoint or there is a proxy blocking the connection."), this._logger.log(c.Error, a), Promise.reject(new bn(a));
    }
  }
  _createConnectUrl(e, t) {
    return t ? e + (e.indexOf("?") === -1 ? "?" : "&") + `id=${t}` : e;
  }
  async _createTransport(e, t, o, s) {
    let r = this._createConnectUrl(e, o.connectionToken);
    if (this._isITransport(t)) {
      this._logger.log(c.Debug, "Connection was provided an instance of ITransport, using that directly."), this.transport = t, await this._startTransport(r, s), this.connectionId = o.connectionId;
      return;
    }
    const i = [], a = o.availableTransports || [];
    let l = o;
    for (const u of a) {
      const p = this._resolveTransportOrError(u, t, s, (l == null ? void 0 : l.useStatefulReconnect) === !0);
      if (p instanceof Error)
        i.push(`${u.transport} failed:`), i.push(p);
      else if (this._isITransport(p)) {
        if (this.transport = p, !l) {
          try {
            l = await this._getNegotiationResponse(e);
          } catch (g) {
            return Promise.reject(g);
          }
          r = this._createConnectUrl(e, l.connectionToken);
        }
        try {
          await this._startTransport(r, s), this.connectionId = l.connectionId;
          return;
        } catch (g) {
          if (this._logger.log(c.Error, `Failed to start the transport '${u.transport}': ${g}`), l = void 0, i.push(new Fs(`${u.transport} failed: ${g}`, S[u.transport])), this._connectionState !== "Connecting") {
            const N = "Failed to select transport before stop() was called.";
            return this._logger.log(c.Debug, N), Promise.reject(new H(N));
          }
        }
      }
    }
    return i.length > 0 ? Promise.reject(new qs(`Unable to connect to the server with any of the available transports. ${i.join(" ")}`, i)) : Promise.reject(new Error("None of the transports supported by the client are supported by the server."));
  }
  _constructTransport(e) {
    switch (e) {
      case S.WebSockets:
        if (!this._options.WebSocket)
          throw new Error("'WebSocket' is not supported in your environment.");
        return new gr(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});
      case S.ServerSentEvents:
        if (!this._options.EventSource)
          throw new Error("'EventSource' is not supported in your environment.");
        return new fr(this._httpClient, this._httpClient._accessToken, this._logger, this._options);
      case S.LongPolling:
        return new Sn(this._httpClient, this._logger, this._options);
      default:
        throw new Error(`Unknown transport: ${e}.`);
    }
  }
  _startTransport(e, t) {
    return this.transport.onreceive = this.onreceive, this.features.reconnect ? this.transport.onclose = async (o) => {
      let s = !1;
      if (this.features.reconnect)
        try {
          this.features.disconnected(), await this.transport.connect(e, t), await this.features.resend();
        } catch {
          s = !0;
        }
      else {
        this._stopConnection(o);
        return;
      }
      s && this._stopConnection(o);
    } : this.transport.onclose = (o) => this._stopConnection(o), this.transport.connect(e, t);
  }
  _resolveTransportOrError(e, t, o, s) {
    const r = S[e.transport];
    if (r == null)
      return this._logger.log(c.Debug, `Skipping transport '${e.transport}' because it is not supported by this client.`), new Error(`Skipping transport '${e.transport}' because it is not supported by this client.`);
    if (yr(t, r))
      if (e.transferFormats.map((a) => $[a]).indexOf(o) >= 0) {
        if (r === S.WebSockets && !this._options.WebSocket || r === S.ServerSentEvents && !this._options.EventSource)
          return this._logger.log(c.Debug, `Skipping transport '${S[r]}' because it is not supported in your environment.'`), new zs(`'${S[r]}' is not supported in your environment.`, r);
        this._logger.log(c.Debug, `Selecting transport '${S[r]}'.`);
        try {
          return this.features.reconnect = r === S.WebSockets ? s : void 0, this._constructTransport(r);
        } catch (a) {
          return a;
        }
      } else
        return this._logger.log(c.Debug, `Skipping transport '${S[r]}' because it does not support the requested transfer format '${$[o]}'.`), new Error(`'${S[r]}' does not support ${$[o]}.`);
    else
      return this._logger.log(c.Debug, `Skipping transport '${S[r]}' because it was disabled by the client.`), new Bs(`'${S[r]}' is disabled by the client.`, r);
  }
  _isITransport(e) {
    return e && typeof e == "object" && "connect" in e;
  }
  _stopConnection(e) {
    if (this._logger.log(c.Debug, `HttpConnection.stopConnection(${e}) called while in state ${this._connectionState}.`), this.transport = void 0, e = this._stopError || e, this._stopError = void 0, this._connectionState === "Disconnected") {
      this._logger.log(c.Debug, `Call to HttpConnection.stopConnection(${e}) was ignored because the connection is already in the disconnected state.`);
      return;
    }
    if (this._connectionState === "Connecting")
      throw this._logger.log(c.Warning, `Call to HttpConnection.stopConnection(${e}) was ignored because the connection is still in the connecting state.`), new Error(`HttpConnection.stopConnection(${e}) was called while the connection is still in the connecting state.`);
    if (this._connectionState === "Disconnecting" && this._stopPromiseResolver(), e ? this._logger.log(c.Error, `Connection disconnected with error '${e}'.`) : this._logger.log(c.Information, "Connection disconnected."), this._sendQueue && (this._sendQueue.stop().catch((t) => {
      this._logger.log(c.Error, `TransportSendQueue.stop() threw error '${t}'.`);
    }), this._sendQueue = void 0), this.connectionId = void 0, this._connectionState = "Disconnected", this._connectionStarted) {
      this._connectionStarted = !1;
      try {
        this.onclose && this.onclose(e);
      } catch (t) {
        this._logger.log(c.Error, `HttpConnection.onclose(${e}) threw error '${t}'.`);
      }
    }
  }
  _resolveUrl(e) {
    if (e.lastIndexOf("https://", 0) === 0 || e.lastIndexOf("http://", 0) === 0)
      return e;
    if (!m.isBrowser)
      throw new Error(`Cannot resolve '${e}'.`);
    const t = window.document.createElement("a");
    return t.href = e, this._logger.log(c.Information, `Normalizing '${e}' to '${t.href}'.`), t.href;
  }
  _resolveNegotiateUrl(e) {
    const t = new URL(e);
    t.pathname.endsWith("/") ? t.pathname += "negotiate" : t.pathname += "/negotiate";
    const o = new URLSearchParams(t.searchParams);
    return o.has("negotiateVersion") || o.append("negotiateVersion", this._negotiateVersion.toString()), o.has("useStatefulReconnect") ? o.get("useStatefulReconnect") === "true" && (this._options._useStatefulReconnect = !0) : this._options._useStatefulReconnect === !0 && o.append("useStatefulReconnect", "true"), t.search = o.toString(), t.toString();
  }
}
function yr(n, e) {
  return !n || (e & n) !== 0;
}
class Xt {
  constructor(e) {
    this._transport = e, this._buffer = [], this._executing = !0, this._sendBufferedData = new et(), this._transportResult = new et(), this._sendLoopPromise = this._sendLoop();
  }
  send(e) {
    return this._bufferData(e), this._transportResult || (this._transportResult = new et()), this._transportResult.promise;
  }
  stop() {
    return this._executing = !1, this._sendBufferedData.resolve(), this._sendLoopPromise;
  }
  _bufferData(e) {
    if (this._buffer.length && typeof this._buffer[0] != typeof e)
      throw new Error(`Expected data to be of type ${typeof this._buffer} but was of type ${typeof e}`);
    this._buffer.push(e), this._sendBufferedData.resolve();
  }
  async _sendLoop() {
    for (; ; ) {
      if (await this._sendBufferedData.promise, !this._executing) {
        this._transportResult && this._transportResult.reject("Connection stopped.");
        break;
      }
      this._sendBufferedData = new et();
      const e = this._transportResult;
      this._transportResult = void 0;
      const t = typeof this._buffer[0] == "string" ? this._buffer.join("") : Xt._concatBuffers(this._buffer);
      this._buffer.length = 0;
      try {
        await this._transport.send(t), e.resolve();
      } catch (o) {
        e.reject(o);
      }
    }
  }
  static _concatBuffers(e) {
    const t = e.map((r) => r.byteLength).reduce((r, i) => r + i), o = new Uint8Array(t);
    let s = 0;
    for (const r of e)
      o.set(new Uint8Array(r), s), s += r.byteLength;
    return o.buffer;
  }
}
class et {
  constructor() {
    this.promise = new Promise((e, t) => [this._resolver, this._rejecter] = [e, t]);
  }
  resolve() {
    this._resolver();
  }
  reject(e) {
    this._rejecter(e);
  }
}
const mr = "json";
class br {
  constructor() {
    this.name = mr, this.version = 2, this.transferFormat = $.Text;
  }
  /** Creates an array of {@link @microsoft/signalr.HubMessage} objects from the specified serialized representation.
   *
   * @param {string} input A string containing the serialized representation.
   * @param {ILogger} logger A logger that will be used to log messages that occur during parsing.
   */
  parseMessages(e, t) {
    if (typeof e != "string")
      throw new Error("Invalid input for JSON hub protocol. Expected a string.");
    if (!e)
      return [];
    t === null && (t = We.instance);
    const o = A.parse(e), s = [];
    for (const r of o) {
      const i = JSON.parse(r);
      if (typeof i.type != "number")
        throw new Error("Invalid payload.");
      switch (i.type) {
        case f.Invocation:
          this._isInvocationMessage(i);
          break;
        case f.StreamItem:
          this._isStreamItemMessage(i);
          break;
        case f.Completion:
          this._isCompletionMessage(i);
          break;
        case f.Ping:
          break;
        case f.Close:
          break;
        case f.Ack:
          this._isAckMessage(i);
          break;
        case f.Sequence:
          this._isSequenceMessage(i);
          break;
        default:
          t.log(c.Information, "Unknown message type '" + i.type + "' ignored.");
          continue;
      }
      s.push(i);
    }
    return s;
  }
  /** Writes the specified {@link @microsoft/signalr.HubMessage} to a string and returns it.
   *
   * @param {HubMessage} message The message to write.
   * @returns {string} A string containing the serialized representation of the message.
   */
  writeMessage(e) {
    return A.write(JSON.stringify(e));
  }
  _isInvocationMessage(e) {
    this._assertNotEmptyString(e.target, "Invalid payload for Invocation message."), e.invocationId !== void 0 && this._assertNotEmptyString(e.invocationId, "Invalid payload for Invocation message.");
  }
  _isStreamItemMessage(e) {
    if (this._assertNotEmptyString(e.invocationId, "Invalid payload for StreamItem message."), e.item === void 0)
      throw new Error("Invalid payload for StreamItem message.");
  }
  _isCompletionMessage(e) {
    if (e.result && e.error)
      throw new Error("Invalid payload for Completion message.");
    !e.result && e.error && this._assertNotEmptyString(e.error, "Invalid payload for Completion message."), this._assertNotEmptyString(e.invocationId, "Invalid payload for Completion message.");
  }
  _isAckMessage(e) {
    if (typeof e.sequenceId != "number")
      throw new Error("Invalid SequenceId for Ack message.");
  }
  _isSequenceMessage(e) {
    if (typeof e.sequenceId != "number")
      throw new Error("Invalid SequenceId for Sequence message.");
  }
  _assertNotEmptyString(e, t) {
    if (typeof e != "string" || e === "")
      throw new Error(t);
  }
}
const vr = {
  trace: c.Trace,
  debug: c.Debug,
  info: c.Information,
  information: c.Information,
  warn: c.Warning,
  warning: c.Warning,
  error: c.Error,
  critical: c.Critical,
  none: c.None
};
function wr(n) {
  const e = vr[n.toLowerCase()];
  if (typeof e < "u")
    return e;
  throw new Error(`Unknown log level: ${n}`);
}
class fa {
  configureLogging(e) {
    if (w.isRequired(e, "logging"), Sr(e))
      this.logger = e;
    else if (typeof e == "string") {
      const t = wr(e);
      this.logger = new ut(t);
    } else
      this.logger = new ut(e);
    return this;
  }
  withUrl(e, t) {
    return w.isRequired(e, "url"), w.isNotEmpty(e, "url"), this.url = e, typeof t == "object" ? this.httpConnectionOptions = { ...this.httpConnectionOptions, ...t } : this.httpConnectionOptions = {
      ...this.httpConnectionOptions,
      transport: t
    }, this;
  }
  /** Configures the {@link @microsoft/signalr.HubConnection} to use the specified Hub Protocol.
   *
   * @param {IHubProtocol} protocol The {@link @microsoft/signalr.IHubProtocol} implementation to use.
   */
  withHubProtocol(e) {
    return w.isRequired(e, "protocol"), this.protocol = e, this;
  }
  withAutomaticReconnect(e) {
    if (this.reconnectPolicy)
      throw new Error("A reconnectPolicy has already been set.");
    return e ? Array.isArray(e) ? this.reconnectPolicy = new wn(e) : this.reconnectPolicy = e : this.reconnectPolicy = new wn(), this;
  }
  /** Configures {@link @microsoft/signalr.HubConnection.serverTimeoutInMilliseconds} for the {@link @microsoft/signalr.HubConnection}.
   *
   * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
   */
  withServerTimeout(e) {
    return w.isRequired(e, "milliseconds"), this._serverTimeoutInMilliseconds = e, this;
  }
  /** Configures {@link @microsoft/signalr.HubConnection.keepAliveIntervalInMilliseconds} for the {@link @microsoft/signalr.HubConnection}.
   *
   * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
   */
  withKeepAliveInterval(e) {
    return w.isRequired(e, "milliseconds"), this._keepAliveIntervalInMilliseconds = e, this;
  }
  /** Enables and configures options for the Stateful Reconnect feature.
   *
   * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
   */
  withStatefulReconnect(e) {
    return this.httpConnectionOptions === void 0 && (this.httpConnectionOptions = {}), this.httpConnectionOptions._useStatefulReconnect = !0, this._statefulReconnectBufferSize = e == null ? void 0 : e.bufferSize, this;
  }
  /** Creates a {@link @microsoft/signalr.HubConnection} from the configuration options specified in this builder.
   *
   * @returns {HubConnection} The configured {@link @microsoft/signalr.HubConnection}.
   */
  build() {
    const e = this.httpConnectionOptions || {};
    if (e.logger === void 0 && (e.logger = this.logger), !this.url)
      throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
    const t = new _r(this.url, e);
    return Kt.create(t, this.logger || We.instance, this.protocol || new br(), this.reconnectPolicy, this._serverTimeoutInMilliseconds, this._keepAliveIntervalInMilliseconds, this._statefulReconnectBufferSize);
  }
}
function Sr(n) {
  return n.log !== void 0;
}
var z, Z, ee;
class ga extends Bt {
  constructor(t) {
    super(t);
    b(this, z);
    b(this, Z);
    b(this, ee);
    v(this, z, new Po(this)), v(this, Z, new Io(this)), v(this, ee, new xo(this));
  }
  /**
   * Get the list of possible actions from the server
   * @returns Promise
   */
  async getActions() {
    return h(this, z).getActions();
  }
  /**
   * Request of the action to perform
   * @returns PerformActionResponse.
   */
  async performAction(t) {
    return h(this, z).performAction({
      requestId: t.id,
      action: t.action,
      options: {
        group: t.group,
        force: t.force ?? !1,
        clean: t.clean ?? !1,
        files: t.file ?? !1,
        clientId: t.clientId,
        set: t.set ?? "Default"
      },
      stepNumber: t.step
    });
  }
  /**
   * Retreives the current uSync settings
   * @returns the current uSync settings
   */
  async getSettings() {
    return await h(this, Z).getSettings();
  }
  async getAddons() {
    return await h(this, Z).getAddons();
  }
  /**
   * Get the handler settings based on the set.
   * @param setName name of the handler set in the configuration
   * @returns the settings for the named handler set.
   */
  async getHandlerSettings(t) {
    return await h(this, Z).getHandlerSettings(t);
  }
  /**
   * Checks to see if there are legacy datatypes on disk.
   * @returns results of a check for legacy files
   */
  async checkLegacy() {
    return await h(this, ee).checkLegacy();
  }
  /**
   * sets a .ignore folder in the legacy folder so we don't detect it next time.
   * @returns true if the legacy folder is ignored.
   */
  async ignoreLegacy() {
    return await h(this, ee).ignoreLegacy();
  }
  /**
   * copies the legacy folder to the new v14 folder.
   * @returns true if the legacy folder is copied to the new folder.
   */
  async copyLegacy() {
    return await h(this, ee).copyLegacy();
  }
  async downloadFile(t) {
    return (await h(this, z).downloadFile(t)).data;
  }
  async processUpload(t) {
    return (await h(this, z).processUpload(t)).data;
  }
}
z = new WeakMap(), Z = new WeakMap(), ee = new WeakMap();
var B;
class _a {
  constructor(e) {
    b(this, B);
    v(this, B, e);
  }
  async getActions() {
    return await U(h(this, B), Qe.getActions());
  }
  async performAction(e) {
    return await U(
      h(this, B),
      Qe.performAction({
        requestBody: e
      })
    );
  }
  async downloadFile(e) {
    return await U(
      h(this, B),
      Qe.download({
        requestId: e
      })
    );
  }
  async processUpload(e) {
    return await U(
      h(this, B),
      Qe.processUpload({
        tempKey: e
      })
    );
  }
}
B = new WeakMap();
var te;
class ya {
  constructor(e) {
    b(this, te);
    v(this, te, e);
  }
  async checkLegacy() {
    return await U(h(this, te), bt.checkLegacy());
  }
  async ignoreLegacy() {
    return await U(h(this, te), bt.ignoreLegacy());
  }
  async copyLegacy() {
    return await U(h(this, te), bt.copyLegacy());
  }
}
te = new WeakMap();
var ne;
class ma {
  constructor(e) {
    b(this, ne);
    v(this, ne, e);
  }
  async getSettings() {
    return await U(h(this, ne), vt.getSettings());
  }
  async getHandlerSettings(e) {
    return await U(
      h(this, ne),
      vt.getHandlerSetSettings({ id: e })
    );
  }
  async getAddons() {
    return await U(h(this, ne), vt.getAddOns());
  }
}
ne = new WeakMap();
const Cr = new zt("usync.import.modal", {
  modal: {
    type: "dialog"
  }
});
var Er = Object.defineProperty, $r = Object.getOwnPropertyDescriptor, eo = (n) => {
  throw TypeError(n);
}, to = (n, e, t, o) => {
  for (var s = o > 1 ? void 0 : o ? $r(e, t) : e, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (s = (o ? i(e, t, s) : i(s)) || s);
  return o && s && Er(e, t, s), s;
}, kr = (n, e, t) => e.has(n) || eo("Cannot " + t), Tr = (n, e, t) => e.has(n) ? eo("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), $t = (n, e, t) => (kr(n, e, "access private method"), t), Re, no, oo, so;
let $e = class extends jt {
  constructor() {
    super(...arguments), Tr(this, Re);
  }
  render() {
    return d`
			<umb-body-layout .headline=${this.localize.term("uSync_importHeader")}>
				${this.renderForm()} ${this.renderResult()}
			</umb-body-layout>
		`;
  }
  renderForm() {
    if (this.result === void 0)
      return d` ${this.localize.term("uSync_uploadIntro")}
			<usync-file-upload @uploaded=${$t(this, Re, so)}></usync-file-upload>
			<div slot="actions">
				<uui-button
					id="cancel"
					.label=${this.localize.term("general_close")}
					@click="${$t(this, Re, no)}"></uui-button>
			</div>`;
  }
  renderResult() {
    if (this.result != null)
      return d`${At(
        this.result.success,
        () => d`${this.localize.term("uSync_uploadSuccess")}`,
        () => {
          var n;
          return d`${this.localize.term("uSync_uploadError")} ${(n = this.result) == null ? void 0 : n.errors}`;
        }
      )}
			<div slot="actions">
				<uui-button id="continue" label="Import" @click="${$t(this, Re, oo)}"></uui-button>
			</div>`;
  }
};
Re = /* @__PURE__ */ new WeakSet();
no = function() {
  var n;
  (n = this.modalContext) == null || n.reject();
};
oo = function() {
  var n, e;
  this.value = (n = this.result) == null ? void 0 : n.success, (e = this.modalContext) == null || e.submit();
};
so = function(n) {
  this.result = n.detail;
};
$e.styles = D`
		umb-body-layout {
			max-width: 350px;
		}

		usync-file-upload {
			padding: 10px 0;
		}
	`;
to([
  y()
], $e.prototype, "result", 2);
$e = to([
  P("usync-import-dialog")
], $e);
const Pr = $e, Ir = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pr,
  get uSyncImportModalDialog() {
    return $e;
  }
}, Symbol.toStringTag, { value: "Module" }));
var I, _e, ye, me, F, q, V, be, ve, we;
class En extends Bt {
  constructor(t) {
    var o, s, r;
    super(t);
    b(this, I);
    b(this, _e);
    b(this, ye);
    b(this, me);
    b(this, F);
    b(this, q);
    b(this, V);
    b(this, be);
    b(this, ve);
    b(this, we);
    this.workspaceAlias = x.workspace.alias, v(this, _e, null), v(this, ye, new St([], (i) => i.key)), this.actions = h(this, ye).asObservable(), v(this, me, new St([], (i) => i.name)), this.currentAction = h(this, me).asObservable(), v(this, F, new ln(!1)), this.working = h(this, F).asObservable(), v(this, q, new ln(!1)), this.completed = h(this, q).asObservable(), v(this, V, new St([], (i) => i.name)), this.results = h(this, V).asObservable(), v(this, be, new Le(void 0)), this.settings = (o = h(this, be)) == null ? void 0 : o.asObservable(), v(this, ve, new Le(void 0)), this.handlerSettings = (s = h(this, ve)) == null ? void 0 : s.asObservable(), v(this, we, new Le(void 0)), this.legacy = (r = h(this, we)) == null ? void 0 : r.asObservable(), this.provideContext(ro, this), this.provideContext(No, this), v(this, I, new xn(this)), v(this, _e, new js(this));
  }
  getEntityType() {
    return x.workspace.rootElement;
  }
  /**
   * Return the current actions from the repository
   */
  async getActions() {
    const { data: t } = await h(this, I).getActions();
    t && h(this, ye).setValue(t);
  }
  /**
   * Get the current uSync settings
   */
  async getSettings() {
    const { data: t } = await h(this, I).getSettings();
    return t && h(this, be).setValue(t), t;
  }
  async getAddons() {
    const { data: t } = await h(this, I).getAddons();
    return t;
  }
  /**
   * Check to see if there is a legacy uSync folder on disk.
   */
  async checkLegacy() {
    const { data: t } = await h(this, I).checkLegacy();
    return t && h(this, we).setValue(t), t;
  }
  async ignoreLegacy() {
    const { data: t } = await h(this, I).ignoreLegacy();
    return t ?? !1;
  }
  async copyLegacy() {
    const { data: t } = await h(this, I).copyLegacy();
    return t ?? !1;
  }
  /**
   * Get handler defaults.
   */
  async getDefaultHandlerSetSettings() {
    const { data: t } = await h(this, I).getHandlerSettings("Default");
    t && h(this, ve).setValue(t);
  }
  /**
   * Perform an action (e.g import, export, etc) with options
   * @param options options for the action
   */
  async performAction(t) {
    var a;
    var o = ((a = h(this, _e)) == null ? void 0 : a.getClientId()) ?? "";
    h(this, F).setValue(!0), h(this, q).setValue(!1), h(this, V).setValue([]);
    var s = !1, r = "", i = 0;
    if (t.file && t.action === "Import" && !await this.uploadFile()) {
      h(this, q).setValue(!0), h(this, F).setValue(!1), h(this, V).setValue([]);
      return;
    }
    do {
      const { data: l } = await h(this, I).performAction({
        id: r,
        action: t.action,
        group: t.group.key,
        force: t.force,
        clean: t.clean,
        file: t.file,
        step: i,
        clientId: o
      });
      if (l) {
        i++;
        let u = l.status ?? [];
        h(this, me).setValue(u), r = l.requestId, s = l.complete, s && h(this, V).setValue((l == null ? void 0 : l.actions) ?? []);
      } else
        s = !0;
    } while (!s);
    t.file && t.action === "Export" && await this.downloadFile(r), h(this, q).setValue(!0), h(this, F).setValue(!1);
  }
  async uploadFile() {
    const t = await this.getContext(Wt);
    return t ? !!await t.open(this, Cr, {
      data: {}
    }).onSubmit().catch(() => !1) : void 0;
  }
  async downloadFile(t) {
    const o = await h(this, I).downloadFile(t);
    if (!o) return;
    const s = window.URL.createObjectURL(o), r = document.createElement("a");
    r.href = s, r.download = "usync-export.zip", document.body.appendChild(r), r.dispatchEvent(new MouseEvent("click")), r.remove(), window.URL.revokeObjectURL(s);
  }
}
I = new WeakMap(), _e = new WeakMap(), ye = new WeakMap(), me = new WeakMap(), F = new WeakMap(), q = new WeakMap(), V = new WeakMap(), be = new WeakMap(), ve = new WeakMap(), we = new WeakMap();
const ro = new Dn(
  "uSyncWorkspaceContext"
), xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  USYNC_CORE_CONTEXT_TOKEN: ro,
  default: En,
  uSyncWorkspaceContext: En
}, Symbol.toStringTag, { value: "Module" }));
var Ar = Object.defineProperty, Rr = Object.getOwnPropertyDescriptor, io = (n) => {
  throw TypeError(n);
}, O = (n, e, t, o) => {
  for (var s = o > 1 ? void 0 : o ? Rr(e, t) : e, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (s = (o ? i(e, t, s) : i(s)) || s);
  return o && s && Ar(e, t, s), s;
}, Jt = (n, e, t) => e.has(n) || io("Cannot " + t), De = (n, e, t) => (Jt(n, e, "read from private field"), t ? t.call(n) : e.get(n)), kt = (n, e, t) => e.has(n) ? io("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), Dr = (n, e, t, o) => (Jt(n, e, "write to private field"), e.set(n, t), t), ue = (n, e, t) => (Jt(n, e, "access private method"), t), de, rt, j, ao, co, lo, uo, ho, po;
let k = class extends Ve {
  constructor() {
    super(), kt(this, j), kt(this, de), kt(this, rt, !1), this._loaded = !1, this._working = !1, this._completed = !1, this._showProgress = !1, this._results = [], this._disabled = !1, this.consumeContext(An, (n) => {
      var e, t;
      Dr(this, de, n), this.observe(n.actions, (o) => {
        this._actions = o, this._loaded = this._actions !== null;
      }), this.observe(n.currentAction, (o) => {
        this._workingActions = o;
      }), this.observe(n.working, (o) => {
        this._working = o, this._working ? (this._buttonState = "waiting", this._disabled = !0) : this._disabled = !1;
      }), this.observe(n.results, (o) => {
        this._results = o;
      }), this.observe(n.completed, (o) => {
        this._completed = o, this._completed && (this._buttonState = "success");
      }), this.observe(n.legacy, (o) => {
        this._legacy = o;
      }), De(this, rt) == !1 && ((e = De(this, de)) == null || e.checkLegacy(), (t = De(this, de)) == null || t.getActions(), De(this, rt));
    });
  }
  render() {
    return this._loaded == !1 ? d`<uui-loader></uui-loader>` : d`
				<umb-body-layout>
					${ue(this, j, co).call(this)}
					<div class="wrapper">
						${ue(this, j, lo).call(this)} ${ue(this, j, uo).call(this)} ${ue(this, j, ho).call(this)}
						${ue(this, j, po).call(this)}
					</div>
				</umb-body-layout>
			`;
  }
};
de = /* @__PURE__ */ new WeakMap();
rt = /* @__PURE__ */ new WeakMap();
j = /* @__PURE__ */ new WeakSet();
ao = function(n) {
  var e;
  this._showProgress = !0, this._group = n.detail.group, (e = De(this, de)) == null || e.performAction({
    group: n.detail.group,
    action: n.detail.key,
    force: n.detail.force,
    clean: n.detail.clean,
    file: n.detail.file
  });
};
co = function() {
  var n;
  return (n = this._legacy) != null && n.hasLegacy ? d`
					<div class="legacy-banner">
						<umb-icon name="icon-alert"></umb-icon>
						${this.localize.term("uSync_legacyBanner")}
					</div>
				` : R;
};
lo = function() {
  var e;
  if (!this._actions || !Array.isArray(this._actions)) return R;
  var n = (e = this._actions) == null ? void 0 : e.map((t) => d`
				<usync-action-box
					.disabled=${this._disabled}
					.group="${t}"
					.state=${this._buttonState}
					@perform-action=${ue(this, j, ao)}>
				</usync-action-box>
			`);
  return d` <div class="action-buttons-box">${n}</div> `;
};
uo = function() {
  return this._showProgress === !0 ? R : d`
			<umb-empty-state>
				<h2>
					<uui-icon name="usync-logo"></uui-icon>
					<umb-localize key="uSync_banner"></umb-localize>
				</h2>
			</umb-empty-state>
		`;
};
ho = function() {
  var n;
  return this._showProgress == !1 ? R : d`
			<usync-progress-box
				.title=${((n = this._group) == null ? void 0 : n.groupName) ?? "doh!"}
				.actions=${this._workingActions}
				.complete=${this._completed}></usync-progress-box>
		`;
};
po = function() {
  return this._completed ? d`<usync-results .results=${this._results}></usync-results>` : R;
};
k.styles = [
  D`
			:host {
				display: block;
				margin-top: calc(var(--uui-size-space-4) * -1);
			}

			.wrapper {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-4);
			}

			.legacy-banner {
				display: flex;
				gap: var(--uui-size-space-2);
				padding: var(--uui-size-space-4);
				margin: var(--uui-size-space-4) 0;
				background-color: var(--uui-color-warning);
				color: var(--uui-color-warning-contrast);
			}

			.results-box {
				position: relative;
				display: block;
				z-index: 1;
			}

			.action-buttons-box {
				position: relative;
				display: flex;
				gap: var(--uui-size-space-4);
				flex-wrap: wrap;
				align-content: stretch;
				z-index: 1;
			}

			umb-empty-state {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				left: 0;
				right: 0;
				margin: 0 auto;
				text-align: center;
				color: var(--uui-color-border);
				z-index: 0;
			}

			umb-empty-state h2 {
				font-size: var(--uui-type-h2-size);
			}

			umb-empty-state uui-icon {
				position: relative;
				top: var(--uui-size-4);
			}
		`
];
O([
  y()
], k.prototype, "_actions", 2);
O([
  y()
], k.prototype, "_workingActions", 2);
O([
  y()
], k.prototype, "_loaded", 2);
O([
  y()
], k.prototype, "_legacy", 2);
O([
  y()
], k.prototype, "_buttonState", 2);
O([
  y()
], k.prototype, "_working", 2);
O([
  y()
], k.prototype, "_completed", 2);
O([
  y()
], k.prototype, "_showProgress", 2);
O([
  y()
], k.prototype, "_group", 2);
O([
  y()
], k.prototype, "_results", 2);
O([
  y()
], k.prototype, "_disabled", 2);
k = O([
  P("usync-default-view")
], k);
const Or = k, Nr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Or,
  get uSyncDefaultViewElement() {
    return k;
  }
}, Symbol.toStringTag, { value: "Module" }));
var Mr = Object.defineProperty, Lr = Object.getOwnPropertyDescriptor, fo = (n) => {
  throw TypeError(n);
}, go = (n, e, t, o) => {
  for (var s = o > 1 ? void 0 : o ? Lr(e, t) : e, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (s = (o ? i(e, t, s) : i(s)) || s);
  return o && s && Mr(e, t, s), s;
}, _o = (n, e, t) => e.has(n) || fo("Cannot " + t), $n = (n, e, t) => (_o(n, e, "read from private field"), t ? t.call(n) : e.get(n)), Hr = (n, e, t) => e.has(n) ? fo("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), Ur = (n, e, t, o) => (_o(n, e, "write to private field"), e.set(n, t), t), Oe;
let ke = class extends qe(Te) {
  constructor() {
    super(), Hr(this, Oe), this.version = x.version, Ur(this, Oe, new Ao(this)), this.observe($n(this, Oe).completed, (n) => {
    });
  }
  async connectedCallback() {
    super.connectedCallback();
    const n = await $n(this, Oe).getAddons();
    this.version = `v${(n == null ? void 0 : n.version) ?? x.version}`;
  }
  render() {
    return d`
			<umb-workspace-editor .enforceNoFooter=${!0}>
				<div slot="header" class="header">
					<div>
						<strong><umb-localize key="uSync_name"></umb-localize></strong><br /><em
							>${this.version}</em
						>
					</div>
				</div>
			</umb-workspace-editor>
		`;
  }
};
Oe = /* @__PURE__ */ new WeakMap();
ke.styles = [
  Mo,
  D`
			umb-workspace-editor > div.header {
				display: flex;
				align-items: center;
				align-content: center;
			}
		`
];
go([
  y()
], ke.prototype, "version", 2);
ke = go([
  P("usync-workspace-root")
], ke);
const Wr = ke, jr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wr,
  get uSyncWorkspaceRootElement() {
    return ke;
  }
}, Symbol.toStringTag, { value: "Module" })), zr = {
  name: "uSync",
  path: "usync",
  icon: "icon-infinity",
  menuName: "Syncronisation",
  menuAlias: "usync.menu",
  version: "15.0.0",
  conditions: {
    legacy: "usync.legacy.condition"
  },
  workspace: {
    alias: "usync.workspace",
    rootElement: "usync-root",
    elementName: "usync-workspace-root",
    contextAlias: "usync.workspace.context",
    defaultView: {
      alias: "usync.workspace.default"
    },
    settingView: {
      alias: "usync.workspace.settings"
    },
    addOnView: {
      alias: "usync.workspace.addons"
    },
    legacyView: {
      alais: "usync.workspace.legacy"
    }
  }
}, ba = zr;
class va extends Lo {
  constructor(e, t) {
    super(e, t), this.config = t.config, this.consumeContext(An, (o) => {
      o.checkLegacy().then((s) => {
        this.permitted = (s == null ? void 0 : s.hasLegacy) ?? !1;
      });
    });
  }
}
var Br = Object.defineProperty, Fr = Object.getOwnPropertyDescriptor, yo = (n) => {
  throw TypeError(n);
}, _t = (n, e, t, o) => {
  for (var s = o > 1 ? void 0 : o ? Fr(e, t) : e, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (s = (o ? i(e, t, s) : i(s)) || s);
  return o && s && Br(e, t, s), s;
}, Yt = (n, e, t) => e.has(n) || yo("Cannot " + t), kn = (n, e, t) => (Yt(n, e, "read from private field"), e.get(n)), Tn = (n, e, t) => e.has(n) ? yo("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), qr = (n, e, t, o) => (Yt(n, e, "write to private field"), e.set(n, t), t), Vr = (n, e, t) => (Yt(n, e, "access private method"), t), ze, Ht, mo;
let Be = class extends qe(Te) {
  constructor() {
    super(), Tn(this, Ht), Tn(this, ze), this.hasChildren = !1, Ho.byType("usync-menuItem").subscribe((n) => {
      this.hasChildren = n.length > 0;
    }), this.consumeContext(Uo, (n) => {
      this.observe(
        n == null ? void 0 : n.pathname,
        (e) => {
          qr(this, ze, e), Vr(this, Ht, mo).call(this);
        },
        "observePathname"
      );
    });
  }
  render() {
    return d`<umb-menu-item-layout
			label=${this.manifest.meta.label ?? this.manifest.name}
			icon-name=${this.manifest.meta.icon ?? "icon-bug"}
			.href=${this.itemPath}
			?has-Children=${this.hasChildren}
			>${this.renderChildren()}
		</umb-menu-item-layout>`;
  }
  renderChildren() {
    return d`<umb-extension-slot
			type="usync-menuItem"
			default-element="umb-menu-item-default"></umb-extension-slot>`;
  }
};
ze = /* @__PURE__ */ new WeakMap();
Ht = /* @__PURE__ */ new WeakSet();
mo = function() {
  kn(this, ze) && (this.itemPath = `section/${kn(this, ze)}/workspace/${this.manifest.meta.entityType}`);
};
_t([
  C({ type: Object, attribute: !1 })
], Be.prototype, "manifest", 2);
_t([
  y()
], Be.prototype, "hasChildren", 2);
_t([
  y()
], Be.prototype, "itemPath", 2);
Be = _t([
  P("usync-menu")
], Be);
const Gr = "Umb.Section.Settings", he = {
  alias: "usync.menu",
  name: "uSync",
  icon: "icon-infinity",
  rootElement: "usync-root"
}, bo = {
  type: "menu",
  alias: he.alias,
  name: he.name,
  meta: {
    label: he.name,
    icon: he.icon,
    entityType: he.rootElement
  }
}, Kr = {
  type: "menuItem",
  alias: "usync.menu.item",
  name: "uSync menu item",
  element: Ro,
  meta: {
    label: "uSync",
    icon: "usync-logo",
    entityType: "usync-root",
    menus: [he.alias]
  }
}, Xr = {
  type: "sectionSidebarApp",
  kind: "menu",
  alias: "usync.sidebarapp",
  name: "uSync section sidebar menu",
  weight: 150,
  meta: {
    label: "Synchronisation",
    menu: bo.alias
  },
  conditions: [
    {
      alias: "Umb.Condition.SectionAlias",
      match: Gr
    }
  ]
}, Jr = [
  bo,
  Xr,
  Kr
  // subMenuItem
], Yr = {
  type: "modal",
  alias: "usync.import.modal",
  name: "uSync import modal",
  js: () => Promise.resolve().then(() => Ir)
}, Qr = [Yr];
var Zr = Object.defineProperty, ei = Object.getOwnPropertyDescriptor, vo = (n) => {
  throw TypeError(n);
}, Xe = (n, e, t, o) => {
  for (var s = o > 1 ? void 0 : o ? ei(e, t) : e, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (s = (o ? i(e, t, s) : i(s)) || s);
  return o && s && Zr(e, t, s), s;
}, ti = (n, e, t) => e.has(n) || vo("Cannot " + t), ni = (n, e, t) => e.has(n) ? vo("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), Tt = (n, e, t) => (ti(n, e, "access private method"), t), Ne, Ut, wo;
let ae = class extends Ve {
  constructor() {
    super(...arguments), ni(this, Ne), this.disabled = !1, this._popoverOpen = !1;
  }
  render() {
    var n, e, t;
    return d`
			<uui-button-group>
				<uui-button
					.disabled=${this.disabled}
					label=${this.localize.term(`uSync_${(n = this.button) == null ? void 0 : n.label}`)}
					color=${(e = this.button) == null ? void 0 : e.color}
					look=${(t = this.button) == null ? void 0 : t.look}
					state=${Rn(this.state)}
					@click=${() => Tt(this, Ne, Ut).call(this, this.button)}></uui-button>

				${this.renderDropdown(this.button)}
			</uui-button-group>
		`;
  }
  renderDropdown(n) {
    var o, s;
    if (!((o = this.button) != null && o.children)) return R;
    const e = (s = this.button) == null ? void 0 : s.children.map((r) => d` <uui-menu-item
				.disabled=${this.disabled}
				.label=${this.localize.term(`uSync_${r.label}`)}
				@click-label=${() => Tt(this, Ne, Ut).call(this, r)}></uui-menu-item>`);
    if (e.length == 0) return R;
    const t = `popover_${n == null ? void 0 : n.key}`;
    return d`
			<uui-button
				.disabled=${this.disabled}
				popovertarget=${t}
				.label=${this.button.label}
				color=${n == null ? void 0 : n.color}
				look=${n == null ? void 0 : n.look}
				compact>
				<uui-symbol-expand
					class="expand-symbol"
					.open=${this._popoverOpen}></uui-symbol-expand>
			</uui-button>

			<uui-popover-container
				id=${t}
				margin="6"
				placement="bottom-end"
				@toggle=${Tt(this, Ne, wo)}>
				<umb-popover-layout>
					<uui-scroll-container> ${e} </uui-scroll-container>
				</umb-popover-layout>
			</uui-popover-container>
		`;
  }
};
Ne = /* @__PURE__ */ new WeakSet();
Ut = function(n) {
  n && this.dispatchEvent(
    new CustomEvent("usync-action-click", {
      detail: {
        button: n
      }
    })
  );
};
wo = function(n) {
  this._popoverOpen = n.newState === "open";
};
ae.styles = D`
		.expand-symbol {
			transform: rotate(90deg);
		}

		.expand-symbol[open] {
			transform: rotate(180deg);
		}
	`;
Xe([
  C({ type: Object })
], ae.prototype, "button", 2);
Xe([
  C({ type: String })
], ae.prototype, "state", 2);
Xe([
  C({ type: Boolean })
], ae.prototype, "disabled", 2);
Xe([
  y()
], ae.prototype, "_popoverOpen", 2);
ae = Xe([
  P("usync-action-button")
], ae);
var oi = Object.defineProperty, si = Object.getOwnPropertyDescriptor, Je = (n, e, t, o) => {
  for (var s = o > 1 ? void 0 : o ? si(e, t) : e, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (s = (o ? i(e, t, s) : i(s)) || s);
  return o && s && oi(e, t, s), s;
};
let ce = class extends Ve {
  constructor() {
    super(...arguments), this.label = "Upload", this.accept = "";
  }
  async _getFile(n) {
    return await new Promise((e, t) => {
      n.file(e, t);
    });
  }
  async _onFilePickerChange() {
    const e = (this._input.files ? Array.from(this._input.files) : [])[0], o = e instanceof File ? e : await this._getFile(e);
    this._file = o, this._dispachChangeEvent();
  }
  async _removeFile() {
    this._file = void 0, this._input.value = "", this._dispachChangeEvent();
  }
  _onUpload() {
    this._input.click();
  }
  _dispachChangeEvent() {
    this.dispatchEvent(new CustomEvent("change", { detail: this._file }));
  }
  render() {
    return d`<input
				@click=${(n) => n.stopPropagation()}
				type="file"
				id="file"
				this.accept=${this.accept}
				@change=${this._onFilePickerChange} />
			${this._renderFile()} ${this._renderButton()}`;
  }
  _renderFile() {
    return this._file ? d` <div class="file">
			<div>${this._file.name}</div>
			<uui-button @click="${() => this._removeFile()}" compact color="danger">
				<umb-icon name="icon-trash"></umb-icon>
			</uui-button>
		</div>` : R;
  }
  _renderButton() {
    return this._file ? R : d` <uui-button
					id="add-button"
					look="placeholder"
					label=${this.label}
					@click="${this._onUpload}"></uui-button>`;
  }
};
ce.styles = [
  D`
			.file {
				display: flex;
				align-items: center;
				gap: var(--uui-size-space-2);
			}

			#file {
				display: none;
			}

			#add-button {
				width: 100%;
			}
		`
];
Je([
  C({ type: String })
], ce.prototype, "label", 2);
Je([
  C({ type: String })
], ce.prototype, "accept", 2);
Je([
  Oo("#file")
], ce.prototype, "_input", 2);
Je([
  y()
], ce.prototype, "_file", 2);
ce = Je([
  P("usync-upload-file-picker")
], ce);
var ri = Object.defineProperty, ii = Object.getOwnPropertyDescriptor, So = (n) => {
  throw TypeError(n);
}, Qt = (n, e, t, o) => {
  for (var s = o > 1 ? void 0 : o ? ii(e, t) : e, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (s = (o ? i(e, t, s) : i(s)) || s);
  return o && s && ri(e, t, s), s;
}, Zt = (n, e, t) => e.has(n) || So("Cannot " + t), en = (n, e, t) => (Zt(n, e, "read from private field"), t ? t.call(n) : e.get(n)), Pt = (n, e, t) => e.has(n) ? So("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), Pn = (n, e, t, o) => (Zt(n, e, "write to private field"), e.set(n, t), t), It = (n, e, t) => (Zt(n, e, "access private method"), t), He, ht, Me, Co, Eo, $o;
let Fe = class extends Ve {
  constructor() {
    super(), Pt(this, Me), Pt(this, He), Pt(this, ht), Pn(this, He, new jo(this)), Pn(this, ht, new xn(this)), this.observe(en(this, He).queue, (n) => {
      n.forEach((e) => {
        e.status === On.SUCCESS && It(this, Me, Eo).call(this, e.temporaryUnique);
      });
    });
  }
  render() {
    return d`${this.renderUploadForm()}`;
  }
  renderUploadForm() {
    return d` ${this.renderFile()} ${this.renderUploadButton()} `;
  }
  renderFile() {
    return d`
			<div class="upload-box">
				<usync-upload-file-picker
					label="Select uSync Zip file"
					@change=${It(this, Me, $o)}></usync-upload-file-picker>
			</div>
		`;
  }
  renderUploadButton() {
    return this.selected ? d`<uui-button
			type="button"
			look="primary"
			@click="${It(this, Me, Co)}"
			label="Upload"></uui-button>` : R;
  }
};
He = /* @__PURE__ */ new WeakMap();
ht = /* @__PURE__ */ new WeakMap();
Me = /* @__PURE__ */ new WeakSet();
Co = function() {
  if (!this.selected) return;
  const n = {
    temporaryUnique: Wo.new(),
    file: this.selected,
    status: On.WAITING
  };
  en(this, He).upload([n]);
};
Eo = async function(n) {
  const e = await en(this, ht).processUpload(n);
  if (!(e != null && e.success)) {
    console.log("upload error", e);
    return;
  }
  this.dispatchEvent(
    new CustomEvent("uploaded", {
      composed: !0,
      bubbles: !0,
      detail: e
    })
  );
};
$o = function(n) {
  this.selected = n.detail;
};
Fe.styles = D`
		:host {
			display: flex;
			justify-content: space-between;
		}

		.upload-box {
			flex-grow: 2;
		}

		usync-upload-file-picker {
			width: 100%;
			flex-grow: 2;
		}
	`;
Qt([
  y()
], Fe.prototype, "selected", 2);
Qt([
  y()
], Fe.prototype, "result", 2);
Fe = Qt([
  P("usync-file-upload")
], Fe);
const pe = x.workspace.alias, ai = {
  type: "workspace",
  alias: pe,
  name: "uSync core workspace",
  js: () => Promise.resolve().then(() => jr),
  meta: {
    entityType: x.workspace.rootElement
  }
}, ci = {
  type: "workspaceContext",
  alias: x.workspace.contextAlias,
  name: "uSync workspace context",
  js: () => Promise.resolve().then(() => xr),
  conditions: [
    {
      alias: "Umb.Condition.WorkspaceAlias",
      match: pe
    }
  ]
}, li = [
  {
    type: "workspaceView",
    alias: x.workspace.defaultView.alias,
    name: "uSync workspace default view",
    js: () => Promise.resolve().then(() => Nr),
    weight: 300,
    meta: {
      label: "Default",
      pathname: "default",
      icon: "usync-logo"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: pe
      }
    ]
  },
  {
    type: "workspaceView",
    alias: x.workspace.settingView.alias,
    name: "uSync workspace settings view",
    js: () => import("./settings.element-CVMocHep.js"),
    weight: 200,
    meta: {
      label: "Settings",
      pathname: "settings",
      icon: "icon-settings"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: pe
      }
    ]
  },
  {
    type: "workspaceView",
    alias: x.workspace.addOnView.alias,
    name: "uSync addons",
    js: () => import("./addons.element-BJZi68Ni.js"),
    weight: 100,
    meta: {
      label: "AddOns",
      pathname: "addons",
      icon: "icon-box"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: pe
      }
    ]
  },
  {
    type: "workspaceView",
    alias: x.workspace.legacyView.alais,
    name: "uSync legacy",
    js: () => import("./legacy.element-uUeoU_OG.js"),
    weight: 150,
    meta: {
      label: "Legacy",
      pathname: "legacy",
      icon: "icon-dock-connector color-red"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: pe
      },
      {
        alias: x.conditions.legacy,
        hasLegacyFiles: !0
      }
    ]
  }
], ui = [], hi = [
  ci,
  ai,
  ...li,
  ...ui,
  ...Qr
], di = [
  {
    type: "localization",
    alias: "usync.lang.enus",
    name: "English",
    weight: 0,
    meta: {
      culture: "en"
    },
    js: () => import("./en-us-B_L2QpLA.js")
  }
], pi = [...di], fi = {
  type: "modal",
  alias: "usync.details.modal",
  name: "usync details modal",
  js: () => Promise.resolve().then(() => Ps)
}, gi = {
  type: "modal",
  alias: "usync.legacy.modal",
  name: "uSync legacy modal",
  js: () => import("./legacy-modal-element-CKIH2-p4.js")
}, _i = {
  type: "modal",
  alias: "usync.error.modal",
  name: "uSync error modal",
  js: () => Promise.resolve().then(() => Ns)
}, yi = [fi, gi, _i], mi = [
  {
    type: "condition",
    alias: x.conditions.legacy,
    name: "uSync Legacy Files Condition",
    api: Do
  }
], bi = {
  type: "icons",
  alias: "usync.icons",
  name: "uSync Icons",
  js: () => import("./icons-DpRH-q6X.js")
}, vi = [bi], wi = [
  ...pi,
  ...Jr,
  ...hi,
  ...yi,
  ...mi,
  ...vi
], wa = (n, e) => {
  e.registerMany(wi), n.consumeContext(ko, (t) => {
    const o = t.getOpenApiConfiguration();
    wt.TOKEN = o.token, wt.BASE = o.base, wt.WITH_CREDENTIALS = o.withCredentials;
  });
};
export {
  H as AbortError,
  ra as ActionsService,
  _n as ApiError,
  ls as CancelError,
  us as CancelablePromise,
  ca as ChangeDetailType,
  Ui as ChangeDetailTypeSchema,
  Q as ChangeType,
  Wi as ChangeTypeSchema,
  or as DefaultHttpClient,
  la as EventMessageTypeModel,
  ji as EventMessageTypeModelSchema,
  zi as HandlerSettingsSchema,
  ua as HandlerStatus,
  Bi as HandlerStatusSchema,
  gt as HttpClient,
  oe as HttpError,
  Qn as HttpResponse,
  S as HttpTransportType,
  Kt as HubConnection,
  fa as HubConnectionBuilder,
  _ as HubConnectionState,
  br as JsonHubProtocol,
  c as LogLevel,
  f as MessageType,
  ia as MigrationsService,
  Fi as NotificationHeaderModelSchema,
  We as NullLogger,
  M as OpenAPI,
  qi as PerformActionRequestSchema,
  Vi as PerformActionResponseSchema,
  aa as SettingsService,
  rr as Subject,
  Gi as SyncActionButtonSchema,
  Ki as SyncActionGroupSchema,
  Xi as SyncHandlerSummarySchema,
  Ji as SyncLegacyCheckResponseSchema,
  va as SyncLegacyFilesCondition,
  Gt as TimeoutError,
  $ as TransferFormat,
  ro as USYNC_CORE_CONTEXT_TOKEN,
  ha as USYNC_DETAILS_MODAL,
  Ms as USYNC_ERROR_MODAL,
  da as USYNC_SIGNALR_CONTEXT_TOKEN,
  Yi as UploadImportResultSchema,
  Vs as VERSION,
  wa as onInit,
  Se as uSyncActionBox,
  _a as uSyncActionDataSource,
  ga as uSyncActionRepository,
  Qi as uSyncActionViewSchema,
  Zi as uSyncAddonInfoSchema,
  ea as uSyncAddonSplashSchema,
  ta as uSyncChangeSchema,
  at as uSyncChangeView,
  ba as uSyncConstants,
  ct as uSyncDetailsModalElement,
  na as uSyncHandlerSetSettingsSchema,
  Be as uSyncMenuElement,
  ya as uSyncMigrationDataSource,
  oa as uSyncOptionsSchema,
  G as uSyncProcessBox,
  re as uSyncResultGroupView,
  Ce as uSyncResultsView,
  ma as uSyncSettingsDataSource,
  sa as uSyncSettingsSchema,
  js as uSyncSignalRContext,
  En as uSyncWorkspaceContext,
  ke as uSyncWorkspaceRootElement
};
//# sourceMappingURL=uSync.js.map
