// --- Global Shopping Cart & UI Controller ---

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initCartDrawer();
  renderCartItems();
  initNewsletter();
});

// --- Mobile Navigation ---
function initMobileMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const icon = menuToggle.querySelector("i");
      if (icon) {
        if (navLinks.classList.contains("open")) {
          icon.className = "fas fa-times";
        } else {
          icon.className = "fas fa-bars";
        }
      }
    });
  }
}

// --- Cart System ---
let cart = JSON.parse(localStorage.getItem("shoe_shop_cart")) || [];

function saveCart() {
  localStorage.setItem("shoe_shop_cart", JSON.stringify(cart));
  updateCartCounters();
  renderCartItems();
}

function updateCartCounters() {
  const counters = document.querySelectorAll(".cart-count");
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  counters.forEach(counter => {
    counter.textContent = totalQty;
    counter.style.display = totalQty > 0 ? "flex" : "none";
  });
}

function initCartDrawer() {
  const cartBtn = document.getElementById("cartBtn");
  const cartDrawer = document.getElementById("cartDrawer");
  const cartClose = document.getElementById("cartClose");
  const cartOverlay = document.getElementById("cartOverlay");

  if (cartBtn && cartDrawer) {
    cartBtn.addEventListener("click", (e) => {
      e.preventDefault();
      cartDrawer.classList.add("open");
      if (cartOverlay) cartOverlay.classList.add("open");
    });
  }

  if (cartClose && cartDrawer) {
    cartClose.addEventListener("click", () => {
      cartDrawer.classList.remove("open");
      if (cartOverlay) cartOverlay.classList.remove("open");
    });
  }

  if (cartOverlay && cartDrawer) {
    cartOverlay.addEventListener("click", () => {
      cartDrawer.classList.remove("open");
      cartOverlay.classList.remove("open");
    });
  }

  const checkoutBtn = document.getElementById("checkoutBtn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (cart.length === 0) {
        alert("您的購物車目前是空的，請先挑選商品！");
        return;
      }
      alert("感謝您的訂購！我們已收到您的虛擬訂單，將為您開始出貨。");
      cart = [];
      saveCart();
      if (cartDrawer) cartDrawer.classList.remove("open");
      if (cartOverlay) cartOverlay.classList.remove("open");
    });
  }

  updateCartCounters();
}

// Add item to cart
function addToCart(productId, size, color, quantity = 1) {
  // Find product details
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  // Check if item already in cart with same size and color
  const existingItemIndex = cart.findIndex(item => 
    item.id === productId && item.size === size && item.color === color
  );

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({
      id: productId,
      name: prod.name,
      price: prod.price,
      image: prod.image,
      size: size,
      color: color,
      quantity: quantity
    });
  }

  saveCart();
  
  // Auto open cart drawer
  const cartDrawer = document.getElementById("cartDrawer");
  const cartOverlay = document.getElementById("cartOverlay");
  if (cartDrawer) cartDrawer.classList.add("open");
  if (cartOverlay) cartOverlay.classList.add("open");
}

function removeCartItem(index) {
  cart.splice(index, 1);
  saveCart();
}

function renderCartItems() {
  const itemsWrapper = document.getElementById("cartItemsWrapper");
  const subtotalVal = document.getElementById("cartSubtotalVal");
  
  if (!itemsWrapper) return;
  
  if (cart.length === 0) {
    itemsWrapper.innerHTML = `
      <div style="text-align: center; color: var(--text-muted); margin-top: 40px;">
        <i class="fas fa-shopping-bag" style="font-size: 48px; opacity: 0.3; margin-bottom: 16px; display: block;"></i>
        <p>購物車是空的</p>
      </div>
    `;
    if (subtotalVal) subtotalVal.textContent = "NT$ 0";
    return;
  }

  let html = "";
  let subtotal = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    html += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <div class="cart-item-details">尺寸: ${item.size} | 顏色: ${item.color}</div>
          <div class="cart-item-details">數量: ${item.quantity}</div>
          <div class="cart-item-price">NT$ ${item.price.toLocaleString()}</div>
        </div>
        <button class="remove-item-btn" onclick="removeCartItem(${index})">
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
    `;
  });

  itemsWrapper.innerHTML = html;
  if (subtotalVal) subtotalVal.textContent = "NT$ " + subtotal.toLocaleString();
}

// Make removeCartItem accessible globally
window.removeCartItem = removeCartItem;
window.addToCart = addToCart;

// --- Newsletter ---
function initNewsletter() {
  const form = document.querySelector(".newsletter-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector("input");
      if (input && input.value) {
        alert(`感謝訂閱！精選折扣碼已發送至 ${input.value}`);
        input.value = "";
      }
    });
  }
}
