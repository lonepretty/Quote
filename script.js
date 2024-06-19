const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Your time is limited, don't waste it living someone else's life.",
    "The only limit to our realization of tomorrow is our doubts of today."
];

const quoteText = document.getElementById('quoteText');
const refreshButton = document.getElementById('refreshButton');
const shareButton = document.getElementById('shareButton');
const favoriteButton = document.getElementById('favoriteButton');
const favoritesList = document.getElementById('favoritesList');

let currentQuote = '';

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayQuote() {
    currentQuote = getRandomQuote();
    quoteText.textContent = currentQuote;
}

function addToFavorites() {
    const li = document.createElement('li');
    li.textContent = currentQuote;
    favoritesList.appendChild(li);
}

refreshButton.addEventListener('click', displayQuote);
shareButton.addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
            title: 'Quote of the Day',
            text: currentQuote
        });
    } else {
        alert('Share feature not supported on your browser. Please copy the quote manually.');
    }
});
favoriteButton.addEventListener('click', addToFavorites);

// Display an initial quote
displayQuote();
