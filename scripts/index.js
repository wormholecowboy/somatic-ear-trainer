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
var selectedRangeOfNotes = [];
'B2', 'C#3', 'D3', 'E3', 'F#3';
var startStopState = false;
var currentNote = 0;
var previousNote = 0;
let totalRange;
let speed = 25;
let numOFNotes = 1;
// HTML Elements
let rangeStart = document.getElementById('range-start');
let rangeEnd = document.getElementById('range-end');
let rangeSlider = document.getElementById('speedSlider');
let scaleTonality = document.getElementById('scaleTonality');
let scaleLetter = document.getElementById('scaleLetter');
let numOfNotesSelect = document.getElementById('numOfNotesSelect');

// Start/Stop Button Function
function run() {
  startStopState = true;
  console.log('Start');
  Tone.start();
  startTransport();
}

// Start Tone transport and set BPM
function startTransport() {
  Tone.Transport.bpm.value = speed;
  Tone.Transport.start();
  //metronome.start();
  //loopA.start();
  //phraseTrainer.start();
  oneShot();
}

function updateNumOfNotes() {
  numOFNotes = numOfNotesSelect.value;
  console.log('numofnotes: ', numOFNotes);
}

// Trigger the synth sound
function trigSynthA(time) {
  synthA.triggerAttackRelease(
    selectedRangeOfNotes[randomNotes(0, selectedRangeOfNotes.length)],
    '16n',
    time
  );
}

const oneShot = () => {
  for (let i = 0; i < numOFNotes; i++) {
    let rng = selectedRangeOfNotes.length;
    let randy = selectedRangeOfNotes[randomNotes(0, rng)];
    console.log('vars: ', rng, randy);
    synthA.triggerAttackRelease(randy, '32n', Tone.now() + i);
  }
  // synthA.triggerAttackRelease('C4', '32n');
};

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
