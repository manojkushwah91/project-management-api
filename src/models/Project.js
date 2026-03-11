const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
{
  title: { type: String, required: true },
  description: String,
  status: {
    type: String,
    enum: ["pending","active","completed"],
    default: "pending"
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  tenantId: String
},
{ timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
