import { property as u, customElement as p, html as n, ifDefined as ie, css as $, when as j, nothing as z, query as Me, state as l, queryAssignedElements as mt, unsafeHTML as ft, until as gt } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as m } from "@umbraco-cms/backoffice/lit-element";
import { umbExtensionsRegistry as Z, UmbAppEntryPointExtensionInitializer as vt } from "@umbraco-cms/backoffice/extension-registry";
import { UmbRepositoryBase as wt } from "@umbraco-cms/backoffice/repository";
import { UmbLocalizationController as bt } from "@umbraco-cms/backoffice/localization-api";
import { SecurityService as se, UserService as Pe, ApiError as yt, CancelError as _t } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as F } from "@umbraco-cms/backoffice/resources";
import { UmbContextBase as Ct, UmbControllerBase as Pt } from "@umbraco-cms/backoffice/class-api";
import { UmbContextToken as $t } from "@umbraco-cms/backoffice/context-api";
import { UmbBundleExtensionInitializer as xt, UmbServerExtensionRegistrator as zt } from "@umbraco-cms/backoffice/extension-api";
import { UUIIconRegistryEssential as Et } from "@umbraco-cms/backoffice/external/uui";
import "@umbraco-cms/backoffice/localization";
class kt extends wt {
  #e = new bt(this);
  async login(e) {
    try {
      const r = new Request("management/api/v1/security/back-office/login", {
        method: "POST",
        body: JSON.stringify({
          username: e.username,
          password: e.password
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }), a = await fetch(r);
      if (!a.ok) {
        if (a.status === 402) {
          const o = await a.json();
          return {
            status: a.status,
            twoFactorView: o.twoFactorLoginView ?? "",
            twoFactorProviders: o.enabledTwoFactorProviderNames ?? []
          };
        }
        return {
          status: a.status,
          error: await this.#r(a)
        };
      }
      return {
        status: a.status,
        data: {
          username: e.username
        }
      };
    } catch (r) {
      return {
        status: 500,
        error: r instanceof Error ? r.message : this.#e.term("auth_receivedErrorFromServer")
      };
    }
  }
  async validateMfaCode(e, r) {
    try {
      const a = new Request("management/api/v1/security/back-office/verify-2fa", {
        method: "POST",
        body: JSON.stringify({
          code: e,
          provider: r
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }), o = await fetch(a);
      return o.ok ? {} : {
        error: o.status === 400 ? this.#e.term("auth_mfaInvalidCode") : await this.#r(o)
      };
    } catch (a) {
      return {
        error: a instanceof Error ? a.message : this.#e.term("auth_receivedErrorFromServer")
      };
    }
  }
  async resetPassword(e) {
    const r = await F(se.postSecurityForgotPassword({
      requestBody: {
        email: e
      }
    }));
    return r.error ? {
      error: this.#t(r.error, "Could not reset the password")
    } : {};
  }
  async validatePasswordResetCode(e, r) {
    const { data: a, error: o } = await F(se.postSecurityForgotPasswordVerify({
      requestBody: {
        user: {
          id: e
        },
        resetCode: r
      }
    }));
    return o || !a ? {
      error: this.#t(o, "Could not validate the password reset code")
    } : {
      passwordConfiguration: a.passwordConfiguration
      // TODO: Fix this when the API schema has been updated
    };
  }
  async newPassword(e, r, a) {
    const o = await F(se.postSecurityForgotPasswordReset({
      requestBody: {
        password: e,
        resetCode: r,
        user: {
          id: a
        }
      }
    }));
    return o.error ? {
      error: this.#t(o.error, "Could not reset the password")
    } : {};
  }
  async validateInviteCode(e, r) {
    const { data: a, error: o } = await F(Pe.postUserInviteVerify({
      requestBody: {
        token: e,
        user: {
          id: r
        }
      }
    }));
    return o || !a ? {
      error: this.#t(o, "Could not validate the invite code")
    } : {
      passwordConfiguration: a.passwordConfiguration
      // TODO: Fix this when the API schema has been updated
    };
  }
  async newInvitedUserPassword(e, r, a) {
    const o = await F(Pe.postUserInviteCreatePassword({
      requestBody: {
        password: e,
        token: r,
        user: {
          id: a
        }
      }
    }));
    return o.error ? {
      error: this.#t(o.error, "Could not create a password for the invited user")
    } : {};
  }
  #t(e, r) {
    if (e instanceof yt)
      return typeof e.body == "object" ? e.body.title ?? r : r ?? "An unknown error occurred.";
    if (!(e instanceof _t))
      return r ?? "An unknown error occurred.";
  }
  async #r(e) {
    switch (e.status) {
      case 400:
      case 401:
        return this.#e.term("auth_userFailedLogin");
      case 402:
        return this.#e.term("auth_mfaText");
      case 403:
        return this.#e.term("auth_userLockedOut");
      default:
        return this.#e.term("auth_receivedErrorFromServer");
    }
  }
}
class It extends Ct {
  constructor() {
    super(...arguments), this.supportsPersistLogin = !1, this.twoFactorView = "", this.isMfaEnabled = !1, this.mfaProviders = [], this.#e = new kt(this), this.#t = "";
  }
  #e;
  #t;
  set returnPath(e) {
    this.#t = e;
  }
  /**
   * Gets the return path from the query string.
   *
   * It will first look for a `ReturnUrl` parameter, then a `returnPath` parameter, and finally the `returnPath` property.
   *
   * @returns The return path from the query string.
   */
  get returnPath() {
    const e = new URLSearchParams(window.location.search);
    let r = e.get("ReturnUrl") ?? e.get("returnPath") ?? this.#t;
    if (!r)
      return "";
    const a = new URL(r, window.location.origin);
    return a.origin !== window.location.origin ? "" : a.toString();
  }
  login(e) {
    return this.#e.login(e);
  }
  resetPassword(e) {
    return this.#e.resetPassword(e);
  }
  validatePasswordResetCode(e, r) {
    return this.#e.validatePasswordResetCode(e, r);
  }
  newPassword(e, r, a) {
    return this.#e.newPassword(e, r, a);
  }
  newInvitedUserPassword(e, r, a) {
    return this.#e.newInvitedUserPassword(e, r, a);
  }
  validateInviteCode(e, r) {
    return this.#e.validateInviteCode(e, r);
  }
  validateMfaCode(e, r) {
    return this.#e.validateMfaCode(e, r);
  }
}
const k = new $t("UmbAuthContext");
class Lt extends Pt {
  #e = new Et();
  constructor(e) {
    super(e), new xt(e, Z), new vt(e, Z), new zt(e, Z).registerPublicExtensions(), this.#e.attach(e), e.classList.add("uui-text"), e.classList.add("uui-font");
  }
}
const St = "#umb-login-form input{width:100%;height:var(--input-height);box-sizing:border-box;display:block;border:1px solid var(--uui-color-border);border-radius:var(--uui-border-radius);background-color:var(--uui-color-surface);padding:var(--uui-size-1, 3px) var(--uui-size-space-4, 9px)}#umb-login-form uui-form-layout-item{margin-top:var(--uui-size-space-4);margin-bottom:var(--uui-size-space-4)}#umb-login-form input:focus-within{border-color:var(--uui-input-border-color-focus, var(--uui-color-border-emphasis, #a1a1a1));outline:calc(2px * var(--uui-show-focus-outline, 1)) solid var(--uui-color-focus)}#umb-login-form input:hover:not(:focus-within){border-color:var(--uui-input-border-color-hover, var(--uui-color-border-standalone, #c2c2c2))}#umb-login-form input::-ms-reveal{display:none}#umb-login-form input span{position:absolute;right:1px;top:50%;transform:translateY(-50%);z-index:100}#umb-login-form input span svg{background-color:#fff;display:block;padding:.2em;width:1.3em;height:1.3em}", Ot = [
  {
    name: "Auth Bundle",
    alias: "Umb.Auth.Bundle",
    type: "bundle",
    js: () => import("./manifests-BS8r2juT.js")
  }
];
var Ut = Object.defineProperty, Dt = Object.getOwnPropertyDescriptor, qe = (t) => {
  throw TypeError(t);
}, y = (t, e, r, a) => {
  for (var o = a > 1 ? void 0 : a ? Dt(e, r) : e, s = t.length - 1, i; s >= 0; s--)
    (i = t[s]) && (o = (a ? i(e, r, o) : i(o)) || o);
  return a && o && Ut(e, r, o), o;
}, Fe = (t, e, r) => e.has(t) || qe("Cannot " + r), ne = (t, e, r) => (Fe(t, e, "read from private field"), r ? r.call(t) : e.get(t)), $e = (t, e, r) => e.has(t) ? qe("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Mt = (t, e, r) => (Fe(t, e, "access private method"), r), A, le, Te;
const xe = (t) => {
  const e = document.createElement("input");
  return e.type = t.type, e.name = t.name, e.autocomplete = t.autocomplete, e.id = t.id, e.required = !0, e.inputMode = t.inputmode, e.ariaLabel = t.label, e.autofocus = t.autofocus || !1, e;
}, ze = (t) => {
  const e = document.createElement("label"), r = document.createElement("umb-localize");
  return r.key = t.localizeAlias, r.innerHTML = t.localizeFallback, e.htmlFor = t.forId, e.appendChild(r), e;
}, Ee = (t, e) => {
  const r = document.createElement("uui-form-layout-item");
  return r.appendChild(t), r.appendChild(e), r;
}, qt = (t) => {
  const e = document.createElement("style");
  e.innerHTML = St;
  const r = document.createElement("form");
  return r.id = "umb-login-form", r.name = "login-form", r.spellcheck = !1, t.push(e), t.forEach((a) => r.appendChild(a)), r;
};
let g = class extends m {
  constructor() {
    super(), $e(this, le), this.disableLocalLogin = !1, this.usernameIsEmail = !1, this.allowPasswordReset = !1, this.allowUserInvite = !1, $e(this, A, new It(this, k)), this.addEventListener("umb-login-flow", (t) => {
      t instanceof CustomEvent && (this.flow = t.detail.flow || void 0), this.requestUpdate();
    }), new Lt(this), Z.registerMany(Ot);
  }
  set returnPath(t) {
    ne(this, A).returnPath = t;
  }
  get returnPath() {
    return ne(this, A).returnPath;
  }
  firstUpdated() {
    setTimeout(() => {
      requestAnimationFrame(() => {
        Mt(this, le, Te).call(this);
      });
    }, 100);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._usernameLayoutItem?.remove(), this._passwordLayoutItem?.remove(), this._usernameLabel?.remove(), this._usernameInput?.remove(), this._passwordLabel?.remove(), this._passwordInput?.remove();
  }
  render() {
    return n`
      <umb-auth-layout
        background-image=${ie(this.backgroundImage)}
        logo-image=${ie(this.logoImage)}
        logo-image-alternative=${ie(this.logoImageAlternative)}>
        ${this._renderFlowAndStatus()}
      </umb-auth-layout>
    `;
  }
  _renderFlowAndStatus() {
    if (this.disableLocalLogin)
      return n`
        <umb-error-layout no-back-link>
          <umb-localize key="auth_localLoginDisabled">Unfortunately, it is not possible to log in directly. It has been disabled by a login provider.</umb-localize>
        </umb-error-layout>
      `;
    const t = new URLSearchParams(window.location.search);
    let e = this.flow || t.get("flow")?.toLowerCase();
    const r = t.get("status");
    if (r === "resetCodeExpired")
      return n`
        <umb-error-layout
          message=${this.localize.term("auth_resetCodeExpired")}>
        </umb-error-layout>`;
    if (e === "invite-user" && r === "false")
      return n`
        <umb-error-layout
          message=${this.localize.term("auth_userInviteExpiredMessage")}>
        </umb-error-layout>`;
    switch (e && e === "mfa" && !ne(this, A).isMfaEnabled && (e = void 0), e) {
      case "mfa":
        return n`
          <umb-mfa-page></umb-mfa-page>`;
      case "reset":
        return n`
          <umb-reset-password-page></umb-reset-password-page>`;
      case "reset-password":
        return n`
          <umb-new-password-page></umb-new-password-page>`;
      case "invite-user":
        return n`
          <umb-invite-page></umb-invite-page>`;
      default:
        return n`
          <umb-login-page
            ?allow-password-reset=${this.allowPasswordReset}
            ?username-is-email=${this.usernameIsEmail}>
            <slot></slot>
            <slot name="subheadline" slot="subheadline"></slot>
          </umb-login-page>`;
    }
  }
};
A = /* @__PURE__ */ new WeakMap();
le = /* @__PURE__ */ new WeakSet();
Te = function() {
  const t = this.usernameIsEmail ? this.localize.term("auth_email") : this.localize.term("auth_username"), e = this.localize.term("auth_password");
  this._usernameInput = xe({
    id: "username-input",
    type: "text",
    name: "username",
    autocomplete: "username",
    label: t,
    inputmode: this.usernameIsEmail ? "email" : "",
    autofocus: !0
  }), this._passwordInput = xe({
    id: "password-input",
    type: "password",
    name: "password",
    autocomplete: "current-password",
    label: e,
    inputmode: ""
  }), this._usernameLabel = ze({
    forId: "username-input",
    localizeAlias: this.usernameIsEmail ? "auth_email" : "auth_username",
    localizeFallback: this.usernameIsEmail ? "Email" : "Username"
  }), this._passwordLabel = ze({ forId: "password-input", localizeAlias: "auth_password", localizeFallback: "Password" }), this._usernameLayoutItem = Ee(this._usernameLabel, this._usernameInput), this._passwordLayoutItem = Ee(this._passwordLabel, this._passwordInput), this._form = qt([this._usernameLayoutItem, this._passwordLayoutItem]), this.insertAdjacentElement("beforeend", this._form);
};
y([
  u({ type: Boolean, attribute: "disable-local-login" })
], g.prototype, "disableLocalLogin", 2);
y([
  u({ attribute: "background-image" })
], g.prototype, "backgroundImage", 2);
y([
  u({ attribute: "logo-image" })
], g.prototype, "logoImage", 2);
y([
  u({ attribute: "logo-image-alternative" })
], g.prototype, "logoImageAlternative", 2);
y([
  u({ type: Boolean, attribute: "username-is-email" })
], g.prototype, "usernameIsEmail", 2);
y([
  u({ type: Boolean, attribute: "allow-password-reset" })
], g.prototype, "allowPasswordReset", 2);
y([
  u({ type: Boolean, attribute: "allow-user-invite" })
], g.prototype, "allowUserInvite", 2);
y([
  u({ attribute: "return-url" })
], g.prototype, "returnPath", 1);
g = y([
  p("umb-auth")
], g);
var Ft = Object.defineProperty, Tt = Object.getOwnPropertyDescriptor, Ae = (t) => {
  throw TypeError(t);
}, te = (t, e, r, a) => {
  for (var o = a > 1 ? void 0 : a ? Tt(e, r) : e, s = t.length - 1, i; s >= 0; s--)
    (i = t[s]) && (o = (a ? i(e, r, o) : i(o)) || o);
  return a && o && Ft(e, r, o), o;
}, At = (t, e, r) => e.has(t) || Ae("Cannot " + r), Rt = (t, e, r) => e.has(t) ? Ae("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), ke = (t, e, r) => (At(t, e, "access private method"), r), Y, Re, We;
let O = class extends m {
  constructor() {
    super(...arguments), Rt(this, Y);
  }
  updated(t) {
    super.updated(t), t.has("backgroundImage") && (this.style.setProperty("--logo-alternative-display", this.backgroundImage ? "none" : "unset"), this.style.setProperty("--image", `url('${this.backgroundImage}') no-repeat center center/cover`));
  }
  render() {
    return n`
			<div id=${this.backgroundImage ? "main" : "main-no-image"}>
				${ke(this, Y, Re).call(this)} ${ke(this, Y, We).call(this)}
			</div>
			${j(
      this.logoImageAlternative,
      (t) => n`<img id="logo-on-background" src=${t} alt="logo" aria-hidden="true" />`
    )}
		`;
  }
};
Y = /* @__PURE__ */ new WeakSet();
Re = function() {
  return this.backgroundImage ? n`
			<div id="image-container">
				<div id="image">
					<svg
						id="curve-top"
						width="1746"
						height="1374"
						viewBox="0 0 1746 1374"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M8 1C61.5 722.5 206.5 1366.5 1745.5 1366.5" stroke="currentColor" stroke-width="15" />
					</svg>
					<svg
						id="curve-bottom"
						width="1364"
						height="552"
						viewBox="0 0 1364 552"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M1 8C387 24 1109 11 1357 548" stroke="currentColor" stroke-width="15" />
					</svg>

					${j(
    this.logoImage,
    (t) => n`<img id="logo-on-image" src=${t} alt="logo" aria-hidden="true" />`
  )}
				</div>
			</div>
		` : z;
};
We = function() {
  return n`
			<div id="content-container">
				<div id="content">
					<slot></slot>
				</div>
			</div>
		`;
};
O.styles = [
  $`
			:host {
				--uui-color-interactive: var(--umb-login-primary-color, #283a97);
				--uui-button-border-radius: var(--umb-login-button-border-radius, 45px);
				--uui-color-default: var(--uui-color-interactive);
				--uui-button-height: 42px;
				--uui-select-height: 38px;

				--input-height: 40px;
				--header-font-size: var(--umb-login-header-font-size, 3rem);
				--header-secondary-font-size: var(--umb-login-header-secondary-font-size, 2.4rem);
				--curves-color: var(--umb-login-curves-color, #f5c1bc);
				--curves-display: var(--umb-login-curves-display, inline);

				display: block;
				background: var(--umb-login-background, #f4f4f4);
				color: var(--umb-login-text-color, #000);
			}

			#main-no-image,
			#main {
				max-width: 1920px;
				display: flex;
				justify-content: center;
				height: 100vh;
				padding: 8px;
				box-sizing: border-box;
				margin: 0 auto;
			}

			#image-container {
				display: var(--umb-login-image-display, none);
				width: 100%;
			}

			#content-container {
				background: var(--umb-login-content-background, none);
				display: var(--umb-login-content-display, flex);
				width: var(--umb-login-content-width, 100%);
				height: var(--umb-login-content-height, 100%);
				box-sizing: border-box;
				overflow: auto;
				border-radius: var(--umb-login-content-border-radius, 0);
			}

			#content {
				max-width: 360px;
				margin: auto;
				width: 100%;
			}

			#image {
				background: var(--umb-login-image, var(--image));
				width: 100%;
				height: 100%;
				border-radius: var(--umb-login-image-border-radius, 38px);
				position: relative;
				overflow: hidden;
				color: var(--curves-color);
			}

			#image svg {
				position: absolute;
				width: 45%;
				height: fit-content;
				display: var(--curves-display);
			}

			#curve-top {
				top: 0;
				right: 0;
			}

			#curve-bottom {
				bottom: 0;
				left: 0;
			}

			#logo-on-image,
			#logo-on-background {
				position: absolute;
				display: var(--umb-logo-display, block);
				top: var(--umb-logo-top, 24px);
				left: var(--umb-logo-left, 24px);
				width: var(--umb-logo-width, auto);
				height: var(--umb-logo-height, 55px);
			}

			@media only screen and (min-width: 900px) {
				:host {
					--header-font-size: var(--umb-login-header-font-size-large, 4rem);
				}

				#main {
					padding: 32px;
					padding-right: 0;
					align-items: var(--umb-login-align-items, unset);
				}

				#image-container {
					display: var(--umb-login-image-display, block);
				}

				#content-container {
					display: var(--umb-login-content-display, flex);
					padding: 16px;
				}

				#logo-on-background {
					display: var(--logo-alternative-display);
				}
			}
		`
];
te([
  u({ attribute: "background-image" })
], O.prototype, "backgroundImage", 2);
te([
  u({ attribute: "logo-image" })
], O.prototype, "logoImage", 2);
te([
  u({ attribute: "logo-image-alternative" })
], O.prototype, "logoImageAlternative", 2);
O = te([
  p("umb-auth-layout")
], O);
var Wt = Object.defineProperty, Bt = Object.getOwnPropertyDescriptor, fe = (t, e, r, a) => {
  for (var o = a > 1 ? void 0 : a ? Bt(e, r) : e, s = t.length - 1, i; s >= 0; s--)
    (i = t[s]) && (o = (a ? i(e, r, o) : i(o)) || o);
  return a && o && Wt(e, r, o), o;
};
let V = class extends m {
  constructor() {
    super(...arguments), this.header = "", this.message = "";
  }
  render() {
    return n`
      <header id="header">
        <h1>${this.header}</h1>
        <span>${this.message}</span>
      </header>

      <umb-back-to-login-button></umb-back-to-login-button>

      <slot></slot>
    `;
  }
};
V.styles = [
  $`
      :host {
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-layout-1);
      }

      #header {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-space-5);
      }

      #header span {
        color: var(--uui-color-text-alt); /* TODO Change to uui color when uui gets a muted text variable */
        font-size: 14px;
      }

      #header h1 {
        margin: 0;
        font-weight: 400;
        font-size: var(--header-secondary-font-size);
        color: var(--uui-color-interactive);
        line-height: 1.2;
      }

      uui-button {
        width: 100%;
        margin-top: var(--uui-size-space-5);
        --uui-button-padding-top-factor: 1.5;
        --uui-button-padding-bottom-factor: 1.5;
      }
    `
];
fe([
  u({ type: String })
], V.prototype, "header", 2);
fe([
  u({ type: String })
], V.prototype, "message", 2);
V = fe([
  p("umb-confirmation-layout")
], V);
var Vt = Object.defineProperty, Nt = Object.getOwnPropertyDescriptor, re = (t, e, r, a) => {
  for (var o = a > 1 ? void 0 : a ? Nt(e, r) : e, s = t.length - 1, i; s >= 0; s--)
    (i = t[s]) && (o = (a ? i(e, r, o) : i(o)) || o);
  return a && o && Vt(e, r, o), o;
};
let U = class extends m {
  constructor() {
    super(...arguments), this.header = "", this.message = "", this.noBackLink = !1;
  }
  render() {
    return n`
      <header id="header">
        <h1>${this.header?.length ? this.header : n`<umb-localize key="auth_friendlyGreeting">Hi there</umb-localize>`}</h1>
        <span>${this.message}</span>
      </header>
      <slot></slot>
      ${this.noBackLink ? "" : n`<umb-back-to-login-button></umb-back-to-login-button>`}
    `;
  }
};
U.styles = [
  $`
      :host {
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-layout-1);
      }

      #header {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-space-5);
      }

      #header span {
        color: var(--uui-color-text-alt); /* TODO Change to uui color when uui gets a muted text variable */
        font-size: 14px;
      }

      #header h1 {
        margin: 0;
        font-weight: 400;
        font-size: var(--header-secondary-font-size);
        color: var(--uui-color-interactive);
        line-height: 1.2;
      }

      ::slotted(uui-button) {
        width: 100%;
        margin-top: var(--uui-size-space-5);
        --uui-button-padding-top-factor: 1.5;
        --uui-button-padding-bottom-factor: 1.5;
      }
    `
];
re([
  u({ type: String })
], U.prototype, "header", 2);
re([
  u({ type: String })
], U.prototype, "message", 2);
re([
  u({ type: Boolean, attribute: "no-back-link" })
], U.prototype, "noBackLink", 2);
U = re([
  p("umb-error-layout")
], U);
var Ht = Object.defineProperty, Gt = Object.getOwnPropertyDescriptor, Be = (t) => {
  throw TypeError(t);
}, _ = (t, e, r, a) => {
  for (var o = a > 1 ? void 0 : a ? Gt(e, r) : e, s = t.length - 1, i; s >= 0; s--)
    (i = t[s]) && (o = (a ? i(e, r, o) : i(o)) || o);
  return a && o && Ht(e, r, o), o;
}, Jt = (t, e, r) => e.has(t) || Be("Cannot " + r), Zt = (t, e, r) => e.has(t) ? Be("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Ie = (t, e, r) => (Jt(t, e, "access private method"), r), K, Ve, Ne;
let c = class extends m {
  constructor() {
    super(), Zt(this, K), this.state = void 0, this.error = "", this.userId = "", this.isInvite = !1, this._passwordPattern = "", this.consumeContext(k, (t) => {
      this._passwordConfiguration = t.passwordConfiguration;
      let e = "";
      this._passwordConfiguration?.requireDigit && (e += "(?=.*\\d)"), this._passwordConfiguration?.requireLowercase && (e += "(?=.*[a-z])"), this._passwordConfiguration?.requireUppercase && (e += "(?=.*[A-Z])"), this._passwordConfiguration?.requireNonLetterOrDigit && (e += "(?=.*\\W)"), e += `.{${this._passwordConfiguration?.minimumPasswordLength ?? 10},}`, this._passwordPattern = e;
    });
  }
  renderHeader() {
    return this.isInvite ? n`
        <h1>Hi!</h1>
        <span>
          <umb-localize key="auth_userInviteWelcomeMessage">
            Welcome to Umbraco! Just need to get your password setup and then you're good to go
          </umb-localize>
        </span>
      ` : n`
        <h1>
          <umb-localize key="auth_newPassword">New password</umb-localize>
        </h1>
        <span>
            <umb-localize key="auth_setPasswordInstruction">Please provide a new password.</umb-localize>
        </span>
      `;
  }
  render() {
    return n`
      <uui-form>
        <form id="LoginForm" name="login" @submit=${Ie(this, K, Ve)}>
          <header id="header">${this.renderHeader()}</header>
          <uui-form-layout-item>
            <uui-label id="passwordLabel" for="password" slot="label" required>
              <umb-localize key="auth_newPassword">New password</umb-localize>
            </uui-label>
            <uui-input-password
              type="password"
              id="password"
              name="password"
              autocomplete="new-password"
              pattern="${this._passwordPattern}"
              .minlength=${this._passwordConfiguration?.minimumPasswordLength}
              .minlengthMessage=${this.localize.term("auth_passwordMinLength", this._passwordConfiguration?.minimumPasswordLength ?? 10)}
              .label=${this.localize.term("auth_newPassword")}
              required
              required-message=${this.localize.term("auth_passwordIsBlank")}>
            </uui-input-password>
          </uui-form-layout-item>

          <uui-form-layout-item>
            <uui-label id="confirmPasswordLabel" for="confirmPassword" slot="label" required>
              <umb-localize key="auth_confirmNewPassword">Confirm new password</umb-localize>
            </uui-label>
            <uui-input-password
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              autocomplete="new-password"
              pattern="${this._passwordPattern}"
              .minlength=${this._passwordConfiguration?.minimumPasswordLength}
              .minlengthMessage=${this.localize.term("auth_passwordMinLength", this._passwordConfiguration?.minimumPasswordLength ?? 10)}
              .label=${this.localize.term("auth_confirmNewPassword")}
              required
              required-message=${this.localize.term("auth_required")}></uui-input-password>
          </uui-form-layout-item>

          ${Ie(this, K, Ne).call(this)}

          <uui-button
            type="submit"
            label=${this.localize.term("auth_continue")}
            look="primary"
            color="default"
            .state=${this.state}></uui-button>
        </form>
      </uui-form>

      <umb-back-to-login-button style="margin-top: var(--uui-size-space-6)"></umb-back-to-login-button>
    `;
  }
};
K = /* @__PURE__ */ new WeakSet();
Ve = function(t) {
  if (t.preventDefault(), !this._passwordConfiguration) return;
  const e = t.target;
  if (this.passwordElement.setCustomValidity(""), this.confirmPasswordElement.setCustomValidity(""), !e || !e.checkValidity()) return;
  const r = new FormData(e), a = r.get("password"), o = r.get("confirmPassword");
  let s = !1;
  if (this._passwordConfiguration.minimumPasswordLength > 0 && a.length < this._passwordConfiguration.minimumPasswordLength && (s = !0), this._passwordConfiguration.requireNonLetterOrDigit && (/\W/.test(a) || (s = !0)), this._passwordConfiguration.requireDigit && (/\d/.test(a) || (s = !0)), this._passwordConfiguration.requireLowercase && (/[a-z]/.test(a) || (s = !0)), this._passwordConfiguration.requireUppercase && (/[A-Z]/.test(a) || (s = !0)), s) {
    const i = this.localize.term(
      "auth_errorInPasswordFormat",
      this._passwordConfiguration.minimumPasswordLength,
      this._passwordConfiguration.requireNonLetterOrDigit ? 1 : 0
    ) ?? "The password does not meet the minimum requirements!";
    this.passwordElement.setCustomValidity(i);
    return;
  }
  if (a !== o) {
    const i = this.localize.term(
      "auth_passwordMismatch"
    ) ?? "The confirmed password doesn't match the new password!";
    this.confirmPasswordElement.setCustomValidity(i);
    return;
  }
  this.dispatchEvent(new CustomEvent("submit", { detail: { password: a } }));
};
Ne = function() {
  return !this.error || this.state !== "failed" ? z : n`<span class="text-danger">${this.error}</span>`;
};
c.styles = [
  $`
      #header {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-space-5);
      }

      #header span {
        color: var(--uui-color-text-alt); /* TODO Change to uui color when uui gets a muted text variable */
        font-size: 14px;
      }

      #header h1 {
        margin: 0;
        font-weight: 400;
        font-size: var(--header-secondary-font-size);
        color: var(--uui-color-interactive);
        line-height: 1.2;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-space-5);
      }

      uui-form-layout-item {
        margin: 0;
      }

      uui-input-password {
        width: 100%;
        height: var(--input-height);
        border-radius: var(--uui-border-radius);
      }

      uui-button {
        width: 100%;
        margin-top: var(--uui-size-space-5);
        --uui-button-padding-top-factor: 1.5;
        --uui-button-padding-bottom-factor: 1.5;
      }

      .text-danger {
        color: var(--uui-color-danger-standalone);
      }
    `
];
_([
  Me("#password")
], c.prototype, "passwordElement", 2);
_([
  Me("#confirmPassword")
], c.prototype, "confirmPasswordElement", 2);
_([
  u()
], c.prototype, "state", 2);
_([
  u()
], c.prototype, "error", 2);
_([
  u()
], c.prototype, "userId", 2);
_([
  u({ type: Boolean, attribute: "is-invite" })
], c.prototype, "isInvite", 2);
_([
  l()
], c.prototype, "_passwordConfiguration", 2);
_([
  l()
], c.prototype, "_passwordPattern", 2);
c = _([
  p("umb-new-password-layout")
], c);
var Yt = Object.defineProperty, Kt = Object.getOwnPropertyDescriptor, He = (t) => {
  throw TypeError(t);
}, ae = (t, e, r, a) => {
  for (var o = a > 1 ? void 0 : a ? Kt(e, r) : e, s = t.length - 1, i; s >= 0; s--)
    (i = t[s]) && (o = (a ? i(e, r, o) : i(o)) || o);
  return a && o && Yt(e, r, o), o;
}, ge = (t, e, r) => e.has(t) || He("Cannot " + r), h = (t, e, r) => (ge(t, e, "read from private field"), r ? r.call(t) : e.get(t)), J = (t, e, r) => e.has(t) ? He("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), de = (t, e, r, a) => (ge(t, e, "write to private field"), e.set(t, r), r), Le = (t, e, r) => (ge(t, e, "access private method"), r), N, D, w, X, Ge, Je;
let H = class extends m {
  constructor() {
    super(), J(this, X), J(this, N, ""), J(this, D, ""), this.state = void 0, this.error = "", this.loading = !0, J(this, w), this.consumeContext(k, (t) => {
      de(this, w, t), Le(this, X, Ge).call(this);
    });
  }
  render() {
    return this.loading ? n`<uui-loader-bar></uui-loader-bar>` : this.error ? n`
          <umb-error-layout
            header=${this.localize.term("auth_error")}
            message=${this.error ?? this.localize.term("auth_defaultError")}>
          </umb-error-layout>` : n`
        <umb-new-password-layout
          @submit=${Le(this, X, Je)}
          is-invite
          .userId=${h(this, D)}
          .state=${this.state}
          .error=${this.error}></umb-new-password-layout>`;
  }
};
N = /* @__PURE__ */ new WeakMap();
D = /* @__PURE__ */ new WeakMap();
w = /* @__PURE__ */ new WeakMap();
X = /* @__PURE__ */ new WeakSet();
Ge = async function() {
  const t = new URLSearchParams(window.location.search), e = t.get("inviteCode"), r = t.get("userId");
  if (!e || !r) {
    this.error = "The invite has expired or is invalid", this.loading = !1;
    return;
  }
  if (!h(this, w)) return;
  de(this, N, e), de(this, D, r);
  const a = await h(this, w).validateInviteCode(h(this, N), h(this, D));
  if (a.error) {
    this.error = a.error, this.loading = !1;
    return;
  }
  if (!a.passwordConfiguration) {
    this.error = "There is no password configuration for the invite code. Please contact the administrator.", this.loading = !1;
    return;
  }
  h(this, w).passwordConfiguration = a.passwordConfiguration, this.loading = !1;
};
Je = async function(t) {
  t.preventDefault();
  const e = t.detail.password;
  if (!e || !h(this, w)) return;
  this.state = "waiting";
  const r = await h(this, w).newInvitedUserPassword(e, h(this, N), h(this, D));
  if (r.error) {
    this.error = r.error, this.state = "failed";
    return;
  }
  this.state = "success", window.location.href = h(this, w).returnPath;
};
ae([
  l()
], H.prototype, "state", 2);
ae([
  l()
], H.prototype, "error", 2);
ae([
  l()
], H.prototype, "loading", 2);
H = ae([
  p("umb-invite-page")
], H);
var Xt = Object.defineProperty, Qt = Object.getOwnPropertyDescriptor, Ze = (t) => {
  throw TypeError(t);
}, I = (t, e, r, a) => {
  for (var o = a > 1 ? void 0 : a ? Qt(e, r) : e, s = t.length - 1, i; s >= 0; s--)
    (i = t[s]) && (o = (a ? i(e, r, o) : i(o)) || o);
  return a && o && Xt(e, r, o), o;
}, ve = (t, e, r) => e.has(t) || Ze("Cannot " + r), d = (t, e, r) => (ve(t, e, "read from private field"), r ? r.call(t) : e.get(t)), T = (t, e, r) => e.has(t) ? Ze("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Ye = (t, e, r, a) => (ve(t, e, "write to private field"), e.set(t, r), r), ue = (t, e, r) => (ve(t, e, "access private method"), r), x, v, S, Ke, we, Xe, ee, Qe, je;
let b = class extends m {
  constructor() {
    super(), T(this, S), this.usernameIsEmail = !1, this.allowPasswordReset = !1, this._loginError = "", this.supportPersistLogin = !1, T(this, x), T(this, v), T(this, we, async (t) => {
      if (t.preventDefault(), !d(this, v)) return;
      const e = t.target;
      if (!e) return;
      const r = new FormData(e), a = r.get("username"), o = r.get("password"), s = r.has("persist");
      if (!a || !o) {
        this._loginError = this.localize.term("auth_userFailedLogin"), this._loginState = "failed";
        return;
      }
      this._loginState = "waiting";
      const i = await d(this, v).login({
        username: a,
        password: o,
        persist: s
      });
      if (this._loginError = i.error || "", this._loginState = i.error ? "failed" : "success", i.status === 402) {
        d(this, v).isMfaEnabled = !0, i.twoFactorView && (d(this, v).twoFactorView = i.twoFactorView), i.twoFactorProviders && (d(this, v).mfaProviders = i.twoFactorProviders), this.dispatchEvent(new CustomEvent("umb-login-flow", { composed: !0, detail: { flow: "mfa" } }));
        return;
      }
      if (i.error)
        return;
      const q = d(this, v).returnPath;
      q && (location.href = q);
    }), T(this, ee, () => {
      d(this, x)?.requestSubmit();
    }), this.consumeContext(k, (t) => {
      Ye(this, v, t), this.supportPersistLogin = t.supportsPersistLogin;
    });
  }
  render() {
    return n`
      <header id="header">
        <h1 id="greeting">
          <umb-localize .key=${d(this, S, Xe)}>Welcome</umb-localize>
        </h1>
        <slot name="subheadline"></slot>
      </header>
      <slot @slotchange=${ue(this, S, Ke)}></slot>
      <div id="secondary-actions">
        ${j(
      this.supportPersistLogin,
      () => n`
            <uui-form-layout-item>
              <uui-checkbox
                name="persist"
                .label=${this.localize.term("auth_rememberMe")}>
                <umb-localize key="auth_rememberMe">Remember me</umb-localize>
              </uui-checkbox>
            </uui-form-layout-item>`
    )}
        ${j(
      this.allowPasswordReset,
      () => n`
              <button type="button" id="forgot-password" @click=${ue(this, S, je)}>
                <umb-localize key="auth_forgottenPassword">Forgotten password?</umb-localize>
              </button>`
    )}
      </div>
      <uui-button
        type="submit"
        id="umb-login-button"
        look="primary"
        @click=${d(this, ee)}
        .label=${this.localize.term("auth_login")}
        color="default"
        .state=${this._loginState}></uui-button>

      ${ue(this, S, Qe).call(this)}
    `;
  }
};
x = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
S = /* @__PURE__ */ new WeakSet();
Ke = async function() {
  Ye(this, x, this.slottedElements?.find((t) => t.id === "umb-login-form")), d(this, x) && (d(this, x).addEventListener("keypress", (t) => {
    t.key === "Enter" && d(this, ee).call(this);
  }), d(this, x).onsubmit = d(this, we));
};
we = /* @__PURE__ */ new WeakMap();
Xe = function() {
  return [
    "auth_greeting0",
    "auth_greeting1",
    "auth_greeting2",
    "auth_greeting3",
    "auth_greeting4",
    "auth_greeting5",
    "auth_greeting6"
  ][(/* @__PURE__ */ new Date()).getDay()];
};
ee = /* @__PURE__ */ new WeakMap();
Qe = function() {
  return !this._loginError || this._loginState !== "failed" ? z : n`<span class="text-error text-danger">${this._loginError}</span>`;
};
je = function() {
  this.dispatchEvent(new CustomEvent("umb-login-flow", { composed: !0, detail: { flow: "reset" } }));
};
b.styles = [
  $`
      :host {
        display: flex;
        flex-direction: column;
      }

      #header {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-space-5);
      }

      #header span {
        color: var(--uui-color-text-alt); /* TODO Change to uui color when uui gets a muted text variable */
        font-size: 14px;
      }

      #greeting {
        color: var(--uui-color-interactive);
        text-align: center;
        font-weight: 400;
        font-size: var(--header-font-size);
        margin: 0 0 var(--uui-size-layout-1);
        line-height: 1.2;
      }

      #umb-login-button {
        margin-top: var(--uui-size-space-4);
        width: 100%;
      }

      #forgot-password {
        cursor: pointer;
        background: none;
        border: 0;
        height: 1rem;
        color: var(--uui-color-text-alt); /* TODO Change to uui color when uui gets a muted text variable */
        gap: var(--uui-size-space-1);
        align-self: center;
        text-decoration: none;
        display: inline-flex;
        line-height: 1;
        font-size: 14px;
        font-family: var(--uui-font-family),sans-serif;
        margin-left: auto;
        margin-bottom: var(--uui-size-space-3);
      }

      #forgot-password:hover {
        color: var(--uui-color-interactive-emphasis);
      }

      .text-error {
        margin-top: var(--uui-size-space-4);
      }

      .text-danger {
        color: var(--uui-color-danger-standalone);
      }

      #secondary-actions {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    `
];
I([
  u({ type: Boolean, attribute: "username-is-email" })
], b.prototype, "usernameIsEmail", 2);
I([
  mt({ flatten: !0 })
], b.prototype, "slottedElements", 2);
I([
  u({ type: Boolean, attribute: "allow-password-reset" })
], b.prototype, "allowPasswordReset", 2);
I([
  l()
], b.prototype, "_loginState", 2);
I([
  l()
], b.prototype, "_loginError", 2);
I([
  l()
], b.prototype, "supportPersistLogin", 2);
b = I([
  p("umb-login-page")
], b);
async function jt(t) {
  if (t.endsWith(".html"))
    return fetch(t).then((r) => r.text());
  const e = await import(
    /* @vite-ignore */
    t
  );
  if (!e.default) throw new Error("No default export found");
  return new e.default();
}
function er(t) {
  return typeof t == "string" ? n`${ft(t)}` : t;
}
var tr = Object.defineProperty, rr = Object.getOwnPropertyDescriptor, et = (t) => {
  throw TypeError(t);
}, oe = (t, e, r, a) => {
  for (var o = a > 1 ? void 0 : a ? rr(e, r) : e, s = t.length - 1, i; s >= 0; s--)
    (i = t[s]) && (o = (a ? i(e, r, o) : i(o)) || o);
  return a && o && tr(e, r, o), o;
}, be = (t, e, r) => e.has(t) || et("Cannot " + r), E = (t, e, r) => (be(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Se = (t, e, r) => e.has(t) ? et("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), ar = (t, e, r, a) => (be(t, e, "write to private field"), e.set(t, r), r), Oe = (t, e, r) => (be(t, e, "access private method"), r), f, Q, tt, rt;
let M = class extends m {
  constructor() {
    super(), Se(this, Q), this.providers = [], this.error = null, Se(this, f), this.consumeContext(k, (t) => {
      ar(this, f, t), Oe(this, Q, tt).call(this);
    });
  }
  renderDefaultView() {
    return n`
      <uui-form>
        <form id="LoginForm" @submit=${Oe(this, Q, rt)} novalidate>
          <header id="header">
            <h1>
              <umb-localize key="auth_mfaTitle">One last step</umb-localize>
            </h1>

            <p>
              <umb-localize key="auth_mfaText">
                You have enabled 2-factor authentication and must verify your identity.
              </umb-localize>
            </p>
          </header>

          <!-- if there's only one provider active, it will skip this step! -->
          ${this.providers.length > 1 ? n`
              <uui-form-layout-item>
                <uui-label id="providerLabel" for="provider" slot="label" required>
                  <umb-localize key="auth_mfaMultipleText">Please choose a 2-factor provider</umb-localize>
                </uui-label>
                <uui-select label=${this.localize.term("auth_mfaMultipleText")} id="provider" name="provider" .options=${this.providers} aria-required="true" required></uui-select>
              </uui-form-layout-item>
            ` : z}

          <uui-form-layout-item>
            <uui-label id="mfacodeLabel" for="mfacode" slot="label" required>
              <umb-localize key="auth_mfaCodeInput">Verification code</umb-localize>
            </uui-label>

            <uui-input
              autofocus
              id="mfacode"
              type="text"
              name="token"
              inputmode="numeric"
              autocomplete="one-time-code"
              placeholder=${this.localize.term("auth_mfaCodeInputHelp")}
              aria-required="true"
              required
              required-message=${this.localize.term("auth_mfaCodeInputHelp")}
              label=${this.localize.term("auth_mfaCodeInput")}
              style="width:100%;">
            </uui-input>
          </uui-form-layout-item>

          ${this.error ? n` <span class="text-danger">${this.error}</span> ` : z}

          <uui-button
            .state=${this.buttonState}
            button-style="success"
            look="primary"
            color="default"
            label=${this.localize.term("auth_validate")}
            type="submit"></uui-button>
        </form>
      </uui-form>

      <umb-back-to-login-button style="margin-top: var(--uui-size-space-6)"></umb-back-to-login-button>
    `;
  }
  async renderCustomView() {
    const t = E(this, f)?.twoFactorView;
    if (!t) return z;
    try {
      const e = await jt(t);
      return typeof e == "object" && (e.providers = this.providers.map((r) => r.value), e.returnPath = E(this, f)?.returnPath ?? ""), er(e);
    } catch (e) {
      const r = e instanceof Error ? e.message : "Unknown error";
      return console.group("[MFA login] Failed to load custom view"), console.log("Element reference", this), console.log("Custom view", t), console.error("Failed to load custom view:", e), console.groupEnd(), n`<span class="text-danger">${r}</span>`;
    }
  }
  render() {
    return E(this, f)?.twoFactorView ? gt(this.renderCustomView(), n`
          <uui-loader-bar></uui-loader-bar>`) : this.renderDefaultView();
  }
};
f = /* @__PURE__ */ new WeakMap();
Q = /* @__PURE__ */ new WeakSet();
tt = function() {
  this.providers = E(this, f)?.mfaProviders.map((t) => ({ name: t, value: t, selected: !1 })) ?? [], this.providers.length ? this.providers[0].selected = !0 : this.error = "Error: No providers available";
};
rt = async function(t) {
  if (t.preventDefault(), !E(this, f)) return;
  this.error = null;
  const e = t.target;
  if (!e) return;
  const r = e.elements.namedItem("mfacode");
  if (r && (r.error = !1, r.errorMessage = "", r.setCustomValidity("")), !e.checkValidity()) return;
  const a = new FormData(e);
  let o = a.get("provider");
  if (!o) {
    if (!this.providers.length) {
      this.error = "No providers available";
      return;
    }
    o = this.providers[0].value;
  }
  if (!o) {
    this.error = "No provider selected";
    return;
  }
  const s = a.get("token");
  this.buttonState = "waiting";
  const i = await E(this, f).validateMfaCode(s, o);
  if (i.error) {
    r ? (r.error = !0, r.errorMessage = i.error) : this.error = i.error, this.buttonState = "failed";
    return;
  }
  this.buttonState = "success";
  const q = E(this, f).returnPath;
  q && (location.href = q);
};
M.styles = [
  $`
      #header {
        text-align: center;
      }

      #header h1 {
        font-weight: 400;
        font-size: var(--header-secondary-font-size);
        color: var(--uui-color-interactive);
        line-height: 1.2;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-layout-2);
      }

      #provider {
        width: 100%;
      }

      uui-form-layout-item {
        margin: 0;
      }

      uui-input,
      uui-input-password {
        width: 100%;
        height: var(--input-height);
        border-radius: var(--uui-border-radius);
      }

      uui-input {
        width: 100%;
      }

      uui-button {
        width: 100%;
        --uui-button-padding-top-factor: 1.5;
        --uui-button-padding-bottom-factor: 1.5;
      }

      .text-danger {
        color: var(--uui-color-danger-standalone);
      }
    `
];
oe([
  l()
], M.prototype, "providers", 2);
oe([
  l()
], M.prototype, "buttonState", 2);
oe([
  l()
], M.prototype, "error", 2);
M = oe([
  p("umb-mfa-page")
], M);
var or = Object.defineProperty, ir = Object.getOwnPropertyDescriptor, at = (t) => {
  throw TypeError(t);
}, L = (t, e, r, a) => {
  for (var o = a > 1 ? void 0 : a ? ir(e, r) : e, s = t.length - 1, i; s >= 0; s--)
    (i = t[s]) && (o = (a ? i(e, r, o) : i(o)) || o);
  return a && o && or(e, r, o), o;
}, ye = (t, e, r) => e.has(t) || at("Cannot " + r), R = (t, e, r) => (ye(t, e, "read from private field"), e.get(t)), Ue = (t, e, r) => e.has(t) ? at("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), sr = (t, e, r, a) => (ye(t, e, "write to private field"), e.set(t, r), r), he = (t, e, r) => (ye(t, e, "access private method"), r), C, W, ot, it, st;
let P = class extends m {
  constructor() {
    super(), Ue(this, W), this.state = void 0, this.page = "new", this.error = "", this.userId = "", this.resetCode = "", this.loading = !0, Ue(this, C), this.consumeContext(k, (t) => {
      sr(this, C, t), he(this, W, ot).call(this);
    });
  }
  render() {
    return this.loading ? n`<uui-loader-bar></uui-loader-bar>` : he(this, W, st).call(this);
  }
};
C = /* @__PURE__ */ new WeakMap();
W = /* @__PURE__ */ new WeakSet();
ot = async function() {
  const t = new URLSearchParams(window.location.search), e = t.get("resetCode"), r = t.get("userId");
  if (!r || !e) {
    this.page = "error", this.loading = !1;
    return;
  }
  if (!R(this, C)) return;
  this.resetCode = e, this.userId = r;
  const a = await R(this, C).validatePasswordResetCode(this.userId, this.resetCode);
  if (a.error) {
    this.page = "error", this.error = a.error, this.loading = !1;
    return;
  }
  if (!a.passwordConfiguration) {
    this.page = "error", this.error = "Password configuration is missing", this.loading = !1;
    return;
  }
  R(this, C).passwordConfiguration = a.passwordConfiguration, this.loading = !1;
};
it = async function(t) {
  if (t.preventDefault(), this.error = "", !R(this, C)) return;
  const e = t.detail.password;
  this.state = "waiting";
  const r = await R(this, C).newPassword(e, this.resetCode, this.userId);
  if (r.error) {
    this.state = "failed", this.error = r.error;
    return;
  }
  this.state = "success", this.page = "done";
};
st = function() {
  switch (this.page) {
    case "new":
      return n`
          <umb-new-password-layout
            @submit=${he(this, W, it)}
            .userId=${this.userId}
            .state=${this.state}
            .error=${this.error}></umb-new-password-layout>`;
    case "error":
      return n`
          <umb-error-layout
            header=${this.localize.term("auth_error")}
            message=${this.error ?? this.localize.term("auth_defaultError")}>
          </umb-error-layout>`;
    case "done":
      return n`
          <umb-confirmation-layout
            header=${this.localize.term("auth_success")}
            message=${this.localize.term("auth_setPasswordConfirmation")}>
          </umb-confirmation-layout>`;
  }
};
L([
  l()
], P.prototype, "state", 2);
L([
  l()
], P.prototype, "page", 2);
L([
  l()
], P.prototype, "error", 2);
L([
  l()
], P.prototype, "userId", 2);
L([
  l()
], P.prototype, "resetCode", 2);
L([
  l()
], P.prototype, "loading", 2);
P = L([
  p("umb-new-password-page")
], P);
var nr = Object.defineProperty, ur = Object.getOwnPropertyDescriptor, nt = (t) => {
  throw TypeError(t);
}, _e = (t, e, r, a) => {
  for (var o = a > 1 ? void 0 : a ? ur(e, r) : e, s = t.length - 1, i; s >= 0; s--)
    (i = t[s]) && (o = (a ? i(e, r, o) : i(o)) || o);
  return a && o && nr(e, r, o), o;
}, ut = (t, e, r) => e.has(t) || nt("Cannot " + r), lr = (t, e, r) => (ut(t, e, "read from private field"), r ? r.call(t) : e.get(t)), De = (t, e, r) => e.has(t) ? nt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), ce = (t, e, r) => (ut(t, e, "access private method"), r), Ce, B, lt, dt, ht;
let G = class extends m {
  constructor() {
    super(...arguments), De(this, B), this.resetCallState = void 0, this.error = "", De(this, Ce, async (t) => {
      t.preventDefault();
      const e = t.target;
      if (!e || !e.checkValidity()) return;
      const a = new FormData(e).get("email");
      this.resetCallState = "waiting";
      const s = await (await this.getContext(k)).resetPassword(a);
      this.resetCallState = s.error ? "failed" : "success", this.error = s.error || "";
    });
  }
  render() {
    return this.resetCallState === "success" ? ce(this, B, ht).call(this) : ce(this, B, lt).call(this);
  }
};
Ce = /* @__PURE__ */ new WeakMap();
B = /* @__PURE__ */ new WeakSet();
lt = function() {
  return n`
      <uui-form>
        <form id="LoginForm" name="login" @submit="${lr(this, Ce)}">
          <header id="header">
            <h1>
              <umb-localize key="auth_forgottenPassword">Forgotten password?</umb-localize>
            </h1>
            <span>
							<umb-localize key="auth_forgottenPasswordInstruction">
                An email will be sent to the address specified with a link to reset your password
              </umb-localize>
						</span>
          </header>

          <uui-form-layout-item>
            <uui-label for="email" slot="label" required>
              <umb-localize key="auth_email">Email</umb-localize>
            </uui-label>
            <uui-input
              type="email"
              id="email"
              name="email"
              .label=${this.localize.term("auth_email")}
              required
              required-message=${this.localize.term("auth_required")}>
            </uui-input>
          </uui-form-layout-item>

          ${ce(this, B, dt).call(this)}

          <uui-button
            type="submit"
            .label=${this.localize.term("auth_submit")}
            look="primary"
            color="default"
            .state=${this.resetCallState}></uui-button>
        </form>
      </uui-form>

      <umb-back-to-login-button style="margin-top: var(--uui-size-space-6)"></umb-back-to-login-button>
    `;
};
dt = function() {
  return !this.error || this.resetCallState !== "failed" ? z : n`<span class="text-danger">${this.error}</span>`;
};
ht = function() {
  return n`
      <umb-confirmation-layout
        header=${this.localize.term("auth_forgottenPassword")}
        message=${this.localize.term("auth_requestPasswordResetConfirmation")}>
      </umb-confirmation-layout>
    `;
};
G.styles = [
  $`
      #header {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-space-5);
      }

      #header span {
        color: var(--uui-color-text-alt); /* TODO Change to uui color when uui gets a muted text variable */
        font-size: 14px;
      }

      #header h1 {
        margin: 0;
        font-weight: 400;
        font-size: var(--header-secondary-font-size);
        color: var(--uui-color-interactive);
        line-height: 1.2;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-layout-2);
      }

      uui-form-layout-item {
        margin: 0;
      }

      uui-input,
      uui-input-password {
        width: 100%;
        height: var(--input-height);
        border-radius: var(--uui-border-radius);
      }

      uui-input {
        width: 100%;
      }

      uui-button {
        width: 100%;
        --uui-button-padding-top-factor: 1.5;
        --uui-button-padding-bottom-factor: 1.5;
      }

      #resend {
        display: inline-flex;
        font-size: 14px;
        align-self: center;
        gap: var(--uui-size-space-1);
      }

      #resend a {
        color: var(--uui-color-selected);
        font-weight: 600;
        text-decoration: none;
      }

      #resend a:hover {
        color: var(--uui-color-interactive-emphasis);
      }
    `
];
_e([
  l()
], G.prototype, "resetCallState", 2);
_e([
  l()
], G.prototype, "error", 2);
G = _e([
  p("umb-reset-password-page")
], G);
var dr = Object.getOwnPropertyDescriptor, ct = (t) => {
  throw TypeError(t);
}, hr = (t, e, r, a) => {
  for (var o = a > 1 ? void 0 : a ? dr(e, r) : e, s = t.length - 1, i; s >= 0; s--)
    (i = t[s]) && (o = i(o) || o);
  return o;
}, cr = (t, e, r) => e.has(t) || ct("Cannot " + r), pr = (t, e, r) => e.has(t) ? ct("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), mr = (t, e, r) => (cr(t, e, "access private method"), r), pe, pt;
let me = class extends m {
  constructor() {
    super(...arguments), pr(this, pe);
  }
  render() {
    return n`
			<button type="button" @click=${mr(this, pe, pt)}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
				</svg>
				<span><umb-localize key="auth_returnToLogin">Return to login form</umb-localize></span>
			</button>
		`;
  }
};
pe = /* @__PURE__ */ new WeakSet();
pt = function() {
  this.dispatchEvent(new CustomEvent("umb-login-flow", { composed: !0, detail: { flow: "login" } }));
};
me.styles = [
  $`
			:host {
				display: flex;
				align-items: center;
				justify-content: center;
			}
			button {
				cursor: pointer;
				background: none;
				border: 0;
				height: 1rem;
				color: var(--uui-color-text-alt); /* TODO Change to uui color when uui gets a muted text variable */
				gap: var(--uui-size-space-1);
				align-self: center;
				text-decoration: none;
				display: inline-flex;
				line-height: 1;
				font-size: 14px;
				font-family: var(--uui-font-family),sans-serif;
			}
			button svg {
				width: 1rem;
			}
			button:hover {
				color: var(--uui-color-interactive-emphasis);
			}
		`
];
me = hr([
  p("umb-back-to-login-button")
], me);
export {
  k as UMB_AUTH_CONTEXT,
  It as UmbAuthContext,
  O as UmbAuthLayoutElement,
  Lt as UmbSlimBackofficeController
};
//# sourceMappingURL=login.js.map
