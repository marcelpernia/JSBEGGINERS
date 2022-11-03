const counter = document.getElementById('counter');
const btnUp = document.getElementById('btn-up');
const btnDown = document.getElementById('btn-down');

let initial = 0

btnUp.addEventListener('click', () => {
    initial++
    counter.innerText = initial
})

btnDown.addEventListener('click', () => {
    if(initial > 0) {
        initial--
        counter.innerText = initial
    }
})