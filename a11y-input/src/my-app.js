/* eslint-disable class-methods-use-this */
// eslint-disable-next-line no-unused-vars
import { LitElement, html, css } from "lit-element";

export class MyApp extends LitElement {
  // content placeholder

  render() {
    return html`
      <h1>My Filter App</h1>
      <a11y-input></a11y-input>
    `;
  }
}

customElements.define("my-app", MyApp);
