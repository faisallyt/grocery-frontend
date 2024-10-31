import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Cart from "./Pages/Cart";
import ScannedList from "./Pages/ScannedList";
import SearchResults from "./Pages/SearchResults";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/scanned-list" element={<ScannedList />} />
        <Route path="/search-result" element={<SearchResults />} />
      </Routes>
    </>
  );
}

export default App;
