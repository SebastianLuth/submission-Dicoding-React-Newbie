import React from "react";
import { getInitialData } from "../utils";
import { showFormattedDate } from "../utils";
import MyNoteInput from "./NoteInput";
import ActiveNotes from "./ActiveNotes";
import ArsipNotes from "./ArsipNotes";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes : getInitialData(),
    }

    this.handleAddNote = this.handleAddNote.bind(this);
  }
  
  handleAddNote(newNote) {
    this.setState((prevState) => ({
      notes: [...prevState.notes, newNote],
    }));
  }

  render() {
   return (
      <div className="note-app__body">
        <MyNoteInput onAddNote={this.handleAddNote} />
        <h2>Catatan Aktif</h2>
        <ActiveNotes notes={this.state.notes.filter(note => !note.archived)} showFormattedDate={showFormattedDate} />
        <h2>Arsip</h2>
        <ArsipNotes notes={this.state.notes.filter(note => note.archived)} />
      </div>
    );
  }
};

export default Main;
