import { LitElement, html, css } from 'lit-element';

export class A11yInput extends LitElement {

  static get properties () {
    return {
      label: { type: String },
    };
  }

  constructor () {
    super();
    this.label = '';
  }

  // eslint-disable-next-line class-methods-use-this
  render () {
    return html`
      <slot name="label"></slot>
      <slot name="input"></slot>
    `;
  }
}

customElements.define('a11y-input', A11yInput);
