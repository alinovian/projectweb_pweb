document.addEventListener('DOMContentLoaded', function () {
    // Initialize Lucide icons
    lucide.createIcons();

    // Mobile menu elements
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const desktopNav = document.querySelector('.hidden.md\\:flex.justify-center'); // Desktop navigation
    const desktopCta = document.querySelector('.hidden.md\\:flex.w-1\\/4'); // Desktop CTA

    // Function to check if content overflows
    function checkNavOverflow() {
        if (window.innerWidth >= 768) { // Only check on desktop
            const nav = document.querySelector('nav');
            const navWidth = nav.offsetWidth;
            const navContentWidth = 
                document.querySelector('.w-1\\/4.flex-shrink-0').offsetWidth + // Logo
                desktopNav.offsetWidth + // Navigation items
                desktopCta.offsetWidth + 100; // CTA + margin

            if (navContentWidth > navWidth) {
                // Switch to mobile mode
                desktopNav.classList.add('hidden');
                desktopCta.classList.add('hidden');
                menuButton.classList.remove('md:hidden');
            } else {
                // Normal desktop mode
                desktopNav.classList.remove('hidden');
                desktopCta.classList.remove('hidden');
                menuButton.classList.add('md:hidden');
            }
        }
    }

    // Run on load and resize
    checkNavOverflow();
    window.addEventListener('resize', checkNavOverflow);

    // Mobile menu toggle
    menuButton.addEventListener('click', function () {
        const isOpen = mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden');
        this.innerHTML = isOpen 
            ? '<i data-lucide="x"></i>' 
            : '<i data-lucide="menu"></i>';
        lucide.createIcons();
    });

    // Keep your existing scroll effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 10) {
            nav.classList.add('bg-white', 'shadow-md', 'py-2');
            nav.classList.remove('bg-white/80', 'backdrop-blur-md', 'py-4');
        } else {
            nav.classList.remove('bg-white', 'shadow-md', 'py-2');
            nav.classList.add('bg-white/80', 'backdrop-blur-md', 'py-4');
        }
    });

    // Toggle Coverage Form Submission
    coverageForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const address = addressInput.value.trim();

        if (address) {
            console.log('Memeriksa cakupan untuk alamat:', address);
            // Dalam implementasi nyata, Anda akan memanggil API di sini
            alert('Pemeriksaan cakupan untuk: ' + address + '\n\nIni biasanya akan memeriksa cakupan dengan API. Untuk demo ini, kami hanya menampilkan pesan ini.');
        } else {
            alert('Silakan masukkan alamat Anda untuk memeriksa cakupan.');
        }
    });

    // Toggle Contact Us Form Submission
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value
        };

        console.log('Formulir dikirim:', formData);
        alert('Terima kasih atas pesan Anda! Kami akan segera menghubungi Anda.\n\n(Data formulir dicatat ke konsol)');

        // Reset formulir
        contactForm.reset();
    });

});