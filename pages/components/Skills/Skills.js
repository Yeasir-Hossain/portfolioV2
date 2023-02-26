import React from 'react';
import SectionHeading from '../Shared/SectionHeading';
import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3, FaReact, FaNodeJs, FaCcStripe } from 'react-icons/fa'
import { SiJavascript, SiTailwindcss, SiMongodb, SiFirebase } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { BsFillBootstrapFill } from 'react-icons/bs'


const Skills = () => {
    return (
        <div id='skills'>
            <SectionHeading heading={"Skills"} />
            <div className='flex flex-wrap gap-2 text-6xl md:text-[85px] justify-evenly items-center my-6'>
                <div>
                    <AiFillHtml5 />
                </div>
                <div>
                    <FaCss3 />
                </div>
                <div>
                    <SiJavascript />
                </div>
                <div>
                    <FaReact />
                </div>
                <div>
                    <TbBrandNextjs />
                </div>
                <div>
                    <SiTailwindcss />
                </div>
                <div>
                    <BsFillBootstrapFill />
                </div>
                <div>
                    <FaNodeJs />
                </div>
                <div>
                    <SiMongodb />
                </div>
                <div>
                    <SiFirebase />
                </div>
            </div>


        </div>
    );
};

export default Skills;