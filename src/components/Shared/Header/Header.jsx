import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import logo from "../../../assets/Logo.png";
import NavList from "./List/NavList";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="sm:flex items-center justify-around py-6 gap-24 px-12 hidden sticky top-0 bg-[#EFF6F1] drop-shadow z-50">
      <Link to="/" className="flex items-center justify-center gap-1">
        <img className="h-8" src={logo} alt="organick" />
        <h1 className="text-2xl font-bold">Organick</h1>
      </Link>
      <NavList />
      <div className="flex items-center gap-4 justify-end w-[35%]">
        <div className="relative flex-1">
          <BiSearch className="absolute bg-[#7EB693] text-white text-4xl top-1 right-1 p-[8px] rounded-full" />
          <input
            className="bg-[#ffffff93] text-gray-600 py-2 pl-4 rounded-full border-2 outline-none w-full"
            type="search"
            name=""
            id=""
          />
        </div>
        <div>
          <button className="flex justify-center items-center gap-2 border-2  rounded-full px-1 py-1 font-semibold">
            <AiOutlineShoppingCart className="text-3xl text-white font-extrabold bg-[#274C5B] rounded-full p-1" />
            <span>Cart 0</span>
          </button>
        </div>
        <div>
          <Link
            className="text-lg drop-shadow-xl py-2 px-3 rounded-full hover:bg-[#274C5B] hover:text-white transition-all duration-500 ease-in-out"
            to="/login"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
