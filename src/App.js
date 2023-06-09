import React from 'react';
import './App.css';

function App() {
  let timerInterval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

function startTimer() {
    timerInterval = setInterval(function () {
        milliseconds += 1;
        if (milliseconds === 100) {
            milliseconds = 0;
            seconds++;
        }
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (seconds < 10) {
          document.getElementById("timer").innerHTML = `${minutes}:0${seconds}:${milliseconds};`;
        } else {
          document.getElementById("timer").innerHTML = `${minutes}:${seconds}:${milliseconds};`;
        }
    }, 10);

} 

function stopTimer() {
    clearInterval(timerInterval);

}

function resetTimer() {
    clearInterval(timerInterval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById("timer").innerHTML = "00:00:00";
}
  return (
    <div className="App">
      <h1>Stopwatch</h1>
    <h3>Timer: <span id="timer">00:00:00</span></h3>
    <div class="center">
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
    </div>
    </div>
  );
}

export default App;
