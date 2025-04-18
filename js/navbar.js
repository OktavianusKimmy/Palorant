document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu");
    const items = document.querySelectorAll(".menu-item a");
    const underline = document.querySelector(".underline");

    function moveUnderline(el) {
      const rect = el.getBoundingClientRect();
      const parentRect = menu.getBoundingClientRect();

      underline.style.width = `${rect.width}px`;
      underline.style.transform = `translateX(${rect.left - parentRect.left}px)`;
    }

    // Tampilkan underline di item pertama (opsional)
    if (items.length > 0) {
      moveUnderline(items[0]);
    }

    items.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        moveUnderline(item);
      });

      item.addEventListener("click", () => {
        moveUnderline(item);
      });
    });

    // Optional: hilangkan underline saat mouse keluar dari menu
    menu.addEventListener("mouseleave", () => {
      underline.style.width = "0";
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("burgerMenu");
    const menu = document.querySelector(".menu");
    const menuTitle = document.getElementById("menuTitle");
    const menuLinks = document.querySelectorAll(".menu a");
  
    burger.addEventListener("click", function () {
      menu.classList.toggle("show");
    });
  
    menuLinks.forEach(link => {
      link.addEventListener("click", () => {
        const text = link.textContent.trim();
        menuTitle.textContent = text;
        menu.classList.remove("show"); // Optional: hide menu after click
      });
    });
  });