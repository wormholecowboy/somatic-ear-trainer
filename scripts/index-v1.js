// The idea is to generate random notes in a range to inspire your to create your own vocabulary and also train your fingers to know the major and minor scale inside and out. So, eventually, you can start executing new phrases that come into your mind in the middle of a solo on the spot! Your fingers have worked this area so much, they just know what to do!!

// TODO: Remove loop and make it a one-off phrase
// TODO: Make space bar trigger new phrase
// TODO: Add numOFNotes selector to DOM
// TODO: Maybe add some rhythm elements? look at docs
// TODO: Add musicaljs input field to build phrases
// TODO: refactor
// TODO: upload and play backing track
//
// Globals
const synthA = new Tone.Synth().toDestination();
const chord = new Tone.PolySynth(Tone.Synth).toDestination();
const loopA = new Tone.Loop(trigSynthA, '4n');
const now = Tone.now();
var selectedRangeOfNotes = [];
'B2', 'C#3', 'D3', 'E3', 'F#3';
var startStopState = false;
var currentNote = 0;
var previousNote = 0;
let totalRange;
let speed = 25;
let numOFNotes;
// HTML Elements
let rangeStart = document.getElementById('range-start');
let rangeEnd = document.getElementById('range-end');
let rangeSlider = document.getElementById('speedSlider');
let scaleTonality = document.getElementById('scaleTonality');
let scaleLetter = document.getElementById('scaleLetter');
let numOfNotesSelect = document.getElementById('numOfNotesSelect');

const noiseSynth = new Tone.NoiseSynth().toDestination();
const metronome = new Tone.Loop(() => {
  noiseSynth.triggerAttackRelease('8n');
}, '4n');

function greenRedLight() {
  if (light.style.color != 'green') {
    light.style.color = 'green';
  } else {
    light.style.color = 'red';
  }
}

// Start/Stop Button Function
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

// Start Tone transport and set BPM
function startTransport() {
  Tone.Transport.bpm.value = speed;
  Tone.Transport.start();
  //metronome.start();
  //loopA.start();
  phraseTrainer.start();
}

function updateNumOfNotes() {
  numOFNotes = numOfNotesSelect.value;
  console.log(numOFNotes);
}

// Trigger the synth sound
function trigSynthA(time) {
  synthA.triggerAttackRelease(
    selectedRangeOfNotes[randomNotes(0, selectedRangeOfNotes.length)],
    '16n',
    time
  );
}

// Phrase Trainer
const phraseTrainer = new Tone.Loop((time) => {
  Tone.Transport.scheduleOnce(trigSynthA(time));
  Tone.Transport.scheduleOnce(trigSynthA('+8n'));
  Tone.Transport.scheduleOnce(trigSynthA('+4n'));
  //Tone.Transport.scheduleOnce(trigSynthA({ '+4n': 1, '+8n': 1 }));
}, '1m'); // this last value is how often the loop triggers

// Grab random notes
function randomNotes(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  previousNote = currentNote;

  while (currentNote == previousNote) {
    currentNote = Math.floor(Math.random() * (max - min) + min);
  }
  return currentNote;
}

let currentRhythm = 0;
let prevRhythm = 0;

// Grab random rhythm
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  prevRhythm = currentRhythm;

  while (currentRhythm == prevRhythm) {
    currentRhythm = Math.floor(Math.random() * (max - min) + min);
  }
  return currentRhythm;
}

let rhythms = ['+4n', '+8n', '+16n', '+4n.', '+8n.', '+16n.'];
let randomRhythm = random(0, rhythms.length);

console.log(rhythms[randomRhythm]);

// Set default values
function setRangeEnd() {
  rangeEnd.value = rangeEnd.lastChild.value;
}

function deleteOldNodes() {
  while (rangeStart.hasChildNodes()) {
    rangeStart.removeChild(rangeStart.lastChild);
  }
  while (rangeEnd.hasChildNodes()) {
    rangeEnd.removeChild(rangeEnd.lastChild);
  }
}

function appendNewNodes() {
  for (let note of totalRange) {
    option = document.createElement('option');
    option2 = document.createElement('option');
    option.value = note;
    option.text = note;
    option2.value = note;
    option2.text = note;
    rangeStart.appendChild(option);
    rangeEnd.appendChild(option2);
  }
  rangeEnd.value = rangeEnd.lastChild.value;
}

function grabScale() {
  // Grab scale from Tonal and set initial working range (totalRange)
  let getTonalRange = Tonal.Scale.rangeOf(
    `${scaleLetter.value} ${scaleTonality.value}`
  );
  totalRange = getTonalRange('A2', 'G5');
  console.log(totalRange);
}

// Changing notes from noteArray to the range selection boxes
function appendScaleChanges() {
  grabScale();
  deleteOldNodes();
  appendNewNodes();
  filterNotesArray();
}
appendScaleChanges();

function changeSpeed() {
  speed = rangeSlider.value;
}

function displaySpeed() {
  document.getElementById('ptag').innerHTML = rangeSlider.value;
}

function filterNotesArray() {
  let firstNote = totalRange.indexOf(rangeStart.value);
  let lastNote = totalRange.indexOf(rangeEnd.value);
  console.log('First note index: ' + firstNote);
  console.log('Last note index: ' + lastNote);

  selectedRangeOfNotes = totalRange.slice(firstNote, lastNote + 1);
  console.log(selectedRangeOfNotes);
}

// EVENT LISTENERS
document
  .getElementById('scaleLetter')
  .addEventListener('input', appendScaleChanges);

document
  .getElementById('scaleTonality')
  .addEventListener('input', appendScaleChanges);

document
  .getElementById('range-start')
  .addEventListener('input', filterNotesArray);

document
  .getElementById('range-end')
  .addEventListener('input', filterNotesArray);

document
  .getElementById('numOfNotesSelect')
  .addEventListener('input', updateNumOfNotes);

document.getElementById('speedSlider').addEventListener('input', () => {
  changeSpeed();
  displaySpeed();
});
