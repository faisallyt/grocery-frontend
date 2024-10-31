import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ScannedList = () => {
  const [list, setList] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const extractedItems = localStorage.getItem("extractedItems");
    if (extractedItems) {
      const parsedItems = JSON.parse(extractedItems);
      setList(parsedItems);
      setSelectedItems(parsedItems.map((item) => item.itemname)); // All items selected by default
    }
  }, []);

  // Toggle selection of an item
  const handleSelectionChange = (item) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(item.itemname)) {
        // If already selected, remove from selectedItems
        return prevSelectedItems.filter(
          (selected) => selected !== item.itemname
        );
      } else {
        // Otherwise, add to selectedItems
        return [...prevSelectedItems, item.itemname];
      }
    });
  };

  // Handle editing of item names
  const handleItemNameChange = (index, newName) => {
    setList((prevList) => {
      const updatedList = prevList.map((item, i) =>
        i === index ? { ...item, itemname: newName } : item
      );

      // Update selectedItems if the original name is in the selectedItems
      const originalItemName = prevList[index].itemname;
      setSelectedItems((prevSelectedItems) => {
        // Only change the item name in selectedItems if the original name was selected
        if (prevSelectedItems.includes(originalItemName)) {
          return prevSelectedItems.map((name) =>
            name === originalItemName ? newName : name
          );
        }
        return prevSelectedItems; // Return unchanged if the item wasn't selected
      });

      return updatedList; // Return the updated list
    });
  };

  const SearchButtonHandler = () => {
    localStorage.setItem("searchedItems", JSON.stringify(selectedItems));
    navigate("/search-result");
  };

  return (
    <div className="px-4 md:px-10 py-6 mx-auto flex flex-col justify-center items-center">
      {list.length > 0 ? (
        <ul className="flex flex-col gap-4 w-full max-w-3xl">
          {list.map((item, index) => (
            <li
              key={index}
              className="p-4 border rounded-lg flex items-center bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <input
                type="checkbox"
                checked={selectedItems.includes(item.itemname)}
                onChange={() => handleSelectionChange(item)}
                className="mr-3 custom-checkbox"
              />
              <input
                type="text"
                value={item.itemname}
                onChange={(e) => handleItemNameChange(index, e.target.value)}
                className="flex-1 p-2 border-b border-gray-300 focus:outline-none focus:border-b focus:border-blue-500"
                placeholder="Item name"
              />
            </li>
          ))}
          <button
            className="mt-4 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full"
            onClick={SearchButtonHandler}>
            Search
          </button>
        </ul>
      ) : (
        <h1 className="text-center text-3xl font-bold text-gray-700">
          No items found.
        </h1>
      )}
    </div>
  );
};

export default ScannedList;
