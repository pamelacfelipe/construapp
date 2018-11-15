const mongoose = require("mongoose");

const insumoSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true
    },
    valorUnitario: Number,
    quantidade: Number,
    valorTotal: Number
  },
  { timestamps: true }
);

const insumo = mongoose.model("insumos", insumoSchema);

module.exports = insumo;
