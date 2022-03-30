const agregaPrecio = document.getSelectionAll("#btnAgregaPrecio");
function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest('.product');
  
    const itemTitle = item.querySelector('.product__title').textContent;
    const itemPrice = item.querySelector('.item-price').textContent;
    const itemImage = item.querySelector('.product__img').src;
  
    addItemToShoppingCart(itemTitle, itemPrice, itemImage);
  }