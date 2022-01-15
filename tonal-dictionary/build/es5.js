'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tonalPcset = require('tonal-pcset');

var chromatic = [
	"1P 2m 2M 3m 3M 4P 4A 5P 6m 6M 7m 7M"
];
var lydian = [
	"1P 2M 3M 4A 5P 6M 7M"
];
var major = [
	"1P 2M 3M 4P 5P 6M 7M",
	[
		"ionian"
	]
];
var mixolydian = [
	"1P 2M 3M 4P 5P 6M 7m",
	[
		"dominant"
	]
];
var dorian = [
	"1P 2M 3m 4P 5P 6M 7m"
];
var aeolian = [
	"1P 2M 3m 4P 5P 6m 7m",
	[
		"minor"
	]
];
var phrygian = [
	"1P 2m 3m 4P 5P 6m 7m"
];
var locrian = [
	"1P 2m 3m 4P 5d 6m 7m"
];
var altered = [
	"1P 2m 3m 3M 5d 6m 7m",
	[
		"super locrian",
		"diminished whole tone",
		"pomeroy"
	]
];
var diminished = [
	"1P 2M 3m 4P 5d 6m 6M 7M",
	[
		"whole-half diminished"
	]
];
var iwato = [
	"1P 2m 4P 5d 7m"
];
var hirajoshi = [
	"1P 2M 3m 5P 6m"
];
var kumoijoshi = [
	"1P 2m 4P 5P 6m"
];
var pelog = [
	"1P 2m 3m 5P 6m"
];
var prometheus = [
	"1P 2M 3M 4A 6M 7m"
];
var ritusen = [
	"1P 2M 4P 5P 6M"
];
var scriabin = [
	"1P 2m 3M 5P 6M"
];
var piongio = [
	"1P 2M 4P 5P 6M 7m"
];
var augmented = [
	"1P 2A 3M 5P 5A 7M"
];
var neopolitan = [
	"1P 2m 3m 4P 5P 6m 7M"
];
var egyptian = [
	"1P 2M 4P 5P 7m"
];
var oriental = [
	"1P 2m 3M 4P 5d 6M 7m"
];
var flamenco = [
	"1P 2m 3m 3M 4A 5P 7m"
];
var balinese = [
	"1P 2m 3m 4P 5P 6m 7M"
];
var persian = [
	"1P 2m 3M 4P 5d 6m 7M"
];
var bebop = [
	"1P 2M 3M 4P 5P 6M 7m 7M"
];
var enigmatic = [
	"1P 2m 3M 5d 6m 7m 7M"
];
var ichikosucho = [
	"1P 2M 3M 4P 5d 5P 6M 7M"
];
var sdata = {
	chromatic: chromatic,
	lydian: lydian,
	major: major,
	mixolydian: mixolydian,
	dorian: dorian,
	aeolian: aeolian,
	phrygian: phrygian,
	locrian: locrian,
	"melodic minor": [
	"1P 2M 3m 4P 5P 6M 7M"
],
	"melodic minor second mode": [
	"1P 2m 3m 4P 5P 6M 7m"
],
	"lydian augmented": [
	"1P 2M 3M 4A 5A 6M 7M"
],
	"lydian dominant": [
	"1P 2M 3M 4A 5P 6M 7m",
	[
		"lydian b7"
	]
],
	"melodic minor fifth mode": [
	"1P 2M 3M 4P 5P 6m 7m",
	[
		"hindu",
		"mixolydian b6M"
	]
],
	"locrian #2": [
	"1P 2M 3m 4P 5d 6m 7m",
	[
		"half-diminished"
	]
],
	altered: altered,
	"harmonic minor": [
	"1P 2M 3m 4P 5P 6m 7M"
],
	"phrygian dominant": [
	"1P 2m 3M 4P 5P 6m 7m",
	[
		"spanish",
		"phrygian major"
	]
],
	"half-whole diminished": [
	"1P 2m 3m 3M 4A 5P 6M 7m",
	[
		"dominant diminished"
	]
],
	diminished: diminished,
	"major pentatonic": [
	"1P 2M 3M 5P 6M",
	[
		"pentatonic"
	]
],
	"lydian pentatonic": [
	"1P 3M 4A 5P 7M",
	[
		"chinese"
	]
],
	"mixolydian pentatonic": [
	"1P 3M 4P 5P 7m",
	[
		"indian"
	]
],
	"locrian pentatonic": [
	"1P 3m 4P 5d 7m",
	[
		"minor seven flat five pentatonic"
	]
],
	"minor pentatonic": [
	"1P 3m 4P 5P 7m"
],
	"minor six pentatonic": [
	"1P 3m 4P 5P 6M"
],
	"minor hexatonic": [
	"1P 2M 3m 4P 5P 7M"
],
	"flat three pentatonic": [
	"1P 2M 3m 5P 6M",
	[
		"kumoi"
	]
],
	"flat six pentatonic": [
	"1P 2M 3M 5P 6m"
],
	"major flat two pentatonic": [
	"1P 2m 3M 5P 6M"
],
	"whole tone pentatonic": [
	"1P 3M 5d 6m 7m"
],
	"ionian pentatonic": [
	"1P 3M 4P 5P 7M"
],
	"lydian #5P pentatonic": [
	"1P 3M 4A 5A 7M"
],
	"lydian dominant pentatonic": [
	"1P 3M 4A 5P 7m"
],
	"minor #7M pentatonic": [
	"1P 3m 4P 5P 7M"
],
	"super locrian pentatonic": [
	"1P 3m 4d 5d 7m"
],
	"in-sen": [
	"1P 2m 4P 5P 7m"
],
	iwato: iwato,
	hirajoshi: hirajoshi,
	kumoijoshi: kumoijoshi,
	pelog: pelog,
	"vietnamese 1": [
	"1P 3m 4P 5P 6m"
],
	"vietnamese 2": [
	"1P 3m 4P 5P 7m"
],
	prometheus: prometheus,
	"prometheus neopolitan": [
	"1P 2m 3M 4A 6M 7m"
],
	ritusen: ritusen,
	scriabin: scriabin,
	piongio: piongio,
	"major blues": [
	"1P 2M 3m 3M 5P 6M"
],
	"minor blues": [
	"1P 3m 4P 5d 5P 7m",
	[
		"blues"
	]
],
	"composite blues": [
	"1P 2M 3m 3M 4P 5d 5P 6M 7m"
],
	augmented: augmented,
	"augmented heptatonic": [
	"1P 2A 3M 4P 5P 5A 7M"
],
	"dorian #4": [
	"1P 2M 3m 4A 5P 6M 7m"
],
	"lydian diminished": [
	"1P 2M 3m 4A 5P 6M 7M"
],
	"whole tone": [
	"1P 2M 3M 4A 5A 7m"
],
	"leading whole tone": [
	"1P 2M 3M 4A 5A 7m 7M"
],
	"lydian minor": [
	"1P 2M 3M 4A 5P 6m 7m"
],
	"locrian major": [
	"1P 2M 3M 4P 5d 6m 7m",
	[
		"arabian"
	]
],
	neopolitan: neopolitan,
	"neopolitan minor": [
	"1P 2m 3m 4P 5P 6m 7M"
],
	"neopolitan major": [
	"1P 2m 3m 4P 5P 6M 7M",
	[
		"dorian b2"
	]
],
	"neopolitan major pentatonic": [
	"1P 3M 4P 5d 7m"
],
	"romanian minor": [
	"1P 2M 3m 5d 5P 6M 7m"
],
	"double harmonic lydian": [
	"1P 2m 3M 4A 5P 6m 7M"
],
	"harmonic major": [
	"1P 2M 3M 4P 5P 6m 7M"
],
	"double harmonic major": [
	"1P 2m 3M 4P 5P 6m 7M",
	[
		"gypsy"
	]
],
	egyptian: egyptian,
	"hungarian minor": [
	"1P 2M 3m 4A 5P 6m 7M"
],
	"hungarian major": [
	"1P 2A 3M 4A 5P 6M 7m"
],
	oriental: oriental,
	"spanish heptatonic": [
	"1P 2m 3m 3M 4P 5P 6m 7m"
],
	flamenco: flamenco,
	balinese: balinese,
	"todi raga": [
	"1P 2m 3m 4A 5P 6m 7M"
],
	"malkos raga": [
	"1P 3m 4P 6m 7m"
],
	"kafi raga": [
	"1P 3m 3M 4P 5P 6M 7m 7M"
],
	"purvi raga": [
	"1P 2m 3M 4P 4A 5P 6m 7M"
],
	persian: persian,
	bebop: bebop,
	"bebop dominant": [
	"1P 2M 3M 4P 5P 6M 7m 7M"
],
	"bebop minor": [
	"1P 2M 3m 3M 4P 5P 6M 7m"
],
	"bebop major": [
	"1P 2M 3M 4P 5P 5A 6M 7M"
],
	"bebop locrian": [
	"1P 2m 3m 4P 5d 5P 6m 7m"
],
	"minor bebop": [
	"1P 2M 3m 4P 5P 6m 7m 7M"
],
	"mystery #1": [
	"1P 2m 3M 5d 6m 7m"
],
	enigmatic: enigmatic,
	"minor six diminished": [
	"1P 2M 3m 4P 5P 6m 6M 7M"
],
	"ionian augmented": [
	"1P 2M 3M 4P 5A 6M 7M"
],
	"lydian #9": [
	"1P 2m 3M 4A 5P 6M 7M"
],
	ichikosucho: ichikosucho,
	"six tone symmetric": [
	"1P 2m 3M 4P 5A 6M"
]
};

var M = [
	"1P 3M 5P",
	[
		"Major",
		""
	]
];
var M13 = [
	"1P 3M 5P 7M 9M 13M",
	[
		"maj13",
		"Maj13"
	]
];
var M6 = [
	"1P 3M 5P 13M",
	[
		"6"
	]
];
var M69 = [
	"1P 3M 5P 6M 9M",
	[
		"69"
	]
];
var M7add13 = [
	"1P 3M 5P 6M 7M 9M"
];
var M7b5 = [
	"1P 3M 5d 7M"
];
var M7b6 = [
	"1P 3M 6m 7M"
];
var M7b9 = [
	"1P 3M 5P 7M 9m"
];
var M7sus4 = [
	"1P 4P 5P 7M"
];
var M9 = [
	"1P 3M 5P 7M 9M",
	[
		"maj9",
		"Maj9"
	]
];
var M9b5 = [
	"1P 3M 5d 7M 9M"
];
var M9sus4 = [
	"1P 4P 5P 7M 9M"
];
var Madd9 = [
	"1P 3M 5P 9M",
	[
		"2",
		"add9",
		"add2"
	]
];
var Maj7 = [
	"1P 3M 5P 7M",
	[
		"maj7",
		"M7"
	]
];
var Mb5 = [
	"1P 3M 5d"
];
var Mb6 = [
	"1P 3M 13m"
];
var Msus2 = [
	"1P 2M 5P",
	[
		"add9no3",
		"sus2"
	]
];
var Msus4 = [
	"1P 4P 5P",
	[
		"sus",
		"sus4"
	]
];
var Maddb9 = [
	"1P 3M 5P 9m"
];
var m = [
	"1P 3m 5P"
];
var m11 = [
	"1P 3m 5P 7m 9M 11P",
	[
		"_11"
	]
];
var m11b5 = [
	"1P 3m 7m 12d 2M 4P",
	[
		"h11",
		"_11b5"
	]
];
var m13 = [
	"1P 3m 5P 7m 9M 11P 13M",
	[
		"_13"
	]
];
var m6 = [
	"1P 3m 4P 5P 13M",
	[
		"_6"
	]
];
var m69 = [
	"1P 3m 5P 6M 9M",
	[
		"_69"
	]
];
var m7 = [
	"1P 3m 5P 7m",
	[
		"minor7",
		"_",
		"_7"
	]
];
var m7add11 = [
	"1P 3m 5P 7m 11P",
	[
		"m7add4"
	]
];
var m7b5 = [
	"1P 3m 5d 7m",
	[
		"half-diminished",
		"h7",
		"_7b5"
	]
];
var m9 = [
	"1P 3m 5P 7m 9M",
	[
		"_9"
	]
];
var m9b5 = [
	"1P 3m 7m 12d 2M",
	[
		"h9",
		"-9b5"
	]
];
var mMaj7 = [
	"1P 3m 5P 7M",
	[
		"mM7",
		"_M7"
	]
];
var mMaj7b6 = [
	"1P 3m 5P 6m 7M",
	[
		"mM7b6"
	]
];
var mM9 = [
	"1P 3m 5P 7M 9M",
	[
		"mMaj9",
		"-M9"
	]
];
var mM9b6 = [
	"1P 3m 5P 6m 7M 9M",
	[
		"mMaj9b6"
	]
];
var mb6M7 = [
	"1P 3m 6m 7M"
];
var mb6b9 = [
	"1P 3m 6m 9m"
];
var o = [
	"1P 3m 5d",
	[
		"mb5",
		"dim"
	]
];
var o7 = [
	"1P 3m 5d 13M",
	[
		"diminished",
		"m6b5",
		"dim7"
	]
];
var o7M7 = [
	"1P 3m 5d 6M 7M"
];
var oM7 = [
	"1P 3m 5d 7M"
];
var sus24 = [
	"1P 2M 4P 5P",
	[
		"sus4add9"
	]
];
var madd4 = [
	"1P 3m 4P 5P"
];
var madd9 = [
	"1P 3m 5P 9M"
];
var cdata = {
	"4": [
	"1P 4P 7m 10m",
	[
		"quartal"
	]
],
	"5": [
	"1P 5P"
],
	"7": [
	"1P 3M 5P 7m",
	[
		"Dominant",
		"Dom"
	]
],
	"9": [
	"1P 3M 5P 7m 9M",
	[
		"79"
	]
],
	"11": [
	"1P 5P 7m 9M 11P"
],
	"13": [
	"1P 3M 5P 7m 9M 13M",
	[
		"13_"
	]
],
	"64": [
	"5P 8P 10M"
],
	M: M,
	"M#5": [
	"1P 3M 5A",
	[
		"augmented",
		"maj#5",
		"Maj#5",
		"+",
		"aug"
	]
],
	"M#5add9": [
	"1P 3M 5A 9M",
	[
		"+add9"
	]
],
	M13: M13,
	"M13#11": [
	"1P 3M 5P 7M 9M 11A 13M",
	[
		"maj13#11",
		"Maj13#11",
		"M13+4",
		"M13#4"
	]
],
	M6: M6,
	"M6#11": [
	"1P 3M 5P 6M 11A",
	[
		"M6b5",
		"6#11",
		"6b5"
	]
],
	M69: M69,
	"M69#11": [
	"1P 3M 5P 6M 9M 11A"
],
	"M7#11": [
	"1P 3M 5P 7M 11A",
	[
		"maj7#11",
		"Maj7#11",
		"M7+4",
		"M7#4"
	]
],
	"M7#5": [
	"1P 3M 5A 7M",
	[
		"maj7#5",
		"Maj7#5",
		"maj9#5",
		"M7+"
	]
],
	"M7#5sus4": [
	"1P 4P 5A 7M"
],
	"M7#9#11": [
	"1P 3M 5P 7M 9A 11A"
],
	M7add13: M7add13,
	M7b5: M7b5,
	M7b6: M7b6,
	M7b9: M7b9,
	M7sus4: M7sus4,
	M9: M9,
	"M9#11": [
	"1P 3M 5P 7M 9M 11A",
	[
		"maj9#11",
		"Maj9#11",
		"M9+4",
		"M9#4"
	]
],
	"M9#5": [
	"1P 3M 5A 7M 9M",
	[
		"Maj9#5"
	]
],
	"M9#5sus4": [
	"1P 4P 5A 7M 9M"
],
	M9b5: M9b5,
	M9sus4: M9sus4,
	Madd9: Madd9,
	Maj7: Maj7,
	Mb5: Mb5,
	Mb6: Mb6,
	Msus2: Msus2,
	Msus4: Msus4,
	Maddb9: Maddb9,
	"11b9": [
	"1P 5P 7m 9m 11P"
],
	"13#11": [
	"1P 3M 5P 7m 9M 11A 13M",
	[
		"13+4",
		"13#4"
	]
],
	"13#9": [
	"1P 3M 5P 7m 9A 13M",
	[
		"13#9_"
	]
],
	"13#9#11": [
	"1P 3M 5P 7m 9A 11A 13M"
],
	"13b5": [
	"1P 3M 5d 6M 7m 9M"
],
	"13b9": [
	"1P 3M 5P 7m 9m 13M"
],
	"13b9#11": [
	"1P 3M 5P 7m 9m 11A 13M"
],
	"13no5": [
	"1P 3M 7m 9M 13M"
],
	"13sus4": [
	"1P 4P 5P 7m 9M 13M",
	[
		"13sus"
	]
],
	"69#11": [
	"1P 3M 5P 6M 9M 11A"
],
	"7#11": [
	"1P 3M 5P 7m 11A",
	[
		"7+4",
		"7#4",
		"7#11_",
		"7#4_"
	]
],
	"7#11b13": [
	"1P 3M 5P 7m 11A 13m",
	[
		"7b5b13"
	]
],
	"7#5": [
	"1P 3M 5A 7m",
	[
		"+7",
		"7aug",
		"aug7"
	]
],
	"7#5#9": [
	"1P 3M 5A 7m 9A",
	[
		"7alt",
		"7#5#9_",
		"7#9b13_"
	]
],
	"7#5b9": [
	"1P 3M 5A 7m 9m"
],
	"7#5b9#11": [
	"1P 3M 5A 7m 9m 11A"
],
	"7#5sus4": [
	"1P 4P 5A 7m"
],
	"7#9": [
	"1P 3M 5P 7m 9A",
	[
		"7#9_"
	]
],
	"7#9#11": [
	"1P 3M 5P 7m 9A 11A",
	[
		"7b5#9"
	]
],
	"7#9#11b13": [
	"1P 3M 5P 7m 9A 11A 13m"
],
	"7#9b13": [
	"1P 3M 5P 7m 9A 13m"
],
	"7add6": [
	"1P 3M 5P 7m 13M",
	[
		"67",
		"7add13"
	]
],
	"7b13": [
	"1P 3M 7m 13m"
],
	"7b5": [
	"1P 3M 5d 7m"
],
	"7b6": [
	"1P 3M 5P 6m 7m"
],
	"7b9": [
	"1P 3M 5P 7m 9m"
],
	"7b9#11": [
	"1P 3M 5P 7m 9m 11A",
	[
		"7b5b9"
	]
],
	"7b9#9": [
	"1P 3M 5P 7m 9m 9A"
],
	"7b9b13": [
	"1P 3M 5P 7m 9m 13m"
],
	"7b9b13#11": [
	"1P 3M 5P 7m 9m 11A 13m",
	[
		"7b9#11b13",
		"7b5b9b13"
	]
],
	"7no5": [
	"1P 3M 7m"
],
	"7sus4": [
	"1P 4P 5P 7m",
	[
		"7sus"
	]
],
	"7sus4b9": [
	"1P 4P 5P 7m 9m",
	[
		"susb9",
		"7susb9",
		"7b9sus",
		"7b9sus4",
		"phryg"
	]
],
	"7sus4b9b13": [
	"1P 4P 5P 7m 9m 13m",
	[
		"7b9b13sus4"
	]
],
	"9#11": [
	"1P 3M 5P 7m 9M 11A",
	[
		"9+4",
		"9#4",
		"9#11_",
		"9#4_"
	]
],
	"9#11b13": [
	"1P 3M 5P 7m 9M 11A 13m",
	[
		"9b5b13"
	]
],
	"9#5": [
	"1P 3M 5A 7m 9M",
	[
		"9+"
	]
],
	"9#5#11": [
	"1P 3M 5A 7m 9M 11A"
],
	"9b13": [
	"1P 3M 7m 9M 13m"
],
	"9b5": [
	"1P 3M 5d 7m 9M"
],
	"9no5": [
	"1P 3M 7m 9M"
],
	"9sus4": [
	"1P 4P 5P 7m 9M",
	[
		"9sus"
	]
],
	m: m,
	"m#5": [
	"1P 3m 5A",
	[
		"m+",
		"mb6"
	]
],
	m11: m11,
	"m11A 5": [
	"1P 3m 6m 7m 9M 11P"
],
	m11b5: m11b5,
	m13: m13,
	m6: m6,
	m69: m69,
	m7: m7,
	"m7#5": [
	"1P 3m 6m 7m"
],
	m7add11: m7add11,
	m7b5: m7b5,
	m9: m9,
	"m9#5": [
	"1P 3m 6m 7m 9M"
],
	m9b5: m9b5,
	mMaj7: mMaj7,
	mMaj7b6: mMaj7b6,
	mM9: mM9,
	mM9b6: mM9b6,
	mb6M7: mb6M7,
	mb6b9: mb6b9,
	o: o,
	o7: o7,
	o7M7: o7M7,
	oM7: oM7,
	sus24: sus24,
	"+add#9": [
	"1P 3M 5A 9A"
],
	madd4: madd4,
	madd9: madd9
};

/**
 * [![npm version](https://img.shields.io/npm/v/tonal-dictionary.svg)](https://www.npmjs.com/package/tonal-dictionary)
 *
 * `tonal-dictionary` contains a dictionary of musical scales and chords
 *
 * This is part of [tonal](https://www.npmjs.com/package/tonal) music theory library.
 *
 * @example
 * // es6
 * import * as Dictionary from "tonal-dictionary"
 * // es5
 * const Dictionary = require("tonal-dictionary")
 *
 * @example
 * Dictionary.chord("Maj7") // => ["1P", "3M", "5P", "7M"]
 *
 * @module Dictionary
 */

var dictionary = function (raw) {
  var keys = Object.keys(raw).sort();
  var data = [];
  var index = [];

  var add = function (name, ivls, chroma) {
    data[name] = ivls;
    index[chroma] = index[chroma] || [];
    index[chroma].push(name);
  };

  keys.forEach(function (key) {
    var ivls = raw[key][0].split(" ");
    var alias = raw[key][1];
    var chr = tonalPcset.chroma(ivls);

    add(key, ivls, chr);
    if (alias) { alias.forEach(function (a) { return add(a, ivls, chr); }); }
  });
  var allKeys = Object.keys(data).sort();

  var dict = function (name) { return data[name]; };
  dict.names = function (p) {
    if (typeof p === "string") { return (index[p] || []).slice(); }
    else { return (p === true ? allKeys : keys).slice(); }
  };
  return dict;
};

var combine = function (a, b) {
  var dict = function (name) { return a(name) || b(name); };
  dict.names = function (p) { return a.names(p).concat(b.names(p)); };
  return dict;
};

/**
 * A dictionary of scales: a function that given a scale name (without tonic)
 * returns an array of intervals
 *
 * @function
 * @param {string} name
 * @return {Array} intervals
 * @example
 * import { scale } from "tonal-dictionary"
 * scale("major") // => ["1P", "2M", ...]
 * scale.names(); // => ["major", ...]
 */
var scale = dictionary(sdata);

/**
 * A dictionary of chords: a function that given a chord type
 * returns an array of intervals
 *
 * @function
 * @param {string} type
 * @return {Array} intervals
 * @example
 * import { chord } from "tonal-dictionary"
 * chord("Maj7") // => ["1P", "3M", ...]
 * chord.names(); // => ["Maj3", ...]
 */
var chord = dictionary(cdata);
var pcset = combine(scale, chord);

exports.dictionary = dictionary;
exports.combine = combine;
exports.scale = scale;
exports.chord = chord;
exports.pcset = pcset;
