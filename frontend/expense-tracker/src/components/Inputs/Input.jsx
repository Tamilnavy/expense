import React from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = ({ value, onChange, placeholder, label, type }) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    }
    return (
        <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-slate-700">{label}</label>

            <div className="input-box">
                <input
                    type={type == 'password' ? (showPassword ? 'text' : 'password') : type}
                    placeholder={placeholder}
                    className="w-full bg-transparent outline-none text-slate-800 placeholder:text-slate-400 font-medium"
                    value={value}
                    onChange={(e) => onChange(e)}
                />

                {type === "password" && (
                    <div className="flex items-center">
                        {showPassword ? (
                            <FaRegEye
                                size={20}
                                className="text-indigo-500 hover:text-indigo-700 transition-colors cursor-pointer"
                                onClick={togglePassword}

                            />
                        ) : (
                            <FaRegEyeSlash
                                size={20}
                                className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                                onClick={togglePassword}

                            />
                        )}
                    </div>
                )}


            </div>
        </div>
    )
}

export default Input