const range = document.querySelector('.password__range');
const lengthNumber = document.querySelector('.password__length-number');

function updateRange() {
    const percent =
        ((range.value - range.min) / (range.max - range.min)) * 100;

    range.style.background = `
        linear-gradient(
            to right,
            #61d46a 0%,
            #61d46a ${percent}%,
            #2a2f45 ${percent}%,
            #2a2f45 100%
        )`;
}

range.addEventListener('input', updateRange);
updateRange();

range.addEventListener('input', () => {
    lengthNumber.textContent = range.value;
});