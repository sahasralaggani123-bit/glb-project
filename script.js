const PRODUCTS = [
  { id: 'bridal-lehenga', name: 'Bridal Lehenga', price: 8999, image: 'trending 2.jpg', description: 'Handcrafted bridal lehenga with rich zari accents for celebration nights.', fabric: 'Silk', category: 'bridal' },
  { id: 'designer-saree', name: 'Designer Saree', price: 6499, image: 'trending1.jpg', description: 'Flowing designer saree tailored for graceful festive styling.', fabric: 'Satin', category: 'saree' },
  { id: 'velvet-lehenga', name: 'Velvet Lehenga', price: 9599, image: 'trending7.jpg', description: 'Premium velvet lehenga with elegant panel detailing.', fabric: 'Velvet', category: 'lehenga' },
  { id: 'long-gown', name: 'Long Gown', price: 5599, image: 'trending3.jpg', description: 'Contemporary long gown with custom-fit silhouette.', fabric: 'Linen', category: 'gown' },
  { id: 'bridal-red', name: 'Red Bridal', price: 10999, image: 'thero 5.jpg', description: 'Classic red bridal ensemble for wedding ceremonies.', fabric: 'Silk', category: 'bridal' },
  { id: 'royal-wedding', name: 'Royal Wedding Wear', price: 12499, image: 'tlehanga.png', description: 'Royal wedding attire designed with couture tailoring.', fabric: 'Satin', category: 'bridal' },
  { id: 'golden-bridal', name: 'Golden Bridal', price: 11499, image: 'tbigbride.jpg', description: 'Golden bridal design with regal embroidery finish.', fabric: 'Velvet', category: 'bridal' },
  { id: 'floral-festive', name: 'Floral Festive Dress', price: 4999, image: 'trending4.jpg', description: 'Vibrant floral festive dress with lightweight drape.', fabric: 'Cotton', category: 'festive' },
  { id: 'party-anarkali', name: 'Party Anarkali', price: 5899, image: 'trending5.jpg', description: 'Twirl-ready anarkali for evening celebrations.', fabric: 'Silk', category: 'gown' },
  { id: 'signature-lehenga', name: 'Signature Lehenga', price: 7599, image: 'trending 10.jpg', description: 'Signature lehenga set with timeless craftsmanship.', fabric: 'Linen', category: 'lehenga' },
  { id: 'ethnic-chic', name: 'Ethnic Chic Set', price: 6299, image: 'trending 8.jpg', description: 'Ethnic chic outfit balancing modern and traditional cuts.', fabric: 'Cotton', category: 'festive' },
  { id: 'bridal-shimmer', name: 'Bridal Shimmer', price: 9999, image: 'trending11.jpg', description: 'Shimmer bridal look with tailored finishing and lining.', fabric: 'Satin', category: 'bridal' },
  { id: 'wedding-radiance', name: 'Wedding Radiance', price: 10499, image: 'trending12.jpg', description: 'Wedding radiance edition designed for statement entries.', fabric: 'Silk', category: 'bridal' }
];

const CUSTOM_OPTIONS = {
  Fabric: [
    { value: 'Cotton', image: 'trending5.jpg', description: 'Breathable daily comfort fabric.', durability: 'High', priceDiff: 0 },
    { value: 'Silk', image: 'trending1.jpg', description: 'Luxurious shine and rich drape.', durability: 'Medium', priceDiff: 900 },
    { value: 'Linen', image: 'trending3.jpg', description: 'Cool and airy textured fabric.', durability: 'High', priceDiff: 450 },
    { value: 'Satin', image: 'trending4.jpg', description: 'Smooth glossy finish for special events.', durability: 'Medium', priceDiff: 650 },
    { value: 'Velvet', image: 'trending7.jpg', description: 'Plush premium winter elegance.', durability: 'High', priceDiff: 1100 }
  ],
  Color: ['Ruby Red', 'Emerald Green', 'Royal Blue', 'Champagne Gold', 'Ivory'],
  Pattern: ['Plain', 'Floral', 'Printed', 'Embroidered'],
  'Sleeve Style': ['Full sleeve', 'Half sleeve', 'Sleeveless', 'Designer sleeve'],
  'Neck Style': ['Round neck', 'V neck', 'Boat neck', 'High collar'],
  Embroidery: ['Light Mirror', 'Thread Work', 'Stone Work'],
  Lining: ['Soft Cotton Lining', 'Silk Blend Lining', 'Structured Premium Lining']
};
/* HERO SLIDER */

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index){

slides.forEach(slide => slide.classList.remove("active"));

slides[index].classList.add("active");
}

function nextSlide(){

currentSlide++;

if(currentSlide >= slides.length){
currentSlide = 0;
}

showSlide(currentSlide);
}

setInterval(nextSlide,5000);

const COUPONS = { WELCOME10: 10, FASHION20: 20, BRIDAL15: 15 };

function getData(key, fallback = []) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}


function setData(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
function byId(id) { return document.getElementById(id); }

function notify(message, kind = 'success') {
  const box = document.createElement('div');
  box.className = `notify ${kind}`;
  box.textContent = message;
  document.body.appendChild(box);
  setTimeout(() => box.classList.add('show'), 20);
  setTimeout(() => box.remove(), 2500);
}

function updateNavBadges() {
  const cartCount = getData('cartItems').reduce((a, c) => a + (c.quantity || 1), 0);
  const wishCount = getData('wishlistItems').length;
  const cartBadge = document.querySelector('.cart-count');
  const wishBadge = document.querySelector('.wishlist-count');
  if (cartBadge) cartBadge.textContent = cartCount;
  if (wishBadge) wishBadge.textContent = wishCount;
}

function animateCartIcon() {
  const icon = document.querySelector('.cart-link');
  if (!icon) return;
  icon.classList.add('bounce');
  setTimeout(() => icon.classList.remove('bounce'), 700);
}

function saveUsersForm(action) {
  const emailInput = byId(action === 'login' ? 'loginEmail' : 'signupEmail');
  const passInput = byId(action === 'login' ? 'loginPassword' : 'signupPassword');
  if (!emailInput || !passInput) return;
  const email = emailInput.value.trim();
  const password = passInput.value.trim();
  if (!email || !password) return notify('Please fill all fields', 'error');
  const users = getData('users');
  if (action === 'signup') {
    if (users.some((u) => u.email === email)) return notify('User already exists', 'error');
    users.push({ email, password, createdAt: new Date().toISOString() });
    setData('users', users);
    notify('Signup successful');
    setTimeout(() => (window.location.href = 'login.html'), 600);
  } else {
    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) return notify('Invalid credentials', 'error');
    localStorage.setItem('activeUser', email);
    notify('Login successful');
    setTimeout(() => (window.location.href = 'index.html'), 600);
  }
}

function renderSearch() {
  const input = byId('globalSearch');
  const results = byId('searchSuggestions');
  if (!input || !results) return;

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    const matched = PRODUCTS.filter((p) => p.name.toLowerCase().includes(q)).slice(0, 6);
    results.innerHTML = q
      ? matched.map((p) => `<button data-id="${p.id}">${p.name}</button>`).join('') || '<p>No products found</p>'
      : '';
    results.classList.toggle('open', Boolean(q));

    const collectionCards = document.querySelectorAll('.product-card');
    if (collectionCards.length) {
      collectionCards.forEach((card) => {
        card.style.display = card.dataset.name.toLowerCase().includes(q) ? 'block' : q ? 'none' : 'block';
      });
    }
  });

  results.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-id]');
    if (!btn) return;
    localStorage.setItem('selectedProductId', btn.dataset.id);
    window.location.href = 'product.html';
  });
}

function openProduct(id) {
  localStorage.setItem('selectedProductId', id);
  window.location.href = 'product.html';
}

function addToWishlist(product, config = {}) {
  const list = getData('wishlistItems');
  list.push({ ...product, config, addedAt: Date.now() });
  setData('wishlistItems', list);
  updateNavBadges();
  notify('Added to wishlist');
}

function addToCart(product, config = {}) {
  const cart = getData('cartItems');
  cart.push({ ...product, config, quantity: 1, measurementProfile: localStorage.getItem('activeMeasurementProfile') || 'Default Profile' });
  setData('cartItems', cart);
  updateNavBadges();
  animateCartIcon();
  notify('Added to Cart ✓');
}

function buildProductCards(containerId, ids = PRODUCTS.map((p) => p.id)) {
  const wrap = byId(containerId);
  if (!wrap) return;
  const items = PRODUCTS.filter((p) => ids.includes(p.id));
  wrap.innerHTML = items
    .map(
      (p) => `<article class="product-card" data-name="${p.name}" onclick="openProduct('${p.id}')">
      <img src="${p.image}" alt="${p.name}">
      <div class="card-info"><h4>${p.name}</h4><p>₹${p.price}</p></div>
      <div class="card-actions">
        <button class="wishlist-btn"
    onclick="event.stopPropagation();addToWishlist(PRODUCTS.find(v=>v.id==='${p.id}'))">
    <i class="fa-regular fa-heart"></i>
  </button>

  <button class="add-cart-btn"
    onclick="event.stopPropagation();addToCart(PRODUCTS.find(v=>v.id==='${p.id}'))">
    Add to Cart
  </button>
</div>
    </article>`
    )
    .join('');
}

function initProductPage() {
  const title = byId('productName');
  if (!title) return;
  const id = localStorage.getItem('selectedProductId') || PRODUCTS[0].id;
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  const state = { Fabric: product.fabric, Color: 'Ruby Red', Pattern: 'Plain', 'Sleeve Style': 'Full sleeve', 'Neck Style': 'Round neck', Embroidery: 'Light Mirror', Lining: 'Soft Cotton Lining' };

  byId('mainPreview').src = product.image;
  byId('mainPreview').alt = product.name;
  title.textContent = product.name;
  byId('productPrice').textContent = `₹${product.price}`;
  byId('productDesc').textContent = product.description;

  const thumbs = [product.image, 'trending4.jpg', 'trending11.jpg'].map((img) => `<img class="thumb" src="${img}" onclick="document.getElementById('mainPreview').src='${img}'">`).join('');
  byId('thumbWrap').innerHTML = thumbs;

  document.querySelectorAll('.customize-btn').forEach((btn) => {
    btn.addEventListener('click', () => openOptionModal(btn.dataset.option, state, product));
  });

  function refreshSummary() {
    byId('summary').innerHTML = Object.entries(state).slice(0,5).map(([k,v]) => `<li><strong>${k}:</strong> ${v}</li>`).join('');
  }
  refreshSummary();

  byId('addToCartProduct').addEventListener('click', () => addToCart(product, state));
  byId('addToWishlistProduct').addEventListener('click', () => addToWishlist(product, state));

  const reviews = getData(`reviews_${product.id}`);
  const rList = byId('reviewList');
  const renderReviews = () => {
    rList.innerHTML = reviews.map((r) => `<li><span>${'★'.repeat(r.rating)}</span> ${r.text}</li>`).join('') || '<li>No reviews yet.</li>';
    byId('avgRating').textContent = reviews.length ? (reviews.reduce((a,b)=>a+b.rating,0)/reviews.length).toFixed(1) : '0.0';
  };
  renderReviews();
  byId('reviewForm').addEventListener('submit', (e) => {
    e.preventDefault();
    reviews.push({ rating: Number(byId('rating').value), text: byId('reviewText').value.trim() });
    setData(`reviews_${product.id}`, reviews);
    renderReviews();
    e.target.reset();
  });
}

function openOptionModal(option, state, product) {
  const modal = byId('optionModal');
  const list = byId('optionList');
  byId('modalTitle').textContent = `Select ${option}`;
  const opts = CUSTOM_OPTIONS[option] || [];
  list.innerHTML = opts
    .map((opt) => {
      if (typeof opt === 'string') {
        return `<button class="option-tile" data-value="${opt}">${opt}</button>`;
      }
      return `<button class="option-tile fabric" data-value="${opt.value}" data-img="${opt.image}">
      <img src="${opt.image}" alt="${opt.value}"><div><h4>${opt.value}</h4><p>${opt.description}</p><small>Durability: ${opt.durability} · +₹${opt.priceDiff}</small></div></button>`;
    })
    .join('');
  modal.showModal();

  list.querySelectorAll('.option-tile').forEach((tile) => {
    tile.addEventListener('click', () => {
      state[option] = tile.dataset.value;
      if (tile.dataset.img) byId('mainPreview').src = tile.dataset.img;
      byId('summary').innerHTML = Object.entries(state).slice(0,5).map(([k,v]) => `<li><strong>${k}:</strong> ${v}</li>`).join('');
      if (option === 'Color') byId('previewOverlay').style.background = `linear-gradient(120deg, transparent, rgba(255,255,255,.2), ${tile.dataset.value.toLowerCase().includes('red') ? 'rgba(173,32,32,.25)' : 'rgba(30,90,160,.25)'})`;
      notify(`${option} updated`);
      modal.close();
    });
  });
}

function initMeasurements() {
  const form = byId('measurementForm');
  if (!form) return;
  const list = byId('profiles');
  const profiles = getData('measurementProfiles');

  const render = () => {
    list.innerHTML = profiles.map((p, i) => `<li><strong>${p.name}</strong> · Chest ${p.chest} · Waist ${p.waist}
      <button onclick="setActiveProfile('${p.name}')">Use</button><button onclick="editProfile(${i})">Edit</button></li>`).join('') || '<li>No profiles saved.</li>';
  };
  window.setActiveProfile = (name) => { localStorage.setItem('activeMeasurementProfile', name); notify(`Measurement profile ${name} applied`); };
  window.editProfile = (i) => {
    Object.entries(profiles[i]).forEach(([k, v]) => { if (form.elements[k]) form.elements[k].value = v; });
    form.dataset.editing = i;
  };
  render();

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    if (form.dataset.editing !== undefined && form.dataset.editing !== '') profiles[form.dataset.editing] = data;
    else profiles.push(data);
    setData('measurementProfiles', profiles);
    form.reset();
    form.dataset.editing = '';
    render();
    notify('Measurement profile saved');
  });
}

function initCartPage() {
  const box = byId('cartItems');
  if (!box) return;
  const cart = getData('cartItems');
  const profiles = getData('measurementProfiles').map((p) => p.name);
  const couponInput = byId('couponCode');
  let activeCoupon = localStorage.getItem('activeCoupon') || '';

  const render = () => {
    box.innerHTML = cart.map((item, i) => `<article class='cart-item'>
      <img src='${item.image}' alt='${item.name}'><div><h4>${item.name}</h4><p>Fabric: ${item.config?.Fabric || item.fabric}</p><p>Color: ${item.config?.Color || 'Ruby Red'}</p>
      <label>Measurement Profile <select onchange="updateCart(${i},'measurementProfile',this.value)">${profiles.map((p)=>`<option ${p===item.measurementProfile?'selected':''}>${p}</option>`).join('')}</select></label>
      <label>Quantity <input type='number' min='1' value='${item.quantity}' onchange="updateCart(${i},'quantity',Number(this.value))"></label>
      <button onclick="removeCart(${i})">Remove item</button></div>
      <strong>₹${item.price * item.quantity}</strong></article>`).join('') || '<p>Your cart is empty.</p>';

    const subtotal = cart.reduce((a,c)=>a + c.price * c.quantity, 0);
    const delivery = subtotal > 0 ? 199 : 0;
    const discount = activeCoupon && COUPONS[activeCoupon] ? subtotal * (COUPONS[activeCoupon]/100) : 0;
    byId('subTotal').textContent = `₹${subtotal.toFixed(0)}`;
    byId('deliveryFee').textContent = `₹${delivery}`;
    byId('discount').textContent = `-₹${discount.toFixed(0)}`;
    byId('finalTotal').textContent = `₹${(subtotal + delivery - discount).toFixed(0)}`;
  };

  window.updateCart = (index, key, value) => { cart[index][key] = value; setData('cartItems', cart); render(); updateNavBadges(); };
  window.removeCart = (index) => { cart.splice(index, 1); setData('cartItems', cart); render(); updateNavBadges(); notify('Removed from cart','error'); };

  byId('applyCoupon')?.addEventListener('click', () => {
    const code = couponInput.value.trim().toUpperCase();
    if (!COUPONS[code]) return notify('Invalid coupon', 'error');
    activeCoupon = code;
    localStorage.setItem('activeCoupon', code);
    notify('Coupon applied');
    render();
  });

  render();
}

function initWishlistPage() {
  const box = byId('wishItems');
  if (!box) return;
  const wish = getData('wishlistItems');
  box.innerHTML = wish.map((item,i)=>`<article class='cart-item'><img src='${item.image}'><div><h4>${item.name}</h4><button onclick='moveWish(${i})'>Move to cart</button><button onclick='removeWish(${i})'>Remove</button></div></article>`).join('') || '<p>No wishlist items.</p>';
  window.removeWish = (i)=>{wish.splice(i,1);setData('wishlistItems',wish);notify('Removed from wishlist','error');location.reload();};
  window.moveWish = (i)=>{addToCart(wish[i], wish[i].config);wish.splice(i,1);setData('wishlistItems',wish);location.reload();};
}

function initAIStylist() {
  const form = byId('stylistForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const maxBudget = Number(data.budget || 99999);
    const picks = PRODUCTS.filter((p) => p.price <= maxBudget && (data.fabric === 'Any' || p.fabric === data.fabric)).slice(0, 3);
    byId('stylistResults').innerHTML = picks.map((p)=>`<article class='product-card' onclick="openProduct('${p.id}')"><img src='${p.image}'><div class='card-info'><h4>${p.name}</h4><p>Perfect for ${data.occasion} · ${data.bodyType}</p></div></article>`).join('') || '<p>No matching designs, try relaxing budget/fabric.</p>';
  });
}

function initCheckout() {
  const btn = byId('payNow');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const status = byId('payStatus');
    status.textContent = 'Processing payment...';
    setTimeout(() => {
      status.textContent = 'Payment successful ✓ Order confirmed';
      const orders = getData('orders');
      orders.push({ id: `KB${Date.now()}`, date: new Date().toLocaleDateString(), items: getData('cartItems'), total: byId('checkoutTotal').textContent });
      setData('orders', orders);
      setData('cartItems', []);
      notify('Order placed');
    }, 1400);
  });
  const subtotal = getData('cartItems').reduce((a,c)=>a+c.price*c.quantity,0);
  const discountCode = localStorage.getItem('activeCoupon');
  const discount = discountCode && COUPONS[discountCode] ? subtotal * (COUPONS[discountCode]/100) : 0;
  byId('checkoutTotal').textContent = `₹${(subtotal + 199 - discount).toFixed(0)}`;
}

function initDelivery() {
  byId('checkDelivery')?.addEventListener('click', () => {
    const pin = byId('pincode').value.trim();
    if (!/^\d{6}$/.test(pin)) return notify('Enter valid 6-digit pincode', 'error');
    byId('deliveryResult').innerHTML = `Available in your area. Estimated delivery: <strong>${new Date(Date.now()+12*86400000).toDateString()}</strong>`;
  });
  byId('startTracking')?.addEventListener('click', () => {
    const steps = ['Order Placed', 'Stitching in Progress', 'Quality Check', 'Shipped', 'Out for Delivery'];
    const line = byId('trackingLine');
    line.innerHTML = '';
    let i = 0;
    const timer = setInterval(() => {
      line.innerHTML += `<span>${steps[i]}</span>`;
      i++;
      if (i === steps.length) clearInterval(timer);
    }, 700);
  });
}

function initOrders() {
  const wrap = byId('orderList');
  if (!wrap) return;
  const orders = getData('orders');
  wrap.innerHTML = orders.map((o)=>`<article class='glass-card'><h4>Order ${o.id}</h4><p>${o.date}</p><p>${o.items.length} items · Total ${o.total}</p></article>`).join('') || '<p>No orders placed yet.</p>';
}

document.addEventListener('DOMContentLoaded', () => {
  renderSearch();
  updateNavBadges();
  buildProductCards('trendingGrid', ['bridal-lehenga','designer-saree','velvet-lehenga','long-gown','party-anarkali']);
  buildProductCards('bridalGrid', ['bridal-red','royal-wedding','golden-bridal','bridal-shimmer','wedding-radiance']);
  buildProductCards('collectionGrid');

  initProductPage();
  initMeasurements();
  initCartPage();
  initWishlistPage();
  initAIStylist();
  initCheckout();
  initDelivery();
  initOrders();

  byId('loginBtn')?.addEventListener('click', () => saveUsersForm('login'));
  byId('signupBtn')?.addEventListener('click', () => saveUsersForm('signup'));
});

