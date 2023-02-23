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
                            <Image
                                src={me}
                                alt="Picture of the author"
                                fill
                            />
                        </div>
                    </div>
                    <div className='w-full text-center sm:text-justify font-medium mt-3'>
                        <div>
                            <h2 className='text-4xl sm:text-6xl font-bold mb-4 text-white bg-blue-800 dark:bg-purple-800 p-1 rounded-lg inline-block'>I'm a</h2>
                            <h2 className='text-4xl sm:text-6xl font-bold mb-4 flex gap-2'><span className={style.textcolor}>FULLSTACK</span>
                                <span>
                                    <TypewriterComponent
                                        options={{
                                            strings: ['DEVELOPER'],
                                            autoStart: true,
                                            pauseFor: 5000,
                                            loop: true,
                                            cursor: ""
                                        }}
                                    />
                                </span>
                            </h2>
                            <h2 className='text-xl md:text-2xl'>Punctual, self-taught, persistent, genuine, patient, consistent, fearless</h2>
                            <h2 className='md:text-xl'>I like to communicate with people. I can adapt myself to any environment. I can work under pressure.</h2>
                            <h2 className='md:text-xl'>"People don't care about what we say, they care about what we build".<br /> So I am always energetic to create something extraordinary.</h2>
                        </div>
                        <a href="https://github.com/Yeasir-Hossain" target="_blank" rel='noreferrer'>
                            <button className={`text-white mt-5 font-medium rounded-lg text-base px-5 py-2.5 text-center ${style.button}`}>Git Hub
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;