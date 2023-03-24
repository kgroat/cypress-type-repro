import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import styles from './component.scss?inline'

@customElement('my-component')
export class MyComponent extends LitElement {
  static styles = unsafeCSS(styles);

  @query('.popup') popup: HTMLDivElement;

  @property({ type: Boolean, reflect: true }) open = false;

  private async handleClick() {
    if (this.open) return;
    this.open = true;
    await this.updateComplete;
    this.popup.focus();
  }

  render() {
    return html`
      <input type='text' @click=${this.handleClick} />
      <div tabindex=${this.open ? 0 : -1} class=${classMap({ popup: true, open: this.open })}>
        <slot>I am a popup</slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-component': MyComponent;
  }
}
