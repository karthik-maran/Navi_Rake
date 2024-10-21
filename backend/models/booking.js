const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  fromDestination: { type: String, required: true },
  toDestination: { type: String, required: true },
  coalQuantity: { type: Number, required: true },
  numberOfRakes: { type: Number, required: true },
  selectedRakeType: { type: String, required: true },
  deliveryDate: { type: Date, required: true },
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
