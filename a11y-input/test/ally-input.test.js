/* eslint-disable no-unused-expressions */

/**
 * a11y-input.test.js
 */

import { html, fixture, expect } from '@open-wc/testing';

import '../src/ally-input';

/**
 * @typedef {import('../src/ally-input.js').A11yInput} A11yInput
 */

describe('a11y input', () => {
  it('has by default an empty string as label', async () => {
    const el = /** @type {A11yInput} */ (await fixture('<a11y-input></a11y-input>'));
    expect(el.label).to.equal('');
  });
});

/**
 * Testing Shadow DOM
 */
describe('a11y input', () => {
  it(`has a static Shadow DOM`, async () => {
    const el = /** @type {A11yInput} */ (await fixture(html`
      <a11y-input></a11y-input>
    `));

    // ref: @open-wc chai plugin https://open-wc.org/testing/semantic-dom-diff.html
    expect(el).shadowDom.to.equal(`
      <slot name="label"></slot>
      <slot name="input"></slot>
    `);
  });
});

/**
 * Testing Light DOM
 */
describe('a11y input', () => {
  it('has 1 input and 1 label in the Light DOM', async () => {
    const el = /** @type {A11yInput} */ (await fixture(html`
      <a11y-input .label=${'foo'}></a11y-input>
    `));

    expect(el).lightDom.to.equal(`
      <label slot="label">foo</label>
      <input slot="input">
    `);
  });
});
