import {css, html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";

@customElement("typing-animation")
export class TypingAnimation extends LitElement {
  static styles = css`
    .typewriter {
      width: fit-content;
    }
  `;

  render() {
    return html`
      <div class="typewriter">
        <h1></h1>
      </div>
    `;
  }
}

@customElement("cursor-animation")
export class CursorAnimation extends LitElement {
  static styles = css`
    @keyframes blink-caret {
      from, to {
        border-color: transparent;
      }
      50% {
        border-color: var(--orange);
      }
    }

    .cursor {
      width: fit-content;
    }

    .cursor h1 {
      overflow: hidden;
      border-right: 0.15em solid var(--orange);
      white-space: nowrap;
      margin: 0;
      animation: blink-caret 1s step-end infinite;
    }
  `;

  render() {
    return html`
      <div class="cursor">
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
    "cursor-animation": CursorAnimation;
  }
}
