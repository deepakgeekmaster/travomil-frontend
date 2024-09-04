"use client"
import Image from 'next/image'
import React, { useState } from 'react';
export default function Header({onOpenLoginModal }) {
   
    return (
        <>
            <div className={`overlay'`}></div>
            <div className='header_fixd bg-light fixed top-0 left-0 right-0 z-50'>
                <header className="flex justify-between items-center header-media bg-transparent mx-auto container h-[72px]">
                    <div className="flex items-center space-x-4 w-full justify-between px-[20px]">
                        <div className='hamburger_div relative w-[30px] lg:hidden block'>
                            <span className='bar absolute w-full h-[4px] bg-black rounded-2xl -top-[10px] barline1'></span>
                            <span className='bar absolute w-full h-[4px] bg-black rounded-2xl top-[10px] barline2'></span>
                            <span className='bar absolute w-[75%] h-[4px] bg-black rounded-2xl barline3'></span>
                        </div>
                        <div className='logo_div'>
                            <div className='logo_wrapper'>
                                <img src="/assets/logo-org.svg" alt="TravoMileLogo" className="w-36" />
                            </div>
                        </div>
                        <div className='userIconMob lg:hidden block' id="modal-switch" onClick={onOpenLoginModal}>
                            <div className='userImg w-[40px] h-[40px] rounded-full'>
                                <img src='assets/userIcon.svg' width={100} alt='user' />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 hidden lg:block">
                        <nav>
                            <ul className="flex space-x-6 mx-1">
                                <li className='spaceli'><a href="#" className="text-black hover:text-yellow-500 whitespace-nowrap">Destinations</a></li>
                                <li className='spaceli'><a href="#" className="text-black hover:text-yellow-500 whitespace-nowrap">AI Guide</a></li>
                                <li className='spaceli'><a href="#" className="text-black hover:text-yellow-500 whitespace-nowrap">Contact Us</a></li>
                                <li className='spaceli'><a href="#" className="text-black hover:text-yellow-500 whitespace-nowrap">Blogs</a></li>
                            </ul>
                        </nav>

                    </div>
                    <div className="flex items-center space-x-4 hidden lg:block">
                        <div className='right_btns flex items-center gap-[20px]'>
                            <div className='coin_token items-center gap-2 flex'>
                                <img src='/assets/coin.svg' width={25} alt='coinToken'></img>
                                <p className='balance_coin'>500</p>
                            </div>
                            <div className='notification relative'>
                                <img src='/assets/Bell.svg' alt='notification'></img>
                                <p className='badges absolute -top-[7px] -right-[7px] bg-red-700 w-[15px] h-[15px] rounded-full text-center text-[#fff] text-[10px] leading-[1.5]'>2</p>
                            </div>
                            <div className='allBtn_wrapper'>
                                <ul className='list-none mt-[-15px] flex gap-[5px]'>
                                    <li className='cursor-pointer'>
                                        <div className='btn_tab flex bg-white p-[6px] h-[54px] w-[160px] items-center gap-[5px] pt-[15px] rounded-b-lg'>
                                            <div className='icon_img'>
                                                <img src='/assets/ticket-flight.svg' width={27} alt='ticket'></img>
                                            </div>
                                            <div className='btnText_ticket'>
                                                <h6 className='text-[12px]'>My Trips</h6>
                                                <p className='text-[10px]'>
                                                    Manage your Bookings
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='cursor-pointer'>
                                        <div className='btn_tab flex h-[54px] w-[180px] bg-white p-[6px] items-center gap-[5px] pt-[15px] rounded-b-lg'>
                                            <div className='icon_img'>
                                                <img src='/assets/Download.svg' width={27} alt='ticket'></img>
                                            </div>
                                            <div className='btnText_ticket'>
                                                <h6 className='text-[12px]'>Download App</h6>
                                                <p className='text-[10px]'>
                                                    Referrals & Earn Free Ticket
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='cursor-pointer'>
                                        <div id="modal-switch" className='btn_tab h-[54px] w-[130px] flex bg-white p-[6px] items-center gap-[5px] pt-[15px] rounded-b-lg' onClick={onOpenLoginModal}>
                                            <div className='icon_img'>
                                                <img src='/assets/userIcon.svg' width={36} alt='ticket'></img>
                                            </div>
                                            <div className='btnText_ticket'>
                                                <h6 className='text-[16px] flex items-center'>Abhigyan <span><img width={20} className='rotate-180' src='/assets/Arrow.svg' alt='drop_down' /></span></h6>
                                            </div>
                                        </div>
                                    </li>
                                    <li>

                                    </li>
                                    <li>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

    </>
    );
}
