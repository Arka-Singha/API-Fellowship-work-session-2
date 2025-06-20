const express = require('express');
const dotenv = require('dotenv');
const path = require('path'); //  Import path for serving frontend
const studentRoutes = require('./routes/studentRoutes');

dotenv.config();

const app = express();
app.use(express.json());

// Serve frontend static files
app.use(express.static(path.join(__dirname, 'public')));

// Mount your API routes
app.use('/api/students', studentRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
