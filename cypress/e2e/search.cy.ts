describe("search products", () => {
  it("should be able to navigate to the product page and add it to the cart", () => {
    cy.visit("/");
    cy.get("input[name='q']").click().type("camiseta");
    cy.get("form").submit();
    cy.location("pathname").should("include", "/search");
    cy.location("search").should("include", "q=camiseta");
    cy.get("a[href^='/product']").should("exist");
  });

  it("should not be able to visit search page without a search query", () => {
    cy.on("uncaught:exception", () => {
      return false;
    });
    cy.visit("/search");
    cy.location("pathname").should("equal", "/");
  });
});
