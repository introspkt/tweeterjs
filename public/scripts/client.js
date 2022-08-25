/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

  const tweetData = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac",
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants",
      },
      "created_at": 1461116232227,
    },

    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd",
      "content": {
        "text": "Je pense , donc je suis",
      },
      "created_at": 1461113959088,
    }
  ]

  $(".tweet-submit").submit(function (event) {

    event.preventDefault();
    const tweetLength = $("#tweet-text").val().length;
console.log("tweetLength", tweetLength)
    let numsLeft = 140 - tweetLength;
    console.log("numsLeft", numsLeft)
    if (numsLeft < 0) {

      //charCounter.addClass("tweetTooLong") 
       alert("Tweet too long");
    } else if (numsLeft === 140) {
      alert("Tweet too short")
      //charCounter.removeClass("tweetTooLong");
    } else {
    $.ajax("/tweets", { method: "POST" }).then(function () {
      console.log($(this).serialize());

    });
  };
});

loadTweets()
})
  const renderTweets = function(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    for (const data of tweets) {
      const $tweet = createTweetElement(data);
      $(function() {
        $('#tweets-container').append($tweet);
      });
    }
  }

 /* Create the tweet element */
  const createTweetElement = function(tweet) {
  const $tweet = `<article>
      <article>
        <img src=${tweet.user.avatars} />
        <div class="name">${tweet.user.name}</div>
        <div class="handle">${tweet.user.handle}</div>
      </article>

      <div class="old-tweet">
      <p>${tweet.content.text}</p>
      </div>

      <footer>
      <div class="date-posted">
      <p>${timeago.format(tweetData.created_at)}</p>
    </div>

        <div class="tweet-icons">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
      </article>`;
    return $tweet;
  };

  $("#tweeter-form").on("submit", function() {
    $(function() {
      const $form = $("#tweeter-form");
      $form.submit(function(event) {
        event.preventDefault();

        $.ajax({ method: "POST", url: "/tweets/", data: $(this).serialize() })
        .then(function() {
          console.log($(this).serialize());
        });
      });
    });

    const loadTweets = function() {
      $.get("/tweets/").then(function(data) {
        renderTweets(data);
      })
    }
  
  
