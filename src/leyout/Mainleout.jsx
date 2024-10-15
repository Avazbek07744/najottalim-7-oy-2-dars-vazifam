import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import navarrow from '../assets/img/nav-arrow.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Mainleout = ({ children, dark, data }) => {
    const [til, setTil] = useState('en')
    const darkMode = dark

    useEffect(() => {
        toast(darkMode ? "Dark mode" : "Light mode");
    }, [darkMode])

    const toggleMode = () => {
        data(!darkMode)
    }

    const texts = {
        uz: {
            ak: "Aktivlar",
            user: "Yaratuvchilar",
            hayot: "Karyera",
            go: "Go Pro",
            logo: "SIZNING LOGO",
            mode: darkMode ? "Yorug' rejim" : "Qorong'i rejim"
        },
        ru: {
            ak: "Активы",
            user: "Создатели",
            hayot: "Карьера",
            go: "Go Pro",
            logo: "ВАШ ЛОГО",
            mode: darkMode ? "Светлый режим" : "Темный режим"
        },
        en: {
            ak: "Assets",
            user: "Creators",
            hayot: "Careers",
            go: "Go Pro",
            logo: "YOUR LOGO",
            mode: darkMode ? "Light Mode" : "Dark Mode"
        }
    }

    const handlChange = (e) => {
        setTil(e.target.value);
    }

    return (
        <div className={`flex flex-wrap flex-col ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <header className={`container shadow-lg ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <nav className='max-w-[1400px] p-5 mx-auto flex justify-between'>
                    <h1 className='text-3xl font-bold cursor-pointer'>{texts[til].logo}</h1>
                    <div className='flex items-center gap-8 font-semibold text-xl'>
                        <NavLink className={'flex items-end'} to='/'>{texts[til].ak} <img src={navarrow} alt="" /></NavLink>
                        <NavLink className={'flex items-end'} to='/'>{texts[til].user}</NavLink>
                        <NavLink className={'flex items-end'} to='/'>{texts[til].hayot}</NavLink>
                        <NavLink className={'flex items-end'} to='/'>{texts[til].go}</NavLink>
                    </div>
                    <select
                        className={`text-xl font-semibold ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}
                        onChange={handlChange}
                        value={til}
                    >
                        <option value="uz">uz</option>
                        <option value="ru">ru</option>
                        <option value="en">en</option>
                    </select>
                    <div>
                        <button onClick={toggleMode} className={`py-2 px-6 rounded-full ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
                            {texts[til].mode}
                        </button>
                        <ToastContainer
                            position="top-center"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme={darkMode ? "dark" : "light"}
                        />
                    </div>
                </nav>
            </header>
            <div className='w-full'>
                {children}
            </div>
        </div>
    )
}

export default Mainleout
