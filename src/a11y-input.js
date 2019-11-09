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
};

customElements.define('a11y-input', A11yInput);
