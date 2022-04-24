const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "User",
  },
  event: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "Event",
  },

  events: [
    {
      eventID: { type: mongoose.Schema.ObjectId, ref: "Event" },
      quantity: Number,
      price: Number,
    },
  ],
  estimatedDelivery: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
