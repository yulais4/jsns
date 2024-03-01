const appContents = document.querySelector(".app-contents");
let isAppInit = false;
appContents.style.display = "none";

c1_key = document.getElementById("c1_key")
c1_key.addEventListener("click", () => init(262))
c2_key = document.getElementById("d2_key")
c2_key.addEventListener("click", () => init(294))
c2_key = document.getElementById("e2_key")
c2_key.addEventListener("click", () => init(330))
c2_key = document.getElementById("f2_key")
c2_key.addEventListener("click", () => init(349))
c2_key = document.getElementById("g2_key")
c2_key.addEventListener("click", () => init(392))
c2_key = document.getElementById("a2_key")
c2_key.addEventListener("click", () => init(440))
c2_key = document.getElementById("b2_key")
c2_key.addEventListener("click", () => init(494))

//window.addEventListener('keydown', init);
//window.addEventListener('click', init);

checkbox = document.getElementById("mute");

volume = document.getElementById("volume")

freqElement = document.getElementById("freq")
oscFreq = freqElement.value

function init(freq) {
  if (isAppInit) {
    return;
  }

    appContents.style.display = "block";

    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    const oscillator = audioCtx.createOscillator();

    oscillator.type = "square";
    oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime); 
    oscillator.connect(audioCtx.destination);
    oscillator.start();
    oscillator.stop(1);
}