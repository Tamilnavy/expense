import React, { useContext } from "react";
import { SIDE_MENU_DATA } from "../../utils/data";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import CharAvatar from "../Cards/CharAvatar";
const SideMenu = ({ activeMenu }) => {
  const { user, clearUser } = useContext(UserContext);


  const navigate = useNavigate();


  const handleClick = (route) => {
    if (route === "logout") {
      handleLogout();
      return;
    }
    navigate(route);
  };

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/login");
  };

  return (
    <div className="w-64 h-[calc(100vh-76px)] bg-white/70 backdrop-blur-2xl border-r border-slate-200/50 p-5 sticky top-[76px] z-20 transition-all duration-300 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
      <div className="flex flex-col items-center justify-center gap-3 mt-4 mb-8">
        {user?.profileImageUrl ? (
          <img
            src={user?.profileImageUrl || ""}
            alt="profile Image"
            className="w-20 h-20 bg-slate-200 rounded-full shadow-md border-[3px] border-white object-cover transition-transform duration-500 hover:scale-105 hover:shadow-lg"
          />) : (
          <CharAvatar
            fullName={user?.fullName}
            width="w-20"
            height="h-20"
            style="text-xl font-bold bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-700 shadow-sm border-2 border-white"
          />
        )}

        <h5 className="text-slate-800 font-bold tracking-tight leading-6">
          {user?.fullName || ""}
        </h5>
      </div>

      <div className="space-y-2">
        {SIDE_MENU_DATA.map((item, index) => (
          <button
            key={`menu_${index}`}
            className={`w-full flex items-center gap-4 text-sm font-semibold ${activeMenu === item.label ? "text-white bg-gradient-to-r from-indigo-500 to-purple-500 shadow-md shadow-indigo-500/20" : "text-slate-500 hover:bg-white/60 hover:text-indigo-600 hover:shadow-sm"
              } py-3.5 px-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-0.5 group`}
            onClick={() => handleClick(item.path)}
          >
            <item.icon className={`text-xl transition-transform duration-500 ${activeMenu === item.label ? "" : "group-hover:scale-110 group-hover:text-indigo-500 group-hover:-rotate-3"}`} />
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
