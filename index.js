/* eslint-disable strict */
'use strict';

function getDogImages() {
  const fetchNum = $('#howManyDoggos').val(),
    fetchUrl = `https://dog.ceo/api/breeds/image/random/${fetchNum}`;
  fetch(fetchUrl)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function generateResults(responseJson) {
  const dogPics = [];
  for (let i = 0; i<responseJson.message.length; i++) {
    dogPics.push(`<img src="${responseJson.message[i]}" class="results-img"></img>`);
  }
  return dogPics;
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new ones
  const html = generateResults(responseJson).join('');
  console.log(html);
  $('#doggos').html(html);
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImages();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});