document.addEventListener('DOMContentLoaded', function () {
    // Initialize Lucide icons
    lucide.createIcons();

    // Mobile menu toggle
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Coverage form submission
    const coverageForm = document.getElementById('coverage-form');
    const addressInput = document.getElementById('address-input');

    // Contact form submission
    const contactForm = document.getElementById('contact-form');

    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    menuButton.addEventListener('click', function () {
        const isOpen = mobileMenu.classList.contains('hidden');
        if (isOpen) {
            mobileMenu.classList.remove('hidden');
            this.innerHTML = '<i data-lucide="x"></i>';
        } else {
            mobileMenu.classList.add('hidden');
            this.innerHTML = '<i data-lucide="menu"></i>';
        }
        lucide.createIcons(); // Refresh icons after change
    });

    // Scroll effect
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

    coverageForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const address = addressInput.value.trim();

        if (address) {
            console.log('Memeriksa cakupan untuk alamat:', address);
            // Dalam implementasi nyata, Anda akan memanggil API di sini
            alert('Pemeriksaan cakupan untuk: ' + address + '\n\nINI ADALAH DEMO.');
        } else {
            alert('Silakan masukkan alamat Anda untuk memeriksa cakupan.');
        }
    });

    const map = L.map('map', {
        center: [-7.397451, 109.384], // Koordinat NetServe Office
        zoom: 15,
        zoomControl: true
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Marker utama
    L.marker([-7.397451, 109.384])
        .addTo(map)
        .bindPopup("NetServe Office");
    // .openPopup();

    // Tambahan marker status (opsional)
    L.circleMarker([-7.397302, 109.386063], {
        color: '#004AAD',
        fill: true,
        fillColor: '#004AAD',
        fillOpacity: 100,
        radius: 5
    }).addTo(map).bindPopup("Tersedia");

    L.circleMarker([-7.397855, 109.387769], {
        color: '#004AAD',
        fill: true,
        fillColor: '#004AAD',
        fillOpacity: 100,
        radius: 5
    }).addTo(map).bindPopup("Tersedia");

    L.circleMarker([-7.398781, 109.385751], {
        color: '#004AAD',
        fill: true,
        fillColor: '#004AAD',
        fillOpacity: 100,
        radius: 5
    }).addTo(map).bindPopup("Tersedia");

    L.circleMarker([-7.396696, 109.388375], {
        color: '#004AAD',
        fill: true,
        fillColor: '#004AAD',
        fillOpacity: 100,
        radius: 5
    }).addTo(map).bindPopup("Tersedia");

    L.circleMarker([-7.396185, 109.386545], {
        color: '#004AAD',
        fill: true,
        fillColor: '#004AAD',
        fillOpacity: 100,
        radius: 5
    }).addTo(map).bindPopup("Tersedia");

    L.circleMarker([-7.392419, 109.378488], {
        color: '#38bdf8',
        fill: true,
        fillColor: '#38bdf8',
        fillOpacity: 100,
        radius: 5
    }).addTo(map).bindPopup("Segera Hadir");

    L.circleMarker([-7.405846, 109.383842], {
        color: '#38bdf8',
        fill: true,
        fillColor: '#38bdf8',
        fillOpacity: 100,
        radius: 5
    }).addTo(map).bindPopup("Segera Hadir");

    L.circleMarker([-7.400388, 109.391727], {
        color: '#38bdf8',
        fill: true,
        fillColor: '#38bdf8',
        fillOpacity: 100,
        radius: 5
    }).addTo(map).bindPopup("Segera Hadir");

    L.circleMarker([-7.404494, 109.388916], {
        color: '#38bdf8',
        fill: true,
        fillColor: '#38bdf8',
        fillOpacity: 100,
        radius: 5
    }).addTo(map).bindPopup("Segera Hadir");

    L.circleMarker([-7.394812, 109.38175], {
        color: '#38bdf8',
        fill: true,
        fillColor: '#38bdf8',
        fillOpacity: 100,
        radius: 5
    }).addTo(map).bindPopup("Segera Hadir");

    L.circleMarker([-7.390721, 109.374593], {
        color: '#d1d5dc',
        fill: true,
        fillColor: '#d1d5dc',
        fillOpacity: 100,
        radius: 5
    }).addTo(map).bindPopup("Tidak Tersedia");

    L.circleMarker([-7.407537, 109.384123], {
        color: '#d1d5dc',
        fill: true,
        fillColor: '#d1d5dc',
        fillOpacity: 100,
        radius: 5
    }).addTo(map).bindPopup("Tidak Tersedia");

    L.circleMarker([-7.403122, 109.396341], {
        color: '#d1d5dc',
        fill: true,
        fillColor: '#d1d5dc',
        fillOpacity: 100,
        radius: 5
    }).addTo(map).bindPopup("Tidak Tersedia");

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value
        };

        console.log('Formulir dikirim:', formData);
        // Dalam implementasi nyata, Anda akan mengirim data ini ke backend Anda
        alert('Terima kasih atas pesan Anda! Kami akan segera menghubungi Anda.\n\n(Data formulir telah dicatat)');

        // Reset formulir
        contactForm.reset();
    });
});