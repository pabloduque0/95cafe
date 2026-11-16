/* ============================================
   95 Café — Interactions, Animations & i18n
   ============================================ */

const TRANSLATIONS = {
    es: {
        'page.title': '95 Café — Café de Especialidad en Madrid',
        'hero.tagline': 'Café de Especialidad',
        'hero.subtitle': 'Hecho con pasión, servido con cariño.<br>Disfruta del mejor café de especialidad en Madrid.',
        'hero.scrollAria': 'Ir a la carta',
        'menu.title': 'Nuestra Carta',
        'menu.zoomTitle': 'Abrir carta en tamaño completo',
        'menu.zoomLabel': '🔍 Ver en tamaño completo',
        'menu.imgAlt': 'Carta de 95 Café',
        'shop.title': 'Tienda Online',
        'shop.subtitle': 'Selección de cafés de especialidad y packs gourmet para disfrutar en casa.',
        'shop.pickupBanner': '<strong>Recogida exclusiva en tienda:</strong> compra online y recoge tu pedido directamente en 95 Café (Arganzuela, Madrid).',
        'shop.pickupBadge': 'Recogida en tienda',
        'shop.tentacionDesc': 'Café de especialidad Gushe Buna de Etiopía (250 g) acompañado de chocolate ecológico 90 % y ghee ecológico de Cocuisine.',
        'shop.clubDesc': 'Tres orígenes de café de especialidad de BADi Coffee Roasters: Kenia, Etiopía y Colombia Descafeinado (750 g en total).',
        'shop.aperitivoDesc': 'Café Kiambu Nyeri de Kenia (250 g) con conservas gourmet en AOVE y sal de manantial de Cocuisine.',
        'shop.viewPack': 'Ver pack',
        'shop.visitStore': 'Visitar tienda online completa',
        'location.title': 'Encuéntranos',
        'location.hoursTitle': 'Horario',
        'location.hoursClosed': 'Lun - Mar: Cerrado',
        'location.hoursOpen': 'Mié - Dom: 8:30 - 17:30',
        'location.mapTitle': 'Ubicación de 95 Café',
        'footer.text': 'Café de especialidad, hecho con pasión.',
        'footer.copy': '© 2025 95 Café. Todos los derechos reservados.'
    },
    en: {
        'page.title': '95 Café — Specialty Coffee in Madrid',
        'hero.tagline': 'Specialty Coffee',
        'hero.subtitle': 'Crafted with passion, served with love.<br>Enjoy the best specialty coffee experience in Madrid.',
        'hero.scrollAria': 'Scroll to menu',
        'menu.title': 'Our Menu',
        'menu.zoomTitle': 'Open menu in full size',
        'menu.zoomLabel': '🔍 View full size',
        'menu.imgAlt': '95 Café Menu',
        'shop.title': 'Online Store',
        'shop.subtitle': 'Curated specialty coffee & gourmet packs to enjoy at home.',
        'shop.pickupBanner': '<strong>Store pickup only:</strong> order online and pick up your order directly at 95 Café (Arganzuela, Madrid).',
        'shop.pickupBadge': 'Store pickup',
        'shop.tentacionDesc': 'Gushe Buna Ethiopia specialty coffee (250g) paired with Cocuisine organic 90% chocolate and organic ghee.',
        'shop.clubDesc': 'Three origins of specialty coffee by BADi Coffee Roasters: Kenya, Ethiopia, and Colombia Decaf (750g total).',
        'shop.aperitivoDesc': 'Kiambu Nyeri Kenya coffee (250g) with Cocuisine gourmet preserves in EVOO and spring salt.',
        'shop.viewPack': 'View pack',
        'shop.visitStore': 'Visit full online store',
        'location.title': 'Find Us',
        'location.hoursTitle': 'Opening Hours',
        'location.hoursClosed': 'Mon - Tue: Closed',
        'location.hoursOpen': 'Wed - Sun: 8:30 - 17:30',
        'location.mapTitle': '95 Café Location',
        'footer.text': 'Specialty coffee, crafted with passion.',
        'footer.copy': '© 2025 95 Café. All rights reserved.'
    }
};

function applyLanguage(lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.es;
    const activeLang = TRANSLATIONS[lang] ? lang : 'es';

    document.documentElement.lang = activeLang;
    document.title = dict['page.title'];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (dict[key] !== undefined) el.setAttribute('title', dict[key]);
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
        const key = el.getAttribute('data-i18n-aria-label');
        if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        const key = el.getAttribute('data-i18n-alt');
        if (dict[key] !== undefined) el.setAttribute('alt', dict[key]);
    });

    document.querySelectorAll('[data-i18n-zoom]').forEach(el => {
        const key = el.getAttribute('data-i18n-zoom');
        if (dict[key] !== undefined) el.setAttribute('data-zoom-label', dict[key]);
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        const isActive = btn.getAttribute('data-lang') === activeLang;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', String(isActive));
    });
}

document.addEventListener('DOMContentLoaded', () => {

    // --- Language Initialization & Switcher ---
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    let savedLang = null;
    try {
        savedLang = localStorage.getItem('95cafe_lang');
    } catch (_) {
        // Ignore storage errors in restricted contexts
    }
    const initialLang = (urlLang && TRANSLATIONS[urlLang]) ? urlLang
        : (savedLang && TRANSLATIONS[savedLang]) ? savedLang
        : 'es';

    if (initialLang !== 'es') {
        applyLanguage(initialLang);
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            applyLanguage(lang);
            try {
                localStorage.setItem('95cafe_lang', lang);
            } catch (_) {
                // Ignore storage errors
            }
        });
    });

    // --- Intersection Observer for scroll animations ---
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe animated elements
    document.querySelectorAll('.location-info, .map-wrapper, .menu-wrapper, .product-card').forEach(el => {
        observer.observe(el);
    });

    // --- Subtle parallax on hero logo ---
    const logo = document.getElementById('main-logo');
    if (logo) {
        let ticking = false;
        window.addEventListener('mousemove', (e) => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const x = (e.clientX / window.innerWidth - 0.5) * 8;
                    const y = (e.clientY / window.innerHeight - 0.5) * 8;
                    logo.style.transform = `translate(${x}px, ${y}px)`;
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // --- Smooth scroll for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

});
