import { useState, useEffect } from "react";
import groceryItems from "../utils/DummyItems";
import ItemsList from "../components/ItemsList";
import { Search, ShoppingBag, XCircle } from "lucide-react";

const SearchResults = () => {
  const [searchedItems, setSearchedItems] = useState([]);
  const [results, setResults] = useState({});

  useEffect(() => {
    const storedSearchedItems =
      JSON.parse(localStorage.getItem("searchedItems")) || [];
    setSearchedItems(storedSearchedItems);

    const foundItems = {};
    storedSearchedItems.forEach((searchTerm) => {
      const matches = groceryItems.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
      if (matches.length > 0) {
        foundItems[searchTerm] = matches;
      }
    });

    setResults(foundItems);
  }, []);

  const clearSearch = (termToRemove) => {
    const updatedItems = searchedItems.filter((term) => term !== termToRemove);
    setSearchedItems(updatedItems);
    localStorage.setItem("searchedItems", JSON.stringify(updatedItems));

    const updatedResults = { ...results };
    delete updatedResults[termToRemove];
    setResults(updatedResults);
  };

  if (searchedItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8">
        <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
        <h1 className="text-3xl font-bold text-gray-700 mb-2">
          No Recent Searches
        </h1>
        <p className="text-gray-500">
          Try searching for items you'd like to find
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Recent Searches
        </h1>
        <div className="h-1 w-20 bg-blue-500 rounded"></div>
      </div>

      <div className="space-y-8">
        {searchedItems.map((searchTerm, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-all duration-200 hover:shadow-md">
            <div className="p-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Search className="w-4 h-4 text-gray-400" />
                <h2 className="text-sm font-medium text-gray-700">
                  Results for "{searchTerm}"
                </h2>
              </div>
              <button
                onClick={() => clearSearch(searchTerm)}
                className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                aria-label="Clear search">
                <XCircle className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4">
              {results[searchTerm] && results[searchTerm].length > 0 ? (
                <ItemsList groceryItems={results[searchTerm]} />
              ) : (
                <div className="text-center py-8">
                  <div className="inline-block p-3 rounded-full bg-gray-100 mb-4">
                    <Search className="w-6 h-6 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-700 mb-2">
                    No products found
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Try searching with different keywords
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
