import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Cart from "./Pages/Cart";
import ScannedList from "./Pages/ScannedList";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/scanned-list" element={<ScannedList />} />
      </Routes>
    </>
  );
}

export default App;
