const $button = document.getElementById('button');
const $body = document.body;
const $h1 = document.getElementById('color');

colors = ['#3B9AE1', '#3B9AE1', '#FC5050', '#25A55F', '#FFD717', '#90A17D', '#B9E0FF']

$button.addEventListener('click', function() {
    const random = Math.floor(Math.random() * colors.length);
    $body.style.backgroundColor = colors[random];
    $h1.innerText = colors[random];
});