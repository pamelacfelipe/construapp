const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const insumoSchema = new Schema(
  {
    nome: {
      type: String,
      required: true
    },
    valorUnitario: Number,
    quantidade: Number,
    valorTotal: Number,
    etapa: {
      type: Schema.Types.ObjectId,
      ref: "etapas"
    }
  },
  { timestamps: true }
);

const insumo = mongoose.model("insumos", insumoSchema);

module.exports = insumo;
