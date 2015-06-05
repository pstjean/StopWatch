var currentTime = 0;
var tickyClock = false;

function updateWatch() {
  $("#watchFace").html(
    getDisplayTime(currentTime)
  );
  currentTime += 100;
}

function getDisplayTime(currentTime) {
  currentTime = currentTime/1000;
  currentTime = currentTime.toFixed(1);
  return currentTime;
}

$(document).ready(function() {
  $("#startWatch").click(function() {
    if(!tickyClock) {
      tickyClock = window.setInterval(updateWatch, 100);
    }
    $(this).prop("disabled", true);
  });
  $("#stopWatch").click(function() {
    clearInterval(tickyClock);
    tickyClock = false;
    $("#startWatch").prop("disabled", false);
  });
  $("#clearWatch").click(function() {
    currentTime = 0;
    $("#watchFace").html(getDisplayTime(currentTime));
  });
});