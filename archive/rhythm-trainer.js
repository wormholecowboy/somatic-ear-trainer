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
const rhythmArray = ['', '/2', '/4', '2'];
var speed = 20;
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
  console.log('currentPhrase', currentPhrase.current);
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

function getRandomRhythm() {
  let i = randomIndex(0, rhythmArray.length);
  return rhythmArray[i];
}

function createPhrase() {
  for (let i = 0; i < numOfNotes; i++) {
    randomNote = getRandomNote();
    randomRhythm = getRandomRhythm();
    currentPhrase.setCurrent(currentPhrase.current + randomNote + randomRhythm);
  }
}

var formattedPhrase =
  'X:1\n' + 'M:4/4\n' + 'L:1/4\n' + 'K:Bm\n' + currentPhrase.current;

function playPhrase() {
  createPhrase();
  console.log('phrase: ', currentPhrase.current);
  piano.play({ tempo: 80 }, currentPhrase.current);
  currentPhrase.setCurrent('');
}
var loop = new Tone.Loop(playPhrase, '1n');

console.log('rArray', rhythmArray);
console.log('nArray', notesArray);
console.log('loopObj', { loop });
