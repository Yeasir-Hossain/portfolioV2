import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import Wave from 'react-wavify';

const Footer = () => {
    const { theme } = useTheme()
    const [grad, setGrad] = useState("#000000")
    useEffect(() => {
        if (theme === "light") {
            setGrad("#000000")
        }
        else
            setGrad("#FFFFFF")
    }, [theme])

    return (
        <>
            <Wave mask="url(#mask)" fill={grad} className='relative z-10'>
                <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(90)">
                        <stop offset="0" stopColor="white" />
                        <stop offset="0.5" stopColor="black" />
                    </linearGradient>
                    <mask id="mask">
                        <rect x="0" y="0" width="2000" height="300" fill="url(#gradient)" />
                    </mask>
                </defs>
            </Wave>
            <div className='-mt-16 p-0 flex justify-center items-center absolute z-20 w-full'>
                <h2 className='text-2xl md:text-3xl font-semibold text-black'>All rights reserved by Yeasir Hossain - 2023</h2>
            </div>
        </>



    );
};

export default Footer;