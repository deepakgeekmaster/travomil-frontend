"use client"
import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css'; 
import PhoneInput from 'react-phone-input-2';
import axios from 'axios';

export default function MobileModal({ isOpen, onClose,formData, setFormData,onOpenOTP }) {
     const [error, setError] = useState('');

    if (!isOpen) return null;


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
            const payload = formData.email ? formData : { phone: formData.phone };

            const response = await axios.post(`https://travomile-backend.vercel.app/smsotp`, payload, {
                withCredentials: true 
            });
            console.log('Success:', response.data);
            console.log('Opening OTP Modal');
            onOpenOTP();
    
            onClose(); 
        } catch (err) {
            setError('An error occurred. Please try again.');
            console.error('Error:', err);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-[#FFFFFFBF] w-[90%] max-w-[500px] h-auto rounded-[20px] md:p-[75px] p-[30px] relative">
                    <div className="topbtnhader">
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                    >
                        <img width={40} src='/assets/Close.svg' alt='closebtn' />
                    </button>
                </div>
                <div className="text-center">
                    <img src="/assets/logo-org.svg" alt="TravoMileLogo" className="mx-auto w-[150px] mb-4" />
                    <h2 className="text-2xl font-bold mb-4 text-[#787878]">Login</h2>
                </div>

                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Mobile Number</label>
                        <PhoneInput
                        country={'in'}
                        value={formData.phone}
                        onChange={(phone) => setFormData(prevState => ({
                            ...prevState,
                            phone
                        }))}
                        inputClass={`!w-full px-4 py-2 placeholder:text-[12px] border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                        />
                    </div>
                </form>

                <button
                    onClick={handleSubmit}
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
                            <img src="/assets/flat-color-icons_google.svg" alt="Google" className="w-6 mx-auto" />
                        </button>
                        <button className="bg-white border border-gray-300 w-[60px] p-2 rounded-full hover:bg-gray-100">
                            <img src="/assets/bi_facebook.svg" alt="Facebook" className="w-6 mx-auto" />
                        </button>
                    </div>
                    <div className="text-center text-sm text-gray-600 my-5">
                        <span>Don’t have an account yet?</span>
                        <button
                            type="button"
                            className="text-black font-bold hover:underline ml-1"
                        >
                            Register for free
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
