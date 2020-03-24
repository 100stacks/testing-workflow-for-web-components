// eslint-disable-next-line no-unused-vars
import { LitElement, html, css } from 'lit-element';

export class A11yInput extends LitElement {
  static get properties () {
    return {
      label: { type: String },
      value: { type: String },
    };
  }

  constructor () {
    super();
    this.label = '';
    this.value = ''; // lesson 6 - debug in browser
    /** @type {HTMLLabelElement} */
    this.labelEl = null;
    /** @type {HTMLInputElement} */
    this.inputEl = null;
  }

  /**
   * Anti-Pattern for testing the `Light DOM`,
   * though useful for testing a11y 🤷‍♂️😳
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
  }

  update(changedProperties) {
    super.update(changedProperties);

    if (changedProperties.has('value')) {
      if (this.value === 'cat') {
        console.log('We like cats too. 🐱');
      }

      // debugger;
      this.inputEl.value = this.value;
    }
  }

  /**
   * Adding getter/setter will change `code coverage` report.
   */
  get value () {
    return this.inputEl.value;
  }

  set value (newValue) {
    // debugger; // lesson 6 - debugging TypeError bug
    if (newValue === 'cat') {
      console.log('We like cats too. 🐱');
    }

    if (this.inputEl) {
      this.inputEl.value = newValue;
    }
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
