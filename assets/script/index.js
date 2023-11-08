'use strict';

const quoteElement = document.querySelector('h1');

const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Impossible is nothing. - Muhammad Ali",
    "Do or do not, there is no try. - Yoda",
    "Simplicity is the ultimate sophistication. - Leonardo da Vinci",
    "Dream without fear, love without limits. - Unknown",
    "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Success is walking from failure to failure with no loss of enthusiasm. - Winston S. Churchill",
];

function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    return randomQuote;
}

window.addEventListener('load', function () {
    quoteElement.textContent = generateRandomQuote();
});

document.querySelector('a').addEventListener('click', function () {
    quoteElement.value = '';
    quoteElement.textContent = generateRandomQuote();
});