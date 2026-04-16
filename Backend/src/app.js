const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors")
const notesModel = require("./Model/notes.model");

app.use(express.json());
app.use(cors())
// get req
app.get("/notes", async (req, res) => {
  const notes = await notesModel.find();

  res.status(200).json({
    message: "note  fatches",
    notes,
  });
});

// post req
app.post("/notes", async (req, res) => {
  const { title, des } = req.body;
  await notesModel.create({
    title: title,
    des: des,
  });

  res.status(201).json({
    message: "note created",
  });
});

// patch req

app.patch("/notes/:id", async (req, res) => {
  const { id } = req.params;
  const { des } = req.body;
  await notesModel.findByIdAndUpdate(id, {
    des: des,
  });
  res.status(200).json({
    message: "upadate note succesfully",
  });
});

// delete req

app.delete("/notes/:id", async (req, res) => {
  const { id } = req.params;
  await notesModel.findByIdAndDelete(id);
  res.status(204).send();
});

module.exports = { app, port };
