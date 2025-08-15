import {css, html, LitElement} from 'lit'
import {customElement} from 'lit/decorators.js'
import {layoutStyles} from "./styles.ts";


@customElement('prf-footer')
export class Footer extends LitElement {
  static styles = [
    layoutStyles,
    css`
      footer .wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
      }
    `]

  readonly year = new Date().getFullYear()

  render() {
    return html`
      <footer class="container">
        <div class="wrapper">
          <div>
            <slot></slot>
          </div>
          <div>
            &copy; ${this.year}
          </div>
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
