$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  $('.ryu').mousedown(function() {
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
      .animate(
      {'left': '1220px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '520px');
      }
    )
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  })
  $('body').keydown(function(event) {
    if (event.which == 88) {
      $('.ryu-still').hide();
      $('.ryu-ready').hide();
      $('.ryu-cool').show();
    }
  })
  .keyup(function(event) {
    if (event.which == 88) {
      $('.ryu-cool').hide();
      $('.ryu-still').show();
    }
  })
// Hulk RYU stuff
  $('.hulk-ryu').mouseenter(function() {
    $('.hulk-ryu-still').hide();
    $('.hulk-ryu-ready').show();
  })
  .mouseleave(function() {
    $('.hulk-ryu-ready').hide();
    $('.hulk-ryu-still').show();
  })
  $('.hulk-ryu').mousedown(function() {
    playHadouken();
    $('.hulk-ryu-ready').hide();
    $('.hulk-ryu-throwing').show();
    $('.hulk-ryu-hadouken').finish().show()
      .animate(
      {'right': '1220px'},
      500,
      function() {
        $(this).hide();
        $(this).css('right', '520px');
      }
    )
  })
  .mouseup(function() {
    $('.hulk-ryu-throwing').hide();
    $('.hulk-ryu-ready').show();
  })
  $('body').keydown(function(event) {
    if (event.which == 86) {
      $('.hulk-ryu-still').hide();
      $('.hulk-ryu-ready').hide();
      $('.hulk-ryu-cool').show();
    }
  })
  .keyup(function(event) {
    if (event.which == 86) {
      $('.hulk-ryu-cool').hide();
      $('.hulk-ryu-still').show();
    }
  })
});
function playHadouken() {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
