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
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
    this.handleArsipNote = this.handleArsipNote.bind(this);
  }
  
  handleAddNote(newNote) {
    this.setState((prevState) => ({
      notes: [...prevState.notes, newNote],
    }));
  }
  handleArsipNote(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            archived: !note.archived,
          };
        }
        return note;
      }),
    }));
  }

  handleDeleteNote(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.filter((note) => note.id !== id),
    }))
  }

  render() {
   return (
      <div className="note-app__body">
        <MyNoteInput onAddNote={this.handleAddNote} />
        <h2>Catatan Aktif</h2>
        <ActiveNotes 
        notes={this.state.notes.filter(note => !note.archived)} 
        showFormattedDate={showFormattedDate} 
        onDelete = {this.handleDeleteNote}
        onArsip = {this.handleArsipNote}
        />
        <h2>Arsip</h2>
        <ArsipNotes 
        notes={this.state.notes.filter(note => note.archived)} 
        showFormattedDate={showFormattedDate} 
        onDelete = {this.handleDeleteNote}
        onArsip = {this.handleArsipNote}
        />
      </div>
    );
  }
};

export default Main;
