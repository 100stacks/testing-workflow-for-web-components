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
