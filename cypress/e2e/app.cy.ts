describe("Navigation", () => {
  it("should navigate to the learn page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Find a link with an href attribute containing "about" and click it
    cy.get('[data-test="learn"]').invoke("removeAttr", "target").click();
    cy.origin("https://nextjs.org/", () => {
      // The new url should include "/learn"
      cy.url().should("include", "/learn");

      // The new page should contain an h2 with "Introduction"
      cy.get("h2").contains("Introduction");
    });
  });
});

describe("Counter", () => {
  it("should navigate to the counter page", () => {
    cy.intercept("GET", "/api/name/akita").as("name");

    // Start from the index page
    cy.visit("http://localhost:3000/");

    cy.get('[data-test="counter"]').click();

    cy.url().should("include", "/counter");

    cy.wait("@name").should(({ request, response }) => {
      expect(request.url).to.match(/\/akita$/);
      expect(request.method).to.equal("GET");
      expect(response?.statusCode).to.equal(200);
    });

    cy.get('[data-test="count"]').contains("Count: 0");

    cy.get('[data-test="increment"]').click();

    cy.get('[data-test="count"]').contains("Count: 1");

    cy.get('[data-test="decrement"]').click();

    cy.get('[data-test="count"]').contains("Count: 0");
  });
});
