const links = document.querySelectorAll('.menu a');
const menu = document.querySelector('.menu');
const underline = document.createElement('div');
underline.classList.add('underline');
menu.appendChild(underline);

let activeLink = null;

// Saat halaman dimuat
window.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname;

  links.forEach(link => {
    if (link.href.includes(currentPage)) {
      activeLink = link;
      link.classList.add('active'); // pakai class, bukan style

      underline.style.transition = 'none'; // hilangkan animasi pertama kali
      moveUnderlineTo(link);

      requestAnimationFrame(() => {
        underline.style.transition = 'all 0.3s ease';
      });
    }
  });
});

// Event hover dan klik
links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    moveUnderlineTo(link);
  });

  link.addEventListener('mouseleave', () => {
    if (activeLink) moveUnderlineTo(activeLink);
  });

  link.addEventListener('click', () => {
    if (activeLink) activeLink.classList.remove('active');
    link.classList.add('active');
    activeLink = link;
    moveUnderlineTo(link);
  });
});

// Fungsi gerak underline
function moveUnderlineTo(link) {
  const linkRect = link.getBoundingClientRect();
  const menuRect = menu.getBoundingClientRect();

  const width = linkRect.width;
  const left = linkRect.left - menuRect.left;

  underline.style.width = `${width}px`;
  underline.style.transform = `translateX(${left}px)`;
};

const burgerMenu = document.querySelector('.burger-menu');

burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('show'); // Tambahkan/hapus class .show
});