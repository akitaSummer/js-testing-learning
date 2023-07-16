import Counter from "./Counter";
/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

// Cypress Component Test
describe("<Counter />", () => {
  it("should render and display expected content", () => {
    cy.intercept("GET", "/api/name/akita", {
      data: { name: "akita" },
      statusCode: 200,
    }).as("name");

    cy.mount(<Counter />);

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

// Prevent TypeScript from reading file as legacy script
export {};
