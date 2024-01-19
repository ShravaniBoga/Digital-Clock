let hourE1 = document.getElementById("hour");
let minutesE1 = document.getElementById("minutes");
let secondsE1 = document.getElementById("seconds");
let ampmE1 = document.getElementById("ampm");

// we r now dynamically creating a  function to get dat afrom our computer

function updateClock() {
  // first we get the hr from the computer using the date constructor
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourE1.innerText = h;
  minutesE1.innerText = m;
  secondsE1.innerText = s;
  ampmE1.innerText = ampm;
  setTimeout(() => {
    updateClock();
  }, 1000);
}
updateClock();
