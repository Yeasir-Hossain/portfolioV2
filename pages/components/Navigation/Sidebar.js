import React from 'react';
import styles from '../../../styles/Navbar.module.css'

const Sidebar = ({ dropdown, drop }) => {
    return (
        <div className={`top-0 left-0 bg-gray-900 text-white fixed h-full z-40 transition-all ease-in-out duration-300 ${drop ? "translate-x-0 " : "translate-x-full"
            }`}>
            <ul className="flex flex-col pl-2 pr-10 border-0 text-base font-medium mt-12">
                <li onClick={dropdown}>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Me</a>
                </li>
                <li onClick={dropdown}>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">My skills</a>
                </li>
                <li onClick={dropdown}>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
                </li>
                <li onClick={dropdown}>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">Contact</a>
                </li>
            </ul>
            <a href="#">
                <button onClick={dropdown} type="button" className="text-white w-full bg-blue-700 block hover:bg-blue-800 font-medium text-sm px-5 py-2.5 mt-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Resume</button>
            </a>
        </div>
    );
};

export default Sidebar;