import { standardFretboard, notesRoll, shiftNotes } from "./fretboard.config";

export class FretboardService {
  init() {
    return standardFretboard;
  }

  generate(frets: number) {
    return this.stringNotes("D", frets);
  }

  private stringNotes(first: string, frets: number) {
    let notes = [...notesRoll];
    let res = [];
    notes = this.findRoot(notes, first);
    for (let i = 0; i < frets + 1; i++) {
      res.push(notes[0]);
      notes = shiftNotes(notes);
    }
    console.log(res);
    return res;
  }

  private findRoot(notes: any, root: string) {
    while (notes[0] !== root) {
      notes = shiftNotes(notes);
    }
    return notes;
  }
}
