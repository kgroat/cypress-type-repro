import { html } from 'lit';

import './component';

describe('component', () => {
  it('should accept typing', () => {
    const inputValue = 'I will not work';
    cy.mount(html`<my-component></my-component>`)
    cy.get('input').focus().type(inputValue);
    cy.get('input').should('have.prop', 'value', inputValue);
  });
});
