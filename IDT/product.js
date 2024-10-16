const cart = [];
let totalAmount = 0;

// Handle "Add to Cart" button click
document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productName = productCard.getAttribute('data-product');
        const productPrice = parseFloat(productCard.getAttribute('data-price'));

        // Add item to cart array
        cart.push({ name: productName, price: productPrice });
        totalAmount += productPrice;

        // Update the cart UI
        updateCartUI();
    });
});

// Update Cart UI function
function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const totalAmountDisplay = document.getElementById('total-amount');

    // Update cart count
    cartCount.innerText = cart.length;

    // Clear existing items in cart
    cartItems.innerHTML = '';

    // Display each item in cart
    cart.forEach(item => {
        const itemElement = document.createElement('p');
        itemElement.innerText = `${item.name}: $${item.price.toFixed(2)}`;
        cartItems.appendChild(itemElement);
    });

    // Update the total amount
    totalAmountDisplay.innerText = totalAmount.toFixed(2);
}

// Cart modal functionality
const cartIcon = document.getElementById('cart-icon');
const modal = document.getElementById('cart-modal');
const closeModal = document.querySelector('.close');

// Open the cart modal when the cart icon is clicked
cartIcon.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Close the cart modal when the close button is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal if user clicks outside of the modal content
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
