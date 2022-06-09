/// <reference path="../support/index.d.ts" />

describe("Home Page", () => {
  it("should visit homepage of project and find logo and heading", () => {
    cy.visit("/");
  
    cy.findByAltText(/Imagem de um átomo./i).should("exist")
    cy.findByRole("heading", { name: /next.js boilerplate/i }).should("exist")
  })
})