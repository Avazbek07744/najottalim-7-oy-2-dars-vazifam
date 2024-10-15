import React, { useState } from 'react';
import nav from '../assets/img/navigate.svg';
import arrow from '../assets/img/arrow.svg';
import iphone from '../assets/img/iphone.png';
import arrow2 from '../assets/img/arrow2.svg';

const Home = ({ dark }) => {
    const darkMode = dark

    return (
        <div className={`navbar container max-w-[1400px] mx-auto mt-6 rounded-[52px] p-32 pb-5 mb-20 ${darkMode ? 'bg-[#1a1a1a] text-white' : 'bg-[#E4F7FF] text-black'}`}>
            <div className='flex items-center justify-between'>
                <div>
                    <p className={`mb-5 ${darkMode ? 'text-[#bbbbbb]' : 'text-[#676767]'}`}>A SECURITY SOLUTION</p>
                    <h1 className={`font-bold text-5xl w-[540px] mb-6 ${darkMode ? 'text-[#ffffff]' : 'text-[#00085E]'}`}>Keep track of your loved ones in real time!</h1>
                    <hr className='mb-4' />
                    <div className='mb-[71px] flex gap-[30px]'>
                        <img src={nav} width={49} alt="" />
                        <p className={`w-[330px] font-semibold ${darkMode ? 'text-[#cccccc]' : 'text-[#00085E]'}`}>
                            We noticed the high level of insecurity in the world, and we thought of how technology could be used to combat these insecurities.
                        </p>
                    </div>
                    <h1 className='mb-2 text-[40px] font-bold'>Join Our Waitlist!</h1>
                    <p className={`mb-8 font-semibold ${darkMode ? 'text-[#ffffff]' : 'text-[#00085E]'}`}>
                        Be the first to get notified when the product is ready!
                    </p>
                    <form className={`w-[527px] p-2 ps-6 rounded-full flex justify-between ${darkMode ? 'bg-[#333333]' : 'bg-white'}`}>
                        <input className={`border-none outline-none ${darkMode ? 'bg-[#333333] text-white' : 'text-black'}`} type="text" placeholder='Your email address' />
                        <button className={`p-2 px-4 rounded-full ${darkMode ? 'bg-[#ffffff] text-black' : 'bg-[#0B56E8] text-white'}`}>Join List!</button>
                    </form>
                </div>
                <div className={`p-1 rounded-full border-[6px] w-max ms-20 mt-96 ${darkMode ? 'border-white' : 'border-black'}`}></div>
                <div className='flex flex-col'>
                    <img src={iphone} width={452} height={546} alt="" />
                </div>
                <div className={`p-1 rounded-full border-[6px] w-max mb-[520px] ${darkMode ? 'border-white' : 'border-black'}`}></div>
            </div>
            <div className='flex justify-end'>
                <button className={`w-[55px] rounded-full py-4 p-3 ${darkMode ? 'bg-white' : 'bg-black'}`}>
                    {
                        darkMode ?
                            <img src={arrow2} alt="" /> : <img src={arrow} alt="" />
                    }
                </button>
            </div>
        </div>
    );
};

export default Home;
