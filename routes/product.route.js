const express = require("express");
const router = express.Router();
// const Product = require('./models/product.model.js'); // This import is no longer needed here, controllers handle model interaction
const { 
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
 } = require("../controllers/product.controller.js");

// Route to get all products
router.get('/', getProducts);

// Route to get a single product by its ID
router.get('/:id', getProductById);

// Route to create a new product
router.post('/', createProduct);

// Route to update an existing product by its ID
router.put('/:id', updateProduct);

// Route to delete a product by its ID
router.delete('/:id', deleteProduct);

// router.get('/' , async (req, res ) =>{
//     try {
//         const products = await Product.find({});
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });

module.exports = router;