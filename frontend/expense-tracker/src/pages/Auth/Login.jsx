import React, { useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout';
import { useNavigate, Link } from 'react-router-dom';
import Input from '../../components/Inputs/Input';
import { validateEmail } from "../../utils/helper";
import axios from 'axios';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from "../../utils/apiPaths";
import { UserContext } from '../../context/userContext';
import { useContext } from "react";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { updateUser } = useContext(UserContext);


  const navigate = useNavigate();

  // handle Login Form Submit
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setError("Please enter your password");
      return;
    }

    setError("");

    //Login Api Call
    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password,
      });
      const { token, user } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(user);
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again");

      }
    }
  }

  return (
    <AuthLayout>
      <div className="flex flex-col w-full">
        <h3 className="text-[28px] font-bold text-slate-900 tracking-tight mb-2">Sign in to your account</h3>
        <p className="text-[15px] text-slate-500 mb-8 font-medium">Welcome back! Please enter your details.</p>

        <form onSubmit={handleLogin} className="space-y-5">
          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email Address"
            placeholder="john@example.com"
            type="text"
          />
          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Password"
            placeholder="Min 8 Characters"
            type="password"
          />

          {error && <p className="text-rose-500 text-sm font-semibold pb-1 animate-fade-up">{error}</p>}

          <div className="pt-4">
            <button type="submit" className="btn-primary w-full text-base py-3.5">
              Sign In
            </button>
          </div>

          <p className="text-[14px] text-slate-600 mt-6 text-center font-medium">
            Don't have an account?{" "}
            <Link className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors" to="/SignUp">
              Sign up for free
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  )
}

export default Login