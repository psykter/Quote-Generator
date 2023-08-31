// Show New Quote
function newQuote() {
    showLoading(); // Show the loading spinner

    const randomQuote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

    // Update the content of the HTML elements
    quoteText.innerText = randomQuote.text;
    authorText.innerText = randomQuote.author;

    hideLoading(); // Hide the loading spinner
}

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// Loading Spinner Shown
function showLoading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Remove Loading Spinner
function hideLoading() {
    quoteContainer.hidden = false;
    loader.hidden = true;
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
hideLoading(); // Hide the loading spinner initially