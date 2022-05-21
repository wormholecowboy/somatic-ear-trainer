// Select a timbre that sounds like a piano.
var inst = new Instrument({ wave: 'piano', detune: 0 });

// The song below is written in ABC notation.  More on abc
// notation can be found at http://abcnotation.com/.
var song =
  'X: 1\n' +
  "T:Beethoven's Moonlight Sonata, transcribed into ABC by David Bau.\n" +
  'M:4/4\n' +
  'L:1/8\n' +
  'R:\n' +
  'K:C#m\n' +
  'C>DE2F' +
  //   'zz' +
  'F/4G/4E/4A2z/4B4C4';

function playIt(arg) {
  inst.play(arg);
}

// Play a song from a string in ABC notation.
// inst.playIt(
//   song
// );
