import { UmbElementMixin as a } from "@umbraco-cms/backoffice/element-api";
import { LitElement as l, html as r, css as d, customElement as v } from "@umbraco-cms/backoffice/external/lit";
var m = Object.defineProperty, p = Object.getOwnPropertyDescriptor, g = (s, o, t, i) => {
  for (var e = i > 1 ? void 0 : i ? p(o, t) : o, u = s.length - 1, c; u >= 0; u--)
    (c = s[u]) && (e = (i ? c(o, t, e) : c(e)) || e);
  return i && e && m(o, t, e), e;
};
const h = "/App_Plugins/uSync/img/usync-complete.png";
let n = class extends a(l) {
  render() {
    return r`
			<umb-body-layout>
				<div class="addon-view">
					<div>
						<div class="header">
							<img src=${h} />
							<h1>uSync Complete</h1>
							<p>
								uSync Complete gives you total control over your Umbraco settings and
								content.
							</p>
						</div>

						<div class="logos">
							<div class="logo">
								<uui-icon name="icon-shift"></uui-icon>
								<h4>Publish</h4>
							</div>
							<div class="logo">
								<uui-icon name="icon-notepad"></uui-icon>
								<h4>content</h4>
							</div>
							<div class="logo">
								<uui-icon name="icon-compress"></uui-icon>
								<h4>export</h4>
							</div>
							<div class="logo">
								<uui-icon name="icon-connection"></uui-icon>
								<h4>snapshot</h4>
							</div>
							<div class="logo">
								<uui-icon name="icon-undo"></uui-icon>
								<h4>restore</h4>
							</div>
							<div class="logo">
								<uui-icon name="icon-operator"></uui-icon>
								<h4>people</h4>
							</div>
						</div>

						<div class="cta">
							<uui-button
								href="https://jumoo.co.uk/uSync/complete/"
								target="_blank"
								color="positive"
								look="primary"
								label="Find out more"></uui-button>
						</div>
					</div>
				</div>
			</umb-body-layout>
		`;
  }
};
n.styles = d`
		umb-body-layout {
			// background: linear-gradient(#e3e3f1,#f6f4f4);
			background: linear-gradient(var(--uui-color-background), var(--uui-color-border));
		}

		.addon-view {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
		}

		.header,
		.cta {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.header {
			font-size: larger;
			margin-bottom: var(--uui-size-space-6);
		}

		.logos {
			display: flex;
			justify-content: space-between;
			font-size: var(--uui-type-h3-size);
		}

		.logo {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: var(--uui-size-space-2) var(--uui-size-space-6);
			color: var(--uui-color-text-alt);
		}

		.cta {
			margin-bottom: var(--uui-size-space-6);
		}

		uui-button {
			font-size: var(--uui-type-h4-size);
		}
	`;
n = g([
  v("usync-addons-view")
], n);
const b = n;
export {
  b as default,
  n as uSyncAddOnsElement
};
//# sourceMappingURL=addons.element-BJZi68Ni.js.map
