import {html, LitElement} from 'lit'
import {customElement} from 'lit/decorators.js'


@customElement('prf-prompt')
export class Prompt extends LitElement {
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
    'prf-prompt': Prompt
  }
}
