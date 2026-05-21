const buttonCopy = document.querySelector(".password__copy");
const passwordText = document.querySelector(".password__text");
const iconUse = document.querySelector(".password__copy-use");

buttonCopy.addEventListener('click', () => {
    buttonCopy.classList.add("password__copy--copied");
    iconUse.setAttribute("href", "./assets/icons/sprite.svg#check");

    navigator.clipboard.writeText(passwordText.textContent);

    setTimeout(() => {
        iconUse.setAttribute("href", "./assets/icons/sprite.svg#copy");
        buttonCopy.classList.remove("password__copy--copied");
    }, 1500);
})