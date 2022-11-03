const button = document.getElementById('button');
const quote = document.getElementById('quote');
const author = document.getElementById('author');

const quotes = [
    {
        content: 'No hay que ir para atrás ni para darse impulso',
        author: 'Lao Tsé'
    },
    {
        content: 'No hay caminos para la paz; la paz es el camino',
        author: 'Mahatma Gandhi'
    },
    {
        content: 'Haz el amor y no la guerra',
        author: 'John Lennon'
    },
    {
        content: 'Nunca rompas el silencio si no es para mejorarlo',
        author: 'Beethoven'
    },
]

const getQuote = () => {
    let random = Math.floor(Math.random() * quotes.length);

    quote.textContent = quotes[random].content;
    author.textContent = quotes[random].author;
}

getQuote();
button.onclick = getQuote;