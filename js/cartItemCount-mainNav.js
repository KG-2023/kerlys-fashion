
  // Retrieve cart items from local storage
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // JavaScript function to update the cart icon in the navigation menu
  function updateCartIconInMenu(cartItemCount) {
    const cartIcon = document.getElementById("navbar-cart-icon");
    const cartLink = cartIcon.querySelector("a");
    const cartIconHtml = '<i class="fa fa-shopping-cart" style="font-size:30px"></i>';

    if (cartItemCount > 0) {
      const itemCountBadge = `<span class="badge bg-danger">${cartItemCount}</span>`;
      cartLink.innerHTML = `${cartIconHtml}${itemCountBadge}`;
    } else {
      cartLink.innerHTML = cartIconHtml;
    }
  }

  // Call the function with the updated cart item count
  updateCartIconInMenu(cartItems.length);

