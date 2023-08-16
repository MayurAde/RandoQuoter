const quotes = require("./quotes.js")





const getRandomQuote = () =>{
    const randomIndex = Math.floor(Math.random() * quotes.length);

    return quotes[randomIndex];
}
module.exports = {
  getRandomQuote
};