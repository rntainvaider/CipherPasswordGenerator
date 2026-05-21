const switchButtons = document.querySelectorAll(".header__language-button");
const subtitle = document.querySelector(".subtitle");

const translations = {
    ru: {
        subtitle: "кузница паролей · криптослучайно",
    },
    en: {
        subtitle: "password forge · cryptographically random",
    }
}

function changeLanguage(language) {
    subtitle.textContent = translations[language].subtitle;
}

switchButtons.forEach(button => {
    button.addEventListener('click', () => {
        switchButtons.forEach(btn => btn.classList.remove('header__language-button--active'));
        button.classList.add("header__language-button--active");

        const language = button.dataset.language;
        changeLanguage(language);
    })
})