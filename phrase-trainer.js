//TODO: Tone.js loop is not running.
//
//
var numOfNotes = 5;
var currentPhrase = {
  current: '',
  setCurrent(val) {
    this.current = val;
  },
};
var startStopState = false;
var notesArray = ['B', 'C', 'D', 'E', 'F'];
const rhythmArray = ['', '/2', '/4', '2', '4'];
var speed = 80;
var piano = new Instrument({ wave: 'piano', detune: 0 });

function startStop() {
  if (startStopState == true) {
    Tone.Transport.stop();
    startStopState = false;
    currentPhrase.setCurrent('');
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
  //piano.tone('D');
  createPhrase();
  console.log('formatedphrase', formattedPhrase);
}

function randomIndex(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  let val = Math.floor(Math.random() * (max - min) + min);
  return val;
}

function getRandomNote() {
  let i = randomIndex(0, notesArray.length);
  return notesArray[i];
}

let getRandomRhythm = () => {
  let i = randomIndex(0, rhythmArray.length);
  return rhythmArray[i];
};

function createPhrase() {
  for (let i = 0; i < numOfNotes - 1; i++) {
    randomNote = getRandomNote();
    randomRhythm = getRandomRhythm();
    console.log('randoms: ', randomNote, randomRhythm);
    currentPhrase.setCurrent(currentPhrase.current + randomNote + randomRhythm);
    console.log(currentPhrase);
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
  console.log('phrase: ', formattedPhrase);
  piano.play({ tempo: 80 }, formattedPhrase);
}
var loop = new Tone.Loop(playPhrase(), '8n');

console.log('something', rhythmArray);
console.log('other', notesArray);
