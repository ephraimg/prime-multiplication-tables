
// store an accurate list of the first 100 primes for reference in tests
const prime100 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 
  43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 
  109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 
  181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 
  257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 
  337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 
  419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 
  491, 499, 503, 509, 521, 523, 541];

describe('The getPrimes function', function() {
  for (let i = 0; i < 10; i++) {
    const randSize = Math.floor(Math.random() * 100);
    it(`should return the first ${randSize} primes for input ${randSize}`, function() {
      assert.deepEqual(getPrimes(randSize), prime100.slice(0, randSize));
    });
  }
});

describe('The makeTableData function', function() {
  let randSize;
  for (let i = 0; i < 10; i++) {
    randSize = 1 + Math.floor(Math.random() * 24);
    it(`should make an ${randSize} x ${randSize} array from an ${randSize}-length input`, function() {
      let table = makeTableData(randSize);
      assert.equal(table.length, randSize);
      assert.equal(table[0].length, randSize);
    });
  }
  randSize = 1 + Math.floor(Math.random() * 99);
  for (let i = 0; i < 10; i++) {
    const num1 = Math.floor(Math.random() * randSize);
    const num2 = Math.floor(Math.random() * randSize);
    it(`should calculate the product of prime ${num1 + 1} and prime ${num2 + 2} correctly`, function() {
      let table = makeTableData(randSize);
      assert.equal(table[num1][num2], prime100[num1] * prime100[num2]);
      assert.equal(table[num2][num1], table[num1][num2]);
    });
  }
});

let alert;

describe('The handleClick function', function() {
  it('should return null for non-integer input', function() {
    // turn alert into noop to allow test to conclude
    alert = () => {};
    assert.equal(handleClick('abcd'), null);
  });
})
