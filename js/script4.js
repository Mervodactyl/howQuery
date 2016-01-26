$("document").ready(function() {
  $("#move").click(function() {
    $("#moving-box")
    .animate({width: 400}, 400)
    .animate({height: 350}, 500)
    .animate({left: 400}, 500)
    .animate({top: "+=200", borderWidth: 50}, "slow")
  });
});
