import mongoose  from "mongoose";

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  content: {
    type: String,
    trim: true,
  },
});

export const Note = mongoose.model("Note", noteSchema);
