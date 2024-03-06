const appContents = document.querySelector(".app-contents");
let isAppInit = false;
appContents.style.display = "block";

// Функция для обработки нажатия клавиши
function handleKeyPress(event) {
  var keyPressed = String.fromCharCode(event.which || event.keyCode);
  
  // Проверяем, что нажата буква
  if (/^[a-zA-Z]$/.test(keyPressed)) {
      console.log('Была нажата буква: ' + keyPressed);
      // Здесь можно добавить свою логику для обработки нажатия определённой буквы
      switch(keyPressed){
        case 'Z':
          osc1_start(261.63);
          break;
        case 'S':
          osc1_start(277.18);
          break;
        case 'X':
          osc1_start(293.66);
          break;
        case 'D':
          osc1_start(311.13);
          break;
        case 'C': //E
          osc1_start(329.63);
          break;
        case 'V': //F
          osc1_start(343.23);
          break;
        case 'G': //F#
          osc1_start(369.99);
          break;
        case 'B': //G
          osc1_start(392);
          break;
        case 'H': //G#
          osc1_start(415.3);
          break;
        case 'N': //A
          osc1_start(440);
          break;
        case 'J': //A#
          osc1_start(466.16);
          break;
        case 'M': //B
          osc1_start(493.88);
          break;
      }
  }
}

// Слушаем событие нажатия клавиши
document.addEventListener('keydown', handleKeyPress);

// Слушаем событие отпускания клавиши
document.addEventListener('keyup', function(event) {
  var keyReleased = String.fromCharCode(event.which || event.keyCode);
  
  // Проверяем, что отпущена буква
  if (/^[a-zA-Z]$/.test(keyReleased)) {
      console.log('Была отпущена буква: ' + keyReleased);
      // Здесь можно добавить свою логику для обработки отпускания определённой буквы
      osc1_stop();
  }
});

C_key = document.getElementById("C_key");
C_key.addEventListener("mousedown", () => osc1_start(261.63));
C_key.addEventListener("mouseup", () => osc1_stop());
Cd_key = document.getElementById("Cd_key");
Cd_key.addEventListener("mousedown", () => osc1_start(277.18));
Cd_key.addEventListener("mouseup", () => osc1_stop());
D_key = document.getElementById("D_key");
D_key.addEventListener("mousedown", () => osc1_start(293.66))
D_key.addEventListener("mouseup", () => osc1_stop());
Dd_key = document.getElementById("Dd_key")
Dd_key.addEventListener("mousedown", () => osc1_start(311.13))
Dd_key.addEventListener("mouseup", () => osc1_stop());
E_key = document.getElementById("E_key")
E_key.addEventListener("mousedown", () => osc1_start(329.63))
E_key.addEventListener("mouseup", () => osc1_stop());
F_key = document.getElementById("F_key")
F_key.addEventListener("mousedown", () => osc1_start(349.23))
F_key.addEventListener("mouseup", () => osc1_stop());
Fd_key = document.getElementById("Fd_key")
Fd_key.addEventListener("mousedown", () => osc1_start(369.99))
Fd_key.addEventListener("mouseup", () => osc1_stop());
G_key = document.getElementById("G_key")
G_key.addEventListener("mousedown", () => osc1_start(392))
G_key.addEventListener("mouseup", () => osc1_stop());
Gd_key = document.getElementById("Gd_key")
Gd_key.addEventListener("mousedown", () => osc1_start(415.3))
Gd_key.addEventListener("mouseup", () => osc1_stop());
A_key = document.getElementById("A_key")
A_key.addEventListener("mousedown", () => osc1_start(440))
A_key.addEventListener("mouseup", () => osc1_stop());
Ad_key = document.getElementById("Ad_key")
Ad_key.addEventListener("mousedown", () => osc1_start(466.16))
Ad_key.addEventListener("mouseup", () => osc1_stop());
B_key = document.getElementById("B_key")
B_key.addEventListener("mousedown", () => osc1_start(493.88))
B_key.addEventListener("mouseup", () => osc1_stop());

checkbox = document.getElementById("mute");

volume = document.getElementById("volume")

//freqElement = document.getElementById("freq")
//oscFreq = freqElement.value

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function osc1_start(freq){
  if(isAppInit){
    return;
  }

  oscillator1 = audioCtx.createOscillator();
  oscillator1.type="sine";
  oscillator1.connect(audioCtx.destination);

  oscillator1.frequency.setValueAtTime(freq, audioCtx.currentTime); 
  oscillator1.start();
}
function osc1_stop(){
  oscillator1.stop();
}