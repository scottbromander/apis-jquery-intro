$(document).ready(onReady);

let count = 0;

function onReady() {
  $('#js-scottsButton').on('click', scottsFunction);
  $('#js-container').on('dblclick', '.box', changeToGreen);
  $('#js-container').on('click', '.js-btn-heart', heartPost);
}

function scottsFunction() {
  count++;
  $('#js-howManyClicks').text(count);
  // append a new box dix to my container!
  $('#js-container').append(`
    <div class="box">
        <button class="js-btn-heart">Heart</button>
    </div>
  `);
}

function changeToGreen() {
  console.log('Green!');
  // here we will change things to green!
}

function heartPost() {
  console.log('So in so liked this image!');
}
