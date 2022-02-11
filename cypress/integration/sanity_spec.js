describe('user login', () => {
	it('user can login with email on prod', () => {
		// Start fron the index page
		cy.visit('/');

		// Open login modal
		cy.findByText(/log in/i).click();

		// Provide login credentials, proceed with login
		cy.findByLabelText(/e\-mail/i).type('rvodecnokjsctfcuax@nvhrw.com');
		cy.findByLabelText(/password/i).type('ney7GWH2vhp!qgz.pzm');
		cy.findByRole('button', {
			name: /log in/i,
		}).click();

		// The new url should include "/dashboard"
		cy.url().should('include', '/dashboard');

		// The new page should contain an h3 with "Posted bounties"
		cy.get('h3').contains('Posted bounties');

		// Logout
		cy.get('.show-gr-dropdown').click();
		cy.findByRole('link', {
			name: /log out/i,
		}).click();

		// Check if back on home page
		cy.get('h1').contains(/Submit pull requests. Get paid in crypto/i);
	});
});
