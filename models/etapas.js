const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const etapaSchema = new Schema(
  {
    descricao: {
      type: String,
      required: true
    },
    valorEtapa: Number,
    porcentagemConclusao: Number,
    obra: {
      type: Schema.Types.ObjectId,
      ref: "obras"
    }
  },
  { timestamps: true }
);

const etapa = mongoose.model("etapas", etapaSchema);

module.exports = etapa;
