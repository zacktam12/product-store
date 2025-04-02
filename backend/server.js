import express from "express";
import dotenv from "dotenv";
import Product from "./models/product_model.js";
const app = express();

dotenv.config();

app.use(express.json()); //allows as to accept json data in the body of the request

app.post("/api/products", async (req, res) => {
  const product = req.body; //user will send this data
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please fill all fields" });
  }
  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in create product :", error, message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});
app.listen(5000, () => {
  console.log("Server started at http://Localhost:5000 heres");
});

// 9vtbfx9aqklqxiAp
