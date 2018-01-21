
function makeTableData(n) {
  // use helper function from primes.js
  let primes = getPrimes(n);
  // create a 2D array to hold products of primes
  let data = Array(n).fill(0).map(el => Array(n));
  // fill data array with products
  for (let i = 0; i < primes.length; i++) {
    for (let j = 0; j < primes.length; j++) {
      data[i][j] = primes[i] * primes[j];
      data[j][i] = data[i][j];
    }  
  }
  return data;
}
