var currentTime = 0;
var tickyClock;

function updateWatch() {
  $("#watchFace").html(
    (currentTime/1000).toFixed(1)
  );
  currentTime += 100;
}

$(document).ready(function() {
  $("#startWatch").click(function() {
    tickyClock = window.setInterval(updateWatch, 100);
  });
  $("#stopWatch").click(function() {
    clearInterval(tickyClock);
  });
  $("#clearWatch").click(function() {
    currentTime = 0;
    $("#watchFace").html(currentTime);
  });
});