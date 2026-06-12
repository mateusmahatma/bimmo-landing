function initBootstrapNavbarAutoClose() {
    const navbarCollapse = document.getElementById('mainNavbar');
    if (!navbarCollapse || typeof bootstrap === 'undefined') return;

    const collapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse, { toggle: false });

    navbarCollapse.querySelectorAll('a.nav-link[href^="#"]').forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                collapse.hide();
            }
        });
    });
}

function updateLayoutVars() {
    const navbar = document.querySelector('.navbar.fixed-top');
    const navHeight = navbar ? Math.ceil(navbar.getBoundingClientRect().height) : 0;
    if (navHeight > 0) {
        document.documentElement.style.setProperty('--nav-h', `${navHeight}px`);
    }

    document.documentElement.style.setProperty('--app-vh', `${window.innerHeight}px`);
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({
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
        nav_security: "Security",
        nav_pricing: "Pricing",
        nav_testimonials: "Reviews",
        nav_cta: "Get Started",
        hero_title: "Clarity for your money,<br> <span class=\"highlight\">calm for your life</span>",
        hero_subtitle: "Bimmo helps you track income and spending, understand cash flow, and stay consistent—without confusing finance jargon.",
        hero_btn_primary: "Start Free",
        hero_btn_secondary: "See How It Works (2 min)",
        hero_trust: "Privacy-first with trusted security.",
        trust_title: "Trusted for daily money management",
        trust_subtitle: "Security, privacy, and comfort come first.",
        trust_media_title: "As seen in",
        trust_security_title: "Security",
        trust_security_1: "Data encryption",
        trust_security_2: "Account protection",
        trust_security_3: "Privacy-first",
        trust_users_title: "Users",
        trust_users_value: "Used by 10,000+ users",
        trust_users_desc: "Start small, stay consistent every day.",
        trust_note: "Replace the “Media” placeholders with your real logos/certifications.",
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
        features_subtitle: "Benefits designed for real-life money decisions.",
        features_visual_note: "Visual note: money products are number-driven—use clean chart/mockup illustrations (not stock photos of people holding phones).",
        feature_budget_title: "Clear cash flow",
        feature_budget_desc: "See what's coming in, going out, and what's left—at a glance.",
        feature_emergency_title: "Fast daily logging",
        feature_emergency_desc: "Add transactions in seconds, whenever you need.",
        feature_cashflow_title: "Goals that move",
        feature_cashflow_desc: "Track progress for emergency funds, savings, and investments.",
        feature_gentle_title: "Gentle reminders",
        feature_gentle_desc: "Helpful nudges when spending drifts—without guilt.",
        feature_liability_title: "Control Liability",
        feature_liability_desc: "Manage and reduce your debts effectively.",
        feature_visual_title: "Visual Reports",
        feature_visual_desc: "Easy-to-understand charts.",
        feature_security_title: "Bank Security",
        feature_security_desc: "High-level encrypted data.",
        feature_wallet_title: "Digital Wallet",
        feature_wallet_desc: "Manage all your accounts and payment methods in one secure place.",
        feature_assets_title: "Asset Management",
        feature_assets_desc: "Track and organize your physical and digital assets with ease.",
        feature_goals_title: "Financial Goals",
        feature_goals_desc: "Set, track, and achieve your financial dreams with smart planning.",
        feature_migration_title: "Data Migration",
        feature_migration_desc: "Easily migrate your financial data from your previous app or start your new record journey.",
        testimonials_title: "Stories from people like you",
        testimonials_subtitle: "Young professionals and young families building calmer money habits.",
        testi_1_name: "Aditama R.",
        testi_1_role: "Young Professional",
        testi_1_text: "\"I used to wonder where my money went every month. With Bimmo, I see my spending pattern and consistently set aside money for investing. It feels calmer.\"",
        testi_2_name: "Sarah Kirana",
        testi_2_role: "Young Family",
        testi_2_text: "\"We needed something simple—no spreadsheets. Bimmo makes budgeting clear, and we’re more aligned on priorities.\"",
        testi_3_name: "Budi Santoso",
        testi_3_role: "Newly Married",
        testi_3_text: "\"The UI is clean and the language is easy. The reminders help without stressing us out. Saving for an emergency fund finally feels realistic.\"",
        cta_title: "Ready to Take Control?",
        cta_subtitle: "Join thousands of other smart users today.",
        cta_btn: "Sign Up Free Now",
        cta_pricing_note: "Try It for Free",
        footer_desc: "Your trusted partner in your financial journey towards a brighter future.",
        footer_quick_links: "Quick Links",
        footer_about: "About Us",
        footer_careers: "Careers",
        footer_blog: "Blog",
        footer_privacy: "Privacy Policy",
        footer_follow: "Follow Us",
        form_name: "Name",
        form_email: "Email",
        form_message: "Message",
        form_submit: "Send Message",

        // Pricing Section
        pricing_title: "Our Pricing Plans",
        pricing_subtitle: "Choose the plan that suits your financial needs.",
        plan_free_title: "Free",
        plan_free_desc: "Perfect for individuals starting their financial journey.",
        plan_premium_title: "Premium",
        plan_premium_desc: "Full features for power users and business owners.",
        plan_premium_price: "Free Trial",
        plan_period_forever: "/forever",
        plan_period_month: "/month",
        badge_popular: "Most Popular",
        feature_basic_budget: "Basic Budgeting",
        feature_daily_record: "Daily Transaction Recording",
        feature_manual_backup: "Manual Data Backup",
        feature_all_free: "Everything in Free",
        feature_advanced_analytics: "Advanced Financial Analytics",
        feature_e_wallet: "E-Wallet Integration",
        feature_cloud_sync: "Cloud Sync & Auto Backup",
        feature_priority_support: "Priority Support",
        btn_get_started: "Get Started",
        btn_go_premium: "Try for Free",

        // Checkout Section
        checkout_title: "Checkout",
        checkout_subtitle: "Secure your Premium access now.",
        order_summary: "Order Summary",
        total: "Total",
        payment_method: "Payment Method",
        btn_pay_now: "Pay Now",
        processing_payment: "Processing Payment...",
        processing_desc: "Please do not close this window.",
        payment_success: "Payment Successful!",
        success_desc: "Your Premium account is now active. Let's start managing your finances better.",
        btn_go_dashboard: "Go to Dashboard",

        // Secure Process Section
        secure_title: "How Bimmo Protects Your Data",
        secure_subtitle: "Your privacy is our priority. We use End-to-End Encryption (E2EE) to ensure your financial data remains your own.",
        step_1_title: "Store Your Assets",
        step_1_desc: "You safely record your assets, transactions, or goods into the Bimmo app.",
        step_2_title: "Bimmo as a Courier",
        step_2_desc: "Bimmo acts as a secure courier, encrypting your data locally before it ever leaves your device.",
        step_3_title: "Secure in the Vault",
        step_3_desc: "Your data is stored in a digital brankas (vault) that only you can access with your private key.",

        faq_q3: "Can I access Bimmo from Mobile and Laptop?",
        faq_a3: "Of course! Bimmo is cloud-based, so you can access your account from any device (Android, iOS, or Web Browser) in real-time.",
        devtools_title: "Access Restricted",
        devtools_desc: "For data security, Web Developer tools are disabled on this page.",
        devtools_reload: "Reload Page"
    },
    id: {
        nav_home: "Beranda",
        nav_why: "Mengapa Penting?",
        nav_solution: "Solusi",
        nav_features: "Fitur",
        nav_security: "Keamanan",
        nav_pricing: "Harga",
        nav_testimonials: "Ulasan",
        nav_cta: "Mulai Gratis",
        hero_title: "Keuangan rapi,<br> <span class=\"highlight\">hidup lebih tenang</span>",
        hero_subtitle: "Bimmo membantu profesional muda dan keluarga muda mencatat pemasukan–pengeluaran, memantau arus kas, dan menata investasi dalam satu aplikasi yang mudah dipakai—tanpa istilah ribet.",
        hero_btn_primary: "Mulai Gratis Sekarang",
        hero_btn_secondary: "Lihat Cara Kerjanya (2 Menit)",
        hero_trust: "Privasi terjaga, keamanan jadi prioritas.",
        trust_title: "Dipercaya untuk mengelola uang sehari-hari",
        trust_subtitle: "Keamanan, privasi, dan kenyamanan jadi prioritas.",
        trust_media_title: "Diliput oleh",
        trust_security_title: "Keamanan",
        trust_security_1: "Enkripsi data",
        trust_security_2: "Proteksi akun",
        trust_security_3: "Privasi terjaga",
        trust_users_title: "Pengguna",
        trust_users_value: "Dipakai oleh 10.000+ pengguna",
        trust_users_desc: "Mulai dari langkah kecil, lebih konsisten tiap hari.",
        trust_note: "Ganti placeholder “Media” dengan logo/sertifikasi yang Anda miliki.",
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
        features_subtitle: "Manfaat yang terasa di keputusan keuangan sehari-hari.",
        features_visual_note: "Catatan visual: produk keuangan sangat erat dengan angka—gunakan ilustrasi grafik/mockup yang bersih (bukan stock photo orang memegang HP).",
        feature_budget_title: "Arus kas jelas",
        feature_budget_desc: "Lihat uang masuk, uang keluar, dan sisa anggaran secara ringkas.",
        feature_emergency_title: "Catat semudah chat",
        feature_emergency_desc: "Tambah transaksi dalam hitungan detik, kapan pun.",
        feature_cashflow_title: "Target lebih terarah",
        feature_cashflow_desc: "Pantau progres dana darurat, tabungan, hingga investasi.",
        feature_gentle_title: "Pengingat yang lembut",
        feature_gentle_desc: "Notifikasi membantu saat pengeluaran mulai melebar—tanpa menghakimi.",
        feature_liability_title: "Kontrol Kewajiban",
        feature_liability_desc: "Kelola dan kurangi utang Anda secara efektif.",
        feature_visual_title: "Laporan Visual",
        feature_visual_desc: "Grafik yang mudah dipahami.",
        feature_security_title: "Keamanan Bank",
        feature_security_desc: "Data terenkripsi tingkat tinggi.",
        feature_wallet_title: "Dompet Digital",
        feature_wallet_desc: "Kelola semua akun dan metode pembayaran Anda di satu tempat yang aman.",
        feature_assets_title: "Manajemen Aset",
        feature_assets_desc: "Pantau dan atur aset fisik maupun digital Anda dengan mudah.",
        feature_goals_title: "Target Finansial",
        feature_goals_desc: "Tetapkan, pantau, dan capai impian finansial Anda dengan perencanaan cerdas.",
        feature_migration_title: "Migrasi Data",
        feature_migration_desc: "Migrasikan data keuangan Anda dari aplikasi lama dengan mudah atau mulai perjalanan pencatatan baru Anda.",
        testimonials_title: "Cerita dari pengguna seperti Anda",
        testimonials_subtitle: "Profesional muda dan keluarga muda yang ingin lebih rapi mengelola uang.",
        testi_1_name: "Aditama R.",
        testi_1_role: "Profesional muda",
        testi_1_text: "\"Dulu tiap akhir bulan selalu bingung uang habis ke mana. Setelah pakai Bimmo, saya bisa lihat pola pengeluaran dan mulai punya sisa untuk investasi. Rasanya jauh lebih tenang.\"",
        testi_2_name: "Sarah Kirana",
        testi_2_role: "Keluarga muda",
        testi_2_text: "\"Kami butuh cara simpel untuk ngatur rumah tangga tanpa spreadsheet. Bimmo bikin budgeting jadi jelas, dan kami jadi lebih kompak soal prioritas.\"",
        testi_3_name: "Budi Santoso",
        testi_3_role: "Pasangan baru",
        testi_3_text: "\"Yang saya suka: tampilannya rapi, bahasanya mudah, dan pengingatnya nggak bikin stres. Sekarang nabung dana darurat terasa realistis.\"",
        cta_title: "Siap mulai merapikan keuangan hari ini?",
        cta_subtitle: "Mulai dari satu kebiasaan kecil: catat dan pantau arus kas Anda.",
        cta_btn: "Daftar & Mulai Gratis",
        cta_pricing_note: "Coba Gratis Sekarang",
        footer_desc: "Partner terpercaya dalam perjalanan finansial Anda menuju masa depan yang lebih cerah.",
        footer_quick_links: "Link Cepat",
        footer_about: "Tentang Kami",
        footer_careers: "Karir",
        footer_blog: "Blog",
        footer_privacy: "Kebijakan Privasi",
        footer_follow: "Ikuti Kami",
        form_name: "Nama",
        form_email: "Email",
        form_message: "Pesan",
        form_submit: "Kirim Pesan",

        // Pricing Section
        pricing_title: "Paket Harga Kami",
        pricing_subtitle: "Pilih paket yang sesuai dengan kebutuhan finansial Anda.",
        plan_free_title: "Gratis",
        plan_free_desc: "Cocok untuk individu yang baru memulai perjalanan finansial.",
        plan_premium_title: "Premium",
        plan_premium_desc: "Fitur lengkap untuk pengguna aktif dan pemilik bisnis.",
        plan_premium_price: "Coba Gratis",
        plan_period_forever: "/selamanya",
        plan_period_month: "/bulan",
        badge_popular: "Paling Populer",
        feature_basic_budget: "Budgeting Dasar",
        feature_daily_record: "Pencatatan Transaksi Harian",
        feature_manual_backup: "Backup Data Manual",
        feature_all_free: "Semua Fitur Gratis",
        feature_advanced_analytics: "Analisis Finansial Lanjutan",
        feature_e_wallet: "Integrasi E-Wallet",
        feature_cloud_sync: "Cloud Sync & Auto Backup",
        feature_priority_support: "Dukungan Prioritas",
        btn_get_started: "Mulai Sekarang",
        btn_go_premium: "Coba Gratis",

        // Checkout Section
        checkout_title: "Checkout",
        checkout_subtitle: "Amankan akses Premium Anda sekarang.",
        order_summary: "Ringkasan Pesanan",
        total: "Total",
        payment_method: "Metode Pembayaran",
        btn_pay_now: "Bayar Sekarang",
        processing_payment: "Memproses Pembayaran...",
        processing_desc: "Mohon jangan tutup jendela ini.",
        payment_success: "Pembayaran Berhasil!",
        success_desc: "Akun Premium Anda sekarang sudah aktif. Mari mulai mengelola keuangan Anda dengan lebih baik.",
        btn_go_dashboard: "Ke Dashboard",

        // Secure Process Section
        secure_title: "Bagaimana Bimmo Melindungi Data Anda",
        secure_subtitle: "Privasi Anda adalah prioritas kami. Kami menggunakan End-to-End Encryption (E2EE) untuk memastikan data keuangan Anda tetap menjadi milik Anda.",
        step_1_title: "Simpan Aset Anda",
        step_1_desc: "Anda mencatat aset, transaksi, atau barang berharga Anda dengan aman ke aplikasi Bimmo.",
        step_2_title: "Bimmo sebagai Kurir",
        step_2_desc: "Bimmo bertindak sebagai kurir aman, mengenkripsi data Anda secara lokal sebelum meninggalkan perangkat Anda.",
        step_3_title: "Aman di Brankas",
        step_3_desc: "Data Anda disimpan dalam brankas digital yang hanya bisa Anda akses dengan kunci privat Anda.",

        faq_q3: "Apakah saya bisa mengakses Bimmo dari HP dan Laptop?",
        faq_a3: "Tentu saja! Bimmo berbasis cloud, sehingga Anda bisa mengakses akun Anda dari perangkat apa saja (Android, iOS, atau Web Browser) secara real-time.",
        devtools_title: "Akses Dibatasi",
        devtools_desc: "Demi keamanan data, fitur Web Developer tools dinonaktifkan di halaman ini.",
        devtools_reload: "Muat Ulang Halaman"
    }
};

// Hero A/B variants (use ?hero=1..5 to force)
const heroVariants = {
    id: [
        {
            title: "Keuangan tenang,<br> <span class=\"highlight\">pikiran pun lega</span>",
            subtitle: "Bimmo mencatat pengeluaran otomatis, memantau portofolio investasi, dan membantu Anda menyiapkan dana darurat—tanpa bikin pusing."
        },
        {
            title: "Berhenti menebak-nebak<br> <span class=\"highlight\">uang Anda ke mana</span>",
            subtitle: "Semua terlihat jelas: pengeluaran tercatat otomatis, portofolio terpantau, dana darurat terbentuk pelan tapi pasti."
        },
        {
            title: "Lebih rapi,<br> <span class=\"highlight\">lebih cepat, lebih akurat</span>",
            subtitle: "Otomatisasi pencatatan pengeluaran + pantau portofolio investasi + rencana dana darurat, dalam satu dashboard."
        },
        {
            title: "Catat. Pantau.<br> <span class=\"highlight\">Siapkan.</span>",
            subtitle: "Pengeluaran otomatis, investasi terkontrol, dana darurat kebentuk."
        },
        {
            title: "Gaji numpang lewat?<br> <span class=\"highlight\">Saatnya pegang kendali</span>",
            subtitle: "Bimmo bantu hentikan “boncos” dengan pencatatan otomatis, pantauan investasi yang jelas, dan target dana darurat yang realistis."
        }
    ],
    en: [
        {
            title: "Calm money,<br> <span class=\"highlight\">clear mind</span>",
            subtitle: "Bimmo auto-tracks spending, monitors your investment portfolio, and helps you build an emergency fund—without the stress."
        },
        {
            title: "Stop guessing<br> <span class=\"highlight\">where your money went</span>",
            subtitle: "Everything becomes clear: spending is tracked automatically, portfolio stays visible, and your emergency fund grows steadily."
        },
        {
            title: "Cleaner.<br> <span class=\"highlight\">Faster. More accurate.</span>",
            subtitle: "Automated expense tracking + portfolio monitoring + emergency fund plan, in one dashboard."
        },
        {
            title: "Track. Monitor.<br> <span class=\"highlight\">Prepare.</span>",
            subtitle: "Auto expenses, controlled investments, emergency fund on track."
        },
        {
            title: "Paycheck disappears?<br> <span class=\"highlight\">Take control today</span>",
            subtitle: "Bimmo helps stop overspending with automatic tracking, clear portfolio view, and realistic emergency fund targets."
        }
    ]
};

let currentLang = localStorage.getItem('bimmo_lang') || 'id';

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

function applyHeroVariant() {
    const titleEl = document.querySelector('[data-i18n="hero_title"]');
    const subtitleEl = document.querySelector('[data-i18n="hero_subtitle"]');
    if (!titleEl || !subtitleEl) return;

    const variants = heroVariants[currentLang] || heroVariants.id;
    const params = new URLSearchParams(window.location.search);
    const forced = parseInt(params.get('hero') || '', 10);

    let index = Number.isFinite(forced) && forced >= 1 && forced <= variants.length
        ? forced - 1
        : parseInt(localStorage.getItem('bimmo_hero_variant') || '', 10) - 1;

    if (!Number.isFinite(index) || index < 0 || index >= variants.length) {
        index = Math.floor(Math.random() * variants.length);
    }

    localStorage.setItem('bimmo_hero_variant', String(index + 1));
    titleEl.innerHTML = variants[index].title;
    subtitleEl.textContent = variants[index].subtitle;
}

function toggleLanguage(e) {
    if (e) e.preventDefault();
    currentLang = currentLang === 'en' ? 'id' : 'en';
    localStorage.setItem('bimmo_lang', currentLang);
    updateContent();
    applyHeroVariant();
}

document.getElementById('lang-toggle')?.addEventListener('click', toggleLanguage);
document.getElementById('mobile-lang-toggle')?.addEventListener('click', toggleLanguage);



// DevTools Detection logic (Hardened Version)
function initDevToolsDetection() {
    // Robust Mobile Detection: Bypass for mobile devices to avoid false positives 
    // (e.g., from browser bars, UI scaling, or lack of traditional DevTools)
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        (window.innerWidth < 1024 && ('ontouchstart' in window || navigator.maxTouchPoints > 0));

    if (isMobile) {
        return;
    }

    const overlay = document.getElementById('devtools-overlay');
    let devtoolsOpen = false;

    const blockAccess = () => {
        if (!devtoolsOpen) {
            devtoolsOpen = true;
            window.location.href = 'restricted.html';
        }
    };

    // 1. Block Context Menu & Shortcuts (Windows & Mac)
    window.addEventListener('contextmenu', e => e.preventDefault());
    window.addEventListener('keydown', e => {
        const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
        const isCmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;
        const isOptionOrAlt = e.altKey;

        // F12 (Windows)
        if (e.keyCode === 123) {
            e.preventDefault();
            blockAccess();
        }

        // Developer Tools: Ctrl+Shift+I/J/C (Win) or Cmd+Opt+I/J/C (Mac)
        if (isCmdOrCtrl && (isMac ? isOptionOrAlt : e.shiftKey) && [73, 74, 67].includes(e.keyCode)) {
            e.preventDefault();
            blockAccess();
        }

        // View Source: Ctrl+U (Win) or Cmd+Opt+U (Mac)
        if (isCmdOrCtrl && (isMac ? isOptionOrAlt : false || e.keyCode === 85)) {
            // Special case for Mac Cmd+Opt+U vs Win Ctrl+U
            if (isMac && isOptionOrAlt && e.keyCode === 85) {
                e.preventDefault();
                blockAccess();
            } else if (!isMac && e.ctrlKey && e.keyCode === 85) {
                e.preventDefault();
                blockAccess();
            }
        }

        // Save Page: Ctrl+S (Win) or Cmd+S (Mac)
        if (isCmdOrCtrl && e.keyCode === 83) {
            e.preventDefault();
            blockAccess();
        }
    });

    // 2. The "Ultimate" Detector (Combination of multiple tricks)
    const detect = () => {
        // Dimension check (Increased threshold for macOS sidebars)
        const threshold = 250;
        if (window.outerWidth > 0 && window.outerHeight > 0) {
            if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
                blockAccess();
            }
        }

        // Timing / Debugger check
        const start = performance.now();
        debugger;
        if (performance.now() - start > 100) {
            blockAccess();
        }
    };

    // 3. Getter Trick (Specifically for Chrome/Firefox/Safari opening via menu)
    // We create a dummy object that triggers a getter when the console tries to "preview" it
    const checkViaConsole = () => {
        const dummy = /./;
        dummy.toString = function () {
            blockAccess();
            return "blink";
        };
        console.log(dummy);

        // Another trick using Error stack
        const err = new Error();
        Object.defineProperty(err, 'stack', {
            get: function () {
                blockAccess();
                return "";
            }
        });
        console.log(err);
    };

    // Run checks continuously (DISABLED: Causing false positives in Edge/Safari sidebars)
    // setInterval(detect, 500);
    // setInterval(checkViaConsole, 1000);
    // window.addEventListener('resize', detect);

    // Initial check (DISABLED)
    // setTimeout(detect, 1000);
}

// Intersection Observer for Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Once visible, no need to observe anymore
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
}

// Checkout Functionality (Removed as per transition to Free Trial)
/*
function initCheckout() {
    const btnOpenCheckout = document.getElementById('btn-open-checkout');
    const checkoutModal = document.getElementById('checkout-modal');
    const btnCloseCheckout = document.getElementById('close-checkout');
    const checkoutForm = document.getElementById('checkout-form');

    const stepForm = document.getElementById('checkout-form-step');
    const stepProcessing = document.getElementById('checkout-processing-step');
    const stepSuccess = document.getElementById('checkout-success-step');

    if (btnOpenCheckout && checkoutModal) {
        btnOpenCheckout.addEventListener('click', (e) => {
            e.preventDefault();
            checkoutModal.style.display = 'flex';
            setTimeout(() => checkoutModal.classList.add('active'), 10);

            // Reset to first step
            stepForm.style.display = 'block';
            stepProcessing.style.display = 'none';
            stepSuccess.style.display = 'none';
        });
    }

    if (btnCloseCheckout && checkoutModal) {
        btnCloseCheckout.addEventListener('click', () => {
            checkoutModal.classList.remove('active');
            setTimeout(() => checkoutModal.style.display = 'none', 300);
        });
    }

    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simulate transition to processing
            stepForm.style.display = 'none';
            stepProcessing.style.display = 'block';

            // Simulate network delay
            setTimeout(() => {
                stepProcessing.style.display = 'none';
                stepSuccess.style.display = 'block';
            }, 2500);
        });
    }
}
*/

console.log("Bimmo Landing v1.0.1 - DevTools detection disabled.");
updateLayoutVars();
window.addEventListener('resize', updateLayoutVars, { passive: true });
window.addEventListener('orientationchange', updateLayoutVars, { passive: true });
updateContent();
applyHeroVariant();
initBootstrapNavbarAutoClose();
initDevToolsDetection();
initScrollAnimations();
// initCheckout();
