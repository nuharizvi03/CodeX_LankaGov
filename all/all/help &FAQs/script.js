document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("faqSearch");
    const faqItems = document.querySelectorAll(".faq-item");

    searchInput.addEventListener("input", function () {
        const searchTerm = this.value.toLowerCase();

        faqItems.forEach(item => {
            const text = item.innerText.toLowerCase();
            if (text.includes(searchTerm)) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
        });
    });
});
