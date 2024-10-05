import React, { useState } from "react";

function Navbar() {
    const [seacrhNav, setSearchNav] = useState("");
    const handleInpuSearch = (e) => {
        e.preventDefault();
        setSearchNav(e.target.value);
    };
    
  return (
    <>
      <div className="note-app__header">
        <h1 className="navbar">Notes</h1>
        <div className="note-search">
          <input type="text" placeholder="Cari Catatan" value={seacrhNav} onChange={handleInpuSearch}></input>
        </div>
      </div>
    </>
  );
}

export default Navbar;
