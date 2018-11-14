const mongoose = require("mongoose");

const obraSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true
    },
    responsavel: String
    // conclusaoObra: String,
    // valorObra: Number
  },
  { timestamps: true }
);

const obra = mongoose.model("obras", obraSchema);

module.exports = obra;
