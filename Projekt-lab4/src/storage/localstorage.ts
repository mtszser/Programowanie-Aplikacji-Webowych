import Note from "../classes/note";
import storageConfig from "./storageConfig";

export default class Localstorage implements storageConfig {
  localstorage: storageConfig;
  addNote(note: Note) {
    this.localstorage.addNote(note);
  }

  getNote(note: Note) {
    return this.localstorage.getNote(note);
  }
}
