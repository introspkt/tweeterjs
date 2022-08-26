/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {

  const createShowElement = function (showObject) {
    const timePosted = timeago.format(showObject.created_at);
    const markup = `
      <article>
        <section class="tweet-header">
          <div class="tweet-avatar">
            <img src="${showObject.user.avatars}">
            <span>&nbsp&nbsp${showObject.user.name}</span>
          </div>
          <span class="tweet-handle">${showObject.user.handle}</span>
        </section>
        <br>
        <div class="posted-tweet">
          <p class="tweeted-text">${showObject.content.text}</p>
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
      `
    return markup
  }
  // loop through the results
  const renderMarkup = function (showArr) {
    for (let showObject of showArr) {
      // create and attach HTML element to the dom
      const markup = createShowElement(showObject);
      // Targetting the container and appending the item to it
      $('#tweets-container').append(markup);
    }
  }

  // perform request and deal with result
  const getTweets = function 

  // send the request to /tweets
  $.ajax({url: `/tweets/`,
  method: 'GET'
})
.done(results => {
  renderMarkup(results)
})
.fail(err => {console.log(`ERROR: ${err.message}`)})
.always(()=> {console.log('Request to tweet object has been executed')})
}

 // catch the form submit
 $('.new-tweet-form').on('submit', function(event){
  event.preventDefault();
  const inputBox = $(this).children('#tweetText');
  console.log('Submit is being triggered')
  getTweets();
})


