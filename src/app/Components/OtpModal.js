"use client";
import React, { useState, useRef } from 'react';
import 'react-phone-input-2/lib/style.css'; 
import axios from "axios";

export default function OtpModal({ isOpen, onClose, formData }) {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);

    if (!isOpen) return null;

    const handleKeyDown = (event, index) => {
        if (event.key === 'Backspace') {
            if (event.target.value === '') {
                if (index > 0) {
                    inputRefs.current[index - 1].focus();
                }
            }
        }
    };

    const handleChange = (event, index) => {
        const value = event.target.value;
        if (/^\d$/.test(value)) { 
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (index < inputRefs.current.length - 1) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const otpString = otp.join('');

        try {
            const response = await axios.post('https://travomile-backend.vercel.app/formauth/verify-otp', {
                identifier: formData.email ? formData.email : formData.phone,
                otp: otpString
            });

            if (response.status == 200) {
                alert("OTP verified");
                onClose
            } else {
                alert("OTP not valid");
            }
        } catch (error) {
            console.error("Error verifying OTP:", error);
            alert("An error occurred while verifying OTP");
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-[#FFFFFFBF] md:h-[100vh] h-full max-w-full md:rounded-[20px] md:p-[75px] p-[30px] md:max-w-md w-full relative">
                <div className='topbtnhader'>
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

                <div className="mt-4">
                    <div className='my-3'>
                        <h3 className='font-semibold'>Enter the 6 digit OTP sent to</h3>
                        <a className='text-[#1976D2] text-[12px]'>{formData.email ? formData.email : formData.phone}</a>
                    </div>
                    <div className="flex justify-center gap-2">
                        {Array.from({ length: 6 }, (_, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                ref={(el) => inputRefs.current[index] = el}
                                className="w-[45px] h-[50px] text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                onChange={(e) => handleChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                            />
                        ))}
                    </div>
                    <h5 className='text-[12px] text-[#8E8E8E] my-2'>Haven’t received it yet? Resend in 45 seconds</h5>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="w-full bg-yellow-500 mt-2 text-black font-bold py-2 mt-6 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}
