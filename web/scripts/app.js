const appContents = document.querySelector(".app-contents");
let isAppInit = false;
appContents.style.display = "block";

c12_key = document.getElementById("key")
c12_key.addEventListener("mousedown", () => osc1_start(261.63))
c12_key = document.getElementById("key")
c12_key.addEventListener("mouseup", () => osc1_stop())


c1_key = document.getElementById("C_key")
c1_key.addEventListener("mousedown", () => osc1_start(261.63))
c1_key.addEventListener("mouseup", () => osc1_stop)
c1_key = document.getElementById("Cd_key")
c1_key.addEventListener("mousedown", () => osc1_start(277.18))
c2_key = document.getElementById("D_key")
c2_key.addEventListener("mousedown", () => osc1_start(293.66))
c2_key = document.getElementById("Dd_key")
c2_key.addEventListener("mousedown", () => osc1_start(311.13))
c2_key = document.getElementById("E_key")
c2_key.addEventListener("mousedown", () => osc1_start(329.63))
c2_key = document.getElementById("F_key")
c2_key.addEventListener("mousedown", () => osc1_start(349.23))
c2_key = document.getElementById("Fd_key")
c2_key.addEventListener("mousedown", () => osc1_start(369.99))
c2_key = document.getElementById("G_key")
c2_key.addEventListener("mousedown", () => osc1_start(392))
c2_key = document.getElementById("Gd_key")
c2_key.addEventListener("mousedown", () => osc1_start(415.3))
c2_key = document.getElementById("A_key")
c2_key.addEventListener("mousedown", () => osc1_start(440))
c2_key = document.getElementById("Ad_key")
c2_key.addEventListener("mousedown", () => osc1_start(466.16))
c2_key = document.getElementById("B_key")
c2_key.addEventListener("mousedown", () => osc1_start(493.88))

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

  oscillator1.frequency.setValueAtTime(440, audioCtx.currentTime); 
  oscillator1.start();
}
function osc1_stop(){
  oscillator1.stop();
}