describe('payment', () => {
	it('user can create new account', () => {
		// Start fron the index page
		cy.visit('/');

		// Open login modal
		cy.findByText(/log in/i).click();

		// Provide login credentials, proceed with login
		cy.findByLabelText(/e\-mail/i).type('login');
		cy.findByLabelText(/password/i).type('password');
		cy.get('.login-modal-main form').submit();

		// The new url should include "/dashboard"
		cy.url().should('include', '/dashboard');

		// The new page should contain an h3 with "Posted bounties"
		cy.get('h3').contains('Posted bounties');
	});
});
