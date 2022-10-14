import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import Icon from "@mui/material/Icon";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="logo"
        />
      </div>

      {/* MIDDLE */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start your search"
        />
        <div className="hidden md:inline-flex bg-red-400 text-white rounded-full p-1 cursor-pointer md:mx-2">
          <SearchIcon />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <div className="h-6 cursor-pointer">
          <LanguageIcon />
        </div>
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <div className="h-6 cursor-pointer">
            <MenuIcon />
          </div>
          <div className="h-6 cursor-pointer">
            <AccountCircleIcon />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
