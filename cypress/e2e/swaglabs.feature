Feature: Swag Labs

        Scenario: User logs in with valid credentials
            Given the user is on the Swag Labs login page
             When the user logs in with valid credentials
             Then the user should see the products page

        Scenario: User adds a product to the cart
            Given the user is logged in to Swag Labs
             When the user adds a product to the cart
             Then the cart should contain that product

        Scenario: User logs out
            Given the user is logged in to Swag Labs
             When the user logs out
             Then the user should be redirected to the login page
