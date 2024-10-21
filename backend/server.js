// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv =require('dotenv')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User =require('./models/user')
const Booking =require('./models/booking')
const session = require('express-session');
const app = express();
dotenv.config();
const port = 5000;
const saltRounds = 10;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173' // Adjust according to your frontend URL
}));

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://0.0.0.0:27017/UserData', {
});

//Registration
app.post('/register', async (req, res) => {
  const { username, email, phone, password, address } = req.body;

  console.log('Received data:', req.body);  // Log incoming data

  // Input validation
  if (!username || !email || !phone || !password || !address) {
    console.error('Validation failed: All fields are required.');
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Additional validations
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.error('Validation failed: Invalid email format:', email);
    return res.status(400).json({ message: 'Invalid email format.' });
  }

  if (!/^\d{10}$/.test(phone)) {
    console.error('Validation failed: Phone number must be 10 digits:', phone);
    return res.status(400).json({ message: 'Phone number must be 10 digits.' });
  }

  if (password.length < 8) {
    console.error('Validation failed: Password must be at least 8 characters long.');
    return res.status(400).json({ message: 'Password must be at least 8 characters long.' });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.error('User already exists:', email);
      return res.status(400).json({ message: 'User already exists.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log('Hashed Password:', hashedPassword);  // Log the hashed password
    const user_identity = new mongoose.Types.ObjectId();

    // Create a new user
    const newUser = new User({
      user_id: user_identity,  // Assign a MongoDB ObjectId to user_id
      username,
      email,
      phone,
      password: hashedPassword,
      address,
    });

    // Save the user to the database
    await newUser.save();

    return res.status(201).json({ message: 'Registration successful!', user: { username, email, phone, address } });
  } catch (error) {
    console.error('Error in registration:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
});


//login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare password with hashed password stored in the database
    const isMatch = await bcrypt.compare(password, foundUser.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Send user data in the response
    res.status(200).json({
      message: 'Login successful',
      user: {
        user_id:foundUser.user_id,
        username: foundUser.username,
        email: foundUser.email,
        phone: foundUser.phone,
        address: foundUser.address
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


//RakeDetails display layout
const rakeSchema = new mongoose.Schema({
  type: String,
  image: String,
  description: String,
  price: Number,
  capacity: String
});

const Rake = mongoose.model('Rake', rakeSchema);

// Route to get rake types
app.get('/api/rake-types', async (req, res) => {
  try {
    const rakes = await Rake.find();
    res.json(rakes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




//booking information

  



// Route to handle booking submissions
app.post('/api/bookings', async (req, res) => {
  const { fromDestination, toDestination, coalQuantity, numberOfRakes, selectedRakeType, deliveryDate,user_id } = req.body;



  const newBooking = new Booking({

    fromDestination,
    toDestination,
    coalQuantity,
    numberOfRakes,
    selectedRakeType,
    deliveryDate,
    user_id
  });
 
  try {
    await newBooking.save();
    res.status(201).json({ message: 'Booking details saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving booking details', error });
  }
});


//fetching both users and rake data inn db
// Endpoint to fetch all users and booking

app.get('/api/register-data', async (req, res) => {
  try {
    const { user_id } = req.query;
     // Receive user_id from the frontend

    if (!user_id) {
      return res.status(400).json({ message: 'User ID is missing.' });
    }
  

    // Fetch the user based on the user_id from the request
    const user = await User.findOne({ user_id: user_id });

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Fetch bookings associated with the user
    const bookings = await Booking.find({ user_id: user_id });

    // Send the response with user and booking data
    res.status(200).json({
      users: [user],
      bookings,
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

//siding locations data

const SidingSchema = new mongoose.Schema({
  name:String,
  position: {
    lat:Number,
    lng:Number,
  },
  production:Number,
  address:String,
  labors:Number,
  workingTime: Number, // in hours
  rakes: Number, // free rakes available
  image: String, // store the image path or URL
});

const Siding = mongoose.model('Siding', SidingSchema);


app.get('/sidings', async (req, res) => {
  try {
    const sidings = await Siding.find();
    res.json(sidings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching siding data' });
  }
});


// admin dashboard backend

app.get('/admin/dashboard', async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    const bookingCount = await Booking.countDocuments();
    const rakeCount = await Rake.countDocuments();
    const sidingCount = await Siding.countDocuments();
    
    // Sending back the data with the correct variable names
    res.json({
      users: userCount,
      bookings: bookingCount,
      rakes: rakeCount,
      sidings: sidingCount
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch data' });
  }
});
app.get('/admin/add-data', async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    const bookingCount = await Booking.countDocuments();
    const rakeCount = await Rake.countDocuments();
    const sidingCount = await Siding.countDocuments();
    
    // Sending back the data with the correct variable names
    res.json({
      users: userCount,
      bookings: bookingCount,
      rakes: rakeCount,
      sidings: sidingCount
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch data' });
  }
});


//Admin view users
app.get('/api/users', async (req, res) => {
  try {
    const ViewUser = await User.find(); // Fetch all users from MongoDB
    res.json(ViewUser); // Send users in JSON format
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

//adminview booking
app.get('/api/bookings', async (req, res) => {
  try {
    const ViewBooking = await Booking.find(); // Fetch all users from MongoDB
    res.json(ViewBooking); // Send users in JSON format
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});