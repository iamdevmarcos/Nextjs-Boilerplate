/// <reference path="../support/index.d.ts" />

describe("Home Page", () => {
  it("should visit homepage of project and find logo and heading", () => {
    cy.visit("/");

    cy.findByText(/TypeScript, React.js, Next.js e Styled Components/i).should("exist")
    cy.findByRole("heading", { name: /Next.js Boilerplate/i }).should("exist")
  })
})
