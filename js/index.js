document.addEventListener("DOMContentLoaded", () => {
    const infoIcon = document.querySelector(".info-icon");
    const description = document.querySelector(".description");

    if (!infoIcon || !description) {
        console.error("infoIcon or description not found!");
        return;
    }

    infoIcon.addEventListener('click', () => {
        description.style.display = "block";

        // Dapatkan posisi info-icon relatif terhadap viewport
        const iconRect = infoIcon.getBoundingClientRect();

        // Hitung posisi dalam persentase relatif terhadap viewport
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        if(viewportWidth <= 480){
            // Untuk layar kecil (max-width: 480px)
            description.style.left = "45%"; // Atur posisi kiri tetap
            description.style.top = `${iconRect.bottom - 100}px`; // Tambahkan jarak 10px di bawah info-icon
        }

        else if (viewportWidth <= 768) {
            // Untuk layar kecil (max-width: 768px)
            description.style.left = "25%"; // Atur posisi kiri tetap
            description.style.top = `${iconRect.bottom - 60}px`; // Tambahkan jarak 10px di bawah info-icon
        } else {
            // Untuk layar besar
            const leftPercent = (iconRect.left / viewportWidth) * 100;
            const offsetPercent = (-100 / viewportHeight) * 100; // Offset 10px dikonversi ke persen
            const topPercent = (iconRect.bottom / viewportHeight) * 100 + offsetPercent;
    
            description.style.left = `${leftPercent}%`;
            description.style.top = `${topPercent}%`;
        }
    });

    infoIcon.addEventListener("mouseout", () => {
        description.style.display = "none";
    });

});