const switchButtons = document.querySelectorAll(".header__language-button");
const translatableElements = document.querySelectorAll("[data-translate]");

const translations = {
    ru: {
        subtitle: "кузница паролей · криптослучайно",
        password: "Ваш пароль",
        length: "Длина",
        charset: "Наборы символов",
    },
    en: {
        subtitle: "password forge · cryptographically random",
        password: "Your password",
        length: "Length",
        charset: "Character sets",
    }
}

function changeLanguage(language) {
    translatableElements.forEach(element => {
        const key = element.dataset.translate;
        element.textContent = translations[language][key];
    })
}

switchButtons.forEach(button => {
    button.addEventListener('click', () => {
        switchButtons.forEach(btn => btn.classList.remove('header__language-button--active'));
        button.classList.add("header__language-button--active");

        const language = button.dataset.language;
        changeLanguage(language);
    })
})