const mongoose = require("mongoose");

const insumoSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true
    },
    valorUnitario: Number,
    quantidade: Number,
    valorTotal: Number,
    etapas: [
      {
        id: {
          type: Schema.Types.ObjectId,
          ref: "etapas"
        },
        descricao: String,
        valorEtapa: Number,
        conclusaoEtapa: Number
      }
    ]
  },
  { timestamps: true }
);

const insumo = mongoose.model("insumos", insumoSchema);

module.exports = insumo;
