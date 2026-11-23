/* ============================================
   95 Café — Interactions, Animations & i18n
   ============================================ */

const TRANSLATIONS = {
    es: {
        'page.title': '95 Café — Café de Especialidad en Madrid',
        'hero.tagline': 'Café de Especialidad',
        'hero.subtitle': 'Hecho con pasión, servido con cariño.<br>Disfruta del mejor café de especialidad en Madrid.',
        'hero.pillCoffee': '☕ Especialidad · BADi',
        'hero.pillHealthy': '🥑 Masa Madre & Healthy',
        'hero.pillDog': '🐾 Dog Friendly',
        'hero.pillSport': '🏃‍♂️🚴 Running & Cycling',
        'hero.scrollAria': 'Ir a la carta',
        'menu.title': 'Nuestra Carta',
        'menu.zoomTitle': 'Abrir carta en tamaño completo',
        'menu.zoomLabel': '🔍 Ver en tamaño completo',
        'menu.imgAlt': 'Carta de 95 Café',
        'menu.textToggle': 'Ver carta en texto y precios',
        'menu.catHot': 'Calientes',
        'menu.catCold': 'Frías',
        'menu.catToasts': 'Tostadas (Pan de hogaza masa madre)',
        'menu.catSandwiches': 'Sándwiches (Pan brioche clásico)',
        'menu.catBakery': 'Obrador',
        'menu.drinkNotes': 'Descafeinado | leche vegetal · Iced +0,50 € | extra shot +1,00 €',
        'menu.toastExtras': 'Extras: Paleta 50% Ibérica (3,00 €) · Jamón cocido (2,50 €) · Aguacate (3,00 €) · Salmón ahumado noruego premium (3,90 €)',
        'menu.askStaff': 'Consultar',
        'shop.title': 'Tienda Online',
        'shop.subtitle': 'Selección de cafés de especialidad y packs gourmet para disfrutar en casa.',
        'shop.pickupBanner': '<strong>Recogida exclusiva en tienda (sin envío a domicilio):</strong> compra online y te enviamos correo para recoger tu pedido en 95 Café (Arganzuela, Madrid).',
        'shop.pickupBadge': 'Recogida en tienda',
        'shop.tentacionDesc': 'Gushe Buna · Etiopía (250 g, BADi Coffee Roasters), Chocolate 90 % Eco y Ghee Eco de Cocuisine. 10 % de descuento.',
        'shop.clubDesc': "Tres orígenes de BADi Coffee Roasters (750 g): Kan Gunu Farmers (Kenia), Gushe Buna (Etiopía) y Nasa We'sx (Colombia Descafeinado). 10 % de descuento.",
        'shop.aperitivoDesc': 'Kan Gunu Farmers · Kenia (250 g) con conservas en AOVE ecológico (bonito del norte, melva y sardinas) y sal de manantial (1 kg) de Cocuisine. 10 % de descuento.',
        'shop.viewPack': 'Ver pack',
        'shop.visitStore': 'Visitar tienda online completa',
        'location.title': 'Encuéntranos',
        'location.hoursTitle': 'Horario',
        'location.hoursClosed': 'Lun - Mar: Cerrado',
        'location.hoursOpen': 'Mié - Dom: 8:30 - 17:30',
        'location.mapTitle': 'Ubicación de 95 Café',
        'footer.text': 'Café de especialidad, hecho con pasión.',
        'footer.highlights': 'Café de especialidad · Masa madre & opciones saludables · Terraza Dog Friendly · Running & Cycling en Arganzuela (Madrid Río / Pasillo Verde)',
        'footer.copy': '© 2025 95 Café. Todos los derechos reservados.'
    },
    en: {
        'page.title': '95 Café — Specialty Coffee in Madrid',
        'hero.tagline': 'Specialty Coffee',
        'hero.subtitle': 'Crafted with passion, served with love.<br>Enjoy the best specialty coffee experience in Madrid.',
        'hero.pillCoffee': '☕ Specialty · BADi',
        'hero.pillHealthy': '🥑 Sourdough & Healthy',
        'hero.pillDog': '🐾 Dog Friendly',
        'hero.pillSport': '🏃‍♂️🚴 Running & Cycling',
        'hero.scrollAria': 'Scroll to menu',
        'menu.title': 'Our Menu',
        'menu.zoomTitle': 'Open menu in full size',
        'menu.zoomLabel': '🔍 View full size',
        'menu.imgAlt': '95 Café Menu',
        'menu.textToggle': 'View text menu & prices',
        'menu.catHot': 'Hot Drinks',
        'menu.catCold': 'Cold Drinks',
        'menu.catToasts': 'Toasts (Artisanal Sourdough Bread)',
        'menu.catSandwiches': 'Sandwiches (Classic Brioche)',
        'menu.catBakery': 'Bakery',
        'menu.drinkNotes': 'Decaf | plant-based milk · Iced +0.50 € | extra shot +1.00 €',
        'menu.toastExtras': 'Extras: 50% Iberian Ham (3.00 €) · Cooked Ham (2.50 €) · Avocado (3.00 €) · Premium Norwegian Smoked Salmon (3.90 €)',
        'menu.askStaff': 'Ask staff',
        'shop.title': 'Online Store',
        'shop.subtitle': 'Curated specialty coffee & gourmet packs to enjoy at home.',
        'shop.pickupBanner': "<strong>Store pickup only (no home delivery):</strong> order online and we'll email you when your order is ready at 95 Café (Arganzuela, Madrid).",
        'shop.pickupBadge': 'Store pickup',
        'shop.tentacionDesc': 'Gushe Buna · Ethiopia (250g, BADi Coffee Roasters), Organic 90% Chocolate & Organic Ghee by Cocuisine. 10% off.',
        'shop.clubDesc': "Three origins by BADi Coffee Roasters (750g): Kan Gunu Farmers (Kenya), Gushe Buna (Ethiopia) & Nasa We'sx (Colombia Decaf). 10% off.",
        'shop.aperitivoDesc': 'Kan Gunu Farmers · Kenya (250g) with organic EVOO preserves (bonito, melva & sardines) and spring salt (1kg) by Cocuisine. 10% off.',
        'shop.viewPack': 'View pack',
        'shop.visitStore': 'Visit full online store',
        'location.title': 'Find Us',
        'location.hoursTitle': 'Opening Hours',
        'location.hoursClosed': 'Mon - Tue: Closed',
        'location.hoursOpen': 'Wed - Sun: 8:30 - 17:30',
        'location.mapTitle': '95 Café Location',
        'footer.text': 'Specialty coffee, crafted with passion.',
        'footer.highlights': 'Specialty Coffee · Sourdough & Healthy Options · Dog-Friendly Terrace · Running & Cycling Hub in Arganzuela (Madrid Río / Pasillo Verde)',
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
