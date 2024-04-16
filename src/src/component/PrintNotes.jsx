import React, { useState } from "react";

function PrintNotes({ notes, updateNote, deleteNode }) {
  const [selectedRowUpdate, setSelectedRowUpdate] = useState(null);
  const [selectedRowDelete, setSelectedRowDelete] = useState(null);

  const toggleDelete = (id) => {
    deleteNode(id);
    setSelectedRowDelete(id);
  };

  const toggleUpdate = (note) => {
    updateNote(note);
    setSelectedRowUpdate(selectedRowUpdate === null ? note.id : null);
  };

  return (
    <div>
      {notes.length === 0 || notes === null ? (
        <p>No Records Found...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Completion Date</th>
              <th>Importance</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {notes.map((note) => (
              <tr
                key={note.id}
                style={{
                  backgroundColor:
                    // selectedRowUpdate === note.id ? "lightblue" : "inherit",
                    (selectedRowUpdate === note.id ? "info" : "inherit") ||
                         (selectedRowDelete === note.id ? "red" : "inherit"),
                }}
              >
                <td>{note.id}</td>
                <td>{note.title}</td>
                <td>{note.description}</td>
                <td>{note.cdate}</td>
                <td>
                  <div
                    style={{
                      height: 30,
                      backgroundColor: note.importance,
                    }}
                  />
                </td>
                <td>
                  <button className="btn" onClick={() => toggleDelete(note.id)}>Delete</button>
                  <button className="btn" onClick={() => toggleUpdate(note)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default PrintNotes;
