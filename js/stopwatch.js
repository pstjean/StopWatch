var currentTime = 0;

function updateWatch() {
  $("#watchFace").html(currentTime/1000);
  currentTime += 100;
}

$(document).ready(function() {
    $("#startWatch").click(function() {
      var tickyClock = window.setInterval(updateWatch, 100);
      alert('Started');
    });
    $("#stopWatch").click(function() {
      alert('Stopped');
    });
});