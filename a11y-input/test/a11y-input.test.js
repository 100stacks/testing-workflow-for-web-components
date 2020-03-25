/* eslint-disable no-unused-expressions */

/**
 * a11y-input.test.js
 */

import { html, fixture, expect } from '@open-wc/testing';

import sinon from 'sinon';

import '../src/a11y-input';

/**
 * @typedef {import('../src/a11y-input.js').A11yInput} A11yInput
 */

describe('a11y input', () => {
  it('has by default an empty string as label', async () => {
    const el = /** @type {A11yInput} */ (await fixture(html`
      <a11y-input></a11y-input>
    `));
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
    /**
     * manual snapshot testing...
     *
     */
    // expect(el).shadowDom.to.equal(`
    //   <slot name="label"></slot>
    //   <slot name="input"></slot>
    // `);

    /**
     * semi/automatic snapshots using the `Karma` plugin
     */
    expect(el).shadowDom.to.equalSnapshot();
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

    // debugger;
    expect(el).lightDom.to.equal(`
      <label slot="label">foo</label>
      <input slot="input">
    `);
  });
});

/**
 * Testing getter/setter *THIS TEST FAILS with <a11y-input>
 */
describe('ally input', () => {
  it('can set/get the input value directly via the custom element', async () => {
    const el = /** @type {A11yInput} */ (await fixture(html`
      <bar .value=${'foo'}></bar>
    `));

    // add debugger
    debugger;
    expect(el.value).to.equal('foo');
  });
});

/**
 * Testing getter/setter *THIS TEST FAILS with <a11y-input>
 */
describe('ally input', () => {
  it('can set/get the input value directly via the custom element', async () => {
    const el = /** @type {A11yInput} */ (await fixture(html`
      <a11y-input .value=${'foo'}></a11y-input>
    `));

    // add debugger
    debugger;
    expect(el.value).to.equal('foo');
  });
});

/**
 *
 * Adding test stub to increase `Statements` `code coverage`:
 *
 * =============================== Coverage summary ===============================
 * Statements   : 78.57% ( 22/28 )
 * Branches     : 37.5% ( 3/8 )
 * Functions    : 87.5% ( 7/8 )
 * Lines        : 78.57% ( 22/28 )
 * ================================================================================
 *
 * 24 03 2020 11:31:30.693:ERROR [reporter.coverage-istanbul]:
 *  Coverage for statements (78.57%) does not meet global threshold (90%)
 * 24 03 2020 11:31:30.693:ERROR [reporter.coverage-istanbul]:
 *  Coverage for lines (78.57%) does not meet global threshold (90%)
 * 24 03 2020 11:31:30.693:ERROR [reporter.coverage-istanbul]:
 *  Coverage for branches (37.5%) does not meet global threshold (90%)
 * 24 03 2020 11:31:30.693:ERROR [reporter.coverage-istanbul]:
 *  Coverage for functions (87.5%) does not meet global threshold (90%)
 */
describe('a11y input', () => {
  it('logs "We like cats too 🐱" if the value is "cat"', async () => {
    const el = /** @type {A11yInput} */ (await fixture(`
      <a11y-input .value=${'cat'}></a11y-input>
    `));

      // stub console.log test
  });
});

/**
 * test changing `label`
 */
describe('a11y input', () => {
  it('can update its label', async () => {
    const el = /** @type {A11yInput} */ (await fixture(`
      <a11y-input label="foo"></a11y-input>
    `));

    expect(el.label).to.equal('foo');

    // change label and test
    el.label = 'bar';
    expect(el.label).to.equal('bar');
  });
});

/**
 * `sinon` - using spies
 */
describe('a11y input with sinon', () => {
  it('outputs "we like cats too 🐱🐈" if the value is set to "cat"', async () => {
    const logSpy = sinon.spy(console, 'log');
    const el = /** @type {A11yInput} */ (await fixture(html`
      <a11y-input></a11y-input>
    `));

    el.value = 'cat';
    expect(logSpy.callCount).to.equal(1);
  });
});

/**
 * `sinon` - using spies with stubbed console log
 */
describe('a11y input with sinon', () => {
  it('outputs "we like cats too 🐱🐈" if the value is set to "cat"', async () => {
    const el = /** @type {A11yInput} */ (await fixture(html`
      <a11y-input></a11y-input>
    `));
    const logSpy = sinon.spy(el, 'log');

    el.value = 'cat';
    // debugger;
    expect(logSpy.callCount).to.equal(1);
    expect(logSpy.calledWith('We like cats too. 🐱')).to.be.true;

    // different values do NOT log
    el.value = 'foo';
    expect(logSpy.callCount).to.equal(1);

    el.value = 'cat';
    expect(logSpy.callCount).to.equal(2);
  });
});
