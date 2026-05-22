const passwordRange = document.querySelector('.password__range');
const lengthNumberr = document.querySelector('.password__length-number');
const passwordTextt = document.querySelector('.password__text');
const generateButton = document.querySelector('.password__generate');

function generatePassword(length) {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let password = '';

    for (let i = 0; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    return password;
}

// При движении ползунка меняем только число
passwordRange.addEventListener('input', () => {
    lengthNumberr.textContent = passwordRange.value; passwordTextt
});

// По кнопке генерируем пароль
generateButton.addEventListener('click', () => {
    const length = Number(passwordRange.value);
    passwordTextt.textContent = generatePassword(length);
});

passwordTextt.textContent = generatePassword(
    Number(passwordRange.value)
);