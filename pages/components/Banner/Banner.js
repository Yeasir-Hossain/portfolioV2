import React from 'react';
import me from '../../../public/mypic.png'
import Image from 'next/image';
import style from './Banner.module.css'
import TypewriterComponent from 'typewriter-effect';
const Banner = () => {
    // bg-[url('/cool-background.svg')] 
    return (
        <div id='about'>
            <div class="text-black dark:text-white my-32">
                <div class="flex flex-col lg:flex-row-reverse items-center justify-between">
                    <div className="">
                        <div className="relative h-[70vw] w-[70vw] sm:h-[50vw] sm:w-[50vw] md:h-[30rem] md:w-[35rem] ">
                            {/* <Image
                                className='opacity-90'
                                style={{
                                    "WebkitFilter": "grayscale(60%)",
                                    "filter": "grayscale(60%)"
                                }}
                                src={me}
                                alt="Picture of the author"
                                fill
                            /> */}
                        </div>
                    </div>
                    <div className='w-full text-center sm:text-justify font-medium mt-3'>
                        <div>
                            <h2 className='text-4xl sm:text-6xl font-bold mb-4 text-white bg-blue-800 dark:bg-purple-800 p-1 rounded-md inline-block'>I'm a</h2>
                            <h2 className='text-4xl sm:text-6xl font-bold mb-4 flex flex-col sm:flex-row gap-2'>
                                {/* <span className={style.textcolor}></span> */}
                                <span>
                                    <TypewriterComponent
                                        options={{
                                            strings: ['MERNSTACK DEVELOPER'],
                                            autoStart: true,
                                            pauseFor: 5000,
                                            loop: true,
                                            cursor: ""
                                        }}
                                    />
                                </span>
                            </h2>
                            <h2 className='text-xl md:text-2xl'>Crafting digital wonders. MERN Stack Developer. Let's create something extraordinary!</h2>
                        </div>
                        <a href="https://github.com/Yeasir-Hossain" target="_blank" rel='noreferrer'>
                            <button className={`text-white mt-5 font-medium rounded-md text-base px-5 py-2.5 text-center ${style.button}`}>Git Hub
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;