    // --- KONFIGURASI WA ---
        // Ganti nomor di bawah ini dengan nomor WhatsApp restoran (Gunakan kode negara, tanpa tanda +)
        const restaurantPhone = "6285819749737"; 

        // --- DATA ---
        const menuItems = [
     { id: 1 ,name: " Nasi Ayam Kipas ", category:  "Makanan", price: 16000 , rating: 4.5, time: "10 min", img: " img/menu/Makanan/Ayam%20Kipas.png ", desc: " Nasi Ayam Kipas ." },
{ id: 2 ,name: " Nasi Ayam <br/>Serundeng ", category:  "Makanan", price: 15000 , rating: 4.5, time: "10 min", img: " img/menu/Makanan/Ayam%20Serundeng.png ", desc: " Nasi Ayam Serundeng ." },
{ id: 3 ,name: " Nasi Cumi Calamari ", category:"Makanan", price: 15000 , rating: 4.5, time: "10 min", img: " img/menu/Makanan/Cumi%20Calamari.png ", desc: " Nasi Cumi Calamari ." },
{ id: 4 ,name: " Nasi Udang Selimut ", category:  "Makanan", price: 15000 , rating: 4.5, time: "10 min", img: " img/menu/Makanan/Udang%20Selimut.png ", desc: " Nasi Udang Selimut ." },
{ id: 5 ,name: " Nasi Chicken Katsu <br/> Barbeque ", category:  "Makanan", price: 15000 , rating: 4.5, time: "10 min", img: " img/menu/Makanan/Chicken%20Katsu%20Barbeque.png ", desc: " Nasi Chicken Katsu <br/> Barbeque ." },
{ id: 6 ,name: " Nasi Chicken Katsu <br/> Lada Hitam ", category:  "Makanan", price: 15000 , rating: 4.5, time: "10 min", img: " img/menu/Makanan/Chicken%20Katsu%20%20Lada%20Hitam.png ", desc: " Nasi Chicken Katsu <br/> Lada Hitam ." },
{ id: 7 ,name: " Nasi Sayap Spacy ", category:  "Makanan", price: 15000 , rating: 4.5, time: "10 min", img: " img/menu/Makanan/Ayam%20Spicy.png ", desc: " Nasi Sayap Spacy ." },
{ id: 8 ,name: " Nasi Telur Dadar ", category:  "Makanan", price: 11000 , rating: 4.5, time: "10 min", img: " img/menu/Makanan/Telor%20Dadar.png ", desc: " Nasi Telur Dadar ." },
{ id: 9 ,name: " Nasi Usus ", category:  "Makanan", price: 13000 , rating: 4.5, time: "10 min", img: " img/menu/Makanan/Usus.png ", desc: " Nasi Usus ." },
{ id: 10 ,name: " Nasi Hati Ampela Pedas ", category:  "Makanan", price: 13000 , rating: 4.5, time: "10 min", img: " img/menu/Makanan/krengsengan%20ampela%20ati.png ", desc: " Nasi Hati Ampela Pedas ." },
{ id: 11 ,name: " Nasi Putih ", category:  "Makanan", price: 5000 , rating: 4.5, time: "10 min", img: " img/menu/Makanan/Nasi%20Putih.png ", desc: " Nasi Putih ." },
{ id: 12 ,name: " Ceker Pedas ", category:  "Makanan", price: 10000 , rating: 4.5, time: "10 min", img: " img/menu/Makanan/Ceker%20Pedas.png ", desc: " Ceker Pedas ." },
{ id: 13 ,name: " Ceker Pedas Manis ", category:  "Makanan", price: 10000 , rating: 4.5, time: "10 min", img: " img/menu/Makanan/Ceker%20Pedas%20Manis.png ", desc: " Ceker Pedas Manis ." },
{ id: 14 ,name: " Sayap Pedas ", category:  "Makanan", price: 10000 , rating: 4.5, time: "10 min", img: " img/menu/Makanan/Sayap%20Pedas.png ", desc: " Sayap Pedas ." },
{ id: 15 ,name: " Sayap Pedas Manis ", category:  "Makanan", price: 10000 , rating: 4.5, time: "10 min", img: " img/menu/Makanan/Sayap%20Pedas%20Manis.png ", desc: " Sayap Pedas Manis ." },
{ id: 16 ,name: " Pempek ", category:  "Jajan", price: 13000 , rating: 4.5, time: "10 min", img: " img/menu/Jajan/Pempek.png ", desc: " Pempek ." },
{ id: 17 ,name: " Kentang Goreng ", category:  "Jajan", price: 10000 , rating: 4.5, time: "10 min", img: " img/menu/Jajan/Kentang%20Goreng.png ", desc: " Kentang Goreng ." },
{ id: 18 ,name: " Keju Aroma ", category:  "Jajan", price: 15000 , rating: 4.5, time: "10 min", img: " img/menu/Jajan/Keju%20Aroma.jpg ", desc: " Keju Aroma ." },
{ id: 19 ,name: " Dimsum ", category:  "Jajan", price: 10000 , rating: 4.5, time: "10 min", img: " img/menu/Jajan/Dimsum%20Ayam.png ", desc: " Dimsum ." },
{ id: 20 ,name: " Tahu Dimsum ", category:  "Jajan", price: 12000 , rating: 4.5, time: "10 min", img: " img/menu/Jajan/tahu%20dimsum%20Ayam.png ", desc: " Tahu Dimsum ." },
{ id: 21 ,name: " Salad Buah ", category:  "Jajan", price: 15000 , rating: 4.5, time: "10 min", img: " img/menu/Jajan/ ", desc: " Salad Buah ." },
{ id: 22 ,name: " Puding Susu ", category:  "Jajan", price: 10000 , rating: 4.5, time: "10 min", img: " img/menu/Jajan/Puding%20Susu%20Coklat.png ", desc: " Puding Susu ." },


{ id: 23 ,name: " Es Teh Original ", category:  "Minuman", price: 5000 , rating: 4.5, time: "5 min", img: " img/menu/Minuman/Es%20Teh%20Ori.png ", desc: " Es Teh Original ." },
{ id: 24 ,name: " Es Teh Leci ", category:  "Minuman", price: 8000 , rating: 4.5, time: "5 min", img: " img/menu/Minuman/Es%20Teh%20Leci.png ", desc: " Es Teh Leci ." },
{ id: 25 ,name: " Es Teh Melon ", category:  "Minuman", price: 8000 , rating: 4.5, time: "5 min", img: " img/menu/Minuman/Es%20Teh%20Melon.png ", desc: " Es Teh Melon ." },
{ id: 26 ,name: " Es Teh Strawberry ", category:  "Minuman", price: 8000 , rating: 4.5, time: "5 min", img: " img/menu/Minuman/Es%20Teh%20Strawberry.png ", desc: " Es Teh Strawberry ." },
{ id: 27 ,name: " Es Teh Lemon ", category:  "Minuman", price: 8000 , rating: 4.5, time: "5 min", img: " img/menu/Minuman/Es%20Teh%20Lemon.png ", desc: " Es Teh Lemon ." },
{ id: 28 ,name: " Milk Tea ", category:  "Minuman", price:9000 , rating: 4.5, time: "5 min", img: " img/menu/Minuman/Milk%20Tea.png ", desc: " Milk Tea ." },
{ id: 29 ,name: " Milk Tea Strawberry ", category:  "Minuman", price: 9000 , rating: 4.5, time: "5 min", img: " img/menu/Minuman/Milk%20Tea%20Strawberry.png ", desc: " Milk Tea Strawberry ." },
{ id: 30 ,name: " Milk Tea Melon ", category:  "Minuman", price: 9000 , rating: 4.5, time: "5 min", img: " img/menu/Minuman/Milk%20Tea%20Melon.png ", desc: " Milk Tea Melon ." },
{ id: 31 ,name: " Durian Milk ", category:  "Minuman", price: 8000 , rating: 4.5, time: "5 min", img: " img/menu/Minuman/Durian%20Milk.png ", desc: " Durian Milk ." },
{ id: 32 ,name: " Strawberry Milk ", category:  "Minuman", price: 8000 , rating: 4.5, time: "5 min", img: " img/menu/Minuman/Strawberry%20Milk.png ", desc: " Strawberry Milk ." },
{ id: 33 ,name: " Melon Milk ", category:  "Minuman", price: 8000 , rating: 4.5, time: "5 min", img: " img/menu/Minuman/Melon%20Milk.png ", desc: " Melon Milk ." },
{ id: 34 ,name: " Grape Milk ", category:  "Minuman", price: 8000 , rating: 4.5, time: "5 min", img: " img/menu/Minuman/Grape%20Milk.png ", desc: " Grape Milk ." },
{ id: 35 ,name: " Mango Milk ", category:  "Minuman", price: 8000 , rating: 4.5, time: "5 min", img: " img/menu/Minuman/Mango%20Milk.png ", desc: " Mango Milk ." },
{ id: 36 ,name: " Chocolate Milk ", category:  "Minuman", price: 8000 , rating: 4.5, time: "5 min", img: " img/menu/Minuman/Chocolate%20Milk.png ", desc: " Chocolate Milk ." },
{ id: 37 ,name: " Coffee Latte ", category:  "Minuman", price: 12000 , rating: 4.5, time: "5 min", img: " img/menu/Minuman/Chocolate%20Milk-1.png ", desc: " Coffee Latte ." },
{ id: 38 ,name: " Coffee Latte Brown Sugar ", category:  "Minuman", price: 14000 , rating: 4.5, time: "5 min", img: " img/menu/Minuman/Coffee%20Latte%20Brown%20Sugar.png ", desc: " Coffee Latte Brown Sugar ." },
{ id: 39 ,name: " Sup Buah ", category:  "Minuman", price: 12000 , rating: 4.5, time: "5 min", img: " img/menu/Minuman/Sup%20Buah.png ", desc: " Sup Buah ." },
{ id: 40 ,name: " Cendol Kecebong ", category:  "Minuman", price: 12000 , rating: 4.5, time: "5 min", img: " img/menu/Minuman/Cendol%20Kecebong.png ", desc: " Cendol Kecebong ." },


        ];

        let cart = [];
        let currentModalId = null;

        // --- INIT ---
        window.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                document.getElementById('loading-screen').style.opacity = '0';
                setTimeout(() => { document.getElementById('loading-screen').style.display = 'none'; }, 500);
            }, 1500);
            renderMenu('all');
            renderPopular();
        });

        // --- RENDER FUNCTIONS ---
        function formatRupiah(number) {
            return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
        }

        function createMenuCard(item) {
            return `
                <div class="menu-item" onclick="openModal(${item.id})">
                    <img src="${item.img}" alt="${item.name}" class="menu-img">
                    <div class="menu-info">
                        <h3>${item.name}</h3>
                        <div class="menu-rating"><i class="fas fa-star"></i> ${item.rating}</div>
                        <div class="menu-price">${formatRupiah(item.price)}</div>
                    </div>
                    <div class="btn-add-mini" onclick="event.stopPropagation(); addToCart(${item.id})">
                        <i class="fas fa-plus"></i>
                    </div>
                </div>
            `;
        }

        function renderPopular() {
            const container = document.getElementById('popular-grid');
            const popular = menuItems.slice(0, 4);
            container.innerHTML = popular.map(item => createMenuCard(item)).join('');
        }

        function renderMenu(category) {
            const container = document.getElementById('full-menu-grid');
            let filtered = menuItems;
            if (category !== 'all') {
                filtered = menuItems.filter(item => item.category === category);
            }
            container.innerHTML = filtered.map(item => createMenuCard(item)).join('');
        }

        function filterMenu(category, element) {
            if(element) {
                document.querySelectorAll('.cat-chip').forEach(el => el.classList.remove('active'));
                element.classList.add('active');
            }
            renderMenu(category);
        }

        // --- NAVIGATION ---
        function navigateTo(pageId) {
            document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
            document.getElementById(pageId).classList.add('active');
            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            document.getElementById('nav-' + pageId).classList.add('active');
            if (pageId === 'cart') renderCart();
            window.scrollTo(0, 0);
        }

        // --- MODAL ---
        function openModal(id) {
            const item = menuItems.find(i => i.id === id);
            if (!item) return;
            currentModalId = id;
            document.getElementById('modal-img').src = item.img;
            document.getElementById('modal-title').innerText = item.name;
            document.getElementById('modal-desc').innerText = item.desc;
            document.getElementById('modal-price').innerText = formatRupiah(item.price);
            document.getElementById('modal-rating').innerHTML = `<i class="fas fa-star"></i> ${item.rating}`;
            document.getElementById('modal-time').innerHTML = `<i class="fas fa-clock"></i> ${item.time}`;
            const catMap = { 'Makanan': 'Makanan', 'Minuman': "Minuman", 'Jajan': 'Jajan' };
            document.getElementById('modal-cat').innerText = catMap[item.category];
            document.getElementById('product-modal').classList.add('open');
        }

        function closeModal() {
            document.getElementById('product-modal').classList.remove('open');
            currentModalId = null;
        }
        document.getElementById('product-modal').addEventListener('click', function(e) {
            if (e.target === this) closeModal();
        });

        // --- CART LOGIC ---
        function addToCart(id) {
            const item = menuItems.find(i => i.id === id);
            const existing = cart.find(i => i.id === id);
            if (existing) { existing.qty++; } 
            else { cart.push({ ...item, qty: 1 }); }
            updateCartBadge();
            showToast(`+ ${item.name} ditambahkan`);
        }

        function addToCartFromModal() {
            if (currentModalId) { addToCart(currentModalId); closeModal(); }
        }

        function updateCartBadge() {
            const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
            const badge = document.getElementById('header-cart-count');
            badge.innerText = totalQty;
            if (totalQty > 0) badge.classList.add('active');
            else badge.classList.remove('active');
        }

        function renderCart() {
            const container = document.getElementById('cart-content');
            if (cart.length === 0) {
                container.innerHTML = `
                    <div class="empty-state">
                        <i class="fas fa-shopping-basket"></i>
                        <p>Keranjangmu masih kosong.</p>
                        <button class="btn-primary" style="margin: 20px auto 0; width: 100%;" onclick="navigateTo('menu')">Lihat Menu</button>
                    </div>
                `;
                return;
            }

            let html = '<div class="cart-list">';
            let subtotal = 0;

            cart.forEach(item => {
                subtotal += item.price * item.qty;
                html += `
                    <div class="cart-item">
                        <img src="${item.img}" class="cart-item-img">
                        <div class="cart-details">
                            <div class="cart-title">${item.name}</div>
                            <div class="cart-price">${formatRupiah(item.price)}</div>
                        </div>
                        <div class="cart-controls">
                            <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
                            <span class="qty-val">${item.qty}</span>
                            <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
                        </div>
                    </div>
                `;
            });
            html += '</div>';

            const tax = subtotal * 0.1;
            const total = subtotal + tax;

            html += `
                <div class="cart-summary">
                    <div class="summary-row">
                        <span>Subtotal</span>
                        <span>${formatRupiah(subtotal)}</span>
                    </div>
                    <div class="summary-row">
                        <span>Pajak (10%)</span>
                        <span>${formatRupiah(tax)}</span>
                    </div>
                    <div class="summary-row total">
                        <span>Total</span>
                        <span>${formatRupiah(total)}</span>
                    </div>
                    <button class="checkout-btn" onclick="checkout()">
                        <i class="fab fa-whatsapp"></i> Checkout via WhatsApp
                    </button>
                </div>
            `;
            container.innerHTML = html;
        }

        function changeQty(id, delta) {
            const itemIndex = cart.findIndex(i => i.id === id);
            if (itemIndex > -1) {
                cart[itemIndex].qty += delta;
                if (cart[itemIndex].qty <= 0) { cart.splice(itemIndex, 1); }
                renderCart();
                updateCartBadge();
            }
        }

        // --- WHATSAPP CHECKOUT LOGIC ---
        function checkout() {
            if (cart.length === 0) {
                showToast("Keranjang kosong!");
                return;
            }

            // Buat Pesan
            let message = "Halo Asap Pdas X Teko, saya ingin memesan:%0A%0A"; // %0A adalah enter
            let subtotal = 0;

            cart.forEach(item => {
                const itemTotal = item.price * item.qty;
                subtotal += itemTotal;
                // Format: - Nama Menu (x2) - Rp 200.000
                message += `- ${item.name} (x${item.qty}) - ${formatRupiah(itemTotal)}%0A`;
            });

            const tax = subtotal * 0.1;
            const total = subtotal + tax;

            message += `----------------%0A`;
            message += `*Total Pembayaran: ${formatRupiah(total)}*`;
            message += "%0A%0AMohon diproses ya! Terima kasih.";

            // Buka WhatsApp
            const url = `https://wa.me/${restaurantPhone}?text=${message}`;
            window.open(url, '_blank');
            
            // Opsional: Kosongkan keranjang setelah order
            // cart = [];
            // renderCart();
            // updateCartBadge();
        }

        function showToast(message) {
            const toast = document.getElementById('toast');
            const msgEl = document.getElementById('toast-msg');
            msgEl.innerText = message;
            toast.classList.add('show');
            setTimeout(() => { toast.classList.remove('show'); }, 2500);
        }
