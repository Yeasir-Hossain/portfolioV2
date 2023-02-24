import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import style from '../../../styles/Navbar.module.css'
import { useMediaQuery } from 'react-responsive'
import Sidebar from './Sidebar';

const Navbar = () => {
    const { systemTheme, theme, setTheme } = useTheme()
    const [drop, setDrop] = useState(false);
    const isTablet = useMediaQuery({
        query: '(max-width: 768px)'
    })
    const dropdown = () => {
        drop ? setDrop(false) : setDrop(true)
    }
    const rendertheme = () => {
        const currenttheme = theme === 'system' ? systemTheme : theme
        const [mounted, setMounted] = useState(false);

        useEffect(() => {
            setMounted(true);
        }, []);

        if (!mounted) return null;
        if (currenttheme === 'dark') {
            return (
                <button type="button"
                    onClick={() => {
                        setTheme('light')
                    }}
                    className="text-white bg-gray-600 hover:bg-gray-700 font-medium rounded-lg text-sm px-3 py-2 text-center ml-2 mr-3 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                </button>
            )
        }
        else {
            return (
                <button type="button"
                    onClick={() => {
                        setTheme('dark')
                    }}
                    className="text-black bg-gray-100 hover:bg-gray-200 font-medium rounded-lg text-sm px-3 py-2 text-center ml-2 mr-3 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>
                </button>
            )
        }
    }
    return (
        <>
            <nav>
                <div className="bg-transparent mt-2 md:mt-0 fixed w-full top-0 left-0 z-50">
                    <div className="container flex flex-wrap items-center justify-between mx-auto max-w-[90rem]">
                        <div className="flex justify-between w-full md:w-auto md:order-2">
                            <button onClick={dropdown} data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none dark:text-gray-400 " aria-controls="navbar-cta" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                {
                                    drop ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                        : <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                }

                            </button>
                            <a href="https://drive.google.com/file/d/1gkWURnPqCspFmpbjdpcsWcCZSDhnpWag/view?usp=share_link" target="_blank" rel="noreferrer">
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 hidden md:block  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-purple-700 dark:hover:bg-purple-800">Resume</button>
                            </a>
                            {rendertheme()}
                        </div>
                        <div className={`items-center justify-between hidden w-full md:flex md:w-auto md:order-1`}>
                            <ul className={`flex flex-col p-4 border-0 md:flex-row md:space-x-8 md:mt-0 text-sm md:text-base md:font-medium ${style.links}`}>
                                <li>
                                    <a href="#about" className="block py-2 pl-3 pr-4 text-gray-700 transition duration-500 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Me</a>
                                </li>
                                <li>
                                    <a href="#skills" className="block py-2 pl-3 pr-4 text-gray-700 transition duration-500 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">Skills</a>
                                </li>
                                <li>
                                    <a href="#experience" className="block py-2 pl-3 pr-4 text-gray-700 transition duration-500 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">Experience</a>
                                </li>
                                <li>
                                    <a href="#projects" className="block py-2 pl-3 pr-4 text-gray-700 transition duration-500 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
                                </li>
                                <li>
                                    <a href="#contact" className="block py-2 pl-3 pr-4 text-gray-700 transition duration-500 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">Contact</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <button type="button" className="text-white bg-blue-700 block md:hidden hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:transition-all duration-100">Resume</button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {
                    isTablet && drop && <Sidebar dropdown={dropdown} drop={drop}></Sidebar>
                }
            </nav >

        </>


    );
};

export default Navbar;