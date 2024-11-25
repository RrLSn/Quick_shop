import Product from "../modules/product_module.js";

//Get Products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get a single Product
export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const searchedProduct = await Product.findById(id);
    if (!searchedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(searchedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//search product

// export const searchProduct = async (req, res) => {
//   const { title } = req.query;

//   if (!title || title.trim() === "") {
//     res.status(400).json({ message: "Product name required for search" });
//   } else {
//     try {
//       const searchedProduct = await Product.find(title);
//       if (!searchProduct) {
//         return res.status(404).json({ message: "Product not found" });
//       }
//       return res.status(200).json({ message: "Ok", data: searchedProduct });
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({ error: "Internal server error" });
//     }
//   }
// };

//Post Product
export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Edit product
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) {
      res.status(404).json({ message: "Product not Found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      res.status(404).json({ message: "Product not Found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get Related Product
export const relatedProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    const related_products = await Product.find({
      related: product.features,
    }).limit(9);
    res.status(200).json(related_products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
