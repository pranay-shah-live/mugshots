// Mugshots Application Logic

const STORE_CONFIG = {
  brandName: "Mugshots",
  merchantName: "PRANAY HIMANSHU SHAH",
  supportPhone: "8169718315",
  supportPhoneFormatted: "+91 8169718315",
  supportEmail: "Pranayshah995@gmail.com",
  razorpayKey: "rzp_live_TbDWMqgpkqzOSt", // Razorpay Key ID
  currency: "INR"
};

// Catalog Products
const PRODUCTS = [
  {
    id: "mug-classic",
    name: "Classic Custom Ceramic Mug",
    category: "mugs",
    price: 399,
    originalPrice: 499,
    capacity: "325 ml (11 oz)",
    material: "Glossy Ceramic",
    badge: "Bestseller",
    description: "Premium grade white ceramic mug with high-gloss finish. Perfect for family portraits, couple photos, or custom corporate logos. Microwave & dishwasher safe.",
    imageSvg: `<svg viewBox="0 0 200 200" width="160" height="160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="45" width="80" height="110" rx="10" fill="#ffffff" stroke="#0d2238" stroke-width="4"/>
      <path d="M130 65 C160 65 160 115 130 120" stroke="#0d2238" stroke-width="6" fill="none" stroke-linecap="round"/>
      <rect x="62" y="65" width="56" height="70" rx="6" fill="#f1f5f9" stroke="#ff5a1f" stroke-width="2" stroke-dasharray="4 2"/>
      <circle cx="90" cy="95" r="14" fill="#ff5a1f" opacity="0.8"/>
      <path d="M72 125 L84 105 L96 118 L108 100 L118 125 Z" fill="#0ea5e9"/>
      <text x="90" y="180" font-size="12" font-family="sans-serif" font-weight="bold" fill="#64748b" text-anchor="middle">Photo Printable Area</text>
    </svg>`
  },
  {
    id: "mug-magic",
    name: "Magic Color-Changing Mug",
    category: "mugs",
    price: 499,
    originalPrice: 599,
    capacity: "325 ml (11 oz)",
    material: "Heat-Sensitive Ceramic",
    badge: "Trending",
    description: "Appears solid matte black when cool. Pour in hot tea or coffee to magically reveal your hidden custom photo and heartfelt message!",
    imageSvg: `<svg viewBox="0 0 200 200" width="160" height="160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="45" width="80" height="110" rx="10" fill="#0d2238" stroke="#0d2238" stroke-width="4"/>
      <path d="M130 65 C160 65 160 115 130 120" stroke="#0d2238" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M60 85 Q90 65 120 85 Q90 105 60 85" fill="#ff5a1f" opacity="0.9"/>
      <circle cx="90" cy="115" r="12" fill="#0ea5e9"/>
      <path d="M75 140 L90 120 L105 140 Z" fill="#fbbf24"/>
      <text x="90" y="180" font-size="12" font-family="sans-serif" font-weight="bold" fill="#ff5a1f" text-anchor="middle">Heat Activated Reveal</text>
    </svg>`
  },
  {
    id: "mug-couple",
    name: "Couple / Anniversary Dual Mug Set",
    category: "mugs",
    price: 749,
    originalPrice: 899,
    capacity: "2 × 325 ml",
    material: "Matching Ceramic Pair",
    badge: "Gift Special",
    description: "Set of two interlocking or complementary customized mugs. Ideal for anniversaries, weddings, Valentine's, or best friends.",
    imageSvg: `<svg viewBox="0 0 200 200" width="160" height="160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="35" y="55" width="55" height="90" rx="8" fill="#ffffff" stroke="#0d2238" stroke-width="3.5"/>
      <path d="M35 70 C15 70 15 110 35 115" stroke="#0d2238" stroke-width="4.5" fill="none" stroke-linecap="round"/>
      <rect x="105" y="55" width="55" height="90" rx="8" fill="#ffffff" stroke="#0d2238" stroke-width="3.5"/>
      <path d="M160 70 C180 70 180 110 160 115" stroke="#0d2238" stroke-width="4.5" fill="none" stroke-linecap="round"/>
      <path d="M98 90 C98 80 110 80 110 90 C110 100 98 108 98 108 C98 108 86 100 86 90 C86 80 98 80 98 90 Z" fill="#ff5a1f"/>
      <text x="98" y="175" font-size="12" font-family="sans-serif" font-weight="bold" fill="#64748b" text-anchor="middle">Pair of 2 Custom Mugs</text>
    </svg>`
  },
  {
    id: "mug-frosted",
    name: "Frosted Glass Beverage Mug",
    category: "mugs",
    price: 449,
    originalPrice: 549,
    capacity: "450 ml (16 oz)",
    material: "Semi-Transparent Glass",
    badge: "Premium",
    description: "Heavy-bottomed frosted glassware with translucent custom engraving or vibrant printing. A stylish companion for chilled beverages.",
    imageSvg: `<svg viewBox="0 0 200 200" width="160" height="160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="52" y="42" width="76" height="116" rx="8" fill="#e0f2fe" stroke="#0ea5e9" stroke-width="3.5" opacity="0.8"/>
      <path d="M128 65 C155 65 155 115 128 120" stroke="#0ea5e9" stroke-width="5" fill="none" stroke-linecap="round"/>
      <line x1="56" y1="65" x2="124" y2="65" stroke="#ffffff" stroke-width="2"/>
      <line x1="56" y1="85" x2="124" y2="85" stroke="#ffffff" stroke-width="2"/>
      <circle cx="90" cy="105" r="16" fill="#0d2238" opacity="0.6"/>
      <text x="90" y="180" font-size="12" font-family="sans-serif" font-weight="bold" fill="#0ea5e9" text-anchor="middle">Frosted Glass Finish</text>
    </svg>`
  },
  {
    id: "custom-pen",
    name: "Custom Engraved Ballpoint Pen",
    category: "merch",
    price: 100,
    originalPrice: 150,
    capacity: "Metal Body",
    material: "Matte Black & Gold/Silver",
    badge: "Add-on",
    description: "Smooth-writing metal ballpoint pen with precision laser engraving of your recipient's name or company branding.",
    imageSvg: `<svg viewBox="0 0 200 200" width="160" height="160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="92" width="120" height="16" rx="8" fill="#0d2238"/>
      <polygon points="160,92 180,100 160,108" fill="#ff5a1f"/>
      <rect x="50" y="90" width="20" height="4" fill="#fbbf24"/>
      <text x="100" y="104" font-size="8" font-family="sans-serif" font-weight="bold" fill="#ffffff" text-anchor="middle">YOUR NAME</text>
      <text x="100" y="150" font-size="12" font-family="sans-serif" font-weight="bold" fill="#64748b" text-anchor="middle">Laser Engraved Pen</text>
    </svg>`
  },
  {
    id: "custom-diary",
    name: "Custom Hardcover Bound Diary",
    category: "merch",
    price: 250,
    originalPrice: 350,
    capacity: "200 Pages",
    material: "Leatherette Hardcover",
    badge: "Popular",
    description: "Thoroughly bound executive diary featuring personalized gold/silver foil name stamping on the cover and custom front photo greeting page.",
    imageSvg: `<svg viewBox="0 0 200 200" width="160" height="160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="55" y="40" width="90" height="120" rx="6" fill="#0d2238" stroke="#163656" stroke-width="3"/>
      <rect x="50" y="40" width="10" height="120" rx="3" fill="#ff5a1f"/>
      <line x1="80" y1="75" x2="125" y2="75" stroke="#fbbf24" stroke-width="2"/>
      <line x1="80" y1="90" x2="125" y2="90" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="80" y1="105" x2="115" y2="105" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="100" y="180" font-size="12" font-family="sans-serif" font-weight="bold" fill="#64748b" text-anchor="middle">200-Page Ruled Diary</text>
    </svg>`
  },
  {
    id: "custom-keychain",
    name: "Custom Double-Sided Photo Keychain",
    category: "merch",
    price: 50,
    originalPrice: 99,
    capacity: "5 × 3.5 cm",
    material: "Crystal Clear Acrylic",
    badge: "Pocket Gift",
    description: "Durable high-clarity acrylic keychain with double-sided photo insertion. Keep memories of loved ones or your vehicle number always with you.",
    imageSvg: `<svg viewBox="0 0 200 200" width="160" height="160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="55" r="14" stroke="#94a3b8" stroke-width="3.5" fill="none"/>
      <line x1="100" y1="69" x2="100" y2="85" stroke="#94a3b8" stroke-width="3.5"/>
      <rect x="70" y="85" width="60" height="75" rx="6" fill="#ffffff" stroke="#0d2238" stroke-width="3"/>
      <circle cx="100" cy="115" r="14" fill="#ff5a1f"/>
      <text x="100" y="180" font-size="12" font-family="sans-serif" font-weight="bold" fill="#64748b" text-anchor="middle">Acrylic Photo Keychain</text>
    </svg>`
  }
];

// State
let currentSelectedProduct = null;
let lastOrderData = null;

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  renderProducts("all");
  setupEventListeners();
});

// Render Products
function renderProducts(category) {
  const container = document.getElementById("products-container");
  if (!container) return;

  const filtered = category === "all" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === category);

  container.innerHTML = filtered.map(prod => `
    <div class="product-card" data-id="${prod.id}">
      <div class="product-image-wrap">
        ${prod.badge ? `<span class="product-badge">${prod.badge}</span>` : ""}
        ${prod.imageSvg}
      </div>
      <div class="product-body">
        <span class="product-category">${prod.category === 'mugs' ? 'Customized Mug' : 'Customized Merchandise'}</span>
        <h3 class="product-title">${prod.name}</h3>
        <p class="product-desc">${prod.description}</p>
        <div class="product-specs">
          <span class="product-spec-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            ${prod.capacity}
          </span>
          <span class="product-spec-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            ${prod.material}
          </span>
        </div>
        <div class="product-footer">
          <div class="product-price-box">
            <span class="product-price">₹${prod.price}</span>
            ${prod.originalPrice ? `<span class="product-old-price">₹${prod.originalPrice}</span>` : ""}
          </div>
          <button class="btn btn-primary btn-order" onclick="openOrderModal('${prod.id}')">
            Order Now
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

// Event Listeners
function setupEventListeners() {
  // Category Filter Buttons
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProducts(btn.dataset.category);
    });
  });

  // Modal Close
  const closeBtn = document.getElementById("modal-close-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeOrderModal);
  }

  const overlay = document.getElementById("checkout-modal");
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeOrderModal();
    });
  }

  // Checkout Form Submission
  const form = document.getElementById("checkout-form");
  if (form) {
    form.addEventListener("submit", handleCheckoutSubmit);
  }

  // FAQ accordions
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const q = item.querySelector(".faq-question");
    if (q) {
      q.addEventListener("click", () => {
        item.classList.toggle("open");
      });
    }
  });
}

// Open Order Modal
function openOrderModal(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  currentSelectedProduct = prod;

  document.getElementById("summary-name").textContent = prod.name;
  document.getElementById("summary-meta").textContent = `${prod.capacity} • ${prod.material}`;
  document.getElementById("summary-price").textContent = `₹${prod.price}`;
  document.getElementById("btn-pay-text").textContent = `Pay ₹${prod.price} via Razorpay`;

  // Reset views
  document.getElementById("checkout-form-view").style.display = "block";
  document.getElementById("checkout-success-view").style.display = "none";

  const modal = document.getElementById("checkout-modal");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close Order Modal
function closeOrderModal() {
  const modal = document.getElementById("checkout-modal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Handle Form Submission & Razorpay Checkout
async function handleCheckoutSubmit(e) {
  e.preventDefault();

  if (!currentSelectedProduct) return;

  const name = document.getElementById("cust-name").value.trim();
  const phone = document.getElementById("cust-phone").value.trim();
  const email = document.getElementById("cust-email").value.trim();
  const address = document.getElementById("cust-address").value.trim();
  const pincode = document.getElementById("cust-pincode").value.trim();
  const notes = document.getElementById("cust-notes").value.trim();

  if (!name || !phone || !address || !pincode) {
    alert("Please fill in your name, contact phone, delivery address, and pincode.");
    return;
  }

  const btnPay = document.getElementById("btn-pay-text");
  const originalPayText = btnPay.textContent;
  btnPay.textContent = "Processing...";
  document.getElementById("checkout-form").querySelector("button[type='submit']").disabled = true;

  try {
    // 1. Create order securely on backend
    const response = await fetch('/api/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: currentSelectedProduct.price })
    });

    if (!response.ok) {
      throw new Error("Failed to create order on server");
    }

    const { orderId } = await response.json();

    const amountInPaise = currentSelectedProduct.price * 100;

    lastOrderData = {
      orderId,
      product: currentSelectedProduct,
      customer: { name, phone, email, address, pincode, notes }
    };

    // 2. Open Razorpay Checkout
    if (typeof Razorpay !== "undefined") {
      const options = {
        key: STORE_CONFIG.razorpayKey,
        amount: amountInPaise,
        currency: STORE_CONFIG.currency,
        name: STORE_CONFIG.brandName,
        description: `Order #${orderId} - ${currentSelectedProduct.name}`,
        image: "assets/logo.png",
        order_id: orderId, // The secure Order ID from the backend
        handler: function (response) {
          // Payment successful
          lastOrderData.paymentId = response.razorpay_payment_id;
          showOrderSuccess(lastOrderData);
        },
        prefill: {
          name: name,
          email: email || "customer@example.com",
          contact: phone
        },
        notes: {
          order_id: orderId,
          product_name: currentSelectedProduct.name,
          delivery_address: `${address}, PIN: ${pincode}`,
          customization_notes: notes || "To be provided via WhatsApp"
        },
        theme: {
          color: "#0d2238"
        },
        modal: {
          ondismiss: function () {
            console.log("Checkout modal closed by customer.");
            btnPay.textContent = originalPayText;
            document.getElementById("checkout-form").querySelector("button[type='submit']").disabled = false;
          }
        }
      };

      const rzp = new Razorpay(options);
      rzp.on("payment.failed", function (resp) {
        alert("Payment failed: " + (resp.error.description || "Please try again."));
        btnPay.textContent = originalPayText;
        document.getElementById("checkout-form").querySelector("button[type='submit']").disabled = false;
      });
      rzp.open();
    } else {
      throw new Error("Razorpay script not loaded.");
    }
  } catch (err) {
    console.error("Checkout Error:", err);
    alert("Error initializing checkout. Please try again.");
    btnPay.textContent = originalPayText;
    document.getElementById("checkout-form").querySelector("button[type='submit']").disabled = false;
  }
}

// Show Post-Payment Success Card with WhatsApp CTA
function showOrderSuccess(order) {
  document.getElementById("checkout-form-view").style.display = "none";
  const successView = document.getElementById("checkout-success-view");
  successView.style.display = "block";

  document.getElementById("success-order-id").textContent = order.orderId;
  document.getElementById("success-item-name").textContent = order.product.name;
  document.getElementById("success-amount").textContent = `₹${order.product.price}`;

  // Build WhatsApp pre-filled message
  const waMessage = `Hi ${STORE_CONFIG.brandName}! I have placed Order #${order.orderId} for "${order.product.name}" (Amount: ₹${order.product.price}).\n\nMy Details:\nName: ${order.customer.name}\nPhone: ${order.customer.phone}\nDelivery Address: ${order.customer.address}, PIN: ${order.customer.pincode}\nCustomization notes: ${order.customer.notes || "None"}\n\nI am attaching the high-resolution photo/text to be printed on my order. Please confirm!`;

  const waUrl = `https://wa.me/91${STORE_CONFIG.supportPhone}?text=${encodeURIComponent(waMessage)}`;
  const waBtn = document.getElementById("btn-send-whatsapp");
  if (waBtn) {
    waBtn.href = waUrl;
  }

  // Email fallback link
  const emailSubject = `Customization Artwork for Order #${order.orderId} - ${STORE_CONFIG.brandName}`;
  const emailBody = `Hi Mugshots Team,\n\nPlease find attached the photos/artwork for my order:\nOrder ID: ${order.orderId}\nProduct: ${order.product.name}\nName: ${order.customer.name}\nPhone: ${order.customer.phone}\n\nThank you!`;
  const mailtoUrl = `mailto:${STORE_CONFIG.supportEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  const emailBtn = document.getElementById("btn-send-email");
  if (emailBtn) {
    emailBtn.href = mailtoUrl;
  }
}
