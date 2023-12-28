import React from 'react';
import SectionHeading from '../Shared/SectionHeading';
import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3, FaReact, FaNodeJs, FaCcStripe } from 'react-icons/fa'
import { SiJavascript, SiTailwindcss, SiMongodb, SiFirebase } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { BsFillBootstrapFill } from 'react-icons/bs'


const Skills = () => {
    return (
        <div id='skills' className='mb-10'>
            <SectionHeading heading={"Skills"} />
            <div className='flex flex-wrap gap-2 text-6xl md:text-[85px] justify-evenly items-center my-6'>
                <div>
                    <AiFillHtml5 className='hover:text-[#E34C26] transition-all duration-500' />
                </div>
                <div>
                    <FaCss3 className='hover:text-[#2965f1] transition-all duration-500' />
                </div>
                <div>
                    <SiJavascript className='hover:text-[#f0db4f] transition-all duration-500' />
                </div>
                <div>
                    <FaReact className='hover:text-[#57d2f3] transition-all duration-500' />
                </div>
                <div>
                    <TbBrandNextjs />
                </div>
                <div>
                    <SiTailwindcss className='hover:text-[#38bdf8] transition-all duration-500' />
                </div>
                <div>
                    <BsFillBootstrapFill className='hover:text-[#7b11f3] transition-all duration-500' />
                </div>
                <div>
                    <FaNodeJs className='hover:text-[#509941] transition-all duration-500' />
                </div>
                <div>
                    <SiMongodb className='hover:text-[#409737] transition-all duration-500' />
                </div>
                <div>
                    <SiFirebase className='hover:text-[#f7c328] transition-all duration-500' />
                </div>
            </div>


        </div>
    );
};

export default Skills;