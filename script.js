// let apiQuote = [];

// import { localQuotes } from './quotes.js';

// Show New Quote
function newQuote() {
    const randomQuote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

    // Update the content of the HTML elements
    quoteText.innerText = randomQuote.text;
    authorText.innerText = randomQuote.author;
}

const localQuotes = [
    {
        text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
        author: 'Thomas Edison',
    },
    {
        text: 'Growth itself contains the germ of happiness.',
        author: 'Pearl Buck',
    },
];
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// Loading Spinner Shown
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Remove Loading Spinner
function complete() {
    if (!loader.hidden) {
        quoteContainer.hidden = false;
        loader.hidden = true;
    }
}

// Tweet Quote
function tweetQuote() {
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote + ' - ' + author)}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
newQuote();