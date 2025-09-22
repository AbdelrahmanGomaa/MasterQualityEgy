import { UmbElementMixin as G } from "@umbraco-cms/backoffice/element-api";
import { LitElement as w, html as l, css as E, property as m, customElement as P, classMap as B, when as N, state as A } from "@umbraco-cms/backoffice/external/lit";
import { USYNC_CORE_CONTEXT_TOKEN as F } from "@jumoo/uSync";
var H = Object.defineProperty, T = Object.getOwnPropertyDescriptor, C = (t) => {
  throw TypeError(t);
}, c = (t, e, s, n) => {
  for (var i = n > 1 ? void 0 : n ? T(e, s) : e, r = t.length - 1, a; r >= 0; r--)
    (a = t[r]) && (i = (n ? a(e, s, i) : a(i)) || i);
  return n && i && H(e, s, i), i;
}, j = (t, e, s) => e.has(t) || C("Cannot " + s), L = (t, e, s) => e.has(t) ? C("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), R = (t, e, s) => (j(t, e, "access private method"), s), g, M;
let u = class extends w {
  constructor() {
    super(...arguments), L(this, g);
  }
  render() {
    return l`
			<div class="usync-setting-value">
				<div class="info">
					<h5>${this.name}</h5>
					<div>${this.description}</div>
				</div>
				<div class="value">${R(this, g, M).call(this)}</div>
			</div>
		`;
  }
};
g = /* @__PURE__ */ new WeakSet();
M = function() {
  if (this.value === void 0 || this.value === null)
    return l`(Not Set)`;
  if (typeof this.value == "boolean") {
    const t = { _set: this.value };
    return l`
				<uui-icon
					name=${this.value ? "icon-check" : "icon-wrong"}
					class=${B(t)}></uui-icon>
			`;
  } else if (Array.isArray(this.value)) {
    const t = this.value.map((e) => l`<li>${e}</li>`);
    return l`<ul>
					${t}
				</ul>`;
  } else
    return l` <div>${this.value}</div> `;
};
u.styles = E`
		.usync-setting-value {
			display: flex;
			justify-content: space-between;
			padding: var(--uui-size-space-2) 0;
			border-bottom: 1px solid var(--uui-color-divider);
		}

		.usync-setting-value h5 {
			margin: 0;
			padding: 0;
		}

		uui-icon {
			color: var(--uui-color-danger);
		}

		uui-icon._set {
			color: var(--uui-color-positive);
		}

		ul {
			list-style: none;
		}
	`;
c([
  m({ type: String })
], u.prototype, "name", 2);
c([
  m({ type: String })
], u.prototype, "description", 2);
c([
  m()
], u.prototype, "value", 2);
u = c([
  P("usync-setting-item")
], u);
var V = Object.defineProperty, I = Object.getOwnPropertyDescriptor, S = (t, e, s, n) => {
  for (var i = n > 1 ? void 0 : n ? I(e, s) : e, r = t.length - 1, a; r >= 0; r--)
    (a = t[r]) && (i = (n ? a(e, s, i) : a(i)) || i);
  return n && i && V(e, s, i), i;
};
let o = class extends G(w) {
  constructor() {
    super(), this.consumeContext(F, (t) => {
      this.observe(t.settings, (e) => {
        this.settings = e;
      }), this.observe(t.handlerSettings, (e) => {
        this.handlerSettings = e;
      }), t.getSettings(), t.getDefaultHandlerSetSettings();
    });
  }
  render() {
    var t, e, s, n, i, r, a, d, h, y, p, v, $, _, f, z, b, D, x;
    return l`
			<umb-body-layout>
				<div class="usync-settings-layout">
					<div>
						<uui-box headline=${this.localize.term("uSyncSettings_settings")}>
							<usync-setting-item
								.name=${this.localize.term("uSyncSettings_importAtStartup")}
								.description=${this.localize.term("uSyncSettings_importAtStartupDesc")}
								.value=${(t = this.settings) == null ? void 0 : t.importAtStartup}></usync-setting-item>
							<usync-setting-item
								.name=${this.localize.term("uSyncSettings_exportAtStartup")}
								.description=${this.localize.term("uSyncSettings_exportAtStartupDesc")}
								.value=${(e = this.settings) == null ? void 0 : e.exportAtStartup}></usync-setting-item>

							<usync-setting-item
								.name=${this.localize.term("uSyncSettings_exportOnSaveup")}
								.description=${this.localize.term("uSyncSettings_exportOnSaveDesc")}
								.value=${(s = this.settings) == null ? void 0 : s.exportOnSave}></usync-setting-item>

							<usync-setting-item
								.name=${this.localize.term("uSyncSettings_uiEnabledGroups")}
								.description=${this.localize.term("uSyncSettings_uiEnabledGroupsDesc")}
								.value=${(n = this.settings) == null ? void 0 : n.uiEnabledGroups}></usync-setting-item>

							<usync-setting-item
								.name=${this.localize.term("uSyncSettings_failOnMissingParent")}
								.description=${this.localize.term(
      "uSyncSettings_failOnMissingParentDesc"
    )}
								.value=${(i = this.settings) == null ? void 0 : i.failOnMissingParent}></usync-setting-item>
						</uui-box>

						<uui-box headline=${this.localize.term("uSyncSettings_filesAndFolders")}>
							<usync-setting-item
								.name=${this.localize.term("uSyncSettings_rootSite")}
								.description=${this.localize.term("uSyncSettings_rootSiteDesc")}
								.value=${(r = this.settings) == null ? void 0 : r.isRootSite}></usync-setting-item>

							<usync-setting-item
								.name=${this.localize.term("uSyncSettings_rootLocked")}
								.description=${this.localize.term("uSyncSettings_rootLockedDesc")}
								.value=${(a = this.settings) == null ? void 0 : a.lockRoot}></usync-setting-item>

							<usync-setting-item
								.name=${this.localize.term("uSyncSettings_folders")}
								.description=${this.localize.term("uSyncSettings_foldersDesc")}
								.value=${(d = this.settings) == null ? void 0 : d.folders}></usync-setting-item>
						</uui-box>
					</div>

					<div>
						<uui-box headline=${this.localize.term("uSyncSettings_handlerDefaults")}>
							<usync-setting-item
								.name=${this.localize.term("uSyncSettings_flatStructure")}
								.description=${this.localize.term("uSyncSettings_flatStructureDesc")}
								.value=${(y = (h = this.handlerSettings) == null ? void 0 : h.handlerDefaults) == null ? void 0 : y.useFlatStructure}></usync-setting-item>

							<usync-setting-item
								.name=${this.localize.term("uSyncSettings_guidNames")}
								.description=${this.localize.term("uSyncSettings_guidNamesDesc")}
								.value=${(v = (p = this.handlerSettings) == null ? void 0 : p.handlerDefaults) == null ? void 0 : v.guidNames}></usync-setting-item>

							<usync-setting-item
								.name=${this.localize.term("uSyncSettings_handlerGroups")}
								.description=${this.localize.term("uSyncSettings_handlerGroupsDesc")}
								.value=${(_ = ($ = this.handlerSettings) == null ? void 0 : $.handlerDefaults) == null ? void 0 : _.group}></usync-setting-item>

							<usync-setting-item
								.name=${this.localize.term("uSyncSettings_failOnMissingParent")}
								.description=${this.localize.term(
      "uSyncSettings_failOnMissingParentDesc"
    )}
								.value=${(z = (f = this.handlerSettings) == null ? void 0 : f.handlerDefaults) == null ? void 0 : z.failOnMissingParent}></usync-setting-item>

							<usync-setting-item
								.name=${this.localize.term("uSyncSettings_disabledHandlers")}
								.description=${this.localize.term("uSyncSettings_disabledHandlersDesc")}
								.value=${(b = this.handlerSettings) == null ? void 0 : b.disabledHandlers}></usync-setting-item>
						</uui-box>
						<uui-box headline=${this.localize.term("uSyncSettings_bootSettings")}>
							<usync-setting-item
								.name=${this.localize.term("uSyncSettings_firstBoot")}
								.description=${this.localize.term("uSyncSettings_firstBootDesc")}
								.value=${(D = this.settings) == null ? void 0 : D.importOnFirstBoot}></usync-setting-item>
							${N(
      (x = this.settings) == null ? void 0 : x.importOnFirstBoot,
      () => {
        var O;
        return l` <usync-setting-item
										.name=${this.localize.term("uSyncSettings_firstBootGroup")}
										.description=${this.localize.term("uSyncSettings_firstBootGroupDesc")}
										.value=${(O = this.settings) == null ? void 0 : O.firstBootGroup}></usync-setting-item>`;
      }
    )}
						</uui-box>
					</div>
				</div>
				<div class="setting-link">
					<umb-localize key="uSyncSettings_help"></umb-localize>
				</div>
			</umb-body-layout>
		`;
  }
};
o.styles = E`
		:host {
			display: block;
			margin: calc(var(--uui-size-space-4) * -1) 0;
		}

		.usync-settings-layout {
			display: grid;
			grid-template-columns: 5fr 5fr;
			grid-template-rows: auto auto;
			gap: var(--uui-size-space-4) var(--uui-size-space-4);
			grid-auto-flow: row;
			grid-template-areas: 'settings info', 'handler info';
		}

		.setting-link {
			text-align: center;
		}

		uui-box {
			margin: var(--uui-size-space-4) 0;
		}
	`;
S([
  A()
], o.prototype, "settings", 2);
S([
  A()
], o.prototype, "handlerSettings", 2);
o = S([
  P("usync-settings-view")
], o);
const K = o;
export {
  K as default,
  u as uSyncSettingItemElement,
  o as uSyncSettingsViewElement
};
//# sourceMappingURL=settings.element-CVMocHep.js.map
