"use client"
import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css'; 
import PhoneInput from 'react-phone-input-2';
import axios from 'axios';

export default function Modal({ isOpen, onClose,onUseOTP,onUseMobile,onOpenSignup,formData, setFormData,}) {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
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
            const response = await axios.post(`https://travomile-backend.vercel.app/formauth/login`, payload);
             if (response.status == 200) {
                alert("login verified");
                onClose
            } else {
                alert("wrong credentials");
            }
           
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
          const url ="https://travomile-backend.vercel.app/auth/facebook";
          window.location.href = url;
        } catch (error) {
          console.error('Error making the API call:', error);
        }
      };

    if (!isOpen) return null;
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-[#FFFFFFBF] w-[90%] max-w-[500px] h-auto rounded-[20px] md:p-[75px] p-[30px] relative">
                    <div className="topbtnhader">
                        <button
                            onClick={onClose}
                            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                        >
                            <img width={40} src='/assets/Close.svg' onClick={onClose} alt='closebtn' />
                        </button>
                    </div>
                    <div className="text-center">
                        <img src="/assets/logo-org.svg" alt="TravoMileLogo" className="mx-auto w-[150px] mb-4" />
                        <h2 className="text-2xl font-bold mb-4 text-[#787878]">Login</h2>
                    </div>
    
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="username@gmail.com"
                                className="w-full px-4 py-2 placeholder:text-[12px] border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>
    
                        <div className="mb-4">
                            <label className="block text-gray-700">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Create Password"
                                    className="w-full px-4 py-2 placeholder:text-[12px] border border-[#7E7E7E] bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-600 hover:text-gray-800"
                                >
                                    <img
                                        width={18}
                                        src={showPassword ? '/assets/eye-off.webp' : '/assets/eye.webp'}
                                        alt="toggle visibility"
                                    />
                                </button>
                            </div>
                        </div>
    
                        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
    
                        <div className="flex justify-between text-sm text-gray-600 mb-4">
                            <div>
                                <a href="#" className="hover:underline">Forgot Password?</a>
                            </div>
                            <div>
                                <a href="#" className="hover:underline" onClick={onUseOTP}>Use OTP Login</a>
                            </div>
                        </div>
    
                        <div className='text-center text-gray-600 my-5'>
                            <a href='#' onClick={onUseMobile}>
                                Login with Mobile No.
                            </a>
                        </div>
    
                        <button
                            type="submit"
                            className="w-full bg-yellow-500 text-black font-bold py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        >
                            Continue
                        </button>
    
                        <div>
                            <div className="text-center text-sm text-gray-600 my-4">
                                or continue with
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
                                <span>Don’t have an account yet?</span>
                                <button
                                 onClick={onOpenSignup}
                                    type="button"
                                    className="text-black font-bold hover:underline ml-1"
                                >
                                    Register for free
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
