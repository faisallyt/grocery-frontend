import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="flex px-4 py-4 justify-between items-center shadow-xl mb-6">
      <div>
        <h1 className=" text-xl">Grocery Store </h1>
      </div>
      <div className=" flex gap-6">
        <FaCartShopping size={30} />
        <CgProfile size={30} />
      </div>
    </div>
  );
};

export default Navbar;
