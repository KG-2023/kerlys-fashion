
    // Function to add product to cart and redirect to cart page
    function addToCart() {
      const quantity = parseInt(document.getElementById("productQuantity").value);
      const productInfo = JSON.parse(localStorage.getItem("productInfo"));

      // Create a cart object
      const cartItem = {
        title: productInfo.title,
        price: productInfo.price,
        image: productInfo.image,
        quantity: quantity
      };

      // Get existing cart items from local storage
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

      // Check if the item is already in the cart
      const existingItemIndex = cartItems.findIndex(item => item.title === cartItem.title);
      if (existingItemIndex !== -1) {
        cartItems[existingItemIndex].quantity += quantity;
      } else {
        cartItems.push(cartItem);
      }

      // Update cart items in local storage
      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      // Redirect to cart page
      window.location.href = "cart-page.html"; 
    }

    // Attach click event to "Add to Cart" button
    const addToCartButton = document.getElementById("addToCartButton");
    addToCartButton.addEventListener("click", addToCart);



  /* Script to update cart item count on the main nav cart icon */
  
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

    // Retrieve cart items from local storage and update cart icon
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    updateCartIconInMenu(cartItems.length);

  /* end of Script to update cart item count on the main nav cart icon */

