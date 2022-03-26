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

function getElements2(response2, amount, currencyType) {
  let currencies = response2.conversion_rates;
  let currencyKeys= Object.keys(currencies);
  if (currencyKeys.includes(currencyType)){
    $('.showExchange').append(`$${amount} in USD equals ${response2.conversion_rates[currencyType]*amount} in ${currencyType}.`);
  } else {
    $('.showErrors').text(`there was an error: ${response2.message}`);
  }
}

function getElements3(response3, amount) {
  let currencies = response3.conversion_rates;
  let currencyKeys= Object.keys(currencies);
  currencyKeys.forEach(function(key){
    if (response3.conversion_rates){
      $('.showExchange').append(`$${amount} in USD equals ${response3.conversion_rates[key]*amount} in ${key}.<br>`);
    } else {
      $('.showErrors').text(`there was an error: ${response3.message}`);
    }
  });
}

async function makeApiCall(currencyType, amount){
  const response = await ExchangeService.getExchange(currencyType);
  getElements(response, amount, currencyType);
}

async function makeApiCall2(currencyType, amount){
  const response2 = await ExchangeService.getFull();
  getElements2(response2, amount, currencyType);
  checkCurrency(response2,currencyType);
}                                                

async function makeApiCall3(currencyType, amount){
  const response3 = await ExchangeService.getFull();
  getElements3(response3, amount);
}

function checkCurrency(response2, currencyType) {
  let currencies = response2.conversion_rates;
  let currencyKeys= Object.keys(currencies);
  if (!currencyKeys.includes(currencyType)){
    $('.showErrors').text(`{currencyType} not recogized, please confirm it is a valid currency.`);
  }
}

$(document).ready(function() {
  $('#5results').click(function() {
    let amount =  $('#userAmount').val();
    let currencyType = $('#currency').val();
    console.log("user input: currency type "+currencyType);
    clearFields();
    makeApiCall(currencyType, amount);
  });
});

$(document).ready(function() {
  $('#results').click(function() {
    let amount =  $('#userAmount').val();
    let currencyType = $('#userCurrency').val().toUpperCase().trim();
    console.log("user input: currency type "+currencyType);
    clearFields();
    makeApiCall2(currencyType, amount);
  });
});

$(document).ready(function() {
  $('#allResults').click(function() {
    let amount =  $('#userAmount').val();
    let currencyType = $('#userCurrency').val().toUpperCase().trim();
    console.log("user input: currency type "+currencyType);
    clearFields();
    makeApiCall3(currencyType, amount);
  });
});

