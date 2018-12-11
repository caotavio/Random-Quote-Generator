let randomNumber;
let randomQuote;
let html = ' ';

let quotes = [
  {
    quote: 'Before enlightenment: chop wood, carry water. After enlightenment: chop wood, carry water.',
    source: 'Buddha'
  },

  {
    quote: 'The search for happiness is one of the chief sources of unhappiness.',
    source: 'Eric Hoffer'
  },

  {
    quote: 'Relax, nothing is under control.',
    source: 'Adi Da'
  },

  {
    quote: 'Nothing ever goes away until it has taught us what we need to know.',
    source: 'Pema Chödrön'
  },

  {
    quote: 'If a warrior is not unattached to life and death, he will be of no use whatsoever.',
    source: 'Yamamoto Tsunetomo',
    citation: '(Hagakure: The Book of the Samurai)',
    year: 1716
  },

  {
    quote: 'The place to improve the world is first in one`s own heart and head and hands.',
    source: 'Robert M. Pirsig',
    citation: '(Zen and the Art of Motorcycle Maintenance)',
    year: 1974
  },

  {
    quote: 'Empty your mind, be formless. Shapeless, like water. If you put water into a cup, it becomes the cup.',
    source: 'Bruce Lee',
    citation: '(Enter the Dragon)'
  },

  {
    quote: 'Wherever you are, be there totally.',
    source: 'Eckhart Tolle'
  },

  {
    quote: 'Every experience is a lesson. Every loss is a gain.',
    source: 'Sathya Sai Baba'
  },

  {
    quote: 'Mastering others is strength, mastering yourself is true power.',
    source: 'Lao Tsu',
    citation: '(The Tao Te Ching)'
  },

  {
    quote: 'A vida é massa. (Life is awesome)',
    source: 'Mitoso',
    year: 2018
  },

  {
    quote: 'You have to let it all go. Fear, doubt and disbelief. Free your mind.',
    source: 'Morpheus',
    citation: '(The Matrix)',
    year: 1999
  }
];

/* This function returns a random number between the quotes array indexess,
regardless of how many objects the array contains.
*/
function getRandomQuote (array) {
  randomNumber = Math.floor(Math.random() * quotes.length);
  return array[randomNumber];
}

/* 1. This function calls the getRandomQuote() function to randomly select an object
from the array and selects each of the properties on that object to form a string.
2. The if statements includes properties that are not on every object and conditionally
adds them to the string if they exist.
3. The last line links the selected quote to the DOM, aplying the structure and style
displayed.
*/
function printQuote () {
  randomQuote = getRandomQuote(quotes);
  html = '<p class="quote">' + randomQuote.quote + '</p>';
  html += '<p class="source">' + randomQuote.source;
  if (randomQuote.citation) {
    html += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if (randomQuote.year) {
    html += '<span class="year">' + randomQuote.year + '</span>';
  }
  html += '</p>';

  document.getElementById('quote-box').innerHTML = html;
}

// Calls the printQuote() function, displaying a new quote when the button is clicked
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
