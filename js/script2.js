$("document").ready(function() {
  var newP = $("<p>");
  newP.append("<h1>I'm the new girl in town!</h1>");

  $(".switch").html(newP);
  $(".foop").prepend("Watch this! ");
  $(".headings").html("<h2>What a beautiful day!</h2>");
});
