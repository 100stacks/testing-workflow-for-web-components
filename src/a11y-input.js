/**
 * a11y-input.js
 */
import { LitElement, html, css } from 'lit-element';

export class A11yInput extends LitElement {
  // Init class
  static get properties () {
    return {
      label: { type: String },
    };
  };

  constructor () {
    super();
    this.label = '';
  };

  // Add Shadow DOM
  render () {
    return html`
      <slot name="label"></slot>
      <slot name="input"></slot>
    `;
  };

  /**
   * Light DOM
   */
  connectedCallback () {
    super.connectedCallback();
    this.labelEl = document.createElement('label');
    this.labelEl.innerText = this.label;
    this.labelEl.setAttribute('slot', 'label');
    this.appendChild(this.labelEl);

    this.inputEl = document.createElement('input');
    this.inputEl.setAttribute('slot', 'input');
    this.appendChild(this.inputEl);
  };
};

customElements.define('a11y-input', A11yInput);
