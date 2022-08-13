/// <reference path="../support/index.d.ts" />

describe.skip("First examples of Cypress", () => {
  it("should go to Google", () => {
    cy.google()
  })

  it("should visit my personal website", () => {
    cy.visit("https://marcosdev.me/")

    cy.findByRole("heading", { name: /marcos andre/i }).should("exist")

    cy.contains("Lembrete").should("exist").click();
  })
})
