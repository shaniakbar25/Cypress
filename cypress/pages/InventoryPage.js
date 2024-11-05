class InventoryPage {
    addItemToCart(itemName) {
      cy.contains('.inventory_item_name', itemName).parents('.inventory_item').find('[data-test^="add-to-cart"]').click();
    }
  
    verifyItemInCart(itemCount) {
      cy.get('.shopping_cart_badge').should('contain', itemCount);
    }
  }
  
  module.exports = new InventoryPage();
  