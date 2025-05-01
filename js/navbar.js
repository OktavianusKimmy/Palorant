document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu");
  const items = document.querySelectorAll(".menu-item a");
  const underline = document.querySelector(".underline");
  const burger = document.getElementById("burgerMenu");
  const menuTitle = document.getElementById("menuTitle");
  const menuLinks = document.querySelectorAll(".menu a");

  // Tampilkan underline dan menu title di menu aktif saat load
  const current = document.querySelector(".menu-item a.active");
  if (current) {
    moveUnderline(current);
    if (menuTitle) {
      menuTitle.querySelector("p").textContent = current.textContent.trim();
    }
  }

  // Fungsi pindahkan underline
  function moveUnderline(el) {
    const rect = el.getBoundingClientRect();
    const parentRect = menu.getBoundingClientRect();

    underline.style.width = `${rect.width}px`;
    underline.style.transform = `translateX(${rect.left - parentRect.left}px)`;
  }

  // Hover dan klik menu
  items.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      moveUnderline(item);
    });

    item.addEventListener("click", () => {
      moveUnderline(item);
    });
  });

  // Hilangkan underline saat mouse keluar
  menu.addEventListener("mouseleave", () => {
    underline.style.width = "0";
  });

  // Burger click + ubah judul
  burger.addEventListener("click", function () {
    menu.classList.toggle("show");
  });

  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      const text = link.textContent.trim();
      menuTitle.querySelector("p").textContent = text;
      menu.classList.remove("show");
      moveUnderline(link);

      // aktifkan menu
      menuLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
});
