// Server
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// Connect dababase
connectDB();

const app = express();

// routes
const users = require('./routes/api/users');

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('<h1>Hello world</h1>'));

// use Routes
app.use('/api/users', users);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log('Server running on port ' + port));
