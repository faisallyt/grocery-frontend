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
    <div className="px-10 py-6 mx-auto flex flex-col justify-center items-center">
      {list && (
        <ul className="px-10 flex flex-col gap-2">
          {list.map((item, index) => (
            <li
              key={index}
              className="p-4 border rounded-lg w-[30rem] flex items-center">
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
                className="ml-2 p-1 border-b border-gray-300 focus:outline-none focus:border-b focus:border-blue-500"
              />
            </li>
          ))}
          <button
            className="p-4 rounded-lg border"
            onClick={SearchButtonHandler}>
            Search
          </button>
        </ul>
      )}
    </div>
  );
};

export default ScannedList;
