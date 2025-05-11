const express = require('express');
const mongoose = require('mongoose');
// Product model is no longer directly used here, it's used in the controller
// const Product = require('./models/product.model.js'); 
const productRoutes = require('./routes/product.route.js'); // Import product routes
const app = express();

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
// use this to able to work with form
app.use(express.urlencoded({ extended: false }));

//routes 
// All routes starting with /api/products will be handled by productRoutes
app.use("/api/products", productRoutes);

// Server listening on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Default route
app.get('/', (req, res) => {
    res.send("Hello from the updated Node API server!");
});

// MongoDB connection
// This remains the central point for database connection
mongoose.connect("yourmongoodbatlas") //make sure you move this to .env file always avoid hard coded values
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch((error) => {
        console.error("Database connection failed:", error.message);
    });