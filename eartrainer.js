// import * as Tone from 'tone'
// import {Note, Interval, Scale} from '@tonaljs/tonal'

// import * as Tone from './tone';
// import {Interval, Note, Scale } from "./tonal";
// import {Interval, Note, Scale} from "/tonal";  //ES 6
// var Tonal = require("tonal"); //ES5


// let ready = false;

let masterVolume = -9;
let scale = Tonal.Scale.get("c4 major").notes;
let note = scale[2];
let synth;

function initializeAudio() {

	synth = new Tone.synth();
	synth.toDestination();

}

function play() {

synth.triggerAttackRelease(note, "8n");
}


// function mousePressed() {
// 	if (!ready) {

// 		ready = true;
// 		console.log("ready");
// 	}
// }