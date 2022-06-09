/// <reference path="../support/index.d.ts" />

describe('Cypress TS', () => {
  it.skip('should go to Google', () => {
    cy.google()
  })

  it("should visit my personal website", () => {
    cy.visit("https://marcosdev.me/")

    cy.findByRole("heading", { name: /marcos andre/i }).should("exist")

    cy.contains("Lembrete").should("exist").click();
  })
})
