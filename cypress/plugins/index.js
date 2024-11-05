const { defineConfig } = require('cypress');
const cucumber = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify').addCucumberPreprocessorPlugin;

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());
  return config;
};