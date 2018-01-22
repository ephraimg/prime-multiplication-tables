
// this is to store makeTableData calculations for re-use
// start with a minimal 2D array, will hold products of primes
const tableData = [[4]];

function handleClick(inputText) {
  // clear the input field
  $('#numField').val('');
  // if input contains non-digits, reject it
  if (!(/^\d+$/).test(inputText) || inputText === '0') {
    alert('Invalid input. Please enter a positive integer.');
    return null;
  }
  // turn input text into integer
  const inputNum = Number(inputText);
  // generate all the products for the table
  addTableData(inputNum, tableData);
  // create and render the table to the DOM
  return renderTable(inputNum, tableData);
}

function addTableData(size, tableData) {
  // return immediately if already have the data
  if (tableData.length >= size) { return tableData; }
  // use helper function from primes.js
  getPrimes(size);
  // store prior length of data (we mutate data below)
  let startLength = tableData.length;
  // add empty arrays to data to avoid error in loop below
  while (tableData.length < size) { tableData.push([]); }
  // fill data array with products
  for (let i = 0; i < size; i++) {
    for (let j = startLength; j < size; j++) {
      tableData[i][j] = primes[i] * primes[j];
      tableData[j][i] = tableData[i][j];
    }  
  }
  return tableData;
}

function renderTable(size, tableData) {
  // use the size primes as column headers
  let colHeaders = '';
  for (let i = 0; i < size; i++) {
    colHeaders += `<th scope="col">${primes[i]}</th>`
  }
  // create the table skeleton
  let $table = $(`<table><tr><th></th>${colHeaders}</tr></table>`);
  // now we'll iterate through the n primes to make rows
  for (let row = 0; row < size; row++) {
    // create a row skeleton with the prime as header
    let $row = $(`<tr><th scope="row">${primes[row]}</th></tr>`);
    // in row, have a column entry for each product
    for (let col = 0; col < size; col++) {
      $row.append("<td>" + tableData[row][col] + "</td>");
    }
    // append the row to the whole table
    $table.append($row);
  }
  // clear old table away (if any) and render the new one
  $("#primesTable").empty().append($table);
  return $table;
}
