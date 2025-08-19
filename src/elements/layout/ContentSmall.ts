import {css, html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {layoutStyles} from "./styles.ts";

@customElement("prf-content-small")
export class ContentSmall extends LitElement {
  static styles = [
    layoutStyles,
    css`
      .content {
        gap: 1rem;
      }
    `,
  ];

  render() {
    document.getElementById('prf')?.classList.remove('hidden')
    return html`
      <main class="container">
        <div class="wrapper-small content">
          <slot></slot>
        </div>
      </main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "prf-content-small": ContentSmall;
  }
}
