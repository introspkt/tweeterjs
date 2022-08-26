$(document).ready(function() {
  
  console.log(`Character Counter Loaded`)

  $(`#tweetText`).on('keyup', function() {
    
    let tweetLength = $(this).val().length;
    let counter = $(`#counter`);

    if (tweetLength <= 140) {
      counter.text(140-tweetLength)
     
      $(`#counter`).text(140-tweetLength).css("color", "inherit")
    } else {
      console.log(`TOO LONG`);
      counter.text(`-${0+(tweetLength-140)}`).css("color", "red");
    }
  })
});
