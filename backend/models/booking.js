const mongoose = require('mongoose');
const BookingSchema = new mongoose.Schema({
  fromDestination: String,
  toDestination: String,
  coalQuantity: Number,
  numberOfRakes: Number,
  selectedRakeType: String,
  deliveryDate: Date,
  user_id: String,
  fromSidingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Siding' }, // Reference for fromDestination
  toSidingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Siding' }   // Reference for toDestination
});

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;
