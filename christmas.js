const bulbs = document.querySelectorAll('.bulb');
const speed = document.getElementById('speed')
const on = document.querySelector('.btn1');
const off = document.querySelector('.btn2');
const run = document.querySelector('.run');

let currentIndex = 0;

function ripple() {
    // Turn all bulbs off
    bulbs[currentIndex].classList.remove('on');

    

    // Move to the next bulb, loop back to 0 if at the end
    currentIndex = (currentIndex + 1) % bulbs.length;
    // Turn on the current bulb
    bulbs[currentIndex].classList.add('on');
}

let intervalId ; // Store interval
run.addEventListener("click", () => {
  const speedValue = parseInt(speed.value);

  if (isNaN(speedValue) || speedValue < 1 || speedValue > 5) {
    alert("Please enter a speed from 1 to 5 only.");
    return;
  }

  // Clear previous interval
  clearInterval(intervalId);

  // Use switch to determine interval time
  let intervalTime;
  switch (speedValue) {
    case 1:
      intervalTime = 200;
      break;
    case 2:
      intervalTime = 400;
      break;
    case 3:
      intervalTime = 600;
      break;
    case 4:
      intervalTime = 800;
      break;
    case 5:
      intervalTime = 1000;
      break;
    default:
      intervalTime = 600; // fallback
  }

  // Start new ripple loop
  intervalId = setInterval(ripple, intervalTime);
});

on.addEventListener("click", () => {
  let speedValue = parseInt(speed.value);

  if (isNaN(speedValue) || speedValue < 1 || speedValue > 5) {
    speedValue = 3;
  }

  clearInterval(intervalId);

  let intervalTime;
  switch (speedValue) {
    case 1: intervalTime = 200; break;
    case 2: intervalTime = 400; break;
    case 3: intervalTime = 600; break;
    case 4: intervalTime = 800; break;
    case 5: intervalTime = 1000; break;
    default: intervalTime = 600;
  }

  intervalId = setInterval(ripple, intervalTime);
});

off.addEventListener("click", () => {
  clearInterval(intervalId);
  for (let i = 0; i < bulbs.length; i++) {
    bulbs[i].classList.remove("on");
  }
});