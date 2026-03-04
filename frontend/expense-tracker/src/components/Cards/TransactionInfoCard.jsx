import React from "react";
import { LuUtensils } from "react-icons/lu";
import {
  LuTrendingUp,
  LuTrendingUpDown,
  LuTrash2,
} from "react-icons/lu";

const TransactionInfoCard = ({
  icon,
  date,
  amount,
  type,
  hideDeleteBtn,
  title,
  onDelete,   // ✅ added
  onEdit,     // ✅ added
}) => {
  const getAmountStyles = () => { return type === "income" ? "bg-green-50 text-green-500" : "bg-red-50 text-red-500" };
  return (
    <div className="group relative flex items-center justify-between gap-4 mt-3 p-4 bg-slate-50/50 hover:bg-white rounded-2xl border border-slate-100/60 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 animate-fade-up">

      <div className="w-12 h-12 flex items-center justify-center text-xl text-indigo-500 bg-white border border-slate-200/50 rounded-full shadow-sm group-hover:bg-indigo-50/50 group-hover:scale-110 transition-all duration-500">
        {icon ? (
          <img src={icon} alt={title} className="w-5 h-5 drop-shadow-sm" />
        ) : (
          <LuUtensils />
        )}
      </div>

      <div className="flex-1 flex items-center justify-between">
        <div>
          <p className="text-[15px] text-slate-800 font-bold tracking-tight">{title}</p>
          <p className="text-xs text-slate-500 font-medium mt-0.5">{date}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {!hideDeleteBtn && (
          <div className="flex items-center gap-2 mr-2">
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 cursor-pointer"
              onClick={onEdit}>
              <LuTrendingUp size={14} />
              Edit
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 cursor-pointer"
              onClick={onDelete}>
              <LuTrash2 size={14} />
              Delete
            </button>
          </div>
        )}

        <div
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl shadow-sm group-hover:shadow transition-shadow duration-300 ${getAmountStyles()}`}>
          <h6 className="text-sm font-bold tracking-tight">
            {type === "income" ? "+" : "-"}${amount}
          </h6>

          {type === "income" ? (
            <LuTrendingUp size={16} />
          ) : (
            <LuTrendingUpDown size={16} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionInfoCard;
