import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
const LoginPage = require('../../pages/LoginPage');
const InventoryPage = require('../../pages/InventoryPage');
import constants from "../../support/constants";


Given('the user is on the Swag Labs login page', () => {
  LoginPage.visit(constants.BASE_URL);
});

Given('the user is logged in to Swag Labs', () => {
  LoginPage.visit(constants.BASE_URL);
  cy.login(constants.USER_CREDENTIALS.STANDARD_USER, constants.USER_CREDENTIALS.PASSWORD);
  cy.url().should('include', '/inventory.html');
});

When('the user logs in with valid credentials', () => {
  cy.login(constants.USER_CREDENTIALS.STANDARD_USER, constants.USER_CREDENTIALS.PASSWORD);
});

When('the user adds a product to the cart', () => {
  InventoryPage.addItemToCart(constants.SauceLabsBackpack);
});

When('the user logs out', () => {
  cy.get('.bm-burger-button').click();
  cy.get('#logout_sidebar_link').click();
});

Then('the user should see the products page', () => {
  cy.url().should('include', '/inventory.html');
});

Then('the cart should contain that product', () => {
  InventoryPage.verifyItemInCart('1');
});

Then('the user should be redirected to the login page', () => {
  cy.url().should('include', '/');
  cy.get('[data-test="login-button"]').should('be.visible');
});
