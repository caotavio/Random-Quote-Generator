/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended:
    - Add at least one `year` and/or `citation` property to at least one
      quote object.
***/

let quotes = [
  {
    quote: 'Before enlightenment: chop wood, carry water. After enlightenment: chop wood, carry water.',
    source: 'Buddha',
    citation: ' ',
    year: ' '
  },

  {
    quote: 'The search for happiness is one of the chief sources of unhappiness.',
    source: 'Eric Hoffer',
    citation: ' ',
    year: ' '
  },

  {
    quote: 'Relax, nothing is under control.',
    source: 'Adi Da',
    citation: ' ',
    year: ' '
  },

  {
    quote: 'Nothing ever goes away until it has taught us what we need to know.',
    source: 'Pema Chödrön',
    citation: ' ',
    year: ' '
  },

  {
    quote: 'If a warrior is not unattached to life and death, he will be of no use whatsoever.',
    source: 'Yamamoto Tsunetomo',
    citation: '(Hagakure: The Book of the Samurai)',
    year: 1716
  }

  {
    quote: 'The place to improve the world is first in one`s own heart and head and hands.',
    source: 'Robert M. Pirsig',
    citation: '(Zen and the Art of Motorcycle Maintenance)',
    year: 1974
  },

  {
    quote: 'Empty your mind, be formless. Shapeless, like water. If you put water into a cup, it becomes the cup.',
    source: 'Bruce Lee',
    citation: '(Enter the Dragon)',
    year: ' '
  },

  {
    quote: 'Wherever you are, be there totally.',
    source: 'Eckhart Tolle',
    citation: ' ',
    year: ' '
  },

  {
    quote: 'Every experience is a lesson. Every loss is a gain.',
    source: 'Sathya Sai Baba',
    citation: ' ',
    year: ' '
  },

  {
    quote: 'Mastering others is strength, mastering yourself is true power.',
    source: 'Lao Tsu',
    citation: '(The Tao Te Ching)',
    year: ' '
  },

  {
    quote: 'A vida é massa. (Life is awesome)',
    source: 'Mitoso',
    citation: ' ',
    year: 2018
  },

  {
    quote: 'You have to let it all go. Fear, doubt and disbelief. Free your mind.',
    source: 'Morpheus',
    citation: '(The Matrix)',
    year: 1999
  }
];

let quote;
let source;
let citation;
let year;
let randomNumber;

/***
  Create the `getRandomQuote` function to:
   - generate a random number
   - use the random number to `return` a random quote object from the
     `quotes` array.
***/

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




/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
