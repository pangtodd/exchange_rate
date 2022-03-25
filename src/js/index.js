import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import ExchangeService from './exchange.js';

function clearFields() {
  $('.showErrors').text("");
  $('.showExchange').text("");
  $('#userAmount').text("");
}

// --- forEach Version ---
// function getElements(response) {
//   response.forEach(function(response) {
//   if (response) {
//     $('.showPrice').append(`Information for ${response.id} is shown below:<br>`);
//     $('.showPrice').append(`${response.id} price: ${response.price}<br>`);
//     $('.showPrice').append(`${response.id} current market cap: ${response.market_cap}<br><br>`);
//   } else {
//     $('.showErrors').text(`There was an error: ${response.message}`);
//   }
// });

// --- for loop Version ---
// for (let i = 0; i < 10; i++) {
//   if(response[i].id && response[i].price) {
//     $('.showPrice').append(`Information for ${response[i].id} is shown below:<br>`);
//     $('.showPrice').append(`${response[i].id} price: ${response[i].price}<br>`);
//     $('.showPrice').append(`${response[i].id} current market cap: ${response[i].market_cap}<br><br>`);
//   } else {
//     $('.showErrors').text(`There was an error: ${response.message}`);
//   }
// }

function getElements(response, amount, currencyType) {
  if (response.conversion_rate){
    $('.showExchange').append(`$${amount} in USD equals ${amount * response.conversion_rate} in ${currencyType}.`);
  } else {
    $('.showErrors').text(`there was an error: ${response.message}`);
  }
}

async function makeApiCall(currencyType, amount){
  const response = await ExchangeService.getExchange(currencyType);
  getElements(response, amount, currencyType);
  console.log(response);
}

$(document).ready(function() {
  $('#results').click(function() {
    let amount =  $('#userAmount').val();
    let currencyType = $('#currency').val();
    console.log("user input: currency type"+currencyType);
    clearFields();
    makeApiCall(currencyType, amount);

  });
});
