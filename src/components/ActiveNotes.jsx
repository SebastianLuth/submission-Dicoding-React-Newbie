import React from "react";

class ActiveNotes extends React.Component {
  render() {
    const { notes, showFormattedDate, onDelete, onArsip } = this.props;
    if (notes.length === 0) {
      return <p>Tidak ada catatan yang aktif</p>;
    }
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
              <button 
              className="note-item__delete-button"
              onClick={() => onDelete(note.id)}
              >Delete</button>
              <button 
              className="note-item__archive-button"
              onClick={() => onArsip(note.id)}
              >Arsipkan</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ActiveNotes;
