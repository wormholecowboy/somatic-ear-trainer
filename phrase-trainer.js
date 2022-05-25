// TODO: rework all variables
// TODO: create musicaljs object (will passing as object work?)

let piano = new Instrument({ wave: 'piano', detune: 0 });
let loop = new Tone.Loop(playPhrase(), '4n');
//
let startStopState = false;
let notesArray = ['B', 'C', 'D', 'E', 'F'];
const rhythmArray = ['', '/2', '/4', '<', '>', '2', '4'];
//
let speed = 80;
var numOfNotes = 5;
let currentPhrase = {
  current: '',
  setCurrent(val) {
    this.current = val;
  },
};

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

  let val = () => {
    Math.floor(Math.random() * (max - min) + min);
  };
  return val;
}

function getRandomNote() {
  let i = randomIndex(0, notesArray.length);
  return notesArray[i];
}

function getRandomRhythm() {
  let i = randomIndex(0, rhythmArray.length);
  return rhythmArray[i];
}

function createPhrase() {
  for (let i = 0; i < numOfNotes; i++) {
    randomNote = () => getRandomNote();
    randomRhythm = () => getRandomRhythm();
    currentPhrase.setCurrent(currentPhrase.current + randomNote + randomRhythm);
  }
}

// var formattedPhrase = `X:1\n
// M:4/4\n
// L:1/4\n
// Q:80\n
// K:Bm\n
// ${currentPhrase.current}`;

var formattedPhrase = `${currentPhrase.current}`;

function playPhrase() {
  createPhrase();
  piano.play({ tempo: 80 }, formattedPhrase);
}
