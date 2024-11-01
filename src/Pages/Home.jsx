import { CiSearch } from "react-icons/ci";
import ItemsList from "../components/ItemsList";
import { useState } from "react";
import groceryItems from "../utils/DummyItems.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleImageSubmit = async () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append("file", selectedImage);

      try {
        const response = await axios.post(
          "http://localhost:8000/process-image",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Extracted items", response.data.items);

        localStorage.setItem(
          "extractedItems",
          JSON.stringify(response.data.items)
        );
        navigate("/scanned-list");
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Please select an image to submit.");
    }
  };

  const filteredItems = groceryItems.filter((item) => {
    const query = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(query) || // Filter by title
      item.brand.toLowerCase().includes(query) || // Filter by brand
      item.tags.some((tag) => tag.toLowerCase().includes(query)) // Filter by tags
    );
  });

  return (
    <div className="px-4 py-6 mx-auto flex flex-col justify-center items-center max-w-screen-lg">
      <div className="flex w-full justify-center mb-6">
        <div className="w-full flex items-center border max-w-md border-gray-300 rounded-lg p-3 shadow-sm">
          <input
            type="text"
            placeholder="Search Items"
            className="w-full focus:ring-0 outline-none p-2 text-gray-700"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <CiSearch className="text-gray-500 ml-2" size={24} />
        </div>
      </div>

      <div className="flex items-center flex-col mb-6 w-full">
        <h2 className="text-sm font-bold mb-2">Search Grocery List</h2>
        <input
          type="file"
          accept="image/*"
          className="border border-gray-300 rounded-lg p-2 bg-white text-gray-700 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-100 focus:outline-none focus:ring focus:ring-green-300 w-full max-w-md"
          onChange={handleImageChange}
        />
        <p className="text-xs text-gray-500 mt-1">
          (Upload an image of your grocery list)
        </p>
        <button
          onClick={handleImageSubmit}
          className="mt-2 bg-green-600 text-white rounded-lg px-4 py-2 hover:bg-green-700 transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-green-300 w-full max-w-md">
          Submit Image
        </button>
      </div>

      <div className="flex flex-wrap w-full gap-4">
        <ItemsList groceryItems={filteredItems} />
      </div>
    </div>
  );
};

export default Home;
