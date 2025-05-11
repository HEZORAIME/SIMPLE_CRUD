// This file will contain the controller functions for product-related operations.
// Controller functions are responsible for handling incoming requests,
// interacting with the model (database), and sending responses.

const Product = require('../models/product.model.js');

// Controller function to get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to get a single product by ID
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            // If product is not found, send a 404 Not Found response
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to create a new product
const createProduct = async (req, res) => {
    try {
        // Create a new product using the data from the request body
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        // If there's an error (e.g., validation error), send a 500 Internal Server Error response
        res.status(500).json({ message: error.message });
    }
};

// Controller function to update an existing product by ID
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        // Find the product by ID and update it with the data from the request body
        // { new: true } option returns the modified document rather than the original
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });

        if (!product) {
            // If product is not found, send a 404 Not Found response
            return res.status(404).json({ message: "Product not found" });
        }

        // Send the updated product as a JSON response
        res.status(200).json(product);
    } catch (error) {
        // If there's an error, send a 500 Internal Server Error response
        res.status(500).json({ message: error.message });
    }
};

// Controller function to delete a product by ID
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        // Find the product by ID and delete it
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            // If product is not found, send a 404 Not Found response
            return res.status(404).json({ message: "Product not found" });
        }

        // Send a success message as a JSON response
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        // If there's an error, send a 500 Internal Server Error response
        res.status(500).json({ message: error.message });
    }
};

// Export all controller functions to be used in the routes
module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};
