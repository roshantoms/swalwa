const PRODUCTS = [{
    id: 1,
    name: "Classic Karutha Halwa",
    type: "block",
    weight: "500g",
    price: 450,
    originalPrice: 599,
    rating: 4.8,
    reviews: 127,
    tags: ["featured", "bestseller"],
    stock: 45,
    images: [
        "images/block/blackhalwablock.png"
    ],
    desc: "A timeless Kerala classic - rich, dark, and intensely flavourful. Made with roasted wheat, jaggery, and a secret blend of spices. Perfect for festive celebrations.",
    delivery: "Ships within 2-3 business days. Free shipping on orders above ₹999.",
    flavors: ["None", "Rum Essence", "Whiskey Essence", "Brandy Essence", "Vodka Essence"]
}, {
    id: 2,
    name: "Mango Bliss Bites",
    type: "bites",
    weight: "12 pieces",
    price: 520,
    originalPrice: 650,
    rating: 4.9,
    reviews: 98,
    tags: ["featured", "trending"],
    stock: 32,
    images: [
        "images/bites/mangohalwabites.png",
        "images/bites/mangohalwabites2.png"
    ],
    desc: "Sun-ripened Alphonso mangoes folded into a silky halwa, wrapped as individual bites. A tropical dream in every piece.",
    delivery: "Ships within 2-3 business days. Free shipping on orders above ₹999.",
    flavors: ["None", "Rum Essence", "Whiskey Essence", "Brandy Essence", "Vodka Essence"]
}, {
    id: 3,
    name: "Mango Halwa Block",
    type: "block",
    weight: "1kg",
    price: 680,
    originalPrice: 850,
    rating: 4.7,
    reviews: 204,
    tags: ["bestseller", "premium"],
    stock: 18,
    images: [
        "images/block/mangohalwablock.png"
    ],
    desc: "Premium almonds and pistachios ground to perfection, slow-cooked in pure ghee with a touch of saffron. Rich, nutty, and utterly indulgent.",
    delivery: "Ships within 2-3 business days. Free shipping on orders above ₹999.",
    flavors: ["None", "Rum Essence", "Whiskey Essence", "Brandy Essence", "Vodka Essence"]
}, {
    id: 4,
    name: "Saffron Gold Gift Box",
    type: "giftbox",
    weight: "24 bites",
    price: 890,
    originalPrice: 1199,
    rating: 4.9,
    reviews: 156,
    tags: ["featured", "premium", "trending"],
    stock: 12,
    images: [
        "images/giftbox/saffrongiftbox.png",
        "images/giftbox/saffrongiftbox2.png"
    ],
    desc: "The crown jewel of our collection. Premium Persian saffron, silvered almonds, and a whisper of rose water. Presented in a luxurious gift box.",
    delivery: "Ships within 2-3 business days. Free shipping on orders above ₹999.",
    flavors: ["None", "Rum Essence", "Whiskey Essence", "Brandy Essence", "Vodka Essence"]
}, {
    id: 5,
    name: "Coconut Halwa Bites",
    type: "bites",
    weight: "10 pieces",
    price: 620,
    originalPrice: 750,
    rating: 4.6,
    reviews: 83,
    tags: ["trending", "sugarfree"],
    stock: 28,
    images: [
        "images/bites/coconuthalwabites.png"
    ],
    desc: "Naturally sweetened with dates and figs. No refined sugar, all the flavour. A wholesome treat for the health-conscious.",
    delivery: "Ships within 2-3 business days. Free shipping on orders above ₹999.",
    flavors: ["None", "Rum Essence", "Whiskey Essence", "Brandy Essence", "Vodka Essence"]
}, {
    id: 6,
    name: "Rose Petal Gift Box",
    type: "giftbox",
    weight: "18 bites",
    price: 750,
    originalPrice: 920,
    rating: 4.8,
    reviews: 112,
    tags: ["featured", "premium"],
    stock: 22,
    images: [
        "images/giftbox/rosegiftbox.png",
        "images/giftbox/rosegiftbox2.png"
    ],
    desc: "Handpicked rose petals infused into a delicate, fragrant halwa. A floral symphony that melts in your mouth.",
    delivery: "Ships within 2-3 business days. Free shipping on orders above ₹999.",
    flavors: ["None", "Rum Essence", "Whiskey Essence", "Brandy Essence", "Vodka Essence"]
}, {
    id: 7,
    name: "Pineapple Halwa Block",
    type: "block",
    weight: "750g",
    price: 580,
    originalPrice: 720,
    rating: 4.5,
    reviews: 67,
    tags: ["bestseller"],
    stock: 35,
    images: [
        "images/block/pineapplehalwablock.png"
    ],
    desc: "Roasted cashews and a buttery caramel swirl make this halwa irresistibly crunchy and sweet. A modern twist on a classic.",
    delivery: "Ships within 2-3 business days. Free shipping on orders above ₹999.",
    flavors: ["None", "Rum Essence", "Whiskey Essence", "Brandy Essence", "Vodka Essence"]
}, {
    id: 8,
    name: "Pineapple Halwa Bites",
    type: "bites",
    weight: "14 pieces",
    price: 490,
    originalPrice: 610,
    rating: 4.7,
    reviews: 91,
    tags: ["trending"],
    stock: 26,
    images: [
        "images/bites/pineapplehalwabites.png",
        "images/bites/pineapplehalwabites2.png"
    ],
    desc: "Tangy pineapple meets the warmth of saffron in this vibrant, tropical halwa. A burst of sunshine in every spoonful.",
    delivery: "Ships within 2-3 business days. Free shipping on orders above ₹999.",
    flavors: ["None", "Rum Essence", "Whiskey Essence", "Brandy Essence", "Vodka Essence"]
}, {
    id: 9,
    name: "Wheat & Jaggery Heritage Block",
    type: "block",
    weight: "500g",
    price: 380,
    originalPrice: 480,
    rating: 4.4,
    reviews: 143,
    tags: ["bestseller"],
    stock: 52,
    images: [
        "images/block/wheathalwablock.png"
    ],
    desc: "A rustic, wholesome halwa made with stone-ground wheat and organic jaggery. Simple, honest, and deeply satisfying.",
    delivery: "Ships within 2-3 business days. Free shipping on orders above ₹999.",
    flavors: ["None", "Rum Essence", "Whiskey Essence", "Brandy Essence", "Vodka Essence"]
}, {
    id: 10,
    name: "Gold Leaf Royal Gift Box",
    type: "giftbox",
    weight: "20 bites",
    price: 1499,
    originalPrice: 1999,
    rating: 5.0,
    reviews: 42,
    tags: ["featured", "premium", "bestseller"],
    stock: 8,
    images: [
        "images/giftbox/royalgiftbox.png",
        "images/giftbox/royalgiftbox2.png"
    ],
    desc: "The ultimate indulgence. Edible 24K gold leaf atop our signature saffron halwa. For those who seek the extraordinary.",
    delivery: "Ships within 2-3 business days. Free shipping on orders above ₹999.",
    flavors: ["None", "Rum Essence", "Whiskey Essence", "Brandy Essence", "Vodka Essence"]
}, {
    id: 11,
    name: "Banana Halwa Bites",
    type: "bites",
    weight: "12 pieces",
    price: 430,
    originalPrice: 540,
    rating: 4.6,
    reviews: 76,
    tags: ["trending"],
    stock: 30,
    images: [
        "images/bites/bananahalwabites.png",
        "images/bites/bananahalwabites2.png"
    ],
    desc: "Sweet, ripe bananas and crunchy walnuts come together in this comforting, homestyle halwa. A perfect teatime companion.",
    delivery: "Ships within 2-3 business days. Free shipping on orders above ₹999.",
    flavors: ["None", "Rum Essence", "Whiskey Essence", "Brandy Essence", "Vodka Essence"]
}, {
    id: 12,
    name: "Coconut & Cardamom Block",
    type: "block",
    weight: "500g",
    price: 410,
    originalPrice: 510,
    rating: 4.7,
    reviews: 88,
    tags: ["bestseller"],
    stock: 40,
    images: [
        "images/block/coconuthalwablock.png"
    ],
    desc: "Fresh coconut and fragrant cardamom create a halwa that's tropical, aromatic, and irresistibly creamy.",
    delivery: "Ships within 2-3 business days. Free shipping on orders above ₹999.",
    flavors: ["None", "Rum Essence", "Whiskey Essence", "Brandy Essence", "Vodka Essence"]
}, {
    id: 13,
    name: "Karutha Halwa Bites",
    type: "bites",
    weight: "14 pieces",
    price: 560,
    originalPrice: 690,
    rating: 4.8,
    reviews: 134,
    tags: ["featured", "trending"],
    stock: 20,
    images: [
        "images/bites/blackhalwabites.png",
        "images/bites/blackhalwabites2.png"
    ],
    desc: "Belgian chocolate meets traditional halwa in this decadent fusion. Rich, fudgy, and utterly addictive.",
    delivery: "Ships within 2-3 business days. Free shipping on orders above ₹999.",
    flavors: ["None", "Rum Essence", "Whiskey Essence", "Brandy Essence", "Vodka Essence"]
}, {
    id: 14,
    name: "Apple Cinnamon Block",
    type: "block",
    weight: "750g",
    price: 460,
    originalPrice: 570,
    rating: 4.5,
    reviews: 59,
    tags: ["trending"],
    stock: 25,
    images: [
        "images/block/applehalwablock.png"
    ],
    desc: "Warm cinnamon and sweet apples make this halwa taste like a cosy winter evening. Comfort food at its best.",
    delivery: "Ships within 2-3 business days. Free shipping on orders above ₹999.",
    flavors: ["None", "Rum Essence", "Whiskey Essence", "Brandy Essence", "Vodka Essence"]
}, {
    id: 15,
    name: "Truffle & Fig Gift Box",
    type: "giftbox",
    weight: "16 bites",
    price: 820,
    originalPrice: 1050,
    rating: 4.9,
    reviews: 47,
    tags: ["premium", "bestseller"],
    stock: 14,
    images: [
        "images/giftbox/trufflegiftbox.png",
        "images/giftbox/trufflegiftbox2.png"
    ],
    desc: "An exquisite pairing of black truffle and dried figs. Earthy, sweet, and profoundly luxurious.",
    delivery: "Ships within 2-3 business days. Free shipping on orders above ₹999.",
    flavors: ["None", "Rum Essence", "Whiskey Essence", "Brandy Essence", "Vodka Essence"]
}, {
    id: 16,
    name: "Classic Trio Gift Box",
    type: "giftbox",
    weight: "30 bites",
    price: 1299,
    originalPrice: 1600,
    rating: 4.8,
    reviews: 73,
    tags: ["featured", "gift"],
    stock: 15,
    images: [
        "images/giftbox/classicgiftbox.png",
        "images/giftbox/classicgiftbox2.png"
    ],
    desc: "A curated gift box featuring Karutha, Badam Pista, and Saffron Gold halwas. Beautifully packaged for gifting.",
    delivery: "Ships within 2-3 business days. Free shipping on orders above ₹999.",
    flavors: ["None", "Rum Essence", "Whiskey Essence", "Brandy Essence", "Vodka Essence"]
}, {
    id: 17,
    name: "Banana Halwa Block",
    type: "block",
    weight: "750g",
    price: 460,
    originalPrice: 570,
    rating: 4.5,
    reviews: 59,
    tags: ["trending"],
    stock: 25,
    images: [
        "images/block/bananahalwablock.png"
    ],
    desc: "Sweet, chewy, and packed with real banana goodness, this classic halwa is a true Kerala favorite.",
    delivery: "Ships within 2-3 business days. Free shipping on orders above ₹999.",
    flavors: ["None", "Rum Essence", "Whiskey Essence", "Brandy Essence", "Vodka Essence"]
}];

const TESTIMONIALS = [
    { name: "Priya Menon", location: "Kochi", text: "The Rum Essence Karutha Halwa is absolutely divine! The infusion adds a warmth that's perfect for evenings.", rating: 5 },
    { name: "Arjun Nair", location: "Trivandrum", text: "Best halwa I've ever had. The Badam Pista Delight is rich without being cloying. Will order again.", rating: 5 },
    { name: "Meera Krishnan", location: "Bangalore", text: "I sent the Gold Leaf Royal Gift Box and the recipient was speechless. Pure luxury.", rating: 5 },
    { name: "Suresh Pillai", location: "Chennai", text: "The Sugar-Free Dates & Fig Bites are a game-changer. Finally a halwa I can enjoy guilt-free!", rating: 4 }
];

const FAQS = [
    { q: "What makes Swalwa different?", a: "We use only the finest ingredients – premium nuts, real fruits, and authentic Kerala spices. Our signature flavour infusions (Rum, Whiskey, Brandy, Vodka) are carefully crafted to enhance the halwa experience." },
    { q: "Are the flavour infusions alcoholic?", a: "The infusions contain trace amounts of alcohol for flavour, but the alcohol is fully cooked out during the slow-cooking process. The final product is safe for all ages." },
    { q: "How should I store the halwa?", a: "Store in an airtight container at room temperature for up to 2 weeks, or refrigerate for up to 2 months. Bring to room temperature before serving for the best texture." },
    { q: "Do you ship internationally?", a: "Currently we ship across India. International shipping is coming soon – sign up for our newsletter to be notified!" },
    { q: "Can I customise a gift box?", a: "Absolutely! Contact our team and we'll create a bespoke gift box tailored to your preferences." }
];

// ---------- STATE ----------
let state = {
    cart: JSON.parse(localStorage.getItem('swalwaCart')) || [],
    wishlist: JSON.parse(localStorage.getItem('swalwaWishlist')) || [],
    currentProduct: null,
    selectedFlavor: 'None',
    quantity: 1,
    currentView: 'home',
    filteredProducts: [...PRODUCTS],
    activeType: 'all',
    searchQuery: '',
};

// ---------- DOM REFS ----------
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const homeView = $('#homeView');
const detailView = $('#productDetailView');
const wishlistView = $('#wishlistView');

const cartSidebar = $('#cartSidebar');
const cartOverlay = $('#cartOverlay');
const cartItems = $('#cartItems');
const cartFooter = $('#cartFooter');
const cartSubtotal = $('#cartSubtotal');
const cartTax = $('#cartTax');
const cartShipping = $('#cartShipping');
const cartGrandTotal = $('#cartGrandTotal');
const cartCount = $('#cartCount');
const closeCart = $('#closeCart');
const cartBtn = $('#cartBtn');

const wishlistCount = $('#wishlistCount');
const wishlistGrid = $('#wishlistGrid');
const wishlistEmpty = $('#wishlistEmpty');

const toastContainer = $('#toastContainer');

// Mobile menu elements
const mobileMenuOverlay = $('#mobileMenuOverlay');
const mobileMenu = $('#mobileMenu');
const mobileMenuClose = $('#mobileMenuClose');
const menuToggle = $('#menuToggle');
const mobileMenuItems = $('#mobileMenuItems');

// ---------- UTILITY ----------
function formatPrice(n) { return '₹' + Number(n).toLocaleString('en-IN'); }

function starsHtml(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    let s = '';
    for (let i = 0; i < full; i++) s += '<i class="fas fa-star"></i>';
    if (half) s += '<i class="fas fa-star-half-alt"></i>';
    const empty = 5 - full - half;
    for (let i = 0; i < empty; i++) s += '<i class="far fa-star"></i>';
    return s;
}

function toast(msg, type = 'success') {
    const el = document.createElement('div');
    el.className = `toast ${type}`;
    const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', warning: 'fa-triangle-exclamation' };
    el.innerHTML = `<i class="fas ${icons[type] || icons.success}"></i> ${msg}`;
    toastContainer.appendChild(el);
    setTimeout(() => { el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        setTimeout(() => el.remove(), 400); }, 3500);
}

function getProduct(id) { return PRODUCTS.find(p => p.id === id); }

function getRelated(product, limit = 4) {
    return PRODUCTS.filter(p => p.id !== product.id && p.type === product.type).slice(0, limit);
}

function getStockStatus(product) {
    if (product.stock <= 0) return { label: 'Out of Stock', cls: 'out' };
    if (product.stock < 10) return { label: `Only ${product.stock} left`, cls: 'low' };
    return { label: 'In Stock', cls: '' };
}

function getDiscount(p) {
    if (!p.originalPrice) return null;
    return Math.round((1 - p.price / p.originalPrice) * 100);
}

function getTypeLabel(type) {
    const map = { bites: 'Bites', block: 'Block', giftbox: 'Gift Box' };
    return map[type] || type;
}

function getTypeIcon(type) {
    const map = { bites: 'fa-candy-cane', block: 'fa-cube', giftbox: 'fa-gift' };
    return map[type] || 'fa-th-large';
}

// ---------- MOBILE MENU ----------
function openMobileMenu() {
    mobileMenuOverlay.classList.add('open');
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileMenuOverlay.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
}

menuToggle.addEventListener('click', openMobileMenu);
mobileMenuClose.addEventListener('click', closeMobileMenu);
mobileMenuOverlay.addEventListener('click', function(e) {
    if (e.target === this) closeMobileMenu();
});

// ---------- RENDER PRODUCT CARD ----------
function renderProductCard(product, gridId) {
    const grid = $(gridId);
    if (!grid) return;
    const stock = getStockStatus(product);
    const discount = getDiscount(product);
    const isWishlisted = state.wishlist.includes(product.id);
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.id = product.id;
    card.innerHTML = `
        <div class="card-img">
            <img src="${product.images[0]}" alt="${product.name}" loading="lazy" />
            <div class="card-badges">
                ${discount ? `<span class="badge discount">${discount}% OFF</span>` : ''}
                ${product.tags.includes('bestseller') ? `<span class="badge">★ Bestseller</span>` : ''}
                <span class="badge type-badge"><i class="fas ${getTypeIcon(product.type)}"></i> ${getTypeLabel(product.type)}</span>
                <span class="badge stock ${stock.cls}">${stock.label}</span>
            </div>
            <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" data-id="${product.id}" aria-label="Wishlist">
                <i class="fas fa-heart"></i>
            </button>
            <button class="quick-view-btn" data-id="${product.id}">Quick View</button>
        </div>
        <div class="card-body">
            <div class="product-type">${getTypeLabel(product.type)}</div>
            <div class="product-weight">${product.weight}</div>
            <div class="product-name">${product.name}</div>
            <div class="rating"><span class="stars">${starsHtml(product.rating)}</span> ${product.rating} (${product.reviews})</div>
            <div class="price-row">
                <span class="current">${formatPrice(product.price)}</span>
                ${product.originalPrice ? `<span class="original">${formatPrice(product.originalPrice)}</span>` : ''}
                ${discount ? `<span class="discount-pct">${discount}% off</span>` : ''}
            </div>
        </div>
    `;
    grid.appendChild(card);
}

// ---------- RENDER PRODUCTS ----------
function renderProducts(products, gridId) {
    const grid = $(gridId);
    if (!grid) return;
    grid.innerHTML = '';
    if (!products.length) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:32px;color:var(--gray);">No products found.</div>`;
        return;
    }
    products.forEach(p => renderProductCard(p, gridId));
}

// ---------- RENDER HOME ----------
function renderHome() {
    const featured = PRODUCTS.filter(p => p.tags.includes('featured'));
    renderProducts(featured, '#featuredGrid');

    const trending = PRODUCTS.filter(p => p.tags.includes('trending'));
    renderProducts(trending, '#trendingGrid');

    const bestsellers = PRODUCTS.filter(p => p.tags.includes('bestseller'));
    renderProducts(bestsellers, '#bestsellerGrid');

    // Testimonials (commented out - keep the code to avoid errors, but grid won't exist)
    // The grid element is commented out, so we skip populating it.
    // We'll just check if the grid exists before trying to fill it.
    const tGrid = $('#testimonialGrid');
    if (tGrid) {
        tGrid.innerHTML = '';
        TESTIMONIALS.forEach(t => {
            const div = document.createElement('div');
            div.className = 'testimonial-card';
            div.innerHTML = `
                <div class="stars">${'<i class="fas fa-star"></i>'.repeat(t.rating)}</div>
                <blockquote>“${t.text}”</blockquote>
                <div class="author">${t.name} <span>• ${t.location}</span></div>
            `;
            tGrid.appendChild(div);
        });
    }

    // FAQ
    const faqList = $('#faqList');
    faqList.innerHTML = '';
    FAQS.forEach((faq, i) => {
        const item = document.createElement('div');
        item.className = 'faq-item';
        item.innerHTML = `
            <div class="faq-q" data-index="${i}">
                <span>${faq.q}</span>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-a">${faq.a}</div>
        `;
        const q = item.querySelector('.faq-q');
        const a = item.querySelector('.faq-a');
        q.addEventListener('click', () => {
            const open = a.classList.toggle('open');
            q.classList.toggle('open', open);
        });
        faqList.appendChild(item);
    });

    // Type nav highlight (both desktop and mobile)
    const activeType = state.activeType;
    $$('#typeNav .type-item, #mobileMenuItems .type-item').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.type === activeType);
    });
}

// ---------- RENDER DETAIL ----------
function renderDetail(productId) {
    const product = getProduct(productId);
    if (!product) { toast('Product not found', 'error'); return; }
    state.currentProduct = product;
    state.quantity = 1;
    state.selectedFlavor = 'None';

    const mainImg = $('#detailMainImage');
    mainImg.src = product.images[0];
    mainImg.alt = product.name;
    const thumbs = $('#detailThumbnails');
    thumbs.innerHTML = '';
    product.images.forEach((img, i) => {
        const div = document.createElement('div');
        div.className = `thumb ${i === 0 ? 'active' : ''}`;
        div.innerHTML = `<img src="${img}" alt="${product.name} thumbnail ${i+1}" />`;
        div.addEventListener('click', () => {
            mainImg.src = img;
            thumbs.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
            div.classList.add('active');
        });
        thumbs.appendChild(div);
    });

    $('#detailType').textContent = getTypeLabel(product.type);
    $('#detailWeight').textContent = product.weight;
    $('#detailName').textContent = product.name;
    $('#detailStars').innerHTML = starsHtml(product.rating);
    $('#detailReviewCount').textContent = `${product.rating} (${product.reviews} reviews)`;
    $('#detailPrice').textContent = formatPrice(product.price);
    $('#detailOriginalPrice').textContent = product.originalPrice ? formatPrice(product.originalPrice) : '';
    const disc = getDiscount(product);
    $('#detailDiscount').textContent = disc ? `${disc}% off` : '';
    const stock = getStockStatus(product);
    const stockEl = $('#detailStock');
    stockEl.textContent = stock.label;
    stockEl.className = `detail-stock ${stock.cls}`;
    $('#detailDesc').textContent = product.desc;
    $('#detailDelivery').textContent = product.delivery;

    const flavorContainer = $('#flavorOptions');
    flavorContainer.innerHTML = '';
    product.flavors.forEach(f => {
        const btn = document.createElement('button');
        btn.className = `flavor-btn ${f === 'None' ? 'active' : ''}`;
        btn.textContent = f;
        btn.addEventListener('click', () => {
            flavorContainer.querySelectorAll('.flavor-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.selectedFlavor = f;
            $('#flavorInfo').textContent = f === 'None' ? 'Classic flavour, no infusion.' :
                `Enhanced with ${f.toLowerCase()} for a warm, sophisticated note.`;
        });
        flavorContainer.appendChild(btn);
    });
    $('#flavorInfo').textContent = 'Classic flavour, no infusion.';

    $('#qtyValue').textContent = state.quantity;

    const wlBtn = $('#detailWishlistBtn');
    wlBtn.classList.toggle('active', state.wishlist.includes(product.id));

    const related = getRelated(product);
    const rGrid = $('#relatedGrid');
    rGrid.innerHTML = '';
    related.forEach(r => {
        const div = document.createElement('div');
        div.className = 'related-card';
        div.innerHTML = `
            <img src="${r.images[0]}" alt="${r.name}" loading="lazy" />
            <div class="r-name">${r.name}</div>
            <div class="r-price">${formatPrice(r.price)}</div>
        `;
        div.addEventListener('click', () => { renderDetail(r.id);
            showView('detail'); });
        rGrid.appendChild(div);
    });

    showView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---------- RENDER WISHLIST ----------
function renderWishlist() {
    wishlistGrid.innerHTML = '';
    const items = state.wishlist.map(id => getProduct(id)).filter(Boolean);
    if (!items.length) {
        wishlistGrid.innerHTML = '';
        wishlistEmpty.style.display = 'block';
        wishlistCount.textContent = '0';
        return;
    }
    wishlistEmpty.style.display = 'none';
    wishlistCount.textContent = items.length;
    items.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="card-img">
                <img src="${p.images[0]}" alt="${p.name}" loading="lazy" />
                <button class="wishlist-btn active" data-id="${p.id}" aria-label="Remove from wishlist">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
            <div class="card-body">
                <div class="product-type">${getTypeLabel(p.type)}</div>
                <div class="product-weight">${p.weight}</div>
                <div class="product-name">${p.name}</div>
                <div class="price-row"><span class="current">${formatPrice(p.price)}</span></div>
                <button style="margin-top:6px;padding:6px 0;background:var(--gold-pale);border-radius:var(--radius-sm);font-weight:600;font-size:0.75rem;color:var(--brown-dark);" data-id="${p.id}" class="wishlist-view-cart">Add to Cart</button>
            </div>
        `;
        const wlBtn = card.querySelector('.wishlist-btn');
        wlBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleWishlist(p.id);
            renderWishlist();
        });
        const cartBtn = card.querySelector('.wishlist-view-cart');
        cartBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(p.id, 'None', 1);
            toast(`${p.name} added to cart!`);
        });
        card.addEventListener('click', () => { renderDetail(p.id);
            showView('detail'); });
        wishlistGrid.appendChild(card);
    });
}

// ---------- RENDER CART ----------
function renderCart() {
    const items = state.cart;
    cartItems.innerHTML = '';
    if (!items.length) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-bag"></i>
                <p>Your cart is empty.</p>
                <p style="font-size:0.8rem;">Browse our collection and add some delicious Swalwa!</p>
            </div>
        `;
        cartFooter.style.display = 'none';
        cartCount.textContent = '0';
        return;
    }
    cartFooter.style.display = 'block';
    let totalItems = 0;
    let subtotal = 0;

    items.forEach((item, idx) => {
        const product = getProduct(item.id);
        if (!product) return;
        totalItems += item.qty;
        subtotal += product.price * item.qty;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div class="ci-img"><img src="${product.images[0]}" alt="${product.name}" /></div>
            <div class="ci-info">
                <div class="ci-name">${product.name}</div>
                <div class="ci-flavor">${item.flavor !== 'None' ? 'Infusion: ' + item.flavor : ''}</div>
                <div class="ci-price">${formatPrice(product.price)}</div>
            </div>
            <div class="ci-qty">
                <button data-idx="${idx}" data-dir="-1">−</button>
                <span>${item.qty}</span>
                <button data-idx="${idx}" data-dir="1">+</button>
            </div>
            <button class="ci-remove" data-idx="${idx}"><i class="fas fa-trash-can"></i></button>
        `;
        cartItems.appendChild(div);
    });

    cartItems.querySelectorAll('.ci-qty button').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.dataset.idx);
            const dir = parseInt(btn.dataset.dir);
            updateCartQty(idx, dir);
        });
    });
    cartItems.querySelectorAll('.ci-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.dataset.idx);
            removeCartItem(idx);
        });
    });

    const tax = Math.round(subtotal * 0.08);
    const shipping = subtotal >= 999 ? 0 : 120;
    const grand = subtotal + tax + shipping;
    cartSubtotal.textContent = formatPrice(subtotal);
    cartTax.textContent = formatPrice(tax);
    cartShipping.textContent = shipping === 0 ? 'FREE' : formatPrice(shipping);
    cartGrandTotal.textContent = formatPrice(grand);
    cartCount.textContent = totalItems;
    localStorage.setItem('swalwaCart', JSON.stringify(state.cart));
}

// ---------- CART ACTIONS ----------
function addToCart(productId, flavor, qty) {
    const existing = state.cart.find(c => c.id === productId && c.flavor === flavor);
    if (existing) {
        existing.qty += qty;
    } else {
        state.cart.push({ id: productId, flavor, qty });
    }
    localStorage.setItem('swalwaCart', JSON.stringify(state.cart));
    renderCart();
}

function updateCartQty(idx, dir) {
    const item = state.cart[idx];
    if (!item) return;
    item.qty += dir;
    if (item.qty <= 0) {
        state.cart.splice(idx, 1);
    }
    localStorage.setItem('swalwaCart', JSON.stringify(state.cart));
    renderCart();
}

function removeCartItem(idx) {
    state.cart.splice(idx, 1);
    localStorage.setItem('swalwaCart', JSON.stringify(state.cart));
    renderCart();
    toast('Item removed from cart');
}

// ---------- WISHLIST ACTIONS ----------
function toggleWishlist(productId) {
    const idx = state.wishlist.indexOf(productId);
    if (idx > -1) {
        state.wishlist.splice(idx, 1);
        toast('Removed from wishlist', 'warning');
    } else {
        state.wishlist.push(productId);
        toast('Added to wishlist ❤️');
    }
    localStorage.setItem('swalwaWishlist', JSON.stringify(state.wishlist));
    wishlistCount.textContent = state.wishlist.length;
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        const id = parseInt(btn.dataset.id);
        if (id === productId) {
            btn.classList.toggle('active', state.wishlist.includes(id));
        }
    });
    if (state.currentProduct && state.currentProduct.id === productId) {
        $('#detailWishlistBtn').classList.toggle('active', state.wishlist.includes(productId));
    }
}

// ---------- VIEWS ----------
function showView(view) {
    state.currentView = view;
    homeView.style.display = view === 'home' ? 'block' : 'none';
    detailView.classList.toggle('active', view === 'detail');
    wishlistView.classList.toggle('active', view === 'wishlist');
    if (view === 'home') renderHome();
    if (view === 'wishlist') renderWishlist();
}

// ---------- FILTERS & SEARCH ----------
function applyFilters() {
    let results = [...PRODUCTS];
    const type = state.activeType;
    const query = state.searchQuery.trim().toLowerCase();

    if (type !== 'all') {
        results = results.filter(p => p.type === type);
    }
    if (query) {
        results = results.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.type.toLowerCase().includes(query) ||
            p.desc.toLowerCase().includes(query)
        );
    }
    state.filteredProducts = results;

    const existingSection = document.getElementById('filteredSection');
    if (existingSection) existingSection.remove();

    if (query || type !== 'all') {
        ['featuredSection', 'trendingSection', 'bestsellerSection'].forEach(s => {
            const el = $(`#${s}`);
            if (el) el.style.display = 'none';
        });

        const hero = document.querySelector('.hero');
        const container = hero.closest('.container');
        const parent = container.parentNode;
        const newSection = document.createElement('section');
        newSection.className = 'container';
        newSection.id = 'filteredSection';
        const typeLabel = type !== 'all' ? getTypeLabel(type) : 'All';
        const title = query ? `Results for "${query}"` : type !== 'all' ? typeLabel : 'All Products';
        newSection.innerHTML = `
            <div class="section-header">
                <div><h2 class="section-title">${title}</h2>
                <p class="section-sub">${results.length} products found</p></div>
                <button class="view-all" id="clearFilters">Clear Filters <i class="fas fa-times"></i></button>
            </div>
            <div class="product-grid" id="filteredGrid"></div>
        `;
        parent.insertBefore(newSection, container.nextSibling);
        renderProducts(results, '#filteredGrid');

        const clearBtn = document.getElementById('clearFilters');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                state.activeType = 'all';
                state.searchQuery = '';
                $('#searchInput').value = '';
                applyFilters();
                showView('home');
            });
        }
    } else {
        ['featuredSection', 'trendingSection', 'bestsellerSection'].forEach(s => {
            const el = $(`#${s}`);
            if (el) el.style.display = 'block';
        });
        renderHome();
    }

    // Update both desktop and mobile navs
    $$('#typeNav .type-item, #mobileMenuItems .type-item').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.type === state.activeType);
    });
    // Close mobile menu after filter
    closeMobileMenu();
}

// ---------- EVENT DELEGATION ----------
document.addEventListener('click', (e) => {
    const qvBtn = e.target.closest('.quick-view-btn');
    if (qvBtn) {
        const id = parseInt(qvBtn.dataset.id);
        renderDetail(id);
        return;
    }

    const wlBtn = e.target.closest('.wishlist-btn');
    if (wlBtn) {
        e.stopPropagation();
        const id = parseInt(wlBtn.dataset.id);
        toggleWishlist(id);
        return;
    }

    const card = e.target.closest('.product-card');
    if (card && !e.target.closest('.wishlist-btn') && !e.target.closest('.quick-view-btn') && !e.target.closest(
            '.wishlist-view-cart')) {
        const id = parseInt(card.dataset.id);
        if (id) renderDetail(id);
        return;
    }

    // Type nav clicks (desktop)
    const typeBtn = e.target.closest('#typeNav .type-item');
    if (typeBtn) {
        state.activeType = typeBtn.dataset.type;
        state.searchQuery = '';
        $('#searchInput').value = '';
        applyFilters();
        showView('home');
        return;
    }

    // Type nav clicks (mobile menu)
    const mobileTypeBtn = e.target.closest('#mobileMenuItems .type-item');
    if (mobileTypeBtn) {
        state.activeType = mobileTypeBtn.dataset.type;
        state.searchQuery = '';
        $('#searchInput').value = '';
        applyFilters();
        showView('home');
        return;
    }
});

// ---------- SEARCH ----------
$('#searchBtn').addEventListener('click', () => {
    state.searchQuery = $('#searchInput').value;
    applyFilters();
    showView('home');
});
$('#searchInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        state.searchQuery = $('#searchInput').value;
        applyFilters();
        showView('home');
    }
});

// ---------- CART SIDEBAR ----------
cartBtn.addEventListener('click', () => { cartSidebar.classList.add('open');
    cartOverlay.classList.add('open');
    renderCart(); });
closeCart.addEventListener('click', () => { cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('open'); });
cartOverlay.addEventListener('click', () => { cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('open'); });

// ---------- WISHLIST VIEW ----------
$('#wishlistBtn').addEventListener('click', () => {
    showView('wishlist');
    renderWishlist();
});
$('#wishlistBack').addEventListener('click', () => {
    showView('home');
    renderHome();
});

// ---------- DETAIL CONTROLS ----------
$('#qtyDec').addEventListener('click', () => {
    if (state.quantity > 1) state.quantity--;
    $('#qtyValue').textContent = state.quantity;
});
$('#qtyInc').addEventListener('click', () => {
    if (state.currentProduct && state.quantity < state.currentProduct.stock) state.quantity++;
    $('#qtyValue').textContent = state.quantity;
});

$('#detailAddCart').addEventListener('click', () => {
    if (!state.currentProduct) return;
    const id = state.currentProduct.id;
    const flavor = state.selectedFlavor || 'None';
    const qty = state.quantity;
    const product = getProduct(id);
    const existing = state.cart.find(c => c.id === id && c.flavor === flavor);
    const alreadyInCart = existing ? existing.qty : 0;
    if (alreadyInCart + qty > product.stock) {
        toast(`Only ${product.stock} items available`, 'error');
        return;
    }
    addToCart(id, flavor, qty);
    toast(`${product.name} (${flavor}) added to cart!`);
});

$('#detailWishlistBtn').addEventListener('click', () => {
    if (!state.currentProduct) return;
    toggleWishlist(state.currentProduct.id);
});

$('#detailBack').addEventListener('click', () => {
    showView('home');
    renderHome();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ---------- HERO SHOP BTN ----------
$('#heroShopBtn').addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector('#featuredSection');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
});

// ---------- VIEW ALL LINKS ----------
['featuredViewAll', 'trendingViewAll', 'bestsellerViewAll'].forEach(id => {
    const el = $(`#${id}`);
    if (el) {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            state.activeType = 'all';
            state.searchQuery = '';
            $('#searchInput').value = '';
            applyFilters();
            showView('home');
        });
    }
});

// ---------- NEWSLETTER (commented out – add safety check) ----------
const newsletterBtn = $('#newsletterBtn');
if (newsletterBtn) {
    newsletterBtn.addEventListener('click', () => {
        const email = $('#newsletterEmail').value.trim();
        if (!email || !email.includes('@')) {
            toast('Please enter a valid email', 'error');
            return;
        }
        toast(`Subscribed! Welcome to the Infusion Club 🎉`);
        $('#newsletterEmail').value = '';
    });
}

// ---------- CONTACT FORM ----------
$('#contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    toast('Message sent! We\'ll get back to you soon.');
    e.target.reset();
});

// ---------- CHECKOUT ----------
$('#checkoutBtn').addEventListener('click', () => {
    if (!state.cart.length) {
        toast('Your cart is empty', 'warning');
        return;
    }
    toast('Order placed! Thank you for shopping with Swalwa 🎉');
    state.cart = [];
    localStorage.setItem('swalwaCart', JSON.stringify(state.cart));
    renderCart();
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('open');
});

// ---------- INIT ----------
function init() {
    state.cart = JSON.parse(localStorage.getItem('swalwaCart')) || [];
    state.wishlist = JSON.parse(localStorage.getItem('swalwaWishlist')) || [];
    wishlistCount.textContent = state.wishlist.length;
    renderCart();
    renderHome();
    showView('home');
}

init();

console.log('🍯 Swalwa — Premium Gourmet Halwa');
console.log('✨ Crafted with love in Kerala');
console.log('📦 Bites • Block • Gift Box');
console.log('📸 Images: /images/{id}/main.jpg, thumb1.jpg, thumb2.jpg');