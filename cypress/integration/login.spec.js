
describe('Тест setInterval', () => {

  beforeEach(() => {
		cy.clock(Date.UTC(2021, 6, 2), ['Date']);
		cy.visit('http://localhost:8080/');
	});
	
  describe('Test', () => {
		it.only('asdasd', () => {
			cy.get('[data-cy=test-value]').should('be.visible');
			cy.tick(30000);
    });
  });
});

