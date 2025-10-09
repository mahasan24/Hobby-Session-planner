require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log(' DB connected to MongoDB Atlas'))
.catch(err => console.error(' DB connection error:', err));

const sessionsRoute = require('./routes/sessions');
const attendanceRoute = require('./routes/attendance');
const aiRoute = require('./routes/ai');

app.use('/sessions', sessionsRoute);
app.use('/api/sessions', sessionsRoute);
app.use('/api/attendance', attendanceRoute);
app.use('/api/ai', aiRoute);

app.get('/', (req, res) => {
  res.send('Hobby Planner API running ');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
  console.log(` API available at http://localhost:${PORT}`);
});