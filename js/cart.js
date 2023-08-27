/* Update the cart icon in the navigation menu */
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
/* END - Update the cart icon in the navigation menu */


/* Add items to cart and update the cart items table with subtotal */

// Retrieve cart items from local storage
function getCartItems() {
    return JSON.parse(localStorage.getItem("cartItems")) || [];
}

// Display cart items in the table
function renderCartItems() {
    const cartItems = getCartItems();
    const cartItemsTableBody = document.getElementById("cartItemsTableBody");

    cartItemsTableBody.innerHTML = ""; // Clear previous items

    cartItems.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td><img src="${item.image}" alt="${item.title}" style="width: 150px;"></td>
        <td>${item.title}</td>
        <td>$${item.price.toFixed()}</td>
        <td>${item.quantity}</td>
        <td class="item-price-cart">$${(item.price * item.quantity).toFixed()}</td>
    `;
        cartItemsTableBody.appendChild(row);
    });

    // Update cart icon in navigation menu with cart item count
    updateCartIconInMenu(cartItems.length);
}

// Function to calculate and display subtotal
function updateCartTotals() {
    const cartItems = getCartItems();
    const subtotalElement = document.createElement("div");
    subtotalElement.className = "subTotalCart";

    let subtotal = 0;
    cartItems.forEach(item => {
        subtotal += item.price * item.quantity;
    });

    subtotalElement.innerHTML = `Subtotal: $${subtotal.toFixed()}`;

    // Clear previous totals
    const existingSubtotal = document.getElementById("cartSubtotal");
    if (existingSubtotal) {
        existingSubtotal.remove();
    }

    // Add new subtotal to the tfoot element
    const tfootElement = document.querySelector("tfoot");
    const tfootRow = tfootElement.querySelector("tr");
    const tdElement = tfootRow.querySelector("td:last-child");
    tdElement.appendChild(subtotalElement);

    // Update cart icon in navigation menu with cart item count
    updateCartIconInMenu(cartItems.length);
}
/* END - Add items to cart and update the cart items table with subtotal */


/* When cart is empty, hide the table, and show the empty cart message */

document.addEventListener("DOMContentLoaded", function () {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Check if the cart is empty
    if (cartItems.length === 0) {
        document.getElementById('cart-items-container').style.display = "none"; // Hide the table
        document.getElementById('empty-cart-message').style.display = "block"; // Show the empty cart message
    } else {
        document.getElementById('cart-items-container').style.display = "block"; // Show the table
        document.getElementById('empty-cart-message').style.display = "none"; // Hide the empty cart message
    }
});

/* END - When cart is empty, hide the table, and show the empty cart message */



/* Delete items when trash icon is clicked */
function deleteCartItem(index) {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Remove the item at the specified index
    cartItems.splice(index, 1);

    // Update session storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Refresh the cart page
    location.reload();
}

// Update the cart items table
function updateCartItemsTable() {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const cartItemsTableBody = document.getElementById("cartItemsTableBody");

    cartItemsTableBody.innerHTML = ""; // Clear the existing table content

    cartItems.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
    <td><img src="${item.image}" alt="${item.title}" style="width: 150px;"></td>
    <td>${item.title}</td>
    <td>$${item.price.toFixed()}</td>
    <td>${item.quantity}</td>
      <td class="item-price-cart">$${(item.price * item.quantity).toFixed()}</td>
    
    <td><button id="delete-button-cart" class="btn btn-sm btn-danger" onclick="deleteCartItem(${index})"><i class="fa fa-trash-o"></i></button></td>

    `;
        cartItemsTableBody.appendChild(row);
    });

    // Update cart totals and icon in navigation menu
    updateCartTotals();
}

// Call the function to update cart items table
updateCartItemsTable();

/* END - Delete items when trash icon is clicked */


/* This is to redirect the cart page to checkout page */

document.addEventListener("DOMContentLoaded", function () {
    const checkoutButton = document.querySelector(".checkout-button-cart button");

    checkoutButton.addEventListener("click", function () {
        // Redirect to checkout-page.html
        window.location.href = "checkout-page.html";
    });
});
/* END - This is to redirect the cart page to checkout page */

