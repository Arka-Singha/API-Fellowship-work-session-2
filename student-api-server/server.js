const express = require('express');
const dotenv = require('dotenv');
const path = require('path'); //  Import path for serving frontend
const studentRoutes = require('./routes/studentRoutes');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

dotenv.config();

const app = express();
app.use(express.json());

// Swagger docs route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Serve frontend static files
app.use(express.static(path.join(__dirname, 'public')));

// Mount your API routes
app.use('/api/students', studentRoutes);

// Start server
const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;    // Export for testing
