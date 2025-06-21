const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Irrigation Backend is running!' });
});

// Irrigation API routes
app.get('/api/devices/status', (req, res) => {
  res.json({ 
    status: 'off', 
    lastUpdated: new Date(),
    deviceId: 'irrigation-1'
  });
});

app.post('/api/devices/toggle', (req, res) => {
  const { action } = req.body;
  console.log('Toggle request:', action);
  
  res.json({ 
    status: action, 
    message: `Device turned ${action}`,
    timestamp: new Date()
  });
});

app.get('/api/schedules', (req, res) => {
  res.json([
    { id: 1, name: 'Morning watering', time: '06:00', active: true }
  ]);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});