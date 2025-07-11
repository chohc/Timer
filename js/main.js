const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

const startPauseBtn = document.getElementById("startPauseBtn");
const resetBtn = document.getElementById("resetBtn");

[hrs, min, sec].forEach((input) => {
  input.addEventListener("input", checkTime);
});

startPauseBtn.addEventListener("click", startTimer);

function checkTime() {
  const h = Number(hrs.value);
  const m = Number(min.value);
  const s = Number(sec.value);
  console.log(h, m, s);

  if (h || m || s) {
    startPauseBtn.disabled = false;
    resetBtn.disabled = false;
  } else {
    startPauseBtn.disabled = true;
    resetBtn.disabled = true;
  }
}

// 여기까지 7시까지 작성한 코드인데 제대로 동작안해요
let intervalId = null;
let totalTime = 0;
function startTimer() {
  const h = Number(hrs.value);
  const m = Number(min.value);
  const s = Number(sec.value);
  totalTime = h * 3600 + m * 60 + s;

  if (intervalId) clearInterval(intervalId);

  intervalId = setInterval(() => {
    if (totalTime <= 0) {
      clearInterval(intervalId);
      intervalId = null;
      return;
    }

    totalTime--;

    const hours = String(Math.floor(totalTime / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalTime % 3600) / 60)).padStart(
      2,
      "0"
    );
    const seconds = String(totalTime % 60).padStart(2, "0");

    hrs.value = hours;
    min.value = minutes;
    sec.value = seconds;
  }, 1000);
}
