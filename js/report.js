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

function register(){
    let isValid = true;

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const followUpEmail = document.getElementById("followUpEmail").checked;
    const servers = document.getElementsByName("server");
    const description = document.getElementById("describe-box").value;

    if(username === "" || email === "" || description === "" || followUpEmail === false || selectedPriority === null || servers === null){
        if(username === ""){
            alert("Username tidak boleh kosong!");
        }
        else if(email === ""){
            alert("Email tidak boleh kosong!");
        }
        else if(description === ""){
            alert("Deskripsi tidak boleh kosong!");
        }
        else if(followUpEmail === false){
            alert("Silahkan centang kotak untuk menerima email balasan!");
        }
        else if(selectedPriority === null){
            alert("Silahkan pilih prioritas bug!");
        }
        else if(servers === null){
            alert("Silahkan pilih server!");
        }
        isValid = false;
        return isValid;
    }

    if(!email.endsWith('@gmail.com')){
        alert("Email harus diakhiri dengan @gmail.com");
        isValid = false;
        return isValid;
    }
    
    showThankYouModal();
    return false;
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