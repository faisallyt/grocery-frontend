import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const ItemsList = ({ groceryItems }) => {
  const [selectedQuantities, setSelectedQuantities] = useState({});

  useEffect(() => {
    const initialQuantities = {};
    groceryItems.forEach((item) => {
      initialQuantities[item.id] = item.quantities[0];
    });
    setSelectedQuantities(initialQuantities);
  }, [groceryItems]);

  const addToCartHandler = (item) => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      const cartItemsJSON = JSON.parse(cartItems);
      cartItemsJSON.push({ ...item, quantity: selectedQuantities[item.id] });
      localStorage.setItem("cartItems", JSON.stringify(cartItemsJSON));
    } else {
      const cartItems = [{ ...item, quantity: selectedQuantities[item.id] }];
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
    toast.success(`Added ${item.title} to cart`);
  };

  if (groceryItems.length < 1) {
    return (
      <div>
        <h1 className="text-center text-3xl font-bold text-gray-700">
          No items found.
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
      {groceryItems.map((item) => {
        return (
          <div
            key={item.id}
            className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-64 md:w-72 lg:w-100">
            <div className="w-full flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-[16rem] h-[10rem] sm:w-[10rem] sm:h-[10rem] md:w-[14rem] md:h-[8rem] object-cover rounded-md mb-4"
              />
            </div>
            <h3 className="text-lg font-semibold mb-1 text-gray-800">
              {item.title}
            </h3>
            <h2 className="text-gray-600 mb-2">
              Brand:{" "}
              <span className="text-gray-700 font-medium">{item.brand}</span>
            </h2>
            <div className="flex flex-col justify-between mb-3">
              <select
                className="border p-2 rounded-lg mb-2"
                onChange={(e) => {
                  const selected = item.quantities.find(
                    (q) => q.amount === e.target.value
                  );
                  setSelectedQuantities((prev) => ({
                    ...prev,
                    [item.id]: selected, // Update the selected quantity for this item
                  }));
                }}
                value={
                  selectedQuantities[item.id]?.amount ||
                  item.quantities[0].amount
                }>
                {item.quantities.map((quantity) => (
                  <option key={quantity.amount} value={quantity.amount}>
                    {quantity.amount} - ₹{quantity.price.toFixed(2)}
                  </option>
                ))}
              </select>
              <button
                className="rounded-lg p-2 border px-4 text-green-600 hover:bg-green-100 transition-colors"
                onClick={() => addToCartHandler(item)}>
                ADD
              </button>
            </div>
            <p className="text-gray-800 font-medium">
              Price: ₹
              {selectedQuantities[item.id]?.price.toFixed(2) ||
                item.quantities[0].price.toFixed(2)}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ItemsList;
