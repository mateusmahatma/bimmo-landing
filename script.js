// Mobile Menu Toggle
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');

mobileMenuIcon.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

// Close mobile menu when a link is clicked
// Close mobile menu when a link is clicked (except language toggle)
document.querySelectorAll('.mobile-menu ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        if (e.target.id !== 'mobile-lang-toggle') {
            mobileMenu.classList.remove('active');
        }
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Internationalization (i18n)
const translations = {
    en: {
        nav_home: "Home",
        nav_why: "Why It Matters?",
        nav_solution: "Solution",
        nav_features: "Features",
        nav_cta: "Start Now",
        hero_title: "Master Your Finance,<br> <span class=\"highlight\">Master Your Future</span>",
        hero_subtitle: "Don't let money control your life. Start your journey to financial freedom with the right understanding and tools.",
        hero_btn_learn: "Learn More",
        hero_btn_features: "See Features",
        hero_trust: "Financial app with trusted security system.",
        problem_title: "Why Do Many People Fail?",
        problem_subtitle: "Without good financial planning, financial risks lurk around every corner.",
        problem_1_title: "Piling Debt",
        problem_1_desc: "Uncontrolled spending often leads to a debt trap that is difficult to stop.",
        problem_2_title: "No Savings",
        problem_2_desc: "Unprepared for emergencies due to lack of emergency funds.",
        problem_3_title: "Bad Investments",
        problem_3_desc: "Tempted by instant profits without adequate risk understanding.",
        solution_title: "Smart Solutions for Healthy Finances",
        solution_subtitle: "Managing finances doesn't mean torturing yourself, but creating peace of mind.",
        solution_1_title: "Realistic Budgeting",
        solution_1_desc: "Create a budget that fits your lifestyle and goals.",
        solution_2_title: "Automatic Recording",
        solution_2_desc: "Monitor every income and expense without hassle.",
        solution_3_title: "Financial Analysis",
        solution_3_desc: "Get deep insights into your financial health.",
        features_title: "Bimmo Premium Features",
        features_subtitle: "Complete tools for managing personal and business finances.",
        feature_budget_title: "Budgeting",
        feature_budget_desc: "Create and manage your budgets easily.",
        feature_emergency_title: "Emergency Fund",
        feature_emergency_desc: "Build your safety net systematically.",
        feature_cashflow_title: "Cash Flow",
        feature_cashflow_desc: "Monitor your money in and out.",
        feature_liability_title: "Control Liability",
        feature_liability_desc: "Manage and reduce your debts effectively.",
        feature_visual_title: "Visual Reports",
        feature_visual_desc: "Easy-to-understand charts.",
        feature_security_title: "Bank Security",
        feature_security_desc: "High-level encrypted data.",
        cta_title: "Ready to Take Control?",
        cta_subtitle: "Join thousands of other smart users today.",
        cta_btn: "Sign Up Free Now",
        cta_pricing_note: "7-day free trial, then IDR 49,000/month",
        footer_desc: "Your trusted partner in your financial journey towards a brighter future.",
        footer_quick_links: "Quick Links",
        footer_about: "About Us",
        footer_careers: "Careers",
        footer_blog: "Blog",
        footer_privacy: "Privacy Policy",
        footer_contact: "Contact Us",
        footer_follow: "Follow Us",

        // Secure Process Section
        secure_title: "How Bimmo Protects Your Data",
        secure_subtitle: "Your privacy is our priority. We use End-to-End Encryption (E2EE) to ensure your financial data remains your own.",
        step_1_title: "Store Your Assets",
        step_1_desc: "You safely record your assets, transactions, or goods into the Bimmo app.",
        step_2_title: "Bimmo as a Courier",
        step_2_desc: "Bimmo acts as a secure courier, encrypting your data locally before it ever leaves your device.",
        step_3_title: "Secure in the Vault",
        step_3_desc: "Your data is stored in a digital brankas (vault) that only you can access with your private key.",

        // Guide Page
        nav_guide: "Guide",
        guide_title: "Bimmo Help Center",
        guide_subtitle: "Find answers to your questions about Bimmo",
        guide_search_placeholder: "Search guides...",
        guide_cat_title: "Guide Categories",
        cat_starting: "Getting Started",
        cat_account: "Account & Security",
        cat_features: "Key Features",
        cat_billing: "Billing & Payment",
        guide_pop_title: "Popular Articles",
        pop_article_1: "How to reset Bimmo account password",
        pop_article_2: "How to export financial reports to Excel/PDF",
        pop_article_3: "Guide to connecting e-wallets (OVO, GoPay)",
        pop_article_4: "Tips for effective monthly budgeting",
        pop_article_5: "How to invite partners for business collaboration",
        article_register: "How to Register Bimmo Account",
        article_login: "How to Login Bimmo",
        back_to_popular: "Back to Popular Articles",
        modal_reg_title: "How to Register Bimmo Account",
        modal_reg_step1: "Access the registration page via <a href='https://app.bimmo.id/daftar' target='_blank'>https://app.bimmo.id/daftar</a>.",
        modal_reg_step2: "Fill in all fields completely and correctly.",
        modal_reg_step3: "Check the box 'I agree and accept the terms and conditions'.",
        modal_reg_step4: "Click the 'Create an account' button to complete the registration process.",
        modal_login_title: "How to Login Bimmo",
        modal_login_step1: "Access the login page via <a href='https://app.bimmo.id' target='_blank'>https://app.bimmo.id</a>.",
        modal_login_step2: "Enter your username and password.",
        modal_login_step3: "Click the \"Login\" button.",
        guide_faq_title: "Short FAQ",
        faq_q1: "Is Bimmo free to use?",
        faq_a1: "Yes, Bimmo has a free plan with basic features sufficient for daily personal financial recording. We also offer a Premium plan for more complete features.",
        faq_q2: "How is my data security at Bimmo?",
        faq_a2: "Data security is our top priority. Bimmo uses bank-level encryption to protect all your transaction data and personal information.",
        faq_q3: "Can I access Bimmo from Mobile and Laptop?",
        faq_a3: "Of course! Bimmo is cloud-based, so you can access your account from any device (Android, iOS, or Web Browser) in real-time."
    },
    id: {
        nav_home: "Beranda",
        nav_why: "Mengapa Penting?",
        nav_solution: "Solusi",
        nav_features: "Fitur",
        nav_cta: "Mulai Sekarang",
        hero_title: "Kuasai Keuanganmu,<br> <span class=\"highlight\">Kuasai Masa Depanmu</span>",
        hero_subtitle: "Jangan biarkan uang mengatur hidup Anda. Mulailah perjalanan menuju kebebasan finansial dengan pemahaman dan alat yang tepat.",
        hero_btn_learn: "Pelajari Lebih Lanjut",
        hero_btn_features: "Lihat Fitur",
        hero_trust: "Aplikasi keuangan dengan sistem keamanan yang dapat dipercaya.",
        problem_title: "Mengapa Banyak Orang Gagal?",
        problem_subtitle: "Tanpa perencanaan keuangan yang baik, risiko finansial mengintai di setiap sudut.",
        problem_1_title: "Utang Menumpuk",
        problem_1_desc: "Pengeluaran tanpa kendali seringkali berujung pada jebakan utang yang sulit dihentikan.",
        problem_2_title: "Tidak Ada Tabungan",
        problem_2_desc: "Ketidaksiapan menghadapi keadaan darurat karena tidak adanya dana cadangan.",
        problem_3_title: "Investasi Bodong",
        problem_3_desc: "Tergiur keuntungan instan tanpa pemahaman risiko yang memadai.",
        solution_title: "Solusi Cerdas untuk Keuangan Sehat",
        solution_subtitle: "Mengatur keuangan bukan berarti menyiksa diri, melainkan menciptakan ketenangan pikiran.",
        solution_1_title: "Budgeting yang Realistis",
        solution_1_desc: "Buat anggaran yang sesuai dengan gaya hidup dan tujuan Anda.",
        solution_2_title: "Pencatatan Otomatis",
        solution_2_desc: "Pantau setiap pemasukan dan pengeluaran tanpa ribet.",
        solution_3_title: "Analisis Keuangan",
        solution_3_desc: "Dapatkan wawasan mendalam tentang kesehatan finansial Anda.",
        features_title: "Fitur Unggulan Bimmo",
        features_subtitle: "Alat lengkap untuk mengelola keuangan pribadi maupun bisnis.",
        feature_budget_title: "Budgeting",
        feature_budget_desc: "Buat dan kelola anggaran Anda dengan mudah.",
        feature_emergency_title: "Dana Darurat",
        feature_emergency_desc: "Bangun jaring pengaman Anda secara sistematis.",
        feature_cashflow_title: "Arus Kas",
        feature_cashflow_desc: "Pantau uang masuk dan keluar Anda.",
        feature_liability_title: "Kontrol Kewajiban",
        feature_liability_desc: "Kelola dan kurangi utang Anda secara efektif.",
        feature_visual_title: "Laporan Visual",
        feature_visual_desc: "Grafik yang mudah dipahami.",
        feature_security_title: "Keamanan Bank",
        feature_security_desc: "Data terenkripsi tingkat tinggi.",
        cta_title: "Siap Mengambil Kendali?",
        cta_subtitle: "Bergabunglah dengan ribuan pengguna cerdas lainnya hari ini.",
        cta_btn: "Daftar Gratis Sekarang",
        cta_pricing_note: "Uji coba gratis 7 hari, selanjutnya Rp 49.000/bulan",
        footer_desc: "Partner terpercaya dalam perjalanan finansial Anda menuju masa depan yang lebih cerah.",
        footer_quick_links: "Link Cepat",
        footer_about: "Tentang Kami",
        footer_careers: "Karir",
        footer_blog: "Blog",
        footer_privacy: "Kebijakan Privasi",
        footer_contact: "Hubungi Kami",
        footer_follow: "Ikuti Kami",

        // Secure Process Section
        secure_title: "Bagaimana Bimmo Melindungi Data Anda",
        secure_subtitle: "Privasi Anda adalah prioritas kami. Kami menggunakan End-to-End Encryption (E2EE) untuk memastikan data keuangan Anda tetap menjadi milik Anda.",
        step_1_title: "Simpan Aset Anda",
        step_1_desc: "Anda mencatat aset, transaksi, atau barang berharga Anda dengan aman ke aplikasi Bimmo.",
        step_2_title: "Bimmo sebagai Kurir",
        step_2_desc: "Bimmo bertindak sebagai kurir aman, mengenkripsi data Anda secara lokal sebelum meninggalkan perangkat Anda.",
        step_3_title: "Aman di Brankas",
        step_3_desc: "Data Anda disimpan dalam brankas digital yang hanya bisa Anda akses dengan kunci privat Anda.",

        // Guide Page
        nav_guide: "Panduan",
        guide_title: "Pusat Bantuan Bimmo",
        guide_subtitle: "Temukan jawaban untuk pertanyaan Anda seputar Bimmo",
        guide_search_placeholder: "Cari panduan...",
        guide_cat_title: "Kategori Panduan",
        cat_starting: "Memulai",
        cat_account: "Akun & Keamanan",
        cat_features: "Fitur Utama",
        cat_billing: "Pembayaran",
        guide_pop_title: "Artikel Populer",
        pop_article_1: "Cara reset password akun Bimmo",
        pop_article_2: "Cara export laporan keuangan ke Excel/PDF",
        pop_article_3: "Panduan menghubungkan e-wallet (OVO, GoPay)",
        pop_article_4: "Tips mengatur budget bulanan agar efektif",
        pop_article_5: "Cara mengundang partner untuk kolaborasi bisnis",
        article_register: "Cara Daftar",
        article_login: "Cara Masuk",
        back_to_popular: "Kembali ke Artikel Populer",
        modal_reg_title: "Cara Mendaftar",
        modal_reg_step1: "Akses halaman pendaftaran melalui <a href='https://app.bimmo.id/daftar' target='_blank'>https://app.bimmo.id/daftar</a>.",
        modal_reg_step2: "Isi semua kolom dengan lengkap dan benar.",
        modal_reg_step3: "Centang kotak 'Saya menyetujui dan menerima syarat dan ketentuan'.",
        modal_reg_step4: "Klik tombol 'Buat akun' untuk menyelesaikan proses pendaftaran.",
        modal_login_title: "Cara Masuk",
        modal_login_step1: "Akses halaman login melalui <a href='https://app.bimmo.id' target='_blank'>https://app.bimmo.id</a>.",
        modal_login_step2: "Masukkan username dan password Anda.",
        modal_login_step3: "Klik tombol \"Masuk\".",
        guide_faq_title: "FAQ Singkat",
        faq_q1: "Apakah Bimmo bisa digunakan secara gratis?",
        faq_a1: "Ya, Bimmo memiliki paket gratis dengan fitur dasar yang cukup untuk pencatatan keuangan pribadi harian. Kami juga menawarkan paket Premium untuk fitur yang lebih lengkap.",
        faq_q2: "Bagaimana data keamanan saya di Bimmo?",
        faq_a2: "Keamanan data adalah prioritas utama kami. Bimmo menggunakan enkripsi tingkat bank untuk melindungi semua data transaksi dan informasi pribadi Anda.",
        faq_q3: "Apakah saya bisa mengakses Bimmo dari HP dan Laptop?",
        faq_a3: "Tentu saja! Bimmo berbasis cloud, sehingga Anda bisa mengakses akun Anda dari perangkat apa saja (Android, iOS, atau Web Browser) secara real-time."
    }
};

let currentLang = 'en';

function updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.innerHTML = translations[currentLang][key]; // innerHTML to support span highlighting
        }
    });

    // Update placeholders
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[currentLang][key]) {
            element.setAttribute('placeholder', translations[currentLang][key]);
        }
    });

    // Update button text
    const desktopBtn = document.getElementById('lang-toggle');
    const mobileBtn = document.getElementById('mobile-lang-toggle');

    if (currentLang === 'en') {
        if (desktopBtn) desktopBtn.innerText = 'ID';
        if (mobileBtn) mobileBtn.innerText = 'Change Language: ID';
    } else {
        if (desktopBtn) desktopBtn.innerText = 'EN';
        if (mobileBtn) mobileBtn.innerText = 'Change Language: EN';
    }
}

function toggleLanguage(e) {
    if (e) e.preventDefault();
    currentLang = currentLang === 'en' ? 'id' : 'en';
    updateContent();
}

document.getElementById('lang-toggle')?.addEventListener('click', toggleLanguage);
document.getElementById('mobile-lang-toggle')?.addEventListener('click', toggleLanguage);

// Search Logic
const searchInput = document.querySelector('.guide-search-input');
const searchResultsContainer = document.getElementById('search-results');
const searchResultsList = document.getElementById('search-results-list');
const guideMainContent = document.getElementById('guide-main-content');

// Define content to search
const searchItems = [
    { type: 'article', key: 'article_register', action: 'register' },
    { type: 'article', key: 'article_login', action: 'login' },
    { type: 'article', key: 'pop_article_1' },
    { type: 'article', key: 'pop_article_2' },
    { type: 'article', key: 'pop_article_3' },
    { type: 'article', key: 'pop_article_4' },
    { type: 'article', key: 'pop_article_5' },
    { type: 'faq', qKey: 'faq_q1', aKey: 'faq_a1' },
    { type: 'faq', qKey: 'faq_q2', aKey: 'faq_a2' },
    { type: 'faq', qKey: 'faq_q3', aKey: 'faq_a3' }
];

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        if (query.length > 0) {
            guideMainContent.style.display = 'none';
            searchResultsContainer.style.display = 'block';
            performSearch(query);
        } else {
            guideMainContent.style.display = 'grid'; // Restore grid layout
            searchResultsContainer.style.display = 'none';
        }
    });
}

function performSearch(query) {
    searchResultsList.innerHTML = '';
    const langData = translations[currentLang];
    let hasResults = false;

    searchItems.forEach(item => {
        let textToMatch = '';
        let contentDisplay = '';

        if (item.type === 'article') {
            textToMatch = langData[item.key];
            const actionClass = item.action ? `trigger-${item.action}` : '';
            contentDisplay = `<li><a href="#" class="${actionClass}"><i class="far fa-file-alt"></i> ${textToMatch}</a></li>`;
        } else if (item.type === 'faq') {
            const question = langData[item.qKey];
            const answer = langData[item.aKey];
            textToMatch = `${question} ${answer}`;
            contentDisplay = `
                <li style="display: block; width: 100%;">
                    <div class="faq-item" open style="margin-bottom: 0;">
                        <summary style="pointer-events: none;">${question}</summary>
                        <p style="margin-top: 10px;">${answer}</p>
                    </div>
                </li>`;
        }

        if (textToMatch && textToMatch.toLowerCase().includes(query)) {
            searchResultsList.insertAdjacentHTML('beforeend', contentDisplay);
            hasResults = true;
        }
    });

    if (!hasResults) {
        searchResultsList.innerHTML = '<li style="color: var(--text-light); text-align: center; padding: 20px;">No results found.</li>';
    }
}


// Event Delegation for Modals (Handling dynamic search results)
document.addEventListener('click', (e) => {
    // Register Modal
    const regTrigger = e.target.closest('#link-register') || e.target.closest('.trigger-register');
    if (regTrigger) {
        e.preventDefault();
        const modal = document.getElementById('register-modal');
        if (modal) {
            modal.style.display = 'flex';
            setTimeout(() => modal.classList.add('active'), 10);
        }
    }

    // Login Modal
    const loginTrigger = e.target.closest('#link-login') || e.target.closest('.trigger-login');
    if (loginTrigger) {
        e.preventDefault();
        const modal = document.getElementById('login-modal');
        if (modal) {
            modal.style.display = 'flex';
            setTimeout(() => modal.classList.add('active'), 10);
        }
    }

    // Close Buttons
    if (e.target.closest('.close-modal')) {
        const modal = e.target.closest('.modal-overlay');
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.style.display = 'none', 300);
        }
    }

    // Close when clicking outside
    if (e.target.classList.contains('modal-overlay')) {
        e.target.classList.remove('active');
        setTimeout(() => e.target.style.display = 'none', 300);
    }
});



// Initialize
updateContent();
