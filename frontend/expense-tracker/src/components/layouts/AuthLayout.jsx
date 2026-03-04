import React from 'react';
import { LuTrendingUp, LuShieldCheck } from "react-icons/lu";

const AuthLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-white font-sans">
            {/* Left Side: Professional Branding (Hidden on Mobile) */}
            <div className="hidden lg:flex w-[45vw] bg-slate-50 relative flex-col justify-between p-12 lg:p-16 border-r border-slate-200">

                <div className="relative z-10">
                    <h2 className="text-2xl font-bold text-slate-800 tracking-tight flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-sm">
                            <LuTrendingUp className="text-xl" />
                        </div>
                        Expense Tracker
                    </h2>
                </div>

                <div className="relative z-10 max-w-lg mb-12">
                    <h1 className="text-4xl font-extrabold text-slate-900 leading-[1.2] mb-6">
                        Manage your finances with clarity and precision.
                    </h1>
                    <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                        Join professionals who trust our platform to track expenses, analyze spending trends, and secure their financial future.
                    </p>

                    <div className="space-y-5">
                        <FeatureItem icon={<LuTrendingUp size={20} />} text="Advanced Analytics & Real-time Reporting" />
                        <FeatureItem icon={<LuShieldCheck size={20} />} text="Bank-grade Security Protocols" />
                    </div>
                </div>

                <div className="relative z-10 text-sm text-slate-500 font-medium">
                    © 2026 Expense Tracker. All rights reserved.
                </div>
            </div>

            {/* Right Side: Clean Form */}
            <div className="w-full lg:w-[55vw] flex items-center justify-center p-6 sm:p-12 lg:p-24 bg-white relative">
                <div className="w-full max-w-md relative z-10">
                    <div className="lg:hidden mb-8 flex flex-col items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center shadow-sm">
                            <LuTrendingUp className="text-white text-xl" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Expense Tracker</h2>
                    </div>

                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

const FeatureItem = ({ icon, text }) => (
    <div className="flex items-center gap-4 text-slate-700">
        <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 border border-indigo-100">
            {icon}
        </div>
        <span className="font-medium text-[15px] tracking-tight">{text}</span>
    </div>
)

export default AuthLayout;