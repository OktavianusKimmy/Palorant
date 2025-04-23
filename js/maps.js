document.addEventListener("DOMContentLoaded", () => {
    const maps = document.querySelector(".maps");
  
    let isDragging = false;
    let startX;
    let scrollStart;
  
    const dragSpeed = 1.2;
    const autoScrollSpeed = 0.5;
    let autoScrollInterval;
    let scrollDirection = 1;
  
    const startAutoScroll = () => {
      autoScrollInterval = setInterval(() => {
        if (!isDragging) {
          if (maps.scrollLeft + maps.clientWidth >= maps.scrollWidth) {
            scrollDirection = -1;
          }
          if (maps.scrollLeft <= 0) {
            scrollDirection = 1;
          }
          
          maps.scrollLeft += autoScrollSpeed * scrollDirection;
        }
      }, 10);
    };
  
    startAutoScroll();
  
    maps.addEventListener("mousedown", (e) => {
      isDragging = true;
      maps.classList.add("active");
      startX = e.pageX;
      scrollStart = maps.scrollLeft;
  
      clearInterval(autoScrollInterval);
      maps.style.scrollBehavior = 'auto';
    });
  
    maps.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
  
      const delta = (e.pageX - startX) * dragSpeed;
      maps.scrollLeft = scrollStart - delta;
    });
  
    const stopDragging = () => {
      if (!isDragging) return;
      isDragging = false;
      maps.classList.remove("active");
  
      maps.style.scrollBehavior = 'smooth';
      startAutoScroll();
    };
  
    window.addEventListener("mouseup", stopDragging);
    maps.addEventListener("mouseleave", stopDragging);
});
