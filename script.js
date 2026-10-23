document.addEventListener("DOMContentLoaded", () => {
    const langToggleBtn = document.getElementById("langToggleBtn");
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    const searchInput = document.getElementById("searchInput");
    const contentCards = document.querySelectorAll(".content-card");
    const htmlRoot = document.documentElement;

    let currentLang = "both"; // Options: 'km', 'en', 'both'

    // Language Toggle Feature
    if (langToggleBtn) {
        langToggleBtn.addEventListener("click", () => {
            if (currentLang === "both") {
                currentLang = "km";
                document.querySelectorAll(".km").forEach(el => el.style.display = "block");
                document.querySelectorAll(".en").forEach(el => el.style.display = "none");
                langToggleBtn.innerText = "🇰🇭 ភាសាខ្មែរ";
            } else if (currentLang === "km") {
                currentLang = "en";
                document.querySelectorAll(".km").forEach(el => el.style.display = "none");
                document.querySelectorAll(".en").forEach(el => el.style.display = "block");
                langToggleBtn.innerText = "🇬🇧 English";
            } else {
                currentLang = "both";
                document.querySelectorAll(".km").forEach(el => el.style.display = "block");
                document.querySelectorAll(".en").forEach(el => el.style.display = "block");
                langToggleBtn.innerText = "🇰🇭 / EN";
            }
        });
    }

    // Theme Toggle Feature (Dark / Light Mode)
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            const currentTheme = htmlRoot.getAttribute("data-theme");
            if (currentTheme === "dark") {
                htmlRoot.setAttribute("data-theme", "light");
                themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
            } else {
                htmlRoot.setAttribute("data-theme", "dark");
                themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
            }
        });
    }

    // Live Search Filtering Feature
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            contentCards.forEach(card => {
                const textContent = card.innerText.toLowerCase();
                if (textContent.includes(searchTerm)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }

    console.log("UNIVERSE HUOKAING THARA Content Platform initialized successfully.");
});
