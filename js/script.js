document.addEventListener("DOMContentLoaded", function () {

    console.log("Website Piala Dunia 2026 berhasil dimuat.");

    const tahun = new Date().getFullYear();

    const footer = document.getElementById("copyright");

    if (footer) {
        footer.innerHTML = "© " + tahun + " Piala Dunia 2026";
    }

});
