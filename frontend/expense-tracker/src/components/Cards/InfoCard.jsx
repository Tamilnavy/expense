import React from 'react'

const InfoCard = ({ icon, label, value, color, delay = "0s" }) => {
  return <div
    className="flex items-center gap-6 bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:bg-white/90 transition-all duration-500 ease-out animate-fade-up group cursor-pointer"
    style={{ animationDelay: delay }}
  >
    <div className={`w-16 h-16 flex items-center justify-center text-[28px] text-white ${color} rounded-2xl shadow-lg border border-white/20 group-hover:-rotate-3 group-hover:scale-110 transition-all duration-500`}>
      {icon}
    </div>
    <div className="flex flex-col">
      <h6 className="text-sm font-semibold text-slate-500 mb-0.5">{label}</h6>
      <span className="text-[26px] font-extrabold text-slate-800 tracking-tight">${value}</span>
    </div>
  </div>
}

export default InfoCard