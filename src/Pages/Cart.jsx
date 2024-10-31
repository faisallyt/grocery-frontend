import { useEffect, useState } from "react";

const Cart = () => {
  const [itemsInCart, setItemsInCart] = useState([]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setItemsInCart(JSON.parse(cartItems));
    }
  }, []);

  const removeItemHandler = (itemId) => {
    // Filter out the item to be removed
    const updatedItems = itemsInCart.filter((item) => item.id !== itemId);
    setItemsInCart(updatedItems);

    // Update localStorage
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  if (itemsInCart.length < 1) {
    return (
      <div>
        <h1 className="text-center text-3xl font-bold text-gray-700">
          Your cart is empty.
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-6 px-10 py-6">
      {itemsInCart.map((item) => (
        <div
          key={item.id} // Use a unique ID for better performance
          className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-[17rem]">
          <img
            src={item.image} // Assuming each item has an image URL
            alt={item.title}
            className="w-full h-[15.75rem] object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold mb-1 text-gray-800">
            {item.title}
          </h3>
          <h2 className="text-gray-600 mb-2">
            Brand:{" "}
            <span className="text-gray-700 font-medium">{item.brand}</span>
          </h2>
          <p className="text-gray-800 font-medium">
            Quantity: {item.quantity.amount} - Price: ₹
            {item.quantity.price.toFixed(2)}
          </p>
          <button
            onClick={() => removeItemHandler(item.id)}
            className="mt-2 bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600 transition-colors">
            Remove Item
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
