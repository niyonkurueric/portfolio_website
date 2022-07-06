import mongoose from "mongoose";

const opts = {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
};

const schema = mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  opts
);

export default mongoose.model("User", schema);
