import React from "react";

class ActiveNotes extends React.Component {
  render() {
    const { notes, showFormattedDate } = this.props;

    return (
      <div className="notes-list">
        {notes.map((note) => (
          <div className="note-item" key={note.id}>
            <div className="note-item__content">
              <h3 className="note-item__title">{note.title}</h3>
              <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
              <p className="note-item__body">{note.body}</p>
            </div>
            <div className="note-item__action">
              <button className="note-item__delete-button">Delete</button>
              <button className="note-item__archive-button">Arsipkan</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ActiveNotes;
