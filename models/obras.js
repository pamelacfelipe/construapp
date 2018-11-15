const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const obraSchema = new Schema(
  {
    nome: {
      type: String,
      required: true
    },
    responsavel: String,
    etapa: {
      type: Schema.Types.ObjectId,
      ref: "etapas"
    }
  },
  { timestamps: true }
);

const obra = mongoose.model("obras", obraSchema);

module.exports = obra;
