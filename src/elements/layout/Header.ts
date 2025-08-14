import {html, LitElement} from 'lit'
import {customElement} from 'lit/decorators.js'
import {layoutStyles} from "./styles.ts";


@customElement('prf-header')
export class Header extends LitElement {
  static styles = [layoutStyles]

  render() {
    return html`
      <header class="container">
        <div class="wrapper">
          <slot></slot>
        </div>
      </header>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'prf-header': Header
  }
}
