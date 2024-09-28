const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

function clock() {
  const date = new Date();
  const seconds = date.getSeconds() / 60;
  const minutes = (seconds + date.getMinutes()) / 60;
  const hours = (minutes + date.getHours()) / 12;

  rotate(second, seconds);
  rotate(minute, minutes);
  rotate(hour, hours);
}

function rotate(element, rotation) {
  element.style.setProperty("--rotate", rotation * 360);
}

setInterval(clock, 1000);
