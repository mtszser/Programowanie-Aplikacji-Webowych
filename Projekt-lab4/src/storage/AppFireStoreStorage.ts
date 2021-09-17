import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { firebaseConfig } from "./FireBaseConfig";
import Note from "../classes/note";

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();

export class AppFireStoreStorage {
  note: Note;

  constructor() {}

  async addNoteToFirebase(note: any) {
    const res = await db.collection("notes").add(note);
    console.log(res);
  }

  async deleteNote(id: string) {
    const res = await db.collection("notes").doc(id).delete();
  }

  async updateNote(id: string, note: any) {
    const res = await db.collection("notes").doc(id).update(note);
  }

  async getFromStorage() {
    const res = await db
      .collection("notes")
      .get()
      .then((res) => ({
        data: res.docs.map((res) => ({
          data: res.data(),
          id: res.id,
        })),
      }));
    const data = res.data.map((note) => ({
      ...note.data,
      id: note.id,
    }));
    return Promise.resolve(data);
  }
}

const appFireStorage = new AppFireStoreStorage();
export default appFireStorage;
