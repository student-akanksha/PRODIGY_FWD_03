// API Configuration
const API_BASE_URL = 'http://localhost:5000/api';

// Global variable to store products
let products = [];

// Fetch products from API
async function fetchProducts() {
    try {
        // If products are already loaded, return them
        if (products.length > 0) {
            console.log('Returning cached products:', products);
            return products;
        }
        
        console.log('Fetching products from API...');
        const response = await fetch(`${API_BASE_URL}/products`);
        const data = await response.json();
        console.log('Fetched products:', data);
        
        // Store products in memory
        products = data;
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

// Fetch single product from API
async function fetchProduct(id) {
    try {
        // First check if product is in memory
        const cachedProduct = products.find(p => p.id === id);
        if (cachedProduct) {
            return cachedProduct;
        }
        
        const response = await fetch(`${API_BASE_URL}/products/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching product:', error);
        return null;
    }
}

// Create order
async function createOrder(userId, totalAmount) {
    try {
        const response = await fetch(`${API_BASE_URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: userId,
                total_amount: totalAmount
            })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating order:', error);
        return null;
    }
}

// Register user
async function registerUser(username, email, password) {
    try {
        const response = await fetch(`${API_BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error registering user:', error);
        return null;
    }
}

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentCategory = 'all';
let currentSubcategory = null;

async function renderProducts() {
    console.log('Rendering products...');
    const productsContainer = document.getElementById('products-container');
    if (!productsContainer) {
        console.error('Products container not found!');
        return;
    }

    const products = await fetchProducts();
    console.log('Products to render:', products);
    
    // Filter products based on category and subcategory
    let filteredProducts = products;
    if (currentCategory !== 'all') {
        filteredProducts = products.filter(product => product.category === currentCategory);
    }
    if (currentSubcategory) {
        filteredProducts = filteredProducts.filter(product => product.subcategory === currentSubcategory);
    }
    
    console.log('Filtered products:', filteredProducts);
    
    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = '<div class="no-products">No products found in this category.</div>';
        return;
    }

    productsContainer.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image_url}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/200x200?text=No+Image'">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">$${parseFloat(product.price).toFixed(2)}</div>
                <div class="product-category">${product.category}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

function addToCart(productId) {
    console.log('Adding to cart:', productId);
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }
    
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
    }
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    if (!cartItems) return;
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.qty;
        const li = document.createElement('div');
        li.className = 'cart-item';
        
        li.innerHTML = `
            <img src="${item.image_url}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <span class="cart-item-name">${item.name}</span>
                <div class="cart-item-quantity-control">
                    <button onclick="updateQuantity(${item.id}, ${item.qty - 1})" class="quantity-btn">-</button>
                    <span class="cart-item-quantity">x${item.qty}</span>
                    <button onclick="updateQuantity(${item.id}, ${item.qty + 1})" class="quantity-btn">+</button>
                </div>
                <span class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</span>
            </div>
            <button onclick="removeFromCart(${item.id})" class="remove-btn">Remove</button>
        `;
        cartItems.appendChild(li);
    });
    
    const cartTotal = document.getElementById('cart-total');
    if (cartTotal) {
        cartTotal.textContent = total.toFixed(2);
    }
}

function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.qty = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        renderCart();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

// Cart Modal Functionality
function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.classList.toggle('hidden');
    if (!cartModal.classList.contains('hidden')) {
        renderCart();
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', async () => {
    console.log('DOM Content Loaded');
    // Load products when the page loads
    await fetchProducts();
    renderProducts();
    updateCartCount();

    // Cart button event listener
    const cartBtn = document.getElementById('cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('click', toggleCart);
    }

    // Close cart button event listener
    const closeCartBtn = document.getElementById('close-cart');
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', toggleCart);
    }

    // Checkout button event listener
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            alert('Thank you for your purchase! (Demo only, no real payment processed)');
            cart = [];
            localStorage.removeItem('cart');
            updateCartCount();
            renderCart();
            toggleCart();
        });
    }

    // Category filter event listeners
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentCategory = button.getAttribute('data-category');
            currentSubcategory = null;
            renderProducts();
        });
    });
});

// Subcategory filter event listeners
document.querySelectorAll('.subcategory-btn').forEach(button => {
    button.addEventListener('click', () => {
        currentSubcategory = button.getAttribute('data-subcategory');
        renderProducts();
    });
}); 