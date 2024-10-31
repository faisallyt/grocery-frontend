import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Cart from "./Pages/Cart";
import ScannedList from "./Pages/ScannedList";
import SearchResults from "./Pages/SearchResults";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer />
    </>
  );
}

export default App;
