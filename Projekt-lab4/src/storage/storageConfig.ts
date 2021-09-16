import Note from "../classes/note";

export default interface IStorage {
    addNote: (note: Note) => void;
    getNote: (note: Note) => void;
}