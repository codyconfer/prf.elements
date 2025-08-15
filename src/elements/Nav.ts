import {html, LitElement} from 'lit'
import {customElement} from 'lit/decorators.js'
import {layoutStyles} from "./layout/styles.ts";


@customElement('prf-nav')
export class Nav extends LitElement {
  static styles = [layoutStyles]

  render() {
    return html`
      <nav class="wrapper">
        <slot></slot>
      </nav>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'prf-nav': Nav
  }
}
