import { CiSearch } from "react-icons/ci";

const Home = () => {
  return (
    <div className="px-10">
      <div className="w-full flex justify-between items-center border rounded-lg p-3">
        <input
          type="text"
          placeholder="Search Items"
          className="w-full focus:ring-0 outline-none"
        />
        <CiSearch className="text-gray-500 ml-2" size={30} />
      </div>
      <div></div>
    </div>
  );
};

export default Home;
