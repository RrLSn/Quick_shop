import Order from "../modules/order_module.js";
import Cart from "../modules/cart_module.js";
import Users from "../modules/users_modules.js";

// Place Order
export const placeOrder = async (req, res) => {
  const { userId } = req.params;
  const { items, tax, shippingFee, total } = req.body;

  // verify if user exist
  const user = await Users.findById(userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  try {
    const cart = await Cart.findOne({ userId: userId });
    if (!cart || cart.items.length === 0) {
      return res.status(404).json({ message: "Cart is empty" });
    }

    // Create new Order
    const order = new Order({
      userId,
      items: items,
      shippingFee: shippingFee,
      tax: tax,
      total: total,
    });

    // clear cart
    if (cart) {
      cart.items = [];
      cart.total = 0;
      cart.subtotal = 0;
      await cart.save();
    }

    await order.save();
    res
      .status(200)
      .json({ message: "Order placed successfully", order: order });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
};
