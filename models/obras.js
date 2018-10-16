const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const obraSchema = new Schema(
  {
    nome: {
      type: String,
      required: true
    },
    responsavel: String,
    conclusaoObra: Number,
    valorObra: Number
  },
  { timestamps: true }
);

const obra = mongoose.model("obras", obraSchema);

module.exports = obra;
