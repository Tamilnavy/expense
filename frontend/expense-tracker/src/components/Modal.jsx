import React from "react";

const Modal = ({ children, isOpen, onClose, title }) => {

  if (!isOpen) return null;   // ✅ Prevent render if closed

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-300 p-4">

      <div className="relative w-full max-w-2xl w-full">

        <div className="relative bg-white/95 backdrop-blur-3xl rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] animate-scale-in overflow-hidden border border-slate-200/50">

          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100/60 rounded-t-3xl">

            <h3 className="text-xl font-extrabold text-slate-800 tracking-tight">
              {title}
            </h3>

            <button
              type="button"
              className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 flex items-center justify-center"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L13 13M13 1L1 13"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-4">
            {children}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Modal;