const mongoose = require("mongoose");
const prescriptionSchema = mongoose.Schema(
  {
    userid: {
      type: String,
      require,
    },
    name: {
      type: String,
      require,
    },
    email: {
      type: String,
      require,
    },
    orderItem: [], //array of medicine names and qty.
    orderAmount: {
      type: Number,
      require,
    },
  },
  {
    timestamps: true,
  }
);

const prescription = mongoose.model("order", orderSchema);
module.exports = prescription;