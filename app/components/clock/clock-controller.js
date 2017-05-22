function ClockController() {
  startTime = function () {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    var greeting = document.getElementById('greeting')
    if (h < 12) {
      greeting.innerHTML = "Good Morning"
        } 
        else if (h > 12 && h < 17) {
        greeting.innerHTML = "Good Afternoon"
      } else if (h > 17) {
        greeting.innerHTML = "Good Evening"
      }

    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
      h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  checkTime = function (i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
  }
  startTime()
}