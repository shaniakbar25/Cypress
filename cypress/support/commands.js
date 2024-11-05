const LoginPage = require('../../pages/LoginPage');

Cypress.Commands.add('login', (username, password) => {
    cy.visit('/login'); // Navigate to the login page

    // Enter username and password
    LoginPage.enterUsername(username);
    LoginPage.enterPassword(password);
    LoginPage.submit();
});