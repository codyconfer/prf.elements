import {html, LitElement} from 'lit'
import {customElement} from 'lit/decorators.js'


@customElement('prf-nav')
export class Nav extends LitElement {
  static styles = []

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
