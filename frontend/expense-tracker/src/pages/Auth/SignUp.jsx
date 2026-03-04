import React, { useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout';
import { useNavigate, Link } from 'react-router-dom';
import Input from '../../components/Inputs/Input';
import { validateEmail } from "../../utils/helper";
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector';
import axios from 'axios';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { UserContext } from '../../context/userContext';
import uploadImage from '../../utils/uploadImage';




const SignUp = () => {
  const [profilepic, setprofilepic] = useState(null);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);


  const { updateUser } = React.useContext(UserContext);
  const navigate = useNavigate();
  // Handle signUp form submit
  const handleSignup = async (e) => {
    e.preventDefault();

    let profileImageUrl = "";

    if (!fullname) {
      setError("Please enter your name");
      return;
    }

    if (!validateEmail(email)) {
      setError("please enter a valid email address");
      return;
    }

    if (!password) {
      setError("please enter the password");
      return;
    }

    setError("");

    // SignUp API call
    try {

      // Upload image if present
      if (profilepic) {
        const imageUploadRes = await uploadImage(profilepic);
        profileImageUrl = imageUploadRes.imageUrl || "";
      }

      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        fullName: fullname,
        email,
        password,
        profileImageUrl
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
  };


  return (
    <AuthLayout>
      <div className="flex flex-col w-full">
        <h3 className="text-[28px] font-bold text-slate-900 tracking-tight mb-2">Create an account</h3>
        <p className="text-[15px] text-slate-500 mb-8 font-medium">Join us today by entering your details below.</p>

        <form onSubmit={handleSignup} className="space-y-5">
          <ProfilePhotoSelector image={profilepic} setImage={setprofilepic} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <Input
              value={fullname}
              onChange={({ target }) => setFullname(target.value)}
              label="Full Name"
              placeholder="John Doe"
              type="text"
            />
            <Input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              label="Email Address"
              placeholder="john@example.com"
              type="text"
            />

            <div className="col-span-1 md:col-span-2">
              <Input
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                label="Password"
                placeholder="Min 8 Characters"
                type="password"
              />
            </div>
          </div>

          {error && <p className="text-rose-500 text-sm font-semibold pb-1 animate-fade-up">{error}</p>}

          <div className="pt-4">
            <button type="submit" className="btn-primary w-full text-base py-3.5">
              Create Account
            </button>
          </div>

          <p className="text-[14px] text-slate-600 mt-6 text-center font-medium">
            Already have an account?{" "}
            <Link className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors" to="/Login">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  )
}

export default SignUp