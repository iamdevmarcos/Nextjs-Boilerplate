/// <reference path="../support/index.d.ts" />

describe("Cypress TS", () => {
  it("should go to Google", () => {
    cy.google()
  })

  it("should visit homepage of project", () => {
    cy.visit("/");

    cy.findByAltText(/Imagem de um átomo./i).should("exist")
    cy.findByRole("heading", { name: /next.js boilerplate/i }).should("exist")
  })

  it.skip("should visit my personal website", () => {
    cy.visit("https://marcosdev.me/")

    cy.findByRole("heading", { name: /marcos andre/i }).should("exist")

    cy.contains("Lembrete").should("exist").click();
  })
})
