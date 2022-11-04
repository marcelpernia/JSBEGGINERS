const counter = document.getElementById('counter');
const btnUp = document.getElementById('btn-up');
const btnDown = document.getElementById('btn-down');

let count = 0;

btnUp.addEventListener('click', () => {
    count++;
    counter.innerText = count;
    setCounterColor();
})

btnDown.addEventListener('click', () => {
    count--;
    counter.innerText = count;
    setCounterColor();
})

const setCounterColor = () => {
    if (count < 0) {
        counter.style.color = 'red';
    }
    if (count >= 0) {
        counter.style.color = '#363636';
    }
}