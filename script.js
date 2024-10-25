let hr = 0;
let min = 0;
let sec = 0;
var interval = 0;

function twoDigits(digit) {
  if (digit < 10) {
    return "0" + digit;
  }
  
  return digit;
}

function fStart() {
  interval = setInterval(counter, 1000);
}

function fPause() {
  clearInterval(interval);
}

function fStop() {
  hr = 0;
  min = 0;
  sec = 0;
  window.document.getElementById("seconds").innerText = "00" ;
  window.document.getElementById("minutes").innerText = "00";
  window.document.getElementById("hour").innerText = "00";
}

function counter() {
  sec++;

  if (sec == 60) {
    min++;
    sec = 0;
  }
  if (min == 60) {
    hr++;
    min = 0;
  }
  if (hr == 24) {
    hr = 0;
  }

  window.document.getElementById("seconds").innerText = twoDigits(sec);

  window.document.getElementById("minutes").innerText = twoDigits(min);

  window.document.getElementById("hour").innerText = twoDigits(hr);
}
