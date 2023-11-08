# Quotes Generator Project

Welcome to the Quotes Generator project! This is a simple web application that displays a random quote each time you click the "New Quote" button. It's a great way to get some inspiration or motivation. In this guide, I'll walk you through the steps to execute this project.

Click [here](https://yuvrxjsr.github.io/quotes-generator/) to see the live demo.

## Project Overview
This project consists of three main components: HTML, CSS, and JavaScript.

- HTML: This provides the structure and content of the web page.
- CSS: This styles the web page to make it visually appealing.
- JavaScript: This adds functionality to the project, allowing it to generate and display random quotes.

## Project Structure and Code Explanation
Let's go through the project structure and provide a brief explanation of the code:

### HTML (index.html)
The HTML file defines the structure of the web page and includes links to external CSS and JavaScript files.

```ruby
<!DOCTYPE html>
<html lang="eng" dir="ltr">
    <head>
    </head>
    <body>
    </body>
</html>
```

- The `<head>` section contains metadata and links to external resources.
- The `<body>` section contains the main content of the page, including a container for the quote and a button to generate a new quote.
### CSS (style.css)

```ruby
body {
    font-family: 'Nunito Sans', sans-serif;
    background:#000 url(../img/bg.jpg) center center / cover no-repeat fixed;
}

.container {
    width: min(100% - 30px, 1080px);
    margin-inline: auto;
    height: calc(100dvh);
}
```

The CSS file contains styling for the web page, including the background, font styles, and button styles.

- It uses the Nunito Sans font from Google Fonts.
- The background image is applied to the body.
- Various styles are defined for the container, centering elements, and button appearance.
### JavaScript (index.js)

```ruby
function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    return randomQuote;
}

window.addEventListener('load', function () {
    quoteElement.textContent = generateRandomQuote();
});
```

The JavaScript file handles generating and displaying random quotes.

- An array of quotes is defined, each with an author.
- The generateRandomQuote function selects a random quote from the array.
- The load event listener sets the initial quote when the page loads.
- The click event listener on the "New Quote" button generates and displays a new random quote.

![](./assets/img/output.png)