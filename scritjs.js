<script>
// Array to hold cart items
const cart = [];

// Function to update cart count in the navigation bar
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cart.length;
}

// Add event listeners to all 'Add to Cart' buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get item details from button data attributes
        const itemName = button.getAttribute('data-name');
        const itemPrice = button.getAttribute('data-price');

        // Add the item to the cart array
        cart.push({
            name: itemName,
            price: Number(itemPrice)
        });

        // Update the cart count
        updateCartCount();

        // Optionally, show an alert or message
        alert(`${itemName} has been added to your cart!`);
    });
});

</script>