// load type definitions from Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
  /**
   * Custom command to visit google page
   * @example cy.google()
   */
  interface Chainable {
    google(): Chainable<Window>
  }
}