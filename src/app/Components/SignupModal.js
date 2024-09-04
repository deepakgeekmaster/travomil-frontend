"use client"
import React, { useState } from "react";
import axios from "axios";

export default function SignupModal({ isOpen, onClose,onOpenLogin,onOpenOTP,formData, setFormData,  }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = formData.phone ? formData : { email: formData.email,password:formData.password};
            const response = await axios.post(`https://travomile-backend.vercel.app/formauth/signup`, payload, {
            withCredentials: true 
         });
          
            onOpenOTP();
            onClose();
        } catch (err) {
            setError('An error occurred. Please try again.');
            console.error('Error:', err);
        }
    };

    const googlelogin = async () => {
        try {
          const url = "https://travomile-backend.vercel.app/auth/google"; 
          window.location.href = url;
        } catch (error) {
          console.error('Error making the API call:', error);
        }
      };
    
      const facebookLogin = async () => {
        try {
          const url = "https://travomile-backend.vercel.app/auth/facebook";
          window.location.href = url;
        } catch (error) {
          console.error('Error making the API call:', error);
        }
      };
    
  if (!isOpen) return null;

  return (
    <>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#FFFFFFBF] w-[90%] max-w-[500px] h-auto rounded-[20px] md:p-[75px] p-[30px] relative">
            <div className="topbtnhader">
              <button
                onClick={onOpenLogin }
                className="absolute top-2 left-2 text-gray-400 hover:text-gray-600"
              >
                <img width={40} src="/assets/BackArrow.svg" alt="Back" />
              </button>
              <button
                onClick={onClose}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              >
                <img width={40} src="/assets/Close.svg" alt="Close" />
              </button>
            </div>

            <div className="text-center mb-6">
              <img
                src="/assets/logo-org.svg"
                alt="TravoMileLogo"
                className="mx-auto w-[150px] mb-4"
              />
              <p className="text-xs font-bold text-black">Create a Travomile Account</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Email Id</label>
                <input
                  type="email"
                  placeholder="username@gmail.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 placeholder:text-[12px] border border-[#7E7E7E] bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Create Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 placeholder:text-[12px] border border-[#7E7E7E] bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-600 hover:text-gray-800"
                  >
                    <img
                      width={18}
                      src={showPassword ? "/assets/eye-off.webp" : "/assets/eye.webp"}
                      alt={showPassword ? "Hide password" : "Show password"}
                    />
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <div className="space-y-2">
                  <div className="custom-checkbox">
                    <input type="checkbox" id="newsletter-checkbox" name="newsletter" />
                    <label htmlFor="newsletter-checkbox" className='flex items-center text-black text-[10px] whitespace-nowrap'>
                      Yes, I want to receive Special Offers and Travomile newsletters
                    </label>
                  </div>
                  <div className="custom-checkbox">
                    <input type="checkbox" id="newsletter-checkbox2" name="privacy" />
                    <label htmlFor="newsletter-checkbox2" className='flex items-center text-black text-[10px] whitespace-nowrap'>
                      By Continuing you agree to the Travomile <span className='text-[#004EE4]'>Terms & Service.</span>
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-black mt-4 font-bold py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Signup
              </button>
            </form>
            <div>
              <div className="text-center text-sm text-gray-600 my-4">
                Or Continue With
              </div>
              <div className="flex justify-center gap-[35px]">
                <button className="bg-white border border-gray-300 w-[60px] p-2 rounded-full hover:bg-gray-100">
                    <img src="/assets/flat-color-icons_google.svg" onClick={googlelogin} alt="Google" className="w-6 mx-auto" />
                </button>
                <button className="bg-white border border-gray-300 w-[60px] p-2 rounded-full hover:bg-gray-100">
                    <img src="/assets/bi_facebook.svg" onClick={facebookLogin} alt="Facebook" className="w-6 mx-auto" />
                </button>
            </div>
              <div className="text-center text-sm text-gray-600 my-5">
                <span>Already Have An Account?</span>
                <button
                  onClick={onOpenLogin }
                  type="button"
                  className="text-black font-bold hover:underline ml-1"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
