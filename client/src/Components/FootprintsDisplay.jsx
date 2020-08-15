import React, { useState } from "react";
import axios from "axios";
import Map from "./Map";
import footprintSeeds from "../data/footprintSeeds.json";
import "../pages/Profile/profile.css";

const FootprintsDisplay = (props) => {
  const notes = [];
  const [notesByLocation, setNotesByLocation] = useState([]);
  const { newNoteContent, setNewNoteContent, location } = props;

  function addNote(e) {
    e.preventDefault();
    axios.post("/api/newnote", { content: newNoteContent }).then((res) => {
      console.log(res);
    });
  }

  function deleteNote(id) {
    console.log(id);
    axios.delete(`/api/note/${id}`).then((res) => {
      window.alert(`Successfully deleted new note`);
    });
  }

  return (
    <div id="footprints">
      <div uk-grid="masonry: true">
        <div className="homeText">
          {notesByLocation.map((note) => {
            return (
              <div>
                <div className="uk-card uk-card-default footprintCards">
                  <p className="footprintText">
                    <p key={note.title}>
                      {note.content}
                      <button
                        onClick={() => {
                          deleteNote(note._id);
                        }}
                      >
                        Delete Footprint
                      </button>
                    </p>
                  </p>
                  <button className="deleteFootprintButton saveDeleteButton">
                    delete
                  </button>
                  <button className="saveFootprintButton saveDeleteButton">
                    save
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {notes.map((note) => (
          <p key={note._id}>{note.content}</p>
        ))}
      </div>
    </div>
  );
};

export default FootprintsDisplay;
