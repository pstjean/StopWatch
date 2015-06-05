var currentTime = 0;
var tickyClock;

function updateWatch() {
  $("#watchFace").html(currentTime/1000);
  currentTime += 100;
}

$(document).ready(function() {
  $("#startWatch").click(function() {
    tickyClock = window.setInterval(updateWatch, 100);
  });
  $("#stopWatch").click(function() {
    clearInterval(tickyClock);
  });
});