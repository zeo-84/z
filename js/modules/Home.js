import { Utils } from "./Utils.js";

export class Home {
  constructor(container) {
    this.container = container;
    this.sliderIndex = 0;
  }

  render() {
    this.container.innerHTML = this.getHTML();
    this.bindEvents();
  }

  getHTML() {
    // ─── اسلایدرها ───
    const sliderItems = [
      { img: "assets/slider/slide1.webp", alt: "Slide 1" },
      { img: "assets/slider/slide2.webp", alt: "Slide 2" },
      { img: "assets/slider/slide3.webp", alt: "Slide 3" },
      { img: "assets/slider/slide4.webp", alt: "Slide 4" },
      { img: "assets/slider/slide5.webp", alt: "Slide 5" },
    ];

    // ─── محصولات ──
    const products = [
      { name: "Sord Haos", price: "$700", img: "assets/products/p1.png" },
      { name: "Cod-claroes", price: "$100", img: "assets/products/p2.png" },
      { name: "Storio", price: "$100", img: "assets/products/p3.png" },
      { name: "Lumina", price: "$250", img: "assets/products/p4.png" },
      { name: "Aurelia", price: "$180", img: "assets/products/p5.png" },
      { name: "Solaris", price: "$320", img: "assets/products/p6.png" },
      { name: "Radiant", price: "$150", img: "assets/products/p7.png" },
      { name: "Glow", price: "$90", img: "assets/products/p8.png" },
    ];

    const allProducts = [...products, ...products];

    // ── HTML محصولات ───
    const productsHTML = allProducts
      .map(
        (p) => `
            <div class="product-card">
                <div class="product-heart" onclick="this.classList.toggle('liked')">
                    <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                </div>
                <div class="product-img-wrap">
                    <img src="${p.img}" alt="${p.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%22%232d3f66%22 width=%22100%22 height=%22100%22/><text x=%2250%22 y=%2255%22 text-anchor=%22middle%22 fill=%22%238899aa%22 font-size=%2211%22>Product</text></svg>'">
                </div>
                <div class="product-name">${p.name}</div>
                <div class="product-price">${p.price}</div>
                <button class="product-like-btn">Like</button>
            </div>
        `
      )
      .join("");

    // ─── HTML اسلایدر (تمام‌عرض) ───
    const sliderHTML = sliderItems
      .map(
        (item, i) => `
            <div class="slider-item" data-index="${i}">
                <img src="${item.img}" alt="${item.alt}"
                     onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 190 60%22><rect fill=%22%231a2744%22 width=%22190%22 height=%2260%22/><text x=%2295%22 y=%2235%22 text-anchor=%22middle%22 fill=%22%238899aa%22 font-size=%2214%22>Slide ${
                       i + 1
                     }</text></svg>'">
            </div>
        `
      )
      .join("");

    // ── HTML Dots ───
    const dotsHTML = sliderItems
      .map(
        (_, i) => `
            <button class="slider-dot ${
              i === this.sliderIndex ? "active" : ""
            }" data-index="${i}"></button>
        `
      )
      .join("");

    return `
        <div class="home-page">

            <!-- ═══ Header ═══ -->
            <header class="home-header">
                <div class="header-search" id="search-btn">
                    <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                </div>
                <div class="header-logo">
                    <span class="header-logo-text">ZiSun</span>
                </div>
            </header>

            <!-- ═══ Search Modal ═══ -->
            <div class="search-modal-overlay" id="search-modal">
                <div class="search-modal">
                    <div class="search-input-wrap">
                        <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                        <input type="text" class="search-input" id="search-input" placeholder="Search products..." autofocus>
                        <button class="search-close" id="search-close"></button>
                    </div>
                    <div class="search-suggestions">
                        <span class="search-tag">Sunglasses</span>
                        <span class="search-tag">Perfume</span>
                        <span class="search-tag">Accessories</span>
                        <span class="search-tag">New Arrivals</span>
                        <span class="search-tag">Best Sellers</span>
                    </div>
                </div>
            </div>

            <!-- ═══ Hero ═══ -->
            <section class="hero-section">
                <video class="hero-video" autoplay muted loop playsinline>
                    <source src="assets/hero-video.mp4" type="video/mp4">
                </video>
                <div class="hero-overlay"></div>
                <div class="hero-content">

                    <button class="hero-cta">Discover Collection</button>
                </div>
            </section>

            <!-- ═══ Slider (تمام‌عرض) ═══ -->
            <section class="slider-section">
                <div class="slider-container" id="slider-container">
                    <div class="slider-track" id="slider-track">
                        ${sliderHTML}
                    </div>
                    <button class="slider-btn prev" id="slider-prev">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                    </button>
                    <button class="slider-btn next" id="slider-next">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                    </button>
                </div>
                <div class="slider-dots" id="slider-dots">
                    ${dotsHTML}
                </div>
            </section>

            <!-- ═══ Connect ═══ -->
            <section class="connect-section">
                <h2 class="connect-title">Connect With ZiSun</h2>
                <div class="connect-icons">
                    <div class="connect-icon" title="Telegram">
                        <svg viewBox="0 0 24 24"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/></svg>
                    </div>
                    <div class="connect-icon" title="Instagram">
                        <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
                    </div>
                    <div class="connect-icon" title="SMS">
                        <svg viewBox="0 0 24 24">
                            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <line x1="8" y1="9" x2="16" y2="9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                            <line x1="8" y1="13" x2="13" y2="13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <div class="connect-icon" title="Phone">
                        <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" fill="none" stroke="currentColor" stroke-width="2"/></svg>
                    </div>
                </div>
            </section>

            <!-- ═══ Chat Bot ═══ -->
            <div class="chat-bot" id="chat-bot">
                <div class="chat-bot-antenna"></div>
                <div class="chat-bot-head">
                    <div class="chat-bot-eyes">
                        <div class="chat-bot-eye"></div>
                        <div class="chat-bot-eye"></div>
                    </div>
                </div>
                <div class="chat-bot-body">
                    <div class="chat-bot-arm left"></div>
                    <div class="chat-bot-arm right"></div>
                </div>
            </div>

            <!-- ═══ Products ═══ -->
            <section class="products-section">
                <h3 class="products-scroll-title">Our Products</h3>
                <div class="products-track-wrapper">
                    <div class="products-track">
                        ${productsHTML}
                    </div>
                </div>
            </section>

            <!-- ═══ Footer ═══ -->
            <footer class="home-footer">
                <div class="footer-copy">&copy; 2024 ZiSun. All rights reserved.</div>
                <div class="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#">Quick</a></li>
                        <li><a href="#">Paylacs</a></li>
                        <li><a href="#">Terms & Ebeprices</a></li>
                    </ul>
                </div>
            </footer>

        </div>`;
  }

  bindEvents() {
    // ══════════════════════════════════════
    //   SLIDER - تمام‌عرض
    // ══════════════════════════════════════
    const track = Utils.qs("#slider-track");
    const container = Utils.qs("#slider-container");
    const items = track ? track.querySelectorAll(".slider-item") : [];
    const dots = Utils.qsa(".slider-dot");
    const prevBtn = Utils.qs("#slider-prev");
    const nextBtn = Utils.qs("#slider-next");

    if (items.length === 0) return;

    const goToSlide = (index) => {
      if (index < 0) index = items.length - 1;
      if (index >= items.length) index = 0;

      this.sliderIndex = index;

      // آپدیت active
      items.forEach((item, i) => {
        item.classList.toggle("active", i === index);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });

      // اسکرول به آیتم
      if (items[index]) {
        const scrollPos = items[index].offsetLeft;
        track.scrollTo({ left: scrollPos, behavior: "smooth" });
      }
    };

    // دکمه قبلی
    if (prevBtn) {
      prevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        goToSlide(this.sliderIndex - 1);
      });
    }

    // دکمه بعدی
    if (nextBtn) {
      nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        goToSlide(this.sliderIndex + 1);
      });
    }

    // کلیک روی dots
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        goToSlide(parseInt(dot.dataset.index));
      });
    });

    // کلیک روی آیتم
    items.forEach((item) => {
      item.addEventListener("click", () => {
        goToSlide(parseInt(item.dataset.index));
      });
    });

    // Swipe موبایل
    let touchStartX = 0;
    track.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.touches[0].clientX;
      },
      { passive: true }
    );

    track.addEventListener(
      "touchend",
      (e) => {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
          if (diff > 0) goToSlide(this.sliderIndex + 1);
          else goToSlide(this.sliderIndex - 1);
        }
      },
      { passive: true }
    );

    // ══════════════════════════════════════
    //   SEARCH MODAL
    // ══════════════════════════════════════
    const searchBtn = Utils.qs("#search-btn");
    const searchModal = Utils.qs("#search-modal");
    const searchClose = Utils.qs("#search-close");
    const searchInput = Utils.qs("#search-input");

    const openSearch = () => {
      if (searchModal) {
        searchModal.classList.add("active");
        setTimeout(() => searchInput && searchInput.focus(), 300);
      }
    };
    const closeSearch = () => {
      if (searchModal) searchModal.classList.remove("active");
    };

    if (searchBtn) searchBtn.addEventListener("click", openSearch);
    if (searchClose) searchClose.addEventListener("click", closeSearch);
    if (searchModal) {
      searchModal.addEventListener("click", (e) => {
        if (e.target === searchModal) closeSearch();
      });
    }
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeSearch();
    });

    Utils.qsa(".search-tag").forEach((tag) => {
      tag.addEventListener("click", () => {
        if (searchInput) {
          searchInput.value = tag.textContent;
          searchInput.focus();
        }
      });
    });

    // ══════════════════════════════════════
    //   CHAT BOT
    // ══════════════════════════════════════
    const chatBot = Utils.qs("#chat-bot");
    if (chatBot) {
      chatBot.addEventListener("click", () => {
        Utils.log("Chat bot clicked!", "info");
      });
    }
  }
}
