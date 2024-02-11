import React, { useState } from "react";
import "./styles1.css";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div className="notes">
      <form className="writenote">
        <input
          name="title"
          onChange={handleChange}
          value={note.title} // changed from notes.title to note.title
          placeholder="Title"
        />{" "}
        <br />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content} // changed from notes.content to note.content
          placeholder="Take a note....."
          rows="3"
        />
        <br />
        <button onClick={submitNote} className="btn-add">
          Add
        </button>
      </form>
    </div>
  );
}
export default CreateArea;
