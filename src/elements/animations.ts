import {css, html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";

@customElement("typing-animation")
export class TypingAnimation extends LitElement {
  static styles = css`
    @keyframes blink-caret {
      from,
      to {
        border-color: transparent;
      }
      50% {
        border-color: orange;
      }
    }

    .typewriter h1 {
      overflow: hidden;
      border-right: 0.15em solid orange;
      white-space: nowrap;
      margin: 0 auto;
      animation: blink-caret 0.75s step-end infinite;
    }
  `;

  render() {
    return html`
      <div class="typewriter">
        <h1>
          <slot></slot>
        </h1>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "typing-animation": TypingAnimation;
  }
}
