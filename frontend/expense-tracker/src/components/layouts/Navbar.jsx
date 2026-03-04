import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import SideMenu from "./SideMenu";

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <div className="flex items-center gap-6 bg-white/70 border-b border-slate-200/50 backdrop-blur-2xl py-4 px-8 sticky top-0 z-30 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.03)] h-[76px]">
      <button
        className="block lg:hidden text-slate-600 hover:text-indigo-600 transition-colors duration-300 active:scale-95"
        onClick={() => {
          setOpenSideMenu(!openSideMenu);
        }}
      >
        {openSideMenu ? (
          <HiOutlineX className="text-2xl" />
        ) : (<HiOutlineMenu className="text-2xl" />
        )}
      </button>
      <h2 className="text-xl font-extrabold text-slate-800 tracking-tight">Expense Tracker</h2>
      {openSideMenu && (
        <div className="fixed top-[76px] -ml-8 bg-white/90 backdrop-blur-3xl shadow-2xl z-50 rounded-br-3xl overflow-hidden border-b border-r border-slate-200/50">
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
