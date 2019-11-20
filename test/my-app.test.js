/* eslint-disable no-unused-expressions */
import { html, fixture, expect } from '@open-wc/testing';

import '../src/my-app.js';

/**
 * my-app.test.js
 */

 /**
  * @typedef { import('../src/my-app.js').MyApp } MyApp
  */
 describe('My Filter App', () => {
   it('has a heading and a search field', async () => {
     const el = /** @type {MyApp} */ (await fixture(html`
       <my-app .label=${'foo'}></my-app>
     `));

    //  expect(el).shadowDom.to.equal(`
    //     <h1>My Filter App Foo 😳</h1>
    //     <a11y-input></a11y-input>
    //  `, {
    //    ignoreChildren: ['a11y-input-foobar']
    //  });
    expect(el).shadowDom.to.equalSnapshot();
   });
 });
