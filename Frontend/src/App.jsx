import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
const [title, setTitle] = useState("");
const [des, setDes] = useState("");
const [notes, setNotes] = useState([]);
const [editDes, setEditDes] = useState("");

function getNotes() {
axios
.get("http://localhost:3000/notes")
.then((res) => {
setNotes(res.data.notes);
})
.catch((err) => {
console.log("err", err);
});
}

function addNotesData() {
axios
.post("http://localhost:3000/notes", { title, des })
.then(() => {
setTitle("");
setDes("");
getNotes();
});
}

function deleteNotesData(id) {
let ans = confirm("Are you really want to delete this note?");
if (ans) {
axios
.delete(`http://localhost:3000/notes/${id}`)
.then(() => {
getNotes();
})
.catch((err) => {
console.log(err);
});
}
}

function editDesNotes(id) {
axios
.patch(`http://localhost:3000/notes/${id}`, {
des: editDes,
})
.then(() => {
setEditDes("");
getNotes();
})
.catch((err) => {
console.log(err);
});
}

useEffect(() => {
getNotes();
}, []);

return ( <div className="container">
{/* Form */}
<form
onSubmit={(e) => {
e.preventDefault();
addNotesData();
}}
>
<input
type="text"
placeholder="Title"
value={title}
onChange={(e) => setTitle(e.target.value)}
/>

```
    <input
      type="text"
      placeholder="Description"
      value={des}
      onChange={(e) => setDes(e.target.value)}
    />

    <button type="submit">Add Note</button>
  </form>

  {/* Notes */}
  <div className="notes-container">
    {notes.map((val) => {
      return (
        <div className="note-card" key={val._id}>
          <h2>{val.title}</h2>
          <p>{val.des}</p>

          <button onClick={() => deleteNotesData(val._id)}>
            Delete
          </button>

          <input
            type="text"
            placeholder="Edit description"
            value={editDes}
            onChange={(e) => setEditDes(e.target.value)}
          />

          <button onClick={() => editDesNotes(val._id)}>
            Edit
          </button>
        </div>
      );
    })}
  </div>
</div>

);
}

export default App;
