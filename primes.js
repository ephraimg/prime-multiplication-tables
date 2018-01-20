

// use external array to memoize the getPrimes function
// hardcode first 5 because theorem below is only valid for n >= 6
let primes = [2, 3, 5, 7, 11];

// for efficiency use modified Sieve of Eratosthenes
function getPrimes(n) {

  // check if already memoized up to n
  if (n <= primes.length) { return primes.slice(0, n); }

  // use a theorem: the nth prime is less then n(ln n + ln ln n)
  // https://en.wikipedia.org/wiki/Prime_number_theorem#Approximations_for_the_nth_prime_number
  let limit = Math.ceil(n * (Math.log(n) + Math.log(Math.log(n))));

  // initialize a list of numbers from largest prime found so far up to limit
  // notice last (smallest) num will be a prime
  let nums = [];
    for (let i = limit; i > primes[primes.length - 1]; i--) {
    nums.push(i);   
  }

  // eliminate from nums all multiples of primes already found
  for (let i = 0; i < primes.length; i++) {
    nums = nums.filter(j => j % primes[i] !== 0);    
  }

  // now start finding the additional primes we need 
  while (primes.length < n) {
    // grab the last (smallest) number in nums (a prime)
    let currPrime = nums.pop();
    // add it to our list of primes
    primes.push(currPrime);
    // remove from nums every multiple of that prime
    nums = nums.filter(i => i % currPrime !== 0);
    // now the new last (smallest) num is gauranteed to be prime again!
  }

  return primes;

}
