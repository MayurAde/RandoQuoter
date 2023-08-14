# Random Quote Generator

A simple npm package to generate and retrieve random quotes.

## Installation

Install the package using npm:

```bash
npm install random-quote-generator

```

## Usage

Import the function from the package and use them in your javascript code

```jsx

const getQuote = require("randoquoter")

const quote = getQuote.getRandomQuote();

console.log(quote.text + " - " + quote.author)

```


## API Reference

getRandomQuote()
Returns a random quote object with text and author fields.


## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
