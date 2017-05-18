$(document).ready(function() {
  $("#shoutForm").submit(function(event) {

    var shoutInput = $("input#preShoutMessage").val().toUpperCase();

    $(".postShoutMessage").text(shoutInput);

    $("#shoutMessage").show();

    event.preventDefault();
  });
});
