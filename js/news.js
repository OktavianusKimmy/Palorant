document.addEventListener("DOMContentLoaded", () => {
    const bigImage = document.querySelector(".big-image");
    const palorant = document.querySelector(".news-big .palorant");

    bigImage.addEventListener("mouseenter", () => {
        palorant.classList.add("hovered");
    });

    bigImage.addEventListener("mouseleave", () => {
        palorant.classList.remove("hovered");
    });
});