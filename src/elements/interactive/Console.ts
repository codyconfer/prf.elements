import {html, LitElement} from 'lit'
import {customElement} from 'lit/decorators.js'


@customElement('prf-console')
export class Console extends LitElement {
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
    'prf-console': Console
  }
}
