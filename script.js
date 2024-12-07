const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.navbar .nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});


// Pilih semua elemen dengan kelas "menu-item"
const menuItems = document.querySelectorAll('.menu-item');

// Tambahkan event listener untuk setiap elemen menu-item
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Tambahkan kelas "active" untuk memulai animasi bounce
    item.classList.add('active');

    // Hapus kelas "active" setelah animasi selesai (500ms)
    setTimeout(() => {
      item.classList.remove('active');
    }, 500); // Waktu sesuai dengan durasi animasi bounce di CSS
  });
});

window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-2PBQRS8MPX');
