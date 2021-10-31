import mongoose from "mongoose";

export interface IProgram extends mongoose.Document {
  _id: string;
  school: string;
  program: string;
  location: string;
  length: number;

  createdAt: Date;
}

const programSchema = new mongoose.Schema({
  school: {
    type: String,
    required: true,
  },
  program: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },

  length: {
    type: Number,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Program = mongoose.model<IProgram>("Program", programSchema);
export { Program };
