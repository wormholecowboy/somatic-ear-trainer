// TODO: rework all variables
// TODO: create musicaljs object (will passing as object work?)

let piano = new Instrument({ wave: 'piano', detune: 0 });
const now = Tone.now();
let startStopState = false;
let notesArray = ['B', 'C', 'D', 'E', 'F'];
const rhythmArray = ['', '/2', '/4', '<', '>', '2', '4'];
let speed = 80;
let numOfNotes = 5;
const loop = new Tone.Loop(playPhrase(), '4n');
var currentPhrase = {
  current: '',
  setCurrent: function (val) {
    this.current = val;
  },
};
createPhrase();

function startStop() {
  if (startStopState == true) {
    Tone.Transport.stop();
    startStopState = false;
    console.log('Stopped');
  } else {
    startStopState = true;
    console.log('Started');
    Tone.start();
    startTransport();
  }
}

function startTransport() {
  Tone.Transport.bpm.value = speed;
  Tone.Transport.start();
  loop.start();
}

function randomIndex(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  let val = Math.floor(Math.random() * (max - min) + min);
  return val;
}

function getRandomNote() {
  i = randomIndex(0, notesArray.length);
  return notesArray[i];
}

function getRandomRhythm() {
  i = randomIndex(0, rhythmArray.length);
  return rhythmArray[i];
}

function createPhrase() {
  for (i = 0; i < numOfNotes; i++) {
    randomNote = () => getRandomNote();
    randomRhythm = () => getRandomRhythm();
    currentPhrase.setCurrent(currentPhrase.current + randomNote + randomRhythm);
  }
}

let formattedPhrase = `X:1
M:4/4
L:1/4
Q:80
K:Bm
${currentPhrase.current}`;

function playPhrase() {
  createPhrase();
  piano.play(formattedPhrase);
}
