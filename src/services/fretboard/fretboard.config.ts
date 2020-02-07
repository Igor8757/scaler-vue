export const standardFretboard = ["E", "A", "D", "G", "B", "E"];

export const notesRoll = [
  "A",
  "A#",
  "B",
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#"
];

export const shiftNotes = (notes: any[]) => {
  notes.push(notes.shift() || "");
  return notes;
};
