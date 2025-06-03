// Example product data
const products = [
    {
        id: 1,
        name: "Fresh Apples (1kg)",
        description: "Crisp, juicy apples from local farms.",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
        category: "grocery"
    },
    {
        id: 2,
        name: "Organic Honey (500g)",
        description: "Pure, organic honey harvested locally.",
        price: 7.49,
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
        category: "grocery"
    },
    {
        id: 3,
        name: "Brown Bread Loaf",
        description: "Freshly baked brown bread, soft and healthy.",
        price: 2.5,
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
        category: "grocery"
    },
    {
        id: 4,
        name: "Farm Eggs (12pcs)",
        description: "Free-range eggs from local farms.",
        price: 4.2,
        image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
        category: "grocery"
    },
    {
        id: 5,
        name: "Men's T-Shirt",
        description: "Comfortable cotton t-shirt for everyday wear.",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
        category: "fashion",
        subcategory: "men"
    },
    {
        id: 6,
        name: "Women's Jeans",
        description: "Stylish and durable jeans for women.",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
        category: "fashion",
        subcategory: "women"
    },
    {
        id: 7,
        name: "Smartphone",
        description: "Latest model with high-resolution camera and long battery life.",
        price: 699.99,
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
        category: "electronics"
    },
    {
        id: 8,
        name: "Laptop",
        description: "Powerful laptop for work and entertainment.",
        price: 999.99,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
        category: "electronics"
    },
    {
        id: 9,
        name: "Men's Shirt",
        description: "Classic button-up shirt for formal occasions.",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1469398715555-76331a6c7fa0?auto=format&fit=crop&w=400&q=80",
        category: "fashion",
        subcategory: "men"
    },
    {
        id: 10,
        name: "Women's Top",
        description: "Elegant top for casual outings.",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
        category: "fashion",
        subcategory: "women"
    },
    {
        id: 11,
        name: "Men's Jeans",
        description: "Durable jeans for men.",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=400&q=80",
        category: "fashion",
        subcategory: "men"
    },
    {
        id: 12,
        name: "Women's Shirt",
        description: "Stylish shirt for women.",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&w=400&q=80",
        category: "fashion",
        subcategory: "women"
    },
    {
        id: 13,
        name: "Men's Top",
        description: "Casual top for men.",
        price: 22.99,
        image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=400&q=80",
        category: "fashion",
        subcategory: "men"
    },
    {
        id: 14,
        name: "Women's T-Shirt",
        description: "Comfortable t-shirt for women.",
        price: 18.99,
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=400&q=80",
        category: "fashion",
        subcategory: "women"
    },
    {
        id: 15,
        name: "Men's Jeans",
        description: "Stylish jeans for men.",
        price: 44.99,
        image: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?auto=format&fit=crop&w=400&q=80",
        category: "fashion",
        subcategory: "men"
    },
    {
        id: 16,
        name: "Women's Jeans",
        description: "Comfortable jeans for women.",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=400&q=80",
        category: "fashion",
        subcategory: "women"
    },
    {
        id: 17,
        name: "Men's Shirt",
        description: "Formal shirt for men.",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=400&q=80",
        category: "fashion",
        subcategory: "men"
    },
    {
        id: 18,
        name: "Women's Top",
        description: "Elegant top for women.",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=400&q=80",
        category: "fashion",
        subcategory: "women"
    },
    {
        id: 19,
        name: "Men's T-Shirt",
        description: "Casual t-shirt for men.",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=400&q=80",
        category: "fashion",
        subcategory: "men"
    },
    {
        id: 20,
        name: "Women's Shirt",
        description: "Stylish shirt for women.",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=400&q=80",
        category: "fashion",
        subcategory: "women"
    },
    {
        id: 21,
        name: "Men's T-Shirt",
        description: "Comfortable cotton t-shirt for everyday wear.",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=400&q=80",
        category: "fashion",
        subcategory: "men"
    },
    {
        id: 22,
        name: "Women's Jeans",
        description: "Stylish and durable jeans for women.",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=400&q=80",
        category: "fashion",
        subcategory: "women"
    },
    {
        id: 23,
        name: "Smartphone",
        description: "Latest model with high-resolution camera and long battery life.",
        price: 699.99,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
        category: "electronics"
    },
    {
        id: 24,
        name: "Laptop",
        description: "Powerful laptop for work and entertainment.",
        price: 999.99,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80",
        category: "electronics"
    },
    {
        id: 25,
        name: "Men's Shirt",
        description: "Classic button-up shirt for formal occasions.",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=400&q=80",
        category: "fashion",
        subcategory: "men"
    },
    {
        id: 26,
        name: "Women's Top",
        description: "Elegant top for casual outings.",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=400&q=80",
        category: "fashion",
        subcategory: "women"
    },
    {
        id: 27,
        name: "Men's Jeans",
        description: "Durable jeans for men.",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?auto=format&fit=crop&w=400&q=80",
        category: "fashion",
        subcategory: "men"
    },
    {
        id: 28,
        name: "Women's Shirt",
        description: "Stylish shirt for women.",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=400&q=80",
        category: "fashion",
        subcategory: "women"
    },
    {
        id: 29,
        name: "Men's Top",
        description: "Casual top for men.",
        price: 22.99,
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=400&q=80",
        category: "fashion",
        subcategory: "men"
    },
    {
        id: 30,
        name: "Women's T-Shirt",
        description: "Comfortable t-shirt for women.",
        price: 18.99,
        image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=400&q=80",
        category: "fashion",
        subcategory: "women"
    },
    {
        id: 31,
        name: "Men's Jeans",
        description: "Stylish jeans for men.",
        price: 44.99,
        image: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?auto=format&fit=crop&w=400&q=80",
        category: "fashion",
        subcategory: "men"
    },
    {
        id: 32,
        name: "Women's Jeans",
        description: "Comfortable jeans for women.",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=400&q=80",
        category: "fashion",
        subcategory: "women"
    },
    {
        id: 33,
        name: "Men's Shirt",
        description: "Formal shirt for men.",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=400&q=80",
        category: "fashion",
        subcategory: "men"
    },
    {
        id: 34,
        name: "Women's Top",
        description: "Elegant top for women.",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=400&q=80",
        category: "fashion",
        subcategory: "women"
    },
    {
        id: 35,
        name: "Men's T-Shirt",
        description: "Casual t-shirt for men.",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=400&q=80",
        category: "fashion",
        subcategory: "men"
    },
    {
        id: 36,
        name: "Women's Shirt",
        description: "Stylish shirt for women.",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=400&q=80",
        category: "fashion",
        subcategory: "women"
    },
    {
        id: 37,
        name: "Men's T-Shirt",
        description: "Comfortable cotton t-shirt for everyday wear.",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=400&q=80",
        category: "fashion",
        subcategory: "men"
    },
    {
        id: 38,
        name: "Women's Jeans",
        description: "Stylish and durable jeans for women.",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=400&q=80",
        category: "fashion",
        subcategory: "women"
    },
    {
        id: 39,
        name: "Smartphone",
        description: "Latest model with high-resolution camera and long battery life.",
        price: 699.99,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
        category: "electronics"
    },
    {
        id: 40,
        name: "Laptop",
        description: "Powerful laptop for work and entertainment.",
        price: 999.99,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80",
        category: "electronics"
    }
];

let cart = [];
let currentCategory = 'all';
let currentSubcategory = null;

function renderProducts() {
    const productsSection = document.getElementById('products');
    productsSection.innerHTML = '';
    let filteredProducts = products;
    if (currentCategory !== 'all') {
        filteredProducts = products.filter(product => product.category === currentCategory);
        if (currentSubcategory) {
            filteredProducts = filteredProducts.filter(product => product.subcategory === currentSubcategory);
        }
    }
    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">$${product.price.toFixed(2)}</div>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsSection.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    updateCartCount();
}

function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.reduce((sum, item) => sum + item.qty, 0);
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.qty;
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.name} x${item.qty}</span>
            <span>$${(item.price * item.qty).toFixed(2)}</span>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItems.appendChild(li);
    });
    document.getElementById('cart-total').textContent = total.toFixed(2);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    renderCart();
}

document.getElementById('cart-btn').addEventListener('click', () => {
    document.getElementById('cart-modal').classList.remove('hidden');
    renderCart();
});
document.getElementById('close-cart').addEventListener('click', () => {
    document.getElementById('cart-modal').classList.add('hidden');
});
document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    alert('Thank you for your purchase! (Demo only, no real payment processed)');
    cart = [];
    updateCartCount();
    renderCart();
    document.getElementById('cart-modal').classList.add('hidden');
});

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

// Subcategory filter event listeners
document.querySelectorAll('.subcategory-btn').forEach(button => {
    button.addEventListener('click', () => {
        currentSubcategory = button.getAttribute('data-subcategory');
        renderProducts();
    });
});

// Initial render
renderProducts(); 