import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex px-4 py-4 justify-between items-center shadow-xl mb-6">
      <div>
        <h1 className=" text-xl">Grocery Store </h1>
      </div>
      <div className=" flex gap-6">
        <FaCartShopping size={30} onClick={() => navigate("/cart")} />
        <CgProfile size={30} />
      </div>
    </div>
  );
};

export default Navbar;
