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
document.querySelectorAll('.mobile-menu ul li a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
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
        feature_1_title: "Digital Wallet",
        feature_1_desc: "Integration with various e-wallets.",
        feature_2_title: "Visual Reports",
        feature_2_desc: "Easy-to-understand charts.",
        feature_3_title: "Set Goals",
        feature_3_desc: "Set your dream savings targets.",
        feature_4_title: "Bank Security",
        feature_4_desc: "High-level encrypted data.",
        cta_title: "Ready to Take Control?",
        cta_subtitle: "Join thousands of other smart users today.",
        cta_btn: "Sign Up Free Now",
        footer_desc: "Your trusted partner in your financial journey towards a brighter future.",
        footer_quick_links: "Quick Links",
        footer_about: "About Us",
        footer_careers: "Careers",
        footer_blog: "Blog",
        footer_privacy: "Privacy Policy",
        footer_contact: "Contact Us",
        footer_follow: "Follow Us"
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
        feature_1_title: "Dompet Digital",
        feature_1_desc: "Integrasi dengan berbagai e-wallet.",
        feature_2_title: "Laporan Visual",
        feature_2_desc: "Grafik yang mudah dipahami.",
        feature_3_title: "Set Goal",
        feature_3_desc: "Atur target tabungan impian.",
        feature_4_title: "Keamanan Bank",
        feature_4_desc: "Data terenkripsi tingkat tinggi.",
        cta_title: "Siap Mengambil Kendali?",
        cta_subtitle: "Bergabunglah dengan ribuan pengguna cerdas lainnya hari ini.",
        cta_btn: "Daftar Gratis Sekarang",
        footer_desc: "Partner terpercaya dalam perjalanan finansial Anda menuju masa depan yang lebih cerah.",
        footer_quick_links: "Link Cepat",
        footer_about: "Tentang Kami",
        footer_careers: "Karir",
        footer_blog: "Blog",
        footer_privacy: "Kebijakan Privasi",
        footer_contact: "Hubungi Kami",
        footer_follow: "Ikuti Kami"
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

    // Update button text
    const desktopBtn = document.getElementById('lang-toggle');
    const mobileBtn = document.getElementById('mobile-lang-toggle');
    
    if (currentLang === 'en') {
        if(desktopBtn) desktopBtn.innerText = 'ID';
        if(mobileBtn) mobileBtn.innerText = 'Change Language: ID';
    } else {
        if(desktopBtn) desktopBtn.innerText = 'EN';
        if(mobileBtn) mobileBtn.innerText = 'Change Language: EN';
    }
}

function toggleLanguage(e) {
    if(e) e.preventDefault();
    currentLang = currentLang === 'en' ? 'id' : 'en';
    updateContent();
    
    // Close mobile menu if open
    if (mobileMenu.classList.contains('active') && e.target.id === 'mobile-lang-toggle') {
        // Optional: keep open or close
    }
}

document.getElementById('lang-toggle')?.addEventListener('click', toggleLanguage);
document.getElementById('mobile-lang-toggle')?.addEventListener('click', toggleLanguage);

// Initialize
updateContent();
