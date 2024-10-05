import React, { useState } from "react";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };

    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  handleSearchInput(event) {
    const search = event.target.value;
    this.setState({ search });
    this.props.onSearch(search);
  }

  render() {
    return (
      <>
        <h1 className="navbar">Notes</h1>
        <div className="note-search">
          <input
            type="text"
            placeholder="Cari Catatan"
            value={this.state.search}
            onChange={this.handleSearchInput}
          />
        </div>
      </>
    );
  }
}

export default Navbar;
