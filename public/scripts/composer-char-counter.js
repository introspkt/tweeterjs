$(document).ready(function() {
  // --- our code goes here ---
  $('textarea').on('input', function() {
    const maxInput = 140;
    let characters = $(this).val().length;
    let charLength = maxInput - characters;
})