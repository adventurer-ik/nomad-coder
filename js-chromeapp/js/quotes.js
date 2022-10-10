const quotes = [
    {
        quote: 'The way to get started is to quit talking and begin doing.',
        author: 'Walt Disney',
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: 'John Lennon',
    },
    {
        quote: 'The world is a book and those who do not travel read only one page.',
        author: 'Saint Augustine',
    },
    {
        quote: 'Life is either a daring adventure or nothing at all.',
        author: 'Helen Keller',
    },
    {
        quote: 'To Travel is to Live',
        author: 'Hans Christian Andersen',
    },
    {
        quote: 'Only a life lived for others is a life worthwhile.',
        author: 'Albert Einstein',
    },
    {
        quote: 'You only live once, but if you do it right, once is enough.',
        author: 'Mae West',
    },
    {
        quote: 'Never go on trips with anyone you do ntot love.',
        author: 'Hemmingway',
    },
    {
        quote: 'We wander for distraction, but we travel for fulfilment.',
        author: 'Hilaire Belloc',
    },
    {
        quote: 'Travel expands the mind and fills the gap.',
        author: 'Sheda Savage',
    },
    {
        quote: '행복은 깊이 느끼고, 단순하게 즐기고, 자유롭게 사고하고, 삶에 도전하고, 남에게 필요한 사람이 되는 능력에서 나온다.',
        author: '스톰 제임슨',
    },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerHTML = `- ${todaysQuote.author}`;
