let selectedPriority = null;

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".sub-prior button");

    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();

            buttons.forEach((btn) => btn.classList.remove("selected"));
            button.classList.add("selected");

            selectedPriority = button.getAttribute("data-priority");
            console.log(`Selected priority: ${selectedPriority}`);
        });
    });
});

function register() {
    let isValid = true;
    let alertMessages = [];

    // Ambil elemen input
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const followUpEmail = document.getElementById("followUpEmail");
    const descriptionInput = document.getElementById("describe-box");
    const servers = document.getElementsByName("server");

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const description = descriptionInput.value.trim();

    // Reset border semua input
    [usernameInput, emailInput, descriptionInput].forEach(input => {
        input.style.border = "1px solid #ccc";
    });

    // Validasi username
    if (username === "") {
        usernameInput.style.border = "2px solid red";
        alertMessages.push("Username tidak boleh kosong!");
        isValid = false;
    } else if (username.length < 5 || username.length > 20) {
        usernameInput.style.border = "2px solid red";
        alertMessages.push("Username harus antara 5 hingga 20 karakter!");
        isValid = false;
    }

    // Validasi email
    if (email === "") {
        emailInput.style.border = "2px solid red";
        alertMessages.push("Email tidak boleh kosong!");
        isValid = false;
    } else if (!email.endsWith("@gmail.com")) {
        emailInput.style.border = "2px solid red";
        alertMessages.push("Email harus diakhiri dengan @gmail.com!");
        isValid = false;
    }

    // Validasi deskripsi
    if (description === "") {
        descriptionInput.style.border = "2px solid red";
        alertMessages.push("Deskripsi tidak boleh kosong!");
        isValid = false;
    }

    // Validasi checkbox follow-up email
    if (!followUpEmail.checked) {
        alertMessages.push("Silakan centang kotak untuk menerima email balasan!");
        isValid = false;
    }

    // Validasi radio button server
    let serverSelected = false;
    for (let i = 0; i < servers.length; i++) {
        if (servers[i].checked) {
            serverSelected = true;
            break;
        }
    }

    if (!serverSelected) {
        alertMessages.push("Silakan pilih server!");
        isValid = false;
    }

    // Validasi prioritas
    if (selectedPriority === null) {
        alertMessages.push("Silakan pilih prioritas bug!");
        isValid = false;
    }
    
    if(description.length < 50 || description.length > 500) {
        descriptionInput.style.border = "2px solid red";
        alertMessages.push("Deskripsi tidak boleh kurang dari 50 karakter dan lebih dari 500 karakter!");
        isValid = false;
    }

    // Tampilkan semua alert sekaligus jika ada error
    if (!isValid) {
        alert(alertMessages.join("\n"));
        return false;
    }


    showThankYouModal();
    return false; // Supaya form tidak submit ulang page
}

function showThankYouModal() {
    const modal = document.getElementById("thankYouModal");
    modal.style.display = "flex";
}

function closeThankYouModal() {
    const modal = document.getElementById("thankYouContent");
    modal.style.display = "none";
    location.reload();
}
