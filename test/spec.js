var assert = require('assert');
var primes = require('../primes.js');

describe('The getPrimes function', function() {
  it('should return the first n primes for input n', function() {
    assert.deepEqual(primes.getPrimes(1), [2]);
    assert.deepEqual(primes.getPrimes(5), [2, 3, 5, 7, 11]);
    assert.deepEqual(primes.getPrimes(21), [2, 3, 5, 7, 11, 13, 17, 19, 23, 
      29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73]);
  });
});