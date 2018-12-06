
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

let randomNumber;
let randomQuote;
let html = ' ';

function getRandomQuote (array) {
  randomNumber = Math.floor(Math.random() * quotes.length);
  return array[randomNumber];
}

/***
  Create the `printQuote` function to:
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to
     create your HTML string.
   - use conditionals to make sure the optional properties exist before
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string.
***/

function printQuote () {
  randomQuote = getRandomQuote(quotes);
  html = '<h2>' + randomQuote.quote + ' ';
  html += randomQuote.source;
  if (randomQuote.citation) {
    html += ' ' + randomQuote.citation;
  }
  if (randomQuote.year) {
    html += ' ' + randomQuote.year;
  }
  html += '</h2>';
  return html;
}



/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
