$("document").ready(function() {
  $(".hover").on("mousemove", onMouseOver);
  $(".hover").on("click", onMouseClick);
  $(".hover").on("mouseleave", onMouseLeave);
});

function onMouseOver(evt) {
  $(".hover").text(evt.type + " " + evt.pageX + " " + evt.pageY + "\n" + "Button: " + evt.which + " Key: " + evt.metaKey);
}

function onMouseClick(evt) {
  $(".hover").text(evt.type + ": " + evt.pageX + ", " + evt.pageY);
  $(".hover").off("mousemove", onMouseOver);
}

function onMouseLeave(evt) {
  $(".hover").text("mouseleave");
}
