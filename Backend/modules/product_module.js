import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter product name"],
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: [String],
      required: false,
    },
    attributes: {
      department: {
        type: String,
        required: true,
      },
      size: {
        type: String,
        required: true,
      },
      material: {
        type: String,
        required: true,
      },
      features: {
        type: String,
        required: true,
      },
    },
    rating: {
      type: Number,
      required: false,
    },
    review: {
      type: Number,
      required: false,
    },
    pricerange: {
      type: String,
      required: true,
    },
    storename: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    shipping: {
      type: String,
      required: true,
    },
    tax: {
      type: String,
      required: true,
    },
    condition: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
