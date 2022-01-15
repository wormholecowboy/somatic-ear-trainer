declare type NoteLetter = "A" | "B" | "C" | "D" | "E" | "F" | "G";
declare type NoteAccidental = string;
declare type Note = string;
declare type Midi = number;
declare type Octave = number;
declare type OrNull<T> = T | null;
declare type NoteName = string;
declare type NoteProps = {
    name: NoteName;
    letter: NoteLetter;
    acc: NoteAccidental;
    oct: OrNull<Octave>;
    step: number;
    pc: NoteName;
    alt: number;
    chroma: number;
    midi: OrNull<Midi>;
    freq: OrNull<number>;
};
declare type NoNoteProps = {
    name: null;
    oct: null;
    step: null;
    pc: null;
    alt: null;
    chroma: null;
    midi: null;
    freq: null;
};
export declare const names: (accTypes?: string | undefined) => string[];
export declare function tokenize(str?: Note | Midi): ["" | "A" | "B" | "C" | "D" | "E" | "F" | "G", string, string, string];
export declare const props: (str: string | number) => Readonly<NoNoteProps> | Readonly<NoteProps>;
export declare const name: (str: string) => string;
export declare const pc: (str: string) => OrNull<string>;
export declare const midi: (note: string | number) => OrNull<number>;
export declare const midiToFreq: (midi: string | number | null, tuning?: number) => OrNull<number>;
export declare const freq: (note: string | number) => OrNull<number>;
export declare const freqToMidi: (freq: number) => number;
export declare const chroma: (str: string) => OrNull<number>;
export declare const oct: (str: string) => OrNull<number>;
export declare const stepToLetter: (step: number) => string;
export declare const altToAcc: (alt?: number | undefined) => string;
export declare const from: (fromProps?: Partial<NoteProps>, baseNote?: OrNull<string>) => OrNull<string>;
export declare const build: (fromProps?: Partial<NoteProps>, baseNote?: OrNull<string>) => OrNull<string>;
export declare function fromMidi(num: Midi, sharps?: boolean | number): string;
export declare const simplify: (note: string, sameAcc?: number | boolean) => OrNull<string>;
export declare const enharmonic: (note: string) => OrNull<string>;
export {};
