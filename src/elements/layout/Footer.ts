import {html, LitElement} from 'lit'
import {customElement} from 'lit/decorators.js'
import {layoutStyles} from "./styles.ts";


@customElement('prf-footer')
export class Footer extends LitElement {
  static styles = [layoutStyles]

  render() {
    return html`
      <footer class="container">
        <div class="wrapper">
          <slot></slot>
        </div>
      </footer>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'prf-footer': Footer
  }
}
