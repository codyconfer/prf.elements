import {html, LitElement} from 'lit'
import {customElement} from 'lit/decorators.js'


@customElement('prf-drawer')
export class Drawer extends LitElement {
  static styles = []

  render() {
    return html`
      <div>
        <slot></slot>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'prf-drawer': Drawer
  }
}
