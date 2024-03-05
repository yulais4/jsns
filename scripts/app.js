const appContents = document.querySelector(".app-contents");
let isAppInit = false;
appContents.style.display = "block";

c1_key = document.getElementById("C_key")
c1_key.addEventListener("click", () => init(261.63))
c1_key = document.getElementById("Cd_key")
c1_key.addEventListener("click", () => init(277.18))
c2_key = document.getElementById("D_key")
c2_key.addEventListener("click", () => init(293.66))
c2_key = document.getElementById("Dd_key")
c2_key.addEventListener("click", () => init(311.13))
c2_key = document.getElementById("E_key")
c2_key.addEventListener("click", () => init(329.63))
c2_key = document.getElementById("F_key")
c2_key.addEventListener("click", () => init(349.23))
c2_key = document.getElementById("Fd_key")
c2_key.addEventListener("click", () => init(369.99))
c2_key = document.getElementById("G_key")
c2_key.addEventListener("click", () => init(392))
c2_key = document.getElementById("Gd_key")
c2_key.addEventListener("click", () => init(415.3))
c2_key = document.getElementById("A_key")
c2_key.addEventListener("click", () => init(440))
c2_key = document.getElementById("Ad_key")
c2_key.addEventListener("click", () => init(466.16))
c2_key = document.getElementById("B_key")
c2_key.addEventListener("click", () => init(493.88))

checkbox = document.getElementById("mute");

volume = document.getElementById("volume")

freqElement = document.getElementById("freq")
oscFreq = freqElement.value

function init(freq) {
  if (isAppInit) {
    return;
  }

    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    const oscillator = audioCtx.createOscillator();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime); 
    oscillator.connect(audioCtx.destination);
    oscillator.start();
    oscillator.stop(1);
}