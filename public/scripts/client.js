/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {

  const createTwwetElement = function (tweetObject) {
    const timePosted = timeago.format(tweetObject.created_at);
    const markup = `
      <article>
        <section class="tweet-header">
          <div class="tweet-avatar">
            <img src="${tweetObject.user.avatars}">
            <span>&nbsp&nbsp${showObject.user.name}</span>
          </div>
          <span class="tweet-handle">${tweetObject.user.handle}</span>
        </section>
        <br>
        <div class="posted-tweet">
          <p class="tweeted-text">${tweetObject.content.text}</p>
        </div>
        <footer class="tweet-footer">
          <div class="tweet-days-ago">
            <i>${timePosted}</i>
          </div>
          <div class="tweet-icons">
            <i class="far fa-flag">&nbsp &nbsp</i>
            <i class="fas fa-heart">&nbsp &nbsp</i> 
            <i class="fas fa-retweet"></i>
          </div>
        </footer>
      </article>
      `;
    return markup;
  };
  // loop through the results
  const renderMarkup = function (tweetArr) {
    for (let tweetObject of tweetArr) {
      // create and attach HTML element to the dom
      const markup = createTweetElement(showObject);
      // Item container new to old
      $('#tweets-container').append(markup);
    }
  };

  // perform request and deal with result
  const getTweets = function 

  // send the request to /tweets
  $.ajax({url: `/tweets/`,
  method: 'GET'
})
.done(tweetArr => {
  renderMarkup(tweetArr)
})
.fail(err => {console.log(`ERROR: ${err.message}`)})
.always(()=> {console.log('Request to tweet object has been executed')})
}

.done(tweetArr => {
  renderMarkup(tweetArr);
})
.fail(err => {
  console.log(`ERROR: ${err.message}`);
})
.always(()=> {
  console.log('Request to tweet object has been executed');
});
};

 // catch the form submit
 $('.new-tweet-form').on('submit', function(event){
  event.preventDefault();
  console.log('Submit is being triggered')

})


    const inputBox = $(this).children('#tweetText');
    const tweetText = inputBox.val();
    console.log(tweetText);

    if (tweetText.length > 140) {
      console.log('REDUCE LENGTH OF TWEET');

    } else if (tweetText.length === 0) {
      alert('Enter text to post a tweet');
      console.log('CANNOT CREATE EMPTY TWEET');   

    } else {

      // post to /tweets
      $.ajax({
        // url: `/tweets/${tweetText}`,
        url: `/tweets/`,
        method: 'POST',
        data: $(this).serialize()
      }).then(function() {
        $('#tweetText').val("");
        $.get('/tweets/', (data) => {
          const latestTweet = data.slice(-1).pop();
          const latestTweetObj = createTweetElement(latestTweet);
          $('#tweets-container').prepend(latestTweetObj);
        });
      })
      .fail(err => {console.log(`ERROR: ${err.message}`)})
      .always(()=> {
        $('#counter').val(140);
        console.log('Posting tweet object has been executed, and counter reset');
      });
    }


  getTweets();

  



