const mongoose = require('mongoose');
const BookingSchema = new mongoose.Schema({
  fromDestination: String,
  toDestination: String,
  coalQuantity: Number,
  numberOfRakes: Number,
  selectedRakeType: String,
  deliveryDate: Date,
  user_id: String,
  fromSidingId: { type: mongoose.Schema.Types.ObjectId, ref: 'sidings' }, // Reference for fromSiding
  toSidingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Sidings' },   // Reference for toSiding
  fromLat: Number,  // Store fromSiding latitude
  fromLng: Number,  // Store fromSiding longitude
  toLat: Number,    // Store toSiding latitude
  toLng: Number     // Store toSiding longitude   // Reference for toDestination
});

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;
