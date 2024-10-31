import { CiSearch } from "react-icons/ci";
import ItemsList from "../components/ItemsList";
import { useState } from "react";
import groceryItems from "../utils/DummyItems.js";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
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
    <div className="px-10 py-6 mx-auto flex flex-col justify-center items-center">
      <div className="w-full flex items-center border max-w-3xl border-gray-300 rounded-lg p-3 mb-6 shadow-sm justify-center">
        <input
          type="text"
          placeholder="Search Items"
          className="w-full focus:ring-0 outline-none p-2 text-gray-700"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <CiSearch className="text-gray-500 ml-2" size={24} />
      </div>

      <div className="flex flex-wrap w-[100%] gap-4">
        <ItemsList groceryItems={filteredItems} />
      </div>
    </div>
  );
};

export default Home;
