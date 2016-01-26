$("document").ready(function() {
  $("#get-content").click(getContent);
  $("#load-html").click(loadHTML);
});

function getContent() {
  $.ajax("sampleText.txt", {
    success: setContent, type: "GET", dataType: "text"
  });
}

function setContent(data, status, jqxhr) {
  $("#ajax-example").text(data);
}

function loadHTML() {
  $("#ajax-example").load("sampleHtml.html");
}
