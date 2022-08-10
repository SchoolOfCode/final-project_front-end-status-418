// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (overrides = {}) => {
    Cypress.log({
      name: 'loginViaAuth0',
    });
  
    const options = {
      method: 'POST',
      url: Cypress.env('localhost:3000'),
      body: {
        grant_type: 'password',
        username: Cypress.env('qwerty1@gmail'),
        password: Cypress.env('Qwerty1@'),
        audience: Cypress.env('auth_audience'),
        scope: 'openid profile email',
        client_id: Cypress.env('x7eRjChnZ8Oy7QD4wsmowogC2gxOlCcM'),
        client_secret: Cypress.env('4VZDoLgcckBfY8kUcSlCdYm58XpJdyT99_6NG7zQ757c6CIYd4PDPr-W6jZ0BW8f'),
      },
    };
    cy.request(options);
  });