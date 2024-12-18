import Cart from "../modules/cart_module.js";
import Users from "../modules/users_modules.js";

//Add item to Cart
export const addItemToCart = async (req, res) => {
  const { userId, productId, title, price, quantity, image, tax, shippingFee } =
    req.body;

  try {
    //verify if user exist
    const user = await Users.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      //Create a new cart if it doesn't exist
      cart = new Cart({ userId, items: [], subtotal: 0 });
    }
    const existingItem = cart.items.find(
      (item) => item.productId.toString() === productId
    );

    if (existingItem) {
      //update quantity if an item already exist
      existingItem.quantity += quantity;
      existingItem.total = existingItem.quantity * existingItem.price;
    } else {
      //Add new item to cart
      cart.items.push({
        productId,
        title,
        price,
        quantity,
        total: Math.round(price * quantity + tax),
        image,
        tax,
        shippingFee,
      });
    }

    //Update subtotal
    cart.subtotal = cart.items.reduce((acc, item) => acc + item.total, 0);

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get Items in Cart
export const getItemsInCart = async (req, res) => {
  const { userId } = req.params;
  //verify if user exist
  const user = await Users.findById(userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Remove/Delete Items
export const removerItemFrmCart = async (req, res) => {
  const { userId, itemId } = req.params;
  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Item not found" });
    }
    cart.items = cart.items.filter((item) => item._id.toString() !== itemId);
    cart.subtotal = cart.items.reduce((acc, item) => acc + item.total, 0);

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
