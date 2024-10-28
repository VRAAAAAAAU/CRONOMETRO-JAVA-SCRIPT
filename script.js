let hr = 0;
let min = 0;
let sec = 0;
var lapCounter = 0;
var interval = 0;
var run = 0;


function twoDigits(digit) {
  if (digit < 10) {
    return "0" + digit;
  }

  return digit;
}

function fStart() {

  if (run == 0) {
    interval = setInterval(counter, 1000);
  }
  run = 1;
}

function fPause() {

  clearInterval(interval);
  run = 0;

}

function fStop() {
  hr = 0;
  min = 0;
  sec = 0;
  lapCounter = 0;
  run = 0;

  clearInterval(interval);

  window.document.getElementById("seconds").innerText = "00";
  window.document.getElementById("minutes").innerText = "00";
  window.document.getElementById("hour").innerText = "00";


}

function lap() {
  lapCounter++;
  window.document.getElementById('lapsave').innerHTML += ` lap ${lapCounter}: ${twoDigits(hr)} : ${twoDigits(min)} : ${twoDigits(sec)}</p>`

}

function cleanDiv() {

  var limpador = window.document.getElementById("lapsave")
  limpador.innerHTML = ``;
  lapCounter = 0;


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
