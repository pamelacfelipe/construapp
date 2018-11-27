const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const etapaSchema = new Schema(
  {
    descricao: {
      type: String,
      required: true
    }
    // insumo: {
    //   type: Schema.Types.ObjectId,
    //   ref: "insumos"
    // }
  },
  { timestamps: true }
);

const etapa = mongoose.model("etapas", etapaSchema);

module.exports = etapa;
