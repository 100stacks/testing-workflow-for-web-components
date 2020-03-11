// eslint-disable-next-line no-unused-vars
import { LitElement, html, css } from 'lit-element';

export class A11yInput extends LitElement {
  static get properties() {
    return {
      label: { type: String },
    };
  }

  constructor() {
    super();
    this.label = '';
  }

  /**
   * Anti-Pattern for testing the `Light DOM`,
   * though useful for testing a11y 🤷‍♂️😳
   */
  connectedCallback() {
    super.connectedCallback();
    this.labelEl = document.createElement('label');
    this.labelEl.innerText = this.label;
    this.labelEl.setAttribute('slot', 'label');
    this.appendChild(this.labelEl);

    this.inputEl = document.createElement('input');
    this.inputEl.setAttribute('slot', 'input');
    this.appendChild(this.inputEl);
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`
      <slot name="label"></slot>
      <slot name="input"></slot>
    `;
  }
}

customElements.define('a11y-input', A11yInput);
