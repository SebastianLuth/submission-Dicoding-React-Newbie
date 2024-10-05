import React from "react";

class MyNoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      charLimit: 50,
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    const maxLength = 50;
    const newTitle = event.target.value.slice(0, maxLength);
    this.setState({ title: newTitle });
  }

  handleBodyChange(event) {
    this.setState({ body: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const newNote = {
      id: +new Date(),
      title: this.state.title,
      body: this.state.body,
      archived: false,
      createdAt: new Date().toISOString(),
    };

    this.props.onAddNote(newNote);
    this.setState({ title: "", body: "" });
  }

  render() {
    return (
      <>
        <div className="note-input">
          <h2>Buat Catatan</h2>
          <form onSubmit={this.handleSubmit}>
            <p className="note-input__title__char-limit">{this.state.charLimit - this.state.title.length}</p>
            <input
              className="note-input__title"
              type="text"
              placeholder="Judul Catatan"
              value={this.state.title}
              onChange={this.handleTitleChange}
              required
            />
            <textarea
              className="note-input__body"
              placeholder="Tuliskan Catatan"
              value={this.state.body}
              onChange={this.handleBodyChange}
              required
              type="text"
            />
            <button type="submit"> Buat</button>
          </form>
        </div>
      </>
    );
  }
}

export default MyNoteInput;
