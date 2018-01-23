# Prime Multiplication Tables

## Usage instructions

- Clone this repo to your local machine
- Run npm install
- Open index.html in your browser
- Enter an integer in the input field and click the 'Go' button or hit 'Enter' 
  - Keep in mind the size of the result - for input 200, e.g., the browser will need to render a 40,000-cell table!
- To run tests, open test/mochaTester.html in your browser

## Highlights

- I've used a sieve to efficiently implement a function for generating the first n prime numbers. This required using a theorem that identifies an upper limit to the size of the nth prime. 
- All calculated primes are also stored in case the user continues to use the application. (Each prime will be calculated only *once*.)
- Similarly, the function that calculates products of primes stores all its results for re-use.
- The test suite uses randomized testing to ensure correct behavior of the prime-generating function, the click handler, and the functions that generate a table element to be appended to the DOM.

## Further work

- The prime-generator could be optimized further by using an alternate sieve. However, for relatively small values of n, the improvement would not be noticeable.
- I've used only minimal CSS styling on the app, enough to make it easy to use and view, but a production app would obviously need to be spruced up.
- Each time the user inputs a new n, the new DOM table is constructed entirely from scratch (albeit perhaps filled with pre-calculated data). If possible, it would be nice to only remove or add necessary pieces to the table, as this would speed up the rendering.
