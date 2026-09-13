let currentLang = null; // O anki aktif dili hafızada tutar

const translations = {
    en: {
        newPost: "New Post",
        makeMeme: "Make a Meme",
        openArcade: "Open Arcade",
        signIn: "Sign in",
        signUp: "Sign up",
        welcomeMsg: "Soak your logs in wood.",
        moreTags: "More Tags",
        searchPlaceholder: "Find Post , Tags, or Users!"
    },
    tr: {
        newPost: "Yeni Gönderi",
        makeMeme: "Meme Yap",
        openArcade: "Arcade'i Aç",
        signIn: "Giriş Yap",
        signUp: "Kayıt Ol",
        welcomeMsg: "Kütüklerinizi ahşaba batırın.",
        moreTags: "Daha Fazla Etiket",
        searchPlaceholder: "Gönderi, Etiket veya Kullanıcı Ara!"
    }
};

function setLanguage(lang) {
    // KONTROL: Zaten seçili olan bayrağa basıldıysa HİÇBİR ŞEY YAPMA (Boşuna tetiklenme)
    if (currentLang === lang) return;

    currentLang = lang;

    // 1. METİNLERİ GÜNCELLE
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // 2. INPUT PLACEHOLDER GÜNCELLE
    const searchInput = document.querySelector('.orta-sidebar input');
    if (searchInput) {
        searchInput.placeholder = translations[lang].searchPlaceholder;
    }

    // 3. YUVARLIĞI SAĞA/SOLA SÜZDÜR
    const langContainer = document.getElementById('langToggle');
    if (langContainer) {
        if (lang === 'tr') {
            langContainer.classList.add('is-tr');
        } else {
            langContainer.classList.remove('is-tr');
        }
    }

    // 4. SEÇİMİ HAFIZADA SAKLA
    localStorage.setItem('preferredLang', lang);
}

// SAYFA YÜKLENDİĞİNDE HAFIZADAKİ DİLİ YÜKLE
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    setLanguage(savedLang);
});