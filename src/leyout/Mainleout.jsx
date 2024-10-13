import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import navarrow from '../assets/img/nav-arrow.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Mainleout = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    function hendelMode(e) {
        e.preventDefault()
        navigate('/DarkHome')
        setLoading(false)
    }

    useEffect(() => {
        toast("Light mode");
    }, [loading])

    return (
        <div className='flex flex-wrap flex-col'>
            <header className='container shadow-lg'>
                <nav className='max-w-[1400px] p-5 mx-auto flex justify-between'>
                    <h1 className='text-3xl font-bold cursor-pointer'>YOUR LOGO</h1>
                    <div className='flex items-center gap-8 font-semibold text-xl'>
                        <NavLink className={'flex items-end'} to='/'>Assets <img src={navarrow} alt="" /></NavLink>
                        <NavLink className={'flex items-end'} to='/'>Creators</NavLink>
                        <NavLink className={'flex items-end'} to='/'>Careers</NavLink>
                        <NavLink className={'flex items-end'} to='/'>Go Pro</NavLink>
                    </div>
                    <select className='text-xl font-semibold'>
                        <option value="uz">uz</option>
                        <option value="ru">ru</option>
                        <option value="en">en</option>
                    </select>
                    {
                        loading ? <div>
                            <button onClick={hendelMode} className='bg-black text-white py-2 px-6 rounded-full'>Dark Mode</button>
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
                                theme="light"
                            />
                        </div> :
                            <button className='border border-black py-2 px-6 rounded-full'>Light Mode</button>
                    }
                </nav>
            </header>
            <div className='w-full'>
                {children}
            </div>
        </div>
    )
}

export default Mainleout
