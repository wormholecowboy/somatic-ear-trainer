// TODO: rework all variables
// TODO: create musicaljs object (will passing as object work?)

const loopA = new Tone.Loop(trigSynthA, '4n');
const now = Tone.now();
let startStopState = false;
let mjsArray = [];
let speed;

function run() {
  greenRedLight();
  if (startStopState == true) {
    Tone.Transport.stop();
    startStopState = false;
    console.log('stop');
  } else {
    startStopState = true;
    console.log('Start');
    Tone.start();
    startTransport();
  }
}

function startTransport() {
  Tone.Transport.bpm.value = speed;
  Tone.Transport.start();
  phraseTrainer.start();
}

function randomNotes(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  previousNote = currentNote;

  while (currentNote == previousNote) {
    currentNote = Math.floor(Math.random() * (max - min) + min);
  }
  return currentNote;
}

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  prevRhythm = currentRhythm;

  while (currentRhythm == prevRhythm) {
    currentRhythm = Math.floor(Math.random() * (max - min) + min);
  }
  return currentRhythm;
}
