
function handleClick(inputText) {
  // if input contains non-digits, reject it
  if (!(/^\d+$/).test(inputText) || inputText === '0') {
    alert('Invalid input! Please enter a positive integer.');
    return null;
  }
  // turn input text into integer
  let inputNum = Number(inputText);
  // generate all the products for the table
  makeTableData(inputNum);
  // create and render the table to the DOM
  return renderTable(inputNum);
}

// store makeTableData calculations for re-use
// start with a minimal 2D array, will hold products of primes
let data = [[4]];

function makeTableData(n) {
  // return immediately if already have the data
  if (data.length >= n) { return; }
  // use helper function from primes.js
  getPrimes(n);
  // store prior length of data (we mutate data below)
  let startLength = data.length;
  // add empty arrays to data to avoid error in loop below
  while (data.length < n) { data.push([]); }
  // fill data array with products
  for (let i = 0; i < n; i++) {
    for (let j = startLength; j < n; j++) {
      data[i][j] = primes[i] * primes[j];
      data[j][i] = data[i][j];
    }  
  }
  return data;
}

function renderTable(n) {
  // use the n primes as column headers
  let colHeaders = '';
  for (let i = 0; i < n; i++) {
    colHeaders += `<th scope="col">${primes[i]}</th>`
  }
  // create the table skeleton
  let $table = $(`
    <table>
      <tr>
        <th></th>
        ${colHeaders}
      </tr>
    </table>
  `);
  // now we'll iterate through the n primes to make rows
  for (let row = 0; row < n; row++) {
    // create a row skeleton with the prime as header
    let $row = $(`
      <tr>
        <th scope="row">
          ${primes[row]}
        </th>
      </tr>
    `);
    // in the row, have a column entry for each product
    for (let col = 0; col < n; col++) {
      $row.append("<td>" + data[row][col] + "</td>");
    }
    // append the row to the whole table
    $table.append($row);
  }
  // clear any old table away and render the new one
  $("#primesTable").empty();
  $("#primesTable").append($table);
  return $table;
}
