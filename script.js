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
        nav_pricing: "Pricing",
        nav_cta: "Free",
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
        feature_wallet_title: "Digital Wallet",
        feature_wallet_desc: "Manage all your accounts and payment methods in one secure place.",
        feature_assets_title: "Asset Management",
        feature_assets_desc: "Track and organize your physical and digital assets with ease.",
        feature_goals_title: "Financial Goals",
        feature_goals_desc: "Set, track, and achieve your financial dreams with smart planning.",
        feature_migration_title: "Data Migration",
        feature_migration_desc: "Easily migrate your financial data from your previous app or start your new record journey.",
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
        footer_contact: "Contact Us",
        footer_follow: "Follow Us",
        contact_title: "Get in Touch",
        contact_subtitle: "Have questions or need assistance? Our team is here to help you.",
        contact_email_title: "Email Us",
        contact_email_link: "Send a message",
        contact_phone_title: "Call Us",
        contact_phone_link: "Talk to us",
        contact_location_title: "Our Office",
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
        nav_pricing: "Harga",
        nav_cta: "Gratis",
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
        feature_wallet_title: "Dompet Digital",
        feature_wallet_desc: "Kelola semua akun dan metode pembayaran Anda di satu tempat yang aman.",
        feature_assets_title: "Manajemen Aset",
        feature_assets_desc: "Pantau dan atur aset fisik maupun digital Anda dengan mudah.",
        feature_goals_title: "Target Finansial",
        feature_goals_desc: "Tetapkan, pantau, dan capai impian finansial Anda dengan perencanaan cerdas.",
        feature_migration_title: "Migrasi Data",
        feature_migration_desc: "Migrasikan data keuangan Anda dari aplikasi lama dengan mudah atau mulai perjalanan pencatatan baru Anda.",
        cta_title: "Siap Mengambil Kendali?",
        cta_subtitle: "Bergabunglah dengan ribuan pengguna cerdas lainnya hari ini.",
        cta_btn: "Daftar Gratis Sekarang",
        cta_pricing_note: "Coba Gratis Sekarang",
        footer_desc: "Partner terpercaya dalam perjalanan finansial Anda menuju masa depan yang lebih cerah.",
        footer_quick_links: "Link Cepat",
        footer_about: "Tentang Kami",
        footer_careers: "Karir",
        footer_blog: "Blog",
        footer_privacy: "Kebijakan Privasi",
        footer_contact: "Hubungi Kami",
        footer_follow: "Ikuti Kami",
        contact_title: "Hubungi Kami",
        contact_subtitle: "Punya pertanyaan atau butuh bantuan? Tim kami siap membantu Anda.",
        contact_email_title: "Email Kami",
        contact_email_link: "Kirim pesan",
        contact_phone_title: "Hubungi Kami",
        contact_phone_link: "Bicara dengan kami",
        contact_location_title: "Kantor Kami",
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

let currentLang = localStorage.getItem('bimmo_lang') || 'en';

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
    localStorage.setItem('bimmo_lang', currentLang);
    updateContent();
}

document.getElementById('lang-toggle')?.addEventListener('click', toggleLanguage);
document.getElementById('mobile-lang-toggle')?.addEventListener('click', toggleLanguage);

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

// Contact Form Submission
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            const subject = `Bimmo Inquiry - From ${name}`;
            const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

            const mailtoUrl = `mailto:budgetbimmo@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            window.location.href = mailtoUrl;

            // Optional: Show a success message or reset form
            // alert('Thank you! Your email client will now open to send the message.');
            // contactForm.reset();
        });
    }
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

// Initialize
updateContent();
initDevToolsDetection();
initContactForm();
initScrollAnimations();
// initCheckout();
