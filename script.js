document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
    updateCartCount();
});

const products = [
    { id: 1, name: "Stylish Top", category: "tops", price: "$25", image: "top.jpg" },
    { id: 2, name: "Denim Jeans", category: "bottoms", price: "$40", image: "jeans.jpg" },
    { id: 3, name: "Elegant Scarf", category: "accessories", price: "$15", image: "scarf.jpg" }
];

function loadProducts() {
    const productContainer = document.querySelector(".product-list");
    productContainer.innerHTML = "";
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productDiv);
    });
}

function filterProducts() {
    const category = document.getElementById("category").value;
    const filteredProducts = category === "all" ? products : products.filter(p => p.category === category);
    const productContainer = document.querySelector(".product-list");
    productContainer.innerHTML = "";
    filteredProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productDiv);
    });
}

let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
    displayCart();
}

function updateCartCount() {
    document.getElementById("cart-count").textContent = cart.length;
}

function displayCart() {
    const cartContainer = document.querySelector(".cart-items");
    cartContainer.innerHTML = "";
    cart.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.textContent = `${item.name} - ${item.price}`;
        cartContainer.appendChild(itemDiv);
    });
}

function checkout() {
    alert("Proceeding to checkout!");
    cart = [];
    updateCartCount();
    displayCart();
}
