import {html, LitElement} from 'lit'
import {customElement} from 'lit/decorators.js'
import {layoutStyles} from "./styles.ts";


@customElement('prf-content')
export class Content extends LitElement {
  static styles = [layoutStyles]

  render() {
    return html`
      <main class="container">
        <div class="wrapper">
          <slot></slot>
        </div>
      </main>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'prf-content': Content
  }
}
