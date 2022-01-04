describe("숫자야구", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5501/number-baseball.html");
  });

  it("test", () => {
    cy.get("#input").should("have.text", "");
    cy.get("form").submit();
  });
});
