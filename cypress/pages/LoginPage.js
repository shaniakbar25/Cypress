
class LoginPage {
    visit(url) {
      cy.visit(url);
    }
  
    enterUsername(username) {
      cy.get('[data-test="username"]').type(username);
    }
  
    enterPassword(password) {
      cy.get('[data-test="password"]').type(password);
    }
  
    submit() {
      cy.get('[data-test="login-button"]').click();
    }
  }
  
  module.exports = new LoginPage();
  