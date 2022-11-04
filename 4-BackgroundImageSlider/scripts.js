const slider = document.getElementById('slider');
const buttonL = document.getElementById('left');
const buttonR = document.getElementById('right');


const images = [
    'images/river-g312de3b1c_1280.jpg',
    'images/road-g0d872636f_1280.jpg',
    'images/road-gfefd5b097_1280.jpg',
    'images/flowers-g92ff5d7b2_1280.jpg',
    'images/red-deer-g1e127dfc7_1280.jpg',
]

const changeImage = (src) => {
    slider.style.backgroundImage = `url(${src})`;
}
changeImage(images[0]);

let slidePosition = 0;

buttonR.addEventListener('click', () => {
    if(slidePosition < images.length - 1) {
        slidePosition++
        changeImage(images[slidePosition]);
    }
});

buttonL.addEventListener('click', () => {
    if(slidePosition > 0) {
        slidePosition--
        changeImage(images[slidePosition]);
    }
});