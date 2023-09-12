var quote = document.getElementById("quote-js");
var quoteBtn = document.getElementById("quote-btn");

// Nightmode/Daymode feauture

$(document).ready(function() {
  $("#night-mode-js").click(function() {
    $(".quote-container, .quote, .btn").toggleClass("night-mode");
       if($('#night-mode-js').hasClass('night-mode')){
       $('#night-mode-js').html('Night-mode');
     } else {
       $('#night-mode-js').html('Day-mode');
     }    
  });
});


//Random quote machine
var quotes = [
  '"The past cannot be changed. The future is yet in your power." - Unknown',
  '"Either I will find a way, or I will make one." - Philip Sydney',
  '"Failure will never overtake me if my determination to succeed is strong enough." - Og Mandino',
  '"Don’t watch the clock; do what it does. Keep going." — Sam Levenson',
  '"Aim for the moon. If you miss, you may hit a star." — W. Clement Stone.',
  '"It always seems impossible until its done." - Amelia Earhart',
  '"Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious." - Stephen Hawking',
  '"Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy." - Norman Vincent Peale', '"You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character." – Unknown', '"If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You." – Steve Jobs','"We May Encounter Many Defeats But We Must Not Be Defeated." – Maya Angelou', '"One Of The Lessons That I Grew Up With Was To Always Stay True To Yourself And Never Let What Somebody Else Says Distract You From Your Goals." – Michelle Obama', '"Today’s Accomplishments Were Yesterday’s Impossibilities." – Robert H. Schuller', '"The Only Way To Do Great Work Is To Love What You Do. If You Haven’t Found It Yet, Keep Looking. Don’t Settle." – Steve Jobs', '"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover." - Mark Twain', '"Nothing is impossible, the word itself says "I’m possible!" - Audrey Hepburn', '"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time." - Thomas A. Edison', '"I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear." – Nelson Mandela', '"If you don’t like something, change it. If you can’t change it, change your attitude." – Maya Angelou', '"Success means doing the best we can with what we have. Success is the doing, not the getting; in the trying, not the triumph. Success is a personal standard, reaching for the highest that is in us, becoming all that we can be." – Zig Ziglar',
  '“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi',
  '"Success is not final; failure is not fatal: It is the courage to continue that counts." — Winston S. Churchill',
  '“Opportunity is missed by most people because it is dressed in overalls and looks like work.” — Thomas Edison',
  '“The elevator to success is out of order. You’ll have to use the stairs, one step at a time.” — Joe Girard',
  '“Life is like a sewer… what you get out of it depends on what you put into it.” — Tom Lehrer'
];

quoteBtn.onclick = function randomQuote() {
  var rand = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerHTML = rand;
};
