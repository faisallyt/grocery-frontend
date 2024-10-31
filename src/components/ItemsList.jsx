const ItemsList = ({ groceryItems }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {groceryItems.map((item, index) => (
        <div
          key={index}
          className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-[17rem]">
          <img
            src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/54f36c0f42bf6e0179ea408441"
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
          <div className="flex justify-between items-center mb-3">
            <select className="border p-2 rounded-lg">
              {item.quantities.map((quantity, index) => (
                <option key={index} value={quantity}>
                  {quantity}
                </option>
              ))}
            </select>
            <button className="rounded-lg p-2 border px-6 text-green-600 hover:bg-green-100 transition-colors">
              ADD
            </button>
          </div>
          <p className="text-gray-800 font-medium">Price: ₹{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
