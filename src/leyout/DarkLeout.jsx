import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import navarrow from '../assets/img/nav-arrow.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Darkleout = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    function hendelWhite() {
        navigate('/')
        setLoading(true)
    }
    useEffect(() => {
        toast("Dark mode");
    }, [loading])

    return (
        <div className='flex flex-wrap flex-col bg-black text-white'>
            <header className='container shadow-sm shadow-white'>
                <nav className='max-w-[1400px] p-5 mx-auto flex justify-between '>
                    <h1 className='text-3xl font-bold cursor-pointer'>YOUR LOGO</h1>
                    <div className='flex items-center gap-8 font-semibold text-xl'>
                        <NavLink className={'flex items-end'} to='/'>Assets <img src={navarrow} alt="" /></NavLink>
                        <NavLink className={'flex items-end'} to='/'>Creators</NavLink>
                        <NavLink className={'flex items-end'} to='/'>Careers</NavLink>
                        <NavLink className={'flex items-end'} to='/'>Go Pro</NavLink>
                    </div>
                    <select className='text-xl text-white bg-black font-semibold'>
                        <option value="uz">uz</option>
                        <option value="ru">ru</option>
                        <option value="en">en</option>
                    </select>
                    {
                        loading ?
                            <div>
                                <div>
                                <button onClick={hendelWhite} className='border border-white py-2 px-6 rounded-full'>Dark Mode</button>
                                <ToastContainer
                                    position="top-center"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                    theme="dark"
                                    />
                            </div>
                            </div> :
                            <div>
                                <button onClick={hendelWhite} className='border border-white py-2 px-6 rounded-full'>Light Mode</button>
                                <ToastContainer
                                    position="top-center"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                    theme="dark"
                                    />
                            </div>
                    }
                </nav>
            </header>
            <div className='w-full'>
                {children}
            </div>
        </div>
    )
}

export default Darkleout
