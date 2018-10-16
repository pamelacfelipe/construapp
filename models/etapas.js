const mongoose = require("mongoose");

const etapaSchema = new mongoose.Schema(
  {
    descricao: {
      type: String,
      required: true
    },
    valorEtapa: Number,
    porcentagemConclusao: Number,
    obras: [
      {
        id: {
          type: Schema.Types.ObjectId,
          ref: "obras"
        },
        nome: {
          type: String,
          required: true
        },
        responsavel: String,
        conclusaoEtapa: Number,
        valorObra: Number
      }
    ]
  },
  { timestamps: true }
);

const etapa = mongoose.model("etapas", etapaSchema);

module.exports = etapa;
