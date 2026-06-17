// --- Product Detail Rendering & Interaction Controller ---

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");

  // Default to first men's shoe if no ID provided
  const currentProduct = products.find(p => p.id === productId) || products[0];

  renderProductDetails(currentProduct);
  initDetailTabs();
  initQuantityControls();
  initReviewForm(currentProduct);
  renderRelatedProducts(currentProduct);
});

// --- Dynamic Render ---
function renderProductDetails(product) {
  // Breadcrumb
  const breadcrumbCat = document.getElementById("breadcrumbCat");
  if (breadcrumbCat) {
    let catText = "其他款式";
    let catUrl = "others.html";
    if (product.category === "men") {
      catText = "男款系列";
      catUrl = "mens.html";
    } else if (product.category === "women") {
      catText = "女款系列";
      catUrl = "womens.html";
    }
    breadcrumbCat.innerHTML = `<a href="${catUrl}">${catText}</a>`;
  }

  const breadcrumbTitle = document.getElementById("breadcrumbTitle");
  if (breadcrumbTitle) breadcrumbTitle.textContent = product.name;

  // Title & Rating
  const title = document.getElementById("detailTitle");
  if (title) title.textContent = product.name;

  const ratingVal = document.getElementById("detailRatingVal");
  if (ratingVal) ratingVal.textContent = product.rating.toFixed(1);

  const reviewsCount = document.getElementById("detailReviewsCount");
  if (reviewsCount) reviewsCount.textContent = `(${product.reviewsCount} 則評價)`;

  // Pricing
  const price = document.getElementById("detailPrice");
  if (price) price.textContent = `NT$ ${product.price.toLocaleString()}`;

  const originalPrice = document.getElementById("detailOriginalPrice");
  if (originalPrice) {
    if (product.originalPrice) {
      originalPrice.textContent = `NT$ ${product.originalPrice.toLocaleString()}`;
      originalPrice.style.display = "inline";
    } else {
      originalPrice.style.display = "none";
    }
  }

  // Description
  const description = document.getElementById("detailDescription");
  if (description) description.textContent = product.description;

  // Images
  const mainImage = document.getElementById("mainProductImage");
  if (mainImage) {
    mainImage.src = product.image;
    mainImage.alt = product.name;
  }

  const thumbnailsContainer = document.getElementById("galleryThumbnails");
  if (thumbnailsContainer) {
    // Generate 4 mock thumbnails for gallery preview
    let thumbHtml = `
      <div class="thumbnail active" onclick="changeMainImage('${product.image}', this)">
        <img src="${product.image}" alt="${product.name}">
      </div>
    `;
    
    // Create minor styled variations using SVG or same image for mock
    for (let i = 2; i <= 4; i++) {
      thumbHtml += `
        <div class="thumbnail" onclick="changeMainImage('${product.image}', this)">
          <img src="${product.image}" alt="${product.name}" style="opacity: 0.85;">
        </div>
      `;
    }
    thumbnailsContainer.innerHTML = thumbHtml;
  }

  // Colors
  const colorsContainer = document.getElementById("colorOptions");
  if (colorsContainer) {
    colorsContainer.innerHTML = product.colors.map((color, index) => `
      <div class="color-badge ${index === 0 ? 'active' : ''}" onclick="selectColor(this, '${color}')">${color}</div>
    `).join('');
    // Save initial selection to window variables
    window.selectedColor = product.colors[0];
  }

  // Sizes
  const sizesContainer = document.getElementById("sizeOptions");
  if (sizesContainer) {
    sizesContainer.innerHTML = product.sizes.map((size, index) => `
      <div class="size-badge ${index === 0 ? 'active' : ''}" onclick="selectSize(this, '${size}')">${size}</div>
    `).join('');
    // Save initial selection
    window.selectedSize = product.sizes[0];
  }

  // Specs Table
  const specsTable = document.getElementById("specsTableBody");
  if (specsTable) {
    let specsHtml = "";
    for (const [key, value] of Object.entries(product.specs)) {
      specsHtml += `
        <tr>
          <td>${key}</td>
          <td>${value}</td>
        </tr>
      `;
    }
    specsTable.innerHTML = specsHtml;
  }

  // Reviews
  renderReviews(product);

  // Buy & Cart Button
  const addToCartBtn = document.getElementById("detailAddToCart");
  if (addToCartBtn) {
    addToCartBtn.onclick = () => {
      const qty = parseInt(document.getElementById("qtyVal").textContent) || 1;
      addToCart(product.id, window.selectedSize, window.selectedColor, qty);
    };
  }
}

// Global gallery switcher
function changeMainImage(src, element) {
  const mainImage = document.getElementById("mainProductImage");
  if (mainImage) mainImage.src = src;

  // Toggle active class on thumbnails
  const thumbnails = document.querySelectorAll(".thumbnail");
  thumbnails.forEach(thumb => thumb.classList.remove("active"));
  element.classList.add("active");
}
window.changeMainImage = changeMainImage;

// Option selectors
function selectColor(element, color) {
  const badges = document.querySelectorAll("#colorOptions .color-badge");
  badges.forEach(b => b.classList.remove("active"));
  element.classList.add("active");
  window.selectedColor = color;
}
window.selectColor = selectColor;

function selectSize(element, size) {
  const badges = document.querySelectorAll("#sizeOptions .size-badge");
  badges.forEach(b => b.classList.remove("active"));
  element.classList.add("active");
  window.selectedSize = size;
}
window.selectSize = selectSize;

// --- Tab Headers ---
function initDetailTabs() {
  const tabHeaders = document.querySelectorAll(".tab-header");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const tabId = header.getAttribute("data-tab");
      
      tabHeaders.forEach(h => h.classList.remove("active"));
      tabPanels.forEach(p => p.classList.remove("active"));
      
      header.classList.add("active");
      const targetPanel = document.getElementById(tabId);
      if (targetPanel) targetPanel.classList.add("active");
    });
  });
}

// --- Quantity Control ---
function initQuantityControls() {
  const minus = document.getElementById("qtyMinus");
  const plus = document.getElementById("qtyPlus");
  const val = document.getElementById("qtyVal");

  if (minus && plus && val) {
    minus.addEventListener("click", () => {
      let currentVal = parseInt(val.textContent) || 1;
      if (currentVal > 1) {
        val.textContent = currentVal - 1;
      }
    });

    plus.addEventListener("click", () => {
      let currentVal = parseInt(val.textContent) || 1;
      if (currentVal < 10) {
        val.textContent = currentVal + 1;
      }
    });
  }
}

// --- Render & Post Reviews ---
function renderReviews(product) {
  const reviewList = document.getElementById("reviewList");
  if (!reviewList) return;

  if (!product.reviews || product.reviews.length === 0) {
    reviewList.innerHTML = `<p style="color: var(--text-muted);">目前尚無人評價，歡迎成為第一個發表評價的人！</p>`;
    return;
  }

  reviewList.innerHTML = product.reviews.map(review => {
    const stars = "★".repeat(Math.round(review.rating)) + "☆".repeat(5 - Math.round(review.rating));
    return `
      <div class="review-card">
        <div class="review-header">
          <div>
            <span class="review-author">${review.author}</span>
            <span style="color: #f39c12; margin-left: 10px;">${stars}</span>
          </div>
          <span class="review-date">${review.date}</span>
        </div>
        <p class="review-text">${review.content}</p>
      </div>
    `;
  }).join('');
}

function initReviewForm(product) {
  const form = document.getElementById("reviewForm");
  const starElements = document.querySelectorAll(".rating-star");
  window.selectedRating = 5;

  if (starElements) {
    starElements.forEach(star => {
      star.addEventListener("click", () => {
        const rating = parseInt(star.getAttribute("data-rating"));
        window.selectedRating = rating;
        
        starElements.forEach(s => {
          const sRating = parseInt(s.getAttribute("data-rating"));
          if (sRating <= rating) {
            s.classList.add("selected");
          } else {
            s.classList.remove("selected");
          }
        });
      });
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameInput = document.getElementById("reviewName");
      const textInput = document.getElementById("reviewText");

      if (nameInput && textInput && nameInput.value && textInput.value) {
        const newReview = {
          author: nameInput.value.trim().substring(0, 1) + "**",
          rating: window.selectedRating,
          content: textInput.value.trim(),
          date: new Date().toISOString().split('T')[0]
        };

        if (!product.reviews) product.reviews = [];
        product.reviews.unshift(newReview);
        
        // Update review count & rating UI mock
        product.reviewsCount += 1;
        
        renderReviews(product);
        
        // Reset form
        nameInput.value = "";
        textInput.value = "";
        alert("感謝您的寶貴評價！");
      }
    });
  }
}

// --- Render Related Products ---
function renderRelatedProducts(product) {
  const container = document.getElementById("relatedProductsGrid");
  if (!container) return;

  // Filter products in same category (exclude current)
  let related = products.filter(p => p.category === product.category && p.id !== product.id);
  
  // Take top 4 or fill with random ones if less
  if (related.length === 0) {
    related = products.filter(p => p.id !== product.id).slice(0, 4);
  } else {
    related = related.slice(0, 4);
  }

  container.innerHTML = related.map(prod => `
    <div class="product-card">
      <span class="product-badge">熱銷推薦</span>
      <div class="product-img-wrapper">
        <a href="product.html?id=${prod.id}">
          <img src="${prod.image}" alt="${prod.name}">
        </a>
      </div>
      <div class="product-info">
        <span class="product-cat">${prod.category === 'men' ? '男款' : (prod.category === 'women' ? '女款' : '其他')}</span>
        <a href="product.html?id=${prod.id}">
          <h3 class="product-title">${prod.name}</h3>
        </a>
        <div class="product-meta">
          <div class="product-rating"><i class="fas fa-star"></i> ${prod.rating.toFixed(1)}</div>
          <div class="product-reviews">(${prod.reviewsCount} 則評價)</div>
        </div>
        <div class="product-footer">
          <div class="product-price-wrapper">
            <span class="price">NT$ ${prod.price.toLocaleString()}</span>
          </div>
          <a href="product.html?id=${prod.id}" class="add-to-cart-btn">
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  `).join('');
}
