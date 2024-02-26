const appContents = document.querySelector(".app-contents");
const startMessage = document.querySelector(".start-message");
let isAppInit = false;
appContents.style.display = "none";

window.addEventListener('keydown', init);
window.addEventListener('click', init);

checkbox = document.getElementById("mute");

function init() {
  if (isAppInit) {
    return;
  }

    appContents.style.display = "block";
    document.body.removeChild(startMessage);

    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    const oscillator = audioCtx.createOscillator();

    oscillator.type = "square";
    oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); 
    oscillator.connect(audioCtx.destination);
    oscillator.start();
    oscillator.stop(checkbox.checked);
}